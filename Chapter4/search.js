function search(name, alphabeticalNames) {
  for(let i = 0; i < alphabeticalNames.length; i++) {
    if (alphabeticalNames[i] == name) return i;
  }
  return -1;
}

module.exports = search;