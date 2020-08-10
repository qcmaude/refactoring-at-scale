function checkValid(minimumBound, maximumBound, grades, useAverage = false) {

  // Valid assignments should never allow fewer than 0 points
  var absoluteMinimum = 0;

  // Valid assignments should never exceed more than 100 possible points
  var absoluteMaximum = 100;

  if (minimumBound < absoluteMinimum) return false;
  if (maximumBound > absoluteMaximum) return false;

  let min = Math.min(...grades);
  let max = Math.max(...grades);

  if (useAverage) {
    return checkAverageInBounds(minimumBound, maximumBound, grades);
  }

  return checkAllGradesInBounds(minimumBound, maximumBound, grades);
}

function checkAllGradesInBounds(minimumBound, maximumBound, grades) {
  var min = Math.min(...grades);
  var max = Math.max(...grades);

  if (min < minimumBound) return false;
  if (max > maximumBound) return false;
  return true;
}

function checkAverageInBounds(minimumBound, maximumBound, grades) {
  var avg = calculateAverage(grades);
  if (avg < minimumBound) return false;
  if (avg > maximumBound) return false;
  return true;
}

function calculateAverage(grades) {
  return grades.reduce((acc, curr) => acc + curr, 0)/grades.length;
}

module.exports = checkValid;