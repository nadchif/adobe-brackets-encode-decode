/**
 *  File: unixToUTCDate.spec.js
 *  Author(s): Devin Ekadeni <devinekadeni@gmail.com>
 */

require('amd-loader');
// for tests that need RequireJS
define(function(require, exports, module) {
  'use strict';
  describe('unixToUTCDate.js =>', () => {
    const encodeUnixToUTCDate = require('../src/convertors/unixToUTCDate').encodeUnixToUTCDate;

    it('Should encode unix timestamp', () => {
      const unixTimestamp = 1592753594;
      const UTCDate = 'Sun, 21 Jun 2020 15:33:14 GMT';
      expect(encodeUnixToUTCDate(unixTimestamp)).toEqual(UTCDate);
    });

    it('Should handle invalid unix timestamp', () => {
      const unixTimestamp = 15927535941592753594;
      try {
        encodeUnixToUTCDate(unixTimestamp);
      } catch (error) {
        expect(error).toEqual(new Error('Invalid Unix Timestamp'));
      }
    });

    it('Should handle invalid input', () => {
      const unixTimestamp = 'abcdefg';
      try {
        encodeUnixToUTCDate(unixTimestamp);
      } catch (error) {
        expect(error).toEqual(new Error('Invalid Unix Timestamp'));
      }
    });

    it('Should handle undefined input', () => {
      try {
        encodeUnixToUTCDate();
      } catch (error) {
        expect(error).toEqual(new Error('Invalid Unix Timestamp'));
      }
    });
  });
});
