  const arrayToString = require('../utils/arrayToString');
  const cleanString =require('../utils/cleanString');
  const { separators } = require('../constants');

  module.exports = ( arr ) => {
    const arrToString = arrayToString( arr );
    return cleanString ( arrToString, separators ); 
  }