/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const applyMask = require('src/fn/applyMask');

const pattern = '&-&#';
const input1 = 'a3a';
const input1Expected = {
  input: input1,
  output: 'a',
  completed: false,
  isValid: null,
};
const input2 = 'lj345';
const input2Expected = {
  input: input2,
  output: 'l-j3',
  completed: true,
  isValid: null,
};
const withoutAnyCallback = {
  input: input1,
  pattern,
};
const whenValidationIsFalse = {
  ...withoutAnyCallback,
  validation: (output) => output === '3',
};
const whenValidationIsFalseExpected = {
  ...input1Expected,
  isValid: false,
};
const whenValidationIsTrue = {
  ...withoutAnyCallback,
  pattern,
  input: 'lj345',
  validation: (output) => output.includes('j3'),
};
const whenValidationIsTrueExpected = {
  ...input2Expected,
  isValid: true,
};

describe('Apply mask', () => {
  test('Without any callback', () => {
    expect(applyMask(withoutAnyCallback))
      .toEqual(expect.objectContaining(input1Expected));
  });
  test('when validation returns false', () => {
    expect(applyMask(whenValidationIsFalse))
      .toEqual(expect.objectContaining(whenValidationIsFalseExpected));
  });
  test('when validation returns true', () => {
    expect(applyMask(whenValidationIsTrue))
      .toEqual(expect.objectContaining(whenValidationIsTrueExpected));
  });
});
