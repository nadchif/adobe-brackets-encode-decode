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
    title: 'Hexadecimal',
    encoder: encodeToHex,
    decoder: decodeFromHex,
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
