/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import generateMaskOutput from 'fn/generateMaskOutput';

const clean = ['&', '#', '&', '&'];
const cleanInvalid = ['M', '#', '&', '&'];
const inputEqual = 'z5ja';
const inputBigger = 'z5jaj';
const inputSmaller = 'z5j';
const blind = ['ø', '-', 'ø', 'ø', 'ø'];
const maskObject = {
  raw: ['&', '-', '#', '&', '&'],
  clean,
  blind,
};
const maskObjectInvalid = {
  raw: ['&', '-', '#', 'j', '&'],
  clean: cleanInvalid,
  blind,
};

const expectedCompleted = {
  clean,
  output: 'z-5ja',
  completed: true,
};
const expectedNotCompleted = {
  clean,
  output: 'z-5j',
  completed: false,
};
const expectedInvalid = {
  clean: cleanInvalid,
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
