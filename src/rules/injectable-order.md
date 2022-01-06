# Injectable Order

✅ *This rule is part of the recommended config.*

🔧 *This rule is [auto-fixable](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems).*

This rule enforces sorted parameters in constructor of classes using DI.
Such a class has to be decorated with one of the following:
- `@Component()`
- `@Directive()`
- `@Injectable()`
- `@Pipe()`

## Fail

```ts
@Pipe({name: 'currency'})
export class CurrencyPipe implements PipeTransform {
    constructor(
        logger: LoggerService,
        locale: LocaleService,
    ) {}
}
```

## Pass

```ts

@Pipe({name: 'currency'})
export class CurrencyPipe implements PipeTransform {
    constructor(
        locale: LocaleService,
        logger: LoggerService,
    ) {}
}
```
