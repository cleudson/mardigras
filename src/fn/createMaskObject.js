const cleanMask = require('./cleanMask');
const blindMask = require('./blindMask');

module.exports = (mask) => {
  const originalMask = [...mask];
  return {
    originalMask,
    cleanedMask: cleanMask(mask),
    blindedMask: blindMask(originalMask),
  };
};
