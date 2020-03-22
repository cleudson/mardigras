/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import reorderMaskSettings from 'fn/reorderMaskSettings';

const settings1 = {
  raw: ['@', '-', '$', '/', '&', ':', '#', '#'],
  clean: '@$&##',
};
const settings2 = {
  raw: ['@', '-', '-', '-', '-', '$', '/', '&', ':', '#'],
  clean: '@$&#',
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
