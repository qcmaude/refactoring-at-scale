function checkValid(minimum, maximum, values, useAverage = false) {
  let result = false;
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (useAverage) {
    min = max = values.reduce((acc, curr) => acc + curr, 0)/values.length;
  }

  if (minimum < 0 || maximum > 100) {
    result = false;
  } else if (!(minimum <= min) || !(maximum >= max)) {
    result = false;
  } else if (maximum >= max && minimum <= min) {
    result = true;
  }
  return result;
}

module.exports = checkValid;
