/**
 *  File: nl2br.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/nl2br.js =>', ()=>{
    const encodeNlToBr = require('../src/convertors/nl2br').encodeNlToBr;
    const decodeNlFromBr = require('../src/convertors/nl2br').decodeNlFromBr;
    it('Should keep plain text without new line unchanged', () => {
      const clearText = 'this is a plain and pure text';
      expect(encodeNlToBr(clearText)).toEqual(clearText);
      expect(decodeNlFromBr(clearText)).toEqual(clearText);
    });

    it('Should handle plain text with single new line', () => {
      const clearText = 'this is a plain\npure text';
      const encodedText = 'this is a plain<br>pure text';
      expect(encodeNlToBr(clearText)).toEqual(encodedText);
      expect(decodeNlFromBr(encodedText)).toEqual(clearText);
    });

    it('Should handle plain text with multiple new line', () => {
      const clearText = 'this\nis\na\nplain\npure\ntext';
      const encodedText = 'this<br>is<br>a<br>plain<br>pure<br>text';
      expect(encodeNlToBr(clearText)).toEqual(encodedText);
      expect(decodeNlFromBr(encodedText)).toEqual(clearText);
    });
  });
});
