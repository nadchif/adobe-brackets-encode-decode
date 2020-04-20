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
    return;
  };
  exports.encodeToPHPSerial = encodeToPHPSerial;
  exports.decodeFromPHPSerial = decodeFromPHPSerial;
});
