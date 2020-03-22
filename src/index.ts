import applyMask from './fn/applyMask';
import { MdgInitiator, MdgPublic, MaskOutput } from './settings/interfaces';

function mdg({
  pattern, onError, onSuccess, validation,
}:MdgInitiator):MdgPublic {
  const mdgSettings = {
    pattern, onError, onSuccess, validation,
  };
  const checkValue = (input:string):MaskOutput => applyMask({ input, ...mdgSettings });
  const checkField = (inputField: HTMLInputElement, eventType:string = 'input'):void => {
    inputField.addEventListener(eventType, (event: Event) => {
      const target = event.target as HTMLInputElement;
      target.value = checkValue(target.value).output;
    });
  };
  const settings = { ...mdgSettings, checkValue, checkField };
  Object.freeze(settings);
  return settings;
}

export default mdg;
