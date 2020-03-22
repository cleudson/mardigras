/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const createMaskObject = require('fn/createMaskObject').default;
const cleanMask = require('fn/cleanMask').default;
const blindMask = require('fn/blindMask').default;

const mask = '#&@-@#$-&$@';
const maskExpected = {
  originalMask: [...mask],
  cleanedMask: cleanMask(mask),
  blindedMask: blindMask([...mask]),
};

test('Create mask Object', () => {
  expect(createMaskObject(mask)).toEqual(expect.objectContaining(maskExpected));
});
