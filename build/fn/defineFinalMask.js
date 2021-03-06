import cleanString from '../utils/cleanString';
import { separators } from '../constants';
const clearOutputSize = (item) => cleanString(item.output, separators).length;
const defineFinalMask = (maskEntryOutput) => (maskEntryOutput
    .sort((prev, curr) => (clearOutputSize(curr) - clearOutputSize(prev)))
    .filter((item, i, arr) => (clearOutputSize(item) === clearOutputSize(arr[0])))
    .filter((item, i, arr) => {
    const someCompleted = arr.some((el) => el.completed);
    if (!someCompleted) {
        return item;
    }
    return item.completed;
})
    .reduce((prev, curr) => ((prev.clean.length < curr.clean.length) ? prev : curr)));
export default defineFinalMask;
