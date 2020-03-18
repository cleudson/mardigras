const arrayToString = require('../utils/arrayToString');
const { separators, placeholder } = require('../constants');
const cleanString = require('../utils/cleanString');

module.exports = (inputString, maskObject) => {
  const invalidChars = new RegExp(`${separators.source}*${placeholder}.*`, 'g');
  const replacedString = [...inputString].reduce((acc, char) => acc.replace(placeholder, char),
    arrayToString(maskObject.blindedMask));
  const output = cleanString(replacedString, invalidChars);
  const { cleanedMask, originalMask } = maskObject;
  return {
    cleanedMask,
    output,
    completed: (output.length === originalMask.length),
  };
};
