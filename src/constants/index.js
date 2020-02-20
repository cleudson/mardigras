module.exports = {
    patterns:{
        // only numbers
        '#': new RegExp('\\d'),
        // only letters
        '&': new RegExp('[a-zA-Z]'),
        // letters and numbers
        '@': new RegExp('[a-zA-Z0-9]'),
        // special characters
        '$': new RegExp('[^a-zA-Z0-9\\s]')
    },
    allowedChars: new RegExp('[#@&\\$]', 'gi'),
    separators: new RegExp('[,\\.\\/(\\[\\{\\}\\])|\\-_\\*\\^:;\\|—¯]', 'g'),
    placeholder: 'ø',	//Alt 0248
}