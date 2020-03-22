"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patterns = {
    // only numbers
    '#': new RegExp('\\d'),
    // only letters
    '&': new RegExp('[a-zA-Z]'),
    // letters and numbers
    '@': new RegExp('[a-zA-Z0-9]'),
    // special characters
    $: new RegExp('[^a-zA-Z0-9\\s]'),
};
exports.patterns = patterns;
const allowedChars = new RegExp('[#@&\\$]', 'gi');
exports.allowedChars = allowedChars;
const separators = new RegExp('[,\\.\\/(\\[\\{\\}\\])|\\-_\\*\\^:;\\|—¯]', 'g');
exports.separators = separators;
const placeholder = 'ø'; // Alt 0248
exports.placeholder = placeholder;
