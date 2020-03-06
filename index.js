const applyMask = require('./src/fn/applyMask');
module.exports = function mdg ({pattern, onError, onSuccess, validation}){
  let args = {pattern, onError, onSuccess, validation};
  const check = (input) => applyMask({input, ...args});
  const checkField = (inputField, eventType = 'input') => {
    inputField.addEventListener(eventType , function (event){
        event.target.value = check(event.target.value)['output'];
    })
  }
  const settings = {...args, check, checkField}
  Object.freeze(settings);
  return settings;
};