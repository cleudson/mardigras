const arrayToString = require('../utils/arrayToString');
const {separators, placeholder} = require('../constants');
const cleanString =require('../utils/cleanString')
module.exports = (inputString, maskObject) =>{
    let output = arrayToString(maskObject.blindedMask);
    const invalidChars = new RegExp(separators.source + '*' + placeholder + ".*", "g");
    [...inputString].forEach((char) => {
        output = output.replace(placeholder, char);
    });
    output = cleanString(output, invalidChars);
    const {cleanedMask, originalMask} = maskObject;
    return {
      cleanedMask,
      output,
      completed: (output.length === originalMask.length)
    };
  }