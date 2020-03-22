/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const createMaskSettings = require('fn/createMaskSettings').default;
const reorderMaskSettings = require('fn/reorderMaskSettings').default;
const createMaskObject = require('fn/createMaskObject').default;

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
