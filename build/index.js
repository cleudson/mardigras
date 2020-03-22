"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const applyMask_1 = __importDefault(require("./fn/applyMask"));
const mdg = ({ pattern, onError, onSuccess, validation, }) => {
    const mdgSettings = {
        pattern, onError, onSuccess, validation,
    };
    const checkValue = (input) => applyMask_1.default({ input, ...mdgSettings });
    const checkField = (inputField, eventType = 'input') => {
        inputField.addEventListener(eventType, (event) => {
            const target = event.target;
            target.value = checkValue(target.value).output;
        });
    };
    const settings = { ...mdgSettings, checkValue, checkField };
    Object.freeze(settings);
    return settings;
};
exports.default = mdg;
