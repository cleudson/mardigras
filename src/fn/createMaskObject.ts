import cleanMask from './cleanMask';
import blindMask from './blindMask';
import { MaskEntryMetadata } from '../settings/interfaces';

const createMaskObject = (input:string):MaskEntryMetadata => {
  const raw = [...input];
  return {
    raw,
    clean: cleanMask(input),
    blind: blindMask(raw),
  };
};

export default createMaskObject;
