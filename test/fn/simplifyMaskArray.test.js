/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const simplifyMaskArray = require('fn/simplifyMaskArray').default;

const arr = ['a', '/', 'b', '.', 'c', '.', 'd'];
const arrExpected = 'abcd';

test('Simplify mask array', () => {
  expect(simplifyMaskArray(arr))
    .toBe(arrExpected);
});
