import cleanMask from './cleanMask';
import blindMask from './blindMask';
const createMaskObject = (input) => {
    const raw = [...input];
    return {
        raw,
        clean: cleanMask(input),
        blind: blindMask(raw),
    };
};
export default createMaskObject;
