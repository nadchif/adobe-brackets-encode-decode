/**
 *  File: ASCII.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> ASCII Code
 *
 */

define((require, exports) => {
  const encodeToASCII = (text) =>{
    const asciiArray = [];

    for (const char of Array.from(text)) {
      asciiArray.push(char.charCodeAt(0));
    }

    return asciiArray.join('');
  };

  const decodeFromASCII = (text) =>{
    const codes = [];
    for (let i = 0; i < text.length;) {
      const numDigits = text[i] === '1' ? 3 : 2;
      codes.push(text.substr(i, numDigits));
      i += numDigits;
    }
    return String.fromCharCode(...codes);
  };
  exports.encodeToASCII = encodeToASCII;
  exports.decodeFromASCII = decodeFromASCII;
});
