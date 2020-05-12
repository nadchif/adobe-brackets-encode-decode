'use strict';
/* eslint-disable new-cap */
/**
 *  File: ASCII.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> ASCII Code
 *
 */

define((require, exports) => {
    
  const encodeToASCII = (text) =>{
      
      let ascii_array = [];

      for (const char of Array.from(text)) {
          ascii_array.push(char.charCodeAt(0));
      }
      
      return ascii_array.join('');
      
  };
    
  const decodeFromASCII = (text) =>{
      
      const codes = [];
        for (let i = 0; i < text.length;) {
          const numDigits = text[i] === '1' ? 3 : 2;
          codes.push(text.substr(i, numDigits));
          i += numDigits;
        }
      
      return String.fromCharCode(...codes);
      
  };
    
    
  exports.encodeToASCII = encodeToASCII;
  exports.decodeFromASCII = decodeFromASCII;
});
