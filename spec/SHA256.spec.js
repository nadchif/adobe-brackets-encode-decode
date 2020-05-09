/**
 *  File: SHA256.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/SHA256.js =>', ()=>{
    const encodeToMD5 = require('../convertors/MD5').encodeToMD5;
    const encodeToSHA256 = require('../convertors/SHA256').encodeToSHA256;
  });
});
