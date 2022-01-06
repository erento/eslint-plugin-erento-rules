import {ESLintUtils} from '@typescript-eslint/experimental-utils';

export const createRule = ESLintUtils.RuleCreator(ruleName => `Documentation for a rule: "${ruleName}"`);
