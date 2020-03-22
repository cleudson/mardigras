import { allowedChars, placeholder } from '../constants';
const blindMask = (mask) => mask.map((el) => {
    if (el.match(allowedChars)) {
        return placeholder;
    }
    return el;
});
export default blindMask;
