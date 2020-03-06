const cleanString =require('../utils/cleanString');
const {separators} = require('../constants');
const generateMaskOutuput = require('./generateMaskOutput');
const createMaskSetttings = require('./createMaskSettings');
const definefinalMask = require('./defineFinalMask');
const none = () => null;

module.exports = ({input, pattern, onSuccess = none, onError=none, validation=none}) =>{
    const maskGroup = createMaskSetttings(pattern);
    const inputWithoutSeparators = cleanString(input, separators);
    const maskOutput = maskGroup.map((maskObject) =>{
       return generateMaskOutuput(inputWithoutSeparators, maskObject);
    })
    const finalMask = definefinalMask(maskOutput);
    const { completed, output } = finalMask;
    const isValid = validation(output);
    const validationIsFalse = (isValid === false);
    if(validationIsFalse){
      onError();
    }
    else{
      const callback = completed ? onSuccess : onError;
      callback();
    }
    return{
      input,
      output,
      completed,
      isValid
    }
}