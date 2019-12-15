'use strict';

/**
 *  File: URI.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  Encodes and decodes String <--> URI
 */

define(function(require, exports) {
  // encode the provided string. function must return a string;
  const encodeToURI = (text) => {
    return encodeURI(text);
  };

  // decode the provided string. function must return a string;
  const decodeFromURI = (text) => {
    return decodeURI(text);
  };

  // export the encoder for use in the main module
  exports.encodeToURI = encodeToURI;

  // export the decoder for use in the main module
  exports.decodeFromURI = decodeFromURI;
});
