/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const createMaskObject = require('src/fn/createMaskObject');
const cleanMask = require('src/fn/cleanMask');
const blindMask = require('src/fn/blindMask');

const mask = '#&@-@#$-&$@';
const maskExpected = {
  originalMask: [...mask],
  cleanedMask: cleanMask(mask),
  blindedMask: blindMask([...mask]),
};

test('Create mask Object', () => {
  expect(createMaskObject(mask)).toEqual(expect.objectContaining(maskExpected));
});
