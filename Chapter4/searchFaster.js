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

module.exports = searchFaster;