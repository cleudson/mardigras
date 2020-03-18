const cleanString = require('../utils/cleanString');
const { allowedChars, separators } = require('../constants');


module.exports = (pattern) => {
  const maskWithoutSeparators = cleanString(pattern, separators);
  const maskValidChars = maskWithoutSeparators.match(allowedChars) || '';
  if (maskWithoutSeparators.length !== maskValidChars.length) {
    throw new Error('The mask has some invalid pattern character.');
  }
  return maskValidChars;
};
