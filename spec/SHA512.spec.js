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
      const encodedText = '6179a35e21da636ce44afd549e01cce9e54952f3f7ec40060698a3f58aeb1a5a4e3e82164ee22394d362fdd845570e8df86053bc051b9e3ae6fa4290504579c7';
      expect(encodeToSHA512(clearText)).toEqual(encodedText);
    });
    it('Should encode and decode text with numbers', () => {
      const clearText = 'Python3';
      // eslint-disable-next-line max-len
      const encodedText = 'a1dbd46eb7534c4b4bb4b13ded146946bc88b4ac73b8754b424b31295d74a152f800c63f0b832c1048d1426626cefc6efde198b894b0c7253775f38281ce9714';
      expect(encodeToSHA512(clearText)).toEqual(encodedText);
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'I am an HTML developer.';
        // eslint-disable-next-line max-len
        const encodeText = 'ed74592abf2983c44b403abf4cb508edcb65583f63552345b72937df59f3cc3e3e2b4f0d02025af896a3ed686a21f5aadf490a7e8bec15c698d6c976841e3255';
        expect(encodeToSHA512(clearText)).toEqual(encodeText);
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = "I am $ure buT I am tout à fait sure que c'est un coup de Fantomas !"; // A very good french reference :p
        // eslint-disable-next-line max-len
        const encodeText = '104403961887e634c0d1d6862a94fc9a6550e008e29534c239016e82619b2e0b2a0e813298036a7989bd8afc039b8ec033772b6ac54f85d4fecbb249a9223150';
        expect(encodeToSHA512(clearText)).toEqual(encodeText);
      });
    });
  });
});
