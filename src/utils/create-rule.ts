import * as ESLintUtils from '@typescript-eslint/utils/eslint-utils';

export const createRule = ESLintUtils.RuleCreator((ruleName: any) => `Documentation for a rule: "${ruleName}"`);
