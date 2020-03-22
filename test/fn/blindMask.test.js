/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const blindMask = require('fn/blindMask').default;

const someMask = ['(', '@', '#', ')', '#', '&', '@', '#', '-', '$', '#', '#', '&'];
const someMaskExpected = ['(', 'ø', 'ø', ')', 'ø', 'ø', 'ø', 'ø', '-', 'ø', 'ø', 'ø', 'ø'];
const notMask = ['1', '2', '3'];
const notMaskExpected = notMask;
describe('Blind mask', () => {
  test('where template strings exist', () => {
    expect(blindMask(someMask)).toEqual(expect.arrayContaining(someMaskExpected));
  });
  test('where template strings do not exist', () => {
    expect(blindMask(notMask)).toEqual(expect.arrayContaining(notMaskExpected));
  });
});
