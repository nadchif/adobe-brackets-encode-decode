/**
 *  File: main.spec.js
 *  Author: Chif <nadchif@gmail.com>, Shankhanil <shankha.rik@gmail.com>
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe(' URI Convertor=>', ()=>{
    const encodeToURI = require('../src/convertors/uri').encodeToURI;
    const decodeFromURI = require('../src/convertors/uri').decodeFromURI;

    it('Should keep pure text unchanged', () => {
      const clearText = 'ThisISaPUREtext';
      expect(encodeToURI(clearText)) == clearText;
      expect(decodeFromURI(clearText)) == clearText;
    });
    it('Should keep numbers unchanged', () => {
      const clearText = '223.2455';
      expect(encodeToURI(clearText)) == clearText;
      expect(decodeFromURI(clearText)) == clearText;
    });
    describe('Encode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        const encodeText = 'this%20is%20a%20text%20containing%20spaces';
        expect(encodeToURI(clearText)) == clearText;
        expect(decodeFromURI(encodeText)) == clearText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = 'this is a \'text\':spaces and "special_characters",along with more-special-chars,including =!@#$%^&*(){}[];';
        const encodeText = 'this%20is%20a%20%5C%27text%5C%27%3Aspaces%20and%20%22special_characters%22%2Calong%20with%20more-special-chars%2Cincluding%20%3D%21%40%23%24%25%5E%26%2A%28%29%7B%7D%5B%5D%3B';
        expect(encodeToURI(clearText)) == encodeText;
        expect(decodeFromURI(encodeText)) == clearText;
      });
    });
  });


  describe(' BASE64 Convertor=>', ()=>{
    const encodeToBase64 = require('../src/convertors/base64').encodeToBase64;
    const decodeFromBase64 = require('../src/convertors/base64').decodeFromBase64;

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = 'dGhpc0lTYVBVUkV0ZXh0';
      expect(encodeToBase64(clearText)) == encodedText;
      expect(decodeFromBase64(encodedText)) == clearText;
    });
    it('Should encode and decode pure numbers', () => {
      const clearText = '223.2455';
      const encodedText = 'MjIzLjI0NTU=';
      expect(encodeToBase64(clearText)) == encodedText;
      expect(decodeFromBase64(encodedText)) == clearText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        const encodeText = 'dGhpcyBpcyBhIHRleHQgY29udGFpbmluZyBzcGFjZXM=';
        expect(encodeToBase64(clearText)) == clearText;
        expect(decodeFromBase64(encodeText)) == clearText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = 'this is a \'text\':spaces and "special_characters",along with more-special-chars,including =!@#$%^&*(){}[];';
        const encodeText = 'dGhpcyBpcyBhIFwndGV4dFwnOnNwYWNlcyBhbmQgInNwZWNpYWxfY2hhcmFjdGVycyIsYWxvbmcgd2l0aCBtb3JlLXNwZWNpYWwtY2hhcnMsaW5jbHVkaW5nID0hQCMkJV4mKigpe31bXTs=';
        expect(encodeToBase64(clearText)) == encodeText;
        expect(decodeFromBase64(encodeText)) == clearText;
      });
      it('Should encode and decode text with New line', ()=>{
        // NEED REVIEW
        const clearText = 'this is a line of text\nThis is another line of text';
        const encodeText = 'dGhpcyBpcyBhIGxpbmUgb2YgdGV4dA0KVGhpcyBpcyBhbm90aGVyIGxpbmUgb2YgdGV4dA==';
        expect(encodeToBase64(clearText)) == encodeText;
        expect(decodeFromBase64(encodeText)) == clearText;
      });
    });
  });
  describe(' BINARY Convertor=>', ()=>{
    const encodeToBin = require('../src/convertors/bin').encodeToBin;
    const decodeFromBin = require('../src/convertors/bin').decodeFromBin;

    it('Should encode and decode pure text', () => {
      const clearText = 'thisISaPUREtext';
      const encodedText = '011101000110100001101001011100110100100101010011011000010101000001010101010100100100010101110100011001010111100001110100';
      expect(encodeToBin(clearText)) == encodedText;
      expect(decodeFromBin(encodedText)) == clearText;
    });
    describe('Encode/decode testing special characters =>', () => {
      it('should encode and decode text with spaces', () =>{
        const clearText = 'this is a text containing spaces';
        const encodeText = '0111010001101000011010010111001100100000011010010111001100100000011000010010000001110100011001010111100001110100001000000110001101101111011011100111010001100001011010010110111001101001011011100110011100100000011100110111000001100001011000110110010101110011';
        expect(encodeToBin(clearText)) == clearText;
        expect(decodeFromBin(encodeText)) == clearText;
      });
      it('Should encode and decode text with special characters', ()=>{
        // NEED REVIEW
        const clearText = '\'\"\\\/=!@#$%^&*(){}[];';
        const encodeText = '010111000010011101011100001000100101110001011100010111000010111100111101001000010100000000100011001001000010010101011110001001100010101000101000001010010111101101111101010110110101110100111011';
        expect(encodeToBin(clearText)) == encodeText;
        expect(decodeFromBin(encodeText)) == clearText;
      });
    });
  });

/*
  const encodeToHtmlEntities = require('convertors/htmlentities').encodeToHtmlEntities;
  const decodeFromHtmlEntities = require('convertors/htmlentities').decodeFromHtmlEntities;

  const encodeNlToBr = require('convertors/nl2br').encodeNlToBr;
  const decodeNlFromBr = require('convertors/nl2br').decodeNlFromBr;

  const encodeToHex = require('convertors/hexadecimal').encodeToHex;
  const decodeFromHex = require('convertors/hexadecimal').decodeFromHex;

  const encodeToMD5 = require('convertors/MD5').encodeToMD5;

  const encodeToSHA256 = require('convertors/SHA256').encodeToSHA256;

  const encodeToPHPSerial = require('convertors/PHPSerialize').encodeToPHPSerial;
  const encodeIntToPHPSerial = require('convertors/PHPSerialize').encodeIntToPHPSerial;
  const encodeFloatToPHPSerial = require('convertors/PHPSerialize').encodeFloatToPHPSerial;
  const decodeFromPHPSerial = require('convertors/PHPSerialize').decodeFromPHPSerial; */
});
