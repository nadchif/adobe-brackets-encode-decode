/**
 *  File: PHPSerialize.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/MD5.js =>', ()=>{
    const encodeToPHPSerial = require('../convertors/PHPSerialize').encodeToPHPSerial;
    const encodeIntToPHPSerial = require('../convertors/PHPSerialize').encodeIntToPHPSerial;
    const encodeFloatToPHPSerial = require('../convertors/PHPSerialize').encodeFloatToPHPSerial;
    const decodeFromPHPSerial = require('../convertors/PHPSerialize').decodeFromPHPSerial;


    exports.decodeFromPHPSerial = decodeFromPHPSerial;
    it('Should handle pure strings', () =>{
      const s = 'thisISaSTRING';
      const phpSerialObject = 's:11:\"thisISaSTRING\"';
      expect( encodeToPHPSerial(s)) == phpSerialObject;
      expect(encodeFloatToPHPSerial(s)) == s;
      expect(encodeIntToPHPSerial(s)) == s;
      expect(decodeFromPHPSerial(phpSerialObject)) == s;
    });
    it('Should handle strings with numbers', () =>{
      const s = 'thisISaSTRINGwith1225';
      const phpSerialObject = 's:19:\"thisISaSTRINGwith1225\"';
      expect( encodeToPHPSerial(s)) == phpSerialObject;
      expect(encodeFloatToPHPSerial(s)) == s;
      expect(encodeIntToPHPSerial(s)) == s;
      expect(decodeFromPHPSerial(phpSerialObject)) == s;
    });
    it('Should handle numbers', () =>{
      const s = '1225';
      const phpSerialObjectString = 's:4:\"1225\"';
      const phpSerialObjectInt = 'i:1225';
      const phpSerialObjectFloat = 'f:1225.0';
      expect( encodeToPHPSerial(s)) == phpSerialObject;
      expect( encodeIntToPHPSerial(s)) == phpSerialObjectInt;
      expect( encodeFloatToPHPSerial(s)) == phpSerialObjectFloat;

      expect( decodeFromPHPSerial(phpSerialObjectString)) == s;
      expect( decodeFromPHPSerial(phpSerialObjectInt)) == s;
      expect( decodeFromPHPSerial(phpSerialObjectFloat)) == '1225.0';
    });
  });
});
