import cleanString from '../utils/cleanString';
import { allowedChars, separators } from '../constants';
const cleanMask = (pattern) => {
    const patternWithoutSeparators = cleanString(pattern, separators);
    const patternValidChars = patternWithoutSeparators.match(allowedChars) || '';
    if (patternWithoutSeparators.length !== patternValidChars.length) {
        throw new Error('The mask has some invalid pattern character.');
    }
    return patternValidChars;
};
export default cleanMask;
