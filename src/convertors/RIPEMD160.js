/**
 *  File: RIPEMD160.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> RIPEMD-160
 *  RIPEMD160 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define((require, exports) => {
  const crypto = require('crypto-js');
  const encodeToRIPEMD160 = (text) =>{
    // eslint-disable-next-line new-cap
    const hash = crypto.RIPEMD160(text).toString();
    return hash;
  };
  exports.encodeToRIPEMD160 = encodeToRIPEMD160;
});
