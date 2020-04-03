import { allowedChars, placeholder } from '../constants';
const blindMask = (pattern) => pattern.map((el) => {
    if (el.match(allowedChars)) {
        return placeholder;
    }
    return el;
});
export default blindMask;
