import assert from 'assert';

function checkValid(minimum, maximum, values, useAverage = false) {

  if (minimum < 0 || maximum > 100) return false;

  var min = Math.min(...values);
  var max = Math.max(...values);
  if (useAverage) {
    min = max = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  if (min < minimum) return false;
  if (max > maximum) return false;
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
