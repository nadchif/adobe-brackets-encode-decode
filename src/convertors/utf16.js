'use strict';

/**
 *  File: UTF16.js
 *  Author: Gaurav <gauraws@gmail.com>
 *  Description:  Encodes String --> UTF-16
 */

define(function(require, exports) {
  const encodeToUtf16 = (text) => {
    // encode the provided string. function must return a string;
    let encoded = '';
    for (let i = 0; i < text.length; i++) {
      encoded += text.codePointAt(i);
    }
    return encoded; // result must be a String
  };

  // export the encoder for use in the main module
  exports.encodeToUtf16 = encodeToUtf16;
});
