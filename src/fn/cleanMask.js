const emptyString =require('../utils/emptyString');
const {allowedChars, separators} = require('../constants');


module.exports = ( pattern ) => {
    const maskWithoutSeparators = emptyString(pattern, separators);
    const maskValidChars = maskWithoutSeparators.match(allowedChars);
    if(maskWithoutSeparators.length !== maskValidChars.length){
        throw "The mask has some invalid pattern character.";
    }
    return maskValidChars; 
}