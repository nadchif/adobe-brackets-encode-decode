'use strict';

/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes String <--> PHP Serialize string
 */

define((require, exports) => {
  const checkformat = (input, format) =>{
    if ((input.match(/:/g) || []).length == 2 && input[0] == format) {
      return true;
    } else {
      return false;
    }
  };
  const encodeToPHPSerial = (input) =>{
    const encode = 's:'+input.length.toString()+':\"'+ input +'\"';
    return encode;
  };
  const encodeIntToPHPSerial = (input) =>{
    if (parseInt(input) == input) {
      const encode = 'i:'+ input;
      return encode;
    }
    return;
  };
  const decodeFromPHPSerial = (input) =>{
    if ( checkformat(input, 's') ) {
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
  exports.encodeIntToPHPSerial = encodeIntToPHPSerial;
});
