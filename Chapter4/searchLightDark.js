const darkMode = false;
const lightMode = true;

// Existing function now an abstraction for calling into either implementation
function search(name, alphabeticalNames) {
  // If we're in dark mode, return the old result.
  if (darkMode) {
    const oldResult = searchOld(name, alphabeticalNames);
    const newResult = searchFaster(name, alphabeticalNames);

    compareAndLog(oldResult, newResult);

    return oldResult;
  }
  
  // If we're in light mode, return the new result.
  if (lightMode) {
    const oldResult = searchOld(name, alphabeticalNames);
    const newResult = searchFaster(name, alphabeticalNames);

    compareAndLog(oldResult, newResult);
    
    return newResult;
  }

  return search(name, alphabeticalNames);
}

// Linear search logic moved to a new function.
function searchOld(name, alphabeticalNames) {
  for(let i = 0; i < alphabeticalNames.length; i++) {
    if (alphabeticalNames[i] == name) return i;
  }
  return -1;
}

// Binary search; this is the new implementation
function searchFaster(name, alphabeticalNames) {
  let startIndex = 0;
  let endIndex = alphabeticalNames.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex+endIndex)/2);
    if (alphabeticalNames[middleIndex] == name) return middleIndex;

    if (alphabeticalNames[middleIndex] > name) {
      endIndex = middleIndex - 1;
    } else if (alphabeticalNames[middleIndex] < name) {
      startIndex = middleIndex + 1;
    }
  }

  return -1;
}

function compareAndLog(oldResult, newResult) {
  if (oldResult != newResult) {
    console.log(`Diff found; old result: ${oldResult}, new result: ${newResult}`);
  }
}

module.exports = search;

