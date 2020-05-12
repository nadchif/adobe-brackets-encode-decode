/**
 *  File: ASCII.spec.js
 *  Author(s): unguest (Based on a work of Shankhanil <shankha.rik@gmail.com>)
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/ASCII.js =>', ()=>{
    const encodeToASCII = require('../convertors/ascii').encodeToASCII;
    it('Should encode and decode pure text', () => {
      const clearText = 'javascript';
      // eslint-disable-next-line max-len
      const encodedText = '106971189711599114105112116';
      expect(encodeToASCII(clearText)) == encodedText;
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'Python3';
      // eslint-disable-next-line max-len
      const encodedText = '8012111610411111051';
      expect(encodeToASCII(clearText)) == encodedText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'I am an HTML developer.';
        // eslint-disable-next-line max-len
        const encodeText = '733297109329711032728477763210010111810110811111210111446';
        expect(encodeToASCII(clearText)) == encodeText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = "I am $ure buT I am tout a fait sure que c'est un coup de Fantomas !"; // A very good french reference :p
        // eslint-disable-next-line max-len
        const encodeText = '7332971093236117114101329811784327332971093211611111711632973210297105116321151171141013211311710132993910111511632117110329911111711232100101327097110116111109971153233';
        expect(encodeToASCII(clearText)) == encodeText;
      });
    });
  });
});
