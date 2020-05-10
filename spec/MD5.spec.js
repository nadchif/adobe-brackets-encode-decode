/**
 *  File: MD5.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/MD5.js =>', ()=>{
    const encodeToMD5 = require('../src/convertors/MD5').encodeToMD5;
    const encodeToSHA256 = require('../src/convertors/SHA256').encodeToSHA256;
  });
});
