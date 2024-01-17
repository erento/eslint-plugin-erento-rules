import {AST_NODE_TYPES, Parameter} from '@typescript-eslint/types/dist/generated/ast-spec';
import {RuleFixer, SourceCode} from '@typescript-eslint/utils/dist/ts-eslint';
import {createRule} from '../utils/create-rule';

export const RULE_NAME = 'injectable-order';
export type MessageIds = 'wrongOrder';
type Options = readonly unknown [];

// Readonly section is not needed for public/protected/private as it will always be sorted behind it by alphabetic sorting.
interface VisibilitySections {
    visibilityEmpty: Parameter[];
    visibilityEmptyReadonly: Parameter[];
    visibilityPublic: Parameter[];
    visibilityPublicReadonly: Parameter[];
    visibilityProtected: Parameter[];
    visibilityProtectedReadonly: Parameter[];
    visibilityPrivate: Parameter[];
    visibilityPrivateReadonly: Parameter[];
}

const allowedDecorators = new Set([
    // the list is intentionally lowercase
    'component',
    'directive',
    'injectable',
    'pipe',
]);

const SEPARATOR = '|';

const hasAllowedDecorator = (componentName: string) => allowedDecorators.has(componentName.toLowerCase());

const getParamName = (param: any, withAttributes: boolean = false) => {
    const attributes = withAttributes ? getParamAttributes(param) : '';
    const paramName = param.parameter ? param.parameter.name : param.name;

    return `${attributes} ${paramName}`.trim();
};

const sortParam = (a: Parameter, b: Parameter) => {
    const nameA = getParamName(a);
    const nameB = getParamName(b);

    return nameA > nameB ? 1 : -1;
};

const getConcatenatedListAsString = (list: VisibilitySections) => {
    const parameters = [
        ...list.visibilityEmpty.sort(sortParam),
        ...list.visibilityEmptyReadonly.sort(sortParam),
        ...list.visibilityPublic.sort(sortParam),
        ...list.visibilityPublicReadonly.sort(sortParam),
        ...list.visibilityProtected.sort(sortParam),
        ...list.visibilityProtectedReadonly.sort(sortParam),
        ...list.visibilityPrivate.sort(sortParam),
        ...list.visibilityPrivateReadonly.sort(sortParam),
    ];

    return stringify(
        parameters.map(param => getParamName(param, true)),
    );
};

const getEmptyVisibilitySections = (): VisibilitySections => {
    return {
        visibilityEmpty: [],
        visibilityEmptyReadonly: [],
        visibilityPublic: [],
        visibilityPublicReadonly: [],
        visibilityProtected: [],
        visibilityProtectedReadonly: [],
        visibilityPrivate: [],
        visibilityPrivateReadonly: [],
    };
};

const getParamAttributes = (param: Parameter) => {
    let accessibility = '';
    let isReadonly = false;

    if (param.type === AST_NODE_TYPES.TSParameterProperty) {
        if (param.accessibility !== undefined) {
            accessibility = param.accessibility;
        }
        if (param.readonly) {
            isReadonly = true;
        }
    }

    return `${accessibility}${isReadonly ? ' readonly' : ''}`.trim();
};

const assignNodesToSections = (visibilitySections: VisibilitySections, param: Parameter) => {
    if (param.type === AST_NODE_TYPES.TSParameterProperty) {
        if (param.accessibility === undefined && param.readonly) {
            visibilitySections.visibilityEmptyReadonly.push(param);

            return visibilitySections;
        }
        switch (param.accessibility) {
            case 'private':
                if (param.readonly) {
                    visibilitySections.visibilityPrivateReadonly.push(param);
                } else {
                    visibilitySections.visibilityPrivate.push(param);
                }
                break;

            case 'protected':
                if (param.readonly) {
                    visibilitySections.visibilityProtectedReadonly.push(param);
                } else {
                    visibilitySections.visibilityProtected.push(param);
                }
                break;

            case 'public':
            default:
                if (param.readonly) {
                    visibilitySections.visibilityPublicReadonly.push(param);
                } else {
                    visibilitySections.visibilityPublic.push(param);
                }
                break;
        }
    }
    if (param.type === AST_NODE_TYPES.Identifier) {
        visibilitySections.visibilityEmpty.push(param);
    }

    return visibilitySections;
};

const stringify = (params: string[]) => params.join(SEPARATOR);

export const injectableOrderRule = createRule<Options, MessageIds>({
    name: RULE_NAME,
    meta: {
        docs: {
            description: 'Enforces ASC alphabetical order for all constructor parameters on ' +
                '@Injectable(), @Component() etc. for easy visual scanning',
            recommended: 'stylistic',
            requiresTypeChecking: false,
        },
        fixable: 'code',
        messages: {
            wrongOrder: 'Constructor parameters should be sorted in ASC alphabetical order.',
        },
        type: 'suggestion',
        schema: [],
    },
    defaultOptions: [],
    create: context => {
        return {
            ClassDeclaration (node) {
                const isDecorated = (node.decorators || []).some(
                    (decorator: any) => decorator.type === AST_NODE_TYPES.Decorator &&
                        decorator.expression.type === AST_NODE_TYPES.CallExpression &&
                        decorator.expression.callee.type === AST_NODE_TYPES.Identifier &&
                        hasAllowedDecorator(decorator.expression.callee.name),
                );
                if (!isDecorated) {
                    return;
                }

                const constructorNode = node.body.body.find(
                    (bodyNode: any) => bodyNode.type === AST_NODE_TYPES.MethodDefinition &&
                        bodyNode.key.type === AST_NODE_TYPES.Identifier &&
                        bodyNode.key.name === 'constructor',
                );
                if (!constructorNode) {
                    return;
                }

                if (
                    constructorNode.type === AST_NODE_TYPES.MethodDefinition &&
                    constructorNode.key.type === AST_NODE_TYPES.Identifier
                ) {
                    if (constructorNode.value.params.length === 0) {
                        return;
                    }
                    const unorderedNodes = constructorNode
                        .value
                        .params
                        .map((current: any, index: number, list: any[]): [Parameter, Parameter] => [current, list[index + 1]])
                        .find(([currentNode, nextNode]: [any, any]) => {
                            if (!nextNode) {
                                return false;
                            }
                            const originalParams: string[] = [
                                getParamName(currentNode, true),
                                getParamName(nextNode, true),
                            ];
                            const visibilitySections: VisibilitySections = assignNodesToSections(
                                assignNodesToSections(getEmptyVisibilitySections(), currentNode),
                                nextNode,
                            );

                            return stringify(originalParams) !== getConcatenatedListAsString(visibilitySections);
                        });
                    if (!unorderedNodes) {
                        return;
                    }
                    const sourceCode: SourceCode = context.getSourceCode();
                    const [unorderedNode, unorderedNextNode] = unorderedNodes;
                    context.report({
                        node: unorderedNode,
                        messageId: 'wrongOrder',
                        fix: (fixer: RuleFixer) => [
                            fixer.replaceText(unorderedNode, sourceCode.getText(unorderedNextNode)),
                            fixer.replaceText(unorderedNextNode, sourceCode.getText(unorderedNode)),
                        ],
                    });
                }
            },
        };
    },
});
