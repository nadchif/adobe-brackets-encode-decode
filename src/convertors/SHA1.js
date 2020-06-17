/**
 *  File: SHA1.js
 *  Author: Arthur Pons <unguestdev@gmail.com> aka unguest on github
 *  Description:  Encodes String --> SHA1
 *  SHA1 is a one way encoding algorithm,
 *  meaning we can only encode, and not decode.
 *
 */

define((require, exports) => {
  const crypto = require('crypto-js');
  const encodeToSHA1 = (text) =>{
    // eslint-disable-next-line new-cap
    const hash = crypto.SHA1(text).toString();
    return hash;
  };
  exports.encodeToSHA1 = encodeToSHA1;
});
