/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const cleanString = require('utils/cleanString').default;
const { separators } = require('constants/');

const str = '123-4-5';

describe('Cleans string with separator', () => {
  test('Removing separator', () => {
    expect(cleanString(str, separators)).toBe('12345');
  });
  test('Removing existing characters on string', () => {
    expect(cleanString(str, '4')).toBe('123--5');
  });
  test('Removing non existing characters on string', () => {
    expect(cleanString(str, '21')).toBe(str);
  });
});
