/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const arrayToString = require('src/utils/arrayToString');

const arr = ['a', 'b', 'c'];

test('Converts array to string', () => {
  expect(arrayToString(arr)).toBe('abc');
});
