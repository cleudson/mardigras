import reorderMaskSettings from './reorderMaskSettings';
import createMaskObject from './createMaskObject';
const createMaskSettings = (pattern) => {
    const maskArray = Array.isArray(pattern) ? pattern : [pattern];
    const maskSettings = maskArray.map((mask) => createMaskObject(mask));
    const orderedMaskSettings = reorderMaskSettings(maskSettings);
    return orderedMaskSettings;
};
export default createMaskSettings;
