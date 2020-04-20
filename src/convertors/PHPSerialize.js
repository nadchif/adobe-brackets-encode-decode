'use strict';

/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes String <--> PHP Serialize string
 */

define((require, exports) => {
  const encodeToPHPSerial = (input) =>{
    const encode = 's:'+input.length.toString()+':\"'+ input +'\"';
    return encode;
  };
  const decodeFromPHPSerial = (input) =>{
    if ((input.match(/:/g) || []).length == 2) {
      const decode = input.split(':');
      const getDecodedString = decode[2].split('\"');
      return getDecodedString[1];
    } else {
      console.error('invalid PHPSerial format');
      return;
    }
  };
  exports.encodeToPHPSerial = encodeToPHPSerial;
  exports.decodeFromPHPSerial = decodeFromPHPSerial;
});
