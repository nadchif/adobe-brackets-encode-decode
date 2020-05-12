'use strict';
/* eslint-disable new-cap */
/**
 *  File: ASCII.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> ASCII Code
 *
 */

define((require, exports) => {
<<<<<<< HEAD

  const encodeToASCII = (text) =>{

      const ascii_array = [];
=======
    
  const encodeToASCII = (text) =>{
      
      let ascii_array = [];
>>>>>>> da83c91c42ae980a0a3df6a8e03d282e8a2b0e47

      for (const char of Array.from(text)) {
          ascii_array.push(char.charCodeAt(0));
      }
<<<<<<< HEAD

      return ascii_array.join('');

  };
  const decodeFromASCII = (text) =>{

=======
      
      return ascii_array.join('');
      
  };
    
  const decodeFromASCII = (text) =>{
      
>>>>>>> da83c91c42ae980a0a3df6a8e03d282e8a2b0e47
      const codes = [];
        for (let i = 0; i < text.length;) {
          const numDigits = text[i] === '1' ? 3 : 2;
          codes.push(text.substr(i, numDigits));
          i += numDigits;
        }
<<<<<<< HEAD

      return String.fromCharCode(...codes);

  };
  exports.encodeToASCII = encodeToASCII;
  exports.decodeFromASCII = decodeFromASCII;
});
=======
      
      return String.fromCharCode(...codes);
      
  };
    
    
  exports.encodeToASCII = encodeToASCII;
  exports.decodeFromASCII = decodeFromASCII;
});
>>>>>>> da83c91c42ae980a0a3df6a8e03d282e8a2b0e47
