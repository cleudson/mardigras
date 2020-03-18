
const reorderMaskSettings = require('./reorderMaskSettings');
const createMaskObject = require('./createMaskObject');

module.exports = (pattern) => {
  const maskArray = Array.isArray(pattern) ? pattern : [pattern];
  const maskSettings = maskArray.map((mask) => createMaskObject(mask));
  const orderedMaskSettings = reorderMaskSettings(maskSettings);
  return orderedMaskSettings;
};
