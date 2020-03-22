import { allowedChars, placeholder } from '../constants';

const blindMask = (pattern:Array<string>) => pattern.map((el:string) => {
  if (el.match(allowedChars)) {
    return placeholder;
  }
  return el;
});

export default blindMask;
