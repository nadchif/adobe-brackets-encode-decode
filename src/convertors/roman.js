'use strict';

/**
  *  File: Roman.js
  *  Author: Nourma Bumgarner <nourmab13@gmail.com>
  *  Description:  Encodes and decodes Roman <--> Decimal
  *  Decimal values are limited to 9999
  */

define(function(require, exports) {
  const encodeToRoman = (input) => {
    // encode the provided string; function must return string
    const Dialogs = brackets.getModule('widgets/Dialogs');

    // confirm input contains only digits 0-9 and is <= 9999
    if (!(/^\d+$/.test(input)) || (+input > 9999)) {
      Dialogs.showModalDialog('',
          'Invalid Format',
          'Only positive integers up to 9999 will be converted to Roman numerals');
      return;
    }

    // convert input string to array of single characters (digits)
    const digits = String(+input).split('');

    // KEY (index 0-29): “”, C:100, CC:200, CCC:300, CD:400, D:500, DC:600, DCC:700, DCCC:800,
    // CM:900, “”, X:10, XX:20, XXX:30, XL:40, L:50, LX:60, LXX:70,
    // LXXX:80, XC:90, “”,  I:1, II:2, III: 3, IV:4, V:5, VI:6, VII:7, VIII:8, IX:9

    const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
      '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
      '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    // Process the last 3 digits. Anything beyond that is thousands
    let romanNum = '';
    let i = 3;
    while (i--) {
      romanNum = (key[+digits.pop() + (i * 10)] || '') + romanNum;
    }

    // concatenate remaining digits as thousands
    // result must be a String
    return Array(+digits.join('') + 1).join('M') + romanNum;
  }; // encodeToRoman

  const decodeFromRoman = (input) => {
  // confirm input is a positive integer of no more than 4 digits
    const Dialogs = brackets.getModule('widgets/Dialogs');

    let upperRoman = input.toUpperCase(); // convert to upper

    // check for invalid formats - messages are mutually exclusive
    try {
      // confirm input only contains valid chars
      if (/^[IVXLCDM]+$/.test(upperRoman)===false) {
        throw new Error('Only characters IVXLCDMivxlcdm are allowed');
      // IXC cannot be repeated > 3 consecutive times
      } else if (/IIII|XXXX|CCCC/.test(upperRoman)) {
        throw new Error('Characters IXCixc cannot be repeated more than 3 consecutive times');
      // Repetition of VLD is invalid
      } else if (/VV|LL|DD/.test(upperRoman)) {
        throw new Error('Characters VLDvld cannot be consecutively repeated');
      // Limit number to convert to < 10K
      } else if (/MMMMMMMMMM/.test(upperRoman)) {
        throw new Error('Numerals greater than MMMMMMMMMCMXCIX are not converted');
      }
    } catch (err) {
      Dialogs.showModalDialog('',
          'Invalid Roman Numeral Format',
          err.message);
      return;
    }
    // define key for conversion
    const key = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    // convert input string to array of single chars
    upperRoman = upperRoman.split('');
    let decimalSum = 0;
    let romanDigitVal = 0;

    // iterate array beginning to end
    while (upperRoman.length) {
      // remove current first element of roman array
      romanDigitVal = key[upperRoman.shift()];
      // add (or subtract) value of next element
      decimalSum += romanDigitVal * (romanDigitVal < key[upperRoman[0]] ? -1 : 1);
    }
    // result must be a String
    return decimalSum.toString();
  }; // decodeFromRoman

  // export encoder for use in main module
  exports.encodeToRoman = encodeToRoman;

  /* export decoder for use in main module */
  exports.decodeFromRoman = decodeFromRoman;
});
