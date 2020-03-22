"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanString_1 = __importDefault(require("../utils/cleanString"));
const constants_1 = require("../constants");
const cleanMask = (pattern) => {
    const maskWithoutSeparators = cleanString_1.default(pattern, constants_1.separators);
    const maskValidChars = maskWithoutSeparators.match(constants_1.allowedChars) || '';
    if (maskWithoutSeparators.length !== maskValidChars.length) {
        throw new Error('The mask has some invalid pattern character.');
    }
    return maskValidChars;
};
exports.default = cleanMask;
