"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
const constants_1 = require("../constants");
const fillMaskGaps_1 = __importDefault(require("./fillMaskGaps"));
const generateMaskOutput = (inputWithoutSeparators, maskObject) => {
    const { cleanedMask } = maskObject;
    const inputString = [...inputWithoutSeparators].reduce((acc, char, i, arr) => {
        const currentRegex = constants_1.patterns[cleanedMask[i]];
        const nextRegex = constants_1.patterns[cleanedMask[i + 1]];
        if (!nextRegex || !currentRegex) {
            arr.splice(0);
        }
        if (!currentRegex) {
            return acc;
        }
        if (currentRegex.test(char)) {
            return acc + char;
        }
        return acc;
    }, '');
    return fillMaskGaps_1.default(inputString, maskObject);
};
exports.default = generateMaskOutput;
