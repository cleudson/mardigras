"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
const simplifyMaskArray_1 = __importDefault(require("./simplifyMaskArray"));
const reorderMaskSetttings = (maskSettings) => maskSettings.sort((prev, curr) => {
    if (simplifyMaskArray_1.default(prev.originalMask) === simplifyMaskArray_1.default(curr.originalMask)) {
        throw new Error('Two or more masks have the same amount of input characters. You must correct it.');
    }
    return prev.cleanedMask.length - curr.cleanedMask.length;
});
exports.default = reorderMaskSetttings;
