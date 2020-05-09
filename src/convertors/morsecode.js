
'use strict';

/**
*  File: morsecode.js
*  Author: Okan DAVUT <davut.okan@email.com>
*  Description:  Encodes and decodes String <--> Morse Code
*/

define(function(require, exports) {
  const Dialogs = brackets.getModule('widgets/Dialogs');

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '\n'];
  const symbols = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---',
    '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-',
    '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....',
    '-....', '--...', '---..', '----.', '^', '\n'];

  // encode the provided string. function must return a string;
  const encodeToMorseCode = (text) => {
    let undefinedCount = 0;
    const txt = text.trim().toUpperCase().split('');
    let code = '';
    for (let i = 0; i < txt.length; i++) {
      if (symbols[letters.indexOf(txt[i])] != undefined) {
        code += symbols[letters.indexOf(txt[i])] + ' ';
        continue;
      }
      undefinedCount++;
    }
    if (undefinedCount > 0 ) {
      Dialogs.showModalDialog('',
          'Unsupported Characters',
          `Some unsupported characters were found skipped in the process`);
    }
    return code;
  };
  // decode the provided string. function must return a string;
  const decodeFromMorseCode = function(morseCode) {
    let decResult = '';
    const code = morseCode.trim().replace(/_|¯|—|–/g, '-').split(' ');
    let txt = '';

    for (let i = 0; i < code.length; i++) {
      txt += letters[symbols.indexOf(code[i])];
    }
    decResult = txt.replace('undefined', '');

    if (decResult.toLowerCase().includes('undefined')) {
      Dialogs.showModalDialog('',
          'Unsupported Characters',
          `Please do not decode morse code with unsupported characters`);
      return morseCode;
    }
    return decResult.toLowerCase();
  };

  // export the encoder for use in the main module
  exports.encodeToMorseCode = encodeToMorseCode;
  // export the decoder for use in the main module
  exports.decodeFromMorseCode = decodeFromMorseCode;
});
