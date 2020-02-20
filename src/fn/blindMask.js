const {allowedChars, placeholder} = require('../constants');
module.exports = ( mask ) => {
    return mask.map(el =>{
      if(el.match(allowedChars)){
        return placeholder;
      }
      return el;
    });
  }