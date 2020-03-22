/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const generateMaskOutput = require('fn/generateMaskOutput').default;

const cleanedMask = ['&', '#', '&', '&'];
const cleanedMaskInvalid = ['M', '#', '&', '&'];
const inputEqual = 'z5ja';
const inputBigger = 'z5jaj';
const inputSmaller = 'z5j';
const blindedMask = ['ø', '-', 'ø', 'ø', 'ø'];
const maskObject = {
  originalMask: ['&', '-', '#', '&', '&'],
  cleanedMask,
  blindedMask,
};
const maskObjectInvalid = {
  originalMask: ['&', '-', '#', 'j', '&'],
  cleanedMask: cleanedMaskInvalid,
  blindedMask,
};

const expectedCompleted = {
  cleanedMask,
  output: 'z-5ja',
  completed: true,
};
const expectedNotCompleted = {
  cleanedMask,
  output: 'z-5j',
  completed: false,
};
const expectedInvalid = {
  cleanedMask: cleanedMaskInvalid,
  output: '',
  completed: false,
};

describe('Generate mask output', () => {
  test('When input size is equal cleaned mask size', () => {
    expect(generateMaskOutput(inputEqual, maskObject))
      .toEqual(expect.objectContaining(expectedCompleted));
  });
  test('When input size is bigger than cleaned mask size', () => {
    expect(generateMaskOutput(inputBigger, maskObject))
      .toEqual(expect.objectContaining(expectedCompleted));
  });
  test('When input size is smaller than cleaned mask size', () => {
    expect(generateMaskOutput(inputSmaller, maskObject))
      .toEqual(expect.objectContaining(expectedNotCompleted));
  });
  test('When cleaned mask starts with a invalid pattern', () => {
    expect(generateMaskOutput(inputEqual, maskObjectInvalid))
      .toEqual(expect.objectContaining(expectedInvalid));
  });
});
