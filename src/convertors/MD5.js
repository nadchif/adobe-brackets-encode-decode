'use strict';

/**
 *  File: MD5.js
 *  Author: Shankhanil <shankha.rik@gmail.com>
 *  Description:  Encodes and decodes String <--> MD5
 */

//const encodeToBin = require('convertors/bin').encodeToBin;

define((require, exports) => {
  
  const breakToChunks = (text, chunkSize) => {
      let i = 0;
      let messageChunks = Array();
      let messageSlice = '';
      for(; i<text.length; ){
          messageSlice = text.substring(i, i+chunkSize-1);
          // push to messageChunks to create chunks of size 'chunkSize' bits each
          messageChunks.push(messageSlice);
          i = i + chunkSize;
      }
      return messageChunks;
  };
  
  const encodeToMD5 = (text) => {
        //encode to MD5
        const s = Array.of( 7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22 ,
                            5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20 ,
                            4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23 ,
                            6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21
                          );
        const k = Array.of(
                            0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee,
                            0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501,
                            0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be,
                            0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821,
                            0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa,
                            0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8,
                            0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed,
                            0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a,
                            0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c,
                            0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70,
                            0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05,
                            0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665,
                            0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
                            0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1,
                            0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1,
                            0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
                          );
        const A0 = 0x67452301, B0 = 0xefcdab89, C0 = 0x98badcfe, D0 = 0x10325476;
        
        // Get Binary Message from text message
        let BinaryMessage = '01100';
      
        // padding message 
        if (BinaryMessage.length % 512 != 0){
            BinaryMessage = BinaryMessage + '1';
            const numberOfZero = (512 - 1 -(BinaryMessage.length % 512)) % 512;
            let i = 1;
            for (; i <= numberOfZero; i++){
                BinaryMessage = BinaryMessage + '0';
            }
        }
        
//         breaking message into 512-bit chunks
        let i = 0;
        let messageChunks = Array();
        let messageSlice = '';
        for(; i<BinaryMessage.length; ){
            // extract BinaryMessage[i..i+512-1] 
            messageSlice = BinaryMessage.substring(i, i+512-1);
            // push to messageChunks to create chunks of size 512 bits each
            messageChunks.push(messageSlice);
            i = i + 512;
        }
//        let messageChunks = breakToChunks(BinaryMessage, 512);
        
        // processing each message chunks
//        let res = '';
//        i = 0;
//        for (; i<messageChunks.length; i++){
//            //Break message chunk into subchunk of 32 bit word size
//            
//        }
        
        // message digest
        
        return (messageChunks.length).toString();

      };

  const decodeFromMD5 = (text) => {
      // decode from MD5
      return 'abc';
  };

  exports.encodeToMD5 = encodeToMD5;
  exports.decodeFromMD5 = decodeFromMD5;
});
