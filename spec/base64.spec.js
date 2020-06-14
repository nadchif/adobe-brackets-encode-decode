/**
 *  File: base64.spec.js
 *  Author(s): Chif <nadchif@gmail.com>, Shankhanil <shankha.rik@gmail.com>
 */

global.brackets = require('./support/mock.brackets')();
require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';

  describe('src/base64.js =>', ()=>{
    const encodeToBase64 = require('../src/convertors/base64').encodeToBase64;
    const decodeFromBase64 = require('../src/convertors/base64').decodeFromBase64;

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = 'dGhpc0lTYVBVUkV0ZXh0';
      expect(encodeToBase64(clearText)).toEqual(encodedText);
      expect(decodeFromBase64(encodedText)).toEqual(clearText);
    });
    it('Should encode and decode pure numbers', () => {
      const clearText = '223.2455';
      const encodedText = 'MjIzLjI0NTU=';
      expect(encodeToBase64(clearText)).toEqual(encodedText);
      expect(decodeFromBase64(encodedText)).toEqual(clearText);
    });
    describe('special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        const encodeText = 'dGhpcyBpcyBhIHRleHQgY29udGFpbmluZyBzcGFjZXM=';
        expect(encodeToBase64(clearText)).toEqual(encodeText);
        expect(decodeFromBase64(encodeText)).toEqual(clearText);
      });
      it('Should encode and decode text with special characters', ()=>{
        const clearText = 'this is a text:spaces and "special_characters",along with more-special-chars,including =!@#$%^&*(){}[];';
        // eslint-disable-next-line max-len
        const encodeText = 'dGhpcyBpcyBhIHRleHQ6c3BhY2VzIGFuZCAic3BlY2lhbF9jaGFyYWN0ZXJzIixhbG9uZyB3aXRoIG1vcmUtc3BlY2lhbC1jaGFycyxpbmNsdWRpbmcgPSFAIyQlXiYqKCl7fVtdOw==';
        expect(encodeToBase64(clearText)).toEqual(encodeText);
        expect(decodeFromBase64(encodeText)).toEqual(clearText);
      });
      it('Should encode and decode text with New line', ()=>{
        const clearText = 'this is a line of text\nThis is another line of text';
        const encodedText = 'dGhpcyBpcyBhIGxpbmUgb2YgdGV4dApUaGlzIGlzIGFub3RoZXIgbGluZSBvZiB0ZXh0';
        expect(encodeToBase64(clearText)).toEqual(encodedText);
        expect(decodeFromBase64(encodedText)).toEqual(clearText);
      });
    });
  });
});
