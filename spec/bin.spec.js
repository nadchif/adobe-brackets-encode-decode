/**
 *  File: bin.spec.js
 *  Author(s): Chif <nadchif@gmail.com>, Shankhanil <shankha.rik@gmail.com>
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('bin.js =>', ()=>{
    const encodeToBin = require('../src/convertors/bin').encodeToBin;
    const decodeFromBin = require('../src/convertors/bin').decodeFromBin;

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      // eslint-disable-next-line max-len
      const encodedText = '011101000110100001101001011100110100100101010011011000010101000001010101010100100100010101110100011001010111100001110100';
      expect(encodeToBin(clearText)) == encodedText;
      expect(decodeFromBin(encodedText)) == clearText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        // eslint-disable-next-line max-len
        const encodeText = '0111010001101000011010010111001100100000011010010111001100100000011000010010000001110100011001010111100001110100001000000110001101101111011011100111010001100001011010010110111001101001011011100110011100100000011100110111000001100001011000110110010101110011';
        expect(encodeToBin(clearText)) == clearText;
        expect(decodeFromBin(encodeText)) == clearText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = '\'\"\\\/=!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = '010111000010011101011100001000100101110001011100010111000010111100111101001000010100000000100011001001000010010101011110001001100010101000101000001010010111101101111101010110110101110100111011';
        expect(encodeToBin(clearText)) == encodeText;
        expect(decodeFromBin(encodeText)) == clearText;
      });
    });
  });
});
