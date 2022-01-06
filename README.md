# Erento's ES Lint rules

## Development
### Rules
- Prefix each rule with _erento_

### Build and run
To build rules run:
```bash
npm run build
```

To check existing sources against erento's rules run in the folder of project's repository:
```bash
./node_modules/.bin/eslint -c <RULES_ROOT>/.eslintrc.json ./src/app/**/*.ts
```

Where `<RULES_ROOT>` is e.g. `/Users/konradcerny/Sites/Erento/eslint-rules`

You can run it also with the `--fix` argument to execute a fixer.
