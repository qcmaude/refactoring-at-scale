const primeFactors = require('./primeFactors.js');

describe('base cases', () => {
  test('0', () => {
    expect(primeFactors(0)).toStrictEqual([]);
  });
  test('1', () => {
    expect(primeFactors(1)).toStrictEqual([]);
  });
  test('2', () => {
    expect(primeFactors(2)).toStrictEqual([2]);
  });
});

describe('small non-prime numbers', () => {
  test('14', () => {
    expect(primeFactors(14)).toStrictEqual([2,7]);
  });
  test('20', () => {
    expect(primeFactors(20)).toStrictEqual([2,5]);
  });
  test('58', () => {
    expect(primeFactors(58)).toStrictEqual([2,29]);
  });
});

describe('large prime numbers', () => {
  test('1451', () => {
    expect(primeFactors(1451)).toStrictEqual([1451]);
  });
  test('3257', () => {
    expect(primeFactors(3257)).toStrictEqual([3257]);
  });
  test('7919', () => {
    expect(primeFactors(7919)).toStrictEqual([7919]);
  });
});