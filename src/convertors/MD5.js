'use strict';

/**
 *  File: _MD5.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes String --> MD5
 *  MD5 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define((require, exports) => {
    
  const crypto = require('crypto-js');
    
  const encodeToMD5 = (text) =>{
      const hash = crypto.MD5(text).toString();
      return hash;
  };
  exports.encodeToMD5 = encodeToMD5;
});
