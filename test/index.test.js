/* eslint-disable no-undef */
/* eslint import/no-unresolved: [2, { ignore: ['src'] }] */
const mdg = require('../src/index.js');

const settings = {
  pattern: ['#.&/@', '$-@_##'],
};
const settingsExpected = ['pattern', 'onError', 'onSuccess', 'validation', 'checkValue', 'checkField'];


describe('Run MdG', () => {
  test('Check output settings', () => {
    expect(Object.keys(mdg(settings)))
      .toEqual(expect.arrayContaining(settingsExpected));
  });
  test('Call checkValue method', () => {
    const checkValue1 = mdg(settings).checkValue('1lj');
    const checkValue1Expected = {
      input: '1lj',
      output: '1.l/j',
      completed: true,
      isValid: null,
    };
    const checkValue2 = mdg(settings).checkValue('223');
    const checkValue2Expected = {
      input: '223',
      output: '2.3',
      completed: false,
      isValid: null,
    };
    const checkValue3 = mdg(settings).checkValue('@j44');
    const checkValue3Expected = {
      input: '@j44',
      output: '@-j_44',
      completed: true,
      isValid: null,
    };

    expect(checkValue1)
      .toEqual(expect.objectContaining(checkValue1Expected));
    expect(checkValue2)
      .toEqual(expect.objectContaining(checkValue2Expected));
    expect(checkValue3)
      .toEqual(expect.objectContaining(checkValue3Expected));
  });
  test('Call checkField method', () => {
    document.body.innerHTML = `
      <input class="js-mdg" value=""/>
    `;
    const inputField = document.querySelector('.js-mdg');
    const value = '$m89';
    const valueExpected = '$-m_89';
    inputField.value = value;
    mdg(settings).checkField(inputField);
    inputField.dispatchEvent(new Event('input'));
    expect(inputField.value)
      .toEqual(valueExpected);
  });
});
