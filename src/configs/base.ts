export const baseConfig = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@angular-eslint',
        '@stylistic',
        '@stylistic/js',
        '@typescript-eslint',
        'eslint-plugin-import',
        'eslint-plugin-jsdoc',
        'eslint-plugin-prefer-arrow',
        'eslint-plugin-unicorn',
        'import-newlines',
    ],
    rules: {
        '@angular-eslint/component-class-suffix': 'error',
        '@angular-eslint/component-max-inline-declarations': 'error',
        '@angular-eslint/component-selector': [
            'error',
            {
                type: [
                    'attribute',
                    'element',
                ],
                prefix: 'app',
                style: 'kebab-case',
            },
        ],
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': 'error',
        '@angular-eslint/directive-selector': [
            'error',
            {
                type: [
                    'attribute',
                    'element',
                ],
                prefix: 'app',
                style: 'camelCase',
            },
        ],
        '@angular-eslint/no-attribute-decorator': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-empty-lifecycle-method': 'error',
        '@angular-eslint/no-forward-ref': 'error',
        '@angular-eslint/no-host-metadata-property': 'error',
        '@angular-eslint/no-input-prefix': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-lifecycle-call': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/pipe-prefix': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/relative-url-prefix': 'error',
        '@angular-eslint/require-localize-metadata': 'error',
        '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        '@stylistic/array-bracket-newline': [
            'error',
            'consistent',
        ],
        '@stylistic/array-bracket-spacing': 'error',
        '@stylistic/array-element-newline': [
            'error',
            'consistent',
        ],
        '@stylistic/arrow-parens': [
            'error',
            'as-needed',
        ],
        '@stylistic/arrow-spacing': 'error',
        '@stylistic/js/block-spacing': 'error',
        '@stylistic/brace-style': [
            'error',
            '1tbs',
        ],
        '@stylistic/comma-dangle': [
            'error',
            'always-multiline',
        ],
        '@stylistic/comma-spacing': 'error',
        '@stylistic/comma-style': 'error',
        '@stylistic/computed-property-spacing': 'error',
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': 'error',
        '@stylistic/func-call-spacing': 'error',
        '@stylistic/function-call-argument-newline': [
            'error',
            'consistent',
        ],
        '@stylistic/function-paren-newline': [
            'error',
            'multiline-arguments',
        ],
        '@stylistic/generator-star-spacing': [
            'error',
            {
                before: true,
                after: false,
            },
        ],
        '@stylistic/js/indent': [
            'error',
            4,
            {
                MemberExpression: 1,
                VariableDeclarator: 'first',
                SwitchCase: 1,
            },
        ],
        '@stylistic/key-spacing': 'error',
        '@stylistic/keyword-spacing': 'error',
        '@stylistic/linebreak-style': [
            'error',
            'unix',
        ],
        '@stylistic/lines-around-comment': ['error'],
        '@stylistic/lines-between-class-members': [
            'error',
            {
                enforce: [
                    {
                        blankLine: 'never',
                        prev: 'field',
                        next: 'field',
                    },
                    {
                        blankLine: 'always',
                        prev: 'method',
                        next: 'method',
                    },
                ],
            },
        ],
        '@stylistic/max-len': [
            'error',
            {
                code: 140,
                ignoreComments: true,
            },
        ],
        '@stylistic/max-statements-per-line': ['error'],
        '@stylistic/member-delimiter-style': ['error'],
        '@stylistic/multiline-ternary': [
            'error',
            'always-multiline',
        ],
        '@stylistic/newline-per-chained-call': [
            'error',
            {ignoreChainWithDepth: 2},
        ],
        '@stylistic/no-confusing-arrow': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-floating-decimal': 'error',
        '@stylistic/no-mixed-operators': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        '@stylistic/no-tabs': 'error',
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/object-curly-newline': [
            'error',
            {
                ObjectExpression: {
                    consistent: true,
                },
                ObjectPattern: {
                    consistent: true,
                },
                ExportDeclaration: {
                    consistent: true,
                },
            },
        ],
        '@stylistic/object-curly-spacing': 'error',
        '@stylistic/operator-linebreak': ['error', 'after'],
        '@stylistic/padded-blocks': ['error', 'never'],
        '@stylistic/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'function',
            },
        ],
        '@stylistic/quote-props': [
            'error',
            'consistent-as-needed',
        ],
        '@stylistic/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        '@stylistic/rest-spread-spacing': 'error',
        '@stylistic/semi': 'error',
        '@stylistic/semi-spacing': 'error',
        '@stylistic/semi-style': 'error',
        '@stylistic/space-before-blocks': 'error',
        '@stylistic/space-before-function-paren': [
            'error',
            'always',
        ],
        '@stylistic/space-in-parens': [
            'error',
            'never',
        ],
        '@stylistic/space-infix-ops': 'error',
        '@stylistic/space-unary-ops': 'error',
        '@stylistic/spaced-comment': 'error',
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/template-curly-spacing': 'error',
        '@stylistic/template-tag-spacing': 'error',
        '@stylistic/type-annotation-spacing': 'error',
        '@stylistic/type-generic-spacing': 'error',
        '@stylistic/type-named-tuple-spacing': 'error',
        '@stylistic/yield-star-spacing': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'angle-bracket',
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public',
                },
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'enumMember',
                format: [
                    'PascalCase',
                ],
            },
        ],
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        'no-unused-vars': 'off',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/unbound-method': 'error',
        'arrow-body-style': [
            'error',
            'as-needed',
            {
                requireReturnForObjectLiteral: true,
            },
        ],
        'curly': [
            'error',
            'all',
        ],
        'default-case': 'error',
        'dot-location': [
            'error',
            'property',
        ],
        'eqeqeq': 'error',
        'import-newlines/enforce': [
            'error',
            {
                'items': 10,
                'max-len': 140,
            },
        ],
        'import/no-default-export': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'max-classes-per-file': [
            'error',
            1,
        ],
        'max-lines': [
            'error',
            600,
        ],
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true,
            },
        ],
        'no-extra-bind': 'error',
        'no-lonely-if': 'error',
        'no-new-func': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow/prefer-arrow-functions': 'off',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'no-negated-condition': 'off',
        'unicorn/consistent-destructuring': 'error',
        'unicorn/custom-error-definition': 'off',
        'unicorn/empty-brace-spaces': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/expiring-todo-comments': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/filename-case': 'error',
        'unicorn/import-style': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-anonymous-default-export': 'error',
        'unicorn/no-array-callback-reference': 'error',
        'unicorn/no-array-method-this-argument': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-await-in-promise-methods': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-document-cookie': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-negated-condition': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-single-promise-in-promise-methods': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-typeof-undefined': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/no-unreadable-iife': 'error',
        'unicorn/no-unused-properties': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-at': 'error',
        'unicorn/prefer-code-point': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-default-parameters': 'error',
        'unicorn/prefer-export-from': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-json-parse-buffer': 'off',
        'unicorn/prefer-keyboard-event-key': 'error',
        'unicorn/prefer-logical-operator-over-ternary': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-modern-math-apis': 'error',
        'unicorn/prefer-native-coercion-functions': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-object-from-entries': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-prototype-methods': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-reflect-apply': 'error',
        'unicorn/prefer-regexp-test': 'error',
        'unicorn/prefer-set-has': 'error',
        'unicorn/prefer-set-size': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-string-trim-start-end': 'error',
        'unicorn/prefer-switch': [
            'error',
            {
                emptyDefaultCase: 'do-nothing-comment',
                minimumCases: 4,
            },
        ],
        'unicorn/prefer-ternary': 'error',
        'unicorn/require-array-join-separator': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'error',
        'unicorn/switch-case-braces': ['error', 'avoid'],
        'unicorn/throw-new-error': 'error',
    },
};
