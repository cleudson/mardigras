"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cleanString_1 = __importDefault(require("../utils/cleanString"));
const constants_1 = require("../constants");
const generateMaskOutput_1 = __importDefault(require("./generateMaskOutput"));
const createMaskSettings_1 = __importDefault(require("./createMaskSettings"));
const defineFinalMask_1 = __importDefault(require("./defineFinalMask"));
const none = () => null;
const applyMask = ({ input, pattern, onSuccess = none, onError = none, validation = none, }) => {
    const maskGroup = createMaskSettings_1.default(pattern);
    const inputWithoutSeparators = cleanString_1.default(input, constants_1.separators);
    const maskOutput = maskGroup.map((maskObject) => generateMaskOutput_1.default(inputWithoutSeparators, maskObject));
    const finalMask = defineFinalMask_1.default(maskOutput);
    const { completed, output } = finalMask;
    const isValid = validation(output);
    const validationIsFalse = (isValid === false);
    if (validationIsFalse) {
        onError();
    }
    else {
        const callback = completed ? onSuccess : onError;
        callback();
    }
    return {
        input,
        output,
        completed,
        isValid,
    };
};
exports.default = applyMask;
