"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrayToString_1 = __importDefault(require("../utils/arrayToString"));
const cleanString_1 = __importDefault(require("../utils/cleanString"));
const constants_1 = require("../constants");
const simplifyMaskArray = (arr) => {
    const arrToString = arrayToString_1.default(arr);
    return cleanString_1.default(arrToString, constants_1.separators);
};
exports.default = simplifyMaskArray;
