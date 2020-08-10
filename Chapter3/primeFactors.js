function primeFactors(number) {
  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++){
      if (number % i === 0) return false;
    }
    return true;
  }

  const result = [];
  for (let i = 2; i <= number; i++) {
    while (isPrime(i) && number % i === 0) {
      if (!result.includes(i)) result.push(i);
      number /= i;
    }
  }
  return result;
}

module.exports = primeFactors;