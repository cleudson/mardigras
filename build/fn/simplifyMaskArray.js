import arrayToString from '../utils/arrayToString';
import cleanString from '../utils/cleanString';
import { separators } from '../constants';
const simplifyMaskArray = (arr) => {
    const arrToString = arrayToString(arr);
    return cleanString(arrToString, separators);
};
export default simplifyMaskArray;
