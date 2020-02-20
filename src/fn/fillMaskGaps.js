const arrayToString = require('../utils/arrayToString');
const {separators, placeholder} = require('../constants');
const emptyString =require('../utils/emptyString')
module.exports = (inputString, maskObject) =>{
    let output = arrayToString(maskObject.blindedMask);
    const invalidChars = new RegExp(separators.source + '*' + placeholder + ".*", "g");
    [...inputString].forEach((char) => {
        output = output.replace(placeholder, char);
    });
    output = emptyString(output, invalidChars);
    return {
      output,
      completed: (output.length === maskObject.originalMask.length)
    };
  }