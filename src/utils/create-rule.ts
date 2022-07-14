import {RuleCreator} from '@typescript-eslint/utils/dist/eslint-utils';

export const createRule = RuleCreator(ruleName => `Documentation for a rule: "${ruleName}"`);
