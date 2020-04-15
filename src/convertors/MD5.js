'use strict';

/**
 *  File: MD5.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes String <--> MD5
 */

define((require, exports) => {
  // Create N size chunks from array
//  const groupArrayInGroups = (array, chunksSize) => array.reduce((chunks, element, index) => (index % chunksSize ?
//     chunks[chunks.length - 1].push(element) : chunks.push([element])) && chunks, [])
//      .map((finalChunk) => finalChunk.join(''));

  const encodeToMD5 = (text) => {
        //encode from MD5
        
      };

  const decodeFromMD5 = (text) => {
      // decode from MD5
  };

  exports.encodeToMD5 = encodeToMD5;
  exports.decodeFromMD5 = decodeFromMD5;
});
