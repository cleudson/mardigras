/* eslint-disable max-len */
import { patterns } from '../constants';
import fillMaskGaps from './fillMaskGaps';
const generateMaskOutput = (inputWithoutSeparators, maskEntryMetadata) => {
    const { clean } = maskEntryMetadata;
    const inputString = [...inputWithoutSeparators].reduce((acc, char, i, arr) => {
        const currentRegex = patterns[clean[i]];
        const nextRegex = patterns[clean[i + 1]];
        if (!nextRegex || !currentRegex) {
            arr.splice(0);
        }
        if (!currentRegex) {
            return acc;
        }
        if (currentRegex.test(char)) {
            return acc + char;
        }
        return acc;
    }, '');
    return fillMaskGaps(inputString, maskEntryMetadata);
};
export default generateMaskOutput;
