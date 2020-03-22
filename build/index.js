import applyMask from './fn/applyMask';
function mdg({ pattern, onError, onSuccess, validation, }) {
    const mdgSettings = {
        pattern, onError, onSuccess, validation,
    };
    const checkValue = (input) => applyMask({ input, ...mdgSettings });
    const checkField = (inputField, eventType = 'input') => {
        inputField.addEventListener(eventType, (event) => {
            const target = event.target;
            target.value = checkValue(target.value).output;
        });
    };
    const settings = { ...mdgSettings, checkValue, checkField };
    Object.freeze(settings);
    return settings;
}
export default mdg;
