/**
 *  File: morsecode.spec.js
 *  Author(s):
 */

global.brackets = require('./support/mock.brackets')();

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/morsecode.js =>', ()=>{
    const encodeToMorseCode = require('../src/convertors/morsecode').encodeToMorseCode;
    const decodeFromMorseCode = require('../src/convertors/morsecode').decodeFromMorseCode;
  });
});
