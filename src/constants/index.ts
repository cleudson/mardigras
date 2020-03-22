const patterns: any = {
  // only numbers
  '#': new RegExp('\\d'),
  // only letters
  '&': new RegExp('[a-zA-Z]'),
  // letters and numbers
  '@': new RegExp('[a-zA-Z0-9]'),
  // special characters
  $: new RegExp('[^a-zA-Z0-9\\s]'),
};
const allowedChars = new RegExp('[#@&\\$]', 'gi');
const separators = new RegExp('[,\\.\\/(\\[\\{\\}\\])|\\-_\\*\\^:;\\|—¯]', 'g');
const placeholder = 'ø'; // Alt 0248

export {
  patterns,
  allowedChars,
  separators,
  placeholder,
};
