"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanMask_1 = __importDefault(require("./cleanMask"));
const blindMask_1 = __importDefault(require("./blindMask"));
const createMaskObject = (mask) => {
    const originalMask = [...mask];
    return {
        originalMask,
        cleanedMask: cleanMask_1.default(mask),
        blindedMask: blindMask_1.default(originalMask),
    };
};
exports.default = createMaskObject;
