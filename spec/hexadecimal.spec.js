/**
 *  File: hexadecimal.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/hexadecimal.js =>', ()=>{
    const encodeToHex = require('../src/convertors/hexadecimal').encodeToHex;
    const decodeFromHex = require('../src/convertors/hexadecimal').decodeFromHex;
  });
});
