"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanString_1 = __importDefault(require("../utils/cleanString"));
const constants_1 = require("../constants");
const clearOutputSize = (item) => cleanString_1.default(item.output, constants_1.separators).length;
const defineFinalMask = (maskOutput) => (maskOutput
    .sort((prev, curr) => (clearOutputSize(curr) - clearOutputSize(prev)))
    .filter((item, i, arr) => (clearOutputSize(item) === clearOutputSize(arr[0])))
    .filter((item, i, arr) => {
    const someCompleted = arr.some((el) => el.completed);
    if (!someCompleted) {
        return item;
    }
    return item.completed;
})
    .reduce((prev, curr) => ((prev.cleanedMask.length < curr.cleanedMask.length) ? prev : curr)));
exports.default = defineFinalMask;
