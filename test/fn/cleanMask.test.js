/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import crypto from 'crypto';
import cleanMask from 'fn/cleanMask';

const validMaskPattern = '#&$-@#';
const validMaskPatternExpected = ['#', '&', '$', '@', '#'];
const invalidMaskPattern = crypto.randomBytes(8).toString('hex');

describe('Clean mask', () => {
  test('Where pattern is valid', () => {
    expect(cleanMask(validMaskPattern)).toEqual(expect.arrayContaining(validMaskPatternExpected));
  });
  test('Where pattern is invalid', () => {
    expect(() => {
      cleanMask(invalidMaskPattern);
    }).toThrow();
  });
});
