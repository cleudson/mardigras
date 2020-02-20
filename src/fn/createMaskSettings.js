
const reorderMaskSettings = require('./reorderMaskSettings');
const cleanMask = require('./cleanMask');
const blindMask = require('./blindMask');

module.exports = ( pattern ) => {
    const maskArray = Array.isArray( pattern ) ? pattern : [pattern];
    const createMaskObject = (pattern) => {
      const originalMask = [...pattern];
      return {
        originalMask,
        cleanedMask: cleanMask(pattern),
        blindedMask: blindMask(originalMask)
      }
    };
      const maskSettings = maskArray.map(( mask ) => {
        return createMaskObject( mask );
      });
      const orderedMaskSettings = reorderMaskSettings({
        maskSettings,
        checkKey: "originalMask",
        orderByKey: "cleanedMask",
        errorMsg: "Two or more masks have the same amount of input characters. You must correct it."
      });
 
    return orderedMaskSettings;
  }
