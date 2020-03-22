/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import arrayToString from 'utils/arrayToString';

const arr = ['a', 'b', 'c'];

test('Converts array to string', () => {
  expect(arrayToString(arr)).toBe('abc');
});
