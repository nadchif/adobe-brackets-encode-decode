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

    it('Should handle pure text', () =>{
      const clearText = 'thisISaPUREtext';
      const encodedText = '- .... .. ... .. ... .- .--. ..- .-. . - . -..- -';
      expect(encodeToMorseCode(clearText)) == encodedText;
      expect(decodeFromMorseCode(encodedText)) == clearText;
    });
    it('Should handle text with spaces', () =>{
      const clearText = 'this is a text with spaces';
      const encodedText = '- .... .. ...     .. ...     .-     - . -..- -     .-- .. - ....     ... .--. .- -.-. . ...';
      expect(encodeToMorseCode(clearText)) == encodedText;
      expect(decodeFromMorseCode(encodedText)) == clearText;
    });

    it('Should handle text with numbers', () =>{
      const clearText = 'this IS a text with 21455';
      const encodedText = '- .... .. ...     .. ...     .-     - . -..- -     .-- .. - ....     ..--- .---- ....- ..... .....';
      expect(encodeToMorseCode(clearText)) == encodedText;
      expect(decodeFromMorseCode(encodedText)) == clearText;
    });

    it('Should handle text with unsupported characters', () =>{
      const clearText = 'this,IS:a;text-with_special+chars';
      // eslint-disable-next-line max-len
      const encodedText = '- .... .. ... --··-- .. ... ---··· .- -·-·-· - . -..- - -····- .-- .. - .... ··--·- ... .--. . -.-. .. .- .-.. ·-·-· -.-. .... .- .-. ...';
      expect(encodeToMorseCode(clearText)) == encodedText;
      expect(decodeFromMorseCode(encodedText)) == clearText;
    });
    // MORE TESTS TO HANDLE INVALID CHARACTERS
  });
});
