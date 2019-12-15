'use strict';

/**
 *  File: NL2BR.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes New Line <--> BR
 */

define(function(require, exports) {
  // encode the provided string. function must return a string;
  const encodeNlToBr = (text) => {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  };

  // decode the provided string. function must return a string;
  const decodeNlFromBr = (text) => {
    return text.replace(/<br\s*\/?>/mg, '\n');
  };

  // export the encoder for use in the main module
  exports.encodeNlToBr = encodeNlToBr;

  // export the decoder for use in the main module
  exports.decodeNlFromBr = decodeNlFromBr;
});
