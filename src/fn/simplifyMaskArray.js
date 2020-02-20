  const arrayToString = require('../utils/arrayToString');
  const emptyString =require('../utils/emptyString');
  const { separators } = require('../constants');

  module.exports = ( arr ) => {
    const arrToString = arrayToString( arr );
    return emptyString ( arrToString, separators ); 
  }