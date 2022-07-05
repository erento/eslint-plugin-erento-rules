import {convertAnnotatedSourceToFailureCase} from '@angular-eslint/utils';
import {RuleTester} from '@typescript-eslint/utils/dist/eslint-utils';
import {injectableOrderRule, MessageIds, RULE_NAME} from './injectable-order';

const ruleTester = new RuleTester({
    parser: '@typescript-eslint/parser',
});
const messageId: MessageIds = 'wrongOrder';

ruleTester.run(RULE_NAME, injectableOrderRule, {
    valid: [
        `
            @Component({
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss'],
            })
            class HomepageComponent {
                static myStaticMethod (): void {}

                constructor (
                    myService: MyService,
                    readonly myReadonlyService: MyReadonlyService,
                    public myPublicService: MyPublicService,
                    public readonly breakpointService: BreakpointService,
                    protected breakpointService3: BreakpointService,
                    protected readonly breakpointService2: BreakpointService,
                    private myPrivateService: MyPrivateService,
                    private readonly windowRef: WindowRef,
                ) {}

                public onInit (): void {}
            }
        `,
        `
            @Injectable()
            class MyService {
                constructor (public readonly breakpointService: BreakpointService,private readonly windowRef: WindowRef) {}
            }
        `,
        `
            @Injectable()
            class MyService {
                constructor (myService: MyService,private readonly windowRef: WindowRef) {}
            }
        `,
        `
            @Pipe({name: 'currency'})
            export class CurrencyPipe implements PipeTransform {
                constructor(
                    private readonly localeService: LocaleService,
                    private readonly logger: LoggerService,
                ) {}
            }
        `,
        `
            @Injectable()
            class MyService {
                constructor () {}
            }
        `,
        `
            @Injectable()
            class MyService {
                static myStaticMethod (): void {}

                public run (): void {}
            }
        `,
        `
            class TestClass {
                constructor (
                    private readonly windowRef: WindowRef,
                    private readonly breakpointService: BreakpointService,
                ) {}
            }
        `,
    ],
    invalid: [
        convertAnnotatedSourceToFailureCase({
            description: 'it should fail when the parameters are not in ASC order',
            annotatedSource: `
                @Component({
                    selector: 'app-homepage',
                    templateUrl: './homepage.component.html',
                    styleUrls: ['./homepage.component.scss'],
                })
                class HomepageComponent {
                    constructor (
                        myService: MyService,
                        private readonly windowRef: WindowRef,
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        private readonly breakpointService: BreakpointService,
                    ) {}
                }
            `,
            annotatedOutput: `
                @Component({
                    selector: 'app-homepage',
                    templateUrl: './homepage.component.html',
                    styleUrls: ['./homepage.component.scss'],
                })
                class HomepageComponent {
                    constructor (
                        myService: MyService,
                        private readonly breakpointService: BreakpointService,
                        ~
                        private readonly windowRef: WindowRef,
                    ) {}
                }
            `,
            messageId,
        }),
        convertAnnotatedSourceToFailureCase({
            description: '',
            annotatedSource: `
                @Injectable()
                class HomepageService {
                    constructor (private readonly windowRef: WindowRef,myService: MyService) {}
                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                }
            `,
            annotatedOutput: `
                @Injectable()
                class HomepageService {
                    constructor (myService: MyService,private readonly windowRef: WindowRef) {}
                                 ~
                }
            `,
            messageId,
        }),
        convertAnnotatedSourceToFailureCase({
            description: '',
            annotatedSource: `
                @Pipe({name: 'currency'})
                export class CurrencyPipe implements PipeTransform {
                    constructor(
                        private readonly logger: LoggerService,
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                        private readonly localeService: LocaleService,
                    ) {}
                }
            `,
            annotatedOutput: `
                @Pipe({name: 'currency'})
                export class CurrencyPipe implements PipeTransform {
                    constructor(
                        private readonly localeService: LocaleService,
                        ~
                        private readonly logger: LoggerService,
                    ) {}
                }
            `,
            messageId,
        }),
    ],
});
