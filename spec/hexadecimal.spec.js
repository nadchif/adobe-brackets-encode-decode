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

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      // eslint-disable-next-line max-len
      const encodedText = '746869734953615055524574657874a';
      expect(encodeToHex(clearText)) == encodedText;
      expect(decodeFromHex(encodedText)) == clearText;
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'thisISaPUREtextWITH1225';
      // eslint-disable-next-line max-len
      const encodedText = '7468697349536150555245746578745749544831323235';
      expect(encodeToHex(clearText)) == encodedText;
      expect(decodeFromHex(encodedText)) == clearText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        // eslint-disable-next-line max-len
        const encodeText = '746869732069732061207465787420636f6e7461696e696e6720737061636573';
        expect(encodeToHex(clearText)) == clearText;
        expect(decodeFromHex(encodeText)) == clearText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = '\'\"\\\/=!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = '275c225c5c5c2f3d21402324255e262a28297b7d5b5d3b';
        expect(encodeToHex(clearText)) == encodeText;
        expect(decodeFromHex(encodeText)) == clearText;
      });
    });
  });
});
