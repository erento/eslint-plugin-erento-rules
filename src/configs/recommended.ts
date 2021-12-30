import {baseConfig} from './base';

export const recommended = {
    ...baseConfig,
    ...{
        rules: {
            ...baseConfig.rules,
            '@erento/erento-rules/injectable-order': 'error',
        },
    },
};
