export const baseConfig = {
    parser: '@typescript-eslint/parser',
    parserOptions: {sourceType: 'module'},
    extends: [
        'plugin:@angular-eslint/ng-cli-compat',
        'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:@angular-eslint/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        'eslint-plugin-unicorn',
    ],
    rules: {
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
        '@angular-eslint/no-forward-ref': 'error',
        '@angular-eslint/no-input-prefix': 'error',
        '@angular-eslint/no-lifecycle-call': 'off',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array',
            },
        ],
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/consistent-type-assertions': ['error', {
            assertionStyle: 'angle-bracket',
        }],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public',
                },
            },
        ],
        '@typescript-eslint/naming-convention': ['error', {
            selector: 'enumMember',
            format: ['PascalCase'],
        }],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': ['error', 'as-needed', {
            requireReturnForObjectLiteral: true,
        }],
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': [
            'error',
            '1tbs',
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
                imports: 'always-multiline',
                objects: 'always-multiline',
            },
        ],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'curly': ['error', 'all'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-call-spacing': 'error',
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'implicit-arrow-linebreak': 'error',
        'import/no-default-export': 'error',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': 'error',
        'import/order': ['error', {
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
            alphabetize: {order: 'asc', caseInsensitive: true},
        }],
        'indent': ['error', 4, {
            MemberExpression: 1,
            VariableDeclarator: 'first',
            SwitchCase: 1,
        }],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': [
            'error',
            'unix',
        ],
        'max-classes-per-file': [
            'error',
            1,
        ],
        'max-lines': [
            'error',
            600,
        ],
        'multiline-ternary': ['error', 'always-multiline'],
        'newline-per-chained-call': 'error',
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': ['error', {
            allowEmptyCatch: true,
        }],
        'no-extra-bind': 'error',
        'no-floating-decimal': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-new-func': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': 'error',
        'one-var': 'error',
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': [
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
        'prefer-arrow/prefer-arrow-functions': 'off',
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'require-await': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'always'],
        'space-in-parens': [
            'error',
            'never',
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicorn/filename-case': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-callback-reference': 'error',
        'unicorn/no-array-method-this-argument': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-await-expression-member': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-instanceof-array': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-unused-properties': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-array-some': 'error',
        'unicorn/prefer-optional-catch-binding': 'error',
        'unicorn/prefer-ternary': 'error',
        'unicorn/require-array-join-separator': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'error',
        'unicorn/switch-case-braces': 'error',
        'unicorn/throw-new-error': 'error',
    },
};
