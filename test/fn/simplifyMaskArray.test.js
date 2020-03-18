/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const simplifyMaskArray = require('../../src/fn/simplifyMaskArray');

const arr = ['a', '/', 'b', '.', 'c', '.', 'd'];
const arrExpected = 'abcd';

test('Simplify mask array', () => {
  expect(simplifyMaskArray(arr))
    .toBe(arrExpected);
});
