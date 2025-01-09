import { ValidationError } from './errors';

export function validatePositiveInteger(num: number): void {
    if (!Number.isInteger(num)) {
        throw new ValidationError('Input must be an integer');
    }
    if (num <= 0) {
        throw new ValidationError('Input must be positive');
    }
}
