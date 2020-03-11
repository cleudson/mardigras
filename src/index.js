/*
eslint no-param-reassign:["error", { "props": true, "ignorePropertyModificationsFor": ["event"] }]
*/
const applyMask = require('./fn/applyMask');

module.exports = function mdg({
  pattern, onError, onSuccess, validation,
}) {
  const args = {
    pattern, onError, onSuccess, validation,
  };
  const checkValue = (input) => applyMask({ input, ...args });
  const checkField = (inputField, eventType = 'input') => {
    inputField.addEventListener(eventType, (event) => {
      event.target.value = checkValue(event.target.value).output;
    });
  };
  const settings = { ...args, checkValue, checkField };
  Object.freeze(settings);
  return settings;
};
