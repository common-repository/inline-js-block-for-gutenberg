/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_i18n_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_i18n_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blocks_i18n_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_inline_js_block__ = __webpack_require__(2);

//localize


//test Block
//import './blocks/recipe';
//Half content width image block;
//import './blocks/half-width-image-content';
//inline js block 


/***/ }),
/* 1 */
/***/ (function(module, exports) {

wp.i18n.setLocaleData({ '': {} }, 'inline-js-block');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(4);



var registerBlockType = wp.blocks.registerBlockType;
var RawHTML = wp.element.RawHTML;
var __ = wp.i18n.__;
var CodeEditor = wp.components.CodeEditor;

var nameSpace = 'inline-js-block';

/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType('inline-js-block/script', {
  title: __('script'),
  description: __('Inline JS block helps in adding above the fold JS or for your Advanced customization needs.'),
  icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
  category: 'formatting',
  keywords: [__('java script'), __('script'), __('js')],
  supports: {
    customClassName: false,
    className: false,
    html: false
  },
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      default: '<script>          </script>'

    }
  },

  edit: function edit(props) {
    var content = props.attributes.content,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected,
        className = props.className;

    return wp.element.createElement(
      'div',
      { className: "inlie_js_block" },
      ' ',
      wp.element.createElement(CodeEditor, {
        value: content,
        focus: isSelected,
        onChange: function onChange(content) {
          return setAttributes({ content: content });
        }
      })
    );
  },
  save: function save(props) {

    return wp.element.createElement(
      RawHTML,
      null,
      props.attributes.content
    );
  }

}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = wp.element.createElement(
  "svg",
  { version: "1.1", id: "Layer_1", x: "0px", y: "0px", width: "20px", height: "20.8px", viewBox: "-285 387 20 20.8", style: { enableBackground: 'new -285 387 20 20.8' } },
  wp.element.createElement("style", { type: "text/css", dangerouslySetInnerHTML: { __html: "\n    .st0{fill:#FCDC4E;} .st1{fill:#40424F;}\n  " } }),
  wp.element.createElement("polygon", { id: "XMLID_22_", className: "st0", points: "-275,387 -285,387 -283.4,403.1 -275,407.8 -266.6,403.1 -265,387 " }),
  wp.element.createElement(
    "g",
    { id: "XMLID_1_" },
    wp.element.createElement("path", { id: "XMLID_3_", className: "st1", d: "M-281.5,399.4l0.7-1.1c0.4,0.5,0.9,0.7,1.4,0.7c0.5,0,0.8-0.1,1.1-0.4s0.4-0.7,0.4-1.1v-5.8h1.5\r v5.8c0,0.9-0.3,1.7-0.8,2.1c-0.5,0.5-1.1,0.7-2,0.7C-280.2,400.3-281,400-281.5,399.4z" }),
    wp.element.createElement("path", { id: "XMLID_5_", className: "st1", d: "M-275.1,399l0.9-1.1c0.7,0.8,1.6,1.2,2.7,1.2c0.6,0,1-0.1,1.3-0.3c0.3-0.2,0.4-0.5,0.4-0.9\r c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.3-0.9-0.4c-0.3-0.1-0.7-0.2-1.2-0.3c-0.5-0.1-0.8-0.3-1.2-0.4c-0.4-0.1-0.7-0.4-0.9-0.7\r c-0.3-0.3-0.3-0.7-0.3-1.3c0-0.7,0.3-1.3,0.9-1.8c0.6-0.5,1.3-0.7,2.2-0.7c1.3,0,2.3,0.4,3.1,1.2l-0.8,1.1c-0.7-0.7-1.5-1-2.5-1\r c-0.4,0-0.8,0.1-1.1,0.3c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.2,0.1,0.4,0.3,0.5c0.2,0.1,0.5,0.3,0.7,0.3c0.3,0.1,0.6,0.2,0.9,0.3\r c0.3,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.7,0.3,0.9,0.4c0.3,0.2,0.5,0.4,0.7,0.7c0.2,0.3,0.3,0.7,0.3,1.1c0,0.7-0.3,1.4-0.8,1.9\r c-0.5,0.5-1.3,0.7-2.5,0.7C-273.1,400.3-274.3,399.9-275.1,399z" })
  )
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

//online service use for convert svg to jsx
//https://tsuyoshiwada.github.io/svg-to-jsx-with-gui/

/***/ })
/******/ ]);