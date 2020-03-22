"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayToString_1 = __importDefault(require("../utils/arrayToString"));
const cleanString_1 = __importDefault(require("../utils/cleanString"));
const constants_1 = require("../constants");
const fillMaskGaps = (inputString, maskObject) => {
    const invalidChars = new RegExp(`${constants_1.separators.source}*${constants_1.placeholder}.*`, 'g');
    const replacedString = [...inputString].reduce((acc, char) => acc.replace(constants_1.placeholder, char), arrayToString_1.default(maskObject.blindedMask));
    const output = cleanString_1.default(replacedString, invalidChars);
    const { cleanedMask, originalMask } = maskObject;
    return {
        cleanedMask,
        output,
        completed: (output.length === originalMask.length),
    };
};
exports.default = fillMaskGaps;
