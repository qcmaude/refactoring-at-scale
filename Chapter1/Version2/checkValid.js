function checkValid(minimum, maximum, values, useAverage = false) {

  if (minimum < 0 || maximum > 100) return false;

  let min = Math.min(...values);
  let max = Math.max(...values);

  if (useAverage) {
    min = max = values.reduce((acc, curr) => acc + curr, 0)/values.length;
  }

  if (!(minimum <= min) || !(maximum >= max)) return false;
  if (maximum >= max && minimum <= min) return true;
  
  return false;
}

module.exports = checkValid;