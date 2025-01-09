import {fizzbuzz} from './fizzbuzz';

describe('fizzbuzz', () => {
  // 最初のテストケース
  test('return "1" for 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });
});
