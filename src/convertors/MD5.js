'use strict';

/**
 *  File: _MD5.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes String --> MD5
 */

define((require, exports) => {
    
  const cryptojs = require('crypto-js');
    
  const encodeToMD5 = (text) => {
      const hash = cryptojs.MD5(text).toString();
      return hash;
  }
  exports.encodeToMD5 = encodeToMD5;
});
