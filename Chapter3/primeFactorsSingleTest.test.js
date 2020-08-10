const primeFactors = require('./primeFactors.js');

describe('base cases', () => {
  test('0', () => {
    expect(primeFactors(0)).toStrictEqual([]);
  });
});