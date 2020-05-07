
'use strict';

    /**
	*  File: morsecode.js
	*  Author: Okan DAVUT <davut.okan@email.com>
	*  Description:  Encodes and decodes String <--> Morse Code
    */

define(function (require, exports) {

    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\n"];
    var symbols = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "^", "\n"];

    // encode the provided string. function must return a string;
    const encodeToMorseCode = (text) => {

        var encResult = "";
        var txt = text.trim().toUpperCase().split(""),
            code = "";
        for (var i in txt) {
            code += symbols[letters.indexOf(txt[i])] + " ";
        }
        return code;
    }
    // decode the provided string. function must return a string;
    var decodeFromMorseCode = function (morseCode) {
        var decoded = [];
        var decResult = "";

        var code = morseCode.trim().replace(/_|¯|—|–/g, "-").split(" "),
            txt = "";

        for (var i in code) {
            txt += letters[symbols.indexOf(code[i])];
        }
        decResult = txt.replace("undefined", "");

        return decResult.toLowerCase();
    }

    // export the encoder for use in the main module
    exports.encodeToMorseCode = encodeToMorseCode;
    // export the decoder for use in the main module
    exports.decodeFromMorseCode = decodeFromMorseCode;
});
