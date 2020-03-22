/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const reorderMaskSettings = require('fn/reorderMaskSettings').default;

const settings1 = {
  originalMask: ['@', '-', '$', '/', '&', ':', '#', '#'],
  cleanedMask: '@$&##',
};
const settings2 = {
  originalMask: ['@', '-', '-', '-', '-', '$', '/', '&', ':', '#'],
  cleanedMask: '@$&#',
};
const settings3 = settings2;
const maskSuccess = [settings1, settings2];
const maskSucessExpected = [settings2, settings1];
const maskError = [settings2, settings3];


describe('Simplify mask settings', () => {
  test('Test original mask with different lengths', () => {
    expect(reorderMaskSettings(maskSuccess))
      .toEqual(expect.arrayContaining(maskSucessExpected));
  });
  test('Test original mask with same lengths', () => {
    expect(() => {
      reorderMaskSettings(maskError);
    }).toThrow();
  });
});
