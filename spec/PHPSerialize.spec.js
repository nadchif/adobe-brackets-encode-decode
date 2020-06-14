/**
 *  File: PHPSerialize.spec.js
 *  Author(s):
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('src/PHPSerialize.js =>', ()=>{
    const encodeToPHPSerial = require('../src/convertors/PHPSerialize').encodeToPHPSerial;
    const encodeIntToPHPSerial = require('../src/convertors/PHPSerialize').encodeIntToPHPSerial;
    const encodeFloatToPHPSerial = require('../src/convertors/PHPSerialize').encodeFloatToPHPSerial;
    const decodeFromPHPSerial = require('../src/convertors/PHPSerialize').decodeFromPHPSerial;

    it('Should handle pure strings', () => {
      const s = 'thisISaSTRING';
      const phpSerialObject = 's:13:"thisISaSTRING"';
      expect(encodeToPHPSerial(s)).toEqual(phpSerialObject);
      expect(decodeFromPHPSerial(phpSerialObject)).toEqual(s);
    });
    it('Should handle strings with numbers', () => {
      const s = 'thisISaSTRINGwith1225';
      const phpSerialObject = 's:21:"thisISaSTRINGwith1225"';
      expect(encodeToPHPSerial(s)).toEqual(phpSerialObject);
      expect(decodeFromPHPSerial(phpSerialObject)).toEqual(s);
    });
    it('Should handle numbers', () => {
      const s = '1225';
      const phpSerialObjectString = 's:4:"1225"';
      const phpSerialObjectInt = 'i:1225';
      const phpSerialObjectFloat = 'd:1225.1';
      expect(encodeToPHPSerial(s)).toEqual(phpSerialObjectString);
      expect(encodeIntToPHPSerial(s)).toEqual(phpSerialObjectInt);
      expect(encodeFloatToPHPSerial('1225.1')).toEqual(phpSerialObjectFloat);

      expect(decodeFromPHPSerial(phpSerialObjectString)).toEqual(s);
      expect(decodeFromPHPSerial(phpSerialObjectInt)).toEqual(s);
      expect(decodeFromPHPSerial(phpSerialObjectFloat)).toEqual('1225.1');
    });
  });
});
