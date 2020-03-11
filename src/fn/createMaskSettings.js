
const reorderMaskSettings = require('./reorderMaskSettings');
const cleanMask = require('./cleanMask');
const blindMask = require('./blindMask');

module.exports = (pattern) => {
  const maskArray = Array.isArray(pattern) ? pattern : [pattern];
  const createMaskObject = (mask) => {
    const originalMask = [...mask];
    return {
      originalMask,
      cleanedMask: cleanMask(mask),
      blindedMask: blindMask(originalMask),
    };
  };
  const maskSettings = maskArray.map((mask) => createMaskObject(mask));
  const orderedMaskSettings = reorderMaskSettings({
    maskSettings,
    checkKey: 'originalMask',
    orderByKey: 'cleanedMask',
    errorMsg: 'Two or more masks have the same amount of input characters. You must correct it.',
  });
  return orderedMaskSettings;
};
