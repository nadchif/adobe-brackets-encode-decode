/**
 *  File: PHPSerialize.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/MD5.js =>', ()=>{
    const encodeIntToPHPSerial = require('../convertors/PHPSerialize').encodeIntToPHPSerial;
    const encodeFloatToPHPSerial = require('../convertors/PHPSerialize').encodeFloatToPHPSerial;
  });
});
