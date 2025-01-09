import { FizzBuzzRule } from './types';

export const rules: FizzBuzzRule[] = [
    {
        matches: (num) => num % 3 === 0 && num % 5 === 0,
        output: 'FizzBuzz'
    },
    {
        matches: (num) => num % 3 === 0,
        output: 'Fizz'
    },
    {
        matches: (num) => num % 5 === 0,
        output: 'Buzz'
    }
];
