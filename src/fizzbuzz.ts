import { validatePositiveInteger } from './validators';
export function fizzbuzz(num: number): string {
  validatePositiveInteger(num);

  if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
  }
  if (num % 3 === 0) {
      return 'Fizz';
  }
  if (num % 5 === 0) {
      return 'Buzz';
  }
  return num.toString();
}
