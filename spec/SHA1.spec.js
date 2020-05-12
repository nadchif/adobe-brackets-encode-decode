/**
 *  File: SHA512.spec.js
 *  Author(s): unguest (Based on a work of Shankhanil <shankha.rik@gmail.com>)
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/SHA512.js =>', ()=>{
    const encodeToSHA512 = require('../src/convertors/SHA512').encodeToSHA512;
    it('Should encode and decode pure text', () => {
      const clearText = 'javascript';
      // eslint-disable-next-line max-len
      const encodedText = 'b6e13ad53d8ec41b034c49f131c64e99cf25207a';
      expect(encodeToSHA512(clearText)) == encodedText;
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'Python3';
      // eslint-disable-next-line max-len
      const encodedText = '260cdb02eef94c3ec0c5d6feeb1243b43c8d1491';
      expect(encodeToSHA512(clearText)) == encodedText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'I am an HTML developer.';
        // eslint-disable-next-line max-len
        const encodeText = 'd8d2d4f4ccca7ba90a27a751e95a18251a570cef';
        expect(encodeToSHA512(clearText)) == encodeText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = 'I am $ure buT I am tout à fait sure que c\'est un coup de Fantomas !'; // A very good french reference :p
        // eslint-disable-next-line max-len
        const encodeText = '52f4c74eaabca2bbaa1f21eed97574e161b19f3c';
        expect(encodeToSHA512(clearText)) == encodeText;
      });
    });
  });
});
