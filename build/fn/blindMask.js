"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const blindMask = (mask) => mask.map((el) => {
    if (el.match(constants_1.allowedChars)) {
        return constants_1.placeholder;
    }
    return el;
});
exports.default = blindMask;
