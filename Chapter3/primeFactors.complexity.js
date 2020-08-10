const escomplex = require('escomplex');
const primeFactors = require('./primeFactors.js');

const result = escomplex.analyse(primeFactors.toString())
console.log(result);