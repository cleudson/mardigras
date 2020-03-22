/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import createMaskObject from 'fn/createMaskObject';
import cleanMask from 'fn/cleanMask';
import blindMask from 'fn/blindMask';

const mask = '#&@-@#$-&$@';
const maskExpected = {
  originalMask: [...mask],
  cleanedMask: cleanMask(mask),
  blindedMask: blindMask([...mask]),
};

test('Create mask Object', () => {
  expect(createMaskObject(mask)).toEqual(expect.objectContaining(maskExpected));
});
