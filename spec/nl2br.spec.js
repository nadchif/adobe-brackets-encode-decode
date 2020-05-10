/**
 *  File: nl2br.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/nl2br.js =>', ()=>{
    const encodeNlToBr = require('../src/convertors/nl2br').encodeNlToBr;
    const decodeNlFromBr = require('../src/convertors/nl2br').decodeNlFromBr;
  });
});
