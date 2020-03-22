import cleanString from '../utils/cleanString';
import { allowedChars, separators } from '../constants';


const cleanMask = (pattern:string):Array<string> | '' | never => {
  const maskWithoutSeparators = cleanString(pattern, separators);
  const maskValidChars = maskWithoutSeparators.match(allowedChars) || '';
  if (maskWithoutSeparators.length !== maskValidChars.length) {
    throw new Error('The mask has some invalid pattern character.');
  }
  return maskValidChars;
};

export default cleanMask;
