import cleanMask from './cleanMask';
import blindMask from './blindMask';
import { MaskEntryMetadata } from '../settings/interfaces';

const createMaskObject = (mask:string):MaskEntryMetadata => {
  const originalMask = [...mask];
  return {
    originalMask,
    cleanedMask: cleanMask(mask),
    blindedMask: blindMask(originalMask),
  };
};

export default createMaskObject;
