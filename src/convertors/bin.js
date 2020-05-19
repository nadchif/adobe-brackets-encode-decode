/**
 *  File: BIN.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes String <--> Binary
 */

define(function(require, exports) {
  // encode the provided string. function must return a string;
  const encodeToBin = (text) => {
    const zeroPad = (num) => '00000000'.slice(String(num).length) + num;
    return text.replace(/[\s\S]/g, (str) => {
      const binstr = zeroPad(str.charCodeAt().toString(2));
      return binstr;
    });
  };

  // decode the provided string. function must return a string;
  const decodeFromBin = (text) => {
    text = text.replace(/\s+/g, '');
    text = text.match(/.{1,8}/g).join(' ');

    const newBinary = text.split(' ');
    const binaryCode = [];

    for (i = 0; i < newBinary.length; i++) {
      binaryCode.push(String.fromCharCode(parseInt(newBinary[i], 2)));
    }

    return binaryCode.join('');
  };
  // export the encoder for use in the main module
  exports.encodeToBin = encodeToBin;
  // export the decoder for use in the main module
  exports.decodeFromBin = decodeFromBin;
});
