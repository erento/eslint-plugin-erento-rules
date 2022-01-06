# Erento's ESLint rules

## Usage
1. Install this package: `npm install --save-dev @erento/eslint-plugin-erento-rules` and any of missing peer dependencies, if any.
2. Add `"@erento/erento-rules"` into plugins in `.eslintrc` file.
3. Use any of rules directly in `rules` or use our **opinionated** set of rules:
    ```json
    {
        "extends": [
            "plugin:@erento/erento-rules/recommended"
        ],
        "plugins": [
            "@erento/erento-rules"
        ]
    }
    ```

## Rules
Each rule has emojis denoting:

- ✅ if it belongs to the `recommended` configuration
- 🔧 if some problems reported by the rule are automatically fixable by the `--fix` [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) option
- 💡 if some problems reported by the rule are manually fixable by editor [suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions)

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description | ✅ | 🔧 | 💡 |
| :-- | :-- | :-- | :-- | :-- |
| [injectable-order](src/rules/injectable-order.md) | Enforces sorted parameters in constructor of classes using DI. | ✅ | 🔧 |  |

## Development
### Tests
To run tests:
```bash
npm run test
```

### Run against the existing repository
In case you can use published version, use dexcription in Usage section above.
To check existing sources against development version, please, follow next steps:

1. In the folder of this repository run:

    ```bash
    npm run build
    npm pack
    ```

3. In the folder of your project's repository run:

    ```bash
    npm install <ESLINT_RULES_ROOT>/erento-eslint-plugin-erento-rules-X.Y.Z.tgz
    ```

Where:
- `<RULES_ROOT>` is e.g. `/Users/konradcerny/Sites/Erento/eslint-rules`
- `X.Y.Z` is current version in package.json - we follow [SEMVER versioning](https://semver.org/).

Assuming you have installed all peer dependencies and defined `.eslintrc` file, you can now run:
`./node_modules/.bin/eslint -c .eslintrc.json ./src/**/*.ts`

You can run it also with the `--fix` argument to execute a fixer.
