const { patterns } = require('../constants');
const fillMaskGaps = require('./fillMaskGaps');

module.exports = (inputWithoutSeparators, maskObject) => {
  const { cleanedMask } = maskObject;
  let inputString = '';
  [...inputWithoutSeparators].forEach((char, i) => {
    const currentRegex = patterns[cleanedMask[i]];
    if (currentRegex === undefined || !currentRegex.test(char)) {
      return;
    }
    inputString += char;
  });
  return fillMaskGaps(inputString, maskObject);
};
