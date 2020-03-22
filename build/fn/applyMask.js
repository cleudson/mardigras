import cleanString from '../utils/cleanString';
import { separators } from '../constants';
import generateMaskOutuput from './generateMaskOutput';
import createMaskSetttings from './createMaskSettings';
import definefinalMask from './defineFinalMask';
const none = () => null;
const applyMask = ({ input, pattern, onSuccess = none, onError = none, validation = none, }) => {
    const maskGroup = createMaskSetttings(pattern);
    const inputWithoutSeparators = cleanString(input, separators);
    const maskOutput = maskGroup.map((maskObject) => generateMaskOutuput(inputWithoutSeparators, maskObject));
    const finalMask = definefinalMask(maskOutput);
    const { completed, output } = finalMask;
    const isValid = validation(output);
    const validationIsFalse = (isValid === false);
    if (validationIsFalse) {
        onError();
    }
    else {
        const callback = completed ? onSuccess : onError;
        callback();
    }
    return {
        input,
        output,
        completed,
        isValid,
    };
};
export default applyMask;
