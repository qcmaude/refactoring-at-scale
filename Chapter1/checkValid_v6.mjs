import assert from 'assert';

function checkValid(minimum, maximum, grades, useAverage = false) {
  // Valid assignments should never allow fewer than 0 points
  var absoluteMinimum = 0;

  // Valid assignments should never exceed more than 100 possible points
  var absoluteMaximum = 100;

  if (minimum < absoluteMinimum) return false;
  if (maximum > absoluteMaximum) return false;

  if (useAverage) {
    return checkAverageWithinBounds(minimum, maximum, grades);
  }

  return checkAllGradesWithinBounds(minimum, maximum, grades);
}

function calculateAverage(grades) {
  return grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function checkAllGradesWithinBounds(minimumBound, maximumBound, grades) {
  var min = Math.min(...grades);
  var max = Math.max(...grades);

  if (min < minimumBound) return false;
  if (max > maximumBound) return false;
  return true;
}

function checkAverageWithinBounds(minimumBound, maximumBound, grades) {
  var avg = calculateAverage(grades);
  if (avg < minimumBound) return false;
  if (avg > maximumBound) return false;
  return true;
}

// Check for all values within bounds.
var defaultSet = [10, 20, 30, 40, 50, 60];
console.log("Expected true,", checkValid(0, 100, defaultSet));

// Check for value below minimum (15).
console.log("Expected false,", checkValid(15, 100, defaultSet));
// Check for value above maximum (55).
console.log("Expected false,", checkValid(0, 55, defaultSet));
// Check for value at minimum (10).
console.log("Expected false,", checkValid(10, 100, defaultSet));
// Check for value at maximum (60).
console.log("Expected false,", checkValid(0, 60, defaultSet));

// Check for average within bounds.
console.log("Expected true,", checkValid(0, 100, defaultSet));
// Check for average below minimum.
console.log("Expected false,", checkValid(40, 100, defaultSet));
// Check for average at minimum.
console.log("Expected false,", checkValid(35, 100, defaultSet));
// Check for average above maximum.
console.log("Expected false,", checkValid(0, 30, defaultSet));
// Check for average at maximum.
console.log("Expected false,", checkValid(0, 35, defaultSet));
