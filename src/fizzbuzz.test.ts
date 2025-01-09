import { fizzbuzz } from './fizzbuzz';

describe('FizzBuzz', () => {
  describe('normal numbers', () => {
      test('1 -> "1"', () => {
          expect(fizzbuzz(1)).toBe('1');
      });
      test('2 -> "2"', () => {
        expect(fizzbuzz(2)).toBe('2');
      });
      test('4 -> "4"', () => {
        expect(fizzbuzz(4)).toBe('4');
      });
  });
  describe('Fizz cases', () => {
    test('3 -> "Fizz"', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });

    test('6 -> "Fizz"', () => {
        expect(fizzbuzz(6)).toBe('Fizz');
    });
  });
  describe('Buzz cases', () => {
    test('5 -> "Buzz"', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });
    test('10 -> "Buzz"', () => {
        expect(fizzbuzz(10)).toBe('Buzz');
    });
  });
  describe('FizzBuzz cases', () => {
    test('15 -> "FizzBuzz"', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });

    test('30 -> "FizzBuzz"', () => {
        expect(fizzbuzz(30)).toBe('FizzBuzz');
    });
  });
  describe('error cases', () => {
    test('throws ValidationError for zero', () => {
        expect(() => fizzbuzz(0)).toThrow('Input must be positive');
    });

    test('throws ValidationError for negative numbers', () => {
        expect(() => fizzbuzz(-1)).toThrow('Input must be positive');
    });

    test('throws ValidationError for decimal numbers', () => {
        expect(() => fizzbuzz(1.5)).toThrow('Input must be an integer');
    });
  });
});
