// eslint-disable-next-line max-len
/* jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
// eslint-disable-next-line no-unused-vars
/* global define, $, brackets, window */

/**
 *  File: Main.js
 *  Author: Chif <nadchif@gmail.com>
 *  Description:  This extension allows you to encode/decode selection
 */

define(function(require, exports, module) {
  'use strict';

  const encodeToASCII = require('convertors/ascii').encodeToASCII;
  const decodeFromASCII = require('convertors/ascii').decodeFromASCII;
  const encodeToURI = require('convertors/uri').encodeToURI;
  const decodeFromURI = require('convertors/uri').decodeFromURI;
  const encodeToBase64 = require('convertors/base64').encodeToBase64;
  const decodeFromBase64 = require('convertors/base64').decodeFromBase64;
  const encodeToBin = require('convertors/bin').encodeToBin;
  const decodeFromBin = require('convertors/bin').decodeFromBin;
  const encodeToHtmlEntities = require('convertors/htmlentities').encodeToHtmlEntities;
  const decodeFromHtmlEntities = require('convertors/htmlentities').decodeFromHtmlEntities;
  const encodeNlToBr = require('convertors/nl2br').encodeNlToBr;
  const decodeNlFromBr = require('convertors/nl2br').decodeNlFromBr;
  const encodeToHex = require('convertors/hexadecimal').encodeToHex;
  const decodeFromHex = require('convertors/hexadecimal').decodeFromHex;
  const encodeToMD5 = require('convertors/MD5').encodeToMD5;
  const encodeToSHA256 = require('convertors/SHA256').encodeToSHA256;
  const encodeToSHA512 = require('convertors/SHA512').encodeToSHA512;
  const encodeToPHPSerial = require('convertors/PHPSerialize').encodeToPHPSerial;
  const encodeIntToPHPSerial = require('convertors/PHPSerialize').encodeIntToPHPSerial;
  const encodeFloatToPHPSerial = require('convertors/PHPSerialize').encodeFloatToPHPSerial;
  const decodeFromPHPSerial = require('convertors/PHPSerialize').decodeFromPHPSerial;
  const encodeToMorseCode = require('convertors/morsecode').encodeToMorseCode;
  const decodeFromMorseCode = require('convertors/morsecode').decodeFromMorseCode;

  /**
   * Register encoders and decoders here, in this format
   * {
   * title: <Title of the encoder/decoder>,
   * handler: <Function that does the conversion and returns string>
   * }
   */
  const ENCODERS_DECODERS = [{
    title: 'NL2BR',
    encodeTitle: 'New Line to BR',
    encoder: encodeNlToBr,
    decodeTitle: 'BR to New Line',
    decoder: decodeNlFromBr,
  }, {
    title: 'ASCII',
    encodeTitle: 'String to ASCII',
    encoder: encodeToASCII,
    decodeTitle: 'ASCII to String',
    decoder: decodeFromASCII,
  }, {
    title: 'URI',
    encoder: encodeToURI,
    decoder: decodeFromURI,
  }, {
    title: 'Base 64',
    encoder: encodeToBase64,
    decoder: decodeFromBase64,
  }, {
    title: 'Bin',
    encoder: encodeToBin,
    decoder: decodeFromBin,
  }, {
    title: 'HTML Entities',
    encoder: encodeToHtmlEntities,
    decoder: decodeFromHtmlEntities,
  }, {
    title: 'Hex',
    encoder: encodeToHex,
    decoder: decodeFromHex,
  }, {
    title: 'MD5',
    encoder: encodeToMD5,
  }, {
    title: 'SHA256',
    encoder: encodeToSHA256,
  }, {
    title: 'SHA512',
    encoder: encodeToSHA512,
    encodeTitle: 'String to SHA-512',
  }, {
    title: 'PHP Serial',
    encodeTitle: 'String to PHP Serial',
    encoder: encodeToPHPSerial,
    decodeTitle: 'PHP Serial to String/Int/Float',
    decoder: decodeFromPHPSerial,
  }, {
    title: 'PHP Serial 2',
    encodeTitle: 'Int to PHP Serial',
    encoder: encodeIntToPHPSerial,
  }, {
    title: 'PHP Serial 3',
    encodeTitle: 'Float to PHP Serial',
    encoder: encodeFloatToPHPSerial,
  },
  {
    title: 'Morse Code',
    encodeTitle: 'String to Morse Code',
    encoder: encodeToMorseCode,
    decodeTitle: 'Morse Code to String',
    decoder: decodeFromMorseCode,
  }];

  const CommandManager = brackets.getModule('command/CommandManager');
  const EditorManager = brackets.getModule('editor/EditorManager');
  const Menus = brackets.getModule('command/Menus');

  const convertInput = function convertInput(convertor) {
    const editor = EditorManager.getFocusedEditor();
    if (editor) {
      const selectedText = editor._codeMirror.getSelections();
      const converted = convertor(selectedText[0]);
      editor._codeMirror.replaceSelections([converted]);
    }
  };

  const subMenu = Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addSubMenu('Encode/Decode Selection', 'NADCHIF_ECDC_MENU');

  subMenu.addMenuDivider();

  ENCODERS_DECODERS.forEach(function(item, index) {
    if (item.encoder) {
      CommandManager.register(item.encodeTitle ? item.encodeTitle : 'String to ' + item.title, 'ede' + index, function() {
        convertInput(item.encoder);
      });
      subMenu.addMenuItem('ede' + index, null, Menus.FIRST);
    }
    if (item.decoder) {
      CommandManager.register(item.decodeTitle ? item.decodeTitle : item.title + ' to String', 'edd' + index, function() {
        convertInput(item.decoder);
      });
      subMenu.addMenuItem('edd' + index, null, Menus.LAST);
    }
  });
});
