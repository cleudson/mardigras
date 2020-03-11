const cleanString = require('../utils/cleanString');
const { separators } = require('../constants');

const clearOutputSize = (item) => cleanString(item.output, separators).length;

module.exports = (maskOutput) => (maskOutput
  .sort((prev, curr) => (
    clearOutputSize(curr) - clearOutputSize(prev)
  ))
  .filter((item, i, arr) => (
    clearOutputSize(item) === clearOutputSize(arr[0])
  ))
  .filter((item, i, arr) => {
    const someCompleted = arr.some((el) => el.completed);
    if (!someCompleted) {
      return item;
    }
    return item.completed;
  })
  .reduce((prev, curr) => (
    (prev.cleanedMask.length < curr.cleanedMask.length) ? prev : curr
  ))
);
