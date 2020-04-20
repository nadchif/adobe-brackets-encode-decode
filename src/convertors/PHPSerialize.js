'use strict';

/**
 *  File: PHPSerialize.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes :
 *                      String <---> PHP serialize
 *                      Int <---> PHP Serialize
 */


define((require, exports) => {
  /*
    * Format of PHP Serialized datatypes:
    * 1. String => s:<i>:<str>   where <i> is length of string, <str> is the string
    * 2. Int    => i:<int>       where <int> is the integer value
    */


  // To check the format of the input, whether it complies with the above mentioned format
  const checkformat = (input, format) =>{
    if ((input.match(/:/g) || []).length == 2 && input[0] == 's' && format == 's') {
      return true;
    } else if (((input.match(/:/g) || []).length == 1 && input[0] == format)) {
      return true;
    } else {
      return false;
    }
  };

  //    PHP Serializing string
  const encodeToPHPSerial = (input) =>{
    const encode = 's:'+input.length.toString()+':\"'+ input +'\"';
    return encode;
  };

  //    PHP Serializing integer
  const encodeIntToPHPSerial = (input) =>{
    if (parseInt(input) == input) {
      const encode = 'i:'+ input;
      return encode;
    }
    return;
  };

  //    Decoding PHP serial to String/Int
  const decodeFromPHPSerial = (input) =>{
    if ( checkformat(input, 's') ) {
      const decode = input.split(':');
      const getDecodedString = decode[2].split('\"');
      return getDecodedString[1];
    } else if (checkformat(input, 'i') ) {
      const decode = input.split(':');
      return decode[1];
    } else {
      console.error('invalid PHPSerial format');
      return;
    }
  };
  exports.encodeToPHPSerial = encodeToPHPSerial;
  exports.decodeFromPHPSerial = decodeFromPHPSerial;
  exports.encodeIntToPHPSerial = encodeIntToPHPSerial;
});
