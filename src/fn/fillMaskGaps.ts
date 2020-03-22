import arrayToString from '../utils/arrayToString';
import cleanString from '../utils/cleanString';
import { MaskEntryMetadata, MaskEntryOutput } from '../settings/interfaces';
import { separators, placeholder } from '../constants';

const fillMaskGaps = (inputString:string, maskEntryMetadata:MaskEntryMetadata):MaskEntryOutput => {
  const invalidChars = new RegExp(`${separators.source}*${placeholder}.*`, 'g');
  const replacedString = [...inputString].reduce((acc, char) => acc.replace(placeholder, char),
    arrayToString(maskEntryMetadata.blind));
  const output = cleanString(replacedString, invalidChars);
  const { clean, raw } = maskEntryMetadata;
  return {
    clean,
    output,
    completed: (output.length === raw.length),
  };
};

export default fillMaskGaps;
