import cleanMask from './cleanMask';
import blindMask from './blindMask';
const createMaskObject = (mask) => {
    const originalMask = [...mask];
    return {
        originalMask,
        cleanedMask: cleanMask(mask),
        blindedMask: blindMask(originalMask),
    };
};
export default createMaskObject;
