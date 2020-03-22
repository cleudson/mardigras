/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import defineFinalMask from 'fn/defineFinalMask';


describe('Define final mask', () => {
  test('When mask objects have different output sizes', () => {
    const maskObject1 = {
      output: 'abcd',
    };
    const maskObject2 = {
      output: 'abc',
    };
    const test = [
      maskObject1,
      maskObject2,
    ];
    const testExpected = maskObject1;
    expect(defineFinalMask(test))
      .toEqual(expect.objectContaining(testExpected));
  });
  test('When mask objects have equal output sizes but one is completed', () => {
    const maskObject1 = {
      output: 'efgh',
      completed: true,
    };
    const maskObject2 = {
      output: 'efgh',
      completed: false,
    };
    const test = [
      maskObject1,
      maskObject2,
    ];
    const testExpected = maskObject1;
    expect(defineFinalMask(test))
      .toEqual(expect.objectContaining(testExpected));
  });
  test('When mask objects have equal output sizes but two is completed', () => {
    const maskObject1 = {
      output: 'efgh',
      completed: true,
      cleanedMask: ['&', '&', '&', '&'],
    };
    const maskObject2 = {
      output: 'efgh',
      completed: true,
      cleanedMask: ['&', '&', '&', '&', '&'],
    };
    const test1 = [
      maskObject1,
      maskObject2,
    ];
    const test2 = [
      maskObject2,
      maskObject1,
    ];
    const testExpected = maskObject1;
    expect(defineFinalMask(test1))
      .toEqual(expect.objectContaining(testExpected));
    expect(defineFinalMask(test2))
      .toEqual(expect.objectContaining(testExpected));
  });
});
