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
    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = '071e24a835dce48cf81f6ac192c9852d';
      expect(encodeToMD5(clearText)).toEqual(encodedText);
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'thisISaPUREtextWITH1225';
      const encodedText = '7246440630288b1caf15773c6c695297';
      expect(encodeToMD5(clearText)).toEqual(encodedText);
    });
    describe('Encode/decode testing special characters =>', () => {
      it('Should encode and decode text with special characters', () => {
        const clearText = 'TEXTwithSPECIALchars\'"\\/=!@#$%^&*(){}[];';
        const encodeText = 'ee6c6e0629289cb8e0867a48b93f8bab';
        expect(encodeToMD5(clearText)).toEqual(encodeText);
      });
    });
  });
});
