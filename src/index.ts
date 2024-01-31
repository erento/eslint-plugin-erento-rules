import {allConfigs} from './configs';
import {allRules} from './rules';

const configuration: Record<string, Record<string, any>> = {
    rules: allRules,
    configs: allConfigs,
};

export = configuration;
