/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import createMaskSettings from 'fn/createMaskSettings';
import reorderMaskSettings from 'fn/reorderMaskSettings';
import createMaskObject from 'fn/createMaskObject';

const patternString = '#&/$#.@@@';
const patternStringMaskSettings = [patternString].map((mask) => createMaskObject(mask));
const patternStringExpected = reorderMaskSettings(patternStringMaskSettings);
const patternArray = [patternString];
const patternArrayMaskSettings = patternArray.map((mask) => createMaskObject(mask));
const patternArrayExpected = reorderMaskSettings(patternArrayMaskSettings);

describe('Create mask settings', () => {
  test('Test with string', () => {
    expect(createMaskSettings(patternString))
      .toEqual(expect.objectContaining(patternStringExpected));
  });
  test('Test with array', () => {
    expect(createMaskSettings(patternArray))
      .toEqual(expect.objectContaining(patternArrayExpected));
  });
});
