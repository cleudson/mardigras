/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import fillMaskGaps from 'fn/fillMaskGaps';

const clean = '@#&##';
const settings = {
  raw: ['@', '-', '#', '/', '&', ':', '#', '#'],
  blind: ['ø', '-', 'ø', '/', 'ø', ':', 'ø', 'ø'],
  clean,
};

const inputString1 = '14l52';
const inputString1Expected = {
  output: '1-4/l:52',
  clean,
  completed: true,
};
const inputString2 = '14l5';
const inputString2Expected = {
  output: '1-4/l:5',
  clean,
  completed: false,
};

const inputString3 = '14l5442';
const inputString3Expected = {
  output: '1-4/l:54',
  clean,
  completed: true,
};


describe('Fill mask gaps', () => {
  test('with all gaps completed', () => {
    expect(fillMaskGaps(inputString1, settings))
      .toEqual(expect.objectContaining(inputString1Expected));
  });
  test('with all gaps not completed', () => {
    expect(fillMaskGaps(inputString2, settings))
      .toEqual(expect.objectContaining(inputString2Expected));
  });
  test('when input string exceeds gaps', () => {
    expect(fillMaskGaps(inputString3, settings))
      .toEqual(expect.objectContaining(inputString3Expected));
  });
});
