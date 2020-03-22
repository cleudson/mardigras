import { allowedChars, placeholder } from '../constants';

const blindMask = (mask:Array<string>) => mask.map((el:string) => {
  if (el.match(allowedChars)) {
    return placeholder;
  }
  return el;
});

export default blindMask;
