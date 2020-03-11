const simplifyMaskArray = require('./simplifyMaskArray');

module.exports = ({
  maskSettings, checkKey, orderByKey, errorMsg,
}) => {
  const maskSettingsCopy = Object.assign([], maskSettings);
  return maskSettingsCopy.sort((prev, curr) => {
    if (simplifyMaskArray(prev[checkKey]) === simplifyMaskArray(curr[checkKey])) {
      throw errorMsg;
    }
    return prev[orderByKey].length - curr[orderByKey].length;
  });
};
