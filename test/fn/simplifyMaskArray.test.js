/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import simplifyMaskArray from 'fn/simplifyMaskArray';

const arr = ['a', '/', 'b', '.', 'c', '.', 'd'];
const arrExpected = 'abcd';

test('Simplify mask array', () => {
  expect(simplifyMaskArray(arr))
    .toBe(arrExpected);
});
