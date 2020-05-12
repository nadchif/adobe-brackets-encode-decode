/**
 *  File: SHA256.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/SHA256.js =>', ()=>{
    const encodeToSHA256 = require('../src/convertors/SHA256').encodeToSHA256;
    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      // eslint-disable-next-line max-len
      const encodedText = 'eff2844c77ff2de356e1c16b2ec9b6e238525b1fca3b3c20e7c0b6e41376596b';
      expect(encodeToSHA256(clearText)) == encodedText;
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'thisISaPUREtextWITH1225';
      // eslint-disable-next-line max-len
      const encodedText = '1cc9943238e13d891948ccdca970f46519b70ce570a6328a619fb34ef44b3474';
      expect(encodeToSHA256(clearText)) == encodedText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        // eslint-disable-next-line max-len
        const encodeText = '021b802593087603fc94881c6529dea4da077307b5043a7f03e068f3cbae1edf';
        expect(encodeToSHA256(clearText)) == encodeText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = 'TEXTwithSPECIALchars\'\"\\\/=!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = '685b50ef1e499b48106705e14f26a023eb8c2684442220974ebe8e433a35e43f';
        expect(encodeToSHA256(clearText)) == encodeText;
      });
    });
  });
});
