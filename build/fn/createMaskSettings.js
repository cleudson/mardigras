"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reorderMaskSettings_1 = __importDefault(require("./reorderMaskSettings"));
const createMaskObject_1 = __importDefault(require("./createMaskObject"));
const createMaskSettings = (pattern) => {
    const maskArray = Array.isArray(pattern) ? pattern : [pattern];
    const maskSettings = maskArray.map((mask) => createMaskObject_1.default(mask));
    const orderedMaskSettings = reorderMaskSettings_1.default(maskSettings);
    return orderedMaskSettings;
};
exports.default = createMaskSettings;
