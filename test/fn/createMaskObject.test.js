/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import createMaskObject from 'fn/createMaskObject';
import cleanMask from 'fn/cleanMask';
import blindMask from 'fn/blindMask';

const mask = '#&@-@#$-&$@';
const maskExpected = {
  raw: [...mask],
  clean: cleanMask(mask),
  blind: blindMask([...mask]),
};

test('Create mask Object', () => {
  expect(createMaskObject(mask)).toEqual(expect.objectContaining(maskExpected));
});
