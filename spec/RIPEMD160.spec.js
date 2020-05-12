/**
 *  File: SHA1.spec.js
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
      const encodedText = 'c10b83bcea4ab21102611a10ff9add87e2b3e7be';
      expect(encodeToSHA512(clearText)) == encodedText;
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'Python3';
      // eslint-disable-next-line max-len
      const encodedText = '447da4169eed534a51f2c8a5c1d2d88eabcd81df';
      expect(encodeToSHA512(clearText)) == encodedText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'I am an HTML developer.';
        // eslint-disable-next-line max-len
        const encodeText = 'b623aa45cd96afa80d6b9522e747330ff32e450e';
        expect(encodeToSHA512(clearText)) == encodeText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = 'I am $ure buT I am tout à fait sure que c\'est un coup de Fantomas !'; // A very good french reference :p
        // eslint-disable-next-line max-len
        const encodeText = '08d94410de558a66a71cea97d69c356254ab3e3e';
        expect(encodeToSHA512(clearText)) == encodeText;
      });
    });
  });
});
