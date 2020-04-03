/* eslint-disable max-len */
import simplifyMaskArray from './simplifyMaskArray';
import { MaskEntryMetadata } from '../settings/interfaces';

const reorderMaskSetttings = (maskEntryMetadata:MaskEntryMetadata[]):MaskEntryMetadata[] | never => maskEntryMetadata.sort((prev, curr) => {
  if (simplifyMaskArray(prev.raw) === simplifyMaskArray(curr.raw)) {
    throw new Error('Two or more masks have the same amount of input characters. You must correct it.');
  }
  return prev.clean.length - curr.clean.length;
});

export default reorderMaskSetttings;
