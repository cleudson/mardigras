import arrayToString from '../utils/arrayToString';
import cleanString from '../utils/cleanString';
import { MaskEntryMetadata, MaskEntryOutput } from '../settings/interfaces';
import { separators, placeholder } from '../constants';

const fillMaskGaps = (inputString:string, maskObject:MaskEntryMetadata):MaskEntryOutput => {
  const invalidChars = new RegExp(`${separators.source}*${placeholder}.*`, 'g');
  const replacedString = [...inputString].reduce((acc, char) => acc.replace(placeholder, char),
    arrayToString(maskObject.blindedMask));
  const output = cleanString(replacedString, invalidChars);
  const { cleanedMask, originalMask } = maskObject;
  return {
    cleanedMask,
    output,
    completed: (output.length === originalMask.length),
  };
};

export default fillMaskGaps;
