(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function(strings) {
  if (typeof strings === 'string') strings = [strings]
  var exprs = [].slice.call(arguments,1)
  var parts = []
  for (var i = 0; i < strings.length-1; i++) {
    parts.push(strings[i], exprs[i] || '')
  }
  parts.push(strings[i])
  return parts.join('')
}

},{}],2:[function(require,module,exports){
/*!
 * @license twgl.js 4.19.1 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["twgl"] = factory();
	else
		root["twgl"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/twgl-full.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.createAttribsFromArrays = createAttribsFromArrays;
exports.createBuffersFromArrays = createBuffersFromArrays;
exports.createBufferFromArray = createBufferFromArray;
exports.createBufferFromTypedArray = createBufferFromTypedArray;
exports.createBufferInfoFromArrays = createBufferInfoFromArrays;
exports.setAttribInfoBufferFromArray = setAttribInfoBufferFromArray;
exports.setAttributePrefix = setAttributePrefix;
exports.setAttributeDefaults_ = setDefaults;
exports.getNumComponents_ = getNumComponents;
exports.getArray_ = getArray;

var typedArrays = _interopRequireWildcard(__webpack_require__(/*! ./typedarrays.js */ "./src/typedarrays.js"));

var helper = _interopRequireWildcard(__webpack_require__(/*! ./helper.js */ "./src/helper.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var STATIC_DRAW = 0x88e4;
var ARRAY_BUFFER = 0x8892;
var ELEMENT_ARRAY_BUFFER = 0x8893;
var BUFFER_SIZE = 0x8764;
var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
/**
 * Low level attribute and buffer related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/attributes
 */
// make sure we don't see a global gl

var gl = undefined;
/* eslint-disable-line */

var defaults = {
  attribPrefix: ""
};
/**
 * Sets the default attrib prefix
 *
 * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 * as it makes it clear where they came from. But, when building geometry I prefer using un-prefixed names.
 *
 * In other words I'll create arrays of geometry like this
 *
 *     var arrays = {
 *       position: ...
 *       normal: ...
 *       texcoord: ...
 *     };
 *
 * But need those mapped to attributes and my attributes start with `a_`.
 *
 * @deprecated see {@link module:twgl.setDefaults}
 * @param {string} prefix prefix for attribs
 * @memberOf module:twgl/attributes
 */

function setAttributePrefix(prefix) {
  defaults.attribPrefix = prefix;
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
}

function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
  gl.bindBuffer(type, buffer);
  gl.bufferData(type, array, drawType || STATIC_DRAW);
}
/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */


function createBufferFromTypedArray(gl, typedArray, type, drawType) {
  if (helper.isBuffer(gl, typedArray)) {
    return typedArray;
  }

  type = type || ARRAY_BUFFER;
  var buffer = gl.createBuffer();
  setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
  return buffer;
}

function isIndices(name) {
  return name === "indices";
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
} // This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?


function getNormalizationForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return true;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return true;
  } // eslint-disable-line


  return false;
}

function getArray(array) {
  return array.length ? array : array.data;
}

var texcoordRE = /coord|texture/i;
var colorRE = /color|colour/i;

function guessNumComponentsFromName(name, length) {
  var numComponents;

  if (texcoordRE.test(name)) {
    numComponents = 2;
  } else if (colorRE.test(name)) {
    numComponents = 4;
  } else {
    numComponents = 3; // position, normals, indices ...
  }

  if (length % numComponents > 0) {
    throw new Error("Can not guess numComponents for attribute '".concat(name, "'. Tried ").concat(numComponents, " but ").concat(length, " values is not evenly divisible by ").concat(numComponents, ". You should specify it."));
  }

  return numComponents;
}

function getNumComponents(array, arrayName) {
  return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
}

function makeTypedArray(array, name) {
  if (typedArrays.isArrayBuffer(array)) {
    return array;
  }

  if (typedArrays.isArrayBuffer(array.data)) {
    return array.data;
  }

  if (Array.isArray(array)) {
    array = {
      data: array
    };
  }

  var Type = array.type;

  if (!Type) {
    if (isIndices(name)) {
      Type = Uint16Array;
    } else {
      Type = Float32Array;
    }
  }

  return new Type(array.data);
}
/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */

/**
 * Use this type of array spec when TWGL can't guess the type or number of components of an array
 * @typedef {Object} FullArraySpec
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {(number|number[]|ArrayBufferView)} data The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {constructor} [type] type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
 * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @property {WebGLBuffer} [buffer] Buffer to use for this attribute. This lets you use your own buffer
 *    but you will need to supply `numComponents` and `type`. You can effectively pass an `AttribInfo`
 *    to provide this. Example:
 *
 *         const bufferInfo1 = twgl.createBufferInfoFromArrays(gl, {
 *           position: [1, 2, 3, ... ],
 *         });
 *         const bufferInfo2 = twgl.createBufferInfoFromArrays(gl, {
 *           position: bufferInfo1.attribs.position,  // use the same buffer from bufferInfo1
 *         });
 *
 * @memberOf module:twgl
 */

/**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */

/**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */

/**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @param {module:twgl.BufferInfo} [srcBufferInfo] a BufferInfo to copy from
 *   This lets you share buffers. Any arrays you supply will override
 *   the buffers from srcBufferInfo.
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */


function createAttribsFromArrays(gl, arrays) {
  var attribs = {};
  Object.keys(arrays).forEach(function (arrayName) {
    if (!isIndices(arrayName)) {
      var array = arrays[arrayName];
      var attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;

      if (array.value) {
        if (!Array.isArray(array.value) && !typedArrays.isArrayBuffer(array.value)) {
          throw new Error('array.value is not array or typedarray');
        }

        attribs[attribName] = {
          value: array.value
        };
      } else {
        var buffer;
        var type;
        var normalization;
        var numComponents;

        if (array.buffer && array.buffer instanceof WebGLBuffer) {
          buffer = array.buffer;
          numComponents = array.numComponents || array.size;
          type = array.type;
          normalization = array.normalize;
        } else if (typeof array === "number" || typeof array.data === "number") {
          var numValues = array.data || array;
          var arrayType = array.type || Float32Array;
          var numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
          type = typedArrays.getGLTypeForTypedArrayType(arrayType);
          normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
          numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
          buffer = gl.createBuffer();
          gl.bindBuffer(ARRAY_BUFFER, buffer);
          gl.bufferData(ARRAY_BUFFER, numBytes, array.drawType || STATIC_DRAW);
        } else {
          var typedArray = makeTypedArray(array, arrayName);
          buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
          type = typedArrays.getGLTypeForTypedArray(typedArray);
          normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
          numComponents = getNumComponents(array, arrayName);
        }

        attribs[attribName] = {
          buffer: buffer,
          numComponents: numComponents,
          type: type,
          normalize: normalization,
          stride: array.stride || 0,
          offset: array.offset || 0,
          divisor: array.divisor === undefined ? undefined : array.divisor,
          drawType: array.drawType
        };
      }
    }
  });
  gl.bindBuffer(ARRAY_BUFFER, null);
  return attribs;
}
/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically update the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably inefficient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */


function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
  array = makeTypedArray(array);

  if (offset !== undefined) {
    gl.bindBuffer(ARRAY_BUFFER, attribInfo.buffer);
    gl.bufferSubData(ARRAY_BUFFER, offset, array);
  } else {
    setBufferFromTypedArray(gl, ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
  }
}

function getBytesPerValueForGLType(gl, type) {
  if (type === BYTE) return 1; // eslint-disable-line

  if (type === UNSIGNED_BYTE) return 1; // eslint-disable-line

  if (type === SHORT) return 2; // eslint-disable-line

  if (type === UNSIGNED_SHORT) return 2; // eslint-disable-line

  if (type === INT) return 4; // eslint-disable-line

  if (type === UNSIGNED_INT) return 4; // eslint-disable-line

  if (type === FLOAT) return 4; // eslint-disable-line

  return 0;
} // Tries to get the number of elements from a set of arrays.


var positionKeys = ['position', 'positions', 'a_position'];

function getNumElementsFromNonIndexedArrays(arrays) {
  var key;
  var ii;

  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];

    if (key in arrays) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(arrays)[0];
  }

  var array = arrays[key];
  var length = getArray(array).length;
  var numComponents = getNumComponents(array, key);
  var numElements = length / numComponents;

  if (length % numComponents > 0) {
    throw new Error("numComponents ".concat(numComponents, " not correct for length ").concat(length));
  }

  return numElements;
}

function getNumElementsFromAttributes(gl, attribs) {
  var key;
  var ii;

  for (ii = 0; ii < positionKeys.length; ++ii) {
    key = positionKeys[ii];

    if (key in attribs) {
      break;
    }

    key = defaults.attribPrefix + key;

    if (key in attribs) {
      break;
    }
  }

  if (ii === positionKeys.length) {
    key = Object.keys(attribs)[0];
  }

  var attrib = attribs[key];
  gl.bindBuffer(ARRAY_BUFFER, attrib.buffer);
  var numBytes = gl.getBufferParameter(ARRAY_BUFFER, BUFFER_SIZE);
  gl.bindBuffer(ARRAY_BUFFER, null);
  var bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
  var totalElements = numBytes / bytesPerValue;
  var numComponents = attrib.numComponents || attrib.size; // TODO: check stride

  var numElements = totalElements / numComponents;

  if (numElements % 1 !== 0) {
    throw new Error("numComponents ".concat(numComponents, " not correct for length ").concat(length));
  }

  return numElements;
}
/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs appropriate to call `setAttributes`
 * @memberOf module:twgl
 */

/**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         position: { buffer: WebGLBuffer, numComponents: 3, },
 *         normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also be TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or AugmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         texcoord: { numComponents: 2, buffer: gl.createBuffer(), },
 *         normal: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @param {module:twgl.BufferInfo} [srcBufferInfo] An existing
 *        buffer info to start from. WebGLBuffers etc specified
 *        in the srcBufferInfo will be used in a new BufferInfo
 *        with any arrays specified overriding the ones in
 *        srcBufferInfo.
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */


function createBufferInfoFromArrays(gl, arrays, srcBufferInfo) {
  var newAttribs = createAttribsFromArrays(gl, arrays);
  var bufferInfo = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
  bufferInfo.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
  var indices = arrays.indices;

  if (indices) {
    var newIndices = makeTypedArray(indices, "indices");
    bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, ELEMENT_ARRAY_BUFFER);
    bufferInfo.numElements = newIndices.length;
    bufferInfo.elementType = typedArrays.getGLTypeForTypedArray(newIndices);
  } else if (!bufferInfo.numElements) {
    bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
  }

  return bufferInfo;
}
/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that contains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be derived otherwise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */


function createBufferFromArray(gl, array, arrayName) {
  var type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER : ARRAY_BUFFER;
  var typedArray = makeTypedArray(array, arrayName);
  return createBufferFromTypedArray(gl, typedArray, type);
}
/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */


function createBuffersFromArrays(gl, arrays) {
  var buffers = {};
  Object.keys(arrays).forEach(function (key) {
    buffers[key] = createBufferFromArray(gl, arrays[key], key);
  }); // Ugh!

  if (arrays.indices) {
    buffers.numElements = arrays.indices.length;
    buffers.elementType = typedArrays.getGLTypeForTypedArray(makeTypedArray(arrays.indices), 'indices');
  } else {
    buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
  }

  return buffers;
}

/***/ }),

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.drawBufferInfo = drawBufferInfo;
exports.drawObjectList = drawObjectList;

var programs = _interopRequireWildcard(__webpack_require__(/*! ./programs.js */ "./src/programs.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
var TRIANGLES = 0x0004;
var UNSIGNED_SHORT = 0x1403;
/**
 * Drawing related functions
 *
 * For backward compatibility they are available at both `twgl.draw` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/draw
 */

/**
 * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
 *
 * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
 * but calling this means if you switch from indexed data to non-indexed
 * data you don't have to remember to update your draw call.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
 *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @param {number} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
 * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
 * @param {number} [offset] An optional offset. Defaults to 0.
 * @param {number} [instanceCount] An optional instanceCount. if set then `drawArraysInstanced` or `drawElementsInstanced` will be called
 * @memberOf module:twgl/draw
 */

function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
  type = type === undefined ? TRIANGLES : type;
  var indices = bufferInfo.indices;
  var elementType = bufferInfo.elementType;
  var numElements = count === undefined ? bufferInfo.numElements : count;
  offset = offset === undefined ? 0 : offset;

  if (elementType || indices) {
    if (instanceCount !== undefined) {
      gl.drawElementsInstanced(type, numElements, elementType === undefined ? UNSIGNED_SHORT : bufferInfo.elementType, offset, instanceCount);
    } else {
      gl.drawElements(type, numElements, elementType === undefined ? UNSIGNED_SHORT : bufferInfo.elementType, offset);
    }
  } else {
    if (instanceCount !== undefined) {
      gl.drawArraysInstanced(type, offset, numElements, instanceCount);
    } else {
      gl.drawArrays(type, offset, numElements);
    }
  }
}
/**
 * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
 *
 * You need either a `BufferInfo` or a `VertexArrayInfo`.
 *
 * @typedef {Object} DrawObject
 * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In other words `undefined` = `true`
 * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
 * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
 * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @property {Object<string, ?>} uniforms The values for the uniforms.
 *   You can pass multiple objects by putting them in an array. For example
 *
 *     var sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     var localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     var drawObj = {
 *       ...
 *       uniforms: [sharedUniforms, localUniforms],
 *     };
 *
 * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
 * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to bufferInfo.numElements.
 * @property {number} [instanceCount] the number of instances. Defaults to undefined.
 * @memberOf module:twgl
 */

/**
 * Draws a list of objects
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {DrawObject[]} objectsToDraw an array of objects to draw.
 * @memberOf module:twgl/draw
 */


function drawObjectList(gl, objectsToDraw) {
  var lastUsedProgramInfo = null;
  var lastUsedBufferInfo = null;
  objectsToDraw.forEach(function (object) {
    if (object.active === false) {
      return;
    }

    var programInfo = object.programInfo;
    var bufferInfo = object.vertexArrayInfo || object.bufferInfo;
    var bindBuffers = false;
    var type = object.type === undefined ? TRIANGLES : object.type;

    if (programInfo !== lastUsedProgramInfo) {
      lastUsedProgramInfo = programInfo;
      gl.useProgram(programInfo.program); // We have to rebind buffers when changing programs because we
      // only bind buffers the program uses. So if 2 programs use the same
      // bufferInfo but the 1st one uses only positions the when the
      // we switch to the 2nd one some of the attributes will not be on.

      bindBuffers = true;
    } // Setup all the needed attributes.


    if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
      if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) {
        gl.bindVertexArray(null);
      }

      lastUsedBufferInfo = bufferInfo;
      programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
    } // Set the uniforms.


    programs.setUniforms(programInfo, object.uniforms); // Draw

    drawBufferInfo(gl, bufferInfo, type, object.count, object.offset, object.instanceCount);
  });

  if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject) {
    gl.bindVertexArray(null);
  }
}

/***/ }),

/***/ "./src/framebuffers.js":
/*!*****************************!*\
  !*** ./src/framebuffers.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.bindFramebufferInfo = bindFramebufferInfo;
exports.createFramebufferInfo = createFramebufferInfo;
exports.resizeFramebufferInfo = resizeFramebufferInfo;

var textures = _interopRequireWildcard(__webpack_require__(/*! ./textures.js */ "./src/textures.js"));

var helper = _interopRequireWildcard(__webpack_require__(/*! ./helper.js */ "./src/helper.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Framebuffer related functions
 *
 * For backward compatibility they are available at both `twgl.framebuffer` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/framebuffers
 */
// make sure we don't see a global gl
var gl = undefined;
/* eslint-disable-line */

var FRAMEBUFFER = 0x8d40;
var RENDERBUFFER = 0x8d41;
var TEXTURE_2D = 0x0de1;
var UNSIGNED_BYTE = 0x1401;
/* PixelFormat */

var DEPTH_COMPONENT = 0x1902;
var RGBA = 0x1908;
var DEPTH_COMPONENT24 = 0x81a6;
var DEPTH_COMPONENT32F = 0x8cac;
var DEPTH24_STENCIL8 = 0x88f0;
var DEPTH32F_STENCIL8 = 0x8cad;
/* Framebuffer Object. */

var RGBA4 = 0x8056;
var RGB5_A1 = 0x8057;
var RGB565 = 0x8D62;
var DEPTH_COMPONENT16 = 0x81A5;
var STENCIL_INDEX = 0x1901;
var STENCIL_INDEX8 = 0x8D48;
var DEPTH_STENCIL = 0x84F9;
var COLOR_ATTACHMENT0 = 0x8CE0;
var DEPTH_ATTACHMENT = 0x8D00;
var STENCIL_ATTACHMENT = 0x8D20;
var DEPTH_STENCIL_ATTACHMENT = 0x821A;
/* TextureWrapMode */

var CLAMP_TO_EDGE = 0x812F;
/* TextureMagFilter */

var LINEAR = 0x2601;
/**
 * The options for a framebuffer attachment.
 *
 * Note: For a `format` that is a texture include all the texture
 * options from {@link module:twgl.TextureOptions} for example
 * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
 * `auto` defaults to `false` for attachment textures but `min` and `mag` default
 * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
 *
 * @typedef {Object} AttachmentOptions
 * @property {number} [attachmentPoint] The attachment point. Defaults
 *   to `gl.COLOR_ATTACHMENT0 + ndx` unless type is a depth or stencil type
 *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
 *   on the format or attachment type.
 * @property {number} [format] The format. If one of `gl.RGBA4`,
 *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
 *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
 *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
 * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
 * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
 *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
 * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
 * @property {number} [layer] layer for `gl.framebufferTextureLayer`. Defaults to undefined.
 *   If set then `gl.framebufferTextureLayer` is called, if not then `gl.framebufferTexture2D`
 * @property {WebGLObject} [attachment] An existing renderbuffer or texture.
 *    If provided will attach this Object. This allows you to share
 *    attachments across framebuffers.
 * @memberOf module:twgl
 * @mixes module:twgl.TextureOptions
 */

var defaultAttachments = [{
  format: RGBA,
  type: UNSIGNED_BYTE,
  min: LINEAR,
  wrap: CLAMP_TO_EDGE
}, {
  format: DEPTH_STENCIL
}];
var attachmentsByFormat = {};
attachmentsByFormat[DEPTH_STENCIL] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT16] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT24] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT32F] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH24_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH32F_STENCIL8] = DEPTH_STENCIL_ATTACHMENT;

function getAttachmentPointForFormat(format, internalFormat) {
  return attachmentsByFormat[format] || attachmentsByFormat[internalFormat];
}

var renderbufferFormats = {};
renderbufferFormats[RGBA4] = true;
renderbufferFormats[RGB5_A1] = true;
renderbufferFormats[RGB565] = true;
renderbufferFormats[DEPTH_STENCIL] = true;
renderbufferFormats[DEPTH_COMPONENT16] = true;
renderbufferFormats[STENCIL_INDEX] = true;
renderbufferFormats[STENCIL_INDEX8] = true;

function isRenderbufferFormat(format) {
  return renderbufferFormats[format];
}
/**
 * @typedef {Object} FramebufferInfo
 * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
 * @property {WebGLObject[]} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
 * @property {number} width The width of the framebuffer and its attachments
 * @property {number} height The width of the framebuffer and its attachments
 * @memberOf module:twgl
 */

/**
 * Creates a framebuffer and attachments.
 *
 * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 * Passing in a specific size
 *
 *     const width = 256;
 *     const height = 256;
 *     const fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
 *
 * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
 * [WebGL1 only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
 *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Default = size of drawingBuffer
 * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
 * @memberOf module:twgl/framebuffers
 */


function createFramebufferInfo(gl, attachments, width, height) {
  var target = FRAMEBUFFER;
  var fb = gl.createFramebuffer();
  gl.bindFramebuffer(target, fb);
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  attachments = attachments || defaultAttachments;
  var colorAttachmentCount = 0;
  var framebufferInfo = {
    framebuffer: fb,
    attachments: [],
    width: width,
    height: height
  };
  attachments.forEach(function (attachmentOptions) {
    var attachment = attachmentOptions.attachment;
    var format = attachmentOptions.format;
    var attachmentPoint = attachmentOptions.attachmentPoint || getAttachmentPointForFormat(format, attachmentOptions.internalFormat);

    if (!attachmentPoint) {
      attachmentPoint = COLOR_ATTACHMENT0 + colorAttachmentCount++;
    }

    if (!attachment) {
      if (isRenderbufferFormat(format)) {
        attachment = gl.createRenderbuffer();
        gl.bindRenderbuffer(RENDERBUFFER, attachment);
        gl.renderbufferStorage(RENDERBUFFER, format, width, height);
      } else {
        var textureOptions = Object.assign({}, attachmentOptions);
        textureOptions.width = width;
        textureOptions.height = height;

        if (textureOptions.auto === undefined) {
          textureOptions.auto = false;
          textureOptions.min = textureOptions.min || textureOptions.minMag || LINEAR;
          textureOptions.mag = textureOptions.mag || textureOptions.minMag || LINEAR;
          textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || CLAMP_TO_EDGE;
          textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || CLAMP_TO_EDGE;
        }

        attachment = textures.createTexture(gl, textureOptions);
      }
    }

    if (helper.isRenderbuffer(gl, attachment)) {
      gl.framebufferRenderbuffer(target, attachmentPoint, RENDERBUFFER, attachment);
    } else if (helper.isTexture(gl, attachment)) {
      if (attachmentOptions.layer !== undefined) {
        gl.framebufferTextureLayer(target, attachmentPoint, attachment, attachmentOptions.level || 0, attachmentOptions.layer);
      } else {
        gl.framebufferTexture2D(target, attachmentPoint, attachmentOptions.target || TEXTURE_2D, attachment, attachmentOptions.level || 0);
      }
    } else {
      throw new Error('unknown attachment type');
    }

    framebufferInfo.attachments.push(attachment);
  });
  return framebufferInfo;
}
/**
 * Resizes the attachments of a framebuffer.
 *
 * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
 * because TWGL has no idea the format/type of each attachment.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments
 *         twgl.resizeFramebufferInfo(gl, fbi);
 *       }
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments to match
 *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
 *       }
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Default = size of drawingBuffer
 * @memberOf module:twgl/framebuffers
 */


function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
  width = width || gl.drawingBufferWidth;
  height = height || gl.drawingBufferHeight;
  framebufferInfo.width = width;
  framebufferInfo.height = height;
  attachments = attachments || defaultAttachments;
  attachments.forEach(function (attachmentOptions, ndx) {
    var attachment = framebufferInfo.attachments[ndx];
    var format = attachmentOptions.format;

    if (helper.isRenderbuffer(gl, attachment)) {
      gl.bindRenderbuffer(RENDERBUFFER, attachment);
      gl.renderbufferStorage(RENDERBUFFER, format, width, height);
    } else if (helper.isTexture(gl, attachment)) {
      textures.resizeTexture(gl, attachment, attachmentOptions, width, height);
    } else {
      throw new Error('unknown attachment type');
    }
  });
}
/**
 * Binds a framebuffer
 *
 * This function pretty much solely exists because I spent hours
 * trying to figure out why something I wrote wasn't working only
 * to realize I forget to set the viewport dimensions.
 * My hope is this function will fix that.
 *
 * It is effectively the same as
 *
 *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
 *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo|null} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 *   If falsy will bind the canvas.
 * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
 * @memberOf module:twgl/framebuffers
 */


function bindFramebufferInfo(gl, framebufferInfo, target) {
  target = target || FRAMEBUFFER;

  if (framebufferInfo) {
    gl.bindFramebuffer(target, framebufferInfo.framebuffer);
    gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
  } else {
    gl.bindFramebuffer(target, null);
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.copyExistingProperties = copyExistingProperties;
exports.copyNamedProperties = copyNamedProperties;
exports.error = error;
exports.warn = warn;
exports.isBuffer = isBuffer;
exports.isRenderbuffer = isRenderbuffer;
exports.isShader = isShader;
exports.isTexture = isTexture;
exports.isSampler = isSampler;

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/* eslint no-console: "off" */

/**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 * @private
 */
function copyNamedProperties(names, src, dst) {
  names.forEach(function (name) {
    var value = src[name];

    if (value !== undefined) {
      dst[name] = value;
    }
  });
}
/**
 * Copies properties from source to dest only if a matching key is in dest
 *
 * @param {Object.<string, ?>} src the source
 * @param {Object.<string, ?>} dst the dest
 * @private
 */


function copyExistingProperties(src, dst) {
  Object.keys(dst).forEach(function (key) {
    if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) {
      /* eslint no-prototype-builtins: 0 */
      dst[key] = src[key];
    }
  });
}

function error() {
  var _console;

  (_console = console).error.apply(_console, arguments);
}

function warn() {
  var _console2;

  (_console2 = console).warn.apply(_console2, arguments);
}

function isBuffer(gl, t) {
  return typeof WebGLBuffer !== 'undefined' && t instanceof WebGLBuffer;
}

function isRenderbuffer(gl, t) {
  return typeof WebGLRenderbuffer !== 'undefined' && t instanceof WebGLRenderbuffer;
}

function isShader(gl, t) {
  return typeof WebGLShader !== 'undefined' && t instanceof WebGLShader;
}

function isTexture(gl, t) {
  return typeof WebGLTexture !== 'undefined' && t instanceof WebGLTexture;
}

function isSampler(gl, t) {
  return typeof WebGLSampler !== 'undefined' && t instanceof WebGLSampler;
}

/***/ }),

/***/ "./src/m4.js":
/*!*******************!*\
  !*** ./src/m4.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.axisRotate = axisRotate;
exports.axisRotation = axisRotation;
exports.copy = copy;
exports.frustum = frustum;
exports.getAxis = getAxis;
exports.getTranslation = getTranslation;
exports.identity = identity;
exports.inverse = inverse;
exports.lookAt = lookAt;
exports.multiply = multiply;
exports.negate = negate;
exports.ortho = ortho;
exports.perspective = perspective;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.rotationX = rotationX;
exports.rotationY = rotationY;
exports.rotationZ = rotationZ;
exports.scale = scale;
exports.scaling = scaling;
exports.setAxis = setAxis;
exports.setDefaultType = setDefaultType;
exports.setTranslation = setTranslation;
exports.transformDirection = transformDirection;
exports.transformNormal = transformNormal;
exports.transformPoint = transformPoint;
exports.translate = translate;
exports.translation = translation;
exports.transpose = transpose;

var v3 = _interopRequireWildcard(__webpack_require__(/*! ./v3.js */ "./src/v3.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */
var MatType = Float32Array;
/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */

/**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 * @memberOf module:twgl/m4
 */

function setDefaultType(ctor) {
  var oldType = MatType;
  MatType = ctor;
  return oldType;
}
/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */


function negate(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = -m[0];
  dst[1] = -m[1];
  dst[2] = -m[2];
  dst[3] = -m[3];
  dst[4] = -m[4];
  dst[5] = -m[5];
  dst[6] = -m[6];
  dst[7] = -m[7];
  dst[8] = -m[8];
  dst[9] = -m[9];
  dst[10] = -m[10];
  dst[11] = -m[11];
  dst[12] = -m[12];
  dst[13] = -m[13];
  dst[14] = -m[14];
  dst[15] = -m[15];
  return dst;
}
/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */


function copy(m, dst) {
  dst = dst || new MatType(16);
  dst[0] = m[0];
  dst[1] = m[1];
  dst[2] = m[2];
  dst[3] = m[3];
  dst[4] = m[4];
  dst[5] = m[5];
  dst[6] = m[6];
  dst[7] = m[7];
  dst[8] = m[8];
  dst[9] = m[9];
  dst[10] = m[10];
  dst[11] = m[11];
  dst[12] = m[12];
  dst[13] = m[13];
  dst[14] = m[14];
  dst[15] = m[15];
  return dst;
}
/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */


function identity(dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */


function transpose(m, dst) {
  dst = dst || new MatType(16);

  if (dst === m) {
    var t;
    t = m[1];
    m[1] = m[4];
    m[4] = t;
    t = m[2];
    m[2] = m[8];
    m[8] = t;
    t = m[3];
    m[3] = m[12];
    m[12] = t;
    t = m[6];
    m[6] = m[9];
    m[9] = t;
    t = m[7];
    m[7] = m[13];
    m[13] = t;
    t = m[11];
    m[11] = m[14];
    m[14] = t;
    return dst;
  }

  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  dst[0] = m00;
  dst[1] = m10;
  dst[2] = m20;
  dst[3] = m30;
  dst[4] = m01;
  dst[5] = m11;
  dst[6] = m21;
  dst[7] = m31;
  dst[8] = m02;
  dst[9] = m12;
  dst[10] = m22;
  dst[11] = m32;
  dst[12] = m03;
  dst[13] = m13;
  dst[14] = m23;
  dst[15] = m33;
  return dst;
}
/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */


function inverse(m, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];
  var tmp_0 = m22 * m33;
  var tmp_1 = m32 * m23;
  var tmp_2 = m12 * m33;
  var tmp_3 = m32 * m13;
  var tmp_4 = m12 * m23;
  var tmp_5 = m22 * m13;
  var tmp_6 = m02 * m33;
  var tmp_7 = m32 * m03;
  var tmp_8 = m02 * m23;
  var tmp_9 = m22 * m03;
  var tmp_10 = m02 * m13;
  var tmp_11 = m12 * m03;
  var tmp_12 = m20 * m31;
  var tmp_13 = m30 * m21;
  var tmp_14 = m10 * m31;
  var tmp_15 = m30 * m11;
  var tmp_16 = m10 * m21;
  var tmp_17 = m20 * m11;
  var tmp_18 = m00 * m31;
  var tmp_19 = m30 * m01;
  var tmp_20 = m00 * m21;
  var tmp_21 = m20 * m01;
  var tmp_22 = m00 * m11;
  var tmp_23 = m10 * m01;
  var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
  var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
  dst[0] = d * t0;
  dst[1] = d * t1;
  dst[2] = d * t2;
  dst[3] = d * t3;
  dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
  return dst;
}
/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */


function multiply(a, b, dst) {
  dst = dst || new MatType(16);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4 + 0];
  var a11 = a[4 + 1];
  var a12 = a[4 + 2];
  var a13 = a[4 + 3];
  var a20 = a[8 + 0];
  var a21 = a[8 + 1];
  var a22 = a[8 + 2];
  var a23 = a[8 + 3];
  var a30 = a[12 + 0];
  var a31 = a[12 + 1];
  var a32 = a[12 + 2];
  var a33 = a[12 + 3];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b03 = b[3];
  var b10 = b[4 + 0];
  var b11 = b[4 + 1];
  var b12 = b[4 + 2];
  var b13 = b[4 + 3];
  var b20 = b[8 + 0];
  var b21 = b[8 + 1];
  var b22 = b[8 + 2];
  var b23 = b[8 + 3];
  var b30 = b[12 + 0];
  var b31 = b[12 + 1];
  var b32 = b[12 + 2];
  var b33 = b[12 + 3];
  dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
  dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
  dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
  dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
  dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
  dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
  dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
  dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
  dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
  dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
  dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
  dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
  dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
  dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
  dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
  dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
  return dst;
}
/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with translation set.
 * @memberOf module:twgl/m4
 */


function setTranslation(a, v, dst) {
  dst = dst || identity();

  if (a !== dst) {
    dst[0] = a[0];
    dst[1] = a[1];
    dst[2] = a[2];
    dst[3] = a[3];
    dst[4] = a[4];
    dst[5] = a[5];
    dst[6] = a[6];
    dst[7] = a[7];
    dst[8] = a[8];
    dst[9] = a[9];
    dst[10] = a[10];
    dst[11] = a[11];
  }

  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */


function getTranslation(m, dst) {
  dst = dst || v3.create();
  dst[0] = m[12];
  dst[1] = m[13];
  dst[2] = m[14];
  return dst;
}
/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {module:twgl/v3.Vec3} [dst] vector.
 * @return {module:twgl/v3.Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */


function getAxis(m, axis, dst) {
  dst = dst || v3.create();
  var off = axis * 4;
  dst[0] = m[off + 0];
  dst[1] = m[off + 1];
  dst[2] = m[off + 2];
  return dst;
}
/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with axis set.
 * @memberOf module:twgl/m4
 */


function setAxis(a, v, axis, dst) {
  if (dst !== a) {
    dst = copy(a, dst);
  }

  var off = axis * 4;
  dst[off + 0] = v[0];
  dst[off + 1] = v[1];
  dst[off + 2] = v[2];
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
  dst = dst || new MatType(16);
  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
  var rangeInv = 1.0 / (zNear - zFar);
  dst[0] = f / aspect;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = f;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = (zNear + zFar) * rangeInv;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = zNear * zFar * rangeInv * 2;
  dst[15] = 0;
  return dst;
}
/**
 * Computes a 4-by-4 orthogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */


function ortho(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  dst[0] = 2 / (right - left);
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 / (top - bottom);
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 2 / (near - far);
  dst[11] = 0;
  dst[12] = (right + left) / (left - right);
  dst[13] = (top + bottom) / (bottom - top);
  dst[14] = (far + near) / (near - far);
  dst[15] = 1;
  return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */


function frustum(left, right, bottom, top, near, far, dst) {
  dst = dst || new MatType(16);
  var dx = right - left;
  var dy = top - bottom;
  var dz = near - far;
  dst[0] = 2 * near / dx;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 2 * near / dy;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = (left + right) / dx;
  dst[9] = (top + bottom) / dy;
  dst[10] = far / dz;
  dst[11] = -1;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = near * far / dz;
  dst[15] = 0;
  return dst;
}

var xAxis;
var yAxis;
var zAxis;
/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {module:twgl/v3.Vec3} eye The position of the eye.
 * @param {module:twgl/v3.Vec3} target The position meant to be viewed.
 * @param {module:twgl/v3.Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */

function lookAt(eye, target, up, dst) {
  dst = dst || new MatType(16);
  xAxis = xAxis || v3.create();
  yAxis = yAxis || v3.create();
  zAxis = zAxis || v3.create();
  v3.normalize(v3.subtract(eye, target, zAxis), zAxis);
  v3.normalize(v3.cross(up, zAxis, xAxis), xAxis);
  v3.normalize(v3.cross(zAxis, xAxis, yAxis), yAxis);
  dst[0] = xAxis[0];
  dst[1] = xAxis[1];
  dst[2] = xAxis[2];
  dst[3] = 0;
  dst[4] = yAxis[0];
  dst[5] = yAxis[1];
  dst[6] = yAxis[2];
  dst[7] = 0;
  dst[8] = zAxis[0];
  dst[9] = zAxis[1];
  dst[10] = zAxis[2];
  dst[11] = 0;
  dst[12] = eye[0];
  dst[13] = eye[1];
  dst[14] = eye[2];
  dst[15] = 1;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */


function translation(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = v[0];
  dst[13] = v[1];
  dst[14] = v[2];
  dst[15] = 1;
  return dst;
}
/**
 * Translates the given 4-by-4 matrix by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translated matrix.
 * @memberOf module:twgl/m4
 */


function translate(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var m30 = m[3 * 4 + 0];
  var m31 = m[3 * 4 + 1];
  var m32 = m[3 * 4 + 2];
  var m33 = m[3 * 4 + 3];

  if (m !== dst) {
    dst[0] = m00;
    dst[1] = m01;
    dst[2] = m02;
    dst[3] = m03;
    dst[4] = m10;
    dst[5] = m11;
    dst[6] = m12;
    dst[7] = m13;
    dst[8] = m20;
    dst[9] = m21;
    dst[10] = m22;
    dst[11] = m23;
  }

  dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
  dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
  dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
  dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationX(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = 1;
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = c;
  dst[6] = s;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = -s;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function rotateX(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[4] = c * m10 + s * m20;
  dst[5] = c * m11 + s * m21;
  dst[6] = c * m12 + s * m22;
  dst[7] = c * m13 + s * m23;
  dst[8] = c * m20 - s * m10;
  dst[9] = c * m21 - s * m11;
  dst[10] = c * m22 - s * m12;
  dst[11] = c * m23 - s * m13;

  if (m !== dst) {
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationY(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = 0;
  dst[2] = -s;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = 1;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = s;
  dst[9] = 0;
  dst[10] = c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function rotateY(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m20 = m[2 * 4 + 0];
  var m21 = m[2 * 4 + 1];
  var m22 = m[2 * 4 + 2];
  var m23 = m[2 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 - s * m20;
  dst[1] = c * m01 - s * m21;
  dst[2] = c * m02 - s * m22;
  dst[3] = c * m03 - s * m23;
  dst[8] = c * m20 + s * m00;
  dst[9] = c * m21 + s * m01;
  dst[10] = c * m22 + s * m02;
  dst[11] = c * m23 + s * m03;

  if (m !== dst) {
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */


function rotationZ(angleInRadians, dst) {
  dst = dst || new MatType(16);
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c;
  dst[1] = s;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = -s;
  dst[5] = c;
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = 1;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function rotateZ(m, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var m00 = m[0 * 4 + 0];
  var m01 = m[0 * 4 + 1];
  var m02 = m[0 * 4 + 2];
  var m03 = m[0 * 4 + 3];
  var m10 = m[1 * 4 + 0];
  var m11 = m[1 * 4 + 1];
  var m12 = m[1 * 4 + 2];
  var m13 = m[1 * 4 + 3];
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  dst[0] = c * m00 + s * m10;
  dst[1] = c * m01 + s * m11;
  dst[2] = c * m02 + s * m12;
  dst[3] = c * m03 + s * m13;
  dst[4] = c * m10 - s * m00;
  dst[5] = c * m11 - s * m01;
  dst[6] = c * m12 - s * m02;
  dst[7] = c * m13 - s * m03;

  if (m !== dst) {
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */


function axisRotation(axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  dst[0] = xx + (1 - xx) * c;
  dst[1] = x * y * oneMinusCosine + z * s;
  dst[2] = x * z * oneMinusCosine - y * s;
  dst[3] = 0;
  dst[4] = x * y * oneMinusCosine - z * s;
  dst[5] = yy + (1 - yy) * c;
  dst[6] = y * z * oneMinusCosine + x * s;
  dst[7] = 0;
  dst[8] = x * z * oneMinusCosine + y * s;
  dst[9] = y * z * oneMinusCosine - x * s;
  dst[10] = zz + (1 - zz) * c;
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */


function axisRotate(m, axis, angleInRadians, dst) {
  dst = dst || new MatType(16);
  var x = axis[0];
  var y = axis[1];
  var z = axis[2];
  var n = Math.sqrt(x * x + y * y + z * z);
  x /= n;
  y /= n;
  z /= n;
  var xx = x * x;
  var yy = y * y;
  var zz = z * z;
  var c = Math.cos(angleInRadians);
  var s = Math.sin(angleInRadians);
  var oneMinusCosine = 1 - c;
  var r00 = xx + (1 - xx) * c;
  var r01 = x * y * oneMinusCosine + z * s;
  var r02 = x * z * oneMinusCosine - y * s;
  var r10 = x * y * oneMinusCosine - z * s;
  var r11 = yy + (1 - yy) * c;
  var r12 = y * z * oneMinusCosine + x * s;
  var r20 = x * z * oneMinusCosine + y * s;
  var r21 = y * z * oneMinusCosine - x * s;
  var r22 = zz + (1 - zz) * c;
  var m00 = m[0];
  var m01 = m[1];
  var m02 = m[2];
  var m03 = m[3];
  var m10 = m[4];
  var m11 = m[5];
  var m12 = m[6];
  var m13 = m[7];
  var m20 = m[8];
  var m21 = m[9];
  var m22 = m[10];
  var m23 = m[11];
  dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
  dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
  dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
  dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
  dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
  dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
  dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
  dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
  dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
  dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
  dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
  dst[11] = r20 * m03 + r21 * m13 + r22 * m23;

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {module:twgl/v3.Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */


function scaling(v, dst) {
  dst = dst || new MatType(16);
  dst[0] = v[0];
  dst[1] = 0;
  dst[2] = 0;
  dst[3] = 0;
  dst[4] = 0;
  dst[5] = v[1];
  dst[6] = 0;
  dst[7] = 0;
  dst[8] = 0;
  dst[9] = 0;
  dst[10] = v[2];
  dst[11] = 0;
  dst[12] = 0;
  dst[13] = 0;
  dst[14] = 0;
  dst[15] = 1;
  return dst;
}
/**
 * Scales the given 4-by-4 matrix in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {module:twgl/v3.Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaled matrix.
 * @memberOf module:twgl/m4
 */


function scale(m, v, dst) {
  dst = dst || new MatType(16);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2];
  dst[3] = v0 * m[0 * 4 + 3];
  dst[4] = v1 * m[1 * 4 + 0];
  dst[5] = v1 * m[1 * 4 + 1];
  dst[6] = v1 * m[1 * 4 + 2];
  dst[7] = v1 * m[1 * 4 + 3];
  dst[8] = v2 * m[2 * 4 + 0];
  dst[9] = v2 * m[2 * 4 + 1];
  dst[10] = v2 * m[2 * 4 + 2];
  dst[11] = v2 * m[2 * 4 + 3];

  if (m !== dst) {
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
  }

  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The point.
 * @param {module:twgl/v3.Vec3} [dst] optional vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed point.
 * @memberOf module:twgl/m4
 */


function transformPoint(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];
  dst[0] = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
  dst[1] = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
  dst[2] = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;
  return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The direction.
 * @param {module:twgl/v3.Vec3} [dst] optional Vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */


function transformDirection(m, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0];
  dst[1] = v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1];
  dst[2] = v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2];
  return dst;
}
/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The normal.
 * @param {module:twgl/v3.Vec3} [dst] The direction. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed normal.
 * @memberOf module:twgl/m4
 */


function transformNormal(m, v, dst) {
  dst = dst || v3.create();
  var mi = inverse(m);
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}

/***/ }),

/***/ "./src/primitives.js":
/*!***************************!*\
  !*** ./src/primitives.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.create3DFVertices = create3DFVertices;
exports.createAugmentedTypedArray = createAugmentedTypedArray;
exports.createCubeVertices = createCubeVertices;
exports.createPlaneVertices = createPlaneVertices;
exports.createSphereVertices = createSphereVertices;
exports.createTruncatedConeVertices = createTruncatedConeVertices;
exports.createXYQuadVertices = createXYQuadVertices;
exports.createCrescentVertices = createCrescentVertices;
exports.createCylinderVertices = createCylinderVertices;
exports.createTorusVertices = createTorusVertices;
exports.createDiscVertices = createDiscVertices;
exports.deindexVertices = deindexVertices;
exports.flattenNormals = flattenNormals;
exports.makeRandomVertexColors = makeRandomVertexColors;
exports.reorientDirections = reorientDirections;
exports.reorientNormals = reorientNormals;
exports.reorientPositions = reorientPositions;
exports.reorientVertices = reorientVertices;
exports.concatVertices = concatVertices;
exports.duplicateVertices = duplicateVertices;
exports.createDiscBuffers = exports.createDiscBufferInfo = exports.createTorusBuffers = exports.createTorusBufferInfo = exports.createCylinderBuffers = exports.createCylinderBufferInfo = exports.createCrescentBuffers = exports.createCrescentBufferInfo = exports.createCresentVertices = exports.createCresentBuffers = exports.createCresentBufferInfo = exports.createXYQuadBuffers = exports.createXYQuadBufferInfo = exports.createTruncatedConeBuffers = exports.createTruncatedConeBufferInfo = exports.createSphereBuffers = exports.createSphereBufferInfo = exports.createPlaneBuffers = exports.createPlaneBufferInfo = exports.createCubeBuffers = exports.createCubeBufferInfo = exports.create3DFBuffers = exports.create3DFBufferInfo = void 0;

var attributes = _interopRequireWildcard(__webpack_require__(/*! ./attributes.js */ "./src/attributes.js"));

var helper = _interopRequireWildcard(__webpack_require__(/*! ./helper.js */ "./src/helper.js"));

var typedArrays = _interopRequireWildcard(__webpack_require__(/*! ./typedarrays.js */ "./src/typedarrays.js"));

var m4 = _interopRequireWildcard(__webpack_require__(/*! ./m4.js */ "./src/m4.js"));

var v3 = _interopRequireWildcard(__webpack_require__(/*! ./v3.js */ "./src/v3.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Various functions to make simple primitives
 *
 * note: Most primitive functions come in 3 styles
 *
 * *  `createSomeShapeBufferInfo`
 *
 *    These functions are almost always the functions you want to call. They
 *    create vertices then make WebGLBuffers and create {@link module:twgl.AttribInfo}s
 *    returning a {@link module:twgl.BufferInfo} you can pass to {@link module:twgl.setBuffersAndAttributes}
 *    and {@link module:twgl.drawBufferInfo} etc...
 *
 * *  `createSomeShapeBuffers`
 *
 *    These create WebGLBuffers and put your data in them but nothing else.
 *    It's a shortcut to doing it yourself if you don't want to use
 *    the higher level functions.
 *
 * *  `createSomeShapeVertices`
 *
 *    These just create vertices, no buffers. This allows you to manipulate the vertices
 *    or add more data before generating a {@link module:twgl.BufferInfo}. Once you're finished
 *    manipulating the vertices call {@link module:twgl.createBufferInfoFromArrays}.
 *
 *    example:
 *
 *        const arrays = twgl.primitives.createPlaneArrays(1);
 *        twgl.primitives.reorientVertices(arrays, m4.rotationX(Math.PI * 0.5));
 *        const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 * @module twgl/primitives
 */
var getArray = attributes.getArray_; // eslint-disable-line

var getNumComponents = attributes.getNumComponents_; // eslint-disable-line

/**
 * @typedef {(Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array)} TypedArray
 */

/**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 * @private
 */

function augmentTypedArray(typedArray, numComponents) {
  var cursor = 0;

  typedArray.push = function () {
    for (var ii = 0; ii < arguments.length; ++ii) {
      var value = arguments[ii];

      if (value instanceof Array || typedArrays.isArrayBuffer(value)) {
        for (var jj = 0; jj < value.length; ++jj) {
          typedArray[cursor++] = value[jj];
        }
      } else {
        typedArray[cursor++] = value;
      }
    }
  };

  typedArray.reset = function (opt_index) {
    cursor = opt_index || 0;
  };

  typedArray.numComponents = numComponents;
  Object.defineProperty(typedArray, 'numElements', {
    get: function get() {
      return this.length / this.numComponents | 0;
    }
  });
  return typedArray;
}
/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */


function createAugmentedTypedArray(numComponents, numElements, opt_type) {
  var Type = opt_type || Float32Array;
  return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}

function allButIndices(name) {
  return name !== "indices";
}
/**
 * Given indexed vertices creates a new set of vertices un-indexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */


function deindexVertices(vertices) {
  var indices = vertices.indices;
  var newVertices = {};
  var numElements = indices.length;

  function expandToUnindexed(channel) {
    var srcBuffer = vertices[channel];
    var numComponents = srcBuffer.numComponents;
    var dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);

    for (var ii = 0; ii < numElements; ++ii) {
      var ndx = indices[ii];
      var offset = ndx * numComponents;

      for (var jj = 0; jj < numComponents; ++jj) {
        dstBuffer.push(srcBuffer[offset + jj]);
      }
    }

    newVertices[channel] = dstBuffer;
  }

  Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
  return newVertices;
}
/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */


function flattenNormals(vertices) {
  if (vertices.indices) {
    throw new Error('can not flatten normals of indexed vertices. deindex them first');
  }

  var normals = vertices.normal;
  var numNormals = normals.length;

  for (var ii = 0; ii < numNormals; ii += 9) {
    // pull out the 3 normals for this triangle
    var nax = normals[ii + 0];
    var nay = normals[ii + 1];
    var naz = normals[ii + 2];
    var nbx = normals[ii + 3];
    var nby = normals[ii + 4];
    var nbz = normals[ii + 5];
    var ncx = normals[ii + 6];
    var ncy = normals[ii + 7];
    var ncz = normals[ii + 8]; // add them

    var nx = nax + nbx + ncx;
    var ny = nay + nby + ncy;
    var nz = naz + nbz + ncz; // normalize them

    var length = Math.sqrt(nx * nx + ny * ny + nz * nz);
    nx /= length;
    ny /= length;
    nz /= length; // copy them back in

    normals[ii + 0] = nx;
    normals[ii + 1] = ny;
    normals[ii + 2] = nz;
    normals[ii + 3] = nx;
    normals[ii + 4] = ny;
    normals[ii + 5] = nz;
    normals[ii + 6] = nx;
    normals[ii + 7] = ny;
    normals[ii + 8] = nz;
  }

  return vertices;
}

function applyFuncToV3Array(array, matrix, fn) {
  var len = array.length;
  var tmp = new Float32Array(3);

  for (var ii = 0; ii < len; ii += 3) {
    fn(matrix, [array[ii], array[ii + 1], array[ii + 2]], tmp);
    array[ii] = tmp[0];
    array[ii + 1] = tmp[1];
    array[ii + 2] = tmp[2];
  }
}

function transformNormal(mi, v, dst) {
  dst = dst || v3.create();
  var v0 = v[0];
  var v1 = v[1];
  var v2 = v[2];
  dst[0] = v0 * mi[0 * 4 + 0] + v1 * mi[0 * 4 + 1] + v2 * mi[0 * 4 + 2];
  dst[1] = v0 * mi[1 * 4 + 0] + v1 * mi[1 * 4 + 1] + v2 * mi[1 * 4 + 2];
  dst[2] = v0 * mi[2 * 4 + 0] + v1 * mi[2 * 4 + 1] + v2 * mi[2 * 4 + 2];
  return dst;
}
/**
 * Reorients directions by the given matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientDirections(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformDirection);
  return array;
}
/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientNormals(array, matrix) {
  applyFuncToV3Array(array, m4.inverse(matrix), transformNormal);
  return array;
}
/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */


function reorientPositions(array, matrix) {
  applyFuncToV3Array(array, matrix, m4.transformPoint);
  return array;
}
/**
 * @typedef {(number[]|TypedArray)} NativeArrayOrTypedArray
 */

/**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, NativeArrayOrTypedArray>} arrays The vertices to reorient
 * @param {module:twgl/m4.Mat4} matrix matrix to reorient by.
 * @return {Object.<string, NativeArrayOrTypedArray>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */


function reorientVertices(arrays, matrix) {
  Object.keys(arrays).forEach(function (name) {
    var array = arrays[name];

    if (name.indexOf("pos") >= 0) {
      reorientPositions(array, matrix);
    } else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) {
      reorientDirections(array, matrix);
    } else if (name.indexOf("norm") >= 0) {
      reorientNormals(array, matrix);
    }
  });
  return arrays;
}
/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */

/**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */

/**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray>} the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */


function createXYQuadVertices(size, xOffset, yOffset) {
  size = size || 2;
  xOffset = xOffset || 0;
  yOffset = yOffset || 0;
  size *= 0.5;
  return {
    position: {
      numComponents: 2,
      data: [xOffset + -1 * size, yOffset + -1 * size, xOffset + 1 * size, yOffset + -1 * size, xOffset + -1 * size, yOffset + 1 * size, xOffset + 1 * size, yOffset + 1 * size]
    },
    normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    texcoord: [0, 0, 1, 0, 0, 1, 1, 1],
    indices: [0, 1, 2, 2, 1, 3]
  };
}
/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */

/**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */

/**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */


function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
  width = width || 1;
  depth = depth || 1;
  subdivisionsWidth = subdivisionsWidth || 1;
  subdivisionsDepth = subdivisionsDepth || 1;
  matrix = matrix || m4.identity();
  var numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  for (var z = 0; z <= subdivisionsDepth; z++) {
    for (var x = 0; x <= subdivisionsWidth; x++) {
      var u = x / subdivisionsWidth;
      var v = z / subdivisionsDepth;
      positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
      normals.push(0, 1, 0);
      texcoords.push(u, v);
    }
  }

  var numVertsAcross = subdivisionsWidth + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);

  for (var _z = 0; _z < subdivisionsDepth; _z++) {
    // eslint-disable-line
    for (var _x = 0; _x < subdivisionsWidth; _x++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_z + 0) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x, (_z + 0) * numVertsAcross + _x + 1); // Make triangle 2 of quad.

      indices.push((_z + 1) * numVertsAcross + _x, (_z + 1) * numVertsAcross + _x + 1, (_z + 0) * numVertsAcross + _x + 1);
    }
  }

  var arrays = reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  }, matrix);
  return arrays;
}
/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */

/**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */

/**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */


function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
  if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) {
    throw new Error('subdivisionAxis and subdivisionHeight must be > 0');
  }

  opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
  opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
  opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
  opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
  var latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
  var longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians; // We are going to generate our sphere by iterating through its
  // spherical coordinates and generating 2 triangles for each quad on a
  // ring of the sphere.

  var numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices); // Generate the individual vertices in our vertex buffer.

  for (var y = 0; y <= subdivisionsHeight; y++) {
    for (var x = 0; x <= subdivisionsAxis; x++) {
      // Generate a vertex based on its spherical coordinates
      var u = x / subdivisionsAxis;
      var v = y / subdivisionsHeight;
      var theta = longRange * u + opt_startLongitudeInRadians;
      var phi = latRange * v + opt_startLatitudeInRadians;
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);
      var ux = cosTheta * sinPhi;
      var uy = cosPhi;
      var uz = sinTheta * sinPhi;
      positions.push(radius * ux, radius * uy, radius * uz);
      normals.push(ux, uy, uz);
      texcoords.push(1 - u, v);
    }
  }

  var numVertsAround = subdivisionsAxis + 1;
  var indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);

  for (var _x2 = 0; _x2 < subdivisionsAxis; _x2++) {
    // eslint-disable-line
    for (var _y = 0; _y < subdivisionsHeight; _y++) {
      // eslint-disable-line
      // Make triangle 1 of quad.
      indices.push((_y + 0) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2); // Make triangle 2 of quad.

      indices.push((_y + 1) * numVertsAround + _x2, (_y + 0) * numVertsAround + _x2 + 1, (_y + 1) * numVertsAround + _x2 + 1);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 * @private
 */


var CUBE_FACE_INDICES = [[3, 7, 5, 1], // right
[6, 2, 0, 4], // left
[6, 7, 3, 2], // ??
[0, 1, 5, 4], // ??
[7, 6, 4, 5], // front
[2, 3, 1, 0] // back
];
/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */

/**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */

/**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */

function createCubeVertices(size) {
  size = size || 1;
  var k = size / 2;
  var cornerVertices = [[-k, -k, -k], [+k, -k, -k], [-k, +k, -k], [+k, +k, -k], [-k, -k, +k], [+k, -k, +k], [-k, +k, +k], [+k, +k, +k]];
  var faceNormals = [[+1, +0, +0], [-1, +0, +0], [+0, +1, +0], [+0, -1, +0], [+0, +0, +1], [+0, +0, -1]];
  var uvCoords = [[1, 0], [0, 0], [0, 1], [1, 1]];
  var numVertices = 6 * 4;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, 6 * 2, Uint16Array);

  for (var f = 0; f < 6; ++f) {
    var faceIndices = CUBE_FACE_INDICES[f];

    for (var v = 0; v < 4; ++v) {
      var position = cornerVertices[faceIndices[v]];
      var normal = faceNormals[f];
      var uv = uvCoords[v]; // Each face needs all four vertices because the normals and texture
      // coordinates are not all the same.

      positions.push(position);
      normals.push(normal);
      texcoords.push(uv);
    } // Two triangles make a square face.


    var offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */

/**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */

/**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */


function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
  if (radialSubdivisions < 3) {
    throw new Error('radialSubdivisions must be 3 or greater');
  }

  if (verticalSubdivisions < 1) {
    throw new Error('verticalSubdivisions must be 1 or greater');
  }

  var topCap = opt_topCap === undefined ? true : opt_topCap;
  var bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;
  var extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
  var numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);
  var vertsAroundEdge = radialSubdivisions + 1; // The slant of the cone is constant across its surface

  var slant = Math.atan2(bottomRadius - topRadius, height);
  var cosSlant = Math.cos(slant);
  var sinSlant = Math.sin(slant);
  var start = topCap ? -2 : 0;
  var end = verticalSubdivisions + (bottomCap ? 2 : 0);

  for (var yy = start; yy <= end; ++yy) {
    var v = yy / verticalSubdivisions;
    var y = height * v;
    var ringRadius = void 0;

    if (yy < 0) {
      y = 0;
      v = 1;
      ringRadius = bottomRadius;
    } else if (yy > verticalSubdivisions) {
      y = height;
      v = 1;
      ringRadius = topRadius;
    } else {
      ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
    }

    if (yy === -2 || yy === verticalSubdivisions + 2) {
      ringRadius = 0;
      v = 0;
    }

    y -= height / 2;

    for (var ii = 0; ii < vertsAroundEdge; ++ii) {
      var sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
      var cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
      positions.push(sin * ringRadius, y, cos * ringRadius);

      if (yy < 0) {
        normals.push(0, -1, 0);
      } else if (yy > verticalSubdivisions) {
        normals.push(0, 1, 0);
      } else if (ringRadius === 0.0) {
        normals.push(0, 0, 0);
      } else {
        normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
      }

      texcoords.push(ii / radialSubdivisions, 1 - v);
    }
  }

  for (var _yy = 0; _yy < verticalSubdivisions + extra; ++_yy) {
    // eslint-disable-line
    if (_yy === 1 && topCap || _yy === verticalSubdivisions + extra - 2 && bottomCap) {
      continue;
    }

    for (var _ii = 0; _ii < radialSubdivisions; ++_ii) {
      // eslint-disable-line
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 0) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii);
      indices.push(vertsAroundEdge * (_yy + 0) + 0 + _ii, vertsAroundEdge * (_yy + 1) + 1 + _ii, vertsAroundEdge * (_yy + 1) + 0 + _ii);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 * @private
 */


function expandRLEData(rleData, padding) {
  padding = padding || [];
  var data = [];

  for (var ii = 0; ii < rleData.length; ii += 4) {
    var runLength = rleData[ii];
    var element = rleData.slice(ii + 1, ii + 4);
    element.push.apply(element, padding);

    for (var jj = 0; jj < runLength; ++jj) {
      data.push.apply(data, element);
    }
  }

  return data;
}
/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */

/**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */

/**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function create3DFVertices() {
  var positions = [// left column front
  0, 0, 0, 0, 150, 0, 30, 0, 0, 0, 150, 0, 30, 150, 0, 30, 0, 0, // top rung front
  30, 0, 0, 30, 30, 0, 100, 0, 0, 30, 30, 0, 100, 30, 0, 100, 0, 0, // middle rung front
  30, 60, 0, 30, 90, 0, 67, 60, 0, 30, 90, 0, 67, 90, 0, 67, 60, 0, // left column back
  0, 0, 30, 30, 0, 30, 0, 150, 30, 0, 150, 30, 30, 0, 30, 30, 150, 30, // top rung back
  30, 0, 30, 100, 0, 30, 30, 30, 30, 30, 30, 30, 100, 0, 30, 100, 30, 30, // middle rung back
  30, 60, 30, 67, 60, 30, 30, 90, 30, 30, 90, 30, 67, 60, 30, 67, 90, 30, // top
  0, 0, 0, 100, 0, 0, 100, 0, 30, 0, 0, 0, 100, 0, 30, 0, 0, 30, // top rung front
  100, 0, 0, 100, 30, 0, 100, 30, 30, 100, 0, 0, 100, 30, 30, 100, 0, 30, // under top rung
  30, 30, 0, 30, 30, 30, 100, 30, 30, 30, 30, 0, 100, 30, 30, 100, 30, 0, // between top rung and middle
  30, 30, 0, 30, 60, 30, 30, 30, 30, 30, 30, 0, 30, 60, 0, 30, 60, 30, // top of middle rung
  30, 60, 0, 67, 60, 30, 30, 60, 30, 30, 60, 0, 67, 60, 0, 67, 60, 30, // front of middle rung
  67, 60, 0, 67, 90, 30, 67, 60, 30, 67, 60, 0, 67, 90, 0, 67, 90, 30, // bottom of middle rung.
  30, 90, 0, 30, 90, 30, 67, 90, 30, 30, 90, 0, 67, 90, 30, 67, 90, 0, // front of bottom
  30, 90, 0, 30, 150, 30, 30, 90, 30, 30, 90, 0, 30, 150, 0, 30, 150, 30, // bottom
  0, 150, 0, 0, 150, 30, 30, 150, 30, 0, 150, 0, 30, 150, 30, 30, 150, 0, // left side
  0, 0, 0, 0, 0, 30, 0, 150, 30, 0, 0, 0, 0, 150, 30, 0, 150, 0];
  var texcoords = [// left column front
  0.22, 0.19, 0.22, 0.79, 0.34, 0.19, 0.22, 0.79, 0.34, 0.79, 0.34, 0.19, // top rung front
  0.34, 0.19, 0.34, 0.31, 0.62, 0.19, 0.34, 0.31, 0.62, 0.31, 0.62, 0.19, // middle rung front
  0.34, 0.43, 0.34, 0.55, 0.49, 0.43, 0.34, 0.55, 0.49, 0.55, 0.49, 0.43, // left column back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // middle rung back
  0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, // top
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // top rung front
  0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, // under top rung
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // between top rung and middle
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // top of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // front of middle rung
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom of middle rung.
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // front of bottom
  0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, // bottom
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, // left side
  0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0];
  var normals = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 0, 0, 1, // left column back
  // top rung back
  // middle rung back
  18, 0, 0, -1, // top
  6, 0, 1, 0, // top rung front
  6, 1, 0, 0, // under top rung
  6, 0, -1, 0, // between top rung and middle
  6, 1, 0, 0, // top of middle rung
  6, 0, 1, 0, // front of middle rung
  6, 1, 0, 0, // bottom of middle rung.
  6, 0, -1, 0, // front of bottom
  6, 1, 0, 0, // bottom
  6, 0, -1, 0, // left side
  6, -1, 0, 0]);
  var colors = expandRLEData([// left column front
  // top rung front
  // middle rung front
  18, 200, 70, 120, // left column back
  // top rung back
  // middle rung back
  18, 80, 70, 200, // top
  6, 70, 200, 210, // top rung front
  6, 200, 200, 70, // under top rung
  6, 210, 100, 70, // between top rung and middle
  6, 210, 160, 70, // top of middle rung
  6, 70, 180, 210, // front of middle rung
  6, 100, 70, 210, // bottom of middle rung.
  6, 76, 210, 100, // front of bottom
  6, 140, 210, 80, // bottom
  6, 90, 130, 110, // left side
  6, 160, 160, 220], [255]);
  var numVerts = positions.length / 3;
  var arrays = {
    position: createAugmentedTypedArray(3, numVerts),
    texcoord: createAugmentedTypedArray(2, numVerts),
    normal: createAugmentedTypedArray(3, numVerts),
    color: createAugmentedTypedArray(4, numVerts, Uint8Array),
    indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
  };
  arrays.position.push(positions);
  arrays.texcoord.push(texcoords);
  arrays.normal.push(normals);
  arrays.color.push(colors);

  for (var ii = 0; ii < numVerts; ++ii) {
    arrays.indices.push(ii);
  }

  return arrays;
}
/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */

/**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */

/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCrescentBufferInfo
 */

/**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCrescentBuffers
 */

/**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCrescentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
  if (subdivisionsDown <= 0) {
    throw new Error('subdivisionDown must be > 0');
  }

  startOffset = startOffset || 0;
  endOffset = endOffset || 1;
  var subdivisionsThick = 2;
  var offsetRange = endOffset - startOffset;
  var numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);

  function lerp(a, b, s) {
    return a + (b - a) * s;
  }

  function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
    for (var z = 0; z <= subdivisionsDown; z++) {
      var uBack = x / (subdivisionsThick - 1);
      var v = z / subdivisionsDown;
      var xBack = (uBack - 0.5) * 2;
      var angle = (startOffset + v * offsetRange) * Math.PI;
      var s = Math.sin(angle);
      var c = Math.cos(angle);
      var radius = lerp(verticalRadius, arcRadius, s);
      var px = xBack * thickness;
      var py = c * verticalRadius;
      var pz = s * radius;
      positions.push(px, py, pz);
      var n = v3.add(v3.multiply([0, s, c], normalMult), normalAdd);
      normals.push(n);
      texcoords.push(uBack * uMult + uAdd, v);
    }
  } // Generate the individual vertices in our vertex buffer.


  for (var x = 0; x < subdivisionsThick; x++) {
    var uBack = (x / (subdivisionsThick - 1) - 0.5) * 2;
    createArc(outerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(outerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 0);
    createArc(innerRadius, x, [1, 1, 1], [0, 0, 0], 1, 0);
    createArc(innerRadius, x, [0, 0, 0], [uBack, 0, 0], 0, 1);
  } // Do outer surface.


  var indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);

  function createSurface(leftArcOffset, rightArcOffset) {
    for (var z = 0; z < subdivisionsDown; ++z) {
      // Make triangle 1 of quad.
      indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0); // Make triangle 2 of quad.

      indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
    }
  }

  var numVerticesDown = subdivisionsDown + 1; // front

  createSurface(numVerticesDown * 0, numVerticesDown * 4); // right

  createSurface(numVerticesDown * 5, numVerticesDown * 7); // back

  createSurface(numVerticesDown * 6, numVerticesDown * 2); // left

  createSurface(numVerticesDown * 3, numVerticesDown * 1);
  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */

/**
 * Creates cylinder buffers. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCylinderBuffers
 */

/**
 * Creates cylinder vertices. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
  return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
}
/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */

/**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */

/**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
  if (radialSubdivisions < 3) {
    throw new Error('radialSubdivisions must be 3 or greater');
  }

  if (bodySubdivisions < 3) {
    throw new Error('verticalSubdivisions must be 3 or greater');
  }

  startAngle = startAngle || 0;
  endAngle = endAngle || Math.PI * 2;
  var range = endAngle - startAngle;
  var radialParts = radialSubdivisions + 1;
  var bodyParts = bodySubdivisions + 1;
  var numVertices = radialParts * bodyParts;
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);

  for (var slice = 0; slice < bodyParts; ++slice) {
    var v = slice / bodySubdivisions;
    var sliceAngle = v * Math.PI * 2;
    var sliceSin = Math.sin(sliceAngle);
    var ringRadius = radius + sliceSin * thickness;
    var ny = Math.cos(sliceAngle);
    var y = ny * thickness;

    for (var ring = 0; ring < radialParts; ++ring) {
      var u = ring / radialSubdivisions;
      var ringAngle = startAngle + u * range;
      var xSin = Math.sin(ringAngle);
      var zCos = Math.cos(ringAngle);
      var x = xSin * ringRadius;
      var z = zCos * ringRadius;
      var nx = xSin * sliceSin;
      var nz = zCos * sliceSin;
      positions.push(x, y, z);
      normals.push(nx, ny, nz);
      texcoords.push(u, 1 - v);
    }
  }

  for (var _slice = 0; _slice < bodySubdivisions; ++_slice) {
    // eslint-disable-line
    for (var _ring = 0; _ring < radialSubdivisions; ++_ring) {
      // eslint-disable-line
      var nextRingIndex = 1 + _ring;
      var nextSliceIndex = 1 + _slice;
      indices.push(radialParts * _slice + _ring, radialParts * nextSliceIndex + _ring, radialParts * _slice + nextRingIndex);
      indices.push(radialParts * nextSliceIndex + _ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * _slice + nextRingIndex);
    }
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */

/**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */

/**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */


function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
  if (divisions < 3) {
    throw new Error('divisions must be at least 3');
  }

  stacks = stacks ? stacks : 1;
  stackPower = stackPower ? stackPower : 1;
  innerRadius = innerRadius ? innerRadius : 0; // Note: We don't share the center vertex because that would
  // mess up texture coordinates.

  var numVertices = (divisions + 1) * (stacks + 1);
  var positions = createAugmentedTypedArray(3, numVertices);
  var normals = createAugmentedTypedArray(3, numVertices);
  var texcoords = createAugmentedTypedArray(2, numVertices);
  var indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
  var firstIndex = 0;
  var radiusSpan = radius - innerRadius;
  var pointsPerStack = divisions + 1; // Build the disk one stack at a time.

  for (var stack = 0; stack <= stacks; ++stack) {
    var stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);

    for (var i = 0; i <= divisions; ++i) {
      var theta = 2.0 * Math.PI * i / divisions;
      var x = stackRadius * Math.cos(theta);
      var z = stackRadius * Math.sin(theta);
      positions.push(x, 0, z);
      normals.push(0, 1, 0);
      texcoords.push(1 - i / divisions, stack / stacks);

      if (stack > 0 && i !== divisions) {
        // a, b, c and d are the indices of the vertices of a quad.  unless
        // the current stack is the one closest to the center, in which case
        // the vertices a and b connect to the center vertex.
        var a = firstIndex + (i + 1);
        var b = firstIndex + i;
        var c = firstIndex + i - pointsPerStack;
        var d = firstIndex + (i + 1) - pointsPerStack; // Make a quad of the vertices a, b, c, d.

        indices.push(a, b, c);
        indices.push(a, c, d);
      }
    }

    firstIndex += divisions + 1;
  }

  return {
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices
  };
}
/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 * @private
 */


function randInt(range) {
  return Math.random() * range | 0;
}
/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */

/**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */

/**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, AugmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, AugmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */


function makeRandomVertexColors(vertices, options) {
  options = options || {};
  var numElements = vertices.position.numElements;
  var vColors = createAugmentedTypedArray(4, numElements, Uint8Array);

  var rand = options.rand || function (ndx, channel) {
    return channel < 3 ? randInt(256) : 255;
  };

  vertices.color = vColors;

  if (vertices.indices) {
    // just make random colors if index
    for (var ii = 0; ii < numElements; ++ii) {
      vColors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    }
  } else {
    // make random colors per triangle
    var numVertsPerColor = options.vertsPerColor || 3;
    var numSets = numElements / numVertsPerColor;

    for (var _ii2 = 0; _ii2 < numSets; ++_ii2) {
      // eslint-disable-line
      var color = [rand(_ii2, 0), rand(_ii2, 1), rand(_ii2, 2), rand(_ii2, 3)];

      for (var jj = 0; jj < numVertsPerColor; ++jj) {
        vColors.push(color);
      }
    }
  }

  return vertices;
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 * @private
 */


function createBufferFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
    return attributes.createBuffersFromArrays(gl, arrays);
  };
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 * @private
 */


function createBufferInfoFunc(fn) {
  return function (gl) {
    var arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
    return attributes.createBufferInfoFromArrays(gl, arrays);
  };
}

var arraySpecPropertyNames = ["numComponents", "size", "type", "normalize", "stride", "offset", "attrib", "name", "attribName"];
/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 * @private
 */

function copyElements(src, dst, dstNdx, offset) {
  offset = offset || 0;
  var length = src.length;

  for (var ii = 0; ii < length; ++ii) {
    dst[dstNdx + ii] = src[ii] + offset;
  }
}
/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 * @private
 */


function createArrayOfSameType(srcArray, length) {
  var arraySrc = getArray(srcArray);
  var newArray = new arraySrc.constructor(length);
  var newArraySpec = newArray; // If it appears to have been augmented make new one augmented

  if (arraySrc.numComponents && arraySrc.numElements) {
    augmentTypedArray(newArray, arraySrc.numComponents);
  } // If it was a full spec make new one a full spec


  if (srcArray.data) {
    newArraySpec = {
      data: newArray
    };
    helper.copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
  }

  return newArraySpec;
}
/**
 * Concatenates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primitives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatenated vertices.
 * @memberOf module:twgl/primitives
 */


function concatVertices(arrayOfArrays) {
  var names = {};
  var baseName; // get names of all arrays.
  // and numElements for each set of vertices

  var _loop = function _loop(ii) {
    var arrays = arrayOfArrays[ii];
    Object.keys(arrays).forEach(function (name) {
      // eslint-disable-line
      if (!names[name]) {
        names[name] = [];
      }

      if (!baseName && name !== 'indices') {
        baseName = name;
      }

      var arrayInfo = arrays[name];
      var numComponents = getNumComponents(arrayInfo, name);
      var array = getArray(arrayInfo);
      var numElements = array.length / numComponents;
      names[name].push(numElements);
    });
  };

  for (var ii = 0; ii < arrayOfArrays.length; ++ii) {
    _loop(ii);
  } // compute length of combined array
  // and return one for reference


  function getLengthOfCombinedArrays(name) {
    var length = 0;
    var arraySpec;

    for (var _ii3 = 0; _ii3 < arrayOfArrays.length; ++_ii3) {
      var arrays = arrayOfArrays[_ii3];
      var arrayInfo = arrays[name];
      var array = getArray(arrayInfo);
      length += array.length;

      if (!arraySpec || arrayInfo.data) {
        arraySpec = arrayInfo;
      }
    }

    return {
      length: length,
      spec: arraySpec
    };
  }

  function copyArraysToNewArray(name, base, newArray) {
    var baseIndex = 0;
    var offset = 0;

    for (var _ii4 = 0; _ii4 < arrayOfArrays.length; ++_ii4) {
      var arrays = arrayOfArrays[_ii4];
      var arrayInfo = arrays[name];
      var array = getArray(arrayInfo);

      if (name === 'indices') {
        copyElements(array, newArray, offset, baseIndex);
        baseIndex += base[_ii4];
      } else {
        copyElements(array, newArray, offset);
      }

      offset += array.length;
    }
  }

  var base = names[baseName];
  var newArrays = {};
  Object.keys(names).forEach(function (name) {
    var info = getLengthOfCombinedArrays(name);
    var newArraySpec = createArrayOfSameType(info.spec, info.length);
    copyArraysToNewArray(name, base, getArray(newArraySpec));
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}
/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The duplicated vertices.
 * @memberOf module:twgl/primitives
 */


function duplicateVertices(arrays) {
  var newArrays = {};
  Object.keys(arrays).forEach(function (name) {
    var arraySpec = arrays[name];
    var srcArray = getArray(arraySpec);
    var newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
    copyElements(srcArray, getArray(newArraySpec), 0);
    newArrays[name] = newArraySpec;
  });
  return newArrays;
}

var create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
exports.create3DFBufferInfo = create3DFBufferInfo;
var create3DFBuffers = createBufferFunc(create3DFVertices);
exports.create3DFBuffers = create3DFBuffers;
var createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
exports.createCubeBufferInfo = createCubeBufferInfo;
var createCubeBuffers = createBufferFunc(createCubeVertices);
exports.createCubeBuffers = createCubeBuffers;
var createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
exports.createPlaneBufferInfo = createPlaneBufferInfo;
var createPlaneBuffers = createBufferFunc(createPlaneVertices);
exports.createPlaneBuffers = createPlaneBuffers;
var createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
exports.createSphereBufferInfo = createSphereBufferInfo;
var createSphereBuffers = createBufferFunc(createSphereVertices);
exports.createSphereBuffers = createSphereBuffers;
var createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
exports.createTruncatedConeBufferInfo = createTruncatedConeBufferInfo;
var createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
exports.createTruncatedConeBuffers = createTruncatedConeBuffers;
var createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
exports.createXYQuadBufferInfo = createXYQuadBufferInfo;
var createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
exports.createXYQuadBuffers = createXYQuadBuffers;
var createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
exports.createCrescentBufferInfo = createCrescentBufferInfo;
var createCrescentBuffers = createBufferFunc(createCrescentVertices);
exports.createCrescentBuffers = createCrescentBuffers;
var createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
exports.createCylinderBufferInfo = createCylinderBufferInfo;
var createCylinderBuffers = createBufferFunc(createCylinderVertices);
exports.createCylinderBuffers = createCylinderBuffers;
var createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
exports.createTorusBufferInfo = createTorusBufferInfo;
var createTorusBuffers = createBufferFunc(createTorusVertices);
exports.createTorusBuffers = createTorusBuffers;
var createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
exports.createDiscBufferInfo = createDiscBufferInfo;
var createDiscBuffers = createBufferFunc(createDiscVertices); // these were mis-spelled until 4.12

exports.createDiscBuffers = createDiscBuffers;
var createCresentBufferInfo = createCrescentBufferInfo;
exports.createCresentBufferInfo = createCresentBufferInfo;
var createCresentBuffers = createCrescentBuffers;
exports.createCresentBuffers = createCresentBuffers;
var createCresentVertices = createCrescentVertices;
exports.createCresentVertices = createCresentVertices;

/***/ }),

/***/ "./src/programs.js":
/*!*************************!*\
  !*** ./src/programs.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.createAttributeSetters = createAttributeSetters;
exports.createProgram = createProgram;
exports.createProgramFromScripts = createProgramFromScripts;
exports.createProgramFromSources = createProgramFromSources;
exports.createProgramInfo = createProgramInfo;
exports.createProgramInfoFromProgram = createProgramInfoFromProgram;
exports.createUniformSetters = createUniformSetters;
exports.createUniformBlockSpecFromProgram = createUniformBlockSpecFromProgram;
exports.createUniformBlockInfoFromProgram = createUniformBlockInfoFromProgram;
exports.createUniformBlockInfo = createUniformBlockInfo;
exports.createTransformFeedback = createTransformFeedback;
exports.createTransformFeedbackInfo = createTransformFeedbackInfo;
exports.bindTransformFeedbackInfo = bindTransformFeedbackInfo;
exports.setAttributes = setAttributes;
exports.setBuffersAndAttributes = setBuffersAndAttributes;
exports.setUniforms = setUniforms;
exports.setUniformBlock = setUniformBlock;
exports.setBlockUniforms = setBlockUniforms;
exports.bindUniformBlock = bindUniformBlock;
exports.setUniformsAndBindTextures = void 0;

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils.js */ "./src/utils.js"));

var helper = _interopRequireWildcard(__webpack_require__(/*! ./helper.js */ "./src/helper.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */
var error = helper.error;
var warn = helper.warn;

function getElementById(id) {
  return typeof document !== 'undefined' && document.getElementById ? document.getElementById(id) : null;
}

var TEXTURE0 = 0x84c0;
var DYNAMIC_DRAW = 0x88e8;
var ARRAY_BUFFER = 0x8892;
var ELEMENT_ARRAY_BUFFER = 0x8893;
var UNIFORM_BUFFER = 0x8a11;
var TRANSFORM_FEEDBACK_BUFFER = 0x8c8e;
var TRANSFORM_FEEDBACK = 0x8e22;
var COMPILE_STATUS = 0x8b81;
var LINK_STATUS = 0x8b82;
var FRAGMENT_SHADER = 0x8b30;
var VERTEX_SHADER = 0x8b31;
var SEPARATE_ATTRIBS = 0x8c8d;
var ACTIVE_UNIFORMS = 0x8b86;
var ACTIVE_ATTRIBUTES = 0x8b89;
var TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;
var ACTIVE_UNIFORM_BLOCKS = 0x8a36;
var UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;
var UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
var UNIFORM_BLOCK_DATA_SIZE = 0x8a40;
var UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;
var FLOAT = 0x1406;
var FLOAT_VEC2 = 0x8B50;
var FLOAT_VEC3 = 0x8B51;
var FLOAT_VEC4 = 0x8B52;
var INT = 0x1404;
var INT_VEC2 = 0x8B53;
var INT_VEC3 = 0x8B54;
var INT_VEC4 = 0x8B55;
var BOOL = 0x8B56;
var BOOL_VEC2 = 0x8B57;
var BOOL_VEC3 = 0x8B58;
var BOOL_VEC4 = 0x8B59;
var FLOAT_MAT2 = 0x8B5A;
var FLOAT_MAT3 = 0x8B5B;
var FLOAT_MAT4 = 0x8B5C;
var SAMPLER_2D = 0x8B5E;
var SAMPLER_CUBE = 0x8B60;
var SAMPLER_3D = 0x8B5F;
var SAMPLER_2D_SHADOW = 0x8B62;
var FLOAT_MAT2x3 = 0x8B65;
var FLOAT_MAT2x4 = 0x8B66;
var FLOAT_MAT3x2 = 0x8B67;
var FLOAT_MAT3x4 = 0x8B68;
var FLOAT_MAT4x2 = 0x8B69;
var FLOAT_MAT4x3 = 0x8B6A;
var SAMPLER_2D_ARRAY = 0x8DC1;
var SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
var SAMPLER_CUBE_SHADOW = 0x8DC5;
var UNSIGNED_INT = 0x1405;
var UNSIGNED_INT_VEC2 = 0x8DC6;
var UNSIGNED_INT_VEC3 = 0x8DC7;
var UNSIGNED_INT_VEC4 = 0x8DC8;
var INT_SAMPLER_2D = 0x8DCA;
var INT_SAMPLER_3D = 0x8DCB;
var INT_SAMPLER_CUBE = 0x8DCC;
var INT_SAMPLER_2D_ARRAY = 0x8DCF;
var UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
var UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
var UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
var UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
var TEXTURE_2D = 0x0DE1;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_3D = 0x806F;
var TEXTURE_2D_ARRAY = 0x8C1A;
var typeMap = {};
/**
 * Returns the corresponding bind point for a given sampler type
 */

function getBindPointForSamplerType(gl, type) {
  return typeMap[type].bindPoint;
} // This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)


function floatSetter(gl, location) {
  return function (v) {
    gl.uniform1f(location, v);
  };
}

function floatArraySetter(gl, location) {
  return function (v) {
    gl.uniform1fv(location, v);
  };
}

function floatVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2fv(location, v);
  };
}

function floatVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3fv(location, v);
  };
}

function floatVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4fv(location, v);
  };
}

function intSetter(gl, location) {
  return function (v) {
    gl.uniform1i(location, v);
  };
}

function intArraySetter(gl, location) {
  return function (v) {
    gl.uniform1iv(location, v);
  };
}

function intVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2iv(location, v);
  };
}

function intVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3iv(location, v);
  };
}

function intVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4iv(location, v);
  };
}

function uintSetter(gl, location) {
  return function (v) {
    gl.uniform1ui(location, v);
  };
}

function uintArraySetter(gl, location) {
  return function (v) {
    gl.uniform1uiv(location, v);
  };
}

function uintVec2Setter(gl, location) {
  return function (v) {
    gl.uniform2uiv(location, v);
  };
}

function uintVec3Setter(gl, location) {
  return function (v) {
    gl.uniform3uiv(location, v);
  };
}

function uintVec4Setter(gl, location) {
  return function (v) {
    gl.uniform4uiv(location, v);
  };
}

function floatMat2Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2fv(location, false, v);
  };
}

function floatMat3Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3fv(location, false, v);
  };
}

function floatMat4Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4fv(location, false, v);
  };
}

function floatMat23Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x3fv(location, false, v);
  };
}

function floatMat32Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x2fv(location, false, v);
  };
}

function floatMat24Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix2x4fv(location, false, v);
  };
}

function floatMat42Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x2fv(location, false, v);
  };
}

function floatMat34Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix3x4fv(location, false, v);
  };
}

function floatMat43Setter(gl, location) {
  return function (v) {
    gl.uniformMatrix4x3fv(location, false, v);
  };
}

function samplerSetter(gl, type, unit, location) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  return utils.isWebGL2(gl) ? function (textureOrPair) {
    var texture;
    var sampler;

    if (helper.isTexture(gl, textureOrPair)) {
      texture = textureOrPair;
      sampler = null;
    } else {
      texture = textureOrPair.texture;
      sampler = textureOrPair.sampler;
    }

    gl.uniform1i(location, unit);
    gl.activeTexture(TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
    gl.bindSampler(unit, sampler);
  } : function (texture) {
    gl.uniform1i(location, unit);
    gl.activeTexture(TEXTURE0 + unit);
    gl.bindTexture(bindPoint, texture);
  };
}

function samplerArraySetter(gl, type, unit, location, size) {
  var bindPoint = getBindPointForSamplerType(gl, type);
  var units = new Int32Array(size);

  for (var ii = 0; ii < size; ++ii) {
    units[ii] = unit + ii;
  }

  return utils.isWebGL2(gl) ? function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (textureOrPair, index) {
      gl.activeTexture(TEXTURE0 + units[index]);
      var texture;
      var sampler;

      if (helper.isTexture(gl, textureOrPair)) {
        texture = textureOrPair;
        sampler = null;
      } else {
        texture = textureOrPair.texture;
        sampler = textureOrPair.sampler;
      }

      gl.bindSampler(unit, sampler);
      gl.bindTexture(bindPoint, texture);
    });
  } : function (textures) {
    gl.uniform1iv(location, units);
    textures.forEach(function (texture, index) {
      gl.activeTexture(TEXTURE0 + units[index]);
      gl.bindTexture(bindPoint, texture);
    });
  };
}

typeMap[FLOAT] = {
  Type: Float32Array,
  size: 4,
  setter: floatSetter,
  arraySetter: floatArraySetter
};
typeMap[FLOAT_VEC2] = {
  Type: Float32Array,
  size: 8,
  setter: floatVec2Setter
};
typeMap[FLOAT_VEC3] = {
  Type: Float32Array,
  size: 12,
  setter: floatVec3Setter
};
typeMap[FLOAT_VEC4] = {
  Type: Float32Array,
  size: 16,
  setter: floatVec4Setter
};
typeMap[INT] = {
  Type: Int32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[INT_VEC2] = {
  Type: Int32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[INT_VEC3] = {
  Type: Int32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[INT_VEC4] = {
  Type: Int32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[UNSIGNED_INT] = {
  Type: Uint32Array,
  size: 4,
  setter: uintSetter,
  arraySetter: uintArraySetter
};
typeMap[UNSIGNED_INT_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: uintVec2Setter
};
typeMap[UNSIGNED_INT_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: uintVec3Setter
};
typeMap[UNSIGNED_INT_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: uintVec4Setter
};
typeMap[BOOL] = {
  Type: Uint32Array,
  size: 4,
  setter: intSetter,
  arraySetter: intArraySetter
};
typeMap[BOOL_VEC2] = {
  Type: Uint32Array,
  size: 8,
  setter: intVec2Setter
};
typeMap[BOOL_VEC3] = {
  Type: Uint32Array,
  size: 12,
  setter: intVec3Setter
};
typeMap[BOOL_VEC4] = {
  Type: Uint32Array,
  size: 16,
  setter: intVec4Setter
};
typeMap[FLOAT_MAT2] = {
  Type: Float32Array,
  size: 16,
  setter: floatMat2Setter
};
typeMap[FLOAT_MAT3] = {
  Type: Float32Array,
  size: 36,
  setter: floatMat3Setter
};
typeMap[FLOAT_MAT4] = {
  Type: Float32Array,
  size: 64,
  setter: floatMat4Setter
};
typeMap[FLOAT_MAT2x3] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat23Setter
};
typeMap[FLOAT_MAT2x4] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat24Setter
};
typeMap[FLOAT_MAT3x2] = {
  Type: Float32Array,
  size: 24,
  setter: floatMat32Setter
};
typeMap[FLOAT_MAT3x4] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat34Setter
};
typeMap[FLOAT_MAT4x2] = {
  Type: Float32Array,
  size: 32,
  setter: floatMat42Setter
};
typeMap[FLOAT_MAT4x3] = {
  Type: Float32Array,
  size: 48,
  setter: floatMat43Setter
};
typeMap[SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[SAMPLER_2D_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[SAMPLER_2D_ARRAY_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[SAMPLER_CUBE_SHADOW] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};
typeMap[UNSIGNED_INT_SAMPLER_2D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D
};
typeMap[UNSIGNED_INT_SAMPLER_3D] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_3D
};
typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_CUBE_MAP
};
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
  Type: null,
  size: 0,
  setter: samplerSetter,
  arraySetter: samplerArraySetter,
  bindPoint: TEXTURE_2D_ARRAY
};

function floatAttribSetter(gl, index) {
  return function (b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);

      switch (b.value.length) {
        case 4:
          gl.vertexAttrib4fv(index, b.value);
          break;

        case 3:
          gl.vertexAttrib3fv(index, b.value);
          break;

        case 2:
          gl.vertexAttrib2fv(index, b.value);
          break;

        case 1:
          gl.vertexAttrib1fv(index, b.value);
          break;

        default:
          throw new Error('the length of a float constant value must be between 1 and 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || FLOAT, b.normalize || false, b.stride || 0, b.offset || 0);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index, b.divisor);
      }
    }
  };
}

function intAttribSetter(gl, index) {
  return function (b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);

      if (b.value.length === 4) {
        gl.vertexAttrib4iv(index, b.value);
      } else {
        throw new Error('The length of an integer constant value must be 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || INT, b.stride || 0, b.offset || 0);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index, b.divisor);
      }
    }
  };
}

function uintAttribSetter(gl, index) {
  return function (b) {
    if (b.value) {
      gl.disableVertexAttribArray(index);

      if (b.value.length === 4) {
        gl.vertexAttrib4uiv(index, b.value);
      } else {
        throw new Error('The length of an unsigned integer constant value must be 4!');
      }
    } else {
      gl.bindBuffer(ARRAY_BUFFER, b.buffer);
      gl.enableVertexAttribArray(index);
      gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || UNSIGNED_INT, b.stride || 0, b.offset || 0);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index, b.divisor);
      }
    }
  };
}

function matAttribSetter(gl, index, typeInfo) {
  var defaultSize = typeInfo.size;
  var count = typeInfo.count;
  return function (b) {
    gl.bindBuffer(ARRAY_BUFFER, b.buffer);
    var numComponents = b.size || b.numComponents || defaultSize;
    var size = numComponents / count;
    var type = b.type || FLOAT;
    var typeInfo = typeMap[type];
    var stride = typeInfo.size * numComponents;
    var normalize = b.normalize || false;
    var offset = b.offset || 0;
    var rowOffset = stride / count;

    for (var i = 0; i < count; ++i) {
      gl.enableVertexAttribArray(index + i);
      gl.vertexAttribPointer(index + i, size, type, normalize, stride, offset + rowOffset * i);

      if (b.divisor !== undefined) {
        gl.vertexAttribDivisor(index + i, b.divisor);
      }
    }
  };
}

var attrTypeMap = {};
attrTypeMap[FLOAT] = {
  size: 4,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC2] = {
  size: 8,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC3] = {
  size: 12,
  setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC4] = {
  size: 16,
  setter: floatAttribSetter
};
attrTypeMap[INT] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[INT_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT] = {
  size: 4,
  setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC2] = {
  size: 8,
  setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC3] = {
  size: 12,
  setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC4] = {
  size: 16,
  setter: uintAttribSetter
};
attrTypeMap[BOOL] = {
  size: 4,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC2] = {
  size: 8,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC3] = {
  size: 12,
  setter: intAttribSetter
};
attrTypeMap[BOOL_VEC4] = {
  size: 16,
  setter: intAttribSetter
};
attrTypeMap[FLOAT_MAT2] = {
  size: 4,
  setter: matAttribSetter,
  count: 2
};
attrTypeMap[FLOAT_MAT3] = {
  size: 9,
  setter: matAttribSetter,
  count: 3
};
attrTypeMap[FLOAT_MAT4] = {
  size: 16,
  setter: matAttribSetter,
  count: 4
}; // make sure we don't see a global gl

var gl = undefined;
/* eslint-disable-line */

var errorRE = /ERROR:\s*\d+:(\d+)/gi;

function addLineNumbersWithError(src) {
  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var lineOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  // Note: Error message formats are not defined by any spec so this may or may not work.
  var matches = _toConsumableArray(log.matchAll(errorRE));

  var lineNoToErrorMap = new Map(matches.map(function (m, ndx) {
    var lineNo = parseInt(m[1]);
    var next = matches[ndx + 1];
    var end = next ? next.index : log.length;
    var msg = log.substring(m.index, end);
    return [lineNo - 1, msg];
  }));
  return src.split('\n').map(function (line, lineNo) {
    var err = lineNoToErrorMap.get(lineNo);
    return "".concat(lineNo + 1 + lineOffset, ": ").concat(line).concat(err ? "\n\n^^^ ".concat(err) : '');
  }).join('\n');
}
/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */


var spaceRE = /^[ \t]*\n/;
/**
 * Loads a shader.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {module:twgl.ErrorCallback} opt_errorCallback callback for errors.
 * @return {WebGLShader} The created shader.
 * @private
 */

function loadShader(gl, shaderSource, shaderType, opt_errorCallback) {
  var errFn = opt_errorCallback || error; // Create the shader object

  var shader = gl.createShader(shaderType); // Remove the first end of line because WebGL 2.0 requires
  // #version 300 es
  // as the first line. No whitespace allowed before that line
  // so
  //
  // <script>
  // #version 300 es
  // </script>
  //
  // Has one line before it which is invalid according to GLSL ES 3.00
  //

  var lineOffset = 0;

  if (spaceRE.test(shaderSource)) {
    lineOffset = 1;
    shaderSource = shaderSource.replace(spaceRE, '');
  } // Load the shader source


  gl.shaderSource(shader, shaderSource); // Compile the shader

  gl.compileShader(shader); // Check the compile status

  var compiled = gl.getShaderParameter(shader, COMPILE_STATUS);

  if (!compiled) {
    // Something went wrong during compilation; get the error
    var lastError = gl.getShaderInfoLog(shader);
    errFn("".concat(addLineNumbersWithError(shaderSource, lastError, lineOffset), "\nError compiling ").concat(utils.glEnumToString(gl, shaderType), ": ").concat(lastError));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>} [attribLocations] a attribute name to location map
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @memberOf module:twgl
 */

/**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments passed in
 * @private
 */


function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
  var transformFeedbackVaryings;
  var transformFeedbackMode;

  if (typeof opt_locations === 'function') {
    opt_errorCallback = opt_locations;
    opt_locations = undefined;
  }

  if (typeof opt_attribs === 'function') {
    opt_errorCallback = opt_attribs;
    opt_attribs = undefined;
  } else if (opt_attribs && !Array.isArray(opt_attribs)) {
    // If we have an errorCallback we can just return this object
    // Otherwise we need to construct one with default errorCallback
    if (opt_attribs.errorCallback) {
      return opt_attribs;
    }

    var opt = opt_attribs;
    opt_errorCallback = opt.errorCallback;
    opt_attribs = opt.attribLocations;
    transformFeedbackVaryings = opt.transformFeedbackVaryings;
    transformFeedbackMode = opt.transformFeedbackMode;
  }

  var options = {
    errorCallback: opt_errorCallback || error,
    transformFeedbackVaryings: transformFeedbackVaryings,
    transformFeedbackMode: transformFeedbackMode
  };

  if (opt_attribs) {
    var attribLocations = {};

    if (Array.isArray(opt_attribs)) {
      opt_attribs.forEach(function (attrib, ndx) {
        attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
      });
    } else {
      attribLocations = opt_attribs;
    }

    options.attribLocations = attribLocations;
  }

  return options;
}

var defaultShaderType = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

function getShaderTypeFromScriptType(gl, scriptType) {
  if (scriptType.indexOf("frag") >= 0) {
    return FRAGMENT_SHADER;
  } else if (scriptType.indexOf("vert") >= 0) {
    return VERTEX_SHADER;
  }

  return undefined;
}

function deleteShaders(gl, shaders) {
  shaders.forEach(function (shader) {
    gl.deleteShader(shader);
  });
}
/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program and calls useProgram.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var realShaders = [];
  var newShaders = [];

  for (var ndx = 0; ndx < shaders.length; ++ndx) {
    var shader = shaders[ndx];

    if (typeof shader === 'string') {
      var elem = getElementById(shader);
      var src = elem ? elem.text : shader;
      var type = gl[defaultShaderType[ndx]];

      if (elem && elem.type) {
        type = getShaderTypeFromScriptType(gl, elem.type) || type;
      }

      shader = loadShader(gl, src, type, progOptions.errorCallback);
      newShaders.push(shader);
    }

    if (helper.isShader(gl, shader)) {
      realShaders.push(shader);
    }
  }

  if (realShaders.length !== shaders.length) {
    progOptions.errorCallback("not enough shaders for program");
    deleteShaders(gl, newShaders);
    return null;
  }

  var program = gl.createProgram();
  realShaders.forEach(function (shader) {
    gl.attachShader(program, shader);
  });

  if (progOptions.attribLocations) {
    Object.keys(progOptions.attribLocations).forEach(function (attrib) {
      gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
    });
  }

  var varyings = progOptions.transformFeedbackVaryings;

  if (varyings) {
    if (varyings.attribs) {
      varyings = varyings.attribs;
    }

    if (!Array.isArray(varyings)) {
      varyings = Object.keys(varyings);
    }

    gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
  }

  gl.linkProgram(program); // Check the link status

  var linked = gl.getProgramParameter(program, LINK_STATUS);

  if (!linked) {
    // something went wrong with the link
    var lastError = gl.getProgramInfoLog(program);
    progOptions.errorCallback("".concat(realShaders.map(function (shader) {
      var src = addLineNumbersWithError(gl.getShaderSource(shader), '', 0);
      var type = gl.getShaderParameter(shader, gl.SHADER_TYPE);
      return "".concat(utils.glEnumToString(gl, type), "\n").concat(src, "}");
    }).join('\n'), "\nError in program linking: ").concat(lastError));
    gl.deleteProgram(program);
    deleteShaders(gl, newShaders);
    return null;
  }

  return program;
}
/**
 * Loads a shader from a script tag.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} scriptId The id of the script tag.
 * @param {number} [opt_shaderType] The type of shader. If not passed in it will
 *     be derived from the type of the script tag.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors.
 * @return {WebGLShader?} The created shader or null if error.
 * @private
 */


function createShaderFromScript(gl, scriptId, opt_shaderType, opt_errorCallback) {
  var shaderSource = "";
  var shaderScript = getElementById(scriptId);

  if (!shaderScript) {
    throw new Error("unknown script element: ".concat(scriptId));
  }

  shaderSource = shaderScript.text;
  var shaderType = opt_shaderType || getShaderTypeFromScriptType(gl, shaderScript.type);

  if (!shaderType) {
    throw new Error('unknown shader type');
  }

  return loadShader(gl, shaderSource, shaderType, opt_errorCallback);
}
/**
 * Creates a program from 2 script tags.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderScriptIds Array of ids of the script
 *        tags for the shaders. The first is assumed to be the
 *        vertex shader, the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderScriptIds.length; ++ii) {
    var shader = createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error.
 * @memberOf module:twgl/programs
 */


function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var shaders = [];

  for (var ii = 0; ii < shaderSources.length; ++ii) {
    var shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions.errorCallback);

    if (!shader) {
      return null;
    }

    shaders.push(shader);
  }

  return createProgram(gl, shaders, progOptions);
}
/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 * @private
 */


function isBuiltIn(info) {
  var name = info.name;
  return name.startsWith("gl_") || name.startsWith("webgl_");
}
/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */


function createUniformSetters(gl, program) {
  var textureUnit = 0;
  /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */

  function createUniformSetter(program, uniformInfo, location) {
    var isArray = uniformInfo.name.endsWith("[0]");
    var type = uniformInfo.type;
    var typeInfo = typeMap[type];

    if (!typeInfo) {
      throw new Error("unknown type: 0x".concat(type.toString(16))); // we should never get here.
    }

    var setter;

    if (typeInfo.bindPoint) {
      // it's a sampler
      var unit = textureUnit;
      textureUnit += uniformInfo.size;

      if (isArray) {
        setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
      } else {
        setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
      }
    } else {
      if (typeInfo.arraySetter && isArray) {
        setter = typeInfo.arraySetter(gl, location);
      } else {
        setter = typeInfo.setter(gl, location);
      }
    }

    setter.location = location;
    return setter;
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);

  for (var ii = 0; ii < numUniforms; ++ii) {
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      continue;
    }

    var name = uniformInfo.name; // remove the array suffix.

    if (name.endsWith("[0]")) {
      name = name.substr(0, name.length - 3);
    }

    var location = gl.getUniformLocation(program, uniformInfo.name); // the uniform will have no location if it's in a uniform block

    if (location) {
      uniformSetters[name] = createUniformSetter(program, uniformInfo, location);
    }
  }

  return uniformSetters;
}
/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */

/**
 * Create TransformFeedbackInfo for passing to bindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */


function createTransformFeedbackInfo(gl, program) {
  var info = {};
  var numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);

  for (var ii = 0; ii < numVaryings; ++ii) {
    var varying = gl.getTransformFeedbackVarying(program, ii);
    info[varying.name] = {
      index: ii,
      type: varying.type,
      size: varying.size
    };
  }

  return info;
}
/**
 * Binds buffers for transform feedback.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @memberOf module:twgl
 */


function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
  if (transformFeedbackInfo.transformFeedbackInfo) {
    transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
  }

  if (bufferInfo.attribs) {
    bufferInfo = bufferInfo.attribs;
  }

  for (var name in bufferInfo) {
    var varying = transformFeedbackInfo[name];

    if (varying) {
      var buf = bufferInfo[name];

      if (buf.offset) {
        gl.bindBufferRange(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
      } else {
        gl.bindBufferBase(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
      }
    }
  }
}
/**
 * Creates a transform feedback and sets the buffers
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @return {WebGLTransformFeedback} the created transform feedback
 * @memberOf module:twgl
 */


function createTransformFeedback(gl, programInfo, bufferInfo) {
  var tf = gl.createTransformFeedback();
  gl.bindTransformFeedback(TRANSFORM_FEEDBACK, tf);
  gl.useProgram(programInfo.program);
  bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
  gl.bindTransformFeedback(TRANSFORM_FEEDBACK, null);
  return tf;
}
/**
 * @typedef {Object} UniformData
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */

/**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanatory
 * @property {bool} usedByFragmentShader Self explanatory
 * @property {bool} used Self explanatory
 * @memberOf module:twgl
 */

/**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec> blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */

/**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */


function createUniformBlockSpecFromProgram(gl, program) {
  var numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
  var uniformData = [];
  var uniformIndices = [];

  for (var ii = 0; ii < numUniforms; ++ii) {
    uniformIndices.push(ii);
    uniformData.push({});
    var uniformInfo = gl.getActiveUniform(program, ii);

    if (isBuiltIn(uniformInfo)) {
      break;
    }

    uniformData[ii].name = uniformInfo.name;
  }

  [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], // num elements
  ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (pair) {
    var pname = pair[0];
    var key = pair[1];
    gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function (value, ndx) {
      uniformData[ndx][key] = value;
    });
  });
  var blockSpecs = {};
  var numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);

  for (var _ii = 0; _ii < numUniformBlocks; ++_ii) {
    var name = gl.getActiveUniformBlockName(program, _ii);
    var blockSpec = {
      index: gl.getUniformBlockIndex(program, name),
      usedByVertexShader: gl.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
      usedByFragmentShader: gl.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
      size: gl.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_DATA_SIZE),
      uniformIndices: gl.getActiveUniformBlockParameter(program, _ii, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
    };
    blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
    blockSpecs[name] = blockSpec;
  }

  return {
    blockSpecs: blockSpecs,
    uniformData: uniformData
  };
}

var arraySuffixRE = /\[\d+\]\.$/; // better way to check?

var pad = function pad(v, padding) {
  return ((v + (padding - 1)) / padding | 0) * padding;
};

function createUniformBlockUniformSetter(view, Type, typeSize, paddedSize, isArray) {
  if (isArray) {
    var numElements = typeSize / Type.BYTES_PER_ELEMENT;
    var numPaddedElements = paddedSize / Type.BYTES_PER_ELEMENT;
    return function (value) {
      var dst = 0;

      for (var src = 0; src < value.length; src += numElements) {
        for (var i = 0; i < numElements; ++i) {
          view[dst + i] = value[src + i];
        }

        dst += numPaddedElements;
      }
    };
  } else {
    return function (value) {
      if (value.length) {
        view.set(value);
      } else {
        view[0] = value;
      }
    };
  }
}
/**
 * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
 * and a corresponding WebGLBuffer to hold those values on the GPU
 *
 * @typedef {Object} UniformBlockInfo
 * @property {string} name The name of the block
 * @property {ArrayBuffer} array The array buffer that contains the uniform values
 * @property {Float32Array} asFloat A float view on the array buffer. This is useful
 *    inspecting the contents of the buffer in the debugger.
 * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
 * @property {number} [offset] offset into buffer
 * @property {Object<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
 *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
 *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
 *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
 *   `Int32Array` view, etc.
 * @property {Object<string, function>} setters A setter for this uniform.
 *   The reason to use setters is elements of arrays are padded to vec4 sizes which
 *   means if you want to set an array of 4 floats you'd need to set 16 values
 *   (or set elements 0, 4, 8, 12). In other words
 *   `someBlockInfo.uniforms.some4FloatArrayUniform.set([0, , , , 1, , , , 2, , , , 3])`
 *   where as the setter handles just passing in [0, 1, 2, 3] either directly as in
 *   `someBlockInfo.setter.some4FloatArrayUniform.set([0, 1, 2, 3])` (not recommended)
 *   or via {@link module:twgl.setBlockUniforms}
 * @memberOf module:twgl
 */

/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {WebGLProgram} program A WebGLProgram
 * @param {module:twgl.UniformBlockSpec} uniformBlockSpec. A UniformBlockSpec as returned
 *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */


function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
  var blockSpecs = uniformBlockSpec.blockSpecs;
  var uniformData = uniformBlockSpec.uniformData;
  var blockSpec = blockSpecs[blockName];

  if (!blockSpec) {
    warn("no uniform block object named:", blockName);
    return {
      name: blockName,
      uniforms: {}
    };
  }

  var array = new ArrayBuffer(blockSpec.size);
  var buffer = gl.createBuffer();
  var uniformBufferIndex = blockSpec.index;
  gl.bindBuffer(UNIFORM_BUFFER, buffer);
  gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);
  var prefix = blockName + ".";

  if (arraySuffixRE.test(prefix)) {
    prefix = prefix.replace(arraySuffixRE, ".");
  }

  var uniforms = {};
  var setters = {};
  blockSpec.uniformIndices.forEach(function (uniformNdx) {
    var data = uniformData[uniformNdx];
    var typeInfo = typeMap[data.type];
    var Type = typeInfo.Type;
    var paddedSize = pad(typeInfo.size, 16);
    var length = typeInfo.size + (data.size - 1) * paddedSize;
    var name = data.name;

    if (name.startsWith(prefix)) {
      name = name.substr(prefix.length);
    }

    var isArray = name.endsWith('[0]');

    if (isArray) {
      name = name.substr(0, name.length - 3);
    }

    var uniformView = new Type(array, data.offset, length / Type.BYTES_PER_ELEMENT);
    uniforms[name] = uniformView;
    setters[name] = createUniformBlockUniformSetter(uniformView, Type, typeInfo.size, paddedSize, isArray);
  });
  return {
    name: blockName,
    array: array,
    asFloat: new Float32Array(array),
    // for debugging
    buffer: buffer,
    uniforms: uniforms,
    setters: setters
  };
}
/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo}
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */


function createUniformBlockInfo(gl, programInfo, blockName) {
  return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
}
/**
 * Binds a uniform block to the matching uniform block point.
 * Matches by blocks by name so blocks must have the same name not just the same
 * structure.
 *
 * If you have changed any values and you upload the values into the corresponding WebGLBuffer
 * call {@link module:twgl.setUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
 *     no buffer is bound.
 * @memberOf module:twgl/programs
 */


function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
  var uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
  var blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];

  if (blockSpec) {
    var bufferBindIndex = blockSpec.index;
    gl.bindBufferRange(UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
    return true;
  }

  return false;
}
/**
 * Uploads the current uniform values to the corresponding WebGLBuffer
 * and binds that buffer to the program's corresponding bind point for the uniform block object.
 *
 * If you haven't changed any values and you only need to bind the uniform block object
 * call {@link module:twgl.bindUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @memberOf module:twgl/programs
 */


function setUniformBlock(gl, programInfo, uniformBlockInfo) {
  if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) {
    gl.bufferData(UNIFORM_BUFFER, uniformBlockInfo.array, DYNAMIC_DRAW);
  }
}
/**
 * Sets values of a uniform block object
 *
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
 * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
 *    type of uniform. So for example given a block like
 *
 *       uniform SomeBlock {
 *         float someFloat;
 *         vec2 someVec2;
 *         vec3 someVec3Array[2];
 *         int someInt;
 *       }
 *
 *  You can set the values of the uniform block with
 *
 *       twgl.setBlockUniforms(someBlockInfo, {
 *          someFloat: 12.3,
 *          someVec2: [1, 2],
 *          someVec3Array: [1, 2, 3, 4, 5, 6],
 *          someInt: 5,
 *       }
 *
 *  Arrays can be JavaScript arrays or typed arrays
 *
 *  Any name that doesn't match will be ignored
 * @memberOf module:twgl/programs
 */


function setBlockUniforms(uniformBlockInfo, values) {
  var setters = uniformBlockInfo.setters;

  for (var name in values) {
    var setter = setters[name];

    if (setter) {
      var value = values[name];
      setter(value);
    }
  }
}
/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     var texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 * @memberOf module:twgl/programs
 */


function setUniforms(setters, values) {
  // eslint-disable-line
  var actualSetters = setters.uniformSetters || setters;
  var numArgs = arguments.length;

  for (var aNdx = 1; aNdx < numArgs; ++aNdx) {
    var _values = arguments[aNdx];

    if (Array.isArray(_values)) {
      var numValues = _values.length;

      for (var ii = 0; ii < numValues; ++ii) {
        setUniforms(actualSetters, _values[ii]);
      }
    } else {
      for (var name in _values) {
        var setter = actualSetters[name];

        if (setter) {
          setter(_values[name]);
        }
      }
    }
  }
}
/**
 * Alias for `setUniforms`
 * @function
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 * @memberOf module:twgl/programs
 */


var setUniformsAndBindTextures = setUniforms;
/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */

exports.setUniformsAndBindTextures = setUniformsAndBindTextures;

function createAttributeSetters(gl, program) {
  var attribSetters = {};
  var numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);

  for (var ii = 0; ii < numAttribs; ++ii) {
    var attribInfo = gl.getActiveAttrib(program, ii);

    if (isBuiltIn(attribInfo)) {
      continue;
    }

    var index = gl.getAttribLocation(program, attribInfo.name);
    var typeInfo = attrTypeMap[attribInfo.type];
    var setter = typeInfo.setter(gl, index, typeInfo);
    setter.location = index;
    attribSetters[attribInfo.name] = setter;
  }

  return attribSetters;
}
/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 */


function setAttributes(setters, buffers) {
  for (var name in buffers) {
    var setter = setters[name];

    if (setter) {
      setter(buffers[name]);
    }
  }
}
/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivalent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgramInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */


function setBuffersAndAttributes(gl, programInfo, buffers) {
  if (buffers.vertexArrayObject) {
    gl.bindVertexArray(buffers.vertexArrayObject);
  } else {
    setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);

    if (buffers.indices) {
      gl.bindBuffer(ELEMENT_ARRAY_BUFFER, buffers.indices);
    }
  }
}
/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @property {module:twgl.UniformBlockSpec} [uniformBlockSpace] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */

/**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */


function createProgramInfoFromProgram(gl, program) {
  var uniformSetters = createUniformSetters(gl, program);
  var attribSetters = createAttributeSetters(gl, program);
  var programInfo = {
    program: program,
    uniformSetters: uniformSetters,
    attribSetters: attribSetters
  };

  if (utils.isWebGL2(gl)) {
    programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
    programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
  }

  return programInfo;
}
/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */


function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
  var progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
  var good = true;
  shaderSources = shaderSources.map(function (source) {
    // Lets assume if there is no \n it's an id
    if (source.indexOf("\n") < 0) {
      var script = getElementById(source);

      if (!script) {
        progOptions.errorCallback("no element with id: " + source);
        good = false;
      } else {
        source = script.text;
      }
    }

    return source;
  });

  if (!good) {
    return null;
  }

  var program = createProgramFromSources(gl, shaderSources, progOptions);

  if (!program) {
    return null;
  }

  return createProgramInfoFromProgram(gl, program);
}

/***/ }),

/***/ "./src/textures.js":
/*!*************************!*\
  !*** ./src/textures.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.setTextureDefaults_ = setDefaults;
exports.createSampler = createSampler;
exports.createSamplers = createSamplers;
exports.setSamplerParameters = setSamplerParameters;
exports.createTexture = createTexture;
exports.setEmptyTexture = setEmptyTexture;
exports.setTextureFromArray = setTextureFromArray;
exports.loadTextureFromUrl = loadTextureFromUrl;
exports.setTextureFromElement = setTextureFromElement;
exports.setTextureFilteringForSize = setTextureFilteringForSize;
exports.setTextureParameters = setTextureParameters;
exports.setDefaultTextureColor = setDefaultTextureColor;
exports.createTextures = createTextures;
exports.resizeTexture = resizeTexture;
exports.canGenerateMipmap = canGenerateMipmap;
exports.canFilter = canFilter;
exports.getNumComponentsForFormat = getNumComponentsForFormat;
exports.getBytesPerElementForInternalFormat = getBytesPerElementForInternalFormat;
exports.getFormatAndTypeForInternalFormat = getFormatAndTypeForInternalFormat;

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils.js */ "./src/utils.js"));

var typedArrays = _interopRequireWildcard(__webpack_require__(/*! ./typedarrays.js */ "./src/typedarrays.js"));

var helper = _interopRequireWildcard(__webpack_require__(/*! ./helper.js */ "./src/helper.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Low level texture related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.textures` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/textures
 */
// make sure we don't see a global gl
var gl = undefined;
/* eslint-disable-line */

var defaults = {
  textureColor: new Uint8Array([128, 192, 255, 255]),
  textureOptions: {},
  crossOrigin: undefined
};
var isArrayBuffer = typedArrays.isArrayBuffer; // Should we make this on demand?

var getShared2DContext = function () {
  var s_ctx;
  return function getShared2DContext() {
    s_ctx = s_ctx || (typeof document !== 'undefined' && document.createElement ? document.createElement("canvas").getContext("2d") : null);
    return s_ctx;
  };
}(); // NOTE: Chrome supports 2D canvas in a Worker (behind flag as of v64 but
//       not only does Firefox NOT support it but Firefox freezes immediately
//       if you try to create one instead of just returning null and continuing.
//  : (global.OffscreenCanvas && (new global.OffscreenCanvas(1, 1)).getContext("2d"));  // OffscreenCanvas may not support 2d
// NOTE: We can maybe remove some of the need for the 2d canvas. In WebGL2
// we can use the various unpack settings. Otherwise we could try using
// the ability of an ImageBitmap to be cut. Unfortunately cutting an ImageBitmap
// is async and the current TWGL code expects a non-Async result though that
// might not be a problem. ImageBitmap though is not available in Edge or Safari
// as of 2018-01-02

/* PixelFormat */


var ALPHA = 0x1906;
var RGB = 0x1907;
var RGBA = 0x1908;
var LUMINANCE = 0x1909;
var LUMINANCE_ALPHA = 0x190A;
var DEPTH_COMPONENT = 0x1902;
var DEPTH_STENCIL = 0x84F9;
/* TextureWrapMode */
// const REPEAT                         = 0x2901;
// const MIRRORED_REPEAT                = 0x8370;

var CLAMP_TO_EDGE = 0x812f;
/* TextureMagFilter */

var NEAREST = 0x2600;
var LINEAR = 0x2601;
/* TextureMinFilter */
// const NEAREST_MIPMAP_NEAREST         = 0x2700;
// const LINEAR_MIPMAP_NEAREST          = 0x2701;
// const NEAREST_MIPMAP_LINEAR          = 0x2702;
// const LINEAR_MIPMAP_LINEAR           = 0x2703;

/* Texture Target */

var TEXTURE_2D = 0x0de1;
var TEXTURE_CUBE_MAP = 0x8513;
var TEXTURE_3D = 0x806f;
var TEXTURE_2D_ARRAY = 0x8c1a;
/* Cubemap Targets */

var TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
var TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
var TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
var TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
var TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
var TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;
/* Texture Parameters */

var TEXTURE_MIN_FILTER = 0x2801;
var TEXTURE_MAG_FILTER = 0x2800;
var TEXTURE_WRAP_S = 0x2802;
var TEXTURE_WRAP_T = 0x2803;
var TEXTURE_WRAP_R = 0x8072;
var TEXTURE_MIN_LOD = 0x813a;
var TEXTURE_MAX_LOD = 0x813b;
var TEXTURE_BASE_LEVEL = 0x813c;
var TEXTURE_MAX_LEVEL = 0x813d;
/* Pixel store */

var UNPACK_ALIGNMENT = 0x0cf5;
var UNPACK_ROW_LENGTH = 0x0cf2;
var UNPACK_IMAGE_HEIGHT = 0x806e;
var UNPACK_SKIP_PIXELS = 0x0cf4;
var UNPACK_SKIP_ROWS = 0x0cf3;
var UNPACK_SKIP_IMAGES = 0x806d;
var UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
var UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
var UNPACK_FLIP_Y_WEBGL = 0x9240;
var R8 = 0x8229;
var R8_SNORM = 0x8F94;
var R16F = 0x822D;
var R32F = 0x822E;
var R8UI = 0x8232;
var R8I = 0x8231;
var RG16UI = 0x823A;
var RG16I = 0x8239;
var RG32UI = 0x823C;
var RG32I = 0x823B;
var RG8 = 0x822B;
var RG8_SNORM = 0x8F95;
var RG16F = 0x822F;
var RG32F = 0x8230;
var RG8UI = 0x8238;
var RG8I = 0x8237;
var R16UI = 0x8234;
var R16I = 0x8233;
var R32UI = 0x8236;
var R32I = 0x8235;
var RGB8 = 0x8051;
var SRGB8 = 0x8C41;
var RGB565 = 0x8D62;
var RGB8_SNORM = 0x8F96;
var R11F_G11F_B10F = 0x8C3A;
var RGB9_E5 = 0x8C3D;
var RGB16F = 0x881B;
var RGB32F = 0x8815;
var RGB8UI = 0x8D7D;
var RGB8I = 0x8D8F;
var RGB16UI = 0x8D77;
var RGB16I = 0x8D89;
var RGB32UI = 0x8D71;
var RGB32I = 0x8D83;
var RGBA8 = 0x8058;
var SRGB8_ALPHA8 = 0x8C43;
var RGBA8_SNORM = 0x8F97;
var RGB5_A1 = 0x8057;
var RGBA4 = 0x8056;
var RGB10_A2 = 0x8059;
var RGBA16F = 0x881A;
var RGBA32F = 0x8814;
var RGBA8UI = 0x8D7C;
var RGBA8I = 0x8D8E;
var RGB10_A2UI = 0x906F;
var RGBA16UI = 0x8D76;
var RGBA16I = 0x8D88;
var RGBA32I = 0x8D82;
var RGBA32UI = 0x8D70;
var DEPTH_COMPONENT16 = 0x81A5;
var DEPTH_COMPONENT24 = 0x81A6;
var DEPTH_COMPONENT32F = 0x8CAC;
var DEPTH32F_STENCIL8 = 0x8CAD;
var DEPTH24_STENCIL8 = 0x88F0;
/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(

var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var RG = 0x8227;
var RG_INTEGER = 0x8228;
var RED = 0x1903;
var RED_INTEGER = 0x8D94;
var RGB_INTEGER = 0x8D98;
var RGBA_INTEGER = 0x8D99;
var formatInfo = {};
{
  // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
  // the name.
  var f = formatInfo;
  f[ALPHA] = {
    numColorComponents: 1
  };
  f[LUMINANCE] = {
    numColorComponents: 1
  };
  f[LUMINANCE_ALPHA] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RED] = {
    numColorComponents: 1
  };
  f[RED_INTEGER] = {
    numColorComponents: 1
  };
  f[RG] = {
    numColorComponents: 2
  };
  f[RG_INTEGER] = {
    numColorComponents: 2
  };
  f[RGB] = {
    numColorComponents: 3
  };
  f[RGB_INTEGER] = {
    numColorComponents: 3
  };
  f[RGBA] = {
    numColorComponents: 4
  };
  f[RGBA_INTEGER] = {
    numColorComponents: 4
  };
  f[DEPTH_COMPONENT] = {
    numColorComponents: 1
  };
  f[DEPTH_STENCIL] = {
    numColorComponents: 2
  };
}
/**
 * @typedef {Object} TextureFormatDetails
 * @property {number} textureFormat format to pass texImage2D and similar functions.
 * @property {boolean} colorRenderable true if you can render to this format of texture.
 * @property {boolean} textureFilterable true if you can filter the texture, false if you can ony use `NEAREST`.
 * @property {number[]} type Array of possible types you can pass to texImage2D and similar function
 * @property {Object.<number,number>} bytesPerElementMap A map of types to bytes per element
 * @private
 */

var s_textureInternalFormatInfo;

function getTextureInternalFormatInfo(internalFormat) {
  if (!s_textureInternalFormatInfo) {
    // NOTE: these properties need unique names so we can let Uglify mangle the name.
    var t = {}; // unsized formats

    t[ALPHA] = {
      textureFormat: ALPHA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [1, 2, 2, 4],
      type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
    };
    t[LUMINANCE] = {
      textureFormat: LUMINANCE,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [1, 2, 2, 4],
      type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
    };
    t[LUMINANCE_ALPHA] = {
      textureFormat: LUMINANCE_ALPHA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [2, 4, 4, 8],
      type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT]
    };
    t[RGB] = {
      textureFormat: RGB,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [3, 6, 6, 12, 2],
      type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_5_6_5]
    };
    t[RGBA] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4, 8, 8, 16, 2, 2],
      type: [UNSIGNED_BYTE, HALF_FLOAT, HALF_FLOAT_OES, FLOAT, UNSIGNED_SHORT_4_4_4_4, UNSIGNED_SHORT_5_5_5_1]
    };
    t[DEPTH_COMPONENT] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2, 4],
      type: [UNSIGNED_INT, UNSIGNED_SHORT]
    }; // sized formats

    t[R8] = {
      textureFormat: RED,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [1],
      type: [UNSIGNED_BYTE]
    };
    t[R8_SNORM] = {
      textureFormat: RED,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [1],
      type: [BYTE]
    };
    t[R16F] = {
      textureFormat: RED,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [4, 2],
      type: [FLOAT, HALF_FLOAT]
    };
    t[R32F] = {
      textureFormat: RED,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [FLOAT]
    };
    t[R8UI] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [1],
      type: [UNSIGNED_BYTE]
    };
    t[R8I] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [1],
      type: [BYTE]
    };
    t[R16UI] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [UNSIGNED_SHORT]
    };
    t[R16I] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [SHORT]
    };
    t[R32UI] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT]
    };
    t[R32I] = {
      textureFormat: RED_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [INT]
    };
    t[RG8] = {
      textureFormat: RG,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [2],
      type: [UNSIGNED_BYTE]
    };
    t[RG8_SNORM] = {
      textureFormat: RG,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [2],
      type: [BYTE]
    };
    t[RG16F] = {
      textureFormat: RG,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [8, 4],
      type: [FLOAT, HALF_FLOAT]
    };
    t[RG32F] = {
      textureFormat: RG,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [FLOAT]
    };
    t[RG8UI] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [UNSIGNED_BYTE]
    };
    t[RG8I] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2],
      type: [BYTE]
    };
    t[RG16UI] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_SHORT]
    };
    t[RG16I] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [SHORT]
    };
    t[RG32UI] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [UNSIGNED_INT]
    };
    t[RG32I] = {
      textureFormat: RG_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [INT]
    };
    t[RGB8] = {
      textureFormat: RGB,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [3],
      type: [UNSIGNED_BYTE]
    };
    t[SRGB8] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [3],
      type: [UNSIGNED_BYTE]
    };
    t[RGB565] = {
      textureFormat: RGB,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [3, 2],
      type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_6_5]
    };
    t[RGB8_SNORM] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [3],
      type: [BYTE]
    };
    t[R11F_G11F_B10F] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [12, 6, 4],
      type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_10F_11F_11F_REV]
    };
    t[RGB9_E5] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [12, 6, 4],
      type: [FLOAT, HALF_FLOAT, UNSIGNED_INT_5_9_9_9_REV]
    };
    t[RGB16F] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [12, 6],
      type: [FLOAT, HALF_FLOAT]
    };
    t[RGB32F] = {
      textureFormat: RGB,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [12],
      type: [FLOAT]
    };
    t[RGB8UI] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [3],
      type: [UNSIGNED_BYTE]
    };
    t[RGB8I] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [3],
      type: [BYTE]
    };
    t[RGB16UI] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [6],
      type: [UNSIGNED_SHORT]
    };
    t[RGB16I] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [6],
      type: [SHORT]
    };
    t[RGB32UI] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [12],
      type: [UNSIGNED_INT]
    };
    t[RGB32I] = {
      textureFormat: RGB_INTEGER,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [12],
      type: [INT]
    };
    t[RGBA8] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [UNSIGNED_BYTE]
    };
    t[SRGB8_ALPHA8] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [UNSIGNED_BYTE]
    };
    t[RGBA8_SNORM] = {
      textureFormat: RGBA,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [BYTE]
    };
    t[RGB5_A1] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4, 2, 4],
      type: [UNSIGNED_BYTE, UNSIGNED_SHORT_5_5_5_1, UNSIGNED_INT_2_10_10_10_REV]
    };
    t[RGBA4] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4, 2],
      type: [UNSIGNED_BYTE, UNSIGNED_SHORT_4_4_4_4]
    };
    t[RGB10_A2] = {
      textureFormat: RGBA,
      colorRenderable: true,
      textureFilterable: true,
      bytesPerElement: [4],
      type: [UNSIGNED_INT_2_10_10_10_REV]
    };
    t[RGBA16F] = {
      textureFormat: RGBA,
      colorRenderable: false,
      textureFilterable: true,
      bytesPerElement: [16, 8],
      type: [FLOAT, HALF_FLOAT]
    };
    t[RGBA32F] = {
      textureFormat: RGBA,
      colorRenderable: false,
      textureFilterable: false,
      bytesPerElement: [16],
      type: [FLOAT]
    };
    t[RGBA8UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_BYTE]
    };
    t[RGBA8I] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [BYTE]
    };
    t[RGB10_A2UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT_2_10_10_10_REV]
    };
    t[RGBA16UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [UNSIGNED_SHORT]
    };
    t[RGBA16I] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [8],
      type: [SHORT]
    };
    t[RGBA32I] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [16],
      type: [INT]
    };
    t[RGBA32UI] = {
      textureFormat: RGBA_INTEGER,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [16],
      type: [UNSIGNED_INT]
    }; // Sized Internal

    t[DEPTH_COMPONENT16] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [2, 4],
      type: [UNSIGNED_SHORT, UNSIGNED_INT]
    };
    t[DEPTH_COMPONENT24] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT]
    };
    t[DEPTH_COMPONENT32F] = {
      textureFormat: DEPTH_COMPONENT,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [FLOAT]
    };
    t[DEPTH24_STENCIL8] = {
      textureFormat: DEPTH_STENCIL,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [UNSIGNED_INT_24_8]
    };
    t[DEPTH32F_STENCIL8] = {
      textureFormat: DEPTH_STENCIL,
      colorRenderable: true,
      textureFilterable: false,
      bytesPerElement: [4],
      type: [FLOAT_32_UNSIGNED_INT_24_8_REV]
    };
    Object.keys(t).forEach(function (internalFormat) {
      var info = t[internalFormat];
      info.bytesPerElementMap = {};
      info.bytesPerElement.forEach(function (bytesPerElement, ndx) {
        var type = info.type[ndx];
        info.bytesPerElementMap[type] = bytesPerElement;
      });
    });
    s_textureInternalFormatInfo = t;
  }

  return s_textureInternalFormatInfo[internalFormat];
}
/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */


function getBytesPerElementForInternalFormat(internalFormat, type) {
  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  var bytesPerElement = info.bytesPerElementMap[type];

  if (bytesPerElement === undefined) {
    throw "unknown internal format";
  }

  return bytesPerElement;
}
/**
 * Info related to a specific texture internalFormat as returned
 * from {@link module:twgl/textures.getFormatAndTypeForInternalFormat}.
 *
 * @typedef {Object} TextureFormatInfo
 * @property {number} format Format to pass to texImage2D and related functions
 * @property {number} type Type to pass to texImage2D and related functions
 * @memberOf module:twgl/textures
 */

/**
 * Gets the format and type for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {module:twgl/textures.TextureFormatInfo} the corresponding format and type,
 * @memberOf module:twgl/textures
 */


function getFormatAndTypeForInternalFormat(internalFormat) {
  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  return {
    format: info.textureFormat,
    type: info.type[0]
  };
}
/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 * @private
 */


function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
/**
 * Gets whether or not we can generate mips for the given
 * internal format.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number} width The width parameter from texImage2D etc..
 * @param {number} height The height parameter from texImage2D etc..
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */


function canGenerateMipmap(gl, width, height, internalFormat) {
  if (!utils.isWebGL2(gl)) {
    return isPowerOf2(width) && isPowerOf2(height);
  }

  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  return info.colorRenderable && info.textureFilterable;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */


function canFilter(internalFormat) {
  var info = getTextureInternalFormatInfo(internalFormat);

  if (!info) {
    throw "unknown internal format";
  }

  return info.textureFilterable;
}
/**
 * Gets the number of components for a given image format.
 * @param {number} format the format.
 * @return {number} the number of components for the format.
 * @memberOf module:twgl/textures
 */


function getNumComponentsForFormat(format) {
  var info = formatInfo[format];

  if (!info) {
    throw "unknown format: " + format;
  }

  return info.numColorComponents;
}
/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 * @private
 */


function getTextureTypeForArrayType(gl, src, defaultType) {
  if (isArrayBuffer(src)) {
    return typedArrays.getGLTypeForTypedArray(src);
  }

  return defaultType || UNSIGNED_BYTE;
}

function guessDimensions(gl, target, width, height, numElements) {
  if (numElements % 1 !== 0) {
    throw "can't guess dimensions";
  }

  if (!width && !height) {
    var size = Math.sqrt(numElements / (target === TEXTURE_CUBE_MAP ? 6 : 1));

    if (size % 1 === 0) {
      width = size;
      height = size;
    } else {
      width = numElements;
      height = 1;
    }
  } else if (!height) {
    height = numElements / width;

    if (height % 1) {
      throw "can't guess dimensions";
    }
  } else if (!width) {
    width = numElements / height;

    if (width % 1) {
      throw "can't guess dimensions";
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * Sets the default texture color.
 *
 * The default texture color is used when loading textures from
 * urls. Because the URL will be loaded async we'd like to be
 * able to use the texture immediately. By putting a 1x1 pixel
 * color in the texture we can start using the texture before
 * the URL has loaded.
 *
 * @param {number[]} color Array of 4 values in the range 0 to 1
 * @deprecated see {@link module:twgl.setDefaults}
 * @memberOf module:twgl/textures
 */


function setDefaultTextureColor(color) {
  defaults.textureColor = new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);

  if (newDefaults.textureColor) {
    setDefaultTextureColor(newDefaults.textureColor);
  }
}
/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */

/**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * Note: A `TexImageSource` is defined in the WebGL spec as a `HTMLImageElement`, `HTMLVideoElement`,
 * `HTMLCanvasElement`, `ImageBitmap`, or `ImageData`.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number[]|ArrayBufferView} [color] Color to initialize this texture with if loading an image asynchronously.
 *     The default use a blue 1x1 pixel texture. You can set another default by calling `twgl.setDefaults`
 *     or you can set an individual texture's initial color by setting this property. Example: `[1, .5, .5, 1]` = pink
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|TexImageSource|TexImageSource[]|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediately. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_CUBE_MAP` then it must have 6 entries, one for each face of a cube map.
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_2D_ARRAY` then each entry is a slice of the a 2d array texture
 *    and will be scaled to the specified width and height OR to the size of the first image that loads.
 *
 *    If `TexImageSource` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */

/**
 * Sets any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */


function setPackState(gl, options) {
  if (options.colorspaceConversion !== undefined) {
    gl.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
  }

  if (options.premultiplyAlpha !== undefined) {
    gl.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
  }

  if (options.flipY !== undefined) {
    gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, options.flipY);
  }
}
/**
 * Set skip state to defaults
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */


function setSkipStateToDefault(gl) {
  gl.pixelStorei(UNPACK_ALIGNMENT, 4);

  if (utils.isWebGL2(gl)) {
    gl.pixelStorei(UNPACK_ROW_LENGTH, 0);
    gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(UNPACK_SKIP_PIXELS, 0);
    gl.pixelStorei(UNPACK_SKIP_ROWS, 0);
    gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
  }
}
/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParameteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @private
 */


function setTextureSamplerParameters(gl, target, parameteriFn, options) {
  if (options.minMag) {
    parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.minMag);
    parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.minMag);
  }

  if (options.min) {
    parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.min);
  }

  if (options.mag) {
    parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.mag);
  }

  if (options.wrap) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrap);
    parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrap);

    if (target === TEXTURE_3D || helper.isSampler(gl, target)) {
      parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrap);
    }
  }

  if (options.wrapR) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrapR);
  }

  if (options.wrapS) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrapS);
  }

  if (options.wrapT) {
    parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrapT);
  }

  if (options.minLod) {
    parameteriFn.call(gl, target, TEXTURE_MIN_LOD, options.minLod);
  }

  if (options.maxLod) {
    parameteriFn.call(gl, target, TEXTURE_MAX_LOD, options.maxLod);
  }

  if (options.baseLevel) {
    parameteriFn.call(gl, target, TEXTURE_BASE_LEVEL, options.baseLevel);
  }

  if (options.maxLevel) {
    parameteriFn.call(gl, target, TEXTURE_MAX_LEVEL, options.maxLevel);
  }
}
/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureParameters(gl, tex, options) {
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}
/**
 * Sets the sampler parameters of a sampler.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setSamplerParameters(gl, sampler, options) {
  setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
}
/**
 * Creates a new sampler object and sets parameters.
 *
 * Example:
 *
 *      const sampler = twgl.createSampler(gl, {
 *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
 *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
 * @return {Object.<string,WebGLSampler>} the created samplers by name
 * @private
 */


function createSampler(gl, options) {
  var sampler = gl.createSampler();
  setSamplerParameters(gl, sampler, options);
  return sampler;
}
/**
 * Creates a multiple sampler objects and sets parameters on each.
 *
 * Example:
 *
 *      const samplers = twgl.createSamplers(gl, {
 *        nearest: {
 *          minMag: gl.NEAREST,
 *        },
 *        nearestClampS: {
 *          minMag: gl.NEAREST,
 *          wrapS: gl.CLAMP_TO_NEAREST,
 *        },
 *        linear: {
 *          minMag: gl.LINEAR,
 *        },
 *        nearestClamp: {
 *          minMag: gl.NEAREST,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClamp: {
 *          minMag: gl.LINEAR,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClampT: {
 *          minMag: gl.LINEAR,
 *          wrapT: gl.CLAMP_TO_EDGE,
 *        },
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
 * @private
 */


function createSamplers(gl, samplerOptions) {
  var samplers = {};
  Object.keys(samplerOptions).forEach(function (name) {
    samplers[name] = createSampler(gl, samplerOptions[name]);
  });
  return samplers;
}
/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 * @private
 */


function make1Pixel(color) {
  color = color || defaults.textureColor;

  if (isArrayBuffer(color)) {
    return color;
  }

  return new Uint8Array([color[0] * 255, color[1] * 255, color[2] * 255, color[3] * 255]);
}
/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @memberOf module:twgl/textures
 */


function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat) {
  options = options || defaults.textureOptions;
  internalFormat = internalFormat || RGBA;
  var target = options.target || TEXTURE_2D;
  width = width || options.width;
  height = height || options.height;
  gl.bindTexture(target, tex);

  if (canGenerateMipmap(gl, width, height, internalFormat)) {
    gl.generateMipmap(target);
  } else {
    var filtering = canFilter(internalFormat) ? LINEAR : NEAREST;
    gl.texParameteri(target, TEXTURE_MIN_FILTER, filtering);
    gl.texParameteri(target, TEXTURE_MAG_FILTER, filtering);
    gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  }
}

function shouldAutomaticallySetTextureFilteringForSize(options) {
  return options.auto === true || options.auto === undefined && options.level === undefined;
}
/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 * @private
 */


function getCubeFaceOrder(gl, options) {
  options = options || {};
  return options.cubeFaceOrder || [TEXTURE_CUBE_MAP_POSITIVE_X, TEXTURE_CUBE_MAP_NEGATIVE_X, TEXTURE_CUBE_MAP_POSITIVE_Y, TEXTURE_CUBE_MAP_NEGATIVE_Y, TEXTURE_CUBE_MAP_POSITIVE_Z, TEXTURE_CUBE_MAP_NEGATIVE_Z];
}
/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */

/**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundant but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 * @private
 */


function getCubeFacesWithNdx(gl, options) {
  var faces = getCubeFaceOrder(gl, options); // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(

  var facesWithNdx = faces.map(function (face, ndx) {
    return {
      face: face,
      ndx: ndx
    };
  });
  facesWithNdx.sort(function (a, b) {
    return a.face - b.face;
  });
  return facesWithNdx;
}
/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */


function setTextureFromElement(gl, tex, element, options) {
  options = options || defaults.textureOptions;
  var target = options.target || TEXTURE_2D;
  var level = options.level || 0;
  var width = element.width;
  var height = element.height;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  setPackState(gl, options);
  gl.bindTexture(target, tex);

  if (target === TEXTURE_CUBE_MAP) {
    // guess the parts
    var imgWidth = element.width;
    var imgHeight = element.height;
    var size;
    var slices;

    if (imgWidth / 6 === imgHeight) {
      // It's 6x1
      size = imgHeight;
      slices = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0];
    } else if (imgHeight / 6 === imgWidth) {
      // It's 1x6
      size = imgWidth;
      slices = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5];
    } else if (imgWidth / 3 === imgHeight / 2) {
      // It's 3x2
      size = imgWidth / 3;
      slices = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1];
    } else if (imgWidth / 2 === imgHeight / 3) {
      // It's 2x3
      size = imgWidth / 2;
      slices = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2];
    } else {
      throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
    }

    var ctx = getShared2DContext();

    if (ctx) {
      ctx.canvas.width = size;
      ctx.canvas.height = size;
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size;
        ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
        gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
      }); // Free up the canvas memory

      ctx.canvas.width = 1;
      ctx.canvas.height = 1;
    } else if (typeof createImageBitmap !== 'undefined') {
      // NOTE: It seems like we should prefer ImageBitmap because unlike canvas it's
      // note lossy? (alpha is not premultiplied? although I'm not sure what
      width = size;
      height = size;
      getCubeFacesWithNdx(gl, options).forEach(function (f) {
        var xOffset = slices[f.ndx * 2 + 0] * size;
        var yOffset = slices[f.ndx * 2 + 1] * size; // We can't easily use a default texture color here as it would have to match
        // the type across all faces where as with a 2D one there's only one face
        // so we're replacing everything all at once. It also has to be the correct size.
        // On the other hand we need all faces to be the same size so as one face loads
        // the rest match else the texture will be un-renderable.

        gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);
        createImageBitmap(element, xOffset, yOffset, size, size, {
          premultiplyAlpha: 'none',
          colorSpaceConversion: 'none'
        }).then(function (imageBitmap) {
          setPackState(gl, options);
          gl.bindTexture(target, tex);
          gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
          }
        });
      });
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    var smallest = Math.min(element.width, element.height);
    var largest = Math.max(element.width, element.height);
    var depth = largest / smallest;

    if (depth % 1 !== 0) {
      throw "can not compute 3D dimensions of element";
    }

    var xMult = element.width === largest ? 1 : 0;
    var yMult = element.height === largest ? 1 : 0;
    gl.pixelStorei(UNPACK_ALIGNMENT, 1);
    gl.pixelStorei(UNPACK_ROW_LENGTH, element.width);
    gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
    gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
    gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);

    for (var d = 0; d < depth; ++d) {
      var srcX = d * smallest * xMult;
      var srcY = d * smallest * yMult;
      gl.pixelStorei(UNPACK_SKIP_PIXELS, srcX);
      gl.pixelStorei(UNPACK_SKIP_ROWS, srcY);
      gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
    }

    setSkipStateToDefault(gl);
  } else {
    gl.texImage2D(target, level, internalFormat, format, type, element);
  }

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
  }

  setTextureParameters(gl, tex, options);
}

function noop() {}
/**
 * Checks whether the url's origin is the same so that we can set the `crossOrigin`
 * @param {string} url url to image
 * @returns {boolean} true if the window's origin is the same as image's url
 * @private
 */


function urlIsSameOrigin(url) {
  if (typeof document !== 'undefined') {
    // for IE really
    var a = document.createElement('a');
    a.href = url;
    return a.hostname === location.hostname && a.port === location.port && a.protocol === location.protocol;
  } else {
    var localOrigin = new URL(location.href).origin;
    var urlOrigin = new URL(url, location.href).origin;
    return urlOrigin === localOrigin;
  }
}

function setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin) {
  return crossOrigin === undefined && !urlIsSameOrigin(url) ? 'anonymous' : crossOrigin;
}
/**
 * Loads an image
 * @param {string} url url to image
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 * @private
 */


function loadImage(url, crossOrigin, callback) {
  callback = callback || noop;
  var img;
  crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults.crossOrigin;
  crossOrigin = setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin);

  if (typeof Image !== 'undefined') {
    img = new Image();

    if (crossOrigin !== undefined) {
      img.crossOrigin = crossOrigin;
    }

    var clearEventHandlers = function clearEventHandlers() {
      img.removeEventListener('error', onError); // eslint-disable-line

      img.removeEventListener('load', onLoad); // eslint-disable-line

      img = null;
    };

    var onError = function onError() {
      var msg = "couldn't load image: " + url;
      helper.error(msg);
      callback(msg, img);
      clearEventHandlers();
    };

    var onLoad = function onLoad() {
      callback(null, img);
      clearEventHandlers();
    };

    img.addEventListener('error', onError);
    img.addEventListener('load', onLoad);
    img.src = url;
    return img;
  } else if (typeof ImageBitmap !== 'undefined') {
    var err;
    var bm;

    var cb = function cb() {
      callback(err, bm);
    };

    var options = {};

    if (crossOrigin) {
      options.mode = 'cors'; // TODO: not sure how to translate image.crossOrigin
    }

    fetch(url, options).then(function (response) {
      if (!response.ok) {
        throw response;
      }

      return response.blob();
    }).then(function (blob) {
      return createImageBitmap(blob, {
        premultiplyAlpha: 'none',
        colorSpaceConversion: 'none'
      });
    }).then(function (bitmap) {
      // not sure if this works. We don't want
      // to catch the user's error. So, call
      // the callback in a timeout so we're
      // not in this scope inside the promise.
      bm = bitmap;
      setTimeout(cb);
    })["catch"](function (e) {
      err = e;
      setTimeout(cb);
    });
    img = null;
  }

  return img;
}
/**
 * check if object is a TexImageSource
 *
 * @param {Object} obj Object to test
 * @return {boolean} true if object is a TexImageSource
 * @private
 */


function isTexImageSource(obj) {
  return typeof ImageBitmap !== 'undefined' && obj instanceof ImageBitmap || typeof ImageData !== 'undefined' && obj instanceof ImageData || typeof HTMLElement !== 'undefined' && obj instanceof HTMLElement;
}
/**
 * if obj is an TexImageSource then just
 * uses it otherwise if obj is a string
 * then load it first.
 *
 * @param {string|TexImageSource} obj
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @private
 */


function loadAndUseImage(obj, crossOrigin, callback) {
  if (isTexImageSource(obj)) {
    setTimeout(function () {
      callback(null, obj);
    });
    return obj;
  }

  return loadImage(obj, crossOrigin, callback);
}
/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureTo1PixelColor(gl, tex, options) {
  options = options || defaults.textureOptions;
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);

  if (options.color === false) {
    return;
  } // Assume it's a URL
  // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.


  var color = make1Pixel(options.color);

  if (target === TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE, color);
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, 0, RGBA, 1, 1, 1, 0, RGBA, UNSIGNED_BYTE, color);
  } else {
    gl.texImage2D(target, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE, color);
  }
}
/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} source image(s) used to as the src for the texture
 * @memberOf module:twgl
 */

/**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */

/**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */

/**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as appropriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */


function loadTextureFromUrl(gl, tex, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var img = loadAndUseImage(options.src, options.crossOrigin, function (err, img) {
    if (err) {
      callback(err, tex, img);
    } else {
      setTextureFromElement(gl, tex, img, options);
      callback(null, tex, img);
    }
  });
  return img;
}
/**
 * Loads a cubemap from 6 urls or TexImageSources as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadCubemapFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;

  if (urls.length !== 6) {
    throw "there must be 6 urls for a cubemap";
  }

  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || UNSIGNED_BYTE;
  var target = options.target || TEXTURE_2D;

  if (target !== TEXTURE_CUBE_MAP) {
    throw "target must be TEXTURE_CUBE_MAP";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = 6;
  var errors = [];
  var faces = getCubeFaceOrder(gl, options);
  var imgs; // eslint-disable-line

  function uploadImg(faceTarget) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        if (img.width !== img.height) {
          errors.push("cubemap face img is not a square: " + img.src);
        } else {
          setPackState(gl, options);
          gl.bindTexture(target, tex); // So assuming this is the first image we now have one face that's img sized
          // and 5 faces that are 1x1 pixel so size the other faces

          if (numToLoad === 5) {
            // use the default order
            getCubeFaceOrder(gl).forEach(function (otherTarget) {
              // Should we re-use the same face or a color?
              gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
            });
          } else {
            gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
          }

          if (shouldAutomaticallySetTextureFilteringForSize(options)) {
            gl.generateMipmap(target);
          }
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
  });
}
/**
 * Loads a 2d array or 3d texture from urls OR TexImageSources as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 */


function loadSlicesFromUrls(gl, tex, options, callback) {
  callback = callback || noop;
  var urls = options.src;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || UNSIGNED_BYTE;
  var target = options.target || TEXTURE_2D_ARRAY;

  if (target !== TEXTURE_3D && target !== TEXTURE_2D_ARRAY) {
    throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
  }

  setTextureTo1PixelColor(gl, tex, options); // Because it's async we need to copy the options.

  options = Object.assign({}, options);
  var numToLoad = urls.length;
  var errors = [];
  var imgs; // eslint-disable-line

  var level = options.level || 0;
  var width = options.width;
  var height = options.height;
  var depth = urls.length;
  var firstImage = true;

  function uploadImg(slice) {
    return function (err, img) {
      --numToLoad;

      if (err) {
        errors.push(err);
      } else {
        setPackState(gl, options);
        gl.bindTexture(target, tex);

        if (firstImage) {
          firstImage = false;
          width = options.width || img.width;
          height = options.height || img.height;
          gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null); // put it in every slice otherwise some slices will be 0,0,0,0

          for (var s = 0; s < depth; ++s) {
            gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
          }
        } else {
          var src = img;
          var ctx;

          if (img.width !== width || img.height !== height) {
            // Size the image to fix
            ctx = getShared2DContext();
            src = ctx.canvas;
            ctx.canvas.width = width;
            ctx.canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
          }

          gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src); // free the canvas memory

          if (ctx && src === ctx.canvas) {
            ctx.canvas.width = 0;
            ctx.canvas.height = 0;
          }
        }

        if (shouldAutomaticallySetTextureFilteringForSize(options)) {
          gl.generateMipmap(target);
        }
      }

      if (numToLoad === 0) {
        callback(errors.length ? errors : undefined, tex, imgs);
      }
    };
  }

  imgs = urls.map(function (url, ndx) {
    return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
  });
}
/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */


function setTextureFromArray(gl, tex, src, options) {
  options = options || defaults.textureOptions;
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  var width = options.width;
  var height = options.height;
  var depth = options.depth;
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);

  if (!isArrayBuffer(src)) {
    var Type = typedArrays.getTypedArrayTypeForGLType(type);
    src = new Type(src);
  } else if (src instanceof Uint8ClampedArray) {
    src = new Uint8Array(src.buffer);
  }

  var bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
  var numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?

  if (numElements % 1) {
    throw "length wrong size for format: " + utils.glEnumToString(gl, format);
  }

  var dimensions;

  if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    if (!width && !height && !depth) {
      var size = Math.cbrt(numElements);

      if (size % 1 !== 0) {
        throw "can't guess cube size of array of numElements: " + numElements;
      }

      width = size;
      height = size;
      depth = size;
    } else if (width && (!height || !depth)) {
      dimensions = guessDimensions(gl, target, height, depth, numElements / width);
      height = dimensions.width;
      depth = dimensions.height;
    } else if (height && (!width || !depth)) {
      dimensions = guessDimensions(gl, target, width, depth, numElements / height);
      width = dimensions.width;
      depth = dimensions.height;
    } else {
      dimensions = guessDimensions(gl, target, width, height, numElements / depth);
      width = dimensions.width;
      height = dimensions.height;
    }
  } else {
    dimensions = guessDimensions(gl, target, width, height, numElements);
    width = dimensions.width;
    height = dimensions.height;
  }

  setSkipStateToDefault(gl);
  gl.pixelStorei(UNPACK_ALIGNMENT, options.unpackAlignment || 1);
  setPackState(gl, options);

  if (target === TEXTURE_CUBE_MAP) {
    var elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
    var faceSize = numElements / 6 * elementsPerElement;
    getCubeFacesWithNdx(gl, options).forEach(function (f) {
      var offset = faceSize * f.ndx;
      var data = src.subarray(offset, offset + faceSize);
      gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
    });
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
  }

  return {
    width: width,
    height: height,
    depth: depth,
    type: type
  };
}
/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */


function setEmptyTexture(gl, tex, options) {
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type = options.type || formatType.type;
  setPackState(gl, options);

  if (target === TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
  }
}
/**
 * Creates a texture based on the options passed in.
 *
 * Note: may reset UNPACK_ALIGNMENT, UNPACK_ROW_LENGTH, UNPACK_IMAGE_HEIGHT, UNPACK_SKIP_IMAGES
 * UNPACK_SKIP_PIXELS, and UNPACK_SKIP_ROWS
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */


function createTexture(gl, options, callback) {
  callback = callback || noop;
  options = options || defaults.textureOptions;
  var tex = gl.createTexture();
  var target = options.target || TEXTURE_2D;
  var width = options.width || 1;
  var height = options.height || 1;
  var internalFormat = options.internalFormat || RGBA;
  gl.bindTexture(target, tex);

  if (target === TEXTURE_CUBE_MAP) {
    // this should have been the default for cubemaps :(
    gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
    gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
  }

  var src = options.src;

  if (src) {
    if (typeof src === "function") {
      src = src(gl, options);
    }

    if (typeof src === "string") {
      loadTextureFromUrl(gl, tex, options, callback);
    } else if (isArrayBuffer(src) || Array.isArray(src) && (typeof src[0] === 'number' || Array.isArray(src[0]) || isArrayBuffer(src[0]))) {
      var dimensions = setTextureFromArray(gl, tex, src, options);
      width = dimensions.width;
      height = dimensions.height;
    } else if (Array.isArray(src) && (typeof src[0] === 'string' || isTexImageSource(src[0]))) {
      if (target === TEXTURE_CUBE_MAP) {
        loadCubemapFromUrls(gl, tex, options, callback);
      } else {
        loadSlicesFromUrls(gl, tex, options, callback);
      }
    } else {
      // if (isTexImageSource(src))
      setTextureFromElement(gl, tex, src, options);
      width = src.width;
      height = src.height;
    }
  } else {
    setEmptyTexture(gl, tex, options);
  }

  if (shouldAutomaticallySetTextureFilteringForSize(options)) {
    setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
  }

  setTextureParameters(gl, tex, options);
  return tex;
}
/**
 * Resizes a texture based on the options passed in.
 *
 * Note: This is not a generic resize anything function.
 * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
 * It will use `options.src` if it exists to try to determine a `type`
 * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
 * for the texture. Texture parameters will be set accordingly
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the texture to resize
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {number} [width] the new width. If not passed in will use `options.width`
 * @param {number} [height] the new height. If not passed in will use `options.height`
 * @param {number} [depth] the new depth. If not passed in will use `options.depth`
 * @memberOf module:twgl/textures
 */


function resizeTexture(gl, tex, options, width, height, depth) {
  width = width || options.width;
  height = height || options.height;
  depth = depth || options.depth;
  var target = options.target || TEXTURE_2D;
  gl.bindTexture(target, tex);
  var level = options.level || 0;
  var internalFormat = options.internalFormat || options.format || RGBA;
  var formatType = getFormatAndTypeForInternalFormat(internalFormat);
  var format = options.format || formatType.format;
  var type;
  var src = options.src;

  if (!src) {
    type = options.type || formatType.type;
  } else if (isArrayBuffer(src) || Array.isArray(src) && typeof src[0] === 'number') {
    type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
  } else {
    type = options.type || formatType.type;
  }

  if (target === TEXTURE_CUBE_MAP) {
    for (var ii = 0; ii < 6; ++ii) {
      gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
    }
  } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
  } else {
    gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
  }
}
/**
 * Check if a src is an async request.
 * if src is a string we're going to download an image
 * if src is an array of strings we're going to download cubemap images
 * @param {*} src The src from a TextureOptions
 * @returns {bool} true if src is async.
 * @private
 */


function isAsyncSrc(src) {
  return typeof src === 'string' || Array.isArray(src) && typeof src[0] === 'string';
}
/**
 * Creates a bunch of textures based on the passed in options.
 *
 * Example:
 *
 *     const textures = twgl.createTextures(gl, {
 *       // a power of 2 image
 *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
 *       // a non-power of 2 image
 *       clover: { src: "images/clover.jpg" },
 *       // From a canvas
 *       fromCanvas: { src: ctx.canvas },
 *       // A cubemap from 6 images
 *       yokohama: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: [
 *           'images/yokohama/posx.jpg',
 *           'images/yokohama/negx.jpg',
 *           'images/yokohama/posy.jpg',
 *           'images/yokohama/negy.jpg',
 *           'images/yokohama/posz.jpg',
 *           'images/yokohama/negz.jpg',
 *         ],
 *       },
 *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
 *       goldengate: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: 'images/goldengate.jpg',
 *       },
 *       // A 2x2 pixel texture from a JavaScript array
 *       checker: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         src: [
 *           255,255,255,255,
 *           192,192,192,255,
 *           192,192,192,255,
 *           255,255,255,255,
 *         ],
 *       },
 *       // a 1x2 pixel texture from a typed array.
 *       stripe: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         format: gl.LUMINANCE,
 *         src: new Uint8Array([
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *         ]),
 *         width: 1,
 *       },
 *     });
 *
 * Now
 *
 * *   `textures.hftIcon` will be a 2d texture
 * *   `textures.clover` will be a 2d texture
 * *   `textures.fromCanvas` will be a 2d texture
 * *   `textures.yohohama` will be a cubemap texture
 * *   `textures.goldengate` will be a cubemap texture
 * *   `textures.checker` will be a 2d texture
 * *   `textures.stripe` will be a 2d texture
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
 * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
 * @return {Object.<string,WebGLTexture>} the created textures by name
 * @memberOf module:twgl/textures
 */


function createTextures(gl, textureOptions, callback) {
  callback = callback || noop;
  var numDownloading = 0;
  var errors = [];
  var textures = {};
  var images = {};

  function callCallbackIfReady() {
    if (numDownloading === 0) {
      setTimeout(function () {
        callback(errors.length ? errors : undefined, textures, images);
      }, 0);
    }
  }

  Object.keys(textureOptions).forEach(function (name) {
    var options = textureOptions[name];
    var onLoadFn;

    if (isAsyncSrc(options.src)) {
      onLoadFn = function onLoadFn(err, tex, img) {
        images[name] = img;
        --numDownloading;

        if (err) {
          errors.push(err);
        }

        callCallbackIfReady();
      };

      ++numDownloading;
    }

    textures[name] = createTexture(gl, options, onLoadFn);
  }); // queue the callback if there are no images to download.
  // We do this because if your code is structured to wait for
  // images to download but then you comment out all the async
  // images your code would break.

  callCallbackIfReady();
  return textures;
}

/***/ }),

/***/ "./src/twgl-full.js":
/*!**************************!*\
  !*** ./src/twgl-full.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
var _exportNames = {
  m4: true,
  v3: true,
  primitives: true
};
exports.primitives = exports.v3 = exports.m4 = void 0;

var m4 = _interopRequireWildcard(__webpack_require__(/*! ./m4.js */ "./src/m4.js"));

exports.m4 = m4;

var v3 = _interopRequireWildcard(__webpack_require__(/*! ./v3.js */ "./src/v3.js"));

exports.v3 = v3;

var primitives = _interopRequireWildcard(__webpack_require__(/*! ./primitives.js */ "./src/primitives.js"));

exports.primitives = primitives;

var _twgl = __webpack_require__(/*! ./twgl.js */ "./src/twgl.js");

Object.keys(_twgl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _twgl[key];
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ "./src/twgl.js":
/*!*********************!*\
  !*** ./src/twgl.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
var _exportNames = {
  addExtensionsToContext: true,
  getContext: true,
  getWebGLContext: true,
  resizeCanvasToDisplaySize: true,
  setDefaults: true,
  attributes: true,
  textures: true,
  utils: true,
  draw: true,
  framebuffers: true,
  programs: true,
  typedarrays: true,
  vertexArrays: true
};
exports.addExtensionsToContext = addExtensionsToContext;
exports.getContext = getContext;
exports.getWebGLContext = getWebGLContext;
exports.resizeCanvasToDisplaySize = resizeCanvasToDisplaySize;
exports.setDefaults = setDefaults;
exports.vertexArrays = exports.typedarrays = exports.programs = exports.framebuffers = exports.draw = exports.utils = exports.textures = exports.attributes = void 0;

var attributes = _interopRequireWildcard(__webpack_require__(/*! ./attributes.js */ "./src/attributes.js"));

exports.attributes = attributes;
Object.keys(attributes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = attributes[key];
});

var textures = _interopRequireWildcard(__webpack_require__(/*! ./textures.js */ "./src/textures.js"));

exports.textures = textures;
Object.keys(textures).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = textures[key];
});

var helper = _interopRequireWildcard(__webpack_require__(/*! ./helper.js */ "./src/helper.js"));

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils.js */ "./src/utils.js"));

exports.utils = utils;
Object.keys(utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = utils[key];
});

var draw = _interopRequireWildcard(__webpack_require__(/*! ./draw.js */ "./src/draw.js"));

exports.draw = draw;
Object.keys(draw).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = draw[key];
});

var framebuffers = _interopRequireWildcard(__webpack_require__(/*! ./framebuffers.js */ "./src/framebuffers.js"));

exports.framebuffers = framebuffers;
Object.keys(framebuffers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = framebuffers[key];
});

var programs = _interopRequireWildcard(__webpack_require__(/*! ./programs.js */ "./src/programs.js"));

exports.programs = programs;
Object.keys(programs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = programs[key];
});

var typedarrays = _interopRequireWildcard(__webpack_require__(/*! ./typedarrays.js */ "./src/typedarrays.js"));

exports.typedarrays = typedarrays;
Object.keys(typedarrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = typedarrays[key];
});

var vertexArrays = _interopRequireWildcard(__webpack_require__(/*! ./vertex-arrays.js */ "./src/vertex-arrays.js"));

exports.vertexArrays = vertexArrays;
Object.keys(vertexArrays).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = vertexArrays[key];
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * The main TWGL module.
 *
 * For most use cases you shouldn't need anything outside this module.
 * Exceptions between the stuff added to twgl-full (v3, m4, primitives)
 *
 * @module twgl
 * @borrows module:twgl/attributes.setAttribInfoBufferFromArray as setAttribInfoBufferFromArray
 * @borrows module:twgl/attributes.createBufferInfoFromArrays as createBufferInfoFromArrays
 * @borrows module:twgl/attributes.createVertexArrayInfo as createVertexArrayInfo
 * @borrows module:twgl/draw.drawBufferInfo as drawBufferInfo
 * @borrows module:twgl/draw.drawObjectList as drawObjectList
 * @borrows module:twgl/framebuffers.createFramebufferInfo as createFramebufferInfo
 * @borrows module:twgl/framebuffers.resizeFramebufferInfo as resizeFramebufferInfo
 * @borrows module:twgl/framebuffers.bindFramebufferInfo as bindFramebufferInfo
 * @borrows module:twgl/programs.createProgramInfo as createProgramInfo
 * @borrows module:twgl/programs.createUniformBlockInfo as createUniformBlockInfo
 * @borrows module:twgl/programs.bindUniformBlock as bindUniformBlock
 * @borrows module:twgl/programs.setUniformBlock as setUniformBlock
 * @borrows module:twgl/programs.setBlockUniforms as setBlockUniforms
 * @borrows module:twgl/programs.setUniforms as setUniforms
 * @borrows module:twgl/programs.setBuffersAndAttributes as setBuffersAndAttributes
 * @borrows module:twgl/textures.setTextureFromArray as setTextureFromArray
 * @borrows module:twgl/textures.createTexture as createTexture
 * @borrows module:twgl/textures.resizeTexture as resizeTexture
 * @borrows module:twgl/textures.createTextures as createTextures
 */
// make sure we don't see a global gl
var gl = undefined;
/* eslint-disable-line */

var defaults = {
  addExtensionsToContext: true
};
/**
 * Various default settings for twgl.
 *
 * Note: You can call this any number of times. Example:
 *
 *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
 *     twgl.setDefaults({ attribPrefix: 'a_' });
 *
 * is equivalent to
 *
 *     twgl.setDefaults({
 *       textureColor: [1, 0, 0, 1],
 *       attribPrefix: 'a_',
 *     });
 *
 * @typedef {Object} Defaults
 * @property {string} [attribPrefix] The prefix to stick on attributes
 *
 *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 *   as it makes it clear where they came from. But, when building geometry I prefer using un-prefixed names.
 *
 *   In other words I'll create arrays of geometry like this
 *
 *       const arrays = {
 *         position: ...
 *         normal: ...
 *         texcoord: ...
 *       };
 *
 *   But need those mapped to attributes and my attributes start with `a_`.
 *
 *   Default: `""`
 *
 * @property {number[]} [textureColor] Array of 4 values in the range 0 to 1
 *
 *   The default texture color is used when loading textures from
 *   urls. Because the URL will be loaded async we'd like to be
 *   able to use the texture immediately. By putting a 1x1 pixel
 *   color in the texture we can start using the texture before
 *   the URL has loaded.
 *
 *   Default: `[0.5, 0.75, 1, 1]`
 *
 * @property {string} [crossOrigin]
 *
 *   If not undefined sets the crossOrigin attribute on images
 *   that twgl creates when downloading images for textures.
 *
 *   Also see {@link module:twgl.TextureOptions}.
 *
 * @property {bool} [addExtensionsToContext]
 *
 *   If true, then, when twgl will try to add any supported WebGL extensions
 *   directly to the context under their normal GL names. For example
 *   if ANGLE_instances_arrays exists then twgl would enable it,
 *   add the functions `vertexAttribDivisor`, `drawArraysInstanced`,
 *   `drawElementsInstanced`, and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR`
 *   to the `WebGLRenderingContext`.
 *
 * @memberOf module:twgl
 */

/**
 * Sets various defaults for twgl.
 *
 * In the interest of terseness which is kind of the point
 * of twgl I've integrated a few of the older functions here
 *
 * @param {module:twgl.Defaults} newDefaults The default settings.
 * @memberOf module:twgl
 */

function setDefaults(newDefaults) {
  helper.copyExistingProperties(newDefaults, defaults);
  attributes.setAttributeDefaults_(newDefaults); // eslint-disable-line

  textures.setTextureDefaults_(newDefaults); // eslint-disable-line
}

var prefixRE = /^(.*?)_/;

function addExtensionToContext(gl, extensionName) {
  utils.glEnumToString(gl, 0);
  var ext = gl.getExtension(extensionName);

  if (ext) {
    var enums = {};
    var fnSuffix = prefixRE.exec(extensionName)[1];
    var enumSuffix = '_' + fnSuffix;

    for (var key in ext) {
      var value = ext[key];
      var isFunc = typeof value === 'function';
      var suffix = isFunc ? fnSuffix : enumSuffix;
      var name = key; // examples of where this is not true are WEBGL_compressed_texture_s3tc
      // and WEBGL_compressed_texture_pvrtc

      if (key.endsWith(suffix)) {
        name = key.substring(0, key.length - suffix.length);
      }

      if (gl[name] !== undefined) {
        if (!isFunc && gl[name] !== value) {
          helper.warn(name, gl[name], value, key);
        }
      } else {
        if (isFunc) {
          gl[name] = function (origFn) {
            return function () {
              return origFn.apply(ext, arguments);
            };
          }(value);
        } else {
          gl[name] = value;
          enums[name] = value;
        }
      }
    } // pass the modified enums to glEnumToString


    enums.constructor = {
      name: ext.constructor.name
    };
    utils.glEnumToString(enums, 0);
  }

  return ext;
}
/*
 * If you're wondering why the code doesn't just iterate
 * over all extensions using `gl.getExtensions` is that it's possible
 * some future extension is incompatible with this code. Rather than
 * have thing suddenly break it seems better to manually add to this
 * list.
 *
 */


var supportedExtensions = ['ANGLE_instanced_arrays', 'EXT_blend_minmax', 'EXT_color_buffer_float', 'EXT_color_buffer_half_float', 'EXT_disjoint_timer_query', 'EXT_disjoint_timer_query_webgl2', 'EXT_frag_depth', 'EXT_sRGB', 'EXT_shader_texture_lod', 'EXT_texture_filter_anisotropic', 'OES_element_index_uint', 'OES_standard_derivatives', 'OES_texture_float', 'OES_texture_float_linear', 'OES_texture_half_float', 'OES_texture_half_float_linear', 'OES_vertex_array_object', 'WEBGL_color_buffer_float', 'WEBGL_compressed_texture_atc', 'WEBGL_compressed_texture_etc1', 'WEBGL_compressed_texture_pvrtc', 'WEBGL_compressed_texture_s3tc', 'WEBGL_compressed_texture_s3tc_srgb', 'WEBGL_depth_texture', 'WEBGL_draw_buffers'];
/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existence of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */

function addExtensionsToContext(gl) {
  for (var ii = 0; ii < supportedExtensions.length; ++ii) {
    addExtensionToContext(gl, supportedExtensions[ii]);
  }
}
/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 * @private
 */


function create3DContext(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */


function getWebGLContext(canvas, opt_attribs) {
  var gl = create3DContext(canvas, opt_attribs);
  return gl;
}
/**
 * Creates a webgl context.
 *
 * Will return a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *     twgl.isWebGL2(gl);
 *
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */


function createContext(canvas, opt_attribs) {
  var names = ["webgl2", "webgl", "experimental-webgl"];
  var context = null;

  for (var ii = 0; ii < names.length; ++ii) {
    context = canvas.getContext(names[ii], opt_attribs);

    if (context) {
      if (defaults.addExtensionsToContext) {
        addExtensionsToContext(context);
      }

      break;
    }
  }

  return context;
}
/**
 * Gets a WebGL context.  Will create a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *    function isWebGL2(gl) {
 *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
 *    }
 *
 * Note: For a WebGL1 context will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */


function getContext(canvas, opt_attribs) {
  var gl = createContext(canvas, opt_attribs);
  return gl;
}
/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */


function resizeCanvasToDisplaySize(canvas, multiplier) {
  multiplier = multiplier || 1;
  multiplier = Math.max(0, multiplier);
  var width = canvas.clientWidth * multiplier | 0;
  var height = canvas.clientHeight * multiplier | 0;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
}

/***/ }),

/***/ "./src/typedarrays.js":
/*!****************************!*\
  !*** ./src/typedarrays.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getGLTypeForTypedArray = getGLTypeForTypedArray;
exports.getGLTypeForTypedArrayType = getGLTypeForTypedArrayType;
exports.getTypedArrayTypeForGLType = getTypedArrayTypeForGLType;
exports.isArrayBuffer = void 0;

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Low level shader typed array related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.typedArray` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/typedArray
 */
// make sure we don't see a global gl
var gl = undefined;
/* eslint-disable-line */

/* DataType */

var BYTE = 0x1400;
var UNSIGNED_BYTE = 0x1401;
var SHORT = 0x1402;
var UNSIGNED_SHORT = 0x1403;
var INT = 0x1404;
var UNSIGNED_INT = 0x1405;
var FLOAT = 0x1406;
var UNSIGNED_SHORT_4_4_4_4 = 0x8033;
var UNSIGNED_SHORT_5_5_5_1 = 0x8034;
var UNSIGNED_SHORT_5_6_5 = 0x8363;
var HALF_FLOAT = 0x140B;
var UNSIGNED_INT_2_10_10_10_REV = 0x8368;
var UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
var UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
var FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
var UNSIGNED_INT_24_8 = 0x84FA;
var glTypeToTypedArray = {};
{
  var tt = glTypeToTypedArray;
  tt[BYTE] = Int8Array;
  tt[UNSIGNED_BYTE] = Uint8Array;
  tt[SHORT] = Int16Array;
  tt[UNSIGNED_SHORT] = Uint16Array;
  tt[INT] = Int32Array;
  tt[UNSIGNED_INT] = Uint32Array;
  tt[FLOAT] = Float32Array;
  tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
  tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
  tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
  tt[HALF_FLOAT] = Uint16Array;
  tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
  tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
  tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
  tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
  tt[UNSIGNED_INT_24_8] = Uint32Array;
}
/**
 * Get the GL type for a typedArray
 * @param {ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */

function getGLTypeForTypedArray(typedArray) {
  if (typedArray instanceof Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArray instanceof Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArray instanceof Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArray instanceof Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArray instanceof Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw new Error('unsupported typed array type');
}
/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferView} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */


function getGLTypeForTypedArrayType(typedArrayType) {
  if (typedArrayType === Int8Array) {
    return BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8Array) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Uint8ClampedArray) {
    return UNSIGNED_BYTE;
  } // eslint-disable-line


  if (typedArrayType === Int16Array) {
    return SHORT;
  } // eslint-disable-line


  if (typedArrayType === Uint16Array) {
    return UNSIGNED_SHORT;
  } // eslint-disable-line


  if (typedArrayType === Int32Array) {
    return INT;
  } // eslint-disable-line


  if (typedArrayType === Uint32Array) {
    return UNSIGNED_INT;
  } // eslint-disable-line


  if (typedArrayType === Float32Array) {
    return FLOAT;
  } // eslint-disable-line


  throw new Error('unsupported typed array type');
}
/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */


function getTypedArrayTypeForGLType(type) {
  var CTOR = glTypeToTypedArray[type];

  if (!CTOR) {
    throw new Error('unknown gl type');
  }

  return CTOR;
}

var isArrayBuffer = typeof SharedArrayBuffer !== 'undefined' ? function isArrayBufferOrSharedArrayBuffer(a) {
  return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
} : function isArrayBuffer(a) {
  return a && a.buffer && a.buffer instanceof ArrayBuffer;
};
exports.isArrayBuffer = isArrayBuffer;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isWebGL1 = isWebGL1;
exports.isWebGL2 = isWebGL2;
exports.glEnumToString = void 0;

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 * @private
 */
//function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}

/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */
function isWebGL2(gl) {
  // This is the correct check but it's slow
  //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGL2RenderingContext;
  return !!gl.texStorage2D;
}
/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */


function isWebGL1(gl) {
  // This is the correct check but it's slow
  // const version = getVersionAsNumber(gl);
  // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
  // This might also be the correct check but I'm assuming it's slow-ish
  // return gl instanceof WebGLRenderingContext;
  return !gl.texStorage2D;
}
/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc');
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @return {string} enum string or hex value
 * @memberOf module:twgl
 * @function glEnumToString
 */


var glEnumToString = function () {
  var haveEnumsForType = {};
  var enums = {};

  function addEnums(gl) {
    var type = gl.constructor.name;

    if (!haveEnumsForType[type]) {
      for (var key in gl) {
        if (typeof gl[key] === 'number') {
          var existing = enums[gl[key]];
          enums[gl[key]] = existing ? "".concat(existing, " | ").concat(key) : key;
        }
      }

      haveEnumsForType[type] = true;
    }
  }

  return function glEnumToString(gl, value) {
    addEnums(gl);
    return enums[value] || (typeof value === 'number' ? "0x".concat(value.toString(16)) : value);
  };
}();

exports.glEnumToString = glEnumToString;

/***/ }),

/***/ "./src/v3.js":
/*!*******************!*\
  !*** ./src/v3.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.add = add;
exports.copy = copy;
exports.create = create;
exports.cross = cross;
exports.distance = distance;
exports.distanceSq = distanceSq;
exports.divide = divide;
exports.divScalar = divScalar;
exports.dot = dot;
exports.lerp = lerp;
exports.lerpV = lerpV;
exports.length = length;
exports.lengthSq = lengthSq;
exports.max = max;
exports.min = min;
exports.mulScalar = mulScalar;
exports.multiply = multiply;
exports.negate = negate;
exports.normalize = normalize;
exports.setDefaultType = setDefaultType;
exports.subtract = subtract;

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */
var VecType = Float32Array;
/**
 * A JavaScript array with 3 values or a Float32Array with 3 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/v3.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Vec3
 * @memberOf module:twgl/v3
 */

/**
 * Sets the type this library creates for a Vec3
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Vec3
 * @memberOf module:twgl/v3
 */

function setDefaultType(ctor) {
  var oldType = VecType;
  VecType = ctor;
  return oldType;
}
/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @param {number} [x] Initial x value.
 * @param {number} [y] Initial y value.
 * @param {number} [z] Initial z value.
 * @return {module:twgl/v3.Vec3} the created vector
 * @memberOf module:twgl/v3
 */


function create(x, y, z) {
  var dst = new VecType(3);

  if (x) {
    dst[0] = x;
  }

  if (y) {
    dst[1] = y;
  }

  if (z) {
    dst[2] = z;
  }

  return dst;
}
/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector tha tis the sum of a and b.
 * @memberOf module:twgl/v3
 */


function add(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];
  dst[2] = a[2] + b[2];
  return dst;
}
/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector that is the difference of a and b.
 * @memberOf module:twgl/v3
 */


function subtract(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];
  dst[2] = a[2] - b[2];
  return dst;
}
/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * a + t * (b - a).
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {number} t Interpolation coefficient.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The linear interpolated result.
 * @memberOf module:twgl/v3
 */


function lerp(a, b, t, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] + t * (b[0] - a[0]);
  dst[1] = a[1] + t * (b[1] - a[1]);
  dst[2] = a[2] + t * (b[2] - a[2]);
  return dst;
}
/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient vector t, returns
 * a + t * (b - a).
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} t Interpolation coefficients vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} the linear interpolated result.
 * @memberOf module:twgl/v3
 */


function lerpV(a, b, t, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] + t[0] * (b[0] - a[0]);
  dst[1] = a[1] + t[1] * (b[1] - a[1]);
  dst[2] = a[2] + t[2] * (b[2] - a[2]);
  return dst;
}
/**
 * Return max values of two vectors.
 * Given vectors a and b returns
 * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The max components vector.
 * @memberOf module:twgl/v3
 */


function max(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = Math.max(a[0], b[0]);
  dst[1] = Math.max(a[1], b[1]);
  dst[2] = Math.max(a[2], b[2]);
  return dst;
}
/**
 * Return min values of two vectors.
 * Given vectors a and b returns
 * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The min components vector.
 * @memberOf module:twgl/v3
 */


function min(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = Math.min(a[0], b[0]);
  dst[1] = Math.min(a[1], b[1]);
  dst[2] = Math.min(a[2], b[2]);
  return dst;
}
/**
 * Multiplies a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The scaled vector.
 * @memberOf module:twgl/v3
 */


function mulScalar(v, k, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0] * k;
  dst[1] = v[1] * k;
  dst[2] = v[2] * k;
  return dst;
}
/**
 * Divides a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The scaled vector.
 * @memberOf module:twgl/v3
 */


function divScalar(v, k, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0] / k;
  dst[1] = v[1] / k;
  dst[2] = v[2] / k;
  return dst;
}
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of a cross b.
 * @memberOf module:twgl/v3
 */


function cross(a, b, dst) {
  dst = dst || new VecType(3);
  var t1 = a[2] * b[0] - a[0] * b[2];
  var t2 = a[0] * b[1] - a[1] * b[0];
  dst[0] = a[1] * b[2] - a[2] * b[1];
  dst[1] = t1;
  dst[2] = t2;
  return dst;
}
/**
 * Computes the dot product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @return {number} dot product
 * @memberOf module:twgl/v3
 */


function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} length of vector.
 * @memberOf module:twgl/v3
 */


function length(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}
/**
 * Computes the square of the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} square of the length of vector.
 * @memberOf module:twgl/v3
 */


function lengthSq(v) {
  return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}
/**
 * Computes the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} distance between a and b
 * @memberOf module:twgl/v3
 */


function distance(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
/**
 * Computes the square of the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} square of the distance between a and b
 * @memberOf module:twgl/v3
 */


function distanceSq(a, b) {
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  var dz = a[2] - b[2];
  return dx * dx + dy * dy + dz * dz;
}
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */


function normalize(a, dst) {
  dst = dst || new VecType(3);
  var lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
  var len = Math.sqrt(lenSq);

  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
    dst[2] = a[2] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
    dst[2] = 0;
  }

  return dst;
}
/**
 * Negates a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} -v.
 * @memberOf module:twgl/v3
 */


function negate(v, dst) {
  dst = dst || new VecType(3);
  dst[0] = -v[0];
  dst[1] = -v[1];
  dst[2] = -v[2];
  return dst;
}
/**
 * Copies a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A copy of v.
 * @memberOf module:twgl/v3
 */


function copy(v, dst) {
  dst = dst || new VecType(3);
  dst[0] = v[0];
  dst[1] = v[1];
  dst[2] = v[2];
  return dst;
}
/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function multiply(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];
  dst[2] = a[2] * b[2];
  return dst;
}
/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */


function divide(a, b, dst) {
  dst = dst || new VecType(3);
  dst[0] = a[0] / b[0];
  dst[1] = a[1] / b[1];
  dst[2] = a[2] / b[2];
  return dst;
}

/***/ }),

/***/ "./src/vertex-arrays.js":
/*!******************************!*\
  !*** ./src/vertex-arrays.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports.createVertexArrayInfo = createVertexArrayInfo;
exports.createVAOAndSetAttributes = createVAOAndSetAttributes;
exports.createVAOFromBufferInfo = createVAOFromBufferInfo;

var programs = _interopRequireWildcard(__webpack_require__(/*! ./programs.js */ "./src/programs.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */

/**
 * vertex array object related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/vertexArrays
 */
var ELEMENT_ARRAY_BUFFER = 0x8893;
/**
 * @typedef {Object} VertexArrayInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
 * @memberOf module:twgl
 */

/**
 * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
 *   assign buffers to specific attributes at creation time. That means they can only be used with programs
 *   who's attributes use the same attribute locations for the same purposes.
 *
 * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
 *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
 *
 * also
 *
 * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
 *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
 *   will affect the Vertex Array Object state.
 *
 * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 *
 *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
 *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
 *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
 *    now attribute D's location.
 *
 *    So, you can pass in both shader 1 and shader 2's programInfo
 *
 * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
 *
 * @memberOf module:twgl/vertexArrays
 */

function createVertexArrayInfo(gl, programInfos, bufferInfo) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  if (!programInfos.length) {
    programInfos = [programInfos];
  }

  programInfos.forEach(function (programInfo) {
    programs.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  });
  gl.bindVertexArray(null);
  return {
    numElements: bufferInfo.numElements,
    elementType: bufferInfo.elementType,
    vertexArrayObject: vao
  };
}
/**
 * Creates a vertex array object and then sets the attributes on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */


function createVAOAndSetAttributes(gl, setters, attribs, indices) {
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  programs.setAttributes(setters, attribs);

  if (indices) {
    gl.bindBuffer(ELEMENT_ARRAY_BUFFER, indices);
  } // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
  // like when creating buffers for other stuff will mess up this VAO's binding


  gl.bindVertexArray(null);
  return vao;
}
/**
 * Creates a vertex array object and then sets the attributes
 * on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 * @memberOf module:twgl/vertexArrays
 */


function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
  return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
}

/***/ })

/******/ });
});

},{}],3:[function(require,module,exports){
"use strict";

var glsl = require("glslify");

var twgl = require("twgl.js");

var vertexShader = glsl(["#define GLSLIFY 1\nattribute vec4 position;\nvoid main() {\n    gl_Position = position;\n}"]);
var fragmentShader = glsl(["precision mediump float;\n#define GLSLIFY 1\n \nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n \n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvec3 tint_0(vec3 thingToColor, vec3 tint) {\n    return thingToColor + tint;\n}\n\n \nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution; // get the screen space\n      \n    vec3 pos = vec3(st.xy, u_time); // travel along the Z-dimension in time.\n    vec3 rgb = vec3(0.1, cos(u_time), 0.5); // cycle the green color\n    vec3 noise = vec3(snoise(pos),snoise(pos),snoise(pos)); // generate the noise\n \n    gl_FragColor = vec4(tint_0(noise, rgb), 1.0); // tint the noise with our function and draw the pixel\n}"]);
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var mouse = [0, 0];
document.addEventListener("mousemove", function (e) {
  mouse[0] = e.pageX;
  mouse[1] = e.pageY;
});
var programInfo = twgl.createProgramInfo(gl, [vertexShader, fragmentShader]);
var arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  var uniforms = {
    u_time: time * 0.001,
    u_resolution: [gl.canvas.width, gl.canvas.height],
    u_mouse: mouse
  };
  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);
  requestAnimationFrame(render);
}

requestAnimationFrame(render);

},{"glslify":1,"twgl.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3R3Z2wuanMvZGlzdC80LngvdHdnbC1mdWxsLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2wyVUE7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBRUEsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsNEZBQUQsQ0FBRCxDQUF6QjtBQUNBLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLDhnSEFBRCxDQUFELENBQTNCO0FBRUEsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE9BQWxCLENBQVg7QUFFQSxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQ7QUFFQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQSxDQUFDLEVBQUk7QUFDeEMsRUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBQyxDQUFDLEtBQWI7QUFDQSxFQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFDLENBQUMsS0FBYjtBQUNILENBSEQ7QUFLQSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQUwsQ0FBdUIsRUFBdkIsRUFBMkIsQ0FBQyxZQUFELEVBQWUsY0FBZixDQUEzQixDQUFwQjtBQUVBLElBQU0sTUFBTSxHQUFHO0FBQ1gsRUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLEVBQTZDLENBQUMsQ0FBOUMsRUFBaUQsQ0FBakQsRUFBb0QsQ0FBcEQsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQ7QUFEQyxDQUFmO0FBR0EsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLDBCQUFMLENBQWdDLEVBQWhDLEVBQW9DLE1BQXBDLENBQW5COztBQUVBLFNBQVMsTUFBVCxDQUFnQixJQUFoQixFQUFzQjtBQUNsQixFQUFBLElBQUksQ0FBQyx5QkFBTCxDQUErQixFQUFFLENBQUMsTUFBbEM7QUFDQSxFQUFBLEVBQUUsQ0FBQyxRQUFILENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUE1QixFQUFtQyxFQUFFLENBQUMsTUFBSCxDQUFVLE1BQTdDO0FBRUEsTUFBTSxRQUFRLEdBQUc7QUFDYixJQUFBLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FERjtBQUViLElBQUEsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUFYLEVBQWtCLEVBQUUsQ0FBQyxNQUFILENBQVUsTUFBNUIsQ0FGRDtBQUdiLElBQUEsT0FBTyxFQUFFO0FBSEksR0FBakI7QUFNQSxFQUFBLEVBQUUsQ0FBQyxVQUFILENBQWMsV0FBVyxDQUFDLE9BQTFCO0FBQ0EsRUFBQSxJQUFJLENBQUMsdUJBQUwsQ0FBNkIsRUFBN0IsRUFBaUMsV0FBakMsRUFBOEMsVUFBOUM7QUFDQSxFQUFBLElBQUksQ0FBQyxXQUFMLENBQWlCLFdBQWpCLEVBQThCLFFBQTlCO0FBQ0EsRUFBQSxJQUFJLENBQUMsY0FBTCxDQUFvQixFQUFwQixFQUF3QixVQUF4QjtBQUVBLEVBQUEscUJBQXFCLENBQUMsTUFBRCxDQUFyQjtBQUNIOztBQUNELHFCQUFxQixDQUFDLE1BQUQsQ0FBckIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZ3MpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnc3RyaW5nJykgc3RyaW5ncyA9IFtzdHJpbmdzXVxuICB2YXIgZXhwcnMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKVxuICB2YXIgcGFydHMgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ3MubGVuZ3RoLTE7IGkrKykge1xuICAgIHBhcnRzLnB1c2goc3RyaW5nc1tpXSwgZXhwcnNbaV0gfHwgJycpXG4gIH1cbiAgcGFydHMucHVzaChzdHJpbmdzW2ldKVxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsIi8qIVxuICogQGxpY2Vuc2UgdHdnbC5qcyA0LjE5LjEgQ29weXJpZ2h0IChjKSAyMDE1LCBHcmVnZyBUYXZhcmVzIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBBdmFpbGFibGUgdmlhIHRoZSBNSVQgbGljZW5zZS5cbiAqIHNlZTogaHR0cDovL2dpdGh1Yi5jb20vZ3JlZ2dtYW4vdHdnbC5qcyBmb3IgZGV0YWlsc1xuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0d2dsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInR3Z2xcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3R3Z2wtZnVsbC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9hdHRyaWJ1dGVzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYXR0cmlidXRlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlQXR0cmlic0Zyb21BcnJheXMgPSBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cztcbmV4cG9ydHMuY3JlYXRlQnVmZmVyc0Zyb21BcnJheXMgPSBjcmVhdGVCdWZmZXJzRnJvbUFycmF5cztcbmV4cG9ydHMuY3JlYXRlQnVmZmVyRnJvbUFycmF5ID0gY3JlYXRlQnVmZmVyRnJvbUFycmF5O1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheSA9IGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5O1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyA9IGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzO1xuZXhwb3J0cy5zZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5ID0gc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheTtcbmV4cG9ydHMuc2V0QXR0cmlidXRlUHJlZml4ID0gc2V0QXR0cmlidXRlUHJlZml4O1xuZXhwb3J0cy5zZXRBdHRyaWJ1dGVEZWZhdWx0c18gPSBzZXREZWZhdWx0cztcbmV4cG9ydHMuZ2V0TnVtQ29tcG9uZW50c18gPSBnZXROdW1Db21wb25lbnRzO1xuZXhwb3J0cy5nZXRBcnJheV8gPSBnZXRBcnJheTtcblxudmFyIHR5cGVkQXJyYXlzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90eXBlZGFycmF5cy5qcyAqLyBcIi4vc3JjL3R5cGVkYXJyYXlzLmpzXCIpKTtcblxudmFyIGhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVyLmpzICovIFwiLi9zcmMvaGVscGVyLmpzXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIFNUQVRJQ19EUkFXID0gMHg4OGU0O1xudmFyIEFSUkFZX0JVRkZFUiA9IDB4ODg5MjtcbnZhciBFTEVNRU5UX0FSUkFZX0JVRkZFUiA9IDB4ODg5MztcbnZhciBCVUZGRVJfU0laRSA9IDB4ODc2NDtcbnZhciBCWVRFID0gMHgxNDAwO1xudmFyIFVOU0lHTkVEX0JZVEUgPSAweDE0MDE7XG52YXIgU0hPUlQgPSAweDE0MDI7XG52YXIgVU5TSUdORURfU0hPUlQgPSAweDE0MDM7XG52YXIgSU5UID0gMHgxNDA0O1xudmFyIFVOU0lHTkVEX0lOVCA9IDB4MTQwNTtcbnZhciBGTE9BVCA9IDB4MTQwNjtcbi8qKlxuICogTG93IGxldmVsIGF0dHJpYnV0ZSBhbmQgYnVmZmVyIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogWW91IHNob3VsZCBnZW5lcmFsbHkgbm90IG5lZWQgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucy4gVGhleSBhcmUgcHJvdmlkZWRcbiAqIGZvciB0aG9zZSBjYXNlcyB3aGVyZSB5b3UncmUgZG9pbmcgc29tZXRoaW5nIG91dCBvZiB0aGUgb3JkaW5hcnlcbiAqIGFuZCB5b3UgbmVlZCBsb3dlciBsZXZlbCBhY2Nlc3MuXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgdGhleSBhcmUgYXZhaWxhYmxlIGF0IGJvdGggYHR3Z2wuYXR0cmlidXRlc2AgYW5kIGB0d2dsYFxuICogaXRzZWxmXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6dHdnbH0gZm9yIGNvcmUgZnVuY3Rpb25zXG4gKlxuICogQG1vZHVsZSB0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxuXG52YXIgZ2wgPSB1bmRlZmluZWQ7XG4vKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYXR0cmliUHJlZml4OiBcIlwiXG59O1xuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IGF0dHJpYiBwcmVmaXhcbiAqXG4gKiBXaGVuIHdyaXRpbmcgc2hhZGVycyBJIHByZWZlciB0byBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgYV9gLCB1bmlmb3JtcyB3aXRoIGB1X2AgYW5kIHZhcnlpbmdzIHdpdGggYHZfYFxuICogYXMgaXQgbWFrZXMgaXQgY2xlYXIgd2hlcmUgdGhleSBjYW1lIGZyb20uIEJ1dCwgd2hlbiBidWlsZGluZyBnZW9tZXRyeSBJIHByZWZlciB1c2luZyB1bi1wcmVmaXhlZCBuYW1lcy5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcyBJJ2xsIGNyZWF0ZSBhcnJheXMgb2YgZ2VvbWV0cnkgbGlrZSB0aGlzXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICBwb3NpdGlvbjogLi4uXG4gKiAgICAgICBub3JtYWw6IC4uLlxuICogICAgICAgdGV4Y29vcmQ6IC4uLlxuICogICAgIH07XG4gKlxuICogQnV0IG5lZWQgdGhvc2UgbWFwcGVkIHRvIGF0dHJpYnV0ZXMgYW5kIG15IGF0dHJpYnV0ZXMgc3RhcnQgd2l0aCBgYV9gLlxuICpcbiAqIEBkZXByZWNhdGVkIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0RGVmYXVsdHN9XG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHByZWZpeCBmb3IgYXR0cmlic1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVQcmVmaXgocHJlZml4KSB7XG4gIGRlZmF1bHRzLmF0dHJpYlByZWZpeCA9IHByZWZpeDtcbn1cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgaGVscGVyLmNvcHlFeGlzdGluZ1Byb3BlcnRpZXMobmV3RGVmYXVsdHMsIGRlZmF1bHRzKTtcbn1cblxuZnVuY3Rpb24gc2V0QnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGUsIGJ1ZmZlciwgYXJyYXksIGRyYXdUeXBlKSB7XG4gIGdsLmJpbmRCdWZmZXIodHlwZSwgYnVmZmVyKTtcbiAgZ2wuYnVmZmVyRGF0YSh0eXBlLCBhcnJheSwgZHJhd1R5cGUgfHwgU1RBVElDX0RSQVcpO1xufVxuLyoqXG4gKiBHaXZlbiB0eXBlZCBhcnJheSBjcmVhdGVzIGEgV2ViR0xCdWZmZXIgYW5kIGNvcGllcyB0aGUgdHlwZWQgYXJyYXlcbiAqIGludG8gaXQuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfFNoYXJlZEFycmF5QnVmZmVyfEFycmF5QnVmZmVyVmlld3xXZWJHTEJ1ZmZlcn0gdHlwZWRBcnJheSB0aGUgdHlwZWQgYXJyYXkuIE5vdGU6IElmIGEgV2ViR0xCdWZmZXIgaXMgcGFzc2VkIGluIGl0IHdpbGwganVzdCBiZSByZXR1cm5lZC4gTm8gYWN0aW9uIHdpbGwgYmUgdGFrZW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdHlwZV0gdGhlIEdMIGJpbmQgdHlwZSBmb3IgdGhlIGJ1ZmZlci4gRGVmYXVsdCA9IGBnbC5BUlJBWV9CVUZGRVJgLlxuICogQHBhcmFtIHtudW1iZXJ9IFtkcmF3VHlwZV0gdGhlIEdMIGRyYXcgdHlwZSBmb3IgdGhlIGJ1ZmZlci4gRGVmYXVsdCA9ICdnbC5TVEFUSUNfRFJBV2AuXG4gKiBAcmV0dXJuIHtXZWJHTEJ1ZmZlcn0gdGhlIGNyZWF0ZWQgV2ViR0xCdWZmZXJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdHlwZSwgZHJhd1R5cGUpIHtcbiAgaWYgKGhlbHBlci5pc0J1ZmZlcihnbCwgdHlwZWRBcnJheSkpIHtcbiAgICByZXR1cm4gdHlwZWRBcnJheTtcbiAgfVxuXG4gIHR5cGUgPSB0eXBlIHx8IEFSUkFZX0JVRkZFUjtcbiAgdmFyIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICBzZXRCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZSwgYnVmZmVyLCB0eXBlZEFycmF5LCBkcmF3VHlwZSk7XG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGlzSW5kaWNlcyhuYW1lKSB7XG4gIHJldHVybiBuYW1lID09PSBcImluZGljZXNcIjtcbn0gLy8gVGhpcyBpcyByZWFsbHkganVzdCBhIGd1ZXNzLiBUaG91Z2ggSSBjYW4ndCByZWFsbHkgaW1hZ2luZSB1c2luZ1xuLy8gYW55dGhpbmcgZWxzZT8gTWF5YmUgZm9yIHNvbWUgY29tcHJlc3Npb24/XG5cblxuZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXkodHlwZWRBcnJheSkge1xuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gVGhpcyBpcyByZWFsbHkganVzdCBhIGd1ZXNzLiBUaG91Z2ggSSBjYW4ndCByZWFsbHkgaW1hZ2luZSB1c2luZ1xuLy8gYW55dGhpbmcgZWxzZT8gTWF5YmUgZm9yIHNvbWUgY29tcHJlc3Npb24/XG5cblxuZnVuY3Rpb24gZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXlUeXBlKHR5cGVkQXJyYXlUeXBlKSB7XG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheShhcnJheSkge1xuICByZXR1cm4gYXJyYXkubGVuZ3RoID8gYXJyYXkgOiBhcnJheS5kYXRhO1xufVxuXG52YXIgdGV4Y29vcmRSRSA9IC9jb29yZHx0ZXh0dXJlL2k7XG52YXIgY29sb3JSRSA9IC9jb2xvcnxjb2xvdXIvaTtcblxuZnVuY3Rpb24gZ3Vlc3NOdW1Db21wb25lbnRzRnJvbU5hbWUobmFtZSwgbGVuZ3RoKSB7XG4gIHZhciBudW1Db21wb25lbnRzO1xuXG4gIGlmICh0ZXhjb29yZFJFLnRlc3QobmFtZSkpIHtcbiAgICBudW1Db21wb25lbnRzID0gMjtcbiAgfSBlbHNlIGlmIChjb2xvclJFLnRlc3QobmFtZSkpIHtcbiAgICBudW1Db21wb25lbnRzID0gNDtcbiAgfSBlbHNlIHtcbiAgICBudW1Db21wb25lbnRzID0gMzsgLy8gcG9zaXRpb24sIG5vcm1hbHMsIGluZGljZXMgLi4uXG4gIH1cblxuICBpZiAobGVuZ3RoICUgbnVtQ29tcG9uZW50cyA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGd1ZXNzIG51bUNvbXBvbmVudHMgZm9yIGF0dHJpYnV0ZSAnXCIuY29uY2F0KG5hbWUsIFwiJy4gVHJpZWQgXCIpLmNvbmNhdChudW1Db21wb25lbnRzLCBcIiBidXQgXCIpLmNvbmNhdChsZW5ndGgsIFwiIHZhbHVlcyBpcyBub3QgZXZlbmx5IGRpdmlzaWJsZSBieSBcIikuY29uY2F0KG51bUNvbXBvbmVudHMsIFwiLiBZb3Ugc2hvdWxkIHNwZWNpZnkgaXQuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBudW1Db21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXROdW1Db21wb25lbnRzKGFycmF5LCBhcnJheU5hbWUpIHtcbiAgcmV0dXJuIGFycmF5Lm51bUNvbXBvbmVudHMgfHwgYXJyYXkuc2l6ZSB8fCBndWVzc051bUNvbXBvbmVudHNGcm9tTmFtZShhcnJheU5hbWUsIGdldEFycmF5KGFycmF5KS5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBtYWtlVHlwZWRBcnJheShhcnJheSwgbmFtZSkge1xuICBpZiAodHlwZWRBcnJheXMuaXNBcnJheUJ1ZmZlcihhcnJheSkpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBpZiAodHlwZWRBcnJheXMuaXNBcnJheUJ1ZmZlcihhcnJheS5kYXRhKSkge1xuICAgIHJldHVybiBhcnJheS5kYXRhO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG4gICAgYXJyYXkgPSB7XG4gICAgICBkYXRhOiBhcnJheVxuICAgIH07XG4gIH1cblxuICB2YXIgVHlwZSA9IGFycmF5LnR5cGU7XG5cbiAgaWYgKCFUeXBlKSB7XG4gICAgaWYgKGlzSW5kaWNlcyhuYW1lKSkge1xuICAgICAgVHlwZSA9IFVpbnQxNkFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBUeXBlID0gRmxvYXQzMkFycmF5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgVHlwZShhcnJheS5kYXRhKTtcbn1cbi8qKlxuICogVGhlIGluZm8gZm9yIGFuIGF0dHJpYnV0ZS4gVGhpcyBpcyBlZmZlY3RpdmVseSBqdXN0IHRoZSBhcmd1bWVudHMgdG8gYGdsLnZlcnRleEF0dHJpYlBvaW50ZXJgIHBsdXMgdGhlIFdlYkdMQnVmZmVyXG4gKiBmb3IgdGhlIGF0dHJpYnV0ZS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBdHRyaWJJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcltdfEFycmF5QnVmZmVyVmlld30gW3ZhbHVlXSBhIGNvbnN0YW50IHZhbHVlIGZvciB0aGUgYXR0cmlidXRlLiBOb3RlOiBpZiB0aGlzIGlzIHNldCB0aGUgYXR0cmlidXRlIHdpbGwgYmVcbiAqICAgIGRpc2FibGVkIGFuZCBzZXQgdG8gdGhpcyBjb25zdGFudCB2YWx1ZSBhbmQgYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW251bUNvbXBvbmVudHNdIHRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBmb3IgdGhpcyBhdHRyaWJ1dGUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3NpemVdIHN5bm9ueW0gZm9yIGBudW1Db21wb25lbnRzYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHlwZV0gdGhlIHR5cGUgb2YgdGhlIGF0dHJpYnV0ZSAoZWcuIGBnbC5GTE9BVGAsIGBnbC5VTlNJR05FRF9CWVRFYCwgZXRjLi4uKSBEZWZhdWx0ID0gYGdsLkZMT0FUYFxuICogQHByb3BlcnR5IHtib29sZWFufSBbbm9ybWFsaXplXSB3aGV0aGVyIG9yIG5vdCB0byBub3JtYWxpemUgdGhlIGRhdGEuIERlZmF1bHQgPSBmYWxzZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtvZmZzZXRdIG9mZnNldCBpbnRvIGJ1ZmZlciBpbiBieXRlcy4gRGVmYXVsdCA9IDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc3RyaWRlXSB0aGUgc3RyaWRlIGluIGJ5dGVzIHBlciBlbGVtZW50LiBEZWZhdWx0ID0gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtkaXZpc29yXSB0aGUgZGl2aXNvciBpbiBpbnN0YW5jZXMuIERlZmF1bHQgPSB1bmRlZmluZWQuIE5vdGU6IHVuZGVmaW5lZCA9IGRvbid0IGNhbGwgZ2wudmVydGV4QXR0cmliRGl2aXNvclxuICogICAgd2hlcmUgYXMgYW55dGhpbmcgZWxzZSA9IGRvIGNhbGwgaXQgd2l0aCB0aGlzIHZhbHVlXG4gKiBAcHJvcGVydHkge1dlYkdMQnVmZmVyfSBidWZmZXIgdGhlIGJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGlzIGF0dHJpYnV0ZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtkcmF3VHlwZV0gdGhlIGRyYXcgdHlwZSBwYXNzZWQgdG8gZ2wuYnVmZmVyRGF0YS4gRGVmYXVsdCA9IGdsLlNUQVRJQ19EUkFXXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFVzZSB0aGlzIHR5cGUgb2YgYXJyYXkgc3BlYyB3aGVuIFRXR0wgY2FuJ3QgZ3Vlc3MgdGhlIHR5cGUgb3IgbnVtYmVyIG9mIGNvbXBvbmVudHMgb2YgYW4gYXJyYXlcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZ1bGxBcnJheVNwZWNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fSBbdmFsdWVdIGEgY29uc3RhbnQgdmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUuIE5vdGU6IGlmIHRoaXMgaXMgc2V0IHRoZSBhdHRyaWJ1dGUgd2lsbCBiZVxuICogICAgZGlzYWJsZWQgYW5kIHNldCB0byB0aGlzIGNvbnN0YW50IHZhbHVlIGFuZCBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgaWdub3JlZC5cbiAqIEBwcm9wZXJ0eSB7KG51bWJlcnxudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXcpfSBkYXRhIFRoZSBkYXRhIG9mIHRoZSBhcnJheS4gQSBudW1iZXIgYWxvbmUgYmVjb21lcyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIG9mIHR5cGUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW251bUNvbXBvbmVudHNdIG51bWJlciBvZiBjb21wb25lbnRzIGZvciBgdmVydGV4QXR0cmliUG9pbnRlcmAuIERlZmF1bHQgaXMgYmFzZWQgb24gdGhlIG5hbWUgb2YgdGhlIGFycmF5LlxuICogICAgSWYgYGNvb3JkYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gMmAuXG4gKiAgICBJZiBgY29sb3JgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSA0YC5cbiAqICAgIG90aGVyd2lzZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gM2BcbiAqIEBwcm9wZXJ0eSB7Y29uc3RydWN0b3J9IFt0eXBlXSB0eXBlLiBUaGlzIGlzIG9ubHkgdXNlZCBpZiBgZGF0YWAgaXMgYSBKYXZhU2NyaXB0IGFycmF5LiBJdCBpcyB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlZGFycmF5LiAoZWcuIGBVaW50OEFycmF5YCkuXG4gKiBGb3IgZXhhbXBsZSBpZiB5b3Ugd2FudCBjb2xvcnMgaW4gYSBgVWludDhBcnJheWAgeW91IG1pZ2h0IGhhdmUgYSBgRnVsbEFycmF5U3BlY2AgbGlrZSBgeyB0eXBlOiBVaW50OEFycmF5LCBkYXRhOiBbMjU1LDAsMjU1LDI1NSwgLi4uXSwgfWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3NpemVdIHN5bm9ueW0gZm9yIGBudW1Db21wb25lbnRzYC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW25vcm1hbGl6ZV0gbm9ybWFsaXplIGZvciBgdmVydGV4QXR0cmliUG9pbnRlcmAuIERlZmF1bHQgaXMgdHJ1ZSBpZiB0eXBlIGlzIGBJbnQ4QXJyYXlgIG9yIGBVaW50OEFycmF5YCBvdGhlcndpc2UgZmFsc2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3N0cmlkZV0gc3RyaWRlIGZvciBgdmVydGV4QXR0cmliUG9pbnRlcmAuIERlZmF1bHQgPSAwXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IGZvciBgdmVydGV4QXR0cmliUG9pbnRlcmAuIERlZmF1bHQgPSAwXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Rpdmlzb3JdIGRpdmlzb3IgZm9yIGB2ZXJ0ZXhBdHRyaWJEaXZpc29yYC4gRGVmYXVsdCA9IHVuZGVmaW5lZC4gTm90ZTogdW5kZWZpbmVkID0gZG9uJ3QgY2FsbCBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yXG4gKiAgICB3aGVyZSBhcyBhbnl0aGluZyBlbHNlID0gZG8gY2FsbCBpdCB3aXRoIHRoaXMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbYXR0cmliXSBuYW1lIG9mIGF0dHJpYnV0ZSB0aGlzIGFycmF5IG1hcHMgdG8uIERlZmF1bHRzIHRvIHNhbWUgbmFtZSBhcyBhcnJheSBwcmVmaXhlZCBieSB0aGUgZGVmYXVsdCBhdHRyaWJQcmVmaXguXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW25hbWVdIHN5bm9ueW0gZm9yIGBhdHRyaWJgLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJOYW1lXSBzeW5vbnltIGZvciBgYXR0cmliYC5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IFtidWZmZXJdIEJ1ZmZlciB0byB1c2UgZm9yIHRoaXMgYXR0cmlidXRlLiBUaGlzIGxldHMgeW91IHVzZSB5b3VyIG93biBidWZmZXJcbiAqICAgIGJ1dCB5b3Ugd2lsbCBuZWVkIHRvIHN1cHBseSBgbnVtQ29tcG9uZW50c2AgYW5kIGB0eXBlYC4gWW91IGNhbiBlZmZlY3RpdmVseSBwYXNzIGFuIGBBdHRyaWJJbmZvYFxuICogICAgdG8gcHJvdmlkZSB0aGlzLiBFeGFtcGxlOlxuICpcbiAqICAgICAgICAgY29uc3QgYnVmZmVySW5mbzEgPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCB7XG4gKiAgICAgICAgICAgcG9zaXRpb246IFsxLCAyLCAzLCAuLi4gXSxcbiAqICAgICAgICAgfSk7XG4gKiAgICAgICAgIGNvbnN0IGJ1ZmZlckluZm8yID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwge1xuICogICAgICAgICAgIHBvc2l0aW9uOiBidWZmZXJJbmZvMS5hdHRyaWJzLnBvc2l0aW9uLCAgLy8gdXNlIHRoZSBzYW1lIGJ1ZmZlciBmcm9tIGJ1ZmZlckluZm8xXG4gKiAgICAgICAgIH0pO1xuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQW4gaW5kaXZpZHVhbCBhcnJheSBpbiB7QGxpbmsgbW9kdWxlOnR3Z2wuQXJyYXlzfVxuICpcbiAqIFdoZW4gcGFzc2VkIHRvIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30gaWYgYW4gQXJyYXlTcGVjIGlzIGBudW1iZXJbXWAgb3IgYEFycmF5QnVmZmVyVmlld2BcbiAqIHRoZSB0eXBlcyB3aWxsIGJlIGd1ZXNzZWQgYmFzZWQgb24gdGhlIG5hbWUuIGBpbmRpY2VzYCB3aWxsIGJlIGBVaW50MTZBcnJheWAsIGV2ZXJ5dGhpbmcgZWxzZSB3aWxsXG4gKiBiZSBgRmxvYXQzMkFycmF5YC4gSWYgYW4gQXJyYXlTcGVjIGlzIGEgbnVtYmVyIGl0J3MgdGhlIG51bWJlciBvZiBmbG9hdHMgZm9yIGFuIGVtcHR5ICh6ZXJvZWQpIGJ1ZmZlci5cbiAqXG4gKiBAdHlwZWRlZiB7KG51bWJlcnxudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXd8bW9kdWxlOnR3Z2wuRnVsbEFycmF5U3BlYyl9IEFycmF5U3BlY1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBUaGlzIGlzIGEgSmF2YVNjcmlwdCBvYmplY3Qgb2YgYXJyYXlzIGJ5IG5hbWUuIFRoZSBuYW1lcyBzaG91bGQgbWF0Y2ggeW91ciBzaGFkZXIncyBhdHRyaWJ1dGVzLiBJZiB5b3VyXG4gKiBhdHRyaWJ1dGVzIGhhdmUgYSBjb21tb24gcHJlZml4IHlvdSBjYW4gc3BlY2lmeSBpdCBieSBjYWxsaW5nIHtAbGluayBtb2R1bGU6dHdnbC5zZXRBdHRyaWJ1dGVQcmVmaXh9LlxuICpcbiAqICAgICBCYXJlIEphdmFTY3JpcHQgQXJyYXlzXG4gKlxuICogICAgICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgICAgICBwb3NpdGlvbjogWy0xLCAxLCAwXSxcbiAqICAgICAgICAgICAgbm9ybWFsOiBbMCwgMSwgMF0sXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKlxuICogICAgIEJhcmUgVHlwZWRBcnJheXNcbiAqXG4gKiAgICAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KFstMSwgMSwgMF0pLFxuICogICAgICAgICAgICBjb2xvcjogbmV3IFVpbnQ4QXJyYXkoWzI1NSwgMTI4LCA2NCwgMjU1XSksXG4gKiAgICAgICAgICAgIC4uLlxuICogICAgICAgICB9XG4gKlxuICogKiAgIFdpbGwgZ3Vlc3MgYXQgYG51bUNvbXBvbmVudHNgIGlmIG5vdCBzcGVjaWZpZWQgYmFzZWQgb24gbmFtZS5cbiAqXG4gKiAgICAgSWYgYGNvb3JkYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gMmBcbiAqXG4gKiAgICAgSWYgYGNvbG9yYCBpcyBpbiB0aGUgbmFtZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gNGBcbiAqXG4gKiAgICAgb3RoZXJ3aXNlIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAzYFxuICpcbiAqIE9iamVjdHMgd2l0aCB2YXJpb3VzIGZpZWxkcy4gU2VlIHtAbGluayBtb2R1bGU6dHdnbC5GdWxsQXJyYXlTcGVjfS5cbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCBkYXRhOiBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sICAgICAgICAgICAgICAgICB9LFxuICogICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLCAgICAgfSxcbiAqICAgICAgIGluZGljZXM6ICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAxLCAyLCAxLCAyLCAzXSwgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkFycmF5U3BlYz59IEFycmF5c1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIGF0dHJpYnV0ZSBkYXRhIGFuZCBXZWJHTEJ1ZmZlcnMgZnJvbSBzZXQgb2YgYXJyYXlzXG4gKlxuICogR2l2ZW5cbiAqXG4gKiAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSwgfSxcbiAqICAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCBkYXRhOiBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sICAgICAgICAgICAgICAgICB9LFxuICogICAgICAgIG5vcm1hbDogICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSwgICAgIH0sXG4gKiAgICAgICAgY29sb3I6ICAgIHsgbnVtQ29tcG9uZW50czogNCwgZGF0YTogWzI1NSwgMjU1LCAyNTUsIDI1NSwgMjU1LCAwLCAwLCAyNTUsIDAsIDAsIDI1NSwgMjU1XSwgdHlwZTogVWludDhBcnJheSwgfSxcbiAqICAgICAgICBpbmRpY2VzOiAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMSwgMiwgMSwgMiwgM10sICAgICAgICAgICAgICAgICAgICAgICB9LFxuICogICAgICB9O1xuICpcbiAqIHJldHVybnMgc29tZXRoaW5nIGxpa2VcbiAqXG4gKiAgICAgIHZhciBhdHRyaWJzID0ge1xuICogICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIHR5cGU6IGdsLkZMT0FULCAgICAgICAgIG5vcm1hbGl6ZTogZmFsc2UsIGJ1ZmZlcjogV2ViR0xCdWZmZXIsIH0sXG4gKiAgICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgdHlwZTogZ2wuRkxPQVQsICAgICAgICAgbm9ybWFsaXplOiBmYWxzZSwgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgfSxcbiAqICAgICAgICBub3JtYWw6ICAgeyBudW1Db21wb25lbnRzOiAzLCB0eXBlOiBnbC5GTE9BVCwgICAgICAgICBub3JtYWxpemU6IGZhbHNlLCBidWZmZXI6IFdlYkdMQnVmZmVyLCB9LFxuICogICAgICAgIGNvbG9yOiAgICB7IG51bUNvbXBvbmVudHM6IDQsIHR5cGU6IGdsLlVOU0lHTkVEX0JZVEUsIG5vcm1hbGl6ZTogdHJ1ZSwgIGJ1ZmZlcjogV2ViR0xCdWZmZXIsIH0sXG4gKiAgICAgIH07XG4gKlxuICogbm90ZXM6XG4gKlxuICogKiAgIEFycmF5cyBjYW4gdGFrZSB2YXJpb3VzIGZvcm1zXG4gKlxuICogICAgIEJhcmUgSmF2YVNjcmlwdCBBcnJheXNcbiAqXG4gKiAgICAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTEsIDEsIDBdLFxuICogICAgICAgICAgICBub3JtYWw6IFswLCAxLCAwXSxcbiAqICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgIH1cbiAqXG4gKiAgICAgQmFyZSBUeXBlZEFycmF5c1xuICpcbiAqICAgICAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAxLCAwXSksXG4gKiAgICAgICAgICAgIGNvbG9yOiBuZXcgVWludDhBcnJheShbMjU1LCAxMjgsIDY0LCAyNTVdKSxcbiAqICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgIH1cbiAqXG4gKiAqICAgV2lsbCBndWVzcyBhdCBgbnVtQ29tcG9uZW50c2AgaWYgbm90IHNwZWNpZmllZCBiYXNlZCBvbiBuYW1lLlxuICpcbiAqICAgICBJZiBgY29vcmRgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAyYFxuICpcbiAqICAgICBJZiBgY29sb3JgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSA0YFxuICpcbiAqICAgICBvdGhlcndpc2UgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDNgXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSB3ZWJnbCByZW5kZXJpbmcgY29udGV4dC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBhcnJheXMgVGhlIGFycmF5c1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBbc3JjQnVmZmVySW5mb10gYSBCdWZmZXJJbmZvIHRvIGNvcHkgZnJvbVxuICogICBUaGlzIGxldHMgeW91IHNoYXJlIGJ1ZmZlcnMuIEFueSBhcnJheXMgeW91IHN1cHBseSB3aWxsIG92ZXJyaWRlXG4gKiAgIHRoZSBidWZmZXJzIGZyb20gc3JjQnVmZmVySW5mby5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gdGhlIGF0dHJpYnNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKSB7XG4gIHZhciBhdHRyaWJzID0ge307XG4gIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAoYXJyYXlOYW1lKSB7XG4gICAgaWYgKCFpc0luZGljZXMoYXJyYXlOYW1lKSkge1xuICAgICAgdmFyIGFycmF5ID0gYXJyYXlzW2FycmF5TmFtZV07XG4gICAgICB2YXIgYXR0cmliTmFtZSA9IGFycmF5LmF0dHJpYiB8fCBhcnJheS5uYW1lIHx8IGFycmF5LmF0dHJpYk5hbWUgfHwgZGVmYXVsdHMuYXR0cmliUHJlZml4ICsgYXJyYXlOYW1lO1xuXG4gICAgICBpZiAoYXJyYXkudmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5LnZhbHVlKSAmJiAhdHlwZWRBcnJheXMuaXNBcnJheUJ1ZmZlcihhcnJheS52YWx1ZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FycmF5LnZhbHVlIGlzIG5vdCBhcnJheSBvciB0eXBlZGFycmF5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJzW2F0dHJpYk5hbWVdID0ge1xuICAgICAgICAgIHZhbHVlOiBhcnJheS52YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgICAgdmFyIHR5cGU7XG4gICAgICAgIHZhciBub3JtYWxpemF0aW9uO1xuICAgICAgICB2YXIgbnVtQ29tcG9uZW50cztcblxuICAgICAgICBpZiAoYXJyYXkuYnVmZmVyICYmIGFycmF5LmJ1ZmZlciBpbnN0YW5jZW9mIFdlYkdMQnVmZmVyKSB7XG4gICAgICAgICAgYnVmZmVyID0gYXJyYXkuYnVmZmVyO1xuICAgICAgICAgIG51bUNvbXBvbmVudHMgPSBhcnJheS5udW1Db21wb25lbnRzIHx8IGFycmF5LnNpemU7XG4gICAgICAgICAgdHlwZSA9IGFycmF5LnR5cGU7XG4gICAgICAgICAgbm9ybWFsaXphdGlvbiA9IGFycmF5Lm5vcm1hbGl6ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJyYXkgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGFycmF5LmRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICB2YXIgbnVtVmFsdWVzID0gYXJyYXkuZGF0YSB8fCBhcnJheTtcbiAgICAgICAgICB2YXIgYXJyYXlUeXBlID0gYXJyYXkudHlwZSB8fCBGbG9hdDMyQXJyYXk7XG4gICAgICAgICAgdmFyIG51bUJ5dGVzID0gbnVtVmFsdWVzICogYXJyYXlUeXBlLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgICAgICAgIHR5cGUgPSB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZShhcnJheVR5cGUpO1xuICAgICAgICAgIG5vcm1hbGl6YXRpb24gPSBhcnJheS5ub3JtYWxpemUgIT09IHVuZGVmaW5lZCA/IGFycmF5Lm5vcm1hbGl6ZSA6IGdldE5vcm1hbGl6YXRpb25Gb3JUeXBlZEFycmF5VHlwZShhcnJheVR5cGUpO1xuICAgICAgICAgIG51bUNvbXBvbmVudHMgPSBhcnJheS5udW1Db21wb25lbnRzIHx8IGFycmF5LnNpemUgfHwgZ3Vlc3NOdW1Db21wb25lbnRzRnJvbU5hbWUoYXJyYXlOYW1lLCBudW1WYWx1ZXMpO1xuICAgICAgICAgIGJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICAgIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoQVJSQVlfQlVGRkVSLCBudW1CeXRlcywgYXJyYXkuZHJhd1R5cGUgfHwgU1RBVElDX0RSQVcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0eXBlZEFycmF5ID0gbWFrZVR5cGVkQXJyYXkoYXJyYXksIGFycmF5TmFtZSk7XG4gICAgICAgICAgYnVmZmVyID0gY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIHR5cGVkQXJyYXksIHVuZGVmaW5lZCwgYXJyYXkuZHJhd1R5cGUpO1xuICAgICAgICAgIHR5cGUgPSB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5KHR5cGVkQXJyYXkpO1xuICAgICAgICAgIG5vcm1hbGl6YXRpb24gPSBhcnJheS5ub3JtYWxpemUgIT09IHVuZGVmaW5lZCA/IGFycmF5Lm5vcm1hbGl6ZSA6IGdldE5vcm1hbGl6YXRpb25Gb3JUeXBlZEFycmF5KHR5cGVkQXJyYXkpO1xuICAgICAgICAgIG51bUNvbXBvbmVudHMgPSBnZXROdW1Db21wb25lbnRzKGFycmF5LCBhcnJheU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0cmlic1thdHRyaWJOYW1lXSA9IHtcbiAgICAgICAgICBidWZmZXI6IGJ1ZmZlcixcbiAgICAgICAgICBudW1Db21wb25lbnRzOiBudW1Db21wb25lbnRzLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgbm9ybWFsaXplOiBub3JtYWxpemF0aW9uLFxuICAgICAgICAgIHN0cmlkZTogYXJyYXkuc3RyaWRlIHx8IDAsXG4gICAgICAgICAgb2Zmc2V0OiBhcnJheS5vZmZzZXQgfHwgMCxcbiAgICAgICAgICBkaXZpc29yOiBhcnJheS5kaXZpc29yID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhcnJheS5kaXZpc29yLFxuICAgICAgICAgIGRyYXdUeXBlOiBhcnJheS5kcmF3VHlwZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgcmV0dXJuIGF0dHJpYnM7XG59XG4vKipcbiAqIFNldHMgdGhlIGNvbnRlbnRzIG9mIGEgYnVmZmVyIGF0dGFjaGVkIHRvIGFuIGF0dHJpYkluZm9cbiAqXG4gKiBUaGlzIGlzIGhlbHBlciBmdW5jdGlvbiB0byBkeW5hbWljYWxseSB1cGRhdGUgYSBidWZmZXIuXG4gKlxuICogTGV0J3Mgc2F5IHlvdSBtYWtlIGEgYnVmZmVySW5mb1xuICpcbiAqICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgIHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0pLFxuICogICAgICAgIHRleGNvb3JkOiBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSksXG4gKiAgICAgICAgbm9ybWFsOiAgIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdKSxcbiAqICAgICAgICBpbmRpY2VzOiAgbmV3IFVpbnQxNkFycmF5KFswLCAxLCAyLCAxLCAyLCAzXSksXG4gKiAgICAgfTtcbiAqICAgICB2YXIgYnVmZmVySW5mbyA9IHR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gKlxuICogIEFuZCB5b3Ugd2FudCB0byBkeW5hbWljYWxseSB1cGRhdGUgdGhlIHBvc2l0aW9ucy4gWW91IGNvdWxkIGRvIHRoaXNcbiAqXG4gKiAgICAgLy8gYXNzdW1pbmcgYXJyYXlzLnBvc2l0aW9uIGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZCB3aXRoIG5ldyBkYXRhLlxuICogICAgIHR3Z2wuc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheShnbCwgYnVmZmVySW5mby5hdHRyaWJzLnBvc2l0aW9uLCBhcnJheXMucG9zaXRpb24pO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbFxuICogQHBhcmFtIHtBdHRyaWJJbmZvfSBhdHRyaWJJbmZvIFRoZSBhdHRyaWJJbmZvIHdobydzIGJ1ZmZlciBjb250ZW50cyB0byBzZXQuIE5PVEU6IElmIHlvdSBoYXZlIGFuIGF0dHJpYnV0ZSBwcmVmaXhcbiAqICAgdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZSB3aWxsIGluY2x1ZGUgdGhlIHByZWZpeC5cbiAqIEBwYXJhbSB7QXJyYXlTcGVjfSBhcnJheSBOb3RlOiBpdCBpcyBhcmd1YWJseSBpbmVmZmljaWVudCB0byBwYXNzIGluIGFueXRoaW5nIGJ1dCBhIHR5cGVkIGFycmF5IGJlY2F1c2UgYW55dGhpbmdcbiAqICAgIGVsc2Ugd2lsbCBoYXZlIHRvIGJlIGNvbnZlcnRlZCB0byBhIHR5cGVkIGFycmF5IGJlZm9yZSBpdCBjYW4gYmUgdXNlZCBieSBXZWJHTC4gRHVyaW5nIGluaXQgdGltZSB0aGF0XG4gKiAgICBpbmVmZmljaWVuY3kgaXMgdXN1YWxseSBub3QgaW1wb3J0YW50IGJ1dCBpZiB5b3UncmUgdXBkYXRpbmcgZGF0YSBkeW5hbWljYWxseSBiZXN0IHRvIGJlIGVmZmljaWVudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XSBhbiBvcHRpb25hbCBvZmZzZXQgaW50byB0aGUgYnVmZmVyLiBUaGlzIGlzIG9ubHkgYW4gb2Zmc2V0IGludG8gdGhlIFdlYkdMIGJ1ZmZlclxuICogICAgbm90IHRoZSBhcnJheS4gVG8gcGFzcyBpbiBhbiBvZmZzZXQgaW50byB0aGUgYXJyYXkgaXRzZWxmIHVzZSBhIHR5cGVkIGFycmF5IGFuZCBjcmVhdGUgYW4gYEFycmF5QnVmZmVyVmlld2BcbiAqICAgIGZvciB0aGUgcG9ydGlvbiBvZiB0aGUgYXJyYXkgeW91IHdhbnQgdG8gdXNlLlxuICpcbiAqICAgICAgICB2YXIgc29tZUFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSgxMDAwKTsgLy8gYW4gYXJyYXkgd2l0aCAxMDAwIGZsb2F0c1xuICogICAgICAgIHZhciBzb21lU3ViQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHNvbWVBcnJheS5idWZmZXIsIG9mZnNldEluQnl0ZXMsIHNpemVJblVuaXRzKTsgLy8gYSB2aWV3IGludG8gc29tZUFycmF5XG4gKlxuICogICAgTm93IHlvdSBjYW4gcGFzcyBgc29tZVN1YkFycmF5YCBpbnRvIHNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXlgXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheShnbCwgYXR0cmliSW5mbywgYXJyYXksIG9mZnNldCkge1xuICBhcnJheSA9IG1ha2VUeXBlZEFycmF5KGFycmF5KTtcblxuICBpZiAob2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgYXR0cmliSW5mby5idWZmZXIpO1xuICAgIGdsLmJ1ZmZlclN1YkRhdGEoQVJSQVlfQlVGRkVSLCBvZmZzZXQsIGFycmF5KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgQVJSQVlfQlVGRkVSLCBhdHRyaWJJbmZvLmJ1ZmZlciwgYXJyYXksIGF0dHJpYkluZm8uZHJhd1R5cGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEJ5dGVzUGVyVmFsdWVGb3JHTFR5cGUoZ2wsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IEJZVEUpIHJldHVybiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGUgPT09IFVOU0lHTkVEX0JZVEUpIHJldHVybiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGUgPT09IFNIT1JUKSByZXR1cm4gMjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmICh0eXBlID09PSBVTlNJR05FRF9TSE9SVCkgcmV0dXJuIDI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAodHlwZSA9PT0gSU5UKSByZXR1cm4gNDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmICh0eXBlID09PSBVTlNJR05FRF9JTlQpIHJldHVybiA0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGUgPT09IEZMT0FUKSByZXR1cm4gNDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHJldHVybiAwO1xufSAvLyBUcmllcyB0byBnZXQgdGhlIG51bWJlciBvZiBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIGFycmF5cy5cblxuXG52YXIgcG9zaXRpb25LZXlzID0gWydwb3NpdGlvbicsICdwb3NpdGlvbnMnLCAnYV9wb3NpdGlvbiddO1xuXG5mdW5jdGlvbiBnZXROdW1FbGVtZW50c0Zyb21Ob25JbmRleGVkQXJyYXlzKGFycmF5cykge1xuICB2YXIga2V5O1xuICB2YXIgaWk7XG5cbiAgZm9yIChpaSA9IDA7IGlpIDwgcG9zaXRpb25LZXlzLmxlbmd0aDsgKytpaSkge1xuICAgIGtleSA9IHBvc2l0aW9uS2V5c1tpaV07XG5cbiAgICBpZiAoa2V5IGluIGFycmF5cykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlpID09PSBwb3NpdGlvbktleXMubGVuZ3RoKSB7XG4gICAga2V5ID0gT2JqZWN0LmtleXMoYXJyYXlzKVswXTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IGFycmF5c1trZXldO1xuICB2YXIgbGVuZ3RoID0gZ2V0QXJyYXkoYXJyYXkpLmxlbmd0aDtcbiAgdmFyIG51bUNvbXBvbmVudHMgPSBnZXROdW1Db21wb25lbnRzKGFycmF5LCBrZXkpO1xuICB2YXIgbnVtRWxlbWVudHMgPSBsZW5ndGggLyBudW1Db21wb25lbnRzO1xuXG4gIGlmIChsZW5ndGggJSBudW1Db21wb25lbnRzID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm51bUNvbXBvbmVudHMgXCIuY29uY2F0KG51bUNvbXBvbmVudHMsIFwiIG5vdCBjb3JyZWN0IGZvciBsZW5ndGggXCIpLmNvbmNhdChsZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiBudW1FbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0TnVtRWxlbWVudHNGcm9tQXR0cmlidXRlcyhnbCwgYXR0cmlicykge1xuICB2YXIga2V5O1xuICB2YXIgaWk7XG5cbiAgZm9yIChpaSA9IDA7IGlpIDwgcG9zaXRpb25LZXlzLmxlbmd0aDsgKytpaSkge1xuICAgIGtleSA9IHBvc2l0aW9uS2V5c1tpaV07XG5cbiAgICBpZiAoa2V5IGluIGF0dHJpYnMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGtleSA9IGRlZmF1bHRzLmF0dHJpYlByZWZpeCArIGtleTtcblxuICAgIGlmIChrZXkgaW4gYXR0cmlicykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlpID09PSBwb3NpdGlvbktleXMubGVuZ3RoKSB7XG4gICAga2V5ID0gT2JqZWN0LmtleXMoYXR0cmlicylbMF07XG4gIH1cblxuICB2YXIgYXR0cmliID0gYXR0cmlic1trZXldO1xuICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgYXR0cmliLmJ1ZmZlcik7XG4gIHZhciBudW1CeXRlcyA9IGdsLmdldEJ1ZmZlclBhcmFtZXRlcihBUlJBWV9CVUZGRVIsIEJVRkZFUl9TSVpFKTtcbiAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIG51bGwpO1xuICB2YXIgYnl0ZXNQZXJWYWx1ZSA9IGdldEJ5dGVzUGVyVmFsdWVGb3JHTFR5cGUoZ2wsIGF0dHJpYi50eXBlKTtcbiAgdmFyIHRvdGFsRWxlbWVudHMgPSBudW1CeXRlcyAvIGJ5dGVzUGVyVmFsdWU7XG4gIHZhciBudW1Db21wb25lbnRzID0gYXR0cmliLm51bUNvbXBvbmVudHMgfHwgYXR0cmliLnNpemU7IC8vIFRPRE86IGNoZWNrIHN0cmlkZVxuXG4gIHZhciBudW1FbGVtZW50cyA9IHRvdGFsRWxlbWVudHMgLyBudW1Db21wb25lbnRzO1xuXG4gIGlmIChudW1FbGVtZW50cyAlIDEgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJudW1Db21wb25lbnRzIFwiLmNvbmNhdChudW1Db21wb25lbnRzLCBcIiBub3QgY29ycmVjdCBmb3IgbGVuZ3RoIFwiKS5jb25jYXQobGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4gbnVtRWxlbWVudHM7XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJ1ZmZlckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBudW1FbGVtZW50cyBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHBhc3MgdG8gYGdsLmRyYXdBcnJheXNgIG9yIGBnbC5kcmF3RWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlbGVtZW50VHlwZV0gVGhlIHR5cGUgb2YgaW5kaWNlcyBgVU5TSUdORURfQllURWAsIGBVTlNJR05FRF9TSE9SVGAgZXRjLi5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IFtpbmRpY2VzXSBUaGUgaW5kaWNlcyBgRUxFTUVOVF9BUlJBWV9CVUZGRVJgIGlmIGFueSBpbmRpY2VzIGV4aXN0LlxuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz59IFthdHRyaWJzXSBUaGUgYXR0cmlicyBhcHByb3ByaWF0ZSB0byBjYWxsIGBzZXRBdHRyaWJ1dGVzYFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgQnVmZmVySW5mbyBmcm9tIGFuIG9iamVjdCBvZiBhcnJheXMuXG4gKlxuICogVGhpcyBjYW4gYmUgcGFzc2VkIHRvIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc30gYW5kIHRvXG4gKiB7QGxpbmsgbW9kdWxlOnR3Z2w6ZHJhd0J1ZmZlckluZm99LlxuICpcbiAqIEdpdmVuIGFuIG9iamVjdCBsaWtlXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdLCB9LFxuICogICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICAgIG5vcm1hbDogICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSwgICAgIH0sXG4gKiAgICAgICBpbmRpY2VzOiAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMSwgMiwgMSwgMiwgM10sICAgICAgICAgICAgICAgICAgICAgICB9LFxuICogICAgIH07XG4gKlxuICogIENyZWF0ZXMgYW4gQnVmZmVySW5mbyBsaWtlIHRoaXNcbiAqXG4gKiAgICAgYnVmZmVySW5mbyA9IHtcbiAqICAgICAgIG51bUVsZW1lbnRzOiA0LCAgICAgICAgLy8gb3Igd2hhdGV2ZXIgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpc1xuICogICAgICAgaW5kaWNlczogV2ViR0xCdWZmZXIsICAvLyB0aGlzIHByb3BlcnR5IHdpbGwgbm90IGV4aXN0IGlmIHRoZXJlIGFyZSBubyBpbmRpY2VzXG4gKiAgICAgICBhdHRyaWJzOiB7XG4gKiAgICAgICAgIHBvc2l0aW9uOiB7IGJ1ZmZlcjogV2ViR0xCdWZmZXIsIG51bUNvbXBvbmVudHM6IDMsIH0sXG4gKiAgICAgICAgIG5vcm1hbDogICB7IGJ1ZmZlcjogV2ViR0xCdWZmZXIsIG51bUNvbXBvbmVudHM6IDMsIH0sXG4gKiAgICAgICAgIHRleGNvb3JkOiB7IGJ1ZmZlcjogV2ViR0xCdWZmZXIsIG51bUNvbXBvbmVudHM6IDIsIH0sXG4gKiAgICAgICB9LFxuICogICAgIH07XG4gKlxuICogIFRoZSBwcm9wZXJ0aWVzIG9mIGFycmF5cyBjYW4gYmUgSmF2YVNjcmlwdCBhcnJheXMgaW4gd2hpY2ggY2FzZSB0aGUgbnVtYmVyIG9mIGNvbXBvbmVudHNcbiAqICB3aWxsIGJlIGd1ZXNzZWQuXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sXG4gKiAgICAgICAgdGV4Y29vcmQ6IFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSxcbiAqICAgICAgICBub3JtYWw6ICAgWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLFxuICogICAgICAgIGluZGljZXM6ICBbMCwgMSwgMiwgMSwgMiwgM10sXG4gKiAgICAgfTtcbiAqXG4gKiAgVGhleSBjYW4gYWxzbyBiZSBUeXBlZEFycmF5c1xuICpcbiAqICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgIHBvc2l0aW9uOiBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0pLFxuICogICAgICAgIHRleGNvb3JkOiBuZXcgRmxvYXQzMkFycmF5KFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSksXG4gKiAgICAgICAgbm9ybWFsOiAgIG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdKSxcbiAqICAgICAgICBpbmRpY2VzOiAgbmV3IFVpbnQxNkFycmF5KFswLCAxLCAyLCAxLCAyLCAzXSksXG4gKiAgICAgfTtcbiAqXG4gKiAgT3IgQXVnbWVudGVkVHlwZWRBcnJheXNcbiAqXG4gKiAgICAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgNCk7XG4gKiAgICAgdmFyIHRleGNvb3JkcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgNCk7XG4gKiAgICAgdmFyIG5vcm1hbHMgICA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgNCk7XG4gKiAgICAgdmFyIGluZGljZXMgICA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgMiwgVWludDE2QXJyYXkpO1xuICpcbiAqICAgICBwb3NpdGlvbnMucHVzaChbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdKTtcbiAqICAgICB0ZXhjb29yZHMucHVzaChbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0pO1xuICogICAgIG5vcm1hbHMucHVzaChbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0pO1xuICogICAgIGluZGljZXMucHVzaChbMCwgMSwgMiwgMSwgMiwgM10pO1xuICpcbiAqICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gKiAgICAgICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAqICAgICAgICBub3JtYWw6ICAgbm9ybWFscyxcbiAqICAgICAgICBpbmRpY2VzOiAgaW5kaWNlcyxcbiAqICAgICB9O1xuICpcbiAqIEZvciB0aGUgbGFzdCBleGFtcGxlIGl0IGlzIGVxdWl2YWxlbnQgdG9cbiAqXG4gKiAgICAgdmFyIGJ1ZmZlckluZm8gPSB7XG4gKiAgICAgICBhdHRyaWJzOiB7XG4gKiAgICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGJ1ZmZlcjogZ2wuY3JlYXRlQnVmZmVyKCksIH0sXG4gKiAgICAgICAgIHRleGNvb3JkOiB7IG51bUNvbXBvbmVudHM6IDIsIGJ1ZmZlcjogZ2wuY3JlYXRlQnVmZmVyKCksIH0sXG4gKiAgICAgICAgIG5vcm1hbDogeyBudW1Db21wb25lbnRzOiAzLCBidWZmZXI6IGdsLmNyZWF0ZUJ1ZmZlcigpLCB9LFxuICogICAgICAgfSxcbiAqICAgICAgIGluZGljZXM6IGdsLmNyZWF0ZUJ1ZmZlcigpLFxuICogICAgICAgbnVtRWxlbWVudHM6IDYsXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlckluZm8uYXR0cmlicy5wb3NpdGlvbi5idWZmZXIpO1xuICogICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBhcnJheXMucG9zaXRpb24sIGdsLlNUQVRJQ19EUkFXKTtcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVySW5mby5hdHRyaWJzLnRleGNvb3JkLmJ1ZmZlcik7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGFycmF5cy50ZXhjb29yZCwgZ2wuU1RBVElDX0RSQVcpO1xuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJJbmZvLmF0dHJpYnMubm9ybWFsLmJ1ZmZlcik7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGFycmF5cy5ub3JtYWwsIGdsLlNUQVRJQ19EUkFXKTtcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXJJbmZvLmluZGljZXMpO1xuICogICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGFycmF5cy5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzIFlvdXIgZGF0YVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBbc3JjQnVmZmVySW5mb10gQW4gZXhpc3RpbmdcbiAqICAgICAgICBidWZmZXIgaW5mbyB0byBzdGFydCBmcm9tLiBXZWJHTEJ1ZmZlcnMgZXRjIHNwZWNpZmllZFxuICogICAgICAgIGluIHRoZSBzcmNCdWZmZXJJbmZvIHdpbGwgYmUgdXNlZCBpbiBhIG5ldyBCdWZmZXJJbmZvXG4gKiAgICAgICAgd2l0aCBhbnkgYXJyYXlzIHNwZWNpZmllZCBvdmVycmlkaW5nIHRoZSBvbmVzIGluXG4gKiAgICAgICAgc3JjQnVmZmVySW5mby5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IEEgQnVmZmVySW5mb1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCBhcnJheXMsIHNyY0J1ZmZlckluZm8pIHtcbiAgdmFyIG5ld0F0dHJpYnMgPSBjcmVhdGVBdHRyaWJzRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAgdmFyIGJ1ZmZlckluZm8gPSBPYmplY3QuYXNzaWduKHt9LCBzcmNCdWZmZXJJbmZvID8gc3JjQnVmZmVySW5mbyA6IHt9KTtcbiAgYnVmZmVySW5mby5hdHRyaWJzID0gT2JqZWN0LmFzc2lnbih7fSwgc3JjQnVmZmVySW5mbyA/IHNyY0J1ZmZlckluZm8uYXR0cmlicyA6IHt9LCBuZXdBdHRyaWJzKTtcbiAgdmFyIGluZGljZXMgPSBhcnJheXMuaW5kaWNlcztcblxuICBpZiAoaW5kaWNlcykge1xuICAgIHZhciBuZXdJbmRpY2VzID0gbWFrZVR5cGVkQXJyYXkoaW5kaWNlcywgXCJpbmRpY2VzXCIpO1xuICAgIGJ1ZmZlckluZm8uaW5kaWNlcyA9IGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCBuZXdJbmRpY2VzLCBFTEVNRU5UX0FSUkFZX0JVRkZFUik7XG4gICAgYnVmZmVySW5mby5udW1FbGVtZW50cyA9IG5ld0luZGljZXMubGVuZ3RoO1xuICAgIGJ1ZmZlckluZm8uZWxlbWVudFR5cGUgPSB0eXBlZEFycmF5cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5KG5ld0luZGljZXMpO1xuICB9IGVsc2UgaWYgKCFidWZmZXJJbmZvLm51bUVsZW1lbnRzKSB7XG4gICAgYnVmZmVySW5mby5udW1FbGVtZW50cyA9IGdldE51bUVsZW1lbnRzRnJvbUF0dHJpYnV0ZXMoZ2wsIGJ1ZmZlckluZm8uYXR0cmlicyk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVySW5mbztcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGJ1ZmZlciBmcm9tIGFuIGFycmF5LCB0eXBlZCBhcnJheSwgb3IgYXJyYXkgc3BlY1xuICpcbiAqIEdpdmVuIHNvbWV0aGluZyBsaWtlIHRoaXNcbiAqXG4gKiAgICAgWzEsIDIsIDNdLFxuICpcbiAqIG9yXG4gKlxuICogICAgIG5ldyBVaW50MTZBcnJheShbMSwyLDNdKTtcbiAqXG4gKiBvclxuICpcbiAqICAgICB7XG4gKiAgICAgICAgZGF0YTogWzEsIDIsIDNdLFxuICogICAgICAgIHR5cGU6IFVpbnQ4QXJyYXksXG4gKiAgICAgfVxuICpcbiAqIHJldHVybnMgYSBXZWJHTEJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoZSBnaXZlbiBkYXRhLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlTcGVjfSBhcnJheSBhbiBhcnJheSwgdHlwZWQgYXJyYXksIG9yIGFycmF5IHNwZWMuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXJyYXlOYW1lIG5hbWUgb2YgYXJyYXkuIFVzZWQgdG8gZ3Vlc3MgdGhlIHR5cGUgaWYgdHlwZSBjYW4gbm90IGJlIGRlcml2ZWQgb3RoZXJ3aXNlLlxuICogQHJldHVybiB7V2ViR0xCdWZmZXJ9IGEgV2ViR0xCdWZmZXIgY29udGFpbmluZyB0aGUgZGF0YSBpbiBhcnJheS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJGcm9tQXJyYXkoZ2wsIGFycmF5LCBhcnJheU5hbWUpIHtcbiAgdmFyIHR5cGUgPSBhcnJheU5hbWUgPT09IFwiaW5kaWNlc1wiID8gRUxFTUVOVF9BUlJBWV9CVUZGRVIgOiBBUlJBWV9CVUZGRVI7XG4gIHZhciB0eXBlZEFycmF5ID0gbWFrZVR5cGVkQXJyYXkoYXJyYXksIGFycmF5TmFtZSk7XG4gIHJldHVybiBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdHlwZSk7XG59XG4vKipcbiAqIENyZWF0ZXMgYnVmZmVycyBmcm9tIGFycmF5cyBvciB0eXBlZCBhcnJheXNcbiAqXG4gKiBHaXZlbiBzb21ldGhpbmcgbGlrZSB0aGlzXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb25zOiBbMSwgMiwgM10sXG4gKiAgICAgICAgbm9ybWFsczogWzAsIDAsIDFdLFxuICogICAgIH1cbiAqXG4gKiByZXR1cm5zIHNvbWV0aGluZyBsaWtlXG4gKlxuICogICAgIGJ1ZmZlcnMgPSB7XG4gKiAgICAgICBwb3NpdGlvbnM6IFdlYkdMQnVmZmVyLFxuICogICAgICAgbm9ybWFsczogV2ViR0xCdWZmZXIsXG4gKiAgICAgfVxuICpcbiAqIElmIHRoZSBidWZmZXIgaXMgbmFtZWQgJ2luZGljZXMnIGl0IHdpbGwgYmUgbWFkZSBhbiBFTEVNRU5UX0FSUkFZX0JVRkZFUi5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzXG4gKiBAcmV0dXJuIHtPYmplY3Q8c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IHJldHVybnMgYW4gb2JqZWN0IHdpdGggb25lIFdlYkdMQnVmZmVyIHBlciBhcnJheVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpIHtcbiAgdmFyIGJ1ZmZlcnMgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBidWZmZXJzW2tleV0gPSBjcmVhdGVCdWZmZXJGcm9tQXJyYXkoZ2wsIGFycmF5c1trZXldLCBrZXkpO1xuICB9KTsgLy8gVWdoIVxuXG4gIGlmIChhcnJheXMuaW5kaWNlcykge1xuICAgIGJ1ZmZlcnMubnVtRWxlbWVudHMgPSBhcnJheXMuaW5kaWNlcy5sZW5ndGg7XG4gICAgYnVmZmVycy5lbGVtZW50VHlwZSA9IHR5cGVkQXJyYXlzLmdldEdMVHlwZUZvclR5cGVkQXJyYXkobWFrZVR5cGVkQXJyYXkoYXJyYXlzLmluZGljZXMpLCAnaW5kaWNlcycpO1xuICB9IGVsc2Uge1xuICAgIGJ1ZmZlcnMubnVtRWxlbWVudHMgPSBnZXROdW1FbGVtZW50c0Zyb21Ob25JbmRleGVkQXJyYXlzKGFycmF5cyk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVycztcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZHJhdy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2RyYXcuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRyYXdCdWZmZXJJbmZvID0gZHJhd0J1ZmZlckluZm87XG5leHBvcnRzLmRyYXdPYmplY3RMaXN0ID0gZHJhd09iamVjdExpc3Q7XG5cbnZhciBwcm9ncmFtcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJvZ3JhbXMuanMgKi8gXCIuL3NyYy9wcm9ncmFtcy5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBUUklBTkdMRVMgPSAweDAwMDQ7XG52YXIgVU5TSUdORURfU0hPUlQgPSAweDE0MDM7XG4vKipcbiAqIERyYXdpbmcgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5kcmF3YCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvZHJhd1xuICovXG5cbi8qKlxuICogQ2FsbHMgYGdsLmRyYXdFbGVtZW50c2Agb3IgYGdsLmRyYXdBcnJheXNgLCB3aGljaGV2ZXIgaXMgYXBwcm9wcmlhdGVcbiAqXG4gKiBub3JtYWxseSB5b3UnZCBjYWxsIGBnbC5kcmF3RWxlbWVudHNgIG9yIGBnbC5kcmF3QXJyYXlzYCB5b3Vyc2VsZlxuICogYnV0IGNhbGxpbmcgdGhpcyBtZWFucyBpZiB5b3Ugc3dpdGNoIGZyb20gaW5kZXhlZCBkYXRhIHRvIG5vbi1pbmRleGVkXG4gKiBkYXRhIHlvdSBkb24ndCBoYXZlIHRvIHJlbWVtYmVyIHRvIHVwZGF0ZSB5b3VyIGRyYXcgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvKX0gYnVmZmVySW5mbyBBIEJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXN9IG9yXG4gKiAgIGEgVmVydGV4QXJyYXlJbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVZlcnRleEFycmF5SW5mb31cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdHlwZV0gZWcgKGdsLlRSSUFOR0xFUywgZ2wuTElORVMsIGdsLlBPSU5UUywgZ2wuVFJJQU5HTEVfU1RSSVAsIC4uLikuIERlZmF1bHRzIHRvIGBnbC5UUklBTkdMRVNgXG4gKiBAcGFyYW0ge251bWJlcn0gW2NvdW50XSBBbiBvcHRpb25hbCBjb3VudC4gRGVmYXVsdHMgdG8gYnVmZmVySW5mby5udW1FbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdIEFuIG9wdGlvbmFsIG9mZnNldC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5zdGFuY2VDb3VudF0gQW4gb3B0aW9uYWwgaW5zdGFuY2VDb3VudC4gaWYgc2V0IHRoZW4gYGRyYXdBcnJheXNJbnN0YW5jZWRgIG9yIGBkcmF3RWxlbWVudHNJbnN0YW5jZWRgIHdpbGwgYmUgY2FsbGVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZHJhd1xuICovXG5cbmZ1bmN0aW9uIGRyYXdCdWZmZXJJbmZvKGdsLCBidWZmZXJJbmZvLCB0eXBlLCBjb3VudCwgb2Zmc2V0LCBpbnN0YW5jZUNvdW50KSB7XG4gIHR5cGUgPSB0eXBlID09PSB1bmRlZmluZWQgPyBUUklBTkdMRVMgOiB0eXBlO1xuICB2YXIgaW5kaWNlcyA9IGJ1ZmZlckluZm8uaW5kaWNlcztcbiAgdmFyIGVsZW1lbnRUeXBlID0gYnVmZmVySW5mby5lbGVtZW50VHlwZTtcbiAgdmFyIG51bUVsZW1lbnRzID0gY291bnQgPT09IHVuZGVmaW5lZCA/IGJ1ZmZlckluZm8ubnVtRWxlbWVudHMgOiBjb3VudDtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID09PSB1bmRlZmluZWQgPyAwIDogb2Zmc2V0O1xuXG4gIGlmIChlbGVtZW50VHlwZSB8fCBpbmRpY2VzKSB7XG4gICAgaWYgKGluc3RhbmNlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2wuZHJhd0VsZW1lbnRzSW5zdGFuY2VkKHR5cGUsIG51bUVsZW1lbnRzLCBlbGVtZW50VHlwZSA9PT0gdW5kZWZpbmVkID8gVU5TSUdORURfU0hPUlQgOiBidWZmZXJJbmZvLmVsZW1lbnRUeXBlLCBvZmZzZXQsIGluc3RhbmNlQ291bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbC5kcmF3RWxlbWVudHModHlwZSwgbnVtRWxlbWVudHMsIGVsZW1lbnRUeXBlID09PSB1bmRlZmluZWQgPyBVTlNJR05FRF9TSE9SVCA6IGJ1ZmZlckluZm8uZWxlbWVudFR5cGUsIG9mZnNldCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpbnN0YW5jZUNvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdsLmRyYXdBcnJheXNJbnN0YW5jZWQodHlwZSwgb2Zmc2V0LCBudW1FbGVtZW50cywgaW5zdGFuY2VDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmRyYXdBcnJheXModHlwZSwgb2Zmc2V0LCBudW1FbGVtZW50cyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEEgRHJhd09iamVjdCBpcyB1c2VmdWwgZm9yIHB1dHRpbmcgb2JqZWN0cyBpbiB0byBhbiBhcnJheSBhbmQgcGFzc2luZyB0aGVtIHRvIHtAbGluayBtb2R1bGU6dHdnbC5kcmF3T2JqZWN0TGlzdH0uXG4gKlxuICogWW91IG5lZWQgZWl0aGVyIGEgYEJ1ZmZlckluZm9gIG9yIGEgYFZlcnRleEFycmF5SW5mb2AuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gRHJhd09iamVjdFxuICogQHByb3BlcnR5IHtib29sZWFufSBbYWN0aXZlXSB3aGV0aGVyIG9yIG5vdCB0byBkcmF3LiBEZWZhdWx0ID0gYHRydWVgIChtdXN0IGJlIGBmYWxzZWAgdG8gYmUgbm90IHRydWUpLiBJbiBvdGhlciB3b3JkcyBgdW5kZWZpbmVkYCA9IGB0cnVlYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSB0eXBlIHRvIGRyYXcgZWcuIGBnbC5UUklBTkdMRVNgLCBgZ2wuTElORVNgLCBldGMuLi5cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IHByb2dyYW1JbmZvIEEgUHJvZ3JhbUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFtidWZmZXJJbmZvXSBBIEJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXN9XG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsLlZlcnRleEFycmF5SW5mb30gW3ZlcnRleEFycmF5SW5mb10gQSBWZXJ0ZXhBcnJheUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLCA/Pn0gdW5pZm9ybXMgVGhlIHZhbHVlcyBmb3IgdGhlIHVuaWZvcm1zLlxuICogICBZb3UgY2FuIHBhc3MgbXVsdGlwbGUgb2JqZWN0cyBieSBwdXR0aW5nIHRoZW0gaW4gYW4gYXJyYXkuIEZvciBleGFtcGxlXG4gKlxuICogICAgIHZhciBzaGFyZWRVbmlmb3JtcyA9IHtcbiAqICAgICAgIHVfZm9nTmVhcjogMTAsXG4gKiAgICAgICB1X3Byb2plY3Rpb246IC4uLlxuICogICAgICAgLi4uXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgdmFyIGxvY2FsVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3dvcmxkOiAuLi5cbiAqICAgICAgIHVfZGlmZnVzZUNvbG9yOiAuLi5cbiAqICAgICB9O1xuICpcbiAqICAgICB2YXIgZHJhd09iaiA9IHtcbiAqICAgICAgIC4uLlxuICogICAgICAgdW5pZm9ybXM6IFtzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtc10sXG4gKiAgICAgfTtcbiAqXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gdGhlIG9mZnNldCB0byBwYXNzIHRvIGBnbC5kcmF3QXJyYXlzYCBvciBgZ2wuZHJhd0VsZW1lbnRzYC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY291bnRdIHRoZSBjb3VudCB0byBwYXNzIHRvIGBnbC5kcmF3QXJyYXlzYCBvciBgZ2wuZHJhd0VsZW1lbnRzYC4gRGVmYXVsdHMgdG8gYnVmZmVySW5mby5udW1FbGVtZW50cy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaW5zdGFuY2VDb3VudF0gdGhlIG51bWJlciBvZiBpbnN0YW5jZXMuIERlZmF1bHRzIHRvIHVuZGVmaW5lZC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogRHJhd3MgYSBsaXN0IG9mIG9iamVjdHNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtEcmF3T2JqZWN0W119IG9iamVjdHNUb0RyYXcgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0byBkcmF3LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2RyYXdcbiAqL1xuXG5cbmZ1bmN0aW9uIGRyYXdPYmplY3RMaXN0KGdsLCBvYmplY3RzVG9EcmF3KSB7XG4gIHZhciBsYXN0VXNlZFByb2dyYW1JbmZvID0gbnVsbDtcbiAgdmFyIGxhc3RVc2VkQnVmZmVySW5mbyA9IG51bGw7XG4gIG9iamVjdHNUb0RyYXcuZm9yRWFjaChmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb2dyYW1JbmZvID0gb2JqZWN0LnByb2dyYW1JbmZvO1xuICAgIHZhciBidWZmZXJJbmZvID0gb2JqZWN0LnZlcnRleEFycmF5SW5mbyB8fCBvYmplY3QuYnVmZmVySW5mbztcbiAgICB2YXIgYmluZEJ1ZmZlcnMgPSBmYWxzZTtcbiAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlID09PSB1bmRlZmluZWQgPyBUUklBTkdMRVMgOiBvYmplY3QudHlwZTtcblxuICAgIGlmIChwcm9ncmFtSW5mbyAhPT0gbGFzdFVzZWRQcm9ncmFtSW5mbykge1xuICAgICAgbGFzdFVzZWRQcm9ncmFtSW5mbyA9IHByb2dyYW1JbmZvO1xuICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTsgLy8gV2UgaGF2ZSB0byByZWJpbmQgYnVmZmVycyB3aGVuIGNoYW5naW5nIHByb2dyYW1zIGJlY2F1c2Ugd2VcbiAgICAgIC8vIG9ubHkgYmluZCBidWZmZXJzIHRoZSBwcm9ncmFtIHVzZXMuIFNvIGlmIDIgcHJvZ3JhbXMgdXNlIHRoZSBzYW1lXG4gICAgICAvLyBidWZmZXJJbmZvIGJ1dCB0aGUgMXN0IG9uZSB1c2VzIG9ubHkgcG9zaXRpb25zIHRoZSB3aGVuIHRoZVxuICAgICAgLy8gd2Ugc3dpdGNoIHRvIHRoZSAybmQgb25lIHNvbWUgb2YgdGhlIGF0dHJpYnV0ZXMgd2lsbCBub3QgYmUgb24uXG5cbiAgICAgIGJpbmRCdWZmZXJzID0gdHJ1ZTtcbiAgICB9IC8vIFNldHVwIGFsbCB0aGUgbmVlZGVkIGF0dHJpYnV0ZXMuXG5cblxuICAgIGlmIChiaW5kQnVmZmVycyB8fCBidWZmZXJJbmZvICE9PSBsYXN0VXNlZEJ1ZmZlckluZm8pIHtcbiAgICAgIGlmIChsYXN0VXNlZEJ1ZmZlckluZm8gJiYgbGFzdFVzZWRCdWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0ICYmICFidWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0KSB7XG4gICAgICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgICAgIH1cblxuICAgICAgbGFzdFVzZWRCdWZmZXJJbmZvID0gYnVmZmVySW5mbztcbiAgICAgIHByb2dyYW1zLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVySW5mbyk7XG4gICAgfSAvLyBTZXQgdGhlIHVuaWZvcm1zLlxuXG5cbiAgICBwcm9ncmFtcy5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgb2JqZWN0LnVuaWZvcm1zKTsgLy8gRHJhd1xuXG4gICAgZHJhd0J1ZmZlckluZm8oZ2wsIGJ1ZmZlckluZm8sIHR5cGUsIG9iamVjdC5jb3VudCwgb2JqZWN0Lm9mZnNldCwgb2JqZWN0Lmluc3RhbmNlQ291bnQpO1xuICB9KTtcblxuICBpZiAobGFzdFVzZWRCdWZmZXJJbmZvICYmIGxhc3RVc2VkQnVmZmVySW5mby52ZXJ0ZXhBcnJheU9iamVjdCkge1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgfVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9mcmFtZWJ1ZmZlcnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2ZyYW1lYnVmZmVycy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5iaW5kRnJhbWVidWZmZXJJbmZvID0gYmluZEZyYW1lYnVmZmVySW5mbztcbmV4cG9ydHMuY3JlYXRlRnJhbWVidWZmZXJJbmZvID0gY3JlYXRlRnJhbWVidWZmZXJJbmZvO1xuZXhwb3J0cy5yZXNpemVGcmFtZWJ1ZmZlckluZm8gPSByZXNpemVGcmFtZWJ1ZmZlckluZm87XG5cbnZhciB0ZXh0dXJlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGV4dHVyZXMuanMgKi8gXCIuL3NyYy90ZXh0dXJlcy5qc1wiKSk7XG5cbnZhciBoZWxwZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlci5qcyAqLyBcIi4vc3JjL2hlbHBlci5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBGcmFtZWJ1ZmZlciByZWxhdGVkIGZ1bmN0aW9uc1xuICpcbiAqIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLmZyYW1lYnVmZmVyYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvZnJhbWVidWZmZXJzXG4gKi9cbi8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzZWUgYSBnbG9iYWwgZ2xcbnZhciBnbCA9IHVuZGVmaW5lZDtcbi8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cblxudmFyIEZSQU1FQlVGRkVSID0gMHg4ZDQwO1xudmFyIFJFTkRFUkJVRkZFUiA9IDB4OGQ0MTtcbnZhciBURVhUVVJFXzJEID0gMHgwZGUxO1xudmFyIFVOU0lHTkVEX0JZVEUgPSAweDE0MDE7XG4vKiBQaXhlbEZvcm1hdCAqL1xuXG52YXIgREVQVEhfQ09NUE9ORU5UID0gMHgxOTAyO1xudmFyIFJHQkEgPSAweDE5MDg7XG52YXIgREVQVEhfQ09NUE9ORU5UMjQgPSAweDgxYTY7XG52YXIgREVQVEhfQ09NUE9ORU5UMzJGID0gMHg4Y2FjO1xudmFyIERFUFRIMjRfU1RFTkNJTDggPSAweDg4ZjA7XG52YXIgREVQVEgzMkZfU1RFTkNJTDggPSAweDhjYWQ7XG4vKiBGcmFtZWJ1ZmZlciBPYmplY3QuICovXG5cbnZhciBSR0JBNCA9IDB4ODA1NjtcbnZhciBSR0I1X0ExID0gMHg4MDU3O1xudmFyIFJHQjU2NSA9IDB4OEQ2MjtcbnZhciBERVBUSF9DT01QT05FTlQxNiA9IDB4ODFBNTtcbnZhciBTVEVOQ0lMX0lOREVYID0gMHgxOTAxO1xudmFyIFNURU5DSUxfSU5ERVg4ID0gMHg4RDQ4O1xudmFyIERFUFRIX1NURU5DSUwgPSAweDg0Rjk7XG52YXIgQ09MT1JfQVRUQUNITUVOVDAgPSAweDhDRTA7XG52YXIgREVQVEhfQVRUQUNITUVOVCA9IDB4OEQwMDtcbnZhciBTVEVOQ0lMX0FUVEFDSE1FTlQgPSAweDhEMjA7XG52YXIgREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UID0gMHg4MjFBO1xuLyogVGV4dHVyZVdyYXBNb2RlICovXG5cbnZhciBDTEFNUF9UT19FREdFID0gMHg4MTJGO1xuLyogVGV4dHVyZU1hZ0ZpbHRlciAqL1xuXG52YXIgTElORUFSID0gMHgyNjAxO1xuLyoqXG4gKiBUaGUgb3B0aW9ucyBmb3IgYSBmcmFtZWJ1ZmZlciBhdHRhY2htZW50LlxuICpcbiAqIE5vdGU6IEZvciBhIGBmb3JtYXRgIHRoYXQgaXMgYSB0ZXh0dXJlIGluY2x1ZGUgYWxsIHRoZSB0ZXh0dXJlXG4gKiBvcHRpb25zIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBmb3IgZXhhbXBsZVxuICogYG1pbmAsIGBtYWdgLCBgY2xhbXBgLCBldGMuLi4gTm90ZSB0aGF0IHVubGlrZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9XG4gKiBgYXV0b2AgZGVmYXVsdHMgdG8gYGZhbHNlYCBmb3IgYXR0YWNobWVudCB0ZXh0dXJlcyBidXQgYG1pbmAgYW5kIGBtYWdgIGRlZmF1bHRcbiAqIHRvIGBnbC5MSU5FQVJgIGFuZCBgd3JhcGAgZGVmYXVsdHMgdG8gYENMQU1QX1RPX0VER0VgXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gQXR0YWNobWVudE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYXR0YWNobWVudFBvaW50XSBUaGUgYXR0YWNobWVudCBwb2ludC4gRGVmYXVsdHNcbiAqICAgdG8gYGdsLkNPTE9SX0FUVEFDSE1FTlQwICsgbmR4YCB1bmxlc3MgdHlwZSBpcyBhIGRlcHRoIG9yIHN0ZW5jaWwgdHlwZVxuICogICB0aGVuIGl0J3MgZ2wuREVQVEhfQVRUQUNITUVOVCBvciBgZ2wuREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UYCBkZXBlbmRpbmdcbiAqICAgb24gdGhlIGZvcm1hdCBvciBhdHRhY2htZW50IHR5cGUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Zvcm1hdF0gVGhlIGZvcm1hdC4gSWYgb25lIG9mIGBnbC5SR0JBNGAsXG4gKiAgIGBnbC5SR0I1NjVgLCBgZ2wuUkdCNV9BMWAsIGBnbC5ERVBUSF9DT01QT05FTlQxNmAsXG4gKiAgIGBnbC5TVEVOQ0lMX0lOREVYOGAgb3IgYGdsLkRFUFRIX1NURU5DSUxgIHRoZW4gd2lsbCBjcmVhdGUgYVxuICogICByZW5kZXJidWZmZXIuIE90aGVyd2lzZSB3aWxsIGNyZWF0ZSBhIHRleHR1cmUuIERlZmF1bHQgPSBgZ2wuUkdCQWBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHlwZV0gVGhlIHR5cGUuIFVzZWQgZm9yIHRleHR1cmUuIERlZmF1bHQgPSBgZ2wuVU5TSUdORURfQllURWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3RhcmdldF0gVGhlIHRleHR1cmUgdGFyZ2V0IGZvciBgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkRgLlxuICogICBEZWZhdWx0cyB0byBgZ2wuVEVYVFVSRV8yRGAuIFNldCB0byBhcHByb3ByaWF0ZSBmYWNlIGZvciBjdWJlIG1hcHMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xldmVsXSBsZXZlbCBmb3IgYGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEYC4gRGVmYXVsdHMgdG8gMC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGF5ZXJdIGxheWVyIGZvciBgZ2wuZnJhbWVidWZmZXJUZXh0dXJlTGF5ZXJgLiBEZWZhdWx0cyB0byB1bmRlZmluZWQuXG4gKiAgIElmIHNldCB0aGVuIGBnbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcmAgaXMgY2FsbGVkLCBpZiBub3QgdGhlbiBgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkRgXG4gKiBAcHJvcGVydHkge1dlYkdMT2JqZWN0fSBbYXR0YWNobWVudF0gQW4gZXhpc3RpbmcgcmVuZGVyYnVmZmVyIG9yIHRleHR1cmUuXG4gKiAgICBJZiBwcm92aWRlZCB3aWxsIGF0dGFjaCB0aGlzIE9iamVjdC4gVGhpcyBhbGxvd3MgeW91IHRvIHNoYXJlXG4gKiAgICBhdHRhY2htZW50cyBhY3Jvc3MgZnJhbWVidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKiBAbWl4ZXMgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnNcbiAqL1xuXG52YXIgZGVmYXVsdEF0dGFjaG1lbnRzID0gW3tcbiAgZm9ybWF0OiBSR0JBLFxuICB0eXBlOiBVTlNJR05FRF9CWVRFLFxuICBtaW46IExJTkVBUixcbiAgd3JhcDogQ0xBTVBfVE9fRURHRVxufSwge1xuICBmb3JtYXQ6IERFUFRIX1NURU5DSUxcbn1dO1xudmFyIGF0dGFjaG1lbnRzQnlGb3JtYXQgPSB7fTtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEhfU1RFTkNJTF0gPSBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W1NURU5DSUxfSU5ERVhdID0gU1RFTkNJTF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtTVEVOQ0lMX0lOREVYOF0gPSBTVEVOQ0lMX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIX0NPTVBPTkVOVF0gPSBERVBUSF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSF9DT01QT05FTlQxNl0gPSBERVBUSF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSF9DT01QT05FTlQyNF0gPSBERVBUSF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSF9DT01QT05FTlQzMkZdID0gREVQVEhfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEgyNF9TVEVOQ0lMOF0gPSBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIMzJGX1NURU5DSUw4XSA9IERFUFRIX1NURU5DSUxfQVRUQUNITUVOVDtcblxuZnVuY3Rpb24gZ2V0QXR0YWNobWVudFBvaW50Rm9yRm9ybWF0KGZvcm1hdCwgaW50ZXJuYWxGb3JtYXQpIHtcbiAgcmV0dXJuIGF0dGFjaG1lbnRzQnlGb3JtYXRbZm9ybWF0XSB8fCBhdHRhY2htZW50c0J5Rm9ybWF0W2ludGVybmFsRm9ybWF0XTtcbn1cblxudmFyIHJlbmRlcmJ1ZmZlckZvcm1hdHMgPSB7fTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbUkdCQTRdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbUkdCNV9BMV0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tSR0I1NjVdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbREVQVEhfU1RFTkNJTF0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tERVBUSF9DT01QT05FTlQxNl0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tTVEVOQ0lMX0lOREVYXSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW1NURU5DSUxfSU5ERVg4XSA9IHRydWU7XG5cbmZ1bmN0aW9uIGlzUmVuZGVyYnVmZmVyRm9ybWF0KGZvcm1hdCkge1xuICByZXR1cm4gcmVuZGVyYnVmZmVyRm9ybWF0c1tmb3JtYXRdO1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGcmFtZWJ1ZmZlckluZm9cbiAqIEBwcm9wZXJ0eSB7V2ViR0xGcmFtZWJ1ZmZlcn0gZnJhbWVidWZmZXIgVGhlIFdlYkdMRnJhbWVidWZmZXIgZm9yIHRoaXMgZnJhbWVidWZmZXJJbmZvXG4gKiBAcHJvcGVydHkge1dlYkdMT2JqZWN0W119IGF0dGFjaG1lbnRzIFRoZSBjcmVhdGVkIGF0dGFjaG1lbnRzIGluIHRoZSBzYW1lIG9yZGVyIGFzIHBhc3NlZCBpbiB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIGZyYW1lYnVmZmVyIGFuZCBpdHMgYXR0YWNobWVudHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBoZWlnaHQgVGhlIHdpZHRoIG9mIHRoZSBmcmFtZWJ1ZmZlciBhbmQgaXRzIGF0dGFjaG1lbnRzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmcmFtZWJ1ZmZlciBhbmQgYXR0YWNobWVudHMuXG4gKlxuICogVGhpcyByZXR1cm5zIGEge0BsaW5rIG1vZHVsZTp0d2dsLkZyYW1lYnVmZmVySW5mb30gYmVjYXVzZSBpdCBuZWVkcyB0byByZXR1cm4gdGhlIGF0dGFjaG1lbnRzIGFzIHdlbGwgYXMgdGhlIGZyYW1lYnVmZmVyLlxuICpcbiAqIFRoZSBzaW1wbGVzdCB1c2FnZVxuICpcbiAqICAgICAvLyBjcmVhdGUgYW4gUkdCQS9VTlNJR05FRF9CWVRFIHRleHR1cmUgYW5kIERFUFRIX1NURU5DSUwgcmVuZGVyYnVmZmVyXG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wpO1xuICpcbiAqIE1vcmUgY29tcGxleCB1c2FnZVxuICpcbiAqICAgICAvLyBjcmVhdGUgYW4gUkdCNTY1IHJlbmRlcmJ1ZmZlciBhbmQgYSBTVEVOQ0lMX0lOREVYOCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBhdHRhY2htZW50cyA9IFtcbiAqICAgICAgIHsgZm9ybWF0OiBSR0I1NjUsIG1hZzogTkVBUkVTVCB9LFxuICogICAgICAgeyBmb3JtYXQ6IFNURU5DSUxfSU5ERVg4IH0sXG4gKiAgICAgXVxuICogICAgIGNvbnN0IGZiaSA9IHR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsLCBhdHRhY2htZW50cyk7XG4gKlxuICogUGFzc2luZyBpbiBhIHNwZWNpZmljIHNpemVcbiAqXG4gKiAgICAgY29uc3Qgd2lkdGggPSAyNTY7XG4gKiAgICAgY29uc3QgaGVpZ2h0ID0gMjU2O1xuICogICAgIGNvbnN0IGZiaSA9IHR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsLCBhdHRhY2htZW50cywgd2lkdGgsIGhlaWdodCk7XG4gKlxuICogKipOb3RlISEqKiBJdCBpcyB1cCB0byB5b3UgdG8gY2hlY2sgaWYgdGhlIGZyYW1lYnVmZmVyIGlzIHJlbmRlcmFibGUgYnkgY2FsbGluZyBgZ2wuY2hlY2tGcmFtZWJ1ZmZlclN0YXR1c2AuXG4gKiBbV2ViR0wxIG9ubHkgZ3VhcmFudGVlcyAzIGNvbWJpbmF0aW9ucyBvZiBhdHRhY2htZW50cyB3b3JrXShodHRwczovL3d3dy5raHJvbm9zLm9yZy9yZWdpc3RyeS93ZWJnbC9zcGVjcy9sYXRlc3QvMS4wLyM2LjYpLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkF0dGFjaG1lbnRPcHRpb25zW119IFthdHRhY2htZW50c10gd2hpY2ggYXR0YWNobWVudHMgdG8gY3JlYXRlLiBJZiBub3QgcHJvdmlkZWQgdGhlIGRlZmF1bHQgaXMgYSBmcmFtZWJ1ZmZlciB3aXRoIGFuXG4gKiAgICBgUkdCQWAsIGBVTlNJR05FRF9CWVRFYCB0ZXh0dXJlIGBDT0xPUl9BVFRBQ0hNRU5UMGAgYW5kIGEgYERFUFRIX1NURU5DSUxgIHJlbmRlcmJ1ZmZlciBgREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHRoZSB3aWR0aCBmb3IgdGhlIGF0dGFjaG1lbnRzLiBEZWZhdWx0ID0gc2l6ZSBvZiBkcmF3aW5nQnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gdGhlIGhlaWdodCBmb3IgdGhlIGF0dGFjaG1lbnRzLiBEZWZhdWx0ID0gc2l6ZSBvZiBkcmF3aW5nQnVmZmVyXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5GcmFtZWJ1ZmZlckluZm99IHRoZSBmcmFtZWJ1ZmZlciBhbmQgYXR0YWNobWVudHMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzLCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHZhciB0YXJnZXQgPSBGUkFNRUJVRkZFUjtcbiAgdmFyIGZiID0gZ2wuY3JlYXRlRnJhbWVidWZmZXIoKTtcbiAgZ2wuYmluZEZyYW1lYnVmZmVyKHRhcmdldCwgZmIpO1xuICB3aWR0aCA9IHdpZHRoIHx8IGdsLmRyYXdpbmdCdWZmZXJXaWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XG4gIGF0dGFjaG1lbnRzID0gYXR0YWNobWVudHMgfHwgZGVmYXVsdEF0dGFjaG1lbnRzO1xuICB2YXIgY29sb3JBdHRhY2htZW50Q291bnQgPSAwO1xuICB2YXIgZnJhbWVidWZmZXJJbmZvID0ge1xuICAgIGZyYW1lYnVmZmVyOiBmYixcbiAgICBhdHRhY2htZW50czogW10sXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG4gIGF0dGFjaG1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGF0dGFjaG1lbnRPcHRpb25zKSB7XG4gICAgdmFyIGF0dGFjaG1lbnQgPSBhdHRhY2htZW50T3B0aW9ucy5hdHRhY2htZW50O1xuICAgIHZhciBmb3JtYXQgPSBhdHRhY2htZW50T3B0aW9ucy5mb3JtYXQ7XG4gICAgdmFyIGF0dGFjaG1lbnRQb2ludCA9IGF0dGFjaG1lbnRPcHRpb25zLmF0dGFjaG1lbnRQb2ludCB8fCBnZXRBdHRhY2htZW50UG9pbnRGb3JGb3JtYXQoZm9ybWF0LCBhdHRhY2htZW50T3B0aW9ucy5pbnRlcm5hbEZvcm1hdCk7XG5cbiAgICBpZiAoIWF0dGFjaG1lbnRQb2ludCkge1xuICAgICAgYXR0YWNobWVudFBvaW50ID0gQ09MT1JfQVRUQUNITUVOVDAgKyBjb2xvckF0dGFjaG1lbnRDb3VudCsrO1xuICAgIH1cblxuICAgIGlmICghYXR0YWNobWVudCkge1xuICAgICAgaWYgKGlzUmVuZGVyYnVmZmVyRm9ybWF0KGZvcm1hdCkpIHtcbiAgICAgICAgYXR0YWNobWVudCA9IGdsLmNyZWF0ZVJlbmRlcmJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKFJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgICAgIGdsLnJlbmRlcmJ1ZmZlclN0b3JhZ2UoUkVOREVSQlVGRkVSLCBmb3JtYXQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRleHR1cmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYXR0YWNobWVudE9wdGlvbnMpO1xuICAgICAgICB0ZXh0dXJlT3B0aW9ucy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0ZXh0dXJlT3B0aW9ucy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRleHR1cmVPcHRpb25zLmF1dG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRleHR1cmVPcHRpb25zLmF1dG8gPSBmYWxzZTtcbiAgICAgICAgICB0ZXh0dXJlT3B0aW9ucy5taW4gPSB0ZXh0dXJlT3B0aW9ucy5taW4gfHwgdGV4dHVyZU9wdGlvbnMubWluTWFnIHx8IExJTkVBUjtcbiAgICAgICAgICB0ZXh0dXJlT3B0aW9ucy5tYWcgPSB0ZXh0dXJlT3B0aW9ucy5tYWcgfHwgdGV4dHVyZU9wdGlvbnMubWluTWFnIHx8IExJTkVBUjtcbiAgICAgICAgICB0ZXh0dXJlT3B0aW9ucy53cmFwUyA9IHRleHR1cmVPcHRpb25zLndyYXBTIHx8IHRleHR1cmVPcHRpb25zLndyYXAgfHwgQ0xBTVBfVE9fRURHRTtcbiAgICAgICAgICB0ZXh0dXJlT3B0aW9ucy53cmFwVCA9IHRleHR1cmVPcHRpb25zLndyYXBUIHx8IHRleHR1cmVPcHRpb25zLndyYXAgfHwgQ0xBTVBfVE9fRURHRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dGFjaG1lbnQgPSB0ZXh0dXJlcy5jcmVhdGVUZXh0dXJlKGdsLCB0ZXh0dXJlT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhlbHBlci5pc1JlbmRlcmJ1ZmZlcihnbCwgYXR0YWNobWVudCkpIHtcbiAgICAgIGdsLmZyYW1lYnVmZmVyUmVuZGVyYnVmZmVyKHRhcmdldCwgYXR0YWNobWVudFBvaW50LCBSRU5ERVJCVUZGRVIsIGF0dGFjaG1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaGVscGVyLmlzVGV4dHVyZShnbCwgYXR0YWNobWVudCkpIHtcbiAgICAgIGlmIChhdHRhY2htZW50T3B0aW9ucy5sYXllciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZUxheWVyKHRhcmdldCwgYXR0YWNobWVudFBvaW50LCBhdHRhY2htZW50LCBhdHRhY2htZW50T3B0aW9ucy5sZXZlbCB8fCAwLCBhdHRhY2htZW50T3B0aW9ucy5sYXllcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRCh0YXJnZXQsIGF0dGFjaG1lbnRQb2ludCwgYXR0YWNobWVudE9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQsIGF0dGFjaG1lbnQsIGF0dGFjaG1lbnRPcHRpb25zLmxldmVsIHx8IDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYXR0YWNobWVudCB0eXBlJyk7XG4gICAgfVxuXG4gICAgZnJhbWVidWZmZXJJbmZvLmF0dGFjaG1lbnRzLnB1c2goYXR0YWNobWVudCk7XG4gIH0pO1xuICByZXR1cm4gZnJhbWVidWZmZXJJbmZvO1xufVxuLyoqXG4gKiBSZXNpemVzIHRoZSBhdHRhY2htZW50cyBvZiBhIGZyYW1lYnVmZmVyLlxuICpcbiAqIFlvdSBuZWVkIHRvIHBhc3MgaW4gdGhlIHNhbWUgYGF0dGFjaG1lbnRzYCBhcyB5b3UgcGFzc2VkIGluIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99XG4gKiBiZWNhdXNlIFRXR0wgaGFzIG5vIGlkZWEgdGhlIGZvcm1hdC90eXBlIG9mIGVhY2ggYXR0YWNobWVudC5cbiAqXG4gKiBUaGUgc2ltcGxlc3QgdXNhZ2VcbiAqXG4gKiAgICAgLy8gY3JlYXRlIGFuIFJHQkEvVU5TSUdORURfQllURSB0ZXh0dXJlIGFuZCBERVBUSF9TVEVOQ0lMIHJlbmRlcmJ1ZmZlclxuICogICAgIGNvbnN0IGZiaSA9IHR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsKTtcbiAqXG4gKiAgICAgLi4uXG4gKlxuICogICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAqICAgICAgIGlmICh0d2dsLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKSkge1xuICogICAgICAgICAvLyByZXNpemUgdGhlIGF0dGFjaG1lbnRzXG4gKiAgICAgICAgIHR3Z2wucmVzaXplRnJhbWVidWZmZXJJbmZvKGdsLCBmYmkpO1xuICogICAgICAgfVxuICpcbiAqIE1vcmUgY29tcGxleCB1c2FnZVxuICpcbiAqICAgICAvLyBjcmVhdGUgYW4gUkdCNTY1IHJlbmRlcmJ1ZmZlciBhbmQgYSBTVEVOQ0lMX0lOREVYOCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBhdHRhY2htZW50cyA9IFtcbiAqICAgICAgIHsgZm9ybWF0OiBSR0I1NjUsIG1hZzogTkVBUkVTVCB9LFxuICogICAgICAgeyBmb3JtYXQ6IFNURU5DSUxfSU5ERVg4IH0sXG4gKiAgICAgXVxuICogICAgIGNvbnN0IGZiaSA9IHR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvKGdsLCBhdHRhY2htZW50cyk7XG4gKlxuICogICAgIC4uLlxuICpcbiAqICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gKiAgICAgICBpZiAodHdnbC5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKGdsLmNhbnZhcykpIHtcbiAqICAgICAgICAgLy8gcmVzaXplIHRoZSBhdHRhY2htZW50cyB0byBtYXRjaFxuICogICAgICAgICB0d2dsLnJlc2l6ZUZyYW1lYnVmZmVySW5mbyhnbCwgZmJpLCBhdHRhY2htZW50cyk7XG4gKiAgICAgICB9XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfSBmcmFtZWJ1ZmZlckluZm8gYSBmcmFtZWJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXR0YWNobWVudE9wdGlvbnNbXX0gW2F0dGFjaG1lbnRzXSB0aGUgc2FtZSBhdHRhY2htZW50cyBvcHRpb25zIGFzIHBhc3NlZCB0byB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlRnJhbWVidWZmZXJJbmZvfS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHRoZSB3aWR0aCBmb3IgdGhlIGF0dGFjaG1lbnRzLiBEZWZhdWx0ID0gc2l6ZSBvZiBkcmF3aW5nQnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gdGhlIGhlaWdodCBmb3IgdGhlIGF0dGFjaG1lbnRzLiBEZWZhdWx0ID0gc2l6ZSBvZiBkcmF3aW5nQnVmZmVyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzXG4gKi9cblxuXG5mdW5jdGlvbiByZXNpemVGcmFtZWJ1ZmZlckluZm8oZ2wsIGZyYW1lYnVmZmVySW5mbywgYXR0YWNobWVudHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgd2lkdGggPSB3aWR0aCB8fCBnbC5kcmF3aW5nQnVmZmVyV2lkdGg7XG4gIGhlaWdodCA9IGhlaWdodCB8fCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0O1xuICBmcmFtZWJ1ZmZlckluZm8ud2lkdGggPSB3aWR0aDtcbiAgZnJhbWVidWZmZXJJbmZvLmhlaWdodCA9IGhlaWdodDtcbiAgYXR0YWNobWVudHMgPSBhdHRhY2htZW50cyB8fCBkZWZhdWx0QXR0YWNobWVudHM7XG4gIGF0dGFjaG1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGF0dGFjaG1lbnRPcHRpb25zLCBuZHgpIHtcbiAgICB2YXIgYXR0YWNobWVudCA9IGZyYW1lYnVmZmVySW5mby5hdHRhY2htZW50c1tuZHhdO1xuICAgIHZhciBmb3JtYXQgPSBhdHRhY2htZW50T3B0aW9ucy5mb3JtYXQ7XG5cbiAgICBpZiAoaGVscGVyLmlzUmVuZGVyYnVmZmVyKGdsLCBhdHRhY2htZW50KSkge1xuICAgICAgZ2wuYmluZFJlbmRlcmJ1ZmZlcihSRU5ERVJCVUZGRVIsIGF0dGFjaG1lbnQpO1xuICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShSRU5ERVJCVUZGRVIsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIGlmIChoZWxwZXIuaXNUZXh0dXJlKGdsLCBhdHRhY2htZW50KSkge1xuICAgICAgdGV4dHVyZXMucmVzaXplVGV4dHVyZShnbCwgYXR0YWNobWVudCwgYXR0YWNobWVudE9wdGlvbnMsIHdpZHRoLCBoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYXR0YWNobWVudCB0eXBlJyk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogQmluZHMgYSBmcmFtZWJ1ZmZlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcHJldHR5IG11Y2ggc29sZWx5IGV4aXN0cyBiZWNhdXNlIEkgc3BlbnQgaG91cnNcbiAqIHRyeWluZyB0byBmaWd1cmUgb3V0IHdoeSBzb21ldGhpbmcgSSB3cm90ZSB3YXNuJ3Qgd29ya2luZyBvbmx5XG4gKiB0byByZWFsaXplIEkgZm9yZ2V0IHRvIHNldCB0aGUgdmlld3BvcnQgZGltZW5zaW9ucy5cbiAqIE15IGhvcGUgaXMgdGhpcyBmdW5jdGlvbiB3aWxsIGZpeCB0aGF0LlxuICpcbiAqIEl0IGlzIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzXG4gKlxuICogICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgc29tZUZyYW1lYnVmZmVySW5mby5mcmFtZWJ1ZmZlcik7XG4gKiAgICAgZ2wudmlld3BvcnQoMCwgMCwgc29tZUZyYW1lYnVmZmVySW5mby53aWR0aCwgc29tZUZyYW1lYnVmZmVySW5mby5oZWlnaHQpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkZyYW1lYnVmZmVySW5mb3xudWxsfSBbZnJhbWVidWZmZXJJbmZvXSBhIGZyYW1lYnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99LlxuICogICBJZiBmYWxzeSB3aWxsIGJpbmQgdGhlIGNhbnZhcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFyZ2V0XSBUaGUgdGFyZ2V0LiBJZiBub3QgcGFzc2VkIGBnbC5GUkFNRUJVRkZFUmAgd2lsbCBiZSB1c2VkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVyc1xuICovXG5cblxuZnVuY3Rpb24gYmluZEZyYW1lYnVmZmVySW5mbyhnbCwgZnJhbWVidWZmZXJJbmZvLCB0YXJnZXQpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0IHx8IEZSQU1FQlVGRkVSO1xuXG4gIGlmIChmcmFtZWJ1ZmZlckluZm8pIHtcbiAgICBnbC5iaW5kRnJhbWVidWZmZXIodGFyZ2V0LCBmcmFtZWJ1ZmZlckluZm8uZnJhbWVidWZmZXIpO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGZyYW1lYnVmZmVySW5mby53aWR0aCwgZnJhbWVidWZmZXJJbmZvLmhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKHRhcmdldCwgbnVsbCk7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KTtcbiAgfVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9oZWxwZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2hlbHBlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29weUV4aXN0aW5nUHJvcGVydGllcyA9IGNvcHlFeGlzdGluZ1Byb3BlcnRpZXM7XG5leHBvcnRzLmNvcHlOYW1lZFByb3BlcnRpZXMgPSBjb3B5TmFtZWRQcm9wZXJ0aWVzO1xuZXhwb3J0cy5lcnJvciA9IGVycm9yO1xuZXhwb3J0cy53YXJuID0gd2FybjtcbmV4cG9ydHMuaXNCdWZmZXIgPSBpc0J1ZmZlcjtcbmV4cG9ydHMuaXNSZW5kZXJidWZmZXIgPSBpc1JlbmRlcmJ1ZmZlcjtcbmV4cG9ydHMuaXNTaGFkZXIgPSBpc1NoYWRlcjtcbmV4cG9ydHMuaXNUZXh0dXJlID0gaXNUZXh0dXJlO1xuZXhwb3J0cy5pc1NhbXBsZXIgPSBpc1NhbXBsZXI7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyogZXNsaW50IG5vLWNvbnNvbGU6IFwib2ZmXCIgKi9cblxuLyoqXG4gKiBDb3B5IG5hbWVkIHByb3BlcnRpZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBuYW1lcyBuYW1lcyBvZiBwcm9wZXJ0aWVzIHRvIGNvcHlcbiAqIEBwYXJhbSB7b2JqZWN0fSBzcmMgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge29iamVjdH0gZHN0IG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNvcHlOYW1lZFByb3BlcnRpZXMobmFtZXMsIHNyYywgZHN0KSB7XG4gIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSBzcmNbbmFtZV07XG5cbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZHN0W25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgdG8gZGVzdCBvbmx5IGlmIGEgbWF0Y2hpbmcga2V5IGlzIGluIGRlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gc3JjIHRoZSBzb3VyY2VcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSBkc3QgdGhlIGRlc3RcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjb3B5RXhpc3RpbmdQcm9wZXJ0aWVzKHNyYywgZHN0KSB7XG4gIE9iamVjdC5rZXlzKGRzdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGRzdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAvKiBlc2xpbnQgbm8tcHJvdG90eXBlLWJ1aWx0aW5zOiAwICovXG4gICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVycm9yKCkge1xuICB2YXIgX2NvbnNvbGU7XG5cbiAgKF9jb25zb2xlID0gY29uc29sZSkuZXJyb3IuYXBwbHkoX2NvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHdhcm4oKSB7XG4gIHZhciBfY29uc29sZTI7XG5cbiAgKF9jb25zb2xlMiA9IGNvbnNvbGUpLndhcm4uYXBwbHkoX2NvbnNvbGUyLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlcihnbCwgdCkge1xuICByZXR1cm4gdHlwZW9mIFdlYkdMQnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB0IGluc3RhbmNlb2YgV2ViR0xCdWZmZXI7XG59XG5cbmZ1bmN0aW9uIGlzUmVuZGVyYnVmZmVyKGdsLCB0KSB7XG4gIHJldHVybiB0eXBlb2YgV2ViR0xSZW5kZXJidWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHQgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gaXNTaGFkZXIoZ2wsIHQpIHtcbiAgcmV0dXJuIHR5cGVvZiBXZWJHTFNoYWRlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdCBpbnN0YW5jZW9mIFdlYkdMU2hhZGVyO1xufVxuXG5mdW5jdGlvbiBpc1RleHR1cmUoZ2wsIHQpIHtcbiAgcmV0dXJuIHR5cGVvZiBXZWJHTFRleHR1cmUgIT09ICd1bmRlZmluZWQnICYmIHQgaW5zdGFuY2VvZiBXZWJHTFRleHR1cmU7XG59XG5cbmZ1bmN0aW9uIGlzU2FtcGxlcihnbCwgdCkge1xuICByZXR1cm4gdHlwZW9mIFdlYkdMU2FtcGxlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdCBpbnN0YW5jZW9mIFdlYkdMU2FtcGxlcjtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbTQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbTQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5heGlzUm90YXRlID0gYXhpc1JvdGF0ZTtcbmV4cG9ydHMuYXhpc1JvdGF0aW9uID0gYXhpc1JvdGF0aW9uO1xuZXhwb3J0cy5jb3B5ID0gY29weTtcbmV4cG9ydHMuZnJ1c3R1bSA9IGZydXN0dW07XG5leHBvcnRzLmdldEF4aXMgPSBnZXRBeGlzO1xuZXhwb3J0cy5nZXRUcmFuc2xhdGlvbiA9IGdldFRyYW5zbGF0aW9uO1xuZXhwb3J0cy5pZGVudGl0eSA9IGlkZW50aXR5O1xuZXhwb3J0cy5pbnZlcnNlID0gaW52ZXJzZTtcbmV4cG9ydHMubG9va0F0ID0gbG9va0F0O1xuZXhwb3J0cy5tdWx0aXBseSA9IG11bHRpcGx5O1xuZXhwb3J0cy5uZWdhdGUgPSBuZWdhdGU7XG5leHBvcnRzLm9ydGhvID0gb3J0aG87XG5leHBvcnRzLnBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmU7XG5leHBvcnRzLnJvdGF0ZVggPSByb3RhdGVYO1xuZXhwb3J0cy5yb3RhdGVZID0gcm90YXRlWTtcbmV4cG9ydHMucm90YXRlWiA9IHJvdGF0ZVo7XG5leHBvcnRzLnJvdGF0aW9uWCA9IHJvdGF0aW9uWDtcbmV4cG9ydHMucm90YXRpb25ZID0gcm90YXRpb25ZO1xuZXhwb3J0cy5yb3RhdGlvblogPSByb3RhdGlvblo7XG5leHBvcnRzLnNjYWxlID0gc2NhbGU7XG5leHBvcnRzLnNjYWxpbmcgPSBzY2FsaW5nO1xuZXhwb3J0cy5zZXRBeGlzID0gc2V0QXhpcztcbmV4cG9ydHMuc2V0RGVmYXVsdFR5cGUgPSBzZXREZWZhdWx0VHlwZTtcbmV4cG9ydHMuc2V0VHJhbnNsYXRpb24gPSBzZXRUcmFuc2xhdGlvbjtcbmV4cG9ydHMudHJhbnNmb3JtRGlyZWN0aW9uID0gdHJhbnNmb3JtRGlyZWN0aW9uO1xuZXhwb3J0cy50cmFuc2Zvcm1Ob3JtYWwgPSB0cmFuc2Zvcm1Ob3JtYWw7XG5leHBvcnRzLnRyYW5zZm9ybVBvaW50ID0gdHJhbnNmb3JtUG9pbnQ7XG5leHBvcnRzLnRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcbmV4cG9ydHMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbmV4cG9ydHMudHJhbnNwb3NlID0gdHJhbnNwb3NlO1xuXG52YXIgdjMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3YzLmpzICovIFwiLi9zcmMvdjMuanNcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogNHg0IE1hdHJpeCBtYXRoIG1hdGggZnVuY3Rpb25zLlxuICpcbiAqIEFsbW9zdCBhbGwgZnVuY3Rpb25zIHRha2UgYW4gb3B0aW9uYWwgYGRzdGAgYXJndW1lbnQuIElmIGl0IGlzIG5vdCBwYXNzZWQgaW4gdGhlXG4gKiBmdW5jdGlvbnMgd2lsbCBjcmVhdGUgYSBuZXcgbWF0cml4LiBJbiBvdGhlciB3b3JkcyB5b3UgY2FuIGRvIHRoaXNcbiAqXG4gKiAgICAgY29uc3QgbWF0ID0gbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTsgIC8vIENyZWF0ZXMgYSBuZXcgdHJhbnNsYXRpb24gbWF0cml4XG4gKlxuICogb3JcbiAqXG4gKiAgICAgY29uc3QgbWF0ID0gbTQuY3JlYXRlKCk7XG4gKiAgICAgbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdLCBtYXQpOyAgLy8gUHV0cyB0cmFuc2xhdGlvbiBtYXRyaXggaW4gbWF0LlxuICpcbiAqIFRoZSBmaXJzdCBzdHlsZSBpcyBvZnRlbiBlYXNpZXIgYnV0IGRlcGVuZGluZyBvbiB3aGVyZSBpdCdzIHVzZWQgaXQgZ2VuZXJhdGVzIGdhcmJhZ2Ugd2hlcmVcbiAqIGFzIHRoZXJlIGlzIGFsbW9zdCBuZXZlciBhbGxvY2F0aW9uIHdpdGggdGhlIHNlY29uZCBzdHlsZS5cbiAqXG4gKiBJdCBpcyBhbHdheXMgc2F2ZSB0byBwYXNzIGFueSBtYXRyaXggYXMgdGhlIGRlc3RpbmF0aW9uLiBTbyBmb3IgZXhhbXBsZVxuICpcbiAqICAgICBjb25zdCBtYXQgPSBtNC5pZGVudGl0eSgpO1xuICogICAgIGNvbnN0IHRyYW5zID0gbTQudHJhbnNsYXRpb24oWzEsIDIsIDNdKTtcbiAqICAgICBtNC5tdWx0aXBseShtYXQsIHRyYW5zLCBtYXQpOyAgLy8gTXVsdGlwbGllcyBtYXQgKiB0cmFucyBhbmQgcHV0cyByZXN1bHQgaW4gbWF0LlxuICpcbiAqIEBtb2R1bGUgdHdnbC9tNFxuICovXG52YXIgTWF0VHlwZSA9IEZsb2F0MzJBcnJheTtcbi8qKlxuICogQSBKYXZhU2NyaXB0IGFycmF5IHdpdGggMTYgdmFsdWVzIG9yIGEgRmxvYXQzMkFycmF5IHdpdGggMTYgdmFsdWVzLlxuICogV2hlbiBjcmVhdGVkIGJ5IHRoZSBsaWJyYXJ5IHdpbGwgY3JlYXRlIHRoZSBkZWZhdWx0IHR5cGUgd2hpY2ggaXMgYEZsb2F0MzJBcnJheWBcbiAqIGJ1dCBjYW4gYmUgc2V0IGJ5IGNhbGxpbmcge0BsaW5rIG1vZHVsZTp0d2dsL200LnNldERlZmF1bHRUeXBlfS5cbiAqIEB0eXBlZGVmIHsobnVtYmVyW118RmxvYXQzMkFycmF5KX0gTWF0NFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuLyoqXG4gKiBTZXRzIHRoZSB0eXBlIHRoaXMgbGlicmFyeSBjcmVhdGVzIGZvciBhIE1hdDRcbiAqIEBwYXJhbSB7Y29uc3RydWN0b3J9IGN0b3IgdGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS4gRWl0aGVyIGBGbG9hdDMyQXJyYXlgIG9yIGBBcnJheWBcbiAqIEByZXR1cm4ge2NvbnN0cnVjdG9yfSBwcmV2aW91cyBjb25zdHJ1Y3RvciBmb3IgTWF0NFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuZnVuY3Rpb24gc2V0RGVmYXVsdFR5cGUoY3Rvcikge1xuICB2YXIgb2xkVHlwZSA9IE1hdFR5cGU7XG4gIE1hdFR5cGUgPSBjdG9yO1xuICByZXR1cm4gb2xkVHlwZTtcbn1cbi8qKlxuICogTmVnYXRlcyBhIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSAtbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gbmVnYXRlKG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICBkc3RbMF0gPSAtbVswXTtcbiAgZHN0WzFdID0gLW1bMV07XG4gIGRzdFsyXSA9IC1tWzJdO1xuICBkc3RbM10gPSAtbVszXTtcbiAgZHN0WzRdID0gLW1bNF07XG4gIGRzdFs1XSA9IC1tWzVdO1xuICBkc3RbNl0gPSAtbVs2XTtcbiAgZHN0WzddID0gLW1bN107XG4gIGRzdFs4XSA9IC1tWzhdO1xuICBkc3RbOV0gPSAtbVs5XTtcbiAgZHN0WzEwXSA9IC1tWzEwXTtcbiAgZHN0WzExXSA9IC1tWzExXTtcbiAgZHN0WzEyXSA9IC1tWzEyXTtcbiAgZHN0WzEzXSA9IC1tWzEzXTtcbiAgZHN0WzE0XSA9IC1tWzE0XTtcbiAgZHN0WzE1XSA9IC1tWzE1XTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ29waWVzIGEgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIFRoZSBtYXRyaXguIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBBIGNvcHkgb2YgbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gY29weShtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgZHN0WzBdID0gbVswXTtcbiAgZHN0WzFdID0gbVsxXTtcbiAgZHN0WzJdID0gbVsyXTtcbiAgZHN0WzNdID0gbVszXTtcbiAgZHN0WzRdID0gbVs0XTtcbiAgZHN0WzVdID0gbVs1XTtcbiAgZHN0WzZdID0gbVs2XTtcbiAgZHN0WzddID0gbVs3XTtcbiAgZHN0WzhdID0gbVs4XTtcbiAgZHN0WzldID0gbVs5XTtcbiAgZHN0WzEwXSA9IG1bMTBdO1xuICBkc3RbMTFdID0gbVsxMV07XG4gIGRzdFsxMl0gPSBtWzEyXTtcbiAgZHN0WzEzXSA9IG1bMTNdO1xuICBkc3RbMTRdID0gbVsxNF07XG4gIGRzdFsxNV0gPSBtWzE1XTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhbiBuLWJ5LW4gaWRlbnRpdHkgbWF0cml4LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gQW4gbi1ieS1uIGlkZW50aXR5IG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gaWRlbnRpdHkoZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIGRzdFswXSA9IDE7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IDE7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSAxO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFRha2VzIHRoZSB0cmFuc3Bvc2Ugb2YgYSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHRyYW5zcG9zZSBvZiBtLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiB0cmFuc3Bvc2UobSwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG5cbiAgaWYgKGRzdCA9PT0gbSkge1xuICAgIHZhciB0O1xuICAgIHQgPSBtWzFdO1xuICAgIG1bMV0gPSBtWzRdO1xuICAgIG1bNF0gPSB0O1xuICAgIHQgPSBtWzJdO1xuICAgIG1bMl0gPSBtWzhdO1xuICAgIG1bOF0gPSB0O1xuICAgIHQgPSBtWzNdO1xuICAgIG1bM10gPSBtWzEyXTtcbiAgICBtWzEyXSA9IHQ7XG4gICAgdCA9IG1bNl07XG4gICAgbVs2XSA9IG1bOV07XG4gICAgbVs5XSA9IHQ7XG4gICAgdCA9IG1bN107XG4gICAgbVs3XSA9IG1bMTNdO1xuICAgIG1bMTNdID0gdDtcbiAgICB0ID0gbVsxMV07XG4gICAgbVsxMV0gPSBtWzE0XTtcbiAgICBtWzE0XSA9IHQ7XG4gICAgcmV0dXJuIGRzdDtcbiAgfVxuXG4gIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gIGRzdFswXSA9IG0wMDtcbiAgZHN0WzFdID0gbTEwO1xuICBkc3RbMl0gPSBtMjA7XG4gIGRzdFszXSA9IG0zMDtcbiAgZHN0WzRdID0gbTAxO1xuICBkc3RbNV0gPSBtMTE7XG4gIGRzdFs2XSA9IG0yMTtcbiAgZHN0WzddID0gbTMxO1xuICBkc3RbOF0gPSBtMDI7XG4gIGRzdFs5XSA9IG0xMjtcbiAgZHN0WzEwXSA9IG0yMjtcbiAgZHN0WzExXSA9IG0zMjtcbiAgZHN0WzEyXSA9IG0wMztcbiAgZHN0WzEzXSA9IG0xMztcbiAgZHN0WzE0XSA9IG0yMztcbiAgZHN0WzE1XSA9IG0zMztcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGludmVyc2Ugb2YgYSA0LWJ5LTQgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBpbnZlcnNlIG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIGludmVyc2UobSwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XG4gIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XG4gIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XG4gIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XG4gIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XG4gIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XG4gIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XG4gIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XG4gIHZhciB0bXBfMCA9IG0yMiAqIG0zMztcbiAgdmFyIHRtcF8xID0gbTMyICogbTIzO1xuICB2YXIgdG1wXzIgPSBtMTIgKiBtMzM7XG4gIHZhciB0bXBfMyA9IG0zMiAqIG0xMztcbiAgdmFyIHRtcF80ID0gbTEyICogbTIzO1xuICB2YXIgdG1wXzUgPSBtMjIgKiBtMTM7XG4gIHZhciB0bXBfNiA9IG0wMiAqIG0zMztcbiAgdmFyIHRtcF83ID0gbTMyICogbTAzO1xuICB2YXIgdG1wXzggPSBtMDIgKiBtMjM7XG4gIHZhciB0bXBfOSA9IG0yMiAqIG0wMztcbiAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcbiAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcbiAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcbiAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcbiAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcbiAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcbiAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcbiAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcbiAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcbiAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcbiAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcbiAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcbiAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcbiAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcbiAgdmFyIHQwID0gdG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxIC0gKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XG4gIHZhciB0MSA9IHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSAtICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xuICB2YXIgdDIgPSB0bXBfMiAqIG0wMSArIHRtcF83ICogbTExICsgdG1wXzEwICogbTMxIC0gKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xuICB2YXIgdDMgPSB0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxIC0gKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xuICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XG4gIGRzdFswXSA9IGQgKiB0MDtcbiAgZHN0WzFdID0gZCAqIHQxO1xuICBkc3RbMl0gPSBkICogdDI7XG4gIGRzdFszXSA9IGQgKiB0MztcbiAgZHN0WzRdID0gZCAqICh0bXBfMSAqIG0xMCArIHRtcF8yICogbTIwICsgdG1wXzUgKiBtMzAgLSAodG1wXzAgKiBtMTAgKyB0bXBfMyAqIG0yMCArIHRtcF80ICogbTMwKSk7XG4gIGRzdFs1XSA9IGQgKiAodG1wXzAgKiBtMDAgKyB0bXBfNyAqIG0yMCArIHRtcF84ICogbTMwIC0gKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpO1xuICBkc3RbNl0gPSBkICogKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzAgLSAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpO1xuICBkc3RbN10gPSBkICogKHRtcF80ICogbTAwICsgdG1wXzkgKiBtMTAgKyB0bXBfMTAgKiBtMjAgLSAodG1wXzUgKiBtMDAgKyB0bXBfOCAqIG0xMCArIHRtcF8xMSAqIG0yMCkpO1xuICBkc3RbOF0gPSBkICogKHRtcF8xMiAqIG0xMyArIHRtcF8xNSAqIG0yMyArIHRtcF8xNiAqIG0zMyAtICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKTtcbiAgZHN0WzldID0gZCAqICh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMgLSAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSk7XG4gIGRzdFsxMF0gPSBkICogKHRtcF8xNCAqIG0wMyArIHRtcF8xOSAqIG0xMyArIHRtcF8yMiAqIG0zMyAtICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKTtcbiAgZHN0WzExXSA9IGQgKiAodG1wXzE3ICogbTAzICsgdG1wXzIwICogbTEzICsgdG1wXzIzICogbTIzIC0gKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpO1xuICBkc3RbMTJdID0gZCAqICh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIgLSAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSk7XG4gIGRzdFsxM10gPSBkICogKHRtcF8yMCAqIG0zMiArIHRtcF8xMiAqIG0wMiArIHRtcF8xOSAqIG0yMiAtICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKTtcbiAgZHN0WzE0XSA9IGQgKiAodG1wXzE4ICogbTEyICsgdG1wXzIzICogbTMyICsgdG1wXzE1ICogbTAyIC0gKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpO1xuICBkc3RbMTVdID0gZCAqICh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIgLSAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSk7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIDQtYnktNCBtYXRyaWNlcyB3aXRoIGEgb24gdGhlIGxlZnQgYW5kIGIgb24gdGhlIHJpZ2h0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IGEgVGhlIG1hdHJpeCBvbiB0aGUgbGVmdC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gYiBUaGUgbWF0cml4IG9uIHRoZSByaWdodC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIG1hdHJpeCBwcm9kdWN0IG9mIGEgYW5kIGIuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIG11bHRpcGx5KGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNCArIDBdO1xuICB2YXIgYTExID0gYVs0ICsgMV07XG4gIHZhciBhMTIgPSBhWzQgKyAyXTtcbiAgdmFyIGExMyA9IGFbNCArIDNdO1xuICB2YXIgYTIwID0gYVs4ICsgMF07XG4gIHZhciBhMjEgPSBhWzggKyAxXTtcbiAgdmFyIGEyMiA9IGFbOCArIDJdO1xuICB2YXIgYTIzID0gYVs4ICsgM107XG4gIHZhciBhMzAgPSBhWzEyICsgMF07XG4gIHZhciBhMzEgPSBhWzEyICsgMV07XG4gIHZhciBhMzIgPSBhWzEyICsgMl07XG4gIHZhciBhMzMgPSBhWzEyICsgM107XG4gIHZhciBiMDAgPSBiWzBdO1xuICB2YXIgYjAxID0gYlsxXTtcbiAgdmFyIGIwMiA9IGJbMl07XG4gIHZhciBiMDMgPSBiWzNdO1xuICB2YXIgYjEwID0gYls0ICsgMF07XG4gIHZhciBiMTEgPSBiWzQgKyAxXTtcbiAgdmFyIGIxMiA9IGJbNCArIDJdO1xuICB2YXIgYjEzID0gYls0ICsgM107XG4gIHZhciBiMjAgPSBiWzggKyAwXTtcbiAgdmFyIGIyMSA9IGJbOCArIDFdO1xuICB2YXIgYjIyID0gYls4ICsgMl07XG4gIHZhciBiMjMgPSBiWzggKyAzXTtcbiAgdmFyIGIzMCA9IGJbMTIgKyAwXTtcbiAgdmFyIGIzMSA9IGJbMTIgKyAxXTtcbiAgdmFyIGIzMiA9IGJbMTIgKyAyXTtcbiAgdmFyIGIzMyA9IGJbMTIgKyAzXTtcbiAgZHN0WzBdID0gYTAwICogYjAwICsgYTEwICogYjAxICsgYTIwICogYjAyICsgYTMwICogYjAzO1xuICBkc3RbMV0gPSBhMDEgKiBiMDAgKyBhMTEgKiBiMDEgKyBhMjEgKiBiMDIgKyBhMzEgKiBiMDM7XG4gIGRzdFsyXSA9IGEwMiAqIGIwMCArIGExMiAqIGIwMSArIGEyMiAqIGIwMiArIGEzMiAqIGIwMztcbiAgZHN0WzNdID0gYTAzICogYjAwICsgYTEzICogYjAxICsgYTIzICogYjAyICsgYTMzICogYjAzO1xuICBkc3RbNF0gPSBhMDAgKiBiMTAgKyBhMTAgKiBiMTEgKyBhMjAgKiBiMTIgKyBhMzAgKiBiMTM7XG4gIGRzdFs1XSA9IGEwMSAqIGIxMCArIGExMSAqIGIxMSArIGEyMSAqIGIxMiArIGEzMSAqIGIxMztcbiAgZHN0WzZdID0gYTAyICogYjEwICsgYTEyICogYjExICsgYTIyICogYjEyICsgYTMyICogYjEzO1xuICBkc3RbN10gPSBhMDMgKiBiMTAgKyBhMTMgKiBiMTEgKyBhMjMgKiBiMTIgKyBhMzMgKiBiMTM7XG4gIGRzdFs4XSA9IGEwMCAqIGIyMCArIGExMCAqIGIyMSArIGEyMCAqIGIyMiArIGEzMCAqIGIyMztcbiAgZHN0WzldID0gYTAxICogYjIwICsgYTExICogYjIxICsgYTIxICogYjIyICsgYTMxICogYjIzO1xuICBkc3RbMTBdID0gYTAyICogYjIwICsgYTEyICogYjIxICsgYTIyICogYjIyICsgYTMyICogYjIzO1xuICBkc3RbMTFdID0gYTAzICogYjIwICsgYTEzICogYjIxICsgYTIzICogYjIyICsgYTMzICogYjIzO1xuICBkc3RbMTJdID0gYTAwICogYjMwICsgYTEwICogYjMxICsgYTIwICogYjMyICsgYTMwICogYjMzO1xuICBkc3RbMTNdID0gYTAxICogYjMwICsgYTExICogYjMxICsgYTIxICogYjMyICsgYTMxICogYjMzO1xuICBkc3RbMTRdID0gYTAyICogYjMwICsgYTEyICogYjMxICsgYTIyICogYjMyICsgYTMyICogYjMzO1xuICBkc3RbMTVdID0gYTAzICogYjMwICsgYTEzICogYjMxICsgYTIzICogYjMyICsgYTMzICogYjMzO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBTZXRzIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSA0LWJ5LTQgbWF0cml4IHRvIHRoZSBnaXZlblxuICogdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBhIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIG1hdHJpeCB3aXRoIHRyYW5zbGF0aW9uIHNldC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gc2V0VHJhbnNsYXRpb24oYSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBpZGVudGl0eSgpO1xuXG4gIGlmIChhICE9PSBkc3QpIHtcbiAgICBkc3RbMF0gPSBhWzBdO1xuICAgIGRzdFsxXSA9IGFbMV07XG4gICAgZHN0WzJdID0gYVsyXTtcbiAgICBkc3RbM10gPSBhWzNdO1xuICAgIGRzdFs0XSA9IGFbNF07XG4gICAgZHN0WzVdID0gYVs1XTtcbiAgICBkc3RbNl0gPSBhWzZdO1xuICAgIGRzdFs3XSA9IGFbN107XG4gICAgZHN0WzhdID0gYVs4XTtcbiAgICBkc3RbOV0gPSBhWzldO1xuICAgIGRzdFsxMF0gPSBhWzEwXTtcbiAgICBkc3RbMTFdID0gYVsxMV07XG4gIH1cblxuICBkc3RbMTJdID0gdlswXTtcbiAgZHN0WzEzXSA9IHZbMV07XG4gIGRzdFsxNF0gPSB2WzJdO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIGEgNC1ieS00IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDNcbiAqIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBtLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuICBkc3RbMF0gPSBtWzEyXTtcbiAgZHN0WzFdID0gbVsxM107XG4gIGRzdFsyXSA9IG1bMTRdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIGF4aXMgb2YgYSA0eDQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBheGlzIFRoZSBheGlzIDAgPSB4LCAxID0geSwgMiA9IHo7XG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgYXhpcyBjb21wb25lbnQgb2YgbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gZ2V0QXhpcyhtLCBheGlzLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuICB2YXIgb2ZmID0gYXhpcyAqIDQ7XG4gIGRzdFswXSA9IG1bb2ZmICsgMF07XG4gIGRzdFsxXSA9IG1bb2ZmICsgMV07XG4gIGRzdFsyXSA9IG1bb2ZmICsgMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFNldHMgYW4gYXhpcyBvZiBhIDR4NCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IHRoZSBheGlzIHZlY3RvclxuICogQHBhcmFtIHtudW1iZXJ9IGF4aXMgVGhlIGF4aXMgIDAgPSB4LCAxID0geSwgMiA9IHo7XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIFRoZSBtYXRyaXggdG8gc2V0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIG1hdHJpeCB3aXRoIGF4aXMgc2V0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBzZXRBeGlzKGEsIHYsIGF4aXMsIGRzdCkge1xuICBpZiAoZHN0ICE9PSBhKSB7XG4gICAgZHN0ID0gY29weShhLCBkc3QpO1xuICB9XG5cbiAgdmFyIG9mZiA9IGF4aXMgKiA0O1xuICBkc3Rbb2ZmICsgMF0gPSB2WzBdO1xuICBkc3Rbb2ZmICsgMV0gPSB2WzFdO1xuICBkc3Rbb2ZmICsgMl0gPSB2WzJdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGFuZ3VsYXIgaGVpZ2h0XG4gKiBvZiB0aGUgZnJ1c3R1bSwgdGhlIGFzcGVjdCByYXRpbywgYW5kIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiAgVGhlXG4gKiBhcmd1bWVudHMgZGVmaW5lIGEgZnJ1c3R1bSBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiAgVGhlIGdpdmVuXG4gKiBhbmdsZSBpcyB0aGUgdmVydGljYWwgYW5nbGUgb2YgdGhlIGZydXN0dW0sIGFuZCB0aGUgaG9yaXpvbnRhbCBhbmdsZSBpc1xuICogZGV0ZXJtaW5lZCB0byBwcm9kdWNlIHRoZSBnaXZlbiBhc3BlY3QgcmF0aW8uICBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmVcbiAqIHRoZSBkaXN0YW5jZXMgdG8gdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBOb3RlIHRoYXQgbmVhciBhbmQgZmFyXG4gKiBhcmUgbm90IHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZVxuICogei1heGlzLiAgVGhlIG1hdHJpeCBnZW5lcmF0ZWQgc2VuZHMgdGhlIHZpZXdpbmcgZnJ1c3R1bSB0byB0aGUgdW5pdCBib3guXG4gKiBXZSBhc3N1bWUgYSB1bml0IGJveCBleHRlbmRpbmcgZnJvbSAtMSB0byAxIGluIHRoZSB4IGFuZCB5IGRpbWVuc2lvbnMgYW5kXG4gKiBmcm9tIDAgdG8gMSBpbiB0aGUgeiBkaW1lbnNpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZmllbGRPZlZpZXdZSW5SYWRpYW5zIFRoZSBjYW1lcmEgYW5nbGUgZnJvbSB0b3AgdG8gYm90dG9tIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgVGhlIGFzcGVjdCByYXRpbyB3aWR0aCAvIGhlaWdodC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6TmVhciBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAqICAgICBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB6RmFyIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICogICAgIG9mIHRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBwZXJzcGVjdGl2ZSBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZpZWxkT2ZWaWV3WUluUmFkaWFucywgYXNwZWN0LCB6TmVhciwgekZhciwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZpZWxkT2ZWaWV3WUluUmFkaWFucyk7XG4gIHZhciByYW5nZUludiA9IDEuMCAvICh6TmVhciAtIHpGYXIpO1xuICBkc3RbMF0gPSBmIC8gYXNwZWN0O1xuICBkc3RbMV0gPSAwO1xuICBkc3RbMl0gPSAwO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSBmO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAwO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gKHpOZWFyICsgekZhcikgKiByYW5nZUludjtcbiAgZHN0WzExXSA9IC0xO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSB6TmVhciAqIHpGYXIgKiByYW5nZUludiAqIDI7XG4gIGRzdFsxNV0gPSAwO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb21wdXRlcyBhIDQtYnktNCBvcnRob2dvbmFsIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgbGVmdCwgcmlnaHQsXG4gKiBib3R0b20sIGFuZCB0b3AgZGltZW5zaW9ucyBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSBhcyB3ZWxsIGFzIHRoZVxuICogbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lIGRpc3RhbmNlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IExlZnQgc2lkZSBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBSaWdodCBzaWRlIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICogICAgIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBUaGUgZGVwdGggKG5lZ2F0aXZlIHogY29vcmRpbmF0ZSlcbiAqICAgICBvZiB0aGUgZmFyIGNsaXBwaW5nIHBsYW5lLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBPdXRwdXQgbWF0cml4LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gb3J0aG8obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICBkc3RbMF0gPSAyIC8gKHJpZ2h0IC0gbGVmdCk7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IDIgLyAodG9wIC0gYm90dG9tKTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gMDtcbiAgZHN0WzldID0gMDtcbiAgZHN0WzEwXSA9IDIgLyAobmVhciAtIGZhcik7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gKHJpZ2h0ICsgbGVmdCkgLyAobGVmdCAtIHJpZ2h0KTtcbiAgZHN0WzEzXSA9ICh0b3AgKyBib3R0b20pIC8gKGJvdHRvbSAtIHRvcCk7XG4gIGRzdFsxNF0gPSAoZmFyICsgbmVhcikgLyAobmVhciAtIGZhcik7XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb21wdXRlcyBhIDQtYnktNCBwZXJzcGVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXggZ2l2ZW4gdGhlIGxlZnQsIHJpZ2h0LFxuICogdG9wLCBib3R0b20sIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuIFRoZSBhcmd1bWVudHMgZGVmaW5lIGEgZnJ1c3R1bVxuICogZXh0ZW5kaW5nIGluIHRoZSBuZWdhdGl2ZSB6IGRpcmVjdGlvbi4gVGhlIGFyZ3VtZW50cyBuZWFyIGFuZCBmYXIgYXJlIHRoZVxuICogZGlzdGFuY2VzIHRvIHRoZSBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmVzLiBOb3RlIHRoYXQgbmVhciBhbmQgZmFyIGFyZSBub3RcbiAqIHogY29vcmRpbmF0ZXMsIGJ1dCByYXRoZXIgdGhleSBhcmUgZGlzdGFuY2VzIGFsb25nIHRoZSBuZWdhdGl2ZSB6LWF4aXMuIFRoZVxuICogbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC4gV2UgYXNzdW1lIGEgdW5pdFxuICogYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmQgZnJvbSAwIHRvIDEgaW4gdGhlIHpcbiAqIGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGxlZnQgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBib3R0b20gcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIFRoZSBuZWdhdGl2ZSB6IGNvb3JkaW5hdGUgb2YgdGhlIG5lYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgZmFyIHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIE91dHB1dCBtYXRyaXguIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIGZydXN0dW0obGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgZHggPSByaWdodCAtIGxlZnQ7XG4gIHZhciBkeSA9IHRvcCAtIGJvdHRvbTtcbiAgdmFyIGR6ID0gbmVhciAtIGZhcjtcbiAgZHN0WzBdID0gMiAqIG5lYXIgLyBkeDtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gMiAqIG5lYXIgLyBkeTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gKGxlZnQgKyByaWdodCkgLyBkeDtcbiAgZHN0WzldID0gKHRvcCArIGJvdHRvbSkgLyBkeTtcbiAgZHN0WzEwXSA9IGZhciAvIGR6O1xuICBkc3RbMTFdID0gLTE7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IG5lYXIgKiBmYXIgLyBkejtcbiAgZHN0WzE1XSA9IDA7XG4gIHJldHVybiBkc3Q7XG59XG5cbnZhciB4QXhpcztcbnZhciB5QXhpcztcbnZhciB6QXhpcztcbi8qKlxuICogQ29tcHV0ZXMgYSA0LWJ5LTQgbG9vay1hdCB0cmFuc2Zvcm1hdGlvbi5cbiAqXG4gKiBUaGlzIGlzIGEgbWF0cml4IHdoaWNoIHBvc2l0aW9ucyB0aGUgY2FtZXJhIGl0c2VsZi4gSWYgeW91IHdhbnRcbiAqIGEgdmlldyBtYXRyaXggKGEgbWF0cml4IHdoaWNoIG1vdmVzIHRoaW5ncyBpbiBmcm9udCBvZiB0aGUgY2FtZXJhKVxuICogdGFrZSB0aGUgaW52ZXJzZSBvZiB0aGlzLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gZXllIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXllLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB0YXJnZXQgVGhlIHBvc2l0aW9uIG1lYW50IHRvIGJlIHZpZXdlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdXAgQSB2ZWN0b3IgcG9pbnRpbmcgdXAuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBsb29rLWF0IG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cbmZ1bmN0aW9uIGxvb2tBdChleWUsIHRhcmdldCwgdXAsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB4QXhpcyA9IHhBeGlzIHx8IHYzLmNyZWF0ZSgpO1xuICB5QXhpcyA9IHlBeGlzIHx8IHYzLmNyZWF0ZSgpO1xuICB6QXhpcyA9IHpBeGlzIHx8IHYzLmNyZWF0ZSgpO1xuICB2My5ub3JtYWxpemUodjMuc3VidHJhY3QoZXllLCB0YXJnZXQsIHpBeGlzKSwgekF4aXMpO1xuICB2My5ub3JtYWxpemUodjMuY3Jvc3ModXAsIHpBeGlzLCB4QXhpcyksIHhBeGlzKTtcbiAgdjMubm9ybWFsaXplKHYzLmNyb3NzKHpBeGlzLCB4QXhpcywgeUF4aXMpLCB5QXhpcyk7XG4gIGRzdFswXSA9IHhBeGlzWzBdO1xuICBkc3RbMV0gPSB4QXhpc1sxXTtcbiAgZHN0WzJdID0geEF4aXNbMl07XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IHlBeGlzWzBdO1xuICBkc3RbNV0gPSB5QXhpc1sxXTtcbiAgZHN0WzZdID0geUF4aXNbMl07XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IHpBeGlzWzBdO1xuICBkc3RbOV0gPSB6QXhpc1sxXTtcbiAgZHN0WzEwXSA9IHpBeGlzWzJdO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IGV5ZVswXTtcbiAgZHN0WzEzXSA9IGV5ZVsxXTtcbiAgZHN0WzE0XSA9IGV5ZVsyXTtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHRyYW5zbGF0ZXMgYnkgdGhlIGdpdmVuIHZlY3RvciB2LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IgYnlcbiAqICAgICB3aGljaCB0byB0cmFuc2xhdGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSB0cmFuc2xhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYW5zbGF0aW9uKHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICBkc3RbMF0gPSAxO1xuICBkc3RbMV0gPSAwO1xuICBkc3RbMl0gPSAwO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSAxO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAwO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gMTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSB2WzBdO1xuICBkc3RbMTNdID0gdlsxXTtcbiAgZHN0WzE0XSA9IHZbMl07XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGJ5IHRoZSBnaXZlbiB2ZWN0b3Igdi5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IgYnlcbiAqICAgICB3aGljaCB0byB0cmFuc2xhdGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSB0cmFuc2xhdGVkIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gdHJhbnNsYXRlKG0sIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgdjAgPSB2WzBdO1xuICB2YXIgdjEgPSB2WzFdO1xuICB2YXIgdjIgPSB2WzJdO1xuICB2YXIgbTAwID0gbVswXTtcbiAgdmFyIG0wMSA9IG1bMV07XG4gIHZhciBtMDIgPSBtWzJdO1xuICB2YXIgbTAzID0gbVszXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzBdID0gbTAwO1xuICAgIGRzdFsxXSA9IG0wMTtcbiAgICBkc3RbMl0gPSBtMDI7XG4gICAgZHN0WzNdID0gbTAzO1xuICAgIGRzdFs0XSA9IG0xMDtcbiAgICBkc3RbNV0gPSBtMTE7XG4gICAgZHN0WzZdID0gbTEyO1xuICAgIGRzdFs3XSA9IG0xMztcbiAgICBkc3RbOF0gPSBtMjA7XG4gICAgZHN0WzldID0gbTIxO1xuICAgIGRzdFsxMF0gPSBtMjI7XG4gICAgZHN0WzExXSA9IG0yMztcbiAgfVxuXG4gIGRzdFsxMl0gPSBtMDAgKiB2MCArIG0xMCAqIHYxICsgbTIwICogdjIgKyBtMzA7XG4gIGRzdFsxM10gPSBtMDEgKiB2MCArIG0xMSAqIHYxICsgbTIxICogdjIgKyBtMzE7XG4gIGRzdFsxNF0gPSBtMDIgKiB2MCArIG0xMiAqIHYxICsgbTIyICogdjIgKyBtMzI7XG4gIGRzdFsxNV0gPSBtMDMgKiB2MCArIG0xMyAqIHYxICsgbTIzICogdjIgKyBtMzM7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB4LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRpb24gbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiByb3RhdGlvblgoYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIGRzdFswXSA9IDE7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IGM7XG4gIGRzdFs2XSA9IHM7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IC1zO1xuICBkc3RbMTBdID0gYztcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSb3RhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGFyb3VuZCB0aGUgeC1heGlzIGJ5IHRoZSBnaXZlblxuICogYW5nbGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHJvdGF0ZWQgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiByb3RhdGVYKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIG0xMCA9IG1bNF07XG4gIHZhciBtMTEgPSBtWzVdO1xuICB2YXIgbTEyID0gbVs2XTtcbiAgdmFyIG0xMyA9IG1bN107XG4gIHZhciBtMjAgPSBtWzhdO1xuICB2YXIgbTIxID0gbVs5XTtcbiAgdmFyIG0yMiA9IG1bMTBdO1xuICB2YXIgbTIzID0gbVsxMV07XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgZHN0WzRdID0gYyAqIG0xMCArIHMgKiBtMjA7XG4gIGRzdFs1XSA9IGMgKiBtMTEgKyBzICogbTIxO1xuICBkc3RbNl0gPSBjICogbTEyICsgcyAqIG0yMjtcbiAgZHN0WzddID0gYyAqIG0xMyArIHMgKiBtMjM7XG4gIGRzdFs4XSA9IGMgKiBtMjAgLSBzICogbTEwO1xuICBkc3RbOV0gPSBjICogbTIxIC0gcyAqIG0xMTtcbiAgZHN0WzEwXSA9IGMgKiBtMjIgLSBzICogbTEyO1xuICBkc3RbMTFdID0gYyAqIG0yMyAtIHMgKiBtMTM7XG5cbiAgaWYgKG0gIT09IGRzdCkge1xuICAgIGRzdFswXSA9IG1bMF07XG4gICAgZHN0WzFdID0gbVsxXTtcbiAgICBkc3RbMl0gPSBtWzJdO1xuICAgIGRzdFszXSA9IG1bM107XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHJvdGF0aW9uWShhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgZHN0WzBdID0gYztcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gLXM7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IDE7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IHM7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSBjO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB5LWF4aXMgYnkgdGhlIGdpdmVuXG4gKiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHJvdGF0ZVkobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIGRzdFswXSA9IGMgKiBtMDAgLSBzICogbTIwO1xuICBkc3RbMV0gPSBjICogbTAxIC0gcyAqIG0yMTtcbiAgZHN0WzJdID0gYyAqIG0wMiAtIHMgKiBtMjI7XG4gIGRzdFszXSA9IGMgKiBtMDMgLSBzICogbTIzO1xuICBkc3RbOF0gPSBjICogbTIwICsgcyAqIG0wMDtcbiAgZHN0WzldID0gYyAqIG0yMSArIHMgKiBtMDE7XG4gIGRzdFsxMF0gPSBjICogbTIyICsgcyAqIG0wMjtcbiAgZHN0WzExXSA9IGMgKiBtMjMgKyBzICogbTAzO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbNF0gPSBtWzRdO1xuICAgIGRzdFs1XSA9IG1bNV07XG4gICAgZHN0WzZdID0gbVs2XTtcbiAgICBkc3RbN10gPSBtWzddO1xuICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICBkc3RbMTNdID0gbVsxM107XG4gICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSB6LWF4aXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRpb24gbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiByb3RhdGlvblooYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIGRzdFswXSA9IGM7XG4gIGRzdFsxXSA9IHM7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IC1zO1xuICBkc3RbNV0gPSBjO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAwO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gMTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSb3RhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGFyb3VuZCB0aGUgei1heGlzIGJ5IHRoZSBnaXZlblxuICogYW5nbGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHJvdGF0ZWQgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiByb3RhdGVaKG0sIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICBkc3RbMF0gPSBjICogbTAwICsgcyAqIG0xMDtcbiAgZHN0WzFdID0gYyAqIG0wMSArIHMgKiBtMTE7XG4gIGRzdFsyXSA9IGMgKiBtMDIgKyBzICogbTEyO1xuICBkc3RbM10gPSBjICogbTAzICsgcyAqIG0xMztcbiAgZHN0WzRdID0gYyAqIG0xMCAtIHMgKiBtMDA7XG4gIGRzdFs1XSA9IGMgKiBtMTEgLSBzICogbTAxO1xuICBkc3RbNl0gPSBjICogbTEyIC0gcyAqIG0wMjtcbiAgZHN0WzddID0gYyAqIG0xMyAtIHMgKiBtMDM7XG5cbiAgaWYgKG0gIT09IGRzdCkge1xuICAgIGRzdFs4XSA9IG1bOF07XG4gICAgZHN0WzldID0gbVs5XTtcbiAgICBkc3RbMTBdID0gbVsxMF07XG4gICAgZHN0WzExXSA9IG1bMTFdO1xuICAgIGRzdFsxMl0gPSBtWzEyXTtcbiAgICBkc3RbMTNdID0gbVsxM107XG4gICAgZHN0WzE0XSA9IG1bMTRdO1xuICAgIGRzdFsxNV0gPSBtWzE1XTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENyZWF0ZXMgYSA0LWJ5LTQgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYXJvdW5kIHRoZSBnaXZlbiBheGlzIGJ5IHRoZSBnaXZlblxuICogYW5nbGUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGF4aXMgVGhlIGF4aXNcbiAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IEEgbWF0cml4IHdoaWNoIHJvdGF0ZXMgYW5nbGUgcmFkaWFuc1xuICogICAgIGFyb3VuZCB0aGUgYXhpcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gYXhpc1JvdGF0aW9uKGF4aXMsIGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIHggPSBheGlzWzBdO1xuICB2YXIgeSA9IGF4aXNbMV07XG4gIHZhciB6ID0gYXhpc1syXTtcbiAgdmFyIG4gPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcbiAgeCAvPSBuO1xuICB5IC89IG47XG4gIHogLz0gbjtcbiAgdmFyIHh4ID0geCAqIHg7XG4gIHZhciB5eSA9IHkgKiB5O1xuICB2YXIgenogPSB6ICogejtcbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgb25lTWludXNDb3NpbmUgPSAxIC0gYztcbiAgZHN0WzBdID0geHggKyAoMSAtIHh4KSAqIGM7XG4gIGRzdFsxXSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgZHN0WzJdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHkgKiBzO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gIGRzdFs1XSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICBkc3RbNl0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lICsgeCAqIHM7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgZHN0WzldID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICBkc3RbMTBdID0genogKyAoMSAtIHp6KSAqIGM7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIGdpdmVuIGF4aXMgYnkgdGhlXG4gKiBnaXZlbiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBheGlzIFRoZSBheGlzXG4gKiAgICAgYWJvdXQgd2hpY2ggdG8gcm90YXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIGF4aXNSb3RhdGUobSwgYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgeCA9IGF4aXNbMF07XG4gIHZhciB5ID0gYXhpc1sxXTtcbiAgdmFyIHogPSBheGlzWzJdO1xuICB2YXIgbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB4IC89IG47XG4gIHkgLz0gbjtcbiAgeiAvPSBuO1xuICB2YXIgeHggPSB4ICogeDtcbiAgdmFyIHl5ID0geSAqIHk7XG4gIHZhciB6eiA9IHogKiB6O1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHZhciBvbmVNaW51c0Nvc2luZSA9IDEgLSBjO1xuICB2YXIgcjAwID0geHggKyAoMSAtIHh4KSAqIGM7XG4gIHZhciByMDEgPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lICsgeiAqIHM7XG4gIHZhciByMDIgPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gIHZhciByMTAgPSB4ICogeSAqIG9uZU1pbnVzQ29zaW5lIC0geiAqIHM7XG4gIHZhciByMTEgPSB5eSArICgxIC0geXkpICogYztcbiAgdmFyIHIxMiA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgdmFyIHIyMCA9IHggKiB6ICogb25lTWludXNDb3NpbmUgKyB5ICogcztcbiAgdmFyIHIyMSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgLSB4ICogcztcbiAgdmFyIHIyMiA9IHp6ICsgKDEgLSB6eikgKiBjO1xuICB2YXIgbTAwID0gbVswXTtcbiAgdmFyIG0wMSA9IG1bMV07XG4gIHZhciBtMDIgPSBtWzJdO1xuICB2YXIgbTAzID0gbVszXTtcbiAgdmFyIG0xMCA9IG1bNF07XG4gIHZhciBtMTEgPSBtWzVdO1xuICB2YXIgbTEyID0gbVs2XTtcbiAgdmFyIG0xMyA9IG1bN107XG4gIHZhciBtMjAgPSBtWzhdO1xuICB2YXIgbTIxID0gbVs5XTtcbiAgdmFyIG0yMiA9IG1bMTBdO1xuICB2YXIgbTIzID0gbVsxMV07XG4gIGRzdFswXSA9IHIwMCAqIG0wMCArIHIwMSAqIG0xMCArIHIwMiAqIG0yMDtcbiAgZHN0WzFdID0gcjAwICogbTAxICsgcjAxICogbTExICsgcjAyICogbTIxO1xuICBkc3RbMl0gPSByMDAgKiBtMDIgKyByMDEgKiBtMTIgKyByMDIgKiBtMjI7XG4gIGRzdFszXSA9IHIwMCAqIG0wMyArIHIwMSAqIG0xMyArIHIwMiAqIG0yMztcbiAgZHN0WzRdID0gcjEwICogbTAwICsgcjExICogbTEwICsgcjEyICogbTIwO1xuICBkc3RbNV0gPSByMTAgKiBtMDEgKyByMTEgKiBtMTEgKyByMTIgKiBtMjE7XG4gIGRzdFs2XSA9IHIxMCAqIG0wMiArIHIxMSAqIG0xMiArIHIxMiAqIG0yMjtcbiAgZHN0WzddID0gcjEwICogbTAzICsgcjExICogbTEzICsgcjEyICogbTIzO1xuICBkc3RbOF0gPSByMjAgKiBtMDAgKyByMjEgKiBtMTAgKyByMjIgKiBtMjA7XG4gIGRzdFs5XSA9IHIyMCAqIG0wMSArIHIyMSAqIG0xMSArIHIyMiAqIG0yMTtcbiAgZHN0WzEwXSA9IHIyMCAqIG0wMiArIHIyMSAqIG0xMiArIHIyMiAqIG0yMjtcbiAgZHN0WzExXSA9IHIyMCAqIG0wMyArIHIyMSAqIG0xMyArIHIyMiAqIG0yMztcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggc2NhbGVzIGluIGVhY2ggZGltZW5zaW9uIGJ5IGFuIGFtb3VudCBnaXZlbiBieVxuICogdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhcyB0aHJlZVxuICogZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBBIHZlY3RvciBvZlxuICogICAgIHRocmVlIGVudHJpZXMgc3BlY2lmeWluZyB0aGUgZmFjdG9yIGJ5IHdoaWNoIHRvIHNjYWxlIGluIGVhY2ggZGltZW5zaW9uLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgc2NhbGluZyBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHNjYWxpbmcodiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIGRzdFswXSA9IHZbMF07XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IHZbMV07XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSB2WzJdO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFNjYWxlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBpbiBlYWNoIGRpbWVuc2lvbiBieSBhbiBhbW91bnRcbiAqIGdpdmVuIGJ5IHRoZSBjb3JyZXNwb25kaW5nIGVudHJ5IGluIHRoZSBnaXZlbiB2ZWN0b3I7IGFzc3VtZXMgdGhlIHZlY3RvciBoYXNcbiAqIHRocmVlIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeCB0byBiZSBtb2RpZmllZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBBIHZlY3RvciBvZiB0aHJlZSBlbnRyaWVzIHNwZWNpZnlpbmcgdGhlXG4gKiAgICAgZmFjdG9yIGJ5IHdoaWNoIHRvIHNjYWxlIGluIGVhY2ggZGltZW5zaW9uLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgc2NhbGVkIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gc2NhbGUobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIGRzdFswXSA9IHYwICogbVswICogNCArIDBdO1xuICBkc3RbMV0gPSB2MCAqIG1bMCAqIDQgKyAxXTtcbiAgZHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl07XG4gIGRzdFszXSA9IHYwICogbVswICogNCArIDNdO1xuICBkc3RbNF0gPSB2MSAqIG1bMSAqIDQgKyAwXTtcbiAgZHN0WzVdID0gdjEgKiBtWzEgKiA0ICsgMV07XG4gIGRzdFs2XSA9IHYxICogbVsxICogNCArIDJdO1xuICBkc3RbN10gPSB2MSAqIG1bMSAqIDQgKyAzXTtcbiAgZHN0WzhdID0gdjIgKiBtWzIgKiA0ICsgMF07XG4gIGRzdFs5XSA9IHYyICogbVsyICogNCArIDFdO1xuICBkc3RbMTBdID0gdjIgKiBtWzIgKiA0ICsgMl07XG4gIGRzdFsxMV0gPSB2MiAqIG1bMiAqIDQgKyAzXTtcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDMgZW50cmllcyxcbiAqIGludGVycHJldHMgdGhlIHZlY3RvciBhcyBhIHBvaW50LCB0cmFuc2Zvcm1zIHRoYXQgcG9pbnQgYnkgdGhlIG1hdHJpeCwgYW5kXG4gKiByZXR1cm5zIHRoZSByZXN1bHQgYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgcG9pbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIG9wdGlvbmFsIHZlYzMgdG8gc3RvcmUgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHRyYW5zZm9ybWVkIHBvaW50LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Qb2ludChtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuICB2YXIgdjAgPSB2WzBdO1xuICB2YXIgdjEgPSB2WzFdO1xuICB2YXIgdjIgPSB2WzJdO1xuICB2YXIgZCA9IHYwICogbVswICogNCArIDNdICsgdjEgKiBtWzEgKiA0ICsgM10gKyB2MiAqIG1bMiAqIDQgKyAzXSArIG1bMyAqIDQgKyAzXTtcbiAgZHN0WzBdID0gKHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXSArIG1bMyAqIDQgKyAwXSkgLyBkO1xuICBkc3RbMV0gPSAodjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdICsgbVszICogNCArIDFdKSAvIGQ7XG4gIGRzdFsyXSA9ICh2MCAqIG1bMCAqIDQgKyAyXSArIHYxICogbVsxICogNCArIDJdICsgdjIgKiBtWzIgKiA0ICsgMl0gKyBtWzMgKiA0ICsgMl0pIC8gZDtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogVGFrZXMgYSA0LWJ5LTQgbWF0cml4IGFuZCBhIHZlY3RvciB3aXRoIDMgZW50cmllcywgaW50ZXJwcmV0cyB0aGUgdmVjdG9yIGFzIGFcbiAqIGRpcmVjdGlvbiwgdHJhbnNmb3JtcyB0aGF0IGRpcmVjdGlvbiBieSB0aGUgbWF0cml4LCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0O1xuICogYXNzdW1lcyB0aGUgdHJhbnNmb3JtYXRpb24gb2YgMy1kaW1lbnNpb25hbCBzcGFjZSByZXByZXNlbnRlZCBieSB0aGUgbWF0cml4XG4gKiBpcyBwYXJhbGxlbC1wcmVzZXJ2aW5nLCBpLmUuIGFueSBjb21iaW5hdGlvbiBvZiByb3RhdGlvbiwgc2NhbGluZyBhbmRcbiAqIHRyYW5zbGF0aW9uLCBidXQgbm90IGEgcGVyc3BlY3RpdmUgZGlzdG9ydGlvbi4gUmV0dXJucyBhIHZlY3RvciB3aXRoIDNcbiAqIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgZGlyZWN0aW9uLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSBvcHRpb25hbCBWZWMzIHRvIHN0b3JlIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB0cmFuc2Zvcm1lZCBkaXJlY3Rpb24uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybURpcmVjdGlvbihtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IHYzLmNyZWF0ZSgpO1xuICB2YXIgdjAgPSB2WzBdO1xuICB2YXIgdjEgPSB2WzFdO1xuICB2YXIgdjIgPSB2WzJdO1xuICBkc3RbMF0gPSB2MCAqIG1bMCAqIDQgKyAwXSArIHYxICogbVsxICogNCArIDBdICsgdjIgKiBtWzIgKiA0ICsgMF07XG4gIGRzdFsxXSA9IHYwICogbVswICogNCArIDFdICsgdjEgKiBtWzEgKiA0ICsgMV0gKyB2MiAqIG1bMiAqIDQgKyAxXTtcbiAgZHN0WzJdID0gdjAgKiBtWzAgKiA0ICsgMl0gKyB2MSAqIG1bMSAqIDQgKyAyXSArIHYyICogbVsyICogNCArIDJdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggbSBhbmQgYSB2ZWN0b3IgdiB3aXRoIDMgZW50cmllcywgaW50ZXJwcmV0cyB0aGUgdmVjdG9yXG4gKiBhcyBhIG5vcm1hbCB0byBhIHN1cmZhY2UsIGFuZCBjb21wdXRlcyBhIHZlY3RvciB3aGljaCBpcyBub3JtYWwgdXBvblxuICogdHJhbnNmb3JtaW5nIHRoYXQgc3VyZmFjZSBieSB0aGUgbWF0cml4LiBUaGUgZWZmZWN0IG9mIHRoaXMgZnVuY3Rpb24gaXMgdGhlXG4gKiBzYW1lIGFzIHRyYW5zZm9ybWluZyB2IChhcyBhIGRpcmVjdGlvbikgYnkgdGhlIGludmVyc2UtdHJhbnNwb3NlIG9mIG0uICBUaGlzXG4gKiBmdW5jdGlvbiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZVxuICogbWF0cml4IGlzIHBhcmFsbGVsLXByZXNlcnZpbmcsIGkuZS4gYW55IGNvbWJpbmF0aW9uIG9mIHJvdGF0aW9uLCBzY2FsaW5nIGFuZFxuICogdHJhbnNsYXRpb24sIGJ1dCBub3QgYSBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uLiAgUmV0dXJucyBhIHZlY3RvciB3aXRoIDNcbiAqIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgbm9ybWFsLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSBUaGUgZGlyZWN0aW9uLiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHRyYW5zZm9ybWVkIG5vcm1hbC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gdHJhbnNmb3JtTm9ybWFsKG0sIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciBtaSA9IGludmVyc2UobSk7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIGRzdFswXSA9IHYwICogbWlbMCAqIDQgKyAwXSArIHYxICogbWlbMCAqIDQgKyAxXSArIHYyICogbWlbMCAqIDQgKyAyXTtcbiAgZHN0WzFdID0gdjAgKiBtaVsxICogNCArIDBdICsgdjEgKiBtaVsxICogNCArIDFdICsgdjIgKiBtaVsxICogNCArIDJdO1xuICBkc3RbMl0gPSB2MCAqIG1pWzIgKiA0ICsgMF0gKyB2MSAqIG1pWzIgKiA0ICsgMV0gKyB2MiAqIG1pWzIgKiA0ICsgMl07XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3ByaW1pdGl2ZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wcmltaXRpdmVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGUzREZWZXJ0aWNlcyA9IGNyZWF0ZTNERlZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5ID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheTtcbmV4cG9ydHMuY3JlYXRlQ3ViZVZlcnRpY2VzID0gY3JlYXRlQ3ViZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVQbGFuZVZlcnRpY2VzID0gY3JlYXRlUGxhbmVWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlU3BoZXJlVmVydGljZXMgPSBjcmVhdGVTcGhlcmVWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzID0gY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVYWVF1YWRWZXJ0aWNlcyA9IGNyZWF0ZVhZUXVhZFZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVDcmVzY2VudFZlcnRpY2VzID0gY3JlYXRlQ3Jlc2NlbnRWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlQ3lsaW5kZXJWZXJ0aWNlcyA9IGNyZWF0ZUN5bGluZGVyVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZVRvcnVzVmVydGljZXMgPSBjcmVhdGVUb3J1c1ZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVEaXNjVmVydGljZXMgPSBjcmVhdGVEaXNjVmVydGljZXM7XG5leHBvcnRzLmRlaW5kZXhWZXJ0aWNlcyA9IGRlaW5kZXhWZXJ0aWNlcztcbmV4cG9ydHMuZmxhdHRlbk5vcm1hbHMgPSBmbGF0dGVuTm9ybWFscztcbmV4cG9ydHMubWFrZVJhbmRvbVZlcnRleENvbG9ycyA9IG1ha2VSYW5kb21WZXJ0ZXhDb2xvcnM7XG5leHBvcnRzLnJlb3JpZW50RGlyZWN0aW9ucyA9IHJlb3JpZW50RGlyZWN0aW9ucztcbmV4cG9ydHMucmVvcmllbnROb3JtYWxzID0gcmVvcmllbnROb3JtYWxzO1xuZXhwb3J0cy5yZW9yaWVudFBvc2l0aW9ucyA9IHJlb3JpZW50UG9zaXRpb25zO1xuZXhwb3J0cy5yZW9yaWVudFZlcnRpY2VzID0gcmVvcmllbnRWZXJ0aWNlcztcbmV4cG9ydHMuY29uY2F0VmVydGljZXMgPSBjb25jYXRWZXJ0aWNlcztcbmV4cG9ydHMuZHVwbGljYXRlVmVydGljZXMgPSBkdXBsaWNhdGVWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlRGlzY0J1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZURpc2NCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVUb3J1c0J1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZVRvcnVzQnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlQ3lsaW5kZXJCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVDeWxpbmRlckJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZUNyZXNjZW50QnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlQ3Jlc2NlbnRCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVDcmVzZW50VmVydGljZXMgPSBleHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVDcmVzZW50QnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlWFlRdWFkQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVTcGhlcmVCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVTcGhlcmVCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVQbGFuZUJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZVBsYW5lQnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZUN1YmVCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGUzREZCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGUzREZCdWZmZXJJbmZvID0gdm9pZCAwO1xuXG52YXIgYXR0cmlidXRlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYXR0cmlidXRlcy5qcyAqLyBcIi4vc3JjL2F0dHJpYnV0ZXMuanNcIikpO1xuXG52YXIgaGVscGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXIuanMgKi8gXCIuL3NyYy9oZWxwZXIuanNcIikpO1xuXG52YXIgdHlwZWRBcnJheXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3R5cGVkYXJyYXlzLmpzICovIFwiLi9zcmMvdHlwZWRhcnJheXMuanNcIikpO1xuXG52YXIgbTQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL200LmpzICovIFwiLi9zcmMvbTQuanNcIikpO1xuXG52YXIgdjMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3YzLmpzICovIFwiLi9zcmMvdjMuanNcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogVmFyaW91cyBmdW5jdGlvbnMgdG8gbWFrZSBzaW1wbGUgcHJpbWl0aXZlc1xuICpcbiAqIG5vdGU6IE1vc3QgcHJpbWl0aXZlIGZ1bmN0aW9ucyBjb21lIGluIDMgc3R5bGVzXG4gKlxuICogKiAgYGNyZWF0ZVNvbWVTaGFwZUJ1ZmZlckluZm9gXG4gKlxuICogICAgVGhlc2UgZnVuY3Rpb25zIGFyZSBhbG1vc3QgYWx3YXlzIHRoZSBmdW5jdGlvbnMgeW91IHdhbnQgdG8gY2FsbC4gVGhleVxuICogICAgY3JlYXRlIHZlcnRpY2VzIHRoZW4gbWFrZSBXZWJHTEJ1ZmZlcnMgYW5kIGNyZWF0ZSB7QGxpbmsgbW9kdWxlOnR3Z2wuQXR0cmliSW5mb31zXG4gKiAgICByZXR1cm5pbmcgYSB7QGxpbmsgbW9kdWxlOnR3Z2wuQnVmZmVySW5mb30geW91IGNhbiBwYXNzIHRvIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc31cbiAqICAgIGFuZCB7QGxpbmsgbW9kdWxlOnR3Z2wuZHJhd0J1ZmZlckluZm99IGV0Yy4uLlxuICpcbiAqICogIGBjcmVhdGVTb21lU2hhcGVCdWZmZXJzYFxuICpcbiAqICAgIFRoZXNlIGNyZWF0ZSBXZWJHTEJ1ZmZlcnMgYW5kIHB1dCB5b3VyIGRhdGEgaW4gdGhlbSBidXQgbm90aGluZyBlbHNlLlxuICogICAgSXQncyBhIHNob3J0Y3V0IHRvIGRvaW5nIGl0IHlvdXJzZWxmIGlmIHlvdSBkb24ndCB3YW50IHRvIHVzZVxuICogICAgdGhlIGhpZ2hlciBsZXZlbCBmdW5jdGlvbnMuXG4gKlxuICogKiAgYGNyZWF0ZVNvbWVTaGFwZVZlcnRpY2VzYFxuICpcbiAqICAgIFRoZXNlIGp1c3QgY3JlYXRlIHZlcnRpY2VzLCBubyBidWZmZXJzLiBUaGlzIGFsbG93cyB5b3UgdG8gbWFuaXB1bGF0ZSB0aGUgdmVydGljZXNcbiAqICAgIG9yIGFkZCBtb3JlIGRhdGEgYmVmb3JlIGdlbmVyYXRpbmcgYSB7QGxpbmsgbW9kdWxlOnR3Z2wuQnVmZmVySW5mb30uIE9uY2UgeW91J3JlIGZpbmlzaGVkXG4gKiAgICBtYW5pcHVsYXRpbmcgdGhlIHZlcnRpY2VzIGNhbGwge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzfS5cbiAqXG4gKiAgICBleGFtcGxlOlxuICpcbiAqICAgICAgICBjb25zdCBhcnJheXMgPSB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlUGxhbmVBcnJheXMoMSk7XG4gKiAgICAgICAgdHdnbC5wcmltaXRpdmVzLnJlb3JpZW50VmVydGljZXMoYXJyYXlzLCBtNC5yb3RhdGlvblgoTWF0aC5QSSAqIDAuNSkpO1xuICogICAgICAgIGNvbnN0IGJ1ZmZlckluZm8gPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCBhcnJheXMpO1xuICpcbiAqIEBtb2R1bGUgdHdnbC9wcmltaXRpdmVzXG4gKi9cbnZhciBnZXRBcnJheSA9IGF0dHJpYnV0ZXMuZ2V0QXJyYXlfOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbnZhciBnZXROdW1Db21wb25lbnRzID0gYXR0cmlidXRlcy5nZXROdW1Db21wb25lbnRzXzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4vKipcbiAqIEB0eXBlZGVmIHsoSW50OEFycmF5fFVpbnQ4QXJyYXl8SW50MTZBcnJheXxVaW50MTZBcnJheXxJbnQzMkFycmF5fFVpbnQzMkFycmF5fEZsb2F0MzJBcnJheSl9IFR5cGVkQXJyYXlcbiAqL1xuXG4vKipcbiAqIEFkZCBgcHVzaGAgdG8gYSB0eXBlZCBhcnJheS4gSXQganVzdCBrZWVwcyBhICdjdXJzb3InXG4gKiBhbmQgYWxsb3dzIHVzZSB0byBgcHVzaGAgdmFsdWVzIGludG8gdGhlIGFycmF5IHNvIHdlXG4gKiBkb24ndCBoYXZlIHRvIG1hbnVhbGx5IGNvbXB1dGUgb2Zmc2V0c1xuICogQHBhcmFtIHtUeXBlZEFycmF5fSB0eXBlZEFycmF5IFR5cGVkQXJyYXkgdG8gYXVnbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IG51bUNvbXBvbmVudHMgbnVtYmVyIG9mIGNvbXBvbmVudHMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGF1Z21lbnRUeXBlZEFycmF5KHR5cGVkQXJyYXksIG51bUNvbXBvbmVudHMpIHtcbiAgdmFyIGN1cnNvciA9IDA7XG5cbiAgdHlwZWRBcnJheS5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBhcmd1bWVudHMubGVuZ3RoOyArK2lpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbaWldO1xuXG4gICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSB8fCB0eXBlZEFycmF5cy5pc0FycmF5QnVmZmVyKHZhbHVlKSkge1xuICAgICAgICBmb3IgKHZhciBqaiA9IDA7IGpqIDwgdmFsdWUubGVuZ3RoOyArK2pqKSB7XG4gICAgICAgICAgdHlwZWRBcnJheVtjdXJzb3IrK10gPSB2YWx1ZVtqal07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVkQXJyYXlbY3Vyc29yKytdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHR5cGVkQXJyYXkucmVzZXQgPSBmdW5jdGlvbiAob3B0X2luZGV4KSB7XG4gICAgY3Vyc29yID0gb3B0X2luZGV4IHx8IDA7XG4gIH07XG5cbiAgdHlwZWRBcnJheS5udW1Db21wb25lbnRzID0gbnVtQ29tcG9uZW50cztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHR5cGVkQXJyYXksICdudW1FbGVtZW50cycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aCAvIHRoaXMubnVtQ29tcG9uZW50cyB8IDA7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHR5cGVkQXJyYXk7XG59XG4vKipcbiAqIGNyZWF0ZXMgYSB0eXBlZCBhcnJheSB3aXRoIGEgYHB1c2hgIGZ1bmN0aW9uIGF0dGFjaGVkXG4gKiBzbyB0aGF0IHlvdSBjYW4gZWFzaWx5ICpwdXNoKiB2YWx1ZXMuXG4gKlxuICogYHB1c2hgIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cy4gSWYgYW4gYXJndW1lbnQgaXMgYW4gYXJyYXkgZWFjaCBlbGVtZW50XG4gKiBvZiB0aGUgYXJyYXkgd2lsbCBiZSBhZGRlZCB0byB0aGUgdHlwZWQgYXJyYXkuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgYXJyYXkgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIDIpOyAgLy8gY3JlYXRlcyBhIEZsb2F0MzJBcnJheSB3aXRoIDYgdmFsdWVzXG4gKiAgICAgYXJyYXkucHVzaCgxLCAyLCAzKTtcbiAqICAgICBhcnJheS5wdXNoKFs0LCA1LCA2XSk7XG4gKiAgICAgLy8gYXJyYXkgbm93IGNvbnRhaW5zIFsxLCAyLCAzLCA0LCA1LCA2XVxuICpcbiAqIEFsc28gaGFzIGBudW1Db21wb25lbnRzYCBhbmQgYG51bUVsZW1lbnRzYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1Db21wb25lbnRzIG51bWJlciBvZiBjb21wb25lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtRWxlbWVudHMgbnVtYmVyIG9mIGVsZW1lbnRzLiBUaGUgdG90YWwgc2l6ZSBvZiB0aGUgYXJyYXkgd2lsbCBiZSBgbnVtQ29tcG9uZW50cyAqIG51bUVsZW1lbnRzYC5cbiAqIEBwYXJhbSB7Y29uc3RydWN0b3J9IG9wdF90eXBlIEEgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLiBEZWZhdWx0ID0gYEZsb2F0MzJBcnJheWAuXG4gKiBAcmV0dXJuIHtBcnJheUJ1ZmZlclZpZXd9IEEgdHlwZWQgYXJyYXkuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheShudW1Db21wb25lbnRzLCBudW1FbGVtZW50cywgb3B0X3R5cGUpIHtcbiAgdmFyIFR5cGUgPSBvcHRfdHlwZSB8fCBGbG9hdDMyQXJyYXk7XG4gIHJldHVybiBhdWdtZW50VHlwZWRBcnJheShuZXcgVHlwZShudW1Db21wb25lbnRzICogbnVtRWxlbWVudHMpLCBudW1Db21wb25lbnRzKTtcbn1cblxuZnVuY3Rpb24gYWxsQnV0SW5kaWNlcyhuYW1lKSB7XG4gIHJldHVybiBuYW1lICE9PSBcImluZGljZXNcIjtcbn1cbi8qKlxuICogR2l2ZW4gaW5kZXhlZCB2ZXJ0aWNlcyBjcmVhdGVzIGEgbmV3IHNldCBvZiB2ZXJ0aWNlcyB1bi1pbmRleGVkIGJ5IGV4cGFuZGluZyB0aGUgaW5kZXhlZCB2ZXJ0aWNlcy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSB2ZXJ0aWNlcyBUaGUgaW5kZXhlZCB2ZXJ0aWNlcyB0byBkZWluZGV4XG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBkZWluZGV4ZWQgdmVydGljZXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBkZWluZGV4VmVydGljZXModmVydGljZXMpIHtcbiAgdmFyIGluZGljZXMgPSB2ZXJ0aWNlcy5pbmRpY2VzO1xuICB2YXIgbmV3VmVydGljZXMgPSB7fTtcbiAgdmFyIG51bUVsZW1lbnRzID0gaW5kaWNlcy5sZW5ndGg7XG5cbiAgZnVuY3Rpb24gZXhwYW5kVG9VbmluZGV4ZWQoY2hhbm5lbCkge1xuICAgIHZhciBzcmNCdWZmZXIgPSB2ZXJ0aWNlc1tjaGFubmVsXTtcbiAgICB2YXIgbnVtQ29tcG9uZW50cyA9IHNyY0J1ZmZlci5udW1Db21wb25lbnRzO1xuICAgIHZhciBkc3RCdWZmZXIgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KG51bUNvbXBvbmVudHMsIG51bUVsZW1lbnRzLCBzcmNCdWZmZXIuY29uc3RydWN0b3IpO1xuXG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bUVsZW1lbnRzOyArK2lpKSB7XG4gICAgICB2YXIgbmR4ID0gaW5kaWNlc1tpaV07XG4gICAgICB2YXIgb2Zmc2V0ID0gbmR4ICogbnVtQ29tcG9uZW50cztcblxuICAgICAgZm9yICh2YXIgamogPSAwOyBqaiA8IG51bUNvbXBvbmVudHM7ICsramopIHtcbiAgICAgICAgZHN0QnVmZmVyLnB1c2goc3JjQnVmZmVyW29mZnNldCArIGpqXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3VmVydGljZXNbY2hhbm5lbF0gPSBkc3RCdWZmZXI7XG4gIH1cblxuICBPYmplY3Qua2V5cyh2ZXJ0aWNlcykuZmlsdGVyKGFsbEJ1dEluZGljZXMpLmZvckVhY2goZXhwYW5kVG9VbmluZGV4ZWQpO1xuICByZXR1cm4gbmV3VmVydGljZXM7XG59XG4vKipcbiAqIGZsYXR0ZW5zIHRoZSBub3JtYWxzIG9mIGRlaW5kZXhlZCB2ZXJ0aWNlcyBpbiBwbGFjZS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSB2ZXJ0aWNlcyBUaGUgZGVpbmRleGVkIHZlcnRpY2VzIHdobydzIG5vcm1hbHMgdG8gZmxhdHRlblxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgZmxhdHRlbmVkIHZlcnRpY2VzIChzYW1lIGFzIHdhcyBwYXNzZWQgaW4pXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gZmxhdHRlbk5vcm1hbHModmVydGljZXMpIHtcbiAgaWYgKHZlcnRpY2VzLmluZGljZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgZmxhdHRlbiBub3JtYWxzIG9mIGluZGV4ZWQgdmVydGljZXMuIGRlaW5kZXggdGhlbSBmaXJzdCcpO1xuICB9XG5cbiAgdmFyIG5vcm1hbHMgPSB2ZXJ0aWNlcy5ub3JtYWw7XG4gIHZhciBudW1Ob3JtYWxzID0gbm9ybWFscy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bU5vcm1hbHM7IGlpICs9IDkpIHtcbiAgICAvLyBwdWxsIG91dCB0aGUgMyBub3JtYWxzIGZvciB0aGlzIHRyaWFuZ2xlXG4gICAgdmFyIG5heCA9IG5vcm1hbHNbaWkgKyAwXTtcbiAgICB2YXIgbmF5ID0gbm9ybWFsc1tpaSArIDFdO1xuICAgIHZhciBuYXogPSBub3JtYWxzW2lpICsgMl07XG4gICAgdmFyIG5ieCA9IG5vcm1hbHNbaWkgKyAzXTtcbiAgICB2YXIgbmJ5ID0gbm9ybWFsc1tpaSArIDRdO1xuICAgIHZhciBuYnogPSBub3JtYWxzW2lpICsgNV07XG4gICAgdmFyIG5jeCA9IG5vcm1hbHNbaWkgKyA2XTtcbiAgICB2YXIgbmN5ID0gbm9ybWFsc1tpaSArIDddO1xuICAgIHZhciBuY3ogPSBub3JtYWxzW2lpICsgOF07IC8vIGFkZCB0aGVtXG5cbiAgICB2YXIgbnggPSBuYXggKyBuYnggKyBuY3g7XG4gICAgdmFyIG55ID0gbmF5ICsgbmJ5ICsgbmN5O1xuICAgIHZhciBueiA9IG5heiArIG5ieiArIG5jejsgLy8gbm9ybWFsaXplIHRoZW1cblxuICAgIHZhciBsZW5ndGggPSBNYXRoLnNxcnQobnggKiBueCArIG55ICogbnkgKyBueiAqIG56KTtcbiAgICBueCAvPSBsZW5ndGg7XG4gICAgbnkgLz0gbGVuZ3RoO1xuICAgIG56IC89IGxlbmd0aDsgLy8gY29weSB0aGVtIGJhY2sgaW5cblxuICAgIG5vcm1hbHNbaWkgKyAwXSA9IG54O1xuICAgIG5vcm1hbHNbaWkgKyAxXSA9IG55O1xuICAgIG5vcm1hbHNbaWkgKyAyXSA9IG56O1xuICAgIG5vcm1hbHNbaWkgKyAzXSA9IG54O1xuICAgIG5vcm1hbHNbaWkgKyA0XSA9IG55O1xuICAgIG5vcm1hbHNbaWkgKyA1XSA9IG56O1xuICAgIG5vcm1hbHNbaWkgKyA2XSA9IG54O1xuICAgIG5vcm1hbHNbaWkgKyA3XSA9IG55O1xuICAgIG5vcm1hbHNbaWkgKyA4XSA9IG56O1xuICB9XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5mdW5jdGlvbiBhcHBseUZ1bmNUb1YzQXJyYXkoYXJyYXksIG1hdHJpeCwgZm4pIHtcbiAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgdmFyIHRtcCA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGxlbjsgaWkgKz0gMykge1xuICAgIGZuKG1hdHJpeCwgW2FycmF5W2lpXSwgYXJyYXlbaWkgKyAxXSwgYXJyYXlbaWkgKyAyXV0sIHRtcCk7XG4gICAgYXJyYXlbaWldID0gdG1wWzBdO1xuICAgIGFycmF5W2lpICsgMV0gPSB0bXBbMV07XG4gICAgYXJyYXlbaWkgKyAyXSA9IHRtcFsyXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ob3JtYWwobWksIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIGRzdFswXSA9IHYwICogbWlbMCAqIDQgKyAwXSArIHYxICogbWlbMCAqIDQgKyAxXSArIHYyICogbWlbMCAqIDQgKyAyXTtcbiAgZHN0WzFdID0gdjAgKiBtaVsxICogNCArIDBdICsgdjEgKiBtaVsxICogNCArIDFdICsgdjIgKiBtaVsxICogNCArIDJdO1xuICBkc3RbMl0gPSB2MCAqIG1pWzIgKiA0ICsgMF0gKyB2MSAqIG1pWzIgKiA0ICsgMV0gKyB2MiAqIG1pWzIgKiA0ICsgMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFJlb3JpZW50cyBkaXJlY3Rpb25zIGJ5IHRoZSBnaXZlbiBtYXRyaXguLlxuICogQHBhcmFtIHsobnVtYmVyW118VHlwZWRBcnJheSl9IGFycmF5IFRoZSBhcnJheS4gQXNzdW1lcyB2YWx1ZSBmbG9hdHMgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG1hdHJpeCBBIG1hdHJpeCB0byBtdWx0aXBseSBieS5cbiAqIEByZXR1cm4geyhudW1iZXJbXXxUeXBlZEFycmF5KX0gdGhlIHNhbWUgYXJyYXkgdGhhdCB3YXMgcGFzc2VkIGluXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gcmVvcmllbnREaXJlY3Rpb25zKGFycmF5LCBtYXRyaXgpIHtcbiAgYXBwbHlGdW5jVG9WM0FycmF5KGFycmF5LCBtYXRyaXgsIG00LnRyYW5zZm9ybURpcmVjdGlvbik7XG4gIHJldHVybiBhcnJheTtcbn1cbi8qKlxuICogUmVvcmllbnRzIG5vcm1hbHMgYnkgdGhlIGludmVyc2UtdHJhbnNwb3NlIG9mIHRoZSBnaXZlblxuICogbWF0cml4Li5cbiAqIEBwYXJhbSB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSBhcnJheSBUaGUgYXJyYXkuIEFzc3VtZXMgdmFsdWUgZmxvYXRzIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtYXRyaXggQSBtYXRyaXggdG8gbXVsdGlwbHkgYnkuXG4gKiBAcmV0dXJuIHsobnVtYmVyW118VHlwZWRBcnJheSl9IHRoZSBzYW1lIGFycmF5IHRoYXQgd2FzIHBhc3NlZCBpblxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlb3JpZW50Tm9ybWFscyhhcnJheSwgbWF0cml4KSB7XG4gIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbTQuaW52ZXJzZShtYXRyaXgpLCB0cmFuc2Zvcm1Ob3JtYWwpO1xuICByZXR1cm4gYXJyYXk7XG59XG4vKipcbiAqIFJlb3JpZW50cyBwb3NpdGlvbnMgYnkgdGhlIGdpdmVuIG1hdHJpeC4gSW4gb3RoZXIgd29yZHMsIGl0XG4gKiBtdWx0aXBsaWVzIGVhY2ggdmVydGV4IGJ5IHRoZSBnaXZlbiBtYXRyaXguXG4gKiBAcGFyYW0geyhudW1iZXJbXXxUeXBlZEFycmF5KX0gYXJyYXkgVGhlIGFycmF5LiBBc3N1bWVzIHZhbHVlIGZsb2F0cyBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbWF0cml4IEEgbWF0cml4IHRvIG11bHRpcGx5IGJ5LlxuICogQHJldHVybiB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSB0aGUgc2FtZSBhcnJheSB0aGF0IHdhcyBwYXNzZWQgaW5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiByZW9yaWVudFBvc2l0aW9ucyhhcnJheSwgbWF0cml4KSB7XG4gIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbWF0cml4LCBtNC50cmFuc2Zvcm1Qb2ludCk7XG4gIHJldHVybiBhcnJheTtcbn1cbi8qKlxuICogQHR5cGVkZWYgeyhudW1iZXJbXXxUeXBlZEFycmF5KX0gTmF0aXZlQXJyYXlPclR5cGVkQXJyYXlcbiAqL1xuXG4vKipcbiAqIFJlb3JpZW50cyBhcnJheXMgYnkgdGhlIGdpdmVuIG1hdHJpeC4gQXNzdW1lcyBhcnJheXMgaGF2ZVxuICogbmFtZXMgdGhhdCBjb250YWlucyAncG9zJyBjb3VsZCBiZSByZW9yaWVudGVkIGFzIHBvc2l0aW9ucyxcbiAqICdiaW5vcm0nIG9yICd0YW4nIGFzIGRpcmVjdGlvbnMsIGFuZCAnbm9ybScgYXMgbm9ybWFscy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBOYXRpdmVBcnJheU9yVHlwZWRBcnJheT59IGFycmF5cyBUaGUgdmVydGljZXMgdG8gcmVvcmllbnRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbWF0cml4IG1hdHJpeCB0byByZW9yaWVudCBieS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBOYXRpdmVBcnJheU9yVHlwZWRBcnJheT59IHNhbWUgYXJyYXlzIHRoYXQgd2VyZSBwYXNzZWQgaW4uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gcmVvcmllbnRWZXJ0aWNlcyhhcnJheXMsIG1hdHJpeCkge1xuICBPYmplY3Qua2V5cyhhcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgYXJyYXkgPSBhcnJheXNbbmFtZV07XG5cbiAgICBpZiAobmFtZS5pbmRleE9mKFwicG9zXCIpID49IDApIHtcbiAgICAgIHJlb3JpZW50UG9zaXRpb25zKGFycmF5LCBtYXRyaXgpO1xuICAgIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKFwidGFuXCIpID49IDAgfHwgbmFtZS5pbmRleE9mKFwiYmlub3JtXCIpID49IDApIHtcbiAgICAgIHJlb3JpZW50RGlyZWN0aW9ucyhhcnJheSwgbWF0cml4KTtcbiAgICB9IGVsc2UgaWYgKG5hbWUuaW5kZXhPZihcIm5vcm1cIikgPj0gMCkge1xuICAgICAgcmVvcmllbnROb3JtYWxzKGFycmF5LCBtYXRyaXgpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhcnJheXM7XG59XG4vKipcbiAqIENyZWF0ZXMgWFkgcXVhZCBCdWZmZXJJbmZvXG4gKlxuICogVGhlIGRlZmF1bHQgd2l0aCBubyBwYXJhbWV0ZXJzIHdpbGwgcmV0dXJuIGEgMngyIHF1YWQgd2l0aCB2YWx1ZXMgZnJvbSAtMSB0byArMS5cbiAqIElmIHlvdSB3YW50IGEgdW5pdCBxdWFkIHdpdGggdGhhdCBnb2VzIGZyb20gMCB0byAxIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyhnbCwgMSwgMC41LCAwLjUpO1xuICpcbiAqIElmIHlvdSB3YW50IGEgdW5pdCBxdWFkIGNlbnRlcmVkIGFib3ZlIDAsMCB5b3UnZCBjYWxsIGl0IHdpdGhcbiAqXG4gKiAgICAgdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVhZUXVhZEJ1ZmZlckluZm8oZ2wsIDEsIDAsIDAuNSk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHRoZSBzaXplIGFjcm9zcyB0aGUgcXVhZC4gRGVmYXVsdHMgdG8gMiB3aGljaCBtZWFucyB2ZXJ0aWNlcyB3aWxsIGdvIGZyb20gLTEgdG8gKzFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeE9mZnNldF0gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIHF1YWQgaW4gWFxuICogQHBhcmFtIHtudW1iZXJ9IFt5T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBZXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSB0aGUgY3JlYXRlZCBYWSBRdWFkIEJ1ZmZlckluZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlWFlRdWFkQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBYWSBxdWFkIEJ1ZmZlcnNcbiAqXG4gKiBUaGUgZGVmYXVsdCB3aXRoIG5vIHBhcmFtZXRlcnMgd2lsbCByZXR1cm4gYSAyeDIgcXVhZCB3aXRoIHZhbHVlcyBmcm9tIC0xIHRvICsxLlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgd2l0aCB0aGF0IGdvZXMgZnJvbSAwIHRvIDEgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvKGdsLCAxLCAwLjUsIDAuNSk7XG4gKlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgY2VudGVyZWQgYWJvdmUgMCwwIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyhnbCwgMSwgMCwgMC41KTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gdGhlIHNpemUgYWNyb3NzIHRoZSBxdWFkLiBEZWZhdWx0cyB0byAyIHdoaWNoIG1lYW5zIHZlcnRpY2VzIHdpbGwgZ28gZnJvbSAtMSB0byArMVxuICogQHBhcmFtIHtudW1iZXJ9IFt4T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBYXG4gKiBAcGFyYW0ge251bWJlcn0gW3lPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFlcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IHRoZSBjcmVhdGVkIFhZIFF1YWQgYnVmZmVyc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVYWVF1YWRCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhZIHF1YWQgdmVydGljZXNcbiAqXG4gKiBUaGUgZGVmYXVsdCB3aXRoIG5vIHBhcmFtZXRlcnMgd2lsbCByZXR1cm4gYSAyeDIgcXVhZCB3aXRoIHZhbHVlcyBmcm9tIC0xIHRvICsxLlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgd2l0aCB0aGF0IGdvZXMgZnJvbSAwIHRvIDEgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRWZXJ0aWNlcygxLCAwLjUsIDAuNSk7XG4gKlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgY2VudGVyZWQgYWJvdmUgMCwwIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkVmVydGljZXMoMSwgMCwgMC41KTtcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHRoZSBzaXplIGFjcm9zcyB0aGUgcXVhZC4gRGVmYXVsdHMgdG8gMiB3aGljaCBtZWFucyB2ZXJ0aWNlcyB3aWxsIGdvIGZyb20gLTEgdG8gKzFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeE9mZnNldF0gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIHF1YWQgaW4gWFxuICogQHBhcmFtIHtudW1iZXJ9IFt5T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBZXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IHRoZSBjcmVhdGVkIFhZIFF1YWQgdmVydGljZXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVYWVF1YWRWZXJ0aWNlcyhzaXplLCB4T2Zmc2V0LCB5T2Zmc2V0KSB7XG4gIHNpemUgPSBzaXplIHx8IDI7XG4gIHhPZmZzZXQgPSB4T2Zmc2V0IHx8IDA7XG4gIHlPZmZzZXQgPSB5T2Zmc2V0IHx8IDA7XG4gIHNpemUgKj0gMC41O1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiB7XG4gICAgICBudW1Db21wb25lbnRzOiAyLFxuICAgICAgZGF0YTogW3hPZmZzZXQgKyAtMSAqIHNpemUsIHlPZmZzZXQgKyAtMSAqIHNpemUsIHhPZmZzZXQgKyAxICogc2l6ZSwgeU9mZnNldCArIC0xICogc2l6ZSwgeE9mZnNldCArIC0xICogc2l6ZSwgeU9mZnNldCArIDEgKiBzaXplLCB4T2Zmc2V0ICsgMSAqIHNpemUsIHlPZmZzZXQgKyAxICogc2l6ZV1cbiAgICB9LFxuICAgIG5vcm1hbDogWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLFxuICAgIHRleGNvb3JkOiBbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMV0sXG4gICAgaW5kaWNlczogWzAsIDEsIDIsIDIsIDEsIDNdXG4gIH07XG59XG4vKipcbiAqIENyZWF0ZXMgWFogcGxhbmUgQnVmZmVySW5mby5cbiAqXG4gKiBUaGUgY3JlYXRlZCBwbGFuZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIFdpZHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIERlcHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zV2lkdGhdIE51bWJlciBvZiBzdGVwcyBhY3Jvc3MgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNEZXB0aF0gTnVtYmVyIG9mIHN0ZXBzIGRvd24gdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbbWF0cml4XSBBIG1hdHJpeCBieSB3aGljaCB0byBtdWx0aXBseSBhbGwgdGhlIHZlcnRpY2VzLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgcGxhbmUgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlUGxhbmVCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhaIHBsYW5lIGJ1ZmZlcnMuXG4gKlxuICogVGhlIGNyZWF0ZWQgcGxhbmUgaGFzIHBvc2l0aW9uLCBub3JtYWwsIGFuZCB0ZXhjb29yZCBkYXRhXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSBXaWR0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlcHRoXSBEZXB0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc1dpZHRoXSBOdW1iZXIgb2Ygc3RlcHMgYWNyb3NzIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zRGVwdGhdIE51bWJlciBvZiBzdGVwcyBkb3duIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW21hdHJpeF0gQSBtYXRyaXggYnkgd2hpY2ggdG8gbXVsdGlwbHkgYWxsIHRoZSB2ZXJ0aWNlcy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIHBsYW5lIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVBsYW5lQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBYWiBwbGFuZSB2ZXJ0aWNlcy5cbiAqXG4gKiBUaGUgY3JlYXRlZCBwbGFuZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSBXaWR0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW2RlcHRoXSBEZXB0aCBvZiB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc1dpZHRoXSBOdW1iZXIgb2Ygc3RlcHMgYWNyb3NzIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zRGVwdGhdIE51bWJlciBvZiBzdGVwcyBkb3duIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW21hdHJpeF0gQSBtYXRyaXggYnkgd2hpY2ggdG8gbXVsdGlwbHkgYWxsIHRoZSB2ZXJ0aWNlcy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgcGxhbmUgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlUGxhbmVWZXJ0aWNlcyh3aWR0aCwgZGVwdGgsIHN1YmRpdmlzaW9uc1dpZHRoLCBzdWJkaXZpc2lvbnNEZXB0aCwgbWF0cml4KSB7XG4gIHdpZHRoID0gd2lkdGggfHwgMTtcbiAgZGVwdGggPSBkZXB0aCB8fCAxO1xuICBzdWJkaXZpc2lvbnNXaWR0aCA9IHN1YmRpdmlzaW9uc1dpZHRoIHx8IDE7XG4gIHN1YmRpdmlzaW9uc0RlcHRoID0gc3ViZGl2aXNpb25zRGVwdGggfHwgMTtcbiAgbWF0cml4ID0gbWF0cml4IHx8IG00LmlkZW50aXR5KCk7XG4gIHZhciBudW1WZXJ0aWNlcyA9IChzdWJkaXZpc2lvbnNXaWR0aCArIDEpICogKHN1YmRpdmlzaW9uc0RlcHRoICsgMSk7XG4gIHZhciBwb3NpdGlvbnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIG5vcm1hbHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIHRleGNvb3JkcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydGljZXMpO1xuXG4gIGZvciAodmFyIHogPSAwOyB6IDw9IHN1YmRpdmlzaW9uc0RlcHRoOyB6KyspIHtcbiAgICBmb3IgKHZhciB4ID0gMDsgeCA8PSBzdWJkaXZpc2lvbnNXaWR0aDsgeCsrKSB7XG4gICAgICB2YXIgdSA9IHggLyBzdWJkaXZpc2lvbnNXaWR0aDtcbiAgICAgIHZhciB2ID0geiAvIHN1YmRpdmlzaW9uc0RlcHRoO1xuICAgICAgcG9zaXRpb25zLnB1c2god2lkdGggKiB1IC0gd2lkdGggKiAwLjUsIDAsIGRlcHRoICogdiAtIGRlcHRoICogMC41KTtcbiAgICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKHUsIHYpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBudW1WZXJ0c0Fjcm9zcyA9IHN1YmRpdmlzaW9uc1dpZHRoICsgMTtcbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHN1YmRpdmlzaW9uc1dpZHRoICogc3ViZGl2aXNpb25zRGVwdGggKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgZm9yICh2YXIgX3ogPSAwOyBfeiA8IHN1YmRpdmlzaW9uc0RlcHRoOyBfeisrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIF94ID0gMDsgX3ggPCBzdWJkaXZpc2lvbnNXaWR0aDsgX3grKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAxIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2goKF96ICsgMCkgKiBudW1WZXJ0c0Fjcm9zcyArIF94LCAoX3ogKyAxKSAqIG51bVZlcnRzQWNyb3NzICsgX3gsIChfeiArIDApICogbnVtVmVydHNBY3Jvc3MgKyBfeCArIDEpOyAvLyBNYWtlIHRyaWFuZ2xlIDIgb2YgcXVhZC5cblxuICAgICAgaW5kaWNlcy5wdXNoKChfeiArIDEpICogbnVtVmVydHNBY3Jvc3MgKyBfeCwgKF96ICsgMSkgKiBudW1WZXJ0c0Fjcm9zcyArIF94ICsgMSwgKF96ICsgMCkgKiBudW1WZXJ0c0Fjcm9zcyArIF94ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGFycmF5cyA9IHJlb3JpZW50VmVydGljZXMoe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9LCBtYXRyaXgpO1xuICByZXR1cm4gYXJyYXlzO1xufVxuLyoqXG4gKiBDcmVhdGVzIHNwaGVyZSBCdWZmZXJJbmZvLlxuICpcbiAqIFRoZSBjcmVhdGVkIHNwaGVyZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBzcGhlcmUgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3BoZXJlQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBzcGhlcmUgYnVmZmVycy5cbiAqXG4gKiBUaGUgY3JlYXRlZCBzcGhlcmUgaGFzIHBvc2l0aW9uLCBub3JtYWwsIGFuZCB0ZXhjb29yZCBkYXRhXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIHJhZGl1cyBvZiB0aGUgc3BoZXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0F4aXMgbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgc3BoZXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0hlaWdodCBudW1iZXIgb2YgdmVydGljYWxseSBvbiB0aGUgc3BoZXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFuc10gd2hlcmUgdG8gc3RhcnQgdGhlXG4gKiAgICAgdG9wIG9mIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnNdIFdoZXJlIHRvIGVuZCB0aGVcbiAqICAgICBib3R0b20gb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IE1hdGguUEkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExvbmdpdHVkZUluUmFkaWFuc10gd2hlcmUgdG8gc3RhcnRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X2VuZExvbmdpdHVkZUluUmFkaWFuc10gd2hlcmUgdG8gZW5kXG4gKiAgICAgd3JhcHBpbmcgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDIgKiBNYXRoLlBJLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgc3BoZXJlIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVNwaGVyZUJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgc3BoZXJlIHZlcnRpY2VzLlxuICpcbiAqIFRoZSBjcmVhdGVkIHNwaGVyZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIHJhZGl1cyBvZiB0aGUgc3BoZXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0F4aXMgbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgc3BoZXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0hlaWdodCBudW1iZXIgb2YgdmVydGljYWxseSBvbiB0aGUgc3BoZXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFuc10gd2hlcmUgdG8gc3RhcnQgdGhlXG4gKiAgICAgdG9wIG9mIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnNdIFdoZXJlIHRvIGVuZCB0aGVcbiAqICAgICBib3R0b20gb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IE1hdGguUEkuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExvbmdpdHVkZUluUmFkaWFuc10gd2hlcmUgdG8gc3RhcnRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X2VuZExvbmdpdHVkZUluUmFkaWFuc10gd2hlcmUgdG8gZW5kXG4gKiAgICAgd3JhcHBpbmcgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDIgKiBNYXRoLlBJLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCBzcGhlcmUgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU3BoZXJlVmVydGljZXMocmFkaXVzLCBzdWJkaXZpc2lvbnNBeGlzLCBzdWJkaXZpc2lvbnNIZWlnaHQsIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zLCBvcHRfZW5kTGF0aXR1ZGVJblJhZGlhbnMsIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucywgb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucykge1xuICBpZiAoc3ViZGl2aXNpb25zQXhpcyA8PSAwIHx8IHN1YmRpdmlzaW9uc0hlaWdodCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzdWJkaXZpc2lvbkF4aXMgYW5kIHN1YmRpdmlzaW9uSGVpZ2h0IG11c3QgYmUgPiAwJyk7XG4gIH1cblxuICBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucyA9IG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zIHx8IDA7XG4gIG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyA9IG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyB8fCBNYXRoLlBJO1xuICBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgPSBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnMgfHwgMDtcbiAgb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyA9IG9wdF9lbmRMb25naXR1ZGVJblJhZGlhbnMgfHwgTWF0aC5QSSAqIDI7XG4gIHZhciBsYXRSYW5nZSA9IG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucyAtIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zO1xuICB2YXIgbG9uZ1JhbmdlID0gb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyAtIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFuczsgLy8gV2UgYXJlIGdvaW5nIHRvIGdlbmVyYXRlIG91ciBzcGhlcmUgYnkgaXRlcmF0aW5nIHRocm91Z2ggaXRzXG4gIC8vIHNwaGVyaWNhbCBjb29yZGluYXRlcyBhbmQgZ2VuZXJhdGluZyAyIHRyaWFuZ2xlcyBmb3IgZWFjaCBxdWFkIG9uIGFcbiAgLy8gcmluZyBvZiB0aGUgc3BoZXJlLlxuXG4gIHZhciBudW1WZXJ0aWNlcyA9IChzdWJkaXZpc2lvbnNBeGlzICsgMSkgKiAoc3ViZGl2aXNpb25zSGVpZ2h0ICsgMSk7XG4gIHZhciBwb3NpdGlvbnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIG5vcm1hbHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIHRleGNvb3JkcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydGljZXMpOyAvLyBHZW5lcmF0ZSB0aGUgaW5kaXZpZHVhbCB2ZXJ0aWNlcyBpbiBvdXIgdmVydGV4IGJ1ZmZlci5cblxuICBmb3IgKHZhciB5ID0gMDsgeSA8PSBzdWJkaXZpc2lvbnNIZWlnaHQ7IHkrKykge1xuICAgIGZvciAodmFyIHggPSAwOyB4IDw9IHN1YmRpdmlzaW9uc0F4aXM7IHgrKykge1xuICAgICAgLy8gR2VuZXJhdGUgYSB2ZXJ0ZXggYmFzZWQgb24gaXRzIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuICAgICAgdmFyIHUgPSB4IC8gc3ViZGl2aXNpb25zQXhpcztcbiAgICAgIHZhciB2ID0geSAvIHN1YmRpdmlzaW9uc0hlaWdodDtcbiAgICAgIHZhciB0aGV0YSA9IGxvbmdSYW5nZSAqIHUgKyBvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnM7XG4gICAgICB2YXIgcGhpID0gbGF0UmFuZ2UgKiB2ICsgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gICAgICB2YXIgc2luVGhldGEgPSBNYXRoLnNpbih0aGV0YSk7XG4gICAgICB2YXIgY29zVGhldGEgPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICB2YXIgc2luUGhpID0gTWF0aC5zaW4ocGhpKTtcbiAgICAgIHZhciBjb3NQaGkgPSBNYXRoLmNvcyhwaGkpO1xuICAgICAgdmFyIHV4ID0gY29zVGhldGEgKiBzaW5QaGk7XG4gICAgICB2YXIgdXkgPSBjb3NQaGk7XG4gICAgICB2YXIgdXogPSBzaW5UaGV0YSAqIHNpblBoaTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHJhZGl1cyAqIHV4LCByYWRpdXMgKiB1eSwgcmFkaXVzICogdXopO1xuICAgICAgbm9ybWFscy5wdXNoKHV4LCB1eSwgdXopO1xuICAgICAgdGV4Y29vcmRzLnB1c2goMSAtIHUsIHYpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBudW1WZXJ0c0Fyb3VuZCA9IHN1YmRpdmlzaW9uc0F4aXMgKyAxO1xuICB2YXIgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3ViZGl2aXNpb25zQXhpcyAqIHN1YmRpdmlzaW9uc0hlaWdodCAqIDIsIFVpbnQxNkFycmF5KTtcblxuICBmb3IgKHZhciBfeDIgPSAwOyBfeDIgPCBzdWJkaXZpc2lvbnNBeGlzOyBfeDIrKykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmb3IgKHZhciBfeSA9IDA7IF95IDwgc3ViZGl2aXNpb25zSGVpZ2h0OyBfeSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAvLyBNYWtlIHRyaWFuZ2xlIDEgb2YgcXVhZC5cbiAgICAgIGluZGljZXMucHVzaCgoX3kgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyLCAoX3kgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyICsgMSwgKF95ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIF94Mik7IC8vIE1ha2UgdHJpYW5nbGUgMiBvZiBxdWFkLlxuXG4gICAgICBpbmRpY2VzLnB1c2goKF95ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIF94MiwgKF95ICsgMCkgKiBudW1WZXJ0c0Fyb3VuZCArIF94MiArIDEsIChfeSArIDEpICogbnVtVmVydHNBcm91bmQgKyBfeDIgKyAxKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9O1xufVxuLyoqXG4gKiBBcnJheSBvZiB0aGUgaW5kaWNlcyBvZiBjb3JuZXJzIG9mIGVhY2ggZmFjZSBvZiBhIGN1YmUuXG4gKiBAdHlwZSB7QXJyYXkuPG51bWJlcltdPn1cbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgQ1VCRV9GQUNFX0lORElDRVMgPSBbWzMsIDcsIDUsIDFdLCAvLyByaWdodFxuWzYsIDIsIDAsIDRdLCAvLyBsZWZ0XG5bNiwgNywgMywgMl0sIC8vID8/XG5bMCwgMSwgNSwgNF0sIC8vID8/XG5bNywgNiwgNCwgNV0sIC8vIGZyb250XG5bMiwgMywgMSwgMF0gLy8gYmFja1xuXTtcbi8qKlxuICogQ3JlYXRlcyBhIEJ1ZmZlckluZm8gZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHdpZHRoLCBoZWlnaHQgYW5kIGRlcHRoIG9mIHRoZSBjdWJlLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3ViZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGJ1ZmZlcnMgYW5kIGluZGljZXMgZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpemVdIHdpZHRoLCBoZWlnaHQgYW5kIGRlcHRoIG9mIHRoZSBjdWJlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3ViZUJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIHZlcnRpY2VzIGFuZCBpbmRpY2VzIGZvciBhIGN1YmUuXG4gKlxuICogVGhlIGN1YmUgaXMgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpbi4gKC1zaXplIC8gMiwgc2l6ZSAvIDIpLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gd2lkdGgsIGhlaWdodCBhbmQgZGVwdGggb2YgdGhlIGN1YmUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVDdWJlVmVydGljZXMoc2l6ZSkge1xuICBzaXplID0gc2l6ZSB8fCAxO1xuICB2YXIgayA9IHNpemUgLyAyO1xuICB2YXIgY29ybmVyVmVydGljZXMgPSBbWy1rLCAtaywgLWtdLCBbK2ssIC1rLCAta10sIFstaywgK2ssIC1rXSwgWytrLCAraywgLWtdLCBbLWssIC1rLCAra10sIFsraywgLWssICtrXSwgWy1rLCAraywgK2tdLCBbK2ssICtrLCAra11dO1xuICB2YXIgZmFjZU5vcm1hbHMgPSBbWysxLCArMCwgKzBdLCBbLTEsICswLCArMF0sIFsrMCwgKzEsICswXSwgWyswLCAtMSwgKzBdLCBbKzAsICswLCArMV0sIFsrMCwgKzAsIC0xXV07XG4gIHZhciB1dkNvb3JkcyA9IFtbMSwgMF0sIFswLCAwXSwgWzAsIDFdLCBbMSwgMV1dO1xuICB2YXIgbnVtVmVydGljZXMgPSA2ICogNDtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA2ICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAodmFyIGYgPSAwOyBmIDwgNjsgKytmKSB7XG4gICAgdmFyIGZhY2VJbmRpY2VzID0gQ1VCRV9GQUNFX0lORElDRVNbZl07XG5cbiAgICBmb3IgKHZhciB2ID0gMDsgdiA8IDQ7ICsrdikge1xuICAgICAgdmFyIHBvc2l0aW9uID0gY29ybmVyVmVydGljZXNbZmFjZUluZGljZXNbdl1dO1xuICAgICAgdmFyIG5vcm1hbCA9IGZhY2VOb3JtYWxzW2ZdO1xuICAgICAgdmFyIHV2ID0gdXZDb29yZHNbdl07IC8vIEVhY2ggZmFjZSBuZWVkcyBhbGwgZm91ciB2ZXJ0aWNlcyBiZWNhdXNlIHRoZSBub3JtYWxzIGFuZCB0ZXh0dXJlXG4gICAgICAvLyBjb29yZGluYXRlcyBhcmUgbm90IGFsbCB0aGUgc2FtZS5cblxuICAgICAgcG9zaXRpb25zLnB1c2gocG9zaXRpb24pO1xuICAgICAgbm9ybWFscy5wdXNoKG5vcm1hbCk7XG4gICAgICB0ZXhjb29yZHMucHVzaCh1dik7XG4gICAgfSAvLyBUd28gdHJpYW5nbGVzIG1ha2UgYSBzcXVhcmUgZmFjZS5cblxuXG4gICAgdmFyIG9mZnNldCA9IDQgKiBmO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAxLCBvZmZzZXQgKyAyKTtcbiAgICBpbmRpY2VzLnB1c2gob2Zmc2V0ICsgMCwgb2Zmc2V0ICsgMiwgb2Zmc2V0ICsgMyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgQnVmZmVySW5mbyBmb3IgYSB0cnVuY2F0ZWQgY29uZSwgd2hpY2ggaXMgbGlrZSBhIGN5bGluZGVyXG4gKiBleGNlcHQgdGhhdCBpdCBoYXMgZGlmZmVyZW50IHRvcCBhbmQgYm90dG9tIHJhZGlpLiBBIHRydW5jYXRlZCBjb25lXG4gKiBjYW4gYWxzbyBiZSB1c2VkIHRvIGNyZWF0ZSBjeWxpbmRlcnMgYW5kIHJlZ3VsYXIgY29uZXMuIFRoZVxuICogdHJ1bmNhdGVkIGNvbmUgd2lsbCBiZSBjcmVhdGVkIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4sIHdpdGggdGhlXG4gKiB5IGF4aXMgYXMgaXRzIHZlcnRpY2FsIGF4aXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tUmFkaXVzIEJvdHRvbSByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wUmFkaXVzIFRvcCByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZVxuICogICAgIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBjb25lIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGJ1ZmZlcnMgZm9yIGEgdHJ1bmNhdGVkIGNvbmUsIHdoaWNoIGlzIGxpa2UgYSBjeWxpbmRlclxuICogZXhjZXB0IHRoYXQgaXQgaGFzIGRpZmZlcmVudCB0b3AgYW5kIGJvdHRvbSByYWRpaS4gQSB0cnVuY2F0ZWQgY29uZVxuICogY2FuIGFsc28gYmUgdXNlZCB0byBjcmVhdGUgY3lsaW5kZXJzIGFuZCByZWd1bGFyIGNvbmVzLiBUaGVcbiAqIHRydW5jYXRlZCBjb25lIHdpbGwgYmUgY3JlYXRlZCBjZW50ZXJlZCBhYm91dCB0aGUgb3JpZ2luLCB3aXRoIHRoZVxuICogeSBheGlzIGFzIGl0cyB2ZXJ0aWNhbCBheGlzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbVJhZGl1cyBCb3R0b20gcmFkaXVzIG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHRvcFJhZGl1cyBUb3AgcmFkaXVzIG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBkb3duIHRoZVxuICogICAgIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0X3RvcENhcF0gQ3JlYXRlIHRvcCBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0X2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgY29uZSBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyB2ZXJ0aWNlcyBmb3IgYSB0cnVuY2F0ZWQgY29uZSwgd2hpY2ggaXMgbGlrZSBhIGN5bGluZGVyXG4gKiBleGNlcHQgdGhhdCBpdCBoYXMgZGlmZmVyZW50IHRvcCBhbmQgYm90dG9tIHJhZGlpLiBBIHRydW5jYXRlZCBjb25lXG4gKiBjYW4gYWxzbyBiZSB1c2VkIHRvIGNyZWF0ZSBjeWxpbmRlcnMgYW5kIHJlZ3VsYXIgY29uZXMuIFRoZVxuICogdHJ1bmNhdGVkIGNvbmUgd2lsbCBiZSBjcmVhdGVkIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4sIHdpdGggdGhlXG4gKiB5IGF4aXMgYXMgaXRzIHZlcnRpY2FsIGF4aXMuIC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tUmFkaXVzIEJvdHRvbSByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wUmFkaXVzIFRvcCByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZVxuICogICAgIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIGNvbmUgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzKGJvdHRvbVJhZGl1cywgdG9wUmFkaXVzLCBoZWlnaHQsIHJhZGlhbFN1YmRpdmlzaW9ucywgdmVydGljYWxTdWJkaXZpc2lvbnMsIG9wdF90b3BDYXAsIG9wdF9ib3R0b21DYXApIHtcbiAgaWYgKHJhZGlhbFN1YmRpdmlzaW9ucyA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JhZGlhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsU3ViZGl2aXNpb25zIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndmVydGljYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAxIG9yIGdyZWF0ZXInKTtcbiAgfVxuXG4gIHZhciB0b3BDYXAgPSBvcHRfdG9wQ2FwID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0X3RvcENhcDtcbiAgdmFyIGJvdHRvbUNhcCA9IG9wdF9ib3R0b21DYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRfYm90dG9tQ2FwO1xuICB2YXIgZXh0cmEgPSAodG9wQ2FwID8gMiA6IDApICsgKGJvdHRvbUNhcCA/IDIgOiAwKTtcbiAgdmFyIG51bVZlcnRpY2VzID0gKHJhZGlhbFN1YmRpdmlzaW9ucyArIDEpICogKHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMSArIGV4dHJhKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCByYWRpYWxTdWJkaXZpc2lvbnMgKiAodmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYSAvIDIpICogMiwgVWludDE2QXJyYXkpO1xuICB2YXIgdmVydHNBcm91bmRFZGdlID0gcmFkaWFsU3ViZGl2aXNpb25zICsgMTsgLy8gVGhlIHNsYW50IG9mIHRoZSBjb25lIGlzIGNvbnN0YW50IGFjcm9zcyBpdHMgc3VyZmFjZVxuXG4gIHZhciBzbGFudCA9IE1hdGguYXRhbjIoYm90dG9tUmFkaXVzIC0gdG9wUmFkaXVzLCBoZWlnaHQpO1xuICB2YXIgY29zU2xhbnQgPSBNYXRoLmNvcyhzbGFudCk7XG4gIHZhciBzaW5TbGFudCA9IE1hdGguc2luKHNsYW50KTtcbiAgdmFyIHN0YXJ0ID0gdG9wQ2FwID8gLTIgOiAwO1xuICB2YXIgZW5kID0gdmVydGljYWxTdWJkaXZpc2lvbnMgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuXG4gIGZvciAodmFyIHl5ID0gc3RhcnQ7IHl5IDw9IGVuZDsgKyt5eSkge1xuICAgIHZhciB2ID0geXkgLyB2ZXJ0aWNhbFN1YmRpdmlzaW9ucztcbiAgICB2YXIgeSA9IGhlaWdodCAqIHY7XG4gICAgdmFyIHJpbmdSYWRpdXMgPSB2b2lkIDA7XG5cbiAgICBpZiAoeXkgPCAwKSB7XG4gICAgICB5ID0gMDtcbiAgICAgIHYgPSAxO1xuICAgICAgcmluZ1JhZGl1cyA9IGJvdHRvbVJhZGl1cztcbiAgICB9IGVsc2UgaWYgKHl5ID4gdmVydGljYWxTdWJkaXZpc2lvbnMpIHtcbiAgICAgIHkgPSBoZWlnaHQ7XG4gICAgICB2ID0gMTtcbiAgICAgIHJpbmdSYWRpdXMgPSB0b3BSYWRpdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJpbmdSYWRpdXMgPSBib3R0b21SYWRpdXMgKyAodG9wUmFkaXVzIC0gYm90dG9tUmFkaXVzKSAqICh5eSAvIHZlcnRpY2FsU3ViZGl2aXNpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoeXkgPT09IC0yIHx8IHl5ID09PSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIDIpIHtcbiAgICAgIHJpbmdSYWRpdXMgPSAwO1xuICAgICAgdiA9IDA7XG4gICAgfVxuXG4gICAgeSAtPSBoZWlnaHQgLyAyO1xuXG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHZlcnRzQXJvdW5kRWRnZTsgKytpaSkge1xuICAgICAgdmFyIHNpbiA9IE1hdGguc2luKGlpICogTWF0aC5QSSAqIDIgLyByYWRpYWxTdWJkaXZpc2lvbnMpO1xuICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGlpICogTWF0aC5QSSAqIDIgLyByYWRpYWxTdWJkaXZpc2lvbnMpO1xuICAgICAgcG9zaXRpb25zLnB1c2goc2luICogcmluZ1JhZGl1cywgeSwgY29zICogcmluZ1JhZGl1cyk7XG5cbiAgICAgIGlmICh5eSA8IDApIHtcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIC0xLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAoeXkgPiB2ZXJ0aWNhbFN1YmRpdmlzaW9ucykge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMSwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHJpbmdSYWRpdXMgPT09IDAuMCkge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxzLnB1c2goc2luICogY29zU2xhbnQsIHNpblNsYW50LCBjb3MgKiBjb3NTbGFudCk7XG4gICAgICB9XG5cbiAgICAgIHRleGNvb3Jkcy5wdXNoKGlpIC8gcmFkaWFsU3ViZGl2aXNpb25zLCAxIC0gdik7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgX3l5ID0gMDsgX3l5IDwgdmVydGljYWxTdWJkaXZpc2lvbnMgKyBleHRyYTsgKytfeXkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgaWYgKF95eSA9PT0gMSAmJiB0b3BDYXAgfHwgX3l5ID09PSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhIC0gMiAmJiBib3R0b21DYXApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9paSA9IDA7IF9paSA8IHJhZGlhbFN1YmRpdmlzaW9uczsgKytfaWkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGluZGljZXMucHVzaCh2ZXJ0c0Fyb3VuZEVkZ2UgKiAoX3l5ICsgMCkgKyAwICsgX2lpLCB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoX3l5ICsgMCkgKyAxICsgX2lpLCB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoX3l5ICsgMSkgKyAxICsgX2lpKTtcbiAgICAgIGluZGljZXMucHVzaCh2ZXJ0c0Fyb3VuZEVkZ2UgKiAoX3l5ICsgMCkgKyAwICsgX2lpLCB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoX3l5ICsgMSkgKyAxICsgX2lpLCB2ZXJ0c0Fyb3VuZEVkZ2UgKiAoX3l5ICsgMSkgKyAwICsgX2lpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9O1xufVxuLyoqXG4gKiBFeHBhbmRzIFJMRSBkYXRhXG4gKiBAcGFyYW0ge251bWJlcltdfSBybGVEYXRhIGRhdGEgaW4gZm9ybWF0IG9mIHJ1bi1sZW5ndGgsIHgsIHksIHosIHJ1bi1sZW5ndGgsIHgsIHksIHpcbiAqIEBwYXJhbSB7bnVtYmVyW119IFtwYWRkaW5nXSB2YWx1ZSB0byBhZGQgZWFjaCBlbnRyeSB3aXRoLlxuICogQHJldHVybiB7bnVtYmVyW119IHRoZSBleHBhbmRlZCBybGVEYXRhXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZXhwYW5kUkxFRGF0YShybGVEYXRhLCBwYWRkaW5nKSB7XG4gIHBhZGRpbmcgPSBwYWRkaW5nIHx8IFtdO1xuICB2YXIgZGF0YSA9IFtdO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBybGVEYXRhLmxlbmd0aDsgaWkgKz0gNCkge1xuICAgIHZhciBydW5MZW5ndGggPSBybGVEYXRhW2lpXTtcbiAgICB2YXIgZWxlbWVudCA9IHJsZURhdGEuc2xpY2UoaWkgKyAxLCBpaSArIDQpO1xuICAgIGVsZW1lbnQucHVzaC5hcHBseShlbGVtZW50LCBwYWRkaW5nKTtcblxuICAgIGZvciAodmFyIGpqID0gMDsgamogPCBydW5MZW5ndGg7ICsramopIHtcbiAgICAgIGRhdGEucHVzaC5hcHBseShkYXRhLCBlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbi8qKlxuICogQ3JlYXRlcyAzRCAnRicgQnVmZmVySW5mby5cbiAqIEFuICdGJyBpcyB1c2VmdWwgYmVjYXVzZSB5b3UgY2FuIGVhc2lseSB0ZWxsIHdoaWNoIHdheSBpdCBpcyBvcmllbnRlZC5cbiAqIFRoZSBjcmVhdGVkICdGJyBoYXMgcG9zaXRpb24sIG5vcm1hbCwgdGV4Y29vcmQsIGFuZCBjb2xvciBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlM0RGQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyAzRCAnRicgYnVmZmVycy5cbiAqIEFuICdGJyBpcyB1c2VmdWwgYmVjYXVzZSB5b3UgY2FuIGVhc2lseSB0ZWxsIHdoaWNoIHdheSBpdCBpcyBvcmllbnRlZC5cbiAqIFRoZSBjcmVhdGVkICdGJyBoYXMgcG9zaXRpb24sIG5vcm1hbCwgdGV4Y29vcmQsIGFuZCBjb2xvciBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlM0RGQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyAzRCAnRicgdmVydGljZXMuXG4gKiBBbiAnRicgaXMgdXNlZnVsIGJlY2F1c2UgeW91IGNhbiBlYXNpbHkgdGVsbCB3aGljaCB3YXkgaXQgaXMgb3JpZW50ZWQuXG4gKiBUaGUgY3JlYXRlZCAnRicgaGFzIHBvc2l0aW9uLCBub3JtYWwsIHRleGNvb3JkLCBhbmQgY29sb3IgYXJyYXlzLlxuICpcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlM0RGVmVydGljZXMoKSB7XG4gIHZhciBwb3NpdGlvbnMgPSBbLy8gbGVmdCBjb2x1bW4gZnJvbnRcbiAgMCwgMCwgMCwgMCwgMTUwLCAwLCAzMCwgMCwgMCwgMCwgMTUwLCAwLCAzMCwgMTUwLCAwLCAzMCwgMCwgMCwgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgMzAsIDAsIDAsIDMwLCAzMCwgMCwgMTAwLCAwLCAwLCAzMCwgMzAsIDAsIDEwMCwgMzAsIDAsIDEwMCwgMCwgMCwgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcbiAgMzAsIDYwLCAwLCAzMCwgOTAsIDAsIDY3LCA2MCwgMCwgMzAsIDkwLCAwLCA2NywgOTAsIDAsIDY3LCA2MCwgMCwgLy8gbGVmdCBjb2x1bW4gYmFja1xuICAwLCAwLCAzMCwgMzAsIDAsIDMwLCAwLCAxNTAsIDMwLCAwLCAxNTAsIDMwLCAzMCwgMCwgMzAsIDMwLCAxNTAsIDMwLCAvLyB0b3AgcnVuZyBiYWNrXG4gIDMwLCAwLCAzMCwgMTAwLCAwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMTAwLCAwLCAzMCwgMTAwLCAzMCwgMzAsIC8vIG1pZGRsZSBydW5nIGJhY2tcbiAgMzAsIDYwLCAzMCwgNjcsIDYwLCAzMCwgMzAsIDkwLCAzMCwgMzAsIDkwLCAzMCwgNjcsIDYwLCAzMCwgNjcsIDkwLCAzMCwgLy8gdG9wXG4gIDAsIDAsIDAsIDEwMCwgMCwgMCwgMTAwLCAwLCAzMCwgMCwgMCwgMCwgMTAwLCAwLCAzMCwgMCwgMCwgMzAsIC8vIHRvcCBydW5nIGZyb250XG4gIDEwMCwgMCwgMCwgMTAwLCAzMCwgMCwgMTAwLCAzMCwgMzAsIDEwMCwgMCwgMCwgMTAwLCAzMCwgMzAsIDEwMCwgMCwgMzAsIC8vIHVuZGVyIHRvcCBydW5nXG4gIDMwLCAzMCwgMCwgMzAsIDMwLCAzMCwgMTAwLCAzMCwgMzAsIDMwLCAzMCwgMCwgMTAwLCAzMCwgMzAsIDEwMCwgMzAsIDAsIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxuICAzMCwgMzAsIDAsIDMwLCA2MCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMCwgMzAsIDYwLCAwLCAzMCwgNjAsIDMwLCAvLyB0b3Agb2YgbWlkZGxlIHJ1bmdcbiAgMzAsIDYwLCAwLCA2NywgNjAsIDMwLCAzMCwgNjAsIDMwLCAzMCwgNjAsIDAsIDY3LCA2MCwgMCwgNjcsIDYwLCAzMCwgLy8gZnJvbnQgb2YgbWlkZGxlIHJ1bmdcbiAgNjcsIDYwLCAwLCA2NywgOTAsIDMwLCA2NywgNjAsIDMwLCA2NywgNjAsIDAsIDY3LCA5MCwgMCwgNjcsIDkwLCAzMCwgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxuICAzMCwgOTAsIDAsIDMwLCA5MCwgMzAsIDY3LCA5MCwgMzAsIDMwLCA5MCwgMCwgNjcsIDkwLCAzMCwgNjcsIDkwLCAwLCAvLyBmcm9udCBvZiBib3R0b21cbiAgMzAsIDkwLCAwLCAzMCwgMTUwLCAzMCwgMzAsIDkwLCAzMCwgMzAsIDkwLCAwLCAzMCwgMTUwLCAwLCAzMCwgMTUwLCAzMCwgLy8gYm90dG9tXG4gIDAsIDE1MCwgMCwgMCwgMTUwLCAzMCwgMzAsIDE1MCwgMzAsIDAsIDE1MCwgMCwgMzAsIDE1MCwgMzAsIDMwLCAxNTAsIDAsIC8vIGxlZnQgc2lkZVxuICAwLCAwLCAwLCAwLCAwLCAzMCwgMCwgMTUwLCAzMCwgMCwgMCwgMCwgMCwgMTUwLCAzMCwgMCwgMTUwLCAwXTtcbiAgdmFyIHRleGNvb3JkcyA9IFsvLyBsZWZ0IGNvbHVtbiBmcm9udFxuICAwLjIyLCAwLjE5LCAwLjIyLCAwLjc5LCAwLjM0LCAwLjE5LCAwLjIyLCAwLjc5LCAwLjM0LCAwLjc5LCAwLjM0LCAwLjE5LCAvLyB0b3AgcnVuZyBmcm9udFxuICAwLjM0LCAwLjE5LCAwLjM0LCAwLjMxLCAwLjYyLCAwLjE5LCAwLjM0LCAwLjMxLCAwLjYyLCAwLjMxLCAwLjYyLCAwLjE5LCAvLyBtaWRkbGUgcnVuZyBmcm9udFxuICAwLjM0LCAwLjQzLCAwLjM0LCAwLjU1LCAwLjQ5LCAwLjQzLCAwLjM0LCAwLjU1LCAwLjQ5LCAwLjU1LCAwLjQ5LCAwLjQzLCAvLyBsZWZ0IGNvbHVtbiBiYWNrXG4gIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIC8vIHRvcCBydW5nIGJhY2tcbiAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgLy8gbWlkZGxlIHJ1bmcgYmFja1xuICAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAxLCAvLyB0b3BcbiAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgLy8gdW5kZXIgdG9wIHJ1bmdcbiAgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAvLyBmcm9udCBvZiBtaWRkbGUgcnVuZ1xuICAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIC8vIGZyb250IG9mIGJvdHRvbVxuICAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAvLyBib3R0b21cbiAgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgLy8gbGVmdCBzaWRlXG4gIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDBdO1xuICB2YXIgbm9ybWFscyA9IGV4cGFuZFJMRURhdGEoWy8vIGxlZnQgY29sdW1uIGZyb250XG4gIC8vIHRvcCBydW5nIGZyb250XG4gIC8vIG1pZGRsZSBydW5nIGZyb250XG4gIDE4LCAwLCAwLCAxLCAvLyBsZWZ0IGNvbHVtbiBiYWNrXG4gIC8vIHRvcCBydW5nIGJhY2tcbiAgLy8gbWlkZGxlIHJ1bmcgYmFja1xuICAxOCwgMCwgMCwgLTEsIC8vIHRvcFxuICA2LCAwLCAxLCAwLCAvLyB0b3AgcnVuZyBmcm9udFxuICA2LCAxLCAwLCAwLCAvLyB1bmRlciB0b3AgcnVuZ1xuICA2LCAwLCAtMSwgMCwgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gIDYsIDEsIDAsIDAsIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICA2LCAwLCAxLCAwLCAvLyBmcm9udCBvZiBtaWRkbGUgcnVuZ1xuICA2LCAxLCAwLCAwLCAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gIDYsIDAsIC0xLCAwLCAvLyBmcm9udCBvZiBib3R0b21cbiAgNiwgMSwgMCwgMCwgLy8gYm90dG9tXG4gIDYsIDAsIC0xLCAwLCAvLyBsZWZ0IHNpZGVcbiAgNiwgLTEsIDAsIDBdKTtcbiAgdmFyIGNvbG9ycyA9IGV4cGFuZFJMRURhdGEoWy8vIGxlZnQgY29sdW1uIGZyb250XG4gIC8vIHRvcCBydW5nIGZyb250XG4gIC8vIG1pZGRsZSBydW5nIGZyb250XG4gIDE4LCAyMDAsIDcwLCAxMjAsIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgLy8gdG9wIHJ1bmcgYmFja1xuICAvLyBtaWRkbGUgcnVuZyBiYWNrXG4gIDE4LCA4MCwgNzAsIDIwMCwgLy8gdG9wXG4gIDYsIDcwLCAyMDAsIDIxMCwgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgNiwgMjAwLCAyMDAsIDcwLCAvLyB1bmRlciB0b3AgcnVuZ1xuICA2LCAyMTAsIDEwMCwgNzAsIC8vIGJldHdlZW4gdG9wIHJ1bmcgYW5kIG1pZGRsZVxuICA2LCAyMTAsIDE2MCwgNzAsIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICA2LCA3MCwgMTgwLCAyMTAsIC8vIGZyb250IG9mIG1pZGRsZSBydW5nXG4gIDYsIDEwMCwgNzAsIDIxMCwgLy8gYm90dG9tIG9mIG1pZGRsZSBydW5nLlxuICA2LCA3NiwgMjEwLCAxMDAsIC8vIGZyb250IG9mIGJvdHRvbVxuICA2LCAxNDAsIDIxMCwgODAsIC8vIGJvdHRvbVxuICA2LCA5MCwgMTMwLCAxMTAsIC8vIGxlZnQgc2lkZVxuICA2LCAxNjAsIDE2MCwgMjIwXSwgWzI1NV0pO1xuICB2YXIgbnVtVmVydHMgPSBwb3NpdGlvbnMubGVuZ3RoIC8gMztcbiAgdmFyIGFycmF5cyA9IHtcbiAgICBwb3NpdGlvbjogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0cyksXG4gICAgdGV4Y29vcmQ6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydHMpLFxuICAgIG5vcm1hbDogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0cyksXG4gICAgY29sb3I6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoNCwgbnVtVmVydHMsIFVpbnQ4QXJyYXkpLFxuICAgIGluZGljZXM6IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydHMgLyAzLCBVaW50MTZBcnJheSlcbiAgfTtcbiAgYXJyYXlzLnBvc2l0aW9uLnB1c2gocG9zaXRpb25zKTtcbiAgYXJyYXlzLnRleGNvb3JkLnB1c2godGV4Y29vcmRzKTtcbiAgYXJyYXlzLm5vcm1hbC5wdXNoKG5vcm1hbHMpO1xuICBhcnJheXMuY29sb3IucHVzaChjb2xvcnMpO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBudW1WZXJ0czsgKytpaSkge1xuICAgIGFycmF5cy5pbmRpY2VzLnB1c2goaWkpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5cztcbn1cbi8qKlxuICogQ3JlYXRlcyBjcmVzY2VudCBCdWZmZXJJbmZvLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsUmFkaXVzIFRoZSB2ZXJ0aWNhbCByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGlubmVyUmFkaXVzIFRoZSBpbm5lciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydE9mZnNldF0gV2hlcmUgdG8gc3RhcnQgYXJjLiBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZE9mZnNldF0gV2hlcmUgdG8gZW5kIGFyZy4gRGVmYXVsdCAxLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2NlbnQgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNlbnRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGNyZXNjZW50IHZlcnRpY2VzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNlbnRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGNyZXNjZW50IEJ1ZmZlckluZm8uXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxSYWRpdXMgVGhlIHZlcnRpY2FsIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0ZXJSYWRpdXMgVGhlIG91dGVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIFRoZSB0aGlja25lc3Mgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0Rvd24gbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2NlbnQgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNjZW50QnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBjcmVzY2VudCB2ZXJ0aWNlcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxSYWRpdXMgVGhlIHZlcnRpY2FsIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0ZXJSYWRpdXMgVGhlIG91dGVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIFRoZSB0aGlja25lc3Mgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0Rvd24gbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNyZXNjZW50VmVydGljZXModmVydGljYWxSYWRpdXMsIG91dGVyUmFkaXVzLCBpbm5lclJhZGl1cywgdGhpY2tuZXNzLCBzdWJkaXZpc2lvbnNEb3duLCBzdGFydE9mZnNldCwgZW5kT2Zmc2V0KSB7XG4gIGlmIChzdWJkaXZpc2lvbnNEb3duIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3N1YmRpdmlzaW9uRG93biBtdXN0IGJlID4gMCcpO1xuICB9XG5cbiAgc3RhcnRPZmZzZXQgPSBzdGFydE9mZnNldCB8fCAwO1xuICBlbmRPZmZzZXQgPSBlbmRPZmZzZXQgfHwgMTtcbiAgdmFyIHN1YmRpdmlzaW9uc1RoaWNrID0gMjtcbiAgdmFyIG9mZnNldFJhbmdlID0gZW5kT2Zmc2V0IC0gc3RhcnRPZmZzZXQ7XG4gIHZhciBudW1WZXJ0aWNlcyA9IChzdWJkaXZpc2lvbnNEb3duICsgMSkgKiAyICogKDIgKyBzdWJkaXZpc2lvbnNUaGljayk7XG4gIHZhciBwb3NpdGlvbnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIG5vcm1hbHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIHRleGNvb3JkcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydGljZXMpO1xuXG4gIGZ1bmN0aW9uIGxlcnAoYSwgYiwgcykge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIHM7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcmMoYXJjUmFkaXVzLCB4LCBub3JtYWxNdWx0LCBub3JtYWxBZGQsIHVNdWx0LCB1QWRkKSB7XG4gICAgZm9yICh2YXIgeiA9IDA7IHogPD0gc3ViZGl2aXNpb25zRG93bjsgeisrKSB7XG4gICAgICB2YXIgdUJhY2sgPSB4IC8gKHN1YmRpdmlzaW9uc1RoaWNrIC0gMSk7XG4gICAgICB2YXIgdiA9IHogLyBzdWJkaXZpc2lvbnNEb3duO1xuICAgICAgdmFyIHhCYWNrID0gKHVCYWNrIC0gMC41KSAqIDI7XG4gICAgICB2YXIgYW5nbGUgPSAoc3RhcnRPZmZzZXQgKyB2ICogb2Zmc2V0UmFuZ2UpICogTWF0aC5QSTtcbiAgICAgIHZhciBzID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICB2YXIgcmFkaXVzID0gbGVycCh2ZXJ0aWNhbFJhZGl1cywgYXJjUmFkaXVzLCBzKTtcbiAgICAgIHZhciBweCA9IHhCYWNrICogdGhpY2tuZXNzO1xuICAgICAgdmFyIHB5ID0gYyAqIHZlcnRpY2FsUmFkaXVzO1xuICAgICAgdmFyIHB6ID0gcyAqIHJhZGl1cztcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHB4LCBweSwgcHopO1xuICAgICAgdmFyIG4gPSB2My5hZGQodjMubXVsdGlwbHkoWzAsIHMsIGNdLCBub3JtYWxNdWx0KSwgbm9ybWFsQWRkKTtcbiAgICAgIG5vcm1hbHMucHVzaChuKTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKHVCYWNrICogdU11bHQgKyB1QWRkLCB2KTtcbiAgICB9XG4gIH0gLy8gR2VuZXJhdGUgdGhlIGluZGl2aWR1YWwgdmVydGljZXMgaW4gb3VyIHZlcnRleCBidWZmZXIuXG5cblxuICBmb3IgKHZhciB4ID0gMDsgeCA8IHN1YmRpdmlzaW9uc1RoaWNrOyB4KyspIHtcbiAgICB2YXIgdUJhY2sgPSAoeCAvIChzdWJkaXZpc2lvbnNUaGljayAtIDEpIC0gMC41KSAqIDI7XG4gICAgY3JlYXRlQXJjKG91dGVyUmFkaXVzLCB4LCBbMSwgMSwgMV0sIFswLCAwLCAwXSwgMSwgMCk7XG4gICAgY3JlYXRlQXJjKG91dGVyUmFkaXVzLCB4LCBbMCwgMCwgMF0sIFt1QmFjaywgMCwgMF0sIDAsIDApO1xuICAgIGNyZWF0ZUFyYyhpbm5lclJhZGl1cywgeCwgWzEsIDEsIDFdLCBbMCwgMCwgMF0sIDEsIDApO1xuICAgIGNyZWF0ZUFyYyhpbm5lclJhZGl1cywgeCwgWzAsIDAsIDBdLCBbdUJhY2ssIDAsIDBdLCAwLCAxKTtcbiAgfSAvLyBEbyBvdXRlciBzdXJmYWNlLlxuXG5cbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHN1YmRpdmlzaW9uc0Rvd24gKiAyICogKDIgKyBzdWJkaXZpc2lvbnNUaGljayksIFVpbnQxNkFycmF5KTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdXJmYWNlKGxlZnRBcmNPZmZzZXQsIHJpZ2h0QXJjT2Zmc2V0KSB7XG4gICAgZm9yICh2YXIgeiA9IDA7IHogPCBzdWJkaXZpc2lvbnNEb3duOyArK3opIHtcbiAgICAgIC8vIE1ha2UgdHJpYW5nbGUgMSBvZiBxdWFkLlxuICAgICAgaW5kaWNlcy5wdXNoKGxlZnRBcmNPZmZzZXQgKyB6ICsgMCwgbGVmdEFyY09mZnNldCArIHogKyAxLCByaWdodEFyY09mZnNldCArIHogKyAwKTsgLy8gTWFrZSB0cmlhbmdsZSAyIG9mIHF1YWQuXG5cbiAgICAgIGluZGljZXMucHVzaChsZWZ0QXJjT2Zmc2V0ICsgeiArIDEsIHJpZ2h0QXJjT2Zmc2V0ICsgeiArIDEsIHJpZ2h0QXJjT2Zmc2V0ICsgeiArIDApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBudW1WZXJ0aWNlc0Rvd24gPSBzdWJkaXZpc2lvbnNEb3duICsgMTsgLy8gZnJvbnRcblxuICBjcmVhdGVTdXJmYWNlKG51bVZlcnRpY2VzRG93biAqIDAsIG51bVZlcnRpY2VzRG93biAqIDQpOyAvLyByaWdodFxuXG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogNSwgbnVtVmVydGljZXNEb3duICogNyk7IC8vIGJhY2tcblxuICBjcmVhdGVTdXJmYWNlKG51bVZlcnRpY2VzRG93biAqIDYsIG51bVZlcnRpY2VzRG93biAqIDIpOyAvLyBsZWZ0XG5cbiAgY3JlYXRlU3VyZmFjZShudW1WZXJ0aWNlc0Rvd24gKiAzLCBudW1WZXJ0aWNlc0Rvd24gKiAxKTtcbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLFxuICAgIG5vcm1hbDogbm9ybWFscyxcbiAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICAgIGluZGljZXM6IGluZGljZXNcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBjeWxpbmRlciBCdWZmZXJJbmZvLiBUaGUgY3lsaW5kZXIgd2lsbCBiZSBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luXG4gKiBhbG9uZyB0aGUgeS1heGlzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBSYWRpdXMgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBkb3duIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvcENhcF0gQ3JlYXRlIHRvcCBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDeWxpbmRlckJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3lsaW5kZXIgYnVmZmVycy4gVGhlIGN5bGluZGVyIHdpbGwgYmUgY3JlYXRlZCBhcm91bmQgdGhlIG9yaWdpblxuICogYWxvbmcgdGhlIHktYXhpcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3lsaW5kZXJCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGN5bGluZGVyIHZlcnRpY2VzLiBUaGUgY3lsaW5kZXIgd2lsbCBiZSBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luXG4gKiBhbG9uZyB0aGUgeS1heGlzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBIZWlnaHQgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGUgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt0b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JvdHRvbUNhcF0gQ3JlYXRlIGJvdHRvbSBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVDeWxpbmRlclZlcnRpY2VzKHJhZGl1cywgaGVpZ2h0LCByYWRpYWxTdWJkaXZpc2lvbnMsIHZlcnRpY2FsU3ViZGl2aXNpb25zLCB0b3BDYXAsIGJvdHRvbUNhcCkge1xuICByZXR1cm4gY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzKHJhZGl1cywgcmFkaXVzLCBoZWlnaHQsIHJhZGlhbFN1YmRpdmlzaW9ucywgdmVydGljYWxTdWJkaXZpc2lvbnMsIHRvcENhcCwgYm90dG9tQ2FwKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBCdWZmZXJJbmZvIGZvciBhIHRvcnVzXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIHJhZGl1cyBvZiBjZW50ZXIgb2YgdG9ydXMgY2lyY2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyByYWRpdXMgb2YgdG9ydXMgcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSB0b3J1cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib2R5U3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgYm9keSB0b3J1cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXJ0QW5nbGVdIHN0YXJ0IGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtib29sZWFufSBbZW5kQW5nbGVdIGVuZCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gTWF0aC5QSSAqIDIuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVUb3J1c0J1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYnVmZmVycyBmb3IgYSB0b3J1c1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgY2VudGVyIG9mIHRvcnVzIGNpcmNsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgcmFkaXVzIG9mIHRvcnVzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgdG9ydXMuXG4gKiBAcGFyYW0ge251bWJlcn0gYm9keVN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIGJvZHkgdG9ydXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGFydEFuZ2xlXSBzdGFydCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuZEFuZ2xlXSBlbmQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IE1hdGguUEkgKiAyLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlVG9ydXNCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHZlcnRpY2VzIGZvciBhIHRvcnVzXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgY2VudGVyIG9mIHRvcnVzIGNpcmNsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgcmFkaXVzIG9mIHRvcnVzIHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgdG9ydXMuXG4gKiBAcGFyYW0ge251bWJlcn0gYm9keVN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIGJvZHkgdG9ydXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzdGFydEFuZ2xlXSBzdGFydCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2VuZEFuZ2xlXSBlbmQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IE1hdGguUEkgKiAyLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVUb3J1c1ZlcnRpY2VzKHJhZGl1cywgdGhpY2tuZXNzLCByYWRpYWxTdWJkaXZpc2lvbnMsIGJvZHlTdWJkaXZpc2lvbnMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gIGlmIChyYWRpYWxTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyYWRpYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAzIG9yIGdyZWF0ZXInKTtcbiAgfVxuXG4gIGlmIChib2R5U3ViZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcigndmVydGljYWxTdWJkaXZpc2lvbnMgbXVzdCBiZSAzIG9yIGdyZWF0ZXInKTtcbiAgfVxuXG4gIHN0YXJ0QW5nbGUgPSBzdGFydEFuZ2xlIHx8IDA7XG4gIGVuZEFuZ2xlID0gZW5kQW5nbGUgfHwgTWF0aC5QSSAqIDI7XG4gIHZhciByYW5nZSA9IGVuZEFuZ2xlIC0gc3RhcnRBbmdsZTtcbiAgdmFyIHJhZGlhbFBhcnRzID0gcmFkaWFsU3ViZGl2aXNpb25zICsgMTtcbiAgdmFyIGJvZHlQYXJ0cyA9IGJvZHlTdWJkaXZpc2lvbnMgKyAxO1xuICB2YXIgbnVtVmVydGljZXMgPSByYWRpYWxQYXJ0cyAqIGJvZHlQYXJ0cztcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCByYWRpYWxTdWJkaXZpc2lvbnMgKiBib2R5U3ViZGl2aXNpb25zICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAodmFyIHNsaWNlID0gMDsgc2xpY2UgPCBib2R5UGFydHM7ICsrc2xpY2UpIHtcbiAgICB2YXIgdiA9IHNsaWNlIC8gYm9keVN1YmRpdmlzaW9ucztcbiAgICB2YXIgc2xpY2VBbmdsZSA9IHYgKiBNYXRoLlBJICogMjtcbiAgICB2YXIgc2xpY2VTaW4gPSBNYXRoLnNpbihzbGljZUFuZ2xlKTtcbiAgICB2YXIgcmluZ1JhZGl1cyA9IHJhZGl1cyArIHNsaWNlU2luICogdGhpY2tuZXNzO1xuICAgIHZhciBueSA9IE1hdGguY29zKHNsaWNlQW5nbGUpO1xuICAgIHZhciB5ID0gbnkgKiB0aGlja25lc3M7XG5cbiAgICBmb3IgKHZhciByaW5nID0gMDsgcmluZyA8IHJhZGlhbFBhcnRzOyArK3JpbmcpIHtcbiAgICAgIHZhciB1ID0gcmluZyAvIHJhZGlhbFN1YmRpdmlzaW9ucztcbiAgICAgIHZhciByaW5nQW5nbGUgPSBzdGFydEFuZ2xlICsgdSAqIHJhbmdlO1xuICAgICAgdmFyIHhTaW4gPSBNYXRoLnNpbihyaW5nQW5nbGUpO1xuICAgICAgdmFyIHpDb3MgPSBNYXRoLmNvcyhyaW5nQW5nbGUpO1xuICAgICAgdmFyIHggPSB4U2luICogcmluZ1JhZGl1cztcbiAgICAgIHZhciB6ID0gekNvcyAqIHJpbmdSYWRpdXM7XG4gICAgICB2YXIgbnggPSB4U2luICogc2xpY2VTaW47XG4gICAgICB2YXIgbnogPSB6Q29zICogc2xpY2VTaW47XG4gICAgICBwb3NpdGlvbnMucHVzaCh4LCB5LCB6KTtcbiAgICAgIG5vcm1hbHMucHVzaChueCwgbnksIG56KTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKHUsIDEgLSB2KTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfc2xpY2UgPSAwOyBfc2xpY2UgPCBib2R5U3ViZGl2aXNpb25zOyArK19zbGljZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmb3IgKHZhciBfcmluZyA9IDA7IF9yaW5nIDwgcmFkaWFsU3ViZGl2aXNpb25zOyArK19yaW5nKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB2YXIgbmV4dFJpbmdJbmRleCA9IDEgKyBfcmluZztcbiAgICAgIHZhciBuZXh0U2xpY2VJbmRleCA9IDEgKyBfc2xpY2U7XG4gICAgICBpbmRpY2VzLnB1c2gocmFkaWFsUGFydHMgKiBfc2xpY2UgKyBfcmluZywgcmFkaWFsUGFydHMgKiBuZXh0U2xpY2VJbmRleCArIF9yaW5nLCByYWRpYWxQYXJ0cyAqIF9zbGljZSArIG5leHRSaW5nSW5kZXgpO1xuICAgICAgaW5kaWNlcy5wdXNoKHJhZGlhbFBhcnRzICogbmV4dFNsaWNlSW5kZXggKyBfcmluZywgcmFkaWFsUGFydHMgKiBuZXh0U2xpY2VJbmRleCArIG5leHRSaW5nSW5kZXgsIHJhZGlhbFBhcnRzICogX3NsaWNlICsgbmV4dFJpbmdJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLFxuICAgIG5vcm1hbDogbm9ybWFscyxcbiAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICAgIGluZGljZXM6IGluZGljZXNcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGRpc2MgQnVmZmVySW5mby4gVGhlIGRpc2Mgd2lsbCBiZSBpbiB0aGUgeHogcGxhbmUsIGNlbnRlcmVkIGF0XG4gKiB0aGUgb3JpZ2luLiBXaGVuIGNyZWF0aW5nLCBhdCBsZWFzdCAzIGRpdmlzaW9ucywgb3IgcGllXG4gKiBwaWVjZXMsIG5lZWQgdG8gYmUgc3BlY2lmaWVkLCBvdGhlcndpc2UgdGhlIHRyaWFuZ2xlcyBtYWtpbmdcbiAqIHVwIHRoZSBkaXNjIHdpbGwgYmUgZGVnZW5lcmF0ZS4gWW91IGNhbiBhbHNvIHNwZWNpZnkgdGhlXG4gKiBudW1iZXIgb2YgcmFkaWFsIHBpZWNlcyBgc3RhY2tzYC4gQSB2YWx1ZSBvZiAxIGZvclxuICogc3RhY2tzIHdpbGwgZ2l2ZSB5b3UgYSBzaW1wbGUgZGlzYyBvZiBwaWUgcGllY2VzLiAgSWYgeW91XG4gKiB3YW50IHRvIGNyZWF0ZSBhbiBhbm51bHVzIHlvdSBjYW4gc2V0IGBpbm5lclJhZGl1c2AgdG8gYVxuICogdmFsdWUgPiAwLiBGaW5hbGx5LCBgc3RhY2tQb3dlcmAgYWxsb3dzIHlvdSB0byBoYXZlIHRoZSB3aWR0aHNcbiAqIGluY3JlYXNlIG9yIGRlY3JlYXNlIGFzIHlvdSBtb3ZlIGF3YXkgZnJvbSB0aGUgY2VudGVyLiBUaGlzXG4gKiBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIHdoZW4gdXNpbmcgdGhlIGRpc2MgYXMgYSBncm91bmQgcGxhbmVcbiAqIHdpdGggYSBmaXhlZCBjYW1lcmEgc3VjaCB0aGF0IHlvdSBkb24ndCBuZWVkIHRoZSByZXNvbHV0aW9uXG4gKiBvZiBzbWFsbCB0cmlhbmdsZXMgbmVhciB0aGUgcGVyaW1ldGVyLiBGb3IgZXhhbXBsZSwgYSB2YWx1ZVxuICogb2YgMiB3aWxsIHByb2R1Y2Ugc3RhY2tzIHdob3NlIG91dHNpZGUgcmFkaXVzIGluY3JlYXNlcyB3aXRoXG4gKiB0aGUgc3F1YXJlIG9mIHRoZSBzdGFjayBpbmRleC4gQSB2YWx1ZSBvZiAxIHdpbGwgZ2l2ZSB1bmlmb3JtXG4gKiBzdGFja3MuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiB0aGUgZ3JvdW5kIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IGRpdmlzaW9ucyBOdW1iZXIgb2YgdHJpYW5nbGVzIGluIHRoZSBncm91bmQgcGxhbmUgKGF0IGxlYXN0IDMpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja3NdIE51bWJlciBvZiByYWRpYWwgZGl2aXNpb25zIChkZWZhdWx0PTEpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbm5lclJhZGl1c10gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja1Bvd2VyXSBQb3dlciB0byByYWlzZSBzdGFjayBzaXplIHRvIGZvciBkZWNyZWFzaW5nIHdpZHRoLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gVGhlIGNyZWF0ZWQgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlRGlzY0J1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgZGlzYyBidWZmZXJzLiBUaGUgZGlzYyB3aWxsIGJlIGluIHRoZSB4eiBwbGFuZSwgY2VudGVyZWQgYXRcbiAqIHRoZSBvcmlnaW4uIFdoZW4gY3JlYXRpbmcsIGF0IGxlYXN0IDMgZGl2aXNpb25zLCBvciBwaWVcbiAqIHBpZWNlcywgbmVlZCB0byBiZSBzcGVjaWZpZWQsIG90aGVyd2lzZSB0aGUgdHJpYW5nbGVzIG1ha2luZ1xuICogdXAgdGhlIGRpc2Mgd2lsbCBiZSBkZWdlbmVyYXRlLiBZb3UgY2FuIGFsc28gc3BlY2lmeSB0aGVcbiAqIG51bWJlciBvZiByYWRpYWwgcGllY2VzIGBzdGFja3NgLiBBIHZhbHVlIG9mIDEgZm9yXG4gKiBzdGFja3Mgd2lsbCBnaXZlIHlvdSBhIHNpbXBsZSBkaXNjIG9mIHBpZSBwaWVjZXMuICBJZiB5b3VcbiAqIHdhbnQgdG8gY3JlYXRlIGFuIGFubnVsdXMgeW91IGNhbiBzZXQgYGlubmVyUmFkaXVzYCB0byBhXG4gKiB2YWx1ZSA+IDAuIEZpbmFsbHksIGBzdGFja1Bvd2VyYCBhbGxvd3MgeW91IHRvIGhhdmUgdGhlIHdpZHRoc1xuICogaW5jcmVhc2Ugb3IgZGVjcmVhc2UgYXMgeW91IG1vdmUgYXdheSBmcm9tIHRoZSBjZW50ZXIuIFRoaXNcbiAqIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgd2hlbiB1c2luZyB0aGUgZGlzYyBhcyBhIGdyb3VuZCBwbGFuZVxuICogd2l0aCBhIGZpeGVkIGNhbWVyYSBzdWNoIHRoYXQgeW91IGRvbid0IG5lZWQgdGhlIHJlc29sdXRpb25cbiAqIG9mIHNtYWxsIHRyaWFuZ2xlcyBuZWFyIHRoZSBwZXJpbWV0ZXIuIEZvciBleGFtcGxlLCBhIHZhbHVlXG4gKiBvZiAyIHdpbGwgcHJvZHVjZSBzdGFja3Mgd2hvc2Ugb3V0c2lkZSByYWRpdXMgaW5jcmVhc2VzIHdpdGhcbiAqIHRoZSBzcXVhcmUgb2YgdGhlIHN0YWNrIGluZGV4LiBBIHZhbHVlIG9mIDEgd2lsbCBnaXZlIHVuaWZvcm1cbiAqIHN0YWNrcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIHRoZSBncm91bmQgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGl2aXNpb25zIE51bWJlciBvZiB0cmlhbmdsZXMgaW4gdGhlIGdyb3VuZCBwbGFuZSAoYXQgbGVhc3QgMykuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrc10gTnVtYmVyIG9mIHJhZGlhbCBkaXZpc2lvbnMgKGRlZmF1bHQ9MSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2lubmVyUmFkaXVzXSBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrUG93ZXJdIFBvd2VyIHRvIHJhaXNlIHN0YWNrIHNpemUgdG8gZm9yIGRlY3JlYXNpbmcgd2lkdGguXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVEaXNjQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBkaXNjIHZlcnRpY2VzLiBUaGUgZGlzYyB3aWxsIGJlIGluIHRoZSB4eiBwbGFuZSwgY2VudGVyZWQgYXRcbiAqIHRoZSBvcmlnaW4uIFdoZW4gY3JlYXRpbmcsIGF0IGxlYXN0IDMgZGl2aXNpb25zLCBvciBwaWVcbiAqIHBpZWNlcywgbmVlZCB0byBiZSBzcGVjaWZpZWQsIG90aGVyd2lzZSB0aGUgdHJpYW5nbGVzIG1ha2luZ1xuICogdXAgdGhlIGRpc2Mgd2lsbCBiZSBkZWdlbmVyYXRlLiBZb3UgY2FuIGFsc28gc3BlY2lmeSB0aGVcbiAqIG51bWJlciBvZiByYWRpYWwgcGllY2VzIGBzdGFja3NgLiBBIHZhbHVlIG9mIDEgZm9yXG4gKiBzdGFja3Mgd2lsbCBnaXZlIHlvdSBhIHNpbXBsZSBkaXNjIG9mIHBpZSBwaWVjZXMuICBJZiB5b3VcbiAqIHdhbnQgdG8gY3JlYXRlIGFuIGFubnVsdXMgeW91IGNhbiBzZXQgYGlubmVyUmFkaXVzYCB0byBhXG4gKiB2YWx1ZSA+IDAuIEZpbmFsbHksIGBzdGFja1Bvd2VyYCBhbGxvd3MgeW91IHRvIGhhdmUgdGhlIHdpZHRoc1xuICogaW5jcmVhc2Ugb3IgZGVjcmVhc2UgYXMgeW91IG1vdmUgYXdheSBmcm9tIHRoZSBjZW50ZXIuIFRoaXNcbiAqIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgd2hlbiB1c2luZyB0aGUgZGlzYyBhcyBhIGdyb3VuZCBwbGFuZVxuICogd2l0aCBhIGZpeGVkIGNhbWVyYSBzdWNoIHRoYXQgeW91IGRvbid0IG5lZWQgdGhlIHJlc29sdXRpb25cbiAqIG9mIHNtYWxsIHRyaWFuZ2xlcyBuZWFyIHRoZSBwZXJpbWV0ZXIuIEZvciBleGFtcGxlLCBhIHZhbHVlXG4gKiBvZiAyIHdpbGwgcHJvZHVjZSBzdGFja3Mgd2hvc2Ugb3V0c2lkZSByYWRpdXMgaW5jcmVhc2VzIHdpdGhcbiAqIHRoZSBzcXVhcmUgb2YgdGhlIHN0YWNrIGluZGV4LiBBIHZhbHVlIG9mIDEgd2lsbCBnaXZlIHVuaWZvcm1cbiAqIHN0YWNrcy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiB0aGUgZ3JvdW5kIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IGRpdmlzaW9ucyBOdW1iZXIgb2YgdHJpYW5nbGVzIGluIHRoZSBncm91bmQgcGxhbmUgKGF0IGxlYXN0IDMpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja3NdIE51bWJlciBvZiByYWRpYWwgZGl2aXNpb25zIChkZWZhdWx0PTEpLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbm5lclJhZGl1c10gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFja1Bvd2VyXSBQb3dlciB0byByYWlzZSBzdGFjayBzaXplIHRvIGZvciBkZWNyZWFzaW5nIHdpZHRoLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVEaXNjVmVydGljZXMocmFkaXVzLCBkaXZpc2lvbnMsIHN0YWNrcywgaW5uZXJSYWRpdXMsIHN0YWNrUG93ZXIpIHtcbiAgaWYgKGRpdmlzaW9ucyA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9ucyBtdXN0IGJlIGF0IGxlYXN0IDMnKTtcbiAgfVxuXG4gIHN0YWNrcyA9IHN0YWNrcyA/IHN0YWNrcyA6IDE7XG4gIHN0YWNrUG93ZXIgPSBzdGFja1Bvd2VyID8gc3RhY2tQb3dlciA6IDE7XG4gIGlubmVyUmFkaXVzID0gaW5uZXJSYWRpdXMgPyBpbm5lclJhZGl1cyA6IDA7IC8vIE5vdGU6IFdlIGRvbid0IHNoYXJlIHRoZSBjZW50ZXIgdmVydGV4IGJlY2F1c2UgdGhhdCB3b3VsZFxuICAvLyBtZXNzIHVwIHRleHR1cmUgY29vcmRpbmF0ZXMuXG5cbiAgdmFyIG51bVZlcnRpY2VzID0gKGRpdmlzaW9ucyArIDEpICogKHN0YWNrcyArIDEpO1xuICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBub3JtYWxzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHN0YWNrcyAqIGRpdmlzaW9ucyAqIDIsIFVpbnQxNkFycmF5KTtcbiAgdmFyIGZpcnN0SW5kZXggPSAwO1xuICB2YXIgcmFkaXVzU3BhbiA9IHJhZGl1cyAtIGlubmVyUmFkaXVzO1xuICB2YXIgcG9pbnRzUGVyU3RhY2sgPSBkaXZpc2lvbnMgKyAxOyAvLyBCdWlsZCB0aGUgZGlzayBvbmUgc3RhY2sgYXQgYSB0aW1lLlxuXG4gIGZvciAodmFyIHN0YWNrID0gMDsgc3RhY2sgPD0gc3RhY2tzOyArK3N0YWNrKSB7XG4gICAgdmFyIHN0YWNrUmFkaXVzID0gaW5uZXJSYWRpdXMgKyByYWRpdXNTcGFuICogTWF0aC5wb3coc3RhY2sgLyBzdGFja3MsIHN0YWNrUG93ZXIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gZGl2aXNpb25zOyArK2kpIHtcbiAgICAgIHZhciB0aGV0YSA9IDIuMCAqIE1hdGguUEkgKiBpIC8gZGl2aXNpb25zO1xuICAgICAgdmFyIHggPSBzdGFja1JhZGl1cyAqIE1hdGguY29zKHRoZXRhKTtcbiAgICAgIHZhciB6ID0gc3RhY2tSYWRpdXMgKiBNYXRoLnNpbih0aGV0YSk7XG4gICAgICBwb3NpdGlvbnMucHVzaCh4LCAwLCB6KTtcbiAgICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKDEgLSBpIC8gZGl2aXNpb25zLCBzdGFjayAvIHN0YWNrcyk7XG5cbiAgICAgIGlmIChzdGFjayA+IDAgJiYgaSAhPT0gZGl2aXNpb25zKSB7XG4gICAgICAgIC8vIGEsIGIsIGMgYW5kIGQgYXJlIHRoZSBpbmRpY2VzIG9mIHRoZSB2ZXJ0aWNlcyBvZiBhIHF1YWQuICB1bmxlc3NcbiAgICAgICAgLy8gdGhlIGN1cnJlbnQgc3RhY2sgaXMgdGhlIG9uZSBjbG9zZXN0IHRvIHRoZSBjZW50ZXIsIGluIHdoaWNoIGNhc2VcbiAgICAgICAgLy8gdGhlIHZlcnRpY2VzIGEgYW5kIGIgY29ubmVjdCB0byB0aGUgY2VudGVyIHZlcnRleC5cbiAgICAgICAgdmFyIGEgPSBmaXJzdEluZGV4ICsgKGkgKyAxKTtcbiAgICAgICAgdmFyIGIgPSBmaXJzdEluZGV4ICsgaTtcbiAgICAgICAgdmFyIGMgPSBmaXJzdEluZGV4ICsgaSAtIHBvaW50c1BlclN0YWNrO1xuICAgICAgICB2YXIgZCA9IGZpcnN0SW5kZXggKyAoaSArIDEpIC0gcG9pbnRzUGVyU3RhY2s7IC8vIE1ha2UgYSBxdWFkIG9mIHRoZSB2ZXJ0aWNlcyBhLCBiLCBjLCBkLlxuXG4gICAgICAgIGluZGljZXMucHVzaChhLCBiLCBjKTtcbiAgICAgICAgaW5kaWNlcy5wdXNoKGEsIGMsIGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpcnN0SW5kZXggKz0gZGl2aXNpb25zICsgMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG4vKipcbiAqIGNyZWF0ZXMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIHJhbmdlIC0gMSBpbmNsdXNpdmUuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFuZ2VcbiAqIEByZXR1cm4ge251bWJlcn0gcmFuZG9tIHZhbHVlIGJldHdlZW4gMCBhbmQgcmFuZ2UgLSAxIGluY2x1c2l2ZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiByYW5kSW50KHJhbmdlKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogcmFuZ2UgfCAwO1xufVxuLyoqXG4gKiBVc2VkIHRvIHN1cHBseSByYW5kb20gY29sb3JzXG4gKiBAY2FsbGJhY2sgUmFuZG9tQ29sb3JGdW5jXG4gKiBAcGFyYW0ge251bWJlcn0gbmR4IGluZGV4IG9mIHRyaWFuZ2xlL3F1YWQgaWYgdW5pbmRleGVkIG9yIGluZGV4IG9mIHZlcnRleCBpZiBpbmRleGVkXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhbm5lbCAwID0gcmVkLCAxID0gZ3JlZW4sIDIgPSBibHVlLCAzID0gYWxwaGFcbiAqIEByZXR1cm4ge251bWJlcn0gYSBudW1iZXIgZnJvbSAwIHRvIDI1NVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFJhbmRvbVZlcnRpY2VzT3B0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFt2ZXJ0c1BlckNvbG9yXSBEZWZhdWx0cyB0byAzIGZvciBub24taW5kZXhlZCB2ZXJ0aWNlc1xuICogQHByb3BlcnR5IHttb2R1bGU6dHdnbC9wcmltaXRpdmVzLlJhbmRvbUNvbG9yRnVuY30gW3JhbmRdIEEgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlcnNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGF1Z21lbnRlZFR5cGVkQXJyYXkgb2YgcmFuZG9tIHZlcnRleCBjb2xvcnMuXG4gKiBJZiB0aGUgdmVydGljZXMgYXJlIGluZGV4ZWQgKGhhdmUgYW4gaW5kaWNlcyBhcnJheSkgdGhlbiB3aWxsXG4gKiBqdXN0IG1ha2UgcmFuZG9tIGNvbG9ycy4gT3RoZXJ3aXNlIGFzc3VtZXMgdGhleSBhcmUgdHJpYW5nbGVzXG4gKiBhbmQgbWFrZXMgb25lIHJhbmRvbSBjb2xvciBmb3IgZXZlcnkgMyB2ZXJ0aWNlcy5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIEF1Z21lbnRlZFR5cGVkQXJyYXk+fSB2ZXJ0aWNlcyBWZXJ0aWNlcyBhcyByZXR1cm5lZCBmcm9tIG9uZSBvZiB0aGUgY3JlYXRlWFhYVmVydGljZXMgZnVuY3Rpb25zLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9wcmltaXRpdmVzLlJhbmRvbVZlcnRpY2VzT3B0aW9uc30gW29wdGlvbnNdIG9wdGlvbnMuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgQXVnbWVudGVkVHlwZWRBcnJheT59IHNhbWUgdmVydGljZXMgYXMgcGFzc2VkIGluIHdpdGggYGNvbG9yYCBhZGRlZC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBtYWtlUmFuZG9tVmVydGV4Q29sb3JzKHZlcnRpY2VzLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbnVtRWxlbWVudHMgPSB2ZXJ0aWNlcy5wb3NpdGlvbi5udW1FbGVtZW50cztcbiAgdmFyIHZDb2xvcnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDQsIG51bUVsZW1lbnRzLCBVaW50OEFycmF5KTtcblxuICB2YXIgcmFuZCA9IG9wdGlvbnMucmFuZCB8fCBmdW5jdGlvbiAobmR4LCBjaGFubmVsKSB7XG4gICAgcmV0dXJuIGNoYW5uZWwgPCAzID8gcmFuZEludCgyNTYpIDogMjU1O1xuICB9O1xuXG4gIHZlcnRpY2VzLmNvbG9yID0gdkNvbG9ycztcblxuICBpZiAodmVydGljZXMuaW5kaWNlcykge1xuICAgIC8vIGp1c3QgbWFrZSByYW5kb20gY29sb3JzIGlmIGluZGV4XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bUVsZW1lbnRzOyArK2lpKSB7XG4gICAgICB2Q29sb3JzLnB1c2gocmFuZChpaSwgMCksIHJhbmQoaWksIDEpLCByYW5kKGlpLCAyKSwgcmFuZChpaSwgMykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBtYWtlIHJhbmRvbSBjb2xvcnMgcGVyIHRyaWFuZ2xlXG4gICAgdmFyIG51bVZlcnRzUGVyQ29sb3IgPSBvcHRpb25zLnZlcnRzUGVyQ29sb3IgfHwgMztcbiAgICB2YXIgbnVtU2V0cyA9IG51bUVsZW1lbnRzIC8gbnVtVmVydHNQZXJDb2xvcjtcblxuICAgIGZvciAodmFyIF9paTIgPSAwOyBfaWkyIDwgbnVtU2V0czsgKytfaWkyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICB2YXIgY29sb3IgPSBbcmFuZChfaWkyLCAwKSwgcmFuZChfaWkyLCAxKSwgcmFuZChfaWkyLCAyKSwgcmFuZChfaWkyLCAzKV07XG5cbiAgICAgIGZvciAodmFyIGpqID0gMDsgamogPCBudW1WZXJ0c1BlckNvbG9yOyArK2pqKSB7XG4gICAgICAgIHZDb2xvcnMucHVzaChjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuLyoqXG4gKiBjcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyBmbiB0byBjcmVhdGUgdmVydGljZXMgYW5kIHRoZW5cbiAqIGNyZWF0ZXMgYSBidWZmZXJzIGZvciB0aGVtXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyRnVuYyhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKGdsKSB7XG4gICAgdmFyIGFycmF5cyA9IGZuLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuICAgIHJldHVybiBhdHRyaWJ1dGVzLmNyZWF0ZUJ1ZmZlcnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpO1xuICB9O1xufVxuLyoqXG4gKiBjcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBjYWxscyBmbiB0byBjcmVhdGUgdmVydGljZXMgYW5kIHRoZW5cbiAqIGNyZWF0ZXMgYSBidWZmZXJJbmZvIG9iamVjdCBmb3IgdGhlbVxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZ2wpIHtcbiAgICB2YXIgYXJyYXlzID0gZm4uYXBwbHkobnVsbCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gIH07XG59XG5cbnZhciBhcnJheVNwZWNQcm9wZXJ0eU5hbWVzID0gW1wibnVtQ29tcG9uZW50c1wiLCBcInNpemVcIiwgXCJ0eXBlXCIsIFwibm9ybWFsaXplXCIsIFwic3RyaWRlXCIsIFwib2Zmc2V0XCIsIFwiYXR0cmliXCIsIFwibmFtZVwiLCBcImF0dHJpYk5hbWVcIl07XG4vKipcbiAqIENvcHkgZWxlbWVudHMgZnJvbSBvbmUgYXJyYXkgdG8gYW5vdGhlclxuICpcbiAqIEBwYXJhbSB7QXJyYXl8VHlwZWRBcnJheX0gc3JjIHNvdXJjZSBhcnJheVxuICogQHBhcmFtIHtBcnJheXxUeXBlZEFycmF5fSBkc3QgZGVzdCBhcnJheVxuICogQHBhcmFtIHtudW1iZXJ9IGRzdE5keCBpbmRleCBpbiBkZXN0IHRvIGNvcHkgc3JjXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IHRvIGFkZCB0byBjb3BpZWQgdmFsdWVzXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvcHlFbGVtZW50cyhzcmMsIGRzdCwgZHN0TmR4LCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBsZW5ndGggPSBzcmMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBsZW5ndGg7ICsraWkpIHtcbiAgICBkc3RbZHN0TmR4ICsgaWldID0gc3JjW2lpXSArIG9mZnNldDtcbiAgfVxufVxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBzYW1lIHRpbWVcbiAqXG4gKiBAcGFyYW0geyhudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXd8bW9kdWxlOnR3Z2wuRnVsbEFycmF5U3BlYyl9IHNyY0FycmF5IGFycmF5IHdobydzIHR5cGUgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBzaXplIG9mIG5ldyBhcnJheVxuICogQHJldHVybiB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xtb2R1bGU6dHdnbC5GdWxsQXJyYXlTcGVjKX0gYXJyYXkgd2l0aCBzYW1lIHR5cGUgYXMgc3JjQXJyYXlcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVBcnJheU9mU2FtZVR5cGUoc3JjQXJyYXksIGxlbmd0aCkge1xuICB2YXIgYXJyYXlTcmMgPSBnZXRBcnJheShzcmNBcnJheSk7XG4gIHZhciBuZXdBcnJheSA9IG5ldyBhcnJheVNyYy5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuICB2YXIgbmV3QXJyYXlTcGVjID0gbmV3QXJyYXk7IC8vIElmIGl0IGFwcGVhcnMgdG8gaGF2ZSBiZWVuIGF1Z21lbnRlZCBtYWtlIG5ldyBvbmUgYXVnbWVudGVkXG5cbiAgaWYgKGFycmF5U3JjLm51bUNvbXBvbmVudHMgJiYgYXJyYXlTcmMubnVtRWxlbWVudHMpIHtcbiAgICBhdWdtZW50VHlwZWRBcnJheShuZXdBcnJheSwgYXJyYXlTcmMubnVtQ29tcG9uZW50cyk7XG4gIH0gLy8gSWYgaXQgd2FzIGEgZnVsbCBzcGVjIG1ha2UgbmV3IG9uZSBhIGZ1bGwgc3BlY1xuXG5cbiAgaWYgKHNyY0FycmF5LmRhdGEpIHtcbiAgICBuZXdBcnJheVNwZWMgPSB7XG4gICAgICBkYXRhOiBuZXdBcnJheVxuICAgIH07XG4gICAgaGVscGVyLmNvcHlOYW1lZFByb3BlcnRpZXMoYXJyYXlTcGVjUHJvcGVydHlOYW1lcywgc3JjQXJyYXksIG5ld0FycmF5U3BlYyk7XG4gIH1cblxuICByZXR1cm4gbmV3QXJyYXlTcGVjO1xufVxuLyoqXG4gKiBDb25jYXRlbmF0ZXMgc2V0cyBvZiB2ZXJ0aWNlc1xuICpcbiAqIEFzc3VtZXMgdGhlIHZlcnRpY2VzIG1hdGNoIGluIGNvbXBvc2l0aW9uLiBGb3IgZXhhbXBsZVxuICogaWYgb25lIHNldCBvZiB2ZXJ0aWNlcyBoYXMgcG9zaXRpb25zLCBub3JtYWxzLCBhbmQgaW5kaWNlc1xuICogYWxsIHNldHMgb2YgdmVydGljZXMgbXVzdCBoYXZlIHBvc2l0aW9ucywgbm9ybWFscywgYW5kIGluZGljZXNcbiAqIGFuZCBvZiB0aGUgc2FtZSB0eXBlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgICBjb25zdCBjdWJlVmVydGljZXMgPSB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlQ3ViZVZlcnRpY2VzKDIpO1xuICogICAgICBjb25zdCBzcGhlcmVWZXJ0aWNlcyA9IHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVTcGhlcmVWZXJ0aWNlcygxLCAxMCwgMTApO1xuICogICAgICAvLyBtb3ZlIHRoZSBzcGhlcmUgMiB1bml0cyB1cFxuICogICAgICB0d2dsLnByaW1pdGl2ZXMucmVvcmllbnRWZXJ0aWNlcyhcbiAqICAgICAgICAgIHNwaGVyZVZlcnRpY2VzLCB0d2dsLm00LnRyYW5zbGF0aW9uKFswLCAyLCAwXSkpO1xuICogICAgICAvLyBtZXJnZSB0aGUgc3BoZXJlIHdpdGggdGhlIGN1YmVcbiAqICAgICAgY29uc3QgY3ViZVNwaGVyZVZlcnRpY2VzID0gdHdnbC5wcmltaXRpdmVzLmNvbmNhdFZlcnRpY2VzKFxuICogICAgICAgICAgW2N1YmVWZXJ0aWNlcywgc3BoZXJlVmVydGljZXNdKTtcbiAqICAgICAgLy8gdHVybiB0aGVtIGludG8gV2ViR0wgYnVmZmVycyBhbmQgYXR0cmliIGRhdGFcbiAqICAgICAgY29uc3QgYnVmZmVySW5mbyA9IHR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGN1YmVTcGhlcmVWZXJ0aWNlcyk7XG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BcnJheXNbXX0gYXJyYXlzIEFycmF5IG9mIGFycmF5cyBvZiB2ZXJ0aWNlc1xuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBUaGUgY29uY2F0ZW5hdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbmNhdFZlcnRpY2VzKGFycmF5T2ZBcnJheXMpIHtcbiAgdmFyIG5hbWVzID0ge307XG4gIHZhciBiYXNlTmFtZTsgLy8gZ2V0IG5hbWVzIG9mIGFsbCBhcnJheXMuXG4gIC8vIGFuZCBudW1FbGVtZW50cyBmb3IgZWFjaCBzZXQgb2YgdmVydGljZXNcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpaSkge1xuICAgIHZhciBhcnJheXMgPSBhcnJheU9mQXJyYXlzW2lpXTtcbiAgICBPYmplY3Qua2V5cyhhcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIGlmICghbmFtZXNbbmFtZV0pIHtcbiAgICAgICAgbmFtZXNbbmFtZV0gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFiYXNlTmFtZSAmJiBuYW1lICE9PSAnaW5kaWNlcycpIHtcbiAgICAgICAgYmFzZU5hbWUgPSBuYW1lO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyYXlJbmZvID0gYXJyYXlzW25hbWVdO1xuICAgICAgdmFyIG51bUNvbXBvbmVudHMgPSBnZXROdW1Db21wb25lbnRzKGFycmF5SW5mbywgbmFtZSk7XG4gICAgICB2YXIgYXJyYXkgPSBnZXRBcnJheShhcnJheUluZm8pO1xuICAgICAgdmFyIG51bUVsZW1lbnRzID0gYXJyYXkubGVuZ3RoIC8gbnVtQ29tcG9uZW50cztcbiAgICAgIG5hbWVzW25hbWVdLnB1c2gobnVtRWxlbWVudHMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBhcnJheU9mQXJyYXlzLmxlbmd0aDsgKytpaSkge1xuICAgIF9sb29wKGlpKTtcbiAgfSAvLyBjb21wdXRlIGxlbmd0aCBvZiBjb21iaW5lZCBhcnJheVxuICAvLyBhbmQgcmV0dXJuIG9uZSBmb3IgcmVmZXJlbmNlXG5cblxuICBmdW5jdGlvbiBnZXRMZW5ndGhPZkNvbWJpbmVkQXJyYXlzKG5hbWUpIHtcbiAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICB2YXIgYXJyYXlTcGVjO1xuXG4gICAgZm9yICh2YXIgX2lpMyA9IDA7IF9paTMgPCBhcnJheU9mQXJyYXlzLmxlbmd0aDsgKytfaWkzKSB7XG4gICAgICB2YXIgYXJyYXlzID0gYXJyYXlPZkFycmF5c1tfaWkzXTtcbiAgICAgIHZhciBhcnJheUluZm8gPSBhcnJheXNbbmFtZV07XG4gICAgICB2YXIgYXJyYXkgPSBnZXRBcnJheShhcnJheUluZm8pO1xuICAgICAgbGVuZ3RoICs9IGFycmF5Lmxlbmd0aDtcblxuICAgICAgaWYgKCFhcnJheVNwZWMgfHwgYXJyYXlJbmZvLmRhdGEpIHtcbiAgICAgICAgYXJyYXlTcGVjID0gYXJyYXlJbmZvO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICAgIHNwZWM6IGFycmF5U3BlY1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb3B5QXJyYXlzVG9OZXdBcnJheShuYW1lLCBiYXNlLCBuZXdBcnJheSkge1xuICAgIHZhciBiYXNlSW5kZXggPSAwO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICh2YXIgX2lpNCA9IDA7IF9paTQgPCBhcnJheU9mQXJyYXlzLmxlbmd0aDsgKytfaWk0KSB7XG4gICAgICB2YXIgYXJyYXlzID0gYXJyYXlPZkFycmF5c1tfaWk0XTtcbiAgICAgIHZhciBhcnJheUluZm8gPSBhcnJheXNbbmFtZV07XG4gICAgICB2YXIgYXJyYXkgPSBnZXRBcnJheShhcnJheUluZm8pO1xuXG4gICAgICBpZiAobmFtZSA9PT0gJ2luZGljZXMnKSB7XG4gICAgICAgIGNvcHlFbGVtZW50cyhhcnJheSwgbmV3QXJyYXksIG9mZnNldCwgYmFzZUluZGV4KTtcbiAgICAgICAgYmFzZUluZGV4ICs9IGJhc2VbX2lpNF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3B5RWxlbWVudHMoYXJyYXksIG5ld0FycmF5LCBvZmZzZXQpO1xuICAgICAgfVxuXG4gICAgICBvZmZzZXQgKz0gYXJyYXkubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gbmFtZXNbYmFzZU5hbWVdO1xuICB2YXIgbmV3QXJyYXlzID0ge307XG4gIE9iamVjdC5rZXlzKG5hbWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGluZm8gPSBnZXRMZW5ndGhPZkNvbWJpbmVkQXJyYXlzKG5hbWUpO1xuICAgIHZhciBuZXdBcnJheVNwZWMgPSBjcmVhdGVBcnJheU9mU2FtZVR5cGUoaW5mby5zcGVjLCBpbmZvLmxlbmd0aCk7XG4gICAgY29weUFycmF5c1RvTmV3QXJyYXkobmFtZSwgYmFzZSwgZ2V0QXJyYXkobmV3QXJyYXlTcGVjKSk7XG4gICAgbmV3QXJyYXlzW25hbWVdID0gbmV3QXJyYXlTcGVjO1xuICB9KTtcbiAgcmV0dXJuIG5ld0FycmF5cztcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGR1cGxpY2F0ZSBzZXQgb2YgdmVydGljZXNcbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY2FsbGluZyByZW9yaWVudFZlcnRpY2VzIHdoZW4geW91XG4gKiBhbHNvIHdhbnQgdG8ga2VlcCB0aGUgb3JpZ2luYWwgYXZhaWxhYmxlXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BcnJheXN9IGFycmF5cyBvZiB2ZXJ0aWNlc1xuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBUaGUgZHVwbGljYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBkdXBsaWNhdGVWZXJ0aWNlcyhhcnJheXMpIHtcbiAgdmFyIG5ld0FycmF5cyA9IHt9O1xuICBPYmplY3Qua2V5cyhhcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgYXJyYXlTcGVjID0gYXJyYXlzW25hbWVdO1xuICAgIHZhciBzcmNBcnJheSA9IGdldEFycmF5KGFycmF5U3BlYyk7XG4gICAgdmFyIG5ld0FycmF5U3BlYyA9IGNyZWF0ZUFycmF5T2ZTYW1lVHlwZShhcnJheVNwZWMsIHNyY0FycmF5Lmxlbmd0aCk7XG4gICAgY29weUVsZW1lbnRzKHNyY0FycmF5LCBnZXRBcnJheShuZXdBcnJheVNwZWMpLCAwKTtcbiAgICBuZXdBcnJheXNbbmFtZV0gPSBuZXdBcnJheVNwZWM7XG4gIH0pO1xuICByZXR1cm4gbmV3QXJyYXlzO1xufVxuXG52YXIgY3JlYXRlM0RGQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZTNERlZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlM0RGQnVmZmVySW5mbyA9IGNyZWF0ZTNERkJ1ZmZlckluZm87XG52YXIgY3JlYXRlM0RGQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlM0RGVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGUzREZCdWZmZXJzID0gY3JlYXRlM0RGQnVmZmVycztcbnZhciBjcmVhdGVDdWJlQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZUN1YmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZUN1YmVCdWZmZXJJbmZvID0gY3JlYXRlQ3ViZUJ1ZmZlckluZm87XG52YXIgY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZUN1YmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZUN1YmVCdWZmZXJzID0gY3JlYXRlQ3ViZUJ1ZmZlcnM7XG52YXIgY3JlYXRlUGxhbmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlUGxhbmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVBsYW5lQnVmZmVySW5mbyA9IGNyZWF0ZVBsYW5lQnVmZmVySW5mbztcbnZhciBjcmVhdGVQbGFuZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZVBsYW5lVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVQbGFuZUJ1ZmZlcnMgPSBjcmVhdGVQbGFuZUJ1ZmZlcnM7XG52YXIgY3JlYXRlU3BoZXJlQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZVNwaGVyZVZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlU3BoZXJlQnVmZmVySW5mbyA9IGNyZWF0ZVNwaGVyZUJ1ZmZlckluZm87XG52YXIgY3JlYXRlU3BoZXJlQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlU3BoZXJlVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVTcGhlcmVCdWZmZXJzID0gY3JlYXRlU3BoZXJlQnVmZmVycztcbnZhciBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJJbmZvID0gY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm87XG52YXIgY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZVRydW5jYXRlZENvbmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJzID0gY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnM7XG52YXIgY3JlYXRlWFlRdWFkQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZVhZUXVhZFZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyA9IGNyZWF0ZVhZUXVhZEJ1ZmZlckluZm87XG52YXIgY3JlYXRlWFlRdWFkQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlWFlRdWFkVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVYWVF1YWRCdWZmZXJzID0gY3JlYXRlWFlRdWFkQnVmZmVycztcbnZhciBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVDcmVzY2VudFZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlQ3Jlc2NlbnRCdWZmZXJJbmZvID0gY3JlYXRlQ3Jlc2NlbnRCdWZmZXJJbmZvO1xudmFyIGNyZWF0ZUNyZXNjZW50QnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlQ3Jlc2NlbnRWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZUNyZXNjZW50QnVmZmVycyA9IGNyZWF0ZUNyZXNjZW50QnVmZmVycztcbnZhciBjcmVhdGVDeWxpbmRlckJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVDeWxpbmRlclZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvID0gY3JlYXRlQ3lsaW5kZXJCdWZmZXJJbmZvO1xudmFyIGNyZWF0ZUN5bGluZGVyQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlQ3lsaW5kZXJWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZUN5bGluZGVyQnVmZmVycyA9IGNyZWF0ZUN5bGluZGVyQnVmZmVycztcbnZhciBjcmVhdGVUb3J1c0J1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVUb3J1c1ZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlVG9ydXNCdWZmZXJJbmZvID0gY3JlYXRlVG9ydXNCdWZmZXJJbmZvO1xudmFyIGNyZWF0ZVRvcnVzQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlVG9ydXNWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVRvcnVzQnVmZmVycyA9IGNyZWF0ZVRvcnVzQnVmZmVycztcbnZhciBjcmVhdGVEaXNjQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZURpc2NWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZURpc2NCdWZmZXJJbmZvID0gY3JlYXRlRGlzY0J1ZmZlckluZm87XG52YXIgY3JlYXRlRGlzY0J1ZmZlcnMgPSBjcmVhdGVCdWZmZXJGdW5jKGNyZWF0ZURpc2NWZXJ0aWNlcyk7IC8vIHRoZXNlIHdlcmUgbWlzLXNwZWxsZWQgdW50aWwgNC4xMlxuXG5leHBvcnRzLmNyZWF0ZURpc2NCdWZmZXJzID0gY3JlYXRlRGlzY0J1ZmZlcnM7XG52YXIgY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm8gPSBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm87XG5leHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJJbmZvID0gY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm87XG52YXIgY3JlYXRlQ3Jlc2VudEJ1ZmZlcnMgPSBjcmVhdGVDcmVzY2VudEJ1ZmZlcnM7XG5leHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJzID0gY3JlYXRlQ3Jlc2VudEJ1ZmZlcnM7XG52YXIgY3JlYXRlQ3Jlc2VudFZlcnRpY2VzID0gY3JlYXRlQ3Jlc2NlbnRWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlQ3Jlc2VudFZlcnRpY2VzID0gY3JlYXRlQ3Jlc2VudFZlcnRpY2VzO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wcm9ncmFtcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wcm9ncmFtcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZUF0dHJpYnV0ZVNldHRlcnMgPSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzO1xuZXhwb3J0cy5jcmVhdGVQcm9ncmFtID0gY3JlYXRlUHJvZ3JhbTtcbmV4cG9ydHMuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzID0gY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzO1xuZXhwb3J0cy5jcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMgPSBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXM7XG5leHBvcnRzLmNyZWF0ZVByb2dyYW1JbmZvID0gY3JlYXRlUHJvZ3JhbUluZm87XG5leHBvcnRzLmNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0gPSBjcmVhdGVQcm9ncmFtSW5mb0Zyb21Qcm9ncmFtO1xuZXhwb3J0cy5jcmVhdGVVbmlmb3JtU2V0dGVycyA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXJzO1xuZXhwb3J0cy5jcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW0gPSBjcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW07XG5leHBvcnRzLmNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbSA9IGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbTtcbmV4cG9ydHMuY3JlYXRlVW5pZm9ybUJsb2NrSW5mbyA9IGNyZWF0ZVVuaWZvcm1CbG9ja0luZm87XG5leHBvcnRzLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrID0gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2s7XG5leHBvcnRzLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbyA9IGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbztcbmV4cG9ydHMuYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbyA9IGJpbmRUcmFuc2Zvcm1GZWVkYmFja0luZm87XG5leHBvcnRzLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuZXhwb3J0cy5zZXRCdWZmZXJzQW5kQXR0cmlidXRlcyA9IHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzO1xuZXhwb3J0cy5zZXRVbmlmb3JtcyA9IHNldFVuaWZvcm1zO1xuZXhwb3J0cy5zZXRVbmlmb3JtQmxvY2sgPSBzZXRVbmlmb3JtQmxvY2s7XG5leHBvcnRzLnNldEJsb2NrVW5pZm9ybXMgPSBzZXRCbG9ja1VuaWZvcm1zO1xuZXhwb3J0cy5iaW5kVW5pZm9ybUJsb2NrID0gYmluZFVuaWZvcm1CbG9jaztcbmV4cG9ydHMuc2V0VW5pZm9ybXNBbmRCaW5kVGV4dHVyZXMgPSB2b2lkIDA7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMuanMgKi8gXCIuL3NyYy91dGlscy5qc1wiKSk7XG5cbnZhciBoZWxwZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlci5qcyAqLyBcIi4vc3JjL2hlbHBlci5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXG4gKiBMb3cgbGV2ZWwgc2hhZGVyIHByb2dyYW0gcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5wcm9ncmFtc2AgYW5kIGB0d2dsYFxuICogaXRzZWxmXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6dHdnbH0gZm9yIGNvcmUgZnVuY3Rpb25zXG4gKlxuICogQG1vZHVsZSB0d2dsL3Byb2dyYW1zXG4gKi9cbnZhciBlcnJvciA9IGhlbHBlci5lcnJvcjtcbnZhciB3YXJuID0gaGVscGVyLndhcm47XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRCeUlkKGlkKSB7XG4gIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIDogbnVsbDtcbn1cblxudmFyIFRFWFRVUkUwID0gMHg4NGMwO1xudmFyIERZTkFNSUNfRFJBVyA9IDB4ODhlODtcbnZhciBBUlJBWV9CVUZGRVIgPSAweDg4OTI7XG52YXIgRUxFTUVOVF9BUlJBWV9CVUZGRVIgPSAweDg4OTM7XG52YXIgVU5JRk9STV9CVUZGRVIgPSAweDhhMTE7XG52YXIgVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiA9IDB4OGM4ZTtcbnZhciBUUkFOU0ZPUk1fRkVFREJBQ0sgPSAweDhlMjI7XG52YXIgQ09NUElMRV9TVEFUVVMgPSAweDhiODE7XG52YXIgTElOS19TVEFUVVMgPSAweDhiODI7XG52YXIgRlJBR01FTlRfU0hBREVSID0gMHg4YjMwO1xudmFyIFZFUlRFWF9TSEFERVIgPSAweDhiMzE7XG52YXIgU0VQQVJBVEVfQVRUUklCUyA9IDB4OGM4ZDtcbnZhciBBQ1RJVkVfVU5JRk9STVMgPSAweDhiODY7XG52YXIgQUNUSVZFX0FUVFJJQlVURVMgPSAweDhiODk7XG52YXIgVFJBTlNGT1JNX0ZFRURCQUNLX1ZBUllJTkdTID0gMHg4YzgzO1xudmFyIEFDVElWRV9VTklGT1JNX0JMT0NLUyA9IDB4OGEzNjtcbnZhciBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfVkVSVEVYX1NIQURFUiA9IDB4OGE0NDtcbnZhciBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfRlJBR01FTlRfU0hBREVSID0gMHg4YTQ2O1xudmFyIFVOSUZPUk1fQkxPQ0tfREFUQV9TSVpFID0gMHg4YTQwO1xudmFyIFVOSUZPUk1fQkxPQ0tfQUNUSVZFX1VOSUZPUk1fSU5ESUNFUyA9IDB4OGE0MztcbnZhciBGTE9BVCA9IDB4MTQwNjtcbnZhciBGTE9BVF9WRUMyID0gMHg4QjUwO1xudmFyIEZMT0FUX1ZFQzMgPSAweDhCNTE7XG52YXIgRkxPQVRfVkVDNCA9IDB4OEI1MjtcbnZhciBJTlQgPSAweDE0MDQ7XG52YXIgSU5UX1ZFQzIgPSAweDhCNTM7XG52YXIgSU5UX1ZFQzMgPSAweDhCNTQ7XG52YXIgSU5UX1ZFQzQgPSAweDhCNTU7XG52YXIgQk9PTCA9IDB4OEI1NjtcbnZhciBCT09MX1ZFQzIgPSAweDhCNTc7XG52YXIgQk9PTF9WRUMzID0gMHg4QjU4O1xudmFyIEJPT0xfVkVDNCA9IDB4OEI1OTtcbnZhciBGTE9BVF9NQVQyID0gMHg4QjVBO1xudmFyIEZMT0FUX01BVDMgPSAweDhCNUI7XG52YXIgRkxPQVRfTUFUNCA9IDB4OEI1QztcbnZhciBTQU1QTEVSXzJEID0gMHg4QjVFO1xudmFyIFNBTVBMRVJfQ1VCRSA9IDB4OEI2MDtcbnZhciBTQU1QTEVSXzNEID0gMHg4QjVGO1xudmFyIFNBTVBMRVJfMkRfU0hBRE9XID0gMHg4QjYyO1xudmFyIEZMT0FUX01BVDJ4MyA9IDB4OEI2NTtcbnZhciBGTE9BVF9NQVQyeDQgPSAweDhCNjY7XG52YXIgRkxPQVRfTUFUM3gyID0gMHg4QjY3O1xudmFyIEZMT0FUX01BVDN4NCA9IDB4OEI2ODtcbnZhciBGTE9BVF9NQVQ0eDIgPSAweDhCNjk7XG52YXIgRkxPQVRfTUFUNHgzID0gMHg4QjZBO1xudmFyIFNBTVBMRVJfMkRfQVJSQVkgPSAweDhEQzE7XG52YXIgU0FNUExFUl8yRF9BUlJBWV9TSEFET1cgPSAweDhEQzQ7XG52YXIgU0FNUExFUl9DVUJFX1NIQURPVyA9IDB4OERDNTtcbnZhciBVTlNJR05FRF9JTlQgPSAweDE0MDU7XG52YXIgVU5TSUdORURfSU5UX1ZFQzIgPSAweDhEQzY7XG52YXIgVU5TSUdORURfSU5UX1ZFQzMgPSAweDhEQzc7XG52YXIgVU5TSUdORURfSU5UX1ZFQzQgPSAweDhEQzg7XG52YXIgSU5UX1NBTVBMRVJfMkQgPSAweDhEQ0E7XG52YXIgSU5UX1NBTVBMRVJfM0QgPSAweDhEQ0I7XG52YXIgSU5UX1NBTVBMRVJfQ1VCRSA9IDB4OERDQztcbnZhciBJTlRfU0FNUExFUl8yRF9BUlJBWSA9IDB4OERDRjtcbnZhciBVTlNJR05FRF9JTlRfU0FNUExFUl8yRCA9IDB4OEREMjtcbnZhciBVTlNJR05FRF9JTlRfU0FNUExFUl8zRCA9IDB4OEREMztcbnZhciBVTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFID0gMHg4REQ0O1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEX0FSUkFZID0gMHg4REQ3O1xudmFyIFRFWFRVUkVfMkQgPSAweDBERTE7XG52YXIgVEVYVFVSRV9DVUJFX01BUCA9IDB4ODUxMztcbnZhciBURVhUVVJFXzNEID0gMHg4MDZGO1xudmFyIFRFWFRVUkVfMkRfQVJSQVkgPSAweDhDMUE7XG52YXIgdHlwZU1hcCA9IHt9O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIGJpbmQgcG9pbnQgZm9yIGEgZ2l2ZW4gc2FtcGxlciB0eXBlXG4gKi9cblxuZnVuY3Rpb24gZ2V0QmluZFBvaW50Rm9yU2FtcGxlclR5cGUoZ2wsIHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVNYXBbdHlwZV0uYmluZFBvaW50O1xufSAvLyBUaGlzIGtpbmQgb2Ygc3Vja3MhIElmIHlvdSBjb3VsZCBjb21wb3NlIGZ1bmN0aW9ucyBhcyBpbiBgdmFyIGZuID0gZ2xbbmFtZV07YFxuLy8gdGhpcyBjb2RlIGNvdWxkIGJlIGEgbG90IHNtYWxsZXIgYnV0IHRoYXQgaXMgc2FkbHkgcmVhbGx5IHNsb3cgKFRfVClcblxuXG5mdW5jdGlvbiBmbG9hdFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRBcnJheVNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTFmdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0VmVjMlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTJmdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0VmVjM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0VmVjNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50QXJyYXlTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRWZWMyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMml2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50VmVjM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTNpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludFZlYzRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm00aXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMXVpKGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludEFycmF5U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMXVpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVpbnRWZWMyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMnVpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVpbnRWZWMzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtM3Vpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVpbnRWZWM0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtNHVpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0MlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDJmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDNTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQ0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0MjNTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgyeDNmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDMyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4M3gyZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQyNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDJ4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0NDJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0eDJmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDM0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4M3g0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQ0M1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDR4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhbXBsZXJTZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uKSB7XG4gIHZhciBiaW5kUG9pbnQgPSBnZXRCaW5kUG9pbnRGb3JTYW1wbGVyVHlwZShnbCwgdHlwZSk7XG4gIHJldHVybiB1dGlscy5pc1dlYkdMMihnbCkgPyBmdW5jdGlvbiAodGV4dHVyZU9yUGFpcikge1xuICAgIHZhciB0ZXh0dXJlO1xuICAgIHZhciBzYW1wbGVyO1xuXG4gICAgaWYgKGhlbHBlci5pc1RleHR1cmUoZ2wsIHRleHR1cmVPclBhaXIpKSB7XG4gICAgICB0ZXh0dXJlID0gdGV4dHVyZU9yUGFpcjtcbiAgICAgIHNhbXBsZXIgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0dXJlID0gdGV4dHVyZU9yUGFpci50ZXh0dXJlO1xuICAgICAgc2FtcGxlciA9IHRleHR1cmVPclBhaXIuc2FtcGxlcjtcbiAgICB9XG5cbiAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHVuaXQpO1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbC5iaW5kVGV4dHVyZShiaW5kUG9pbnQsIHRleHR1cmUpO1xuICAgIGdsLmJpbmRTYW1wbGVyKHVuaXQsIHNhbXBsZXIpO1xuICB9IDogZnVuY3Rpb24gKHRleHR1cmUpIHtcbiAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHVuaXQpO1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoVEVYVFVSRTAgKyB1bml0KTtcbiAgICBnbC5iaW5kVGV4dHVyZShiaW5kUG9pbnQsIHRleHR1cmUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzYW1wbGVyQXJyYXlTZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uLCBzaXplKSB7XG4gIHZhciBiaW5kUG9pbnQgPSBnZXRCaW5kUG9pbnRGb3JTYW1wbGVyVHlwZShnbCwgdHlwZSk7XG4gIHZhciB1bml0cyA9IG5ldyBJbnQzMkFycmF5KHNpemUpO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBzaXplOyArK2lpKSB7XG4gICAgdW5pdHNbaWldID0gdW5pdCArIGlpO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxzLmlzV2ViR0wyKGdsKSA/IGZ1bmN0aW9uICh0ZXh0dXJlcykge1xuICAgIGdsLnVuaWZvcm0xaXYobG9jYXRpb24sIHVuaXRzKTtcbiAgICB0ZXh0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0dXJlT3JQYWlyLCBpbmRleCkge1xuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShURVhUVVJFMCArIHVuaXRzW2luZGV4XSk7XG4gICAgICB2YXIgdGV4dHVyZTtcbiAgICAgIHZhciBzYW1wbGVyO1xuXG4gICAgICBpZiAoaGVscGVyLmlzVGV4dHVyZShnbCwgdGV4dHVyZU9yUGFpcikpIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXI7XG4gICAgICAgIHNhbXBsZXIgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dHVyZSA9IHRleHR1cmVPclBhaXIudGV4dHVyZTtcbiAgICAgICAgc2FtcGxlciA9IHRleHR1cmVPclBhaXIuc2FtcGxlcjtcbiAgICAgIH1cblxuICAgICAgZ2wuYmluZFNhbXBsZXIodW5pdCwgc2FtcGxlcik7XG4gICAgICBnbC5iaW5kVGV4dHVyZShiaW5kUG9pbnQsIHRleHR1cmUpO1xuICAgIH0pO1xuICB9IDogZnVuY3Rpb24gKHRleHR1cmVzKSB7XG4gICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdW5pdHMpO1xuICAgIHRleHR1cmVzLmZvckVhY2goZnVuY3Rpb24gKHRleHR1cmUsIGluZGV4KSB7XG4gICAgICBnbC5hY3RpdmVUZXh0dXJlKFRFWFRVUkUwICsgdW5pdHNbaW5kZXhdKTtcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGJpbmRQb2ludCwgdGV4dHVyZSk7XG4gICAgfSk7XG4gIH07XG59XG5cbnR5cGVNYXBbRkxPQVRdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDQsXG4gIHNldHRlcjogZmxvYXRTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBmbG9hdEFycmF5U2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9WRUMyXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiA4LFxuICBzZXR0ZXI6IGZsb2F0VmVjMlNldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfVkVDM10gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogZmxvYXRWZWMzU2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9WRUM0XSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiAxNixcbiAgc2V0dGVyOiBmbG9hdFZlYzRTZXR0ZXJcbn07XG50eXBlTWFwW0lOVF0gPSB7XG4gIFR5cGU6IEludDMyQXJyYXksXG4gIHNpemU6IDQsXG4gIHNldHRlcjogaW50U2V0dGVyLFxuICBhcnJheVNldHRlcjogaW50QXJyYXlTZXR0ZXJcbn07XG50eXBlTWFwW0lOVF9WRUMyXSA9IHtcbiAgVHlwZTogSW50MzJBcnJheSxcbiAgc2l6ZTogOCxcbiAgc2V0dGVyOiBpbnRWZWMyU2V0dGVyXG59O1xudHlwZU1hcFtJTlRfVkVDM10gPSB7XG4gIFR5cGU6IEludDMyQXJyYXksXG4gIHNpemU6IDEyLFxuICBzZXR0ZXI6IGludFZlYzNTZXR0ZXJcbn07XG50eXBlTWFwW0lOVF9WRUM0XSA9IHtcbiAgVHlwZTogSW50MzJBcnJheSxcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogaW50VmVjNFNldHRlclxufTtcbnR5cGVNYXBbVU5TSUdORURfSU5UXSA9IHtcbiAgVHlwZTogVWludDMyQXJyYXksXG4gIHNpemU6IDQsXG4gIHNldHRlcjogdWludFNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHVpbnRBcnJheVNldHRlclxufTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzJdID0ge1xuICBUeXBlOiBVaW50MzJBcnJheSxcbiAgc2l6ZTogOCxcbiAgc2V0dGVyOiB1aW50VmVjMlNldHRlclxufTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzNdID0ge1xuICBUeXBlOiBVaW50MzJBcnJheSxcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogdWludFZlYzNTZXR0ZXJcbn07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9WRUM0XSA9IHtcbiAgVHlwZTogVWludDMyQXJyYXksXG4gIHNpemU6IDE2LFxuICBzZXR0ZXI6IHVpbnRWZWM0U2V0dGVyXG59O1xudHlwZU1hcFtCT09MXSA9IHtcbiAgVHlwZTogVWludDMyQXJyYXksXG4gIHNpemU6IDQsXG4gIHNldHRlcjogaW50U2V0dGVyLFxuICBhcnJheVNldHRlcjogaW50QXJyYXlTZXR0ZXJcbn07XG50eXBlTWFwW0JPT0xfVkVDMl0gPSB7XG4gIFR5cGU6IFVpbnQzMkFycmF5LFxuICBzaXplOiA4LFxuICBzZXR0ZXI6IGludFZlYzJTZXR0ZXJcbn07XG50eXBlTWFwW0JPT0xfVkVDM10gPSB7XG4gIFR5cGU6IFVpbnQzMkFycmF5LFxuICBzaXplOiAxMixcbiAgc2V0dGVyOiBpbnRWZWMzU2V0dGVyXG59O1xudHlwZU1hcFtCT09MX1ZFQzRdID0ge1xuICBUeXBlOiBVaW50MzJBcnJheSxcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogaW50VmVjNFNldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfTUFUMl0gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogZmxvYXRNYXQyU2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9NQVQzXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiAzNixcbiAgc2V0dGVyOiBmbG9hdE1hdDNTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX01BVDRdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDY0LFxuICBzZXR0ZXI6IGZsb2F0TWF0NFNldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfTUFUMngzXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiAyNCxcbiAgc2V0dGVyOiBmbG9hdE1hdDIzU2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9NQVQyeDRdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDMyLFxuICBzZXR0ZXI6IGZsb2F0TWF0MjRTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX01BVDN4Ml0gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogMjQsXG4gIHNldHRlcjogZmxvYXRNYXQzMlNldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfTUFUM3g0XSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiA0OCxcbiAgc2V0dGVyOiBmbG9hdE1hdDM0U2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9NQVQ0eDJdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDMyLFxuICBzZXR0ZXI6IGZsb2F0TWF0NDJTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX01BVDR4M10gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogNDgsXG4gIHNldHRlcjogZmxvYXRNYXQ0M1NldHRlclxufTtcbnR5cGVNYXBbU0FNUExFUl8yRF0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzJEXG59O1xudHlwZU1hcFtTQU1QTEVSX0NVQkVdID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV9DVUJFX01BUFxufTtcbnR5cGVNYXBbU0FNUExFUl8zRF0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzNEXG59O1xudHlwZU1hcFtTQU1QTEVSXzJEX1NIQURPV10gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzJEXG59O1xudHlwZU1hcFtTQU1QTEVSXzJEX0FSUkFZXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRfQVJSQVlcbn07XG50eXBlTWFwW1NBTVBMRVJfMkRfQVJSQVlfU0hBRE9XXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRfQVJSQVlcbn07XG50eXBlTWFwW1NBTVBMRVJfQ1VCRV9TSEFET1ddID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV9DVUJFX01BUFxufTtcbnR5cGVNYXBbSU5UX1NBTVBMRVJfMkRdID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV8yRFxufTtcbnR5cGVNYXBbSU5UX1NBTVBMRVJfM0RdID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV8zRFxufTtcbnR5cGVNYXBbSU5UX1NBTVBMRVJfQ1VCRV0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFX0NVQkVfTUFQXG59O1xudHlwZU1hcFtJTlRfU0FNUExFUl8yRF9BUlJBWV0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzJEX0FSUkFZXG59O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfU0FNUExFUl8yRF0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzJEXG59O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfU0FNUExFUl8zRF0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzNEXG59O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfU0FNUExFUl9DVUJFXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfQ1VCRV9NQVBcbn07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRfQVJSQVlcbn07XG5cbmZ1bmN0aW9uIGZsb2F0QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBpZiAoYi52YWx1ZSkge1xuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcblxuICAgICAgc3dpdGNoIChiLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliNGZ2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliM2Z2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliMmZ2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZ2wudmVydGV4QXR0cmliMWZ2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGhlIGxlbmd0aCBvZiBhIGZsb2F0IGNvbnN0YW50IHZhbHVlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA0IScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgYi5idWZmZXIpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihpbmRleCwgYi5udW1Db21wb25lbnRzIHx8IGIuc2l6ZSwgYi50eXBlIHx8IEZMT0FULCBiLm5vcm1hbGl6ZSB8fCBmYWxzZSwgYi5zdHJpZGUgfHwgMCwgYi5vZmZzZXQgfHwgMCk7XG5cbiAgICAgIGlmIChiLmRpdmlzb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGluZGV4LCBiLmRpdmlzb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBpZiAoYi52YWx1ZSkge1xuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcblxuICAgICAgaWYgKGIudmFsdWUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYjRpdihpbmRleCwgYi52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBsZW5ndGggb2YgYW4gaW50ZWdlciBjb25zdGFudCB2YWx1ZSBtdXN0IGJlIDQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBiLmJ1ZmZlcik7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCk7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJJUG9pbnRlcihpbmRleCwgYi5udW1Db21wb25lbnRzIHx8IGIuc2l6ZSwgYi50eXBlIHx8IElOVCwgYi5zdHJpZGUgfHwgMCwgYi5vZmZzZXQgfHwgMCk7XG5cbiAgICAgIGlmIChiLmRpdmlzb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGluZGV4LCBiLmRpdmlzb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludEF0dHJpYlNldHRlcihnbCwgaW5kZXgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgaWYgKGIudmFsdWUpIHtcbiAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCk7XG5cbiAgICAgIGlmIChiLnZhbHVlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWI0dWl2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGxlbmd0aCBvZiBhbiB1bnNpZ25lZCBpbnRlZ2VyIGNvbnN0YW50IHZhbHVlIG11c3QgYmUgNCEnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIGIuYnVmZmVyKTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYklQb2ludGVyKGluZGV4LCBiLm51bUNvbXBvbmVudHMgfHwgYi5zaXplLCBiLnR5cGUgfHwgVU5TSUdORURfSU5ULCBiLnN0cmlkZSB8fCAwLCBiLm9mZnNldCB8fCAwKTtcblxuICAgICAgaWYgKGIuZGl2aXNvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXgsIGIuZGl2aXNvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXRBdHRyaWJTZXR0ZXIoZ2wsIGluZGV4LCB0eXBlSW5mbykge1xuICB2YXIgZGVmYXVsdFNpemUgPSB0eXBlSW5mby5zaXplO1xuICB2YXIgY291bnQgPSB0eXBlSW5mby5jb3VudDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChiKSB7XG4gICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIGIuYnVmZmVyKTtcbiAgICB2YXIgbnVtQ29tcG9uZW50cyA9IGIuc2l6ZSB8fCBiLm51bUNvbXBvbmVudHMgfHwgZGVmYXVsdFNpemU7XG4gICAgdmFyIHNpemUgPSBudW1Db21wb25lbnRzIC8gY291bnQ7XG4gICAgdmFyIHR5cGUgPSBiLnR5cGUgfHwgRkxPQVQ7XG4gICAgdmFyIHR5cGVJbmZvID0gdHlwZU1hcFt0eXBlXTtcbiAgICB2YXIgc3RyaWRlID0gdHlwZUluZm8uc2l6ZSAqIG51bUNvbXBvbmVudHM7XG4gICAgdmFyIG5vcm1hbGl6ZSA9IGIubm9ybWFsaXplIHx8IGZhbHNlO1xuICAgIHZhciBvZmZzZXQgPSBiLm9mZnNldCB8fCAwO1xuICAgIHZhciByb3dPZmZzZXQgPSBzdHJpZGUgLyBjb3VudDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXggKyBpKTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoaW5kZXggKyBpLCBzaXplLCB0eXBlLCBub3JtYWxpemUsIHN0cmlkZSwgb2Zmc2V0ICsgcm93T2Zmc2V0ICogaSk7XG5cbiAgICAgIGlmIChiLmRpdmlzb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yKGluZGV4ICsgaSwgYi5kaXZpc29yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciBhdHRyVHlwZU1hcCA9IHt9O1xuYXR0clR5cGVNYXBbRkxPQVRdID0ge1xuICBzaXplOiA0LFxuICBzZXR0ZXI6IGZsb2F0QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbRkxPQVRfVkVDMl0gPSB7XG4gIHNpemU6IDgsXG4gIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtGTE9BVF9WRUMzXSA9IHtcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtGTE9BVF9WRUM0XSA9IHtcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtJTlRdID0ge1xuICBzaXplOiA0LFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0lOVF9WRUMyXSA9IHtcbiAgc2l6ZTogOCxcbiAgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtJTlRfVkVDM10gPSB7XG4gIHNpemU6IDEyLFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0lOVF9WRUM0XSA9IHtcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogaW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbVU5TSUdORURfSU5UXSA9IHtcbiAgc2l6ZTogNCxcbiAgc2V0dGVyOiB1aW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzJdID0ge1xuICBzaXplOiA4LFxuICBzZXR0ZXI6IHVpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDM10gPSB7XG4gIHNpemU6IDEyLFxuICBzZXR0ZXI6IHVpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDNF0gPSB7XG4gIHNpemU6IDE2LFxuICBzZXR0ZXI6IHVpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtCT09MXSA9IHtcbiAgc2l6ZTogNCxcbiAgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtCT09MX1ZFQzJdID0ge1xuICBzaXplOiA4LFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0JPT0xfVkVDM10gPSB7XG4gIHNpemU6IDEyLFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0JPT0xfVkVDNF0gPSB7XG4gIHNpemU6IDE2LFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0ZMT0FUX01BVDJdID0ge1xuICBzaXplOiA0LFxuICBzZXR0ZXI6IG1hdEF0dHJpYlNldHRlcixcbiAgY291bnQ6IDJcbn07XG5hdHRyVHlwZU1hcFtGTE9BVF9NQVQzXSA9IHtcbiAgc2l6ZTogOSxcbiAgc2V0dGVyOiBtYXRBdHRyaWJTZXR0ZXIsXG4gIGNvdW50OiAzXG59O1xuYXR0clR5cGVNYXBbRkxPQVRfTUFUNF0gPSB7XG4gIHNpemU6IDE2LFxuICBzZXR0ZXI6IG1hdEF0dHJpYlNldHRlcixcbiAgY291bnQ6IDRcbn07IC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzZWUgYSBnbG9iYWwgZ2xcblxudmFyIGdsID0gdW5kZWZpbmVkO1xuLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuXG52YXIgZXJyb3JSRSA9IC9FUlJPUjpcXHMqXFxkKzooXFxkKykvZ2k7XG5cbmZ1bmN0aW9uIGFkZExpbmVOdW1iZXJzV2l0aEVycm9yKHNyYykge1xuICB2YXIgbG9nID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnJztcbiAgdmFyIGxpbmVPZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDA7XG5cbiAgLy8gTm90ZTogRXJyb3IgbWVzc2FnZSBmb3JtYXRzIGFyZSBub3QgZGVmaW5lZCBieSBhbnkgc3BlYyBzbyB0aGlzIG1heSBvciBtYXkgbm90IHdvcmsuXG4gIHZhciBtYXRjaGVzID0gX3RvQ29uc3VtYWJsZUFycmF5KGxvZy5tYXRjaEFsbChlcnJvclJFKSk7XG5cbiAgdmFyIGxpbmVOb1RvRXJyb3JNYXAgPSBuZXcgTWFwKG1hdGNoZXMubWFwKGZ1bmN0aW9uIChtLCBuZHgpIHtcbiAgICB2YXIgbGluZU5vID0gcGFyc2VJbnQobVsxXSk7XG4gICAgdmFyIG5leHQgPSBtYXRjaGVzW25keCArIDFdO1xuICAgIHZhciBlbmQgPSBuZXh0ID8gbmV4dC5pbmRleCA6IGxvZy5sZW5ndGg7XG4gICAgdmFyIG1zZyA9IGxvZy5zdWJzdHJpbmcobS5pbmRleCwgZW5kKTtcbiAgICByZXR1cm4gW2xpbmVObyAtIDEsIG1zZ107XG4gIH0pKTtcbiAgcmV0dXJuIHNyYy5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uIChsaW5lLCBsaW5lTm8pIHtcbiAgICB2YXIgZXJyID0gbGluZU5vVG9FcnJvck1hcC5nZXQobGluZU5vKTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQobGluZU5vICsgMSArIGxpbmVPZmZzZXQsIFwiOiBcIikuY29uY2F0KGxpbmUpLmNvbmNhdChlcnIgPyBcIlxcblxcbl5eXiBcIi5jb25jYXQoZXJyKSA6ICcnKTtcbiAgfSkuam9pbignXFxuJyk7XG59XG4vKipcbiAqIEVycm9yIENhbGxiYWNrXG4gKiBAY2FsbGJhY2sgRXJyb3JDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsaW5lT2Zmc2V0XSBhbW91bnQgdG8gYWRkIHRvIGxpbmUgbnVtYmVyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbnZhciBzcGFjZVJFID0gL15bIFxcdF0qXFxuLztcbi8qKlxuICogTG9hZHMgYSBzaGFkZXIuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2hhZGVyU291cmNlIFRoZSBzaGFkZXIgc291cmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNoYWRlclR5cGUgVGhlIHR5cGUgb2Ygc2hhZGVyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBvcHRfZXJyb3JDYWxsYmFjayBjYWxsYmFjayBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7V2ViR0xTaGFkZXJ9IFRoZSBjcmVhdGVkIHNoYWRlci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZFNoYWRlcihnbCwgc2hhZGVyU291cmNlLCBzaGFkZXJUeXBlLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgZXJyRm4gPSBvcHRfZXJyb3JDYWxsYmFjayB8fCBlcnJvcjsgLy8gQ3JlYXRlIHRoZSBzaGFkZXIgb2JqZWN0XG5cbiAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKTsgLy8gUmVtb3ZlIHRoZSBmaXJzdCBlbmQgb2YgbGluZSBiZWNhdXNlIFdlYkdMIDIuMCByZXF1aXJlc1xuICAvLyAjdmVyc2lvbiAzMDAgZXNcbiAgLy8gYXMgdGhlIGZpcnN0IGxpbmUuIE5vIHdoaXRlc3BhY2UgYWxsb3dlZCBiZWZvcmUgdGhhdCBsaW5lXG4gIC8vIHNvXG4gIC8vXG4gIC8vIDxzY3JpcHQ+XG4gIC8vICN2ZXJzaW9uIDMwMCBlc1xuICAvLyA8L3NjcmlwdD5cbiAgLy9cbiAgLy8gSGFzIG9uZSBsaW5lIGJlZm9yZSBpdCB3aGljaCBpcyBpbnZhbGlkIGFjY29yZGluZyB0byBHTFNMIEVTIDMuMDBcbiAgLy9cblxuICB2YXIgbGluZU9mZnNldCA9IDA7XG5cbiAgaWYgKHNwYWNlUkUudGVzdChzaGFkZXJTb3VyY2UpKSB7XG4gICAgbGluZU9mZnNldCA9IDE7XG4gICAgc2hhZGVyU291cmNlID0gc2hhZGVyU291cmNlLnJlcGxhY2Uoc3BhY2VSRSwgJycpO1xuICB9IC8vIExvYWQgdGhlIHNoYWRlciBzb3VyY2VcblxuXG4gIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNoYWRlclNvdXJjZSk7IC8vIENvbXBpbGUgdGhlIHNoYWRlclxuXG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTsgLy8gQ2hlY2sgdGhlIGNvbXBpbGUgc3RhdHVzXG5cbiAgdmFyIGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgQ09NUElMRV9TVEFUVVMpO1xuXG4gIGlmICghY29tcGlsZWQpIHtcbiAgICAvLyBTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgY29tcGlsYXRpb247IGdldCB0aGUgZXJyb3JcbiAgICB2YXIgbGFzdEVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xuICAgIGVyckZuKFwiXCIuY29uY2F0KGFkZExpbmVOdW1iZXJzV2l0aEVycm9yKHNoYWRlclNvdXJjZSwgbGFzdEVycm9yLCBsaW5lT2Zmc2V0KSwgXCJcXG5FcnJvciBjb21waWxpbmcgXCIpLmNvbmNhdCh1dGlscy5nbEVudW1Ub1N0cmluZyhnbCwgc2hhZGVyVHlwZSksIFwiOiBcIikuY29uY2F0KGxhc3RFcnJvcikpO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHNoYWRlcjtcbn1cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJvZ3JhbU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb24oc3RyaW5nKX0gW2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsbnVtYmVyPn0gW2F0dHJpYkxvY2F0aW9uc10gYSBhdHRyaWJ1dGUgbmFtZSB0byBsb2NhdGlvbiBtYXBcbiAqIEBwcm9wZXJ0eSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98T2JqZWN0LjxzdHJpbmcsbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz58c3RyaW5nW10pfSBbdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nc10gSWYgcGFzc2VkXG4gKiAgIGEgQnVmZmVySW5mbyB3aWxsIHVzZSB0aGUgYXR0cmlicyBuYW1lcyBpbnNpZGUuIElmIHBhc3NlZCBhbiBvYmplY3Qgb2YgQXR0cmliSW5mb3Mgd2lsbCB1c2UgdGhlIG5hbWVzIGZyb20gdGhhdCBvYmplY3QuIE90aGVyd2lzZVxuICogICB5b3UgY2FuIHBhc3MgYW4gYXJyYXkgb2YgbmFtZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3RyYW5zZm9ybUZlZWRiYWNrTW9kZV0gdGhlIG1vZGUgdG8gcGFzcyBgZ2wudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5nc2AuIERlZmF1bHRzIHRvIGBTRVBBUkFURV9BVFRSSUJTYC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogR2V0cyB0aGUgcHJvZ3JhbSBvcHRpb25zIGJhc2VkIG9uIGFsbCB0aGVzZSBvcHRpb25hbCBhcmd1bWVudHNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW119IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcy4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnNdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfSBhbiBpbnN0YW5jZSBvZiBQcm9ncmFtT3B0aW9ucyBiYXNlZCBvbiB0aGUgYXJndW1lbnRzIHBhc3NlZCBpblxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncztcbiAgdmFyIHRyYW5zZm9ybUZlZWRiYWNrTW9kZTtcblxuICBpZiAodHlwZW9mIG9wdF9sb2NhdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRfZXJyb3JDYWxsYmFjayA9IG9wdF9sb2NhdGlvbnM7XG4gICAgb3B0X2xvY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0X2F0dHJpYnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRfZXJyb3JDYWxsYmFjayA9IG9wdF9hdHRyaWJzO1xuICAgIG9wdF9hdHRyaWJzID0gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKG9wdF9hdHRyaWJzICYmICFBcnJheS5pc0FycmF5KG9wdF9hdHRyaWJzKSkge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZXJyb3JDYWxsYmFjayB3ZSBjYW4ganVzdCByZXR1cm4gdGhpcyBvYmplY3RcbiAgICAvLyBPdGhlcndpc2Ugd2UgbmVlZCB0byBjb25zdHJ1Y3Qgb25lIHdpdGggZGVmYXVsdCBlcnJvckNhbGxiYWNrXG4gICAgaWYgKG9wdF9hdHRyaWJzLmVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBvcHRfYXR0cmlicztcbiAgICB9XG5cbiAgICB2YXIgb3B0ID0gb3B0X2F0dHJpYnM7XG4gICAgb3B0X2Vycm9yQ2FsbGJhY2sgPSBvcHQuZXJyb3JDYWxsYmFjaztcbiAgICBvcHRfYXR0cmlicyA9IG9wdC5hdHRyaWJMb2NhdGlvbnM7XG4gICAgdHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncyA9IG9wdC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzO1xuICAgIHRyYW5zZm9ybUZlZWRiYWNrTW9kZSA9IG9wdC50cmFuc2Zvcm1GZWVkYmFja01vZGU7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBlcnJvckNhbGxiYWNrOiBvcHRfZXJyb3JDYWxsYmFjayB8fCBlcnJvcixcbiAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzOiB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzLFxuICAgIHRyYW5zZm9ybUZlZWRiYWNrTW9kZTogdHJhbnNmb3JtRmVlZGJhY2tNb2RlXG4gIH07XG5cbiAgaWYgKG9wdF9hdHRyaWJzKSB7XG4gICAgdmFyIGF0dHJpYkxvY2F0aW9ucyA9IHt9O1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0X2F0dHJpYnMpKSB7XG4gICAgICBvcHRfYXR0cmlicy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWIsIG5keCkge1xuICAgICAgICBhdHRyaWJMb2NhdGlvbnNbYXR0cmliXSA9IG9wdF9sb2NhdGlvbnMgPyBvcHRfbG9jYXRpb25zW25keF0gOiBuZHg7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmliTG9jYXRpb25zID0gb3B0X2F0dHJpYnM7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5hdHRyaWJMb2NhdGlvbnMgPSBhdHRyaWJMb2NhdGlvbnM7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxudmFyIGRlZmF1bHRTaGFkZXJUeXBlID0gW1wiVkVSVEVYX1NIQURFUlwiLCBcIkZSQUdNRU5UX1NIQURFUlwiXTtcblxuZnVuY3Rpb24gZ2V0U2hhZGVyVHlwZUZyb21TY3JpcHRUeXBlKGdsLCBzY3JpcHRUeXBlKSB7XG4gIGlmIChzY3JpcHRUeXBlLmluZGV4T2YoXCJmcmFnXCIpID49IDApIHtcbiAgICByZXR1cm4gRlJBR01FTlRfU0hBREVSO1xuICB9IGVsc2UgaWYgKHNjcmlwdFR5cGUuaW5kZXhPZihcInZlcnRcIikgPj0gMCkge1xuICAgIHJldHVybiBWRVJURVhfU0hBREVSO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU2hhZGVycyhnbCwgc2hhZGVycykge1xuICBzaGFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRlcikge1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICB9KTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHByb2dyYW0sIGF0dGFjaGVzIChhbmQvb3IgY29tcGlsZXMpIHNoYWRlcnMsIGJpbmRzIGF0dHJpYiBsb2NhdGlvbnMsIGxpbmtzIHRoZVxuICogcHJvZ3JhbSBhbmQgY2FsbHMgdXNlUHJvZ3JhbS5cbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbShnbCwgW3ZzLCBmc10sIG9wdGlvbnMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbShnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW0oZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbShnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyRnVuYyk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFNoYWRlcltdfHN0cmluZ1tdfSBzaGFkZXJzIFRoZSBzaGFkZXJzIHRvIGF0dGFjaCwgb3IgZWxlbWVudCBpZHMgZm9yIHRoZWlyIHNvdXJjZSwgb3Igc3RyaW5ncyB0aGF0IGNvbnRhaW4gdGhlaXIgc291cmNlXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfHN0cmluZ1tdfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcyBvciBhbiBlcnJvciBjYWxsYmFjay4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnN8bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja10gVGhlIGxvY2F0aW9ucyBmb3IgdGhlLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMgb3IgYW4gZXJyb3IgY2FsbGJhY2suXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfZXJyb3JDYWxsYmFja10gY2FsbGJhY2sgZm9yIGVycm9ycy4gQnkgZGVmYXVsdCBpdCBqdXN0IHByaW50cyBhbiBlcnJvciB0byB0aGUgY29uc29sZVxuICogICAgICAgIG9uIGVycm9yLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgZWxzZSBwYXNzIGFuIGNhbGxiYWNrLiBJdCdzIHBhc3NlZCBhbiBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7V2ViR0xQcm9ncmFtP30gdGhlIGNyZWF0ZWQgcHJvZ3JhbSBvciBudWxsIGlmIGVycm9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsLCBzaGFkZXJzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIHByb2dPcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbiAgdmFyIHJlYWxTaGFkZXJzID0gW107XG4gIHZhciBuZXdTaGFkZXJzID0gW107XG5cbiAgZm9yICh2YXIgbmR4ID0gMDsgbmR4IDwgc2hhZGVycy5sZW5ndGg7ICsrbmR4KSB7XG4gICAgdmFyIHNoYWRlciA9IHNoYWRlcnNbbmR4XTtcblxuICAgIGlmICh0eXBlb2Ygc2hhZGVyID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGVsZW0gPSBnZXRFbGVtZW50QnlJZChzaGFkZXIpO1xuICAgICAgdmFyIHNyYyA9IGVsZW0gPyBlbGVtLnRleHQgOiBzaGFkZXI7XG4gICAgICB2YXIgdHlwZSA9IGdsW2RlZmF1bHRTaGFkZXJUeXBlW25keF1dO1xuXG4gICAgICBpZiAoZWxlbSAmJiBlbGVtLnR5cGUpIHtcbiAgICAgICAgdHlwZSA9IGdldFNoYWRlclR5cGVGcm9tU2NyaXB0VHlwZShnbCwgZWxlbS50eXBlKSB8fCB0eXBlO1xuICAgICAgfVxuXG4gICAgICBzaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBzcmMsIHR5cGUsIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2spO1xuICAgICAgbmV3U2hhZGVycy5wdXNoKHNoYWRlcik7XG4gICAgfVxuXG4gICAgaWYgKGhlbHBlci5pc1NoYWRlcihnbCwgc2hhZGVyKSkge1xuICAgICAgcmVhbFNoYWRlcnMucHVzaChzaGFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZWFsU2hhZGVycy5sZW5ndGggIT09IHNoYWRlcnMubGVuZ3RoKSB7XG4gICAgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayhcIm5vdCBlbm91Z2ggc2hhZGVycyBmb3IgcHJvZ3JhbVwiKTtcbiAgICBkZWxldGVTaGFkZXJzKGdsLCBuZXdTaGFkZXJzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICByZWFsU2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uIChzaGFkZXIpIHtcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyKTtcbiAgfSk7XG5cbiAgaWYgKHByb2dPcHRpb25zLmF0dHJpYkxvY2F0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKHByb2dPcHRpb25zLmF0dHJpYkxvY2F0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmliKSB7XG4gICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgcHJvZ09wdGlvbnMuYXR0cmliTG9jYXRpb25zW2F0dHJpYl0sIGF0dHJpYik7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgdmFyeWluZ3MgPSBwcm9nT3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzO1xuXG4gIGlmICh2YXJ5aW5ncykge1xuICAgIGlmICh2YXJ5aW5ncy5hdHRyaWJzKSB7XG4gICAgICB2YXJ5aW5ncyA9IHZhcnlpbmdzLmF0dHJpYnM7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhcnlpbmdzKSkge1xuICAgICAgdmFyeWluZ3MgPSBPYmplY3Qua2V5cyh2YXJ5aW5ncyk7XG4gICAgfVxuXG4gICAgZ2wudHJhbnNmb3JtRmVlZGJhY2tWYXJ5aW5ncyhwcm9ncmFtLCB2YXJ5aW5ncywgcHJvZ09wdGlvbnMudHJhbnNmb3JtRmVlZGJhY2tNb2RlIHx8IFNFUEFSQVRFX0FUVFJJQlMpO1xuICB9XG5cbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7IC8vIENoZWNrIHRoZSBsaW5rIHN0YXR1c1xuXG4gIHZhciBsaW5rZWQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIExJTktfU1RBVFVTKTtcblxuICBpZiAoIWxpbmtlZCkge1xuICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggdGhlIGxpbmtcbiAgICB2YXIgbGFzdEVycm9yID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSk7XG4gICAgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayhcIlwiLmNvbmNhdChyZWFsU2hhZGVycy5tYXAoZnVuY3Rpb24gKHNoYWRlcikge1xuICAgICAgdmFyIHNyYyA9IGFkZExpbmVOdW1iZXJzV2l0aEVycm9yKGdsLmdldFNoYWRlclNvdXJjZShzaGFkZXIpLCAnJywgMCk7XG4gICAgICB2YXIgdHlwZSA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLlNIQURFUl9UWVBFKTtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh1dGlscy5nbEVudW1Ub1N0cmluZyhnbCwgdHlwZSksIFwiXFxuXCIpLmNvbmNhdChzcmMsIFwifVwiKTtcbiAgICB9KS5qb2luKCdcXG4nKSwgXCJcXG5FcnJvciBpbiBwcm9ncmFtIGxpbmtpbmc6IFwiKS5jb25jYXQobGFzdEVycm9yKSk7XG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICBkZWxldGVTaGFkZXJzKGdsLCBuZXdTaGFkZXJzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcm9ncmFtO1xufVxuLyoqXG4gKiBMb2FkcyBhIHNoYWRlciBmcm9tIGEgc2NyaXB0IHRhZy5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzY3JpcHRJZCBUaGUgaWQgb2YgdGhlIHNjcmlwdCB0YWcuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zaGFkZXJUeXBlXSBUaGUgdHlwZSBvZiBzaGFkZXIuIElmIG5vdCBwYXNzZWQgaW4gaXQgd2lsbFxuICogICAgIGJlIGRlcml2ZWQgZnJvbSB0aGUgdHlwZSBvZiB0aGUgc2NyaXB0IHRhZy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLlxuICogQHJldHVybiB7V2ViR0xTaGFkZXI/fSBUaGUgY3JlYXRlZCBzaGFkZXIgb3IgbnVsbCBpZiBlcnJvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXJGcm9tU2NyaXB0KGdsLCBzY3JpcHRJZCwgb3B0X3NoYWRlclR5cGUsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIHZhciBzaGFkZXJTb3VyY2UgPSBcIlwiO1xuICB2YXIgc2hhZGVyU2NyaXB0ID0gZ2V0RWxlbWVudEJ5SWQoc2NyaXB0SWQpO1xuXG4gIGlmICghc2hhZGVyU2NyaXB0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBzY3JpcHQgZWxlbWVudDogXCIuY29uY2F0KHNjcmlwdElkKSk7XG4gIH1cblxuICBzaGFkZXJTb3VyY2UgPSBzaGFkZXJTY3JpcHQudGV4dDtcbiAgdmFyIHNoYWRlclR5cGUgPSBvcHRfc2hhZGVyVHlwZSB8fCBnZXRTaGFkZXJUeXBlRnJvbVNjcmlwdFR5cGUoZ2wsIHNoYWRlclNjcmlwdC50eXBlKTtcblxuICBpZiAoIXNoYWRlclR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gc2hhZGVyIHR5cGUnKTtcbiAgfVxuXG4gIHJldHVybiBsb2FkU2hhZGVyKGdsLCBzaGFkZXJTb3VyY2UsIHNoYWRlclR5cGUsIG9wdF9lcnJvckNhbGxiYWNrKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHByb2dyYW0gZnJvbSAyIHNjcmlwdCB0YWdzLlxuICpcbiAqIE5PVEU6IFRoZXJlIGFyZSA0IHNpZ25hdHVyZXMgZm9yIHRoaXMgZnVuY3Rpb25cbiAqXG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIFt2cywgZnNdLCBvcHRfb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIFt2cywgZnNdLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNjcmlwdElkcyBBcnJheSBvZiBpZHMgb2YgdGhlIHNjcmlwdFxuICogICAgICAgIHRhZ3MgZm9yIHRoZSBzaGFkZXJzLiBUaGUgZmlyc3QgaXMgYXNzdW1lZCB0byBiZSB0aGVcbiAqICAgICAgICB2ZXJ0ZXggc2hhZGVyLCB0aGUgc2Vjb25kIHRoZSBmcmFnbWVudCBzaGFkZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfHN0cmluZ1tdfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcyBvciBhbiBlcnJvciBjYWxsYmFjay4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnN8bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja10gVGhlIGxvY2F0aW9ucyBmb3IgdGhlLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMgb3IgYW4gZXJyb3IgY2FsbGJhY2suXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfZXJyb3JDYWxsYmFja10gY2FsbGJhY2sgZm9yIGVycm9ycy4gQnkgZGVmYXVsdCBpdCBqdXN0IHByaW50cyBhbiBlcnJvciB0byB0aGUgY29uc29sZVxuICogICAgICAgIG9uIGVycm9yLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgZWxzZSBwYXNzIGFuIGNhbGxiYWNrLiBJdCdzIHBhc3NlZCBhbiBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7V2ViR0xQcm9ncmFtP30gdGhlIGNyZWF0ZWQgcHJvZ3JhbSBvciBudWxsIGlmIGVycm9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIHNoYWRlclNjcmlwdElkcywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIHZhciBwcm9nT3B0aW9ucyA9IGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjayk7XG4gIHZhciBzaGFkZXJzID0gW107XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHNoYWRlclNjcmlwdElkcy5sZW5ndGg7ICsraWkpIHtcbiAgICB2YXIgc2hhZGVyID0gY3JlYXRlU2hhZGVyRnJvbVNjcmlwdChnbCwgc2hhZGVyU2NyaXB0SWRzW2lpXSwgZ2xbZGVmYXVsdFNoYWRlclR5cGVbaWldXSwgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayk7XG5cbiAgICBpZiAoIXNoYWRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUHJvZ3JhbShnbCwgc2hhZGVycywgcHJvZ09wdGlvbnMpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSBmcm9tIDIgc291cmNlcy5cbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2UoZ2wsIFt2cywgZnNdLCBvcHRfb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNvdXJjZShnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNvdXJjZXMgQXJyYXkgb2Ygc291cmNlcyBmb3IgdGhlXG4gKiAgICAgICAgc2hhZGVycy4gVGhlIGZpcnN0IGlzIGFzc3VtZWQgdG8gYmUgdGhlIHZlcnRleCBzaGFkZXIsXG4gKiAgICAgICAgdGhlIHNlY29uZCB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2F0dHJpYnNdIE9wdGlvbnMgZm9yIHRoZSBwcm9ncmFtIG9yIGFuIGFycmF5IG9mIGF0dHJpYnMgbmFtZXMgb3IgYW4gZXJyb3IgY2FsbGJhY2suIExvY2F0aW9ucyB3aWxsIGJlIGFzc2lnbmVkIGJ5IGluZGV4IGlmIG5vdCBwYXNzZWQgaW5cbiAqIEBwYXJhbSB7bnVtYmVyW119IFtvcHRfbG9jYXRpb25zfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2tdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zIG9yIGFuIGVycm9yIGNhbGxiYWNrLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge1dlYkdMUHJvZ3JhbT99IHRoZSBjcmVhdGVkIHByb2dyYW0gb3IgbnVsbCBpZiBlcnJvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2VzKGdsLCBzaGFkZXJTb3VyY2VzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIHByb2dPcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbiAgdmFyIHNoYWRlcnMgPSBbXTtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc2hhZGVyU291cmNlcy5sZW5ndGg7ICsraWkpIHtcbiAgICB2YXIgc2hhZGVyID0gbG9hZFNoYWRlcihnbCwgc2hhZGVyU291cmNlc1tpaV0sIGdsW2RlZmF1bHRTaGFkZXJUeXBlW2lpXV0sIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2spO1xuXG4gICAgaWYgKCFzaGFkZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHNoYWRlcnMucHVzaChzaGFkZXIpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVByb2dyYW0oZ2wsIHNoYWRlcnMsIHByb2dPcHRpb25zKTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGF0dHJpYnV0ZS91bmlmb3JtIGlzIGEgcmVzZXJ2ZWQvYnVpbHQgaW5cbiAqXG4gKiBJdCBtYWtlcyBubyBzZW5zZSB0byBtZSB3aHkgR0wgcmV0dXJucyB0aGVzZSBiZWNhdXNlIGl0J3NcbiAqIGlsbGVnYWwgdG8gY2FsbCBgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uYCBhbmQgYGdsLmdldEF0dHJpYkxvY2F0aW9uYFxuICogd2l0aCBuYW1lcyB0aGF0IHN0YXJ0IHdpdGggYGdsX2AgKGFuZCBgd2ViZ2xfYCBpbiBXZWJHTClcbiAqXG4gKiBJIGNhbiBvbmx5IGFzc3VtZSB0aGV5IGFyZSB0aGVyZSBiZWNhdXNlIHRoZXkgbWlnaHQgY291bnRcbiAqIHdoZW4gY29tcHV0aW5nIHRoZSBudW1iZXIgb2YgdW5pZm9ybXMvYXR0cmlidXRlcyB1c2VkIHdoZW4geW91IHdhbnQgdG9cbiAqIGtub3cgaWYgeW91IGFyZSBuZWFyIHRoZSBsaW1pdC4gVGhhdCBkb2Vzbid0IHJlYWxseSBtYWtlIHNlbnNlXG4gKiB0byBtZSBidXQgdGhlIGZhY3QgdGhhdCB0aGVzZSBnZXQgcmV0dXJuZWQgYXJlIGluIHRoZSBzcGVjLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xBY3RpdmVJbmZvfSBpbmZvIEFzIHJldHVybmVkIGZyb20gYGdsLmdldEFjdGl2ZVVuaWZvcm1gIG9yXG4gKiAgICBgZ2wuZ2V0QWN0aXZlQXR0cmliYC5cbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgaXQncyByZXNlcnZlZFxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQnVpbHRJbihpbmZvKSB7XG4gIHZhciBuYW1lID0gaW5mby5uYW1lO1xuICByZXR1cm4gbmFtZS5zdGFydHNXaXRoKFwiZ2xfXCIpIHx8IG5hbWUuc3RhcnRzV2l0aChcIndlYmdsX1wiKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBzZXR0ZXIgZnVuY3Rpb25zIGZvciBhbGwgdW5pZm9ybXMgb2YgYSBzaGFkZXJcbiAqIHByb2dyYW0uXG4gKlxuICogQHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0VW5pZm9ybXN9XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gdGhlIHByb2dyYW0gdG8gY3JlYXRlIHNldHRlcnMgZm9yLlxuICogQHJldHVybnMge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGFuIG9iamVjdCB3aXRoIGEgc2V0dGVyIGJ5IG5hbWUgZm9yIGVhY2ggdW5pZm9ybVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtU2V0dGVycyhnbCwgcHJvZ3JhbSkge1xuICB2YXIgdGV4dHVyZVVuaXQgPSAwO1xuICAvKipcbiAgICogQ3JlYXRlcyBhIHNldHRlciBmb3IgYSB1bmlmb3JtIG9mIHRoZSBnaXZlbiBwcm9ncmFtIHdpdGggaXQnc1xuICAgKiBsb2NhdGlvbiBlbWJlZGRlZCBpbiB0aGUgc2V0dGVyLlxuICAgKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbVxuICAgKiBAcGFyYW0ge1dlYkdMVW5pZm9ybUluZm99IHVuaWZvcm1JbmZvXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbn0gdGhlIGNyZWF0ZWQgc2V0dGVyLlxuICAgKi9cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvLCBsb2NhdGlvbikge1xuICAgIHZhciBpc0FycmF5ID0gdW5pZm9ybUluZm8ubmFtZS5lbmRzV2l0aChcIlswXVwiKTtcbiAgICB2YXIgdHlwZSA9IHVuaWZvcm1JbmZvLnR5cGU7XG4gICAgdmFyIHR5cGVJbmZvID0gdHlwZU1hcFt0eXBlXTtcblxuICAgIGlmICghdHlwZUluZm8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogMHhcIi5jb25jYXQodHlwZS50b1N0cmluZygxNikpKTsgLy8gd2Ugc2hvdWxkIG5ldmVyIGdldCBoZXJlLlxuICAgIH1cblxuICAgIHZhciBzZXR0ZXI7XG5cbiAgICBpZiAodHlwZUluZm8uYmluZFBvaW50KSB7XG4gICAgICAvLyBpdCdzIGEgc2FtcGxlclxuICAgICAgdmFyIHVuaXQgPSB0ZXh0dXJlVW5pdDtcbiAgICAgIHRleHR1cmVVbml0ICs9IHVuaWZvcm1JbmZvLnNpemU7XG5cbiAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgIHNldHRlciA9IHR5cGVJbmZvLmFycmF5U2V0dGVyKGdsLCB0eXBlLCB1bml0LCBsb2NhdGlvbiwgdW5pZm9ybUluZm8uc2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXR0ZXIgPSB0eXBlSW5mby5zZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uLCB1bmlmb3JtSW5mby5zaXplKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVJbmZvLmFycmF5U2V0dGVyICYmIGlzQXJyYXkpIHtcbiAgICAgICAgc2V0dGVyID0gdHlwZUluZm8uYXJyYXlTZXR0ZXIoZ2wsIGxvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHRlciA9IHR5cGVJbmZvLnNldHRlcihnbCwgbG9jYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldHRlci5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHJldHVybiBzZXR0ZXI7XG4gIH1cblxuICB2YXIgdW5pZm9ybVNldHRlcnMgPSB7fTtcbiAgdmFyIG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBBQ1RJVkVfVU5JRk9STVMpO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBudW1Vbmlmb3JtczsgKytpaSkge1xuICAgIHZhciB1bmlmb3JtSW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaWkpO1xuXG4gICAgaWYgKGlzQnVpbHRJbih1bmlmb3JtSW5mbykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gdW5pZm9ybUluZm8ubmFtZTsgLy8gcmVtb3ZlIHRoZSBhcnJheSBzdWZmaXguXG5cbiAgICBpZiAobmFtZS5lbmRzV2l0aChcIlswXVwiKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMyk7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHVuaWZvcm1JbmZvLm5hbWUpOyAvLyB0aGUgdW5pZm9ybSB3aWxsIGhhdmUgbm8gbG9jYXRpb24gaWYgaXQncyBpbiBhIHVuaWZvcm0gYmxvY2tcblxuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdW5pZm9ybVNldHRlcnNbbmFtZV0gPSBjcmVhdGVVbmlmb3JtU2V0dGVyKHByb2dyYW0sIHVuaWZvcm1JbmZvLCBsb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuaWZvcm1TZXR0ZXJzO1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmFuc2Zvcm1GZWVkYmFja0luZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBpbmRleCBvZiB0cmFuc2Zvcm0gZmVlZGJhY2tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlIEdMIHR5cGVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplIDEgLSA0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBUcmFuc2Zvcm1GZWVkYmFja0luZm8gZm9yIHBhc3NpbmcgdG8gYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mby5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIGFuIGV4aXN0aW5nIFdlYkdMUHJvZ3JhbS5cbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLlRyYW5zZm9ybUZlZWRiYWNrSW5mbz59XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgcHJvZ3JhbSkge1xuICB2YXIgaW5mbyA9IHt9O1xuICB2YXIgbnVtVmFyeWluZ3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIFRSQU5TRk9STV9GRUVEQkFDS19WQVJZSU5HUyk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVZhcnlpbmdzOyArK2lpKSB7XG4gICAgdmFyIHZhcnlpbmcgPSBnbC5nZXRUcmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmcocHJvZ3JhbSwgaWkpO1xuICAgIGluZm9bdmFyeWluZy5uYW1lXSA9IHtcbiAgICAgIGluZGV4OiBpaSxcbiAgICAgIHR5cGU6IHZhcnlpbmcudHlwZSxcbiAgICAgIHNpemU6IHZhcnlpbmcuc2l6ZVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogQmluZHMgYnVmZmVycyBmb3IgdHJhbnNmb3JtIGZlZWRiYWNrLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLlRyYW5zZm9ybUZlZWRiYWNrSW5mbz4pfSB0cmFuc2Zvcm1GZWVkYmFja0luZm8gQSBQcm9ncmFtSW5mbyBvciBUcmFuc2Zvcm1GZWVkYmFja0luZm8uXG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5CdWZmZXJJbmZvfE9iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+KX0gW2J1ZmZlckluZm9dIEEgQnVmZmVySW5mbyBvciBzZXQgb2YgQXR0cmliSW5mb3MuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRUcmFuc2Zvcm1GZWVkYmFja0luZm8oZ2wsIHRyYW5zZm9ybUZlZWRiYWNrSW5mbywgYnVmZmVySW5mbykge1xuICBpZiAodHJhbnNmb3JtRmVlZGJhY2tJbmZvLnRyYW5zZm9ybUZlZWRiYWNrSW5mbykge1xuICAgIHRyYW5zZm9ybUZlZWRiYWNrSW5mbyA9IHRyYW5zZm9ybUZlZWRiYWNrSW5mby50cmFuc2Zvcm1GZWVkYmFja0luZm87XG4gIH1cblxuICBpZiAoYnVmZmVySW5mby5hdHRyaWJzKSB7XG4gICAgYnVmZmVySW5mbyA9IGJ1ZmZlckluZm8uYXR0cmlicztcbiAgfVxuXG4gIGZvciAodmFyIG5hbWUgaW4gYnVmZmVySW5mbykge1xuICAgIHZhciB2YXJ5aW5nID0gdHJhbnNmb3JtRmVlZGJhY2tJbmZvW25hbWVdO1xuXG4gICAgaWYgKHZhcnlpbmcpIHtcbiAgICAgIHZhciBidWYgPSBidWZmZXJJbmZvW25hbWVdO1xuXG4gICAgICBpZiAoYnVmLm9mZnNldCkge1xuICAgICAgICBnbC5iaW5kQnVmZmVyUmFuZ2UoVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgdmFyeWluZy5pbmRleCwgYnVmLmJ1ZmZlciwgYnVmLm9mZnNldCwgYnVmLnNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlckJhc2UoVFJBTlNGT1JNX0ZFRURCQUNLX0JVRkZFUiwgdmFyeWluZy5pbmRleCwgYnVmLmJ1ZmZlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYSB0cmFuc2Zvcm0gZmVlZGJhY2sgYW5kIHNldHMgdGhlIGJ1ZmZlcnNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IHByb2dyYW1JbmZvIEEgUHJvZ3JhbUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5CdWZmZXJJbmZvfE9iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+KX0gW2J1ZmZlckluZm9dIEEgQnVmZmVySW5mbyBvciBzZXQgb2YgQXR0cmliSW5mb3MuXG4gKiBAcmV0dXJuIHtXZWJHTFRyYW5zZm9ybUZlZWRiYWNrfSB0aGUgY3JlYXRlZCB0cmFuc2Zvcm0gZmVlZGJhY2tcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2soZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKSB7XG4gIHZhciB0ZiA9IGdsLmNyZWF0ZVRyYW5zZm9ybUZlZWRiYWNrKCk7XG4gIGdsLmJpbmRUcmFuc2Zvcm1GZWVkYmFjayhUUkFOU0ZPUk1fRkVFREJBQ0ssIHRmKTtcbiAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcbiAgYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICBnbC5iaW5kVHJhbnNmb3JtRmVlZGJhY2soVFJBTlNGT1JNX0ZFRURCQUNLLCBudWxsKTtcbiAgcmV0dXJuIHRmO1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBVbmlmb3JtRGF0YVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGUgVGhlIFdlYkdMIHR5cGUgZW51bSBmb3IgdGhpcyB1bmlmb3JtXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZvciB0aGlzIHVuaWZvcm1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja05keCBUaGUgYmxvY2sgaW5kZXggdGhpcyB1bmlmb3JtIGFwcGVhcnMgaW5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZzZXQgVGhlIGJ5dGUgb2Zmc2V0IGluIHRoZSBibG9jayBmb3IgdGhpcyB1bmlmb3JtJ3MgdmFsdWVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogVGhlIHNwZWNpZmljYXRpb24gZm9yIG9uZSBVbmlmb3JtQmxvY2tPYmplY3RcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCbG9ja1NwZWNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJsb2NrLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpemUgVGhlIHNpemUgaW4gYnl0ZXMgbmVlZGVkIGZvciB0aGUgYmxvY2tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IHVuaWZvcm1JbmRpY2VzIFRoZSBpbmRpY2VzIG9mIHRoZSB1bmlmb3JtcyB1c2VkIGJ5IHRoZSBibG9jay4gVGhlc2UgaW5kaWNlc1xuICogICAgY29ycmVzcG9uZCB0byBlbnRyaWVzIGluIGEgVW5pZm9ybURhdGEgYXJyYXkgaW4gdGhlIHtAbGluayBtb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tTcGVjfS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gdXNlZEJ5VmVydGV4U2hhZGVyIFNlbGYgZXhwbGFuYXRvcnlcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gdXNlZEJ5RnJhZ21lbnRTaGFkZXIgU2VsZiBleHBsYW5hdG9yeVxuICogQHByb3BlcnR5IHtib29sfSB1c2VkIFNlbGYgZXhwbGFuYXRvcnlcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBgVW5pZm9ybUJsb2NrU3BlY2AgcmVwcmVzZW50cyB0aGUgZGF0YSBuZWVkZWQgdG8gY3JlYXRlIGFuZCBiaW5kXG4gKiBVbmlmb3JtQmxvY2tPYmplY3RzIGZvciBhIGdpdmVuIHByb2dyYW1cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBVbmlmb3JtQmxvY2tTcGVjXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5CbG9ja1NwZWM+IGJsb2NrU3BlY3MgVGhlIEJsb2NrU3BlYyBmb3IgZWFjaCBibG9jayBieSBibG9jayBuYW1lXG4gKiBAcHJvcGVydHkge1VuaWZvcm1EYXRhW119IHVuaWZvcm1EYXRhIEFuIGFycmF5IG9mIGRhdGEgZm9yIGVhY2ggdW5pZm9ybSBieSB1bmlmb3JtIGluZGV4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgVW5pZm9ybUJsb2NrU3BlYyBmb3IgdGhlIGdpdmVuIHByb2dyYW0uXG4gKlxuICogQSBVbmlmb3JtQmxvY2tTcGVjIHJlcHJlc2VudHMgdGhlIGRhdGEgbmVlZGVkIHRvIGNyZWF0ZSBhbmQgYmluZFxuICogVW5pZm9ybUJsb2NrT2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTDIgUmVuZGVyaW5nIENvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIEEgV2ViR0xQcm9ncmFtIGZvciBhIHN1Y2Nlc3NmdWxseSBsaW5rZWQgcHJvZ3JhbVxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlY30gVGhlIGNyZWF0ZWQgVW5pZm9ybUJsb2NrU3BlY1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pIHtcbiAgdmFyIG51bVVuaWZvcm1zID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBBQ1RJVkVfVU5JRk9STVMpO1xuICB2YXIgdW5pZm9ybURhdGEgPSBbXTtcbiAgdmFyIHVuaWZvcm1JbmRpY2VzID0gW107XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVVuaWZvcm1zOyArK2lpKSB7XG4gICAgdW5pZm9ybUluZGljZXMucHVzaChpaSk7XG4gICAgdW5pZm9ybURhdGEucHVzaCh7fSk7XG4gICAgdmFyIHVuaWZvcm1JbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpaSk7XG5cbiAgICBpZiAoaXNCdWlsdEluKHVuaWZvcm1JbmZvKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdW5pZm9ybURhdGFbaWldLm5hbWUgPSB1bmlmb3JtSW5mby5uYW1lO1xuICB9XG5cbiAgW1tcIlVOSUZPUk1fVFlQRVwiLCBcInR5cGVcIl0sIFtcIlVOSUZPUk1fU0laRVwiLCBcInNpemVcIl0sIC8vIG51bSBlbGVtZW50c1xuICBbXCJVTklGT1JNX0JMT0NLX0lOREVYXCIsIFwiYmxvY2tOZHhcIl0sIFtcIlVOSUZPUk1fT0ZGU0VUXCIsIFwib2Zmc2V0XCJdXS5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgdmFyIHBuYW1lID0gcGFpclswXTtcbiAgICB2YXIga2V5ID0gcGFpclsxXTtcbiAgICBnbC5nZXRBY3RpdmVVbmlmb3Jtcyhwcm9ncmFtLCB1bmlmb3JtSW5kaWNlcywgZ2xbcG5hbWVdKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgbmR4KSB7XG4gICAgICB1bmlmb3JtRGF0YVtuZHhdW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBibG9ja1NwZWNzID0ge307XG4gIHZhciBudW1Vbmlmb3JtQmxvY2tzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBBQ1RJVkVfVU5JRk9STV9CTE9DS1MpO1xuXG4gIGZvciAodmFyIF9paSA9IDA7IF9paSA8IG51bVVuaWZvcm1CbG9ja3M7ICsrX2lpKSB7XG4gICAgdmFyIG5hbWUgPSBnbC5nZXRBY3RpdmVVbmlmb3JtQmxvY2tOYW1lKHByb2dyYW0sIF9paSk7XG4gICAgdmFyIGJsb2NrU3BlYyA9IHtcbiAgICAgIGluZGV4OiBnbC5nZXRVbmlmb3JtQmxvY2tJbmRleChwcm9ncmFtLCBuYW1lKSxcbiAgICAgIHVzZWRCeVZlcnRleFNoYWRlcjogZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrUGFyYW1ldGVyKHByb2dyYW0sIF9paSwgVU5JRk9STV9CTE9DS19SRUZFUkVOQ0VEX0JZX1ZFUlRFWF9TSEFERVIpLFxuICAgICAgdXNlZEJ5RnJhZ21lbnRTaGFkZXI6IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja1BhcmFtZXRlcihwcm9ncmFtLCBfaWksIFVOSUZPUk1fQkxPQ0tfUkVGRVJFTkNFRF9CWV9GUkFHTUVOVF9TSEFERVIpLFxuICAgICAgc2l6ZTogZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrUGFyYW1ldGVyKHByb2dyYW0sIF9paSwgVU5JRk9STV9CTE9DS19EQVRBX1NJWkUpLFxuICAgICAgdW5pZm9ybUluZGljZXM6IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja1BhcmFtZXRlcihwcm9ncmFtLCBfaWksIFVOSUZPUk1fQkxPQ0tfQUNUSVZFX1VOSUZPUk1fSU5ESUNFUylcbiAgICB9O1xuICAgIGJsb2NrU3BlYy51c2VkID0gYmxvY2tTcGVjLnVzZWRCeVZlcnRleFNoYWRlciB8fCBibG9ja1NwZWMudXNlZEJ5RnJhZ21lbnRTaGFkZXI7XG4gICAgYmxvY2tTcGVjc1tuYW1lXSA9IGJsb2NrU3BlYztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmxvY2tTcGVjczogYmxvY2tTcGVjcyxcbiAgICB1bmlmb3JtRGF0YTogdW5pZm9ybURhdGFcbiAgfTtcbn1cblxudmFyIGFycmF5U3VmZml4UkUgPSAvXFxbXFxkK1xcXVxcLiQvOyAvLyBiZXR0ZXIgd2F5IHRvIGNoZWNrP1xuXG52YXIgcGFkID0gZnVuY3Rpb24gcGFkKHYsIHBhZGRpbmcpIHtcbiAgcmV0dXJuICgodiArIChwYWRkaW5nIC0gMSkpIC8gcGFkZGluZyB8IDApICogcGFkZGluZztcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1CbG9ja1VuaWZvcm1TZXR0ZXIodmlldywgVHlwZSwgdHlwZVNpemUsIHBhZGRlZFNpemUsIGlzQXJyYXkpIHtcbiAgaWYgKGlzQXJyYXkpIHtcbiAgICB2YXIgbnVtRWxlbWVudHMgPSB0eXBlU2l6ZSAvIFR5cGUuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgdmFyIG51bVBhZGRlZEVsZW1lbnRzID0gcGFkZGVkU2l6ZSAvIFR5cGUuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGRzdCA9IDA7XG5cbiAgICAgIGZvciAodmFyIHNyYyA9IDA7IHNyYyA8IHZhbHVlLmxlbmd0aDsgc3JjICs9IG51bUVsZW1lbnRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtRWxlbWVudHM7ICsraSkge1xuICAgICAgICAgIHZpZXdbZHN0ICsgaV0gPSB2YWx1ZVtzcmMgKyBpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRzdCArPSBudW1QYWRkZWRFbGVtZW50cztcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmlldy5zZXQodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld1swXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbi8qKlxuICogUmVwcmVzZW50cyBhIFVuaWZvcm1CbG9ja09iamVjdCBpbmNsdWRpbmcgYW4gQXJyYXlCdWZmZXIgd2l0aCBhbGwgdGhlIHVuaWZvcm0gdmFsdWVzXG4gKiBhbmQgYSBjb3JyZXNwb25kaW5nIFdlYkdMQnVmZmVyIHRvIGhvbGQgdGhvc2UgdmFsdWVzIG9uIHRoZSBHUFVcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBVbmlmb3JtQmxvY2tJbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgYmxvY2tcbiAqIEBwcm9wZXJ0eSB7QXJyYXlCdWZmZXJ9IGFycmF5IFRoZSBhcnJheSBidWZmZXIgdGhhdCBjb250YWlucyB0aGUgdW5pZm9ybSB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7RmxvYXQzMkFycmF5fSBhc0Zsb2F0IEEgZmxvYXQgdmlldyBvbiB0aGUgYXJyYXkgYnVmZmVyLiBUaGlzIGlzIHVzZWZ1bFxuICogICAgaW5zcGVjdGluZyB0aGUgY29udGVudHMgb2YgdGhlIGJ1ZmZlciBpbiB0aGUgZGVidWdnZXIuXG4gKiBAcHJvcGVydHkge1dlYkdMQnVmZmVyfSBidWZmZXIgQSBXZWJHTCBidWZmZXIgdGhhdCB3aWxsIGhvbGQgYSBjb3B5IG9mIHRoZSB1bmlmb3JtIHZhbHVlcyBmb3IgcmVuZGVyaW5nLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtvZmZzZXRdIG9mZnNldCBpbnRvIGJ1ZmZlclxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLCBBcnJheUJ1ZmZlclZpZXc+fSB1bmlmb3JtcyBBIHVuaWZvcm0gbmFtZSB0byBBcnJheUJ1ZmZlclZpZXcgbWFwLlxuICogICBlYWNoIFVuaWZvcm0gaGFzIGEgY29ycmVjdGx5IHR5cGVkIGBBcnJheUJ1ZmZlclZpZXdgIGludG8gYXJyYXkgYXQgdGhlIGNvcnJlY3Qgb2Zmc2V0XG4gKiAgIGFuZCBsZW5ndGggb2YgdGhhdCB1bmlmb3JtLiBTbyBmb3IgZXhhbXBsZSBhIGZsb2F0IHVuaWZvcm0gd291bGQgaGF2ZSBhIDEgZmxvYXQgYEZsb2F0MzJBcnJheWBcbiAqICAgdmlldy4gQSBzaW5nbGUgbWF0NCB3b3VsZCBoYXZlIGEgMTYgZWxlbWVudCBgRmxvYXQzMkFycmF5YCB2aWV3LiBBbiBpdmVjMiB3b3VsZCBoYXZlIGFuXG4gKiAgIGBJbnQzMkFycmF5YCB2aWV3LCBldGMuXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIGZ1bmN0aW9uPn0gc2V0dGVycyBBIHNldHRlciBmb3IgdGhpcyB1bmlmb3JtLlxuICogICBUaGUgcmVhc29uIHRvIHVzZSBzZXR0ZXJzIGlzIGVsZW1lbnRzIG9mIGFycmF5cyBhcmUgcGFkZGVkIHRvIHZlYzQgc2l6ZXMgd2hpY2hcbiAqICAgbWVhbnMgaWYgeW91IHdhbnQgdG8gc2V0IGFuIGFycmF5IG9mIDQgZmxvYXRzIHlvdSdkIG5lZWQgdG8gc2V0IDE2IHZhbHVlc1xuICogICAob3Igc2V0IGVsZW1lbnRzIDAsIDQsIDgsIDEyKS4gSW4gb3RoZXIgd29yZHNcbiAqICAgYHNvbWVCbG9ja0luZm8udW5pZm9ybXMuc29tZTRGbG9hdEFycmF5VW5pZm9ybS5zZXQoWzAsICwgLCAsIDEsICwgLCAsIDIsICwgLCAsIDNdKWBcbiAqICAgd2hlcmUgYXMgdGhlIHNldHRlciBoYW5kbGVzIGp1c3QgcGFzc2luZyBpbiBbMCwgMSwgMiwgM10gZWl0aGVyIGRpcmVjdGx5IGFzIGluXG4gKiAgIGBzb21lQmxvY2tJbmZvLnNldHRlci5zb21lNEZsb2F0QXJyYXlVbmlmb3JtLnNldChbMCwgMSwgMiwgM10pYCAobm90IHJlY29tbWVuZGVkKVxuICogICBvciB2aWEge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJsb2NrVW5pZm9ybXN9XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgVW5pZm9ybUJsb2NrSW5mb2AgZm9yIHRoZSBzcGVjaWZpZWQgYmxvY2tcbiAqXG4gKiBOb3RlOiAqKklmIHRoZSBibG9ja05hbWUgbWF0Y2hlcyBubyBleGlzdGluZyBibG9ja3MgYSB3YXJuaW5nIGlzIHByaW50ZWQgdG8gdGhlIGNvbnNvbGUgYW5kIGEgZHVtbXlcbiAqIGBVbmlmb3JtQmxvY2tJbmZvYCBpcyByZXR1cm5lZCoqLiBUaGlzIGlzIGJlY2F1c2Ugd2hlbiBkZWJ1Z2dpbmcgR0xTTFxuICogaXQgaXMgY29tbW9uIHRvIGNvbW1lbnQgb3V0IGxhcmdlIHBvcnRpb25zIG9mIGEgc2hhZGVyIG9yIGZvciBleGFtcGxlIHNldFxuICogdGhlIGZpbmFsIG91dHB1dCB0byBhIGNvbnN0YW50LiBXaGVuIHRoYXQgaGFwcGVucyBibG9ja3MgZ2V0IG9wdGltaXplZCBvdXQuXG4gKiBJZiB0aGlzIGZ1bmN0aW9uIGRpZCBub3QgY3JlYXRlIGR1bW15IGJsb2NrcyB5b3VyIGNvZGUgd291bGQgY3Jhc2ggd2hlbiBkZWJ1Z2dpbmcuXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIEEgV2ViR0xQcm9ncmFtXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9IHVuaWZvcm1CbG9ja1NwZWMuIEEgVW5pZm9ybUJsb2NrU3BlYyBhcyByZXR1cm5lZFxuICogICAgIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbX0uXG4gKiBAcGFyYW0ge3N0cmluZ30gYmxvY2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IFRoZSBjcmVhdGVkIFVuaWZvcm1CbG9ja0luZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtLCB1bmlmb3JtQmxvY2tTcGVjLCBibG9ja05hbWUpIHtcbiAgdmFyIGJsb2NrU3BlY3MgPSB1bmlmb3JtQmxvY2tTcGVjLmJsb2NrU3BlY3M7XG4gIHZhciB1bmlmb3JtRGF0YSA9IHVuaWZvcm1CbG9ja1NwZWMudW5pZm9ybURhdGE7XG4gIHZhciBibG9ja1NwZWMgPSBibG9ja1NwZWNzW2Jsb2NrTmFtZV07XG5cbiAgaWYgKCFibG9ja1NwZWMpIHtcbiAgICB3YXJuKFwibm8gdW5pZm9ybSBibG9jayBvYmplY3QgbmFtZWQ6XCIsIGJsb2NrTmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGJsb2NrTmFtZSxcbiAgICAgIHVuaWZvcm1zOiB7fVxuICAgIH07XG4gIH1cblxuICB2YXIgYXJyYXkgPSBuZXcgQXJyYXlCdWZmZXIoYmxvY2tTcGVjLnNpemUpO1xuICB2YXIgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIHZhciB1bmlmb3JtQnVmZmVySW5kZXggPSBibG9ja1NwZWMuaW5kZXg7XG4gIGdsLmJpbmRCdWZmZXIoVU5JRk9STV9CVUZGRVIsIGJ1ZmZlcik7XG4gIGdsLnVuaWZvcm1CbG9ja0JpbmRpbmcocHJvZ3JhbSwgYmxvY2tTcGVjLmluZGV4LCB1bmlmb3JtQnVmZmVySW5kZXgpO1xuICB2YXIgcHJlZml4ID0gYmxvY2tOYW1lICsgXCIuXCI7XG5cbiAgaWYgKGFycmF5U3VmZml4UkUudGVzdChwcmVmaXgpKSB7XG4gICAgcHJlZml4ID0gcHJlZml4LnJlcGxhY2UoYXJyYXlTdWZmaXhSRSwgXCIuXCIpO1xuICB9XG5cbiAgdmFyIHVuaWZvcm1zID0ge307XG4gIHZhciBzZXR0ZXJzID0ge307XG4gIGJsb2NrU3BlYy51bmlmb3JtSW5kaWNlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bmlmb3JtTmR4KSB7XG4gICAgdmFyIGRhdGEgPSB1bmlmb3JtRGF0YVt1bmlmb3JtTmR4XTtcbiAgICB2YXIgdHlwZUluZm8gPSB0eXBlTWFwW2RhdGEudHlwZV07XG4gICAgdmFyIFR5cGUgPSB0eXBlSW5mby5UeXBlO1xuICAgIHZhciBwYWRkZWRTaXplID0gcGFkKHR5cGVJbmZvLnNpemUsIDE2KTtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUluZm8uc2l6ZSArIChkYXRhLnNpemUgLSAxKSAqIHBhZGRlZFNpemU7XG4gICAgdmFyIG5hbWUgPSBkYXRhLm5hbWU7XG5cbiAgICBpZiAobmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cihwcmVmaXgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheSA9IG5hbWUuZW5kc1dpdGgoJ1swXScpO1xuXG4gICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDMpO1xuICAgIH1cblxuICAgIHZhciB1bmlmb3JtVmlldyA9IG5ldyBUeXBlKGFycmF5LCBkYXRhLm9mZnNldCwgbGVuZ3RoIC8gVHlwZS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgdW5pZm9ybXNbbmFtZV0gPSB1bmlmb3JtVmlldztcbiAgICBzZXR0ZXJzW25hbWVdID0gY3JlYXRlVW5pZm9ybUJsb2NrVW5pZm9ybVNldHRlcih1bmlmb3JtVmlldywgVHlwZSwgdHlwZUluZm8uc2l6ZSwgcGFkZGVkU2l6ZSwgaXNBcnJheSk7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGJsb2NrTmFtZSxcbiAgICBhcnJheTogYXJyYXksXG4gICAgYXNGbG9hdDogbmV3IEZsb2F0MzJBcnJheShhcnJheSksXG4gICAgLy8gZm9yIGRlYnVnZ2luZ1xuICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgIHVuaWZvcm1zOiB1bmlmb3JtcyxcbiAgICBzZXR0ZXJzOiBzZXR0ZXJzXG4gIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYSBgVW5pZm9ybUJsb2NrSW5mb2AgZm9yIHRoZSBzcGVjaWZpZWQgYmxvY2tcbiAqXG4gKiBOb3RlOiAqKklmIHRoZSBibG9ja05hbWUgbWF0Y2hlcyBubyBleGlzdGluZyBibG9ja3MgYSB3YXJuaW5nIGlzIHByaW50ZWQgdG8gdGhlIGNvbnNvbGUgYW5kIGEgZHVtbXlcbiAqIGBVbmlmb3JtQmxvY2tJbmZvYCBpcyByZXR1cm5lZCoqLiBUaGlzIGlzIGJlY2F1c2Ugd2hlbiBkZWJ1Z2dpbmcgR0xTTFxuICogaXQgaXMgY29tbW9uIHRvIGNvbW1lbnQgb3V0IGxhcmdlIHBvcnRpb25zIG9mIGEgc2hhZGVyIG9yIGZvciBleGFtcGxlIHNldFxuICogdGhlIGZpbmFsIG91dHB1dCB0byBhIGNvbnN0YW50LiBXaGVuIHRoYXQgaGFwcGVucyBibG9ja3MgZ2V0IG9wdGltaXplZCBvdXQuXG4gKiBJZiB0aGlzIGZ1bmN0aW9uIGRpZCBub3QgY3JlYXRlIGR1bW15IGJsb2NrcyB5b3VyIGNvZGUgd291bGQgY3Jhc2ggd2hlbiBkZWJ1Z2dpbmcuXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IHByb2dyYW1JbmZvIGEgYFByb2dyYW1JbmZvYFxuICogICAgIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfVxuICogQHBhcmFtIHtzdHJpbmd9IGJsb2NrTmFtZSBUaGUgbmFtZSBvZiB0aGUgYmxvY2suXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tJbmZvfSBUaGUgY3JlYXRlZCBVbmlmb3JtQmxvY2tJbmZvXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm8oZ2wsIHByb2dyYW1JbmZvLCBibG9ja05hbWUpIHtcbiAgcmV0dXJuIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9Gcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbUluZm8ucHJvZ3JhbSwgcHJvZ3JhbUluZm8udW5pZm9ybUJsb2NrU3BlYywgYmxvY2tOYW1lKTtcbn1cbi8qKlxuICogQmluZHMgYSB1bmlmb3JtIGJsb2NrIHRvIHRoZSBtYXRjaGluZyB1bmlmb3JtIGJsb2NrIHBvaW50LlxuICogTWF0Y2hlcyBieSBibG9ja3MgYnkgbmFtZSBzbyBibG9ja3MgbXVzdCBoYXZlIHRoZSBzYW1lIG5hbWUgbm90IGp1c3QgdGhlIHNhbWVcbiAqIHN0cnVjdHVyZS5cbiAqXG4gKiBJZiB5b3UgaGF2ZSBjaGFuZ2VkIGFueSB2YWx1ZXMgYW5kIHlvdSB1cGxvYWQgdGhlIHZhbHVlcyBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIFdlYkdMQnVmZmVyXG4gKiBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5zZXRVbmlmb3JtQmxvY2t9IGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMIDIgcmVuZGVyaW5nIGNvbnRleHQuXG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb3xtb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tTcGVjKX0gcHJvZ3JhbUluZm8gYSBgUHJvZ3JhbUluZm9gXG4gKiAgICAgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99IG9yIG9yIGBVbmlmb3JtQmxvY2tTcGVjYCBhc1xuICogICAgIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbX0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IHVuaWZvcm1CbG9ja0luZm8gYSBgVW5pZm9ybUJsb2NrSW5mb2AgYXMgcmV0dXJuZWQgZnJvbVxuICogICAgIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvfS5cbiAqIEByZXR1cm4ge2Jvb2x9IHRydWUgaWYgYnVmZmVyIHdhcyBib3VuZC4gSWYgdGhlIHByb2dyYW1JbmZvIGhhcyBubyBibG9jayB3aXRoIHRoZSBzYW1lIGJsb2NrIG5hbWVcbiAqICAgICBubyBidWZmZXIgaXMgYm91bmQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRVbmlmb3JtQmxvY2soZ2wsIHByb2dyYW1JbmZvLCB1bmlmb3JtQmxvY2tJbmZvKSB7XG4gIHZhciB1bmlmb3JtQmxvY2tTcGVjID0gcHJvZ3JhbUluZm8udW5pZm9ybUJsb2NrU3BlYyB8fCBwcm9ncmFtSW5mbztcbiAgdmFyIGJsb2NrU3BlYyA9IHVuaWZvcm1CbG9ja1NwZWMuYmxvY2tTcGVjc1t1bmlmb3JtQmxvY2tJbmZvLm5hbWVdO1xuXG4gIGlmIChibG9ja1NwZWMpIHtcbiAgICB2YXIgYnVmZmVyQmluZEluZGV4ID0gYmxvY2tTcGVjLmluZGV4O1xuICAgIGdsLmJpbmRCdWZmZXJSYW5nZShVTklGT1JNX0JVRkZFUiwgYnVmZmVyQmluZEluZGV4LCB1bmlmb3JtQmxvY2tJbmZvLmJ1ZmZlciwgdW5pZm9ybUJsb2NrSW5mby5vZmZzZXQgfHwgMCwgdW5pZm9ybUJsb2NrSW5mby5hcnJheS5ieXRlTGVuZ3RoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qKlxuICogVXBsb2FkcyB0aGUgY3VycmVudCB1bmlmb3JtIHZhbHVlcyB0byB0aGUgY29ycmVzcG9uZGluZyBXZWJHTEJ1ZmZlclxuICogYW5kIGJpbmRzIHRoYXQgYnVmZmVyIHRvIHRoZSBwcm9ncmFtJ3MgY29ycmVzcG9uZGluZyBiaW5kIHBvaW50IGZvciB0aGUgdW5pZm9ybSBibG9jayBvYmplY3QuXG4gKlxuICogSWYgeW91IGhhdmVuJ3QgY2hhbmdlZCBhbnkgdmFsdWVzIGFuZCB5b3Ugb25seSBuZWVkIHRvIGJpbmQgdGhlIHVuaWZvcm0gYmxvY2sgb2JqZWN0XG4gKiBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5iaW5kVW5pZm9ybUJsb2NrfSBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTCAyIHJlbmRlcmluZyBjb250ZXh0LlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlYyl9IHByb2dyYW1JbmZvIGEgYFByb2dyYW1JbmZvYFxuICogICAgIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfSBvciBvciBgVW5pZm9ybUJsb2NrU3BlY2AgYXNcbiAqICAgICByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tTcGVjRnJvbVByb2dyYW19LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tJbmZvfSB1bmlmb3JtQmxvY2tJbmZvIGEgYFVuaWZvcm1CbG9ja0luZm9gIGFzIHJldHVybmVkIGZyb21cbiAqICAgICB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb30uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1CbG9jayhnbCwgcHJvZ3JhbUluZm8sIHVuaWZvcm1CbG9ja0luZm8pIHtcbiAgaWYgKGJpbmRVbmlmb3JtQmxvY2soZ2wsIHByb2dyYW1JbmZvLCB1bmlmb3JtQmxvY2tJbmZvKSkge1xuICAgIGdsLmJ1ZmZlckRhdGEoVU5JRk9STV9CVUZGRVIsIHVuaWZvcm1CbG9ja0luZm8uYXJyYXksIERZTkFNSUNfRFJBVyk7XG4gIH1cbn1cbi8qKlxuICogU2V0cyB2YWx1ZXMgb2YgYSB1bmlmb3JtIGJsb2NrIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrSW5mb30gdW5pZm9ybUJsb2NrSW5mbyBBIFVuaWZvcm1CbG9ja0luZm8gYXMgcmV0dXJuZWQgYnkge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja0luZm99LlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgPz59IHZhbHVlcyBBIHVuaWZvcm0gbmFtZSB0byB2YWx1ZSBtYXAgd2hlcmUgdGhlIHZhbHVlIGlzIGNvcnJlY3QgZm9yIHRoZSBnaXZlblxuICogICAgdHlwZSBvZiB1bmlmb3JtLiBTbyBmb3IgZXhhbXBsZSBnaXZlbiBhIGJsb2NrIGxpa2VcbiAqXG4gKiAgICAgICB1bmlmb3JtIFNvbWVCbG9jayB7XG4gKiAgICAgICAgIGZsb2F0IHNvbWVGbG9hdDtcbiAqICAgICAgICAgdmVjMiBzb21lVmVjMjtcbiAqICAgICAgICAgdmVjMyBzb21lVmVjM0FycmF5WzJdO1xuICogICAgICAgICBpbnQgc29tZUludDtcbiAqICAgICAgIH1cbiAqXG4gKiAgWW91IGNhbiBzZXQgdGhlIHZhbHVlcyBvZiB0aGUgdW5pZm9ybSBibG9jayB3aXRoXG4gKlxuICogICAgICAgdHdnbC5zZXRCbG9ja1VuaWZvcm1zKHNvbWVCbG9ja0luZm8sIHtcbiAqICAgICAgICAgIHNvbWVGbG9hdDogMTIuMyxcbiAqICAgICAgICAgIHNvbWVWZWMyOiBbMSwgMl0sXG4gKiAgICAgICAgICBzb21lVmVjM0FycmF5OiBbMSwgMiwgMywgNCwgNSwgNl0sXG4gKiAgICAgICAgICBzb21lSW50OiA1LFxuICogICAgICAgfVxuICpcbiAqICBBcnJheXMgY2FuIGJlIEphdmFTY3JpcHQgYXJyYXlzIG9yIHR5cGVkIGFycmF5c1xuICpcbiAqICBBbnkgbmFtZSB0aGF0IGRvZXNuJ3QgbWF0Y2ggd2lsbCBiZSBpZ25vcmVkXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldEJsb2NrVW5pZm9ybXModW5pZm9ybUJsb2NrSW5mbywgdmFsdWVzKSB7XG4gIHZhciBzZXR0ZXJzID0gdW5pZm9ybUJsb2NrSW5mby5zZXR0ZXJzO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gdmFsdWVzKSB7XG4gICAgdmFyIHNldHRlciA9IHNldHRlcnNbbmFtZV07XG5cbiAgICBpZiAoc2V0dGVyKSB7XG4gICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbbmFtZV07XG4gICAgICBzZXR0ZXIodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBTZXQgdW5pZm9ybXMgYW5kIGJpbmRzIHJlbGF0ZWQgdGV4dHVyZXMuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCJdKTtcbiAqXG4gKiAgICAgY29uc3QgdGV4MSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAqICAgICBjb25zdCB0ZXgyID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICpcbiAqICAgICAuLi4gYXNzdW1lIHdlIHNldHVwIHRoZSB0ZXh0dXJlcyB3aXRoIGRhdGEgLi4uXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjogdGV4MSxcbiAqICAgICAgIHVfc29tZU90aGVyU2FtcGxlcjogdGV4MixcbiAqICAgICAgIHVfc29tZUNvbG9yOiBbMSwwLDAsMV0sXG4gKiAgICAgICB1X3NvbWVQb3NpdGlvbjogWzAsMSwxXSxcbiAqICAgICAgIHVfc29tZU1hdHJpeDogW1xuICogICAgICAgICAxLDAsMCwwLFxuICogICAgICAgICAwLDEsMCwwLFxuICogICAgICAgICAwLDAsMSwwLFxuICogICAgICAgICAwLDAsMCwwLFxuICogICAgICAgXSxcbiAqICAgICB9O1xuICpcbiAqICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICpcbiAqIFRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IGJpbmQgdGhlIHRleHR1cmVzIEFORCBzZXQgdGhlXG4gKiB1bmlmb3Jtcy5cbiAqXG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgdW5pZm9ybXMpO1xuICpcbiAqIEZvciB0aGUgZXhhbXBsZSBhYm92ZSBpdCBpcyBlcXVpdmFsZW50IHRvXG4gKlxuICogICAgIHZhciB0ZXhVbml0ID0gMDtcbiAqICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4VW5pdCk7XG4gKiAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4MSk7XG4gKiAgICAgZ2wudW5pZm9ybTFpKHVfc29tZVNhbXBsZXJMb2NhdGlvbiwgdGV4VW5pdCsrKTtcbiAqICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgdGV4VW5pdCk7XG4gKiAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4Mik7XG4gKiAgICAgZ2wudW5pZm9ybTFpKHVfc29tZVNhbXBsZXJMb2NhdGlvbiwgdGV4VW5pdCsrKTtcbiAqICAgICBnbC51bmlmb3JtNGZ2KHVfc29tZUNvbG9yTG9jYXRpb24sIFsxLCAwLCAwLCAxXSk7XG4gKiAgICAgZ2wudW5pZm9ybTNmdih1X3NvbWVQb3NpdGlvbkxvY2F0aW9uLCBbMCwgMSwgMV0pO1xuICogICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9zb21lTWF0cml4LCBmYWxzZSwgW1xuICogICAgICAgICAxLDAsMCwwLFxuICogICAgICAgICAwLDEsMCwwLFxuICogICAgICAgICAwLDAsMSwwLFxuICogICAgICAgICAwLDAsMCwwLFxuICogICAgICAgXSk7XG4gKlxuICogTm90ZSBpdCBpcyBwZXJmZWN0bHkgcmVhc29uYWJsZSB0byBjYWxsIGBzZXRVbmlmb3Jtc2AgbXVsdGlwbGUgdGltZXMuIEZvciBleGFtcGxlXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjogdGV4MSxcbiAqICAgICAgIHVfc29tZU90aGVyU2FtcGxlcjogdGV4MixcbiAqICAgICB9O1xuICpcbiAqICAgICBjb25zdCBtb3JlVW5pZm9ybXMge1xuICogICAgICAgdV9zb21lQ29sb3I6IFsxLDAsMCwxXSxcbiAqICAgICAgIHVfc29tZVBvc2l0aW9uOiBbMCwxLDFdLFxuICogICAgICAgdV9zb21lTWF0cml4OiBbXG4gKiAgICAgICAgIDEsMCwwLDAsXG4gKiAgICAgICAgIDAsMSwwLDAsXG4gKiAgICAgICAgIDAsMCwxLDAsXG4gKiAgICAgICAgIDAsMCwwLDAsXG4gKiAgICAgICBdLFxuICogICAgIH07XG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHVuaWZvcm1zKTtcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBtb3JlVW5pZm9ybXMpO1xuICpcbiAqIFlvdSBjYW4gYWxzbyBhZGQgV2ViR0xTYW1wbGVycyB0byB1bmlmb3JtIHNhbXBsZXJzIGFzIGluXG4gKlxuICogICAgIGNvbnN0IHVuaWZvcm1zID0ge1xuICogICAgICAgdV9zb21lU2FtcGxlcjoge1xuICogICAgICAgICB0ZXh0dXJlOiBzb21lV2ViR0xUZXh0dXJlLFxuICogICAgICAgICBzYW1wbGVyOiBzb21lV2ViR0xTYW1wbGVyLFxuICogICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqIEluIHdoaWNoIGNhc2UgYm90aCB0aGUgc2FtcGxlciBhbmQgdGV4dHVyZSB3aWxsIGJlIGJvdW5kIHRvIHRoZVxuICogc2FtZSB1bml0LlxuICpcbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIGEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIGBjcmVhdGVQcm9ncmFtSW5mb2Agb3IgdGhlIHNldHRlcnMgcmV0dXJuZWQgZnJvbVxuICogICAgICAgIGBjcmVhdGVVbmlmb3JtU2V0dGVyc2AuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gdmFsdWVzIGFuIG9iamVjdCB3aXRoIHZhbHVlcyBmb3IgdGhlXG4gKiAgICAgICAgdW5pZm9ybXMuXG4gKiAgIFlvdSBjYW4gcGFzcyBtdWx0aXBsZSBvYmplY3RzIGJ5IHB1dHRpbmcgdGhlbSBpbiBhbiBhcnJheSBvciBieSBjYWxsaW5nIHdpdGggbW9yZSBhcmd1bWVudHMuRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3Qgc2hhcmVkVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X2ZvZ05lYXI6IDEwLFxuICogICAgICAgdV9wcm9qZWN0aW9uOiAuLi5cbiAqICAgICAgIC4uLlxuICogICAgIH07XG4gKlxuICogICAgIGNvbnN0IGxvY2FsVW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3dvcmxkOiAuLi5cbiAqICAgICAgIHVfZGlmZnVzZUNvbG9yOiAuLi5cbiAqICAgICB9O1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtcyk7XG4gKlxuICogICAgIC8vIGlzIHRoZSBzYW1lIGFzXG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIFtzaGFyZWRVbmlmb3JtcywgbG9jYWxVbmlmb3Jtc10pO1xuICpcbiAqICAgICAvLyBpcyB0aGUgc2FtZSBhc1xuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBzaGFyZWRVbmlmb3Jtcyk7XG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgbG9jYWxVbmlmb3Jtc307XG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRVbmlmb3JtcyhzZXR0ZXJzLCB2YWx1ZXMpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICB2YXIgYWN0dWFsU2V0dGVycyA9IHNldHRlcnMudW5pZm9ybVNldHRlcnMgfHwgc2V0dGVycztcbiAgdmFyIG51bUFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGFOZHggPSAxOyBhTmR4IDwgbnVtQXJnczsgKythTmR4KSB7XG4gICAgdmFyIF92YWx1ZXMgPSBhcmd1bWVudHNbYU5keF07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShfdmFsdWVzKSkge1xuICAgICAgdmFyIG51bVZhbHVlcyA9IF92YWx1ZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtVmFsdWVzOyArK2lpKSB7XG4gICAgICAgIHNldFVuaWZvcm1zKGFjdHVhbFNldHRlcnMsIF92YWx1ZXNbaWldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBfdmFsdWVzKSB7XG4gICAgICAgIHZhciBzZXR0ZXIgPSBhY3R1YWxTZXR0ZXJzW25hbWVdO1xuXG4gICAgICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgICAgICBzZXR0ZXIoX3ZhbHVlc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWxpYXMgZm9yIGBzZXRVbmlmb3Jtc2BcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPil9IHNldHRlcnMgYSBgUHJvZ3JhbUluZm9gIGFzIHJldHVybmVkIGZyb20gYGNyZWF0ZVByb2dyYW1JbmZvYCBvciB0aGUgc2V0dGVycyByZXR1cm5lZCBmcm9tXG4gKiAgICAgICAgYGNyZWF0ZVVuaWZvcm1TZXR0ZXJzYC5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSB2YWx1ZXMgYW4gb2JqZWN0IHdpdGggdmFsdWVzIGZvciB0aGVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxudmFyIHNldFVuaWZvcm1zQW5kQmluZFRleHR1cmVzID0gc2V0VW5pZm9ybXM7XG4vKipcbiAqIENyZWF0ZXMgc2V0dGVyIGZ1bmN0aW9ucyBmb3IgYWxsIGF0dHJpYnV0ZXMgb2YgYSBzaGFkZXJcbiAqIHByb2dyYW0uIFlvdSBjYW4gcGFzcyB0aGlzIHRvIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc30gdG8gc2V0IGFsbCB5b3VyIGJ1ZmZlcnMgYW5kIGF0dHJpYnV0ZXMuXG4gKlxuICogQHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QXR0cmlidXRlc30gZm9yIGV4YW1wbGVcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIHRoZSBwcm9ncmFtIHRvIGNyZWF0ZSBzZXR0ZXJzIGZvci5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IGFuIG9iamVjdCB3aXRoIGEgc2V0dGVyIGZvciBlYWNoIGF0dHJpYnV0ZSBieSBuYW1lLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuZXhwb3J0cy5zZXRVbmlmb3Jtc0FuZEJpbmRUZXh0dXJlcyA9IHNldFVuaWZvcm1zQW5kQmluZFRleHR1cmVzO1xuXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBhdHRyaWJTZXR0ZXJzID0ge307XG4gIHZhciBudW1BdHRyaWJzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBBQ1RJVkVfQVRUUklCVVRFUyk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bUF0dHJpYnM7ICsraWkpIHtcbiAgICB2YXIgYXR0cmliSW5mbyA9IGdsLmdldEFjdGl2ZUF0dHJpYihwcm9ncmFtLCBpaSk7XG5cbiAgICBpZiAoaXNCdWlsdEluKGF0dHJpYkluZm8pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBhdHRyaWJJbmZvLm5hbWUpO1xuICAgIHZhciB0eXBlSW5mbyA9IGF0dHJUeXBlTWFwW2F0dHJpYkluZm8udHlwZV07XG4gICAgdmFyIHNldHRlciA9IHR5cGVJbmZvLnNldHRlcihnbCwgaW5kZXgsIHR5cGVJbmZvKTtcbiAgICBzZXR0ZXIubG9jYXRpb24gPSBpbmRleDtcbiAgICBhdHRyaWJTZXR0ZXJzW2F0dHJpYkluZm8ubmFtZV0gPSBzZXR0ZXI7XG4gIH1cblxuICByZXR1cm4gYXR0cmliU2V0dGVycztcbn1cbi8qKlxuICogU2V0cyBhdHRyaWJ1dGVzIGFuZCBiaW5kcyBidWZmZXJzIChkZXByZWNhdGVkLi4uIHVzZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXN9KVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoXG4gKiAgICAgICAgIGdsLCBbXCJzb21lLXZzXCIsIFwic29tZS1mc1wiKTtcbiAqXG4gKiAgICAgY29uc3QgYXR0cmliU2V0dGVycyA9IGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnMocHJvZ3JhbSk7XG4gKlxuICogICAgIGNvbnN0IHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gKiAgICAgY29uc3QgdGV4Y29vcmRCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAqXG4gKiAgICAgY29uc3QgYXR0cmlicyA9IHtcbiAqICAgICAgIGFfcG9zaXRpb246IHtidWZmZXI6IHBvc2l0aW9uQnVmZmVyLCBudW1Db21wb25lbnRzOiAzfSxcbiAqICAgICAgIGFfdGV4Y29vcmQ6IHtidWZmZXI6IHRleGNvb3JkQnVmZmVyLCBudW1Db21wb25lbnRzOiAyfSxcbiAqICAgICB9O1xuICpcbiAqICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xuICpcbiAqIFRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IGJpbmQgdGhlIGJ1ZmZlcnMgQU5EIHNldCB0aGVcbiAqIGF0dHJpYnV0ZXMuXG4gKlxuICogICAgIHNldEF0dHJpYnV0ZXMoYXR0cmliU2V0dGVycywgYXR0cmlicyk7XG4gKlxuICogUHJvcGVydGllcyBvZiBhdHRyaWJzLiBGb3IgZWFjaCBhdHRyaWIgeW91IGNhbiBhZGRcbiAqIHByb3BlcnRpZXM6XG4gKlxuICogKiAgIHR5cGU6IHRoZSB0eXBlIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdCA9IGdsLkZMT0FUXG4gKiAqICAgbm9ybWFsaXplOiB3aGV0aGVyIG9yIG5vdCB0byBub3JtYWxpemUgdGhlIGRhdGEuIERlZmF1bHQgPSBmYWxzZVxuICogKiAgIHN0cmlkZTogdGhlIHN0cmlkZS4gRGVmYXVsdCA9IDBcbiAqICogICBvZmZzZXQ6IG9mZnNldCBpbnRvIHRoZSBidWZmZXIuIERlZmF1bHQgPSAwXG4gKiAqICAgZGl2aXNvcjogdGhlIGRpdmlzb3IgZm9yIGluc3RhbmNlcy4gRGVmYXVsdCA9IHVuZGVmaW5lZFxuICpcbiAqIEZvciBleGFtcGxlIGlmIHlvdSBoYWQgMyB2YWx1ZSBmbG9hdCBwb3NpdGlvbnMsIDIgdmFsdWVcbiAqIGZsb2F0IHRleGNvb3JkIGFuZCA0IHZhbHVlIHVpbnQ4IGNvbG9ycyB5b3UnZCBzZXR1cCB5b3VyXG4gKiBhdHRyaWJzIGxpa2UgdGhpc1xuICpcbiAqICAgICBjb25zdCBhdHRyaWJzID0ge1xuICogICAgICAgYV9wb3NpdGlvbjoge2J1ZmZlcjogcG9zaXRpb25CdWZmZXIsIG51bUNvbXBvbmVudHM6IDN9LFxuICogICAgICAgYV90ZXhjb29yZDoge2J1ZmZlcjogdGV4Y29vcmRCdWZmZXIsIG51bUNvbXBvbmVudHM6IDJ9LFxuICogICAgICAgYV9jb2xvcjoge1xuICogICAgICAgICBidWZmZXI6IGNvbG9yQnVmZmVyLFxuICogICAgICAgICBudW1Db21wb25lbnRzOiA0LFxuICogICAgICAgICB0eXBlOiBnbC5VTlNJR05FRF9CWVRFLFxuICogICAgICAgICBub3JtYWxpemU6IHRydWUsXG4gKiAgICAgICB9LFxuICogICAgIH07XG4gKlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fSBzZXR0ZXJzIEF0dHJpYnV0ZSBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmlidXRlU2V0dGVyc1xuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz59IGJ1ZmZlcnMgQXR0cmliSW5mb3MgbWFwcGVkIGJ5IGF0dHJpYnV0ZSBuYW1lLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfVxuICovXG5cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhzZXR0ZXJzLCBidWZmZXJzKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gYnVmZmVycykge1xuICAgIHZhciBzZXR0ZXIgPSBzZXR0ZXJzW25hbWVdO1xuXG4gICAgaWYgKHNldHRlcikge1xuICAgICAgc2V0dGVyKGJ1ZmZlcnNbbmFtZV0pO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZXMgYW5kIGJ1ZmZlcnMgaW5jbHVkaW5nIHRoZSBgRUxFTUVOVF9BUlJBWV9CVUZGRVJgIGlmIGFwcHJvcHJpYXRlXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCIpO1xuICpcbiAqICAgICBjb25zdCBhcnJheXMgPSB7XG4gKiAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdLCB9LFxuICogICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgZGF0YTogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLCAgICAgICAgICAgICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqICAgICBjb25zdCBidWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gKlxuICogICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG4gKlxuICogVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmluZCB0aGUgYnVmZmVycyBBTkQgc2V0IHRoZVxuICogYXR0cmlidXRlcy5cbiAqXG4gKiAgICAgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAqXG4gKiBGb3IgdGhlIGV4YW1wbGUgYWJvdmUgaXQgaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgcG9zaXRpb25CdWZmZXIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfcG9zaXRpb25Mb2NhdGlvbik7XG4gKiAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX3Bvc2l0aW9uTG9jYXRpb24sIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleGNvb3JkQnVmZmVyKTtcbiAqICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX3RleGNvb3JkTG9jYXRpb24pO1xuICogICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYV90ZXhjb29yZExvY2F0aW9uLCA0LCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfE9iamVjdC48c3RyaW5nLCBmdW5jdGlvbj4pfSBzZXR0ZXJzIEEgYFByb2dyYW1JbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb30gb3IgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQXR0cmlidXRlU2V0dGVyc31cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvKX0gYnVmZmVycyBhIGBCdWZmZXJJbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30uXG4gKiAgIG9yIGEgYFZlcnRleEFycmF5SW5mb2AgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRCdWZmZXJzQW5kQXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMpIHtcbiAgaWYgKGJ1ZmZlcnMudmVydGV4QXJyYXlPYmplY3QpIHtcbiAgICBnbC5iaW5kVmVydGV4QXJyYXkoYnVmZmVycy52ZXJ0ZXhBcnJheU9iamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0QXR0cmlidXRlcyhwcm9ncmFtSW5mby5hdHRyaWJTZXR0ZXJzIHx8IHByb2dyYW1JbmZvLCBidWZmZXJzLmF0dHJpYnMpO1xuXG4gICAgaWYgKGJ1ZmZlcnMuaW5kaWNlcykge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihFTEVNRU5UX0FSUkFZX0JVRkZFUiwgYnVmZmVycy5pbmRpY2VzKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUHJvZ3JhbUluZm9cbiAqIEBwcm9wZXJ0eSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtIEEgc2hhZGVyIHByb2dyYW1cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgZnVuY3Rpb24+fSB1bmlmb3JtU2V0dGVycyBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzLFxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLCBmdW5jdGlvbj59IGF0dHJpYlNldHRlcnMgb2JqZWN0IG9mIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJTZXR0ZXJzLFxuICogQHByb3BlcnR5IHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tTcGVjfSBbdW5pZm9ybUJsb2NrU3BhY2VdIGEgdW5pZm9ybSBibG9jayBzcGVjIGZvciBtYWtpbmcgVW5pZm9ybUJsb2NrSW5mb3Mgd2l0aCBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvIGV0Yy4uXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIG1vZHVsZTp0d2dsLlRyYW5zZm9ybUZlZWRiYWNrSW5mbz59IFt0cmFuc2Zvcm1GZWVkYmFja0luZm9dIGluZm8gZm9yIHRyYW5zZm9ybSBmZWVkYmFja3NcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIFByb2dyYW1JbmZvIGZyb20gYW4gZXhpc3RpbmcgcHJvZ3JhbS5cbiAqXG4gKiBBIFByb2dyYW1JbmZvIGNvbnRhaW5zXG4gKlxuICogICAgIHByb2dyYW1JbmZvID0ge1xuICogICAgICAgIHByb2dyYW06IFdlYkdMUHJvZ3JhbSxcbiAqICAgICAgICB1bmlmb3JtU2V0dGVyczogb2JqZWN0IG9mIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVVbmlmb3JtU2V0dGVycyxcbiAqICAgICAgICBhdHRyaWJTZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYlNldHRlcnMsXG4gKiAgICAgfVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gYW4gZXhpc3RpbmcgV2ViR0xQcm9ncmFtLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IFRoZSBjcmVhdGVkIFByb2dyYW1JbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtSW5mb0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtKSB7XG4gIHZhciB1bmlmb3JtU2V0dGVycyA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKGdsLCBwcm9ncmFtKTtcbiAgdmFyIGF0dHJpYlNldHRlcnMgPSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzKGdsLCBwcm9ncmFtKTtcbiAgdmFyIHByb2dyYW1JbmZvID0ge1xuICAgIHByb2dyYW06IHByb2dyYW0sXG4gICAgdW5pZm9ybVNldHRlcnM6IHVuaWZvcm1TZXR0ZXJzLFxuICAgIGF0dHJpYlNldHRlcnM6IGF0dHJpYlNldHRlcnNcbiAgfTtcblxuICBpZiAodXRpbHMuaXNXZWJHTDIoZ2wpKSB7XG4gICAgcHJvZ3JhbUluZm8udW5pZm9ybUJsb2NrU3BlYyA9IGNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbSk7XG4gICAgcHJvZ3JhbUluZm8udHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCBwcm9ncmFtKTtcbiAgfVxuXG4gIHJldHVybiBwcm9ncmFtSW5mbztcbn1cbi8qKlxuICogQ3JlYXRlcyBhIFByb2dyYW1JbmZvIGZyb20gMiBzb3VyY2VzLlxuICpcbiAqIEEgUHJvZ3JhbUluZm8gY29udGFpbnNcbiAqXG4gKiAgICAgcHJvZ3JhbUluZm8gPSB7XG4gKiAgICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxuICogICAgICAgIHVuaWZvcm1TZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzLFxuICogICAgICAgIGF0dHJpYlNldHRlcnM6IG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmliU2V0dGVycyxcbiAqICAgICB9XG4gKlxuICogTk9URTogVGhlcmUgYXJlIDQgc2lnbmF0dXJlcyBmb3IgdGhpcyBmdW5jdGlvblxuICpcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtSW5mbyhnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHNoYWRlclNvdXJjZXMgQXJyYXkgb2Ygc291cmNlcyBmb3IgdGhlXG4gKiAgICAgICAgc2hhZGVycyBvciBpZHMuIFRoZSBmaXJzdCBpcyBhc3N1bWVkIHRvIGJlIHRoZSB2ZXJ0ZXggc2hhZGVyLFxuICogICAgICAgIHRoZSBzZWNvbmQgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzIG9yIGFuIGVycm9yIGNhbGxiYWNrLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfSBbb3B0X2xvY2F0aW9uc3xtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucyBvciBhbiBlcnJvciBjYWxsYmFjay5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mbz99IFRoZSBjcmVhdGVkIFByb2dyYW1JbmZvIG9yIG51bGwgaWYgaXQgZmFpbGVkIHRvIGxpbmsgb3IgY29tcGlsZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtSW5mbyhnbCwgc2hhZGVyU291cmNlcywgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIHZhciBwcm9nT3B0aW9ucyA9IGdldFByb2dyYW1PcHRpb25zKG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjayk7XG4gIHZhciBnb29kID0gdHJ1ZTtcbiAgc2hhZGVyU291cmNlcyA9IHNoYWRlclNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAvLyBMZXRzIGFzc3VtZSBpZiB0aGVyZSBpcyBubyBcXG4gaXQncyBhbiBpZFxuICAgIGlmIChzb3VyY2UuaW5kZXhPZihcIlxcblwiKSA8IDApIHtcbiAgICAgIHZhciBzY3JpcHQgPSBnZXRFbGVtZW50QnlJZChzb3VyY2UpO1xuXG4gICAgICBpZiAoIXNjcmlwdCkge1xuICAgICAgICBwcm9nT3B0aW9ucy5lcnJvckNhbGxiYWNrKFwibm8gZWxlbWVudCB3aXRoIGlkOiBcIiArIHNvdXJjZSk7XG4gICAgICAgIGdvb2QgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjcmlwdC50ZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzb3VyY2U7XG4gIH0pO1xuXG4gIGlmICghZ29vZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMoZ2wsIHNoYWRlclNvdXJjZXMsIHByb2dPcHRpb25zKTtcblxuICBpZiAoIXByb2dyYW0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQcm9ncmFtSW5mb0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtKTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGV4dHVyZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGV4dHVyZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRUZXh0dXJlRGVmYXVsdHNfID0gc2V0RGVmYXVsdHM7XG5leHBvcnRzLmNyZWF0ZVNhbXBsZXIgPSBjcmVhdGVTYW1wbGVyO1xuZXhwb3J0cy5jcmVhdGVTYW1wbGVycyA9IGNyZWF0ZVNhbXBsZXJzO1xuZXhwb3J0cy5zZXRTYW1wbGVyUGFyYW1ldGVycyA9IHNldFNhbXBsZXJQYXJhbWV0ZXJzO1xuZXhwb3J0cy5jcmVhdGVUZXh0dXJlID0gY3JlYXRlVGV4dHVyZTtcbmV4cG9ydHMuc2V0RW1wdHlUZXh0dXJlID0gc2V0RW1wdHlUZXh0dXJlO1xuZXhwb3J0cy5zZXRUZXh0dXJlRnJvbUFycmF5ID0gc2V0VGV4dHVyZUZyb21BcnJheTtcbmV4cG9ydHMubG9hZFRleHR1cmVGcm9tVXJsID0gbG9hZFRleHR1cmVGcm9tVXJsO1xuZXhwb3J0cy5zZXRUZXh0dXJlRnJvbUVsZW1lbnQgPSBzZXRUZXh0dXJlRnJvbUVsZW1lbnQ7XG5leHBvcnRzLnNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplID0gc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemU7XG5leHBvcnRzLnNldFRleHR1cmVQYXJhbWV0ZXJzID0gc2V0VGV4dHVyZVBhcmFtZXRlcnM7XG5leHBvcnRzLnNldERlZmF1bHRUZXh0dXJlQ29sb3IgPSBzZXREZWZhdWx0VGV4dHVyZUNvbG9yO1xuZXhwb3J0cy5jcmVhdGVUZXh0dXJlcyA9IGNyZWF0ZVRleHR1cmVzO1xuZXhwb3J0cy5yZXNpemVUZXh0dXJlID0gcmVzaXplVGV4dHVyZTtcbmV4cG9ydHMuY2FuR2VuZXJhdGVNaXBtYXAgPSBjYW5HZW5lcmF0ZU1pcG1hcDtcbmV4cG9ydHMuY2FuRmlsdGVyID0gY2FuRmlsdGVyO1xuZXhwb3J0cy5nZXROdW1Db21wb25lbnRzRm9yRm9ybWF0ID0gZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdDtcbmV4cG9ydHMuZ2V0Qnl0ZXNQZXJFbGVtZW50Rm9ySW50ZXJuYWxGb3JtYXQgPSBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdDtcbmV4cG9ydHMuZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0ID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0O1xuXG52YXIgdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzLmpzICovIFwiLi9zcmMvdXRpbHMuanNcIikpO1xuXG52YXIgdHlwZWRBcnJheXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3R5cGVkYXJyYXlzLmpzICovIFwiLi9zcmMvdHlwZWRhcnJheXMuanNcIikpO1xuXG52YXIgaGVscGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXIuanMgKi8gXCIuL3NyYy9oZWxwZXIuanNcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogTG93IGxldmVsIHRleHR1cmUgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC50ZXh0dXJlc2AgYW5kIGB0d2dsYFxuICogaXRzZWxmXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6dHdnbH0gZm9yIGNvcmUgZnVuY3Rpb25zXG4gKlxuICogQG1vZHVsZSB0d2dsL3RleHR1cmVzXG4gKi9cbi8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzZWUgYSBnbG9iYWwgZ2xcbnZhciBnbCA9IHVuZGVmaW5lZDtcbi8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cblxudmFyIGRlZmF1bHRzID0ge1xuICB0ZXh0dXJlQ29sb3I6IG5ldyBVaW50OEFycmF5KFsxMjgsIDE5MiwgMjU1LCAyNTVdKSxcbiAgdGV4dHVyZU9wdGlvbnM6IHt9LFxuICBjcm9zc09yaWdpbjogdW5kZWZpbmVkXG59O1xudmFyIGlzQXJyYXlCdWZmZXIgPSB0eXBlZEFycmF5cy5pc0FycmF5QnVmZmVyOyAvLyBTaG91bGQgd2UgbWFrZSB0aGlzIG9uIGRlbWFuZD9cblxudmFyIGdldFNoYXJlZDJEQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNfY3R4O1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0U2hhcmVkMkRDb250ZXh0KCkge1xuICAgIHNfY3R4ID0gc19jdHggfHwgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikuZ2V0Q29udGV4dChcIjJkXCIpIDogbnVsbCk7XG4gICAgcmV0dXJuIHNfY3R4O1xuICB9O1xufSgpOyAvLyBOT1RFOiBDaHJvbWUgc3VwcG9ydHMgMkQgY2FudmFzIGluIGEgV29ya2VyIChiZWhpbmQgZmxhZyBhcyBvZiB2NjQgYnV0XG4vLyAgICAgICBub3Qgb25seSBkb2VzIEZpcmVmb3ggTk9UIHN1cHBvcnQgaXQgYnV0IEZpcmVmb3ggZnJlZXplcyBpbW1lZGlhdGVseVxuLy8gICAgICAgaWYgeW91IHRyeSB0byBjcmVhdGUgb25lIGluc3RlYWQgb2YganVzdCByZXR1cm5pbmcgbnVsbCBhbmQgY29udGludWluZy5cbi8vICA6IChnbG9iYWwuT2Zmc2NyZWVuQ2FudmFzICYmIChuZXcgZ2xvYmFsLk9mZnNjcmVlbkNhbnZhcygxLCAxKSkuZ2V0Q29udGV4dChcIjJkXCIpKTsgIC8vIE9mZnNjcmVlbkNhbnZhcyBtYXkgbm90IHN1cHBvcnQgMmRcbi8vIE5PVEU6IFdlIGNhbiBtYXliZSByZW1vdmUgc29tZSBvZiB0aGUgbmVlZCBmb3IgdGhlIDJkIGNhbnZhcy4gSW4gV2ViR0wyXG4vLyB3ZSBjYW4gdXNlIHRoZSB2YXJpb3VzIHVucGFjayBzZXR0aW5ncy4gT3RoZXJ3aXNlIHdlIGNvdWxkIHRyeSB1c2luZ1xuLy8gdGhlIGFiaWxpdHkgb2YgYW4gSW1hZ2VCaXRtYXAgdG8gYmUgY3V0LiBVbmZvcnR1bmF0ZWx5IGN1dHRpbmcgYW4gSW1hZ2VCaXRtYXBcbi8vIGlzIGFzeW5jIGFuZCB0aGUgY3VycmVudCBUV0dMIGNvZGUgZXhwZWN0cyBhIG5vbi1Bc3luYyByZXN1bHQgdGhvdWdoIHRoYXRcbi8vIG1pZ2h0IG5vdCBiZSBhIHByb2JsZW0uIEltYWdlQml0bWFwIHRob3VnaCBpcyBub3QgYXZhaWxhYmxlIGluIEVkZ2Ugb3IgU2FmYXJpXG4vLyBhcyBvZiAyMDE4LTAxLTAyXG5cbi8qIFBpeGVsRm9ybWF0ICovXG5cblxudmFyIEFMUEhBID0gMHgxOTA2O1xudmFyIFJHQiA9IDB4MTkwNztcbnZhciBSR0JBID0gMHgxOTA4O1xudmFyIExVTUlOQU5DRSA9IDB4MTkwOTtcbnZhciBMVU1JTkFOQ0VfQUxQSEEgPSAweDE5MEE7XG52YXIgREVQVEhfQ09NUE9ORU5UID0gMHgxOTAyO1xudmFyIERFUFRIX1NURU5DSUwgPSAweDg0Rjk7XG4vKiBUZXh0dXJlV3JhcE1vZGUgKi9cbi8vIGNvbnN0IFJFUEVBVCAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MjkwMTtcbi8vIGNvbnN0IE1JUlJPUkVEX1JFUEVBVCAgICAgICAgICAgICAgICA9IDB4ODM3MDtcblxudmFyIENMQU1QX1RPX0VER0UgPSAweDgxMmY7XG4vKiBUZXh0dXJlTWFnRmlsdGVyICovXG5cbnZhciBORUFSRVNUID0gMHgyNjAwO1xudmFyIExJTkVBUiA9IDB4MjYwMTtcbi8qIFRleHR1cmVNaW5GaWx0ZXIgKi9cbi8vIGNvbnN0IE5FQVJFU1RfTUlQTUFQX05FQVJFU1QgICAgICAgICA9IDB4MjcwMDtcbi8vIGNvbnN0IExJTkVBUl9NSVBNQVBfTkVBUkVTVCAgICAgICAgICA9IDB4MjcwMTtcbi8vIGNvbnN0IE5FQVJFU1RfTUlQTUFQX0xJTkVBUiAgICAgICAgICA9IDB4MjcwMjtcbi8vIGNvbnN0IExJTkVBUl9NSVBNQVBfTElORUFSICAgICAgICAgICA9IDB4MjcwMztcblxuLyogVGV4dHVyZSBUYXJnZXQgKi9cblxudmFyIFRFWFRVUkVfMkQgPSAweDBkZTE7XG52YXIgVEVYVFVSRV9DVUJFX01BUCA9IDB4ODUxMztcbnZhciBURVhUVVJFXzNEID0gMHg4MDZmO1xudmFyIFRFWFRVUkVfMkRfQVJSQVkgPSAweDhjMWE7XG4vKiBDdWJlbWFwIFRhcmdldHMgKi9cblxudmFyIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCA9IDB4ODUxNTtcbnZhciBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ggPSAweDg1MTY7XG52YXIgVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZID0gMHg4NTE3O1xudmFyIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSA9IDB4ODUxODtcbnZhciBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ogPSAweDg1MTk7XG52YXIgVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aID0gMHg4NTFhO1xuLyogVGV4dHVyZSBQYXJhbWV0ZXJzICovXG5cbnZhciBURVhUVVJFX01JTl9GSUxURVIgPSAweDI4MDE7XG52YXIgVEVYVFVSRV9NQUdfRklMVEVSID0gMHgyODAwO1xudmFyIFRFWFRVUkVfV1JBUF9TID0gMHgyODAyO1xudmFyIFRFWFRVUkVfV1JBUF9UID0gMHgyODAzO1xudmFyIFRFWFRVUkVfV1JBUF9SID0gMHg4MDcyO1xudmFyIFRFWFRVUkVfTUlOX0xPRCA9IDB4ODEzYTtcbnZhciBURVhUVVJFX01BWF9MT0QgPSAweDgxM2I7XG52YXIgVEVYVFVSRV9CQVNFX0xFVkVMID0gMHg4MTNjO1xudmFyIFRFWFRVUkVfTUFYX0xFVkVMID0gMHg4MTNkO1xuLyogUGl4ZWwgc3RvcmUgKi9cblxudmFyIFVOUEFDS19BTElHTk1FTlQgPSAweDBjZjU7XG52YXIgVU5QQUNLX1JPV19MRU5HVEggPSAweDBjZjI7XG52YXIgVU5QQUNLX0lNQUdFX0hFSUdIVCA9IDB4ODA2ZTtcbnZhciBVTlBBQ0tfU0tJUF9QSVhFTFMgPSAweDBjZjQ7XG52YXIgVU5QQUNLX1NLSVBfUk9XUyA9IDB4MGNmMztcbnZhciBVTlBBQ0tfU0tJUF9JTUFHRVMgPSAweDgwNmQ7XG52YXIgVU5QQUNLX0NPTE9SU1BBQ0VfQ09OVkVSU0lPTl9XRUJHTCA9IDB4OTI0MztcbnZhciBVTlBBQ0tfUFJFTVVMVElQTFlfQUxQSEFfV0VCR0wgPSAweDkyNDE7XG52YXIgVU5QQUNLX0ZMSVBfWV9XRUJHTCA9IDB4OTI0MDtcbnZhciBSOCA9IDB4ODIyOTtcbnZhciBSOF9TTk9STSA9IDB4OEY5NDtcbnZhciBSMTZGID0gMHg4MjJEO1xudmFyIFIzMkYgPSAweDgyMkU7XG52YXIgUjhVSSA9IDB4ODIzMjtcbnZhciBSOEkgPSAweDgyMzE7XG52YXIgUkcxNlVJID0gMHg4MjNBO1xudmFyIFJHMTZJID0gMHg4MjM5O1xudmFyIFJHMzJVSSA9IDB4ODIzQztcbnZhciBSRzMySSA9IDB4ODIzQjtcbnZhciBSRzggPSAweDgyMkI7XG52YXIgUkc4X1NOT1JNID0gMHg4Rjk1O1xudmFyIFJHMTZGID0gMHg4MjJGO1xudmFyIFJHMzJGID0gMHg4MjMwO1xudmFyIFJHOFVJID0gMHg4MjM4O1xudmFyIFJHOEkgPSAweDgyMzc7XG52YXIgUjE2VUkgPSAweDgyMzQ7XG52YXIgUjE2SSA9IDB4ODIzMztcbnZhciBSMzJVSSA9IDB4ODIzNjtcbnZhciBSMzJJID0gMHg4MjM1O1xudmFyIFJHQjggPSAweDgwNTE7XG52YXIgU1JHQjggPSAweDhDNDE7XG52YXIgUkdCNTY1ID0gMHg4RDYyO1xudmFyIFJHQjhfU05PUk0gPSAweDhGOTY7XG52YXIgUjExRl9HMTFGX0IxMEYgPSAweDhDM0E7XG52YXIgUkdCOV9FNSA9IDB4OEMzRDtcbnZhciBSR0IxNkYgPSAweDg4MUI7XG52YXIgUkdCMzJGID0gMHg4ODE1O1xudmFyIFJHQjhVSSA9IDB4OEQ3RDtcbnZhciBSR0I4SSA9IDB4OEQ4RjtcbnZhciBSR0IxNlVJID0gMHg4RDc3O1xudmFyIFJHQjE2SSA9IDB4OEQ4OTtcbnZhciBSR0IzMlVJID0gMHg4RDcxO1xudmFyIFJHQjMySSA9IDB4OEQ4MztcbnZhciBSR0JBOCA9IDB4ODA1ODtcbnZhciBTUkdCOF9BTFBIQTggPSAweDhDNDM7XG52YXIgUkdCQThfU05PUk0gPSAweDhGOTc7XG52YXIgUkdCNV9BMSA9IDB4ODA1NztcbnZhciBSR0JBNCA9IDB4ODA1NjtcbnZhciBSR0IxMF9BMiA9IDB4ODA1OTtcbnZhciBSR0JBMTZGID0gMHg4ODFBO1xudmFyIFJHQkEzMkYgPSAweDg4MTQ7XG52YXIgUkdCQThVSSA9IDB4OEQ3QztcbnZhciBSR0JBOEkgPSAweDhEOEU7XG52YXIgUkdCMTBfQTJVSSA9IDB4OTA2RjtcbnZhciBSR0JBMTZVSSA9IDB4OEQ3NjtcbnZhciBSR0JBMTZJID0gMHg4RDg4O1xudmFyIFJHQkEzMkkgPSAweDhEODI7XG52YXIgUkdCQTMyVUkgPSAweDhENzA7XG52YXIgREVQVEhfQ09NUE9ORU5UMTYgPSAweDgxQTU7XG52YXIgREVQVEhfQ09NUE9ORU5UMjQgPSAweDgxQTY7XG52YXIgREVQVEhfQ09NUE9ORU5UMzJGID0gMHg4Q0FDO1xudmFyIERFUFRIMzJGX1NURU5DSUw4ID0gMHg4Q0FEO1xudmFyIERFUFRIMjRfU1RFTkNJTDggPSAweDg4RjA7XG4vKiBEYXRhVHlwZSAqL1xuXG52YXIgQllURSA9IDB4MTQwMDtcbnZhciBVTlNJR05FRF9CWVRFID0gMHgxNDAxO1xudmFyIFNIT1JUID0gMHgxNDAyO1xudmFyIFVOU0lHTkVEX1NIT1JUID0gMHgxNDAzO1xudmFyIElOVCA9IDB4MTQwNDtcbnZhciBVTlNJR05FRF9JTlQgPSAweDE0MDU7XG52YXIgRkxPQVQgPSAweDE0MDY7XG52YXIgVU5TSUdORURfU0hPUlRfNF80XzRfNCA9IDB4ODAzMztcbnZhciBVTlNJR05FRF9TSE9SVF81XzVfNV8xID0gMHg4MDM0O1xudmFyIFVOU0lHTkVEX1NIT1JUXzVfNl81ID0gMHg4MzYzO1xudmFyIEhBTEZfRkxPQVQgPSAweDE0MEI7XG52YXIgSEFMRl9GTE9BVF9PRVMgPSAweDhENjE7IC8vIFRoYW5rcyBLaHJvbm9zIGZvciBtYWtpbmcgdGhpcyBkaWZmZXJlbnQgPjooXG5cbnZhciBVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVYgPSAweDgzNjg7XG52YXIgVU5TSUdORURfSU5UXzEwRl8xMUZfMTFGX1JFViA9IDB4OEMzQjtcbnZhciBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVYgPSAweDhDM0U7XG52YXIgRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWID0gMHg4REFEO1xudmFyIFVOU0lHTkVEX0lOVF8yNF84ID0gMHg4NEZBO1xudmFyIFJHID0gMHg4MjI3O1xudmFyIFJHX0lOVEVHRVIgPSAweDgyMjg7XG52YXIgUkVEID0gMHgxOTAzO1xudmFyIFJFRF9JTlRFR0VSID0gMHg4RDk0O1xudmFyIFJHQl9JTlRFR0VSID0gMHg4RDk4O1xudmFyIFJHQkFfSU5URUdFUiA9IDB4OEQ5OTtcbnZhciBmb3JtYXRJbmZvID0ge307XG57XG4gIC8vIE5PVEU6IHRoaXMgaXMgbmFtZWQgYG51bUNvbG9yQ29tcG9uZW50c2AgdnMgYG51bUNvbXBvbmVudHNgIHNvIHdlIGNhbiBsZXQgVWdsaWZ5IG1hbmdsZVxuICAvLyB0aGUgbmFtZS5cbiAgdmFyIGYgPSBmb3JtYXRJbmZvO1xuICBmW0FMUEhBXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDFcbiAgfTtcbiAgZltMVU1JTkFOQ0VdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogMVxuICB9O1xuICBmW0xVTUlOQU5DRV9BTFBIQV0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAyXG4gIH07XG4gIGZbUkdCXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDNcbiAgfTtcbiAgZltSR0JBXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDRcbiAgfTtcbiAgZltSRURdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogMVxuICB9O1xuICBmW1JFRF9JTlRFR0VSXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDFcbiAgfTtcbiAgZltSR10gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAyXG4gIH07XG4gIGZbUkdfSU5URUdFUl0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAyXG4gIH07XG4gIGZbUkdCXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDNcbiAgfTtcbiAgZltSR0JfSU5URUdFUl0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAzXG4gIH07XG4gIGZbUkdCQV0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiA0XG4gIH07XG4gIGZbUkdCQV9JTlRFR0VSXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDRcbiAgfTtcbiAgZltERVBUSF9DT01QT05FTlRdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogMVxuICB9O1xuICBmW0RFUFRIX1NURU5DSUxdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogMlxuICB9O1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUZXh0dXJlRm9ybWF0RGV0YWlsc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHRleHR1cmVGb3JtYXQgZm9ybWF0IHRvIHBhc3MgdGV4SW1hZ2UyRCBhbmQgc2ltaWxhciBmdW5jdGlvbnMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbG9yUmVuZGVyYWJsZSB0cnVlIGlmIHlvdSBjYW4gcmVuZGVyIHRvIHRoaXMgZm9ybWF0IG9mIHRleHR1cmUuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHRleHR1cmVGaWx0ZXJhYmxlIHRydWUgaWYgeW91IGNhbiBmaWx0ZXIgdGhlIHRleHR1cmUsIGZhbHNlIGlmIHlvdSBjYW4gb255IHVzZSBgTkVBUkVTVGAuXG4gKiBAcHJvcGVydHkge251bWJlcltdfSB0eXBlIEFycmF5IG9mIHBvc3NpYmxlIHR5cGVzIHlvdSBjYW4gcGFzcyB0byB0ZXhJbWFnZTJEIGFuZCBzaW1pbGFyIGZ1bmN0aW9uXG4gKiBAcHJvcGVydHkge09iamVjdC48bnVtYmVyLG51bWJlcj59IGJ5dGVzUGVyRWxlbWVudE1hcCBBIG1hcCBvZiB0eXBlcyB0byBieXRlcyBwZXIgZWxlbWVudFxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvO1xuXG5mdW5jdGlvbiBnZXRUZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKGludGVybmFsRm9ybWF0KSB7XG4gIGlmICghc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKSB7XG4gICAgLy8gTk9URTogdGhlc2UgcHJvcGVydGllcyBuZWVkIHVuaXF1ZSBuYW1lcyBzbyB3ZSBjYW4gbGV0IFVnbGlmeSBtYW5nbGUgdGhlIG5hbWUuXG4gICAgdmFyIHQgPSB7fTsgLy8gdW5zaXplZCBmb3JtYXRzXG5cbiAgICB0W0FMUEhBXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IEFMUEhBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxLCAyLCAyLCA0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVRdXG4gICAgfTtcbiAgICB0W0xVTUlOQU5DRV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBMVU1JTkFOQ0UsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEsIDIsIDIsIDRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVF1cbiAgICB9O1xuICAgIHRbTFVNSU5BTkNFX0FMUEhBXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IExVTUlOQU5DRV9BTFBIQSxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMiwgNCwgNCwgOF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURSwgSEFMRl9GTE9BVCwgSEFMRl9GTE9BVF9PRVMsIEZMT0FUXVxuICAgIH07XG4gICAgdFtSR0JdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFszLCA2LCA2LCAxMiwgMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURSwgSEFMRl9GTE9BVCwgSEFMRl9GTE9BVF9PRVMsIEZMT0FULCBVTlNJR05FRF9TSE9SVF81XzZfNV1cbiAgICB9O1xuICAgIHRbUkdCQV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0LCA4LCA4LCAxNiwgMiwgMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURSwgSEFMRl9GTE9BVCwgSEFMRl9GTE9BVF9PRVMsIEZMT0FULCBVTlNJR05FRF9TSE9SVF80XzRfNF80LCBVTlNJR05FRF9TSE9SVF81XzVfNV8xXVxuICAgIH07XG4gICAgdFtERVBUSF9DT01QT05FTlRdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogREVQVEhfQ09NUE9ORU5ULFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMiwgNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5ULCBVTlNJR05FRF9TSE9SVF1cbiAgICB9OyAvLyBzaXplZCBmb3JtYXRzXG5cbiAgICB0W1I4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMV0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbUjhfU05PUk1dID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVELFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMV0sXG4gICAgICB0eXBlOiBbQllURV1cbiAgICB9O1xuICAgIHRbUjE2Rl0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRUQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0LCAyXSxcbiAgICAgIHR5cGU6IFtGTE9BVCwgSEFMRl9GTE9BVF1cbiAgICB9O1xuICAgIHRbUjMyRl0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRUQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbRkxPQVRdXG4gICAgfTtcbiAgICB0W1I4VUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxXSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFXVxuICAgIH07XG4gICAgdFtSOEldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxXSxcbiAgICAgIHR5cGU6IFtCWVRFXVxuICAgIH07XG4gICAgdFtSMTZVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzJdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX1NIT1JUXVxuICAgIH07XG4gICAgdFtSMTZJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sXG4gICAgICB0eXBlOiBbU0hPUlRdXG4gICAgfTtcbiAgICB0W1IzMlVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXVxuICAgIH07XG4gICAgdFtSMzJJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbSU5UXVxuICAgIH07XG4gICAgdFtSRzhdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkcsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzJdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1JHOF9TTk9STV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRyxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzJdLFxuICAgICAgdHlwZTogW0JZVEVdXG4gICAgfTtcbiAgICB0W1JHMTZGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbOCwgNF0sXG4gICAgICB0eXBlOiBbRkxPQVQsIEhBTEZfRkxPQVRdXG4gICAgfTtcbiAgICB0W1JHMzJGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzhdLFxuICAgICAgdHlwZTogW0ZMT0FUXVxuICAgIH07XG4gICAgdFtSRzhVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbUkc4SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sXG4gICAgICB0eXBlOiBbQllURV1cbiAgICB9O1xuICAgIHRbUkcxNlVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9TSE9SVF1cbiAgICB9O1xuICAgIHRbUkcxNkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1NIT1JUXVxuICAgIH07XG4gICAgdFtSRzMyVUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzhdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF1cbiAgICB9O1xuICAgIHRbUkczMkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzhdLFxuICAgICAgdHlwZTogW0lOVF1cbiAgICB9O1xuICAgIHRbUkdCOF0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0IsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzNdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1NSR0I4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzNdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1JHQjU2NV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0IsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzMsIDJdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUsIFVOU0lHTkVEX1NIT1JUXzVfNl81XVxuICAgIH07XG4gICAgdFtSR0I4X1NOT1JNXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzNdLFxuICAgICAgdHlwZTogW0JZVEVdXG4gICAgfTtcbiAgICB0W1IxMUZfRzExRl9CMTBGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEyLCA2LCA0XSxcbiAgICAgIHR5cGU6IFtGTE9BVCwgSEFMRl9GTE9BVCwgVU5TSUdORURfSU5UXzEwRl8xMUZfMTFGX1JFVl1cbiAgICB9O1xuICAgIHRbUkdCOV9FNV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0IsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxMiwgNiwgNF0sXG4gICAgICB0eXBlOiBbRkxPQVQsIEhBTEZfRkxPQVQsIFVOU0lHTkVEX0lOVF81XzlfOV85X1JFVl1cbiAgICB9O1xuICAgIHRbUkdCMTZGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEyLCA2XSxcbiAgICAgIHR5cGU6IFtGTE9BVCwgSEFMRl9GTE9BVF1cbiAgICB9O1xuICAgIHRbUkdCMzJGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxMl0sXG4gICAgICB0eXBlOiBbRkxPQVRdXG4gICAgfTtcbiAgICB0W1JHQjhVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFszXSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFXVxuICAgIH07XG4gICAgdFtSR0I4SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFszXSxcbiAgICAgIHR5cGU6IFtCWVRFXVxuICAgIH07XG4gICAgdFtSR0IxNlVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQl9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzZdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX1NIT1JUXVxuICAgIH07XG4gICAgdFtSR0IxNkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNl0sXG4gICAgICB0eXBlOiBbU0hPUlRdXG4gICAgfTtcbiAgICB0W1JHQjMyVUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTJdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF1cbiAgICB9O1xuICAgIHRbUkdCMzJJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQl9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEyXSxcbiAgICAgIHR5cGU6IFtJTlRdXG4gICAgfTtcbiAgICB0W1JHQkE4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1NSR0I4X0FMUEhBOF0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFXVxuICAgIH07XG4gICAgdFtSR0JBOF9TTk9STV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbQllURV1cbiAgICB9O1xuICAgIHRbUkdCNV9BMV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0LCAyLCA0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBVTlNJR05FRF9TSE9SVF81XzVfNV8xLCBVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVZdXG4gICAgfTtcbiAgICB0W1JHQkE0XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzQsIDJdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUsIFVOU0lHTkVEX1NIT1JUXzRfNF80XzRdXG4gICAgfTtcbiAgICB0W1JHQjEwX0EyXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVl1cbiAgICB9O1xuICAgIHRbUkdCQTE2Rl0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTYsIDhdLFxuICAgICAgdHlwZTogW0ZMT0FULCBIQUxGX0ZMT0FUXVxuICAgIH07XG4gICAgdFtSR0JBMzJGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTZdLFxuICAgICAgdHlwZTogW0ZMT0FUXVxuICAgIH07XG4gICAgdFtSR0JBOFVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1JHQkE4SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtCWVRFXVxuICAgIH07XG4gICAgdFtSR0IxMF9BMlVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVl1cbiAgICB9O1xuICAgIHRbUkdCQTE2VUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbOF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfU0hPUlRdXG4gICAgfTtcbiAgICB0W1JHQkExNkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbOF0sXG4gICAgICB0eXBlOiBbU0hPUlRdXG4gICAgfTtcbiAgICB0W1JHQkEzMkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTZdLFxuICAgICAgdHlwZTogW0lOVF1cbiAgICB9O1xuICAgIHRbUkdCQTMyVUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTZdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF1cbiAgICB9OyAvLyBTaXplZCBJbnRlcm5hbFxuXG4gICAgdFtERVBUSF9DT01QT05FTlQxNl0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBERVBUSF9DT01QT05FTlQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsyLCA0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9TSE9SVCwgVU5TSUdORURfSU5UXVxuICAgIH07XG4gICAgdFtERVBUSF9DT01QT05FTlQyNF0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBERVBUSF9DT01QT05FTlQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlRdXG4gICAgfTtcbiAgICB0W0RFUFRIX0NPTVBPTkVOVDMyRl0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBERVBUSF9DT01QT05FTlQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtGTE9BVF1cbiAgICB9O1xuICAgIHRbREVQVEgyNF9TVEVOQ0lMOF0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBERVBUSF9TVEVOQ0lMLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXzI0XzhdXG4gICAgfTtcbiAgICB0W0RFUFRIMzJGX1NURU5DSUw4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IERFUFRIX1NURU5DSUwsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtGTE9BVF8zMl9VTlNJR05FRF9JTlRfMjRfOF9SRVZdXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyh0KS5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlcm5hbEZvcm1hdCkge1xuICAgICAgdmFyIGluZm8gPSB0W2ludGVybmFsRm9ybWF0XTtcbiAgICAgIGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwID0ge307XG4gICAgICBpbmZvLmJ5dGVzUGVyRWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChieXRlc1BlckVsZW1lbnQsIG5keCkge1xuICAgICAgICB2YXIgdHlwZSA9IGluZm8udHlwZVtuZHhdO1xuICAgICAgICBpbmZvLmJ5dGVzUGVyRWxlbWVudE1hcFt0eXBlXSA9IGJ5dGVzUGVyRWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNfdGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyA9IHQ7XG4gIH1cblxuICByZXR1cm4gc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvW2ludGVybmFsRm9ybWF0XTtcbn1cbi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIGJ5dGVzIHBlciBlbGVtZW50IGZvciBhIGdpdmVuIGludGVybmFsRm9ybWF0IC8gdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsRm9ybWF0IFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgdHlwZSBwYXJhbWV0ZXIgZm9yIHRleEltYWdlMkQgZXRjLi5cbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIG51bWJlciBvZiBieXRlcyBwZXIgZWxlbWVudCBmb3IgdGhlIGdpdmVuIGludGVybmFsRm9ybWF0LCB0eXBlIGNvbWJvXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEJ5dGVzUGVyRWxlbWVudEZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0LCB0eXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0VGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyhpbnRlcm5hbEZvcm1hdCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGludGVybmFsIGZvcm1hdFwiO1xuICB9XG5cbiAgdmFyIGJ5dGVzUGVyRWxlbWVudCA9IGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwW3R5cGVdO1xuXG4gIGlmIChieXRlc1BlckVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IFwidW5rbm93biBpbnRlcm5hbCBmb3JtYXRcIjtcbiAgfVxuXG4gIHJldHVybiBieXRlc1BlckVsZW1lbnQ7XG59XG4vKipcbiAqIEluZm8gcmVsYXRlZCB0byBhIHNwZWNpZmljIHRleHR1cmUgaW50ZXJuYWxGb3JtYXQgYXMgcmV0dXJuZWRcbiAqIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsL3RleHR1cmVzLmdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdH0uXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVGV4dHVyZUZvcm1hdEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmb3JtYXQgRm9ybWF0IHRvIHBhc3MgdG8gdGV4SW1hZ2UyRCBhbmQgcmVsYXRlZCBmdW5jdGlvbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlIFR5cGUgdG8gcGFzcyB0byB0ZXhJbWFnZTJEIGFuZCByZWxhdGVkIGZ1bmN0aW9uc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuLyoqXG4gKiBHZXRzIHRoZSBmb3JtYXQgYW5kIHR5cGUgZm9yIGEgZ2l2ZW4gaW50ZXJuYWxGb3JtYXRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxGb3JtYXQgVGhlIGludGVybmFsIGZvcm1hdFxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdGV4dHVyZXMuVGV4dHVyZUZvcm1hdEluZm99IHRoZSBjb3JyZXNwb25kaW5nIGZvcm1hdCBhbmQgdHlwZSxcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KSB7XG4gIHZhciBpbmZvID0gZ2V0VGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyhpbnRlcm5hbEZvcm1hdCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGludGVybmFsIGZvcm1hdFwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IGluZm8udGV4dHVyZUZvcm1hdCxcbiAgICB0eXBlOiBpbmZvLnR5cGVbMF1cbiAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHZhbHVlIGlzIHBvd2VyIG9mIDJcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBudW1iZXIgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHRydWUgaWYgdmFsdWUgaXMgcG93ZXIgb2YgMlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzUG93ZXJPZjIodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmIHZhbHVlIC0gMSkgPT09IDA7XG59XG4vKipcbiAqIEdldHMgd2hldGhlciBvciBub3Qgd2UgY2FuIGdlbmVyYXRlIG1pcHMgZm9yIHRoZSBnaXZlblxuICogaW50ZXJuYWwgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggVGhlIHdpZHRoIHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgVGhlIGhlaWdodCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxGb3JtYXQgVGhlIGludGVybmFsRm9ybWF0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgd2UgY2FuIGdlbmVyYXRlIG1pcHNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gY2FuR2VuZXJhdGVNaXBtYXAoZ2wsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0KSB7XG4gIGlmICghdXRpbHMuaXNXZWJHTDIoZ2wpKSB7XG4gICAgcmV0dXJuIGlzUG93ZXJPZjIod2lkdGgpICYmIGlzUG93ZXJPZjIoaGVpZ2h0KTtcbiAgfVxuXG4gIHZhciBpbmZvID0gZ2V0VGV4dHVyZUludGVybmFsRm9ybWF0SW5mbyhpbnRlcm5hbEZvcm1hdCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGludGVybmFsIGZvcm1hdFwiO1xuICB9XG5cbiAgcmV0dXJuIGluZm8uY29sb3JSZW5kZXJhYmxlICYmIGluZm8udGV4dHVyZUZpbHRlcmFibGU7XG59XG4vKipcbiAqIEdldHMgd2hldGhlciBvciBub3Qgd2UgY2FuIGdlbmVyYXRlIG1pcHMgZm9yIHRoZSBnaXZlbiBmb3JtYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbEZvcm1hdCBUaGUgaW50ZXJuYWxGb3JtYXQgcGFyYW1ldGVyIGZyb20gdGV4SW1hZ2UyRCBldGMuLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB3ZSBjYW4gZ2VuZXJhdGUgbWlwc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjYW5GaWx0ZXIoaW50ZXJuYWxGb3JtYXQpIHtcbiAgdmFyIGluZm8gPSBnZXRUZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKGludGVybmFsRm9ybWF0KTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cblxuICByZXR1cm4gaW5mby50ZXh0dXJlRmlsdGVyYWJsZTtcbn1cbi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIGEgZ2l2ZW4gaW1hZ2UgZm9ybWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IGZvcm1hdCB0aGUgZm9ybWF0LlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIHRoZSBmb3JtYXQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE51bUNvbXBvbmVudHNGb3JGb3JtYXQoZm9ybWF0KSB7XG4gIHZhciBpbmZvID0gZm9ybWF0SW5mb1tmb3JtYXRdO1xuXG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBmb3JtYXQ6IFwiICsgZm9ybWF0O1xuICB9XG5cbiAgcmV0dXJuIGluZm8ubnVtQ29sb3JDb21wb25lbnRzO1xufVxuLyoqXG4gKiBHZXRzIHRoZSB0ZXh0dXJlIHR5cGUgZm9yIGEgZ2l2ZW4gYXJyYXkgdHlwZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBnbCB0ZXh0dXJlIHR5cGVcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUZXh0dXJlVHlwZUZvckFycmF5VHlwZShnbCwgc3JjLCBkZWZhdWx0VHlwZSkge1xuICBpZiAoaXNBcnJheUJ1ZmZlcihzcmMpKSB7XG4gICAgcmV0dXJuIHR5cGVkQXJyYXlzLmdldEdMVHlwZUZvclR5cGVkQXJyYXkoc3JjKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0VHlwZSB8fCBVTlNJR05FRF9CWVRFO1xufVxuXG5mdW5jdGlvbiBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgd2lkdGgsIGhlaWdodCwgbnVtRWxlbWVudHMpIHtcbiAgaWYgKG51bUVsZW1lbnRzICUgMSAhPT0gMCkge1xuICAgIHRocm93IFwiY2FuJ3QgZ3Vlc3MgZGltZW5zaW9uc1wiO1xuICB9XG5cbiAgaWYgKCF3aWR0aCAmJiAhaGVpZ2h0KSB7XG4gICAgdmFyIHNpemUgPSBNYXRoLnNxcnQobnVtRWxlbWVudHMgLyAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQID8gNiA6IDEpKTtcblxuICAgIGlmIChzaXplICUgMSA9PT0gMCkge1xuICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgaGVpZ2h0ID0gc2l6ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2lkdGggPSBudW1FbGVtZW50cztcbiAgICAgIGhlaWdodCA9IDE7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBudW1FbGVtZW50cyAvIHdpZHRoO1xuXG4gICAgaWYgKGhlaWdodCAlIDEpIHtcbiAgICAgIHRocm93IFwiY2FuJ3QgZ3Vlc3MgZGltZW5zaW9uc1wiO1xuICAgIH1cbiAgfSBlbHNlIGlmICghd2lkdGgpIHtcbiAgICB3aWR0aCA9IG51bUVsZW1lbnRzIC8gaGVpZ2h0O1xuXG4gICAgaWYgKHdpZHRoICUgMSkge1xuICAgICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cbi8qKlxuICogU2V0cyB0aGUgZGVmYXVsdCB0ZXh0dXJlIGNvbG9yLlxuICpcbiAqIFRoZSBkZWZhdWx0IHRleHR1cmUgY29sb3IgaXMgdXNlZCB3aGVuIGxvYWRpbmcgdGV4dHVyZXMgZnJvbVxuICogdXJscy4gQmVjYXVzZSB0aGUgVVJMIHdpbGwgYmUgbG9hZGVkIGFzeW5jIHdlJ2QgbGlrZSB0byBiZVxuICogYWJsZSB0byB1c2UgdGhlIHRleHR1cmUgaW1tZWRpYXRlbHkuIEJ5IHB1dHRpbmcgYSAxeDEgcGl4ZWxcbiAqIGNvbG9yIGluIHRoZSB0ZXh0dXJlIHdlIGNhbiBzdGFydCB1c2luZyB0aGUgdGV4dHVyZSBiZWZvcmVcbiAqIHRoZSBVUkwgaGFzIGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcltdfSBjb2xvciBBcnJheSBvZiA0IHZhbHVlcyBpbiB0aGUgcmFuZ2UgMCB0byAxXG4gKiBAZGVwcmVjYXRlZCBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldERlZmF1bHRzfVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBzZXREZWZhdWx0VGV4dHVyZUNvbG9yKGNvbG9yKSB7XG4gIGRlZmF1bHRzLnRleHR1cmVDb2xvciA9IG5ldyBVaW50OEFycmF5KFtjb2xvclswXSAqIDI1NSwgY29sb3JbMV0gKiAyNTUsIGNvbG9yWzJdICogMjU1LCBjb2xvclszXSAqIDI1NV0pO1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICBoZWxwZXIuY29weUV4aXN0aW5nUHJvcGVydGllcyhuZXdEZWZhdWx0cywgZGVmYXVsdHMpO1xuXG4gIGlmIChuZXdEZWZhdWx0cy50ZXh0dXJlQ29sb3IpIHtcbiAgICBzZXREZWZhdWx0VGV4dHVyZUNvbG9yKG5ld0RlZmF1bHRzLnRleHR1cmVDb2xvcik7XG4gIH1cbn1cbi8qKlxuICogQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgc291cmNlIGZvciBhIHRleHR1cmUuXG4gKiBAY2FsbGJhY2sgVGV4dHVyZUZ1bmNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyB0aGUgdGV4dHVyZSBvcHRpb25zXG4gKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGFueSBvZiB0aGUgdGhpbmdzIGRvY3VtZW50ZWQgZm9yIGBzcmNgIGZvciB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBUZXh0dXJlIG9wdGlvbnMgcGFzc2VkIHRvIG1vc3QgdGV4dHVyZSBmdW5jdGlvbnMuIEVhY2ggZnVuY3Rpb24gd2lsbCB1c2Ugd2hhdGV2ZXIgb3B0aW9uc1xuICogYXJlIGFwcHJvcHJpYXRlIGZvciBpdHMgbmVlZHMuIFRoaXMgbGV0cyB5b3UgcGFzcyB0aGUgc2FtZSBvcHRpb25zIHRvIGFsbCBmdW5jdGlvbnMuXG4gKlxuICogTm90ZTogQSBgVGV4SW1hZ2VTb3VyY2VgIGlzIGRlZmluZWQgaW4gdGhlIFdlYkdMIHNwZWMgYXMgYSBgSFRNTEltYWdlRWxlbWVudGAsIGBIVE1MVmlkZW9FbGVtZW50YCxcbiAqIGBIVE1MQ2FudmFzRWxlbWVudGAsIGBJbWFnZUJpdG1hcGAsIG9yIGBJbWFnZURhdGFgLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRleHR1cmVPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3RhcmdldF0gdGhlIHR5cGUgb2YgdGV4dHVyZSBgZ2wuVEVYVFVSRV8yRGAgb3IgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgLiBEZWZhdWx0cyB0byBgZ2wuVEVYVFVSRV8yRGAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2xldmVsXSB0aGUgbWlwIGxldmVsIHRvIGFmZmVjdC4gRGVmYXVsdHMgdG8gMC4gTm90ZSwgaWYgc2V0IGF1dG8gd2lsbCBiZSBjb25zaWRlcmVkIGZhbHNlIHVubGVzcyBleHBsaWNpdGx5IHNldCB0byB0cnVlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3aWR0aF0gdGhlIHdpZHRoIG9mIHRoZSB0ZXh0dXJlLiBPbmx5IHVzZWQgaWYgc3JjIGlzIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5IG9yIG51bGwuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2hlaWdodF0gdGhlIGhlaWdodCBvZiBhIHRleHR1cmUuIE9ubHkgdXNlZCBpZiBzcmMgaXMgYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgb3IgbnVsbC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGVwdGhdIHRoZSBkZXB0aCBvZiBhIHRleHR1cmUuIE9ubHkgdXNlZCBpZiBzcmMgaXMgYW4gYXJyYXkgb3IgdHlwZSBhcnJheSBvciBudWxsIGFuZCB0YXJnZXQgaXMgYFRFWFRVUkVfM0RgIC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluXSB0aGUgbWluIGZpbHRlciBzZXR0aW5nIChlZy4gYGdsLkxJTkVBUmApLiBEZWZhdWx0cyB0byBgZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSYFxuICogICAgIG9yIGlmIHRleHR1cmUgaXMgbm90IGEgcG93ZXIgb2YgMiBvbiBib3RoIGRpbWVuc2lvbnMgdGhlbiBkZWZhdWx0cyB0byBgZ2wuTElORUFSYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWFnXSB0aGUgbWFnIGZpbHRlciBzZXR0aW5nIChlZy4gYGdsLkxJTkVBUmApLiBEZWZhdWx0cyB0byBgZ2wuTElORUFSYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5NYWddIGJvdGggdGhlIG1pbiBhbmQgbWFnIGZpbHRlciBzZXR0aW5ncy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaW50ZXJuYWxGb3JtYXRdIGludGVybmFsIGZvcm1hdCBmb3IgdGV4dHVyZS4gRGVmYXVsdHMgdG8gYGdsLlJHQkFgXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Zvcm1hdF0gZm9ybWF0IGZvciB0ZXh0dXJlLiBEZWZhdWx0cyB0byBgZ2wuUkdCQWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3R5cGVdIHR5cGUgZm9yIHRleHR1cmUuIERlZmF1bHRzIHRvIGBnbC5VTlNJR05FRF9CWVRFYCB1bmxlc3MgYHNyY2AgaXMgQXJyYXlCdWZmZXJWaWV3LiBJZiBgc3JjYFxuICogICAgIGlzIEFycmF5QnVmZmVyVmlldyBkZWZhdWx0cyB0byB0eXBlIHRoYXQgbWF0Y2hlcyBBcnJheUJ1ZmZlclZpZXcgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd3JhcF0gVGV4dHVyZSB3cmFwcGluZyBmb3IgYm90aCBTIGFuZCBUIChhbmQgUiBpZiBURVhUVVJFXzNEIG9yIFdlYkdMU2FtcGxlcikuIERlZmF1bHRzIHRvIGBnbC5SRVBFQVRgIGZvciAyRCB1bmxlc3Mgc3JjIGlzIFdlYkdMMSBhbmQgc3JjIG5vdCBucG90IGFuZCBgZ2wuQ0xBTVBfVE9fRURHRWAgZm9yIGN1YmVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd3JhcFNdIFRleHR1cmUgd3JhcHBpbmcgZm9yIFMuIERlZmF1bHRzIHRvIGBnbC5SRVBFQVRgIGFuZCBgZ2wuQ0xBTVBfVE9fRURHRWAgZm9yIGN1YmUuIElmIHNldCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgYHdyYXBgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3cmFwVF0gVGV4dHVyZSB3cmFwcGluZyBmb3IgVC4gRGVmYXVsdHMgdG8gYGdsLlJFUEVBVGAgYW5kIGBnbC5DTEFNUF9UT19FREdFYCBmb3IgY3ViZS4gSWYgc2V0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciBgd3JhcGAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dyYXBSXSBUZXh0dXJlIHdyYXBwaW5nIGZvciBSLiBEZWZhdWx0cyB0byBgZ2wuUkVQRUFUYCBhbmQgYGdsLkNMQU1QX1RPX0VER0VgIGZvciBjdWJlLiBJZiBzZXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGB3cmFwYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWluTG9kXSBURVhUVVJFX01JTl9MT0Qgc2V0dGluZ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFttYXhMb2RdIFRFWFRVUkVfTUFYX0xPRCBzZXR0aW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Jhc2VMZXZlbF0gVEVYVFVSRV9CQVNFX0xFVkVMIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbWF4TGV2ZWxdIFRFWFRVUkVfTUFYX0xFVkVMIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdW5wYWNrQWxpZ25tZW50XSBUaGUgYGdsLlVOUEFDS19BTElHTk1FTlRgIHVzZWQgd2hlbiB1cGxvYWRpbmcgYW4gYXJyYXkuIERlZmF1bHRzIHRvIDEuXG4gKiBAcHJvcGVydHkge251bWJlcltdfEFycmF5QnVmZmVyVmlld30gW2NvbG9yXSBDb2xvciB0byBpbml0aWFsaXplIHRoaXMgdGV4dHVyZSB3aXRoIGlmIGxvYWRpbmcgYW4gaW1hZ2UgYXN5bmNocm9ub3VzbHkuXG4gKiAgICAgVGhlIGRlZmF1bHQgdXNlIGEgYmx1ZSAxeDEgcGl4ZWwgdGV4dHVyZS4gWW91IGNhbiBzZXQgYW5vdGhlciBkZWZhdWx0IGJ5IGNhbGxpbmcgYHR3Z2wuc2V0RGVmYXVsdHNgXG4gKiAgICAgb3IgeW91IGNhbiBzZXQgYW4gaW5kaXZpZHVhbCB0ZXh0dXJlJ3MgaW5pdGlhbCBjb2xvciBieSBzZXR0aW5nIHRoaXMgcHJvcGVydHkuIEV4YW1wbGU6IGBbMSwgLjUsIC41LCAxXWAgPSBwaW5rXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ByZW11bHRpcGx5QWxwaGFdIFdoZXRoZXIgb3Igbm90IHRvIHByZW11bHRpcGx5IGFscGhhLiBEZWZhdWx0cyB0byB3aGF0ZXZlciB0aGUgY3VycmVudCBzZXR0aW5nIGlzLlxuICogICAgIFRoaXMgbGV0cyB5b3Ugc2V0IGl0IG9uY2UgYmVmb3JlIGNhbGxpbmcgYHR3Z2wuY3JlYXRlVGV4dHVyZWAgb3IgYHR3Z2wuY3JlYXRlVGV4dHVyZXNgIGFuZCBvbmx5IG92ZXJyaWRlXG4gKiAgICAgdGhlIGN1cnJlbnQgc2V0dGluZyBmb3Igc3BlY2lmaWMgdGV4dHVyZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2ZsaXBZXSBXaGV0aGVyIG9yIG5vdCB0byBmbGlwIHRoZSB0ZXh0dXJlIHZlcnRpY2FsbHkgb24gdXBsb2FkLiBEZWZhdWx0cyB0byB3aGF0ZXZlciB0aGUgY3VycmVudCBzZXR0aW5nIGlzLlxuICogICAgIFRoaXMgbGV0cyB5b3Ugc2V0IGl0IG9uY2UgYmVmb3JlIGNhbGxpbmcgYHR3Z2wuY3JlYXRlVGV4dHVyZWAgb3IgYHR3Z2wuY3JlYXRlVGV4dHVyZXNgIGFuZCBvbmx5IG92ZXJyaWRlXG4gKiAgICAgdGhlIGN1cnJlbnQgc2V0dGluZyBmb3Igc3BlY2lmaWMgdGV4dHVyZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2NvbG9yc3BhY2VDb252ZXJzaW9uXSBXaGV0aGVyIG9yIG5vdCB0byBsZXQgdGhlIGJyb3dzZXIgZG8gY29sb3JzcGFjZSBjb252ZXJzaW9uIG9mIHRoZSB0ZXh0dXJlIG9uIHVwbG9hZC4gRGVmYXVsdHMgdG8gd2hhdGV2ZXIgdGhlIGN1cnJlbnQgc2V0dGluZyBpcy5cbiAqICAgICBUaGlzIGxldHMgeW91IHNldCBpdCBvbmNlIGJlZm9yZSBjYWxsaW5nIGB0d2dsLmNyZWF0ZVRleHR1cmVgIG9yIGB0d2dsLmNyZWF0ZVRleHR1cmVzYCBhbmQgb25seSBvdmVycmlkZVxuICogICAgIHRoZSBjdXJyZW50IHNldHRpbmcgZm9yIHNwZWNpZmljIHRleHR1cmVzLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbYXV0b10gSWYgYHVuZGVmaW5lZGAgb3IgYHRydWVgLCBpbiBXZWJHTDEsIHRleHR1cmUgZmlsdGVyaW5nIGlzIHNldCBhdXRvbWF0aWNhbGx5IGZvciBub24tcG93ZXIgb2YgMiBpbWFnZXMgYW5kXG4gKiAgICBtaXBzIGFyZSBnZW5lcmF0ZWQgZm9yIHBvd2VyIG9mIDIgaW1hZ2VzLiBJbiBXZWJHTDIgbWlwcyBhcmUgZ2VuZXJhdGVkIGlmIHRoZXkgY2FuIGJlLiBOb3RlOiBpZiBgbGV2ZWxgIGlzIHNldCBhYm92ZVxuICogICAgdGhlbiB0aGVuIGBhdXRvYCBpcyBhc3N1bWVkIHRvIGJlIGBmYWxzZWAgdW5sZXNzIGV4cGxpY2l0eSBzZXQgdG8gYHRydWVgLlxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW2N1YmVGYWNlT3JkZXJdIFRoZSBvcmRlciB0aGF0IGN1YmUgZmFjZXMgYXJlIHB1bGxlZCBvdXQgb2YgYW4gaW1nIG9yIHNldCBvZiBpbWFnZXMuIFRoZSBkZWZhdWx0IGlzXG4gKlxuICogICAgIFtnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCxcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLFxuICogICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWixcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aXVxuICpcbiAqIEBwcm9wZXJ0eSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xUZXhJbWFnZVNvdXJjZXxUZXhJbWFnZVNvdXJjZVtdfHN0cmluZ3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5UZXh0dXJlRnVuYyl9IFtzcmNdIHNvdXJjZSBmb3IgdGV4dHVyZVxuICpcbiAqICAgIElmIGBzdHJpbmdgIHRoZW4gaXQncyBhc3N1bWVkIHRvIGJlIGEgVVJMIHRvIGFuIGltYWdlLiBUaGUgaW1hZ2Ugd2lsbCBiZSBkb3dubG9hZGVkIGFzeW5jLiBBIHVzYWJsZVxuICogICAgMXgxIHBpeGVsIHRleHR1cmUgd2lsbCBiZSByZXR1cm5lZCBpbW1lZGlhdGVseS4gVGhlIHRleHR1cmUgd2lsbCBiZSB1cGRhdGVkIG9uY2UgdGhlIGltYWdlIGhhcyBkb3dubG9hZGVkLlxuICogICAgSWYgYHRhcmdldGAgaXMgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHdpbGwgYXR0ZW1wdCB0byBkaXZpZGUgaW1hZ2UgaW50byA2IHNxdWFyZSBwaWVjZXMuIDF4NiwgNngxLCAzeDIsIDJ4My5cbiAqICAgIFRoZSBwaWVjZXMgd2lsbCBiZSB1cGxvYWRlZCBpbiBgY3ViZUZhY2VPcmRlcmBcbiAqXG4gKiAgICBJZiBgc3RyaW5nW11gIG9yIGBUZXhJbWFnZVNvdXJjZVtdYCBhbmQgdGFyZ2V0IGlzIGBnbC5URVhUVVJFX0NVQkVfTUFQYCB0aGVuIGl0IG11c3QgaGF2ZSA2IGVudHJpZXMsIG9uZSBmb3IgZWFjaCBmYWNlIG9mIGEgY3ViZSBtYXAuXG4gKlxuICogICAgSWYgYHN0cmluZ1tdYCBvciBgVGV4SW1hZ2VTb3VyY2VbXWAgYW5kIHRhcmdldCBpcyBgZ2wuVEVYVFVSRV8yRF9BUlJBWWAgdGhlbiBlYWNoIGVudHJ5IGlzIGEgc2xpY2Ugb2YgdGhlIGEgMmQgYXJyYXkgdGV4dHVyZVxuICogICAgYW5kIHdpbGwgYmUgc2NhbGVkIHRvIHRoZSBzcGVjaWZpZWQgd2lkdGggYW5kIGhlaWdodCBPUiB0byB0aGUgc2l6ZSBvZiB0aGUgZmlyc3QgaW1hZ2UgdGhhdCBsb2Fkcy5cbiAqXG4gKiAgICBJZiBgVGV4SW1hZ2VTb3VyY2VgIHRoZW4gaXQgd2lsIGJlIHVzZWQgaW1tZWRpYXRlbHkgdG8gY3JlYXRlIHRoZSBjb250ZW50cyBvZiB0aGUgdGV4dHVyZS4gRXhhbXBsZXMgYEhUTUxJbWFnZUVsZW1lbnRgLFxuICogICAgYEhUTUxDYW52YXNFbGVtZW50YCwgYEhUTUxWaWRlb0VsZW1lbnRgLlxuICpcbiAqICAgIElmIGBudW1iZXJbXWAgb3IgYEFycmF5QnVmZmVyVmlld2AgaXQncyBhc3N1bWVkIHRvIGJlIGRhdGEgZm9yIGEgdGV4dHVyZS4gSWYgYHdpZHRoYCBvciBgaGVpZ2h0YCBpc1xuICogICAgbm90IHNwZWNpZmllZCBpdCBpcyBndWVzc2VkIGFzIGZvbGxvd3MuIEZpcnN0IHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaXMgY29tcHV0ZWQgYnkgYHNyYy5sZW5ndGggLyBudW1Db21wb25lbnRzYFxuICogICAgd2hlcmUgYG51bUNvbXBvbmVudHNgIGlzIGRlcml2ZWQgZnJvbSBgZm9ybWF0YC4gSWYgYHRhcmdldGAgaXMgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHRoZW4gYG51bUVsZW1lbnRzYCBpcyBkaXZpZGVkXG4gKiAgICBieSA2LiBUaGVuXG4gKlxuICogICAgKiAgIElmIG5laXRoZXIgYHdpZHRoYCBub3IgYGhlaWdodGAgYXJlIHNwZWNpZmllZCBhbmQgYHNxcnQobnVtRWxlbWVudHMpYCBpcyBhbiBpbnRlZ2VyIHRoZW4gd2lkdGggYW5kIGhlaWdodFxuICogICAgICAgIGFyZSBzZXQgdG8gYHNxcnQobnVtRWxlbWVudHMpYC4gT3RoZXJ3aXNlIGB3aWR0aCA9IG51bUVsZW1lbnRzYCBhbmQgYGhlaWdodCA9IDFgLlxuICpcbiAqICAgICogICBJZiBvbmx5IG9uZSBvZiBgd2lkdGhgIG9yIGBoZWlnaHRgIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBvdGhlciBlcXVhbHMgYG51bUVsZW1lbnRzIC8gc3BlY2lmaWVkRGltZW5zaW9uYC5cbiAqXG4gKiBJZiBgbnVtYmVyW11gIHdpbGwgYmUgY29udmVydGVkIHRvIGB0eXBlYC5cbiAqXG4gKiBJZiBgc3JjYCBpcyBhIGZ1bmN0aW9uIGl0IHdpbGwgYmUgY2FsbGVkIHdpdGggYSBgV2ViR0xSZW5kZXJpbmdDb250ZXh0YCBhbmQgdGhlc2Ugb3B0aW9ucy5cbiAqIFdoYXRldmVyIGl0IHJldHVybnMgaXMgc3ViamVjdCB0byB0aGVzZSBydWxlcy4gU28gaXQgY2FuIHJldHVybiBhIHN0cmluZyB1cmwsIGFuIGBIVE1MRWxlbWVudGBcbiAqIGFuIGFycmF5IGV0Yy4uLlxuICpcbiAqIElmIGBzcmNgIGlzIHVuZGVmaW5lZCB0aGVuIGFuIGVtcHR5IHRleHR1cmUgd2lsbCBiZSBjcmVhdGVkIG9mIHNpemUgYHdpZHRoYCBieSBgaGVpZ2h0YC5cbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2Nyb3NzT3JpZ2luXSBXaGF0IHRvIHNldCB0aGUgY3Jvc3NPcmlnaW4gcHJvcGVydHkgb2YgaW1hZ2VzIHdoZW4gdGhleSBhcmUgZG93bmxvYWRlZC5cbiAqICAgIGRlZmF1bHQ6IHVuZGVmaW5lZC4gQWxzbyBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLnNldERlZmF1bHRzfS5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFNldHMgYW55IHBhY2tpbmcgc3RhdGUgdGhhdCB3aWxsIGJlIHNldCBiYXNlZCBvbiB0aGUgb3B0aW9ucy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gc2V0UGFja1N0YXRlKGdsLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmNvbG9yc3BhY2VDb252ZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMLCBvcHRpb25zLmNvbG9yc3BhY2VDb252ZXJzaW9uKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnByZW11bHRpcGx5QWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCwgb3B0aW9ucy5wcmVtdWx0aXBseUFscGhhKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmZsaXBZICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfRkxJUF9ZX1dFQkdMLCBvcHRpb25zLmZsaXBZKTtcbiAgfVxufVxuLyoqXG4gKiBTZXQgc2tpcCBzdGF0ZSB0byBkZWZhdWx0c1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRTa2lwU3RhdGVUb0RlZmF1bHQoZ2wpIHtcbiAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX0FMSUdOTUVOVCwgNCk7XG5cbiAgaWYgKHV0aWxzLmlzV2ViR0wyKGdsKSkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19ST1dfTEVOR1RILCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfSU1BR0VfSEVJR0hULCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfU0tJUF9QSVhFTFMsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX1JPV1MsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX0lNQUdFUywgMCk7XG4gIH1cbn1cbi8qKlxuICogU2V0cyB0aGUgcGFyYW1ldGVycyBvZiBhIHRleHR1cmUgb3Igc2FtcGxlclxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfFdlYkdMU2FtcGxlcn0gdGFyZ2V0IHRleHR1cmUgdGFyZ2V0IG9yIHNhbXBsZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKX0gcGFyYW1ldGVyaUZuIHRleFBhcmFtZXRlcmkgb3Igc2FtcGxlclBhcmFtZXRlcmkgZm5cbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRUZXh0dXJlU2FtcGxlclBhcmFtZXRlcnMoZ2wsIHRhcmdldCwgcGFyYW1ldGVyaUZuLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm1pbk1hZykge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgb3B0aW9ucy5taW5NYWcpO1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfTUFHX0ZJTFRFUiwgb3B0aW9ucy5taW5NYWcpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWluKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9NSU5fRklMVEVSLCBvcHRpb25zLm1pbik7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYWcpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BR19GSUxURVIsIG9wdGlvbnMubWFnKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndyYXApIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX1dSQVBfUywgb3B0aW9ucy53cmFwKTtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX1dSQVBfVCwgb3B0aW9ucy53cmFwKTtcblxuICAgIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QgfHwgaGVscGVyLmlzU2FtcGxlcihnbCwgdGFyZ2V0KSkge1xuICAgICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1IsIG9wdGlvbnMud3JhcCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMud3JhcFIpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX1dSQVBfUiwgb3B0aW9ucy53cmFwUik7XG4gIH1cblxuICBpZiAob3B0aW9ucy53cmFwUykge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfV1JBUF9TLCBvcHRpb25zLndyYXBTKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndyYXBUKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1QsIG9wdGlvbnMud3JhcFQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWluTG9kKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9NSU5fTE9ELCBvcHRpb25zLm1pbkxvZCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXhMb2QpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BWF9MT0QsIG9wdGlvbnMubWF4TG9kKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmJhc2VMZXZlbCkge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfQkFTRV9MRVZFTCwgb3B0aW9ucy5iYXNlTGV2ZWwpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF4TGV2ZWwpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01BWF9MRVZFTCwgb3B0aW9ucy5tYXhMZXZlbCk7XG4gIH1cbn1cbi8qKlxuICogU2V0cyB0aGUgdGV4dHVyZSBwYXJhbWV0ZXJzIG9mIGEgdGV4dHVyZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFRleHR1cmVQYXJhbWV0ZXJzKGdsLCB0ZXgsIG9wdGlvbnMpIHtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgc2V0VGV4dHVyZVNhbXBsZXJQYXJhbWV0ZXJzKGdsLCB0YXJnZXQsIGdsLnRleFBhcmFtZXRlcmksIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBTZXRzIHRoZSBzYW1wbGVyIHBhcmFtZXRlcnMgb2YgYSBzYW1wbGVyLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xTYW1wbGVyfSBzYW1wbGVyIHRoZSBXZWJHTFNhbXBsZXIgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFNhbXBsZXJQYXJhbWV0ZXJzKGdsLCBzYW1wbGVyLCBvcHRpb25zKSB7XG4gIHNldFRleHR1cmVTYW1wbGVyUGFyYW1ldGVycyhnbCwgc2FtcGxlciwgZ2wuc2FtcGxlclBhcmFtZXRlcmksIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHNhbXBsZXIgb2JqZWN0IGFuZCBzZXRzIHBhcmFtZXRlcnMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IHNhbXBsZXIgPSB0d2dsLmNyZWF0ZVNhbXBsZXIoZ2wsIHtcbiAqICAgICAgICBtaW5NYWc6IGdsLk5FQVJFU1QsICAgICAgICAgLy8gc2V0cyBib3RoIFRFWFRVUkVfTUlOX0ZJTFRFUiBhbmQgVEVYVFVSRV9NQUdfRklMVEVSXG4gKiAgICAgICAgd3JhcDogZ2wuQ0xBTVBfVE9fTkVBUkVTVCwgIC8vIHNldHMgYm90aCBURVhUVVJFX1dSQVBfUyBhbmQgVEVYVFVSRV9XUkFQX1QgYW5kIFRFWFRVUkVfV1JBUF9SXG4gKiAgICAgIH0pO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zPn0gb3B0aW9ucyBBIG9iamVjdCBvZiBUZXh0dXJlT3B0aW9ucyBvbmUgcGVyIHNhbXBsZXIuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZyxXZWJHTFNhbXBsZXI+fSB0aGUgY3JlYXRlZCBzYW1wbGVycyBieSBuYW1lXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU2FtcGxlcihnbCwgb3B0aW9ucykge1xuICB2YXIgc2FtcGxlciA9IGdsLmNyZWF0ZVNhbXBsZXIoKTtcbiAgc2V0U2FtcGxlclBhcmFtZXRlcnMoZ2wsIHNhbXBsZXIsIG9wdGlvbnMpO1xuICByZXR1cm4gc2FtcGxlcjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG11bHRpcGxlIHNhbXBsZXIgb2JqZWN0cyBhbmQgc2V0cyBwYXJhbWV0ZXJzIG9uIGVhY2guXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IHNhbXBsZXJzID0gdHdnbC5jcmVhdGVTYW1wbGVycyhnbCwge1xuICogICAgICAgIG5lYXJlc3Q6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICB9LFxuICogICAgICAgIG5lYXJlc3RDbGFtcFM6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICAgIHdyYXBTOiBnbC5DTEFNUF9UT19ORUFSRVNULFxuICogICAgICAgIH0sXG4gKiAgICAgICAgbGluZWFyOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLkxJTkVBUixcbiAqICAgICAgICB9LFxuICogICAgICAgIG5lYXJlc3RDbGFtcDoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgICAgd3JhcDogZ2wuQ0xBTVBfVE9fRURHRSxcbiAqICAgICAgICB9LFxuICogICAgICAgIGxpbmVhckNsYW1wOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLkxJTkVBUixcbiAqICAgICAgICAgIHdyYXA6IGdsLkNMQU1QX1RPX0VER0UsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBsaW5lYXJDbGFtcFQ6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTElORUFSLFxuICogICAgICAgICAgd3JhcFQ6IGdsLkNMQU1QX1RPX0VER0UsXG4gKiAgICAgICAgfSxcbiAqICAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0IG9uIHRoZSBzYW1wbGVyXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU2FtcGxlcnMoZ2wsIHNhbXBsZXJPcHRpb25zKSB7XG4gIHZhciBzYW1wbGVycyA9IHt9O1xuICBPYmplY3Qua2V5cyhzYW1wbGVyT3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHNhbXBsZXJzW25hbWVdID0gY3JlYXRlU2FtcGxlcihnbCwgc2FtcGxlck9wdGlvbnNbbmFtZV0pO1xuICB9KTtcbiAgcmV0dXJuIHNhbXBsZXJzO1xufVxuLyoqXG4gKiBNYWtlcyBhIDF4MSBwaXhlbFxuICogSWYgbm8gY29sb3IgaXMgcGFzc2VkIGluIHVzZXMgdGhlIGRlZmF1bHQgY29sb3Igd2hpY2ggY2FuIGJlIHNldCBieSBjYWxsaW5nIGBzZXREZWZhdWx0VGV4dHVyZUNvbG9yYC5cbiAqIEBwYXJhbSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlldyl9IFtjb2xvcl0gVGhlIGNvbG9yIHVzaW5nIDAtMSB2YWx1ZXNcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IFVuaXQ4QXJyYXkgd2l0aCBjb2xvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBtYWtlMVBpeGVsKGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3IgfHwgZGVmYXVsdHMudGV4dHVyZUNvbG9yO1xuXG4gIGlmIChpc0FycmF5QnVmZmVyKGNvbG9yKSkge1xuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShbY29sb3JbMF0gKiAyNTUsIGNvbG9yWzFdICogMjU1LCBjb2xvclsyXSAqIDI1NSwgY29sb3JbM10gKiAyNTVdKTtcbn1cbi8qKlxuICogU2V0cyBmaWx0ZXJpbmcgb3IgZ2VuZXJhdGVzIG1pcHMgZm9yIHRleHR1cmUgYmFzZWQgb24gd2lkdGggb3IgaGVpZ2h0XG4gKiBJZiB3aWR0aCBvciBoZWlnaHQgaXMgbm90IHBhc3NlZCBpbiB1c2VzIGBvcHRpb25zLndpZHRoYCBhbmQvL29yIGBvcHRpb25zLmhlaWdodGBcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSB3aWR0aCBvZiB0ZXh0dXJlXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gaGVpZ2h0IG9mIHRleHR1cmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW50ZXJuYWxGb3JtYXRdIFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKGdsLCB0ZXgsIG9wdGlvbnMsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICBpbnRlcm5hbEZvcm1hdCA9IGludGVybmFsRm9ybWF0IHx8IFJHQkE7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEO1xuICB3aWR0aCA9IHdpZHRoIHx8IG9wdGlvbnMud2lkdGg7XG4gIGhlaWdodCA9IGhlaWdodCB8fCBvcHRpb25zLmhlaWdodDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gIGlmIChjYW5HZW5lcmF0ZU1pcG1hcChnbCwgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQpKSB7XG4gICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmlsdGVyaW5nID0gY2FuRmlsdGVyKGludGVybmFsRm9ybWF0KSA/IExJTkVBUiA6IE5FQVJFU1Q7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfTUlOX0ZJTFRFUiwgZmlsdGVyaW5nKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9NQUdfRklMVEVSLCBmaWx0ZXJpbmcpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX1dSQVBfUywgQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRBdXRvbWF0aWNhbGx5U2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5hdXRvID09PSB0cnVlIHx8IG9wdGlvbnMuYXV0byA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMubGV2ZWwgPT09IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogR2V0cyBhbiBhcnJheSBvZiBjdWJlbWFwIGZhY2UgZW51bXNcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiAgIFRoaXMgaXMgb2Z0ZW4gdGhlIHNhbWUgb3B0aW9ucyB5b3UgcGFzc2VkIGluIHdoZW4geW91IGNyZWF0ZWQgdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gY3ViZW1hcCBmYWNlIGVudW1zXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q3ViZUZhY2VPcmRlcihnbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIG9wdGlvbnMuY3ViZUZhY2VPcmRlciB8fCBbVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YLCBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1gsIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWSwgVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZLCBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1osIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWl07XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZhY2VJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gZmFjZSBnbCBlbnVtIGZvciB0ZXhJbWFnZTJEXG4gKiBAcHJvcGVydHkge251bWJlcn0gbmR4IGZhY2UgaW5kZXggKDAgLSA1KSBpbnRvIHNvdXJjZSBkYXRhXG4gKiBAaWdub3JlXG4gKi9cblxuLyoqXG4gKiBHZXRzIGFuIGFycmF5IG9mIEZhY2VJbmZvc1xuICogVGhlcmUncyBhIGJ1ZyBpbiBzb21lIE5WaWRpYSBkcml2ZXJzIHRoYXQgd2lsbCBjcmFzaCB0aGUgZHJpdmVyIGlmXG4gKiBgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YYCBpcyBub3QgdXBsb2FkZWQgZmlyc3QuIFNvLCB3ZSB0YWtlXG4gKiB0aGUgdXNlcidzIGRlc2lyZWQgb3JkZXIgZnJvbSBoaXMgZmFjZXMgdG8gV2ViR0wgYW5kIG1ha2Ugc3VyZSB3ZVxuICogZG8gdGhlIGZhY2VzIGluIFdlYkdMIG9yZGVyXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEByZXR1cm4ge0ZhY2VJbmZvW119IGN1YmVtYXAgZmFjZSBpbmZvcy4gQXJndWFibHkgdGhlIGBmYWNlYCBwcm9wZXJ0eSBvZiBlYWNoIGVsZW1lbnQgaXMgcmVkdW5kYW50IGJ1dFxuICogICAgaXQncyBuZWVkZWQgaW50ZXJuYWxseSB0byBzb3J0IHRoZSBhcnJheSBvZiBgbmR4YCBwcm9wZXJ0aWVzIGJ5IGBmYWNlYC5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDdWJlRmFjZXNXaXRoTmR4KGdsLCBvcHRpb25zKSB7XG4gIHZhciBmYWNlcyA9IGdldEN1YmVGYWNlT3JkZXIoZ2wsIG9wdGlvbnMpOyAvLyB3b3JrIGFyb3VuZCBidWcgaW4gTlZpZGlhIGRyaXZlcnMuIFdlIGhhdmUgdG8gdXBsb2FkIHRoZSBmaXJzdCBmYWNlIGZpcnN0IGVsc2UgdGhlIGRyaXZlciBjcmFzaGVzIDooXG5cbiAgdmFyIGZhY2VzV2l0aE5keCA9IGZhY2VzLm1hcChmdW5jdGlvbiAoZmFjZSwgbmR4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZhY2U6IGZhY2UsXG4gICAgICBuZHg6IG5keFxuICAgIH07XG4gIH0pO1xuICBmYWNlc1dpdGhOZHguc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmZhY2UgLSBiLmZhY2U7XG4gIH0pO1xuICByZXR1cm4gZmFjZXNXaXRoTmR4O1xufVxuLyoqXG4gKiBTZXQgYSB0ZXh0dXJlIGZyb20gdGhlIGNvbnRlbnRzIG9mIGFuIGVsZW1lbnQuIFdpbGwgYWxzbyBzZXRcbiAqIHRleHR1cmUgZmlsdGVyaW5nIG9yIGdlbmVyYXRlIG1pcHMgYmFzZWQgb24gdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRcbiAqIHVubGVzcyBgb3B0aW9ucy5hdXRvID09PSBmYWxzZWAuIElmIGB0YXJnZXQgPT09IGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHdpbGxcbiAqIGF0dGVtcHQgdG8gc2xpY2UgaW1hZ2UgaW50byAxeDYsIDJ4MywgM3gyLCBvciA2eDEgaW1hZ2VzLCBvbmUgZm9yIGVhY2ggZmFjZS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IGEgY2FudmFzLCBpbWcsIG9yIHZpZGVvIGVsZW1lbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICogQGtpbmQgZnVuY3Rpb25cbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFRleHR1cmVGcm9tRWxlbWVudChnbCwgdGV4LCBlbGVtZW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRDtcbiAgdmFyIGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICB2YXIgd2lkdGggPSBlbGVtZW50LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5oZWlnaHQ7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGZvcm1hdFR5cGUudHlwZTtcbiAgc2V0UGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICAvLyBndWVzcyB0aGUgcGFydHNcbiAgICB2YXIgaW1nV2lkdGggPSBlbGVtZW50LndpZHRoO1xuICAgIHZhciBpbWdIZWlnaHQgPSBlbGVtZW50LmhlaWdodDtcbiAgICB2YXIgc2l6ZTtcbiAgICB2YXIgc2xpY2VzO1xuXG4gICAgaWYgKGltZ1dpZHRoIC8gNiA9PT0gaW1nSGVpZ2h0KSB7XG4gICAgICAvLyBJdCdzIDZ4MVxuICAgICAgc2l6ZSA9IGltZ0hlaWdodDtcbiAgICAgIHNsaWNlcyA9IFswLCAwLCAxLCAwLCAyLCAwLCAzLCAwLCA0LCAwLCA1LCAwXTtcbiAgICB9IGVsc2UgaWYgKGltZ0hlaWdodCAvIDYgPT09IGltZ1dpZHRoKSB7XG4gICAgICAvLyBJdCdzIDF4NlxuICAgICAgc2l6ZSA9IGltZ1dpZHRoO1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDAsIDEsIDAsIDIsIDAsIDMsIDAsIDQsIDAsIDVdO1xuICAgIH0gZWxzZSBpZiAoaW1nV2lkdGggLyAzID09PSBpbWdIZWlnaHQgLyAyKSB7XG4gICAgICAvLyBJdCdzIDN4MlxuICAgICAgc2l6ZSA9IGltZ1dpZHRoIC8gMztcbiAgICAgIHNsaWNlcyA9IFswLCAwLCAxLCAwLCAyLCAwLCAwLCAxLCAxLCAxLCAyLCAxXTtcbiAgICB9IGVsc2UgaWYgKGltZ1dpZHRoIC8gMiA9PT0gaW1nSGVpZ2h0IC8gMykge1xuICAgICAgLy8gSXQncyAyeDNcbiAgICAgIHNpemUgPSBpbWdXaWR0aCAvIDI7XG4gICAgICBzbGljZXMgPSBbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMiwgMSwgMl07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IFwiY2FuJ3QgZmlndXJlIG91dCBjdWJlIG1hcCBmcm9tIGVsZW1lbnQ6IFwiICsgKGVsZW1lbnQuc3JjID8gZWxlbWVudC5zcmMgOiBlbGVtZW50Lm5vZGVOYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgY3R4ID0gZ2V0U2hhcmVkMkRDb250ZXh0KCk7XG5cbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguY2FudmFzLndpZHRoID0gc2l6ZTtcbiAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIHdpZHRoID0gc2l6ZTtcbiAgICAgIGhlaWdodCA9IHNpemU7XG4gICAgICBnZXRDdWJlRmFjZXNXaXRoTmR4KGdsLCBvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHZhciB4T2Zmc2V0ID0gc2xpY2VzW2YubmR4ICogMiArIDBdICogc2l6ZTtcbiAgICAgICAgdmFyIHlPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMV0gKiBzaXplO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGVsZW1lbnQsIHhPZmZzZXQsIHlPZmZzZXQsIHNpemUsIHNpemUsIDAsIDAsIHNpemUsIHNpemUpO1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGYuZmFjZSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGN0eC5jYW52YXMpO1xuICAgICAgfSk7IC8vIEZyZWUgdXAgdGhlIGNhbnZhcyBtZW1vcnlcblxuICAgICAgY3R4LmNhbnZhcy53aWR0aCA9IDE7XG4gICAgICBjdHguY2FudmFzLmhlaWdodCA9IDE7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3JlYXRlSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBOT1RFOiBJdCBzZWVtcyBsaWtlIHdlIHNob3VsZCBwcmVmZXIgSW1hZ2VCaXRtYXAgYmVjYXVzZSB1bmxpa2UgY2FudmFzIGl0J3NcbiAgICAgIC8vIG5vdGUgbG9zc3k/IChhbHBoYSBpcyBub3QgcHJlbXVsdGlwbGllZD8gYWx0aG91Z2ggSSdtIG5vdCBzdXJlIHdoYXRcbiAgICAgIHdpZHRoID0gc2l6ZTtcbiAgICAgIGhlaWdodCA9IHNpemU7XG4gICAgICBnZXRDdWJlRmFjZXNXaXRoTmR4KGdsLCBvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIHZhciB4T2Zmc2V0ID0gc2xpY2VzW2YubmR4ICogMiArIDBdICogc2l6ZTtcbiAgICAgICAgdmFyIHlPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMV0gKiBzaXplOyAvLyBXZSBjYW4ndCBlYXNpbHkgdXNlIGEgZGVmYXVsdCB0ZXh0dXJlIGNvbG9yIGhlcmUgYXMgaXQgd291bGQgaGF2ZSB0byBtYXRjaFxuICAgICAgICAvLyB0aGUgdHlwZSBhY3Jvc3MgYWxsIGZhY2VzIHdoZXJlIGFzIHdpdGggYSAyRCBvbmUgdGhlcmUncyBvbmx5IG9uZSBmYWNlXG4gICAgICAgIC8vIHNvIHdlJ3JlIHJlcGxhY2luZyBldmVyeXRoaW5nIGFsbCBhdCBvbmNlLiBJdCBhbHNvIGhhcyB0byBiZSB0aGUgY29ycmVjdCBzaXplLlxuICAgICAgICAvLyBPbiB0aGUgb3RoZXIgaGFuZCB3ZSBuZWVkIGFsbCBmYWNlcyB0byBiZSB0aGUgc2FtZSBzaXplIHNvIGFzIG9uZSBmYWNlIGxvYWRzXG4gICAgICAgIC8vIHRoZSByZXN0IG1hdGNoIGVsc2UgdGhlIHRleHR1cmUgd2lsbCBiZSB1bi1yZW5kZXJhYmxlLlxuXG4gICAgICAgIGdsLnRleEltYWdlMkQoZi5mYWNlLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHNpemUsIHNpemUsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gICAgICAgIGNyZWF0ZUltYWdlQml0bWFwKGVsZW1lbnQsIHhPZmZzZXQsIHlPZmZzZXQsIHNpemUsIHNpemUsIHtcbiAgICAgICAgICBwcmVtdWx0aXBseUFscGhhOiAnbm9uZScsXG4gICAgICAgICAgY29sb3JTcGFjZUNvbnZlcnNpb246ICdub25lJ1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbWFnZUJpdG1hcCkge1xuICAgICAgICAgIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG4gICAgICAgICAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICAgICAgICAgIGdsLnRleEltYWdlMkQoZi5mYWNlLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2VCaXRtYXApO1xuXG4gICAgICAgICAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgICAgICAgICAgc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBURVhUVVJFXzNEIHx8IHRhcmdldCA9PT0gVEVYVFVSRV8yRF9BUlJBWSkge1xuICAgIHZhciBzbWFsbGVzdCA9IE1hdGgubWluKGVsZW1lbnQud2lkdGgsIGVsZW1lbnQuaGVpZ2h0KTtcbiAgICB2YXIgbGFyZ2VzdCA9IE1hdGgubWF4KGVsZW1lbnQud2lkdGgsIGVsZW1lbnQuaGVpZ2h0KTtcbiAgICB2YXIgZGVwdGggPSBsYXJnZXN0IC8gc21hbGxlc3Q7XG5cbiAgICBpZiAoZGVwdGggJSAxICE9PSAwKSB7XG4gICAgICB0aHJvdyBcImNhbiBub3QgY29tcHV0ZSAzRCBkaW1lbnNpb25zIG9mIGVsZW1lbnRcIjtcbiAgICB9XG5cbiAgICB2YXIgeE11bHQgPSBlbGVtZW50LndpZHRoID09PSBsYXJnZXN0ID8gMSA6IDA7XG4gICAgdmFyIHlNdWx0ID0gZWxlbWVudC5oZWlnaHQgPT09IGxhcmdlc3QgPyAxIDogMDtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfQUxJR05NRU5ULCAxKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfUk9XX0xFTkdUSCwgZWxlbWVudC53aWR0aCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX0lNQUdFX0hFSUdIVCwgMCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1NLSVBfSU1BR0VTLCAwKTtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBzbWFsbGVzdCwgc21hbGxlc3QsIHNtYWxsZXN0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuXG4gICAgZm9yICh2YXIgZCA9IDA7IGQgPCBkZXB0aDsgKytkKSB7XG4gICAgICB2YXIgc3JjWCA9IGQgKiBzbWFsbGVzdCAqIHhNdWx0O1xuICAgICAgdmFyIHNyY1kgPSBkICogc21hbGxlc3QgKiB5TXVsdDtcbiAgICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX1BJWEVMUywgc3JjWCk7XG4gICAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfU0tJUF9ST1dTLCBzcmNZKTtcbiAgICAgIGdsLnRleFN1YkltYWdlM0QodGFyZ2V0LCBsZXZlbCwgMCwgMCwgZCwgc21hbGxlc3QsIHNtYWxsZXN0LCAxLCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHNldFNraXBTdGF0ZVRvRGVmYXVsdChnbCk7XG4gIH0gZWxzZSB7XG4gICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChzaG91bGRBdXRvbWF0aWNhbGx5U2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUob3B0aW9ucykpIHtcbiAgICBzZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShnbCwgdGV4LCBvcHRpb25zLCB3aWR0aCwgaGVpZ2h0LCBpbnRlcm5hbEZvcm1hdCk7XG4gIH1cblxuICBzZXRUZXh0dXJlUGFyYW1ldGVycyhnbCwgdGV4LCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSB1cmwncyBvcmlnaW4gaXMgdGhlIHNhbWUgc28gdGhhdCB3ZSBjYW4gc2V0IHRoZSBgY3Jvc3NPcmlnaW5gXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIHVybCB0byBpbWFnZVxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIHdpbmRvdydzIG9yaWdpbiBpcyB0aGUgc2FtZSBhcyBpbWFnZSdzIHVybFxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHVybElzU2FtZU9yaWdpbih1cmwpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBmb3IgSUUgcmVhbGx5XG4gICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIHJldHVybiBhLmhvc3RuYW1lID09PSBsb2NhdGlvbi5ob3N0bmFtZSAmJiBhLnBvcnQgPT09IGxvY2F0aW9uLnBvcnQgJiYgYS5wcm90b2NvbCA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxvY2FsT3JpZ2luID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKS5vcmlnaW47XG4gICAgdmFyIHVybE9yaWdpbiA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbi5ocmVmKS5vcmlnaW47XG4gICAgcmV0dXJuIHVybE9yaWdpbiA9PT0gbG9jYWxPcmlnaW47XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VG9Bbm9ueW1vdXNJZlVuZGVmaW5lZEFuZFVSTElzTm90U2FtZU9yaWdpbih1cmwsIGNyb3NzT3JpZ2luKSB7XG4gIHJldHVybiBjcm9zc09yaWdpbiA9PT0gdW5kZWZpbmVkICYmICF1cmxJc1NhbWVPcmlnaW4odXJsKSA/ICdhbm9ueW1vdXMnIDogY3Jvc3NPcmlnaW47XG59XG4vKipcbiAqIExvYWRzIGFuIGltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIHVybCB0byBpbWFnZVxuICogQHBhcmFtIHtzdHJpbmd9IGNyb3NzT3JpZ2luXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGVyciwgaW1nKX0gW2NhbGxiYWNrXSBhIGNhbGxiYWNrIHRoYXQncyBwYXNzZWQgYW4gZXJyb3IgYW5kIHRoZSBpbWFnZS4gVGhlIGVycm9yIHdpbGwgYmUgbm9uLW51bGxcbiAqICAgICBpZiB0aGVyZSB3YXMgYW4gZXJyb3JcbiAqIEByZXR1cm4ge0hUTUxJbWFnZUVsZW1lbnR9IHRoZSBpbWFnZSBiZWluZyBsb2FkZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gbG9hZEltYWdlKHVybCwgY3Jvc3NPcmlnaW4sIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgdmFyIGltZztcbiAgY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkID8gY3Jvc3NPcmlnaW4gOiBkZWZhdWx0cy5jcm9zc09yaWdpbjtcbiAgY3Jvc3NPcmlnaW4gPSBzZXRUb0Fub255bW91c0lmVW5kZWZpbmVkQW5kVVJMSXNOb3RTYW1lT3JpZ2luKHVybCwgY3Jvc3NPcmlnaW4pO1xuXG4gIGlmICh0eXBlb2YgSW1hZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBpZiAoY3Jvc3NPcmlnaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgaW1nLmNyb3NzT3JpZ2luID0gY3Jvc3NPcmlnaW47XG4gICAgfVxuXG4gICAgdmFyIGNsZWFyRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uIGNsZWFyRXZlbnRIYW5kbGVycygpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICBpbWcgPSBudWxsO1xuICAgIH07XG5cbiAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IoKSB7XG4gICAgICB2YXIgbXNnID0gXCJjb3VsZG4ndCBsb2FkIGltYWdlOiBcIiArIHVybDtcbiAgICAgIGhlbHBlci5lcnJvcihtc2cpO1xuICAgICAgY2FsbGJhY2sobXNnLCBpbWcpO1xuICAgICAgY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcblxuICAgIHZhciBvbkxvYWQgPSBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBpbWcpO1xuICAgICAgY2xlYXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcblxuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkKTtcbiAgICBpbWcuc3JjID0gdXJsO1xuICAgIHJldHVybiBpbWc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBlcnI7XG4gICAgdmFyIGJtO1xuXG4gICAgdmFyIGNiID0gZnVuY3Rpb24gY2IoKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIGJtKTtcbiAgICB9O1xuXG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICAgIGlmIChjcm9zc09yaWdpbikge1xuICAgICAgb3B0aW9ucy5tb2RlID0gJ2NvcnMnOyAvLyBUT0RPOiBub3Qgc3VyZSBob3cgdG8gdHJhbnNsYXRlIGltYWdlLmNyb3NzT3JpZ2luXG4gICAgfVxuXG4gICAgZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmJsb2IoKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICByZXR1cm4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYiwge1xuICAgICAgICBwcmVtdWx0aXBseUFscGhhOiAnbm9uZScsXG4gICAgICAgIGNvbG9yU3BhY2VDb252ZXJzaW9uOiAnbm9uZSdcbiAgICAgIH0pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJpdG1hcCkge1xuICAgICAgLy8gbm90IHN1cmUgaWYgdGhpcyB3b3Jrcy4gV2UgZG9uJ3Qgd2FudFxuICAgICAgLy8gdG8gY2F0Y2ggdGhlIHVzZXIncyBlcnJvci4gU28sIGNhbGxcbiAgICAgIC8vIHRoZSBjYWxsYmFjayBpbiBhIHRpbWVvdXQgc28gd2UncmVcbiAgICAgIC8vIG5vdCBpbiB0aGlzIHNjb3BlIGluc2lkZSB0aGUgcHJvbWlzZS5cbiAgICAgIGJtID0gYml0bWFwO1xuICAgICAgc2V0VGltZW91dChjYik7XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZSkge1xuICAgICAgZXJyID0gZTtcbiAgICAgIHNldFRpbWVvdXQoY2IpO1xuICAgIH0pO1xuICAgIGltZyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gaW1nO1xufVxuLyoqXG4gKiBjaGVjayBpZiBvYmplY3QgaXMgYSBUZXhJbWFnZVNvdXJjZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgb2JqZWN0IGlzIGEgVGV4SW1hZ2VTb3VyY2VcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBpc1RleEltYWdlU291cmNlKG9iaikge1xuICByZXR1cm4gdHlwZW9mIEltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBJbWFnZUJpdG1hcCB8fCB0eXBlb2YgSW1hZ2VEYXRhICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBJbWFnZURhdGEgfHwgdHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cbi8qKlxuICogaWYgb2JqIGlzIGFuIFRleEltYWdlU291cmNlIHRoZW4ganVzdFxuICogdXNlcyBpdCBvdGhlcndpc2UgaWYgb2JqIGlzIGEgc3RyaW5nXG4gKiB0aGVuIGxvYWQgaXQgZmlyc3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8VGV4SW1hZ2VTb3VyY2V9IG9ialxuICogQHBhcmFtIHtzdHJpbmd9IGNyb3NzT3JpZ2luXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKGVyciwgaW1nKX0gW2NhbGxiYWNrXSBhIGNhbGxiYWNrIHRoYXQncyBwYXNzZWQgYW4gZXJyb3IgYW5kIHRoZSBpbWFnZS4gVGhlIGVycm9yIHdpbGwgYmUgbm9uLW51bGxcbiAqICAgICBpZiB0aGVyZSB3YXMgYW4gZXJyb3JcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkQW5kVXNlSW1hZ2Uob2JqLCBjcm9zc09yaWdpbiwgY2FsbGJhY2spIHtcbiAgaWYgKGlzVGV4SW1hZ2VTb3VyY2Uob2JqKSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgb2JqKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRJbWFnZShvYmosIGNyb3NzT3JpZ2luLCBjYWxsYmFjayk7XG59XG4vKipcbiAqIFNldHMgYSB0ZXh0dXJlIHRvIGEgMXgxIHBpeGVsIGNvbG9yLiBJZiBgb3B0aW9ucy5jb2xvciA9PT0gZmFsc2VgIGlzIG5vdGhpbmcgaGFwcGVucy4gSWYgaXQncyBub3Qgc2V0XG4gKiB0aGUgZGVmYXVsdCB0ZXh0dXJlIGNvbG9yIGlzIHVzZWQgd2hpY2ggY2FuIGJlIHNldCBieSBjYWxsaW5nIGBzZXREZWZhdWx0VGV4dHVyZUNvbG9yYC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0VGV4dHVyZVRvMVBpeGVsQ29sb3IoZ2wsIHRleCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cy50ZXh0dXJlT3B0aW9ucztcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcblxuICBpZiAob3B0aW9ucy5jb2xvciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQXNzdW1lIGl0J3MgYSBVUkxcbiAgLy8gUHV0IDF4MSBwaXhlbHMgaW4gdGV4dHVyZS4gVGhhdCBtYWtlcyBpdCByZW5kZXJhYmxlIGltbWVkaWF0ZWx5IHJlZ2FyZGxlc3Mgb2YgZmlsdGVyaW5nLlxuXG5cbiAgdmFyIGNvbG9yID0gbWFrZTFQaXhlbChvcHRpb25zLmNvbG9yKTtcblxuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDY7ICsraWkpIHtcbiAgICAgIGdsLnRleEltYWdlMkQoVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaWksIDAsIFJHQkEsIDEsIDEsIDAsIFJHQkEsIFVOU0lHTkVEX0JZVEUsIGNvbG9yKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGFyZ2V0ID09PSBURVhUVVJFXzNEIHx8IHRhcmdldCA9PT0gVEVYVFVSRV8yRF9BUlJBWSkge1xuICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCAwLCBSR0JBLCAxLCAxLCAxLCAwLCBSR0JBLCBVTlNJR05FRF9CWVRFLCBjb2xvcik7XG4gIH0gZWxzZSB7XG4gICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIDAsIFJHQkEsIDEsIDEsIDAsIFJHQkEsIFVOU0lHTkVEX0JZVEUsIGNvbG9yKTtcbiAgfVxufVxuLyoqXG4gKiBUaGUgc3JjIGltYWdlKHMpIHVzZWQgdG8gY3JlYXRlIGEgdGV4dHVyZS5cbiAqXG4gKiBXaGVuIHlvdSBjYWxsIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVUZXh0dXJlfSBvciB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVGV4dHVyZXN9XG4gKiB5b3UgY2FuIHBhc3MgaW4gdXJscyBmb3IgaW1hZ2VzIHRvIGxvYWQgaW50byB0aGUgdGV4dHVyZXMuIElmIGl0J3MgYSBzaW5nbGUgdXJsXG4gKiB0aGVuIHRoaXMgd2lsbCBiZSBhIHNpbmdsZSBIVE1MSW1hZ2VFbGVtZW50LiBJZiBpdCdzIGFuIGFycmF5IG9mIHVybHMgdXNlZCBmb3IgYSBjdWJlbWFwXG4gKiB0aGlzIHdpbGwgYmUgYSBjb3JyZXNwb25kaW5nIGFycmF5IG9mIGltYWdlcyBmb3IgdGhlIGN1YmVtYXAuXG4gKlxuICogQHR5cGVkZWYge0hUTUxJbWFnZUVsZW1lbnR8SFRNTEltYWdlRWxlbWVudFtdfSBUZXh0dXJlU3JjXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZm9yIHdoZW4gYW4gaW1hZ2UgZmluaXNoZWQgZG93bmxvYWRpbmcgYW5kIGJlZW4gdXBsb2FkZWQgaW50byBhIHRleHR1cmVcbiAqIEBjYWxsYmFjayBUZXh0dXJlUmVhZHlDYWxsYmFja1xuICogQHBhcmFtIHsqfSBlcnIgSWYgdHJ1dGh5IHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXh0dXJlIHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlU3JjfSBzb3VyY2UgaW1hZ2UocykgdXNlZCB0byBhcyB0aGUgc3JjIGZvciB0aGUgdGV4dHVyZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZvciB3aGVuIGFsbCBpbWFnZXMgaGF2ZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIHRoZWlyIHJlc3BlY3RpdmUgdGV4dHVyZXNcbiAqIEBjYWxsYmFjayBUZXh0dXJlc1JlYWR5Q2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gZXJyIElmIHRydXRoeSB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBXZWJHTFRleHR1cmU+fSB0ZXh0dXJlcyB0aGUgY3JlYXRlZCB0ZXh0dXJlcyBieSBuYW1lLiBTYW1lIGFzIHJldHVybmVkIGJ5IHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVUZXh0dXJlc30uXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5UZXh0dXJlU3JjPn0gc291cmNlcyB0aGUgaW1hZ2UocykgdXNlZCBmb3IgdGhlIHRleHR1cmUgYnkgbmFtZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbiBpbWFnZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIGEgdGV4dHVyZVxuICogQGNhbGxiYWNrIEN1YmVtYXBSZWFkeUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IGVyciBJZiB0cnV0aHkgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudFtdfSBpbWdzIHRoZSBpbWFnZXMgZm9yIGVhY2ggZmFjZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbiBpbWFnZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIGEgdGV4dHVyZVxuICogQGNhbGxiYWNrIFRocmVlRFJlYWR5Q2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gZXJyIElmIHRydXRoeSB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50W119IGltZ3MgdGhlIGltYWdlcyBmb3IgZWFjaCBzbGljZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogTG9hZHMgYSB0ZXh0dXJlIGZyb20gYW4gaW1hZ2UgZnJvbSBhIFVybCBhcyBzcGVjaWZpZWQgaW4gYG9wdGlvbnMuc3JjYFxuICogSWYgYG9wdGlvbnMuY29sb3IgIT09IGZhbHNlYCB3aWxsIHNldCB0aGUgdGV4dHVyZSB0byBhIDF4MSBwaXhlbCBjb2xvciBzbyB0aGF0IHRoZSB0ZXh0dXJlIGlzXG4gKiBpbW1lZGlhdGVseSB1c2VhYmxlLiBJdCB3aWxsIGJlIHVwZGF0ZWQgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGltYWdlIG9uY2UgdGhlIGltYWdlIGhhcyBmaW5pc2hlZFxuICogZG93bmxvYWRpbmcuIEZpbHRlcmluZyBvcHRpb25zIHdpbGwgYmUgc2V0IGFzIGFwcHJvcHJpYXRlIGZvciBpbWFnZSB1bmxlc3MgYG9wdGlvbnMuYXV0byA9PT0gZmFsc2VgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbWFnZSBoYXMgZmluaXNoZWQgbG9hZGluZy4gZXJyIHdpbGxcbiAqICAgIGJlIG5vbiBudWxsIGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEByZXR1cm4ge0hUTUxJbWFnZUVsZW1lbnR9IHRoZSBpbWFnZSBiZWluZyBkb3dubG9hZGVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkVGV4dHVyZUZyb21VcmwoZ2wsIHRleCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cy50ZXh0dXJlT3B0aW9ucztcbiAgc2V0VGV4dHVyZVRvMVBpeGVsQ29sb3IoZ2wsIHRleCwgb3B0aW9ucyk7IC8vIEJlY2F1c2UgaXQncyBhc3luYyB3ZSBuZWVkIHRvIGNvcHkgdGhlIG9wdGlvbnMuXG5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB2YXIgaW1nID0gbG9hZEFuZFVzZUltYWdlKG9wdGlvbnMuc3JjLCBvcHRpb25zLmNyb3NzT3JpZ2luLCBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIHRleCwgaW1nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGV4dHVyZUZyb21FbGVtZW50KGdsLCB0ZXgsIGltZywgb3B0aW9ucyk7XG4gICAgICBjYWxsYmFjayhudWxsLCB0ZXgsIGltZyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGltZztcbn1cbi8qKlxuICogTG9hZHMgYSBjdWJlbWFwIGZyb20gNiB1cmxzIG9yIFRleEltYWdlU291cmNlcyBhcyBzcGVjaWZpZWQgaW4gYG9wdGlvbnMuc3JjYC4gV2lsbCBzZXQgdGhlIGN1YmVtYXAgdG8gYSAxeDEgcGl4ZWwgY29sb3JcbiAqIHNvIHRoYXQgaXQgaXMgdXNhYmxlIGltbWVkaWF0ZWx5IHVubGVzcyBgb3B0aW9uLmNvbG9yID09PSBmYWxzZWAuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5DdWJlbWFwUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGFsbCB0aGUgaW1hZ2VzIGhhdmUgZmluaXNoZWQgbG9hZGluZy4gZXJyIHdpbGxcbiAqICAgIGJlIG5vbiBudWxsIGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gbG9hZEN1YmVtYXBGcm9tVXJscyhnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIHZhciB1cmxzID0gb3B0aW9ucy5zcmM7XG5cbiAgaWYgKHVybHMubGVuZ3RoICE9PSA2KSB7XG4gICAgdGhyb3cgXCJ0aGVyZSBtdXN0IGJlIDYgdXJscyBmb3IgYSBjdWJlbWFwXCI7XG4gIH1cblxuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8IFVOU0lHTkVEX0JZVEU7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEO1xuXG4gIGlmICh0YXJnZXQgIT09IFRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICB0aHJvdyBcInRhcmdldCBtdXN0IGJlIFRFWFRVUkVfQ1VCRV9NQVBcIjtcbiAgfVxuXG4gIHNldFRleHR1cmVUbzFQaXhlbENvbG9yKGdsLCB0ZXgsIG9wdGlvbnMpOyAvLyBCZWNhdXNlIGl0J3MgYXN5bmMgd2UgbmVlZCB0byBjb3B5IHRoZSBvcHRpb25zLlxuXG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgdmFyIG51bVRvTG9hZCA9IDY7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIGZhY2VzID0gZ2V0Q3ViZUZhY2VPcmRlcihnbCwgb3B0aW9ucyk7XG4gIHZhciBpbWdzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZnVuY3Rpb24gdXBsb2FkSW1nKGZhY2VUYXJnZXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVyciwgaW1nKSB7XG4gICAgICAtLW51bVRvTG9hZDtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGltZy53aWR0aCAhPT0gaW1nLmhlaWdodCkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKFwiY3ViZW1hcCBmYWNlIGltZyBpcyBub3QgYSBzcXVhcmU6IFwiICsgaW1nLnNyYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0UGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgICAgICAgICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7IC8vIFNvIGFzc3VtaW5nIHRoaXMgaXMgdGhlIGZpcnN0IGltYWdlIHdlIG5vdyBoYXZlIG9uZSBmYWNlIHRoYXQncyBpbWcgc2l6ZWRcbiAgICAgICAgICAvLyBhbmQgNSBmYWNlcyB0aGF0IGFyZSAxeDEgcGl4ZWwgc28gc2l6ZSB0aGUgb3RoZXIgZmFjZXNcblxuICAgICAgICAgIGlmIChudW1Ub0xvYWQgPT09IDUpIHtcbiAgICAgICAgICAgIC8vIHVzZSB0aGUgZGVmYXVsdCBvcmRlclxuICAgICAgICAgICAgZ2V0Q3ViZUZhY2VPcmRlcihnbCkuZm9yRWFjaChmdW5jdGlvbiAob3RoZXJUYXJnZXQpIHtcbiAgICAgICAgICAgICAgLy8gU2hvdWxkIHdlIHJlLXVzZSB0aGUgc2FtZSBmYWNlIG9yIGEgY29sb3I/XG4gICAgICAgICAgICAgIGdsLnRleEltYWdlMkQob3RoZXJUYXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsLnRleEltYWdlMkQoZmFjZVRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG51bVRvTG9hZCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLCB0ZXgsIGltZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBpbWdzID0gdXJscy5tYXAoZnVuY3Rpb24gKHVybCwgbmR4KSB7XG4gICAgcmV0dXJuIGxvYWRBbmRVc2VJbWFnZSh1cmwsIG9wdGlvbnMuY3Jvc3NPcmlnaW4sIHVwbG9hZEltZyhmYWNlc1tuZHhdKSk7XG4gIH0pO1xufVxuLyoqXG4gKiBMb2FkcyBhIDJkIGFycmF5IG9yIDNkIHRleHR1cmUgZnJvbSB1cmxzIE9SIFRleEltYWdlU291cmNlcyBhcyBzcGVjaWZpZWQgaW4gYG9wdGlvbnMuc3JjYC5cbiAqIFdpbGwgc2V0IHRoZSB0ZXh0dXJlIHRvIGEgMXgxIHBpeGVsIGNvbG9yXG4gKiBzbyB0aGF0IGl0IGlzIHVzYWJsZSBpbW1lZGlhdGVseSB1bmxlc3MgYG9wdGlvbi5jb2xvciA9PT0gZmFsc2VgLlxuICpcbiAqIElmIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGlzIG5vdCBzcGVjaWZpZWQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGZpcnN0XG4gKiBpbWFnZSBsb2FkZWQgd2lsbCBiZSB1c2VkLiBOb3RlIHRoYXQgc2luY2UgaW1hZ2VzIGFyZSBsb2FkZWQgYXN5bmNcbiAqIHdoaWNoIGltYWdlIGRvd25sb2FkcyBmaXJzdCBpcyB1bmtub3duLlxuICpcbiAqIElmIGFuIGltYWdlIGlzIG5vdCB0aGUgc2FtZSBzaXplIGFzIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGl0IHdpbGwgYmUgc2NhbGVkXG4gKiB0byB0aGF0IHdpZHRoIGFuZCBoZWlnaHQuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGhyZWVEUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIGFsbCB0aGUgaW1hZ2VzIGhhdmUgZmluaXNoZWQgbG9hZGluZy4gZXJyIHdpbGxcbiAqICAgIGJlIG5vbiBudWxsIGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gbG9hZFNsaWNlc0Zyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgdmFyIHVybHMgPSBvcHRpb25zLnNyYztcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBSR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgVU5TSUdORURfQllURTtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkRfQVJSQVk7XG5cbiAgaWYgKHRhcmdldCAhPT0gVEVYVFVSRV8zRCAmJiB0YXJnZXQgIT09IFRFWFRVUkVfMkRfQVJSQVkpIHtcbiAgICB0aHJvdyBcInRhcmdldCBtdXN0IGJlIFRFWFRVUkVfM0Qgb3IgVEVYVFVSRV8yRF9BUlJBWVwiO1xuICB9XG5cbiAgc2V0VGV4dHVyZVRvMVBpeGVsQ29sb3IoZ2wsIHRleCwgb3B0aW9ucyk7IC8vIEJlY2F1c2UgaXQncyBhc3luYyB3ZSBuZWVkIHRvIGNvcHkgdGhlIG9wdGlvbnMuXG5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB2YXIgbnVtVG9Mb2FkID0gdXJscy5sZW5ndGg7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIGltZ3M7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgdmFyIGRlcHRoID0gdXJscy5sZW5ndGg7XG4gIHZhciBmaXJzdEltYWdlID0gdHJ1ZTtcblxuICBmdW5jdGlvbiB1cGxvYWRJbWcoc2xpY2UpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVyciwgaW1nKSB7XG4gICAgICAtLW51bVRvTG9hZDtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gICAgICAgIGlmIChmaXJzdEltYWdlKSB7XG4gICAgICAgICAgZmlyc3RJbWFnZSA9IGZhbHNlO1xuICAgICAgICAgIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBpbWcud2lkdGg7XG4gICAgICAgICAgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgaW1nLmhlaWdodDtcbiAgICAgICAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTsgLy8gcHV0IGl0IGluIGV2ZXJ5IHNsaWNlIG90aGVyd2lzZSBzb21lIHNsaWNlcyB3aWxsIGJlIDAsMCwwLDBcblxuICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgZGVwdGg7ICsrcykge1xuICAgICAgICAgICAgZ2wudGV4U3ViSW1hZ2UzRCh0YXJnZXQsIGxldmVsLCAwLCAwLCBzLCB3aWR0aCwgaGVpZ2h0LCAxLCBmb3JtYXQsIHR5cGUsIGltZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBzcmMgPSBpbWc7XG4gICAgICAgICAgdmFyIGN0eDtcblxuICAgICAgICAgIGlmIChpbWcud2lkdGggIT09IHdpZHRoIHx8IGltZy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgLy8gU2l6ZSB0aGUgaW1hZ2UgdG8gZml4XG4gICAgICAgICAgICBjdHggPSBnZXRTaGFyZWQyRENvbnRleHQoKTtcbiAgICAgICAgICAgIHNyYyA9IGN0eC5jYW52YXM7XG4gICAgICAgICAgICBjdHguY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnbC50ZXhTdWJJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIDAsIDAsIHNsaWNlLCB3aWR0aCwgaGVpZ2h0LCAxLCBmb3JtYXQsIHR5cGUsIHNyYyk7IC8vIGZyZWUgdGhlIGNhbnZhcyBtZW1vcnlcblxuICAgICAgICAgIGlmIChjdHggJiYgc3JjID09PSBjdHguY2FudmFzKSB7XG4gICAgICAgICAgICBjdHguY2FudmFzLndpZHRoID0gMDtcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgICAgICAgZ2wuZ2VuZXJhdGVNaXBtYXAodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobnVtVG9Mb2FkID09PSAwKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsIHRleCwgaW1ncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGltZ3MgPSB1cmxzLm1hcChmdW5jdGlvbiAodXJsLCBuZHgpIHtcbiAgICByZXR1cm4gbG9hZEFuZFVzZUltYWdlKHVybCwgb3B0aW9ucy5jcm9zc09yaWdpbiwgdXBsb2FkSW1nKG5keCkpO1xuICB9KTtcbn1cbi8qKlxuICogU2V0cyBhIHRleHR1cmUgZnJvbSBhbiBhcnJheSBvciB0eXBlZCBhcnJheS4gSWYgdGhlIHdpZHRoIG9yIGhlaWdodCBpcyBub3QgcHJvdmlkZWQgd2lsbCBhdHRlbXB0IHRvXG4gKiBndWVzcyB0aGUgc2l6ZS4gU2VlIHtAbGluayBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30uXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3KX0gc3JjIEFuIGFycmF5IG9yIHR5cGVkIGFycnkgd2l0aCB0ZXh0dXJlIGRhdGEuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0VGV4dHVyZUZyb21BcnJheShnbCwgdGV4LCBzcmMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMudGV4dHVyZU9wdGlvbnM7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcbiAgdmFyIGRlcHRoID0gb3B0aW9ucy5kZXB0aDtcbiAgdmFyIGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICB2YXIgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IFJHQkE7XG4gIHZhciBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBnZXRUZXh0dXJlVHlwZUZvckFycmF5VHlwZShnbCwgc3JjLCBmb3JtYXRUeXBlLnR5cGUpO1xuXG4gIGlmICghaXNBcnJheUJ1ZmZlcihzcmMpKSB7XG4gICAgdmFyIFR5cGUgPSB0eXBlZEFycmF5cy5nZXRUeXBlZEFycmF5VHlwZUZvckdMVHlwZSh0eXBlKTtcbiAgICBzcmMgPSBuZXcgVHlwZShzcmMpO1xuICB9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgc3JjID0gbmV3IFVpbnQ4QXJyYXkoc3JjLmJ1ZmZlcik7XG4gIH1cblxuICB2YXIgYnl0ZXNQZXJFbGVtZW50ID0gZ2V0Qnl0ZXNQZXJFbGVtZW50Rm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQsIHR5cGUpO1xuICB2YXIgbnVtRWxlbWVudHMgPSBzcmMuYnl0ZUxlbmd0aCAvIGJ5dGVzUGVyRWxlbWVudDsgLy8gVE9ETzogY2hlY2sgVU5QQUNLX0FMSUdOTUVOVD9cblxuICBpZiAobnVtRWxlbWVudHMgJSAxKSB7XG4gICAgdGhyb3cgXCJsZW5ndGggd3Jvbmcgc2l6ZSBmb3IgZm9ybWF0OiBcIiArIHV0aWxzLmdsRW51bVRvU3RyaW5nKGdsLCBmb3JtYXQpO1xuICB9XG5cbiAgdmFyIGRpbWVuc2lvbnM7XG5cbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV8zRCB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkpIHtcbiAgICBpZiAoIXdpZHRoICYmICFoZWlnaHQgJiYgIWRlcHRoKSB7XG4gICAgICB2YXIgc2l6ZSA9IE1hdGguY2JydChudW1FbGVtZW50cyk7XG5cbiAgICAgIGlmIChzaXplICUgMSAhPT0gMCkge1xuICAgICAgICB0aHJvdyBcImNhbid0IGd1ZXNzIGN1YmUgc2l6ZSBvZiBhcnJheSBvZiBudW1FbGVtZW50czogXCIgKyBudW1FbGVtZW50cztcbiAgICAgIH1cblxuICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIGRlcHRoID0gc2l6ZTtcbiAgICB9IGVsc2UgaWYgKHdpZHRoICYmICghaGVpZ2h0IHx8ICFkZXB0aCkpIHtcbiAgICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgaGVpZ2h0LCBkZXB0aCwgbnVtRWxlbWVudHMgLyB3aWR0aCk7XG4gICAgICBoZWlnaHQgPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgZGVwdGggPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKGhlaWdodCAmJiAoIXdpZHRoIHx8ICFkZXB0aCkpIHtcbiAgICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgd2lkdGgsIGRlcHRoLCBudW1FbGVtZW50cyAvIGhlaWdodCk7XG4gICAgICB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICBkZXB0aCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkaW1lbnNpb25zID0gZ3Vlc3NEaW1lbnNpb25zKGdsLCB0YXJnZXQsIHdpZHRoLCBoZWlnaHQsIG51bUVsZW1lbnRzIC8gZGVwdGgpO1xuICAgICAgd2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgICAgaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgd2lkdGgsIGhlaWdodCwgbnVtRWxlbWVudHMpO1xuICAgIHdpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICBoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgfVxuXG4gIHNldFNraXBTdGF0ZVRvRGVmYXVsdChnbCk7XG4gIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19BTElHTk1FTlQsIG9wdGlvbnMudW5wYWNrQWxpZ25tZW50IHx8IDEpO1xuICBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuXG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICB2YXIgZWxlbWVudHNQZXJFbGVtZW50ID0gYnl0ZXNQZXJFbGVtZW50IC8gc3JjLkJZVEVTX1BFUl9FTEVNRU5UO1xuICAgIHZhciBmYWNlU2l6ZSA9IG51bUVsZW1lbnRzIC8gNiAqIGVsZW1lbnRzUGVyRWxlbWVudDtcbiAgICBnZXRDdWJlRmFjZXNXaXRoTmR4KGdsLCBvcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gZmFjZVNpemUgKiBmLm5keDtcbiAgICAgIHZhciBkYXRhID0gc3JjLnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgZmFjZVNpemUpO1xuICAgICAgZ2wudGV4SW1hZ2UyRChmLmZhY2UsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBkYXRhKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZKSB7XG4gICAgZ2wudGV4SW1hZ2UzRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIDAsIGZvcm1hdCwgdHlwZSwgc3JjKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIHNyYyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBkZXB0aDogZGVwdGgsXG4gICAgdHlwZTogdHlwZVxuICB9O1xufVxuLyoqXG4gKiBTZXRzIGEgdGV4dHVyZSB3aXRoIG5vIGNvbnRlbnRzIG9mIGEgY2VydGFpbiBzaXplLiBJbiBvdGhlciB3b3JkcyBjYWxscyBgZ2wudGV4SW1hZ2UyRGAgd2l0aCBgbnVsbGAuXG4gKiBZb3UgbXVzdCBzZXQgYG9wdGlvbnMud2lkdGhgIGFuZCBgb3B0aW9ucy5oZWlnaHRgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0RW1wdHlUZXh0dXJlKGdsLCB0ZXgsIG9wdGlvbnMpIHtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgdmFyIGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICB2YXIgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IFJHQkE7XG4gIHZhciBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBmb3JtYXRUeXBlLnR5cGU7XG4gIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG5cbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCA2OyArK2lpKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCArIGlpLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZKSB7XG4gICAgZ2wudGV4SW1hZ2UzRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQsIG9wdGlvbnMuZGVwdGgsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIHRleHR1cmUgYmFzZWQgb24gdGhlIG9wdGlvbnMgcGFzc2VkIGluLlxuICpcbiAqIE5vdGU6IG1heSByZXNldCBVTlBBQ0tfQUxJR05NRU5ULCBVTlBBQ0tfUk9XX0xFTkdUSCwgVU5QQUNLX0lNQUdFX0hFSUdIVCwgVU5QQUNLX1NLSVBfSU1BR0VTXG4gKiBVTlBBQ0tfU0tJUF9QSVhFTFMsIGFuZCBVTlBBQ0tfU0tJUF9ST1dTXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGFuIGltYWdlIGhhcyBiZWVuIGRvd25sb2FkZWQgYW5kIHVwbG9hZGVkIHRvIHRoZSB0ZXh0dXJlLlxuICogQHJldHVybiB7V2ViR0xUZXh0dXJlfSB0aGUgY3JlYXRlZCB0ZXh0dXJlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGdsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICB2YXIgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRDtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCB8fCAxO1xuICB2YXIgaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgMTtcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBSR0JBO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG5cbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIC8vIHRoaXMgc2hvdWxkIGhhdmUgYmVlbiB0aGUgZGVmYXVsdCBmb3IgY3ViZW1hcHMgOihcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9XUkFQX1MsIENMQU1QX1RPX0VER0UpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX1dSQVBfVCwgQ0xBTVBfVE9fRURHRSk7XG4gIH1cblxuICB2YXIgc3JjID0gb3B0aW9ucy5zcmM7XG5cbiAgaWYgKHNyYykge1xuICAgIGlmICh0eXBlb2Ygc3JjID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHNyYyA9IHNyYyhnbCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxvYWRUZXh0dXJlRnJvbVVybChnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKHNyYykgfHwgQXJyYXkuaXNBcnJheShzcmMpICYmICh0eXBlb2Ygc3JjWzBdID09PSAnbnVtYmVyJyB8fCBBcnJheS5pc0FycmF5KHNyY1swXSkgfHwgaXNBcnJheUJ1ZmZlcihzcmNbMF0pKSkge1xuICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzZXRUZXh0dXJlRnJvbUFycmF5KGdsLCB0ZXgsIHNyYywgb3B0aW9ucyk7XG4gICAgICB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICBoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSAmJiAodHlwZW9mIHNyY1swXSA9PT0gJ3N0cmluZycgfHwgaXNUZXhJbWFnZVNvdXJjZShzcmNbMF0pKSkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgICAgICBsb2FkQ3ViZW1hcEZyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRTbGljZXNGcm9tVXJscyhnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIChpc1RleEltYWdlU291cmNlKHNyYykpXG4gICAgICBzZXRUZXh0dXJlRnJvbUVsZW1lbnQoZ2wsIHRleCwgc3JjLCBvcHRpb25zKTtcbiAgICAgIHdpZHRoID0gc3JjLndpZHRoO1xuICAgICAgaGVpZ2h0ID0gc3JjLmhlaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0RW1wdHlUZXh0dXJlKGdsLCB0ZXgsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKGdsLCB0ZXgsIG9wdGlvbnMsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0KTtcbiAgfVxuXG4gIHNldFRleHR1cmVQYXJhbWV0ZXJzKGdsLCB0ZXgsIG9wdGlvbnMpO1xuICByZXR1cm4gdGV4O1xufVxuLyoqXG4gKiBSZXNpemVzIGEgdGV4dHVyZSBiYXNlZCBvbiB0aGUgb3B0aW9ucyBwYXNzZWQgaW4uXG4gKlxuICogTm90ZTogVGhpcyBpcyBub3QgYSBnZW5lcmljIHJlc2l6ZSBhbnl0aGluZyBmdW5jdGlvbi5cbiAqIEl0J3MgbW9zdGx5IHVzZWQgYnkge0BsaW5rIG1vZHVsZTp0d2dsLnJlc2l6ZUZyYW1lYnVmZmVySW5mb31cbiAqIEl0IHdpbGwgdXNlIGBvcHRpb25zLnNyY2AgaWYgaXQgZXhpc3RzIHRvIHRyeSB0byBkZXRlcm1pbmUgYSBgdHlwZWBcbiAqIG90aGVyd2lzZSBpdCB3aWxsIGFzc3VtZSBgZ2wuVU5TSUdORURfQllURWAuIE5vIGRhdGEgaXMgcHJvdmlkZWRcbiAqIGZvciB0aGUgdGV4dHVyZS4gVGV4dHVyZSBwYXJhbWV0ZXJzIHdpbGwgYmUgc2V0IGFjY29yZGluZ2x5XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIHRleHR1cmUgdG8gcmVzaXplXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoXSB0aGUgbmV3IHdpZHRoLiBJZiBub3QgcGFzc2VkIGluIHdpbGwgdXNlIGBvcHRpb25zLndpZHRoYFxuICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRdIHRoZSBuZXcgaGVpZ2h0LiBJZiBub3QgcGFzc2VkIGluIHdpbGwgdXNlIGBvcHRpb25zLmhlaWdodGBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIHRoZSBuZXcgZGVwdGguIElmIG5vdCBwYXNzZWQgaW4gd2lsbCB1c2UgYG9wdGlvbnMuZGVwdGhgXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlc2l6ZVRleHR1cmUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgZGVwdGgpIHtcbiAgd2lkdGggPSB3aWR0aCB8fCBvcHRpb25zLndpZHRoO1xuICBoZWlnaHQgPSBoZWlnaHQgfHwgb3B0aW9ucy5oZWlnaHQ7XG4gIGRlcHRoID0gZGVwdGggfHwgb3B0aW9ucy5kZXB0aDtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgdmFyIGxldmVsID0gb3B0aW9ucy5sZXZlbCB8fCAwO1xuICB2YXIgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IFJHQkE7XG4gIHZhciBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICB2YXIgdHlwZTtcbiAgdmFyIHNyYyA9IG9wdGlvbnMuc3JjO1xuXG4gIGlmICghc3JjKSB7XG4gICAgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBmb3JtYXRUeXBlLnR5cGU7XG4gIH0gZWxzZSBpZiAoaXNBcnJheUJ1ZmZlcihzcmMpIHx8IEFycmF5LmlzQXJyYXkoc3JjKSAmJiB0eXBlb2Ygc3JjWzBdID09PSAnbnVtYmVyJykge1xuICAgIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZ2V0VGV4dHVyZVR5cGVGb3JBcnJheVR5cGUoZ2wsIHNyYywgZm9ybWF0VHlwZS50eXBlKTtcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGZvcm1hdFR5cGUudHlwZTtcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgNjsgKytpaSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ggKyBpaSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZKSB7XG4gICAgZ2wudGV4SW1hZ2UzRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgZGVwdGgsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgZ2wudGV4SW1hZ2UyRCh0YXJnZXQsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBDaGVjayBpZiBhIHNyYyBpcyBhbiBhc3luYyByZXF1ZXN0LlxuICogaWYgc3JjIGlzIGEgc3RyaW5nIHdlJ3JlIGdvaW5nIHRvIGRvd25sb2FkIGFuIGltYWdlXG4gKiBpZiBzcmMgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB3ZSdyZSBnb2luZyB0byBkb3dubG9hZCBjdWJlbWFwIGltYWdlc1xuICogQHBhcmFtIHsqfSBzcmMgVGhlIHNyYyBmcm9tIGEgVGV4dHVyZU9wdGlvbnNcbiAqIEByZXR1cm5zIHtib29sfSB0cnVlIGlmIHNyYyBpcyBhc3luYy5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBpc0FzeW5jU3JjKHNyYykge1xuICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShzcmMpICYmIHR5cGVvZiBzcmNbMF0gPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgYnVuY2ggb2YgdGV4dHVyZXMgYmFzZWQgb24gdGhlIHBhc3NlZCBpbiBvcHRpb25zLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIGNvbnN0IHRleHR1cmVzID0gdHdnbC5jcmVhdGVUZXh0dXJlcyhnbCwge1xuICogICAgICAgLy8gYSBwb3dlciBvZiAyIGltYWdlXG4gKiAgICAgICBoZnRJY29uOiB7IHNyYzogXCJpbWFnZXMvaGZ0LWljb24tMTYucG5nXCIsIG1hZzogZ2wuTkVBUkVTVCB9LFxuICogICAgICAgLy8gYSBub24tcG93ZXIgb2YgMiBpbWFnZVxuICogICAgICAgY2xvdmVyOiB7IHNyYzogXCJpbWFnZXMvY2xvdmVyLmpwZ1wiIH0sXG4gKiAgICAgICAvLyBGcm9tIGEgY2FudmFzXG4gKiAgICAgICBmcm9tQ2FudmFzOiB7IHNyYzogY3R4LmNhbnZhcyB9LFxuICogICAgICAgLy8gQSBjdWJlbWFwIGZyb20gNiBpbWFnZXNcbiAqICAgICAgIHlva29oYW1hOiB7XG4gKiAgICAgICAgIHRhcmdldDogZ2wuVEVYVFVSRV9DVUJFX01BUCxcbiAqICAgICAgICAgc3JjOiBbXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9wb3N4LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9uZWd4LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9wb3N5LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9uZWd5LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9wb3N6LmpwZycsXG4gKiAgICAgICAgICAgJ2ltYWdlcy95b2tvaGFtYS9uZWd6LmpwZycsXG4gKiAgICAgICAgIF0sXG4gKiAgICAgICB9LFxuICogICAgICAgLy8gQSBjdWJlbWFwIGZyb20gMSBpbWFnZSAoY2FuIGJlIDF4NiwgMngzLCAzeDIsIDZ4MSlcbiAqICAgICAgIGdvbGRlbmdhdGU6IHtcbiAqICAgICAgICAgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQLFxuICogICAgICAgICBzcmM6ICdpbWFnZXMvZ29sZGVuZ2F0ZS5qcGcnLFxuICogICAgICAgfSxcbiAqICAgICAgIC8vIEEgMngyIHBpeGVsIHRleHR1cmUgZnJvbSBhIEphdmFTY3JpcHQgYXJyYXlcbiAqICAgICAgIGNoZWNrZXI6IHtcbiAqICAgICAgICAgbWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgICBtaW46IGdsLkxJTkVBUixcbiAqICAgICAgICAgc3JjOiBbXG4gKiAgICAgICAgICAgMjU1LDI1NSwyNTUsMjU1LFxuICogICAgICAgICAgIDE5MiwxOTIsMTkyLDI1NSxcbiAqICAgICAgICAgICAxOTIsMTkyLDE5MiwyNTUsXG4gKiAgICAgICAgICAgMjU1LDI1NSwyNTUsMjU1LFxuICogICAgICAgICBdLFxuICogICAgICAgfSxcbiAqICAgICAgIC8vIGEgMXgyIHBpeGVsIHRleHR1cmUgZnJvbSBhIHR5cGVkIGFycmF5LlxuICogICAgICAgc3RyaXBlOiB7XG4gKiAgICAgICAgIG1hZzogZ2wuTkVBUkVTVCxcbiAqICAgICAgICAgbWluOiBnbC5MSU5FQVIsXG4gKiAgICAgICAgIGZvcm1hdDogZ2wuTFVNSU5BTkNFLFxuICogICAgICAgICBzcmM6IG5ldyBVaW50OEFycmF5KFtcbiAqICAgICAgICAgICAyNTUsXG4gKiAgICAgICAgICAgMTI4LFxuICogICAgICAgICAgIDI1NSxcbiAqICAgICAgICAgICAxMjgsXG4gKiAgICAgICAgICAgMjU1LFxuICogICAgICAgICAgIDEyOCxcbiAqICAgICAgICAgICAyNTUsXG4gKiAgICAgICAgICAgMTI4LFxuICogICAgICAgICBdKSxcbiAqICAgICAgICAgd2lkdGg6IDEsXG4gKiAgICAgICB9LFxuICogICAgIH0pO1xuICpcbiAqIE5vd1xuICpcbiAqICogICBgdGV4dHVyZXMuaGZ0SWNvbmAgd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMuY2xvdmVyYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5mcm9tQ2FudmFzYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy55b2hvaGFtYWAgd2lsbCBiZSBhIGN1YmVtYXAgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5nb2xkZW5nYXRlYCB3aWxsIGJlIGEgY3ViZW1hcCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLmNoZWNrZXJgIHdpbGwgYmUgYSAyZCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLnN0cmlwZWAgd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZyxtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9ucz59IG9wdGlvbnMgQSBvYmplY3Qgb2YgVGV4dHVyZU9wdGlvbnMgb25lIHBlciB0ZXh0dXJlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlc1JlYWR5Q2FsbGJhY2t9IFtjYWxsYmFja10gQSBjYWxsYmFjayBjYWxsZWQgd2hlbiBhbGwgdGV4dHVyZXMgaGF2ZSBiZWVuIGRvd25sb2FkZWQuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZyxXZWJHTFRleHR1cmU+fSB0aGUgY3JlYXRlZCB0ZXh0dXJlcyBieSBuYW1lXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVzKGdsLCB0ZXh0dXJlT3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICB2YXIgbnVtRG93bmxvYWRpbmcgPSAwO1xuICB2YXIgZXJyb3JzID0gW107XG4gIHZhciB0ZXh0dXJlcyA9IHt9O1xuICB2YXIgaW1hZ2VzID0ge307XG5cbiAgZnVuY3Rpb24gY2FsbENhbGxiYWNrSWZSZWFkeSgpIHtcbiAgICBpZiAobnVtRG93bmxvYWRpbmcgPT09IDApIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnMubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLCB0ZXh0dXJlcywgaW1hZ2VzKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKHRleHR1cmVPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0ZXh0dXJlT3B0aW9uc1tuYW1lXTtcbiAgICB2YXIgb25Mb2FkRm47XG5cbiAgICBpZiAoaXNBc3luY1NyYyhvcHRpb25zLnNyYykpIHtcbiAgICAgIG9uTG9hZEZuID0gZnVuY3Rpb24gb25Mb2FkRm4oZXJyLCB0ZXgsIGltZykge1xuICAgICAgICBpbWFnZXNbbmFtZV0gPSBpbWc7XG4gICAgICAgIC0tbnVtRG93bmxvYWRpbmc7XG5cbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsQ2FsbGJhY2tJZlJlYWR5KCk7XG4gICAgICB9O1xuXG4gICAgICArK251bURvd25sb2FkaW5nO1xuICAgIH1cblxuICAgIHRleHR1cmVzW25hbWVdID0gY3JlYXRlVGV4dHVyZShnbCwgb3B0aW9ucywgb25Mb2FkRm4pO1xuICB9KTsgLy8gcXVldWUgdGhlIGNhbGxiYWNrIGlmIHRoZXJlIGFyZSBubyBpbWFnZXMgdG8gZG93bmxvYWQuXG4gIC8vIFdlIGRvIHRoaXMgYmVjYXVzZSBpZiB5b3VyIGNvZGUgaXMgc3RydWN0dXJlZCB0byB3YWl0IGZvclxuICAvLyBpbWFnZXMgdG8gZG93bmxvYWQgYnV0IHRoZW4geW91IGNvbW1lbnQgb3V0IGFsbCB0aGUgYXN5bmNcbiAgLy8gaW1hZ2VzIHlvdXIgY29kZSB3b3VsZCBicmVhay5cblxuICBjYWxsQ2FsbGJhY2tJZlJlYWR5KCk7XG4gIHJldHVybiB0ZXh0dXJlcztcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdHdnbC1mdWxsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90d2dsLWZ1bGwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7XG4gIG00OiB0cnVlLFxuICB2MzogdHJ1ZSxcbiAgcHJpbWl0aXZlczogdHJ1ZVxufTtcbmV4cG9ydHMucHJpbWl0aXZlcyA9IGV4cG9ydHMudjMgPSBleHBvcnRzLm00ID0gdm9pZCAwO1xuXG52YXIgbTQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL200LmpzICovIFwiLi9zcmMvbTQuanNcIikpO1xuXG5leHBvcnRzLm00ID0gbTQ7XG5cbnZhciB2MyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdjMuanMgKi8gXCIuL3NyYy92My5qc1wiKSk7XG5cbmV4cG9ydHMudjMgPSB2MztcblxudmFyIHByaW1pdGl2ZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByaW1pdGl2ZXMuanMgKi8gXCIuL3NyYy9wcmltaXRpdmVzLmpzXCIpKTtcblxuZXhwb3J0cy5wcmltaXRpdmVzID0gcHJpbWl0aXZlcztcblxudmFyIF90d2dsID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90d2dsLmpzICovIFwiLi9zcmMvdHdnbC5qc1wiKTtcblxuT2JqZWN0LmtleXMoX3R3Z2wpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IF90d2dsW2tleV07XG59KTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdHdnbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3R3Z2wuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgX2V4cG9ydE5hbWVzID0ge1xuICBhZGRFeHRlbnNpb25zVG9Db250ZXh0OiB0cnVlLFxuICBnZXRDb250ZXh0OiB0cnVlLFxuICBnZXRXZWJHTENvbnRleHQ6IHRydWUsXG4gIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemU6IHRydWUsXG4gIHNldERlZmF1bHRzOiB0cnVlLFxuICBhdHRyaWJ1dGVzOiB0cnVlLFxuICB0ZXh0dXJlczogdHJ1ZSxcbiAgdXRpbHM6IHRydWUsXG4gIGRyYXc6IHRydWUsXG4gIGZyYW1lYnVmZmVyczogdHJ1ZSxcbiAgcHJvZ3JhbXM6IHRydWUsXG4gIHR5cGVkYXJyYXlzOiB0cnVlLFxuICB2ZXJ0ZXhBcnJheXM6IHRydWVcbn07XG5leHBvcnRzLmFkZEV4dGVuc2lvbnNUb0NvbnRleHQgPSBhZGRFeHRlbnNpb25zVG9Db250ZXh0O1xuZXhwb3J0cy5nZXRDb250ZXh0ID0gZ2V0Q29udGV4dDtcbmV4cG9ydHMuZ2V0V2ViR0xDb250ZXh0ID0gZ2V0V2ViR0xDb250ZXh0O1xuZXhwb3J0cy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplID0gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZTtcbmV4cG9ydHMuc2V0RGVmYXVsdHMgPSBzZXREZWZhdWx0cztcbmV4cG9ydHMudmVydGV4QXJyYXlzID0gZXhwb3J0cy50eXBlZGFycmF5cyA9IGV4cG9ydHMucHJvZ3JhbXMgPSBleHBvcnRzLmZyYW1lYnVmZmVycyA9IGV4cG9ydHMuZHJhdyA9IGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLnRleHR1cmVzID0gZXhwb3J0cy5hdHRyaWJ1dGVzID0gdm9pZCAwO1xuXG52YXIgYXR0cmlidXRlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYXR0cmlidXRlcy5qcyAqLyBcIi4vc3JjL2F0dHJpYnV0ZXMuanNcIikpO1xuXG5leHBvcnRzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gYXR0cmlidXRlc1trZXldO1xufSk7XG5cbnZhciB0ZXh0dXJlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGV4dHVyZXMuanMgKi8gXCIuL3NyYy90ZXh0dXJlcy5qc1wiKSk7XG5cbmV4cG9ydHMudGV4dHVyZXMgPSB0ZXh0dXJlcztcbk9iamVjdC5rZXlzKHRleHR1cmVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSB0ZXh0dXJlc1trZXldO1xufSk7XG5cbnZhciBoZWxwZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlci5qcyAqLyBcIi4vc3JjL2hlbHBlci5qc1wiKSk7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMuanMgKi8gXCIuL3NyYy91dGlscy5qc1wiKSk7XG5cbmV4cG9ydHMudXRpbHMgPSB1dGlscztcbk9iamVjdC5rZXlzKHV0aWxzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSB1dGlsc1trZXldO1xufSk7XG5cbnZhciBkcmF3ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kcmF3LmpzICovIFwiLi9zcmMvZHJhdy5qc1wiKSk7XG5cbmV4cG9ydHMuZHJhdyA9IGRyYXc7XG5PYmplY3Qua2V5cyhkcmF3KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBkcmF3W2tleV07XG59KTtcblxudmFyIGZyYW1lYnVmZmVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZnJhbWVidWZmZXJzLmpzICovIFwiLi9zcmMvZnJhbWVidWZmZXJzLmpzXCIpKTtcblxuZXhwb3J0cy5mcmFtZWJ1ZmZlcnMgPSBmcmFtZWJ1ZmZlcnM7XG5PYmplY3Qua2V5cyhmcmFtZWJ1ZmZlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IGZyYW1lYnVmZmVyc1trZXldO1xufSk7XG5cbnZhciBwcm9ncmFtcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJvZ3JhbXMuanMgKi8gXCIuL3NyYy9wcm9ncmFtcy5qc1wiKSk7XG5cbmV4cG9ydHMucHJvZ3JhbXMgPSBwcm9ncmFtcztcbk9iamVjdC5rZXlzKHByb2dyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBwcm9ncmFtc1trZXldO1xufSk7XG5cbnZhciB0eXBlZGFycmF5cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdHlwZWRhcnJheXMuanMgKi8gXCIuL3NyYy90eXBlZGFycmF5cy5qc1wiKSk7XG5cbmV4cG9ydHMudHlwZWRhcnJheXMgPSB0eXBlZGFycmF5cztcbk9iamVjdC5rZXlzKHR5cGVkYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSB0eXBlZGFycmF5c1trZXldO1xufSk7XG5cbnZhciB2ZXJ0ZXhBcnJheXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ZlcnRleC1hcnJheXMuanMgKi8gXCIuL3NyYy92ZXJ0ZXgtYXJyYXlzLmpzXCIpKTtcblxuZXhwb3J0cy52ZXJ0ZXhBcnJheXMgPSB2ZXJ0ZXhBcnJheXM7XG5PYmplY3Qua2V5cyh2ZXJ0ZXhBcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IHZlcnRleEFycmF5c1trZXldO1xufSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFpbiBUV0dMIG1vZHVsZS5cbiAqXG4gKiBGb3IgbW9zdCB1c2UgY2FzZXMgeW91IHNob3VsZG4ndCBuZWVkIGFueXRoaW5nIG91dHNpZGUgdGhpcyBtb2R1bGUuXG4gKiBFeGNlcHRpb25zIGJldHdlZW4gdGhlIHN0dWZmIGFkZGVkIHRvIHR3Z2wtZnVsbCAodjMsIG00LCBwcmltaXRpdmVzKVxuICpcbiAqIEBtb2R1bGUgdHdnbFxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvYXR0cmlidXRlcy5zZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5IGFzIHNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXlcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXMuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMgYXMgY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXNcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXMuY3JlYXRlVmVydGV4QXJyYXlJbmZvIGFzIGNyZWF0ZVZlcnRleEFycmF5SW5mb1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvZHJhdy5kcmF3QnVmZmVySW5mbyBhcyBkcmF3QnVmZmVySW5mb1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvZHJhdy5kcmF3T2JqZWN0TGlzdCBhcyBkcmF3T2JqZWN0TGlzdFxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyBhcyBjcmVhdGVGcmFtZWJ1ZmZlckluZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVycy5yZXNpemVGcmFtZWJ1ZmZlckluZm8gYXMgcmVzaXplRnJhbWVidWZmZXJJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9mcmFtZWJ1ZmZlcnMuYmluZEZyYW1lYnVmZmVySW5mbyBhcyBiaW5kRnJhbWVidWZmZXJJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9wcm9ncmFtcy5jcmVhdGVQcm9ncmFtSW5mbyBhcyBjcmVhdGVQcm9ncmFtSW5mb1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuY3JlYXRlVW5pZm9ybUJsb2NrSW5mbyBhcyBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9wcm9ncmFtcy5iaW5kVW5pZm9ybUJsb2NrIGFzIGJpbmRVbmlmb3JtQmxvY2tcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLnNldFVuaWZvcm1CbG9jayBhcyBzZXRVbmlmb3JtQmxvY2tcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLnNldEJsb2NrVW5pZm9ybXMgYXMgc2V0QmxvY2tVbmlmb3Jtc1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0VW5pZm9ybXMgYXMgc2V0VW5pZm9ybXNcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzIGFzIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC90ZXh0dXJlcy5zZXRUZXh0dXJlRnJvbUFycmF5IGFzIHNldFRleHR1cmVGcm9tQXJyYXlcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3RleHR1cmVzLmNyZWF0ZVRleHR1cmUgYXMgY3JlYXRlVGV4dHVyZVxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvdGV4dHVyZXMucmVzaXplVGV4dHVyZSBhcyByZXNpemVUZXh0dXJlXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC90ZXh0dXJlcy5jcmVhdGVUZXh0dXJlcyBhcyBjcmVhdGVUZXh0dXJlc1xuICovXG4vLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2VlIGEgZ2xvYmFsIGdsXG52YXIgZ2wgPSB1bmRlZmluZWQ7XG4vKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRkRXh0ZW5zaW9uc1RvQ29udGV4dDogdHJ1ZVxufTtcbi8qKlxuICogVmFyaW91cyBkZWZhdWx0IHNldHRpbmdzIGZvciB0d2dsLlxuICpcbiAqIE5vdGU6IFlvdSBjYW4gY2FsbCB0aGlzIGFueSBudW1iZXIgb2YgdGltZXMuIEV4YW1wbGU6XG4gKlxuICogICAgIHR3Z2wuc2V0RGVmYXVsdHMoeyB0ZXh0dXJlQ29sb3I6IFsxLCAwLCAwLCAxXSB9KTtcbiAqICAgICB0d2dsLnNldERlZmF1bHRzKHsgYXR0cmliUHJlZml4OiAnYV8nIH0pO1xuICpcbiAqIGlzIGVxdWl2YWxlbnQgdG9cbiAqXG4gKiAgICAgdHdnbC5zZXREZWZhdWx0cyh7XG4gKiAgICAgICB0ZXh0dXJlQ29sb3I6IFsxLCAwLCAwLCAxXSxcbiAqICAgICAgIGF0dHJpYlByZWZpeDogJ2FfJyxcbiAqICAgICB9KTtcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEZWZhdWx0c1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJQcmVmaXhdIFRoZSBwcmVmaXggdG8gc3RpY2sgb24gYXR0cmlidXRlc1xuICpcbiAqICAgV2hlbiB3cml0aW5nIHNoYWRlcnMgSSBwcmVmZXIgdG8gbmFtZSBhdHRyaWJ1dGVzIHdpdGggYGFfYCwgdW5pZm9ybXMgd2l0aCBgdV9gIGFuZCB2YXJ5aW5ncyB3aXRoIGB2X2BcbiAqICAgYXMgaXQgbWFrZXMgaXQgY2xlYXIgd2hlcmUgdGhleSBjYW1lIGZyb20uIEJ1dCwgd2hlbiBidWlsZGluZyBnZW9tZXRyeSBJIHByZWZlciB1c2luZyB1bi1wcmVmaXhlZCBuYW1lcy5cbiAqXG4gKiAgIEluIG90aGVyIHdvcmRzIEknbGwgY3JlYXRlIGFycmF5cyBvZiBnZW9tZXRyeSBsaWtlIHRoaXNcbiAqXG4gKiAgICAgICBjb25zdCBhcnJheXMgPSB7XG4gKiAgICAgICAgIHBvc2l0aW9uOiAuLi5cbiAqICAgICAgICAgbm9ybWFsOiAuLi5cbiAqICAgICAgICAgdGV4Y29vcmQ6IC4uLlxuICogICAgICAgfTtcbiAqXG4gKiAgIEJ1dCBuZWVkIHRob3NlIG1hcHBlZCB0byBhdHRyaWJ1dGVzIGFuZCBteSBhdHRyaWJ1dGVzIHN0YXJ0IHdpdGggYGFfYC5cbiAqXG4gKiAgIERlZmF1bHQ6IGBcIlwiYFxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IFt0ZXh0dXJlQ29sb3JdIEFycmF5IG9mIDQgdmFsdWVzIGluIHRoZSByYW5nZSAwIHRvIDFcbiAqXG4gKiAgIFRoZSBkZWZhdWx0IHRleHR1cmUgY29sb3IgaXMgdXNlZCB3aGVuIGxvYWRpbmcgdGV4dHVyZXMgZnJvbVxuICogICB1cmxzLiBCZWNhdXNlIHRoZSBVUkwgd2lsbCBiZSBsb2FkZWQgYXN5bmMgd2UnZCBsaWtlIHRvIGJlXG4gKiAgIGFibGUgdG8gdXNlIHRoZSB0ZXh0dXJlIGltbWVkaWF0ZWx5LiBCeSBwdXR0aW5nIGEgMXgxIHBpeGVsXG4gKiAgIGNvbG9yIGluIHRoZSB0ZXh0dXJlIHdlIGNhbiBzdGFydCB1c2luZyB0aGUgdGV4dHVyZSBiZWZvcmVcbiAqICAgdGhlIFVSTCBoYXMgbG9hZGVkLlxuICpcbiAqICAgRGVmYXVsdDogYFswLjUsIDAuNzUsIDEsIDFdYFxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY3Jvc3NPcmlnaW5dXG4gKlxuICogICBJZiBub3QgdW5kZWZpbmVkIHNldHMgdGhlIGNyb3NzT3JpZ2luIGF0dHJpYnV0ZSBvbiBpbWFnZXNcbiAqICAgdGhhdCB0d2dsIGNyZWF0ZXMgd2hlbiBkb3dubG9hZGluZyBpbWFnZXMgZm9yIHRleHR1cmVzLlxuICpcbiAqICAgQWxzbyBzZWUge0BsaW5rIG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfS5cbiAqXG4gKiBAcHJvcGVydHkge2Jvb2x9IFthZGRFeHRlbnNpb25zVG9Db250ZXh0XVxuICpcbiAqICAgSWYgdHJ1ZSwgdGhlbiwgd2hlbiB0d2dsIHdpbGwgdHJ5IHRvIGFkZCBhbnkgc3VwcG9ydGVkIFdlYkdMIGV4dGVuc2lvbnNcbiAqICAgZGlyZWN0bHkgdG8gdGhlIGNvbnRleHQgdW5kZXIgdGhlaXIgbm9ybWFsIEdMIG5hbWVzLiBGb3IgZXhhbXBsZVxuICogICBpZiBBTkdMRV9pbnN0YW5jZXNfYXJyYXlzIGV4aXN0cyB0aGVuIHR3Z2wgd291bGQgZW5hYmxlIGl0LFxuICogICBhZGQgdGhlIGZ1bmN0aW9ucyBgdmVydGV4QXR0cmliRGl2aXNvcmAsIGBkcmF3QXJyYXlzSW5zdGFuY2VkYCxcbiAqICAgYGRyYXdFbGVtZW50c0luc3RhbmNlZGAsIGFuZCB0aGUgY29uc3RhbnQgYFZFUlRFWF9BVFRSSUJfQVJSQVlfRElWSVNPUmBcbiAqICAgdG8gdGhlIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogU2V0cyB2YXJpb3VzIGRlZmF1bHRzIGZvciB0d2dsLlxuICpcbiAqIEluIHRoZSBpbnRlcmVzdCBvZiB0ZXJzZW5lc3Mgd2hpY2ggaXMga2luZCBvZiB0aGUgcG9pbnRcbiAqIG9mIHR3Z2wgSSd2ZSBpbnRlZ3JhdGVkIGEgZmV3IG9mIHRoZSBvbGRlciBmdW5jdGlvbnMgaGVyZVxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRGVmYXVsdHN9IG5ld0RlZmF1bHRzIFRoZSBkZWZhdWx0IHNldHRpbmdzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuZnVuY3Rpb24gc2V0RGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgaGVscGVyLmNvcHlFeGlzdGluZ1Byb3BlcnRpZXMobmV3RGVmYXVsdHMsIGRlZmF1bHRzKTtcbiAgYXR0cmlidXRlcy5zZXRBdHRyaWJ1dGVEZWZhdWx0c18obmV3RGVmYXVsdHMpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgdGV4dHVyZXMuc2V0VGV4dHVyZURlZmF1bHRzXyhuZXdEZWZhdWx0cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxudmFyIHByZWZpeFJFID0gL14oLio/KV8vO1xuXG5mdW5jdGlvbiBhZGRFeHRlbnNpb25Ub0NvbnRleHQoZ2wsIGV4dGVuc2lvbk5hbWUpIHtcbiAgdXRpbHMuZ2xFbnVtVG9TdHJpbmcoZ2wsIDApO1xuICB2YXIgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKGV4dGVuc2lvbk5hbWUpO1xuXG4gIGlmIChleHQpIHtcbiAgICB2YXIgZW51bXMgPSB7fTtcbiAgICB2YXIgZm5TdWZmaXggPSBwcmVmaXhSRS5leGVjKGV4dGVuc2lvbk5hbWUpWzFdO1xuICAgIHZhciBlbnVtU3VmZml4ID0gJ18nICsgZm5TdWZmaXg7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZXh0KSB7XG4gICAgICB2YXIgdmFsdWUgPSBleHRba2V5XTtcbiAgICAgIHZhciBpc0Z1bmMgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICB2YXIgc3VmZml4ID0gaXNGdW5jID8gZm5TdWZmaXggOiBlbnVtU3VmZml4O1xuICAgICAgdmFyIG5hbWUgPSBrZXk7IC8vIGV4YW1wbGVzIG9mIHdoZXJlIHRoaXMgaXMgbm90IHRydWUgYXJlIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjXG4gICAgICAvLyBhbmQgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjXG5cbiAgICAgIGlmIChrZXkuZW5kc1dpdGgoc3VmZml4KSkge1xuICAgICAgICBuYW1lID0ga2V5LnN1YnN0cmluZygwLCBrZXkubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnbFtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghaXNGdW5jICYmIGdsW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGhlbHBlci53YXJuKG5hbWUsIGdsW25hbWVdLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzRnVuYykge1xuICAgICAgICAgIGdsW25hbWVdID0gZnVuY3Rpb24gKG9yaWdGbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9yaWdGbi5hcHBseShleHQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0odmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgZW51bXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gcGFzcyB0aGUgbW9kaWZpZWQgZW51bXMgdG8gZ2xFbnVtVG9TdHJpbmdcblxuXG4gICAgZW51bXMuY29uc3RydWN0b3IgPSB7XG4gICAgICBuYW1lOiBleHQuY29uc3RydWN0b3IubmFtZVxuICAgIH07XG4gICAgdXRpbHMuZ2xFbnVtVG9TdHJpbmcoZW51bXMsIDApO1xuICB9XG5cbiAgcmV0dXJuIGV4dDtcbn1cbi8qXG4gKiBJZiB5b3UncmUgd29uZGVyaW5nIHdoeSB0aGUgY29kZSBkb2Vzbid0IGp1c3QgaXRlcmF0ZVxuICogb3ZlciBhbGwgZXh0ZW5zaW9ucyB1c2luZyBgZ2wuZ2V0RXh0ZW5zaW9uc2AgaXMgdGhhdCBpdCdzIHBvc3NpYmxlXG4gKiBzb21lIGZ1dHVyZSBleHRlbnNpb24gaXMgaW5jb21wYXRpYmxlIHdpdGggdGhpcyBjb2RlLiBSYXRoZXIgdGhhblxuICogaGF2ZSB0aGluZyBzdWRkZW5seSBicmVhayBpdCBzZWVtcyBiZXR0ZXIgdG8gbWFudWFsbHkgYWRkIHRvIHRoaXNcbiAqIGxpc3QuXG4gKlxuICovXG5cblxudmFyIHN1cHBvcnRlZEV4dGVuc2lvbnMgPSBbJ0FOR0xFX2luc3RhbmNlZF9hcnJheXMnLCAnRVhUX2JsZW5kX21pbm1heCcsICdFWFRfY29sb3JfYnVmZmVyX2Zsb2F0JywgJ0VYVF9jb2xvcl9idWZmZXJfaGFsZl9mbG9hdCcsICdFWFRfZGlzam9pbnRfdGltZXJfcXVlcnknLCAnRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMicsICdFWFRfZnJhZ19kZXB0aCcsICdFWFRfc1JHQicsICdFWFRfc2hhZGVyX3RleHR1cmVfbG9kJywgJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycsICdPRVNfZWxlbWVudF9pbmRleF91aW50JywgJ09FU19zdGFuZGFyZF9kZXJpdmF0aXZlcycsICdPRVNfdGV4dHVyZV9mbG9hdCcsICdPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXInLCAnT0VTX3RleHR1cmVfaGFsZl9mbG9hdCcsICdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0X2xpbmVhcicsICdPRVNfdmVydGV4X2FycmF5X29iamVjdCcsICdXRUJHTF9jb2xvcl9idWZmZXJfZmxvYXQnLCAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2F0YycsICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjMScsICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGMnLCAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGMnLCAnV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYicsICdXRUJHTF9kZXB0aF90ZXh0dXJlJywgJ1dFQkdMX2RyYXdfYnVmZmVycyddO1xuLyoqXG4gKiBBdHRlbXB0cyB0byBlbmFibGUgYWxsIG9mIHRoZSBmb2xsb3dpbmcgZXh0ZW5zaW9uc1xuICogYW5kIGFkZCB0aGVpciBmdW5jdGlvbnMgYW5kIGNvbnN0YW50cyB0byB0aGVcbiAqIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgIHVzaW5nIHRoZWlyIG5vcm1hbCBub24tZXh0ZW5zaW9uIGxpa2UgbmFtZXMuXG4gKlxuICogICAgICBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzXG4gKiAgICAgIEVYVF9ibGVuZF9taW5tYXhcbiAqICAgICAgRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxuICogICAgICBFWFRfY29sb3JfYnVmZmVyX2hhbGZfZmxvYXRcbiAqICAgICAgRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5XG4gKiAgICAgIEVYVF9kaXNqb2ludF90aW1lcl9xdWVyeV93ZWJnbDJcbiAqICAgICAgRVhUX2ZyYWdfZGVwdGhcbiAqICAgICAgRVhUX3NSR0JcbiAqICAgICAgRVhUX3NoYWRlcl90ZXh0dXJlX2xvZFxuICogICAgICBFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcbiAqICAgICAgT0VTX2VsZW1lbnRfaW5kZXhfdWludFxuICogICAgICBPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcbiAqICAgICAgT0VTX3RleHR1cmVfZmxvYXRcbiAqICAgICAgT0VTX3RleHR1cmVfZmxvYXRfbGluZWFyXG4gKiAgICAgIE9FU190ZXh0dXJlX2hhbGZfZmxvYXRcbiAqICAgICAgT0VTX3RleHR1cmVfaGFsZl9mbG9hdF9saW5lYXJcbiAqICAgICAgT0VTX3ZlcnRleF9hcnJheV9vYmplY3RcbiAqICAgICAgV0VCR0xfY29sb3JfYnVmZmVyX2Zsb2F0XG4gKiAgICAgIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9hdGNcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2V0YzFcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3B2cnRjXG4gKiAgICAgIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjXG4gKiAgICAgIFdFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9zM3RjX3NyZ2JcbiAqICAgICAgV0VCR0xfZGVwdGhfdGV4dHVyZVxuICogICAgICBXRUJHTF9kcmF3X2J1ZmZlcnNcbiAqXG4gKiBGb3IgZXhhbXBsZSBpZiBgQU5HTEVfaW5zdGFuY2VkX2FycmF5c2AgZXhpc3RzIHRoZW4gdGhlIGZ1bmN0aW9uc1xuICogYGRyYXdBcnJheXNJbnN0YW5jZWRgLCBgZHJhd0VsZW1lbnRzSW5zdGFuY2VkYCwgYHZlcnRleEF0dHJpYkRpdmlzb3JgXG4gKiBhbmQgdGhlIGNvbnN0YW50IGBWRVJURVhfQVRUUklCX0FSUkFZX0RJVklTT1JgIGFyZSBhZGRlZCB0byB0aGVcbiAqIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgLlxuICpcbiAqIE5vdGUgdGhhdCBpZiB5b3Ugd2FudCB0byBrbm93IGlmIHRoZSBleHRlbnNpb24gZXhpc3RzIHlvdSBzaG91bGRcbiAqIHByb2JhYmx5IGNhbGwgYGdsLmdldEV4dGVuc2lvbmAgZm9yIGVhY2ggZXh0ZW5zaW9uLiBBbHRlcm5hdGl2ZWx5XG4gKiB5b3UgY2FuIGNoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIHRoZSBmdW5jdGlvbnMgb3IgY29uc3RhbnRzIHRoYXRcbiAqIGFyZSBleHBlY3RlZCB0byBiZSBhZGRlZC4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICBpZiAoZ2wuZHJhd0J1ZmZlcnMpIHtcbiAqICAgICAgLy8gRWl0aGVyIFdFQkdMX2RyYXdfYnVmZmVycyB3YXMgZW5hYmxlZCBPUiB5b3UncmUgcnVubmluZyBpbiBXZWJHTDJcbiAqICAgICAgLi4uLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuZnVuY3Rpb24gYWRkRXh0ZW5zaW9uc1RvQ29udGV4dChnbCkge1xuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc3VwcG9ydGVkRXh0ZW5zaW9ucy5sZW5ndGg7ICsraWkpIHtcbiAgICBhZGRFeHRlbnNpb25Ub0NvbnRleHQoZ2wsIHN1cHBvcnRlZEV4dGVuc2lvbnNbaWldKTtcbiAgfVxufVxuLyoqXG4gKiBDcmVhdGVzIGEgd2ViZ2wgY29udGV4dC5cbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRhZyB0byBnZXRcbiAqICAgICBjb250ZXh0IGZyb20uIElmIG9uZSBpcyBub3QgcGFzc2VkIGluIG9uZSB3aWxsIGJlXG4gKiAgICAgY3JlYXRlZC5cbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xuICB2YXIgbmFtZXMgPSBbXCJ3ZWJnbFwiLCBcImV4cGVyaW1lbnRhbC13ZWJnbFwiXTtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBuYW1lcy5sZW5ndGg7ICsraWkpIHtcbiAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQobmFtZXNbaWldLCBvcHRfYXR0cmlicyk7XG5cbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgaWYgKGRlZmF1bHRzLmFkZEV4dGVuc2lvbnNUb0NvbnRleHQpIHtcbiAgICAgICAgYWRkRXh0ZW5zaW9uc1RvQ29udGV4dChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4vKipcbiAqIEdldHMgYSBXZWJHTDEgY29udGV4dC5cbiAqXG4gKiBOb3RlOiBXaWxsIGF0dGVtcHQgdG8gZW5hYmxlIFZlcnRleCBBcnJheSBPYmplY3RzXG4gKiBhbmQgYWRkIFdlYkdMMiBlbnRyeSBwb2ludHMuICh1bmxlc3MgeW91IGZpcnN0IHNldCBkZWZhdWx0cyB3aXRoXG4gKiBgdHdnbC5zZXREZWZhdWx0cyh7ZW5hYmxlVmVydGV4QXJyYXlPYmplY3RzOiBmYWxzZX0pYDtcbiAqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgYSBjYW52YXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7V2ViR0xDb250ZXh0QXR0cmlidXRlc30gW29wdF9hdHRyaWJzXSBvcHRpb25hbCB3ZWJnbCBjb250ZXh0IGNyZWF0aW9uIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxuZnVuY3Rpb24gZ2V0V2ViR0xDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpIHtcbiAgdmFyIGdsID0gY3JlYXRlM0RDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpO1xuICByZXR1cm4gZ2w7XG59XG4vKipcbiAqIENyZWF0ZXMgYSB3ZWJnbCBjb250ZXh0LlxuICpcbiAqIFdpbGwgcmV0dXJuIGEgV2ViR0wyIGNvbnRleHQgaWYgcG9zc2libGUuXG4gKlxuICogWW91IGNhbiBjaGVjayBpZiBpdCdzIFdlYkdMMiB3aXRoXG4gKlxuICogICAgIHR3Z2wuaXNXZWJHTDIoZ2wpO1xuICpcbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRhZyB0byBnZXRcbiAqICAgICBjb250ZXh0IGZyb20uIElmIG9uZSBpcyBub3QgcGFzc2VkIGluIG9uZSB3aWxsIGJlXG4gKiAgICAgY3JlYXRlZC5cbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xuICB2YXIgbmFtZXMgPSBbXCJ3ZWJnbDJcIiwgXCJ3ZWJnbFwiLCBcImV4cGVyaW1lbnRhbC13ZWJnbFwiXTtcbiAgdmFyIGNvbnRleHQgPSBudWxsO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBuYW1lcy5sZW5ndGg7ICsraWkpIHtcbiAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQobmFtZXNbaWldLCBvcHRfYXR0cmlicyk7XG5cbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgaWYgKGRlZmF1bHRzLmFkZEV4dGVuc2lvbnNUb0NvbnRleHQpIHtcbiAgICAgICAgYWRkRXh0ZW5zaW9uc1RvQ29udGV4dChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4vKipcbiAqIEdldHMgYSBXZWJHTCBjb250ZXh0LiAgV2lsbCBjcmVhdGUgYSBXZWJHTDIgY29udGV4dCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBZb3UgY2FuIGNoZWNrIGlmIGl0J3MgV2ViR0wyIHdpdGhcbiAqXG4gKiAgICBmdW5jdGlvbiBpc1dlYkdMMihnbCkge1xuICogICAgICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLmluZGV4T2YoXCJXZWJHTCAyLjAgXCIpID09IDA7XG4gKiAgICB9XG4gKlxuICogTm90ZTogRm9yIGEgV2ViR0wxIGNvbnRleHQgd2lsbCBhdHRlbXB0IHRvIGVuYWJsZSBWZXJ0ZXggQXJyYXkgT2JqZWN0c1xuICogYW5kIGFkZCBXZWJHTDIgZW50cnkgcG9pbnRzLiAodW5sZXNzIHlvdSBmaXJzdCBzZXQgZGVmYXVsdHMgd2l0aFxuICogYHR3Z2wuc2V0RGVmYXVsdHMoe2VuYWJsZVZlcnRleEFycmF5T2JqZWN0czogZmFsc2V9KWA7XG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIGEgY2FudmFzIGVsZW1lbnQuXG4gKiBAcGFyYW0ge1dlYkdMQ29udGV4dEF0dHJpYnV0ZXN9IFtvcHRfYXR0cmlic10gb3B0aW9uYWwgd2ViZ2wgY29udGV4dCBjcmVhdGlvbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IFRoZSBjcmVhdGVkIGNvbnRleHQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldENvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xuICB2YXIgZ2wgPSBjcmVhdGVDb250ZXh0KGNhbnZhcywgb3B0X2F0dHJpYnMpO1xuICByZXR1cm4gZ2w7XG59XG4vKipcbiAqIFJlc2l6ZSBhIGNhbnZhcyB0byBtYXRjaCB0aGUgc2l6ZSBpdCdzIGRpc3BsYXllZC5cbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBUaGUgY2FudmFzIHRvIHJlc2l6ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXVsdGlwbGllcl0gU28geW91IGNhbiBwYXNzIGluIGB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb2Agb3Igb3RoZXIgc2NhbGUgdmFsdWUgaWYgeW91IHdhbnQgdG8uXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBjYW52YXMgd2FzIHJlc2l6ZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoY2FudmFzLCBtdWx0aXBsaWVyKSB7XG4gIG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyIHx8IDE7XG4gIG11bHRpcGxpZXIgPSBNYXRoLm1heCgwLCBtdWx0aXBsaWVyKTtcbiAgdmFyIHdpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoICogbXVsdGlwbGllciB8IDA7XG4gIHZhciBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0ICogbXVsdGlwbGllciB8IDA7XG5cbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdHlwZWRhcnJheXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdHlwZWRhcnJheXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSA9IGdldEdMVHlwZUZvclR5cGVkQXJyYXk7XG5leHBvcnRzLmdldEdMVHlwZUZvclR5cGVkQXJyYXlUeXBlID0gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheVR5cGU7XG5leHBvcnRzLmdldFR5cGVkQXJyYXlUeXBlRm9yR0xUeXBlID0gZ2V0VHlwZWRBcnJheVR5cGVGb3JHTFR5cGU7XG5leHBvcnRzLmlzQXJyYXlCdWZmZXIgPSB2b2lkIDA7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBMb3cgbGV2ZWwgc2hhZGVyIHR5cGVkIGFycmF5IHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogWW91IHNob3VsZCBnZW5lcmFsbHkgbm90IG5lZWQgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucy4gVGhleSBhcmUgcHJvdmlkZWRcbiAqIGZvciB0aG9zZSBjYXNlcyB3aGVyZSB5b3UncmUgZG9pbmcgc29tZXRoaW5nIG91dCBvZiB0aGUgb3JkaW5hcnlcbiAqIGFuZCB5b3UgbmVlZCBsb3dlciBsZXZlbCBhY2Nlc3MuXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgdGhleSBhcmUgYXZhaWxhYmxlIGF0IGJvdGggYHR3Z2wudHlwZWRBcnJheWAgYW5kIGB0d2dsYFxuICogaXRzZWxmXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6dHdnbH0gZm9yIGNvcmUgZnVuY3Rpb25zXG4gKlxuICogQG1vZHVsZSB0d2dsL3R5cGVkQXJyYXlcbiAqL1xuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxudmFyIGdsID0gdW5kZWZpbmVkO1xuLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuXG4vKiBEYXRhVHlwZSAqL1xuXG52YXIgQllURSA9IDB4MTQwMDtcbnZhciBVTlNJR05FRF9CWVRFID0gMHgxNDAxO1xudmFyIFNIT1JUID0gMHgxNDAyO1xudmFyIFVOU0lHTkVEX1NIT1JUID0gMHgxNDAzO1xudmFyIElOVCA9IDB4MTQwNDtcbnZhciBVTlNJR05FRF9JTlQgPSAweDE0MDU7XG52YXIgRkxPQVQgPSAweDE0MDY7XG52YXIgVU5TSUdORURfU0hPUlRfNF80XzRfNCA9IDB4ODAzMztcbnZhciBVTlNJR05FRF9TSE9SVF81XzVfNV8xID0gMHg4MDM0O1xudmFyIFVOU0lHTkVEX1NIT1JUXzVfNl81ID0gMHg4MzYzO1xudmFyIEhBTEZfRkxPQVQgPSAweDE0MEI7XG52YXIgVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWID0gMHg4MzY4O1xudmFyIFVOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVYgPSAweDhDM0I7XG52YXIgVU5TSUdORURfSU5UXzVfOV85XzlfUkVWID0gMHg4QzNFO1xudmFyIEZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFViA9IDB4OERBRDtcbnZhciBVTlNJR05FRF9JTlRfMjRfOCA9IDB4ODRGQTtcbnZhciBnbFR5cGVUb1R5cGVkQXJyYXkgPSB7fTtcbntcbiAgdmFyIHR0ID0gZ2xUeXBlVG9UeXBlZEFycmF5O1xuICB0dFtCWVRFXSA9IEludDhBcnJheTtcbiAgdHRbVU5TSUdORURfQllURV0gPSBVaW50OEFycmF5O1xuICB0dFtTSE9SVF0gPSBJbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9TSE9SVF0gPSBVaW50MTZBcnJheTtcbiAgdHRbSU5UXSA9IEludDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX0lOVF0gPSBVaW50MzJBcnJheTtcbiAgdHRbRkxPQVRdID0gRmxvYXQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9TSE9SVF80XzRfNF80XSA9IFVpbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9TSE9SVF81XzVfNV8xXSA9IFVpbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9TSE9SVF81XzZfNV0gPSBVaW50MTZBcnJheTtcbiAgdHRbSEFMRl9GTE9BVF0gPSBVaW50MTZBcnJheTtcbiAgdHRbVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWXSA9IFVpbnQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMTBGXzExRl8xMUZfUkVWXSA9IFVpbnQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfNV85XzlfOV9SRVZdID0gVWludDMyQXJyYXk7XG4gIHR0W0ZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFVl0gPSBVaW50MzJBcnJheTtcbiAgdHRbVU5TSUdORURfSU5UXzI0XzhdID0gVWludDMyQXJyYXk7XG59XG4vKipcbiAqIEdldCB0aGUgR0wgdHlwZSBmb3IgYSB0eXBlZEFycmF5XG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyVmlld30gdHlwZWRBcnJheSBhIHR5cGVkQXJyYXlcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIEdMIHR5cGUgZm9yIGFycmF5LiBGb3IgZXhhbXBsZSBwYXNzIGluIGFuIGBJbnQ4QXJyYXlgIGFuZCBgZ2wuQllURWAgd2lsbFxuICogICBiZSByZXR1cm5lZC4gUGFzcyBpbiBhIGBVaW50MzJBcnJheWAgYW5kIGBnbC5VTlNJR05FRF9JTlRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90eXBlZEFycmF5XG4gKi9cblxuZnVuY3Rpb24gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheSh0eXBlZEFycmF5KSB7XG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIEJZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheSkge1xuICAgIHJldHVybiBTSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX1NIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MzJBcnJheSkge1xuICAgIHJldHVybiBJTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MzJBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICByZXR1cm4gRkxPQVQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCB0eXBlZCBhcnJheSB0eXBlJyk7XG59XG4vKipcbiAqIEdldCB0aGUgR0wgdHlwZSBmb3IgYSB0eXBlZEFycmF5IHR5cGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJWaWV3fSB0eXBlZEFycmF5VHlwZSBhIHR5cGVkQXJyYXkgY29uc3RydWN0b3JcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIEdMIHR5cGUgZm9yIHR5cGUuIEZvciBleGFtcGxlIHBhc3MgaW4gYEludDhBcnJheWAgYW5kIGBnbC5CWVRFYCB3aWxsXG4gKiAgIGJlIHJldHVybmVkLiBQYXNzIGluIGBVaW50MzJBcnJheWAgYW5kIGBnbC5VTlNJR05FRF9JTlRgIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90eXBlZEFycmF5XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZSh0eXBlZEFycmF5VHlwZSkge1xuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEludDhBcnJheSkge1xuICAgIHJldHVybiBCWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDhBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50MTZBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9TSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IEludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gVWludDMyQXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfSU5UO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gRmxvYXQzMkFycmF5KSB7XG4gICAgcmV0dXJuIEZMT0FUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgdHlwZWQgYXJyYXkgdHlwZScpO1xufVxuLyoqXG4gKiBHZXQgdGhlIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9yIGZvciBhIGdpdmVuIEdMIHR5cGVcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIHRoZSBHTCB0eXBlLiAoZWc6IGBnbC5VTlNJR05FRF9JTlRgKVxuICogQHJldHVybiB7ZnVuY3Rpb259IHRoZSBjb25zdHJ1Y3RvciBmb3IgYSB0aGUgY29ycmVzcG9uZGluZyB0eXBlZCBhcnJheS4gKGVnLiBgVWludDMyQXJyYXlgKS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90eXBlZEFycmF5XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUeXBlZEFycmF5VHlwZUZvckdMVHlwZSh0eXBlKSB7XG4gIHZhciBDVE9SID0gZ2xUeXBlVG9UeXBlZEFycmF5W3R5cGVdO1xuXG4gIGlmICghQ1RPUikge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBnbCB0eXBlJyk7XG4gIH1cblxuICByZXR1cm4gQ1RPUjtcbn1cblxudmFyIGlzQXJyYXlCdWZmZXIgPSB0eXBlb2YgU2hhcmVkQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnID8gZnVuY3Rpb24gaXNBcnJheUJ1ZmZlck9yU2hhcmVkQXJyYXlCdWZmZXIoYSkge1xuICByZXR1cm4gYSAmJiBhLmJ1ZmZlciAmJiAoYS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCBhLmJ1ZmZlciBpbnN0YW5jZW9mIFNoYXJlZEFycmF5QnVmZmVyKTtcbn0gOiBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5idWZmZXIgJiYgYS5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbn07XG5leHBvcnRzLmlzQXJyYXlCdWZmZXIgPSBpc0FycmF5QnVmZmVyO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91dGlscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy91dGlscy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5pc1dlYkdMMSA9IGlzV2ViR0wxO1xuZXhwb3J0cy5pc1dlYkdMMiA9IGlzV2ViR0wyO1xuZXhwb3J0cy5nbEVudW1Ub1N0cmluZyA9IHZvaWQgMDtcblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIGdsIHZlcnNpb24gYXMgYSBudW1iZXJcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHJldHVybiB7bnVtYmVyfSB2ZXJzaW9uIG9mIGdsXG4gKiBAcHJpdmF0ZVxuICovXG4vL2Z1bmN0aW9uIGdldFZlcnNpb25Bc051bWJlcihnbCkge1xuLy8gIHJldHVybiBwYXJzZUZsb2F0KGdsLmdldFBhcmFtZXRlcihnbC5WRVJTSU9OKS5zdWJzdHIoNikpO1xuLy99XG5cbi8qKlxuICogQ2hlY2sgaWYgY29udGV4dCBpcyBXZWJHTCAyLjBcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBpdCdzIFdlYkdMIDIuMFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cbmZ1bmN0aW9uIGlzV2ViR0wyKGdsKSB7XG4gIC8vIFRoaXMgaXMgdGhlIGNvcnJlY3QgY2hlY2sgYnV0IGl0J3Mgc2xvd1xuICAvLyAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5WRVJTSU9OKS5pbmRleE9mKFwiV2ViR0wgMi4wXCIpID09PSAwO1xuICAvLyBUaGlzIG1pZ2h0IGFsc28gYmUgdGhlIGNvcnJlY3QgY2hlY2sgYnV0IEknbSBhc3N1bWluZyBpdCdzIHNsb3ctaXNoXG4gIC8vIHJldHVybiBnbCBpbnN0YW5jZW9mIFdlYkdMMlJlbmRlcmluZ0NvbnRleHQ7XG4gIHJldHVybiAhIWdsLnRleFN0b3JhZ2UyRDtcbn1cbi8qKlxuICogQ2hlY2sgaWYgY29udGV4dCBpcyBXZWJHTCAxLjBcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBpdCdzIFdlYkdMIDEuMFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1dlYkdMMShnbCkge1xuICAvLyBUaGlzIGlzIHRoZSBjb3JyZWN0IGNoZWNrIGJ1dCBpdCdzIHNsb3dcbiAgLy8gY29uc3QgdmVyc2lvbiA9IGdldFZlcnNpb25Bc051bWJlcihnbCk7XG4gIC8vIHJldHVybiB2ZXJzaW9uIDw9IDEuMCAmJiB2ZXJzaW9uID4gMC4wOyAgLy8gYmVjYXVzZSBhcyBvZiAyMDE2LzUgRWRnZSByZXR1cm5zIDAuOTZcbiAgLy8gVGhpcyBtaWdodCBhbHNvIGJlIHRoZSBjb3JyZWN0IGNoZWNrIGJ1dCBJJ20gYXNzdW1pbmcgaXQncyBzbG93LWlzaFxuICAvLyByZXR1cm4gZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XG4gIHJldHVybiAhZ2wudGV4U3RvcmFnZTJEO1xufVxuLyoqXG4gKiBHZXRzIGEgc3RyaW5nIGZvciBXZWJHTCBlbnVtXG4gKlxuICogTm90ZTogU2V2ZXJhbCBlbnVtcyBhcmUgdGhlIHNhbWUuIFdpdGhvdXQgbW9yZVxuICogY29udGV4dCAod2hpY2ggZnVuY3Rpb24pIGl0J3MgaW1wb3NzaWJsZSB0byBhbHdheXNcbiAqIGdpdmUgdGhlIGNvcnJlY3QgZW51bS4gQXMgaXQgaXMsIGZvciBtYXRjaGluZyB2YWx1ZXNcbiAqIGl0IGdpdmVzIGFsbCBlbnVtcy4gQ2hlY2tpbmcgdGhlIFdlYkdMMlJlbmRlcmluZ0NvbnRleHRcbiAqIHRoYXQgbWVhbnNcbiAqXG4gKiAgICAgIDAgICAgID0gWkVSTyB8IFBPSU5UIHwgTk9ORSB8IE5PX0VSUk9SXG4gKiAgICAgIDEgICAgID0gT05FIHwgTElORVMgfCBTWU5DX0ZMVVNIX0NPTU1BTkRTX0JJVFxuICogICAgICAzMjc3NyA9IEJMRU5EX0VRVUFUSU9OX1JHQiB8IEJMRU5EX0VRVUFUSU9OX1JHQlxuICogICAgICAzNjY2MiA9IENPUFlfUkVBRF9CVUZGRVIgfCBDT1BZX1JFQURfQlVGRkVSX0JJTkRJTkdcbiAqICAgICAgMzY2NjMgPSBDT1BZX1dSSVRFX0JVRkZFUiB8IENPUFlfV1JJVEVfQlVGRkVSX0JJTkRJTkdcbiAqICAgICAgMzYwMDYgPSBGUkFNRUJVRkZFUl9CSU5ESU5HIHwgRFJBV19GUkFNRUJVRkZFUl9CSU5ESU5HXG4gKlxuICogSXQncyBhbHNvIG5vdCB1c2VmdWwgZm9yIGJpdHMgcmVhbGx5IHVubGVzcyB5b3UgcGFzcyBpbiBpbmRpdmlkdWFsIGJpdHMuXG4gKiBJbiBvdGhlciB3b3Jkc1xuICpcbiAqICAgICBjb25zdCBiaXRzID0gZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQ7XG4gKiAgICAgdHdnbC5nbEVudW1Ub1N0cmluZyhnbCwgYml0cyk7ICAvLyBub3QgZ29pbmcgdG8gd29ya1xuICpcbiAqIE5vdGUgdGhhdCBzb21lIGVudW1zIG9ubHkgZXhpc3Qgb24gZXh0ZW5zaW9ucy4gSWYgeW91XG4gKiB3YW50IHRoZW0gdG8gc2hvdyB1cCB5b3UgbmVlZCB0byBwYXNzIHRoZSBleHRlbnNpb24gYXQgbGVhc3RcbiAqIG9uY2UuIEZvciBleGFtcGxlXG4gKlxuICogICAgIGNvbnN0IGV4dCA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGMnKTtcbiAqICAgICBpZiAoZXh0KSB7XG4gKiAgICAgICAgdHdnbC5nbEVudW1Ub1N0cmluZyhleHQsIDApOyAgLy8ganVzdCBwcmltZSB0aGUgZnVuY3Rpb25cbiAqXG4gKiAgICAgICAgLi5sYXRlci4uXG4gKlxuICogICAgICAgIGNvbnN0IGludGVybmFsRm9ybWF0ID0gZXh0LkNPTVBSRVNTRURfUkdCX1MzVENfRFhUMV9FWFQ7XG4gKiAgICAgICAgY29uc29sZS5sb2codHdnbC5nbEVudW1Ub1N0cmluZyhnbCwgaW50ZXJuYWxGb3JtYXQpKTtcbiAqXG4gKiBOb3RpY2UgSSBkaWRuJ3QgaGF2ZSB0byBwYXNzIHRoZSBleHRlbnNpb24gdGhlIHNlY29uZCB0aW1lLiBUaGlzIG1lYW5zXG4gKiB5b3UgY2FuIGhhdmUgcGxhY2UgdGhhdCBnZW5lcmljYWxseSBnZXRzIGFuIGVudW0gZm9yIHRleHR1cmUgZm9ybWF0cyBmb3IgZXhhbXBsZS5cbiAqIGFuZCBhcyBsb25nIGFzIHlvdSBwcmltZWQgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGV4dGVuc2lvbnNcbiAqXG4gKiBJZiB5b3UncmUgdXNpbmcgYHR3Z2wuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dGAgdG8gZW5hYmxlIHlvdXIgZXh0ZW5zaW9uc1xuICogdGhlbiB0d2dsIHdpbGwgYXV0b21hdGljYWxseSBnZXQgdGhlIGV4dGVuc2lvbidzIGVudW1zLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dCBvciBhbnkgZXh0ZW5zaW9uIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIHRoZSB2YWx1ZSBvZiB0aGUgZW51bSB5b3Ugd2FudCB0byBsb29rIHVwLlxuICogQHJldHVybiB7c3RyaW5nfSBlbnVtIHN0cmluZyBvciBoZXggdmFsdWVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICogQGZ1bmN0aW9uIGdsRW51bVRvU3RyaW5nXG4gKi9cblxuXG52YXIgZ2xFbnVtVG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoYXZlRW51bXNGb3JUeXBlID0ge307XG4gIHZhciBlbnVtcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGFkZEVudW1zKGdsKSB7XG4gICAgdmFyIHR5cGUgPSBnbC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgaWYgKCFoYXZlRW51bXNGb3JUeXBlW3R5cGVdKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZ2wpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnbFtrZXldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHZhciBleGlzdGluZyA9IGVudW1zW2dsW2tleV1dO1xuICAgICAgICAgIGVudW1zW2dsW2tleV1dID0gZXhpc3RpbmcgPyBcIlwiLmNvbmNhdChleGlzdGluZywgXCIgfCBcIikuY29uY2F0KGtleSkgOiBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGF2ZUVudW1zRm9yVHlwZVt0eXBlXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGdsRW51bVRvU3RyaW5nKGdsLCB2YWx1ZSkge1xuICAgIGFkZEVudW1zKGdsKTtcbiAgICByZXR1cm4gZW51bXNbdmFsdWVdIHx8ICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gXCIweFwiLmNvbmNhdCh2YWx1ZS50b1N0cmluZygxNikpIDogdmFsdWUpO1xuICB9O1xufSgpO1xuXG5leHBvcnRzLmdsRW51bVRvU3RyaW5nID0gZ2xFbnVtVG9TdHJpbmc7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3YzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3YzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZCA9IGFkZDtcbmV4cG9ydHMuY29weSA9IGNvcHk7XG5leHBvcnRzLmNyZWF0ZSA9IGNyZWF0ZTtcbmV4cG9ydHMuY3Jvc3MgPSBjcm9zcztcbmV4cG9ydHMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbmV4cG9ydHMuZGlzdGFuY2VTcSA9IGRpc3RhbmNlU3E7XG5leHBvcnRzLmRpdmlkZSA9IGRpdmlkZTtcbmV4cG9ydHMuZGl2U2NhbGFyID0gZGl2U2NhbGFyO1xuZXhwb3J0cy5kb3QgPSBkb3Q7XG5leHBvcnRzLmxlcnAgPSBsZXJwO1xuZXhwb3J0cy5sZXJwViA9IGxlcnBWO1xuZXhwb3J0cy5sZW5ndGggPSBsZW5ndGg7XG5leHBvcnRzLmxlbmd0aFNxID0gbGVuZ3RoU3E7XG5leHBvcnRzLm1heCA9IG1heDtcbmV4cG9ydHMubWluID0gbWluO1xuZXhwb3J0cy5tdWxTY2FsYXIgPSBtdWxTY2FsYXI7XG5leHBvcnRzLm11bHRpcGx5ID0gbXVsdGlwbHk7XG5leHBvcnRzLm5lZ2F0ZSA9IG5lZ2F0ZTtcbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplO1xuZXhwb3J0cy5zZXREZWZhdWx0VHlwZSA9IHNldERlZmF1bHRUeXBlO1xuZXhwb3J0cy5zdWJ0cmFjdCA9IHN1YnRyYWN0O1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICpcbiAqIFZlYzMgbWF0aCBtYXRoIGZ1bmN0aW9ucy5cbiAqXG4gKiBBbG1vc3QgYWxsIGZ1bmN0aW9ucyB0YWtlIGFuIG9wdGlvbmFsIGBkc3RgIGFyZ3VtZW50LiBJZiBpdCBpcyBub3QgcGFzc2VkIGluIHRoZVxuICogZnVuY3Rpb25zIHdpbGwgY3JlYXRlIGEgbmV3IFZlYzMuIEluIG90aGVyIHdvcmRzIHlvdSBjYW4gZG8gdGhpc1xuICpcbiAqICAgICB2YXIgdiA9IHYzLmNyb3NzKHYxLCB2Mik7ICAvLyBDcmVhdGVzIGEgbmV3IFZlYzMgd2l0aCB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyLlxuICpcbiAqIG9yXG4gKlxuICogICAgIHZhciB2ID0gdjMuY3JlYXRlKCk7XG4gKiAgICAgdjMuY3Jvc3ModjEsIHYyLCB2KTsgIC8vIFB1dHMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdjEgeCB2MiBpbiB2XG4gKlxuICogVGhlIGZpcnN0IHN0eWxlIGlzIG9mdGVuIGVhc2llciBidXQgZGVwZW5kaW5nIG9uIHdoZXJlIGl0J3MgdXNlZCBpdCBnZW5lcmF0ZXMgZ2FyYmFnZSB3aGVyZVxuICogYXMgdGhlcmUgaXMgYWxtb3N0IG5ldmVyIGFsbG9jYXRpb24gd2l0aCB0aGUgc2Vjb25kIHN0eWxlLlxuICpcbiAqIEl0IGlzIGFsd2F5cyBzYXZlIHRvIHBhc3MgYW55IHZlY3RvciBhcyB0aGUgZGVzdGluYXRpb24uIFNvIGZvciBleGFtcGxlXG4gKlxuICogICAgIHYzLmNyb3NzKHYxLCB2MiwgdjEpOyAgLy8gUHV0cyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyIGluIHYxXG4gKlxuICogQG1vZHVsZSB0d2dsL3YzXG4gKi9cbnZhciBWZWNUeXBlID0gRmxvYXQzMkFycmF5O1xuLyoqXG4gKiBBIEphdmFTY3JpcHQgYXJyYXkgd2l0aCAzIHZhbHVlcyBvciBhIEZsb2F0MzJBcnJheSB3aXRoIDMgdmFsdWVzLlxuICogV2hlbiBjcmVhdGVkIGJ5IHRoZSBsaWJyYXJ5IHdpbGwgY3JlYXRlIHRoZSBkZWZhdWx0IHR5cGUgd2hpY2ggaXMgYEZsb2F0MzJBcnJheWBcbiAqIGJ1dCBjYW4gYmUgc2V0IGJ5IGNhbGxpbmcge0BsaW5rIG1vZHVsZTp0d2dsL3YzLnNldERlZmF1bHRUeXBlfS5cbiAqIEB0eXBlZGVmIHsobnVtYmVyW118RmxvYXQzMkFycmF5KX0gVmVjM1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuLyoqXG4gKiBTZXRzIHRoZSB0eXBlIHRoaXMgbGlicmFyeSBjcmVhdGVzIGZvciBhIFZlYzNcbiAqIEBwYXJhbSB7Y29uc3RydWN0b3J9IGN0b3IgdGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgdHlwZS4gRWl0aGVyIGBGbG9hdDMyQXJyYXlgIG9yIGBBcnJheWBcbiAqIEByZXR1cm4ge2NvbnN0cnVjdG9yfSBwcmV2aW91cyBjb25zdHJ1Y3RvciBmb3IgVmVjM1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuZnVuY3Rpb24gc2V0RGVmYXVsdFR5cGUoY3Rvcikge1xuICB2YXIgb2xkVHlwZSA9IFZlY1R5cGU7XG4gIFZlY1R5cGUgPSBjdG9yO1xuICByZXR1cm4gb2xkVHlwZTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHZlYzM7IG1heSBiZSBjYWxsZWQgd2l0aCB4LCB5LCB6IHRvIHNldCBpbml0aWFsIHZhbHVlcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbeF0gSW5pdGlhbCB4IHZhbHVlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBJbml0aWFsIHkgdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3pdIEluaXRpYWwgeiB2YWx1ZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHRoZSBjcmVhdGVkIHZlY3RvclxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUoeCwgeSwgeikge1xuICB2YXIgZHN0ID0gbmV3IFZlY1R5cGUoMyk7XG5cbiAgaWYgKHgpIHtcbiAgICBkc3RbMF0gPSB4O1xuICB9XG5cbiAgaWYgKHkpIHtcbiAgICBkc3RbMV0gPSB5O1xuICB9XG5cbiAgaWYgKHopIHtcbiAgICBkc3RbMl0gPSB6O1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQWRkcyB0d28gdmVjdG9yczsgYXNzdW1lcyBhIGFuZCBiIGhhdmUgdGhlIHNhbWUgZGltZW5zaW9uLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBBIHZlY3RvciB0aGEgdGlzIHRoZSBzdW0gb2YgYSBhbmQgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gYWRkKGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIGRzdFswXSA9IGFbMF0gKyBiWzBdO1xuICBkc3RbMV0gPSBhWzFdICsgYlsxXTtcbiAgZHN0WzJdID0gYVsyXSArIGJbMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFN1YnRyYWN0cyB0d28gdmVjdG9ycy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gQSB2ZWN0b3IgdGhhdCBpcyB0aGUgZGlmZmVyZW5jZSBvZiBhIGFuZCBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBzdWJ0cmFjdChhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSBhWzBdIC0gYlswXTtcbiAgZHN0WzFdID0gYVsxXSAtIGJbMV07XG4gIGRzdFsyXSA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gdmVjdG9ycy5cbiAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiBhbmQgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudCB0LCByZXR1cm5zXG4gKiBhICsgdCAqIChiIC0gYSkuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge251bWJlcn0gdCBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgbGluZWFyIGludGVycG9sYXRlZCByZXN1bHQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgdCwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gYVswXSArIHQgKiAoYlswXSAtIGFbMF0pO1xuICBkc3RbMV0gPSBhWzFdICsgdCAqIChiWzFdIC0gYVsxXSk7XG4gIGRzdFsyXSA9IGFbMl0gKyB0ICogKGJbMl0gLSBhWzJdKTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUGVyZm9ybXMgbGluZWFyIGludGVycG9sYXRpb24gb24gdHdvIHZlY3RvcnMuXG4gKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgYW5kIGludGVycG9sYXRpb24gY29lZmZpY2llbnQgdmVjdG9yIHQsIHJldHVybnNcbiAqIGEgKyB0ICogKGIgLSBhKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdCBJbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50cyB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gbGVycFYoYSwgYiwgdCwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gYVswXSArIHRbMF0gKiAoYlswXSAtIGFbMF0pO1xuICBkc3RbMV0gPSBhWzFdICsgdFsxXSAqIChiWzFdIC0gYVsxXSk7XG4gIGRzdFsyXSA9IGFbMl0gKyB0WzJdICogKGJbMl0gLSBhWzJdKTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUmV0dXJuIG1heCB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgcmV0dXJuc1xuICogW21heChhWzBdLCBiWzBdKSwgbWF4KGFbMV0sIGJbMV0pLCBtYXgoYVsyXSwgYlsyXSldLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgbWF4IGNvbXBvbmVudHMgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBtYXgoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIGRzdFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBkc3RbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUmV0dXJuIG1pbiB2YWx1ZXMgb2YgdHdvIHZlY3RvcnMuXG4gKiBHaXZlbiB2ZWN0b3JzIGEgYW5kIGIgcmV0dXJuc1xuICogW21pbihhWzBdLCBiWzBdKSwgbWluKGFbMV0sIGJbMV0pLCBtaW4oYVsyXSwgYlsyXSldLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgbWluIGNvbXBvbmVudHMgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBtaW4oYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIGRzdFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBkc3RbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhIHNjYWxhci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGsgVGhlIHNjYWxhci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHNjYWxlZCB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIG11bFNjYWxhcih2LCBrLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSB2WzBdICogaztcbiAgZHN0WzFdID0gdlsxXSAqIGs7XG4gIGRzdFsyXSA9IHZbMl0gKiBrO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge251bWJlcn0gayBUaGUgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgc2NhbGVkIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gZGl2U2NhbGFyKHYsIGssIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIGRzdFswXSA9IHZbMF0gLyBrO1xuICBkc3RbMV0gPSB2WzFdIC8gaztcbiAgZHN0WzJdID0gdlsyXSAvIGs7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGJvdGggdmVjdG9ycyBoYXZlXG4gKiB0aHJlZSBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdmVjdG9yIG9mIGEgY3Jvc3MgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gY3Jvc3MoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgdmFyIHQxID0gYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXTtcbiAgdmFyIHQyID0gYVswXSAqIGJbMV0gLSBhWzFdICogYlswXTtcbiAgZHN0WzBdID0gYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXTtcbiAgZHN0WzFdID0gdDE7XG4gIGRzdFsyXSA9IHQyO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYm90aCB2ZWN0b3JzIGhhdmVcbiAqIHRocmVlIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGRvdCBwcm9kdWN0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBsZW5ndGggb2YgdmVjdG9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgdmVjdG9yLlxuICogQHJldHVybiB7bnVtYmVyfSBsZW5ndGggb2YgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBsZW5ndGgodikge1xuICByZXR1cm4gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBzcXVhcmUgb2YgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gbGVuZ3RoU3Eodikge1xuICByZXR1cm4gdlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdO1xufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciBkeCA9IGFbMF0gLSBiWzBdO1xuICB2YXIgZHkgPSBhWzFdIC0gYlsxXTtcbiAgdmFyIGR6ID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6KTtcbn1cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIHBvaW50c1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHNxdWFyZSBvZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRpc3RhbmNlU3EoYSwgYikge1xuICB2YXIgZHggPSBhWzBdIC0gYlswXTtcbiAgdmFyIGR5ID0gYVsxXSAtIGJbMV07XG4gIHZhciBkeiA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6O1xufVxuLyoqXG4gKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGl0cyBFdWNsaWRlYW4gbGVuZ3RoIGFuZCByZXR1cm5zIHRoZSBxdW90aWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgbm9ybWFsaXplZCB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShhLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICB2YXIgbGVuU3EgPSBhWzBdICogYVswXSArIGFbMV0gKiBhWzFdICsgYVsyXSAqIGFbMl07XG4gIHZhciBsZW4gPSBNYXRoLnNxcnQobGVuU3EpO1xuXG4gIGlmIChsZW4gPiAwLjAwMDAxKSB7XG4gICAgZHN0WzBdID0gYVswXSAvIGxlbjtcbiAgICBkc3RbMV0gPSBhWzFdIC8gbGVuO1xuICAgIGRzdFsyXSA9IGFbMl0gLyBsZW47XG4gIH0gZWxzZSB7XG4gICAgZHN0WzBdID0gMDtcbiAgICBkc3RbMV0gPSAwO1xuICAgIGRzdFsyXSA9IDA7XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBOZWdhdGVzIGEgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IC12LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBuZWdhdGUodiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gLXZbMF07XG4gIGRzdFsxXSA9IC12WzFdO1xuICBkc3RbMl0gPSAtdlsyXTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ29waWVzIGEgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IEEgY29weSBvZiB2LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBjb3B5KHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIGRzdFswXSA9IHZbMF07XG4gIGRzdFsxXSA9IHZbMV07XG4gIGRzdFsyXSA9IHZbMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIE11bHRpcGxpZXMgYSB2ZWN0b3IgYnkgYW5vdGhlciB2ZWN0b3IgKGNvbXBvbmVudC13aXNlKTsgYXNzdW1lcyBhIGFuZFxuICogYiBoYXZlIHRoZSBzYW1lIGxlbmd0aC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHZlY3RvciBvZiBwcm9kdWN0cyBvZiBlbnRyaWVzIG9mIGEgYW5kXG4gKiAgICAgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gYVswXSAqIGJbMF07XG4gIGRzdFsxXSA9IGFbMV0gKiBiWzFdO1xuICBkc3RbMl0gPSBhWzJdICogYlsyXTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogRGl2aWRlcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdmVjdG9yIG9mIHF1b3RpZW50cyBvZiBlbnRyaWVzIG9mIGEgYW5kXG4gKiAgICAgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gZGl2aWRlKGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIGRzdFswXSA9IGFbMF0gLyBiWzBdO1xuICBkc3RbMV0gPSBhWzFdIC8gYlsxXTtcbiAgZHN0WzJdID0gYVsyXSAvIGJbMl07XG4gIHJldHVybiBkc3Q7XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3ZlcnRleC1hcnJheXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy92ZXJ0ZXgtYXJyYXlzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVWZXJ0ZXhBcnJheUluZm8gPSBjcmVhdGVWZXJ0ZXhBcnJheUluZm87XG5leHBvcnRzLmNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXMgPSBjcmVhdGVWQU9BbmRTZXRBdHRyaWJ1dGVzO1xuZXhwb3J0cy5jcmVhdGVWQU9Gcm9tQnVmZmVySW5mbyA9IGNyZWF0ZVZBT0Zyb21CdWZmZXJJbmZvO1xuXG52YXIgcHJvZ3JhbXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Byb2dyYW1zLmpzICovIFwiLi9zcmMvcHJvZ3JhbXMuanNcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogdmVydGV4IGFycmF5IG9iamVjdCByZWxhdGVkIGZ1bmN0aW9uc1xuICpcbiAqIFlvdSBzaG91bGQgZ2VuZXJhbGx5IG5vdCBuZWVkIHRvIHVzZSB0aGVzZSBmdW5jdGlvbnMuIFRoZXkgYXJlIHByb3ZpZGVkXG4gKiBmb3IgdGhvc2UgY2FzZXMgd2hlcmUgeW91J3JlIGRvaW5nIHNvbWV0aGluZyBvdXQgb2YgdGhlIG9yZGluYXJ5XG4gKiBhbmQgeW91IG5lZWQgbG93ZXIgbGV2ZWwgYWNjZXNzLlxuICpcbiAqIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLmF0dHJpYnV0ZXNgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC92ZXJ0ZXhBcnJheXNcbiAqL1xudmFyIEVMRU1FTlRfQVJSQVlfQlVGRkVSID0gMHg4ODkzO1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBWZXJ0ZXhBcnJheUluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBudW1FbGVtZW50cyBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHBhc3MgdG8gYGdsLmRyYXdBcnJheXNgIG9yIGBnbC5kcmF3RWxlbWVudHNgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtlbGVtZW50VHlwZV0gVGhlIHR5cGUgb2YgaW5kaWNlcyBgVU5TSUdORURfQllURWAsIGBVTlNJR05FRF9TSE9SVGAgZXRjLi5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xWZXJ0ZXhBcnJheU9iamVjdH0gW3ZlcnRleEFycmF5T2JqZWN0XSBhIHZlcnRleCBhcnJheSBvYmplY3RcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIFZlcnRleEFycmF5SW5mbyBmcm9tIGEgQnVmZmVySW5mbyBhbmQgb25lIG9yIG1vcmUgUHJvZ3JhbUluZm9zXG4gKlxuICogVGhpcyBjYW4gYmUgcGFzc2VkIHRvIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc30gYW5kIHRvXG4gKiB7QGxpbmsgbW9kdWxlOnR3Z2w6ZHJhd0J1ZmZlckluZm99LlxuICpcbiAqID4gKipJTVBPUlRBTlQ6KiogVmVydGV4IEFycmF5IE9iamVjdHMgYXJlICoqbm90KiogYSBkaXJlY3QgYW5hbG9nIGZvciBhIEJ1ZmZlckluZm8uIFZlcnRleCBBcnJheSBPYmplY3RzXG4gKiAgIGFzc2lnbiBidWZmZXJzIHRvIHNwZWNpZmljIGF0dHJpYnV0ZXMgYXQgY3JlYXRpb24gdGltZS4gVGhhdCBtZWFucyB0aGV5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBwcm9ncmFtc1xuICogICB3aG8ncyBhdHRyaWJ1dGVzIHVzZSB0aGUgc2FtZSBhdHRyaWJ1dGUgbG9jYXRpb25zIGZvciB0aGUgc2FtZSBwdXJwb3Nlcy5cbiAqXG4gKiA+IEJpbmQgeW91ciBhdHRyaWJ1dGUgbG9jYXRpb25zIGJ5IHBhc3NpbmcgYW4gYXJyYXkgb2YgYXR0cmlidXRlIG5hbWVzIHRvIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb31cbiAqICAgb3IgdXNlIFdlYkdMIDIncyBHTFNMIEVTIDMncyBgbGF5b3V0KGxvY2F0aW9uID0gPG51bT4pYCB0byBtYWtlIHN1cmUgbG9jYXRpb25zIG1hdGNoLlxuICpcbiAqIGFsc29cbiAqXG4gKiA+ICoqSU1QT1JUQU5UOioqIEFmdGVyIGNhbGxpbmcgdHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlIHdpdGggYSBCdWZmZXJJbmZvIHRoYXQgdXNlcyBhIFZlcnRleCBBcnJheSBPYmplY3RcbiAqICAgdGhhdCBWZXJ0ZXggQXJyYXkgT2JqZWN0IHdpbGwgYmUgYm91bmQuIFRoYXQgbWVhbnMgKipBTlkgTUFOSVBVTEFUSU9OIE9GIEVMRU1FTlRfQVJSQVlfQlVGRkVSIG9yIEFUVFJJQlVURVMqKlxuICogICB3aWxsIGFmZmVjdCB0aGUgVmVydGV4IEFycmF5IE9iamVjdCBzdGF0ZS5cbiAqXG4gKiA+IENhbGwgYGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKWAgdG8gZ2V0IGJhY2sgbWFuaXB1bGF0aW5nIHRoZSBnbG9iYWwgYXR0cmlidXRlcyBhbmQgRUxFTUVOVF9BUlJBWV9CVUZGRVIuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvfG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvW119IHByb2dyYW1JbmZvIGEgcHJvZ3JhbUluZm8gb3IgYXJyYXkgb2YgcHJvZ3JhbUluZm9zXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IGJ1ZmZlckluZm8gQnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzIGV0Yy4uLlxuICpcbiAqICAgIFlvdSBuZWVkIHRvIG1ha2Ugc3VyZSBldmVyeSBhdHRyaWJ1dGUgdGhhdCB3aWxsIGJlIHVzZWQgaXMgYm91bmQuIFNvIGZvciBleGFtcGxlIGFzc3VtZSBzaGFkZXIgMVxuICogICAgdXNlcyBhdHRyaWJ1dGVzIEEsIEIsIEMgYW5kIHNoYWRlciAyIHVzZXMgYXR0cmlidXRlcyBBLCBCLCBELiBJZiB5b3Ugb25seSBwYXNzIGluIHRoZSBwcm9ncmFtSW5mb1xuICogICAgZm9yIHNoYWRlciAxIHRoZW4gb25seSBhdHRyaWJ1dGVzIEEsIEIsIGFuZCBDIHdpbGwgaGF2ZSB0aGVpciBhdHRyaWJ1dGVzIHNldCBiZWNhdXNlIFRXR0wgZG9lc24ndFxuICogICAgbm93IGF0dHJpYnV0ZSBEJ3MgbG9jYXRpb24uXG4gKlxuICogICAgU28sIHlvdSBjYW4gcGFzcyBpbiBib3RoIHNoYWRlciAxIGFuZCBzaGFkZXIgMidzIHByb2dyYW1JbmZvXG4gKlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvfSBUaGUgY3JlYXRlZCBWZXJ0ZXhBcnJheUluZm9cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVmVydGV4QXJyYXlJbmZvKGdsLCBwcm9ncmFtSW5mb3MsIGJ1ZmZlckluZm8pIHtcbiAgdmFyIHZhbyA9IGdsLmNyZWF0ZVZlcnRleEFycmF5KCk7XG4gIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pO1xuXG4gIGlmICghcHJvZ3JhbUluZm9zLmxlbmd0aCkge1xuICAgIHByb2dyYW1JbmZvcyA9IFtwcm9ncmFtSW5mb3NdO1xuICB9XG5cbiAgcHJvZ3JhbUluZm9zLmZvckVhY2goZnVuY3Rpb24gKHByb2dyYW1JbmZvKSB7XG4gICAgcHJvZ3JhbXMuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAgfSk7XG4gIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgcmV0dXJuIHtcbiAgICBudW1FbGVtZW50czogYnVmZmVySW5mby5udW1FbGVtZW50cyxcbiAgICBlbGVtZW50VHlwZTogYnVmZmVySW5mby5lbGVtZW50VHlwZSxcbiAgICB2ZXJ0ZXhBcnJheU9iamVjdDogdmFvXG4gIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYSB2ZXJ0ZXggYXJyYXkgb2JqZWN0IGFuZCB0aGVuIHNldHMgdGhlIGF0dHJpYnV0ZXMgb24gaXRcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IHNldHRlcnMgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gYXR0cmlicyBBdHRyaWJJbmZvcyBtYXBwZWQgYnkgYXR0cmlidXRlIG5hbWUuXG4gKiBAcGFyYW0ge1dlYkdMQnVmZmVyfSBbaW5kaWNlc10gYW4gb3B0aW9uYWwgRUxFTUVOVF9BUlJBWV9CVUZGRVIgb2YgaW5kaWNlc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ZlcnRleEFycmF5c1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVkFPQW5kU2V0QXR0cmlidXRlcyhnbCwgc2V0dGVycywgYXR0cmlicywgaW5kaWNlcykge1xuICB2YXIgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG4gIHByb2dyYW1zLnNldEF0dHJpYnV0ZXMoc2V0dGVycywgYXR0cmlicyk7XG5cbiAgaWYgKGluZGljZXMpIHtcbiAgICBnbC5iaW5kQnVmZmVyKEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBpbmRpY2VzKTtcbiAgfSAvLyBXZSB1bmJpbmQgdGhpcyBiZWNhdXNlIG90aGVyd2lzZSBhbnkgY2hhbmdlIHRvIEVMRU1FTlRfQVJSQVlfQlVGRkVSXG4gIC8vIGxpa2Ugd2hlbiBjcmVhdGluZyBidWZmZXJzIGZvciBvdGhlciBzdHVmZiB3aWxsIG1lc3MgdXAgdGhpcyBWQU8ncyBiaW5kaW5nXG5cblxuICBnbC5iaW5kVmVydGV4QXJyYXkobnVsbCk7XG4gIHJldHVybiB2YW87XG59XG4vKipcbiAqIENyZWF0ZXMgYSB2ZXJ0ZXggYXJyYXkgb2JqZWN0IGFuZCB0aGVuIHNldHMgdGhlIGF0dHJpYnV0ZXNcbiAqIG9uIGl0XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqICAgICAgICB0byB1c2UuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj58IG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfSBwcm9ncmFtSW5mbyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVByb2dyYW1JbmZvIG9yIEF0dHJpYnV0ZSBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmlidXRlU2V0dGVyc1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBidWZmZXJJbmZvIEJ1ZmZlckluZm8gYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyBldGMuLi5cbiAqIEBwYXJhbSB7V2ViR0xCdWZmZXJ9IFtpbmRpY2VzXSBhbiBvcHRpb25hbCBFTEVNRU5UX0FSUkFZX0JVRkZFUiBvZiBpbmRpY2VzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVWQU9Gcm9tQnVmZmVySW5mbyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pIHtcbiAgcmV0dXJuIGNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLmF0dHJpYlNldHRlcnMgfHwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8uYXR0cmlicywgYnVmZmVySW5mby5pbmRpY2VzKTtcbn1cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR3Z2wtZnVsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIiBcbmNvbnN0IGdsc2wgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbmNvbnN0IHR3Z2wgPSByZXF1aXJlKFwidHdnbC5qc1wiKTtcblxuY29uc3QgdmVydGV4U2hhZGVyID0gZ2xzbChbXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSBwb3NpdGlvbjtcXG59XCJdKTsgXG5jb25zdCBmcmFnbWVudFNoYWRlciA9IGdsc2woW1wicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG4gXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgdV9tb3VzZTtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG4gXFxuLy9cXG4vLyBEZXNjcmlwdGlvbiA6IEFycmF5IGFuZCB0ZXh0dXJlbGVzcyBHTFNMIDJELzNELzREIHNpbXBsZXhcXG4vLyAgICAgICAgICAgICAgIG5vaXNlIGZ1bmN0aW9ucy5cXG4vLyAgICAgIEF1dGhvciA6IElhbiBNY0V3YW4sIEFzaGltYSBBcnRzLlxcbi8vICBNYWludGFpbmVyIDogaWptXFxuLy8gICAgIExhc3Rtb2QgOiAyMDExMDgyMiAoaWptKVxcbi8vICAgICBMaWNlbnNlIDogQ29weXJpZ2h0IChDKSAyMDExIEFzaGltYSBBcnRzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbi8vICAgICAgICAgICAgICAgRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlLlxcbi8vICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FzaGltYS93ZWJnbC1ub2lzZVxcbi8vXFxuXFxudmVjMyBtb2QyODkodmVjMyB4KSB7XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWM0IG1vZDI4OSh2ZWM0IHgpIHtcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzQgcGVybXV0ZSh2ZWM0IHgpIHtcXG4gICAgIHJldHVybiBtb2QyODkoKCh4KjM0LjApKzEuMCkqeCk7XFxufVxcblxcbnZlYzQgdGF5bG9ySW52U3FydCh2ZWM0IHIpXFxue1xcbiAgcmV0dXJuIDEuNzkyODQyOTE0MDAxNTkgLSAwLjg1MzczNDcyMDk1MzE0ICogcjtcXG59XFxuXFxuZmxvYXQgc25vaXNlKHZlYzMgdilcXG4gIHtcXG4gIGNvbnN0IHZlYzIgIEMgPSB2ZWMyKDEuMC82LjAsIDEuMC8zLjApIDtcXG4gIGNvbnN0IHZlYzQgIEQgPSB2ZWM0KDAuMCwgMC41LCAxLjAsIDIuMCk7XFxuXFxuLy8gRmlyc3QgY29ybmVyXFxuICB2ZWMzIGkgID0gZmxvb3IodiArIGRvdCh2LCBDLnl5eSkgKTtcXG4gIHZlYzMgeDAgPSAgIHYgLSBpICsgZG90KGksIEMueHh4KSA7XFxuXFxuLy8gT3RoZXIgY29ybmVyc1xcbiAgdmVjMyBnID0gc3RlcCh4MC55engsIHgwLnh5eik7XFxuICB2ZWMzIGwgPSAxLjAgLSBnO1xcbiAgdmVjMyBpMSA9IG1pbiggZy54eXosIGwuenh5ICk7XFxuICB2ZWMzIGkyID0gbWF4KCBnLnh5eiwgbC56eHkgKTtcXG5cXG4gIC8vICAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4O1xcbiAgLy8gICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHg7XFxuICAvLyAgIHgyID0geDAgLSBpMiAgKyAyLjAgKiBDLnh4eDtcXG4gIC8vICAgeDMgPSB4MCAtIDEuMCArIDMuMCAqIEMueHh4O1xcbiAgdmVjMyB4MSA9IHgwIC0gaTEgKyBDLnh4eDtcXG4gIHZlYzMgeDIgPSB4MCAtIGkyICsgQy55eXk7IC8vIDIuMCpDLnggPSAxLzMgPSBDLnlcXG4gIHZlYzMgeDMgPSB4MCAtIEQueXl5OyAgICAgIC8vIC0xLjArMy4wKkMueCA9IC0wLjUgPSAtRC55XFxuXFxuLy8gUGVybXV0YXRpb25zXFxuICBpID0gbW9kMjg5KGkpO1xcbiAgdmVjNCBwID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShcXG4gICAgICAgICAgICAgaS56ICsgdmVjNCgwLjAsIGkxLnosIGkyLnosIDEuMCApKVxcbiAgICAgICAgICAgKyBpLnkgKyB2ZWM0KDAuMCwgaTEueSwgaTIueSwgMS4wICkpXFxuICAgICAgICAgICArIGkueCArIHZlYzQoMC4wLCBpMS54LCBpMi54LCAxLjAgKSk7XFxuXFxuLy8gR3JhZGllbnRzOiA3eDcgcG9pbnRzIG92ZXIgYSBzcXVhcmUsIG1hcHBlZCBvbnRvIGFuIG9jdGFoZWRyb24uXFxuLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQ5ICg0OSo2ID0gMjk0KVxcbiAgZmxvYXQgbl8gPSAwLjE0Mjg1NzE0Mjg1NzsgLy8gMS4wLzcuMFxcbiAgdmVjMyAgbnMgPSBuXyAqIEQud3l6IC0gRC54eng7XFxuXFxuICB2ZWM0IGogPSBwIC0gNDkuMCAqIGZsb29yKHAgKiBucy56ICogbnMueik7ICAvLyAgbW9kKHAsNyo3KVxcblxcbiAgdmVjNCB4XyA9IGZsb29yKGogKiBucy56KTtcXG4gIHZlYzQgeV8gPSBmbG9vcihqIC0gNy4wICogeF8gKTsgICAgLy8gbW9kKGosTilcXG5cXG4gIHZlYzQgeCA9IHhfICpucy54ICsgbnMueXl5eTtcXG4gIHZlYzQgeSA9IHlfICpucy54ICsgbnMueXl5eTtcXG4gIHZlYzQgaCA9IDEuMCAtIGFicyh4KSAtIGFicyh5KTtcXG5cXG4gIHZlYzQgYjAgPSB2ZWM0KCB4Lnh5LCB5Lnh5ICk7XFxuICB2ZWM0IGIxID0gdmVjNCggeC56dywgeS56dyApO1xcblxcbiAgLy92ZWM0IHMwID0gdmVjNChsZXNzVGhhbihiMCwwLjApKSoyLjAgLSAxLjA7XFxuICAvL3ZlYzQgczEgPSB2ZWM0KGxlc3NUaGFuKGIxLDAuMCkpKjIuMCAtIDEuMDtcXG4gIHZlYzQgczAgPSBmbG9vcihiMCkqMi4wICsgMS4wO1xcbiAgdmVjNCBzMSA9IGZsb29yKGIxKSoyLjAgKyAxLjA7XFxuICB2ZWM0IHNoID0gLXN0ZXAoaCwgdmVjNCgwLjApKTtcXG5cXG4gIHZlYzQgYTAgPSBiMC54enl3ICsgczAueHp5dypzaC54eHl5IDtcXG4gIHZlYzQgYTEgPSBiMS54enl3ICsgczEueHp5dypzaC56end3IDtcXG5cXG4gIHZlYzMgcDAgPSB2ZWMzKGEwLnh5LGgueCk7XFxuICB2ZWMzIHAxID0gdmVjMyhhMC56dyxoLnkpO1xcbiAgdmVjMyBwMiA9IHZlYzMoYTEueHksaC56KTtcXG4gIHZlYzMgcDMgPSB2ZWMzKGExLnp3LGgudyk7XFxuXFxuLy9Ob3JtYWxpc2UgZ3JhZGllbnRzXFxuICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcXG4gIHAwICo9IG5vcm0ueDtcXG4gIHAxICo9IG5vcm0ueTtcXG4gIHAyICo9IG5vcm0uejtcXG4gIHAzICo9IG5vcm0udztcXG5cXG4vLyBNaXggZmluYWwgbm9pc2UgdmFsdWVcXG4gIHZlYzQgbSA9IG1heCgwLjYgLSB2ZWM0KGRvdCh4MCx4MCksIGRvdCh4MSx4MSksIGRvdCh4Mix4MiksIGRvdCh4Myx4MykpLCAwLjApO1xcbiAgbSA9IG0gKiBtO1xcbiAgcmV0dXJuIDQyLjAgKiBkb3QoIG0qbSwgdmVjNCggZG90KHAwLHgwKSwgZG90KHAxLHgxKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdChwMix4MiksIGRvdChwMyx4MykgKSApO1xcbiAgfVxcblxcbnZlYzMgdGludF8wKHZlYzMgdGhpbmdUb0NvbG9yLCB2ZWMzIHRpbnQpIHtcXG4gICAgcmV0dXJuIHRoaW5nVG9Db2xvciArIHRpbnQ7XFxufVxcblxcbiBcXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uOyAvLyBnZXQgdGhlIHNjcmVlbiBzcGFjZVxcbiAgICAgIFxcbiAgICB2ZWMzIHBvcyA9IHZlYzMoc3QueHksIHVfdGltZSk7IC8vIHRyYXZlbCBhbG9uZyB0aGUgWi1kaW1lbnNpb24gaW4gdGltZS5cXG4gICAgdmVjMyByZ2IgPSB2ZWMzKDAuMSwgY29zKHVfdGltZSksIDAuNSk7IC8vIGN5Y2xlIHRoZSBncmVlbiBjb2xvclxcbiAgICB2ZWMzIG5vaXNlID0gdmVjMyhzbm9pc2UocG9zKSxzbm9pc2UocG9zKSxzbm9pc2UocG9zKSk7IC8vIGdlbmVyYXRlIHRoZSBub2lzZVxcbiBcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0aW50XzAobm9pc2UsIHJnYiksIDEuMCk7IC8vIHRpbnQgdGhlIG5vaXNlIHdpdGggb3VyIGZ1bmN0aW9uIGFuZCBkcmF3IHRoZSBwaXhlbFxcbn1cIl0pOyBcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIik7XG5cbmNvbnN0IG1vdXNlID0gWzAsIDBdO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgIG1vdXNlWzBdID0gZS5wYWdlWDtcbiAgICBtb3VzZVsxXSA9IGUucGFnZVk7XG59KTtcblxuY29uc3QgcHJvZ3JhbUluZm8gPSB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcl0pO1xuXG5jb25zdCBhcnJheXMgPSB7XG4gICAgcG9zaXRpb246IFstMSwgLTEsIDAsIDEsIC0xLCAwLCAtMSwgMSwgMCwgLTEsIDEsIDAsIDEsIC0xLCAwLCAxLCAxLCAwXVxufTtcbmNvbnN0IGJ1ZmZlckluZm8gPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCBhcnJheXMpO1xuXG5mdW5jdGlvbiByZW5kZXIodGltZSkge1xuICAgIHR3Z2wucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIGdsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb25zdCB1bmlmb3JtcyA9IHtcbiAgICAgICAgdV90aW1lOiB0aW1lICogMC4wMDEsXG4gICAgICAgIHVfcmVzb2x1dGlvbjogW2dsLmNhbnZhcy53aWR0aCwgZ2wuY2FudmFzLmhlaWdodF0sXG4gICAgICAgIHVfbW91c2U6IG1vdXNlXG4gICAgfTtcblxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbUluZm8ucHJvZ3JhbSk7XG4gICAgdHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHVuaWZvcm1zKTtcbiAgICB0d2dsLmRyYXdCdWZmZXJJbmZvKGdsLCBidWZmZXJJbmZvKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xufVxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiJdfQ==
