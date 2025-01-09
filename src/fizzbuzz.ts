import { validatePositiveInteger } from './validators';
import { rules } from './rules';

export function fizzbuzz(num: number): string {
    validatePositiveInteger(num);

    const matchingRule = rules.find(rule => rule.matches(num));
    return matchingRule ? matchingRule.output : num.toString();
}
