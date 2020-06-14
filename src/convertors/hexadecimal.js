/**
 *  File: hexadecimal.js
 *  Author: Zyoruk <ce.zyoruk@gmail.com>
 *  Description:  Encodes and decodes String <--> Hex
 */

define((require, exports) => {
  // Create N size chunks from array
  const groupArrayInGroups = (array, chunksSize) => array.reduce((chunks, element, index) => (index % chunksSize ?
     chunks[chunks.length - 1].push(element) : chunks.push([element])) && chunks, [])
      .map((finalChunk) => finalChunk.join(''));

  const encodeToHex = (text) => text.split('')
      .map((char, index) => {
        let encoded = text.charCodeAt(index).toString(16).toUpperCase();

        // Fix any case that starts with 0. For example: LF => 0A
        if (encoded.length === 1) encoded = `0${encoded}`;

        return encoded;
      }).join('');

  const decodeFromHex = (text) => {
    const array = text.trim().split('');
    const chunks = groupArrayInGroups(array, 2);

    return chunks.map((charCode) => String.fromCharCode(parseInt('0x' + charCode).toString())).join('');
  };

  exports.encodeToHex = encodeToHex;
  exports.decodeFromHex = decodeFromHex;
});
