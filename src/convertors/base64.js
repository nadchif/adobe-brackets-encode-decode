'use strict';

/**
 *  File: BASE64.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes String <--> Base 64
 */

define(function(require, exports) {
  // encode the provided string. function must return a string;
  const encodeToBase64 = (text) => {
    return btoa(unescape(encodeURIComponent(text)));
  };
  // decode the provided string. function must return a string;
  const decodeFromBase64 = (text) => {
    let encoded = null;
    try {
      encoded = decodeURIComponent(escape(atob(text)));
    } catch (e) {
      alert('Not valid Base64 string');
    }
    return encoded;
  };
  // export the encoder for use in the main module
  exports.encodeToBase64 = encodeToBase64;
  // export the decoder for use in the main module
  exports.decodeFromBase64 = decodeFromBase64;
});
