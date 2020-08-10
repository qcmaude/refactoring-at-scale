const primeFactors = require('./primeFactors.js');

describe('base cases', () => {
  test('0', () => {
    expect(primeFactors(0)).toStrictEqual([]);
  });
});

describe('small non-prime numbers', () => {
  test('20', () => {
    expect(primeFactors(20)).toStrictEqual([2,5]);
  });
});