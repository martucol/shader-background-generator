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
var fragmentShader = glsl(["precision highp float;\n#define GLSLIFY 1\n\nuniform float u_time;\nuniform float u_width;\nuniform float u_height;\nuniform vec2 u_resolution;\nuniform float u_aspect;\n\nvec3 colorppalrojo = vec3(0.647, 0.004, 0.004);\nvec3 colorppalazul = vec3(0.012, 0, 0.518);\nvec3 colornaranja = vec3(1, 0.424, 0);\nvec3 colorturquesa = vec3(0.118, 0.424, 0.816);\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nfloat hue2rgb(float f1, float f2, float hue) {\n    if (hue < 0.0)\n        hue += 1.0;\n    else if (hue > 1.0)\n        hue -= 1.0;\n    float res;\n    if ((6.0 * hue) < 1.0)\n        res = f1 + (f2 - f1) * 6.0 * hue;\n    else if ((2.0 * hue) < 1.0)\n        res = f2;\n    else if ((3.0 * hue) < 2.0)\n        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;\n    else\n        res = f1;\n    return res;\n}\n\nvec3 hsl2rgb(vec3 hsl) {\n    vec3 rgb;\n    \n    if (hsl.y == 0.0) {\n        rgb = vec3(hsl.z); // Luminance\n    } else {\n        float f2;\n        \n        if (hsl.z < 0.5)\n            f2 = hsl.z * (1.0 + hsl.y);\n        else\n            f2 = hsl.z + hsl.y - hsl.y * hsl.z;\n            \n        float f1 = 2.0 * hsl.z - f2;\n        \n        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));\n        rgb.g = hue2rgb(f1, f2, hsl.x);\n        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));\n    }   \n    return rgb;\n}\n\nvec3 hsl2rgb(float h, float s, float l) {\n    return hsl2rgb(vec3(h, s, l));\n}\n\nvoid main () {\n    // normalized position of each fragment\n    float normalizedX = (gl_FragCoord.x/u_resolution.x) * 2. -1.;\n    float normalizedY = (gl_FragCoord.y/u_resolution.y) * 2. -1.;\n    vec2 pos = vec2(normalizedX, normalizedY);\n\n    // center of the image is (0.0, 0.0)\n    vec2 center = vec2(0.0);\n\n    // if you want to make a perfect proportion , add this line to avoid circle being wider on x because of horizontal screens\n    pos.x *= u_aspect;\n\n    // this is to create a circular mask\n    float dist = length(center - pos);\n    float alpha = smoothstep(0.75, 0.85, dist);\n\n    float n = snoise(vec3(normalizedX, normalizedY, u_time*.3));\n    vec3 color = vec3(n+0.2, cos(n), n*5.);\n    vec3 masked = mix(color, vec3(1.0), alpha);\n    \n    // do not touch alpha in here. if wanting to modify \"alpha\" of layers, use mix function before this. \n    gl_FragColor = vec4(masked, 1.0);\n}"]);
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
    u_mouse: mouse,
    u_aspect: gl.canvas.width / gl.canvas.height
  };
  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);
  requestAnimationFrame(render);
}

requestAnimationFrame(render);

},{"glslify":1,"twgl.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3R3Z2wuanMvZGlzdC80LngvdHdnbC1mdWxsLmpzIiwic3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2wyVUE7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBQ0EsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQUQsQ0FBcEI7O0FBRUEsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsNEZBQUQsQ0FBRCxDQUF6QjtBQUNBLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxDQUFDLG9wS0FBRCxDQUFELENBQTNCO0FBRUEsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE9BQWxCLENBQVg7QUFFQSxJQUFNLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQ7QUFFQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQSxDQUFDLEVBQUk7QUFDeEMsRUFBQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBQyxDQUFDLEtBQWI7QUFDQSxFQUFBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFDLENBQUMsS0FBYjtBQUNILENBSEQ7QUFLQSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQUwsQ0FBdUIsRUFBdkIsRUFBMkIsQ0FBQyxZQUFELEVBQWUsY0FBZixDQUEzQixDQUFwQjtBQUVBLElBQU0sTUFBTSxHQUFHO0FBQ1gsRUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sRUFBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQUMsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUExQixFQUE2QixDQUE3QixFQUFnQyxDQUFDLENBQWpDLEVBQW9DLENBQXBDLEVBQXVDLENBQXZDLEVBQTBDLENBQTFDLEVBQTZDLENBQUMsQ0FBOUMsRUFBaUQsQ0FBakQsRUFBb0QsQ0FBcEQsRUFBdUQsQ0FBdkQsRUFBMEQsQ0FBMUQ7QUFEQyxDQUFmO0FBR0EsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLDBCQUFMLENBQWdDLEVBQWhDLEVBQW9DLE1BQXBDLENBQW5COztBQUVBLFNBQVMsTUFBVCxDQUFnQixJQUFoQixFQUFzQjtBQUNsQixFQUFBLElBQUksQ0FBQyx5QkFBTCxDQUErQixFQUFFLENBQUMsTUFBbEM7QUFDQSxFQUFBLEVBQUUsQ0FBQyxRQUFILENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0IsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUE1QixFQUFtQyxFQUFFLENBQUMsTUFBSCxDQUFVLE1BQTdDO0FBRUEsTUFBTSxRQUFRLEdBQUc7QUFDYixJQUFBLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FERjtBQUViLElBQUEsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQUgsQ0FBVSxLQUFYLEVBQWtCLEVBQUUsQ0FBQyxNQUFILENBQVUsTUFBNUIsQ0FGRDtBQUdiLElBQUEsT0FBTyxFQUFFLEtBSEk7QUFJYixJQUFBLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBSCxDQUFVLEtBQVYsR0FBZ0IsRUFBRSxDQUFDLE1BQUgsQ0FBVTtBQUp2QixHQUFqQjtBQU9BLEVBQUEsRUFBRSxDQUFDLFVBQUgsQ0FBYyxXQUFXLENBQUMsT0FBMUI7QUFDQSxFQUFBLElBQUksQ0FBQyx1QkFBTCxDQUE2QixFQUE3QixFQUFpQyxXQUFqQyxFQUE4QyxVQUE5QztBQUNBLEVBQUEsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsV0FBakIsRUFBOEIsUUFBOUI7QUFDQSxFQUFBLElBQUksQ0FBQyxjQUFMLENBQW9CLEVBQXBCLEVBQXdCLFVBQXhCO0FBRUEsRUFBQSxxQkFBcUIsQ0FBQyxNQUFELENBQXJCO0FBQ0g7O0FBQ0QscUJBQXFCLENBQUMsTUFBRCxDQUFyQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5ncykge1xuICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSBzdHJpbmdzID0gW3N0cmluZ3NdXG4gIHZhciBleHBycyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpXG4gIHZhciBwYXJ0cyA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGgtMTsgaSsrKSB7XG4gICAgcGFydHMucHVzaChzdHJpbmdzW2ldLCBleHByc1tpXSB8fCAnJylcbiAgfVxuICBwYXJ0cy5wdXNoKHN0cmluZ3NbaV0pXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBAbGljZW5zZSB0d2dsLmpzIDQuMTkuMSBDb3B5cmlnaHQgKGMpIDIwMTUsIEdyZWdnIFRhdmFyZXMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIEF2YWlsYWJsZSB2aWEgdGhlIE1JVCBsaWNlbnNlLlxuICogc2VlOiBodHRwOi8vZ2l0aHViLmNvbS9ncmVnZ21hbi90d2dsLmpzIGZvciBkZXRhaWxzXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInR3Z2xcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widHdnbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvdHdnbC1mdWxsLmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2F0dHJpYnV0ZXMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9hdHRyaWJ1dGVzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVBdHRyaWJzRnJvbUFycmF5cyA9IGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzO1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJzRnJvbUFycmF5cyA9IGNyZWF0ZUJ1ZmZlcnNGcm9tQXJyYXlzO1xuZXhwb3J0cy5jcmVhdGVCdWZmZXJGcm9tQXJyYXkgPSBjcmVhdGVCdWZmZXJGcm9tQXJyYXk7XG5leHBvcnRzLmNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5ID0gY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXk7XG5leHBvcnRzLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzID0gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXM7XG5leHBvcnRzLnNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXkgPSBzZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5O1xuZXhwb3J0cy5zZXRBdHRyaWJ1dGVQcmVmaXggPSBzZXRBdHRyaWJ1dGVQcmVmaXg7XG5leHBvcnRzLnNldEF0dHJpYnV0ZURlZmF1bHRzXyA9IHNldERlZmF1bHRzO1xuZXhwb3J0cy5nZXROdW1Db21wb25lbnRzXyA9IGdldE51bUNvbXBvbmVudHM7XG5leHBvcnRzLmdldEFycmF5XyA9IGdldEFycmF5O1xuXG52YXIgdHlwZWRBcnJheXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3R5cGVkYXJyYXlzLmpzICovIFwiLi9zcmMvdHlwZWRhcnJheXMuanNcIikpO1xuXG52YXIgaGVscGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9oZWxwZXIuanMgKi8gXCIuL3NyYy9oZWxwZXIuanNcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG52YXIgU1RBVElDX0RSQVcgPSAweDg4ZTQ7XG52YXIgQVJSQVlfQlVGRkVSID0gMHg4ODkyO1xudmFyIEVMRU1FTlRfQVJSQVlfQlVGRkVSID0gMHg4ODkzO1xudmFyIEJVRkZFUl9TSVpFID0gMHg4NzY0O1xudmFyIEJZVEUgPSAweDE0MDA7XG52YXIgVU5TSUdORURfQllURSA9IDB4MTQwMTtcbnZhciBTSE9SVCA9IDB4MTQwMjtcbnZhciBVTlNJR05FRF9TSE9SVCA9IDB4MTQwMztcbnZhciBJTlQgPSAweDE0MDQ7XG52YXIgVU5TSUdORURfSU5UID0gMHgxNDA1O1xudmFyIEZMT0FUID0gMHgxNDA2O1xuLyoqXG4gKiBMb3cgbGV2ZWwgYXR0cmlidXRlIGFuZCBidWZmZXIgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC5hdHRyaWJ1dGVzYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvYXR0cmlidXRlc1xuICovXG4vLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2VlIGEgZ2xvYmFsIGdsXG5cbnZhciBnbCA9IHVuZGVmaW5lZDtcbi8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cblxudmFyIGRlZmF1bHRzID0ge1xuICBhdHRyaWJQcmVmaXg6IFwiXCJcbn07XG4vKipcbiAqIFNldHMgdGhlIGRlZmF1bHQgYXR0cmliIHByZWZpeFxuICpcbiAqIFdoZW4gd3JpdGluZyBzaGFkZXJzIEkgcHJlZmVyIHRvIG5hbWUgYXR0cmlidXRlcyB3aXRoIGBhX2AsIHVuaWZvcm1zIHdpdGggYHVfYCBhbmQgdmFyeWluZ3Mgd2l0aCBgdl9gXG4gKiBhcyBpdCBtYWtlcyBpdCBjbGVhciB3aGVyZSB0aGV5IGNhbWUgZnJvbS4gQnV0LCB3aGVuIGJ1aWxkaW5nIGdlb21ldHJ5IEkgcHJlZmVyIHVzaW5nIHVuLXByZWZpeGVkIG5hbWVzLlxuICpcbiAqIEluIG90aGVyIHdvcmRzIEknbGwgY3JlYXRlIGFycmF5cyBvZiBnZW9tZXRyeSBsaWtlIHRoaXNcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiAuLi5cbiAqICAgICAgIG5vcm1hbDogLi4uXG4gKiAgICAgICB0ZXhjb29yZDogLi4uXG4gKiAgICAgfTtcbiAqXG4gKiBCdXQgbmVlZCB0aG9zZSBtYXBwZWQgdG8gYXR0cmlidXRlcyBhbmQgbXkgYXR0cmlidXRlcyBzdGFydCB3aXRoIGBhX2AuXG4gKlxuICogQGRlcHJlY2F0ZWQgc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXREZWZhdWx0c31cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggcHJlZml4IGZvciBhdHRyaWJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZVByZWZpeChwcmVmaXgpIHtcbiAgZGVmYXVsdHMuYXR0cmliUHJlZml4ID0gcHJlZml4O1xufVxuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICBoZWxwZXIuY29weUV4aXN0aW5nUHJvcGVydGllcyhuZXdEZWZhdWx0cywgZGVmYXVsdHMpO1xufVxuXG5mdW5jdGlvbiBzZXRCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZSwgYnVmZmVyLCBhcnJheSwgZHJhd1R5cGUpIHtcbiAgZ2wuYmluZEJ1ZmZlcih0eXBlLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKHR5cGUsIGFycmF5LCBkcmF3VHlwZSB8fCBTVEFUSUNfRFJBVyk7XG59XG4vKipcbiAqIEdpdmVuIHR5cGVkIGFycmF5IGNyZWF0ZXMgYSBXZWJHTEJ1ZmZlciBhbmQgY29waWVzIHRoZSB0eXBlZCBhcnJheVxuICogaW50byBpdC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ8U2hhcmVkQXJyYXlCdWZmZXJ8QXJyYXlCdWZmZXJWaWV3fFdlYkdMQnVmZmVyfSB0eXBlZEFycmF5IHRoZSB0eXBlZCBhcnJheS4gTm90ZTogSWYgYSBXZWJHTEJ1ZmZlciBpcyBwYXNzZWQgaW4gaXQgd2lsbCBqdXN0IGJlIHJldHVybmVkLiBObyBhY3Rpb24gd2lsbCBiZSB0YWtlblxuICogQHBhcmFtIHtudW1iZXJ9IFt0eXBlXSB0aGUgR0wgYmluZCB0eXBlIGZvciB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gYGdsLkFSUkFZX0JVRkZFUmAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2RyYXdUeXBlXSB0aGUgR0wgZHJhdyB0eXBlIGZvciB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gJ2dsLlNUQVRJQ19EUkFXYC5cbiAqIEByZXR1cm4ge1dlYkdMQnVmZmVyfSB0aGUgY3JlYXRlZCBXZWJHTEJ1ZmZlclxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCB0eXBlZEFycmF5LCB0eXBlLCBkcmF3VHlwZSkge1xuICBpZiAoaGVscGVyLmlzQnVmZmVyKGdsLCB0eXBlZEFycmF5KSkge1xuICAgIHJldHVybiB0eXBlZEFycmF5O1xuICB9XG5cbiAgdHlwZSA9IHR5cGUgfHwgQVJSQVlfQlVGRkVSO1xuICB2YXIgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIHNldEJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCB0eXBlLCBidWZmZXIsIHR5cGVkQXJyYXksIGRyYXdUeXBlKTtcbiAgcmV0dXJuIGJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gaXNJbmRpY2VzKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgPT09IFwiaW5kaWNlc1wiO1xufSAvLyBUaGlzIGlzIHJlYWxseSBqdXN0IGEgZ3Vlc3MuIFRob3VnaCBJIGNhbid0IHJlYWxseSBpbWFnaW5lIHVzaW5nXG4vLyBhbnl0aGluZyBlbHNlPyBNYXliZSBmb3Igc29tZSBjb21wcmVzc2lvbj9cblxuXG5mdW5jdGlvbiBnZXROb3JtYWxpemF0aW9uRm9yVHlwZWRBcnJheSh0eXBlZEFycmF5KSB7XG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufSAvLyBUaGlzIGlzIHJlYWxseSBqdXN0IGEgZ3Vlc3MuIFRob3VnaCBJIGNhbid0IHJlYWxseSBpbWFnaW5lIHVzaW5nXG4vLyBhbnl0aGluZyBlbHNlPyBNYXliZSBmb3Igc29tZSBjb21wcmVzc2lvbj9cblxuXG5mdW5jdGlvbiBnZXROb3JtYWxpemF0aW9uRm9yVHlwZWRBcnJheVR5cGUodHlwZWRBcnJheVR5cGUpIHtcbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBJbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5sZW5ndGggPyBhcnJheSA6IGFycmF5LmRhdGE7XG59XG5cbnZhciB0ZXhjb29yZFJFID0gL2Nvb3JkfHRleHR1cmUvaTtcbnZhciBjb2xvclJFID0gL2NvbG9yfGNvbG91ci9pO1xuXG5mdW5jdGlvbiBndWVzc051bUNvbXBvbmVudHNGcm9tTmFtZShuYW1lLCBsZW5ndGgpIHtcbiAgdmFyIG51bUNvbXBvbmVudHM7XG5cbiAgaWYgKHRleGNvb3JkUkUudGVzdChuYW1lKSkge1xuICAgIG51bUNvbXBvbmVudHMgPSAyO1xuICB9IGVsc2UgaWYgKGNvbG9yUkUudGVzdChuYW1lKSkge1xuICAgIG51bUNvbXBvbmVudHMgPSA0O1xuICB9IGVsc2Uge1xuICAgIG51bUNvbXBvbmVudHMgPSAzOyAvLyBwb3NpdGlvbiwgbm9ybWFscywgaW5kaWNlcyAuLi5cbiAgfVxuXG4gIGlmIChsZW5ndGggJSBudW1Db21wb25lbnRzID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBub3QgZ3Vlc3MgbnVtQ29tcG9uZW50cyBmb3IgYXR0cmlidXRlICdcIi5jb25jYXQobmFtZSwgXCInLiBUcmllZCBcIikuY29uY2F0KG51bUNvbXBvbmVudHMsIFwiIGJ1dCBcIikuY29uY2F0KGxlbmd0aCwgXCIgdmFsdWVzIGlzIG5vdCBldmVubHkgZGl2aXNpYmxlIGJ5IFwiKS5jb25jYXQobnVtQ29tcG9uZW50cywgXCIuIFlvdSBzaG91bGQgc3BlY2lmeSBpdC5cIikpO1xuICB9XG5cbiAgcmV0dXJuIG51bUNvbXBvbmVudHM7XG59XG5cbmZ1bmN0aW9uIGdldE51bUNvbXBvbmVudHMoYXJyYXksIGFycmF5TmFtZSkge1xuICByZXR1cm4gYXJyYXkubnVtQ29tcG9uZW50cyB8fCBhcnJheS5zaXplIHx8IGd1ZXNzTnVtQ29tcG9uZW50c0Zyb21OYW1lKGFycmF5TmFtZSwgZ2V0QXJyYXkoYXJyYXkpLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUeXBlZEFycmF5KGFycmF5LCBuYW1lKSB7XG4gIGlmICh0eXBlZEFycmF5cy5pc0FycmF5QnVmZmVyKGFycmF5KSkge1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGlmICh0eXBlZEFycmF5cy5pc0FycmF5QnVmZmVyKGFycmF5LmRhdGEpKSB7XG4gICAgcmV0dXJuIGFycmF5LmRhdGE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICBhcnJheSA9IHtcbiAgICAgIGRhdGE6IGFycmF5XG4gICAgfTtcbiAgfVxuXG4gIHZhciBUeXBlID0gYXJyYXkudHlwZTtcblxuICBpZiAoIVR5cGUpIHtcbiAgICBpZiAoaXNJbmRpY2VzKG5hbWUpKSB7XG4gICAgICBUeXBlID0gVWludDE2QXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFR5cGUgPSBGbG9hdDMyQXJyYXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBUeXBlKGFycmF5LmRhdGEpO1xufVxuLyoqXG4gKiBUaGUgaW5mbyBmb3IgYW4gYXR0cmlidXRlLiBUaGlzIGlzIGVmZmVjdGl2ZWx5IGp1c3QgdGhlIGFyZ3VtZW50cyB0byBgZ2wudmVydGV4QXR0cmliUG9pbnRlcmAgcGx1cyB0aGUgV2ViR0xCdWZmZXJcbiAqIGZvciB0aGUgYXR0cmlidXRlLlxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEF0dHJpYkluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fSBbdmFsdWVdIGEgY29uc3RhbnQgdmFsdWUgZm9yIHRoZSBhdHRyaWJ1dGUuIE5vdGU6IGlmIHRoaXMgaXMgc2V0IHRoZSBhdHRyaWJ1dGUgd2lsbCBiZVxuICogICAgZGlzYWJsZWQgYW5kIHNldCB0byB0aGlzIGNvbnN0YW50IHZhbHVlIGFuZCBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgaWdub3JlZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbnVtQ29tcG9uZW50c10gdGhlIG51bWJlciBvZiBjb21wb25lbnRzIGZvciB0aGlzIGF0dHJpYnV0ZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc2l6ZV0gc3lub255bSBmb3IgYG51bUNvbXBvbmVudHNgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSB0aGUgdHlwZSBvZiB0aGUgYXR0cmlidXRlIChlZy4gYGdsLkZMT0FUYCwgYGdsLlVOU0lHTkVEX0JZVEVgLCBldGMuLi4pIERlZmF1bHQgPSBgZ2wuRkxPQVRgXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtub3JtYWxpemVdIHdoZXRoZXIgb3Igbm90IHRvIG5vcm1hbGl6ZSB0aGUgZGF0YS4gRGVmYXVsdCA9IGZhbHNlXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IGludG8gYnVmZmVyIGluIGJ5dGVzLiBEZWZhdWx0ID0gMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtzdHJpZGVdIHRoZSBzdHJpZGUgaW4gYnl0ZXMgcGVyIGVsZW1lbnQuIERlZmF1bHQgPSAwXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2Rpdmlzb3JdIHRoZSBkaXZpc29yIGluIGluc3RhbmNlcy4gRGVmYXVsdCA9IHVuZGVmaW5lZC4gTm90ZTogdW5kZWZpbmVkID0gZG9uJ3QgY2FsbCBnbC52ZXJ0ZXhBdHRyaWJEaXZpc29yXG4gKiAgICB3aGVyZSBhcyBhbnl0aGluZyBlbHNlID0gZG8gY2FsbCBpdCB3aXRoIHRoaXMgdmFsdWVcbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciB0aGUgYnVmZmVyIHRoYXQgY29udGFpbnMgdGhlIGRhdGEgZm9yIHRoaXMgYXR0cmlidXRlXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2RyYXdUeXBlXSB0aGUgZHJhdyB0eXBlIHBhc3NlZCB0byBnbC5idWZmZXJEYXRhLiBEZWZhdWx0ID0gZ2wuU1RBVElDX0RSQVdcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogVXNlIHRoaXMgdHlwZSBvZiBhcnJheSBzcGVjIHdoZW4gVFdHTCBjYW4ndCBndWVzcyB0aGUgdHlwZSBvciBudW1iZXIgb2YgY29tcG9uZW50cyBvZiBhbiBhcnJheVxuICogQHR5cGVkZWYge09iamVjdH0gRnVsbEFycmF5U3BlY1xuICogQHByb3BlcnR5IHtudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXd9IFt2YWx1ZV0gYSBjb25zdGFudCB2YWx1ZSBmb3IgdGhlIGF0dHJpYnV0ZS4gTm90ZTogaWYgdGhpcyBpcyBzZXQgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlXG4gKiAgICBkaXNhYmxlZCBhbmQgc2V0IHRvIHRoaXMgY29uc3RhbnQgdmFsdWUgYW5kIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSBpZ25vcmVkLlxuICogQHByb3BlcnR5IHsobnVtYmVyfG51bWJlcltdfEFycmF5QnVmZmVyVmlldyl9IGRhdGEgVGhlIGRhdGEgb2YgdGhlIGFycmF5LiBBIG51bWJlciBhbG9uZSBiZWNvbWVzIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgb2YgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbnVtQ29tcG9uZW50c10gbnVtYmVyIG9mIGNvbXBvbmVudHMgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCBpcyBiYXNlZCBvbiB0aGUgbmFtZSBvZiB0aGUgYXJyYXkuXG4gKiAgICBJZiBgY29vcmRgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAyYC5cbiAqICAgIElmIGBjb2xvcmAgaXMgaW4gdGhlIG5hbWUgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDRgLlxuICogICAgb3RoZXJ3aXNlIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAzYFxuICogQHByb3BlcnR5IHtjb25zdHJ1Y3Rvcn0gW3R5cGVdIHR5cGUuIFRoaXMgaXMgb25seSB1c2VkIGlmIGBkYXRhYCBpcyBhIEphdmFTY3JpcHQgYXJyYXkuIEl0IGlzIHRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGVkYXJyYXkuIChlZy4gYFVpbnQ4QXJyYXlgKS5cbiAqIEZvciBleGFtcGxlIGlmIHlvdSB3YW50IGNvbG9ycyBpbiBhIGBVaW50OEFycmF5YCB5b3UgbWlnaHQgaGF2ZSBhIGBGdWxsQXJyYXlTcGVjYCBsaWtlIGB7IHR5cGU6IFVpbnQ4QXJyYXksIGRhdGE6IFsyNTUsMCwyNTUsMjU1LCAuLi5dLCB9YC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc2l6ZV0gc3lub255bSBmb3IgYG51bUNvbXBvbmVudHNgLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbbm9ybWFsaXplXSBub3JtYWxpemUgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCBpcyB0cnVlIGlmIHR5cGUgaXMgYEludDhBcnJheWAgb3IgYFVpbnQ4QXJyYXlgIG90aGVyd2lzZSBmYWxzZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbc3RyaWRlXSBzdHJpZGUgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCA9IDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb2Zmc2V0XSBvZmZzZXQgZm9yIGB2ZXJ0ZXhBdHRyaWJQb2ludGVyYC4gRGVmYXVsdCA9IDBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGl2aXNvcl0gZGl2aXNvciBmb3IgYHZlcnRleEF0dHJpYkRpdmlzb3JgLiBEZWZhdWx0ID0gdW5kZWZpbmVkLiBOb3RlOiB1bmRlZmluZWQgPSBkb24ndCBjYWxsIGdsLnZlcnRleEF0dHJpYkRpdmlzb3JcbiAqICAgIHdoZXJlIGFzIGFueXRoaW5nIGVsc2UgPSBkbyBjYWxsIGl0IHdpdGggdGhpcyB2YWx1ZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFthdHRyaWJdIG5hbWUgb2YgYXR0cmlidXRlIHRoaXMgYXJyYXkgbWFwcyB0by4gRGVmYXVsdHMgdG8gc2FtZSBuYW1lIGFzIGFycmF5IHByZWZpeGVkIGJ5IHRoZSBkZWZhdWx0IGF0dHJpYlByZWZpeC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbmFtZV0gc3lub255bSBmb3IgYGF0dHJpYmAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2F0dHJpYk5hbWVdIHN5bm9ueW0gZm9yIGBhdHRyaWJgLlxuICogQHByb3BlcnR5IHtXZWJHTEJ1ZmZlcn0gW2J1ZmZlcl0gQnVmZmVyIHRvIHVzZSBmb3IgdGhpcyBhdHRyaWJ1dGUuIFRoaXMgbGV0cyB5b3UgdXNlIHlvdXIgb3duIGJ1ZmZlclxuICogICAgYnV0IHlvdSB3aWxsIG5lZWQgdG8gc3VwcGx5IGBudW1Db21wb25lbnRzYCBhbmQgYHR5cGVgLiBZb3UgY2FuIGVmZmVjdGl2ZWx5IHBhc3MgYW4gYEF0dHJpYkluZm9gXG4gKiAgICB0byBwcm92aWRlIHRoaXMuIEV4YW1wbGU6XG4gKlxuICogICAgICAgICBjb25zdCBidWZmZXJJbmZvMSA9IHR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIHtcbiAqICAgICAgICAgICBwb3NpdGlvbjogWzEsIDIsIDMsIC4uLiBdLFxuICogICAgICAgICB9KTtcbiAqICAgICAgICAgY29uc3QgYnVmZmVySW5mbzIgPSB0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzKGdsLCB7XG4gKiAgICAgICAgICAgcG9zaXRpb246IGJ1ZmZlckluZm8xLmF0dHJpYnMucG9zaXRpb24sICAvLyB1c2UgdGhlIHNhbWUgYnVmZmVyIGZyb20gYnVmZmVySW5mbzFcbiAqICAgICAgICAgfSk7XG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBbiBpbmRpdmlkdWFsIGFycmF5IGluIHtAbGluayBtb2R1bGU6dHdnbC5BcnJheXN9XG4gKlxuICogV2hlbiBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzfSBpZiBhbiBBcnJheVNwZWMgaXMgYG51bWJlcltdYCBvciBgQXJyYXlCdWZmZXJWaWV3YFxuICogdGhlIHR5cGVzIHdpbGwgYmUgZ3Vlc3NlZCBiYXNlZCBvbiB0aGUgbmFtZS4gYGluZGljZXNgIHdpbGwgYmUgYFVpbnQxNkFycmF5YCwgZXZlcnl0aGluZyBlbHNlIHdpbGxcbiAqIGJlIGBGbG9hdDMyQXJyYXlgLiBJZiBhbiBBcnJheVNwZWMgaXMgYSBudW1iZXIgaXQncyB0aGUgbnVtYmVyIG9mIGZsb2F0cyBmb3IgYW4gZW1wdHkgKHplcm9lZCkgYnVmZmVyLlxuICpcbiAqIEB0eXBlZGVmIHsobnVtYmVyfG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xtb2R1bGU6dHdnbC5GdWxsQXJyYXlTcGVjKX0gQXJyYXlTcGVjXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBKYXZhU2NyaXB0IG9iamVjdCBvZiBhcnJheXMgYnkgbmFtZS4gVGhlIG5hbWVzIHNob3VsZCBtYXRjaCB5b3VyIHNoYWRlcidzIGF0dHJpYnV0ZXMuIElmIHlvdXJcbiAqIGF0dHJpYnV0ZXMgaGF2ZSBhIGNvbW1vbiBwcmVmaXggeW91IGNhbiBzcGVjaWZ5IGl0IGJ5IGNhbGxpbmcge0BsaW5rIG1vZHVsZTp0d2dsLnNldEF0dHJpYnV0ZVByZWZpeH0uXG4gKlxuICogICAgIEJhcmUgSmF2YVNjcmlwdCBBcnJheXNcbiAqXG4gKiAgICAgICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTEsIDEsIDBdLFxuICogICAgICAgICAgICBub3JtYWw6IFswLCAxLCAwXSxcbiAqICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgIH1cbiAqXG4gKiAgICAgQmFyZSBUeXBlZEFycmF5c1xuICpcbiAqICAgICAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAxLCAwXSksXG4gKiAgICAgICAgICAgIGNvbG9yOiBuZXcgVWludDhBcnJheShbMjU1LCAxMjgsIDY0LCAyNTVdKSxcbiAqICAgICAgICAgICAgLi4uXG4gKiAgICAgICAgIH1cbiAqXG4gKiAqICAgV2lsbCBndWVzcyBhdCBgbnVtQ29tcG9uZW50c2AgaWYgbm90IHNwZWNpZmllZCBiYXNlZCBvbiBuYW1lLlxuICpcbiAqICAgICBJZiBgY29vcmRgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSAyYFxuICpcbiAqICAgICBJZiBgY29sb3JgIGlzIGluIHRoZSBuYW1lIGFzc3VtZXMgYG51bUNvbXBvbmVudHMgPSA0YFxuICpcbiAqICAgICBvdGhlcndpc2UgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDNgXG4gKlxuICogT2JqZWN0cyB3aXRoIHZhcmlvdXMgZmllbGRzLiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsLkZ1bGxBcnJheVNwZWN9LlxuICpcbiAqICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgcG9zaXRpb246IHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSwgfSxcbiAqICAgICAgIHRleGNvb3JkOiB7IG51bUNvbXBvbmVudHM6IDIsIGRhdGE6IFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSwgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICBub3JtYWw6ICAgeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sICAgICB9LFxuICogICAgICAgaW5kaWNlczogIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDEsIDIsIDEsIDIsIDNdLCAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAqICAgICB9O1xuICpcbiAqIEB0eXBlZGVmIHtPYmplY3QuPHN0cmluZywgbW9kdWxlOnR3Z2wuQXJyYXlTcGVjPn0gQXJyYXlzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgYXR0cmlidXRlIGRhdGEgYW5kIFdlYkdMQnVmZmVycyBmcm9tIHNldCBvZiBhcnJheXNcbiAqXG4gKiBHaXZlblxuICpcbiAqICAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogeyBudW1Db21wb25lbnRzOiAzLCBkYXRhOiBbMCwgMCwgMCwgMTAsIDAsIDAsIDAsIDEwLCAwLCAxMCwgMTAsIDBdLCB9LFxuICogICAgICAgIHRleGNvb3JkOiB7IG51bUNvbXBvbmVudHM6IDIsIGRhdGE6IFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSwgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLCAgICAgfSxcbiAqICAgICAgICBjb2xvcjogICAgeyBudW1Db21wb25lbnRzOiA0LCBkYXRhOiBbMjU1LCAyNTUsIDI1NSwgMjU1LCAyNTUsIDAsIDAsIDI1NSwgMCwgMCwgMjU1LCAyNTVdLCB0eXBlOiBVaW50OEFycmF5LCB9LFxuICogICAgICAgIGluZGljZXM6ICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAxLCAyLCAxLCAyLCAzXSwgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgIH07XG4gKlxuICogcmV0dXJucyBzb21ldGhpbmcgbGlrZVxuICpcbiAqICAgICAgdmFyIGF0dHJpYnMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IHsgbnVtQ29tcG9uZW50czogMywgdHlwZTogZ2wuRkxPQVQsICAgICAgICAgbm9ybWFsaXplOiBmYWxzZSwgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgfSxcbiAqICAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCB0eXBlOiBnbC5GTE9BVCwgICAgICAgICBub3JtYWxpemU6IGZhbHNlLCBidWZmZXI6IFdlYkdMQnVmZmVyLCB9LFxuICogICAgICAgIG5vcm1hbDogICB7IG51bUNvbXBvbmVudHM6IDMsIHR5cGU6IGdsLkZMT0FULCAgICAgICAgIG5vcm1hbGl6ZTogZmFsc2UsIGJ1ZmZlcjogV2ViR0xCdWZmZXIsIH0sXG4gKiAgICAgICAgY29sb3I6ICAgIHsgbnVtQ29tcG9uZW50czogNCwgdHlwZTogZ2wuVU5TSUdORURfQllURSwgbm9ybWFsaXplOiB0cnVlLCAgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgfSxcbiAqICAgICAgfTtcbiAqXG4gKiBub3RlczpcbiAqXG4gKiAqICAgQXJyYXlzIGNhbiB0YWtlIHZhcmlvdXMgZm9ybXNcbiAqXG4gKiAgICAgQmFyZSBKYXZhU2NyaXB0IEFycmF5c1xuICpcbiAqICAgICAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICAgICAgcG9zaXRpb246IFstMSwgMSwgMF0sXG4gKiAgICAgICAgICAgIG5vcm1hbDogWzAsIDEsIDBdLFxuICogICAgICAgICAgICAuLi5cbiAqICAgICAgICAgfVxuICpcbiAqICAgICBCYXJlIFR5cGVkQXJyYXlzXG4gKlxuICogICAgICAgICB2YXIgYXJyYXlzID0ge1xuICogICAgICAgICAgICBwb3NpdGlvbjogbmV3IEZsb2F0MzJBcnJheShbLTEsIDEsIDBdKSxcbiAqICAgICAgICAgICAgY29sb3I6IG5ldyBVaW50OEFycmF5KFsyNTUsIDEyOCwgNjQsIDI1NV0pLFxuICogICAgICAgICAgICAuLi5cbiAqICAgICAgICAgfVxuICpcbiAqICogICBXaWxsIGd1ZXNzIGF0IGBudW1Db21wb25lbnRzYCBpZiBub3Qgc3BlY2lmaWVkIGJhc2VkIG9uIG5hbWUuXG4gKlxuICogICAgIElmIGBjb29yZGAgaXMgaW4gdGhlIG5hbWUgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDJgXG4gKlxuICogICAgIElmIGBjb2xvcmAgaXMgaW4gdGhlIG5hbWUgYXNzdW1lcyBgbnVtQ29tcG9uZW50cyA9IDRgXG4gKlxuICogICAgIG90aGVyd2lzZSBhc3N1bWVzIGBudW1Db21wb25lbnRzID0gM2BcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIHdlYmdsIHJlbmRlcmluZyBjb250ZXh0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BcnJheXN9IGFycmF5cyBUaGUgYXJyYXlzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFtzcmNCdWZmZXJJbmZvXSBhIEJ1ZmZlckluZm8gdG8gY29weSBmcm9tXG4gKiAgIFRoaXMgbGV0cyB5b3Ugc2hhcmUgYnVmZmVycy4gQW55IGFycmF5cyB5b3Ugc3VwcGx5IHdpbGwgb3ZlcnJpZGVcbiAqICAgdGhlIGJ1ZmZlcnMgZnJvbSBzcmNCdWZmZXJJbmZvLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+fSB0aGUgYXR0cmlic1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpIHtcbiAgdmFyIGF0dHJpYnMgPSB7fTtcbiAgT2JqZWN0LmtleXMoYXJyYXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheU5hbWUpIHtcbiAgICBpZiAoIWlzSW5kaWNlcyhhcnJheU5hbWUpKSB7XG4gICAgICB2YXIgYXJyYXkgPSBhcnJheXNbYXJyYXlOYW1lXTtcbiAgICAgIHZhciBhdHRyaWJOYW1lID0gYXJyYXkuYXR0cmliIHx8IGFycmF5Lm5hbWUgfHwgYXJyYXkuYXR0cmliTmFtZSB8fCBkZWZhdWx0cy5hdHRyaWJQcmVmaXggKyBhcnJheU5hbWU7XG5cbiAgICAgIGlmIChhcnJheS52YWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkudmFsdWUpICYmICF0eXBlZEFycmF5cy5pc0FycmF5QnVmZmVyKGFycmF5LnZhbHVlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXJyYXkudmFsdWUgaXMgbm90IGFycmF5IG9yIHR5cGVkYXJyYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHJpYnNbYXR0cmliTmFtZV0gPSB7XG4gICAgICAgICAgdmFsdWU6IGFycmF5LnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYnVmZmVyO1xuICAgICAgICB2YXIgdHlwZTtcbiAgICAgICAgdmFyIG5vcm1hbGl6YXRpb247XG4gICAgICAgIHZhciBudW1Db21wb25lbnRzO1xuXG4gICAgICAgIGlmIChhcnJheS5idWZmZXIgJiYgYXJyYXkuYnVmZmVyIGluc3RhbmNlb2YgV2ViR0xCdWZmZXIpIHtcbiAgICAgICAgICBidWZmZXIgPSBhcnJheS5idWZmZXI7XG4gICAgICAgICAgbnVtQ29tcG9uZW50cyA9IGFycmF5Lm51bUNvbXBvbmVudHMgfHwgYXJyYXkuc2l6ZTtcbiAgICAgICAgICB0eXBlID0gYXJyYXkudHlwZTtcbiAgICAgICAgICBub3JtYWxpemF0aW9uID0gYXJyYXkubm9ybWFsaXplO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcnJheSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgYXJyYXkuZGF0YSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHZhciBudW1WYWx1ZXMgPSBhcnJheS5kYXRhIHx8IGFycmF5O1xuICAgICAgICAgIHZhciBhcnJheVR5cGUgPSBhcnJheS50eXBlIHx8IEZsb2F0MzJBcnJheTtcbiAgICAgICAgICB2YXIgbnVtQnl0ZXMgPSBudW1WYWx1ZXMgKiBhcnJheVR5cGUuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgICAgdHlwZSA9IHR5cGVkQXJyYXlzLmdldEdMVHlwZUZvclR5cGVkQXJyYXlUeXBlKGFycmF5VHlwZSk7XG4gICAgICAgICAgbm9ybWFsaXphdGlvbiA9IGFycmF5Lm5vcm1hbGl6ZSAhPT0gdW5kZWZpbmVkID8gYXJyYXkubm9ybWFsaXplIDogZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXlUeXBlKGFycmF5VHlwZSk7XG4gICAgICAgICAgbnVtQ29tcG9uZW50cyA9IGFycmF5Lm51bUNvbXBvbmVudHMgfHwgYXJyYXkuc2l6ZSB8fCBndWVzc051bUNvbXBvbmVudHNGcm9tTmFtZShhcnJheU5hbWUsIG51bVZhbHVlcyk7XG4gICAgICAgICAgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgICAgICAgZ2wuYnVmZmVyRGF0YShBUlJBWV9CVUZGRVIsIG51bUJ5dGVzLCBhcnJheS5kcmF3VHlwZSB8fCBTVEFUSUNfRFJBVyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHR5cGVkQXJyYXkgPSBtYWtlVHlwZWRBcnJheShhcnJheSwgYXJyYXlOYW1lKTtcbiAgICAgICAgICBidWZmZXIgPSBjcmVhdGVCdWZmZXJGcm9tVHlwZWRBcnJheShnbCwgdHlwZWRBcnJheSwgdW5kZWZpbmVkLCBhcnJheS5kcmF3VHlwZSk7XG4gICAgICAgICAgdHlwZSA9IHR5cGVkQXJyYXlzLmdldEdMVHlwZUZvclR5cGVkQXJyYXkodHlwZWRBcnJheSk7XG4gICAgICAgICAgbm9ybWFsaXphdGlvbiA9IGFycmF5Lm5vcm1hbGl6ZSAhPT0gdW5kZWZpbmVkID8gYXJyYXkubm9ybWFsaXplIDogZ2V0Tm9ybWFsaXphdGlvbkZvclR5cGVkQXJyYXkodHlwZWRBcnJheSk7XG4gICAgICAgICAgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMoYXJyYXksIGFycmF5TmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyaWJzW2F0dHJpYk5hbWVdID0ge1xuICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgICAgIG51bUNvbXBvbmVudHM6IG51bUNvbXBvbmVudHMsXG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBub3JtYWxpemU6IG5vcm1hbGl6YXRpb24sXG4gICAgICAgICAgc3RyaWRlOiBhcnJheS5zdHJpZGUgfHwgMCxcbiAgICAgICAgICBvZmZzZXQ6IGFycmF5Lm9mZnNldCB8fCAwLFxuICAgICAgICAgIGRpdmlzb3I6IGFycmF5LmRpdmlzb3IgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFycmF5LmRpdmlzb3IsXG4gICAgICAgICAgZHJhd1R5cGU6IGFycmF5LmRyYXdUeXBlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIG51bGwpO1xuICByZXR1cm4gYXR0cmlicztcbn1cbi8qKlxuICogU2V0cyB0aGUgY29udGVudHMgb2YgYSBidWZmZXIgYXR0YWNoZWQgdG8gYW4gYXR0cmliSW5mb1xuICpcbiAqIFRoaXMgaXMgaGVscGVyIGZ1bmN0aW9uIHRvIGR5bmFtaWNhbGx5IHVwZGF0ZSBhIGJ1ZmZlci5cbiAqXG4gKiBMZXQncyBzYXkgeW91IG1ha2UgYSBidWZmZXJJbmZvXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSksXG4gKiAgICAgICAgdGV4Y29vcmQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSxcbiAqICAgICAgICBub3JtYWw6ICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0pLFxuICogICAgICAgIGluZGljZXM6ICBuZXcgVWludDE2QXJyYXkoWzAsIDEsIDIsIDEsIDIsIDNdKSxcbiAqICAgICB9O1xuICogICAgIHZhciBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAqXG4gKiAgQW5kIHlvdSB3YW50IHRvIGR5bmFtaWNhbGx5IHVwZGF0ZSB0aGUgcG9zaXRpb25zLiBZb3UgY291bGQgZG8gdGhpc1xuICpcbiAqICAgICAvLyBhc3N1bWluZyBhcnJheXMucG9zaXRpb24gaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkIHdpdGggbmV3IGRhdGEuXG4gKiAgICAgdHdnbC5zZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5KGdsLCBidWZmZXJJbmZvLmF0dHJpYnMucG9zaXRpb24sIGFycmF5cy5wb3NpdGlvbik7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsXG4gKiBAcGFyYW0ge0F0dHJpYkluZm99IGF0dHJpYkluZm8gVGhlIGF0dHJpYkluZm8gd2hvJ3MgYnVmZmVyIGNvbnRlbnRzIHRvIHNldC4gTk9URTogSWYgeW91IGhhdmUgYW4gYXR0cmlidXRlIHByZWZpeFxuICogICB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdpbGwgaW5jbHVkZSB0aGUgcHJlZml4LlxuICogQHBhcmFtIHtBcnJheVNwZWN9IGFycmF5IE5vdGU6IGl0IGlzIGFyZ3VhYmx5IGluZWZmaWNpZW50IHRvIHBhc3MgaW4gYW55dGhpbmcgYnV0IGEgdHlwZWQgYXJyYXkgYmVjYXVzZSBhbnl0aGluZ1xuICogICAgZWxzZSB3aWxsIGhhdmUgdG8gYmUgY29udmVydGVkIHRvIGEgdHlwZWQgYXJyYXkgYmVmb3JlIGl0IGNhbiBiZSB1c2VkIGJ5IFdlYkdMLiBEdXJpbmcgaW5pdCB0aW1lIHRoYXRcbiAqICAgIGluZWZmaWNpZW5jeSBpcyB1c3VhbGx5IG5vdCBpbXBvcnRhbnQgYnV0IGlmIHlvdSdyZSB1cGRhdGluZyBkYXRhIGR5bmFtaWNhbGx5IGJlc3QgdG8gYmUgZWZmaWNpZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXRdIGFuIG9wdGlvbmFsIG9mZnNldCBpbnRvIHRoZSBidWZmZXIuIFRoaXMgaXMgb25seSBhbiBvZmZzZXQgaW50byB0aGUgV2ViR0wgYnVmZmVyXG4gKiAgICBub3QgdGhlIGFycmF5LiBUbyBwYXNzIGluIGFuIG9mZnNldCBpbnRvIHRoZSBhcnJheSBpdHNlbGYgdXNlIGEgdHlwZWQgYXJyYXkgYW5kIGNyZWF0ZSBhbiBgQXJyYXlCdWZmZXJWaWV3YFxuICogICAgZm9yIHRoZSBwb3J0aW9uIG9mIHRoZSBhcnJheSB5b3Ugd2FudCB0byB1c2UuXG4gKlxuICogICAgICAgIHZhciBzb21lQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KDEwMDApOyAvLyBhbiBhcnJheSB3aXRoIDEwMDAgZmxvYXRzXG4gKiAgICAgICAgdmFyIHNvbWVTdWJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoc29tZUFycmF5LmJ1ZmZlciwgb2Zmc2V0SW5CeXRlcywgc2l6ZUluVW5pdHMpOyAvLyBhIHZpZXcgaW50byBzb21lQXJyYXlcbiAqXG4gKiAgICBOb3cgeW91IGNhbiBwYXNzIGBzb21lU3ViQXJyYXlgIGludG8gc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheWBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJJbmZvQnVmZmVyRnJvbUFycmF5KGdsLCBhdHRyaWJJbmZvLCBhcnJheSwgb2Zmc2V0KSB7XG4gIGFycmF5ID0gbWFrZVR5cGVkQXJyYXkoYXJyYXkpO1xuXG4gIGlmIChvZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBhdHRyaWJJbmZvLmJ1ZmZlcik7XG4gICAgZ2wuYnVmZmVyU3ViRGF0YShBUlJBWV9CVUZGRVIsIG9mZnNldCwgYXJyYXkpO1xuICB9IGVsc2Uge1xuICAgIHNldEJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCBBUlJBWV9CVUZGRVIsIGF0dHJpYkluZm8uYnVmZmVyLCBhcnJheSwgYXR0cmliSW5mby5kcmF3VHlwZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Qnl0ZXNQZXJWYWx1ZUZvckdMVHlwZShnbCwgdHlwZSkge1xuICBpZiAodHlwZSA9PT0gQllURSkgcmV0dXJuIDE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAodHlwZSA9PT0gVU5TSUdORURfQllURSkgcmV0dXJuIDE7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAodHlwZSA9PT0gU0hPUlQpIHJldHVybiAyOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGUgPT09IFVOU0lHTkVEX1NIT1JUKSByZXR1cm4gMjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGlmICh0eXBlID09PSBJTlQpIHJldHVybiA0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGUgPT09IFVOU0lHTkVEX0lOVCkgcmV0dXJuIDQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBpZiAodHlwZSA9PT0gRkxPQVQpIHJldHVybiA0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgcmV0dXJuIDA7XG59IC8vIFRyaWVzIHRvIGdldCB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgYXJyYXlzLlxuXG5cbnZhciBwb3NpdGlvbktleXMgPSBbJ3Bvc2l0aW9uJywgJ3Bvc2l0aW9ucycsICdhX3Bvc2l0aW9uJ107XG5cbmZ1bmN0aW9uIGdldE51bUVsZW1lbnRzRnJvbU5vbkluZGV4ZWRBcnJheXMoYXJyYXlzKSB7XG4gIHZhciBrZXk7XG4gIHZhciBpaTtcblxuICBmb3IgKGlpID0gMDsgaWkgPCBwb3NpdGlvbktleXMubGVuZ3RoOyArK2lpKSB7XG4gICAga2V5ID0gcG9zaXRpb25LZXlzW2lpXTtcblxuICAgIGlmIChrZXkgaW4gYXJyYXlzKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaWkgPT09IHBvc2l0aW9uS2V5cy5sZW5ndGgpIHtcbiAgICBrZXkgPSBPYmplY3Qua2V5cyhhcnJheXMpWzBdO1xuICB9XG5cbiAgdmFyIGFycmF5ID0gYXJyYXlzW2tleV07XG4gIHZhciBsZW5ndGggPSBnZXRBcnJheShhcnJheSkubGVuZ3RoO1xuICB2YXIgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMoYXJyYXksIGtleSk7XG4gIHZhciBudW1FbGVtZW50cyA9IGxlbmd0aCAvIG51bUNvbXBvbmVudHM7XG5cbiAgaWYgKGxlbmd0aCAlIG51bUNvbXBvbmVudHMgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibnVtQ29tcG9uZW50cyBcIi5jb25jYXQobnVtQ29tcG9uZW50cywgXCIgbm90IGNvcnJlY3QgZm9yIGxlbmd0aCBcIikuY29uY2F0KGxlbmd0aCkpO1xuICB9XG5cbiAgcmV0dXJuIG51bUVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXROdW1FbGVtZW50c0Zyb21BdHRyaWJ1dGVzKGdsLCBhdHRyaWJzKSB7XG4gIHZhciBrZXk7XG4gIHZhciBpaTtcblxuICBmb3IgKGlpID0gMDsgaWkgPCBwb3NpdGlvbktleXMubGVuZ3RoOyArK2lpKSB7XG4gICAga2V5ID0gcG9zaXRpb25LZXlzW2lpXTtcblxuICAgIGlmIChrZXkgaW4gYXR0cmlicykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAga2V5ID0gZGVmYXVsdHMuYXR0cmliUHJlZml4ICsga2V5O1xuXG4gICAgaWYgKGtleSBpbiBhdHRyaWJzKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaWkgPT09IHBvc2l0aW9uS2V5cy5sZW5ndGgpIHtcbiAgICBrZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJzKVswXTtcbiAgfVxuXG4gIHZhciBhdHRyaWIgPSBhdHRyaWJzW2tleV07XG4gIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBhdHRyaWIuYnVmZmVyKTtcbiAgdmFyIG51bUJ5dGVzID0gZ2wuZ2V0QnVmZmVyUGFyYW1ldGVyKEFSUkFZX0JVRkZFUiwgQlVGRkVSX1NJWkUpO1xuICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgbnVsbCk7XG4gIHZhciBieXRlc1BlclZhbHVlID0gZ2V0Qnl0ZXNQZXJWYWx1ZUZvckdMVHlwZShnbCwgYXR0cmliLnR5cGUpO1xuICB2YXIgdG90YWxFbGVtZW50cyA9IG51bUJ5dGVzIC8gYnl0ZXNQZXJWYWx1ZTtcbiAgdmFyIG51bUNvbXBvbmVudHMgPSBhdHRyaWIubnVtQ29tcG9uZW50cyB8fCBhdHRyaWIuc2l6ZTsgLy8gVE9ETzogY2hlY2sgc3RyaWRlXG5cbiAgdmFyIG51bUVsZW1lbnRzID0gdG90YWxFbGVtZW50cyAvIG51bUNvbXBvbmVudHM7XG5cbiAgaWYgKG51bUVsZW1lbnRzICUgMSAhPT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm51bUNvbXBvbmVudHMgXCIuY29uY2F0KG51bUNvbXBvbmVudHMsIFwiIG5vdCBjb3JyZWN0IGZvciBsZW5ndGggXCIpLmNvbmNhdChsZW5ndGgpKTtcbiAgfVxuXG4gIHJldHVybiBudW1FbGVtZW50cztcbn1cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQnVmZmVySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IG51bUVsZW1lbnRzIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcGFzcyB0byBgZ2wuZHJhd0FycmF5c2Agb3IgYGdsLmRyYXdFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VsZW1lbnRUeXBlXSBUaGUgdHlwZSBvZiBpbmRpY2VzIGBVTlNJR05FRF9CWVRFYCwgYFVOU0lHTkVEX1NIT1JUYCBldGMuLlxuICogQHByb3BlcnR5IHtXZWJHTEJ1ZmZlcn0gW2luZGljZXNdIFRoZSBpbmRpY2VzIGBFTEVNRU5UX0FSUkFZX0JVRkZFUmAgaWYgYW55IGluZGljZXMgZXhpc3QuXG4gKiBAcHJvcGVydHkge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gW2F0dHJpYnNdIFRoZSBhdHRyaWJzIGFwcHJvcHJpYXRlIHRvIGNhbGwgYHNldEF0dHJpYnV0ZXNgXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBCdWZmZXJJbmZvIGZyb20gYW4gb2JqZWN0IG9mIGFycmF5cy5cbiAqXG4gKiBUaGlzIGNhbiBiZSBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSBhbmQgdG9cbiAqIHtAbGluayBtb2R1bGU6dHdnbDpkcmF3QnVmZmVySW5mb30uXG4gKlxuICogR2l2ZW4gYW4gb2JqZWN0IGxpa2VcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCBkYXRhOiBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sICAgICAgICAgICAgICAgICB9LFxuICogICAgICAgbm9ybWFsOiAgIHsgbnVtQ29tcG9uZW50czogMywgZGF0YTogWzAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDFdLCAgICAgfSxcbiAqICAgICAgIGluZGljZXM6ICB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAxLCAyLCAxLCAyLCAzXSwgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiAgQ3JlYXRlcyBhbiBCdWZmZXJJbmZvIGxpa2UgdGhpc1xuICpcbiAqICAgICBidWZmZXJJbmZvID0ge1xuICogICAgICAgbnVtRWxlbWVudHM6IDQsICAgICAgICAvLyBvciB3aGF0ZXZlciB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGlzXG4gKiAgICAgICBpbmRpY2VzOiBXZWJHTEJ1ZmZlciwgIC8vIHRoaXMgcHJvcGVydHkgd2lsbCBub3QgZXhpc3QgaWYgdGhlcmUgYXJlIG5vIGluZGljZXNcbiAqICAgICAgIGF0dHJpYnM6IHtcbiAqICAgICAgICAgcG9zaXRpb246IHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMywgfSxcbiAqICAgICAgICAgbm9ybWFsOiAgIHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMywgfSxcbiAqICAgICAgICAgdGV4Y29vcmQ6IHsgYnVmZmVyOiBXZWJHTEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMiwgfSxcbiAqICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiAgVGhlIHByb3BlcnRpZXMgb2YgYXJyYXlzIGNhbiBiZSBKYXZhU2NyaXB0IGFycmF5cyBpbiB3aGljaCBjYXNlIHRoZSBudW1iZXIgb2YgY29tcG9uZW50c1xuICogIHdpbGwgYmUgZ3Vlc3NlZC5cbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSxcbiAqICAgICAgICB0ZXhjb29yZDogWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdLFxuICogICAgICAgIG5vcm1hbDogICBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sXG4gKiAgICAgICAgaW5kaWNlczogIFswLCAxLCAyLCAxLCAyLCAzXSxcbiAqICAgICB9O1xuICpcbiAqICBUaGV5IGNhbiBhbHNvIGJlIFR5cGVkQXJyYXlzXG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEwLCAwLCAwLCAwLCAxMCwgMCwgMTAsIDEwLCAwXSksXG4gKiAgICAgICAgdGV4Y29vcmQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDFdKSxcbiAqICAgICAgICBub3JtYWw6ICAgbmV3IEZsb2F0MzJBcnJheShbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0pLFxuICogICAgICAgIGluZGljZXM6ICBuZXcgVWludDE2QXJyYXkoWzAsIDEsIDIsIDEsIDIsIDNdKSxcbiAqICAgICB9O1xuICpcbiAqICBPciBBdWdtZW50ZWRUeXBlZEFycmF5c1xuICpcbiAqICAgICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA0KTtcbiAqICAgICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCA0KTtcbiAqICAgICB2YXIgbm9ybWFscyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCA0KTtcbiAqICAgICB2YXIgaW5kaWNlcyAgID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCAyLCBVaW50MTZBcnJheSk7XG4gKlxuICogICAgIHBvc2l0aW9ucy5wdXNoKFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0pO1xuICogICAgIHRleGNvb3Jkcy5wdXNoKFswLCAwLCAwLCAxLCAxLCAwLCAxLCAxXSk7XG4gKiAgICAgbm9ybWFscy5wdXNoKFswLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAxXSk7XG4gKiAgICAgaW5kaWNlcy5wdXNoKFswLCAxLCAyLCAxLCAyLCAzXSk7XG4gKlxuICogICAgIHZhciBhcnJheXMgPSB7XG4gKiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAqICAgICAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICogICAgICAgIG5vcm1hbDogICBub3JtYWxzLFxuICogICAgICAgIGluZGljZXM6ICBpbmRpY2VzLFxuICogICAgIH07XG4gKlxuICogRm9yIHRoZSBsYXN0IGV4YW1wbGUgaXQgaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICB2YXIgYnVmZmVySW5mbyA9IHtcbiAqICAgICAgIGF0dHJpYnM6IHtcbiAqICAgICAgICAgcG9zaXRpb246IHsgbnVtQ29tcG9uZW50czogMywgYnVmZmVyOiBnbC5jcmVhdGVCdWZmZXIoKSwgfSxcbiAqICAgICAgICAgdGV4Y29vcmQ6IHsgbnVtQ29tcG9uZW50czogMiwgYnVmZmVyOiBnbC5jcmVhdGVCdWZmZXIoKSwgfSxcbiAqICAgICAgICAgbm9ybWFsOiB7IG51bUNvbXBvbmVudHM6IDMsIGJ1ZmZlcjogZ2wuY3JlYXRlQnVmZmVyKCksIH0sXG4gKiAgICAgICB9LFxuICogICAgICAgaW5kaWNlczogZ2wuY3JlYXRlQnVmZmVyKCksXG4gKiAgICAgICBudW1FbGVtZW50czogNixcbiAqICAgICB9O1xuICpcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVySW5mby5hdHRyaWJzLnBvc2l0aW9uLmJ1ZmZlcik7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGFycmF5cy5wb3NpdGlvbiwgZ2wuU1RBVElDX0RSQVcpO1xuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXJJbmZvLmF0dHJpYnMudGV4Y29vcmQuYnVmZmVyKTtcbiAqICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgYXJyYXlzLnRleGNvb3JkLCBnbC5TVEFUSUNfRFJBVyk7XG4gKiAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlckluZm8uYXR0cmlicy5ub3JtYWwuYnVmZmVyKTtcbiAqICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgYXJyYXlzLm5vcm1hbCwgZ2wuU1RBVElDX0RSQVcpO1xuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGJ1ZmZlckluZm8uaW5kaWNlcyk7XG4gKiAgICAgZ2wuYnVmZmVyRGF0YShnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgYXJyYXlzLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBhcnJheXMgWW91ciBkYXRhXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFtzcmNCdWZmZXJJbmZvXSBBbiBleGlzdGluZ1xuICogICAgICAgIGJ1ZmZlciBpbmZvIHRvIHN0YXJ0IGZyb20uIFdlYkdMQnVmZmVycyBldGMgc3BlY2lmaWVkXG4gKiAgICAgICAgaW4gdGhlIHNyY0J1ZmZlckluZm8gd2lsbCBiZSB1c2VkIGluIGEgbmV3IEJ1ZmZlckluZm9cbiAqICAgICAgICB3aXRoIGFueSBhcnJheXMgc3BlY2lmaWVkIG92ZXJyaWRpbmcgdGhlIG9uZXMgaW5cbiAqICAgICAgICBzcmNCdWZmZXJJbmZvLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gQSBCdWZmZXJJbmZvXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cywgc3JjQnVmZmVySW5mbykge1xuICB2YXIgbmV3QXR0cmlicyA9IGNyZWF0ZUF0dHJpYnNGcm9tQXJyYXlzKGdsLCBhcnJheXMpO1xuICB2YXIgYnVmZmVySW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIHNyY0J1ZmZlckluZm8gPyBzcmNCdWZmZXJJbmZvIDoge30pO1xuICBidWZmZXJJbmZvLmF0dHJpYnMgPSBPYmplY3QuYXNzaWduKHt9LCBzcmNCdWZmZXJJbmZvID8gc3JjQnVmZmVySW5mby5hdHRyaWJzIDoge30sIG5ld0F0dHJpYnMpO1xuICB2YXIgaW5kaWNlcyA9IGFycmF5cy5pbmRpY2VzO1xuXG4gIGlmIChpbmRpY2VzKSB7XG4gICAgdmFyIG5ld0luZGljZXMgPSBtYWtlVHlwZWRBcnJheShpbmRpY2VzLCBcImluZGljZXNcIik7XG4gICAgYnVmZmVySW5mby5pbmRpY2VzID0gY3JlYXRlQnVmZmVyRnJvbVR5cGVkQXJyYXkoZ2wsIG5ld0luZGljZXMsIEVMRU1FTlRfQVJSQVlfQlVGRkVSKTtcbiAgICBidWZmZXJJbmZvLm51bUVsZW1lbnRzID0gbmV3SW5kaWNlcy5sZW5ndGg7XG4gICAgYnVmZmVySW5mby5lbGVtZW50VHlwZSA9IHR5cGVkQXJyYXlzLmdldEdMVHlwZUZvclR5cGVkQXJyYXkobmV3SW5kaWNlcyk7XG4gIH0gZWxzZSBpZiAoIWJ1ZmZlckluZm8ubnVtRWxlbWVudHMpIHtcbiAgICBidWZmZXJJbmZvLm51bUVsZW1lbnRzID0gZ2V0TnVtRWxlbWVudHNGcm9tQXR0cmlidXRlcyhnbCwgYnVmZmVySW5mby5hdHRyaWJzKTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXJJbmZvO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgYnVmZmVyIGZyb20gYW4gYXJyYXksIHR5cGVkIGFycmF5LCBvciBhcnJheSBzcGVjXG4gKlxuICogR2l2ZW4gc29tZXRoaW5nIGxpa2UgdGhpc1xuICpcbiAqICAgICBbMSwgMiwgM10sXG4gKlxuICogb3JcbiAqXG4gKiAgICAgbmV3IFVpbnQxNkFycmF5KFsxLDIsM10pO1xuICpcbiAqIG9yXG4gKlxuICogICAgIHtcbiAqICAgICAgICBkYXRhOiBbMSwgMiwgM10sXG4gKiAgICAgICAgdHlwZTogVWludDhBcnJheSxcbiAqICAgICB9XG4gKlxuICogcmV0dXJucyBhIFdlYkdMQnVmZmVyIHRoYXQgY29udGFpbnMgdGhlIGdpdmVuIGRhdGEuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BcnJheVNwZWN9IGFycmF5IGFuIGFycmF5LCB0eXBlZCBhcnJheSwgb3IgYXJyYXkgc3BlYy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcnJheU5hbWUgbmFtZSBvZiBhcnJheS4gVXNlZCB0byBndWVzcyB0aGUgdHlwZSBpZiB0eXBlIGNhbiBub3QgYmUgZGVyaXZlZCBvdGhlcndpc2UuXG4gKiBAcmV0dXJuIHtXZWJHTEJ1ZmZlcn0gYSBXZWJHTEJ1ZmZlciBjb250YWluaW5nIHRoZSBkYXRhIGluIGFycmF5LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL2F0dHJpYnV0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlckZyb21BcnJheShnbCwgYXJyYXksIGFycmF5TmFtZSkge1xuICB2YXIgdHlwZSA9IGFycmF5TmFtZSA9PT0gXCJpbmRpY2VzXCIgPyBFTEVNRU5UX0FSUkFZX0JVRkZFUiA6IEFSUkFZX0JVRkZFUjtcbiAgdmFyIHR5cGVkQXJyYXkgPSBtYWtlVHlwZWRBcnJheShhcnJheSwgYXJyYXlOYW1lKTtcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlckZyb21UeXBlZEFycmF5KGdsLCB0eXBlZEFycmF5LCB0eXBlKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBidWZmZXJzIGZyb20gYXJyYXlzIG9yIHR5cGVkIGFycmF5c1xuICpcbiAqIEdpdmVuIHNvbWV0aGluZyBsaWtlIHRoaXNcbiAqXG4gKiAgICAgdmFyIGFycmF5cyA9IHtcbiAqICAgICAgICBwb3NpdGlvbnM6IFsxLCAyLCAzXSxcbiAqICAgICAgICBub3JtYWxzOiBbMCwgMCwgMV0sXG4gKiAgICAgfVxuICpcbiAqIHJldHVybnMgc29tZXRoaW5nIGxpa2VcbiAqXG4gKiAgICAgYnVmZmVycyA9IHtcbiAqICAgICAgIHBvc2l0aW9uczogV2ViR0xCdWZmZXIsXG4gKiAgICAgICBub3JtYWxzOiBXZWJHTEJ1ZmZlcixcbiAqICAgICB9XG4gKlxuICogSWYgdGhlIGJ1ZmZlciBpcyBuYW1lZCAnaW5kaWNlcycgaXQgd2lsbCBiZSBtYWRlIGFuIEVMRU1FTlRfQVJSQVlfQlVGRkVSLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXJyYXlzfSBhcnJheXNcbiAqIEByZXR1cm4ge09iamVjdDxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBvbmUgV2ViR0xCdWZmZXIgcGVyIGFycmF5XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvYXR0cmlidXRlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyc0Zyb21BcnJheXMoZ2wsIGFycmF5cykge1xuICB2YXIgYnVmZmVycyA9IHt9O1xuICBPYmplY3Qua2V5cyhhcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGJ1ZmZlcnNba2V5XSA9IGNyZWF0ZUJ1ZmZlckZyb21BcnJheShnbCwgYXJyYXlzW2tleV0sIGtleSk7XG4gIH0pOyAvLyBVZ2ghXG5cbiAgaWYgKGFycmF5cy5pbmRpY2VzKSB7XG4gICAgYnVmZmVycy5udW1FbGVtZW50cyA9IGFycmF5cy5pbmRpY2VzLmxlbmd0aDtcbiAgICBidWZmZXJzLmVsZW1lbnRUeXBlID0gdHlwZWRBcnJheXMuZ2V0R0xUeXBlRm9yVHlwZWRBcnJheShtYWtlVHlwZWRBcnJheShhcnJheXMuaW5kaWNlcyksICdpbmRpY2VzJyk7XG4gIH0gZWxzZSB7XG4gICAgYnVmZmVycy5udW1FbGVtZW50cyA9IGdldE51bUVsZW1lbnRzRnJvbU5vbkluZGV4ZWRBcnJheXMoYXJyYXlzKTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXJzO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kcmF3LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZHJhdy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZHJhd0J1ZmZlckluZm8gPSBkcmF3QnVmZmVySW5mbztcbmV4cG9ydHMuZHJhd09iamVjdExpc3QgPSBkcmF3T2JqZWN0TGlzdDtcblxudmFyIHByb2dyYW1zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcm9ncmFtcy5qcyAqLyBcIi4vc3JjL3Byb2dyYW1zLmpzXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIFRSSUFOR0xFUyA9IDB4MDAwNDtcbnZhciBVTlNJR05FRF9TSE9SVCA9IDB4MTQwMztcbi8qKlxuICogRHJhd2luZyByZWxhdGVkIGZ1bmN0aW9uc1xuICpcbiAqIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLmRyYXdgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC9kcmF3XG4gKi9cblxuLyoqXG4gKiBDYWxscyBgZ2wuZHJhd0VsZW1lbnRzYCBvciBgZ2wuZHJhd0FycmF5c2AsIHdoaWNoZXZlciBpcyBhcHByb3ByaWF0ZVxuICpcbiAqIG5vcm1hbGx5IHlvdSdkIGNhbGwgYGdsLmRyYXdFbGVtZW50c2Agb3IgYGdsLmRyYXdBcnJheXNgIHlvdXJzZWxmXG4gKiBidXQgY2FsbGluZyB0aGlzIG1lYW5zIGlmIHlvdSBzd2l0Y2ggZnJvbSBpbmRleGVkIGRhdGEgdG8gbm9uLWluZGV4ZWRcbiAqIGRhdGEgeW91IGRvbid0IGhhdmUgdG8gcmVtZW1iZXIgdG8gdXBkYXRlIHlvdXIgZHJhdyBjYWxsLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xtb2R1bGU6dHdnbC5WZXJ0ZXhBcnJheUluZm8pfSBidWZmZXJJbmZvIEEgQnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c30gb3JcbiAqICAgYSBWZXJ0ZXhBcnJheUluZm8gYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVmVydGV4QXJyYXlJbmZvfVxuICogQHBhcmFtIHtudW1iZXJ9IFt0eXBlXSBlZyAoZ2wuVFJJQU5HTEVTLCBnbC5MSU5FUywgZ2wuUE9JTlRTLCBnbC5UUklBTkdMRV9TVFJJUCwgLi4uKS4gRGVmYXVsdHMgdG8gYGdsLlRSSUFOR0xFU2BcbiAqIEBwYXJhbSB7bnVtYmVyfSBbY291bnRdIEFuIG9wdGlvbmFsIGNvdW50LiBEZWZhdWx0cyB0byBidWZmZXJJbmZvLm51bUVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gW29mZnNldF0gQW4gb3B0aW9uYWwgb2Zmc2V0LiBEZWZhdWx0cyB0byAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbnN0YW5jZUNvdW50XSBBbiBvcHRpb25hbCBpbnN0YW5jZUNvdW50LiBpZiBzZXQgdGhlbiBgZHJhd0FycmF5c0luc3RhbmNlZGAgb3IgYGRyYXdFbGVtZW50c0luc3RhbmNlZGAgd2lsbCBiZSBjYWxsZWRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9kcmF3XG4gKi9cblxuZnVuY3Rpb24gZHJhd0J1ZmZlckluZm8oZ2wsIGJ1ZmZlckluZm8sIHR5cGUsIGNvdW50LCBvZmZzZXQsIGluc3RhbmNlQ291bnQpIHtcbiAgdHlwZSA9IHR5cGUgPT09IHVuZGVmaW5lZCA/IFRSSUFOR0xFUyA6IHR5cGU7XG4gIHZhciBpbmRpY2VzID0gYnVmZmVySW5mby5pbmRpY2VzO1xuICB2YXIgZWxlbWVudFR5cGUgPSBidWZmZXJJbmZvLmVsZW1lbnRUeXBlO1xuICB2YXIgbnVtRWxlbWVudHMgPSBjb3VudCA9PT0gdW5kZWZpbmVkID8gYnVmZmVySW5mby5udW1FbGVtZW50cyA6IGNvdW50O1xuICBvZmZzZXQgPSBvZmZzZXQgPT09IHVuZGVmaW5lZCA/IDAgOiBvZmZzZXQ7XG5cbiAgaWYgKGVsZW1lbnRUeXBlIHx8IGluZGljZXMpIHtcbiAgICBpZiAoaW5zdGFuY2VDb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBnbC5kcmF3RWxlbWVudHNJbnN0YW5jZWQodHlwZSwgbnVtRWxlbWVudHMsIGVsZW1lbnRUeXBlID09PSB1bmRlZmluZWQgPyBVTlNJR05FRF9TSE9SVCA6IGJ1ZmZlckluZm8uZWxlbWVudFR5cGUsIG9mZnNldCwgaW5zdGFuY2VDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmRyYXdFbGVtZW50cyh0eXBlLCBudW1FbGVtZW50cywgZWxlbWVudFR5cGUgPT09IHVuZGVmaW5lZCA/IFVOU0lHTkVEX1NIT1JUIDogYnVmZmVySW5mby5lbGVtZW50VHlwZSwgb2Zmc2V0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGluc3RhbmNlQ291bnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZ2wuZHJhd0FycmF5c0luc3RhbmNlZCh0eXBlLCBvZmZzZXQsIG51bUVsZW1lbnRzLCBpbnN0YW5jZUNvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuZHJhd0FycmF5cyh0eXBlLCBvZmZzZXQsIG51bUVsZW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQSBEcmF3T2JqZWN0IGlzIHVzZWZ1bCBmb3IgcHV0dGluZyBvYmplY3RzIGluIHRvIGFuIGFycmF5IGFuZCBwYXNzaW5nIHRoZW0gdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmRyYXdPYmplY3RMaXN0fS5cbiAqXG4gKiBZb3UgbmVlZCBlaXRoZXIgYSBgQnVmZmVySW5mb2Agb3IgYSBgVmVydGV4QXJyYXlJbmZvYC5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEcmF3T2JqZWN0XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFthY3RpdmVdIHdoZXRoZXIgb3Igbm90IHRvIGRyYXcuIERlZmF1bHQgPSBgdHJ1ZWAgKG11c3QgYmUgYGZhbHNlYCB0byBiZSBub3QgdHJ1ZSkuIEluIG90aGVyIHdvcmRzIGB1bmRlZmluZWRgID0gYHRydWVgXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3R5cGVdIHR5cGUgdG8gZHJhdyBlZy4gYGdsLlRSSUFOR0xFU2AsIGBnbC5MSU5FU2AsIGV0Yy4uLlxuICogQHByb3BlcnR5IHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gQSBQcm9ncmFtSW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb31cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gW2J1ZmZlckluZm9dIEEgQnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c31cbiAqIEBwcm9wZXJ0eSB7bW9kdWxlOnR3Z2wuVmVydGV4QXJyYXlJbmZvfSBbdmVydGV4QXJyYXlJbmZvXSBBIFZlcnRleEFycmF5SW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVWZXJ0ZXhBcnJheUluZm99XG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsID8+fSB1bmlmb3JtcyBUaGUgdmFsdWVzIGZvciB0aGUgdW5pZm9ybXMuXG4gKiAgIFlvdSBjYW4gcGFzcyBtdWx0aXBsZSBvYmplY3RzIGJ5IHB1dHRpbmcgdGhlbSBpbiBhbiBhcnJheS4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgdmFyIHNoYXJlZFVuaWZvcm1zID0ge1xuICogICAgICAgdV9mb2dOZWFyOiAxMCxcbiAqICAgICAgIHVfcHJvamVjdGlvbjogLi4uXG4gKiAgICAgICAuLi5cbiAqICAgICB9O1xuICpcbiAqICAgICB2YXIgbG9jYWxVbmlmb3JtcyA9IHtcbiAqICAgICAgIHVfd29ybGQ6IC4uLlxuICogICAgICAgdV9kaWZmdXNlQ29sb3I6IC4uLlxuICogICAgIH07XG4gKlxuICogICAgIHZhciBkcmF3T2JqID0ge1xuICogICAgICAgLi4uXG4gKiAgICAgICB1bmlmb3JtczogW3NoYXJlZFVuaWZvcm1zLCBsb2NhbFVuaWZvcm1zXSxcbiAqICAgICB9O1xuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb2Zmc2V0XSB0aGUgb2Zmc2V0IHRvIHBhc3MgdG8gYGdsLmRyYXdBcnJheXNgIG9yIGBnbC5kcmF3RWxlbWVudHNgLiBEZWZhdWx0cyB0byAwLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtjb3VudF0gdGhlIGNvdW50IHRvIHBhc3MgdG8gYGdsLmRyYXdBcnJheXNgIG9yIGBnbC5kcmF3RWxlbWVudHNgLiBEZWZhdWx0cyB0byBidWZmZXJJbmZvLm51bUVsZW1lbnRzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtpbnN0YW5jZUNvdW50XSB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcy4gRGVmYXVsdHMgdG8gdW5kZWZpbmVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBEcmF3cyBhIGxpc3Qgb2Ygb2JqZWN0c1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge0RyYXdPYmplY3RbXX0gb2JqZWN0c1RvRHJhdyBhbiBhcnJheSBvZiBvYmplY3RzIHRvIGRyYXcuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZHJhd1xuICovXG5cblxuZnVuY3Rpb24gZHJhd09iamVjdExpc3QoZ2wsIG9iamVjdHNUb0RyYXcpIHtcbiAgdmFyIGxhc3RVc2VkUHJvZ3JhbUluZm8gPSBudWxsO1xuICB2YXIgbGFzdFVzZWRCdWZmZXJJbmZvID0gbnVsbDtcbiAgb2JqZWN0c1RvRHJhdy5mb3JFYWNoKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0LmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvZ3JhbUluZm8gPSBvYmplY3QucHJvZ3JhbUluZm87XG4gICAgdmFyIGJ1ZmZlckluZm8gPSBvYmplY3QudmVydGV4QXJyYXlJbmZvIHx8IG9iamVjdC5idWZmZXJJbmZvO1xuICAgIHZhciBiaW5kQnVmZmVycyA9IGZhbHNlO1xuICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGUgPT09IHVuZGVmaW5lZCA/IFRSSUFOR0xFUyA6IG9iamVjdC50eXBlO1xuXG4gICAgaWYgKHByb2dyYW1JbmZvICE9PSBsYXN0VXNlZFByb2dyYW1JbmZvKSB7XG4gICAgICBsYXN0VXNlZFByb2dyYW1JbmZvID0gcHJvZ3JhbUluZm87XG4gICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pOyAvLyBXZSBoYXZlIHRvIHJlYmluZCBidWZmZXJzIHdoZW4gY2hhbmdpbmcgcHJvZ3JhbXMgYmVjYXVzZSB3ZVxuICAgICAgLy8gb25seSBiaW5kIGJ1ZmZlcnMgdGhlIHByb2dyYW0gdXNlcy4gU28gaWYgMiBwcm9ncmFtcyB1c2UgdGhlIHNhbWVcbiAgICAgIC8vIGJ1ZmZlckluZm8gYnV0IHRoZSAxc3Qgb25lIHVzZXMgb25seSBwb3NpdGlvbnMgdGhlIHdoZW4gdGhlXG4gICAgICAvLyB3ZSBzd2l0Y2ggdG8gdGhlIDJuZCBvbmUgc29tZSBvZiB0aGUgYXR0cmlidXRlcyB3aWxsIG5vdCBiZSBvbi5cblxuICAgICAgYmluZEJ1ZmZlcnMgPSB0cnVlO1xuICAgIH0gLy8gU2V0dXAgYWxsIHRoZSBuZWVkZWQgYXR0cmlidXRlcy5cblxuXG4gICAgaWYgKGJpbmRCdWZmZXJzIHx8IGJ1ZmZlckluZm8gIT09IGxhc3RVc2VkQnVmZmVySW5mbykge1xuICAgICAgaWYgKGxhc3RVc2VkQnVmZmVySW5mbyAmJiBsYXN0VXNlZEJ1ZmZlckluZm8udmVydGV4QXJyYXlPYmplY3QgJiYgIWJ1ZmZlckluZm8udmVydGV4QXJyYXlPYmplY3QpIHtcbiAgICAgICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICAgICAgfVxuXG4gICAgICBsYXN0VXNlZEJ1ZmZlckluZm8gPSBidWZmZXJJbmZvO1xuICAgICAgcHJvZ3JhbXMuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAgICB9IC8vIFNldCB0aGUgdW5pZm9ybXMuXG5cblxuICAgIHByb2dyYW1zLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBvYmplY3QudW5pZm9ybXMpOyAvLyBEcmF3XG5cbiAgICBkcmF3QnVmZmVySW5mbyhnbCwgYnVmZmVySW5mbywgdHlwZSwgb2JqZWN0LmNvdW50LCBvYmplY3Qub2Zmc2V0LCBvYmplY3QuaW5zdGFuY2VDb3VudCk7XG4gIH0pO1xuXG4gIGlmIChsYXN0VXNlZEJ1ZmZlckluZm8gJiYgbGFzdFVzZWRCdWZmZXJJbmZvLnZlcnRleEFycmF5T2JqZWN0KSB7XG4gICAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICB9XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2ZyYW1lYnVmZmVycy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZnJhbWVidWZmZXJzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmJpbmRGcmFtZWJ1ZmZlckluZm8gPSBiaW5kRnJhbWVidWZmZXJJbmZvO1xuZXhwb3J0cy5jcmVhdGVGcmFtZWJ1ZmZlckluZm8gPSBjcmVhdGVGcmFtZWJ1ZmZlckluZm87XG5leHBvcnRzLnJlc2l6ZUZyYW1lYnVmZmVySW5mbyA9IHJlc2l6ZUZyYW1lYnVmZmVySW5mbztcblxudmFyIHRleHR1cmVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXh0dXJlcy5qcyAqLyBcIi4vc3JjL3RleHR1cmVzLmpzXCIpKTtcblxudmFyIGhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVyLmpzICovIFwiLi9zcmMvaGVscGVyLmpzXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIEZyYW1lYnVmZmVyIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgdGhleSBhcmUgYXZhaWxhYmxlIGF0IGJvdGggYHR3Z2wuZnJhbWVidWZmZXJgIGFuZCBgdHdnbGBcbiAqIGl0c2VsZlxuICpcbiAqIFNlZSB7QGxpbmsgbW9kdWxlOnR3Z2x9IGZvciBjb3JlIGZ1bmN0aW9uc1xuICpcbiAqIEBtb2R1bGUgdHdnbC9mcmFtZWJ1ZmZlcnNcbiAqL1xuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxudmFyIGdsID0gdW5kZWZpbmVkO1xuLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuXG52YXIgRlJBTUVCVUZGRVIgPSAweDhkNDA7XG52YXIgUkVOREVSQlVGRkVSID0gMHg4ZDQxO1xudmFyIFRFWFRVUkVfMkQgPSAweDBkZTE7XG52YXIgVU5TSUdORURfQllURSA9IDB4MTQwMTtcbi8qIFBpeGVsRm9ybWF0ICovXG5cbnZhciBERVBUSF9DT01QT05FTlQgPSAweDE5MDI7XG52YXIgUkdCQSA9IDB4MTkwODtcbnZhciBERVBUSF9DT01QT05FTlQyNCA9IDB4ODFhNjtcbnZhciBERVBUSF9DT01QT05FTlQzMkYgPSAweDhjYWM7XG52YXIgREVQVEgyNF9TVEVOQ0lMOCA9IDB4ODhmMDtcbnZhciBERVBUSDMyRl9TVEVOQ0lMOCA9IDB4OGNhZDtcbi8qIEZyYW1lYnVmZmVyIE9iamVjdC4gKi9cblxudmFyIFJHQkE0ID0gMHg4MDU2O1xudmFyIFJHQjVfQTEgPSAweDgwNTc7XG52YXIgUkdCNTY1ID0gMHg4RDYyO1xudmFyIERFUFRIX0NPTVBPTkVOVDE2ID0gMHg4MUE1O1xudmFyIFNURU5DSUxfSU5ERVggPSAweDE5MDE7XG52YXIgU1RFTkNJTF9JTkRFWDggPSAweDhENDg7XG52YXIgREVQVEhfU1RFTkNJTCA9IDB4ODRGOTtcbnZhciBDT0xPUl9BVFRBQ0hNRU5UMCA9IDB4OENFMDtcbnZhciBERVBUSF9BVFRBQ0hNRU5UID0gMHg4RDAwO1xudmFyIFNURU5DSUxfQVRUQUNITUVOVCA9IDB4OEQyMDtcbnZhciBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlQgPSAweDgyMUE7XG4vKiBUZXh0dXJlV3JhcE1vZGUgKi9cblxudmFyIENMQU1QX1RPX0VER0UgPSAweDgxMkY7XG4vKiBUZXh0dXJlTWFnRmlsdGVyICovXG5cbnZhciBMSU5FQVIgPSAweDI2MDE7XG4vKipcbiAqIFRoZSBvcHRpb25zIGZvciBhIGZyYW1lYnVmZmVyIGF0dGFjaG1lbnQuXG4gKlxuICogTm90ZTogRm9yIGEgYGZvcm1hdGAgdGhhdCBpcyBhIHRleHR1cmUgaW5jbHVkZSBhbGwgdGhlIHRleHR1cmVcbiAqIG9wdGlvbnMgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IGZvciBleGFtcGxlXG4gKiBgbWluYCwgYG1hZ2AsIGBjbGFtcGAsIGV0Yy4uLiBOb3RlIHRoYXQgdW5saWtlIHtAbGluayBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc31cbiAqIGBhdXRvYCBkZWZhdWx0cyB0byBgZmFsc2VgIGZvciBhdHRhY2htZW50IHRleHR1cmVzIGJ1dCBgbWluYCBhbmQgYG1hZ2AgZGVmYXVsdFxuICogdG8gYGdsLkxJTkVBUmAgYW5kIGB3cmFwYCBkZWZhdWx0cyB0byBgQ0xBTVBfVE9fRURHRWBcbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBBdHRhY2htZW50T3B0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFthdHRhY2htZW50UG9pbnRdIFRoZSBhdHRhY2htZW50IHBvaW50LiBEZWZhdWx0c1xuICogICB0byBgZ2wuQ09MT1JfQVRUQUNITUVOVDAgKyBuZHhgIHVubGVzcyB0eXBlIGlzIGEgZGVwdGggb3Igc3RlbmNpbCB0eXBlXG4gKiAgIHRoZW4gaXQncyBnbC5ERVBUSF9BVFRBQ0hNRU5UIG9yIGBnbC5ERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlRgIGRlcGVuZGluZ1xuICogICBvbiB0aGUgZm9ybWF0IG9yIGF0dGFjaG1lbnQgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZm9ybWF0XSBUaGUgZm9ybWF0LiBJZiBvbmUgb2YgYGdsLlJHQkE0YCxcbiAqICAgYGdsLlJHQjU2NWAsIGBnbC5SR0I1X0ExYCwgYGdsLkRFUFRIX0NPTVBPTkVOVDE2YCxcbiAqICAgYGdsLlNURU5DSUxfSU5ERVg4YCBvciBgZ2wuREVQVEhfU1RFTkNJTGAgdGhlbiB3aWxsIGNyZWF0ZSBhXG4gKiAgIHJlbmRlcmJ1ZmZlci4gT3RoZXJ3aXNlIHdpbGwgY3JlYXRlIGEgdGV4dHVyZS4gRGVmYXVsdCA9IGBnbC5SR0JBYFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt0eXBlXSBUaGUgdHlwZS4gVXNlZCBmb3IgdGV4dHVyZS4gRGVmYXVsdCA9IGBnbC5VTlNJR05FRF9CWVRFYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdGFyZ2V0XSBUaGUgdGV4dHVyZSB0YXJnZXQgZm9yIGBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRGAuXG4gKiAgIERlZmF1bHRzIHRvIGBnbC5URVhUVVJFXzJEYC4gU2V0IHRvIGFwcHJvcHJpYXRlIGZhY2UgZm9yIGN1YmUgbWFwcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGV2ZWxdIGxldmVsIGZvciBgZ2wuZnJhbWVidWZmZXJUZXh0dXJlMkRgLiBEZWZhdWx0cyB0byAwLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtsYXllcl0gbGF5ZXIgZm9yIGBnbC5mcmFtZWJ1ZmZlclRleHR1cmVMYXllcmAuIERlZmF1bHRzIHRvIHVuZGVmaW5lZC5cbiAqICAgSWYgc2V0IHRoZW4gYGdsLmZyYW1lYnVmZmVyVGV4dHVyZUxheWVyYCBpcyBjYWxsZWQsIGlmIG5vdCB0aGVuIGBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRGBcbiAqIEBwcm9wZXJ0eSB7V2ViR0xPYmplY3R9IFthdHRhY2htZW50XSBBbiBleGlzdGluZyByZW5kZXJidWZmZXIgb3IgdGV4dHVyZS5cbiAqICAgIElmIHByb3ZpZGVkIHdpbGwgYXR0YWNoIHRoaXMgT2JqZWN0LiBUaGlzIGFsbG93cyB5b3UgdG8gc2hhcmVcbiAqICAgIGF0dGFjaG1lbnRzIGFjcm9zcyBmcmFtZWJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqIEBtaXhlcyBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc1xuICovXG5cbnZhciBkZWZhdWx0QXR0YWNobWVudHMgPSBbe1xuICBmb3JtYXQ6IFJHQkEsXG4gIHR5cGU6IFVOU0lHTkVEX0JZVEUsXG4gIG1pbjogTElORUFSLFxuICB3cmFwOiBDTEFNUF9UT19FREdFXG59LCB7XG4gIGZvcm1hdDogREVQVEhfU1RFTkNJTFxufV07XG52YXIgYXR0YWNobWVudHNCeUZvcm1hdCA9IHt9O1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSF9TVEVOQ0lMXSA9IERFUFRIX1NURU5DSUxfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbU1RFTkNJTF9JTkRFWF0gPSBTVEVOQ0lMX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W1NURU5DSUxfSU5ERVg4XSA9IFNURU5DSUxfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEhfQ09NUE9ORU5UXSA9IERFUFRIX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIX0NPTVBPTkVOVDE2XSA9IERFUFRIX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIX0NPTVBPTkVOVDI0XSA9IERFUFRIX0FUVEFDSE1FTlQ7XG5hdHRhY2htZW50c0J5Rm9ybWF0W0RFUFRIX0NPTVBPTkVOVDMyRl0gPSBERVBUSF9BVFRBQ0hNRU5UO1xuYXR0YWNobWVudHNCeUZvcm1hdFtERVBUSDI0X1NURU5DSUw4XSA9IERFUFRIX1NURU5DSUxfQVRUQUNITUVOVDtcbmF0dGFjaG1lbnRzQnlGb3JtYXRbREVQVEgzMkZfU1RFTkNJTDhdID0gREVQVEhfU1RFTkNJTF9BVFRBQ0hNRU5UO1xuXG5mdW5jdGlvbiBnZXRBdHRhY2htZW50UG9pbnRGb3JGb3JtYXQoZm9ybWF0LCBpbnRlcm5hbEZvcm1hdCkge1xuICByZXR1cm4gYXR0YWNobWVudHNCeUZvcm1hdFtmb3JtYXRdIHx8IGF0dGFjaG1lbnRzQnlGb3JtYXRbaW50ZXJuYWxGb3JtYXRdO1xufVxuXG52YXIgcmVuZGVyYnVmZmVyRm9ybWF0cyA9IHt9O1xucmVuZGVyYnVmZmVyRm9ybWF0c1tSR0JBNF0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tSR0I1X0ExXSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW1JHQjU2NV0gPSB0cnVlO1xucmVuZGVyYnVmZmVyRm9ybWF0c1tERVBUSF9TVEVOQ0lMXSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW0RFUFRIX0NPTVBPTkVOVDE2XSA9IHRydWU7XG5yZW5kZXJidWZmZXJGb3JtYXRzW1NURU5DSUxfSU5ERVhdID0gdHJ1ZTtcbnJlbmRlcmJ1ZmZlckZvcm1hdHNbU1RFTkNJTF9JTkRFWDhdID0gdHJ1ZTtcblxuZnVuY3Rpb24gaXNSZW5kZXJidWZmZXJGb3JtYXQoZm9ybWF0KSB7XG4gIHJldHVybiByZW5kZXJidWZmZXJGb3JtYXRzW2Zvcm1hdF07XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZyYW1lYnVmZmVySW5mb1xuICogQHByb3BlcnR5IHtXZWJHTEZyYW1lYnVmZmVyfSBmcmFtZWJ1ZmZlciBUaGUgV2ViR0xGcmFtZWJ1ZmZlciBmb3IgdGhpcyBmcmFtZWJ1ZmZlckluZm9cbiAqIEBwcm9wZXJ0eSB7V2ViR0xPYmplY3RbXX0gYXR0YWNobWVudHMgVGhlIGNyZWF0ZWQgYXR0YWNobWVudHMgaW4gdGhlIHNhbWUgb3JkZXIgYXMgcGFzc2VkIGluIHRvIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgZnJhbWVidWZmZXIgYW5kIGl0cyBhdHRhY2htZW50c1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGhlaWdodCBUaGUgd2lkdGggb2YgdGhlIGZyYW1lYnVmZmVyIGFuZCBpdHMgYXR0YWNobWVudHNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZyYW1lYnVmZmVyIGFuZCBhdHRhY2htZW50cy5cbiAqXG4gKiBUaGlzIHJldHVybnMgYSB7QGxpbmsgbW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfSBiZWNhdXNlIGl0IG5lZWRzIHRvIHJldHVybiB0aGUgYXR0YWNobWVudHMgYXMgd2VsbCBhcyB0aGUgZnJhbWVidWZmZXIuXG4gKlxuICogVGhlIHNpbXBsZXN0IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0JBL1VOU0lHTkVEX0JZVEUgdGV4dHVyZSBhbmQgREVQVEhfU1RFTkNJTCByZW5kZXJidWZmZXJcbiAqICAgICBjb25zdCBmYmkgPSB0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mbyhnbCk7XG4gKlxuICogTW9yZSBjb21wbGV4IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0I1NjUgcmVuZGVyYnVmZmVyIGFuZCBhIFNURU5DSUxfSU5ERVg4IHJlbmRlcmJ1ZmZlclxuICogICAgIGNvbnN0IGF0dGFjaG1lbnRzID0gW1xuICogICAgICAgeyBmb3JtYXQ6IFJHQjU2NSwgbWFnOiBORUFSRVNUIH0sXG4gKiAgICAgICB7IGZvcm1hdDogU1RFTkNJTF9JTkRFWDggfSxcbiAqICAgICBdXG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzKTtcbiAqXG4gKiBQYXNzaW5nIGluIGEgc3BlY2lmaWMgc2l6ZVxuICpcbiAqICAgICBjb25zdCB3aWR0aCA9IDI1NjtcbiAqICAgICBjb25zdCBoZWlnaHQgPSAyNTY7XG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzLCB3aWR0aCwgaGVpZ2h0KTtcbiAqXG4gKiAqKk5vdGUhISoqIEl0IGlzIHVwIHRvIHlvdSB0byBjaGVjayBpZiB0aGUgZnJhbWVidWZmZXIgaXMgcmVuZGVyYWJsZSBieSBjYWxsaW5nIGBnbC5jaGVja0ZyYW1lYnVmZmVyU3RhdHVzYC5cbiAqIFtXZWJHTDEgb25seSBndWFyYW50ZWVzIDMgY29tYmluYXRpb25zIG9mIGF0dGFjaG1lbnRzIHdvcmtdKGh0dHBzOi8vd3d3Lmtocm9ub3Mub3JnL3JlZ2lzdHJ5L3dlYmdsL3NwZWNzL2xhdGVzdC8xLjAvIzYuNikuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQXR0YWNobWVudE9wdGlvbnNbXX0gW2F0dGFjaG1lbnRzXSB3aGljaCBhdHRhY2htZW50cyB0byBjcmVhdGUuIElmIG5vdCBwcm92aWRlZCB0aGUgZGVmYXVsdCBpcyBhIGZyYW1lYnVmZmVyIHdpdGggYW5cbiAqICAgIGBSR0JBYCwgYFVOU0lHTkVEX0JZVEVgIHRleHR1cmUgYENPTE9SX0FUVEFDSE1FTlQwYCBhbmQgYSBgREVQVEhfU1RFTkNJTGAgcmVuZGVyYnVmZmVyIGBERVBUSF9TVEVOQ0lMX0FUVEFDSE1FTlRgLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gdGhlIHdpZHRoIGZvciB0aGUgYXR0YWNobWVudHMuIERlZmF1bHQgPSBzaXplIG9mIGRyYXdpbmdCdWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSB0aGUgaGVpZ2h0IGZvciB0aGUgYXR0YWNobWVudHMuIERlZmF1bHQgPSBzaXplIG9mIGRyYXdpbmdCdWZmZXJcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkZyYW1lYnVmZmVySW5mb30gdGhlIGZyYW1lYnVmZmVyIGFuZCBhdHRhY2htZW50cy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9mcmFtZWJ1ZmZlcnNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYW1lYnVmZmVySW5mbyhnbCwgYXR0YWNobWVudHMsIHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIHRhcmdldCA9IEZSQU1FQlVGRkVSO1xuICB2YXIgZmIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICBnbC5iaW5kRnJhbWVidWZmZXIodGFyZ2V0LCBmYik7XG4gIHdpZHRoID0gd2lkdGggfHwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoO1xuICBoZWlnaHQgPSBoZWlnaHQgfHwgZ2wuZHJhd2luZ0J1ZmZlckhlaWdodDtcbiAgYXR0YWNobWVudHMgPSBhdHRhY2htZW50cyB8fCBkZWZhdWx0QXR0YWNobWVudHM7XG4gIHZhciBjb2xvckF0dGFjaG1lbnRDb3VudCA9IDA7XG4gIHZhciBmcmFtZWJ1ZmZlckluZm8gPSB7XG4gICAgZnJhbWVidWZmZXI6IGZiLFxuICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbiAgYXR0YWNobWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXR0YWNobWVudE9wdGlvbnMpIHtcbiAgICB2YXIgYXR0YWNobWVudCA9IGF0dGFjaG1lbnRPcHRpb25zLmF0dGFjaG1lbnQ7XG4gICAgdmFyIGZvcm1hdCA9IGF0dGFjaG1lbnRPcHRpb25zLmZvcm1hdDtcbiAgICB2YXIgYXR0YWNobWVudFBvaW50ID0gYXR0YWNobWVudE9wdGlvbnMuYXR0YWNobWVudFBvaW50IHx8IGdldEF0dGFjaG1lbnRQb2ludEZvckZvcm1hdChmb3JtYXQsIGF0dGFjaG1lbnRPcHRpb25zLmludGVybmFsRm9ybWF0KTtcblxuICAgIGlmICghYXR0YWNobWVudFBvaW50KSB7XG4gICAgICBhdHRhY2htZW50UG9pbnQgPSBDT0xPUl9BVFRBQ0hNRU5UMCArIGNvbG9yQXR0YWNobWVudENvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKCFhdHRhY2htZW50KSB7XG4gICAgICBpZiAoaXNSZW5kZXJidWZmZXJGb3JtYXQoZm9ybWF0KSkge1xuICAgICAgICBhdHRhY2htZW50ID0gZ2wuY3JlYXRlUmVuZGVyYnVmZmVyKCk7XG4gICAgICAgIGdsLmJpbmRSZW5kZXJidWZmZXIoUkVOREVSQlVGRkVSLCBhdHRhY2htZW50KTtcbiAgICAgICAgZ2wucmVuZGVyYnVmZmVyU3RvcmFnZShSRU5ERVJCVUZGRVIsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGV4dHVyZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBhdHRhY2htZW50T3B0aW9ucyk7XG4gICAgICAgIHRleHR1cmVPcHRpb25zLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRleHR1cmVPcHRpb25zLmhlaWdodCA9IGhlaWdodDtcblxuICAgICAgICBpZiAodGV4dHVyZU9wdGlvbnMuYXV0byA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGV4dHVyZU9wdGlvbnMuYXV0byA9IGZhbHNlO1xuICAgICAgICAgIHRleHR1cmVPcHRpb25zLm1pbiA9IHRleHR1cmVPcHRpb25zLm1pbiB8fCB0ZXh0dXJlT3B0aW9ucy5taW5NYWcgfHwgTElORUFSO1xuICAgICAgICAgIHRleHR1cmVPcHRpb25zLm1hZyA9IHRleHR1cmVPcHRpb25zLm1hZyB8fCB0ZXh0dXJlT3B0aW9ucy5taW5NYWcgfHwgTElORUFSO1xuICAgICAgICAgIHRleHR1cmVPcHRpb25zLndyYXBTID0gdGV4dHVyZU9wdGlvbnMud3JhcFMgfHwgdGV4dHVyZU9wdGlvbnMud3JhcCB8fCBDTEFNUF9UT19FREdFO1xuICAgICAgICAgIHRleHR1cmVPcHRpb25zLndyYXBUID0gdGV4dHVyZU9wdGlvbnMud3JhcFQgfHwgdGV4dHVyZU9wdGlvbnMud3JhcCB8fCBDTEFNUF9UT19FREdFO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0YWNobWVudCA9IHRleHR1cmVzLmNyZWF0ZVRleHR1cmUoZ2wsIHRleHR1cmVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGVscGVyLmlzUmVuZGVyYnVmZmVyKGdsLCBhdHRhY2htZW50KSkge1xuICAgICAgZ2wuZnJhbWVidWZmZXJSZW5kZXJidWZmZXIodGFyZ2V0LCBhdHRhY2htZW50UG9pbnQsIFJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgfSBlbHNlIGlmIChoZWxwZXIuaXNUZXh0dXJlKGdsLCBhdHRhY2htZW50KSkge1xuICAgICAgaWYgKGF0dGFjaG1lbnRPcHRpb25zLmxheWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ2wuZnJhbWVidWZmZXJUZXh0dXJlTGF5ZXIodGFyZ2V0LCBhdHRhY2htZW50UG9pbnQsIGF0dGFjaG1lbnQsIGF0dGFjaG1lbnRPcHRpb25zLmxldmVsIHx8IDAsIGF0dGFjaG1lbnRPcHRpb25zLmxheWVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKHRhcmdldCwgYXR0YWNobWVudFBvaW50LCBhdHRhY2htZW50T3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRCwgYXR0YWNobWVudCwgYXR0YWNobWVudE9wdGlvbnMubGV2ZWwgfHwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBhdHRhY2htZW50IHR5cGUnKTtcbiAgICB9XG5cbiAgICBmcmFtZWJ1ZmZlckluZm8uYXR0YWNobWVudHMucHVzaChhdHRhY2htZW50KTtcbiAgfSk7XG4gIHJldHVybiBmcmFtZWJ1ZmZlckluZm87XG59XG4vKipcbiAqIFJlc2l6ZXMgdGhlIGF0dGFjaG1lbnRzIG9mIGEgZnJhbWVidWZmZXIuXG4gKlxuICogWW91IG5lZWQgdG8gcGFzcyBpbiB0aGUgc2FtZSBgYXR0YWNobWVudHNgIGFzIHlvdSBwYXNzZWQgaW4ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mb31cbiAqIGJlY2F1c2UgVFdHTCBoYXMgbm8gaWRlYSB0aGUgZm9ybWF0L3R5cGUgb2YgZWFjaCBhdHRhY2htZW50LlxuICpcbiAqIFRoZSBzaW1wbGVzdCB1c2FnZVxuICpcbiAqICAgICAvLyBjcmVhdGUgYW4gUkdCQS9VTlNJR05FRF9CWVRFIHRleHR1cmUgYW5kIERFUFRIX1NURU5DSUwgcmVuZGVyYnVmZmVyXG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wpO1xuICpcbiAqICAgICAuLi5cbiAqXG4gKiAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICogICAgICAgaWYgKHR3Z2wucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShnbC5jYW52YXMpKSB7XG4gKiAgICAgICAgIC8vIHJlc2l6ZSB0aGUgYXR0YWNobWVudHNcbiAqICAgICAgICAgdHdnbC5yZXNpemVGcmFtZWJ1ZmZlckluZm8oZ2wsIGZiaSk7XG4gKiAgICAgICB9XG4gKlxuICogTW9yZSBjb21wbGV4IHVzYWdlXG4gKlxuICogICAgIC8vIGNyZWF0ZSBhbiBSR0I1NjUgcmVuZGVyYnVmZmVyIGFuZCBhIFNURU5DSUxfSU5ERVg4IHJlbmRlcmJ1ZmZlclxuICogICAgIGNvbnN0IGF0dGFjaG1lbnRzID0gW1xuICogICAgICAgeyBmb3JtYXQ6IFJHQjU2NSwgbWFnOiBORUFSRVNUIH0sXG4gKiAgICAgICB7IGZvcm1hdDogU1RFTkNJTF9JTkRFWDggfSxcbiAqICAgICBdXG4gKiAgICAgY29uc3QgZmJpID0gdHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm8oZ2wsIGF0dGFjaG1lbnRzKTtcbiAqXG4gKiAgICAgLi4uXG4gKlxuICogICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAqICAgICAgIGlmICh0d2dsLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKSkge1xuICogICAgICAgICAvLyByZXNpemUgdGhlIGF0dGFjaG1lbnRzIHRvIG1hdGNoXG4gKiAgICAgICAgIHR3Z2wucmVzaXplRnJhbWVidWZmZXJJbmZvKGdsLCBmYmksIGF0dGFjaG1lbnRzKTtcbiAqICAgICAgIH1cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5GcmFtZWJ1ZmZlckluZm99IGZyYW1lYnVmZmVySW5mbyBhIGZyYW1lYnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5BdHRhY2htZW50T3B0aW9uc1tdfSBbYXR0YWNobWVudHNdIHRoZSBzYW1lIGF0dGFjaG1lbnRzIG9wdGlvbnMgYXMgcGFzc2VkIHRvIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVGcmFtZWJ1ZmZlckluZm99LlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gdGhlIHdpZHRoIGZvciB0aGUgYXR0YWNobWVudHMuIERlZmF1bHQgPSBzaXplIG9mIGRyYXdpbmdCdWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSB0aGUgaGVpZ2h0IGZvciB0aGUgYXR0YWNobWVudHMuIERlZmF1bHQgPSBzaXplIG9mIGRyYXdpbmdCdWZmZXJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9mcmFtZWJ1ZmZlcnNcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlc2l6ZUZyYW1lYnVmZmVySW5mbyhnbCwgZnJhbWVidWZmZXJJbmZvLCBhdHRhY2htZW50cywgd2lkdGgsIGhlaWdodCkge1xuICB3aWR0aCA9IHdpZHRoIHx8IGdsLmRyYXdpbmdCdWZmZXJXaWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQ7XG4gIGZyYW1lYnVmZmVySW5mby53aWR0aCA9IHdpZHRoO1xuICBmcmFtZWJ1ZmZlckluZm8uaGVpZ2h0ID0gaGVpZ2h0O1xuICBhdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzIHx8IGRlZmF1bHRBdHRhY2htZW50cztcbiAgYXR0YWNobWVudHMuZm9yRWFjaChmdW5jdGlvbiAoYXR0YWNobWVudE9wdGlvbnMsIG5keCkge1xuICAgIHZhciBhdHRhY2htZW50ID0gZnJhbWVidWZmZXJJbmZvLmF0dGFjaG1lbnRzW25keF07XG4gICAgdmFyIGZvcm1hdCA9IGF0dGFjaG1lbnRPcHRpb25zLmZvcm1hdDtcblxuICAgIGlmIChoZWxwZXIuaXNSZW5kZXJidWZmZXIoZ2wsIGF0dGFjaG1lbnQpKSB7XG4gICAgICBnbC5iaW5kUmVuZGVyYnVmZmVyKFJFTkRFUkJVRkZFUiwgYXR0YWNobWVudCk7XG4gICAgICBnbC5yZW5kZXJidWZmZXJTdG9yYWdlKFJFTkRFUkJVRkZFUiwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGhlbHBlci5pc1RleHR1cmUoZ2wsIGF0dGFjaG1lbnQpKSB7XG4gICAgICB0ZXh0dXJlcy5yZXNpemVUZXh0dXJlKGdsLCBhdHRhY2htZW50LCBhdHRhY2htZW50T3B0aW9ucywgd2lkdGgsIGhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBhdHRhY2htZW50IHR5cGUnKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBCaW5kcyBhIGZyYW1lYnVmZmVyXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwcmV0dHkgbXVjaCBzb2xlbHkgZXhpc3RzIGJlY2F1c2UgSSBzcGVudCBob3Vyc1xuICogdHJ5aW5nIHRvIGZpZ3VyZSBvdXQgd2h5IHNvbWV0aGluZyBJIHdyb3RlIHdhc24ndCB3b3JraW5nIG9ubHlcbiAqIHRvIHJlYWxpemUgSSBmb3JnZXQgdG8gc2V0IHRoZSB2aWV3cG9ydCBkaW1lbnNpb25zLlxuICogTXkgaG9wZSBpcyB0aGlzIGZ1bmN0aW9uIHdpbGwgZml4IHRoYXQuXG4gKlxuICogSXQgaXMgZWZmZWN0aXZlbHkgdGhlIHNhbWUgYXNcbiAqXG4gKiAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBzb21lRnJhbWVidWZmZXJJbmZvLmZyYW1lYnVmZmVyKTtcbiAqICAgICBnbC52aWV3cG9ydCgwLCAwLCBzb21lRnJhbWVidWZmZXJJbmZvLndpZHRoLCBzb21lRnJhbWVidWZmZXJJbmZvLmhlaWdodCk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRnJhbWVidWZmZXJJbmZvfG51bGx9IFtmcmFtZWJ1ZmZlckluZm9dIGEgZnJhbWVidWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUZyYW1lYnVmZmVySW5mb30uXG4gKiAgIElmIGZhbHN5IHdpbGwgYmluZCB0aGUgY2FudmFzLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YXJnZXRdIFRoZSB0YXJnZXQuIElmIG5vdCBwYXNzZWQgYGdsLkZSQU1FQlVGRkVSYCB3aWxsIGJlIHVzZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kRnJhbWVidWZmZXJJbmZvKGdsLCBmcmFtZWJ1ZmZlckluZm8sIHRhcmdldCkge1xuICB0YXJnZXQgPSB0YXJnZXQgfHwgRlJBTUVCVUZGRVI7XG5cbiAgaWYgKGZyYW1lYnVmZmVySW5mbykge1xuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcih0YXJnZXQsIGZyYW1lYnVmZmVySW5mby5mcmFtZWJ1ZmZlcik7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZnJhbWVidWZmZXJJbmZvLndpZHRoLCBmcmFtZWJ1ZmZlckluZm8uaGVpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICBnbC5iaW5kRnJhbWVidWZmZXIodGFyZ2V0LCBudWxsKTtcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5kcmF3aW5nQnVmZmVyV2lkdGgsIGdsLmRyYXdpbmdCdWZmZXJIZWlnaHQpO1xuICB9XG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2hlbHBlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaGVscGVyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb3B5RXhpc3RpbmdQcm9wZXJ0aWVzID0gY29weUV4aXN0aW5nUHJvcGVydGllcztcbmV4cG9ydHMuY29weU5hbWVkUHJvcGVydGllcyA9IGNvcHlOYW1lZFByb3BlcnRpZXM7XG5leHBvcnRzLmVycm9yID0gZXJyb3I7XG5leHBvcnRzLndhcm4gPSB3YXJuO1xuZXhwb3J0cy5pc0J1ZmZlciA9IGlzQnVmZmVyO1xuZXhwb3J0cy5pc1JlbmRlcmJ1ZmZlciA9IGlzUmVuZGVyYnVmZmVyO1xuZXhwb3J0cy5pc1NoYWRlciA9IGlzU2hhZGVyO1xuZXhwb3J0cy5pc1RleHR1cmUgPSBpc1RleHR1cmU7XG5leHBvcnRzLmlzU2FtcGxlciA9IGlzU2FtcGxlcjtcblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKiBlc2xpbnQgbm8tY29uc29sZTogXCJvZmZcIiAqL1xuXG4vKipcbiAqIENvcHkgbmFtZWQgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG5hbWVzIG5hbWVzIG9mIHByb3BlcnRpZXMgdG8gY29weVxuICogQHBhcmFtIHtvYmplY3R9IHNyYyBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7b2JqZWN0fSBkc3Qgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY29weU5hbWVkUHJvcGVydGllcyhuYW1lcywgc3JjLCBkc3QpIHtcbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IHNyY1tuYW1lXTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBkc3RbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBmcm9tIHNvdXJjZSB0byBkZXN0IG9ubHkgaWYgYSBtYXRjaGluZyBrZXkgaXMgaW4gZGVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSBzcmMgdGhlIHNvdXJjZVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgPz59IGRzdCB0aGUgZGVzdFxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvcHlFeGlzdGluZ1Byb3BlcnRpZXMoc3JjLCBkc3QpIHtcbiAgT2JqZWN0LmtleXMoZHN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoZHN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgc3JjLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIC8qIGVzbGludCBuby1wcm90b3R5cGUtYnVpbHRpbnM6IDAgKi9cbiAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZXJyb3IoKSB7XG4gIHZhciBfY29uc29sZTtcblxuICAoX2NvbnNvbGUgPSBjb25zb2xlKS5lcnJvci5hcHBseShfY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gd2FybigpIHtcbiAgdmFyIF9jb25zb2xlMjtcblxuICAoX2NvbnNvbGUyID0gY29uc29sZSkud2Fybi5hcHBseShfY29uc29sZTIsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyKGdsLCB0KSB7XG4gIHJldHVybiB0eXBlb2YgV2ViR0xCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHQgaW5zdGFuY2VvZiBXZWJHTEJ1ZmZlcjtcbn1cblxuZnVuY3Rpb24gaXNSZW5kZXJidWZmZXIoZ2wsIHQpIHtcbiAgcmV0dXJuIHR5cGVvZiBXZWJHTFJlbmRlcmJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyYnVmZmVyO1xufVxuXG5mdW5jdGlvbiBpc1NoYWRlcihnbCwgdCkge1xuICByZXR1cm4gdHlwZW9mIFdlYkdMU2hhZGVyICE9PSAndW5kZWZpbmVkJyAmJiB0IGluc3RhbmNlb2YgV2ViR0xTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGlzVGV4dHVyZShnbCwgdCkge1xuICByZXR1cm4gdHlwZW9mIFdlYkdMVGV4dHVyZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdCBpbnN0YW5jZW9mIFdlYkdMVGV4dHVyZTtcbn1cblxuZnVuY3Rpb24gaXNTYW1wbGVyKGdsLCB0KSB7XG4gIHJldHVybiB0eXBlb2YgV2ViR0xTYW1wbGVyICE9PSAndW5kZWZpbmVkJyAmJiB0IGluc3RhbmNlb2YgV2ViR0xTYW1wbGVyO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tNC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tNC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmF4aXNSb3RhdGUgPSBheGlzUm90YXRlO1xuZXhwb3J0cy5heGlzUm90YXRpb24gPSBheGlzUm90YXRpb247XG5leHBvcnRzLmNvcHkgPSBjb3B5O1xuZXhwb3J0cy5mcnVzdHVtID0gZnJ1c3R1bTtcbmV4cG9ydHMuZ2V0QXhpcyA9IGdldEF4aXM7XG5leHBvcnRzLmdldFRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb247XG5leHBvcnRzLmlkZW50aXR5ID0gaWRlbnRpdHk7XG5leHBvcnRzLmludmVyc2UgPSBpbnZlcnNlO1xuZXhwb3J0cy5sb29rQXQgPSBsb29rQXQ7XG5leHBvcnRzLm11bHRpcGx5ID0gbXVsdGlwbHk7XG5leHBvcnRzLm5lZ2F0ZSA9IG5lZ2F0ZTtcbmV4cG9ydHMub3J0aG8gPSBvcnRobztcbmV4cG9ydHMucGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZTtcbmV4cG9ydHMucm90YXRlWCA9IHJvdGF0ZVg7XG5leHBvcnRzLnJvdGF0ZVkgPSByb3RhdGVZO1xuZXhwb3J0cy5yb3RhdGVaID0gcm90YXRlWjtcbmV4cG9ydHMucm90YXRpb25YID0gcm90YXRpb25YO1xuZXhwb3J0cy5yb3RhdGlvblkgPSByb3RhdGlvblk7XG5leHBvcnRzLnJvdGF0aW9uWiA9IHJvdGF0aW9uWjtcbmV4cG9ydHMuc2NhbGUgPSBzY2FsZTtcbmV4cG9ydHMuc2NhbGluZyA9IHNjYWxpbmc7XG5leHBvcnRzLnNldEF4aXMgPSBzZXRBeGlzO1xuZXhwb3J0cy5zZXREZWZhdWx0VHlwZSA9IHNldERlZmF1bHRUeXBlO1xuZXhwb3J0cy5zZXRUcmFuc2xhdGlvbiA9IHNldFRyYW5zbGF0aW9uO1xuZXhwb3J0cy50cmFuc2Zvcm1EaXJlY3Rpb24gPSB0cmFuc2Zvcm1EaXJlY3Rpb247XG5leHBvcnRzLnRyYW5zZm9ybU5vcm1hbCA9IHRyYW5zZm9ybU5vcm1hbDtcbmV4cG9ydHMudHJhbnNmb3JtUG9pbnQgPSB0cmFuc2Zvcm1Qb2ludDtcbmV4cG9ydHMudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuZXhwb3J0cy50cmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uO1xuZXhwb3J0cy50cmFuc3Bvc2UgPSB0cmFuc3Bvc2U7XG5cbnZhciB2MyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdjMuanMgKi8gXCIuL3NyYy92My5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiA0eDQgTWF0cml4IG1hdGggbWF0aCBmdW5jdGlvbnMuXG4gKlxuICogQWxtb3N0IGFsbCBmdW5jdGlvbnMgdGFrZSBhbiBvcHRpb25hbCBgZHN0YCBhcmd1bWVudC4gSWYgaXQgaXMgbm90IHBhc3NlZCBpbiB0aGVcbiAqIGZ1bmN0aW9ucyB3aWxsIGNyZWF0ZSBhIG5ldyBtYXRyaXguIEluIG90aGVyIHdvcmRzIHlvdSBjYW4gZG8gdGhpc1xuICpcbiAqICAgICBjb25zdCBtYXQgPSBtNC50cmFuc2xhdGlvbihbMSwgMiwgM10pOyAgLy8gQ3JlYXRlcyBhIG5ldyB0cmFuc2xhdGlvbiBtYXRyaXhcbiAqXG4gKiBvclxuICpcbiAqICAgICBjb25zdCBtYXQgPSBtNC5jcmVhdGUoKTtcbiAqICAgICBtNC50cmFuc2xhdGlvbihbMSwgMiwgM10sIG1hdCk7ICAvLyBQdXRzIHRyYW5zbGF0aW9uIG1hdHJpeCBpbiBtYXQuXG4gKlxuICogVGhlIGZpcnN0IHN0eWxlIGlzIG9mdGVuIGVhc2llciBidXQgZGVwZW5kaW5nIG9uIHdoZXJlIGl0J3MgdXNlZCBpdCBnZW5lcmF0ZXMgZ2FyYmFnZSB3aGVyZVxuICogYXMgdGhlcmUgaXMgYWxtb3N0IG5ldmVyIGFsbG9jYXRpb24gd2l0aCB0aGUgc2Vjb25kIHN0eWxlLlxuICpcbiAqIEl0IGlzIGFsd2F5cyBzYXZlIHRvIHBhc3MgYW55IG1hdHJpeCBhcyB0aGUgZGVzdGluYXRpb24uIFNvIGZvciBleGFtcGxlXG4gKlxuICogICAgIGNvbnN0IG1hdCA9IG00LmlkZW50aXR5KCk7XG4gKiAgICAgY29uc3QgdHJhbnMgPSBtNC50cmFuc2xhdGlvbihbMSwgMiwgM10pO1xuICogICAgIG00Lm11bHRpcGx5KG1hdCwgdHJhbnMsIG1hdCk7ICAvLyBNdWx0aXBsaWVzIG1hdCAqIHRyYW5zIGFuZCBwdXRzIHJlc3VsdCBpbiBtYXQuXG4gKlxuICogQG1vZHVsZSB0d2dsL200XG4gKi9cbnZhciBNYXRUeXBlID0gRmxvYXQzMkFycmF5O1xuLyoqXG4gKiBBIEphdmFTY3JpcHQgYXJyYXkgd2l0aCAxNiB2YWx1ZXMgb3IgYSBGbG9hdDMyQXJyYXkgd2l0aCAxNiB2YWx1ZXMuXG4gKiBXaGVuIGNyZWF0ZWQgYnkgdGhlIGxpYnJhcnkgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgdHlwZSB3aGljaCBpcyBgRmxvYXQzMkFycmF5YFxuICogYnV0IGNhbiBiZSBzZXQgYnkgY2FsbGluZyB7QGxpbmsgbW9kdWxlOnR3Z2wvbTQuc2V0RGVmYXVsdFR5cGV9LlxuICogQHR5cGVkZWYgeyhudW1iZXJbXXxGbG9hdDMyQXJyYXkpfSBNYXQ0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG4vKipcbiAqIFNldHMgdGhlIHR5cGUgdGhpcyBsaWJyYXJ5IGNyZWF0ZXMgZm9yIGEgTWF0NFxuICogQHBhcmFtIHtjb25zdHJ1Y3Rvcn0gY3RvciB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLiBFaXRoZXIgYEZsb2F0MzJBcnJheWAgb3IgYEFycmF5YFxuICogQHJldHVybiB7Y29uc3RydWN0b3J9IHByZXZpb3VzIGNvbnN0cnVjdG9yIGZvciBNYXQ0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5mdW5jdGlvbiBzZXREZWZhdWx0VHlwZShjdG9yKSB7XG4gIHZhciBvbGRUeXBlID0gTWF0VHlwZTtcbiAgTWF0VHlwZSA9IGN0b3I7XG4gIHJldHVybiBvbGRUeXBlO1xufVxuLyoqXG4gKiBOZWdhdGVzIGEgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IC1tLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBuZWdhdGUobSwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIGRzdFswXSA9IC1tWzBdO1xuICBkc3RbMV0gPSAtbVsxXTtcbiAgZHN0WzJdID0gLW1bMl07XG4gIGRzdFszXSA9IC1tWzNdO1xuICBkc3RbNF0gPSAtbVs0XTtcbiAgZHN0WzVdID0gLW1bNV07XG4gIGRzdFs2XSA9IC1tWzZdO1xuICBkc3RbN10gPSAtbVs3XTtcbiAgZHN0WzhdID0gLW1bOF07XG4gIGRzdFs5XSA9IC1tWzldO1xuICBkc3RbMTBdID0gLW1bMTBdO1xuICBkc3RbMTFdID0gLW1bMTFdO1xuICBkc3RbMTJdID0gLW1bMTJdO1xuICBkc3RbMTNdID0gLW1bMTNdO1xuICBkc3RbMTRdID0gLW1bMTRdO1xuICBkc3RbMTVdID0gLW1bMTVdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb3BpZXMgYSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gVGhlIG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IEEgY29weSBvZiBtLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBjb3B5KG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICBkc3RbMF0gPSBtWzBdO1xuICBkc3RbMV0gPSBtWzFdO1xuICBkc3RbMl0gPSBtWzJdO1xuICBkc3RbM10gPSBtWzNdO1xuICBkc3RbNF0gPSBtWzRdO1xuICBkc3RbNV0gPSBtWzVdO1xuICBkc3RbNl0gPSBtWzZdO1xuICBkc3RbN10gPSBtWzddO1xuICBkc3RbOF0gPSBtWzhdO1xuICBkc3RbOV0gPSBtWzldO1xuICBkc3RbMTBdID0gbVsxMF07XG4gIGRzdFsxMV0gPSBtWzExXTtcbiAgZHN0WzEyXSA9IG1bMTJdO1xuICBkc3RbMTNdID0gbVsxM107XG4gIGRzdFsxNF0gPSBtWzE0XTtcbiAgZHN0WzE1XSA9IG1bMTVdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIG4tYnktbiBpZGVudGl0eSBtYXRyaXguXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBBbiBuLWJ5LW4gaWRlbnRpdHkgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBpZGVudGl0eShkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgZHN0WzBdID0gMTtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gMTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gMDtcbiAgZHN0WzldID0gMDtcbiAgZHN0WzEwXSA9IDE7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogVGFrZXMgdGhlIHRyYW5zcG9zZSBvZiBhIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgdHJhbnNwb3NlIG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYW5zcG9zZShtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcblxuICBpZiAoZHN0ID09PSBtKSB7XG4gICAgdmFyIHQ7XG4gICAgdCA9IG1bMV07XG4gICAgbVsxXSA9IG1bNF07XG4gICAgbVs0XSA9IHQ7XG4gICAgdCA9IG1bMl07XG4gICAgbVsyXSA9IG1bOF07XG4gICAgbVs4XSA9IHQ7XG4gICAgdCA9IG1bM107XG4gICAgbVszXSA9IG1bMTJdO1xuICAgIG1bMTJdID0gdDtcbiAgICB0ID0gbVs2XTtcbiAgICBtWzZdID0gbVs5XTtcbiAgICBtWzldID0gdDtcbiAgICB0ID0gbVs3XTtcbiAgICBtWzddID0gbVsxM107XG4gICAgbVsxM10gPSB0O1xuICAgIHQgPSBtWzExXTtcbiAgICBtWzExXSA9IG1bMTRdO1xuICAgIG1bMTRdID0gdDtcbiAgICByZXR1cm4gZHN0O1xuICB9XG5cbiAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgZHN0WzBdID0gbTAwO1xuICBkc3RbMV0gPSBtMTA7XG4gIGRzdFsyXSA9IG0yMDtcbiAgZHN0WzNdID0gbTMwO1xuICBkc3RbNF0gPSBtMDE7XG4gIGRzdFs1XSA9IG0xMTtcbiAgZHN0WzZdID0gbTIxO1xuICBkc3RbN10gPSBtMzE7XG4gIGRzdFs4XSA9IG0wMjtcbiAgZHN0WzldID0gbTEyO1xuICBkc3RbMTBdID0gbTIyO1xuICBkc3RbMTFdID0gbTMyO1xuICBkc3RbMTJdID0gbTAzO1xuICBkc3RbMTNdID0gbTEzO1xuICBkc3RbMTRdID0gbTIzO1xuICBkc3RbMTVdID0gbTMzO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgaW52ZXJzZSBvZiBhIDQtYnktNCBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG0gVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIGludmVyc2Ugb2YgbS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gaW52ZXJzZShtLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcbiAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcbiAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcbiAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcbiAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcbiAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcbiAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcbiAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcbiAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcbiAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcbiAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcbiAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcbiAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcbiAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcbiAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcbiAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcbiAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xuICB2YXIgdG1wXzEgPSBtMzIgKiBtMjM7XG4gIHZhciB0bXBfMiA9IG0xMiAqIG0zMztcbiAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xuICB2YXIgdG1wXzQgPSBtMTIgKiBtMjM7XG4gIHZhciB0bXBfNSA9IG0yMiAqIG0xMztcbiAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xuICB2YXIgdG1wXzcgPSBtMzIgKiBtMDM7XG4gIHZhciB0bXBfOCA9IG0wMiAqIG0yMztcbiAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xuICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xuICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xuICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xuICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xuICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xuICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xuICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xuICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xuICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xuICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xuICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xuICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xuICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xuICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xuICB2YXIgdDAgPSB0bXBfMCAqIG0xMSArIHRtcF8zICogbTIxICsgdG1wXzQgKiBtMzEgLSAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcbiAgdmFyIHQxID0gdG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxIC0gKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XG4gIHZhciB0MiA9IHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEgLSAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XG4gIHZhciB0MyA9IHRtcF81ICogbTAxICsgdG1wXzggKiBtMTEgKyB0bXBfMTEgKiBtMjEgLSAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XG4gIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcbiAgZHN0WzBdID0gZCAqIHQwO1xuICBkc3RbMV0gPSBkICogdDE7XG4gIGRzdFsyXSA9IGQgKiB0MjtcbiAgZHN0WzNdID0gZCAqIHQzO1xuICBkc3RbNF0gPSBkICogKHRtcF8xICogbTEwICsgdG1wXzIgKiBtMjAgKyB0bXBfNSAqIG0zMCAtICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKTtcbiAgZHN0WzVdID0gZCAqICh0bXBfMCAqIG0wMCArIHRtcF83ICogbTIwICsgdG1wXzggKiBtMzAgLSAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSk7XG4gIGRzdFs2XSA9IGQgKiAodG1wXzMgKiBtMDAgKyB0bXBfNiAqIG0xMCArIHRtcF8xMSAqIG0zMCAtICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSk7XG4gIGRzdFs3XSA9IGQgKiAodG1wXzQgKiBtMDAgKyB0bXBfOSAqIG0xMCArIHRtcF8xMCAqIG0yMCAtICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSk7XG4gIGRzdFs4XSA9IGQgKiAodG1wXzEyICogbTEzICsgdG1wXzE1ICogbTIzICsgdG1wXzE2ICogbTMzIC0gKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpO1xuICBkc3RbOV0gPSBkICogKHRtcF8xMyAqIG0wMyArIHRtcF8xOCAqIG0yMyArIHRtcF8yMSAqIG0zMyAtICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKTtcbiAgZHN0WzEwXSA9IGQgKiAodG1wXzE0ICogbTAzICsgdG1wXzE5ICogbTEzICsgdG1wXzIyICogbTMzIC0gKHRtcF8xNSAqIG0wMyArIHRtcF8xOCAqIG0xMyArIHRtcF8yMyAqIG0zMykpO1xuICBkc3RbMTFdID0gZCAqICh0bXBfMTcgKiBtMDMgKyB0bXBfMjAgKiBtMTMgKyB0bXBfMjMgKiBtMjMgLSAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSk7XG4gIGRzdFsxMl0gPSBkICogKHRtcF8xNCAqIG0yMiArIHRtcF8xNyAqIG0zMiArIHRtcF8xMyAqIG0xMiAtICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKTtcbiAgZHN0WzEzXSA9IGQgKiAodG1wXzIwICogbTMyICsgdG1wXzEyICogbTAyICsgdG1wXzE5ICogbTIyIC0gKHRtcF8xOCAqIG0yMiArIHRtcF8yMSAqIG0zMiArIHRtcF8xMyAqIG0wMikpO1xuICBkc3RbMTRdID0gZCAqICh0bXBfMTggKiBtMTIgKyB0bXBfMjMgKiBtMzIgKyB0bXBfMTUgKiBtMDIgLSAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSk7XG4gIGRzdFsxNV0gPSBkICogKHRtcF8yMiAqIG0yMiArIHRtcF8xNiAqIG0wMiArIHRtcF8yMSAqIG0xMiAtICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogTXVsdGlwbGllcyB0d28gNC1ieS00IG1hdHJpY2VzIHdpdGggYSBvbiB0aGUgbGVmdCBhbmQgYiBvbiB0aGUgcmlnaHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gYSBUaGUgbWF0cml4IG9uIHRoZSBsZWZ0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBiIFRoZSBtYXRyaXggb24gdGhlIHJpZ2h0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgbWF0cml4IHByb2R1Y3Qgb2YgYSBhbmQgYi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gbXVsdGlwbHkoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBhMDAgPSBhWzBdO1xuICB2YXIgYTAxID0gYVsxXTtcbiAgdmFyIGEwMiA9IGFbMl07XG4gIHZhciBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0ICsgMF07XG4gIHZhciBhMTEgPSBhWzQgKyAxXTtcbiAgdmFyIGExMiA9IGFbNCArIDJdO1xuICB2YXIgYTEzID0gYVs0ICsgM107XG4gIHZhciBhMjAgPSBhWzggKyAwXTtcbiAgdmFyIGEyMSA9IGFbOCArIDFdO1xuICB2YXIgYTIyID0gYVs4ICsgMl07XG4gIHZhciBhMjMgPSBhWzggKyAzXTtcbiAgdmFyIGEzMCA9IGFbMTIgKyAwXTtcbiAgdmFyIGEzMSA9IGFbMTIgKyAxXTtcbiAgdmFyIGEzMiA9IGFbMTIgKyAyXTtcbiAgdmFyIGEzMyA9IGFbMTIgKyAzXTtcbiAgdmFyIGIwMCA9IGJbMF07XG4gIHZhciBiMDEgPSBiWzFdO1xuICB2YXIgYjAyID0gYlsyXTtcbiAgdmFyIGIwMyA9IGJbM107XG4gIHZhciBiMTAgPSBiWzQgKyAwXTtcbiAgdmFyIGIxMSA9IGJbNCArIDFdO1xuICB2YXIgYjEyID0gYls0ICsgMl07XG4gIHZhciBiMTMgPSBiWzQgKyAzXTtcbiAgdmFyIGIyMCA9IGJbOCArIDBdO1xuICB2YXIgYjIxID0gYls4ICsgMV07XG4gIHZhciBiMjIgPSBiWzggKyAyXTtcbiAgdmFyIGIyMyA9IGJbOCArIDNdO1xuICB2YXIgYjMwID0gYlsxMiArIDBdO1xuICB2YXIgYjMxID0gYlsxMiArIDFdO1xuICB2YXIgYjMyID0gYlsxMiArIDJdO1xuICB2YXIgYjMzID0gYlsxMiArIDNdO1xuICBkc3RbMF0gPSBhMDAgKiBiMDAgKyBhMTAgKiBiMDEgKyBhMjAgKiBiMDIgKyBhMzAgKiBiMDM7XG4gIGRzdFsxXSA9IGEwMSAqIGIwMCArIGExMSAqIGIwMSArIGEyMSAqIGIwMiArIGEzMSAqIGIwMztcbiAgZHN0WzJdID0gYTAyICogYjAwICsgYTEyICogYjAxICsgYTIyICogYjAyICsgYTMyICogYjAzO1xuICBkc3RbM10gPSBhMDMgKiBiMDAgKyBhMTMgKiBiMDEgKyBhMjMgKiBiMDIgKyBhMzMgKiBiMDM7XG4gIGRzdFs0XSA9IGEwMCAqIGIxMCArIGExMCAqIGIxMSArIGEyMCAqIGIxMiArIGEzMCAqIGIxMztcbiAgZHN0WzVdID0gYTAxICogYjEwICsgYTExICogYjExICsgYTIxICogYjEyICsgYTMxICogYjEzO1xuICBkc3RbNl0gPSBhMDIgKiBiMTAgKyBhMTIgKiBiMTEgKyBhMjIgKiBiMTIgKyBhMzIgKiBiMTM7XG4gIGRzdFs3XSA9IGEwMyAqIGIxMCArIGExMyAqIGIxMSArIGEyMyAqIGIxMiArIGEzMyAqIGIxMztcbiAgZHN0WzhdID0gYTAwICogYjIwICsgYTEwICogYjIxICsgYTIwICogYjIyICsgYTMwICogYjIzO1xuICBkc3RbOV0gPSBhMDEgKiBiMjAgKyBhMTEgKiBiMjEgKyBhMjEgKiBiMjIgKyBhMzEgKiBiMjM7XG4gIGRzdFsxMF0gPSBhMDIgKiBiMjAgKyBhMTIgKiBiMjEgKyBhMjIgKiBiMjIgKyBhMzIgKiBiMjM7XG4gIGRzdFsxMV0gPSBhMDMgKiBiMjAgKyBhMTMgKiBiMjEgKyBhMjMgKiBiMjIgKyBhMzMgKiBiMjM7XG4gIGRzdFsxMl0gPSBhMDAgKiBiMzAgKyBhMTAgKiBiMzEgKyBhMjAgKiBiMzIgKyBhMzAgKiBiMzM7XG4gIGRzdFsxM10gPSBhMDEgKiBiMzAgKyBhMTEgKiBiMzEgKyBhMjEgKiBiMzIgKyBhMzEgKiBiMzM7XG4gIGRzdFsxNF0gPSBhMDIgKiBiMzAgKyBhMTIgKiBiMzEgKyBhMjIgKiBiMzIgKyBhMzIgKiBiMzM7XG4gIGRzdFsxNV0gPSBhMDMgKiBiMzAgKyBhMTMgKiBiMzEgKyBhMjMgKiBiMzIgKyBhMzMgKiBiMzM7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFNldHMgdGhlIHRyYW5zbGF0aW9uIGNvbXBvbmVudCBvZiBhIDQtYnktNCBtYXRyaXggdG8gdGhlIGdpdmVuXG4gKiB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IGEgVGhlIG1hdHJpeC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiBUaGUgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgbWF0cml4IHdpdGggdHJhbnNsYXRpb24gc2V0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGlvbihhLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IGlkZW50aXR5KCk7XG5cbiAgaWYgKGEgIT09IGRzdCkge1xuICAgIGRzdFswXSA9IGFbMF07XG4gICAgZHN0WzFdID0gYVsxXTtcbiAgICBkc3RbMl0gPSBhWzJdO1xuICAgIGRzdFszXSA9IGFbM107XG4gICAgZHN0WzRdID0gYVs0XTtcbiAgICBkc3RbNV0gPSBhWzVdO1xuICAgIGRzdFs2XSA9IGFbNl07XG4gICAgZHN0WzddID0gYVs3XTtcbiAgICBkc3RbOF0gPSBhWzhdO1xuICAgIGRzdFs5XSA9IGFbOV07XG4gICAgZHN0WzEwXSA9IGFbMTBdO1xuICAgIGRzdFsxMV0gPSBhWzExXTtcbiAgfVxuXG4gIGRzdFsxMl0gPSB2WzBdO1xuICBkc3RbMTNdID0gdlsxXTtcbiAgZHN0WzE0XSA9IHZbMl07XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiBjb21wb25lbnQgb2YgYSA0LWJ5LTQgbWF0cml4IGFzIGEgdmVjdG9yIHdpdGggM1xuICogZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdHJhbnNsYXRpb24gY29tcG9uZW50IG9mIG0uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG0sIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIGRzdFswXSA9IG1bMTJdO1xuICBkc3RbMV0gPSBtWzEzXTtcbiAgZHN0WzJdID0gbVsxNF07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFJldHVybnMgYW4gYXhpcyBvZiBhIDR4NCBtYXRyaXggYXMgYSB2ZWN0b3Igd2l0aCAzIGVudHJpZXNcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtudW1iZXJ9IGF4aXMgVGhlIGF4aXMgMCA9IHgsIDEgPSB5LCAyID0gejtcbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3Rvci5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBheGlzIGNvbXBvbmVudCBvZiBtLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBeGlzKG0sIGF4aXMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciBvZmYgPSBheGlzICogNDtcbiAgZHN0WzBdID0gbVtvZmYgKyAwXTtcbiAgZHN0WzFdID0gbVtvZmYgKyAxXTtcbiAgZHN0WzJdID0gbVtvZmYgKyAyXTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogU2V0cyBhbiBheGlzIG9mIGEgNHg0IG1hdHJpeCBhcyBhIHZlY3RvciB3aXRoIDMgZW50cmllc1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgdGhlIGF4aXMgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcn0gYXhpcyBUaGUgYXhpcyAgMCA9IHgsIDEgPSB5LCAyID0gejtcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gVGhlIG1hdHJpeCB0byBzZXQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgbWF0cml4IHdpdGggYXhpcyBzZXQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldEF4aXMoYSwgdiwgYXhpcywgZHN0KSB7XG4gIGlmIChkc3QgIT09IGEpIHtcbiAgICBkc3QgPSBjb3B5KGEsIGRzdCk7XG4gIH1cblxuICB2YXIgb2ZmID0gYXhpcyAqIDQ7XG4gIGRzdFtvZmYgKyAwXSA9IHZbMF07XG4gIGRzdFtvZmYgKyAxXSA9IHZbMV07XG4gIGRzdFtvZmYgKyAyXSA9IHZbMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgYW5ndWxhciBoZWlnaHRcbiAqIG9mIHRoZSBmcnVzdHVtLCB0aGUgYXNwZWN0IHJhdGlvLCBhbmQgdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuICBUaGVcbiAqIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtIGV4dGVuZGluZyBpbiB0aGUgbmVnYXRpdmUgeiBkaXJlY3Rpb24uICBUaGUgZ2l2ZW5cbiAqIGFuZ2xlIGlzIHRoZSB2ZXJ0aWNhbCBhbmdsZSBvZiB0aGUgZnJ1c3R1bSwgYW5kIHRoZSBob3Jpem9udGFsIGFuZ2xlIGlzXG4gKiBkZXRlcm1pbmVkIHRvIHByb2R1Y2UgdGhlIGdpdmVuIGFzcGVjdCByYXRpby4gIFRoZSBhcmd1bWVudHMgbmVhciBhbmQgZmFyIGFyZVxuICogdGhlIGRpc3RhbmNlcyB0byB0aGUgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXJcbiAqIGFyZSBub3QgeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlXG4gKiB6LWF4aXMuICBUaGUgbWF0cml4IGdlbmVyYXRlZCBzZW5kcyB0aGUgdmlld2luZyBmcnVzdHVtIHRvIHRoZSB1bml0IGJveC5cbiAqIFdlIGFzc3VtZSBhIHVuaXQgYm94IGV4dGVuZGluZyBmcm9tIC0xIHRvIDEgaW4gdGhlIHggYW5kIHkgZGltZW5zaW9ucyBhbmRcbiAqIGZyb20gMCB0byAxIGluIHRoZSB6IGRpbWVuc2lvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmaWVsZE9mVmlld1lJblJhZGlhbnMgVGhlIGNhbWVyYSBhbmdsZSBmcm9tIHRvcCB0byBib3R0b20gKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHtudW1iZXJ9IGFzcGVjdCBUaGUgYXNwZWN0IHJhdGlvIHdpZHRoIC8gaGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IHpOZWFyIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICogICAgIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lLlxuICogQHBhcmFtIHtudW1iZXJ9IHpGYXIgVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gKiAgICAgb2YgdGhlIGZhciBjbGlwcGluZyBwbGFuZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHBlcnNwZWN0aXZlIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gcGVyc3BlY3RpdmUoZmllbGRPZlZpZXdZSW5SYWRpYW5zLCBhc3BlY3QsIHpOZWFyLCB6RmFyLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZmllbGRPZlZpZXdZSW5SYWRpYW5zKTtcbiAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKHpOZWFyIC0gekZhcik7XG4gIGRzdFswXSA9IGYgLyBhc3BlY3Q7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IGY7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSAoek5lYXIgKyB6RmFyKSAqIHJhbmdlSW52O1xuICBkc3RbMTFdID0gLTE7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IHpOZWFyICogekZhciAqIHJhbmdlSW52ICogMjtcbiAgZHN0WzE1XSA9IDA7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENvbXB1dGVzIGEgNC1ieS00IG9ydGhvZ29uYWwgdHJhbnNmb3JtYXRpb24gbWF0cml4IGdpdmVuIHRoZSBsZWZ0LCByaWdodCxcbiAqIGJvdHRvbSwgYW5kIHRvcCBkaW1lbnNpb25zIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIGFzIHdlbGwgYXMgdGhlXG4gKiBuZWFyIGFuZCBmYXIgY2xpcHBpbmcgcGxhbmUgZGlzdGFuY2VzLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBzaWRlIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IHNpZGUgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBvZiB0aGUgbmVhciBjbGlwcGluZyBwbGFuZSB2aWV3cG9ydC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVG9wIG9mIHRoZSBuZWFyIGNsaXBwaW5nIHBsYW5lIHZpZXdwb3J0LlxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgVGhlIGRlcHRoIChuZWdhdGl2ZSB6IGNvb3JkaW5hdGUpXG4gKiAgICAgb2YgdGhlIG5lYXIgY2xpcHBpbmcgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIFRoZSBkZXB0aCAobmVnYXRpdmUgeiBjb29yZGluYXRlKVxuICogICAgIG9mIHRoZSBmYXIgY2xpcHBpbmcgcGxhbmUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIE91dHB1dCBtYXRyaXguIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcGVyc3BlY3RpdmUgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBvcnRobyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIGRzdFswXSA9IDIgLyAocmlnaHQgLSBsZWZ0KTtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gMiAvICh0b3AgLSBib3R0b20pO1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAwO1xuICBkc3RbOV0gPSAwO1xuICBkc3RbMTBdID0gMiAvIChuZWFyIC0gZmFyKTtcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAocmlnaHQgKyBsZWZ0KSAvIChsZWZ0IC0gcmlnaHQpO1xuICBkc3RbMTNdID0gKHRvcCArIGJvdHRvbSkgLyAoYm90dG9tIC0gdG9wKTtcbiAgZHN0WzE0XSA9IChmYXIgKyBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENvbXB1dGVzIGEgNC1ieS00IHBlcnNwZWN0aXZlIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBnaXZlbiB0aGUgbGVmdCwgcmlnaHQsXG4gKiB0b3AsIGJvdHRvbSwgbmVhciBhbmQgZmFyIGNsaXBwaW5nIHBsYW5lcy4gVGhlIGFyZ3VtZW50cyBkZWZpbmUgYSBmcnVzdHVtXG4gKiBleHRlbmRpbmcgaW4gdGhlIG5lZ2F0aXZlIHogZGlyZWN0aW9uLiBUaGUgYXJndW1lbnRzIG5lYXIgYW5kIGZhciBhcmUgdGhlXG4gKiBkaXN0YW5jZXMgdG8gdGhlIG5lYXIgYW5kIGZhciBjbGlwcGluZyBwbGFuZXMuIE5vdGUgdGhhdCBuZWFyIGFuZCBmYXIgYXJlIG5vdFxuICogeiBjb29yZGluYXRlcywgYnV0IHJhdGhlciB0aGV5IGFyZSBkaXN0YW5jZXMgYWxvbmcgdGhlIG5lZ2F0aXZlIHotYXhpcy4gVGhlXG4gKiBtYXRyaXggZ2VuZXJhdGVkIHNlbmRzIHRoZSB2aWV3aW5nIGZydXN0dW0gdG8gdGhlIHVuaXQgYm94LiBXZSBhc3N1bWUgYSB1bml0XG4gKiBib3ggZXh0ZW5kaW5nIGZyb20gLTEgdG8gMSBpbiB0aGUgeCBhbmQgeSBkaW1lbnNpb25zIGFuZCBmcm9tIDAgdG8gMSBpbiB0aGUgelxuICogZGltZW5zaW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgbGVmdCBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHBsYW5lIG9mIHRoZSBib3guXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSByaWdodCBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgVGhlIG5lZ2F0aXZlIHogY29vcmRpbmF0ZSBvZiB0aGUgbmVhciBwbGFuZSBvZiB0aGUgYm94LlxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBUaGUgbmVnYXRpdmUgeiBjb29yZGluYXRlIG9mIHRoZSBmYXIgcGxhbmUgb2YgdGhlIGJveC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gT3V0cHV0IG1hdHJpeC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gZnJ1c3R1bShsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhciwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBkeCA9IHJpZ2h0IC0gbGVmdDtcbiAgdmFyIGR5ID0gdG9wIC0gYm90dG9tO1xuICB2YXIgZHogPSBuZWFyIC0gZmFyO1xuICBkc3RbMF0gPSAyICogbmVhciAvIGR4O1xuICBkc3RbMV0gPSAwO1xuICBkc3RbMl0gPSAwO1xuICBkc3RbM10gPSAwO1xuICBkc3RbNF0gPSAwO1xuICBkc3RbNV0gPSAyICogbmVhciAvIGR5O1xuICBkc3RbNl0gPSAwO1xuICBkc3RbN10gPSAwO1xuICBkc3RbOF0gPSAobGVmdCArIHJpZ2h0KSAvIGR4O1xuICBkc3RbOV0gPSAodG9wICsgYm90dG9tKSAvIGR5O1xuICBkc3RbMTBdID0gZmFyIC8gZHo7XG4gIGRzdFsxMV0gPSAtMTtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gbmVhciAqIGZhciAvIGR6O1xuICBkc3RbMTVdID0gMDtcbiAgcmV0dXJuIGRzdDtcbn1cblxudmFyIHhBeGlzO1xudmFyIHlBeGlzO1xudmFyIHpBeGlzO1xuLyoqXG4gKiBDb21wdXRlcyBhIDQtYnktNCBsb29rLWF0IHRyYW5zZm9ybWF0aW9uLlxuICpcbiAqIFRoaXMgaXMgYSBtYXRyaXggd2hpY2ggcG9zaXRpb25zIHRoZSBjYW1lcmEgaXRzZWxmLiBJZiB5b3Ugd2FudFxuICogYSB2aWV3IG1hdHJpeCAoYSBtYXRyaXggd2hpY2ggbW92ZXMgdGhpbmdzIGluIGZyb250IG9mIHRoZSBjYW1lcmEpXG4gKiB0YWtlIHRoZSBpbnZlcnNlIG9mIHRoaXMuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBleWUgVGhlIHBvc2l0aW9uIG9mIHRoZSBleWUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHRhcmdldCBUaGUgcG9zaXRpb24gbWVhbnQgdG8gYmUgdmlld2VkLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB1cCBBIHZlY3RvciBwb2ludGluZyB1cC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIGxvb2stYXQgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuZnVuY3Rpb24gbG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHhBeGlzID0geEF4aXMgfHwgdjMuY3JlYXRlKCk7XG4gIHlBeGlzID0geUF4aXMgfHwgdjMuY3JlYXRlKCk7XG4gIHpBeGlzID0gekF4aXMgfHwgdjMuY3JlYXRlKCk7XG4gIHYzLm5vcm1hbGl6ZSh2My5zdWJ0cmFjdChleWUsIHRhcmdldCwgekF4aXMpLCB6QXhpcyk7XG4gIHYzLm5vcm1hbGl6ZSh2My5jcm9zcyh1cCwgekF4aXMsIHhBeGlzKSwgeEF4aXMpO1xuICB2My5ub3JtYWxpemUodjMuY3Jvc3MoekF4aXMsIHhBeGlzLCB5QXhpcyksIHlBeGlzKTtcbiAgZHN0WzBdID0geEF4aXNbMF07XG4gIGRzdFsxXSA9IHhBeGlzWzFdO1xuICBkc3RbMl0gPSB4QXhpc1syXTtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0geUF4aXNbMF07XG4gIGRzdFs1XSA9IHlBeGlzWzFdO1xuICBkc3RbNl0gPSB5QXhpc1syXTtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gekF4aXNbMF07XG4gIGRzdFs5XSA9IHpBeGlzWzFdO1xuICBkc3RbMTBdID0gekF4aXNbMl07XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gZXllWzBdO1xuICBkc3RbMTNdID0gZXllWzFdO1xuICBkc3RbMTRdID0gZXllWzJdO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggdHJhbnNsYXRlcyBieSB0aGUgZ2l2ZW4gdmVjdG9yIHYuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3RvciBieVxuICogICAgIHdoaWNoIHRvIHRyYW5zbGF0ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHRyYW5zbGF0aW9uIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gdHJhbnNsYXRpb24odiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIGRzdFswXSA9IDE7XG4gIGRzdFsxXSA9IDA7XG4gIGRzdFsyXSA9IDA7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IDA7XG4gIGRzdFs1XSA9IDE7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSAxO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IHZbMF07XG4gIGRzdFsxM10gPSB2WzFdO1xuICBkc3RbMTRdID0gdlsyXTtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYnkgdGhlIGdpdmVuIHZlY3RvciB2LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3RvciBieVxuICogICAgIHdoaWNoIHRvIHRyYW5zbGF0ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHRyYW5zbGF0ZWQgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiB0cmFuc2xhdGUobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIHZhciBtMDAgPSBtWzBdO1xuICB2YXIgbTAxID0gbVsxXTtcbiAgdmFyIG0wMiA9IG1bMl07XG4gIHZhciBtMDMgPSBtWzNdO1xuICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xuICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xuICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xuICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xuICB2YXIgbTMwID0gbVszICogNCArIDBdO1xuICB2YXIgbTMxID0gbVszICogNCArIDFdO1xuICB2YXIgbTMyID0gbVszICogNCArIDJdO1xuICB2YXIgbTMzID0gbVszICogNCArIDNdO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbMF0gPSBtMDA7XG4gICAgZHN0WzFdID0gbTAxO1xuICAgIGRzdFsyXSA9IG0wMjtcbiAgICBkc3RbM10gPSBtMDM7XG4gICAgZHN0WzRdID0gbTEwO1xuICAgIGRzdFs1XSA9IG0xMTtcbiAgICBkc3RbNl0gPSBtMTI7XG4gICAgZHN0WzddID0gbTEzO1xuICAgIGRzdFs4XSA9IG0yMDtcbiAgICBkc3RbOV0gPSBtMjE7XG4gICAgZHN0WzEwXSA9IG0yMjtcbiAgICBkc3RbMTFdID0gbTIzO1xuICB9XG5cbiAgZHN0WzEyXSA9IG0wMCAqIHYwICsgbTEwICogdjEgKyBtMjAgKiB2MiArIG0zMDtcbiAgZHN0WzEzXSA9IG0wMSAqIHYwICsgbTExICogdjEgKyBtMjEgKiB2MiArIG0zMTtcbiAgZHN0WzE0XSA9IG0wMiAqIHYwICsgbTEyICogdjEgKyBtMjIgKiB2MiArIG0zMjtcbiAgZHN0WzE1XSA9IG0wMyAqIHYwICsgbTEzICogdjEgKyBtMjMgKiB2MiArIG0zMztcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHgtYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHJvdGF0aW9uWChhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgZHN0WzBdID0gMTtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gYztcbiAgZHN0WzZdID0gcztcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gMDtcbiAgZHN0WzldID0gLXM7XG4gIGRzdFsxMF0gPSBjO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB4LWF4aXMgYnkgdGhlIGdpdmVuXG4gKiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHJvdGF0ZVgobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgbTEwID0gbVs0XTtcbiAgdmFyIG0xMSA9IG1bNV07XG4gIHZhciBtMTIgPSBtWzZdO1xuICB2YXIgbTEzID0gbVs3XTtcbiAgdmFyIG0yMCA9IG1bOF07XG4gIHZhciBtMjEgPSBtWzldO1xuICB2YXIgbTIyID0gbVsxMF07XG4gIHZhciBtMjMgPSBtWzExXTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICBkc3RbNF0gPSBjICogbTEwICsgcyAqIG0yMDtcbiAgZHN0WzVdID0gYyAqIG0xMSArIHMgKiBtMjE7XG4gIGRzdFs2XSA9IGMgKiBtMTIgKyBzICogbTIyO1xuICBkc3RbN10gPSBjICogbTEzICsgcyAqIG0yMztcbiAgZHN0WzhdID0gYyAqIG0yMCAtIHMgKiBtMTA7XG4gIGRzdFs5XSA9IGMgKiBtMjEgLSBzICogbTExO1xuICBkc3RbMTBdID0gYyAqIG0yMiAtIHMgKiBtMTI7XG4gIGRzdFsxMV0gPSBjICogbTIzIC0gcyAqIG0xMztcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzBdID0gbVswXTtcbiAgICBkc3RbMV0gPSBtWzFdO1xuICAgIGRzdFsyXSA9IG1bMl07XG4gICAgZHN0WzNdID0gbVszXTtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCByb3RhdGVzIGFyb3VuZCB0aGUgeS1heGlzIGJ5IHRoZSBnaXZlbiBhbmdsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gVGhlIHJvdGF0aW9uIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gcm90YXRpb25ZKGFuZ2xlSW5SYWRpYW5zLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhhbmdsZUluUmFkaWFucyk7XG4gIHZhciBzID0gTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpO1xuICBkc3RbMF0gPSBjO1xuICBkc3RbMV0gPSAwO1xuICBkc3RbMl0gPSAtcztcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gMTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gcztcbiAgZHN0WzldID0gMDtcbiAgZHN0WzEwXSA9IGM7XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUm90YXRlcyB0aGUgZ2l2ZW4gNC1ieS00IG1hdHJpeCBhcm91bmQgdGhlIHktYXhpcyBieSB0aGUgZ2l2ZW5cbiAqIGFuZ2xlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGVkIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gcm90YXRlWShtLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XG4gIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XG4gIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XG4gIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XG4gIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XG4gIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XG4gIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XG4gIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgZHN0WzBdID0gYyAqIG0wMCAtIHMgKiBtMjA7XG4gIGRzdFsxXSA9IGMgKiBtMDEgLSBzICogbTIxO1xuICBkc3RbMl0gPSBjICogbTAyIC0gcyAqIG0yMjtcbiAgZHN0WzNdID0gYyAqIG0wMyAtIHMgKiBtMjM7XG4gIGRzdFs4XSA9IGMgKiBtMjAgKyBzICogbTAwO1xuICBkc3RbOV0gPSBjICogbTIxICsgcyAqIG0wMTtcbiAgZHN0WzEwXSA9IGMgKiBtMjIgKyBzICogbTAyO1xuICBkc3RbMTFdID0gYyAqIG0yMyArIHMgKiBtMDM7XG5cbiAgaWYgKG0gIT09IGRzdCkge1xuICAgIGRzdFs0XSA9IG1bNF07XG4gICAgZHN0WzVdID0gbVs1XTtcbiAgICBkc3RbNl0gPSBtWzZdO1xuICAgIGRzdFs3XSA9IG1bN107XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIHotYXhpcyBieSB0aGUgZ2l2ZW4gYW5nbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGlvbiBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHJvdGF0aW9uWihhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgZHN0WzBdID0gYztcbiAgZHN0WzFdID0gcztcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gLXM7XG4gIGRzdFs1XSA9IGM7XG4gIGRzdFs2XSA9IDA7XG4gIGRzdFs3XSA9IDA7XG4gIGRzdFs4XSA9IDA7XG4gIGRzdFs5XSA9IDA7XG4gIGRzdFsxMF0gPSAxO1xuICBkc3RbMTFdID0gMDtcbiAgZHN0WzEyXSA9IDA7XG4gIGRzdFsxM10gPSAwO1xuICBkc3RbMTRdID0gMDtcbiAgZHN0WzE1XSA9IDE7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFJvdGF0ZXMgdGhlIGdpdmVuIDQtYnktNCBtYXRyaXggYXJvdW5kIHRoZSB6LWF4aXMgYnkgdGhlIGdpdmVuXG4gKiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlSW5SYWRpYW5zIFRoZSBhbmdsZSBieSB3aGljaCB0byByb3RhdGUgKGluIHJhZGlhbnMpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbZHN0XSBtYXRyaXggdG8gaG9sZCByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBUaGUgcm90YXRlZCBtYXRyaXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHJvdGF0ZVoobSwgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgbTAwID0gbVswICogNCArIDBdO1xuICB2YXIgbTAxID0gbVswICogNCArIDFdO1xuICB2YXIgbTAyID0gbVswICogNCArIDJdO1xuICB2YXIgbTAzID0gbVswICogNCArIDNdO1xuICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xuICB2YXIgbTExID0gbVsxICogNCArIDFdO1xuICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xuICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIGRzdFswXSA9IGMgKiBtMDAgKyBzICogbTEwO1xuICBkc3RbMV0gPSBjICogbTAxICsgcyAqIG0xMTtcbiAgZHN0WzJdID0gYyAqIG0wMiArIHMgKiBtMTI7XG4gIGRzdFszXSA9IGMgKiBtMDMgKyBzICogbTEzO1xuICBkc3RbNF0gPSBjICogbTEwIC0gcyAqIG0wMDtcbiAgZHN0WzVdID0gYyAqIG0xMSAtIHMgKiBtMDE7XG4gIGRzdFs2XSA9IGMgKiBtMTIgLSBzICogbTAyO1xuICBkc3RbN10gPSBjICogbTEzIC0gcyAqIG0wMztcblxuICBpZiAobSAhPT0gZHN0KSB7XG4gICAgZHN0WzhdID0gbVs4XTtcbiAgICBkc3RbOV0gPSBtWzldO1xuICAgIGRzdFsxMF0gPSBtWzEwXTtcbiAgICBkc3RbMTFdID0gbVsxMV07XG4gICAgZHN0WzEyXSA9IG1bMTJdO1xuICAgIGRzdFsxM10gPSBtWzEzXTtcbiAgICBkc3RbMTRdID0gbVsxNF07XG4gICAgZHN0WzE1XSA9IG1bMTVdO1xuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIDQtYnktNCBtYXRyaXggd2hpY2ggcm90YXRlcyBhcm91bmQgdGhlIGdpdmVuIGF4aXMgYnkgdGhlIGdpdmVuXG4gKiBhbmdsZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYXhpcyBUaGUgYXhpc1xuICogICAgIGFib3V0IHdoaWNoIHRvIHJvdGF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZUluUmFkaWFucyBUaGUgYW5nbGUgYnkgd2hpY2ggdG8gcm90YXRlIChpbiByYWRpYW5zKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gW2RzdF0gbWF0cml4IHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gQSBtYXRyaXggd2hpY2ggcm90YXRlcyBhbmdsZSByYWRpYW5zXG4gKiAgICAgYXJvdW5kIHRoZSBheGlzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBheGlzUm90YXRpb24oYXhpcywgYW5nbGVJblJhZGlhbnMsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IE1hdFR5cGUoMTYpO1xuICB2YXIgeCA9IGF4aXNbMF07XG4gIHZhciB5ID0gYXhpc1sxXTtcbiAgdmFyIHogPSBheGlzWzJdO1xuICB2YXIgbiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB4IC89IG47XG4gIHkgLz0gbjtcbiAgeiAvPSBuO1xuICB2YXIgeHggPSB4ICogeDtcbiAgdmFyIHl5ID0geSAqIHk7XG4gIHZhciB6eiA9IHogKiB6O1xuICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gIHZhciBvbmVNaW51c0Nvc2luZSA9IDEgLSBjO1xuICBkc3RbMF0gPSB4eCArICgxIC0geHgpICogYztcbiAgZHN0WzFdID0geCAqIHkgKiBvbmVNaW51c0Nvc2luZSArIHogKiBzO1xuICBkc3RbMl0gPSB4ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geSAqIHM7XG4gIGRzdFszXSA9IDA7XG4gIGRzdFs0XSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgZHN0WzVdID0geXkgKyAoMSAtIHl5KSAqIGM7XG4gIGRzdFs2XSA9IHkgKiB6ICogb25lTWludXNDb3NpbmUgKyB4ICogcztcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICBkc3RbOV0gPSB5ICogeiAqIG9uZU1pbnVzQ29zaW5lIC0geCAqIHM7XG4gIGRzdFsxMF0gPSB6eiArICgxIC0genopICogYztcbiAgZHN0WzExXSA9IDA7XG4gIGRzdFsxMl0gPSAwO1xuICBkc3RbMTNdID0gMDtcbiAgZHN0WzE0XSA9IDA7XG4gIGRzdFsxNV0gPSAxO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSb3RhdGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGFyb3VuZCB0aGUgZ2l2ZW4gYXhpcyBieSB0aGVcbiAqIGdpdmVuIGFuZ2xlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtIFRoZSBtYXRyaXguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGF4aXMgVGhlIGF4aXNcbiAqICAgICBhYm91dCB3aGljaCB0byByb3RhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVJblJhZGlhbnMgVGhlIGFuZ2xlIGJ5IHdoaWNoIHRvIHJvdGF0ZSAoaW4gcmFkaWFucykuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSByb3RhdGVkIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gYXhpc1JvdGF0ZShtLCBheGlzLCBhbmdsZUluUmFkaWFucywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgTWF0VHlwZSgxNik7XG4gIHZhciB4ID0gYXhpc1swXTtcbiAgdmFyIHkgPSBheGlzWzFdO1xuICB2YXIgeiA9IGF4aXNbMl07XG4gIHZhciBuID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkgKyB6ICogeik7XG4gIHggLz0gbjtcbiAgeSAvPSBuO1xuICB6IC89IG47XG4gIHZhciB4eCA9IHggKiB4O1xuICB2YXIgeXkgPSB5ICogeTtcbiAgdmFyIHp6ID0geiAqIHo7XG4gIHZhciBjID0gTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpO1xuICB2YXIgcyA9IE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgdmFyIG9uZU1pbnVzQ29zaW5lID0gMSAtIGM7XG4gIHZhciByMDAgPSB4eCArICgxIC0geHgpICogYztcbiAgdmFyIHIwMSA9IHggKiB5ICogb25lTWludXNDb3NpbmUgKyB6ICogcztcbiAgdmFyIHIwMiA9IHggKiB6ICogb25lTWludXNDb3NpbmUgLSB5ICogcztcbiAgdmFyIHIxMCA9IHggKiB5ICogb25lTWludXNDb3NpbmUgLSB6ICogcztcbiAgdmFyIHIxMSA9IHl5ICsgKDEgLSB5eSkgKiBjO1xuICB2YXIgcjEyID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSArIHggKiBzO1xuICB2YXIgcjIwID0geCAqIHogKiBvbmVNaW51c0Nvc2luZSArIHkgKiBzO1xuICB2YXIgcjIxID0geSAqIHogKiBvbmVNaW51c0Nvc2luZSAtIHggKiBzO1xuICB2YXIgcjIyID0genogKyAoMSAtIHp6KSAqIGM7XG4gIHZhciBtMDAgPSBtWzBdO1xuICB2YXIgbTAxID0gbVsxXTtcbiAgdmFyIG0wMiA9IG1bMl07XG4gIHZhciBtMDMgPSBtWzNdO1xuICB2YXIgbTEwID0gbVs0XTtcbiAgdmFyIG0xMSA9IG1bNV07XG4gIHZhciBtMTIgPSBtWzZdO1xuICB2YXIgbTEzID0gbVs3XTtcbiAgdmFyIG0yMCA9IG1bOF07XG4gIHZhciBtMjEgPSBtWzldO1xuICB2YXIgbTIyID0gbVsxMF07XG4gIHZhciBtMjMgPSBtWzExXTtcbiAgZHN0WzBdID0gcjAwICogbTAwICsgcjAxICogbTEwICsgcjAyICogbTIwO1xuICBkc3RbMV0gPSByMDAgKiBtMDEgKyByMDEgKiBtMTEgKyByMDIgKiBtMjE7XG4gIGRzdFsyXSA9IHIwMCAqIG0wMiArIHIwMSAqIG0xMiArIHIwMiAqIG0yMjtcbiAgZHN0WzNdID0gcjAwICogbTAzICsgcjAxICogbTEzICsgcjAyICogbTIzO1xuICBkc3RbNF0gPSByMTAgKiBtMDAgKyByMTEgKiBtMTAgKyByMTIgKiBtMjA7XG4gIGRzdFs1XSA9IHIxMCAqIG0wMSArIHIxMSAqIG0xMSArIHIxMiAqIG0yMTtcbiAgZHN0WzZdID0gcjEwICogbTAyICsgcjExICogbTEyICsgcjEyICogbTIyO1xuICBkc3RbN10gPSByMTAgKiBtMDMgKyByMTEgKiBtMTMgKyByMTIgKiBtMjM7XG4gIGRzdFs4XSA9IHIyMCAqIG0wMCArIHIyMSAqIG0xMCArIHIyMiAqIG0yMDtcbiAgZHN0WzldID0gcjIwICogbTAxICsgcjIxICogbTExICsgcjIyICogbTIxO1xuICBkc3RbMTBdID0gcjIwICogbTAyICsgcjIxICogbTEyICsgcjIyICogbTIyO1xuICBkc3RbMTFdID0gcjIwICogbTAzICsgcjIxICogbTEzICsgcjIyICogbTIzO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgNC1ieS00IG1hdHJpeCB3aGljaCBzY2FsZXMgaW4gZWFjaCBkaW1lbnNpb24gYnkgYW4gYW1vdW50IGdpdmVuIGJ5XG4gKiB0aGUgY29ycmVzcG9uZGluZyBlbnRyeSBpbiB0aGUgZ2l2ZW4gdmVjdG9yOyBhc3N1bWVzIHRoZSB2ZWN0b3IgaGFzIHRocmVlXG4gKiBlbnRyaWVzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IEEgdmVjdG9yIG9mXG4gKiAgICAgdGhyZWUgZW50cmllcyBzcGVjaWZ5aW5nIHRoZSBmYWN0b3IgYnkgd2hpY2ggdG8gc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBzY2FsaW5nIG1hdHJpeC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gc2NhbGluZyh2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgZHN0WzBdID0gdlswXTtcbiAgZHN0WzFdID0gMDtcbiAgZHN0WzJdID0gMDtcbiAgZHN0WzNdID0gMDtcbiAgZHN0WzRdID0gMDtcbiAgZHN0WzVdID0gdlsxXTtcbiAgZHN0WzZdID0gMDtcbiAgZHN0WzddID0gMDtcbiAgZHN0WzhdID0gMDtcbiAgZHN0WzldID0gMDtcbiAgZHN0WzEwXSA9IHZbMl07XG4gIGRzdFsxMV0gPSAwO1xuICBkc3RbMTJdID0gMDtcbiAgZHN0WzEzXSA9IDA7XG4gIGRzdFsxNF0gPSAwO1xuICBkc3RbMTVdID0gMTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogU2NhbGVzIHRoZSBnaXZlbiA0LWJ5LTQgbWF0cml4IGluIGVhY2ggZGltZW5zaW9uIGJ5IGFuIGFtb3VudFxuICogZ2l2ZW4gYnkgdGhlIGNvcnJlc3BvbmRpbmcgZW50cnkgaW4gdGhlIGdpdmVuIHZlY3RvcjsgYXNzdW1lcyB0aGUgdmVjdG9yIGhhc1xuICogdGhyZWUgZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4IHRvIGJlIG1vZGlmaWVkLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IEEgdmVjdG9yIG9mIHRocmVlIGVudHJpZXMgc3BlY2lmeWluZyB0aGVcbiAqICAgICBmYWN0b3IgYnkgd2hpY2ggdG8gc2NhbGUgaW4gZWFjaCBkaW1lbnNpb24uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFtkc3RdIG1hdHJpeCB0byBob2xkIHJlc3VsdC4gSWYgbm90IHBhc3NlZCBhIG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL200Lk1hdDR9IFRoZSBzY2FsZWQgbWF0cml4LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiBzY2FsZShtLCB2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBNYXRUeXBlKDE2KTtcbiAgdmFyIHYwID0gdlswXTtcbiAgdmFyIHYxID0gdlsxXTtcbiAgdmFyIHYyID0gdlsyXTtcbiAgZHN0WzBdID0gdjAgKiBtWzAgKiA0ICsgMF07XG4gIGRzdFsxXSA9IHYwICogbVswICogNCArIDFdO1xuICBkc3RbMl0gPSB2MCAqIG1bMCAqIDQgKyAyXTtcbiAgZHN0WzNdID0gdjAgKiBtWzAgKiA0ICsgM107XG4gIGRzdFs0XSA9IHYxICogbVsxICogNCArIDBdO1xuICBkc3RbNV0gPSB2MSAqIG1bMSAqIDQgKyAxXTtcbiAgZHN0WzZdID0gdjEgKiBtWzEgKiA0ICsgMl07XG4gIGRzdFs3XSA9IHYxICogbVsxICogNCArIDNdO1xuICBkc3RbOF0gPSB2MiAqIG1bMiAqIDQgKyAwXTtcbiAgZHN0WzldID0gdjIgKiBtWzIgKiA0ICsgMV07XG4gIGRzdFsxMF0gPSB2MiAqIG1bMiAqIDQgKyAyXTtcbiAgZHN0WzExXSA9IHYyICogbVsyICogNCArIDNdO1xuXG4gIGlmIChtICE9PSBkc3QpIHtcbiAgICBkc3RbMTJdID0gbVsxMl07XG4gICAgZHN0WzEzXSA9IG1bMTNdO1xuICAgIGRzdFsxNF0gPSBtWzE0XTtcbiAgICBkc3RbMTVdID0gbVsxNV07XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggYW5kIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLFxuICogaW50ZXJwcmV0cyB0aGUgdmVjdG9yIGFzIGEgcG9pbnQsIHRyYW5zZm9ybXMgdGhhdCBwb2ludCBieSB0aGUgbWF0cml4LCBhbmRcbiAqIHJldHVybnMgdGhlIHJlc3VsdCBhcyBhIHZlY3RvciB3aXRoIDMgZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSBwb2ludC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gb3B0aW9uYWwgdmVjMyB0byBzdG9yZSByZXN1bHQuIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdHJhbnNmb3JtZWQgcG9pbnQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvbTRcbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KG0sIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIHZhciBkID0gdjAgKiBtWzAgKiA0ICsgM10gKyB2MSAqIG1bMSAqIDQgKyAzXSArIHYyICogbVsyICogNCArIDNdICsgbVszICogNCArIDNdO1xuICBkc3RbMF0gPSAodjAgKiBtWzAgKiA0ICsgMF0gKyB2MSAqIG1bMSAqIDQgKyAwXSArIHYyICogbVsyICogNCArIDBdICsgbVszICogNCArIDBdKSAvIGQ7XG4gIGRzdFsxXSA9ICh2MCAqIG1bMCAqIDQgKyAxXSArIHYxICogbVsxICogNCArIDFdICsgdjIgKiBtWzIgKiA0ICsgMV0gKyBtWzMgKiA0ICsgMV0pIC8gZDtcbiAgZHN0WzJdID0gKHYwICogbVswICogNCArIDJdICsgdjEgKiBtWzEgKiA0ICsgMl0gKyB2MiAqIG1bMiAqIDQgKyAyXSArIG1bMyAqIDQgKyAyXSkgLyBkO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBUYWtlcyBhIDQtYnktNCBtYXRyaXggYW5kIGEgdmVjdG9yIHdpdGggMyBlbnRyaWVzLCBpbnRlcnByZXRzIHRoZSB2ZWN0b3IgYXMgYVxuICogZGlyZWN0aW9uLCB0cmFuc2Zvcm1zIHRoYXQgZGlyZWN0aW9uIGJ5IHRoZSBtYXRyaXgsIGFuZCByZXR1cm5zIHRoZSByZXN1bHQ7XG4gKiBhc3N1bWVzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiAzLWRpbWVuc2lvbmFsIHNwYWNlIHJlcHJlc2VudGVkIGJ5IHRoZSBtYXRyaXhcbiAqIGlzIHBhcmFsbGVsLXByZXNlcnZpbmcsIGkuZS4gYW55IGNvbWJpbmF0aW9uIG9mIHJvdGF0aW9uLCBzY2FsaW5nIGFuZFxuICogdHJhbnNsYXRpb24sIGJ1dCBub3QgYSBwZXJzcGVjdGl2ZSBkaXN0b3J0aW9uLiBSZXR1cm5zIGEgdmVjdG9yIHdpdGggM1xuICogZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSBkaXJlY3Rpb24uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIG9wdGlvbmFsIFZlYzMgdG8gc3RvcmUgcmVzdWx0LiBJZiBub3QgcGFzc2VkIGEgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gVGhlIHRyYW5zZm9ybWVkIGRpcmVjdGlvbi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9tNFxuICovXG5cblxuZnVuY3Rpb24gdHJhbnNmb3JtRGlyZWN0aW9uKG0sIHYsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgdjMuY3JlYXRlKCk7XG4gIHZhciB2MCA9IHZbMF07XG4gIHZhciB2MSA9IHZbMV07XG4gIHZhciB2MiA9IHZbMl07XG4gIGRzdFswXSA9IHYwICogbVswICogNCArIDBdICsgdjEgKiBtWzEgKiA0ICsgMF0gKyB2MiAqIG1bMiAqIDQgKyAwXTtcbiAgZHN0WzFdID0gdjAgKiBtWzAgKiA0ICsgMV0gKyB2MSAqIG1bMSAqIDQgKyAxXSArIHYyICogbVsyICogNCArIDFdO1xuICBkc3RbMl0gPSB2MCAqIG1bMCAqIDQgKyAyXSArIHYxICogbVsxICogNCArIDJdICsgdjIgKiBtWzIgKiA0ICsgMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFRha2VzIGEgNC1ieS00IG1hdHJpeCBtIGFuZCBhIHZlY3RvciB2IHdpdGggMyBlbnRyaWVzLCBpbnRlcnByZXRzIHRoZSB2ZWN0b3JcbiAqIGFzIGEgbm9ybWFsIHRvIGEgc3VyZmFjZSwgYW5kIGNvbXB1dGVzIGEgdmVjdG9yIHdoaWNoIGlzIG5vcm1hbCB1cG9uXG4gKiB0cmFuc2Zvcm1pbmcgdGhhdCBzdXJmYWNlIGJ5IHRoZSBtYXRyaXguIFRoZSBlZmZlY3Qgb2YgdGhpcyBmdW5jdGlvbiBpcyB0aGVcbiAqIHNhbWUgYXMgdHJhbnNmb3JtaW5nIHYgKGFzIGEgZGlyZWN0aW9uKSBieSB0aGUgaW52ZXJzZS10cmFuc3Bvc2Ugb2YgbS4gIFRoaXNcbiAqIGZ1bmN0aW9uIGFzc3VtZXMgdGhlIHRyYW5zZm9ybWF0aW9uIG9mIDMtZGltZW5zaW9uYWwgc3BhY2UgcmVwcmVzZW50ZWQgYnkgdGhlXG4gKiBtYXRyaXggaXMgcGFyYWxsZWwtcHJlc2VydmluZywgaS5lLiBhbnkgY29tYmluYXRpb24gb2Ygcm90YXRpb24sIHNjYWxpbmcgYW5kXG4gKiB0cmFuc2xhdGlvbiwgYnV0IG5vdCBhIHBlcnNwZWN0aXZlIGRpc3RvcnRpb24uICBSZXR1cm5zIGEgdmVjdG9yIHdpdGggM1xuICogZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbSBUaGUgbWF0cml4LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSBub3JtYWwuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIFRoZSBkaXJlY3Rpb24uIElmIG5vdCBwYXNzZWQgYSBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdHJhbnNmb3JtZWQgbm9ybWFsLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL200XG4gKi9cblxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ob3JtYWwobSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCB2My5jcmVhdGUoKTtcbiAgdmFyIG1pID0gaW52ZXJzZShtKTtcbiAgdmFyIHYwID0gdlswXTtcbiAgdmFyIHYxID0gdlsxXTtcbiAgdmFyIHYyID0gdlsyXTtcbiAgZHN0WzBdID0gdjAgKiBtaVswICogNCArIDBdICsgdjEgKiBtaVswICogNCArIDFdICsgdjIgKiBtaVswICogNCArIDJdO1xuICBkc3RbMV0gPSB2MCAqIG1pWzEgKiA0ICsgMF0gKyB2MSAqIG1pWzEgKiA0ICsgMV0gKyB2MiAqIG1pWzEgKiA0ICsgMl07XG4gIGRzdFsyXSA9IHYwICogbWlbMiAqIDQgKyAwXSArIHYxICogbWlbMiAqIDQgKyAxXSArIHYyICogbWlbMiAqIDQgKyAyXTtcbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcHJpbWl0aXZlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3ByaW1pdGl2ZXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZTNERlZlcnRpY2VzID0gY3JlYXRlM0RGVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5O1xuZXhwb3J0cy5jcmVhdGVDdWJlVmVydGljZXMgPSBjcmVhdGVDdWJlVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZVBsYW5lVmVydGljZXMgPSBjcmVhdGVQbGFuZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVTcGhlcmVWZXJ0aWNlcyA9IGNyZWF0ZVNwaGVyZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXMgPSBjcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZVhZUXVhZFZlcnRpY2VzID0gY3JlYXRlWFlRdWFkVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZUNyZXNjZW50VmVydGljZXMgPSBjcmVhdGVDcmVzY2VudFZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVDeWxpbmRlclZlcnRpY2VzID0gY3JlYXRlQ3lsaW5kZXJWZXJ0aWNlcztcbmV4cG9ydHMuY3JlYXRlVG9ydXNWZXJ0aWNlcyA9IGNyZWF0ZVRvcnVzVmVydGljZXM7XG5leHBvcnRzLmNyZWF0ZURpc2NWZXJ0aWNlcyA9IGNyZWF0ZURpc2NWZXJ0aWNlcztcbmV4cG9ydHMuZGVpbmRleFZlcnRpY2VzID0gZGVpbmRleFZlcnRpY2VzO1xuZXhwb3J0cy5mbGF0dGVuTm9ybWFscyA9IGZsYXR0ZW5Ob3JtYWxzO1xuZXhwb3J0cy5tYWtlUmFuZG9tVmVydGV4Q29sb3JzID0gbWFrZVJhbmRvbVZlcnRleENvbG9ycztcbmV4cG9ydHMucmVvcmllbnREaXJlY3Rpb25zID0gcmVvcmllbnREaXJlY3Rpb25zO1xuZXhwb3J0cy5yZW9yaWVudE5vcm1hbHMgPSByZW9yaWVudE5vcm1hbHM7XG5leHBvcnRzLnJlb3JpZW50UG9zaXRpb25zID0gcmVvcmllbnRQb3NpdGlvbnM7XG5leHBvcnRzLnJlb3JpZW50VmVydGljZXMgPSByZW9yaWVudFZlcnRpY2VzO1xuZXhwb3J0cy5jb25jYXRWZXJ0aWNlcyA9IGNvbmNhdFZlcnRpY2VzO1xuZXhwb3J0cy5kdXBsaWNhdGVWZXJ0aWNlcyA9IGR1cGxpY2F0ZVZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVEaXNjQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlRGlzY0J1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZVRvcnVzQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlVG9ydXNCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVDeWxpbmRlckJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZUN5bGluZGVyQnVmZmVySW5mbyA9IGV4cG9ydHMuY3JlYXRlQ3Jlc2NlbnRCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVDcmVzY2VudEJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZUNyZXNlbnRWZXJ0aWNlcyA9IGV4cG9ydHMuY3JlYXRlQ3Jlc2VudEJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZUNyZXNlbnRCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVYWVF1YWRCdWZmZXJzID0gZXhwb3J0cy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZVNwaGVyZUJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZVNwaGVyZUJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZVBsYW5lQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlUGxhbmVCdWZmZXJJbmZvID0gZXhwb3J0cy5jcmVhdGVDdWJlQnVmZmVycyA9IGV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlckluZm8gPSBleHBvcnRzLmNyZWF0ZTNERkJ1ZmZlcnMgPSBleHBvcnRzLmNyZWF0ZTNERkJ1ZmZlckluZm8gPSB2b2lkIDA7XG5cbnZhciBhdHRyaWJ1dGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hdHRyaWJ1dGVzLmpzICovIFwiLi9zcmMvYXR0cmlidXRlcy5qc1wiKSk7XG5cbnZhciBoZWxwZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlci5qcyAqLyBcIi4vc3JjL2hlbHBlci5qc1wiKSk7XG5cbnZhciB0eXBlZEFycmF5cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdHlwZWRhcnJheXMuanMgKi8gXCIuL3NyYy90eXBlZGFycmF5cy5qc1wiKSk7XG5cbnZhciBtNCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbTQuanMgKi8gXCIuL3NyYy9tNC5qc1wiKSk7XG5cbnZhciB2MyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdjMuanMgKi8gXCIuL3NyYy92My5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBWYXJpb3VzIGZ1bmN0aW9ucyB0byBtYWtlIHNpbXBsZSBwcmltaXRpdmVzXG4gKlxuICogbm90ZTogTW9zdCBwcmltaXRpdmUgZnVuY3Rpb25zIGNvbWUgaW4gMyBzdHlsZXNcbiAqXG4gKiAqICBgY3JlYXRlU29tZVNoYXBlQnVmZmVySW5mb2BcbiAqXG4gKiAgICBUaGVzZSBmdW5jdGlvbnMgYXJlIGFsbW9zdCBhbHdheXMgdGhlIGZ1bmN0aW9ucyB5b3Ugd2FudCB0byBjYWxsLiBUaGV5XG4gKiAgICBjcmVhdGUgdmVydGljZXMgdGhlbiBtYWtlIFdlYkdMQnVmZmVycyBhbmQgY3JlYXRlIHtAbGluayBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvfXNcbiAqICAgIHJldHVybmluZyBhIHtAbGluayBtb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSB5b3UgY2FuIHBhc3MgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfVxuICogICAgYW5kIHtAbGluayBtb2R1bGU6dHdnbC5kcmF3QnVmZmVySW5mb30gZXRjLi4uXG4gKlxuICogKiAgYGNyZWF0ZVNvbWVTaGFwZUJ1ZmZlcnNgXG4gKlxuICogICAgVGhlc2UgY3JlYXRlIFdlYkdMQnVmZmVycyBhbmQgcHV0IHlvdXIgZGF0YSBpbiB0aGVtIGJ1dCBub3RoaW5nIGVsc2UuXG4gKiAgICBJdCdzIGEgc2hvcnRjdXQgdG8gZG9pbmcgaXQgeW91cnNlbGYgaWYgeW91IGRvbid0IHdhbnQgdG8gdXNlXG4gKiAgICB0aGUgaGlnaGVyIGxldmVsIGZ1bmN0aW9ucy5cbiAqXG4gKiAqICBgY3JlYXRlU29tZVNoYXBlVmVydGljZXNgXG4gKlxuICogICAgVGhlc2UganVzdCBjcmVhdGUgdmVydGljZXMsIG5vIGJ1ZmZlcnMuIFRoaXMgYWxsb3dzIHlvdSB0byBtYW5pcHVsYXRlIHRoZSB2ZXJ0aWNlc1xuICogICAgb3IgYWRkIG1vcmUgZGF0YSBiZWZvcmUgZ2VuZXJhdGluZyBhIHtAbGluayBtb2R1bGU6dHdnbC5CdWZmZXJJbmZvfS4gT25jZSB5b3UncmUgZmluaXNoZWRcbiAqICAgIG1hbmlwdWxhdGluZyB0aGUgdmVydGljZXMgY2FsbCB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXN9LlxuICpcbiAqICAgIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGNvbnN0IGFycmF5cyA9IHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVQbGFuZUFycmF5cygxKTtcbiAqICAgICAgICB0d2dsLnByaW1pdGl2ZXMucmVvcmllbnRWZXJ0aWNlcyhhcnJheXMsIG00LnJvdGF0aW9uWChNYXRoLlBJICogMC41KSk7XG4gKiAgICAgICAgY29uc3QgYnVmZmVySW5mbyA9IHR3Z2wuY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gKlxuICogQG1vZHVsZSB0d2dsL3ByaW1pdGl2ZXNcbiAqL1xudmFyIGdldEFycmF5ID0gYXR0cmlidXRlcy5nZXRBcnJheV87IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxudmFyIGdldE51bUNvbXBvbmVudHMgPSBhdHRyaWJ1dGVzLmdldE51bUNvbXBvbmVudHNfOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8qKlxuICogQHR5cGVkZWYgeyhJbnQ4QXJyYXl8VWludDhBcnJheXxJbnQxNkFycmF5fFVpbnQxNkFycmF5fEludDMyQXJyYXl8VWludDMyQXJyYXl8RmxvYXQzMkFycmF5KX0gVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogQWRkIGBwdXNoYCB0byBhIHR5cGVkIGFycmF5LiBJdCBqdXN0IGtlZXBzIGEgJ2N1cnNvcidcbiAqIGFuZCBhbGxvd3MgdXNlIHRvIGBwdXNoYCB2YWx1ZXMgaW50byB0aGUgYXJyYXkgc28gd2VcbiAqIGRvbid0IGhhdmUgdG8gbWFudWFsbHkgY29tcHV0ZSBvZmZzZXRzXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXl9IHR5cGVkQXJyYXkgVHlwZWRBcnJheSB0byBhdWdtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gbnVtQ29tcG9uZW50cyBudW1iZXIgb2YgY29tcG9uZW50cy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gYXVnbWVudFR5cGVkQXJyYXkodHlwZWRBcnJheSwgbnVtQ29tcG9uZW50cykge1xuICB2YXIgY3Vyc29yID0gMDtcblxuICB0eXBlZEFycmF5LnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraWkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50c1tpaV07XG5cbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5IHx8IHR5cGVkQXJyYXlzLmlzQXJyYXlCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIGZvciAodmFyIGpqID0gMDsgamogPCB2YWx1ZS5sZW5ndGg7ICsramopIHtcbiAgICAgICAgICB0eXBlZEFycmF5W2N1cnNvcisrXSA9IHZhbHVlW2pqXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZWRBcnJheVtjdXJzb3IrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdHlwZWRBcnJheS5yZXNldCA9IGZ1bmN0aW9uIChvcHRfaW5kZXgpIHtcbiAgICBjdXJzb3IgPSBvcHRfaW5kZXggfHwgMDtcbiAgfTtcblxuICB0eXBlZEFycmF5Lm51bUNvbXBvbmVudHMgPSBudW1Db21wb25lbnRzO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodHlwZWRBcnJheSwgJ251bUVsZW1lbnRzJywge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoIC8gdGhpcy5udW1Db21wb25lbnRzIHwgMDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdHlwZWRBcnJheTtcbn1cbi8qKlxuICogY3JlYXRlcyBhIHR5cGVkIGFycmF5IHdpdGggYSBgcHVzaGAgZnVuY3Rpb24gYXR0YWNoZWRcbiAqIHNvIHRoYXQgeW91IGNhbiBlYXNpbHkgKnB1c2gqIHZhbHVlcy5cbiAqXG4gKiBgcHVzaGAgY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzLiBJZiBhbiBhcmd1bWVudCBpcyBhbiBhcnJheSBlYWNoIGVsZW1lbnRcbiAqIG9mIHRoZSBhcnJheSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB0eXBlZCBhcnJheS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBhcnJheSA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgMik7ICAvLyBjcmVhdGVzIGEgRmxvYXQzMkFycmF5IHdpdGggNiB2YWx1ZXNcbiAqICAgICBhcnJheS5wdXNoKDEsIDIsIDMpO1xuICogICAgIGFycmF5LnB1c2goWzQsIDUsIDZdKTtcbiAqICAgICAvLyBhcnJheSBub3cgY29udGFpbnMgWzEsIDIsIDMsIDQsIDUsIDZdXG4gKlxuICogQWxzbyBoYXMgYG51bUNvbXBvbmVudHNgIGFuZCBgbnVtRWxlbWVudHNgIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bUNvbXBvbmVudHMgbnVtYmVyIG9mIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1FbGVtZW50cyBudW1iZXIgb2YgZWxlbWVudHMuIFRoZSB0b3RhbCBzaXplIG9mIHRoZSBhcnJheSB3aWxsIGJlIGBudW1Db21wb25lbnRzICogbnVtRWxlbWVudHNgLlxuICogQHBhcmFtIHtjb25zdHJ1Y3Rvcn0gb3B0X3R5cGUgQSBjb25zdHJ1Y3RvciBmb3IgdGhlIHR5cGUuIERlZmF1bHQgPSBgRmxvYXQzMkFycmF5YC5cbiAqIEByZXR1cm4ge0FycmF5QnVmZmVyVmlld30gQSB0eXBlZCBhcnJheS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KG51bUNvbXBvbmVudHMsIG51bUVsZW1lbnRzLCBvcHRfdHlwZSkge1xuICB2YXIgVHlwZSA9IG9wdF90eXBlIHx8IEZsb2F0MzJBcnJheTtcbiAgcmV0dXJuIGF1Z21lbnRUeXBlZEFycmF5KG5ldyBUeXBlKG51bUNvbXBvbmVudHMgKiBudW1FbGVtZW50cyksIG51bUNvbXBvbmVudHMpO1xufVxuXG5mdW5jdGlvbiBhbGxCdXRJbmRpY2VzKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgIT09IFwiaW5kaWNlc1wiO1xufVxuLyoqXG4gKiBHaXZlbiBpbmRleGVkIHZlcnRpY2VzIGNyZWF0ZXMgYSBuZXcgc2V0IG9mIHZlcnRpY2VzIHVuLWluZGV4ZWQgYnkgZXhwYW5kaW5nIHRoZSBpbmRleGVkIHZlcnRpY2VzLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IHZlcnRpY2VzIFRoZSBpbmRleGVkIHZlcnRpY2VzIHRvIGRlaW5kZXhcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGRlaW5kZXhlZCB2ZXJ0aWNlc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlaW5kZXhWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2YXIgaW5kaWNlcyA9IHZlcnRpY2VzLmluZGljZXM7XG4gIHZhciBuZXdWZXJ0aWNlcyA9IHt9O1xuICB2YXIgbnVtRWxlbWVudHMgPSBpbmRpY2VzLmxlbmd0aDtcblxuICBmdW5jdGlvbiBleHBhbmRUb1VuaW5kZXhlZChjaGFubmVsKSB7XG4gICAgdmFyIHNyY0J1ZmZlciA9IHZlcnRpY2VzW2NoYW5uZWxdO1xuICAgIHZhciBudW1Db21wb25lbnRzID0gc3JjQnVmZmVyLm51bUNvbXBvbmVudHM7XG4gICAgdmFyIGRzdEJ1ZmZlciA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkobnVtQ29tcG9uZW50cywgbnVtRWxlbWVudHMsIHNyY0J1ZmZlci5jb25zdHJ1Y3Rvcik7XG5cbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtRWxlbWVudHM7ICsraWkpIHtcbiAgICAgIHZhciBuZHggPSBpbmRpY2VzW2lpXTtcbiAgICAgIHZhciBvZmZzZXQgPSBuZHggKiBudW1Db21wb25lbnRzO1xuXG4gICAgICBmb3IgKHZhciBqaiA9IDA7IGpqIDwgbnVtQ29tcG9uZW50czsgKytqaikge1xuICAgICAgICBkc3RCdWZmZXIucHVzaChzcmNCdWZmZXJbb2Zmc2V0ICsgampdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdWZXJ0aWNlc1tjaGFubmVsXSA9IGRzdEJ1ZmZlcjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKHZlcnRpY2VzKS5maWx0ZXIoYWxsQnV0SW5kaWNlcykuZm9yRWFjaChleHBhbmRUb1VuaW5kZXhlZCk7XG4gIHJldHVybiBuZXdWZXJ0aWNlcztcbn1cbi8qKlxuICogZmxhdHRlbnMgdGhlIG5vcm1hbHMgb2YgZGVpbmRleGVkIHZlcnRpY2VzIGluIHBsYWNlLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IHZlcnRpY2VzIFRoZSBkZWluZGV4ZWQgdmVydGljZXMgd2hvJ3Mgbm9ybWFscyB0byBmbGF0dGVuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBmbGF0dGVuZWQgdmVydGljZXMgKHNhbWUgYXMgd2FzIHBhc3NlZCBpbilcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBmbGF0dGVuTm9ybWFscyh2ZXJ0aWNlcykge1xuICBpZiAodmVydGljZXMuaW5kaWNlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCBmbGF0dGVuIG5vcm1hbHMgb2YgaW5kZXhlZCB2ZXJ0aWNlcy4gZGVpbmRleCB0aGVtIGZpcnN0Jyk7XG4gIH1cblxuICB2YXIgbm9ybWFscyA9IHZlcnRpY2VzLm5vcm1hbDtcbiAgdmFyIG51bU5vcm1hbHMgPSBub3JtYWxzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtTm9ybWFsczsgaWkgKz0gOSkge1xuICAgIC8vIHB1bGwgb3V0IHRoZSAzIG5vcm1hbHMgZm9yIHRoaXMgdHJpYW5nbGVcbiAgICB2YXIgbmF4ID0gbm9ybWFsc1tpaSArIDBdO1xuICAgIHZhciBuYXkgPSBub3JtYWxzW2lpICsgMV07XG4gICAgdmFyIG5heiA9IG5vcm1hbHNbaWkgKyAyXTtcbiAgICB2YXIgbmJ4ID0gbm9ybWFsc1tpaSArIDNdO1xuICAgIHZhciBuYnkgPSBub3JtYWxzW2lpICsgNF07XG4gICAgdmFyIG5ieiA9IG5vcm1hbHNbaWkgKyA1XTtcbiAgICB2YXIgbmN4ID0gbm9ybWFsc1tpaSArIDZdO1xuICAgIHZhciBuY3kgPSBub3JtYWxzW2lpICsgN107XG4gICAgdmFyIG5jeiA9IG5vcm1hbHNbaWkgKyA4XTsgLy8gYWRkIHRoZW1cblxuICAgIHZhciBueCA9IG5heCArIG5ieCArIG5jeDtcbiAgICB2YXIgbnkgPSBuYXkgKyBuYnkgKyBuY3k7XG4gICAgdmFyIG56ID0gbmF6ICsgbmJ6ICsgbmN6OyAvLyBub3JtYWxpemUgdGhlbVxuXG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydChueCAqIG54ICsgbnkgKiBueSArIG56ICogbnopO1xuICAgIG54IC89IGxlbmd0aDtcbiAgICBueSAvPSBsZW5ndGg7XG4gICAgbnogLz0gbGVuZ3RoOyAvLyBjb3B5IHRoZW0gYmFjayBpblxuXG4gICAgbm9ybWFsc1tpaSArIDBdID0gbng7XG4gICAgbm9ybWFsc1tpaSArIDFdID0gbnk7XG4gICAgbm9ybWFsc1tpaSArIDJdID0gbno7XG4gICAgbm9ybWFsc1tpaSArIDNdID0gbng7XG4gICAgbm9ybWFsc1tpaSArIDRdID0gbnk7XG4gICAgbm9ybWFsc1tpaSArIDVdID0gbno7XG4gICAgbm9ybWFsc1tpaSArIDZdID0gbng7XG4gICAgbm9ybWFsc1tpaSArIDddID0gbnk7XG4gICAgbm9ybWFsc1tpaSArIDhdID0gbno7XG4gIH1cblxuICByZXR1cm4gdmVydGljZXM7XG59XG5cbmZ1bmN0aW9uIGFwcGx5RnVuY1RvVjNBcnJheShhcnJheSwgbWF0cml4LCBmbikge1xuICB2YXIgbGVuID0gYXJyYXkubGVuZ3RoO1xuICB2YXIgdG1wID0gbmV3IEZsb2F0MzJBcnJheSgzKTtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbGVuOyBpaSArPSAzKSB7XG4gICAgZm4obWF0cml4LCBbYXJyYXlbaWldLCBhcnJheVtpaSArIDFdLCBhcnJheVtpaSArIDJdXSwgdG1wKTtcbiAgICBhcnJheVtpaV0gPSB0bXBbMF07XG4gICAgYXJyYXlbaWkgKyAxXSA9IHRtcFsxXTtcbiAgICBhcnJheVtpaSArIDJdID0gdG1wWzJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU5vcm1hbChtaSwgdiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCB2My5jcmVhdGUoKTtcbiAgdmFyIHYwID0gdlswXTtcbiAgdmFyIHYxID0gdlsxXTtcbiAgdmFyIHYyID0gdlsyXTtcbiAgZHN0WzBdID0gdjAgKiBtaVswICogNCArIDBdICsgdjEgKiBtaVswICogNCArIDFdICsgdjIgKiBtaVswICogNCArIDJdO1xuICBkc3RbMV0gPSB2MCAqIG1pWzEgKiA0ICsgMF0gKyB2MSAqIG1pWzEgKiA0ICsgMV0gKyB2MiAqIG1pWzEgKiA0ICsgMl07XG4gIGRzdFsyXSA9IHYwICogbWlbMiAqIDQgKyAwXSArIHYxICogbWlbMiAqIDQgKyAxXSArIHYyICogbWlbMiAqIDQgKyAyXTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogUmVvcmllbnRzIGRpcmVjdGlvbnMgYnkgdGhlIGdpdmVuIG1hdHJpeC4uXG4gKiBAcGFyYW0geyhudW1iZXJbXXxUeXBlZEFycmF5KX0gYXJyYXkgVGhlIGFycmF5LiBBc3N1bWVzIHZhbHVlIGZsb2F0cyBwZXIgZWxlbWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvbTQuTWF0NH0gbWF0cml4IEEgbWF0cml4IHRvIG11bHRpcGx5IGJ5LlxuICogQHJldHVybiB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSB0aGUgc2FtZSBhcnJheSB0aGF0IHdhcyBwYXNzZWQgaW5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiByZW9yaWVudERpcmVjdGlvbnMoYXJyYXksIG1hdHJpeCkge1xuICBhcHBseUZ1bmNUb1YzQXJyYXkoYXJyYXksIG1hdHJpeCwgbTQudHJhbnNmb3JtRGlyZWN0aW9uKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuLyoqXG4gKiBSZW9yaWVudHMgbm9ybWFscyBieSB0aGUgaW52ZXJzZS10cmFuc3Bvc2Ugb2YgdGhlIGdpdmVuXG4gKiBtYXRyaXguLlxuICogQHBhcmFtIHsobnVtYmVyW118VHlwZWRBcnJheSl9IGFycmF5IFRoZSBhcnJheS4gQXNzdW1lcyB2YWx1ZSBmbG9hdHMgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IG1hdHJpeCBBIG1hdHJpeCB0byBtdWx0aXBseSBieS5cbiAqIEByZXR1cm4geyhudW1iZXJbXXxUeXBlZEFycmF5KX0gdGhlIHNhbWUgYXJyYXkgdGhhdCB3YXMgcGFzc2VkIGluXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gcmVvcmllbnROb3JtYWxzKGFycmF5LCBtYXRyaXgpIHtcbiAgYXBwbHlGdW5jVG9WM0FycmF5KGFycmF5LCBtNC5pbnZlcnNlKG1hdHJpeCksIHRyYW5zZm9ybU5vcm1hbCk7XG4gIHJldHVybiBhcnJheTtcbn1cbi8qKlxuICogUmVvcmllbnRzIHBvc2l0aW9ucyBieSB0aGUgZ2l2ZW4gbWF0cml4LiBJbiBvdGhlciB3b3JkcywgaXRcbiAqIG11bHRpcGxpZXMgZWFjaCB2ZXJ0ZXggYnkgdGhlIGdpdmVuIG1hdHJpeC5cbiAqIEBwYXJhbSB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSBhcnJheSBUaGUgYXJyYXkuIEFzc3VtZXMgdmFsdWUgZmxvYXRzIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtYXRyaXggQSBtYXRyaXggdG8gbXVsdGlwbHkgYnkuXG4gKiBAcmV0dXJuIHsobnVtYmVyW118VHlwZWRBcnJheSl9IHRoZSBzYW1lIGFycmF5IHRoYXQgd2FzIHBhc3NlZCBpblxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHJlb3JpZW50UG9zaXRpb25zKGFycmF5LCBtYXRyaXgpIHtcbiAgYXBwbHlGdW5jVG9WM0FycmF5KGFycmF5LCBtYXRyaXgsIG00LnRyYW5zZm9ybVBvaW50KTtcbiAgcmV0dXJuIGFycmF5O1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7KG51bWJlcltdfFR5cGVkQXJyYXkpfSBOYXRpdmVBcnJheU9yVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogUmVvcmllbnRzIGFycmF5cyBieSB0aGUgZ2l2ZW4gbWF0cml4LiBBc3N1bWVzIGFycmF5cyBoYXZlXG4gKiBuYW1lcyB0aGF0IGNvbnRhaW5zICdwb3MnIGNvdWxkIGJlIHJlb3JpZW50ZWQgYXMgcG9zaXRpb25zLFxuICogJ2Jpbm9ybScgb3IgJ3RhbicgYXMgZGlyZWN0aW9ucywgYW5kICdub3JtJyBhcyBub3JtYWxzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIE5hdGl2ZUFycmF5T3JUeXBlZEFycmF5Pn0gYXJyYXlzIFRoZSB2ZXJ0aWNlcyB0byByZW9yaWVudFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBtYXRyaXggbWF0cml4IHRvIHJlb3JpZW50IGJ5LlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIE5hdGl2ZUFycmF5T3JUeXBlZEFycmF5Pn0gc2FtZSBhcnJheXMgdGhhdCB3ZXJlIHBhc3NlZCBpbi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiByZW9yaWVudFZlcnRpY2VzKGFycmF5cywgbWF0cml4KSB7XG4gIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBhcnJheSA9IGFycmF5c1tuYW1lXTtcblxuICAgIGlmIChuYW1lLmluZGV4T2YoXCJwb3NcIikgPj0gMCkge1xuICAgICAgcmVvcmllbnRQb3NpdGlvbnMoYXJyYXksIG1hdHJpeCk7XG4gICAgfSBlbHNlIGlmIChuYW1lLmluZGV4T2YoXCJ0YW5cIikgPj0gMCB8fCBuYW1lLmluZGV4T2YoXCJiaW5vcm1cIikgPj0gMCkge1xuICAgICAgcmVvcmllbnREaXJlY3Rpb25zKGFycmF5LCBtYXRyaXgpO1xuICAgIH0gZWxzZSBpZiAobmFtZS5pbmRleE9mKFwibm9ybVwiKSA+PSAwKSB7XG4gICAgICByZW9yaWVudE5vcm1hbHMoYXJyYXksIG1hdHJpeCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFycmF5cztcbn1cbi8qKlxuICogQ3JlYXRlcyBYWSBxdWFkIEJ1ZmZlckluZm9cbiAqXG4gKiBUaGUgZGVmYXVsdCB3aXRoIG5vIHBhcmFtZXRlcnMgd2lsbCByZXR1cm4gYSAyeDIgcXVhZCB3aXRoIHZhbHVlcyBmcm9tIC0xIHRvICsxLlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgd2l0aCB0aGF0IGdvZXMgZnJvbSAwIHRvIDEgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvKGdsLCAxLCAwLjUsIDAuNSk7XG4gKlxuICogSWYgeW91IHdhbnQgYSB1bml0IHF1YWQgY2VudGVyZWQgYWJvdmUgMCwwIHlvdSdkIGNhbGwgaXQgd2l0aFxuICpcbiAqICAgICB0d2dsLnByaW1pdGl2ZXMuY3JlYXRlWFlRdWFkQnVmZmVySW5mbyhnbCwgMSwgMCwgMC41KTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gdGhlIHNpemUgYWNyb3NzIHRoZSBxdWFkLiBEZWZhdWx0cyB0byAyIHdoaWNoIG1lYW5zIHZlcnRpY2VzIHdpbGwgZ28gZnJvbSAtMSB0byArMVxuICogQHBhcmFtIHtudW1iZXJ9IFt4T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBYXG4gKiBAcGFyYW0ge251bWJlcn0gW3lPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFlcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IHRoZSBjcmVhdGVkIFhZIFF1YWQgQnVmZmVySW5mb1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVYWVF1YWRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhZIHF1YWQgQnVmZmVyc1xuICpcbiAqIFRoZSBkZWZhdWx0IHdpdGggbm8gcGFyYW1ldGVycyB3aWxsIHJldHVybiBhIDJ4MiBxdWFkIHdpdGggdmFsdWVzIGZyb20gLTEgdG8gKzEuXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCB3aXRoIHRoYXQgZ29lcyBmcm9tIDAgdG8gMSB5b3UnZCBjYWxsIGl0IHdpdGhcbiAqXG4gKiAgICAgdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVhZUXVhZEJ1ZmZlckluZm8oZ2wsIDEsIDAuNSwgMC41KTtcbiAqXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCBjZW50ZXJlZCBhYm92ZSAwLDAgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvKGdsLCAxLCAwLCAwLjUpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplXSB0aGUgc2l6ZSBhY3Jvc3MgdGhlIHF1YWQuIERlZmF1bHRzIHRvIDIgd2hpY2ggbWVhbnMgdmVydGljZXMgd2lsbCBnbyBmcm9tIC0xIHRvICsxXG4gKiBAcGFyYW0ge251bWJlcn0gW3hPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbeU9mZnNldF0gdGhlIGFtb3VudCB0byBvZmZzZXQgdGhlIHF1YWQgaW4gWVxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gdGhlIGNyZWF0ZWQgWFkgUXVhZCBidWZmZXJzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVhZUXVhZEJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgWFkgcXVhZCB2ZXJ0aWNlc1xuICpcbiAqIFRoZSBkZWZhdWx0IHdpdGggbm8gcGFyYW1ldGVycyB3aWxsIHJldHVybiBhIDJ4MiBxdWFkIHdpdGggdmFsdWVzIGZyb20gLTEgdG8gKzEuXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCB3aXRoIHRoYXQgZ29lcyBmcm9tIDAgdG8gMSB5b3UnZCBjYWxsIGl0IHdpdGhcbiAqXG4gKiAgICAgdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVhZUXVhZFZlcnRpY2VzKDEsIDAuNSwgMC41KTtcbiAqXG4gKiBJZiB5b3Ugd2FudCBhIHVuaXQgcXVhZCBjZW50ZXJlZCBhYm92ZSAwLDAgeW91J2QgY2FsbCBpdCB3aXRoXG4gKlxuICogICAgIHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVYWVF1YWRWZXJ0aWNlcygxLCAwLCAwLjUpO1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gdGhlIHNpemUgYWNyb3NzIHRoZSBxdWFkLiBEZWZhdWx0cyB0byAyIHdoaWNoIG1lYW5zIHZlcnRpY2VzIHdpbGwgZ28gZnJvbSAtMSB0byArMVxuICogQHBhcmFtIHtudW1iZXJ9IFt4T2Zmc2V0XSB0aGUgYW1vdW50IHRvIG9mZnNldCB0aGUgcXVhZCBpbiBYXG4gKiBAcGFyYW0ge251bWJlcn0gW3lPZmZzZXRdIHRoZSBhbW91bnQgdG8gb2Zmc2V0IHRoZSBxdWFkIGluIFlcbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gdGhlIGNyZWF0ZWQgWFkgUXVhZCB2ZXJ0aWNlc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVhZUXVhZFZlcnRpY2VzKHNpemUsIHhPZmZzZXQsIHlPZmZzZXQpIHtcbiAgc2l6ZSA9IHNpemUgfHwgMjtcbiAgeE9mZnNldCA9IHhPZmZzZXQgfHwgMDtcbiAgeU9mZnNldCA9IHlPZmZzZXQgfHwgMDtcbiAgc2l6ZSAqPSAwLjU7XG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHtcbiAgICAgIG51bUNvbXBvbmVudHM6IDIsXG4gICAgICBkYXRhOiBbeE9mZnNldCArIC0xICogc2l6ZSwgeU9mZnNldCArIC0xICogc2l6ZSwgeE9mZnNldCArIDEgKiBzaXplLCB5T2Zmc2V0ICsgLTEgKiBzaXplLCB4T2Zmc2V0ICsgLTEgKiBzaXplLCB5T2Zmc2V0ICsgMSAqIHNpemUsIHhPZmZzZXQgKyAxICogc2l6ZSwgeU9mZnNldCArIDEgKiBzaXplXVxuICAgIH0sXG4gICAgbm9ybWFsOiBbMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMCwgMV0sXG4gICAgdGV4Y29vcmQ6IFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxXSxcbiAgICBpbmRpY2VzOiBbMCwgMSwgMiwgMiwgMSwgM11cbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBYWiBwbGFuZSBCdWZmZXJJbmZvLlxuICpcbiAqIFRoZSBjcmVhdGVkIHBsYW5lIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aF0gV2lkdGggb2YgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtkZXB0aF0gRGVwdGggb2YgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNXaWR0aF0gTnVtYmVyIG9mIHN0ZXBzIGFjcm9zcyB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge251bWJlcn0gW3N1YmRpdmlzaW9uc0RlcHRoXSBOdW1iZXIgb2Ygc3RlcHMgZG93biB0aGUgcGxhbmUuIERlZmF1bHQgPSAxXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL200Lk1hdDR9IFttYXRyaXhdIEEgbWF0cml4IGJ5IHdoaWNoIHRvIG11bHRpcGx5IGFsbCB0aGUgdmVydGljZXMuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBwbGFuZSBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVQbGFuZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgWFogcGxhbmUgYnVmZmVycy5cbiAqXG4gKiBUaGUgY3JlYXRlZCBwbGFuZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIFdpZHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIERlcHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zV2lkdGhdIE51bWJlciBvZiBzdGVwcyBhY3Jvc3MgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNEZXB0aF0gTnVtYmVyIG9mIHN0ZXBzIGRvd24gdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbbWF0cml4XSBBIG1hdHJpeCBieSB3aGljaCB0byBtdWx0aXBseSBhbGwgdGhlIHZlcnRpY2VzLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgcGxhbmUgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlUGxhbmVCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIFhaIHBsYW5lIHZlcnRpY2VzLlxuICpcbiAqIFRoZSBjcmVhdGVkIHBsYW5lIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIFdpZHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbZGVwdGhdIERlcHRoIG9mIHRoZSBwbGFuZS4gRGVmYXVsdCA9IDFcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3ViZGl2aXNpb25zV2lkdGhdIE51bWJlciBvZiBzdGVwcyBhY3Jvc3MgdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHtudW1iZXJ9IFtzdWJkaXZpc2lvbnNEZXB0aF0gTnVtYmVyIG9mIHN0ZXBzIGRvd24gdGhlIHBsYW5lLiBEZWZhdWx0ID0gMVxuICogQHBhcmFtIHttb2R1bGU6dHdnbC9tNC5NYXQ0fSBbbWF0cml4XSBBIG1hdHJpeCBieSB3aGljaCB0byBtdWx0aXBseSBhbGwgdGhlIHZlcnRpY2VzLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCBwbGFuZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVQbGFuZVZlcnRpY2VzKHdpZHRoLCBkZXB0aCwgc3ViZGl2aXNpb25zV2lkdGgsIHN1YmRpdmlzaW9uc0RlcHRoLCBtYXRyaXgpIHtcbiAgd2lkdGggPSB3aWR0aCB8fCAxO1xuICBkZXB0aCA9IGRlcHRoIHx8IDE7XG4gIHN1YmRpdmlzaW9uc1dpZHRoID0gc3ViZGl2aXNpb25zV2lkdGggfHwgMTtcbiAgc3ViZGl2aXNpb25zRGVwdGggPSBzdWJkaXZpc2lvbnNEZXB0aCB8fCAxO1xuICBtYXRyaXggPSBtYXRyaXggfHwgbTQuaWRlbnRpdHkoKTtcbiAgdmFyIG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc1dpZHRoICsgMSkgKiAoc3ViZGl2aXNpb25zRGVwdGggKyAxKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG5cbiAgZm9yICh2YXIgeiA9IDA7IHogPD0gc3ViZGl2aXNpb25zRGVwdGg7IHorKykge1xuICAgIGZvciAodmFyIHggPSAwOyB4IDw9IHN1YmRpdmlzaW9uc1dpZHRoOyB4KyspIHtcbiAgICAgIHZhciB1ID0geCAvIHN1YmRpdmlzaW9uc1dpZHRoO1xuICAgICAgdmFyIHYgPSB6IC8gc3ViZGl2aXNpb25zRGVwdGg7XG4gICAgICBwb3NpdGlvbnMucHVzaCh3aWR0aCAqIHUgLSB3aWR0aCAqIDAuNSwgMCwgZGVwdGggKiB2IC0gZGVwdGggKiAwLjUpO1xuICAgICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICAgICAgdGV4Y29vcmRzLnB1c2godSwgdik7XG4gICAgfVxuICB9XG5cbiAgdmFyIG51bVZlcnRzQWNyb3NzID0gc3ViZGl2aXNpb25zV2lkdGggKyAxO1xuICB2YXIgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3ViZGl2aXNpb25zV2lkdGggKiBzdWJkaXZpc2lvbnNEZXB0aCAqIDIsIFVpbnQxNkFycmF5KTtcblxuICBmb3IgKHZhciBfeiA9IDA7IF96IDwgc3ViZGl2aXNpb25zRGVwdGg7IF96KyspIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgX3ggPSAwOyBfeCA8IHN1YmRpdmlzaW9uc1dpZHRoOyBfeCsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAvLyBNYWtlIHRyaWFuZ2xlIDEgb2YgcXVhZC5cbiAgICAgIGluZGljZXMucHVzaCgoX3ogKyAwKSAqIG51bVZlcnRzQWNyb3NzICsgX3gsIChfeiArIDEpICogbnVtVmVydHNBY3Jvc3MgKyBfeCwgKF96ICsgMCkgKiBudW1WZXJ0c0Fjcm9zcyArIF94ICsgMSk7IC8vIE1ha2UgdHJpYW5nbGUgMiBvZiBxdWFkLlxuXG4gICAgICBpbmRpY2VzLnB1c2goKF96ICsgMSkgKiBudW1WZXJ0c0Fjcm9zcyArIF94LCAoX3ogKyAxKSAqIG51bVZlcnRzQWNyb3NzICsgX3ggKyAxLCAoX3ogKyAwKSAqIG51bVZlcnRzQWNyb3NzICsgX3ggKyAxKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYXJyYXlzID0gcmVvcmllbnRWZXJ0aWNlcyh7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH0sIG1hdHJpeCk7XG4gIHJldHVybiBhcnJheXM7XG59XG4vKipcbiAqIENyZWF0ZXMgc3BoZXJlIEJ1ZmZlckluZm8uXG4gKlxuICogVGhlIGNyZWF0ZWQgc3BoZXJlIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyByYWRpdXMgb2YgdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNBeGlzIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNIZWlnaHQgbnVtYmVyIG9mIHZlcnRpY2FsbHkgb24gdGhlIHNwaGVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIHN0YXJ0IHRoZVxuICogICAgIHRvcCBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zXSBXaGVyZSB0byBlbmQgdGhlXG4gKiAgICAgYm90dG9tIG9mIHRoZSBzcGhlcmUuIERlZmF1bHQgPSBNYXRoLlBJLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfc3RhcnRMb25naXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIHN0YXJ0XG4gKiAgICAgd3JhcHBpbmcgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMb25naXR1ZGVJblJhZGlhbnNdIHdoZXJlIHRvIGVuZFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAyICogTWF0aC5QSS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIHNwaGVyZSBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHNwaGVyZSBidWZmZXJzLlxuICpcbiAqIFRoZSBjcmVhdGVkIHNwaGVyZSBoYXMgcG9zaXRpb24sIG5vcm1hbCwgYW5kIHRleGNvb3JkIGRhdGFcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBzcGhlcmUgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlU3BoZXJlQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBzcGhlcmUgdmVydGljZXMuXG4gKlxuICogVGhlIGNyZWF0ZWQgc3BoZXJlIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCBhbmQgdGV4Y29vcmQgZGF0YVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zQXhpcyBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zSGVpZ2h0IG51bWJlciBvZiB2ZXJ0aWNhbGx5IG9uIHRoZSBzcGhlcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydCB0aGVcbiAqICAgICB0b3Agb2YgdGhlIHNwaGVyZS4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdF9lbmRMYXRpdHVkZUluUmFkaWFuc10gV2hlcmUgdG8gZW5kIHRoZVxuICogICAgIGJvdHRvbSBvZiB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gTWF0aC5QSS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBzdGFydFxuICogICAgIHdyYXBwaW5nIHRoZSBzcGhlcmUuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zXSB3aGVyZSB0byBlbmRcbiAqICAgICB3cmFwcGluZyB0aGUgc3BoZXJlLiBEZWZhdWx0ID0gMiAqIE1hdGguUEkuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHNwaGVyZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVTcGhlcmVWZXJ0aWNlcyhyYWRpdXMsIHN1YmRpdmlzaW9uc0F4aXMsIHN1YmRpdmlzaW9uc0hlaWdodCwgb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMsIG9wdF9lbmRMYXRpdHVkZUluUmFkaWFucywgb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zLCBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zKSB7XG4gIGlmIChzdWJkaXZpc2lvbnNBeGlzIDw9IDAgfHwgc3ViZGl2aXNpb25zSGVpZ2h0IDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3N1YmRpdmlzaW9uQXhpcyBhbmQgc3ViZGl2aXNpb25IZWlnaHQgbXVzdCBiZSA+IDAnKTtcbiAgfVxuXG4gIG9wdF9zdGFydExhdGl0dWRlSW5SYWRpYW5zID0gb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnMgfHwgMDtcbiAgb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zID0gb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zIHx8IE1hdGguUEk7XG4gIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucyA9IG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucyB8fCAwO1xuICBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zID0gb3B0X2VuZExvbmdpdHVkZUluUmFkaWFucyB8fCBNYXRoLlBJICogMjtcbiAgdmFyIGxhdFJhbmdlID0gb3B0X2VuZExhdGl0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TGF0aXR1ZGVJblJhZGlhbnM7XG4gIHZhciBsb25nUmFuZ2UgPSBvcHRfZW5kTG9uZ2l0dWRlSW5SYWRpYW5zIC0gb3B0X3N0YXJ0TG9uZ2l0dWRlSW5SYWRpYW5zOyAvLyBXZSBhcmUgZ29pbmcgdG8gZ2VuZXJhdGUgb3VyIHNwaGVyZSBieSBpdGVyYXRpbmcgdGhyb3VnaCBpdHNcbiAgLy8gc3BoZXJpY2FsIGNvb3JkaW5hdGVzIGFuZCBnZW5lcmF0aW5nIDIgdHJpYW5nbGVzIGZvciBlYWNoIHF1YWQgb24gYVxuICAvLyByaW5nIG9mIHRoZSBzcGhlcmUuXG5cbiAgdmFyIG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc0F4aXMgKyAxKSAqIChzdWJkaXZpc2lvbnNIZWlnaHQgKyAxKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7IC8vIEdlbmVyYXRlIHRoZSBpbmRpdmlkdWFsIHZlcnRpY2VzIGluIG91ciB2ZXJ0ZXggYnVmZmVyLlxuXG4gIGZvciAodmFyIHkgPSAwOyB5IDw9IHN1YmRpdmlzaW9uc0hlaWdodDsgeSsrKSB7XG4gICAgZm9yICh2YXIgeCA9IDA7IHggPD0gc3ViZGl2aXNpb25zQXhpczsgeCsrKSB7XG4gICAgICAvLyBHZW5lcmF0ZSBhIHZlcnRleCBiYXNlZCBvbiBpdHMgc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG4gICAgICB2YXIgdSA9IHggLyBzdWJkaXZpc2lvbnNBeGlzO1xuICAgICAgdmFyIHYgPSB5IC8gc3ViZGl2aXNpb25zSGVpZ2h0O1xuICAgICAgdmFyIHRoZXRhID0gbG9uZ1JhbmdlICogdSArIG9wdF9zdGFydExvbmdpdHVkZUluUmFkaWFucztcbiAgICAgIHZhciBwaGkgPSBsYXRSYW5nZSAqIHYgKyBvcHRfc3RhcnRMYXRpdHVkZUluUmFkaWFucztcbiAgICAgIHZhciBzaW5UaGV0YSA9IE1hdGguc2luKHRoZXRhKTtcbiAgICAgIHZhciBjb3NUaGV0YSA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAgIHZhciBzaW5QaGkgPSBNYXRoLnNpbihwaGkpO1xuICAgICAgdmFyIGNvc1BoaSA9IE1hdGguY29zKHBoaSk7XG4gICAgICB2YXIgdXggPSBjb3NUaGV0YSAqIHNpblBoaTtcbiAgICAgIHZhciB1eSA9IGNvc1BoaTtcbiAgICAgIHZhciB1eiA9IHNpblRoZXRhICogc2luUGhpO1xuICAgICAgcG9zaXRpb25zLnB1c2gocmFkaXVzICogdXgsIHJhZGl1cyAqIHV5LCByYWRpdXMgKiB1eik7XG4gICAgICBub3JtYWxzLnB1c2godXgsIHV5LCB1eik7XG4gICAgICB0ZXhjb29yZHMucHVzaCgxIC0gdSwgdik7XG4gICAgfVxuICB9XG5cbiAgdmFyIG51bVZlcnRzQXJvdW5kID0gc3ViZGl2aXNpb25zQXhpcyArIDE7XG4gIHZhciBpbmRpY2VzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBzdWJkaXZpc2lvbnNBeGlzICogc3ViZGl2aXNpb25zSGVpZ2h0ICogMiwgVWludDE2QXJyYXkpO1xuXG4gIGZvciAodmFyIF94MiA9IDA7IF94MiA8IHN1YmRpdmlzaW9uc0F4aXM7IF94MisrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIF95ID0gMDsgX3kgPCBzdWJkaXZpc2lvbnNIZWlnaHQ7IF95KyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIC8vIE1ha2UgdHJpYW5nbGUgMSBvZiBxdWFkLlxuICAgICAgaW5kaWNlcy5wdXNoKChfeSArIDApICogbnVtVmVydHNBcm91bmQgKyBfeDIsIChfeSArIDApICogbnVtVmVydHNBcm91bmQgKyBfeDIgKyAxLCAoX3kgKyAxKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyKTsgLy8gTWFrZSB0cmlhbmdsZSAyIG9mIHF1YWQuXG5cbiAgICAgIGluZGljZXMucHVzaCgoX3kgKyAxKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyLCAoX3kgKyAwKSAqIG51bVZlcnRzQXJvdW5kICsgX3gyICsgMSwgKF95ICsgMSkgKiBudW1WZXJ0c0Fyb3VuZCArIF94MiArIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG4vKipcbiAqIEFycmF5IG9mIHRoZSBpbmRpY2VzIG9mIGNvcm5lcnMgb2YgZWFjaCBmYWNlIG9mIGEgY3ViZS5cbiAqIEB0eXBlIHtBcnJheS48bnVtYmVyW10+fVxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBDVUJFX0ZBQ0VfSU5ESUNFUyA9IFtbMywgNywgNSwgMV0sIC8vIHJpZ2h0XG5bNiwgMiwgMCwgNF0sIC8vIGxlZnRcbls2LCA3LCAzLCAyXSwgLy8gPz9cblswLCAxLCA1LCA0XSwgLy8gPz9cbls3LCA2LCA0LCA1XSwgLy8gZnJvbnRcblsyLCAzLCAxLCAwXSAvLyBiYWNrXG5dO1xuLyoqXG4gKiBDcmVhdGVzIGEgQnVmZmVySW5mbyBmb3IgYSBjdWJlLlxuICpcbiAqIFRoZSBjdWJlIGlzIGNyZWF0ZWQgYXJvdW5kIHRoZSBvcmlnaW4uICgtc2l6ZSAvIDIsIHNpemUgLyAyKS5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gd2lkdGgsIGhlaWdodCBhbmQgZGVwdGggb2YgdGhlIGN1YmUuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDdWJlQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgYnVmZmVycyBhbmQgaW5kaWNlcyBmb3IgYSBjdWJlLlxuICpcbiAqIFRoZSBjdWJlIGlzIGNyZWF0ZWQgYXJvdW5kIHRoZSBvcmlnaW4uICgtc2l6ZSAvIDIsIHNpemUgLyAyKS5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2l6ZV0gd2lkdGgsIGhlaWdodCBhbmQgZGVwdGggb2YgdGhlIGN1YmUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDdWJlQnVmZmVyc1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgdmVydGljZXMgYW5kIGluZGljZXMgZm9yIGEgY3ViZS5cbiAqXG4gKiBUaGUgY3ViZSBpcyBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luLiAoLXNpemUgLyAyLCBzaXplIC8gMikuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplXSB3aWR0aCwgaGVpZ2h0IGFuZCBkZXB0aCBvZiB0aGUgY3ViZS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUN1YmVWZXJ0aWNlcyhzaXplKSB7XG4gIHNpemUgPSBzaXplIHx8IDE7XG4gIHZhciBrID0gc2l6ZSAvIDI7XG4gIHZhciBjb3JuZXJWZXJ0aWNlcyA9IFtbLWssIC1rLCAta10sIFsraywgLWssIC1rXSwgWy1rLCAraywgLWtdLCBbK2ssICtrLCAta10sIFstaywgLWssICtrXSwgWytrLCAtaywgK2tdLCBbLWssICtrLCAra10sIFsraywgK2ssICtrXV07XG4gIHZhciBmYWNlTm9ybWFscyA9IFtbKzEsICswLCArMF0sIFstMSwgKzAsICswXSwgWyswLCArMSwgKzBdLCBbKzAsIC0xLCArMF0sIFsrMCwgKzAsICsxXSwgWyswLCArMCwgLTFdXTtcbiAgdmFyIHV2Q29vcmRzID0gW1sxLCAwXSwgWzAsIDBdLCBbMCwgMV0sIFsxLCAxXV07XG4gIHZhciBudW1WZXJ0aWNlcyA9IDYgKiA0O1xuICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBub3JtYWxzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIDYgKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgZm9yICh2YXIgZiA9IDA7IGYgPCA2OyArK2YpIHtcbiAgICB2YXIgZmFjZUluZGljZXMgPSBDVUJFX0ZBQ0VfSU5ESUNFU1tmXTtcblxuICAgIGZvciAodmFyIHYgPSAwOyB2IDwgNDsgKyt2KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBjb3JuZXJWZXJ0aWNlc1tmYWNlSW5kaWNlc1t2XV07XG4gICAgICB2YXIgbm9ybWFsID0gZmFjZU5vcm1hbHNbZl07XG4gICAgICB2YXIgdXYgPSB1dkNvb3Jkc1t2XTsgLy8gRWFjaCBmYWNlIG5lZWRzIGFsbCBmb3VyIHZlcnRpY2VzIGJlY2F1c2UgdGhlIG5vcm1hbHMgYW5kIHRleHR1cmVcbiAgICAgIC8vIGNvb3JkaW5hdGVzIGFyZSBub3QgYWxsIHRoZSBzYW1lLlxuXG4gICAgICBwb3NpdGlvbnMucHVzaChwb3NpdGlvbik7XG4gICAgICBub3JtYWxzLnB1c2gobm9ybWFsKTtcbiAgICAgIHRleGNvb3Jkcy5wdXNoKHV2KTtcbiAgICB9IC8vIFR3byB0cmlhbmdsZXMgbWFrZSBhIHNxdWFyZSBmYWNlLlxuXG5cbiAgICB2YXIgb2Zmc2V0ID0gNCAqIGY7XG4gICAgaW5kaWNlcy5wdXNoKG9mZnNldCArIDAsIG9mZnNldCArIDEsIG9mZnNldCArIDIpO1xuICAgIGluZGljZXMucHVzaChvZmZzZXQgKyAwLCBvZmZzZXQgKyAyLCBvZmZzZXQgKyAzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYSBCdWZmZXJJbmZvIGZvciBhIHRydW5jYXRlZCBjb25lLCB3aGljaCBpcyBsaWtlIGEgY3lsaW5kZXJcbiAqIGV4Y2VwdCB0aGF0IGl0IGhhcyBkaWZmZXJlbnQgdG9wIGFuZCBib3R0b20gcmFkaWkuIEEgdHJ1bmNhdGVkIGNvbmVcbiAqIGNhbiBhbHNvIGJlIHVzZWQgdG8gY3JlYXRlIGN5bGluZGVycyBhbmQgcmVndWxhciBjb25lcy4gVGhlXG4gKiB0cnVuY2F0ZWQgY29uZSB3aWxsIGJlIGNyZWF0ZWQgY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbiwgd2l0aCB0aGVcbiAqIHkgYXhpcyBhcyBpdHMgdmVydGljYWwgYXhpcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21SYWRpdXMgQm90dG9tIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3BSYWRpdXMgVG9wIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF90b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF9ib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIGNvbmUgQnVmZmVySW5mby5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm9cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYnVmZmVycyBmb3IgYSB0cnVuY2F0ZWQgY29uZSwgd2hpY2ggaXMgbGlrZSBhIGN5bGluZGVyXG4gKiBleGNlcHQgdGhhdCBpdCBoYXMgZGlmZmVyZW50IHRvcCBhbmQgYm90dG9tIHJhZGlpLiBBIHRydW5jYXRlZCBjb25lXG4gKiBjYW4gYWxzbyBiZSB1c2VkIHRvIGNyZWF0ZSBjeWxpbmRlcnMgYW5kIHJlZ3VsYXIgY29uZXMuIFRoZVxuICogdHJ1bmNhdGVkIGNvbmUgd2lsbCBiZSBjcmVhdGVkIGNlbnRlcmVkIGFib3V0IHRoZSBvcmlnaW4sIHdpdGggdGhlXG4gKiB5IGF4aXMgYXMgaXRzIHZlcnRpY2FsIGF4aXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tUmFkaXVzIEJvdHRvbSByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wUmFkaXVzIFRvcCByYWRpdXMgb2YgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZVxuICogICAgIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRfYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBjb25lIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIHZlcnRpY2VzIGZvciBhIHRydW5jYXRlZCBjb25lLCB3aGljaCBpcyBsaWtlIGEgY3lsaW5kZXJcbiAqIGV4Y2VwdCB0aGF0IGl0IGhhcyBkaWZmZXJlbnQgdG9wIGFuZCBib3R0b20gcmFkaWkuIEEgdHJ1bmNhdGVkIGNvbmVcbiAqIGNhbiBhbHNvIGJlIHVzZWQgdG8gY3JlYXRlIGN5bGluZGVycyBhbmQgcmVndWxhciBjb25lcy4gVGhlXG4gKiB0cnVuY2F0ZWQgY29uZSB3aWxsIGJlIGNyZWF0ZWQgY2VudGVyZWQgYWJvdXQgdGhlIG9yaWdpbiwgd2l0aCB0aGVcbiAqIHkgYXhpcyBhcyBpdHMgdmVydGljYWwgYXhpcy4gLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21SYWRpdXMgQm90dG9tIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0b3BSYWRpdXMgVG9wIHJhZGl1cyBvZiB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRydW5jYXRlZCBjb25lLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlXG4gKiAgICAgdHJ1bmNhdGVkIGNvbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgZG93biB0aGVcbiAqICAgICB0cnVuY2F0ZWQgY29uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF90b3BDYXBdIENyZWF0ZSB0b3AgY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdF9ib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgY29uZSB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXMoYm90dG9tUmFkaXVzLCB0b3BSYWRpdXMsIGhlaWdodCwgcmFkaWFsU3ViZGl2aXNpb25zLCB2ZXJ0aWNhbFN1YmRpdmlzaW9ucywgb3B0X3RvcENhcCwgb3B0X2JvdHRvbUNhcCkge1xuICBpZiAocmFkaWFsU3ViZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcigncmFkaWFsU3ViZGl2aXNpb25zIG11c3QgYmUgMyBvciBncmVhdGVyJyk7XG4gIH1cblxuICBpZiAodmVydGljYWxTdWJkaXZpc2lvbnMgPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDEgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgdmFyIHRvcENhcCA9IG9wdF90b3BDYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRfdG9wQ2FwO1xuICB2YXIgYm90dG9tQ2FwID0gb3B0X2JvdHRvbUNhcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdF9ib3R0b21DYXA7XG4gIHZhciBleHRyYSA9ICh0b3BDYXAgPyAyIDogMCkgKyAoYm90dG9tQ2FwID8gMiA6IDApO1xuICB2YXIgbnVtVmVydGljZXMgPSAocmFkaWFsU3ViZGl2aXNpb25zICsgMSkgKiAodmVydGljYWxTdWJkaXZpc2lvbnMgKyAxICsgZXh0cmEpO1xuICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBub3JtYWxzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHJhZGlhbFN1YmRpdmlzaW9ucyAqICh2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhIC8gMikgKiAyLCBVaW50MTZBcnJheSk7XG4gIHZhciB2ZXJ0c0Fyb3VuZEVkZ2UgPSByYWRpYWxTdWJkaXZpc2lvbnMgKyAxOyAvLyBUaGUgc2xhbnQgb2YgdGhlIGNvbmUgaXMgY29uc3RhbnQgYWNyb3NzIGl0cyBzdXJmYWNlXG5cbiAgdmFyIHNsYW50ID0gTWF0aC5hdGFuMihib3R0b21SYWRpdXMgLSB0b3BSYWRpdXMsIGhlaWdodCk7XG4gIHZhciBjb3NTbGFudCA9IE1hdGguY29zKHNsYW50KTtcbiAgdmFyIHNpblNsYW50ID0gTWF0aC5zaW4oc2xhbnQpO1xuICB2YXIgc3RhcnQgPSB0b3BDYXAgPyAtMiA6IDA7XG4gIHZhciBlbmQgPSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIChib3R0b21DYXAgPyAyIDogMCk7XG5cbiAgZm9yICh2YXIgeXkgPSBzdGFydDsgeXkgPD0gZW5kOyArK3l5KSB7XG4gICAgdmFyIHYgPSB5eSAvIHZlcnRpY2FsU3ViZGl2aXNpb25zO1xuICAgIHZhciB5ID0gaGVpZ2h0ICogdjtcbiAgICB2YXIgcmluZ1JhZGl1cyA9IHZvaWQgMDtcblxuICAgIGlmICh5eSA8IDApIHtcbiAgICAgIHkgPSAwO1xuICAgICAgdiA9IDE7XG4gICAgICByaW5nUmFkaXVzID0gYm90dG9tUmFkaXVzO1xuICAgIH0gZWxzZSBpZiAoeXkgPiB2ZXJ0aWNhbFN1YmRpdmlzaW9ucykge1xuICAgICAgeSA9IGhlaWdodDtcbiAgICAgIHYgPSAxO1xuICAgICAgcmluZ1JhZGl1cyA9IHRvcFJhZGl1cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmluZ1JhZGl1cyA9IGJvdHRvbVJhZGl1cyArICh0b3BSYWRpdXMgLSBib3R0b21SYWRpdXMpICogKHl5IC8gdmVydGljYWxTdWJkaXZpc2lvbnMpO1xuICAgIH1cblxuICAgIGlmICh5eSA9PT0gLTIgfHwgeXkgPT09IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgMikge1xuICAgICAgcmluZ1JhZGl1cyA9IDA7XG4gICAgICB2ID0gMDtcbiAgICB9XG5cbiAgICB5IC09IGhlaWdodCAvIDI7XG5cbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdmVydHNBcm91bmRFZGdlOyArK2lpKSB7XG4gICAgICB2YXIgc2luID0gTWF0aC5zaW4oaWkgKiBNYXRoLlBJICogMiAvIHJhZGlhbFN1YmRpdmlzaW9ucyk7XG4gICAgICB2YXIgY29zID0gTWF0aC5jb3MoaWkgKiBNYXRoLlBJICogMiAvIHJhZGlhbFN1YmRpdmlzaW9ucyk7XG4gICAgICBwb3NpdGlvbnMucHVzaChzaW4gKiByaW5nUmFkaXVzLCB5LCBjb3MgKiByaW5nUmFkaXVzKTtcblxuICAgICAgaWYgKHl5IDwgMCkge1xuICAgICAgICBub3JtYWxzLnB1c2goMCwgLTEsIDApO1xuICAgICAgfSBlbHNlIGlmICh5eSA+IHZlcnRpY2FsU3ViZGl2aXNpb25zKSB7XG4gICAgICAgIG5vcm1hbHMucHVzaCgwLCAxLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAocmluZ1JhZGl1cyA9PT0gMC4wKSB7XG4gICAgICAgIG5vcm1hbHMucHVzaCgwLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbHMucHVzaChzaW4gKiBjb3NTbGFudCwgc2luU2xhbnQsIGNvcyAqIGNvc1NsYW50KTtcbiAgICAgIH1cblxuICAgICAgdGV4Y29vcmRzLnB1c2goaWkgLyByYWRpYWxTdWJkaXZpc2lvbnMsIDEgLSB2KTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfeXkgPSAwOyBfeXkgPCB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyArIGV4dHJhOyArK195eSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBpZiAoX3l5ID09PSAxICYmIHRvcENhcCB8fCBfeXkgPT09IHZlcnRpY2FsU3ViZGl2aXNpb25zICsgZXh0cmEgLSAyICYmIGJvdHRvbUNhcCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2lpID0gMDsgX2lpIDwgcmFkaWFsU3ViZGl2aXNpb25zOyArK19paSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaW5kaWNlcy5wdXNoKHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAwKSArIDAgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAwKSArIDEgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAxKSArIDEgKyBfaWkpO1xuICAgICAgaW5kaWNlcy5wdXNoKHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAwKSArIDAgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAxKSArIDEgKyBfaWksIHZlcnRzQXJvdW5kRWRnZSAqIChfeXkgKyAxKSArIDAgKyBfaWkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246IHBvc2l0aW9ucyxcbiAgICBub3JtYWw6IG5vcm1hbHMsXG4gICAgdGV4Y29vcmQ6IHRleGNvb3JkcyxcbiAgICBpbmRpY2VzOiBpbmRpY2VzXG4gIH07XG59XG4vKipcbiAqIEV4cGFuZHMgUkxFIGRhdGFcbiAqIEBwYXJhbSB7bnVtYmVyW119IHJsZURhdGEgZGF0YSBpbiBmb3JtYXQgb2YgcnVuLWxlbmd0aCwgeCwgeSwgeiwgcnVuLWxlbmd0aCwgeCwgeSwgelxuICogQHBhcmFtIHtudW1iZXJbXX0gW3BhZGRpbmddIHZhbHVlIHRvIGFkZCBlYWNoIGVudHJ5IHdpdGguXG4gKiBAcmV0dXJuIHtudW1iZXJbXX0gdGhlIGV4cGFuZGVkIHJsZURhdGFcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBleHBhbmRSTEVEYXRhKHJsZURhdGEsIHBhZGRpbmcpIHtcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgW107XG4gIHZhciBkYXRhID0gW107XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHJsZURhdGEubGVuZ3RoOyBpaSArPSA0KSB7XG4gICAgdmFyIHJ1bkxlbmd0aCA9IHJsZURhdGFbaWldO1xuICAgIHZhciBlbGVtZW50ID0gcmxlRGF0YS5zbGljZShpaSArIDEsIGlpICsgNCk7XG4gICAgZWxlbWVudC5wdXNoLmFwcGx5KGVsZW1lbnQsIHBhZGRpbmcpO1xuXG4gICAgZm9yICh2YXIgamogPSAwOyBqaiA8IHJ1bkxlbmd0aDsgKytqaikge1xuICAgICAgZGF0YS5wdXNoLmFwcGx5KGRhdGEsIGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuLyoqXG4gKiBDcmVhdGVzIDNEICdGJyBCdWZmZXJJbmZvLlxuICogQW4gJ0YnIGlzIHVzZWZ1bCBiZWNhdXNlIHlvdSBjYW4gZWFzaWx5IHRlbGwgd2hpY2ggd2F5IGl0IGlzIG9yaWVudGVkLlxuICogVGhlIGNyZWF0ZWQgJ0YnIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCB0ZXhjb29yZCwgYW5kIGNvbG9yIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGUzREZCdWZmZXJJbmZvXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIDNEICdGJyBidWZmZXJzLlxuICogQW4gJ0YnIGlzIHVzZWZ1bCBiZWNhdXNlIHlvdSBjYW4gZWFzaWx5IHRlbGwgd2hpY2ggd2F5IGl0IGlzIG9yaWVudGVkLlxuICogVGhlIGNyZWF0ZWQgJ0YnIGhhcyBwb3NpdGlvbiwgbm9ybWFsLCB0ZXhjb29yZCwgYW5kIGNvbG9yIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGUzREZCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIDNEICdGJyB2ZXJ0aWNlcy5cbiAqIEFuICdGJyBpcyB1c2VmdWwgYmVjYXVzZSB5b3UgY2FuIGVhc2lseSB0ZWxsIHdoaWNoIHdheSBpdCBpcyBvcmllbnRlZC5cbiAqIFRoZSBjcmVhdGVkICdGJyBoYXMgcG9zaXRpb24sIG5vcm1hbCwgdGV4Y29vcmQsIGFuZCBjb2xvciBhcnJheXMuXG4gKlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUzREZWZXJ0aWNlcygpIHtcbiAgdmFyIHBvc2l0aW9ucyA9IFsvLyBsZWZ0IGNvbHVtbiBmcm9udFxuICAwLCAwLCAwLCAwLCAxNTAsIDAsIDMwLCAwLCAwLCAwLCAxNTAsIDAsIDMwLCAxNTAsIDAsIDMwLCAwLCAwLCAvLyB0b3AgcnVuZyBmcm9udFxuICAzMCwgMCwgMCwgMzAsIDMwLCAwLCAxMDAsIDAsIDAsIDMwLCAzMCwgMCwgMTAwLCAzMCwgMCwgMTAwLCAwLCAwLCAvLyBtaWRkbGUgcnVuZyBmcm9udFxuICAzMCwgNjAsIDAsIDMwLCA5MCwgMCwgNjcsIDYwLCAwLCAzMCwgOTAsIDAsIDY3LCA5MCwgMCwgNjcsIDYwLCAwLCAvLyBsZWZ0IGNvbHVtbiBiYWNrXG4gIDAsIDAsIDMwLCAzMCwgMCwgMzAsIDAsIDE1MCwgMzAsIDAsIDE1MCwgMzAsIDMwLCAwLCAzMCwgMzAsIDE1MCwgMzAsIC8vIHRvcCBydW5nIGJhY2tcbiAgMzAsIDAsIDMwLCAxMDAsIDAsIDMwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAxMDAsIDAsIDMwLCAxMDAsIDMwLCAzMCwgLy8gbWlkZGxlIHJ1bmcgYmFja1xuICAzMCwgNjAsIDMwLCA2NywgNjAsIDMwLCAzMCwgOTAsIDMwLCAzMCwgOTAsIDMwLCA2NywgNjAsIDMwLCA2NywgOTAsIDMwLCAvLyB0b3BcbiAgMCwgMCwgMCwgMTAwLCAwLCAwLCAxMDAsIDAsIDMwLCAwLCAwLCAwLCAxMDAsIDAsIDMwLCAwLCAwLCAzMCwgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgMTAwLCAwLCAwLCAxMDAsIDMwLCAwLCAxMDAsIDMwLCAzMCwgMTAwLCAwLCAwLCAxMDAsIDMwLCAzMCwgMTAwLCAwLCAzMCwgLy8gdW5kZXIgdG9wIHJ1bmdcbiAgMzAsIDMwLCAwLCAzMCwgMzAsIDMwLCAxMDAsIDMwLCAzMCwgMzAsIDMwLCAwLCAxMDAsIDMwLCAzMCwgMTAwLCAzMCwgMCwgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gIDMwLCAzMCwgMCwgMzAsIDYwLCAzMCwgMzAsIDMwLCAzMCwgMzAsIDMwLCAwLCAzMCwgNjAsIDAsIDMwLCA2MCwgMzAsIC8vIHRvcCBvZiBtaWRkbGUgcnVuZ1xuICAzMCwgNjAsIDAsIDY3LCA2MCwgMzAsIDMwLCA2MCwgMzAsIDMwLCA2MCwgMCwgNjcsIDYwLCAwLCA2NywgNjAsIDMwLCAvLyBmcm9udCBvZiBtaWRkbGUgcnVuZ1xuICA2NywgNjAsIDAsIDY3LCA5MCwgMzAsIDY3LCA2MCwgMzAsIDY3LCA2MCwgMCwgNjcsIDkwLCAwLCA2NywgOTAsIDMwLCAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gIDMwLCA5MCwgMCwgMzAsIDkwLCAzMCwgNjcsIDkwLCAzMCwgMzAsIDkwLCAwLCA2NywgOTAsIDMwLCA2NywgOTAsIDAsIC8vIGZyb250IG9mIGJvdHRvbVxuICAzMCwgOTAsIDAsIDMwLCAxNTAsIDMwLCAzMCwgOTAsIDMwLCAzMCwgOTAsIDAsIDMwLCAxNTAsIDAsIDMwLCAxNTAsIDMwLCAvLyBib3R0b21cbiAgMCwgMTUwLCAwLCAwLCAxNTAsIDMwLCAzMCwgMTUwLCAzMCwgMCwgMTUwLCAwLCAzMCwgMTUwLCAzMCwgMzAsIDE1MCwgMCwgLy8gbGVmdCBzaWRlXG4gIDAsIDAsIDAsIDAsIDAsIDMwLCAwLCAxNTAsIDMwLCAwLCAwLCAwLCAwLCAxNTAsIDMwLCAwLCAxNTAsIDBdO1xuICB2YXIgdGV4Y29vcmRzID0gWy8vIGxlZnQgY29sdW1uIGZyb250XG4gIDAuMjIsIDAuMTksIDAuMjIsIDAuNzksIDAuMzQsIDAuMTksIDAuMjIsIDAuNzksIDAuMzQsIDAuNzksIDAuMzQsIDAuMTksIC8vIHRvcCBydW5nIGZyb250XG4gIDAuMzQsIDAuMTksIDAuMzQsIDAuMzEsIDAuNjIsIDAuMTksIDAuMzQsIDAuMzEsIDAuNjIsIDAuMzEsIDAuNjIsIDAuMTksIC8vIG1pZGRsZSBydW5nIGZyb250XG4gIDAuMzQsIDAuNDMsIDAuMzQsIDAuNTUsIDAuNDksIDAuNDMsIDAuMzQsIDAuNTUsIDAuNDksIDAuNTUsIDAuNDksIDAuNDMsIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMSwgMSwgLy8gdG9wIHJ1bmcgYmFja1xuICAwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAxLCAxLCAvLyBtaWRkbGUgcnVuZyBiYWNrXG4gIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDAsIDEsIDEsIC8vIHRvcFxuICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAvLyB0b3AgcnVuZyBmcm9udFxuICAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAvLyB1bmRlciB0b3AgcnVuZ1xuICAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAvLyBiZXR3ZWVuIHRvcCBydW5nIGFuZCBtaWRkbGVcbiAgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgLy8gdG9wIG9mIG1pZGRsZSBydW5nXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIC8vIGZyb250IG9mIG1pZGRsZSBydW5nXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIC8vIGJvdHRvbSBvZiBtaWRkbGUgcnVuZy5cbiAgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgLy8gZnJvbnQgb2YgYm90dG9tXG4gIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIC8vIGJvdHRvbVxuICAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAvLyBsZWZ0IHNpZGVcbiAgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMF07XG4gIHZhciBub3JtYWxzID0gZXhwYW5kUkxFRGF0YShbLy8gbGVmdCBjb2x1bW4gZnJvbnRcbiAgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcbiAgMTgsIDAsIDAsIDEsIC8vIGxlZnQgY29sdW1uIGJhY2tcbiAgLy8gdG9wIHJ1bmcgYmFja1xuICAvLyBtaWRkbGUgcnVuZyBiYWNrXG4gIDE4LCAwLCAwLCAtMSwgLy8gdG9wXG4gIDYsIDAsIDEsIDAsIC8vIHRvcCBydW5nIGZyb250XG4gIDYsIDEsIDAsIDAsIC8vIHVuZGVyIHRvcCBydW5nXG4gIDYsIDAsIC0xLCAwLCAvLyBiZXR3ZWVuIHRvcCBydW5nIGFuZCBtaWRkbGVcbiAgNiwgMSwgMCwgMCwgLy8gdG9wIG9mIG1pZGRsZSBydW5nXG4gIDYsIDAsIDEsIDAsIC8vIGZyb250IG9mIG1pZGRsZSBydW5nXG4gIDYsIDEsIDAsIDAsIC8vIGJvdHRvbSBvZiBtaWRkbGUgcnVuZy5cbiAgNiwgMCwgLTEsIDAsIC8vIGZyb250IG9mIGJvdHRvbVxuICA2LCAxLCAwLCAwLCAvLyBib3R0b21cbiAgNiwgMCwgLTEsIDAsIC8vIGxlZnQgc2lkZVxuICA2LCAtMSwgMCwgMF0pO1xuICB2YXIgY29sb3JzID0gZXhwYW5kUkxFRGF0YShbLy8gbGVmdCBjb2x1bW4gZnJvbnRcbiAgLy8gdG9wIHJ1bmcgZnJvbnRcbiAgLy8gbWlkZGxlIHJ1bmcgZnJvbnRcbiAgMTgsIDIwMCwgNzAsIDEyMCwgLy8gbGVmdCBjb2x1bW4gYmFja1xuICAvLyB0b3AgcnVuZyBiYWNrXG4gIC8vIG1pZGRsZSBydW5nIGJhY2tcbiAgMTgsIDgwLCA3MCwgMjAwLCAvLyB0b3BcbiAgNiwgNzAsIDIwMCwgMjEwLCAvLyB0b3AgcnVuZyBmcm9udFxuICA2LCAyMDAsIDIwMCwgNzAsIC8vIHVuZGVyIHRvcCBydW5nXG4gIDYsIDIxMCwgMTAwLCA3MCwgLy8gYmV0d2VlbiB0b3AgcnVuZyBhbmQgbWlkZGxlXG4gIDYsIDIxMCwgMTYwLCA3MCwgLy8gdG9wIG9mIG1pZGRsZSBydW5nXG4gIDYsIDcwLCAxODAsIDIxMCwgLy8gZnJvbnQgb2YgbWlkZGxlIHJ1bmdcbiAgNiwgMTAwLCA3MCwgMjEwLCAvLyBib3R0b20gb2YgbWlkZGxlIHJ1bmcuXG4gIDYsIDc2LCAyMTAsIDEwMCwgLy8gZnJvbnQgb2YgYm90dG9tXG4gIDYsIDE0MCwgMjEwLCA4MCwgLy8gYm90dG9tXG4gIDYsIDkwLCAxMzAsIDExMCwgLy8gbGVmdCBzaWRlXG4gIDYsIDE2MCwgMTYwLCAyMjBdLCBbMjU1XSk7XG4gIHZhciBudW1WZXJ0cyA9IHBvc2l0aW9ucy5sZW5ndGggLyAzO1xuICB2YXIgYXJyYXlzID0ge1xuICAgIHBvc2l0aW9uOiBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRzKSxcbiAgICB0ZXhjb29yZDogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0cyksXG4gICAgbm9ybWFsOiBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRzKSxcbiAgICBjb2xvcjogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSg0LCBudW1WZXJ0cywgVWludDhBcnJheSksXG4gICAgaW5kaWNlczogY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0cyAvIDMsIFVpbnQxNkFycmF5KVxuICB9O1xuICBhcnJheXMucG9zaXRpb24ucHVzaChwb3NpdGlvbnMpO1xuICBhcnJheXMudGV4Y29vcmQucHVzaCh0ZXhjb29yZHMpO1xuICBhcnJheXMubm9ybWFsLnB1c2gobm9ybWFscyk7XG4gIGFycmF5cy5jb2xvci5wdXNoKGNvbG9ycyk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVZlcnRzOyArK2lpKSB7XG4gICAgYXJyYXlzLmluZGljZXMucHVzaChpaSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlzO1xufVxuLyoqXG4gKiBDcmVhdGVzIGNyZXNjZW50IEJ1ZmZlckluZm8uXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdmVydGljYWxSYWRpdXMgVGhlIHZlcnRpY2FsIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gb3V0ZXJSYWRpdXMgVGhlIG91dGVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5uZXJSYWRpdXMgVGhlIGlubmVyIHJhZGl1cyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIFRoZSB0aGlja25lc3Mgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHN1YmRpdmlzaW9uc0Rvd24gbnVtYmVyIG9mIHN0ZXBzIGFyb3VuZCB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0T2Zmc2V0XSBXaGVyZSB0byBzdGFydCBhcmMuIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kT2Zmc2V0XSBXaGVyZSB0byBlbmQgYXJnLiBEZWZhdWx0IDEuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDcmVzZW50QnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBjcmVzY2VudCBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsUmFkaXVzIFRoZSB2ZXJ0aWNhbCByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGlubmVyUmFkaXVzIFRoZSBpbm5lciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydE9mZnNldF0gV2hlcmUgdG8gc3RhcnQgYXJjLiBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZE9mZnNldF0gV2hlcmUgdG8gZW5kIGFyZy4gRGVmYXVsdCAxLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3Jlc2VudEJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2NlbnQgdmVydGljZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsUmFkaXVzIFRoZSB2ZXJ0aWNhbCByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGlubmVyUmFkaXVzIFRoZSBpbm5lciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydE9mZnNldF0gV2hlcmUgdG8gc3RhcnQgYXJjLiBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZE9mZnNldF0gV2hlcmUgdG8gZW5kIGFyZy4gRGVmYXVsdCAxLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFR5cGVkQXJyYXk+fSBUaGUgY3JlYXRlZCB2ZXJ0aWNlcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3Jlc2VudEJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3Jlc2NlbnQgQnVmZmVySW5mby5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUNyZXNjZW50QnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBjcmVzY2VudCBidWZmZXJzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsUmFkaXVzIFRoZSB2ZXJ0aWNhbCByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG91dGVyUmFkaXVzIFRoZSBvdXRlciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IGlubmVyUmFkaXVzIFRoZSBpbm5lciByYWRpdXMgb2YgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyBUaGUgdGhpY2tuZXNzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdWJkaXZpc2lvbnNEb3duIG51bWJlciBvZiBzdGVwcyBhcm91bmQgdGhlIGNyZXNjZW50LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydE9mZnNldF0gV2hlcmUgdG8gc3RhcnQgYXJjLiBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZE9mZnNldF0gV2hlcmUgdG8gZW5kIGFyZy4gRGVmYXVsdCAxLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMQnVmZmVyPn0gVGhlIGNyZWF0ZWQgYnVmZmVycy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcmltaXRpdmVzXG4gKiBAZnVuY3Rpb24gY3JlYXRlQ3Jlc2NlbnRCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGNyZXNjZW50IHZlcnRpY2VzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFJhZGl1cyBUaGUgdmVydGljYWwgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBvdXRlclJhZGl1cyBUaGUgb3V0ZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbm5lclJhZGl1cyBUaGUgaW5uZXIgcmFkaXVzIG9mIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aGlja25lc3MgVGhlIHRoaWNrbmVzcyBvZiB0aGUgY3Jlc2NlbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3ViZGl2aXNpb25zRG93biBudW1iZXIgb2Ygc3RlcHMgYXJvdW5kIHRoZSBjcmVzY2VudC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnRPZmZzZXRdIFdoZXJlIHRvIHN0YXJ0IGFyYy4gRGVmYXVsdCAwLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmRPZmZzZXRdIFdoZXJlIHRvIGVuZCBhcmcuIERlZmF1bHQgMS5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBUeXBlZEFycmF5Pn0gVGhlIGNyZWF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQ3Jlc2NlbnRWZXJ0aWNlcyh2ZXJ0aWNhbFJhZGl1cywgb3V0ZXJSYWRpdXMsIGlubmVyUmFkaXVzLCB0aGlja25lc3MsIHN1YmRpdmlzaW9uc0Rvd24sIHN0YXJ0T2Zmc2V0LCBlbmRPZmZzZXQpIHtcbiAgaWYgKHN1YmRpdmlzaW9uc0Rvd24gPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc3ViZGl2aXNpb25Eb3duIG11c3QgYmUgPiAwJyk7XG4gIH1cblxuICBzdGFydE9mZnNldCA9IHN0YXJ0T2Zmc2V0IHx8IDA7XG4gIGVuZE9mZnNldCA9IGVuZE9mZnNldCB8fCAxO1xuICB2YXIgc3ViZGl2aXNpb25zVGhpY2sgPSAyO1xuICB2YXIgb2Zmc2V0UmFuZ2UgPSBlbmRPZmZzZXQgLSBzdGFydE9mZnNldDtcbiAgdmFyIG51bVZlcnRpY2VzID0gKHN1YmRpdmlzaW9uc0Rvd24gKyAxKSAqIDIgKiAoMiArIHN1YmRpdmlzaW9uc1RoaWNrKTtcbiAgdmFyIHBvc2l0aW9ucyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgbm9ybWFscyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgbnVtVmVydGljZXMpO1xuICB2YXIgdGV4Y29vcmRzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgyLCBudW1WZXJ0aWNlcyk7XG5cbiAgZnVuY3Rpb24gbGVycChhLCBiLCBzKSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFyYyhhcmNSYWRpdXMsIHgsIG5vcm1hbE11bHQsIG5vcm1hbEFkZCwgdU11bHQsIHVBZGQpIHtcbiAgICBmb3IgKHZhciB6ID0gMDsgeiA8PSBzdWJkaXZpc2lvbnNEb3duOyB6KyspIHtcbiAgICAgIHZhciB1QmFjayA9IHggLyAoc3ViZGl2aXNpb25zVGhpY2sgLSAxKTtcbiAgICAgIHZhciB2ID0geiAvIHN1YmRpdmlzaW9uc0Rvd247XG4gICAgICB2YXIgeEJhY2sgPSAodUJhY2sgLSAwLjUpICogMjtcbiAgICAgIHZhciBhbmdsZSA9IChzdGFydE9mZnNldCArIHYgKiBvZmZzZXRSYW5nZSkgKiBNYXRoLlBJO1xuICAgICAgdmFyIHMgPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICB2YXIgYyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICAgIHZhciByYWRpdXMgPSBsZXJwKHZlcnRpY2FsUmFkaXVzLCBhcmNSYWRpdXMsIHMpO1xuICAgICAgdmFyIHB4ID0geEJhY2sgKiB0aGlja25lc3M7XG4gICAgICB2YXIgcHkgPSBjICogdmVydGljYWxSYWRpdXM7XG4gICAgICB2YXIgcHogPSBzICogcmFkaXVzO1xuICAgICAgcG9zaXRpb25zLnB1c2gocHgsIHB5LCBweik7XG4gICAgICB2YXIgbiA9IHYzLmFkZCh2My5tdWx0aXBseShbMCwgcywgY10sIG5vcm1hbE11bHQpLCBub3JtYWxBZGQpO1xuICAgICAgbm9ybWFscy5wdXNoKG4pO1xuICAgICAgdGV4Y29vcmRzLnB1c2godUJhY2sgKiB1TXVsdCArIHVBZGQsIHYpO1xuICAgIH1cbiAgfSAvLyBHZW5lcmF0ZSB0aGUgaW5kaXZpZHVhbCB2ZXJ0aWNlcyBpbiBvdXIgdmVydGV4IGJ1ZmZlci5cblxuXG4gIGZvciAodmFyIHggPSAwOyB4IDwgc3ViZGl2aXNpb25zVGhpY2s7IHgrKykge1xuICAgIHZhciB1QmFjayA9ICh4IC8gKHN1YmRpdmlzaW9uc1RoaWNrIC0gMSkgLSAwLjUpICogMjtcbiAgICBjcmVhdGVBcmMob3V0ZXJSYWRpdXMsIHgsIFsxLCAxLCAxXSwgWzAsIDAsIDBdLCAxLCAwKTtcbiAgICBjcmVhdGVBcmMob3V0ZXJSYWRpdXMsIHgsIFswLCAwLCAwXSwgW3VCYWNrLCAwLCAwXSwgMCwgMCk7XG4gICAgY3JlYXRlQXJjKGlubmVyUmFkaXVzLCB4LCBbMSwgMSwgMV0sIFswLCAwLCAwXSwgMSwgMCk7XG4gICAgY3JlYXRlQXJjKGlubmVyUmFkaXVzLCB4LCBbMCwgMCwgMF0sIFt1QmFjaywgMCwgMF0sIDAsIDEpO1xuICB9IC8vIERvIG91dGVyIHN1cmZhY2UuXG5cblxuICB2YXIgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3ViZGl2aXNpb25zRG93biAqIDIgKiAoMiArIHN1YmRpdmlzaW9uc1RoaWNrKSwgVWludDE2QXJyYXkpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN1cmZhY2UobGVmdEFyY09mZnNldCwgcmlnaHRBcmNPZmZzZXQpIHtcbiAgICBmb3IgKHZhciB6ID0gMDsgeiA8IHN1YmRpdmlzaW9uc0Rvd247ICsreikge1xuICAgICAgLy8gTWFrZSB0cmlhbmdsZSAxIG9mIHF1YWQuXG4gICAgICBpbmRpY2VzLnB1c2gobGVmdEFyY09mZnNldCArIHogKyAwLCBsZWZ0QXJjT2Zmc2V0ICsgeiArIDEsIHJpZ2h0QXJjT2Zmc2V0ICsgeiArIDApOyAvLyBNYWtlIHRyaWFuZ2xlIDIgb2YgcXVhZC5cblxuICAgICAgaW5kaWNlcy5wdXNoKGxlZnRBcmNPZmZzZXQgKyB6ICsgMSwgcmlnaHRBcmNPZmZzZXQgKyB6ICsgMSwgcmlnaHRBcmNPZmZzZXQgKyB6ICsgMCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG51bVZlcnRpY2VzRG93biA9IHN1YmRpdmlzaW9uc0Rvd24gKyAxOyAvLyBmcm9udFxuXG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogMCwgbnVtVmVydGljZXNEb3duICogNCk7IC8vIHJpZ2h0XG5cbiAgY3JlYXRlU3VyZmFjZShudW1WZXJ0aWNlc0Rvd24gKiA1LCBudW1WZXJ0aWNlc0Rvd24gKiA3KTsgLy8gYmFja1xuXG4gIGNyZWF0ZVN1cmZhY2UobnVtVmVydGljZXNEb3duICogNiwgbnVtVmVydGljZXNEb3duICogMik7IC8vIGxlZnRcblxuICBjcmVhdGVTdXJmYWNlKG51bVZlcnRpY2VzRG93biAqIDMsIG51bVZlcnRpY2VzRG93biAqIDEpO1xuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGN5bGluZGVyIEJ1ZmZlckluZm8uIFRoZSBjeWxpbmRlciB3aWxsIGJlIGNyZWF0ZWQgYXJvdW5kIHRoZSBvcmlnaW5cbiAqIGFsb25nIHRoZSB5LWF4aXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIGN5bGluZGVyLlxuICogQHBhcmFtIHtudW1iZXJ9IHZlcnRpY2FsU3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGRvd24gdGhlIGN5bGluZGVyLlxuICogQHBhcmFtIHtib29sZWFufSBbdG9wQ2FwXSBDcmVhdGUgdG9wIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtib3R0b21DYXBdIENyZWF0ZSBib3R0b20gY2FwLiBEZWZhdWx0ID0gdHJ1ZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZUN5bGluZGVyQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBjeWxpbmRlciBidWZmZXJzLiBUaGUgY3lsaW5kZXIgd2lsbCBiZSBjcmVhdGVkIGFyb3VuZCB0aGUgb3JpZ2luXG4gKiBhbG9uZyB0aGUgeS1heGlzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBSYWRpdXMgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBkb3duIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvcENhcF0gQ3JlYXRlIHRvcCBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVDeWxpbmRlckJ1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgY3lsaW5kZXIgdmVydGljZXMuIFRoZSBjeWxpbmRlciB3aWxsIGJlIGNyZWF0ZWQgYXJvdW5kIHRoZSBvcmlnaW5cbiAqIGFsb25nIHRoZSB5LWF4aXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBSYWRpdXMgb2YgY3lsaW5kZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBkb3duIHRoZSBjeWxpbmRlci5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvcENhcF0gQ3JlYXRlIHRvcCBjYXAuIERlZmF1bHQgPSB0cnVlLlxuICogQHBhcmFtIHtib29sZWFufSBbYm90dG9tQ2FwXSBDcmVhdGUgYm90dG9tIGNhcC4gRGVmYXVsdCA9IHRydWUuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUN5bGluZGVyVmVydGljZXMocmFkaXVzLCBoZWlnaHQsIHJhZGlhbFN1YmRpdmlzaW9ucywgdmVydGljYWxTdWJkaXZpc2lvbnMsIHRvcENhcCwgYm90dG9tQ2FwKSB7XG4gIHJldHVybiBjcmVhdGVUcnVuY2F0ZWRDb25lVmVydGljZXMocmFkaXVzLCByYWRpdXMsIGhlaWdodCwgcmFkaWFsU3ViZGl2aXNpb25zLCB2ZXJ0aWNhbFN1YmRpdmlzaW9ucywgdG9wQ2FwLCBib3R0b21DYXApO1xufVxuLyoqXG4gKiBDcmVhdGVzIEJ1ZmZlckluZm8gZm9yIGEgdG9ydXNcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgcmFkaXVzIG9mIGNlbnRlciBvZiB0b3J1cyBjaXJjbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGhpY2tuZXNzIHJhZGl1cyBvZiB0b3J1cyByaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbFN1YmRpdmlzaW9ucyBUaGUgbnVtYmVyIG9mIHN1YmRpdmlzaW9ucyBhcm91bmQgdGhlIHRvcnVzLlxuICogQHBhcmFtIHtudW1iZXJ9IGJvZHlTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSBib2R5IHRvcnVzLlxuICogQHBhcmFtIHtib29sZWFufSBbc3RhcnRBbmdsZV0gc3RhcnQgYW5nbGUgaW4gcmFkaWFucy4gRGVmYXVsdCA9IDAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtlbmRBbmdsZV0gZW5kIGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSBNYXRoLlBJICogMi5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IFRoZSBjcmVhdGVkIEJ1ZmZlckluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZVRvcnVzQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBidWZmZXJzIGZvciBhIHRvcnVzXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIHJhZGl1cyBvZiBjZW50ZXIgb2YgdG9ydXMgY2lyY2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyByYWRpdXMgb2YgdG9ydXMgcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSB0b3J1cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib2R5U3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgYm9keSB0b3J1cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXJ0QW5nbGVdIHN0YXJ0IGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtib29sZWFufSBbZW5kQW5nbGVdIGVuZCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gTWF0aC5QSSAqIDIuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgV2ViR0xCdWZmZXI+fSBUaGUgY3JlYXRlZCBidWZmZXJzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVUb3J1c0J1ZmZlcnNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgdmVydGljZXMgZm9yIGEgdG9ydXNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIHJhZGl1cyBvZiBjZW50ZXIgb2YgdG9ydXMgY2lyY2xlLlxuICogQHBhcmFtIHtudW1iZXJ9IHRoaWNrbmVzcyByYWRpdXMgb2YgdG9ydXMgcmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpYWxTdWJkaXZpc2lvbnMgVGhlIG51bWJlciBvZiBzdWJkaXZpc2lvbnMgYXJvdW5kIHRoZSB0b3J1cy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBib2R5U3ViZGl2aXNpb25zIFRoZSBudW1iZXIgb2Ygc3ViZGl2aXNpb25zIGFyb3VuZCB0aGUgYm9keSB0b3J1cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXJ0QW5nbGVdIHN0YXJ0IGFuZ2xlIGluIHJhZGlhbnMuIERlZmF1bHQgPSAwLlxuICogQHBhcmFtIHtib29sZWFufSBbZW5kQW5nbGVdIGVuZCBhbmdsZSBpbiByYWRpYW5zLiBEZWZhdWx0ID0gTWF0aC5QSSAqIDIuXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRvcnVzVmVydGljZXMocmFkaXVzLCB0aGlja25lc3MsIHJhZGlhbFN1YmRpdmlzaW9ucywgYm9keVN1YmRpdmlzaW9ucywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcbiAgaWYgKHJhZGlhbFN1YmRpdmlzaW9ucyA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3JhZGlhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgaWYgKGJvZHlTdWJkaXZpc2lvbnMgPCAzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd2ZXJ0aWNhbFN1YmRpdmlzaW9ucyBtdXN0IGJlIDMgb3IgZ3JlYXRlcicpO1xuICB9XG5cbiAgc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGUgfHwgMDtcbiAgZW5kQW5nbGUgPSBlbmRBbmdsZSB8fCBNYXRoLlBJICogMjtcbiAgdmFyIHJhbmdlID0gZW5kQW5nbGUgLSBzdGFydEFuZ2xlO1xuICB2YXIgcmFkaWFsUGFydHMgPSByYWRpYWxTdWJkaXZpc2lvbnMgKyAxO1xuICB2YXIgYm9keVBhcnRzID0gYm9keVN1YmRpdmlzaW9ucyArIDE7XG4gIHZhciBudW1WZXJ0aWNlcyA9IHJhZGlhbFBhcnRzICogYm9keVBhcnRzO1xuICB2YXIgcG9zaXRpb25zID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciBub3JtYWxzID0gY3JlYXRlQXVnbWVudGVkVHlwZWRBcnJheSgzLCBudW1WZXJ0aWNlcyk7XG4gIHZhciB0ZXhjb29yZHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDIsIG51bVZlcnRpY2VzKTtcbiAgdmFyIGluZGljZXMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIHJhZGlhbFN1YmRpdmlzaW9ucyAqIGJvZHlTdWJkaXZpc2lvbnMgKiAyLCBVaW50MTZBcnJheSk7XG5cbiAgZm9yICh2YXIgc2xpY2UgPSAwOyBzbGljZSA8IGJvZHlQYXJ0czsgKytzbGljZSkge1xuICAgIHZhciB2ID0gc2xpY2UgLyBib2R5U3ViZGl2aXNpb25zO1xuICAgIHZhciBzbGljZUFuZ2xlID0gdiAqIE1hdGguUEkgKiAyO1xuICAgIHZhciBzbGljZVNpbiA9IE1hdGguc2luKHNsaWNlQW5nbGUpO1xuICAgIHZhciByaW5nUmFkaXVzID0gcmFkaXVzICsgc2xpY2VTaW4gKiB0aGlja25lc3M7XG4gICAgdmFyIG55ID0gTWF0aC5jb3Moc2xpY2VBbmdsZSk7XG4gICAgdmFyIHkgPSBueSAqIHRoaWNrbmVzcztcblxuICAgIGZvciAodmFyIHJpbmcgPSAwOyByaW5nIDwgcmFkaWFsUGFydHM7ICsrcmluZykge1xuICAgICAgdmFyIHUgPSByaW5nIC8gcmFkaWFsU3ViZGl2aXNpb25zO1xuICAgICAgdmFyIHJpbmdBbmdsZSA9IHN0YXJ0QW5nbGUgKyB1ICogcmFuZ2U7XG4gICAgICB2YXIgeFNpbiA9IE1hdGguc2luKHJpbmdBbmdsZSk7XG4gICAgICB2YXIgekNvcyA9IE1hdGguY29zKHJpbmdBbmdsZSk7XG4gICAgICB2YXIgeCA9IHhTaW4gKiByaW5nUmFkaXVzO1xuICAgICAgdmFyIHogPSB6Q29zICogcmluZ1JhZGl1cztcbiAgICAgIHZhciBueCA9IHhTaW4gKiBzbGljZVNpbjtcbiAgICAgIHZhciBueiA9IHpDb3MgKiBzbGljZVNpbjtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHgsIHksIHopO1xuICAgICAgbm9ybWFscy5wdXNoKG54LCBueSwgbnopO1xuICAgICAgdGV4Y29vcmRzLnB1c2godSwgMSAtIHYpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIF9zbGljZSA9IDA7IF9zbGljZSA8IGJvZHlTdWJkaXZpc2lvbnM7ICsrX3NsaWNlKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZvciAodmFyIF9yaW5nID0gMDsgX3JpbmcgPCByYWRpYWxTdWJkaXZpc2lvbnM7ICsrX3JpbmcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHZhciBuZXh0UmluZ0luZGV4ID0gMSArIF9yaW5nO1xuICAgICAgdmFyIG5leHRTbGljZUluZGV4ID0gMSArIF9zbGljZTtcbiAgICAgIGluZGljZXMucHVzaChyYWRpYWxQYXJ0cyAqIF9zbGljZSArIF9yaW5nLCByYWRpYWxQYXJ0cyAqIG5leHRTbGljZUluZGV4ICsgX3JpbmcsIHJhZGlhbFBhcnRzICogX3NsaWNlICsgbmV4dFJpbmdJbmRleCk7XG4gICAgICBpbmRpY2VzLnB1c2gocmFkaWFsUGFydHMgKiBuZXh0U2xpY2VJbmRleCArIF9yaW5nLCByYWRpYWxQYXJ0cyAqIG5leHRTbGljZUluZGV4ICsgbmV4dFJpbmdJbmRleCwgcmFkaWFsUGFydHMgKiBfc2xpY2UgKyBuZXh0UmluZ0luZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMsXG4gICAgbm9ybWFsOiBub3JtYWxzLFxuICAgIHRleGNvb3JkOiB0ZXhjb29yZHMsXG4gICAgaW5kaWNlczogaW5kaWNlc1xuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgZGlzYyBCdWZmZXJJbmZvLiBUaGUgZGlzYyB3aWxsIGJlIGluIHRoZSB4eiBwbGFuZSwgY2VudGVyZWQgYXRcbiAqIHRoZSBvcmlnaW4uIFdoZW4gY3JlYXRpbmcsIGF0IGxlYXN0IDMgZGl2aXNpb25zLCBvciBwaWVcbiAqIHBpZWNlcywgbmVlZCB0byBiZSBzcGVjaWZpZWQsIG90aGVyd2lzZSB0aGUgdHJpYW5nbGVzIG1ha2luZ1xuICogdXAgdGhlIGRpc2Mgd2lsbCBiZSBkZWdlbmVyYXRlLiBZb3UgY2FuIGFsc28gc3BlY2lmeSB0aGVcbiAqIG51bWJlciBvZiByYWRpYWwgcGllY2VzIGBzdGFja3NgLiBBIHZhbHVlIG9mIDEgZm9yXG4gKiBzdGFja3Mgd2lsbCBnaXZlIHlvdSBhIHNpbXBsZSBkaXNjIG9mIHBpZSBwaWVjZXMuICBJZiB5b3VcbiAqIHdhbnQgdG8gY3JlYXRlIGFuIGFubnVsdXMgeW91IGNhbiBzZXQgYGlubmVyUmFkaXVzYCB0byBhXG4gKiB2YWx1ZSA+IDAuIEZpbmFsbHksIGBzdGFja1Bvd2VyYCBhbGxvd3MgeW91IHRvIGhhdmUgdGhlIHdpZHRoc1xuICogaW5jcmVhc2Ugb3IgZGVjcmVhc2UgYXMgeW91IG1vdmUgYXdheSBmcm9tIHRoZSBjZW50ZXIuIFRoaXNcbiAqIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgd2hlbiB1c2luZyB0aGUgZGlzYyBhcyBhIGdyb3VuZCBwbGFuZVxuICogd2l0aCBhIGZpeGVkIGNhbWVyYSBzdWNoIHRoYXQgeW91IGRvbid0IG5lZWQgdGhlIHJlc29sdXRpb25cbiAqIG9mIHNtYWxsIHRyaWFuZ2xlcyBuZWFyIHRoZSBwZXJpbWV0ZXIuIEZvciBleGFtcGxlLCBhIHZhbHVlXG4gKiBvZiAyIHdpbGwgcHJvZHVjZSBzdGFja3Mgd2hvc2Ugb3V0c2lkZSByYWRpdXMgaW5jcmVhc2VzIHdpdGhcbiAqIHRoZSBzcXVhcmUgb2YgdGhlIHN0YWNrIGluZGV4LiBBIHZhbHVlIG9mIDEgd2lsbCBnaXZlIHVuaWZvcm1cbiAqIHN0YWNrcy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIHRoZSBncm91bmQgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGl2aXNpb25zIE51bWJlciBvZiB0cmlhbmdsZXMgaW4gdGhlIGdyb3VuZCBwbGFuZSAoYXQgbGVhc3QgMykuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrc10gTnVtYmVyIG9mIHJhZGlhbCBkaXZpc2lvbnMgKGRlZmF1bHQ9MSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2lubmVyUmFkaXVzXSBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrUG93ZXJdIFBvd2VyIHRvIHJhaXNlIHN0YWNrIHNpemUgdG8gZm9yIGRlY3JlYXNpbmcgd2lkdGguXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5CdWZmZXJJbmZvfSBUaGUgY3JlYXRlZCBCdWZmZXJJbmZvLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqIEBmdW5jdGlvbiBjcmVhdGVEaXNjQnVmZmVySW5mb1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBkaXNjIGJ1ZmZlcnMuIFRoZSBkaXNjIHdpbGwgYmUgaW4gdGhlIHh6IHBsYW5lLCBjZW50ZXJlZCBhdFxuICogdGhlIG9yaWdpbi4gV2hlbiBjcmVhdGluZywgYXQgbGVhc3QgMyBkaXZpc2lvbnMsIG9yIHBpZVxuICogcGllY2VzLCBuZWVkIHRvIGJlIHNwZWNpZmllZCwgb3RoZXJ3aXNlIHRoZSB0cmlhbmdsZXMgbWFraW5nXG4gKiB1cCB0aGUgZGlzYyB3aWxsIGJlIGRlZ2VuZXJhdGUuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZVxuICogbnVtYmVyIG9mIHJhZGlhbCBwaWVjZXMgYHN0YWNrc2AuIEEgdmFsdWUgb2YgMSBmb3JcbiAqIHN0YWNrcyB3aWxsIGdpdmUgeW91IGEgc2ltcGxlIGRpc2Mgb2YgcGllIHBpZWNlcy4gIElmIHlvdVxuICogd2FudCB0byBjcmVhdGUgYW4gYW5udWx1cyB5b3UgY2FuIHNldCBgaW5uZXJSYWRpdXNgIHRvIGFcbiAqIHZhbHVlID4gMC4gRmluYWxseSwgYHN0YWNrUG93ZXJgIGFsbG93cyB5b3UgdG8gaGF2ZSB0aGUgd2lkdGhzXG4gKiBpbmNyZWFzZSBvciBkZWNyZWFzZSBhcyB5b3UgbW92ZSBhd2F5IGZyb20gdGhlIGNlbnRlci4gVGhpc1xuICogaXMgcGFydGljdWxhcmx5IHVzZWZ1bCB3aGVuIHVzaW5nIHRoZSBkaXNjIGFzIGEgZ3JvdW5kIHBsYW5lXG4gKiB3aXRoIGEgZml4ZWQgY2FtZXJhIHN1Y2ggdGhhdCB5b3UgZG9uJ3QgbmVlZCB0aGUgcmVzb2x1dGlvblxuICogb2Ygc21hbGwgdHJpYW5nbGVzIG5lYXIgdGhlIHBlcmltZXRlci4gRm9yIGV4YW1wbGUsIGEgdmFsdWVcbiAqIG9mIDIgd2lsbCBwcm9kdWNlIHN0YWNrcyB3aG9zZSBvdXRzaWRlIHJhZGl1cyBpbmNyZWFzZXMgd2l0aFxuICogdGhlIHNxdWFyZSBvZiB0aGUgc3RhY2sgaW5kZXguIEEgdmFsdWUgb2YgMSB3aWxsIGdpdmUgdW5pZm9ybVxuICogc3RhY2tzLlxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBSYWRpdXMgb2YgdGhlIGdyb3VuZCBwbGFuZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBkaXZpc2lvbnMgTnVtYmVyIG9mIHRyaWFuZ2xlcyBpbiB0aGUgZ3JvdW5kIHBsYW5lIChhdCBsZWFzdCAzKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhY2tzXSBOdW1iZXIgb2YgcmFkaWFsIGRpdmlzaW9ucyAoZGVmYXVsdD0xKS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5uZXJSYWRpdXNdIERlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhY2tQb3dlcl0gUG93ZXIgdG8gcmFpc2Ugc3RhY2sgc2l6ZSB0byBmb3IgZGVjcmVhc2luZyB3aWR0aC5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBXZWJHTEJ1ZmZlcj59IFRoZSBjcmVhdGVkIGJ1ZmZlcnMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICogQGZ1bmN0aW9uIGNyZWF0ZURpc2NCdWZmZXJzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGRpc2MgdmVydGljZXMuIFRoZSBkaXNjIHdpbGwgYmUgaW4gdGhlIHh6IHBsYW5lLCBjZW50ZXJlZCBhdFxuICogdGhlIG9yaWdpbi4gV2hlbiBjcmVhdGluZywgYXQgbGVhc3QgMyBkaXZpc2lvbnMsIG9yIHBpZVxuICogcGllY2VzLCBuZWVkIHRvIGJlIHNwZWNpZmllZCwgb3RoZXJ3aXNlIHRoZSB0cmlhbmdsZXMgbWFraW5nXG4gKiB1cCB0aGUgZGlzYyB3aWxsIGJlIGRlZ2VuZXJhdGUuIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IHRoZVxuICogbnVtYmVyIG9mIHJhZGlhbCBwaWVjZXMgYHN0YWNrc2AuIEEgdmFsdWUgb2YgMSBmb3JcbiAqIHN0YWNrcyB3aWxsIGdpdmUgeW91IGEgc2ltcGxlIGRpc2Mgb2YgcGllIHBpZWNlcy4gIElmIHlvdVxuICogd2FudCB0byBjcmVhdGUgYW4gYW5udWx1cyB5b3UgY2FuIHNldCBgaW5uZXJSYWRpdXNgIHRvIGFcbiAqIHZhbHVlID4gMC4gRmluYWxseSwgYHN0YWNrUG93ZXJgIGFsbG93cyB5b3UgdG8gaGF2ZSB0aGUgd2lkdGhzXG4gKiBpbmNyZWFzZSBvciBkZWNyZWFzZSBhcyB5b3UgbW92ZSBhd2F5IGZyb20gdGhlIGNlbnRlci4gVGhpc1xuICogaXMgcGFydGljdWxhcmx5IHVzZWZ1bCB3aGVuIHVzaW5nIHRoZSBkaXNjIGFzIGEgZ3JvdW5kIHBsYW5lXG4gKiB3aXRoIGEgZml4ZWQgY2FtZXJhIHN1Y2ggdGhhdCB5b3UgZG9uJ3QgbmVlZCB0aGUgcmVzb2x1dGlvblxuICogb2Ygc21hbGwgdHJpYW5nbGVzIG5lYXIgdGhlIHBlcmltZXRlci4gRm9yIGV4YW1wbGUsIGEgdmFsdWVcbiAqIG9mIDIgd2lsbCBwcm9kdWNlIHN0YWNrcyB3aG9zZSBvdXRzaWRlIHJhZGl1cyBpbmNyZWFzZXMgd2l0aFxuICogdGhlIHNxdWFyZSBvZiB0aGUgc3RhY2sgaW5kZXguIEEgdmFsdWUgb2YgMSB3aWxsIGdpdmUgdW5pZm9ybVxuICogc3RhY2tzLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgUmFkaXVzIG9mIHRoZSBncm91bmQgcGxhbmUuXG4gKiBAcGFyYW0ge251bWJlcn0gZGl2aXNpb25zIE51bWJlciBvZiB0cmlhbmdsZXMgaW4gdGhlIGdyb3VuZCBwbGFuZSAoYXQgbGVhc3QgMykuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrc10gTnVtYmVyIG9mIHJhZGlhbCBkaXZpc2lvbnMgKGRlZmF1bHQ9MSkuXG4gKiBAcGFyYW0ge251bWJlcn0gW2lubmVyUmFkaXVzXSBEZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YWNrUG93ZXJdIFBvd2VyIHRvIHJhaXNlIHN0YWNrIHNpemUgdG8gZm9yIGRlY3JlYXNpbmcgd2lkdGguXG4gKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgVHlwZWRBcnJheT59IFRoZSBjcmVhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2NWZXJ0aWNlcyhyYWRpdXMsIGRpdmlzaW9ucywgc3RhY2tzLCBpbm5lclJhZGl1cywgc3RhY2tQb3dlcikge1xuICBpZiAoZGl2aXNpb25zIDwgMykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGl2aXNpb25zIG11c3QgYmUgYXQgbGVhc3QgMycpO1xuICB9XG5cbiAgc3RhY2tzID0gc3RhY2tzID8gc3RhY2tzIDogMTtcbiAgc3RhY2tQb3dlciA9IHN0YWNrUG93ZXIgPyBzdGFja1Bvd2VyIDogMTtcbiAgaW5uZXJSYWRpdXMgPSBpbm5lclJhZGl1cyA/IGlubmVyUmFkaXVzIDogMDsgLy8gTm90ZTogV2UgZG9uJ3Qgc2hhcmUgdGhlIGNlbnRlciB2ZXJ0ZXggYmVjYXVzZSB0aGF0IHdvdWxkXG4gIC8vIG1lc3MgdXAgdGV4dHVyZSBjb29yZGluYXRlcy5cblxuICB2YXIgbnVtVmVydGljZXMgPSAoZGl2aXNpb25zICsgMSkgKiAoc3RhY2tzICsgMSk7XG4gIHZhciBwb3NpdGlvbnMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIG5vcm1hbHMgPSBjcmVhdGVBdWdtZW50ZWRUeXBlZEFycmF5KDMsIG51bVZlcnRpY2VzKTtcbiAgdmFyIHRleGNvb3JkcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMiwgbnVtVmVydGljZXMpO1xuICB2YXIgaW5kaWNlcyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoMywgc3RhY2tzICogZGl2aXNpb25zICogMiwgVWludDE2QXJyYXkpO1xuICB2YXIgZmlyc3RJbmRleCA9IDA7XG4gIHZhciByYWRpdXNTcGFuID0gcmFkaXVzIC0gaW5uZXJSYWRpdXM7XG4gIHZhciBwb2ludHNQZXJTdGFjayA9IGRpdmlzaW9ucyArIDE7IC8vIEJ1aWxkIHRoZSBkaXNrIG9uZSBzdGFjayBhdCBhIHRpbWUuXG5cbiAgZm9yICh2YXIgc3RhY2sgPSAwOyBzdGFjayA8PSBzdGFja3M7ICsrc3RhY2spIHtcbiAgICB2YXIgc3RhY2tSYWRpdXMgPSBpbm5lclJhZGl1cyArIHJhZGl1c1NwYW4gKiBNYXRoLnBvdyhzdGFjayAvIHN0YWNrcywgc3RhY2tQb3dlcik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBkaXZpc2lvbnM7ICsraSkge1xuICAgICAgdmFyIHRoZXRhID0gMi4wICogTWF0aC5QSSAqIGkgLyBkaXZpc2lvbnM7XG4gICAgICB2YXIgeCA9IHN0YWNrUmFkaXVzICogTWF0aC5jb3ModGhldGEpO1xuICAgICAgdmFyIHogPSBzdGFja1JhZGl1cyAqIE1hdGguc2luKHRoZXRhKTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHgsIDAsIHopO1xuICAgICAgbm9ybWFscy5wdXNoKDAsIDEsIDApO1xuICAgICAgdGV4Y29vcmRzLnB1c2goMSAtIGkgLyBkaXZpc2lvbnMsIHN0YWNrIC8gc3RhY2tzKTtcblxuICAgICAgaWYgKHN0YWNrID4gMCAmJiBpICE9PSBkaXZpc2lvbnMpIHtcbiAgICAgICAgLy8gYSwgYiwgYyBhbmQgZCBhcmUgdGhlIGluZGljZXMgb2YgdGhlIHZlcnRpY2VzIG9mIGEgcXVhZC4gIHVubGVzc1xuICAgICAgICAvLyB0aGUgY3VycmVudCBzdGFjayBpcyB0aGUgb25lIGNsb3Nlc3QgdG8gdGhlIGNlbnRlciwgaW4gd2hpY2ggY2FzZVxuICAgICAgICAvLyB0aGUgdmVydGljZXMgYSBhbmQgYiBjb25uZWN0IHRvIHRoZSBjZW50ZXIgdmVydGV4LlxuICAgICAgICB2YXIgYSA9IGZpcnN0SW5kZXggKyAoaSArIDEpO1xuICAgICAgICB2YXIgYiA9IGZpcnN0SW5kZXggKyBpO1xuICAgICAgICB2YXIgYyA9IGZpcnN0SW5kZXggKyBpIC0gcG9pbnRzUGVyU3RhY2s7XG4gICAgICAgIHZhciBkID0gZmlyc3RJbmRleCArIChpICsgMSkgLSBwb2ludHNQZXJTdGFjazsgLy8gTWFrZSBhIHF1YWQgb2YgdGhlIHZlcnRpY2VzIGEsIGIsIGMsIGQuXG5cbiAgICAgICAgaW5kaWNlcy5wdXNoKGEsIGIsIGMpO1xuICAgICAgICBpbmRpY2VzLnB1c2goYSwgYywgZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmlyc3RJbmRleCArPSBkaXZpc2lvbnMgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25zLFxuICAgIG5vcm1hbDogbm9ybWFscyxcbiAgICB0ZXhjb29yZDogdGV4Y29vcmRzLFxuICAgIGluZGljZXM6IGluZGljZXNcbiAgfTtcbn1cbi8qKlxuICogY3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgcmFuZ2UgLSAxIGluY2x1c2l2ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSByYW5nZVxuICogQHJldHVybiB7bnVtYmVyfSByYW5kb20gdmFsdWUgYmV0d2VlbiAwIGFuZCByYW5nZSAtIDEgaW5jbHVzaXZlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHJhbmRJbnQocmFuZ2UpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiByYW5nZSB8IDA7XG59XG4vKipcbiAqIFVzZWQgdG8gc3VwcGx5IHJhbmRvbSBjb2xvcnNcbiAqIEBjYWxsYmFjayBSYW5kb21Db2xvckZ1bmNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZHggaW5kZXggb2YgdHJpYW5nbGUvcXVhZCBpZiB1bmluZGV4ZWQgb3IgaW5kZXggb2YgdmVydGV4IGlmIGluZGV4ZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFubmVsIDAgPSByZWQsIDEgPSBncmVlbiwgMiA9IGJsdWUsIDMgPSBhbHBoYVxuICogQHJldHVybiB7bnVtYmVyfSBhIG51bWJlciBmcm9tIDAgdG8gMjU1XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmFuZG9tVmVydGljZXNPcHRpb25zXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3ZlcnRzUGVyQ29sb3JdIERlZmF1bHRzIHRvIDMgZm9yIG5vbi1pbmRleGVkIHZlcnRpY2VzXG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsL3ByaW1pdGl2ZXMuUmFuZG9tQ29sb3JGdW5jfSBbcmFuZF0gQSBmdW5jdGlvbiB0byBnZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXVnbWVudGVkVHlwZWRBcnJheSBvZiByYW5kb20gdmVydGV4IGNvbG9ycy5cbiAqIElmIHRoZSB2ZXJ0aWNlcyBhcmUgaW5kZXhlZCAoaGF2ZSBhbiBpbmRpY2VzIGFycmF5KSB0aGVuIHdpbGxcbiAqIGp1c3QgbWFrZSByYW5kb20gY29sb3JzLiBPdGhlcndpc2UgYXNzdW1lcyB0aGV5IGFyZSB0cmlhbmdsZXNcbiAqIGFuZCBtYWtlcyBvbmUgcmFuZG9tIGNvbG9yIGZvciBldmVyeSAzIHZlcnRpY2VzLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgQXVnbWVudGVkVHlwZWRBcnJheT59IHZlcnRpY2VzIFZlcnRpY2VzIGFzIHJldHVybmVkIGZyb20gb25lIG9mIHRoZSBjcmVhdGVYWFhWZXJ0aWNlcyBmdW5jdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3ByaW1pdGl2ZXMuUmFuZG9tVmVydGljZXNPcHRpb25zfSBbb3B0aW9uc10gb3B0aW9ucy5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLCBBdWdtZW50ZWRUeXBlZEFycmF5Pn0gc2FtZSB2ZXJ0aWNlcyBhcyBwYXNzZWQgaW4gd2l0aCBgY29sb3JgIGFkZGVkLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1ha2VSYW5kb21WZXJ0ZXhDb2xvcnModmVydGljZXMsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBudW1FbGVtZW50cyA9IHZlcnRpY2VzLnBvc2l0aW9uLm51bUVsZW1lbnRzO1xuICB2YXIgdkNvbG9ycyA9IGNyZWF0ZUF1Z21lbnRlZFR5cGVkQXJyYXkoNCwgbnVtRWxlbWVudHMsIFVpbnQ4QXJyYXkpO1xuXG4gIHZhciByYW5kID0gb3B0aW9ucy5yYW5kIHx8IGZ1bmN0aW9uIChuZHgsIGNoYW5uZWwpIHtcbiAgICByZXR1cm4gY2hhbm5lbCA8IDMgPyByYW5kSW50KDI1NikgOiAyNTU7XG4gIH07XG5cbiAgdmVydGljZXMuY29sb3IgPSB2Q29sb3JzO1xuXG4gIGlmICh2ZXJ0aWNlcy5pbmRpY2VzKSB7XG4gICAgLy8ganVzdCBtYWtlIHJhbmRvbSBjb2xvcnMgaWYgaW5kZXhcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtRWxlbWVudHM7ICsraWkpIHtcbiAgICAgIHZDb2xvcnMucHVzaChyYW5kKGlpLCAwKSwgcmFuZChpaSwgMSksIHJhbmQoaWksIDIpLCByYW5kKGlpLCAzKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIG1ha2UgcmFuZG9tIGNvbG9ycyBwZXIgdHJpYW5nbGVcbiAgICB2YXIgbnVtVmVydHNQZXJDb2xvciA9IG9wdGlvbnMudmVydHNQZXJDb2xvciB8fCAzO1xuICAgIHZhciBudW1TZXRzID0gbnVtRWxlbWVudHMgLyBudW1WZXJ0c1BlckNvbG9yO1xuXG4gICAgZm9yICh2YXIgX2lpMiA9IDA7IF9paTIgPCBudW1TZXRzOyArK19paTIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHZhciBjb2xvciA9IFtyYW5kKF9paTIsIDApLCByYW5kKF9paTIsIDEpLCByYW5kKF9paTIsIDIpLCByYW5kKF9paTIsIDMpXTtcblxuICAgICAgZm9yICh2YXIgamogPSAwOyBqaiA8IG51bVZlcnRzUGVyQ29sb3I7ICsramopIHtcbiAgICAgICAgdkNvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVydGljZXM7XG59XG4vKipcbiAqIGNyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzIGZuIHRvIGNyZWF0ZSB2ZXJ0aWNlcyBhbmQgdGhlblxuICogY3JlYXRlcyBhIGJ1ZmZlcnMgZm9yIHRoZW1cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXJGdW5jKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZ2wpIHtcbiAgICB2YXIgYXJyYXlzID0gZm4uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuY3JlYXRlQnVmZmVyc0Zyb21BcnJheXMoZ2wsIGFycmF5cyk7XG4gIH07XG59XG4vKipcbiAqIGNyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGNhbGxzIGZuIHRvIGNyZWF0ZSB2ZXJ0aWNlcyBhbmQgdGhlblxuICogY3JlYXRlcyBhIGJ1ZmZlckluZm8gb2JqZWN0IGZvciB0aGVtXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVySW5mb0Z1bmMoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChnbCkge1xuICAgIHZhciBhcnJheXMgPSBmbi5hcHBseShudWxsLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAgfTtcbn1cblxudmFyIGFycmF5U3BlY1Byb3BlcnR5TmFtZXMgPSBbXCJudW1Db21wb25lbnRzXCIsIFwic2l6ZVwiLCBcInR5cGVcIiwgXCJub3JtYWxpemVcIiwgXCJzdHJpZGVcIiwgXCJvZmZzZXRcIiwgXCJhdHRyaWJcIiwgXCJuYW1lXCIsIFwiYXR0cmliTmFtZVwiXTtcbi8qKlxuICogQ29weSBlbGVtZW50cyBmcm9tIG9uZSBhcnJheSB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHtBcnJheXxUeXBlZEFycmF5fSBzcmMgc291cmNlIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fFR5cGVkQXJyYXl9IGRzdCBkZXN0IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gZHN0TmR4IGluZGV4IGluIGRlc3QgdG8gY29weSBzcmNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb2Zmc2V0XSBvZmZzZXQgdG8gYWRkIHRvIGNvcGllZCB2YWx1ZXNcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29weUVsZW1lbnRzKHNyYywgZHN0LCBkc3ROZHgsIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGxlbmd0aCA9IHNyYy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGxlbmd0aDsgKytpaSkge1xuICAgIGRzdFtkc3ROZHggKyBpaV0gPSBzcmNbaWldICsgb2Zmc2V0O1xuICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIHNhbWUgdGltZVxuICpcbiAqIEBwYXJhbSB7KG51bWJlcltdfEFycmF5QnVmZmVyVmlld3xtb2R1bGU6dHdnbC5GdWxsQXJyYXlTcGVjKX0gc3JjQXJyYXkgYXJyYXkgd2hvJ3MgdHlwZSB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIHNpemUgb2YgbmV3IGFycmF5XG4gKiBAcmV0dXJuIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fG1vZHVsZTp0d2dsLkZ1bGxBcnJheVNwZWMpfSBhcnJheSB3aXRoIHNhbWUgdHlwZSBhcyBzcmNBcnJheVxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZTYW1lVHlwZShzcmNBcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBhcnJheVNyYyA9IGdldEFycmF5KHNyY0FycmF5KTtcbiAgdmFyIG5ld0FycmF5ID0gbmV3IGFycmF5U3JjLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG4gIHZhciBuZXdBcnJheVNwZWMgPSBuZXdBcnJheTsgLy8gSWYgaXQgYXBwZWFycyB0byBoYXZlIGJlZW4gYXVnbWVudGVkIG1ha2UgbmV3IG9uZSBhdWdtZW50ZWRcblxuICBpZiAoYXJyYXlTcmMubnVtQ29tcG9uZW50cyAmJiBhcnJheVNyYy5udW1FbGVtZW50cykge1xuICAgIGF1Z21lbnRUeXBlZEFycmF5KG5ld0FycmF5LCBhcnJheVNyYy5udW1Db21wb25lbnRzKTtcbiAgfSAvLyBJZiBpdCB3YXMgYSBmdWxsIHNwZWMgbWFrZSBuZXcgb25lIGEgZnVsbCBzcGVjXG5cblxuICBpZiAoc3JjQXJyYXkuZGF0YSkge1xuICAgIG5ld0FycmF5U3BlYyA9IHtcbiAgICAgIGRhdGE6IG5ld0FycmF5XG4gICAgfTtcbiAgICBoZWxwZXIuY29weU5hbWVkUHJvcGVydGllcyhhcnJheVNwZWNQcm9wZXJ0eU5hbWVzLCBzcmNBcnJheSwgbmV3QXJyYXlTcGVjKTtcbiAgfVxuXG4gIHJldHVybiBuZXdBcnJheVNwZWM7XG59XG4vKipcbiAqIENvbmNhdGVuYXRlcyBzZXRzIG9mIHZlcnRpY2VzXG4gKlxuICogQXNzdW1lcyB0aGUgdmVydGljZXMgbWF0Y2ggaW4gY29tcG9zaXRpb24uIEZvciBleGFtcGxlXG4gKiBpZiBvbmUgc2V0IG9mIHZlcnRpY2VzIGhhcyBwb3NpdGlvbnMsIG5vcm1hbHMsIGFuZCBpbmRpY2VzXG4gKiBhbGwgc2V0cyBvZiB2ZXJ0aWNlcyBtdXN0IGhhdmUgcG9zaXRpb25zLCBub3JtYWxzLCBhbmQgaW5kaWNlc1xuICogYW5kIG9mIHRoZSBzYW1lIHR5cGUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIGNvbnN0IGN1YmVWZXJ0aWNlcyA9IHR3Z2wucHJpbWl0aXZlcy5jcmVhdGVDdWJlVmVydGljZXMoMik7XG4gKiAgICAgIGNvbnN0IHNwaGVyZVZlcnRpY2VzID0gdHdnbC5wcmltaXRpdmVzLmNyZWF0ZVNwaGVyZVZlcnRpY2VzKDEsIDEwLCAxMCk7XG4gKiAgICAgIC8vIG1vdmUgdGhlIHNwaGVyZSAyIHVuaXRzIHVwXG4gKiAgICAgIHR3Z2wucHJpbWl0aXZlcy5yZW9yaWVudFZlcnRpY2VzKFxuICogICAgICAgICAgc3BoZXJlVmVydGljZXMsIHR3Z2wubTQudHJhbnNsYXRpb24oWzAsIDIsIDBdKSk7XG4gKiAgICAgIC8vIG1lcmdlIHRoZSBzcGhlcmUgd2l0aCB0aGUgY3ViZVxuICogICAgICBjb25zdCBjdWJlU3BoZXJlVmVydGljZXMgPSB0d2dsLnByaW1pdGl2ZXMuY29uY2F0VmVydGljZXMoXG4gKiAgICAgICAgICBbY3ViZVZlcnRpY2VzLCBzcGhlcmVWZXJ0aWNlc10pO1xuICogICAgICAvLyB0dXJuIHRoZW0gaW50byBXZWJHTCBidWZmZXJzIGFuZCBhdHRyaWIgZGF0YVxuICogICAgICBjb25zdCBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgY3ViZVNwaGVyZVZlcnRpY2VzKTtcbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c1tdfSBhcnJheXMgQXJyYXkgb2YgYXJyYXlzIG9mIHZlcnRpY2VzXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5BcnJheXN9IFRoZSBjb25jYXRlbmF0ZWQgdmVydGljZXMuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJpbWl0aXZlc1xuICovXG5cblxuZnVuY3Rpb24gY29uY2F0VmVydGljZXMoYXJyYXlPZkFycmF5cykge1xuICB2YXIgbmFtZXMgPSB7fTtcbiAgdmFyIGJhc2VOYW1lOyAvLyBnZXQgbmFtZXMgb2YgYWxsIGFycmF5cy5cbiAgLy8gYW5kIG51bUVsZW1lbnRzIGZvciBlYWNoIHNldCBvZiB2ZXJ0aWNlc1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGlpKSB7XG4gICAgdmFyIGFycmF5cyA9IGFycmF5T2ZBcnJheXNbaWldO1xuICAgIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgaWYgKCFuYW1lc1tuYW1lXSkge1xuICAgICAgICBuYW1lc1tuYW1lXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJhc2VOYW1lICYmIG5hbWUgIT09ICdpbmRpY2VzJykge1xuICAgICAgICBiYXNlTmFtZSA9IG5hbWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcnJheUluZm8gPSBhcnJheXNbbmFtZV07XG4gICAgICB2YXIgbnVtQ29tcG9uZW50cyA9IGdldE51bUNvbXBvbmVudHMoYXJyYXlJbmZvLCBuYW1lKTtcbiAgICAgIHZhciBhcnJheSA9IGdldEFycmF5KGFycmF5SW5mbyk7XG4gICAgICB2YXIgbnVtRWxlbWVudHMgPSBhcnJheS5sZW5ndGggLyBudW1Db21wb25lbnRzO1xuICAgICAgbmFtZXNbbmFtZV0ucHVzaChudW1FbGVtZW50cyk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGFycmF5T2ZBcnJheXMubGVuZ3RoOyArK2lpKSB7XG4gICAgX2xvb3AoaWkpO1xuICB9IC8vIGNvbXB1dGUgbGVuZ3RoIG9mIGNvbWJpbmVkIGFycmF5XG4gIC8vIGFuZCByZXR1cm4gb25lIGZvciByZWZlcmVuY2VcblxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aE9mQ29tYmluZWRBcnJheXMobmFtZSkge1xuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIHZhciBhcnJheVNwZWM7XG5cbiAgICBmb3IgKHZhciBfaWkzID0gMDsgX2lpMyA8IGFycmF5T2ZBcnJheXMubGVuZ3RoOyArK19paTMpIHtcbiAgICAgIHZhciBhcnJheXMgPSBhcnJheU9mQXJyYXlzW19paTNdO1xuICAgICAgdmFyIGFycmF5SW5mbyA9IGFycmF5c1tuYW1lXTtcbiAgICAgIHZhciBhcnJheSA9IGdldEFycmF5KGFycmF5SW5mbyk7XG4gICAgICBsZW5ndGggKz0gYXJyYXkubGVuZ3RoO1xuXG4gICAgICBpZiAoIWFycmF5U3BlYyB8fCBhcnJheUluZm8uZGF0YSkge1xuICAgICAgICBhcnJheVNwZWMgPSBhcnJheUluZm87XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgc3BlYzogYXJyYXlTcGVjXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcHlBcnJheXNUb05ld0FycmF5KG5hbWUsIGJhc2UsIG5ld0FycmF5KSB7XG4gICAgdmFyIGJhc2VJbmRleCA9IDA7XG4gICAgdmFyIG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKHZhciBfaWk0ID0gMDsgX2lpNCA8IGFycmF5T2ZBcnJheXMubGVuZ3RoOyArK19paTQpIHtcbiAgICAgIHZhciBhcnJheXMgPSBhcnJheU9mQXJyYXlzW19paTRdO1xuICAgICAgdmFyIGFycmF5SW5mbyA9IGFycmF5c1tuYW1lXTtcbiAgICAgIHZhciBhcnJheSA9IGdldEFycmF5KGFycmF5SW5mbyk7XG5cbiAgICAgIGlmIChuYW1lID09PSAnaW5kaWNlcycpIHtcbiAgICAgICAgY29weUVsZW1lbnRzKGFycmF5LCBuZXdBcnJheSwgb2Zmc2V0LCBiYXNlSW5kZXgpO1xuICAgICAgICBiYXNlSW5kZXggKz0gYmFzZVtfaWk0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvcHlFbGVtZW50cyhhcnJheSwgbmV3QXJyYXksIG9mZnNldCk7XG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSBuYW1lc1tiYXNlTmFtZV07XG4gIHZhciBuZXdBcnJheXMgPSB7fTtcbiAgT2JqZWN0LmtleXMobmFtZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgaW5mbyA9IGdldExlbmd0aE9mQ29tYmluZWRBcnJheXMobmFtZSk7XG4gICAgdmFyIG5ld0FycmF5U3BlYyA9IGNyZWF0ZUFycmF5T2ZTYW1lVHlwZShpbmZvLnNwZWMsIGluZm8ubGVuZ3RoKTtcbiAgICBjb3B5QXJyYXlzVG9OZXdBcnJheShuYW1lLCBiYXNlLCBnZXRBcnJheShuZXdBcnJheVNwZWMpKTtcbiAgICBuZXdBcnJheXNbbmFtZV0gPSBuZXdBcnJheVNwZWM7XG4gIH0pO1xuICByZXR1cm4gbmV3QXJyYXlzO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgZHVwbGljYXRlIHNldCBvZiB2ZXJ0aWNlc1xuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjYWxsaW5nIHJlb3JpZW50VmVydGljZXMgd2hlbiB5b3VcbiAqIGFsc28gd2FudCB0byBrZWVwIHRoZSBvcmlnaW5hbCBhdmFpbGFibGVcbiAqXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkFycmF5c30gYXJyYXlzIG9mIHZlcnRpY2VzXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5BcnJheXN9IFRoZSBkdXBsaWNhdGVkIHZlcnRpY2VzLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3ByaW1pdGl2ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGR1cGxpY2F0ZVZlcnRpY2VzKGFycmF5cykge1xuICB2YXIgbmV3QXJyYXlzID0ge307XG4gIE9iamVjdC5rZXlzKGFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBhcnJheVNwZWMgPSBhcnJheXNbbmFtZV07XG4gICAgdmFyIHNyY0FycmF5ID0gZ2V0QXJyYXkoYXJyYXlTcGVjKTtcbiAgICB2YXIgbmV3QXJyYXlTcGVjID0gY3JlYXRlQXJyYXlPZlNhbWVUeXBlKGFycmF5U3BlYywgc3JjQXJyYXkubGVuZ3RoKTtcbiAgICBjb3B5RWxlbWVudHMoc3JjQXJyYXksIGdldEFycmF5KG5ld0FycmF5U3BlYyksIDApO1xuICAgIG5ld0FycmF5c1tuYW1lXSA9IG5ld0FycmF5U3BlYztcbiAgfSk7XG4gIHJldHVybiBuZXdBcnJheXM7XG59XG5cbnZhciBjcmVhdGUzREZCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlM0RGVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGUzREZCdWZmZXJJbmZvID0gY3JlYXRlM0RGQnVmZmVySW5mbztcbnZhciBjcmVhdGUzREZCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGUzREZWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZTNERkJ1ZmZlcnMgPSBjcmVhdGUzREZCdWZmZXJzO1xudmFyIGNyZWF0ZUN1YmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlQ3ViZVZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlckluZm8gPSBjcmVhdGVDdWJlQnVmZmVySW5mbztcbnZhciBjcmVhdGVDdWJlQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlQ3ViZVZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlQ3ViZUJ1ZmZlcnMgPSBjcmVhdGVDdWJlQnVmZmVycztcbnZhciBjcmVhdGVQbGFuZUJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnVuYyhjcmVhdGVQbGFuZVZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlUGxhbmVCdWZmZXJJbmZvID0gY3JlYXRlUGxhbmVCdWZmZXJJbmZvO1xudmFyIGNyZWF0ZVBsYW5lQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlUGxhbmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVBsYW5lQnVmZmVycyA9IGNyZWF0ZVBsYW5lQnVmZmVycztcbnZhciBjcmVhdGVTcGhlcmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlU3BoZXJlVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVTcGhlcmVCdWZmZXJJbmZvID0gY3JlYXRlU3BoZXJlQnVmZmVySW5mbztcbnZhciBjcmVhdGVTcGhlcmVCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVTcGhlcmVWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVNwaGVyZUJ1ZmZlcnMgPSBjcmVhdGVTcGhlcmVCdWZmZXJzO1xudmFyIGNyZWF0ZVRydW5jYXRlZENvbmVCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlckluZm8gPSBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVySW5mbztcbnZhciBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlVHJ1bmNhdGVkQ29uZVZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlVHJ1bmNhdGVkQ29uZUJ1ZmZlcnMgPSBjcmVhdGVUcnVuY2F0ZWRDb25lQnVmZmVycztcbnZhciBjcmVhdGVYWVF1YWRCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlWFlRdWFkVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVYWVF1YWRCdWZmZXJJbmZvID0gY3JlYXRlWFlRdWFkQnVmZmVySW5mbztcbnZhciBjcmVhdGVYWVF1YWRCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVYWVF1YWRWZXJ0aWNlcyk7XG5leHBvcnRzLmNyZWF0ZVhZUXVhZEJ1ZmZlcnMgPSBjcmVhdGVYWVF1YWRCdWZmZXJzO1xudmFyIGNyZWF0ZUNyZXNjZW50QnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZUNyZXNjZW50VmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVDcmVzY2VudEJ1ZmZlckluZm8gPSBjcmVhdGVDcmVzY2VudEJ1ZmZlckluZm87XG52YXIgY3JlYXRlQ3Jlc2NlbnRCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVDcmVzY2VudFZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlQ3Jlc2NlbnRCdWZmZXJzID0gY3JlYXRlQ3Jlc2NlbnRCdWZmZXJzO1xudmFyIGNyZWF0ZUN5bGluZGVyQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZUN5bGluZGVyVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVDeWxpbmRlckJ1ZmZlckluZm8gPSBjcmVhdGVDeWxpbmRlckJ1ZmZlckluZm87XG52YXIgY3JlYXRlQ3lsaW5kZXJCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVDeWxpbmRlclZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlQ3lsaW5kZXJCdWZmZXJzID0gY3JlYXRlQ3lsaW5kZXJCdWZmZXJzO1xudmFyIGNyZWF0ZVRvcnVzQnVmZmVySW5mbyA9IGNyZWF0ZUJ1ZmZlckluZm9GdW5jKGNyZWF0ZVRvcnVzVmVydGljZXMpO1xuZXhwb3J0cy5jcmVhdGVUb3J1c0J1ZmZlckluZm8gPSBjcmVhdGVUb3J1c0J1ZmZlckluZm87XG52YXIgY3JlYXRlVG9ydXNCdWZmZXJzID0gY3JlYXRlQnVmZmVyRnVuYyhjcmVhdGVUb3J1c1ZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlVG9ydXNCdWZmZXJzID0gY3JlYXRlVG9ydXNCdWZmZXJzO1xudmFyIGNyZWF0ZURpc2NCdWZmZXJJbmZvID0gY3JlYXRlQnVmZmVySW5mb0Z1bmMoY3JlYXRlRGlzY1ZlcnRpY2VzKTtcbmV4cG9ydHMuY3JlYXRlRGlzY0J1ZmZlckluZm8gPSBjcmVhdGVEaXNjQnVmZmVySW5mbztcbnZhciBjcmVhdGVEaXNjQnVmZmVycyA9IGNyZWF0ZUJ1ZmZlckZ1bmMoY3JlYXRlRGlzY1ZlcnRpY2VzKTsgLy8gdGhlc2Ugd2VyZSBtaXMtc3BlbGxlZCB1bnRpbCA0LjEyXG5cbmV4cG9ydHMuY3JlYXRlRGlzY0J1ZmZlcnMgPSBjcmVhdGVEaXNjQnVmZmVycztcbnZhciBjcmVhdGVDcmVzZW50QnVmZmVySW5mbyA9IGNyZWF0ZUNyZXNjZW50QnVmZmVySW5mbztcbmV4cG9ydHMuY3JlYXRlQ3Jlc2VudEJ1ZmZlckluZm8gPSBjcmVhdGVDcmVzZW50QnVmZmVySW5mbztcbnZhciBjcmVhdGVDcmVzZW50QnVmZmVycyA9IGNyZWF0ZUNyZXNjZW50QnVmZmVycztcbmV4cG9ydHMuY3JlYXRlQ3Jlc2VudEJ1ZmZlcnMgPSBjcmVhdGVDcmVzZW50QnVmZmVycztcbnZhciBjcmVhdGVDcmVzZW50VmVydGljZXMgPSBjcmVhdGVDcmVzY2VudFZlcnRpY2VzO1xuZXhwb3J0cy5jcmVhdGVDcmVzZW50VmVydGljZXMgPSBjcmVhdGVDcmVzZW50VmVydGljZXM7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Byb2dyYW1zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Byb2dyYW1zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlQXR0cmlidXRlU2V0dGVycyA9IGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnM7XG5leHBvcnRzLmNyZWF0ZVByb2dyYW0gPSBjcmVhdGVQcm9ncmFtO1xuZXhwb3J0cy5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMgPSBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHM7XG5leHBvcnRzLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyA9IGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcztcbmV4cG9ydHMuY3JlYXRlUHJvZ3JhbUluZm8gPSBjcmVhdGVQcm9ncmFtSW5mbztcbmV4cG9ydHMuY3JlYXRlUHJvZ3JhbUluZm9Gcm9tUHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW07XG5leHBvcnRzLmNyZWF0ZVVuaWZvcm1TZXR0ZXJzID0gY3JlYXRlVW5pZm9ybVNldHRlcnM7XG5leHBvcnRzLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbSA9IGNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbTtcbmV4cG9ydHMuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtID0gY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtO1xuZXhwb3J0cy5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvID0gY3JlYXRlVW5pZm9ybUJsb2NrSW5mbztcbmV4cG9ydHMuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2sgPSBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFjaztcbmV4cG9ydHMuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvO1xuZXhwb3J0cy5iaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbztcbmV4cG9ydHMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5leHBvcnRzLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzID0gc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXM7XG5leHBvcnRzLnNldFVuaWZvcm1zID0gc2V0VW5pZm9ybXM7XG5leHBvcnRzLnNldFVuaWZvcm1CbG9jayA9IHNldFVuaWZvcm1CbG9jaztcbmV4cG9ydHMuc2V0QmxvY2tVbmlmb3JtcyA9IHNldEJsb2NrVW5pZm9ybXM7XG5leHBvcnRzLmJpbmRVbmlmb3JtQmxvY2sgPSBiaW5kVW5pZm9ybUJsb2NrO1xuZXhwb3J0cy5zZXRVbmlmb3Jtc0FuZEJpbmRUZXh0dXJlcyA9IHZvaWQgMDtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscy5qcyAqLyBcIi4vc3JjL3V0aWxzLmpzXCIpKTtcblxudmFyIGhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVyLmpzICovIFwiLi9zcmMvaGVscGVyLmpzXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcbiAqIExvdyBsZXZlbCBzaGFkZXIgcHJvZ3JhbSByZWxhdGVkIGZ1bmN0aW9uc1xuICpcbiAqIFlvdSBzaG91bGQgZ2VuZXJhbGx5IG5vdCBuZWVkIHRvIHVzZSB0aGVzZSBmdW5jdGlvbnMuIFRoZXkgYXJlIHByb3ZpZGVkXG4gKiBmb3IgdGhvc2UgY2FzZXMgd2hlcmUgeW91J3JlIGRvaW5nIHNvbWV0aGluZyBvdXQgb2YgdGhlIG9yZGluYXJ5XG4gKiBhbmQgeW91IG5lZWQgbG93ZXIgbGV2ZWwgYWNjZXNzLlxuICpcbiAqIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLnByb2dyYW1zYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvcHJvZ3JhbXNcbiAqL1xudmFyIGVycm9yID0gaGVscGVyLmVycm9yO1xudmFyIHdhcm4gPSBoZWxwZXIud2FybjtcblxuZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQpIHtcbiAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgOiBudWxsO1xufVxuXG52YXIgVEVYVFVSRTAgPSAweDg0YzA7XG52YXIgRFlOQU1JQ19EUkFXID0gMHg4OGU4O1xudmFyIEFSUkFZX0JVRkZFUiA9IDB4ODg5MjtcbnZhciBFTEVNRU5UX0FSUkFZX0JVRkZFUiA9IDB4ODg5MztcbnZhciBVTklGT1JNX0JVRkZFUiA9IDB4OGExMTtcbnZhciBUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSID0gMHg4YzhlO1xudmFyIFRSQU5TRk9STV9GRUVEQkFDSyA9IDB4OGUyMjtcbnZhciBDT01QSUxFX1NUQVRVUyA9IDB4OGI4MTtcbnZhciBMSU5LX1NUQVRVUyA9IDB4OGI4MjtcbnZhciBGUkFHTUVOVF9TSEFERVIgPSAweDhiMzA7XG52YXIgVkVSVEVYX1NIQURFUiA9IDB4OGIzMTtcbnZhciBTRVBBUkFURV9BVFRSSUJTID0gMHg4YzhkO1xudmFyIEFDVElWRV9VTklGT1JNUyA9IDB4OGI4NjtcbnZhciBBQ1RJVkVfQVRUUklCVVRFUyA9IDB4OGI4OTtcbnZhciBUUkFOU0ZPUk1fRkVFREJBQ0tfVkFSWUlOR1MgPSAweDhjODM7XG52YXIgQUNUSVZFX1VOSUZPUk1fQkxPQ0tTID0gMHg4YTM2O1xudmFyIFVOSUZPUk1fQkxPQ0tfUkVGRVJFTkNFRF9CWV9WRVJURVhfU0hBREVSID0gMHg4YTQ0O1xudmFyIFVOSUZPUk1fQkxPQ0tfUkVGRVJFTkNFRF9CWV9GUkFHTUVOVF9TSEFERVIgPSAweDhhNDY7XG52YXIgVU5JRk9STV9CTE9DS19EQVRBX1NJWkUgPSAweDhhNDA7XG52YXIgVU5JRk9STV9CTE9DS19BQ1RJVkVfVU5JRk9STV9JTkRJQ0VTID0gMHg4YTQzO1xudmFyIEZMT0FUID0gMHgxNDA2O1xudmFyIEZMT0FUX1ZFQzIgPSAweDhCNTA7XG52YXIgRkxPQVRfVkVDMyA9IDB4OEI1MTtcbnZhciBGTE9BVF9WRUM0ID0gMHg4QjUyO1xudmFyIElOVCA9IDB4MTQwNDtcbnZhciBJTlRfVkVDMiA9IDB4OEI1MztcbnZhciBJTlRfVkVDMyA9IDB4OEI1NDtcbnZhciBJTlRfVkVDNCA9IDB4OEI1NTtcbnZhciBCT09MID0gMHg4QjU2O1xudmFyIEJPT0xfVkVDMiA9IDB4OEI1NztcbnZhciBCT09MX1ZFQzMgPSAweDhCNTg7XG52YXIgQk9PTF9WRUM0ID0gMHg4QjU5O1xudmFyIEZMT0FUX01BVDIgPSAweDhCNUE7XG52YXIgRkxPQVRfTUFUMyA9IDB4OEI1QjtcbnZhciBGTE9BVF9NQVQ0ID0gMHg4QjVDO1xudmFyIFNBTVBMRVJfMkQgPSAweDhCNUU7XG52YXIgU0FNUExFUl9DVUJFID0gMHg4QjYwO1xudmFyIFNBTVBMRVJfM0QgPSAweDhCNUY7XG52YXIgU0FNUExFUl8yRF9TSEFET1cgPSAweDhCNjI7XG52YXIgRkxPQVRfTUFUMngzID0gMHg4QjY1O1xudmFyIEZMT0FUX01BVDJ4NCA9IDB4OEI2NjtcbnZhciBGTE9BVF9NQVQzeDIgPSAweDhCNjc7XG52YXIgRkxPQVRfTUFUM3g0ID0gMHg4QjY4O1xudmFyIEZMT0FUX01BVDR4MiA9IDB4OEI2OTtcbnZhciBGTE9BVF9NQVQ0eDMgPSAweDhCNkE7XG52YXIgU0FNUExFUl8yRF9BUlJBWSA9IDB4OERDMTtcbnZhciBTQU1QTEVSXzJEX0FSUkFZX1NIQURPVyA9IDB4OERDNDtcbnZhciBTQU1QTEVSX0NVQkVfU0hBRE9XID0gMHg4REM1O1xudmFyIFVOU0lHTkVEX0lOVCA9IDB4MTQwNTtcbnZhciBVTlNJR05FRF9JTlRfVkVDMiA9IDB4OERDNjtcbnZhciBVTlNJR05FRF9JTlRfVkVDMyA9IDB4OERDNztcbnZhciBVTlNJR05FRF9JTlRfVkVDNCA9IDB4OERDODtcbnZhciBJTlRfU0FNUExFUl8yRCA9IDB4OERDQTtcbnZhciBJTlRfU0FNUExFUl8zRCA9IDB4OERDQjtcbnZhciBJTlRfU0FNUExFUl9DVUJFID0gMHg4RENDO1xudmFyIElOVF9TQU1QTEVSXzJEX0FSUkFZID0gMHg4RENGO1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSXzJEID0gMHg4REQyO1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSXzNEID0gMHg4REQzO1xudmFyIFVOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkUgPSAweDhERDQ7XG52YXIgVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVkgPSAweDhERDc7XG52YXIgVEVYVFVSRV8yRCA9IDB4MERFMTtcbnZhciBURVhUVVJFX0NVQkVfTUFQID0gMHg4NTEzO1xudmFyIFRFWFRVUkVfM0QgPSAweDgwNkY7XG52YXIgVEVYVFVSRV8yRF9BUlJBWSA9IDB4OEMxQTtcbnZhciB0eXBlTWFwID0ge307XG4vKipcbiAqIFJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgYmluZCBwb2ludCBmb3IgYSBnaXZlbiBzYW1wbGVyIHR5cGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRCaW5kUG9pbnRGb3JTYW1wbGVyVHlwZShnbCwgdHlwZSkge1xuICByZXR1cm4gdHlwZU1hcFt0eXBlXS5iaW5kUG9pbnQ7XG59IC8vIFRoaXMga2luZCBvZiBzdWNrcyEgSWYgeW91IGNvdWxkIGNvbXBvc2UgZnVuY3Rpb25zIGFzIGluIGB2YXIgZm4gPSBnbFtuYW1lXTtgXG4vLyB0aGlzIGNvZGUgY291bGQgYmUgYSBsb3Qgc21hbGxlciBidXQgdGhhdCBpcyBzYWRseSByZWFsbHkgc2xvdyAoVF9UKVxuXG5cbmZ1bmN0aW9uIGZsb2F0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMWYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdEFycmF5U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMWZ2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRWZWMyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMmZ2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRWZWMzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtM2Z2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRWZWM0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtNGZ2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtMWkobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRBcnJheVNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludFZlYzJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0yaXYobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRWZWMzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtM2l2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50VmVjNFNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybTRpdihsb2NhdGlvbiwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVpbnRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0xdWkobG9jYXRpb24sIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50QXJyYXlTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0xdWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludFZlYzJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0ydWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludFZlYzNTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm0zdWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdWludFZlYzRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm00dWl2KGxvY2F0aW9uLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQyU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0M1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDNmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQyM1NldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDJ4M2Z2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0MzJTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgzeDJmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDI0U2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4Mng0ZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxvYXRNYXQ0MlNldHRlcihnbCwgbG9jYXRpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDR4MmZ2KGxvY2F0aW9uLCBmYWxzZSwgdik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsb2F0TWF0MzRTZXR0ZXIoZ2wsIGxvY2F0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIGdsLnVuaWZvcm1NYXRyaXgzeDRmdihsb2NhdGlvbiwgZmFsc2UsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbG9hdE1hdDQzU2V0dGVyKGdsLCBsb2NhdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICBnbC51bmlmb3JtTWF0cml4NHgzZnYobG9jYXRpb24sIGZhbHNlLCB2KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2FtcGxlclNldHRlcihnbCwgdHlwZSwgdW5pdCwgbG9jYXRpb24pIHtcbiAgdmFyIGJpbmRQb2ludCA9IGdldEJpbmRQb2ludEZvclNhbXBsZXJUeXBlKGdsLCB0eXBlKTtcbiAgcmV0dXJuIHV0aWxzLmlzV2ViR0wyKGdsKSA/IGZ1bmN0aW9uICh0ZXh0dXJlT3JQYWlyKSB7XG4gICAgdmFyIHRleHR1cmU7XG4gICAgdmFyIHNhbXBsZXI7XG5cbiAgICBpZiAoaGVscGVyLmlzVGV4dHVyZShnbCwgdGV4dHVyZU9yUGFpcikpIHtcbiAgICAgIHRleHR1cmUgPSB0ZXh0dXJlT3JQYWlyO1xuICAgICAgc2FtcGxlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHR1cmUgPSB0ZXh0dXJlT3JQYWlyLnRleHR1cmU7XG4gICAgICBzYW1wbGVyID0gdGV4dHVyZU9yUGFpci5zYW1wbGVyO1xuICAgIH1cblxuICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdW5pdCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShURVhUVVJFMCArIHVuaXQpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGJpbmRQb2ludCwgdGV4dHVyZSk7XG4gICAgZ2wuYmluZFNhbXBsZXIodW5pdCwgc2FtcGxlcik7XG4gIH0gOiBmdW5jdGlvbiAodGV4dHVyZSkge1xuICAgIGdsLnVuaWZvcm0xaShsb2NhdGlvbiwgdW5pdCk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShURVhUVVJFMCArIHVuaXQpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGJpbmRQb2ludCwgdGV4dHVyZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNhbXBsZXJBcnJheVNldHRlcihnbCwgdHlwZSwgdW5pdCwgbG9jYXRpb24sIHNpemUpIHtcbiAgdmFyIGJpbmRQb2ludCA9IGdldEJpbmRQb2ludEZvclNhbXBsZXJUeXBlKGdsLCB0eXBlKTtcbiAgdmFyIHVuaXRzID0gbmV3IEludDMyQXJyYXkoc2l6ZSk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IHNpemU7ICsraWkpIHtcbiAgICB1bml0c1tpaV0gPSB1bml0ICsgaWk7XG4gIH1cblxuICByZXR1cm4gdXRpbHMuaXNXZWJHTDIoZ2wpID8gZnVuY3Rpb24gKHRleHR1cmVzKSB7XG4gICAgZ2wudW5pZm9ybTFpdihsb2NhdGlvbiwgdW5pdHMpO1xuICAgIHRleHR1cmVzLmZvckVhY2goZnVuY3Rpb24gKHRleHR1cmVPclBhaXIsIGluZGV4KSB7XG4gICAgICBnbC5hY3RpdmVUZXh0dXJlKFRFWFRVUkUwICsgdW5pdHNbaW5kZXhdKTtcbiAgICAgIHZhciB0ZXh0dXJlO1xuICAgICAgdmFyIHNhbXBsZXI7XG5cbiAgICAgIGlmIChoZWxwZXIuaXNUZXh0dXJlKGdsLCB0ZXh0dXJlT3JQYWlyKSkge1xuICAgICAgICB0ZXh0dXJlID0gdGV4dHVyZU9yUGFpcjtcbiAgICAgICAgc2FtcGxlciA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0dXJlID0gdGV4dHVyZU9yUGFpci50ZXh0dXJlO1xuICAgICAgICBzYW1wbGVyID0gdGV4dHVyZU9yUGFpci5zYW1wbGVyO1xuICAgICAgfVxuXG4gICAgICBnbC5iaW5kU2FtcGxlcih1bml0LCBzYW1wbGVyKTtcbiAgICAgIGdsLmJpbmRUZXh0dXJlKGJpbmRQb2ludCwgdGV4dHVyZSk7XG4gICAgfSk7XG4gIH0gOiBmdW5jdGlvbiAodGV4dHVyZXMpIHtcbiAgICBnbC51bmlmb3JtMWl2KGxvY2F0aW9uLCB1bml0cyk7XG4gICAgdGV4dHVyZXMuZm9yRWFjaChmdW5jdGlvbiAodGV4dHVyZSwgaW5kZXgpIHtcbiAgICAgIGdsLmFjdGl2ZVRleHR1cmUoVEVYVFVSRTAgKyB1bml0c1tpbmRleF0pO1xuICAgICAgZ2wuYmluZFRleHR1cmUoYmluZFBvaW50LCB0ZXh0dXJlKTtcbiAgICB9KTtcbiAgfTtcbn1cblxudHlwZU1hcFtGTE9BVF0gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogNCxcbiAgc2V0dGVyOiBmbG9hdFNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IGZsb2F0QXJyYXlTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX1ZFQzJdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDgsXG4gIHNldHRlcjogZmxvYXRWZWMyU2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9WRUMzXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiAxMixcbiAgc2V0dGVyOiBmbG9hdFZlYzNTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX1ZFQzRdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDE2LFxuICBzZXR0ZXI6IGZsb2F0VmVjNFNldHRlclxufTtcbnR5cGVNYXBbSU5UXSA9IHtcbiAgVHlwZTogSW50MzJBcnJheSxcbiAgc2l6ZTogNCxcbiAgc2V0dGVyOiBpbnRTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBpbnRBcnJheVNldHRlclxufTtcbnR5cGVNYXBbSU5UX1ZFQzJdID0ge1xuICBUeXBlOiBJbnQzMkFycmF5LFxuICBzaXplOiA4LFxuICBzZXR0ZXI6IGludFZlYzJTZXR0ZXJcbn07XG50eXBlTWFwW0lOVF9WRUMzXSA9IHtcbiAgVHlwZTogSW50MzJBcnJheSxcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogaW50VmVjM1NldHRlclxufTtcbnR5cGVNYXBbSU5UX1ZFQzRdID0ge1xuICBUeXBlOiBJbnQzMkFycmF5LFxuICBzaXplOiAxNixcbiAgc2V0dGVyOiBpbnRWZWM0U2V0dGVyXG59O1xudHlwZU1hcFtVTlNJR05FRF9JTlRdID0ge1xuICBUeXBlOiBVaW50MzJBcnJheSxcbiAgc2l6ZTogNCxcbiAgc2V0dGVyOiB1aW50U2V0dGVyLFxuICBhcnJheVNldHRlcjogdWludEFycmF5U2V0dGVyXG59O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDMl0gPSB7XG4gIFR5cGU6IFVpbnQzMkFycmF5LFxuICBzaXplOiA4LFxuICBzZXR0ZXI6IHVpbnRWZWMyU2V0dGVyXG59O1xudHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDM10gPSB7XG4gIFR5cGU6IFVpbnQzMkFycmF5LFxuICBzaXplOiAxMixcbiAgc2V0dGVyOiB1aW50VmVjM1NldHRlclxufTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1ZFQzRdID0ge1xuICBUeXBlOiBVaW50MzJBcnJheSxcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogdWludFZlYzRTZXR0ZXJcbn07XG50eXBlTWFwW0JPT0xdID0ge1xuICBUeXBlOiBVaW50MzJBcnJheSxcbiAgc2l6ZTogNCxcbiAgc2V0dGVyOiBpbnRTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBpbnRBcnJheVNldHRlclxufTtcbnR5cGVNYXBbQk9PTF9WRUMyXSA9IHtcbiAgVHlwZTogVWludDMyQXJyYXksXG4gIHNpemU6IDgsXG4gIHNldHRlcjogaW50VmVjMlNldHRlclxufTtcbnR5cGVNYXBbQk9PTF9WRUMzXSA9IHtcbiAgVHlwZTogVWludDMyQXJyYXksXG4gIHNpemU6IDEyLFxuICBzZXR0ZXI6IGludFZlYzNTZXR0ZXJcbn07XG50eXBlTWFwW0JPT0xfVkVDNF0gPSB7XG4gIFR5cGU6IFVpbnQzMkFycmF5LFxuICBzaXplOiAxNixcbiAgc2V0dGVyOiBpbnRWZWM0U2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9NQVQyXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiAxNixcbiAgc2V0dGVyOiBmbG9hdE1hdDJTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX01BVDNdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDM2LFxuICBzZXR0ZXI6IGZsb2F0TWF0M1NldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfTUFUNF0gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogNjQsXG4gIHNldHRlcjogZmxvYXRNYXQ0U2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9NQVQyeDNdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDI0LFxuICBzZXR0ZXI6IGZsb2F0TWF0MjNTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX01BVDJ4NF0gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogMzIsXG4gIHNldHRlcjogZmxvYXRNYXQyNFNldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfTUFUM3gyXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiAyNCxcbiAgc2V0dGVyOiBmbG9hdE1hdDMyU2V0dGVyXG59O1xudHlwZU1hcFtGTE9BVF9NQVQzeDRdID0ge1xuICBUeXBlOiBGbG9hdDMyQXJyYXksXG4gIHNpemU6IDQ4LFxuICBzZXR0ZXI6IGZsb2F0TWF0MzRTZXR0ZXJcbn07XG50eXBlTWFwW0ZMT0FUX01BVDR4Ml0gPSB7XG4gIFR5cGU6IEZsb2F0MzJBcnJheSxcbiAgc2l6ZTogMzIsXG4gIHNldHRlcjogZmxvYXRNYXQ0MlNldHRlclxufTtcbnR5cGVNYXBbRkxPQVRfTUFUNHgzXSA9IHtcbiAgVHlwZTogRmxvYXQzMkFycmF5LFxuICBzaXplOiA0OCxcbiAgc2V0dGVyOiBmbG9hdE1hdDQzU2V0dGVyXG59O1xudHlwZU1hcFtTQU1QTEVSXzJEXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRcbn07XG50eXBlTWFwW1NBTVBMRVJfQ1VCRV0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFX0NVQkVfTUFQXG59O1xudHlwZU1hcFtTQU1QTEVSXzNEXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfM0Rcbn07XG50eXBlTWFwW1NBTVBMRVJfMkRfU0hBRE9XXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRcbn07XG50eXBlTWFwW1NBTVBMRVJfMkRfQVJSQVldID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV8yRF9BUlJBWVxufTtcbnR5cGVNYXBbU0FNUExFUl8yRF9BUlJBWV9TSEFET1ddID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV8yRF9BUlJBWVxufTtcbnR5cGVNYXBbU0FNUExFUl9DVUJFX1NIQURPV10gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFX0NVQkVfTUFQXG59O1xudHlwZU1hcFtJTlRfU0FNUExFUl8yRF0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzJEXG59O1xudHlwZU1hcFtJTlRfU0FNUExFUl8zRF0gPSB7XG4gIFR5cGU6IG51bGwsXG4gIHNpemU6IDAsXG4gIHNldHRlcjogc2FtcGxlclNldHRlcixcbiAgYXJyYXlTZXR0ZXI6IHNhbXBsZXJBcnJheVNldHRlcixcbiAgYmluZFBvaW50OiBURVhUVVJFXzNEXG59O1xudHlwZU1hcFtJTlRfU0FNUExFUl9DVUJFXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfQ1VCRV9NQVBcbn07XG50eXBlTWFwW0lOVF9TQU1QTEVSXzJEX0FSUkFZXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRfQVJSQVlcbn07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSXzJEXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfMkRcbn07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSXzNEXSA9IHtcbiAgVHlwZTogbnVsbCxcbiAgc2l6ZTogMCxcbiAgc2V0dGVyOiBzYW1wbGVyU2V0dGVyLFxuICBhcnJheVNldHRlcjogc2FtcGxlckFycmF5U2V0dGVyLFxuICBiaW5kUG9pbnQ6IFRFWFRVUkVfM0Rcbn07XG50eXBlTWFwW1VOU0lHTkVEX0lOVF9TQU1QTEVSX0NVQkVdID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV9DVUJFX01BUFxufTtcbnR5cGVNYXBbVU5TSUdORURfSU5UX1NBTVBMRVJfMkRfQVJSQVldID0ge1xuICBUeXBlOiBudWxsLFxuICBzaXplOiAwLFxuICBzZXR0ZXI6IHNhbXBsZXJTZXR0ZXIsXG4gIGFycmF5U2V0dGVyOiBzYW1wbGVyQXJyYXlTZXR0ZXIsXG4gIGJpbmRQb2ludDogVEVYVFVSRV8yRF9BUlJBWVxufTtcblxuZnVuY3Rpb24gZmxvYXRBdHRyaWJTZXR0ZXIoZ2wsIGluZGV4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGlmIChiLnZhbHVlKSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuXG4gICAgICBzd2l0Y2ggKGIudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWI0ZnYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIzZnYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIyZnYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIxZnYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgbGVuZ3RoIG9mIGEgZmxvYXQgY29uc3RhbnQgdmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDQhJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLmJpbmRCdWZmZXIoQVJSQVlfQlVGRkVSLCBiLmJ1ZmZlcik7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCk7XG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGluZGV4LCBiLm51bUNvbXBvbmVudHMgfHwgYi5zaXplLCBiLnR5cGUgfHwgRkxPQVQsIGIubm9ybWFsaXplIHx8IGZhbHNlLCBiLnN0cmlkZSB8fCAwLCBiLm9mZnNldCB8fCAwKTtcblxuICAgICAgaWYgKGIuZGl2aXNvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXgsIGIuZGl2aXNvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRBdHRyaWJTZXR0ZXIoZ2wsIGluZGV4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYikge1xuICAgIGlmIChiLnZhbHVlKSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuXG4gICAgICBpZiAoYi52YWx1ZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliNGl2KGluZGV4LCBiLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGxlbmd0aCBvZiBhbiBpbnRlZ2VyIGNvbnN0YW50IHZhbHVlIG11c3QgYmUgNCEnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihBUlJBWV9CVUZGRVIsIGIuYnVmZmVyKTtcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcbiAgICAgIGdsLnZlcnRleEF0dHJpYklQb2ludGVyKGluZGV4LCBiLm51bUNvbXBvbmVudHMgfHwgYi5zaXplLCBiLnR5cGUgfHwgSU5ULCBiLnN0cmlkZSB8fCAwLCBiLm9mZnNldCB8fCAwKTtcblxuICAgICAgaWYgKGIuZGl2aXNvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXgsIGIuZGl2aXNvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1aW50QXR0cmliU2V0dGVyKGdsLCBpbmRleCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBpZiAoYi52YWx1ZSkge1xuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGluZGV4KTtcblxuICAgICAgaWYgKGIudmFsdWUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYjR1aXYoaW5kZXgsIGIudmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbGVuZ3RoIG9mIGFuIHVuc2lnbmVkIGludGVnZXIgY29uc3RhbnQgdmFsdWUgbXVzdCBiZSA0IScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgYi5idWZmZXIpO1xuICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaW5kZXgpO1xuICAgICAgZ2wudmVydGV4QXR0cmliSVBvaW50ZXIoaW5kZXgsIGIubnVtQ29tcG9uZW50cyB8fCBiLnNpemUsIGIudHlwZSB8fCBVTlNJR05FRF9JTlQsIGIuc3RyaWRlIHx8IDAsIGIub2Zmc2V0IHx8IDApO1xuXG4gICAgICBpZiAoYi5kaXZpc29yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliRGl2aXNvcihpbmRleCwgYi5kaXZpc29yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hdEF0dHJpYlNldHRlcihnbCwgaW5kZXgsIHR5cGVJbmZvKSB7XG4gIHZhciBkZWZhdWx0U2l6ZSA9IHR5cGVJbmZvLnNpemU7XG4gIHZhciBjb3VudCA9IHR5cGVJbmZvLmNvdW50O1xuICByZXR1cm4gZnVuY3Rpb24gKGIpIHtcbiAgICBnbC5iaW5kQnVmZmVyKEFSUkFZX0JVRkZFUiwgYi5idWZmZXIpO1xuICAgIHZhciBudW1Db21wb25lbnRzID0gYi5zaXplIHx8IGIubnVtQ29tcG9uZW50cyB8fCBkZWZhdWx0U2l6ZTtcbiAgICB2YXIgc2l6ZSA9IG51bUNvbXBvbmVudHMgLyBjb3VudDtcbiAgICB2YXIgdHlwZSA9IGIudHlwZSB8fCBGTE9BVDtcbiAgICB2YXIgdHlwZUluZm8gPSB0eXBlTWFwW3R5cGVdO1xuICAgIHZhciBzdHJpZGUgPSB0eXBlSW5mby5zaXplICogbnVtQ29tcG9uZW50cztcbiAgICB2YXIgbm9ybWFsaXplID0gYi5ub3JtYWxpemUgfHwgZmFsc2U7XG4gICAgdmFyIG9mZnNldCA9IGIub2Zmc2V0IHx8IDA7XG4gICAgdmFyIHJvd09mZnNldCA9IHN0cmlkZSAvIGNvdW50O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpbmRleCArIGkpO1xuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihpbmRleCArIGksIHNpemUsIHR5cGUsIG5vcm1hbGl6ZSwgc3RyaWRlLCBvZmZzZXQgKyByb3dPZmZzZXQgKiBpKTtcblxuICAgICAgaWYgKGIuZGl2aXNvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYkRpdmlzb3IoaW5kZXggKyBpLCBiLmRpdmlzb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIGF0dHJUeXBlTWFwID0ge307XG5hdHRyVHlwZU1hcFtGTE9BVF0gPSB7XG4gIHNpemU6IDQsXG4gIHNldHRlcjogZmxvYXRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtGTE9BVF9WRUMyXSA9IHtcbiAgc2l6ZTogOCxcbiAgc2V0dGVyOiBmbG9hdEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0ZMT0FUX1ZFQzNdID0ge1xuICBzaXplOiAxMixcbiAgc2V0dGVyOiBmbG9hdEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0ZMT0FUX1ZFQzRdID0ge1xuICBzaXplOiAxNixcbiAgc2V0dGVyOiBmbG9hdEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0lOVF0gPSB7XG4gIHNpemU6IDQsXG4gIHNldHRlcjogaW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbSU5UX1ZFQzJdID0ge1xuICBzaXplOiA4LFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0lOVF9WRUMzXSA9IHtcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogaW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbSU5UX1ZFQzRdID0ge1xuICBzaXplOiAxNixcbiAgc2V0dGVyOiBpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtVTlNJR05FRF9JTlRdID0ge1xuICBzaXplOiA0LFxuICBzZXR0ZXI6IHVpbnRBdHRyaWJTZXR0ZXJcbn07XG5hdHRyVHlwZU1hcFtVTlNJR05FRF9JTlRfVkVDMl0gPSB7XG4gIHNpemU6IDgsXG4gIHNldHRlcjogdWludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW1VOU0lHTkVEX0lOVF9WRUMzXSA9IHtcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogdWludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW1VOU0lHTkVEX0lOVF9WRUM0XSA9IHtcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogdWludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0JPT0xdID0ge1xuICBzaXplOiA0LFxuICBzZXR0ZXI6IGludEF0dHJpYlNldHRlclxufTtcbmF0dHJUeXBlTWFwW0JPT0xfVkVDMl0gPSB7XG4gIHNpemU6IDgsXG4gIHNldHRlcjogaW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbQk9PTF9WRUMzXSA9IHtcbiAgc2l6ZTogMTIsXG4gIHNldHRlcjogaW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbQk9PTF9WRUM0XSA9IHtcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogaW50QXR0cmliU2V0dGVyXG59O1xuYXR0clR5cGVNYXBbRkxPQVRfTUFUMl0gPSB7XG4gIHNpemU6IDQsXG4gIHNldHRlcjogbWF0QXR0cmliU2V0dGVyLFxuICBjb3VudDogMlxufTtcbmF0dHJUeXBlTWFwW0ZMT0FUX01BVDNdID0ge1xuICBzaXplOiA5LFxuICBzZXR0ZXI6IG1hdEF0dHJpYlNldHRlcixcbiAgY291bnQ6IDNcbn07XG5hdHRyVHlwZU1hcFtGTE9BVF9NQVQ0XSA9IHtcbiAgc2l6ZTogMTYsXG4gIHNldHRlcjogbWF0QXR0cmliU2V0dGVyLFxuICBjb3VudDogNFxufTsgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxuXG52YXIgZ2wgPSB1bmRlZmluZWQ7XG4vKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG5cbnZhciBlcnJvclJFID0gL0VSUk9SOlxccypcXGQrOihcXGQrKS9naTtcblxuZnVuY3Rpb24gYWRkTGluZU51bWJlcnNXaXRoRXJyb3Ioc3JjKSB7XG4gIHZhciBsb2cgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuICB2YXIgbGluZU9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogMDtcblxuICAvLyBOb3RlOiBFcnJvciBtZXNzYWdlIGZvcm1hdHMgYXJlIG5vdCBkZWZpbmVkIGJ5IGFueSBzcGVjIHNvIHRoaXMgbWF5IG9yIG1heSBub3Qgd29yay5cbiAgdmFyIG1hdGNoZXMgPSBfdG9Db25zdW1hYmxlQXJyYXkobG9nLm1hdGNoQWxsKGVycm9yUkUpKTtcblxuICB2YXIgbGluZU5vVG9FcnJvck1hcCA9IG5ldyBNYXAobWF0Y2hlcy5tYXAoZnVuY3Rpb24gKG0sIG5keCkge1xuICAgIHZhciBsaW5lTm8gPSBwYXJzZUludChtWzFdKTtcbiAgICB2YXIgbmV4dCA9IG1hdGNoZXNbbmR4ICsgMV07XG4gICAgdmFyIGVuZCA9IG5leHQgPyBuZXh0LmluZGV4IDogbG9nLmxlbmd0aDtcbiAgICB2YXIgbXNnID0gbG9nLnN1YnN0cmluZyhtLmluZGV4LCBlbmQpO1xuICAgIHJldHVybiBbbGluZU5vIC0gMSwgbXNnXTtcbiAgfSkpO1xuICByZXR1cm4gc3JjLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24gKGxpbmUsIGxpbmVObykge1xuICAgIHZhciBlcnIgPSBsaW5lTm9Ub0Vycm9yTWFwLmdldChsaW5lTm8pO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChsaW5lTm8gKyAxICsgbGluZU9mZnNldCwgXCI6IFwiKS5jb25jYXQobGluZSkuY29uY2F0KGVyciA/IFwiXFxuXFxuXl5eIFwiLmNvbmNhdChlcnIpIDogJycpO1xuICB9KS5qb2luKCdcXG4nKTtcbn1cbi8qKlxuICogRXJyb3IgQ2FsbGJhY2tcbiAqIEBjYWxsYmFjayBFcnJvckNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW2xpbmVPZmZzZXRdIGFtb3VudCB0byBhZGQgdG8gbGluZSBudW1iZXJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxudmFyIHNwYWNlUkUgPSAvXlsgXFx0XSpcXG4vO1xuLyoqXG4gKiBMb2FkcyBhIHNoYWRlci5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzaGFkZXJTb3VyY2UgVGhlIHNoYWRlciBzb3VyY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc2hhZGVyVHlwZSBUaGUgdHlwZSBvZiBzaGFkZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IG9wdF9lcnJvckNhbGxiYWNrIGNhbGxiYWNrIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHtXZWJHTFNoYWRlcn0gVGhlIGNyZWF0ZWQgc2hhZGVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkU2hhZGVyKGdsLCBzaGFkZXJTb3VyY2UsIHNoYWRlclR5cGUsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIHZhciBlcnJGbiA9IG9wdF9lcnJvckNhbGxiYWNrIHx8IGVycm9yOyAvLyBDcmVhdGUgdGhlIHNoYWRlciBvYmplY3RcblxuICB2YXIgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpOyAvLyBSZW1vdmUgdGhlIGZpcnN0IGVuZCBvZiBsaW5lIGJlY2F1c2UgV2ViR0wgMi4wIHJlcXVpcmVzXG4gIC8vICN2ZXJzaW9uIDMwMCBlc1xuICAvLyBhcyB0aGUgZmlyc3QgbGluZS4gTm8gd2hpdGVzcGFjZSBhbGxvd2VkIGJlZm9yZSB0aGF0IGxpbmVcbiAgLy8gc29cbiAgLy9cbiAgLy8gPHNjcmlwdD5cbiAgLy8gI3ZlcnNpb24gMzAwIGVzXG4gIC8vIDwvc2NyaXB0PlxuICAvL1xuICAvLyBIYXMgb25lIGxpbmUgYmVmb3JlIGl0IHdoaWNoIGlzIGludmFsaWQgYWNjb3JkaW5nIHRvIEdMU0wgRVMgMy4wMFxuICAvL1xuXG4gIHZhciBsaW5lT2Zmc2V0ID0gMDtcblxuICBpZiAoc3BhY2VSRS50ZXN0KHNoYWRlclNvdXJjZSkpIHtcbiAgICBsaW5lT2Zmc2V0ID0gMTtcbiAgICBzaGFkZXJTb3VyY2UgPSBzaGFkZXJTb3VyY2UucmVwbGFjZShzcGFjZVJFLCAnJyk7XG4gIH0gLy8gTG9hZCB0aGUgc2hhZGVyIHNvdXJjZVxuXG5cbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc2hhZGVyU291cmNlKTsgLy8gQ29tcGlsZSB0aGUgc2hhZGVyXG5cbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpOyAvLyBDaGVjayB0aGUgY29tcGlsZSBzdGF0dXNcblxuICB2YXIgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBDT01QSUxFX1NUQVRVUyk7XG5cbiAgaWYgKCFjb21waWxlZCkge1xuICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBjb21waWxhdGlvbjsgZ2V0IHRoZSBlcnJvclxuICAgIHZhciBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgZXJyRm4oXCJcIi5jb25jYXQoYWRkTGluZU51bWJlcnNXaXRoRXJyb3Ioc2hhZGVyU291cmNlLCBsYXN0RXJyb3IsIGxpbmVPZmZzZXQpLCBcIlxcbkVycm9yIGNvbXBpbGluZyBcIikuY29uY2F0KHV0aWxzLmdsRW51bVRvU3RyaW5nKGdsLCBzaGFkZXJUeXBlKSwgXCI6IFwiKS5jb25jYXQobGFzdEVycm9yKSk7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQcm9ncmFtT3B0aW9uc1xuICogQHByb3BlcnR5IHtmdW5jdGlvbihzdHJpbmcpfSBbZXJyb3JDYWxsYmFja10gY2FsbGJhY2sgZm9yIGVycm9yc1xuICogQHByb3BlcnR5IHtPYmplY3QuPHN0cmluZyxudW1iZXI+fSBbYXR0cmliTG9jYXRpb25zXSBhIGF0dHJpYnV0ZSBuYW1lIHRvIGxvY2F0aW9uIG1hcFxuICogQHByb3BlcnR5IHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xPYmplY3QuPHN0cmluZyxtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPnxzdHJpbmdbXSl9IFt0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzXSBJZiBwYXNzZWRcbiAqICAgYSBCdWZmZXJJbmZvIHdpbGwgdXNlIHRoZSBhdHRyaWJzIG5hbWVzIGluc2lkZS4gSWYgcGFzc2VkIGFuIG9iamVjdCBvZiBBdHRyaWJJbmZvcyB3aWxsIHVzZSB0aGUgbmFtZXMgZnJvbSB0aGF0IG9iamVjdC4gT3RoZXJ3aXNlXG4gKiAgIHlvdSBjYW4gcGFzcyBhbiBhcnJheSBvZiBuYW1lcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHJhbnNmb3JtRmVlZGJhY2tNb2RlXSB0aGUgbW9kZSB0byBwYXNzIGBnbC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzYC4gRGVmYXVsdHMgdG8gYFNFUEFSQVRFX0FUVFJJQlNgLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9ncmFtIG9wdGlvbnMgYmFzZWQgb24gYWxsIHRoZXNlIG9wdGlvbmFsIGFyZ3VtZW50c1xuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc3xzdHJpbmdbXX0gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfSBbb3B0X2xvY2F0aW9uc10gVGhlIGxvY2F0aW9ucyBmb3IgdGhlLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfZXJyb3JDYWxsYmFja10gY2FsbGJhY2sgZm9yIGVycm9ycy4gQnkgZGVmYXVsdCBpdCBqdXN0IHByaW50cyBhbiBlcnJvciB0byB0aGUgY29uc29sZVxuICogICAgICAgIG9uIGVycm9yLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgZWxzZSBwYXNzIGFuIGNhbGxiYWNrLiBJdCdzIHBhc3NlZCBhbiBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN9IGFuIGluc3RhbmNlIG9mIFByb2dyYW1PcHRpb25zIGJhc2VkIG9uIHRoZSBhcmd1bWVudHMgcGFzc2VkIGluXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKSB7XG4gIHZhciB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzO1xuICB2YXIgdHJhbnNmb3JtRmVlZGJhY2tNb2RlO1xuXG4gIGlmICh0eXBlb2Ygb3B0X2xvY2F0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdF9lcnJvckNhbGxiYWNrID0gb3B0X2xvY2F0aW9ucztcbiAgICBvcHRfbG9jYXRpb25zID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRfYXR0cmlicyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdF9lcnJvckNhbGxiYWNrID0gb3B0X2F0dHJpYnM7XG4gICAgb3B0X2F0dHJpYnMgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAob3B0X2F0dHJpYnMgJiYgIUFycmF5LmlzQXJyYXkob3B0X2F0dHJpYnMpKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhbiBlcnJvckNhbGxiYWNrIHdlIGNhbiBqdXN0IHJldHVybiB0aGlzIG9iamVjdFxuICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIHRvIGNvbnN0cnVjdCBvbmUgd2l0aCBkZWZhdWx0IGVycm9yQ2FsbGJhY2tcbiAgICBpZiAob3B0X2F0dHJpYnMuZXJyb3JDYWxsYmFjaykge1xuICAgICAgcmV0dXJuIG9wdF9hdHRyaWJzO1xuICAgIH1cblxuICAgIHZhciBvcHQgPSBvcHRfYXR0cmlicztcbiAgICBvcHRfZXJyb3JDYWxsYmFjayA9IG9wdC5lcnJvckNhbGxiYWNrO1xuICAgIG9wdF9hdHRyaWJzID0gb3B0LmF0dHJpYkxvY2F0aW9ucztcbiAgICB0cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzID0gb3B0LnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M7XG4gICAgdHJhbnNmb3JtRmVlZGJhY2tNb2RlID0gb3B0LnRyYW5zZm9ybUZlZWRiYWNrTW9kZTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIGVycm9yQ2FsbGJhY2s6IG9wdF9lcnJvckNhbGxiYWNrIHx8IGVycm9yLFxuICAgIHRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M6IHRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3MsXG4gICAgdHJhbnNmb3JtRmVlZGJhY2tNb2RlOiB0cmFuc2Zvcm1GZWVkYmFja01vZGVcbiAgfTtcblxuICBpZiAob3B0X2F0dHJpYnMpIHtcbiAgICB2YXIgYXR0cmliTG9jYXRpb25zID0ge307XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRfYXR0cmlicykpIHtcbiAgICAgIG9wdF9hdHRyaWJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYiwgbmR4KSB7XG4gICAgICAgIGF0dHJpYkxvY2F0aW9uc1thdHRyaWJdID0gb3B0X2xvY2F0aW9ucyA/IG9wdF9sb2NhdGlvbnNbbmR4XSA6IG5keDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyaWJMb2NhdGlvbnMgPSBvcHRfYXR0cmlicztcbiAgICB9XG5cbiAgICBvcHRpb25zLmF0dHJpYkxvY2F0aW9ucyA9IGF0dHJpYkxvY2F0aW9ucztcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG52YXIgZGVmYXVsdFNoYWRlclR5cGUgPSBbXCJWRVJURVhfU0hBREVSXCIsIFwiRlJBR01FTlRfU0hBREVSXCJdO1xuXG5mdW5jdGlvbiBnZXRTaGFkZXJUeXBlRnJvbVNjcmlwdFR5cGUoZ2wsIHNjcmlwdFR5cGUpIHtcbiAgaWYgKHNjcmlwdFR5cGUuaW5kZXhPZihcImZyYWdcIikgPj0gMCkge1xuICAgIHJldHVybiBGUkFHTUVOVF9TSEFERVI7XG4gIH0gZWxzZSBpZiAoc2NyaXB0VHlwZS5pbmRleE9mKFwidmVydFwiKSA+PSAwKSB7XG4gICAgcmV0dXJuIFZFUlRFWF9TSEFERVI7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWxldGVTaGFkZXJzKGdsLCBzaGFkZXJzKSB7XG4gIHNoYWRlcnMuZm9yRWFjaChmdW5jdGlvbiAoc2hhZGVyKSB7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gIH0pO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSwgYXR0YWNoZXMgKGFuZC9vciBjb21waWxlcykgc2hhZGVycywgYmluZHMgYXR0cmliIGxvY2F0aW9ucywgbGlua3MgdGhlXG4gKiBwcm9ncmFtIGFuZCBjYWxscyB1c2VQcm9ncmFtLlxuICpcbiAqIE5PVEU6IFRoZXJlIGFyZSA0IHNpZ25hdHVyZXMgZm9yIHRoaXMgZnVuY3Rpb25cbiAqXG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0aW9ucyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbShnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtKGdsLCBbdnMsIGZzXSwgb3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJGdW5jKTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMU2hhZGVyW118c3RyaW5nW119IHNoYWRlcnMgVGhlIHNoYWRlcnMgdG8gYXR0YWNoLCBvciBlbGVtZW50IGlkcyBmb3IgdGhlaXIgc291cmNlLCBvciBzdHJpbmdzIHRoYXQgY29udGFpbiB0aGVpciBzb3VyY2VcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzIG9yIGFuIGVycm9yIGNhbGxiYWNrLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfSBbb3B0X2xvY2F0aW9uc3xtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucyBvciBhbiBlcnJvciBjYWxsYmFjay5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHtXZWJHTFByb2dyYW0/fSB0aGUgY3JlYXRlZCBwcm9ncmFtIG9yIG51bGwgaWYgZXJyb3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oZ2wsIHNoYWRlcnMsIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgcHJvZ09wdGlvbnMgPSBnZXRQcm9ncmFtT3B0aW9ucyhvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spO1xuICB2YXIgcmVhbFNoYWRlcnMgPSBbXTtcbiAgdmFyIG5ld1NoYWRlcnMgPSBbXTtcblxuICBmb3IgKHZhciBuZHggPSAwOyBuZHggPCBzaGFkZXJzLmxlbmd0aDsgKytuZHgpIHtcbiAgICB2YXIgc2hhZGVyID0gc2hhZGVyc1tuZHhdO1xuXG4gICAgaWYgKHR5cGVvZiBzaGFkZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgZWxlbSA9IGdldEVsZW1lbnRCeUlkKHNoYWRlcik7XG4gICAgICB2YXIgc3JjID0gZWxlbSA/IGVsZW0udGV4dCA6IHNoYWRlcjtcbiAgICAgIHZhciB0eXBlID0gZ2xbZGVmYXVsdFNoYWRlclR5cGVbbmR4XV07XG5cbiAgICAgIGlmIChlbGVtICYmIGVsZW0udHlwZSkge1xuICAgICAgICB0eXBlID0gZ2V0U2hhZGVyVHlwZUZyb21TY3JpcHRUeXBlKGdsLCBlbGVtLnR5cGUpIHx8IHR5cGU7XG4gICAgICB9XG5cbiAgICAgIHNoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIHNyYywgdHlwZSwgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayk7XG4gICAgICBuZXdTaGFkZXJzLnB1c2goc2hhZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoaGVscGVyLmlzU2hhZGVyKGdsLCBzaGFkZXIpKSB7XG4gICAgICByZWFsU2hhZGVycy5wdXNoKHNoYWRlcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlYWxTaGFkZXJzLmxlbmd0aCAhPT0gc2hhZGVycy5sZW5ndGgpIHtcbiAgICBwcm9nT3B0aW9ucy5lcnJvckNhbGxiYWNrKFwibm90IGVub3VnaCBzaGFkZXJzIGZvciBwcm9ncmFtXCIpO1xuICAgIGRlbGV0ZVNoYWRlcnMoZ2wsIG5ld1NoYWRlcnMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gIHJlYWxTaGFkZXJzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRlcikge1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXIpO1xuICB9KTtcblxuICBpZiAocHJvZ09wdGlvbnMuYXR0cmliTG9jYXRpb25zKSB7XG4gICAgT2JqZWN0LmtleXMocHJvZ09wdGlvbnMuYXR0cmliTG9jYXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWIpIHtcbiAgICAgIGdsLmJpbmRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBwcm9nT3B0aW9ucy5hdHRyaWJMb2NhdGlvbnNbYXR0cmliXSwgYXR0cmliKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB2YXJ5aW5ncyA9IHByb2dPcHRpb25zLnRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZ3M7XG5cbiAgaWYgKHZhcnlpbmdzKSB7XG4gICAgaWYgKHZhcnlpbmdzLmF0dHJpYnMpIHtcbiAgICAgIHZhcnlpbmdzID0gdmFyeWluZ3MuYXR0cmlicztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFyeWluZ3MpKSB7XG4gICAgICB2YXJ5aW5ncyA9IE9iamVjdC5rZXlzKHZhcnlpbmdzKTtcbiAgICB9XG5cbiAgICBnbC50cmFuc2Zvcm1GZWVkYmFja1ZhcnlpbmdzKHByb2dyYW0sIHZhcnlpbmdzLCBwcm9nT3B0aW9ucy50cmFuc2Zvcm1GZWVkYmFja01vZGUgfHwgU0VQQVJBVEVfQVRUUklCUyk7XG4gIH1cblxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTsgLy8gQ2hlY2sgdGhlIGxpbmsgc3RhdHVzXG5cbiAgdmFyIGxpbmtlZCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgTElOS19TVEFUVVMpO1xuXG4gIGlmICghbGlua2VkKSB7XG4gICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgbGlua1xuICAgIHZhciBsYXN0RXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcbiAgICBwcm9nT3B0aW9ucy5lcnJvckNhbGxiYWNrKFwiXCIuY29uY2F0KHJlYWxTaGFkZXJzLm1hcChmdW5jdGlvbiAoc2hhZGVyKSB7XG4gICAgICB2YXIgc3JjID0gYWRkTGluZU51bWJlcnNXaXRoRXJyb3IoZ2wuZ2V0U2hhZGVyU291cmNlKHNoYWRlciksICcnLCAwKTtcbiAgICAgIHZhciB0eXBlID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuU0hBREVSX1RZUEUpO1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHV0aWxzLmdsRW51bVRvU3RyaW5nKGdsLCB0eXBlKSwgXCJcXG5cIikuY29uY2F0KHNyYywgXCJ9XCIpO1xuICAgIH0pLmpvaW4oJ1xcbicpLCBcIlxcbkVycm9yIGluIHByb2dyYW0gbGlua2luZzogXCIpLmNvbmNhdChsYXN0RXJyb3IpKTtcbiAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgIGRlbGV0ZVNoYWRlcnMoZ2wsIG5ld1NoYWRlcnMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHByb2dyYW07XG59XG4vKipcbiAqIExvYWRzIGEgc2hhZGVyIGZyb20gYSBzY3JpcHQgdGFnLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmd9IHNjcmlwdElkIFRoZSBpZCBvZiB0aGUgc2NyaXB0IHRhZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0X3NoYWRlclR5cGVdIFRoZSB0eXBlIG9mIHNoYWRlci4gSWYgbm90IHBhc3NlZCBpbiBpdCB3aWxsXG4gKiAgICAgYmUgZGVyaXZlZCBmcm9tIHRoZSB0eXBlIG9mIHRoZSBzY3JpcHQgdGFnLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuXG4gKiBAcmV0dXJuIHtXZWJHTFNoYWRlcj99IFRoZSBjcmVhdGVkIHNoYWRlciBvciBudWxsIGlmIGVycm9yLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlckZyb21TY3JpcHQoZ2wsIHNjcmlwdElkLCBvcHRfc2hhZGVyVHlwZSwgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIHNoYWRlclNvdXJjZSA9IFwiXCI7XG4gIHZhciBzaGFkZXJTY3JpcHQgPSBnZXRFbGVtZW50QnlJZChzY3JpcHRJZCk7XG5cbiAgaWYgKCFzaGFkZXJTY3JpcHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHNjcmlwdCBlbGVtZW50OiBcIi5jb25jYXQoc2NyaXB0SWQpKTtcbiAgfVxuXG4gIHNoYWRlclNvdXJjZSA9IHNoYWRlclNjcmlwdC50ZXh0O1xuICB2YXIgc2hhZGVyVHlwZSA9IG9wdF9zaGFkZXJUeXBlIHx8IGdldFNoYWRlclR5cGVGcm9tU2NyaXB0VHlwZShnbCwgc2hhZGVyU2NyaXB0LnR5cGUpO1xuXG4gIGlmICghc2hhZGVyVHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBzaGFkZXIgdHlwZScpO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRTaGFkZXIoZ2wsIHNoYWRlclNvdXJjZSwgc2hhZGVyVHlwZSwgb3B0X2Vycm9yQ2FsbGJhY2spO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgcHJvZ3JhbSBmcm9tIDIgc2NyaXB0IHRhZ3MuXG4gKlxuICogTk9URTogVGhlcmUgYXJlIDQgc2lnbmF0dXJlcyBmb3IgdGhpcyBmdW5jdGlvblxuICpcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9vcHRpb25zKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9lcnJGdW5jKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgW3ZzLCBmc10sIG9wdF9hdHRyaWJzLCBvcHRfZXJyRnVuYyk7XG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2VyckZ1bmMpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2hhZGVyU2NyaXB0SWRzIEFycmF5IG9mIGlkcyBvZiB0aGUgc2NyaXB0XG4gKiAgICAgICAgdGFncyBmb3IgdGhlIHNoYWRlcnMuIFRoZSBmaXJzdCBpcyBhc3N1bWVkIHRvIGJlIHRoZVxuICogICAgICAgIHZlcnRleCBzaGFkZXIsIHRoZSBzZWNvbmQgdGhlIGZyYWdtZW50IHNoYWRlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbU9wdGlvbnN8c3RyaW5nW118bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9hdHRyaWJzXSBPcHRpb25zIGZvciB0aGUgcHJvZ3JhbSBvciBhbiBhcnJheSBvZiBhdHRyaWJzIG5hbWVzIG9yIGFuIGVycm9yIGNhbGxiYWNrLiBMb2NhdGlvbnMgd2lsbCBiZSBhc3NpZ25lZCBieSBpbmRleCBpZiBub3QgcGFzc2VkIGluXG4gKiBAcGFyYW0ge251bWJlcltdfSBbb3B0X2xvY2F0aW9uc3xtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrXSBUaGUgbG9jYXRpb25zIGZvciB0aGUuIEEgcGFyYWxsZWwgYXJyYXkgdG8gb3B0X2F0dHJpYnMgbGV0dGluZyB5b3UgYXNzaWduIGxvY2F0aW9ucyBvciBhbiBlcnJvciBjYWxsYmFjay5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja30gW29wdF9lcnJvckNhbGxiYWNrXSBjYWxsYmFjayBmb3IgZXJyb3JzLiBCeSBkZWZhdWx0IGl0IGp1c3QgcHJpbnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlXG4gKiAgICAgICAgb24gZXJyb3IuIElmIHlvdSB3YW50IHNvbWV0aGluZyBlbHNlIHBhc3MgYW4gY2FsbGJhY2suIEl0J3MgcGFzc2VkIGFuIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJuIHtXZWJHTFByb2dyYW0/fSB0aGUgY3JlYXRlZCBwcm9ncmFtIG9yIG51bGwgaWYgZXJyb3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhnbCwgc2hhZGVyU2NyaXB0SWRzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIHByb2dPcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbiAgdmFyIHNoYWRlcnMgPSBbXTtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgc2hhZGVyU2NyaXB0SWRzLmxlbmd0aDsgKytpaSkge1xuICAgIHZhciBzaGFkZXIgPSBjcmVhdGVTaGFkZXJGcm9tU2NyaXB0KGdsLCBzaGFkZXJTY3JpcHRJZHNbaWldLCBnbFtkZWZhdWx0U2hhZGVyVHlwZVtpaV1dLCBwcm9nT3B0aW9ucy5lcnJvckNhbGxiYWNrKTtcblxuICAgIGlmICghc2hhZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzaGFkZXJzLnB1c2goc2hhZGVyKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQcm9ncmFtKGdsLCBzaGFkZXJzLCBwcm9nT3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBwcm9ncmFtIGZyb20gMiBzb3VyY2VzLlxuICpcbiAqIE5PVEU6IFRoZXJlIGFyZSA0IHNpZ25hdHVyZXMgZm9yIHRoaXMgZnVuY3Rpb25cbiAqXG4gKiAgICAgdHdnbC5jcmVhdGVQcm9ncmFtRnJvbVNvdXJjZShnbCwgW3ZzLCBmc10sIG9wdF9vcHRpb25zKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1Gcm9tU291cmNlKGdsLCBbdnMsIGZzXSwgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2UoZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUZyb21Tb3VyY2UoZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2VyckZ1bmMpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2hhZGVyU291cmNlcyBBcnJheSBvZiBzb3VyY2VzIGZvciB0aGVcbiAqICAgICAgICBzaGFkZXJzLiBUaGUgZmlyc3QgaXMgYXNzdW1lZCB0byBiZSB0aGUgdmVydGV4IHNoYWRlcixcbiAqICAgICAgICB0aGUgc2Vjb25kIHRoZSBmcmFnbWVudCBzaGFkZXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlByb2dyYW1PcHRpb25zfHN0cmluZ1tdfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfYXR0cmlic10gT3B0aW9ucyBmb3IgdGhlIHByb2dyYW0gb3IgYW4gYXJyYXkgb2YgYXR0cmlicyBuYW1lcyBvciBhbiBlcnJvciBjYWxsYmFjay4gTG9jYXRpb25zIHdpbGwgYmUgYXNzaWduZWQgYnkgaW5kZXggaWYgbm90IHBhc3NlZCBpblxuICogQHBhcmFtIHtudW1iZXJbXX0gW29wdF9sb2NhdGlvbnN8bW9kdWxlOnR3Z2wuRXJyb3JDYWxsYmFja10gVGhlIGxvY2F0aW9ucyBmb3IgdGhlLiBBIHBhcmFsbGVsIGFycmF5IHRvIG9wdF9hdHRyaWJzIGxldHRpbmcgeW91IGFzc2lnbiBsb2NhdGlvbnMgb3IgYW4gZXJyb3IgY2FsbGJhY2suXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2t9IFtvcHRfZXJyb3JDYWxsYmFja10gY2FsbGJhY2sgZm9yIGVycm9ycy4gQnkgZGVmYXVsdCBpdCBqdXN0IHByaW50cyBhbiBlcnJvciB0byB0aGUgY29uc29sZVxuICogICAgICAgIG9uIGVycm9yLiBJZiB5b3Ugd2FudCBzb21ldGhpbmcgZWxzZSBwYXNzIGFuIGNhbGxiYWNrLiBJdCdzIHBhc3NlZCBhbiBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybiB7V2ViR0xQcm9ncmFtP30gdGhlIGNyZWF0ZWQgcHJvZ3JhbSBvciBudWxsIGlmIGVycm9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMoZ2wsIHNoYWRlclNvdXJjZXMsIG9wdF9hdHRyaWJzLCBvcHRfbG9jYXRpb25zLCBvcHRfZXJyb3JDYWxsYmFjaykge1xuICB2YXIgcHJvZ09wdGlvbnMgPSBnZXRQcm9ncmFtT3B0aW9ucyhvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spO1xuICB2YXIgc2hhZGVycyA9IFtdO1xuXG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBzaGFkZXJTb3VyY2VzLmxlbmd0aDsgKytpaSkge1xuICAgIHZhciBzaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBzaGFkZXJTb3VyY2VzW2lpXSwgZ2xbZGVmYXVsdFNoYWRlclR5cGVbaWldXSwgcHJvZ09wdGlvbnMuZXJyb3JDYWxsYmFjayk7XG5cbiAgICBpZiAoIXNoYWRlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2hhZGVycy5wdXNoKHNoYWRlcik7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUHJvZ3JhbShnbCwgc2hhZGVycywgcHJvZ09wdGlvbnMpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYXR0cmlidXRlL3VuaWZvcm0gaXMgYSByZXNlcnZlZC9idWlsdCBpblxuICpcbiAqIEl0IG1ha2VzIG5vIHNlbnNlIHRvIG1lIHdoeSBHTCByZXR1cm5zIHRoZXNlIGJlY2F1c2UgaXQnc1xuICogaWxsZWdhbCB0byBjYWxsIGBnbC5nZXRVbmlmb3JtTG9jYXRpb25gIGFuZCBgZ2wuZ2V0QXR0cmliTG9jYXRpb25gXG4gKiB3aXRoIG5hbWVzIHRoYXQgc3RhcnQgd2l0aCBgZ2xfYCAoYW5kIGB3ZWJnbF9gIGluIFdlYkdMKVxuICpcbiAqIEkgY2FuIG9ubHkgYXNzdW1lIHRoZXkgYXJlIHRoZXJlIGJlY2F1c2UgdGhleSBtaWdodCBjb3VudFxuICogd2hlbiBjb21wdXRpbmcgdGhlIG51bWJlciBvZiB1bmlmb3Jtcy9hdHRyaWJ1dGVzIHVzZWQgd2hlbiB5b3Ugd2FudCB0b1xuICoga25vdyBpZiB5b3UgYXJlIG5lYXIgdGhlIGxpbWl0LiBUaGF0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2VcbiAqIHRvIG1lIGJ1dCB0aGUgZmFjdCB0aGF0IHRoZXNlIGdldCByZXR1cm5lZCBhcmUgaW4gdGhlIHNwZWMuXG4gKlxuICogQHBhcmFtIHtXZWJHTEFjdGl2ZUluZm99IGluZm8gQXMgcmV0dXJuZWQgZnJvbSBgZ2wuZ2V0QWN0aXZlVW5pZm9ybWAgb3JcbiAqICAgIGBnbC5nZXRBY3RpdmVBdHRyaWJgLlxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBpdCdzIHJlc2VydmVkXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gaXNCdWlsdEluKGluZm8pIHtcbiAgdmFyIG5hbWUgPSBpbmZvLm5hbWU7XG4gIHJldHVybiBuYW1lLnN0YXJ0c1dpdGgoXCJnbF9cIikgfHwgbmFtZS5zdGFydHNXaXRoKFwid2ViZ2xfXCIpO1xufVxuLyoqXG4gKiBDcmVhdGVzIHNldHRlciBmdW5jdGlvbnMgZm9yIGFsbCB1bmlmb3JtcyBvZiBhIHNoYWRlclxuICogcHJvZ3JhbS5cbiAqXG4gKiBAc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXRVbmlmb3Jtc31cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dCB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSB0aGUgcHJvZ3JhbSB0byBjcmVhdGUgc2V0dGVycyBmb3IuXG4gKiBAcmV0dXJucyB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gYW4gb2JqZWN0IHdpdGggYSBzZXR0ZXIgYnkgbmFtZSBmb3IgZWFjaCB1bmlmb3JtXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzKGdsLCBwcm9ncmFtKSB7XG4gIHZhciB0ZXh0dXJlVW5pdCA9IDA7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc2V0dGVyIGZvciBhIHVuaWZvcm0gb2YgdGhlIGdpdmVuIHByb2dyYW0gd2l0aCBpdCdzXG4gICAqIGxvY2F0aW9uIGVtYmVkZGVkIGluIHRoZSBzZXR0ZXIuXG4gICAqIEBwYXJhbSB7V2ViR0xQcm9ncmFtfSBwcm9ncmFtXG4gICAqIEBwYXJhbSB7V2ViR0xVbmlmb3JtSW5mb30gdW5pZm9ybUluZm9cbiAgICogQHJldHVybnMge2Z1bmN0aW9ufSB0aGUgY3JlYXRlZCBzZXR0ZXIuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8sIGxvY2F0aW9uKSB7XG4gICAgdmFyIGlzQXJyYXkgPSB1bmlmb3JtSW5mby5uYW1lLmVuZHNXaXRoKFwiWzBdXCIpO1xuICAgIHZhciB0eXBlID0gdW5pZm9ybUluZm8udHlwZTtcbiAgICB2YXIgdHlwZUluZm8gPSB0eXBlTWFwW3R5cGVdO1xuXG4gICAgaWYgKCF0eXBlSW5mbykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiAweFwiLmNvbmNhdCh0eXBlLnRvU3RyaW5nKDE2KSkpOyAvLyB3ZSBzaG91bGQgbmV2ZXIgZ2V0IGhlcmUuXG4gICAgfVxuXG4gICAgdmFyIHNldHRlcjtcblxuICAgIGlmICh0eXBlSW5mby5iaW5kUG9pbnQpIHtcbiAgICAgIC8vIGl0J3MgYSBzYW1wbGVyXG4gICAgICB2YXIgdW5pdCA9IHRleHR1cmVVbml0O1xuICAgICAgdGV4dHVyZVVuaXQgKz0gdW5pZm9ybUluZm8uc2l6ZTtcblxuICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgc2V0dGVyID0gdHlwZUluZm8uYXJyYXlTZXR0ZXIoZ2wsIHR5cGUsIHVuaXQsIGxvY2F0aW9uLCB1bmlmb3JtSW5mby5zaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldHRlciA9IHR5cGVJbmZvLnNldHRlcihnbCwgdHlwZSwgdW5pdCwgbG9jYXRpb24sIHVuaWZvcm1JbmZvLnNpemUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZUluZm8uYXJyYXlTZXR0ZXIgJiYgaXNBcnJheSkge1xuICAgICAgICBzZXR0ZXIgPSB0eXBlSW5mby5hcnJheVNldHRlcihnbCwgbG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dGVyID0gdHlwZUluZm8uc2V0dGVyKGdsLCBsb2NhdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0dGVyLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgcmV0dXJuIHNldHRlcjtcbiAgfVxuXG4gIHZhciB1bmlmb3JtU2V0dGVycyA9IHt9O1xuICB2YXIgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIEFDVElWRV9VTklGT1JNUyk7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG51bVVuaWZvcm1zOyArK2lpKSB7XG4gICAgdmFyIHVuaWZvcm1JbmZvID0gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpaSk7XG5cbiAgICBpZiAoaXNCdWlsdEluKHVuaWZvcm1JbmZvKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSB1bmlmb3JtSW5mby5uYW1lOyAvLyByZW1vdmUgdGhlIGFycmF5IHN1ZmZpeC5cblxuICAgIGlmIChuYW1lLmVuZHNXaXRoKFwiWzBdXCIpKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSAzKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybUluZm8ubmFtZSk7IC8vIHRoZSB1bmlmb3JtIHdpbGwgaGF2ZSBubyBsb2NhdGlvbiBpZiBpdCdzIGluIGEgdW5pZm9ybSBibG9ja1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1bmlmb3JtU2V0dGVyc1tuYW1lXSA9IGNyZWF0ZVVuaWZvcm1TZXR0ZXIocHJvZ3JhbSwgdW5pZm9ybUluZm8sIGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pZm9ybVNldHRlcnM7XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyYW5zZm9ybUZlZWRiYWNrSW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IGluZGV4IG9mIHRyYW5zZm9ybSBmZWVkYmFja1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGUgR0wgdHlwZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpemUgMSAtIDRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlIFRyYW5zZm9ybUZlZWRiYWNrSW5mbyBmb3IgcGFzc2luZyB0byBiaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gYW4gZXhpc3RpbmcgV2ViR0xQcm9ncmFtLlxuICogQHJldHVybiB7T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuVHJhbnNmb3JtRmVlZGJhY2tJbmZvPn1cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCBwcm9ncmFtKSB7XG4gIHZhciBpbmZvID0ge307XG4gIHZhciBudW1WYXJ5aW5ncyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgVFJBTlNGT1JNX0ZFRURCQUNLX1ZBUllJTkdTKTtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtVmFyeWluZ3M7ICsraWkpIHtcbiAgICB2YXIgdmFyeWluZyA9IGdsLmdldFRyYW5zZm9ybUZlZWRiYWNrVmFyeWluZyhwcm9ncmFtLCBpaSk7XG4gICAgaW5mb1t2YXJ5aW5nLm5hbWVdID0ge1xuICAgICAgaW5kZXg6IGlpLFxuICAgICAgdHlwZTogdmFyeWluZy50eXBlLFxuICAgICAgc2l6ZTogdmFyeWluZy5zaXplXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBCaW5kcyBidWZmZXJzIGZvciB0cmFuc2Zvcm0gZmVlZGJhY2suXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuVHJhbnNmb3JtRmVlZGJhY2tJbmZvPil9IHRyYW5zZm9ybUZlZWRiYWNrSW5mbyBBIFByb2dyYW1JbmZvIG9yIFRyYW5zZm9ybUZlZWRiYWNrSW5mby5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz4pfSBbYnVmZmVySW5mb10gQSBCdWZmZXJJbmZvIG9yIHNldCBvZiBBdHRyaWJJbmZvcy5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxuZnVuY3Rpb24gYmluZFRyYW5zZm9ybUZlZWRiYWNrSW5mbyhnbCwgdHJhbnNmb3JtRmVlZGJhY2tJbmZvLCBidWZmZXJJbmZvKSB7XG4gIGlmICh0cmFuc2Zvcm1GZWVkYmFja0luZm8udHJhbnNmb3JtRmVlZGJhY2tJbmZvKSB7XG4gICAgdHJhbnNmb3JtRmVlZGJhY2tJbmZvID0gdHJhbnNmb3JtRmVlZGJhY2tJbmZvLnRyYW5zZm9ybUZlZWRiYWNrSW5mbztcbiAgfVxuXG4gIGlmIChidWZmZXJJbmZvLmF0dHJpYnMpIHtcbiAgICBidWZmZXJJbmZvID0gYnVmZmVySW5mby5hdHRyaWJzO1xuICB9XG5cbiAgZm9yICh2YXIgbmFtZSBpbiBidWZmZXJJbmZvKSB7XG4gICAgdmFyIHZhcnlpbmcgPSB0cmFuc2Zvcm1GZWVkYmFja0luZm9bbmFtZV07XG5cbiAgICBpZiAodmFyeWluZykge1xuICAgICAgdmFyIGJ1ZiA9IGJ1ZmZlckluZm9bbmFtZV07XG5cbiAgICAgIGlmIChidWYub2Zmc2V0KSB7XG4gICAgICAgIGdsLmJpbmRCdWZmZXJSYW5nZShUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCB2YXJ5aW5nLmluZGV4LCBidWYuYnVmZmVyLCBidWYub2Zmc2V0LCBidWYuc2l6ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC5iaW5kQnVmZmVyQmFzZShUUkFOU0ZPUk1fRkVFREJBQ0tfQlVGRkVSLCB2YXJ5aW5nLmluZGV4LCBidWYuYnVmZmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQ3JlYXRlcyBhIHRyYW5zZm9ybSBmZWVkYmFjayBhbmQgc2V0cyB0aGUgYnVmZmVyc1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gQSBQcm9ncmFtSW5mbyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb31cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLkJ1ZmZlckluZm98T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuQXR0cmliSW5mbz4pfSBbYnVmZmVySW5mb10gQSBCdWZmZXJJbmZvIG9yIHNldCBvZiBBdHRyaWJJbmZvcy5cbiAqIEByZXR1cm4ge1dlYkdMVHJhbnNmb3JtRmVlZGJhY2t9IHRoZSBjcmVhdGVkIHRyYW5zZm9ybSBmZWVkYmFja1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFjayhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pIHtcbiAgdmFyIHRmID0gZ2wuY3JlYXRlVHJhbnNmb3JtRmVlZGJhY2soKTtcbiAgZ2wuYmluZFRyYW5zZm9ybUZlZWRiYWNrKFRSQU5TRk9STV9GRUVEQkFDSywgdGYpO1xuICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICBiaW5kVHJhbnNmb3JtRmVlZGJhY2tJbmZvKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVySW5mbyk7XG4gIGdsLmJpbmRUcmFuc2Zvcm1GZWVkYmFjayhUUkFOU0ZPUk1fRkVFREJBQ0ssIG51bGwpO1xuICByZXR1cm4gdGY7XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVuaWZvcm1EYXRhXG4gKiBAcHJvcGVydHkge251bWJlcn0gdHlwZSBUaGUgV2ViR0wgdHlwZSBlbnVtIGZvciB0aGlzIHVuaWZvcm1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgZm9yIHRoaXMgdW5pZm9ybVxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrTmR4IFRoZSBibG9jayBpbmRleCB0aGlzIHVuaWZvcm0gYXBwZWFycyBpblxuICogQHByb3BlcnR5IHtudW1iZXJ9IG9mZnNldCBUaGUgYnl0ZSBvZmZzZXQgaW4gdGhlIGJsb2NrIGZvciB0aGlzIHVuaWZvcm0ncyB2YWx1ZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBUaGUgc3BlY2lmaWNhdGlvbiBmb3Igb25lIFVuaWZvcm1CbG9ja09iamVjdFxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJsb2NrU3BlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYmxvY2suXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZSBUaGUgc2l6ZSBpbiBieXRlcyBuZWVkZWQgZm9yIHRoZSBibG9ja1xuICogQHByb3BlcnR5IHtudW1iZXJbXX0gdW5pZm9ybUluZGljZXMgVGhlIGluZGljZXMgb2YgdGhlIHVuaWZvcm1zIHVzZWQgYnkgdGhlIGJsb2NrLiBUaGVzZSBpbmRpY2VzXG4gKiAgICBjb3JyZXNwb25kIHRvIGVudHJpZXMgaW4gYSBVbmlmb3JtRGF0YSBhcnJheSBpbiB0aGUge0BsaW5rIG1vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9LlxuICogQHByb3BlcnR5IHtib29sfSB1c2VkQnlWZXJ0ZXhTaGFkZXIgU2VsZiBleHBsYW5hdG9yeVxuICogQHByb3BlcnR5IHtib29sfSB1c2VkQnlGcmFnbWVudFNoYWRlciBTZWxmIGV4cGxhbmF0b3J5XG4gKiBAcHJvcGVydHkge2Jvb2x9IHVzZWQgU2VsZiBleHBsYW5hdG9yeVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBIGBVbmlmb3JtQmxvY2tTcGVjYCByZXByZXNlbnRzIHRoZSBkYXRhIG5lZWRlZCB0byBjcmVhdGUgYW5kIGJpbmRcbiAqIFVuaWZvcm1CbG9ja09iamVjdHMgZm9yIGEgZ2l2ZW4gcHJvZ3JhbVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVuaWZvcm1CbG9ja1NwZWNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkJsb2NrU3BlYz4gYmxvY2tTcGVjcyBUaGUgQmxvY2tTcGVjIGZvciBlYWNoIGJsb2NrIGJ5IGJsb2NrIG5hbWVcbiAqIEBwcm9wZXJ0eSB7VW5pZm9ybURhdGFbXX0gdW5pZm9ybURhdGEgQW4gYXJyYXkgb2YgZGF0YSBmb3IgZWFjaCB1bmlmb3JtIGJ5IHVuaWZvcm0gaW5kZXguXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBVbmlmb3JtQmxvY2tTcGVjIGZvciB0aGUgZ2l2ZW4gcHJvZ3JhbS5cbiAqXG4gKiBBIFVuaWZvcm1CbG9ja1NwZWMgcmVwcmVzZW50cyB0aGUgZGF0YSBuZWVkZWQgdG8gY3JlYXRlIGFuZCBiaW5kXG4gKiBVbmlmb3JtQmxvY2tPYmplY3RzXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMMiBSZW5kZXJpbmcgQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gQSBXZWJHTFByb2dyYW0gZm9yIGEgc3VjY2Vzc2Z1bGx5IGxpbmtlZCBwcm9ncmFtXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tTcGVjfSBUaGUgY3JlYXRlZCBVbmlmb3JtQmxvY2tTcGVjXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbShnbCwgcHJvZ3JhbSkge1xuICB2YXIgbnVtVW5pZm9ybXMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIEFDVElWRV9VTklGT1JNUyk7XG4gIHZhciB1bmlmb3JtRGF0YSA9IFtdO1xuICB2YXIgdW5pZm9ybUluZGljZXMgPSBbXTtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtVW5pZm9ybXM7ICsraWkpIHtcbiAgICB1bmlmb3JtSW5kaWNlcy5wdXNoKGlpKTtcbiAgICB1bmlmb3JtRGF0YS5wdXNoKHt9KTtcbiAgICB2YXIgdW5pZm9ybUluZm8gPSBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGlpKTtcblxuICAgIGlmIChpc0J1aWx0SW4odW5pZm9ybUluZm8pKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB1bmlmb3JtRGF0YVtpaV0ubmFtZSA9IHVuaWZvcm1JbmZvLm5hbWU7XG4gIH1cblxuICBbW1wiVU5JRk9STV9UWVBFXCIsIFwidHlwZVwiXSwgW1wiVU5JRk9STV9TSVpFXCIsIFwic2l6ZVwiXSwgLy8gbnVtIGVsZW1lbnRzXG4gIFtcIlVOSUZPUk1fQkxPQ0tfSU5ERVhcIiwgXCJibG9ja05keFwiXSwgW1wiVU5JRk9STV9PRkZTRVRcIiwgXCJvZmZzZXRcIl1dLmZvckVhY2goZnVuY3Rpb24gKHBhaXIpIHtcbiAgICB2YXIgcG5hbWUgPSBwYWlyWzBdO1xuICAgIHZhciBrZXkgPSBwYWlyWzFdO1xuICAgIGdsLmdldEFjdGl2ZVVuaWZvcm1zKHByb2dyYW0sIHVuaWZvcm1JbmRpY2VzLCBnbFtwbmFtZV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBuZHgpIHtcbiAgICAgIHVuaWZvcm1EYXRhW25keF1ba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGJsb2NrU3BlY3MgPSB7fTtcbiAgdmFyIG51bVVuaWZvcm1CbG9ja3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIEFDVElWRV9VTklGT1JNX0JMT0NLUyk7XG5cbiAgZm9yICh2YXIgX2lpID0gMDsgX2lpIDwgbnVtVW5pZm9ybUJsb2NrczsgKytfaWkpIHtcbiAgICB2YXIgbmFtZSA9IGdsLmdldEFjdGl2ZVVuaWZvcm1CbG9ja05hbWUocHJvZ3JhbSwgX2lpKTtcbiAgICB2YXIgYmxvY2tTcGVjID0ge1xuICAgICAgaW5kZXg6IGdsLmdldFVuaWZvcm1CbG9ja0luZGV4KHByb2dyYW0sIG5hbWUpLFxuICAgICAgdXNlZEJ5VmVydGV4U2hhZGVyOiBnbC5nZXRBY3RpdmVVbmlmb3JtQmxvY2tQYXJhbWV0ZXIocHJvZ3JhbSwgX2lpLCBVTklGT1JNX0JMT0NLX1JFRkVSRU5DRURfQllfVkVSVEVYX1NIQURFUiksXG4gICAgICB1c2VkQnlGcmFnbWVudFNoYWRlcjogZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrUGFyYW1ldGVyKHByb2dyYW0sIF9paSwgVU5JRk9STV9CTE9DS19SRUZFUkVOQ0VEX0JZX0ZSQUdNRU5UX1NIQURFUiksXG4gICAgICBzaXplOiBnbC5nZXRBY3RpdmVVbmlmb3JtQmxvY2tQYXJhbWV0ZXIocHJvZ3JhbSwgX2lpLCBVTklGT1JNX0JMT0NLX0RBVEFfU0laRSksXG4gICAgICB1bmlmb3JtSW5kaWNlczogZ2wuZ2V0QWN0aXZlVW5pZm9ybUJsb2NrUGFyYW1ldGVyKHByb2dyYW0sIF9paSwgVU5JRk9STV9CTE9DS19BQ1RJVkVfVU5JRk9STV9JTkRJQ0VTKVxuICAgIH07XG4gICAgYmxvY2tTcGVjLnVzZWQgPSBibG9ja1NwZWMudXNlZEJ5VmVydGV4U2hhZGVyIHx8IGJsb2NrU3BlYy51c2VkQnlGcmFnbWVudFNoYWRlcjtcbiAgICBibG9ja1NwZWNzW25hbWVdID0gYmxvY2tTcGVjO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBibG9ja1NwZWNzOiBibG9ja1NwZWNzLFxuICAgIHVuaWZvcm1EYXRhOiB1bmlmb3JtRGF0YVxuICB9O1xufVxuXG52YXIgYXJyYXlTdWZmaXhSRSA9IC9cXFtcXGQrXFxdXFwuJC87IC8vIGJldHRlciB3YXkgdG8gY2hlY2s/XG5cbnZhciBwYWQgPSBmdW5jdGlvbiBwYWQodiwgcGFkZGluZykge1xuICByZXR1cm4gKCh2ICsgKHBhZGRpbmcgLSAxKSkgLyBwYWRkaW5nIHwgMCkgKiBwYWRkaW5nO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybUJsb2NrVW5pZm9ybVNldHRlcih2aWV3LCBUeXBlLCB0eXBlU2l6ZSwgcGFkZGVkU2l6ZSwgaXNBcnJheSkge1xuICBpZiAoaXNBcnJheSkge1xuICAgIHZhciBudW1FbGVtZW50cyA9IHR5cGVTaXplIC8gVHlwZS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICB2YXIgbnVtUGFkZGVkRWxlbWVudHMgPSBwYWRkZWRTaXplIC8gVHlwZS5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgZHN0ID0gMDtcblxuICAgICAgZm9yICh2YXIgc3JjID0gMDsgc3JjIDwgdmFsdWUubGVuZ3RoOyBzcmMgKz0gbnVtRWxlbWVudHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1FbGVtZW50czsgKytpKSB7XG4gICAgICAgICAgdmlld1tkc3QgKyBpXSA9IHZhbHVlW3NyYyArIGldO1xuICAgICAgICB9XG5cbiAgICAgICAgZHN0ICs9IG51bVBhZGRlZEVsZW1lbnRzO1xuICAgICAgfVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2aWV3LnNldCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3WzBdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuLyoqXG4gKiBSZXByZXNlbnRzIGEgVW5pZm9ybUJsb2NrT2JqZWN0IGluY2x1ZGluZyBhbiBBcnJheUJ1ZmZlciB3aXRoIGFsbCB0aGUgdW5pZm9ybSB2YWx1ZXNcbiAqIGFuZCBhIGNvcnJlc3BvbmRpbmcgV2ViR0xCdWZmZXIgdG8gaG9sZCB0aG9zZSB2YWx1ZXMgb24gdGhlIEdQVVxuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFVuaWZvcm1CbG9ja0luZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9ja1xuICogQHByb3BlcnR5IHtBcnJheUJ1ZmZlcn0gYXJyYXkgVGhlIGFycmF5IGJ1ZmZlciB0aGF0IGNvbnRhaW5zIHRoZSB1bmlmb3JtIHZhbHVlc1xuICogQHByb3BlcnR5IHtGbG9hdDMyQXJyYXl9IGFzRmxvYXQgQSBmbG9hdCB2aWV3IG9uIHRoZSBhcnJheSBidWZmZXIuIFRoaXMgaXMgdXNlZnVsXG4gKiAgICBpbnNwZWN0aW5nIHRoZSBjb250ZW50cyBvZiB0aGUgYnVmZmVyIGluIHRoZSBkZWJ1Z2dlci5cbiAqIEBwcm9wZXJ0eSB7V2ViR0xCdWZmZXJ9IGJ1ZmZlciBBIFdlYkdMIGJ1ZmZlciB0aGF0IHdpbGwgaG9sZCBhIGNvcHkgb2YgdGhlIHVuaWZvcm0gdmFsdWVzIGZvciByZW5kZXJpbmcuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW29mZnNldF0gb2Zmc2V0IGludG8gYnVmZmVyXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIEFycmF5QnVmZmVyVmlldz59IHVuaWZvcm1zIEEgdW5pZm9ybSBuYW1lIHRvIEFycmF5QnVmZmVyVmlldyBtYXAuXG4gKiAgIGVhY2ggVW5pZm9ybSBoYXMgYSBjb3JyZWN0bHkgdHlwZWQgYEFycmF5QnVmZmVyVmlld2AgaW50byBhcnJheSBhdCB0aGUgY29ycmVjdCBvZmZzZXRcbiAqICAgYW5kIGxlbmd0aCBvZiB0aGF0IHVuaWZvcm0uIFNvIGZvciBleGFtcGxlIGEgZmxvYXQgdW5pZm9ybSB3b3VsZCBoYXZlIGEgMSBmbG9hdCBgRmxvYXQzMkFycmF5YFxuICogICB2aWV3LiBBIHNpbmdsZSBtYXQ0IHdvdWxkIGhhdmUgYSAxNiBlbGVtZW50IGBGbG9hdDMyQXJyYXlgIHZpZXcuIEFuIGl2ZWMyIHdvdWxkIGhhdmUgYW5cbiAqICAgYEludDMyQXJyYXlgIHZpZXcsIGV0Yy5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgZnVuY3Rpb24+fSBzZXR0ZXJzIEEgc2V0dGVyIGZvciB0aGlzIHVuaWZvcm0uXG4gKiAgIFRoZSByZWFzb24gdG8gdXNlIHNldHRlcnMgaXMgZWxlbWVudHMgb2YgYXJyYXlzIGFyZSBwYWRkZWQgdG8gdmVjNCBzaXplcyB3aGljaFxuICogICBtZWFucyBpZiB5b3Ugd2FudCB0byBzZXQgYW4gYXJyYXkgb2YgNCBmbG9hdHMgeW91J2QgbmVlZCB0byBzZXQgMTYgdmFsdWVzXG4gKiAgIChvciBzZXQgZWxlbWVudHMgMCwgNCwgOCwgMTIpLiBJbiBvdGhlciB3b3Jkc1xuICogICBgc29tZUJsb2NrSW5mby51bmlmb3Jtcy5zb21lNEZsb2F0QXJyYXlVbmlmb3JtLnNldChbMCwgLCAsICwgMSwgLCAsICwgMiwgLCAsICwgM10pYFxuICogICB3aGVyZSBhcyB0aGUgc2V0dGVyIGhhbmRsZXMganVzdCBwYXNzaW5nIGluIFswLCAxLCAyLCAzXSBlaXRoZXIgZGlyZWN0bHkgYXMgaW5cbiAqICAgYHNvbWVCbG9ja0luZm8uc2V0dGVyLnNvbWU0RmxvYXRBcnJheVVuaWZvcm0uc2V0KFswLCAxLCAyLCAzXSlgIChub3QgcmVjb21tZW5kZWQpXG4gKiAgIG9yIHZpYSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QmxvY2tVbmlmb3Jtc31cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBmb3IgdGhlIHNwZWNpZmllZCBibG9ja1xuICpcbiAqIE5vdGU6ICoqSWYgdGhlIGJsb2NrTmFtZSBtYXRjaGVzIG5vIGV4aXN0aW5nIGJsb2NrcyBhIHdhcm5pbmcgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZSBhbmQgYSBkdW1teVxuICogYFVuaWZvcm1CbG9ja0luZm9gIGlzIHJldHVybmVkKiouIFRoaXMgaXMgYmVjYXVzZSB3aGVuIGRlYnVnZ2luZyBHTFNMXG4gKiBpdCBpcyBjb21tb24gdG8gY29tbWVudCBvdXQgbGFyZ2UgcG9ydGlvbnMgb2YgYSBzaGFkZXIgb3IgZm9yIGV4YW1wbGUgc2V0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHRvIGEgY29uc3RhbnQuIFdoZW4gdGhhdCBoYXBwZW5zIGJsb2NrcyBnZXQgb3B0aW1pemVkIG91dC5cbiAqIElmIHRoaXMgZnVuY3Rpb24gZGlkIG5vdCBjcmVhdGUgZHVtbXkgYmxvY2tzIHlvdXIgY29kZSB3b3VsZCBjcmFzaCB3aGVuIGRlYnVnZ2luZy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gQSBXZWJHTFByb2dyYW1cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrU3BlY30gdW5pZm9ybUJsb2NrU3BlYy4gQSBVbmlmb3JtQmxvY2tTcGVjIGFzIHJldHVybmVkXG4gKiAgICAgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtfS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBibG9ja05hbWUgVGhlIG5hbWUgb2YgdGhlIGJsb2NrLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrSW5mb30gVGhlIGNyZWF0ZWQgVW5pZm9ybUJsb2NrSW5mb1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtQmxvY2tJbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0sIHVuaWZvcm1CbG9ja1NwZWMsIGJsb2NrTmFtZSkge1xuICB2YXIgYmxvY2tTcGVjcyA9IHVuaWZvcm1CbG9ja1NwZWMuYmxvY2tTcGVjcztcbiAgdmFyIHVuaWZvcm1EYXRhID0gdW5pZm9ybUJsb2NrU3BlYy51bmlmb3JtRGF0YTtcbiAgdmFyIGJsb2NrU3BlYyA9IGJsb2NrU3BlY3NbYmxvY2tOYW1lXTtcblxuICBpZiAoIWJsb2NrU3BlYykge1xuICAgIHdhcm4oXCJubyB1bmlmb3JtIGJsb2NrIG9iamVjdCBuYW1lZDpcIiwgYmxvY2tOYW1lKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYmxvY2tOYW1lLFxuICAgICAgdW5pZm9ybXM6IHt9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IG5ldyBBcnJheUJ1ZmZlcihibG9ja1NwZWMuc2l6ZSk7XG4gIHZhciBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgdmFyIHVuaWZvcm1CdWZmZXJJbmRleCA9IGJsb2NrU3BlYy5pbmRleDtcbiAgZ2wuYmluZEJ1ZmZlcihVTklGT1JNX0JVRkZFUiwgYnVmZmVyKTtcbiAgZ2wudW5pZm9ybUJsb2NrQmluZGluZyhwcm9ncmFtLCBibG9ja1NwZWMuaW5kZXgsIHVuaWZvcm1CdWZmZXJJbmRleCk7XG4gIHZhciBwcmVmaXggPSBibG9ja05hbWUgKyBcIi5cIjtcblxuICBpZiAoYXJyYXlTdWZmaXhSRS50ZXN0KHByZWZpeCkpIHtcbiAgICBwcmVmaXggPSBwcmVmaXgucmVwbGFjZShhcnJheVN1ZmZpeFJFLCBcIi5cIik7XG4gIH1cblxuICB2YXIgdW5pZm9ybXMgPSB7fTtcbiAgdmFyIHNldHRlcnMgPSB7fTtcbiAgYmxvY2tTcGVjLnVuaWZvcm1JbmRpY2VzLmZvckVhY2goZnVuY3Rpb24gKHVuaWZvcm1OZHgpIHtcbiAgICB2YXIgZGF0YSA9IHVuaWZvcm1EYXRhW3VuaWZvcm1OZHhdO1xuICAgIHZhciB0eXBlSW5mbyA9IHR5cGVNYXBbZGF0YS50eXBlXTtcbiAgICB2YXIgVHlwZSA9IHR5cGVJbmZvLlR5cGU7XG4gICAgdmFyIHBhZGRlZFNpemUgPSBwYWQodHlwZUluZm8uc2l6ZSwgMTYpO1xuICAgIHZhciBsZW5ndGggPSB0eXBlSW5mby5zaXplICsgKGRhdGEuc2l6ZSAtIDEpICogcGFkZGVkU2l6ZTtcbiAgICB2YXIgbmFtZSA9IGRhdGEubmFtZTtcblxuICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgocHJlZml4KSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKHByZWZpeC5sZW5ndGgpO1xuICAgIH1cblxuICAgIHZhciBpc0FycmF5ID0gbmFtZS5lbmRzV2l0aCgnWzBdJyk7XG5cbiAgICBpZiAoaXNBcnJheSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMyk7XG4gICAgfVxuXG4gICAgdmFyIHVuaWZvcm1WaWV3ID0gbmV3IFR5cGUoYXJyYXksIGRhdGEub2Zmc2V0LCBsZW5ndGggLyBUeXBlLkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICB1bmlmb3Jtc1tuYW1lXSA9IHVuaWZvcm1WaWV3O1xuICAgIHNldHRlcnNbbmFtZV0gPSBjcmVhdGVVbmlmb3JtQmxvY2tVbmlmb3JtU2V0dGVyKHVuaWZvcm1WaWV3LCBUeXBlLCB0eXBlSW5mby5zaXplLCBwYWRkZWRTaXplLCBpc0FycmF5KTtcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgbmFtZTogYmxvY2tOYW1lLFxuICAgIGFycmF5OiBhcnJheSxcbiAgICBhc0Zsb2F0OiBuZXcgRmxvYXQzMkFycmF5KGFycmF5KSxcbiAgICAvLyBmb3IgZGVidWdnaW5nXG4gICAgYnVmZmVyOiBidWZmZXIsXG4gICAgdW5pZm9ybXM6IHVuaWZvcm1zLFxuICAgIHNldHRlcnM6IHNldHRlcnNcbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBmb3IgdGhlIHNwZWNpZmllZCBibG9ja1xuICpcbiAqIE5vdGU6ICoqSWYgdGhlIGJsb2NrTmFtZSBtYXRjaGVzIG5vIGV4aXN0aW5nIGJsb2NrcyBhIHdhcm5pbmcgaXMgcHJpbnRlZCB0byB0aGUgY29uc29sZSBhbmQgYSBkdW1teVxuICogYFVuaWZvcm1CbG9ja0luZm9gIGlzIHJldHVybmVkKiouIFRoaXMgaXMgYmVjYXVzZSB3aGVuIGRlYnVnZ2luZyBHTFNMXG4gKiBpdCBpcyBjb21tb24gdG8gY29tbWVudCBvdXQgbGFyZ2UgcG9ydGlvbnMgb2YgYSBzaGFkZXIgb3IgZm9yIGV4YW1wbGUgc2V0XG4gKiB0aGUgZmluYWwgb3V0cHV0IHRvIGEgY29uc3RhbnQuIFdoZW4gdGhhdCBoYXBwZW5zIGJsb2NrcyBnZXQgb3B0aW1pemVkIG91dC5cbiAqIElmIHRoaXMgZnVuY3Rpb24gZGlkIG5vdCBjcmVhdGUgZHVtbXkgYmxvY2tzIHlvdXIgY29kZSB3b3VsZCBjcmFzaCB3aGVuIGRlYnVnZ2luZy5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gcHJvZ3JhbUluZm8gYSBgUHJvZ3JhbUluZm9gXG4gKiAgICAgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99XG4gKiBAcGFyYW0ge3N0cmluZ30gYmxvY2tOYW1lIFRoZSBuYW1lIG9mIHRoZSBibG9jay5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IFRoZSBjcmVhdGVkIFVuaWZvcm1CbG9ja0luZm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVW5pZm9ybUJsb2NrSW5mbyhnbCwgcHJvZ3JhbUluZm8sIGJsb2NrTmFtZSkge1xuICByZXR1cm4gY3JlYXRlVW5pZm9ybUJsb2NrSW5mb0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtSW5mby5wcm9ncmFtLCBwcm9ncmFtSW5mby51bmlmb3JtQmxvY2tTcGVjLCBibG9ja05hbWUpO1xufVxuLyoqXG4gKiBCaW5kcyBhIHVuaWZvcm0gYmxvY2sgdG8gdGhlIG1hdGNoaW5nIHVuaWZvcm0gYmxvY2sgcG9pbnQuXG4gKiBNYXRjaGVzIGJ5IGJsb2NrcyBieSBuYW1lIHNvIGJsb2NrcyBtdXN0IGhhdmUgdGhlIHNhbWUgbmFtZSBub3QganVzdCB0aGUgc2FtZVxuICogc3RydWN0dXJlLlxuICpcbiAqIElmIHlvdSBoYXZlIGNoYW5nZWQgYW55IHZhbHVlcyBhbmQgeW91IHVwbG9hZCB0aGUgdmFsdWVzIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgV2ViR0xCdWZmZXJcbiAqIGNhbGwge0BsaW5rIG1vZHVsZTp0d2dsLnNldFVuaWZvcm1CbG9ja30gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0wgMiByZW5kZXJpbmcgY29udGV4dC5cbiAqIEBwYXJhbSB7KG1vZHVsZTp0d2dsLlByb2dyYW1JbmZvfG1vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWMpfSBwcm9ncmFtSW5mbyBhIGBQcm9ncmFtSW5mb2BcbiAqICAgICBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVQcm9ncmFtSW5mb30gb3Igb3IgYFVuaWZvcm1CbG9ja1NwZWNgIGFzXG4gKiAgICAgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtfS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVW5pZm9ybUJsb2NrSW5mb30gdW5pZm9ybUJsb2NrSW5mbyBhIGBVbmlmb3JtQmxvY2tJbmZvYCBhcyByZXR1cm5lZCBmcm9tXG4gKiAgICAge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja0luZm99LlxuICogQHJldHVybiB7Ym9vbH0gdHJ1ZSBpZiBidWZmZXIgd2FzIGJvdW5kLiBJZiB0aGUgcHJvZ3JhbUluZm8gaGFzIG5vIGJsb2NrIHdpdGggdGhlIHNhbWUgYmxvY2sgbmFtZVxuICogICAgIG5vIGJ1ZmZlciBpcyBib3VuZC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxuZnVuY3Rpb24gYmluZFVuaWZvcm1CbG9jayhnbCwgcHJvZ3JhbUluZm8sIHVuaWZvcm1CbG9ja0luZm8pIHtcbiAgdmFyIHVuaWZvcm1CbG9ja1NwZWMgPSBwcm9ncmFtSW5mby51bmlmb3JtQmxvY2tTcGVjIHx8IHByb2dyYW1JbmZvO1xuICB2YXIgYmxvY2tTcGVjID0gdW5pZm9ybUJsb2NrU3BlYy5ibG9ja1NwZWNzW3VuaWZvcm1CbG9ja0luZm8ubmFtZV07XG5cbiAgaWYgKGJsb2NrU3BlYykge1xuICAgIHZhciBidWZmZXJCaW5kSW5kZXggPSBibG9ja1NwZWMuaW5kZXg7XG4gICAgZ2wuYmluZEJ1ZmZlclJhbmdlKFVOSUZPUk1fQlVGRkVSLCBidWZmZXJCaW5kSW5kZXgsIHVuaWZvcm1CbG9ja0luZm8uYnVmZmVyLCB1bmlmb3JtQmxvY2tJbmZvLm9mZnNldCB8fCAwLCB1bmlmb3JtQmxvY2tJbmZvLmFycmF5LmJ5dGVMZW5ndGgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyoqXG4gKiBVcGxvYWRzIHRoZSBjdXJyZW50IHVuaWZvcm0gdmFsdWVzIHRvIHRoZSBjb3JyZXNwb25kaW5nIFdlYkdMQnVmZmVyXG4gKiBhbmQgYmluZHMgdGhhdCBidWZmZXIgdG8gdGhlIHByb2dyYW0ncyBjb3JyZXNwb25kaW5nIGJpbmQgcG9pbnQgZm9yIHRoZSB1bmlmb3JtIGJsb2NrIG9iamVjdC5cbiAqXG4gKiBJZiB5b3UgaGF2ZW4ndCBjaGFuZ2VkIGFueSB2YWx1ZXMgYW5kIHlvdSBvbmx5IG5lZWQgdG8gYmluZCB0aGUgdW5pZm9ybSBibG9jayBvYmplY3RcbiAqIGNhbGwge0BsaW5rIG1vZHVsZTp0d2dsLmJpbmRVbmlmb3JtQmxvY2t9IGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBBIFdlYkdMIDIgcmVuZGVyaW5nIGNvbnRleHQuXG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb3xtb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tTcGVjKX0gcHJvZ3JhbUluZm8gYSBgUHJvZ3JhbUluZm9gXG4gKiAgICAgYXMgcmV0dXJuZWQgZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlUHJvZ3JhbUluZm99IG9yIG9yIGBVbmlmb3JtQmxvY2tTcGVjYCBhc1xuICogICAgIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVVuaWZvcm1CbG9ja1NwZWNGcm9tUHJvZ3JhbX0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja0luZm99IHVuaWZvcm1CbG9ja0luZm8gYSBgVW5pZm9ybUJsb2NrSW5mb2AgYXMgcmV0dXJuZWQgZnJvbVxuICogICAgIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvfS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxuZnVuY3Rpb24gc2V0VW5pZm9ybUJsb2NrKGdsLCBwcm9ncmFtSW5mbywgdW5pZm9ybUJsb2NrSW5mbykge1xuICBpZiAoYmluZFVuaWZvcm1CbG9jayhnbCwgcHJvZ3JhbUluZm8sIHVuaWZvcm1CbG9ja0luZm8pKSB7XG4gICAgZ2wuYnVmZmVyRGF0YShVTklGT1JNX0JVRkZFUiwgdW5pZm9ybUJsb2NrSW5mby5hcnJheSwgRFlOQU1JQ19EUkFXKTtcbiAgfVxufVxuLyoqXG4gKiBTZXRzIHZhbHVlcyBvZiBhIHVuaWZvcm0gYmxvY2sgb2JqZWN0XG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Vbmlmb3JtQmxvY2tJbmZvfSB1bmlmb3JtQmxvY2tJbmZvIEEgVW5pZm9ybUJsb2NrSW5mbyBhcyByZXR1cm5lZCBieSB7QGxpbmsgbW9kdWxlOnR3Z2wuY3JlYXRlVW5pZm9ybUJsb2NrSW5mb30uXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCA/Pn0gdmFsdWVzIEEgdW5pZm9ybSBuYW1lIHRvIHZhbHVlIG1hcCB3aGVyZSB0aGUgdmFsdWUgaXMgY29ycmVjdCBmb3IgdGhlIGdpdmVuXG4gKiAgICB0eXBlIG9mIHVuaWZvcm0uIFNvIGZvciBleGFtcGxlIGdpdmVuIGEgYmxvY2sgbGlrZVxuICpcbiAqICAgICAgIHVuaWZvcm0gU29tZUJsb2NrIHtcbiAqICAgICAgICAgZmxvYXQgc29tZUZsb2F0O1xuICogICAgICAgICB2ZWMyIHNvbWVWZWMyO1xuICogICAgICAgICB2ZWMzIHNvbWVWZWMzQXJyYXlbMl07XG4gKiAgICAgICAgIGludCBzb21lSW50O1xuICogICAgICAgfVxuICpcbiAqICBZb3UgY2FuIHNldCB0aGUgdmFsdWVzIG9mIHRoZSB1bmlmb3JtIGJsb2NrIHdpdGhcbiAqXG4gKiAgICAgICB0d2dsLnNldEJsb2NrVW5pZm9ybXMoc29tZUJsb2NrSW5mbywge1xuICogICAgICAgICAgc29tZUZsb2F0OiAxMi4zLFxuICogICAgICAgICAgc29tZVZlYzI6IFsxLCAyXSxcbiAqICAgICAgICAgIHNvbWVWZWMzQXJyYXk6IFsxLCAyLCAzLCA0LCA1LCA2XSxcbiAqICAgICAgICAgIHNvbWVJbnQ6IDUsXG4gKiAgICAgICB9XG4gKlxuICogIEFycmF5cyBjYW4gYmUgSmF2YVNjcmlwdCBhcnJheXMgb3IgdHlwZWQgYXJyYXlzXG4gKlxuICogIEFueSBuYW1lIHRoYXQgZG9lc24ndCBtYXRjaCB3aWxsIGJlIGlnbm9yZWRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC9wcm9ncmFtc1xuICovXG5cblxuZnVuY3Rpb24gc2V0QmxvY2tVbmlmb3Jtcyh1bmlmb3JtQmxvY2tJbmZvLCB2YWx1ZXMpIHtcbiAgdmFyIHNldHRlcnMgPSB1bmlmb3JtQmxvY2tJbmZvLnNldHRlcnM7XG5cbiAgZm9yICh2YXIgbmFtZSBpbiB2YWx1ZXMpIHtcbiAgICB2YXIgc2V0dGVyID0gc2V0dGVyc1tuYW1lXTtcblxuICAgIGlmIChzZXR0ZXIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tuYW1lXTtcbiAgICAgIHNldHRlcih2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIFNldCB1bmlmb3JtcyBhbmQgYmluZHMgcmVsYXRlZCB0ZXh0dXJlcy5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBwcm9ncmFtSW5mbyA9IGNyZWF0ZVByb2dyYW1JbmZvKFxuICogICAgICAgICBnbCwgW1wic29tZS12c1wiLCBcInNvbWUtZnNcIl0pO1xuICpcbiAqICAgICBjb25zdCB0ZXgxID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICogICAgIGNvbnN0IHRleDIgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gKlxuICogICAgIC4uLiBhc3N1bWUgd2Ugc2V0dXAgdGhlIHRleHR1cmVzIHdpdGggZGF0YSAuLi5cbiAqXG4gKiAgICAgY29uc3QgdW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3NvbWVTYW1wbGVyOiB0ZXgxLFxuICogICAgICAgdV9zb21lT3RoZXJTYW1wbGVyOiB0ZXgyLFxuICogICAgICAgdV9zb21lQ29sb3I6IFsxLDAsMCwxXSxcbiAqICAgICAgIHVfc29tZVBvc2l0aW9uOiBbMCwxLDFdLFxuICogICAgICAgdV9zb21lTWF0cml4OiBbXG4gKiAgICAgICAgIDEsMCwwLDAsXG4gKiAgICAgICAgIDAsMSwwLDAsXG4gKiAgICAgICAgIDAsMCwxLDAsXG4gKiAgICAgICAgIDAsMCwwLDAsXG4gKiAgICAgICBdLFxuICogICAgIH07XG4gKlxuICogICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gKlxuICogVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmluZCB0aGUgdGV4dHVyZXMgQU5EIHNldCB0aGVcbiAqIHVuaWZvcm1zLlxuICpcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCB1bmlmb3Jtcyk7XG4gKlxuICogRm9yIHRoZSBleGFtcGxlIGFib3ZlIGl0IGlzIGVxdWl2YWxlbnQgdG9cbiAqXG4gKiAgICAgdmFyIHRleFVuaXQgPSAwO1xuICogICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXhVbml0KTtcbiAqICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgxKTtcbiAqICAgICBnbC51bmlmb3JtMWkodV9zb21lU2FtcGxlckxvY2F0aW9uLCB0ZXhVbml0KyspO1xuICogICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyB0ZXhVbml0KTtcbiAqICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXgyKTtcbiAqICAgICBnbC51bmlmb3JtMWkodV9zb21lU2FtcGxlckxvY2F0aW9uLCB0ZXhVbml0KyspO1xuICogICAgIGdsLnVuaWZvcm00ZnYodV9zb21lQ29sb3JMb2NhdGlvbiwgWzEsIDAsIDAsIDFdKTtcbiAqICAgICBnbC51bmlmb3JtM2Z2KHVfc29tZVBvc2l0aW9uTG9jYXRpb24sIFswLCAxLCAxXSk7XG4gKiAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdih1X3NvbWVNYXRyaXgsIGZhbHNlLCBbXG4gKiAgICAgICAgIDEsMCwwLDAsXG4gKiAgICAgICAgIDAsMSwwLDAsXG4gKiAgICAgICAgIDAsMCwxLDAsXG4gKiAgICAgICAgIDAsMCwwLDAsXG4gKiAgICAgICBdKTtcbiAqXG4gKiBOb3RlIGl0IGlzIHBlcmZlY3RseSByZWFzb25hYmxlIHRvIGNhbGwgYHNldFVuaWZvcm1zYCBtdWx0aXBsZSB0aW1lcy4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3QgdW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3NvbWVTYW1wbGVyOiB0ZXgxLFxuICogICAgICAgdV9zb21lT3RoZXJTYW1wbGVyOiB0ZXgyLFxuICogICAgIH07XG4gKlxuICogICAgIGNvbnN0IG1vcmVVbmlmb3JtcyB7XG4gKiAgICAgICB1X3NvbWVDb2xvcjogWzEsMCwwLDFdLFxuICogICAgICAgdV9zb21lUG9zaXRpb246IFswLDEsMV0sXG4gKiAgICAgICB1X3NvbWVNYXRyaXg6IFtcbiAqICAgICAgICAgMSwwLDAsMCxcbiAqICAgICAgICAgMCwxLDAsMCxcbiAqICAgICAgICAgMCwwLDEsMCxcbiAqICAgICAgICAgMCwwLDAsMCxcbiAqICAgICAgIF0sXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgdW5pZm9ybXMpO1xuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIG1vcmVVbmlmb3Jtcyk7XG4gKlxuICogWW91IGNhbiBhbHNvIGFkZCBXZWJHTFNhbXBsZXJzIHRvIHVuaWZvcm0gc2FtcGxlcnMgYXMgaW5cbiAqXG4gKiAgICAgY29uc3QgdW5pZm9ybXMgPSB7XG4gKiAgICAgICB1X3NvbWVTYW1wbGVyOiB7XG4gKiAgICAgICAgIHRleHR1cmU6IHNvbWVXZWJHTFRleHR1cmUsXG4gKiAgICAgICAgIHNhbXBsZXI6IHNvbWVXZWJHTFNhbXBsZXIsXG4gKiAgICAgICB9LFxuICogICAgIH07XG4gKlxuICogSW4gd2hpY2ggY2FzZSBib3RoIHRoZSBzYW1wbGVyIGFuZCB0ZXh0dXJlIHdpbGwgYmUgYm91bmQgdG8gdGhlXG4gKiBzYW1lIHVuaXQuXG4gKlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPil9IHNldHRlcnMgYSBgUHJvZ3JhbUluZm9gIGFzIHJldHVybmVkIGZyb20gYGNyZWF0ZVByb2dyYW1JbmZvYCBvciB0aGUgc2V0dGVycyByZXR1cm5lZCBmcm9tXG4gKiAgICAgICAgYGNyZWF0ZVVuaWZvcm1TZXR0ZXJzYC5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsID8+fSB2YWx1ZXMgYW4gb2JqZWN0IHdpdGggdmFsdWVzIGZvciB0aGVcbiAqICAgICAgICB1bmlmb3Jtcy5cbiAqICAgWW91IGNhbiBwYXNzIG11bHRpcGxlIG9iamVjdHMgYnkgcHV0dGluZyB0aGVtIGluIGFuIGFycmF5IG9yIGJ5IGNhbGxpbmcgd2l0aCBtb3JlIGFyZ3VtZW50cy5Gb3IgZXhhbXBsZVxuICpcbiAqICAgICBjb25zdCBzaGFyZWRVbmlmb3JtcyA9IHtcbiAqICAgICAgIHVfZm9nTmVhcjogMTAsXG4gKiAgICAgICB1X3Byb2plY3Rpb246IC4uLlxuICogICAgICAgLi4uXG4gKiAgICAgfTtcbiAqXG4gKiAgICAgY29uc3QgbG9jYWxVbmlmb3JtcyA9IHtcbiAqICAgICAgIHVfd29ybGQ6IC4uLlxuICogICAgICAgdV9kaWZmdXNlQ29sb3I6IC4uLlxuICogICAgIH07XG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHNoYXJlZFVuaWZvcm1zLCBsb2NhbFVuaWZvcm1zKTtcbiAqXG4gKiAgICAgLy8gaXMgdGhlIHNhbWUgYXNcbiAqXG4gKiAgICAgdHdnbC5zZXRVbmlmb3Jtcyhwcm9ncmFtSW5mbywgW3NoYXJlZFVuaWZvcm1zLCBsb2NhbFVuaWZvcm1zXSk7XG4gKlxuICogICAgIC8vIGlzIHRoZSBzYW1lIGFzXG4gKlxuICogICAgIHR3Z2wuc2V0VW5pZm9ybXMocHJvZ3JhbUluZm8sIHNoYXJlZFVuaWZvcm1zKTtcbiAqICAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCBsb2NhbFVuaWZvcm1zfTtcbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFVuaWZvcm1zKHNldHRlcnMsIHZhbHVlcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHZhciBhY3R1YWxTZXR0ZXJzID0gc2V0dGVycy51bmlmb3JtU2V0dGVycyB8fCBzZXR0ZXJzO1xuICB2YXIgbnVtQXJncyA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgYU5keCA9IDE7IGFOZHggPCBudW1BcmdzOyArK2FOZHgpIHtcbiAgICB2YXIgX3ZhbHVlcyA9IGFyZ3VtZW50c1thTmR4XTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KF92YWx1ZXMpKSB7XG4gICAgICB2YXIgbnVtVmFsdWVzID0gX3ZhbHVlcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBudW1WYWx1ZXM7ICsraWkpIHtcbiAgICAgICAgc2V0VW5pZm9ybXMoYWN0dWFsU2V0dGVycywgX3ZhbHVlc1tpaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIF92YWx1ZXMpIHtcbiAgICAgICAgdmFyIHNldHRlciA9IGFjdHVhbFNldHRlcnNbbmFtZV07XG5cbiAgICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICAgIHNldHRlcihfdmFsdWVzW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBbGlhcyBmb3IgYHNldFVuaWZvcm1zYFxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0geyhtb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb3xPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+KX0gc2V0dGVycyBhIGBQcm9ncmFtSW5mb2AgYXMgcmV0dXJuZWQgZnJvbSBgY3JlYXRlUHJvZ3JhbUluZm9gIG9yIHRoZSBzZXR0ZXJzIHJldHVybmVkIGZyb21cbiAqICAgICAgICBgY3JlYXRlVW5pZm9ybVNldHRlcnNgLlxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgPz59IHZhbHVlcyBhbiBvYmplY3Qgd2l0aCB2YWx1ZXMgZm9yIHRoZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3Byb2dyYW1zXG4gKi9cblxuXG52YXIgc2V0VW5pZm9ybXNBbmRCaW5kVGV4dHVyZXMgPSBzZXRVbmlmb3Jtcztcbi8qKlxuICogQ3JlYXRlcyBzZXR0ZXIgZnVuY3Rpb25zIGZvciBhbGwgYXR0cmlidXRlcyBvZiBhIHNoYWRlclxuICogcHJvZ3JhbS4gWW91IGNhbiBwYXNzIHRoaXMgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSB0byBzZXQgYWxsIHlvdXIgYnVmZmVycyBhbmQgYXR0cmlidXRlcy5cbiAqXG4gKiBAc2VlIHtAbGluayBtb2R1bGU6dHdnbC5zZXRBdHRyaWJ1dGVzfSBmb3IgZXhhbXBsZVxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQgdG8gdXNlLlxuICogQHBhcmFtIHtXZWJHTFByb2dyYW19IHByb2dyYW0gdGhlIHByb2dyYW0gdG8gY3JlYXRlIHNldHRlcnMgZm9yLlxuICogQHJldHVybiB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gYW4gb2JqZWN0IHdpdGggYSBzZXR0ZXIgZm9yIGVhY2ggYXR0cmlidXRlIGJ5IG5hbWUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5leHBvcnRzLnNldFVuaWZvcm1zQW5kQmluZFRleHR1cmVzID0gc2V0VW5pZm9ybXNBbmRCaW5kVGV4dHVyZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnMoZ2wsIHByb2dyYW0pIHtcbiAgdmFyIGF0dHJpYlNldHRlcnMgPSB7fTtcbiAgdmFyIG51bUF0dHJpYnMgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIEFDVElWRV9BVFRSSUJVVEVTKTtcblxuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbnVtQXR0cmliczsgKytpaSkge1xuICAgIHZhciBhdHRyaWJJbmZvID0gZ2wuZ2V0QWN0aXZlQXR0cmliKHByb2dyYW0sIGlpKTtcblxuICAgIGlmIChpc0J1aWx0SW4oYXR0cmliSW5mbykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGF0dHJpYkluZm8ubmFtZSk7XG4gICAgdmFyIHR5cGVJbmZvID0gYXR0clR5cGVNYXBbYXR0cmliSW5mby50eXBlXTtcbiAgICB2YXIgc2V0dGVyID0gdHlwZUluZm8uc2V0dGVyKGdsLCBpbmRleCwgdHlwZUluZm8pO1xuICAgIHNldHRlci5sb2NhdGlvbiA9IGluZGV4O1xuICAgIGF0dHJpYlNldHRlcnNbYXR0cmliSW5mby5uYW1lXSA9IHNldHRlcjtcbiAgfVxuXG4gIHJldHVybiBhdHRyaWJTZXR0ZXJzO1xufVxuLyoqXG4gKiBTZXRzIGF0dHJpYnV0ZXMgYW5kIGJpbmRzIGJ1ZmZlcnMgKGRlcHJlY2F0ZWQuLi4gdXNlIHtAbGluayBtb2R1bGU6dHdnbC5zZXRCdWZmZXJzQW5kQXR0cmlidXRlc30pXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyhcbiAqICAgICAgICAgZ2wsIFtcInNvbWUtdnNcIiwgXCJzb21lLWZzXCIpO1xuICpcbiAqICAgICBjb25zdCBhdHRyaWJTZXR0ZXJzID0gY3JlYXRlQXR0cmlidXRlU2V0dGVycyhwcm9ncmFtKTtcbiAqXG4gKiAgICAgY29uc3QgcG9zaXRpb25CdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAqICAgICBjb25zdCB0ZXhjb29yZEJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICpcbiAqICAgICBjb25zdCBhdHRyaWJzID0ge1xuICogICAgICAgYV9wb3NpdGlvbjoge2J1ZmZlcjogcG9zaXRpb25CdWZmZXIsIG51bUNvbXBvbmVudHM6IDN9LFxuICogICAgICAgYV90ZXhjb29yZDoge2J1ZmZlcjogdGV4Y29vcmRCdWZmZXIsIG51bUNvbXBvbmVudHM6IDJ9LFxuICogICAgIH07XG4gKlxuICogICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gKlxuICogVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmluZCB0aGUgYnVmZmVycyBBTkQgc2V0IHRoZVxuICogYXR0cmlidXRlcy5cbiAqXG4gKiAgICAgc2V0QXR0cmlidXRlcyhhdHRyaWJTZXR0ZXJzLCBhdHRyaWJzKTtcbiAqXG4gKiBQcm9wZXJ0aWVzIG9mIGF0dHJpYnMuIEZvciBlYWNoIGF0dHJpYiB5b3UgY2FuIGFkZFxuICogcHJvcGVydGllczpcbiAqXG4gKiAqICAgdHlwZTogdGhlIHR5cGUgb2YgZGF0YSBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0ID0gZ2wuRkxPQVRcbiAqICogICBub3JtYWxpemU6IHdoZXRoZXIgb3Igbm90IHRvIG5vcm1hbGl6ZSB0aGUgZGF0YS4gRGVmYXVsdCA9IGZhbHNlXG4gKiAqICAgc3RyaWRlOiB0aGUgc3RyaWRlLiBEZWZhdWx0ID0gMFxuICogKiAgIG9mZnNldDogb2Zmc2V0IGludG8gdGhlIGJ1ZmZlci4gRGVmYXVsdCA9IDBcbiAqICogICBkaXZpc29yOiB0aGUgZGl2aXNvciBmb3IgaW5zdGFuY2VzLiBEZWZhdWx0ID0gdW5kZWZpbmVkXG4gKlxuICogRm9yIGV4YW1wbGUgaWYgeW91IGhhZCAzIHZhbHVlIGZsb2F0IHBvc2l0aW9ucywgMiB2YWx1ZVxuICogZmxvYXQgdGV4Y29vcmQgYW5kIDQgdmFsdWUgdWludDggY29sb3JzIHlvdSdkIHNldHVwIHlvdXJcbiAqIGF0dHJpYnMgbGlrZSB0aGlzXG4gKlxuICogICAgIGNvbnN0IGF0dHJpYnMgPSB7XG4gKiAgICAgICBhX3Bvc2l0aW9uOiB7YnVmZmVyOiBwb3NpdGlvbkJ1ZmZlciwgbnVtQ29tcG9uZW50czogM30sXG4gKiAgICAgICBhX3RleGNvb3JkOiB7YnVmZmVyOiB0ZXhjb29yZEJ1ZmZlciwgbnVtQ29tcG9uZW50czogMn0sXG4gKiAgICAgICBhX2NvbG9yOiB7XG4gKiAgICAgICAgIGJ1ZmZlcjogY29sb3JCdWZmZXIsXG4gKiAgICAgICAgIG51bUNvbXBvbmVudHM6IDQsXG4gKiAgICAgICAgIHR5cGU6IGdsLlVOU0lHTkVEX0JZVEUsXG4gKiAgICAgICAgIG5vcm1hbGl6ZTogdHJ1ZSxcbiAqICAgICAgIH0sXG4gKiAgICAgfTtcbiAqXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IHNldHRlcnMgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBtb2R1bGU6dHdnbC5BdHRyaWJJbmZvPn0gYnVmZmVycyBBdHRyaWJJbmZvcyBtYXBwZWQgYnkgYXR0cmlidXRlIG5hbWUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqIEBkZXByZWNhdGVkIHVzZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXN9XG4gKi9cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKHNldHRlcnMsIGJ1ZmZlcnMpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiBidWZmZXJzKSB7XG4gICAgdmFyIHNldHRlciA9IHNldHRlcnNbbmFtZV07XG5cbiAgICBpZiAoc2V0dGVyKSB7XG4gICAgICBzZXR0ZXIoYnVmZmVyc1tuYW1lXSk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIFNldHMgYXR0cmlidXRlcyBhbmQgYnVmZmVycyBpbmNsdWRpbmcgdGhlIGBFTEVNRU5UX0FSUkFZX0JVRkZFUmAgaWYgYXBwcm9wcmlhdGVcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBwcm9ncmFtSW5mbyA9IGNyZWF0ZVByb2dyYW1JbmZvKFxuICogICAgICAgICBnbCwgW1wic29tZS12c1wiLCBcInNvbWUtZnNcIik7XG4gKlxuICogICAgIGNvbnN0IGFycmF5cyA9IHtcbiAqICAgICAgIHBvc2l0aW9uOiB7IG51bUNvbXBvbmVudHM6IDMsIGRhdGE6IFswLCAwLCAwLCAxMCwgMCwgMCwgMCwgMTAsIDAsIDEwLCAxMCwgMF0sIH0sXG4gKiAgICAgICB0ZXhjb29yZDogeyBudW1Db21wb25lbnRzOiAyLCBkYXRhOiBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMV0sICAgICAgICAgICAgICAgICB9LFxuICogICAgIH07XG4gKlxuICogICAgIGNvbnN0IGJ1ZmZlckluZm8gPSBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcbiAqXG4gKiAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtSW5mby5wcm9ncmFtKTtcbiAqXG4gKiBUaGlzIHdpbGwgYXV0b21hdGljYWxseSBiaW5kIHRoZSBidWZmZXJzIEFORCBzZXQgdGhlXG4gKiBhdHRyaWJ1dGVzLlxuICpcbiAqICAgICBzZXRCdWZmZXJzQW5kQXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICpcbiAqIEZvciB0aGUgZXhhbXBsZSBhYm92ZSBpdCBpcyBlcXVpdmFsZW50IHRvXG4gKlxuICogICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XG4gKiAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYV9wb3NpdGlvbkxvY2F0aW9uKTtcbiAqICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfcG9zaXRpb25Mb2NhdGlvbiwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAqICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4Y29vcmRCdWZmZXIpO1xuICogICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfdGV4Y29vcmRMb2NhdGlvbik7XG4gKiAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX3RleGNvb3JkTG9jYXRpb24sIDQsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPil9IHNldHRlcnMgQSBgUHJvZ3JhbUluZm9gIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfSBvciBBdHRyaWJ1dGUgc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzfVxuICogQHBhcmFtIHsobW9kdWxlOnR3Z2wuQnVmZmVySW5mb3xtb2R1bGU6dHdnbC5WZXJ0ZXhBcnJheUluZm8pfSBidWZmZXJzIGEgYEJ1ZmZlckluZm9gIGFzIHJldHVybmVkIGZyb20ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzfS5cbiAqICAgb3IgYSBgVmVydGV4QXJyYXlJbmZvYCBhcyByZXR1cm5lZCBmcm9tIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVWZXJ0ZXhBcnJheUluZm99XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVycykge1xuICBpZiAoYnVmZmVycy52ZXJ0ZXhBcnJheU9iamVjdCkge1xuICAgIGdsLmJpbmRWZXJ0ZXhBcnJheShidWZmZXJzLnZlcnRleEFycmF5T2JqZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBzZXRBdHRyaWJ1dGVzKHByb2dyYW1JbmZvLmF0dHJpYlNldHRlcnMgfHwgcHJvZ3JhbUluZm8sIGJ1ZmZlcnMuYXR0cmlicyk7XG5cbiAgICBpZiAoYnVmZmVycy5pbmRpY2VzKSB7XG4gICAgICBnbC5iaW5kQnVmZmVyKEVMRU1FTlRfQVJSQVlfQlVGRkVSLCBidWZmZXJzLmluZGljZXMpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQcm9ncmFtSW5mb1xuICogQHByb3BlcnR5IHtXZWJHTFByb2dyYW19IHByb2dyYW0gQSBzaGFkZXIgcHJvZ3JhbVxuICogQHByb3BlcnR5IHtPYmplY3Q8c3RyaW5nLCBmdW5jdGlvbj59IHVuaWZvcm1TZXR0ZXJzIG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlVW5pZm9ybVNldHRlcnMsXG4gKiBAcHJvcGVydHkge09iamVjdDxzdHJpbmcsIGZ1bmN0aW9uPn0gYXR0cmliU2V0dGVycyBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYlNldHRlcnMsXG4gKiBAcHJvcGVydHkge21vZHVsZTp0d2dsLlVuaWZvcm1CbG9ja1NwZWN9IFt1bmlmb3JtQmxvY2tTcGFjZV0gYSB1bmlmb3JtIGJsb2NrIHNwZWMgZm9yIG1ha2luZyBVbmlmb3JtQmxvY2tJbmZvcyB3aXRoIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm8gZXRjLi5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0PHN0cmluZywgbW9kdWxlOnR3Z2wuVHJhbnNmb3JtRmVlZGJhY2tJbmZvPn0gW3RyYW5zZm9ybUZlZWRiYWNrSW5mb10gaW5mbyBmb3IgdHJhbnNmb3JtIGZlZWRiYWNrc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgUHJvZ3JhbUluZm8gZnJvbSBhbiBleGlzdGluZyBwcm9ncmFtLlxuICpcbiAqIEEgUHJvZ3JhbUluZm8gY29udGFpbnNcbiAqXG4gKiAgICAgcHJvZ3JhbUluZm8gPSB7XG4gKiAgICAgICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxuICogICAgICAgIHVuaWZvcm1TZXR0ZXJzOiBvYmplY3Qgb2Ygc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZVVuaWZvcm1TZXR0ZXJzLFxuICogICAgICAgIGF0dHJpYlNldHRlcnM6IG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQXR0cmliU2V0dGVycyxcbiAqICAgICB9XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqICAgICAgICB0byB1c2UuXG4gKiBAcGFyYW0ge1dlYkdMUHJvZ3JhbX0gcHJvZ3JhbSBhbiBleGlzdGluZyBXZWJHTFByb2dyYW0uXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5Qcm9ncmFtSW5mb30gVGhlIGNyZWF0ZWQgUHJvZ3JhbUluZm8uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pIHtcbiAgdmFyIHVuaWZvcm1TZXR0ZXJzID0gY3JlYXRlVW5pZm9ybVNldHRlcnMoZ2wsIHByb2dyYW0pO1xuICB2YXIgYXR0cmliU2V0dGVycyA9IGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnMoZ2wsIHByb2dyYW0pO1xuICB2YXIgcHJvZ3JhbUluZm8gPSB7XG4gICAgcHJvZ3JhbTogcHJvZ3JhbSxcbiAgICB1bmlmb3JtU2V0dGVyczogdW5pZm9ybVNldHRlcnMsXG4gICAgYXR0cmliU2V0dGVyczogYXR0cmliU2V0dGVyc1xuICB9O1xuXG4gIGlmICh1dGlscy5pc1dlYkdMMihnbCkpIHtcbiAgICBwcm9ncmFtSW5mby51bmlmb3JtQmxvY2tTcGVjID0gY3JlYXRlVW5pZm9ybUJsb2NrU3BlY0Zyb21Qcm9ncmFtKGdsLCBwcm9ncmFtKTtcbiAgICBwcm9ncmFtSW5mby50cmFuc2Zvcm1GZWVkYmFja0luZm8gPSBjcmVhdGVUcmFuc2Zvcm1GZWVkYmFja0luZm8oZ2wsIHByb2dyYW0pO1xuICB9XG5cbiAgcmV0dXJuIHByb2dyYW1JbmZvO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgUHJvZ3JhbUluZm8gZnJvbSAyIHNvdXJjZXMuXG4gKlxuICogQSBQcm9ncmFtSW5mbyBjb250YWluc1xuICpcbiAqICAgICBwcm9ncmFtSW5mbyA9IHtcbiAqICAgICAgICBwcm9ncmFtOiBXZWJHTFByb2dyYW0sXG4gKiAgICAgICAgdW5pZm9ybVNldHRlcnM6IG9iamVjdCBvZiBzZXR0ZXJzIGFzIHJldHVybmVkIGZyb20gY3JlYXRlVW5pZm9ybVNldHRlcnMsXG4gKiAgICAgICAgYXR0cmliU2V0dGVyczogb2JqZWN0IG9mIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJTZXR0ZXJzLFxuICogICAgIH1cbiAqXG4gKiBOT1RFOiBUaGVyZSBhcmUgNCBzaWduYXR1cmVzIGZvciB0aGlzIGZ1bmN0aW9uXG4gKlxuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUluZm8oZ2wsIFt2cywgZnNdLCBvcHRpb25zKTtcbiAqICAgICB0d2dsLmNyZWF0ZVByb2dyYW1JbmZvKGdsLCBbdnMsIGZzXSwgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUluZm8oZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2VyckZ1bmMpO1xuICogICAgIHR3Z2wuY3JlYXRlUHJvZ3JhbUluZm8oZ2wsIFt2cywgZnNdLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2VyckZ1bmMpO1xuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiAgICAgICAgdG8gdXNlLlxuICogQHBhcmFtIHtzdHJpbmdbXX0gc2hhZGVyU291cmNlcyBBcnJheSBvZiBzb3VyY2VzIGZvciB0aGVcbiAqICAgICAgICBzaGFkZXJzIG9yIGlkcy4gVGhlIGZpcnN0IGlzIGFzc3VtZWQgdG8gYmUgdGhlIHZlcnRleCBzaGFkZXIsXG4gKiAgICAgICAgdGhlIHNlY29uZCB0aGUgZnJhZ21lbnQgc2hhZGVyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5Qcm9ncmFtT3B0aW9uc3xzdHJpbmdbXXxtb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2F0dHJpYnNdIE9wdGlvbnMgZm9yIHRoZSBwcm9ncmFtIG9yIGFuIGFycmF5IG9mIGF0dHJpYnMgbmFtZXMgb3IgYW4gZXJyb3IgY2FsbGJhY2suIExvY2F0aW9ucyB3aWxsIGJlIGFzc2lnbmVkIGJ5IGluZGV4IGlmIG5vdCBwYXNzZWQgaW5cbiAqIEBwYXJhbSB7bnVtYmVyW119IFtvcHRfbG9jYXRpb25zfG1vZHVsZTp0d2dsLkVycm9yQ2FsbGJhY2tdIFRoZSBsb2NhdGlvbnMgZm9yIHRoZS4gQSBwYXJhbGxlbCBhcnJheSB0byBvcHRfYXR0cmlicyBsZXR0aW5nIHlvdSBhc3NpZ24gbG9jYXRpb25zIG9yIGFuIGVycm9yIGNhbGxiYWNrLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5FcnJvckNhbGxiYWNrfSBbb3B0X2Vycm9yQ2FsbGJhY2tdIGNhbGxiYWNrIGZvciBlcnJvcnMuIEJ5IGRlZmF1bHQgaXQganVzdCBwcmludHMgYW4gZXJyb3IgdG8gdGhlIGNvbnNvbGVcbiAqICAgICAgICBvbiBlcnJvci4gSWYgeW91IHdhbnQgc29tZXRoaW5nIGVsc2UgcGFzcyBhbiBjYWxsYmFjay4gSXQncyBwYXNzZWQgYW4gZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsLlByb2dyYW1JbmZvP30gVGhlIGNyZWF0ZWQgUHJvZ3JhbUluZm8gb3IgbnVsbCBpZiBpdCBmYWlsZWQgdG8gbGluayBvciBjb21waWxlXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvcHJvZ3JhbXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW1JbmZvKGdsLCBzaGFkZXJTb3VyY2VzLCBvcHRfYXR0cmlicywgb3B0X2xvY2F0aW9ucywgb3B0X2Vycm9yQ2FsbGJhY2spIHtcbiAgdmFyIHByb2dPcHRpb25zID0gZ2V0UHJvZ3JhbU9wdGlvbnMob3B0X2F0dHJpYnMsIG9wdF9sb2NhdGlvbnMsIG9wdF9lcnJvckNhbGxiYWNrKTtcbiAgdmFyIGdvb2QgPSB0cnVlO1xuICBzaGFkZXJTb3VyY2VzID0gc2hhZGVyU291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIC8vIExldHMgYXNzdW1lIGlmIHRoZXJlIGlzIG5vIFxcbiBpdCdzIGFuIGlkXG4gICAgaWYgKHNvdXJjZS5pbmRleE9mKFwiXFxuXCIpIDwgMCkge1xuICAgICAgdmFyIHNjcmlwdCA9IGdldEVsZW1lbnRCeUlkKHNvdXJjZSk7XG5cbiAgICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIHByb2dPcHRpb25zLmVycm9yQ2FsbGJhY2soXCJubyBlbGVtZW50IHdpdGggaWQ6IFwiICsgc291cmNlKTtcbiAgICAgICAgZ29vZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlID0gc2NyaXB0LnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfSk7XG5cbiAgaWYgKCFnb29kKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW1Gcm9tU291cmNlcyhnbCwgc2hhZGVyU291cmNlcywgcHJvZ09wdGlvbnMpO1xuXG4gIGlmICghcHJvZ3JhbSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVByb2dyYW1JbmZvRnJvbVByb2dyYW0oZ2wsIHByb2dyYW0pO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXh0dXJlcy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXh0dXJlcy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldFRleHR1cmVEZWZhdWx0c18gPSBzZXREZWZhdWx0cztcbmV4cG9ydHMuY3JlYXRlU2FtcGxlciA9IGNyZWF0ZVNhbXBsZXI7XG5leHBvcnRzLmNyZWF0ZVNhbXBsZXJzID0gY3JlYXRlU2FtcGxlcnM7XG5leHBvcnRzLnNldFNhbXBsZXJQYXJhbWV0ZXJzID0gc2V0U2FtcGxlclBhcmFtZXRlcnM7XG5leHBvcnRzLmNyZWF0ZVRleHR1cmUgPSBjcmVhdGVUZXh0dXJlO1xuZXhwb3J0cy5zZXRFbXB0eVRleHR1cmUgPSBzZXRFbXB0eVRleHR1cmU7XG5leHBvcnRzLnNldFRleHR1cmVGcm9tQXJyYXkgPSBzZXRUZXh0dXJlRnJvbUFycmF5O1xuZXhwb3J0cy5sb2FkVGV4dHVyZUZyb21VcmwgPSBsb2FkVGV4dHVyZUZyb21Vcmw7XG5leHBvcnRzLnNldFRleHR1cmVGcm9tRWxlbWVudCA9IHNldFRleHR1cmVGcm9tRWxlbWVudDtcbmV4cG9ydHMuc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUgPSBzZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZTtcbmV4cG9ydHMuc2V0VGV4dHVyZVBhcmFtZXRlcnMgPSBzZXRUZXh0dXJlUGFyYW1ldGVycztcbmV4cG9ydHMuc2V0RGVmYXVsdFRleHR1cmVDb2xvciA9IHNldERlZmF1bHRUZXh0dXJlQ29sb3I7XG5leHBvcnRzLmNyZWF0ZVRleHR1cmVzID0gY3JlYXRlVGV4dHVyZXM7XG5leHBvcnRzLnJlc2l6ZVRleHR1cmUgPSByZXNpemVUZXh0dXJlO1xuZXhwb3J0cy5jYW5HZW5lcmF0ZU1pcG1hcCA9IGNhbkdlbmVyYXRlTWlwbWFwO1xuZXhwb3J0cy5jYW5GaWx0ZXIgPSBjYW5GaWx0ZXI7XG5leHBvcnRzLmdldE51bUNvbXBvbmVudHNGb3JGb3JtYXQgPSBnZXROdW1Db21wb25lbnRzRm9yRm9ybWF0O1xuZXhwb3J0cy5nZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdCA9IGdldEJ5dGVzUGVyRWxlbWVudEZvckludGVybmFsRm9ybWF0O1xuZXhwb3J0cy5nZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQ7XG5cbnZhciB1dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdXRpbHMuanMgKi8gXCIuL3NyYy91dGlscy5qc1wiKSk7XG5cbnZhciB0eXBlZEFycmF5cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdHlwZWRhcnJheXMuanMgKi8gXCIuL3NyYy90eXBlZGFycmF5cy5qc1wiKSk7XG5cbnZhciBoZWxwZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2hlbHBlci5qcyAqLyBcIi4vc3JjL2hlbHBlci5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiBMb3cgbGV2ZWwgdGV4dHVyZSByZWxhdGVkIGZ1bmN0aW9uc1xuICpcbiAqIFlvdSBzaG91bGQgZ2VuZXJhbGx5IG5vdCBuZWVkIHRvIHVzZSB0aGVzZSBmdW5jdGlvbnMuIFRoZXkgYXJlIHByb3ZpZGVkXG4gKiBmb3IgdGhvc2UgY2FzZXMgd2hlcmUgeW91J3JlIGRvaW5nIHNvbWV0aGluZyBvdXQgb2YgdGhlIG9yZGluYXJ5XG4gKiBhbmQgeW91IG5lZWQgbG93ZXIgbGV2ZWwgYWNjZXNzLlxuICpcbiAqIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHRoZXkgYXJlIGF2YWlsYWJsZSBhdCBib3RoIGB0d2dsLnRleHR1cmVzYCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvdGV4dHVyZXNcbiAqL1xuLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNlZSBhIGdsb2JhbCBnbFxudmFyIGdsID0gdW5kZWZpbmVkO1xuLyogZXNsaW50LWRpc2FibGUtbGluZSAqL1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIHRleHR1cmVDb2xvcjogbmV3IFVpbnQ4QXJyYXkoWzEyOCwgMTkyLCAyNTUsIDI1NV0pLFxuICB0ZXh0dXJlT3B0aW9uczoge30sXG4gIGNyb3NzT3JpZ2luOiB1bmRlZmluZWRcbn07XG52YXIgaXNBcnJheUJ1ZmZlciA9IHR5cGVkQXJyYXlzLmlzQXJyYXlCdWZmZXI7IC8vIFNob3VsZCB3ZSBtYWtlIHRoaXMgb24gZGVtYW5kP1xuXG52YXIgZ2V0U2hhcmVkMkRDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc19jdHg7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRTaGFyZWQyRENvbnRleHQoKSB7XG4gICAgc19jdHggPSBzX2N0eCB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5jcmVhdGVFbGVtZW50ID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKS5nZXRDb250ZXh0KFwiMmRcIikgOiBudWxsKTtcbiAgICByZXR1cm4gc19jdHg7XG4gIH07XG59KCk7IC8vIE5PVEU6IENocm9tZSBzdXBwb3J0cyAyRCBjYW52YXMgaW4gYSBXb3JrZXIgKGJlaGluZCBmbGFnIGFzIG9mIHY2NCBidXRcbi8vICAgICAgIG5vdCBvbmx5IGRvZXMgRmlyZWZveCBOT1Qgc3VwcG9ydCBpdCBidXQgRmlyZWZveCBmcmVlemVzIGltbWVkaWF0ZWx5XG4vLyAgICAgICBpZiB5b3UgdHJ5IHRvIGNyZWF0ZSBvbmUgaW5zdGVhZCBvZiBqdXN0IHJldHVybmluZyBudWxsIGFuZCBjb250aW51aW5nLlxuLy8gIDogKGdsb2JhbC5PZmZzY3JlZW5DYW52YXMgJiYgKG5ldyBnbG9iYWwuT2Zmc2NyZWVuQ2FudmFzKDEsIDEpKS5nZXRDb250ZXh0KFwiMmRcIikpOyAgLy8gT2Zmc2NyZWVuQ2FudmFzIG1heSBub3Qgc3VwcG9ydCAyZFxuLy8gTk9URTogV2UgY2FuIG1heWJlIHJlbW92ZSBzb21lIG9mIHRoZSBuZWVkIGZvciB0aGUgMmQgY2FudmFzLiBJbiBXZWJHTDJcbi8vIHdlIGNhbiB1c2UgdGhlIHZhcmlvdXMgdW5wYWNrIHNldHRpbmdzLiBPdGhlcndpc2Ugd2UgY291bGQgdHJ5IHVzaW5nXG4vLyB0aGUgYWJpbGl0eSBvZiBhbiBJbWFnZUJpdG1hcCB0byBiZSBjdXQuIFVuZm9ydHVuYXRlbHkgY3V0dGluZyBhbiBJbWFnZUJpdG1hcFxuLy8gaXMgYXN5bmMgYW5kIHRoZSBjdXJyZW50IFRXR0wgY29kZSBleHBlY3RzIGEgbm9uLUFzeW5jIHJlc3VsdCB0aG91Z2ggdGhhdFxuLy8gbWlnaHQgbm90IGJlIGEgcHJvYmxlbS4gSW1hZ2VCaXRtYXAgdGhvdWdoIGlzIG5vdCBhdmFpbGFibGUgaW4gRWRnZSBvciBTYWZhcmlcbi8vIGFzIG9mIDIwMTgtMDEtMDJcblxuLyogUGl4ZWxGb3JtYXQgKi9cblxuXG52YXIgQUxQSEEgPSAweDE5MDY7XG52YXIgUkdCID0gMHgxOTA3O1xudmFyIFJHQkEgPSAweDE5MDg7XG52YXIgTFVNSU5BTkNFID0gMHgxOTA5O1xudmFyIExVTUlOQU5DRV9BTFBIQSA9IDB4MTkwQTtcbnZhciBERVBUSF9DT01QT05FTlQgPSAweDE5MDI7XG52YXIgREVQVEhfU1RFTkNJTCA9IDB4ODRGOTtcbi8qIFRleHR1cmVXcmFwTW9kZSAqL1xuLy8gY29uc3QgUkVQRUFUICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgyOTAxO1xuLy8gY29uc3QgTUlSUk9SRURfUkVQRUFUICAgICAgICAgICAgICAgID0gMHg4MzcwO1xuXG52YXIgQ0xBTVBfVE9fRURHRSA9IDB4ODEyZjtcbi8qIFRleHR1cmVNYWdGaWx0ZXIgKi9cblxudmFyIE5FQVJFU1QgPSAweDI2MDA7XG52YXIgTElORUFSID0gMHgyNjAxO1xuLyogVGV4dHVyZU1pbkZpbHRlciAqL1xuLy8gY29uc3QgTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCAgICAgICAgID0gMHgyNzAwO1xuLy8gY29uc3QgTElORUFSX01JUE1BUF9ORUFSRVNUICAgICAgICAgID0gMHgyNzAxO1xuLy8gY29uc3QgTkVBUkVTVF9NSVBNQVBfTElORUFSICAgICAgICAgID0gMHgyNzAyO1xuLy8gY29uc3QgTElORUFSX01JUE1BUF9MSU5FQVIgICAgICAgICAgID0gMHgyNzAzO1xuXG4vKiBUZXh0dXJlIFRhcmdldCAqL1xuXG52YXIgVEVYVFVSRV8yRCA9IDB4MGRlMTtcbnZhciBURVhUVVJFX0NVQkVfTUFQID0gMHg4NTEzO1xudmFyIFRFWFRVUkVfM0QgPSAweDgwNmY7XG52YXIgVEVYVFVSRV8yRF9BUlJBWSA9IDB4OGMxYTtcbi8qIEN1YmVtYXAgVGFyZ2V0cyAqL1xuXG52YXIgVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YID0gMHg4NTE1O1xudmFyIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCA9IDB4ODUxNjtcbnZhciBURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1kgPSAweDg1MTc7XG52YXIgVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZID0gMHg4NTE4O1xudmFyIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiA9IDB4ODUxOTtcbnZhciBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ogPSAweDg1MWE7XG4vKiBUZXh0dXJlIFBhcmFtZXRlcnMgKi9cblxudmFyIFRFWFRVUkVfTUlOX0ZJTFRFUiA9IDB4MjgwMTtcbnZhciBURVhUVVJFX01BR19GSUxURVIgPSAweDI4MDA7XG52YXIgVEVYVFVSRV9XUkFQX1MgPSAweDI4MDI7XG52YXIgVEVYVFVSRV9XUkFQX1QgPSAweDI4MDM7XG52YXIgVEVYVFVSRV9XUkFQX1IgPSAweDgwNzI7XG52YXIgVEVYVFVSRV9NSU5fTE9EID0gMHg4MTNhO1xudmFyIFRFWFRVUkVfTUFYX0xPRCA9IDB4ODEzYjtcbnZhciBURVhUVVJFX0JBU0VfTEVWRUwgPSAweDgxM2M7XG52YXIgVEVYVFVSRV9NQVhfTEVWRUwgPSAweDgxM2Q7XG4vKiBQaXhlbCBzdG9yZSAqL1xuXG52YXIgVU5QQUNLX0FMSUdOTUVOVCA9IDB4MGNmNTtcbnZhciBVTlBBQ0tfUk9XX0xFTkdUSCA9IDB4MGNmMjtcbnZhciBVTlBBQ0tfSU1BR0VfSEVJR0hUID0gMHg4MDZlO1xudmFyIFVOUEFDS19TS0lQX1BJWEVMUyA9IDB4MGNmNDtcbnZhciBVTlBBQ0tfU0tJUF9ST1dTID0gMHgwY2YzO1xudmFyIFVOUEFDS19TS0lQX0lNQUdFUyA9IDB4ODA2ZDtcbnZhciBVTlBBQ0tfQ09MT1JTUEFDRV9DT05WRVJTSU9OX1dFQkdMID0gMHg5MjQzO1xudmFyIFVOUEFDS19QUkVNVUxUSVBMWV9BTFBIQV9XRUJHTCA9IDB4OTI0MTtcbnZhciBVTlBBQ0tfRkxJUF9ZX1dFQkdMID0gMHg5MjQwO1xudmFyIFI4ID0gMHg4MjI5O1xudmFyIFI4X1NOT1JNID0gMHg4Rjk0O1xudmFyIFIxNkYgPSAweDgyMkQ7XG52YXIgUjMyRiA9IDB4ODIyRTtcbnZhciBSOFVJID0gMHg4MjMyO1xudmFyIFI4SSA9IDB4ODIzMTtcbnZhciBSRzE2VUkgPSAweDgyM0E7XG52YXIgUkcxNkkgPSAweDgyMzk7XG52YXIgUkczMlVJID0gMHg4MjNDO1xudmFyIFJHMzJJID0gMHg4MjNCO1xudmFyIFJHOCA9IDB4ODIyQjtcbnZhciBSRzhfU05PUk0gPSAweDhGOTU7XG52YXIgUkcxNkYgPSAweDgyMkY7XG52YXIgUkczMkYgPSAweDgyMzA7XG52YXIgUkc4VUkgPSAweDgyMzg7XG52YXIgUkc4SSA9IDB4ODIzNztcbnZhciBSMTZVSSA9IDB4ODIzNDtcbnZhciBSMTZJID0gMHg4MjMzO1xudmFyIFIzMlVJID0gMHg4MjM2O1xudmFyIFIzMkkgPSAweDgyMzU7XG52YXIgUkdCOCA9IDB4ODA1MTtcbnZhciBTUkdCOCA9IDB4OEM0MTtcbnZhciBSR0I1NjUgPSAweDhENjI7XG52YXIgUkdCOF9TTk9STSA9IDB4OEY5NjtcbnZhciBSMTFGX0cxMUZfQjEwRiA9IDB4OEMzQTtcbnZhciBSR0I5X0U1ID0gMHg4QzNEO1xudmFyIFJHQjE2RiA9IDB4ODgxQjtcbnZhciBSR0IzMkYgPSAweDg4MTU7XG52YXIgUkdCOFVJID0gMHg4RDdEO1xudmFyIFJHQjhJID0gMHg4RDhGO1xudmFyIFJHQjE2VUkgPSAweDhENzc7XG52YXIgUkdCMTZJID0gMHg4RDg5O1xudmFyIFJHQjMyVUkgPSAweDhENzE7XG52YXIgUkdCMzJJID0gMHg4RDgzO1xudmFyIFJHQkE4ID0gMHg4MDU4O1xudmFyIFNSR0I4X0FMUEhBOCA9IDB4OEM0MztcbnZhciBSR0JBOF9TTk9STSA9IDB4OEY5NztcbnZhciBSR0I1X0ExID0gMHg4MDU3O1xudmFyIFJHQkE0ID0gMHg4MDU2O1xudmFyIFJHQjEwX0EyID0gMHg4MDU5O1xudmFyIFJHQkExNkYgPSAweDg4MUE7XG52YXIgUkdCQTMyRiA9IDB4ODgxNDtcbnZhciBSR0JBOFVJID0gMHg4RDdDO1xudmFyIFJHQkE4SSA9IDB4OEQ4RTtcbnZhciBSR0IxMF9BMlVJID0gMHg5MDZGO1xudmFyIFJHQkExNlVJID0gMHg4RDc2O1xudmFyIFJHQkExNkkgPSAweDhEODg7XG52YXIgUkdCQTMySSA9IDB4OEQ4MjtcbnZhciBSR0JBMzJVSSA9IDB4OEQ3MDtcbnZhciBERVBUSF9DT01QT05FTlQxNiA9IDB4ODFBNTtcbnZhciBERVBUSF9DT01QT05FTlQyNCA9IDB4ODFBNjtcbnZhciBERVBUSF9DT01QT05FTlQzMkYgPSAweDhDQUM7XG52YXIgREVQVEgzMkZfU1RFTkNJTDggPSAweDhDQUQ7XG52YXIgREVQVEgyNF9TVEVOQ0lMOCA9IDB4ODhGMDtcbi8qIERhdGFUeXBlICovXG5cbnZhciBCWVRFID0gMHgxNDAwO1xudmFyIFVOU0lHTkVEX0JZVEUgPSAweDE0MDE7XG52YXIgU0hPUlQgPSAweDE0MDI7XG52YXIgVU5TSUdORURfU0hPUlQgPSAweDE0MDM7XG52YXIgSU5UID0gMHgxNDA0O1xudmFyIFVOU0lHTkVEX0lOVCA9IDB4MTQwNTtcbnZhciBGTE9BVCA9IDB4MTQwNjtcbnZhciBVTlNJR05FRF9TSE9SVF80XzRfNF80ID0gMHg4MDMzO1xudmFyIFVOU0lHTkVEX1NIT1JUXzVfNV81XzEgPSAweDgwMzQ7XG52YXIgVU5TSUdORURfU0hPUlRfNV82XzUgPSAweDgzNjM7XG52YXIgSEFMRl9GTE9BVCA9IDB4MTQwQjtcbnZhciBIQUxGX0ZMT0FUX09FUyA9IDB4OEQ2MTsgLy8gVGhhbmtzIEtocm9ub3MgZm9yIG1ha2luZyB0aGlzIGRpZmZlcmVudCA+OihcblxudmFyIFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFViA9IDB4ODM2ODtcbnZhciBVTlNJR05FRF9JTlRfMTBGXzExRl8xMUZfUkVWID0gMHg4QzNCO1xudmFyIFVOU0lHTkVEX0lOVF81XzlfOV85X1JFViA9IDB4OEMzRTtcbnZhciBGTE9BVF8zMl9VTlNJR05FRF9JTlRfMjRfOF9SRVYgPSAweDhEQUQ7XG52YXIgVU5TSUdORURfSU5UXzI0XzggPSAweDg0RkE7XG52YXIgUkcgPSAweDgyMjc7XG52YXIgUkdfSU5URUdFUiA9IDB4ODIyODtcbnZhciBSRUQgPSAweDE5MDM7XG52YXIgUkVEX0lOVEVHRVIgPSAweDhEOTQ7XG52YXIgUkdCX0lOVEVHRVIgPSAweDhEOTg7XG52YXIgUkdCQV9JTlRFR0VSID0gMHg4RDk5O1xudmFyIGZvcm1hdEluZm8gPSB7fTtcbntcbiAgLy8gTk9URTogdGhpcyBpcyBuYW1lZCBgbnVtQ29sb3JDb21wb25lbnRzYCB2cyBgbnVtQ29tcG9uZW50c2Agc28gd2UgY2FuIGxldCBVZ2xpZnkgbWFuZ2xlXG4gIC8vIHRoZSBuYW1lLlxuICB2YXIgZiA9IGZvcm1hdEluZm87XG4gIGZbQUxQSEFdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogMVxuICB9O1xuICBmW0xVTUlOQU5DRV0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAxXG4gIH07XG4gIGZbTFVNSU5BTkNFX0FMUEhBXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDJcbiAgfTtcbiAgZltSR0JdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogM1xuICB9O1xuICBmW1JHQkFdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogNFxuICB9O1xuICBmW1JFRF0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAxXG4gIH07XG4gIGZbUkVEX0lOVEVHRVJdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogMVxuICB9O1xuICBmW1JHXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDJcbiAgfTtcbiAgZltSR19JTlRFR0VSXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDJcbiAgfTtcbiAgZltSR0JdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogM1xuICB9O1xuICBmW1JHQl9JTlRFR0VSXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDNcbiAgfTtcbiAgZltSR0JBXSA9IHtcbiAgICBudW1Db2xvckNvbXBvbmVudHM6IDRcbiAgfTtcbiAgZltSR0JBX0lOVEVHRVJdID0ge1xuICAgIG51bUNvbG9yQ29tcG9uZW50czogNFxuICB9O1xuICBmW0RFUFRIX0NPTVBPTkVOVF0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAxXG4gIH07XG4gIGZbREVQVEhfU1RFTkNJTF0gPSB7XG4gICAgbnVtQ29sb3JDb21wb25lbnRzOiAyXG4gIH07XG59XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRleHR1cmVGb3JtYXREZXRhaWxzXG4gKiBAcHJvcGVydHkge251bWJlcn0gdGV4dHVyZUZvcm1hdCBmb3JtYXQgdG8gcGFzcyB0ZXhJbWFnZTJEIGFuZCBzaW1pbGFyIGZ1bmN0aW9ucy5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY29sb3JSZW5kZXJhYmxlIHRydWUgaWYgeW91IGNhbiByZW5kZXIgdG8gdGhpcyBmb3JtYXQgb2YgdGV4dHVyZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gdGV4dHVyZUZpbHRlcmFibGUgdHJ1ZSBpZiB5b3UgY2FuIGZpbHRlciB0aGUgdGV4dHVyZSwgZmFsc2UgaWYgeW91IGNhbiBvbnkgdXNlIGBORUFSRVNUYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW119IHR5cGUgQXJyYXkgb2YgcG9zc2libGUgdHlwZXMgeW91IGNhbiBwYXNzIHRvIHRleEltYWdlMkQgYW5kIHNpbWlsYXIgZnVuY3Rpb25cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0LjxudW1iZXIsbnVtYmVyPn0gYnl0ZXNQZXJFbGVtZW50TWFwIEEgbWFwIG9mIHR5cGVzIHRvIGJ5dGVzIHBlciBlbGVtZW50XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBzX3RleHR1cmVJbnRlcm5hbEZvcm1hdEluZm87XG5cbmZ1bmN0aW9uIGdldFRleHR1cmVJbnRlcm5hbEZvcm1hdEluZm8oaW50ZXJuYWxGb3JtYXQpIHtcbiAgaWYgKCFzX3RleHR1cmVJbnRlcm5hbEZvcm1hdEluZm8pIHtcbiAgICAvLyBOT1RFOiB0aGVzZSBwcm9wZXJ0aWVzIG5lZWQgdW5pcXVlIG5hbWVzIHNvIHdlIGNhbiBsZXQgVWdsaWZ5IG1hbmdsZSB0aGUgbmFtZS5cbiAgICB2YXIgdCA9IHt9OyAvLyB1bnNpemVkIGZvcm1hdHNcblxuICAgIHRbQUxQSEFdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogQUxQSEEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEsIDIsIDIsIDRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUsIEhBTEZfRkxPQVQsIEhBTEZfRkxPQVRfT0VTLCBGTE9BVF1cbiAgICB9O1xuICAgIHRbTFVNSU5BTkNFXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IExVTUlOQU5DRSxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMSwgMiwgMiwgNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURSwgSEFMRl9GTE9BVCwgSEFMRl9GTE9BVF9PRVMsIEZMT0FUXVxuICAgIH07XG4gICAgdFtMVU1JTkFOQ0VfQUxQSEFdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogTFVNSU5BTkNFX0FMUEhBLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsyLCA0LCA0LCA4XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVRdXG4gICAgfTtcbiAgICB0W1JHQl0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0IsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzMsIDYsIDYsIDEyLCAyXSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVQsIFVOU0lHTkVEX1NIT1JUXzVfNl81XVxuICAgIH07XG4gICAgdFtSR0JBXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzQsIDgsIDgsIDE2LCAyLCAyXSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFLCBIQUxGX0ZMT0FULCBIQUxGX0ZMT0FUX09FUywgRkxPQVQsIFVOU0lHTkVEX1NIT1JUXzRfNF80XzQsIFVOU0lHTkVEX1NIT1JUXzVfNV81XzFdXG4gICAgfTtcbiAgICB0W0RFUFRIX0NPTVBPTkVOVF0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBERVBUSF9DT01QT05FTlQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsyLCA0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlQsIFVOU0lHTkVEX1NIT1JUXVxuICAgIH07IC8vIHNpemVkIGZvcm1hdHNcblxuICAgIHRbUjhdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVELFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxXSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFXVxuICAgIH07XG4gICAgdFtSOF9TTk9STV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRUQsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxXSxcbiAgICAgIHR5cGU6IFtCWVRFXVxuICAgIH07XG4gICAgdFtSMTZGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzQsIDJdLFxuICAgICAgdHlwZTogW0ZMT0FULCBIQUxGX0ZMT0FUXVxuICAgIH07XG4gICAgdFtSMzJGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtGTE9BVF1cbiAgICB9O1xuICAgIHRbUjhVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzFdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1I4SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRURfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzFdLFxuICAgICAgdHlwZTogW0JZVEVdXG4gICAgfTtcbiAgICB0W1IxNlVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJFRF9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfU0hPUlRdXG4gICAgfTtcbiAgICB0W1IxNkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsyXSxcbiAgICAgIHR5cGU6IFtTSE9SVF1cbiAgICB9O1xuICAgIHRbUjMyVUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlRdXG4gICAgfTtcbiAgICB0W1IzMkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkVEX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtJTlRdXG4gICAgfTtcbiAgICB0W1JHOF0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSRyxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbUkc4X1NOT1JNXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMl0sXG4gICAgICB0eXBlOiBbQllURV1cbiAgICB9O1xuICAgIHRbUkcxNkZdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkcsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs4LCA0XSxcbiAgICAgIHR5cGU6IFtGTE9BVCwgSEFMRl9GTE9BVF1cbiAgICB9O1xuICAgIHRbUkczMkZdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkcsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbOF0sXG4gICAgICB0eXBlOiBbRkxPQVRdXG4gICAgfTtcbiAgICB0W1JHOFVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsyXSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9CWVRFXVxuICAgIH07XG4gICAgdFtSRzhJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsyXSxcbiAgICAgIHR5cGU6IFtCWVRFXVxuICAgIH07XG4gICAgdFtSRzE2VUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX1NIT1JUXVxuICAgIH07XG4gICAgdFtSRzE2SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbU0hPUlRdXG4gICAgfTtcbiAgICB0W1JHMzJVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbOF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXVxuICAgIH07XG4gICAgdFtSRzMySV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR19JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbOF0sXG4gICAgICB0eXBlOiBbSU5UXVxuICAgIH07XG4gICAgdFtSR0I4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbM10sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbU1JHQjhdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbM10sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbUkdCNTY1XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMywgMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURSwgVU5TSUdORURfU0hPUlRfNV82XzVdXG4gICAgfTtcbiAgICB0W1JHQjhfU05PUk1dID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbM10sXG4gICAgICB0eXBlOiBbQllURV1cbiAgICB9O1xuICAgIHRbUjExRl9HMTFGX0IxMEZdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTIsIDYsIDRdLFxuICAgICAgdHlwZTogW0ZMT0FULCBIQUxGX0ZMT0FULCBVTlNJR05FRF9JTlRfMTBGXzExRl8xMUZfUkVWXVxuICAgIH07XG4gICAgdFtSR0I5X0U1XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEyLCA2LCA0XSxcbiAgICAgIHR5cGU6IFtGTE9BVCwgSEFMRl9GTE9BVCwgVU5TSUdORURfSU5UXzVfOV85XzlfUkVWXVxuICAgIH07XG4gICAgdFtSR0IxNkZdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTIsIDZdLFxuICAgICAgdHlwZTogW0ZMT0FULCBIQUxGX0ZMT0FUXVxuICAgIH07XG4gICAgdFtSR0IzMkZdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzEyXSxcbiAgICAgIHR5cGU6IFtGTE9BVF1cbiAgICB9O1xuICAgIHRbUkdCOFVJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQl9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzNdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1JHQjhJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQl9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiBmYWxzZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzNdLFxuICAgICAgdHlwZTogW0JZVEVdXG4gICAgfTtcbiAgICB0W1JHQjE2VUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfU0hPUlRdXG4gICAgfTtcbiAgICB0W1JHQjE2SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs2XSxcbiAgICAgIHR5cGU6IFtTSE9SVF1cbiAgICB9O1xuICAgIHRbUkdCMzJVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXVxuICAgIH07XG4gICAgdFtSR0IzMkldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbMTJdLFxuICAgICAgdHlwZTogW0lOVF1cbiAgICB9O1xuICAgIHRbUkdCQThdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQSxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbU1JHQjhfQUxQSEE4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEVdXG4gICAgfTtcbiAgICB0W1JHQkE4X1NOT1JNXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtCWVRFXVxuICAgIH07XG4gICAgdFtSR0I1X0ExXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzQsIDIsIDRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0JZVEUsIFVOU0lHTkVEX1NIT1JUXzVfNV81XzEsIFVOU0lHTkVEX0lOVF8yXzEwXzEwXzEwX1JFVl1cbiAgICB9O1xuICAgIHRbUkdCQTRdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQSxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNCwgMl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURSwgVU5TSUdORURfU0hPUlRfNF80XzRfNF1cbiAgICB9O1xuICAgIHRbUkdCMTBfQTJdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQSxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWXVxuICAgIH07XG4gICAgdFtSR0JBMTZGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkEsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IGZhbHNlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IHRydWUsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxNiwgOF0sXG4gICAgICB0eXBlOiBbRkxPQVQsIEhBTEZfRkxPQVRdXG4gICAgfTtcbiAgICB0W1JHQkEzMkZdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQSxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogZmFsc2UsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxNl0sXG4gICAgICB0eXBlOiBbRkxPQVRdXG4gICAgfTtcbiAgICB0W1JHQkE4VUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfQllURV1cbiAgICB9O1xuICAgIHRbUkdCQThJXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IFJHQkFfSU5URUdFUixcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW0JZVEVdXG4gICAgfTtcbiAgICB0W1JHQjEwX0EyVUldID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogUkdCQV9JTlRFR0VSLFxuICAgICAgY29sb3JSZW5kZXJhYmxlOiB0cnVlLFxuICAgICAgdGV4dHVyZUZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgYnl0ZXNQZXJFbGVtZW50OiBbNF0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXzJfMTBfMTBfMTBfUkVWXVxuICAgIH07XG4gICAgdFtSR0JBMTZVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs4XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9TSE9SVF1cbiAgICB9O1xuICAgIHRbUkdCQTE2SV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs4XSxcbiAgICAgIHR5cGU6IFtTSE9SVF1cbiAgICB9O1xuICAgIHRbUkdCQTMySV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxNl0sXG4gICAgICB0eXBlOiBbSU5UXVxuICAgIH07XG4gICAgdFtSR0JBMzJVSV0gPSB7XG4gICAgICB0ZXh0dXJlRm9ybWF0OiBSR0JBX0lOVEVHRVIsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFsxNl0sXG4gICAgICB0eXBlOiBbVU5TSUdORURfSU5UXVxuICAgIH07IC8vIFNpemVkIEludGVybmFsXG5cbiAgICB0W0RFUFRIX0NPTVBPTkVOVDE2XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IERFUFRIX0NPTVBPTkVOVCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzIsIDRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX1NIT1JULCBVTlNJR05FRF9JTlRdXG4gICAgfTtcbiAgICB0W0RFUFRIX0NPTVBPTkVOVDI0XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IERFUFRIX0NPTVBPTkVOVCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW1VOU0lHTkVEX0lOVF1cbiAgICB9O1xuICAgIHRbREVQVEhfQ09NUE9ORU5UMzJGXSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IERFUFRIX0NPTVBPTkVOVCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW0ZMT0FUXVxuICAgIH07XG4gICAgdFtERVBUSDI0X1NURU5DSUw4XSA9IHtcbiAgICAgIHRleHR1cmVGb3JtYXQ6IERFUFRIX1NURU5DSUwsXG4gICAgICBjb2xvclJlbmRlcmFibGU6IHRydWUsXG4gICAgICB0ZXh0dXJlRmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICBieXRlc1BlckVsZW1lbnQ6IFs0XSxcbiAgICAgIHR5cGU6IFtVTlNJR05FRF9JTlRfMjRfOF1cbiAgICB9O1xuICAgIHRbREVQVEgzMkZfU1RFTkNJTDhdID0ge1xuICAgICAgdGV4dHVyZUZvcm1hdDogREVQVEhfU1RFTkNJTCxcbiAgICAgIGNvbG9yUmVuZGVyYWJsZTogdHJ1ZSxcbiAgICAgIHRleHR1cmVGaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgIGJ5dGVzUGVyRWxlbWVudDogWzRdLFxuICAgICAgdHlwZTogW0ZMT0FUXzMyX1VOU0lHTkVEX0lOVF8yNF84X1JFVl1cbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24gKGludGVybmFsRm9ybWF0KSB7XG4gICAgICB2YXIgaW5mbyA9IHRbaW50ZXJuYWxGb3JtYXRdO1xuICAgICAgaW5mby5ieXRlc1BlckVsZW1lbnRNYXAgPSB7fTtcbiAgICAgIGluZm8uYnl0ZXNQZXJFbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGJ5dGVzUGVyRWxlbWVudCwgbmR4KSB7XG4gICAgICAgIHZhciB0eXBlID0gaW5mby50eXBlW25keF07XG4gICAgICAgIGluZm8uYnl0ZXNQZXJFbGVtZW50TWFwW3R5cGVdID0gYnl0ZXNQZXJFbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc190ZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvID0gdDtcbiAgfVxuXG4gIHJldHVybiBzX3RleHR1cmVJbnRlcm5hbEZvcm1hdEluZm9baW50ZXJuYWxGb3JtYXRdO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgcGVyIGVsZW1lbnQgZm9yIGEgZ2l2ZW4gaW50ZXJuYWxGb3JtYXQgLyB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxGb3JtYXQgVGhlIGludGVybmFsRm9ybWF0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSB0eXBlIHBhcmFtZXRlciBmb3IgdGV4SW1hZ2UyRCBldGMuLlxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgbnVtYmVyIG9mIGJ5dGVzIHBlciBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gaW50ZXJuYWxGb3JtYXQsIHR5cGUgY29tYm9cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0Qnl0ZXNQZXJFbGVtZW50Rm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQsIHR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXRUZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKGludGVybmFsRm9ybWF0KTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cblxuICB2YXIgYnl0ZXNQZXJFbGVtZW50ID0gaW5mby5ieXRlc1BlckVsZW1lbnRNYXBbdHlwZV07XG5cbiAgaWYgKGJ5dGVzUGVyRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGludGVybmFsIGZvcm1hdFwiO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzUGVyRWxlbWVudDtcbn1cbi8qKlxuICogSW5mbyByZWxhdGVkIHRvIGEgc3BlY2lmaWMgdGV4dHVyZSBpbnRlcm5hbEZvcm1hdCBhcyByZXR1cm5lZFxuICogZnJvbSB7QGxpbmsgbW9kdWxlOnR3Z2wvdGV4dHVyZXMuZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0fS5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUZXh0dXJlRm9ybWF0SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGZvcm1hdCBGb3JtYXQgdG8gcGFzcyB0byB0ZXhJbWFnZTJEIGFuZCByZWxhdGVkIGZ1bmN0aW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHR5cGUgVHlwZSB0byBwYXNzIHRvIHRleEltYWdlMkQgYW5kIHJlbGF0ZWQgZnVuY3Rpb25zXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG4vKipcbiAqIEdldHMgdGhlIGZvcm1hdCBhbmQgdHlwZSBmb3IgYSBnaXZlbiBpbnRlcm5hbEZvcm1hdFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbEZvcm1hdCBUaGUgaW50ZXJuYWwgZm9ybWF0XG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC90ZXh0dXJlcy5UZXh0dXJlRm9ybWF0SW5mb30gdGhlIGNvcnJlc3BvbmRpbmcgZm9ybWF0IGFuZCB0eXBlLFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpIHtcbiAgdmFyIGluZm8gPSBnZXRUZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKGludGVybmFsRm9ybWF0KTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZvcm1hdDogaW5mby50ZXh0dXJlRm9ybWF0LFxuICAgIHR5cGU6IGluZm8udHlwZVswXVxuICB9O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdmFsdWUgaXMgcG93ZXIgb2YgMlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIG51bWJlciB0byBjaGVjay5cbiAqIEByZXR1cm4gdHJ1ZSBpZiB2YWx1ZSBpcyBwb3dlciBvZiAyXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gaXNQb3dlck9mMih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYgdmFsdWUgLSAxKSA9PT0gMDtcbn1cbi8qKlxuICogR2V0cyB3aGV0aGVyIG9yIG5vdCB3ZSBjYW4gZ2VuZXJhdGUgbWlwcyBmb3IgdGhlIGdpdmVuXG4gKiBpbnRlcm5hbCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggcGFyYW1ldGVyIGZyb20gdGV4SW1hZ2UyRCBldGMuLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbEZvcm1hdCBUaGUgaW50ZXJuYWxGb3JtYXQgcGFyYW1ldGVyIGZyb20gdGV4SW1hZ2UyRCBldGMuLlxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB3ZSBjYW4gZ2VuZXJhdGUgbWlwc1xuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBjYW5HZW5lcmF0ZU1pcG1hcChnbCwgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQpIHtcbiAgaWYgKCF1dGlscy5pc1dlYkdMMihnbCkpIHtcbiAgICByZXR1cm4gaXNQb3dlck9mMih3aWR0aCkgJiYgaXNQb3dlck9mMihoZWlnaHQpO1xuICB9XG5cbiAgdmFyIGluZm8gPSBnZXRUZXh0dXJlSW50ZXJuYWxGb3JtYXRJbmZvKGludGVybmFsRm9ybWF0KTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB0aHJvdyBcInVua25vd24gaW50ZXJuYWwgZm9ybWF0XCI7XG4gIH1cblxuICByZXR1cm4gaW5mby5jb2xvclJlbmRlcmFibGUgJiYgaW5mby50ZXh0dXJlRmlsdGVyYWJsZTtcbn1cbi8qKlxuICogR2V0cyB3aGV0aGVyIG9yIG5vdCB3ZSBjYW4gZ2VuZXJhdGUgbWlwcyBmb3IgdGhlIGdpdmVuIGZvcm1hdFxuICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsRm9ybWF0IFRoZSBpbnRlcm5hbEZvcm1hdCBwYXJhbWV0ZXIgZnJvbSB0ZXhJbWFnZTJEIGV0Yy4uXG4gKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHdlIGNhbiBnZW5lcmF0ZSBtaXBzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNhbkZpbHRlcihpbnRlcm5hbEZvcm1hdCkge1xuICB2YXIgaW5mbyA9IGdldFRleHR1cmVJbnRlcm5hbEZvcm1hdEluZm8oaW50ZXJuYWxGb3JtYXQpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHRocm93IFwidW5rbm93biBpbnRlcm5hbCBmb3JtYXRcIjtcbiAgfVxuXG4gIHJldHVybiBpbmZvLnRleHR1cmVGaWx0ZXJhYmxlO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBpbWFnZSBmb3JtYXQuXG4gKiBAcGFyYW0ge251bWJlcn0gZm9ybWF0IHRoZSBmb3JtYXQuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgY29tcG9uZW50cyBmb3IgdGhlIGZvcm1hdC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0TnVtQ29tcG9uZW50c0ZvckZvcm1hdChmb3JtYXQpIHtcbiAgdmFyIGluZm8gPSBmb3JtYXRJbmZvW2Zvcm1hdF07XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdGhyb3cgXCJ1bmtub3duIGZvcm1hdDogXCIgKyBmb3JtYXQ7XG4gIH1cblxuICByZXR1cm4gaW5mby5udW1Db2xvckNvbXBvbmVudHM7XG59XG4vKipcbiAqIEdldHMgdGhlIHRleHR1cmUgdHlwZSBmb3IgYSBnaXZlbiBhcnJheSB0eXBlLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEByZXR1cm4ge251bWJlcn0gdGhlIGdsIHRleHR1cmUgdHlwZVxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFRleHR1cmVUeXBlRm9yQXJyYXlUeXBlKGdsLCBzcmMsIGRlZmF1bHRUeXBlKSB7XG4gIGlmIChpc0FycmF5QnVmZmVyKHNyYykpIHtcbiAgICByZXR1cm4gdHlwZWRBcnJheXMuZ2V0R0xUeXBlRm9yVHlwZWRBcnJheShzcmMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRUeXBlIHx8IFVOU0lHTkVEX0JZVEU7XG59XG5cbmZ1bmN0aW9uIGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCB3aWR0aCwgaGVpZ2h0LCBudW1FbGVtZW50cykge1xuICBpZiAobnVtRWxlbWVudHMgJSAxICE9PSAwKSB7XG4gICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gIH1cblxuICBpZiAoIXdpZHRoICYmICFoZWlnaHQpIHtcbiAgICB2YXIgc2l6ZSA9IE1hdGguc3FydChudW1FbGVtZW50cyAvICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVAgPyA2IDogMSkpO1xuXG4gICAgaWYgKHNpemUgJSAxID09PSAwKSB7XG4gICAgICB3aWR0aCA9IHNpemU7XG4gICAgICBoZWlnaHQgPSBzaXplO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IG51bUVsZW1lbnRzO1xuICAgICAgaGVpZ2h0ID0gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWhlaWdodCkge1xuICAgIGhlaWdodCA9IG51bUVsZW1lbnRzIC8gd2lkdGg7XG5cbiAgICBpZiAoaGVpZ2h0ICUgMSkge1xuICAgICAgdGhyb3cgXCJjYW4ndCBndWVzcyBkaW1lbnNpb25zXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKCF3aWR0aCkge1xuICAgIHdpZHRoID0gbnVtRWxlbWVudHMgLyBoZWlnaHQ7XG5cbiAgICBpZiAod2lkdGggJSAxKSB7XG4gICAgICB0aHJvdyBcImNhbid0IGd1ZXNzIGRpbWVuc2lvbnNcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuLyoqXG4gKiBTZXRzIHRoZSBkZWZhdWx0IHRleHR1cmUgY29sb3IuXG4gKlxuICogVGhlIGRlZmF1bHQgdGV4dHVyZSBjb2xvciBpcyB1c2VkIHdoZW4gbG9hZGluZyB0ZXh0dXJlcyBmcm9tXG4gKiB1cmxzLiBCZWNhdXNlIHRoZSBVUkwgd2lsbCBiZSBsb2FkZWQgYXN5bmMgd2UnZCBsaWtlIHRvIGJlXG4gKiBhYmxlIHRvIHVzZSB0aGUgdGV4dHVyZSBpbW1lZGlhdGVseS4gQnkgcHV0dGluZyBhIDF4MSBwaXhlbFxuICogY29sb3IgaW4gdGhlIHRleHR1cmUgd2UgY2FuIHN0YXJ0IHVzaW5nIHRoZSB0ZXh0dXJlIGJlZm9yZVxuICogdGhlIFVSTCBoYXMgbG9hZGVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyW119IGNvbG9yIEFycmF5IG9mIDQgdmFsdWVzIGluIHRoZSByYW5nZSAwIHRvIDFcbiAqIEBkZXByZWNhdGVkIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0RGVmYXVsdHN9XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldERlZmF1bHRUZXh0dXJlQ29sb3IoY29sb3IpIHtcbiAgZGVmYXVsdHMudGV4dHVyZUNvbG9yID0gbmV3IFVpbnQ4QXJyYXkoW2NvbG9yWzBdICogMjU1LCBjb2xvclsxXSAqIDI1NSwgY29sb3JbMl0gKiAyNTUsIGNvbG9yWzNdICogMjU1XSk7XG59XG5cbmZ1bmN0aW9uIHNldERlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gIGhlbHBlci5jb3B5RXhpc3RpbmdQcm9wZXJ0aWVzKG5ld0RlZmF1bHRzLCBkZWZhdWx0cyk7XG5cbiAgaWYgKG5ld0RlZmF1bHRzLnRleHR1cmVDb2xvcikge1xuICAgIHNldERlZmF1bHRUZXh0dXJlQ29sb3IobmV3RGVmYXVsdHMudGV4dHVyZUNvbG9yKTtcbiAgfVxufVxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBzb3VyY2UgZm9yIGEgdGV4dHVyZS5cbiAqIEBjYWxsYmFjayBUZXh0dXJlRnVuY1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIHRoZSB0ZXh0dXJlIG9wdGlvbnNcbiAqIEByZXR1cm4geyp9IFJldHVybnMgYW55IG9mIHRoZSB0aGluZ3MgZG9jdW1lbnRlZCBmb3IgYHNyY2AgZm9yIHtAbGluayBtb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30uXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIFRleHR1cmUgb3B0aW9ucyBwYXNzZWQgdG8gbW9zdCB0ZXh0dXJlIGZ1bmN0aW9ucy4gRWFjaCBmdW5jdGlvbiB3aWxsIHVzZSB3aGF0ZXZlciBvcHRpb25zXG4gKiBhcmUgYXBwcm9wcmlhdGUgZm9yIGl0cyBuZWVkcy4gVGhpcyBsZXRzIHlvdSBwYXNzIHRoZSBzYW1lIG9wdGlvbnMgdG8gYWxsIGZ1bmN0aW9ucy5cbiAqXG4gKiBOb3RlOiBBIGBUZXhJbWFnZVNvdXJjZWAgaXMgZGVmaW5lZCBpbiB0aGUgV2ViR0wgc3BlYyBhcyBhIGBIVE1MSW1hZ2VFbGVtZW50YCwgYEhUTUxWaWRlb0VsZW1lbnRgLFxuICogYEhUTUxDYW52YXNFbGVtZW50YCwgYEltYWdlQml0bWFwYCwgb3IgYEltYWdlRGF0YWAuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVGV4dHVyZU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdGFyZ2V0XSB0aGUgdHlwZSBvZiB0ZXh0dXJlIGBnbC5URVhUVVJFXzJEYCBvciBgZ2wuVEVYVFVSRV9DVUJFX01BUGAuIERlZmF1bHRzIHRvIGBnbC5URVhUVVJFXzJEYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGV2ZWxdIHRoZSBtaXAgbGV2ZWwgdG8gYWZmZWN0LiBEZWZhdWx0cyB0byAwLiBOb3RlLCBpZiBzZXQgYXV0byB3aWxsIGJlIGNvbnNpZGVyZWQgZmFsc2UgdW5sZXNzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dpZHRoXSB0aGUgd2lkdGggb2YgdGhlIHRleHR1cmUuIE9ubHkgdXNlZCBpZiBzcmMgaXMgYW4gYXJyYXkgb3IgdHlwZWQgYXJyYXkgb3IgbnVsbC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaGVpZ2h0XSB0aGUgaGVpZ2h0IG9mIGEgdGV4dHVyZS4gT25seSB1c2VkIGlmIHNyYyBpcyBhbiBhcnJheSBvciB0eXBlZCBhcnJheSBvciBudWxsLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtkZXB0aF0gdGhlIGRlcHRoIG9mIGEgdGV4dHVyZS4gT25seSB1c2VkIGlmIHNyYyBpcyBhbiBhcnJheSBvciB0eXBlIGFycmF5IG9yIG51bGwgYW5kIHRhcmdldCBpcyBgVEVYVFVSRV8zRGAgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5dIHRoZSBtaW4gZmlsdGVyIHNldHRpbmcgKGVnLiBgZ2wuTElORUFSYCkuIERlZmF1bHRzIHRvIGBnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVJgXG4gKiAgICAgb3IgaWYgdGV4dHVyZSBpcyBub3QgYSBwb3dlciBvZiAyIG9uIGJvdGggZGltZW5zaW9ucyB0aGVuIGRlZmF1bHRzIHRvIGBnbC5MSU5FQVJgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttYWddIHRoZSBtYWcgZmlsdGVyIHNldHRpbmcgKGVnLiBgZ2wuTElORUFSYCkuIERlZmF1bHRzIHRvIGBnbC5MSU5FQVJgXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21pbk1hZ10gYm90aCB0aGUgbWluIGFuZCBtYWcgZmlsdGVyIHNldHRpbmdzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtpbnRlcm5hbEZvcm1hdF0gaW50ZXJuYWwgZm9ybWF0IGZvciB0ZXh0dXJlLiBEZWZhdWx0cyB0byBgZ2wuUkdCQWBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZm9ybWF0XSBmb3JtYXQgZm9yIHRleHR1cmUuIERlZmF1bHRzIHRvIGBnbC5SR0JBYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdHlwZV0gdHlwZSBmb3IgdGV4dHVyZS4gRGVmYXVsdHMgdG8gYGdsLlVOU0lHTkVEX0JZVEVgIHVubGVzcyBgc3JjYCBpcyBBcnJheUJ1ZmZlclZpZXcuIElmIGBzcmNgXG4gKiAgICAgaXMgQXJyYXlCdWZmZXJWaWV3IGRlZmF1bHRzIHRvIHR5cGUgdGhhdCBtYXRjaGVzIEFycmF5QnVmZmVyVmlldyB0eXBlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3cmFwXSBUZXh0dXJlIHdyYXBwaW5nIGZvciBib3RoIFMgYW5kIFQgKGFuZCBSIGlmIFRFWFRVUkVfM0Qgb3IgV2ViR0xTYW1wbGVyKS4gRGVmYXVsdHMgdG8gYGdsLlJFUEVBVGAgZm9yIDJEIHVubGVzcyBzcmMgaXMgV2ViR0wxIGFuZCBzcmMgbm90IG5wb3QgYW5kIGBnbC5DTEFNUF9UT19FREdFYCBmb3IgY3ViZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFt3cmFwU10gVGV4dHVyZSB3cmFwcGluZyBmb3IgUy4gRGVmYXVsdHMgdG8gYGdsLlJFUEVBVGAgYW5kIGBnbC5DTEFNUF9UT19FREdFYCBmb3IgY3ViZS4gSWYgc2V0IHRha2VzIHByZWNlZGVuY2Ugb3ZlciBgd3JhcGAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3dyYXBUXSBUZXh0dXJlIHdyYXBwaW5nIGZvciBULiBEZWZhdWx0cyB0byBgZ2wuUkVQRUFUYCBhbmQgYGdsLkNMQU1QX1RPX0VER0VgIGZvciBjdWJlLiBJZiBzZXQgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIGB3cmFwYC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd3JhcFJdIFRleHR1cmUgd3JhcHBpbmcgZm9yIFIuIERlZmF1bHRzIHRvIGBnbC5SRVBFQVRgIGFuZCBgZ2wuQ0xBTVBfVE9fRURHRWAgZm9yIGN1YmUuIElmIHNldCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgYHdyYXBgLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFttaW5Mb2RdIFRFWFRVUkVfTUlOX0xPRCBzZXR0aW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gW21heExvZF0gVEVYVFVSRV9NQVhfTE9EIHNldHRpbmdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbYmFzZUxldmVsXSBURVhUVVJFX0JBU0VfTEVWRUwgc2V0dGluZ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFttYXhMZXZlbF0gVEVYVFVSRV9NQVhfTEVWRUwgc2V0dGluZ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFt1bnBhY2tBbGlnbm1lbnRdIFRoZSBgZ2wuVU5QQUNLX0FMSUdOTUVOVGAgdXNlZCB3aGVuIHVwbG9hZGluZyBhbiBhcnJheS4gRGVmYXVsdHMgdG8gMS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fSBbY29sb3JdIENvbG9yIHRvIGluaXRpYWxpemUgdGhpcyB0ZXh0dXJlIHdpdGggaWYgbG9hZGluZyBhbiBpbWFnZSBhc3luY2hyb25vdXNseS5cbiAqICAgICBUaGUgZGVmYXVsdCB1c2UgYSBibHVlIDF4MSBwaXhlbCB0ZXh0dXJlLiBZb3UgY2FuIHNldCBhbm90aGVyIGRlZmF1bHQgYnkgY2FsbGluZyBgdHdnbC5zZXREZWZhdWx0c2BcbiAqICAgICBvciB5b3UgY2FuIHNldCBhbiBpbmRpdmlkdWFsIHRleHR1cmUncyBpbml0aWFsIGNvbG9yIGJ5IHNldHRpbmcgdGhpcyBwcm9wZXJ0eS4gRXhhbXBsZTogYFsxLCAuNSwgLjUsIDFdYCA9IHBpbmtcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcHJlbXVsdGlwbHlBbHBoYV0gV2hldGhlciBvciBub3QgdG8gcHJlbXVsdGlwbHkgYWxwaGEuIERlZmF1bHRzIHRvIHdoYXRldmVyIHRoZSBjdXJyZW50IHNldHRpbmcgaXMuXG4gKiAgICAgVGhpcyBsZXRzIHlvdSBzZXQgaXQgb25jZSBiZWZvcmUgY2FsbGluZyBgdHdnbC5jcmVhdGVUZXh0dXJlYCBvciBgdHdnbC5jcmVhdGVUZXh0dXJlc2AgYW5kIG9ubHkgb3ZlcnJpZGVcbiAqICAgICB0aGUgY3VycmVudCBzZXR0aW5nIGZvciBzcGVjaWZpYyB0ZXh0dXJlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZmxpcFldIFdoZXRoZXIgb3Igbm90IHRvIGZsaXAgdGhlIHRleHR1cmUgdmVydGljYWxseSBvbiB1cGxvYWQuIERlZmF1bHRzIHRvIHdoYXRldmVyIHRoZSBjdXJyZW50IHNldHRpbmcgaXMuXG4gKiAgICAgVGhpcyBsZXRzIHlvdSBzZXQgaXQgb25jZSBiZWZvcmUgY2FsbGluZyBgdHdnbC5jcmVhdGVUZXh0dXJlYCBvciBgdHdnbC5jcmVhdGVUZXh0dXJlc2AgYW5kIG9ubHkgb3ZlcnJpZGVcbiAqICAgICB0aGUgY3VycmVudCBzZXR0aW5nIGZvciBzcGVjaWZpYyB0ZXh0dXJlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29sb3JzcGFjZUNvbnZlcnNpb25dIFdoZXRoZXIgb3Igbm90IHRvIGxldCB0aGUgYnJvd3NlciBkbyBjb2xvcnNwYWNlIGNvbnZlcnNpb24gb2YgdGhlIHRleHR1cmUgb24gdXBsb2FkLiBEZWZhdWx0cyB0byB3aGF0ZXZlciB0aGUgY3VycmVudCBzZXR0aW5nIGlzLlxuICogICAgIFRoaXMgbGV0cyB5b3Ugc2V0IGl0IG9uY2UgYmVmb3JlIGNhbGxpbmcgYHR3Z2wuY3JlYXRlVGV4dHVyZWAgb3IgYHR3Z2wuY3JlYXRlVGV4dHVyZXNgIGFuZCBvbmx5IG92ZXJyaWRlXG4gKiAgICAgdGhlIGN1cnJlbnQgc2V0dGluZyBmb3Igc3BlY2lmaWMgdGV4dHVyZXMuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFthdXRvXSBJZiBgdW5kZWZpbmVkYCBvciBgdHJ1ZWAsIGluIFdlYkdMMSwgdGV4dHVyZSBmaWx0ZXJpbmcgaXMgc2V0IGF1dG9tYXRpY2FsbHkgZm9yIG5vbi1wb3dlciBvZiAyIGltYWdlcyBhbmRcbiAqICAgIG1pcHMgYXJlIGdlbmVyYXRlZCBmb3IgcG93ZXIgb2YgMiBpbWFnZXMuIEluIFdlYkdMMiBtaXBzIGFyZSBnZW5lcmF0ZWQgaWYgdGhleSBjYW4gYmUuIE5vdGU6IGlmIGBsZXZlbGAgaXMgc2V0IGFib3ZlXG4gKiAgICB0aGVuIHRoZW4gYGF1dG9gIGlzIGFzc3VtZWQgdG8gYmUgYGZhbHNlYCB1bmxlc3MgZXhwbGljaXR5IHNldCB0byBgdHJ1ZWAuXG4gKiBAcHJvcGVydHkge251bWJlcltdfSBbY3ViZUZhY2VPcmRlcl0gVGhlIG9yZGVyIHRoYXQgY3ViZSBmYWNlcyBhcmUgcHVsbGVkIG91dCBvZiBhbiBpbWcgb3Igc2V0IG9mIGltYWdlcy4gVGhlIGRlZmF1bHQgaXNcbiAqXG4gKiAgICAgW2dsLlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCxcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9YLFxuICogICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ksXG4gKiAgICAgIGdsLlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWSxcbiAqICAgICAgZ2wuVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9aLFxuICogICAgICBnbC5URVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1pdXG4gKlxuICogQHByb3BlcnR5IHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3fFRleEltYWdlU291cmNlfFRleEltYWdlU291cmNlW118c3RyaW5nfHN0cmluZ1tdfG1vZHVsZTp0d2dsLlRleHR1cmVGdW5jKX0gW3NyY10gc291cmNlIGZvciB0ZXh0dXJlXG4gKlxuICogICAgSWYgYHN0cmluZ2AgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgYSBVUkwgdG8gYW4gaW1hZ2UuIFRoZSBpbWFnZSB3aWxsIGJlIGRvd25sb2FkZWQgYXN5bmMuIEEgdXNhYmxlXG4gKiAgICAxeDEgcGl4ZWwgdGV4dHVyZSB3aWxsIGJlIHJldHVybmVkIGltbWVkaWF0ZWx5LiBUaGUgdGV4dHVyZSB3aWxsIGJlIHVwZGF0ZWQgb25jZSB0aGUgaW1hZ2UgaGFzIGRvd25sb2FkZWQuXG4gKiAgICBJZiBgdGFyZ2V0YCBpcyBgZ2wuVEVYVFVSRV9DVUJFX01BUGAgd2lsbCBhdHRlbXB0IHRvIGRpdmlkZSBpbWFnZSBpbnRvIDYgc3F1YXJlIHBpZWNlcy4gMXg2LCA2eDEsIDN4MiwgMngzLlxuICogICAgVGhlIHBpZWNlcyB3aWxsIGJlIHVwbG9hZGVkIGluIGBjdWJlRmFjZU9yZGVyYFxuICpcbiAqICAgIElmIGBzdHJpbmdbXWAgb3IgYFRleEltYWdlU291cmNlW11gIGFuZCB0YXJnZXQgaXMgYGdsLlRFWFRVUkVfQ1VCRV9NQVBgIHRoZW4gaXQgbXVzdCBoYXZlIDYgZW50cmllcywgb25lIGZvciBlYWNoIGZhY2Ugb2YgYSBjdWJlIG1hcC5cbiAqXG4gKiAgICBJZiBgc3RyaW5nW11gIG9yIGBUZXhJbWFnZVNvdXJjZVtdYCBhbmQgdGFyZ2V0IGlzIGBnbC5URVhUVVJFXzJEX0FSUkFZYCB0aGVuIGVhY2ggZW50cnkgaXMgYSBzbGljZSBvZiB0aGUgYSAyZCBhcnJheSB0ZXh0dXJlXG4gKiAgICBhbmQgd2lsbCBiZSBzY2FsZWQgdG8gdGhlIHNwZWNpZmllZCB3aWR0aCBhbmQgaGVpZ2h0IE9SIHRvIHRoZSBzaXplIG9mIHRoZSBmaXJzdCBpbWFnZSB0aGF0IGxvYWRzLlxuICpcbiAqICAgIElmIGBUZXhJbWFnZVNvdXJjZWAgdGhlbiBpdCB3aWwgYmUgdXNlZCBpbW1lZGlhdGVseSB0byBjcmVhdGUgdGhlIGNvbnRlbnRzIG9mIHRoZSB0ZXh0dXJlLiBFeGFtcGxlcyBgSFRNTEltYWdlRWxlbWVudGAsXG4gKiAgICBgSFRNTENhbnZhc0VsZW1lbnRgLCBgSFRNTFZpZGVvRWxlbWVudGAuXG4gKlxuICogICAgSWYgYG51bWJlcltdYCBvciBgQXJyYXlCdWZmZXJWaWV3YCBpdCdzIGFzc3VtZWQgdG8gYmUgZGF0YSBmb3IgYSB0ZXh0dXJlLiBJZiBgd2lkdGhgIG9yIGBoZWlnaHRgIGlzXG4gKiAgICBub3Qgc3BlY2lmaWVkIGl0IGlzIGd1ZXNzZWQgYXMgZm9sbG93cy4gRmlyc3QgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpcyBjb21wdXRlZCBieSBgc3JjLmxlbmd0aCAvIG51bUNvbXBvbmVudHNgXG4gKiAgICB3aGVyZSBgbnVtQ29tcG9uZW50c2AgaXMgZGVyaXZlZCBmcm9tIGBmb3JtYXRgLiBJZiBgdGFyZ2V0YCBpcyBgZ2wuVEVYVFVSRV9DVUJFX01BUGAgdGhlbiBgbnVtRWxlbWVudHNgIGlzIGRpdmlkZWRcbiAqICAgIGJ5IDYuIFRoZW5cbiAqXG4gKiAgICAqICAgSWYgbmVpdGhlciBgd2lkdGhgIG5vciBgaGVpZ2h0YCBhcmUgc3BlY2lmaWVkIGFuZCBgc3FydChudW1FbGVtZW50cylgIGlzIGFuIGludGVnZXIgdGhlbiB3aWR0aCBhbmQgaGVpZ2h0XG4gKiAgICAgICAgYXJlIHNldCB0byBgc3FydChudW1FbGVtZW50cylgLiBPdGhlcndpc2UgYHdpZHRoID0gbnVtRWxlbWVudHNgIGFuZCBgaGVpZ2h0ID0gMWAuXG4gKlxuICogICAgKiAgIElmIG9ubHkgb25lIG9mIGB3aWR0aGAgb3IgYGhlaWdodGAgaXMgc3BlY2lmaWVkIHRoZW4gdGhlIG90aGVyIGVxdWFscyBgbnVtRWxlbWVudHMgLyBzcGVjaWZpZWREaW1lbnNpb25gLlxuICpcbiAqIElmIGBudW1iZXJbXWAgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYHR5cGVgLlxuICpcbiAqIElmIGBzcmNgIGlzIGEgZnVuY3Rpb24gaXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIGBXZWJHTFJlbmRlcmluZ0NvbnRleHRgIGFuZCB0aGVzZSBvcHRpb25zLlxuICogV2hhdGV2ZXIgaXQgcmV0dXJucyBpcyBzdWJqZWN0IHRvIHRoZXNlIHJ1bGVzLiBTbyBpdCBjYW4gcmV0dXJuIGEgc3RyaW5nIHVybCwgYW4gYEhUTUxFbGVtZW50YFxuICogYW4gYXJyYXkgZXRjLi4uXG4gKlxuICogSWYgYHNyY2AgaXMgdW5kZWZpbmVkIHRoZW4gYW4gZW1wdHkgdGV4dHVyZSB3aWxsIGJlIGNyZWF0ZWQgb2Ygc2l6ZSBgd2lkdGhgIGJ5IGBoZWlnaHRgLlxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbY3Jvc3NPcmlnaW5dIFdoYXQgdG8gc2V0IHRoZSBjcm9zc09yaWdpbiBwcm9wZXJ0eSBvZiBpbWFnZXMgd2hlbiB0aGV5IGFyZSBkb3dubG9hZGVkLlxuICogICAgZGVmYXVsdDogdW5kZWZpbmVkLiBBbHNvIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuc2V0RGVmYXVsdHN9LlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogU2V0cyBhbnkgcGFja2luZyBzdGF0ZSB0aGF0IHdpbGwgYmUgc2V0IGJhc2VkIG9uIHRoZSBvcHRpb25zLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29sb3JzcGFjZUNvbnZlcnNpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19DT0xPUlNQQUNFX0NPTlZFUlNJT05fV0VCR0wsIG9wdGlvbnMuY29sb3JzcGFjZUNvbnZlcnNpb24pO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucHJlbXVsdGlwbHlBbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1BSRU1VTFRJUExZX0FMUEhBX1dFQkdMLCBvcHRpb25zLnByZW11bHRpcGx5QWxwaGEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZmxpcFkgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19GTElQX1lfV0VCR0wsIG9wdGlvbnMuZmxpcFkpO1xuICB9XG59XG4vKipcbiAqIFNldCBza2lwIHN0YXRlIHRvIGRlZmF1bHRzXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFNraXBTdGF0ZVRvRGVmYXVsdChnbCkge1xuICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfQUxJR05NRU5ULCA0KTtcblxuICBpZiAodXRpbHMuaXNXZWJHTDIoZ2wpKSB7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1JPV19MRU5HVEgsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19JTUFHRV9IRUlHSFQsIDApO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX1BJWEVMUywgMCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1NLSVBfUk9XUywgMCk7XG4gICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1NLSVBfSU1BR0VTLCAwKTtcbiAgfVxufVxuLyoqXG4gKiBTZXRzIHRoZSBwYXJhbWV0ZXJzIG9mIGEgdGV4dHVyZSBvciBzYW1wbGVyXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtudW1iZXJ8V2ViR0xTYW1wbGVyfSB0YXJnZXQgdGV4dHVyZSB0YXJnZXQgb3Igc2FtcGxlclxuICogQHBhcmFtIHtmdW5jdGlvbigpfSBwYXJhbWV0ZXJpRm4gdGV4UGFyYW1ldGVyaSBvciBzYW1wbGVyUGFyYW1ldGVyaSBmblxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogICBUaGlzIGlzIG9mdGVuIHRoZSBzYW1lIG9wdGlvbnMgeW91IHBhc3NlZCBpbiB3aGVuIHlvdSBjcmVhdGVkIHRoZSB0ZXh0dXJlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFRleHR1cmVTYW1wbGVyUGFyYW1ldGVycyhnbCwgdGFyZ2V0LCBwYXJhbWV0ZXJpRm4sIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMubWluTWFnKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9NSU5fRklMVEVSLCBvcHRpb25zLm1pbk1hZyk7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9NQUdfRklMVEVSLCBvcHRpb25zLm1pbk1hZyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5taW4pIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01JTl9GSUxURVIsIG9wdGlvbnMubWluKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1hZykge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfTUFHX0ZJTFRFUiwgb3B0aW9ucy5tYWcpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMud3JhcCkge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfV1JBUF9TLCBvcHRpb25zLndyYXApO1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfV1JBUF9ULCBvcHRpb25zLndyYXApO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV8zRCB8fCBoZWxwZXIuaXNTYW1wbGVyKGdsLCB0YXJnZXQpKSB7XG4gICAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX1dSQVBfUiwgb3B0aW9ucy53cmFwKTtcbiAgICB9XG4gIH1cblxuICBpZiAob3B0aW9ucy53cmFwUikge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfV1JBUF9SLCBvcHRpb25zLndyYXBSKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndyYXBTKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9XUkFQX1MsIG9wdGlvbnMud3JhcFMpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMud3JhcFQpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX1dSQVBfVCwgb3B0aW9ucy53cmFwVCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5taW5Mb2QpIHtcbiAgICBwYXJhbWV0ZXJpRm4uY2FsbChnbCwgdGFyZ2V0LCBURVhUVVJFX01JTl9MT0QsIG9wdGlvbnMubWluTG9kKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heExvZCkge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfTUFYX0xPRCwgb3B0aW9ucy5tYXhMb2QpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYmFzZUxldmVsKSB7XG4gICAgcGFyYW1ldGVyaUZuLmNhbGwoZ2wsIHRhcmdldCwgVEVYVFVSRV9CQVNFX0xFVkVMLCBvcHRpb25zLmJhc2VMZXZlbCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXhMZXZlbCkge1xuICAgIHBhcmFtZXRlcmlGbi5jYWxsKGdsLCB0YXJnZXQsIFRFWFRVUkVfTUFYX0xFVkVMLCBvcHRpb25zLm1heExldmVsKTtcbiAgfVxufVxuLyoqXG4gKiBTZXRzIHRoZSB0ZXh0dXJlIHBhcmFtZXRlcnMgb2YgYSB0ZXh0dXJlLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0VGV4dHVyZVBhcmFtZXRlcnMoZ2wsIHRleCwgb3B0aW9ucykge1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICBzZXRUZXh0dXJlU2FtcGxlclBhcmFtZXRlcnMoZ2wsIHRhcmdldCwgZ2wudGV4UGFyYW1ldGVyaSwgb3B0aW9ucyk7XG59XG4vKipcbiAqIFNldHMgdGhlIHNhbXBsZXIgcGFyYW1ldGVycyBvZiBhIHNhbXBsZXIuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFNhbXBsZXJ9IHNhbXBsZXIgdGhlIFdlYkdMU2FtcGxlciB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0U2FtcGxlclBhcmFtZXRlcnMoZ2wsIHNhbXBsZXIsIG9wdGlvbnMpIHtcbiAgc2V0VGV4dHVyZVNhbXBsZXJQYXJhbWV0ZXJzKGdsLCBzYW1wbGVyLCBnbC5zYW1wbGVyUGFyYW1ldGVyaSwgb3B0aW9ucyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc2FtcGxlciBvYmplY3QgYW5kIHNldHMgcGFyYW1ldGVycy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgY29uc3Qgc2FtcGxlciA9IHR3Z2wuY3JlYXRlU2FtcGxlcihnbCwge1xuICogICAgICAgIG1pbk1hZzogZ2wuTkVBUkVTVCwgICAgICAgICAvLyBzZXRzIGJvdGggVEVYVFVSRV9NSU5fRklMVEVSIGFuZCBURVhUVVJFX01BR19GSUxURVJcbiAqICAgICAgICB3cmFwOiBnbC5DTEFNUF9UT19ORUFSRVNULCAgLy8gc2V0cyBib3RoIFRFWFRVUkVfV1JBUF9TIGFuZCBURVhUVVJFX1dSQVBfVCBhbmQgVEVYVFVSRV9XUkFQX1JcbiAqICAgICAgfSk7XG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnM+fSBvcHRpb25zIEEgb2JqZWN0IG9mIFRleHR1cmVPcHRpb25zIG9uZSBwZXIgc2FtcGxlci5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLFdlYkdMU2FtcGxlcj59IHRoZSBjcmVhdGVkIHNhbXBsZXJzIGJ5IG5hbWVcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVTYW1wbGVyKGdsLCBvcHRpb25zKSB7XG4gIHZhciBzYW1wbGVyID0gZ2wuY3JlYXRlU2FtcGxlcigpO1xuICBzZXRTYW1wbGVyUGFyYW1ldGVycyhnbCwgc2FtcGxlciwgb3B0aW9ucyk7XG4gIHJldHVybiBzYW1wbGVyO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbXVsdGlwbGUgc2FtcGxlciBvYmplY3RzIGFuZCBzZXRzIHBhcmFtZXRlcnMgb24gZWFjaC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgY29uc3Qgc2FtcGxlcnMgPSB0d2dsLmNyZWF0ZVNhbXBsZXJzKGdsLCB7XG4gKiAgICAgICAgbmVhcmVzdDoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgIH0sXG4gKiAgICAgICAgbmVhcmVzdENsYW1wUzoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgICAgd3JhcFM6IGdsLkNMQU1QX1RPX05FQVJFU1QsXG4gKiAgICAgICAgfSxcbiAqICAgICAgICBsaW5lYXI6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTElORUFSLFxuICogICAgICAgIH0sXG4gKiAgICAgICAgbmVhcmVzdENsYW1wOiB7XG4gKiAgICAgICAgICBtaW5NYWc6IGdsLk5FQVJFU1QsXG4gKiAgICAgICAgICB3cmFwOiBnbC5DTEFNUF9UT19FREdFLFxuICogICAgICAgIH0sXG4gKiAgICAgICAgbGluZWFyQ2xhbXA6IHtcbiAqICAgICAgICAgIG1pbk1hZzogZ2wuTElORUFSLFxuICogICAgICAgICAgd3JhcDogZ2wuQ0xBTVBfVE9fRURHRSxcbiAqICAgICAgICB9LFxuICogICAgICAgIGxpbmVhckNsYW1wVDoge1xuICogICAgICAgICAgbWluTWFnOiBnbC5MSU5FQVIsXG4gKiAgICAgICAgICB3cmFwVDogZ2wuQ0xBTVBfVE9fRURHRSxcbiAqICAgICAgICB9LFxuICogICAgICB9KTtcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQgb24gdGhlIHNhbXBsZXJcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVTYW1wbGVycyhnbCwgc2FtcGxlck9wdGlvbnMpIHtcbiAgdmFyIHNhbXBsZXJzID0ge307XG4gIE9iamVjdC5rZXlzKHNhbXBsZXJPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgc2FtcGxlcnNbbmFtZV0gPSBjcmVhdGVTYW1wbGVyKGdsLCBzYW1wbGVyT3B0aW9uc1tuYW1lXSk7XG4gIH0pO1xuICByZXR1cm4gc2FtcGxlcnM7XG59XG4vKipcbiAqIE1ha2VzIGEgMXgxIHBpeGVsXG4gKiBJZiBubyBjb2xvciBpcyBwYXNzZWQgaW4gdXNlcyB0aGUgZGVmYXVsdCBjb2xvciB3aGljaCBjYW4gYmUgc2V0IGJ5IGNhbGxpbmcgYHNldERlZmF1bHRUZXh0dXJlQ29sb3JgLlxuICogQHBhcmFtIHsobnVtYmVyW118QXJyYXlCdWZmZXJWaWV3KX0gW2NvbG9yXSBUaGUgY29sb3IgdXNpbmcgMC0xIHZhbHVlc1xuICogQHJldHVybiB7VWludDhBcnJheX0gVW5pdDhBcnJheSB3aXRoIGNvbG9yLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIG1ha2UxUGl4ZWwoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvciB8fCBkZWZhdWx0cy50ZXh0dXJlQ29sb3I7XG5cbiAgaWYgKGlzQXJyYXlCdWZmZXIoY29sb3IpKSB7XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtjb2xvclswXSAqIDI1NSwgY29sb3JbMV0gKiAyNTUsIGNvbG9yWzJdICogMjU1LCBjb2xvclszXSAqIDI1NV0pO1xufVxuLyoqXG4gKiBTZXRzIGZpbHRlcmluZyBvciBnZW5lcmF0ZXMgbWlwcyBmb3IgdGV4dHVyZSBiYXNlZCBvbiB3aWR0aCBvciBoZWlnaHRcbiAqIElmIHdpZHRoIG9yIGhlaWdodCBpcyBub3QgcGFzc2VkIGluIHVzZXMgYG9wdGlvbnMud2lkdGhgIGFuZC8vb3IgYG9wdGlvbnMuaGVpZ2h0YFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBbb3B0aW9uc10gQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHdpZHRoIG9mIHRleHR1cmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0XSBoZWlnaHQgb2YgdGV4dHVyZVxuICogQHBhcmFtIHtudW1iZXJ9IFtpbnRlcm5hbEZvcm1hdF0gVGhlIGludGVybmFsRm9ybWF0IHBhcmFtZXRlciBmcm9tIHRleEltYWdlMkQgZXRjLi5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMudGV4dHVyZU9wdGlvbnM7XG4gIGludGVybmFsRm9ybWF0ID0gaW50ZXJuYWxGb3JtYXQgfHwgUkdCQTtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG4gIHdpZHRoID0gd2lkdGggfHwgb3B0aW9ucy53aWR0aDtcbiAgaGVpZ2h0ID0gaGVpZ2h0IHx8IG9wdGlvbnMuaGVpZ2h0O1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG5cbiAgaWYgKGNhbkdlbmVyYXRlTWlwbWFwKGdsLCB3aWR0aCwgaGVpZ2h0LCBpbnRlcm5hbEZvcm1hdCkpIHtcbiAgICBnbC5nZW5lcmF0ZU1pcG1hcCh0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaWx0ZXJpbmcgPSBjYW5GaWx0ZXIoaW50ZXJuYWxGb3JtYXQpID8gTElORUFSIDogTkVBUkVTVDtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9NSU5fRklMVEVSLCBmaWx0ZXJpbmcpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX01BR19GSUxURVIsIGZpbHRlcmluZyk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9TLCBDTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKHRhcmdldCwgVEVYVFVSRV9XUkFQX1QsIENMQU1QX1RPX0VER0UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmF1dG8gPT09IHRydWUgfHwgb3B0aW9ucy5hdXRvID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5sZXZlbCA9PT0gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBHZXRzIGFuIGFycmF5IG9mIGN1YmVtYXAgZmFjZSBlbnVtc1xuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqICAgVGhpcyBpcyBvZnRlbiB0aGUgc2FtZSBvcHRpb25zIHlvdSBwYXNzZWQgaW4gd2hlbiB5b3UgY3JlYXRlZCB0aGUgdGV4dHVyZS5cbiAqIEByZXR1cm4ge251bWJlcltdfSBjdWJlbWFwIGZhY2UgZW51bXNcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDdWJlRmFjZU9yZGVyKGdsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gb3B0aW9ucy5jdWJlRmFjZU9yZGVyIHx8IFtURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1gsIFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWCwgVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZLCBURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1ksIFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWiwgVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aXTtcbn1cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRmFjZUluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBmYWNlIGdsIGVudW0gZm9yIHRleEltYWdlMkRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuZHggZmFjZSBpbmRleCAoMCAtIDUpIGludG8gc291cmNlIGRhdGFcbiAqIEBpZ25vcmVcbiAqL1xuXG4vKipcbiAqIEdldHMgYW4gYXJyYXkgb2YgRmFjZUluZm9zXG4gKiBUaGVyZSdzIGEgYnVnIGluIHNvbWUgTlZpZGlhIGRyaXZlcnMgdGhhdCB3aWxsIGNyYXNoIHRoZSBkcml2ZXIgaWZcbiAqIGBnbC5URVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1hgIGlzIG5vdCB1cGxvYWRlZCBmaXJzdC4gU28sIHdlIHRha2VcbiAqIHRoZSB1c2VyJ3MgZGVzaXJlZCBvcmRlciBmcm9tIGhpcyBmYWNlcyB0byBXZWJHTCBhbmQgbWFrZSBzdXJlIHdlXG4gKiBkbyB0aGUgZmFjZXMgaW4gV2ViR0wgb3JkZXJcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHJldHVybiB7RmFjZUluZm9bXX0gY3ViZW1hcCBmYWNlIGluZm9zLiBBcmd1YWJseSB0aGUgYGZhY2VgIHByb3BlcnR5IG9mIGVhY2ggZWxlbWVudCBpcyByZWR1bmRhbnQgYnV0XG4gKiAgICBpdCdzIG5lZWRlZCBpbnRlcm5hbGx5IHRvIHNvcnQgdGhlIGFycmF5IG9mIGBuZHhgIHByb3BlcnRpZXMgYnkgYGZhY2VgLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpIHtcbiAgdmFyIGZhY2VzID0gZ2V0Q3ViZUZhY2VPcmRlcihnbCwgb3B0aW9ucyk7IC8vIHdvcmsgYXJvdW5kIGJ1ZyBpbiBOVmlkaWEgZHJpdmVycy4gV2UgaGF2ZSB0byB1cGxvYWQgdGhlIGZpcnN0IGZhY2UgZmlyc3QgZWxzZSB0aGUgZHJpdmVyIGNyYXNoZXMgOihcblxuICB2YXIgZmFjZXNXaXRoTmR4ID0gZmFjZXMubWFwKGZ1bmN0aW9uIChmYWNlLCBuZHgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmFjZTogZmFjZSxcbiAgICAgIG5keDogbmR4XG4gICAgfTtcbiAgfSk7XG4gIGZhY2VzV2l0aE5keC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEuZmFjZSAtIGIuZmFjZTtcbiAgfSk7XG4gIHJldHVybiBmYWNlc1dpdGhOZHg7XG59XG4vKipcbiAqIFNldCBhIHRleHR1cmUgZnJvbSB0aGUgY29udGVudHMgb2YgYW4gZWxlbWVudC4gV2lsbCBhbHNvIHNldFxuICogdGV4dHVyZSBmaWx0ZXJpbmcgb3IgZ2VuZXJhdGUgbWlwcyBiYXNlZCBvbiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZWxlbWVudFxuICogdW5sZXNzIGBvcHRpb25zLmF1dG8gPT09IGZhbHNlYC4gSWYgYHRhcmdldCA9PT0gZ2wuVEVYVFVSRV9DVUJFX01BUGAgd2lsbFxuICogYXR0ZW1wdCB0byBzbGljZSBpbWFnZSBpbnRvIDF4NiwgMngzLCAzeDIsIG9yIDZ4MSBpbWFnZXMsIG9uZSBmb3IgZWFjaCBmYWNlLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgYSBjYW52YXMsIGltZywgb3IgdmlkZW8gZWxlbWVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogICBUaGlzIGlzIG9mdGVuIHRoZSBzYW1lIG9wdGlvbnMgeW91IHBhc3NlZCBpbiB3aGVuIHlvdSBjcmVhdGVkIHRoZSB0ZXh0dXJlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKiBAa2luZCBmdW5jdGlvblxuICovXG5cblxuZnVuY3Rpb24gc2V0VGV4dHVyZUZyb21FbGVtZW50KGdsLCB0ZXgsIGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMudGV4dHVyZU9wdGlvbnM7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEO1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciB3aWR0aCA9IGVsZW1lbnQud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBlbGVtZW50LmhlaWdodDtcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBSR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZm9ybWF0VHlwZS50eXBlO1xuICBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG5cbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIC8vIGd1ZXNzIHRoZSBwYXJ0c1xuICAgIHZhciBpbWdXaWR0aCA9IGVsZW1lbnQud2lkdGg7XG4gICAgdmFyIGltZ0hlaWdodCA9IGVsZW1lbnQuaGVpZ2h0O1xuICAgIHZhciBzaXplO1xuICAgIHZhciBzbGljZXM7XG5cbiAgICBpZiAoaW1nV2lkdGggLyA2ID09PSBpbWdIZWlnaHQpIHtcbiAgICAgIC8vIEl0J3MgNngxXG4gICAgICBzaXplID0gaW1nSGVpZ2h0O1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDEsIDAsIDIsIDAsIDMsIDAsIDQsIDAsIDUsIDBdO1xuICAgIH0gZWxzZSBpZiAoaW1nSGVpZ2h0IC8gNiA9PT0gaW1nV2lkdGgpIHtcbiAgICAgIC8vIEl0J3MgMXg2XG4gICAgICBzaXplID0gaW1nV2lkdGg7XG4gICAgICBzbGljZXMgPSBbMCwgMCwgMCwgMSwgMCwgMiwgMCwgMywgMCwgNCwgMCwgNV07XG4gICAgfSBlbHNlIGlmIChpbWdXaWR0aCAvIDMgPT09IGltZ0hlaWdodCAvIDIpIHtcbiAgICAgIC8vIEl0J3MgM3gyXG4gICAgICBzaXplID0gaW1nV2lkdGggLyAzO1xuICAgICAgc2xpY2VzID0gWzAsIDAsIDEsIDAsIDIsIDAsIDAsIDEsIDEsIDEsIDIsIDFdO1xuICAgIH0gZWxzZSBpZiAoaW1nV2lkdGggLyAyID09PSBpbWdIZWlnaHQgLyAzKSB7XG4gICAgICAvLyBJdCdzIDJ4M1xuICAgICAgc2l6ZSA9IGltZ1dpZHRoIC8gMjtcbiAgICAgIHNsaWNlcyA9IFswLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAyLCAxLCAyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCJjYW4ndCBmaWd1cmUgb3V0IGN1YmUgbWFwIGZyb20gZWxlbWVudDogXCIgKyAoZWxlbWVudC5zcmMgPyBlbGVtZW50LnNyYyA6IGVsZW1lbnQubm9kZU5hbWUpO1xuICAgIH1cblxuICAgIHZhciBjdHggPSBnZXRTaGFyZWQyRENvbnRleHQoKTtcblxuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5jYW52YXMud2lkdGggPSBzaXplO1xuICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBzaXplO1xuICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgdmFyIHhPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMF0gKiBzaXplO1xuICAgICAgICB2YXIgeU9mZnNldCA9IHNsaWNlc1tmLm5keCAqIDIgKyAxXSAqIHNpemU7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoZWxlbWVudCwgeE9mZnNldCwgeU9mZnNldCwgc2l6ZSwgc2l6ZSwgMCwgMCwgc2l6ZSwgc2l6ZSk7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZi5mYWNlLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgY3R4LmNhbnZhcyk7XG4gICAgICB9KTsgLy8gRnJlZSB1cCB0aGUgY2FudmFzIG1lbW9yeVxuXG4gICAgICBjdHguY2FudmFzLndpZHRoID0gMTtcbiAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gMTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjcmVhdGVJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIE5PVEU6IEl0IHNlZW1zIGxpa2Ugd2Ugc2hvdWxkIHByZWZlciBJbWFnZUJpdG1hcCBiZWNhdXNlIHVubGlrZSBjYW52YXMgaXQnc1xuICAgICAgLy8gbm90ZSBsb3NzeT8gKGFscGhhIGlzIG5vdCBwcmVtdWx0aXBsaWVkPyBhbHRob3VnaCBJJ20gbm90IHN1cmUgd2hhdFxuICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgdmFyIHhPZmZzZXQgPSBzbGljZXNbZi5uZHggKiAyICsgMF0gKiBzaXplO1xuICAgICAgICB2YXIgeU9mZnNldCA9IHNsaWNlc1tmLm5keCAqIDIgKyAxXSAqIHNpemU7IC8vIFdlIGNhbid0IGVhc2lseSB1c2UgYSBkZWZhdWx0IHRleHR1cmUgY29sb3IgaGVyZSBhcyBpdCB3b3VsZCBoYXZlIHRvIG1hdGNoXG4gICAgICAgIC8vIHRoZSB0eXBlIGFjcm9zcyBhbGwgZmFjZXMgd2hlcmUgYXMgd2l0aCBhIDJEIG9uZSB0aGVyZSdzIG9ubHkgb25lIGZhY2VcbiAgICAgICAgLy8gc28gd2UncmUgcmVwbGFjaW5nIGV2ZXJ5dGhpbmcgYWxsIGF0IG9uY2UuIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgICAgIC8vIE9uIHRoZSBvdGhlciBoYW5kIHdlIG5lZWQgYWxsIGZhY2VzIHRvIGJlIHRoZSBzYW1lIHNpemUgc28gYXMgb25lIGZhY2UgbG9hZHNcbiAgICAgICAgLy8gdGhlIHJlc3QgbWF0Y2ggZWxzZSB0aGUgdGV4dHVyZSB3aWxsIGJlIHVuLXJlbmRlcmFibGUuXG5cbiAgICAgICAgZ2wudGV4SW1hZ2UyRChmLmZhY2UsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgc2l6ZSwgc2l6ZSwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgICAgICAgY3JlYXRlSW1hZ2VCaXRtYXAoZWxlbWVudCwgeE9mZnNldCwgeU9mZnNldCwgc2l6ZSwgc2l6ZSwge1xuICAgICAgICAgIHByZW11bHRpcGx5QWxwaGE6ICdub25lJyxcbiAgICAgICAgICBjb2xvclNwYWNlQ29udmVyc2lvbjogJ25vbmUnXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGltYWdlQml0bWFwKSB7XG4gICAgICAgICAgc2V0UGFja1N0YXRlKGdsLCBvcHRpb25zKTtcbiAgICAgICAgICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG4gICAgICAgICAgZ2wudGV4SW1hZ2UyRChmLmZhY2UsIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgZm9ybWF0LCB0eXBlLCBpbWFnZUJpdG1hcCk7XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBzZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShnbCwgdGV4LCBvcHRpb25zLCB3aWR0aCwgaGVpZ2h0LCBpbnRlcm5hbEZvcm1hdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZKSB7XG4gICAgdmFyIHNtYWxsZXN0ID0gTWF0aC5taW4oZWxlbWVudC53aWR0aCwgZWxlbWVudC5oZWlnaHQpO1xuICAgIHZhciBsYXJnZXN0ID0gTWF0aC5tYXgoZWxlbWVudC53aWR0aCwgZWxlbWVudC5oZWlnaHQpO1xuICAgIHZhciBkZXB0aCA9IGxhcmdlc3QgLyBzbWFsbGVzdDtcblxuICAgIGlmIChkZXB0aCAlIDEgIT09IDApIHtcbiAgICAgIHRocm93IFwiY2FuIG5vdCBjb21wdXRlIDNEIGRpbWVuc2lvbnMgb2YgZWxlbWVudFwiO1xuICAgIH1cblxuICAgIHZhciB4TXVsdCA9IGVsZW1lbnQud2lkdGggPT09IGxhcmdlc3QgPyAxIDogMDtcbiAgICB2YXIgeU11bHQgPSBlbGVtZW50LmhlaWdodCA9PT0gbGFyZ2VzdCA/IDEgOiAwO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19BTElHTk1FTlQsIDEpO1xuICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19ST1dfTEVOR1RILCBlbGVtZW50LndpZHRoKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfSU1BR0VfSEVJR0hULCAwKTtcbiAgICBnbC5waXhlbFN0b3JlaShVTlBBQ0tfU0tJUF9JTUFHRVMsIDApO1xuICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHNtYWxsZXN0LCBzbWFsbGVzdCwgc21hbGxlc3QsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG5cbiAgICBmb3IgKHZhciBkID0gMDsgZCA8IGRlcHRoOyArK2QpIHtcbiAgICAgIHZhciBzcmNYID0gZCAqIHNtYWxsZXN0ICogeE11bHQ7XG4gICAgICB2YXIgc3JjWSA9IGQgKiBzbWFsbGVzdCAqIHlNdWx0O1xuICAgICAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX1NLSVBfUElYRUxTLCBzcmNYKTtcbiAgICAgIGdsLnBpeGVsU3RvcmVpKFVOUEFDS19TS0lQX1JPV1MsIHNyY1kpO1xuICAgICAgZ2wudGV4U3ViSW1hZ2UzRCh0YXJnZXQsIGxldmVsLCAwLCAwLCBkLCBzbWFsbGVzdCwgc21hbGxlc3QsIDEsIGZvcm1hdCwgdHlwZSwgZWxlbWVudCk7XG4gICAgfVxuXG4gICAgc2V0U2tpcFN0YXRlVG9EZWZhdWx0KGdsKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKHNob3VsZEF1dG9tYXRpY2FsbHlTZXRUZXh0dXJlRmlsdGVyaW5nRm9yU2l6ZShvcHRpb25zKSkge1xuICAgIHNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKGdsLCB0ZXgsIG9wdGlvbnMsIHdpZHRoLCBoZWlnaHQsIGludGVybmFsRm9ybWF0KTtcbiAgfVxuXG4gIHNldFRleHR1cmVQYXJhbWV0ZXJzKGdsLCB0ZXgsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVybCdzIG9yaWdpbiBpcyB0aGUgc2FtZSBzbyB0aGF0IHdlIGNhbiBzZXQgdGhlIGBjcm9zc09yaWdpbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdXJsIHRvIGltYWdlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgd2luZG93J3Mgb3JpZ2luIGlzIHRoZSBzYW1lIGFzIGltYWdlJ3MgdXJsXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gdXJsSXNTYW1lT3JpZ2luKHVybCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIGZvciBJRSByZWFsbHlcbiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgcmV0dXJuIGEuaG9zdG5hbWUgPT09IGxvY2F0aW9uLmhvc3RuYW1lICYmIGEucG9ydCA9PT0gbG9jYXRpb24ucG9ydCAmJiBhLnByb3RvY29sID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbG9jYWxPcmlnaW4gPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpLm9yaWdpbjtcbiAgICB2YXIgdXJsT3JpZ2luID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpLm9yaWdpbjtcbiAgICByZXR1cm4gdXJsT3JpZ2luID09PSBsb2NhbE9yaWdpbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRUb0Fub255bW91c0lmVW5kZWZpbmVkQW5kVVJMSXNOb3RTYW1lT3JpZ2luKHVybCwgY3Jvc3NPcmlnaW4pIHtcbiAgcmV0dXJuIGNyb3NzT3JpZ2luID09PSB1bmRlZmluZWQgJiYgIXVybElzU2FtZU9yaWdpbih1cmwpID8gJ2Fub255bW91cycgOiBjcm9zc09yaWdpbjtcbn1cbi8qKlxuICogTG9hZHMgYW4gaW1hZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdXJsIHRvIGltYWdlXG4gKiBAcGFyYW0ge3N0cmluZ30gY3Jvc3NPcmlnaW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyLCBpbWcpfSBbY2FsbGJhY2tdIGEgY2FsbGJhY2sgdGhhdCdzIHBhc3NlZCBhbiBlcnJvciBhbmQgdGhlIGltYWdlLiBUaGUgZXJyb3Igd2lsbCBiZSBub24tbnVsbFxuICogICAgIGlmIHRoZXJlIHdhcyBhbiBlcnJvclxuICogQHJldHVybiB7SFRNTEltYWdlRWxlbWVudH0gdGhlIGltYWdlIGJlaW5nIGxvYWRlZC5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkSW1hZ2UodXJsLCBjcm9zc09yaWdpbiwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICB2YXIgaW1nO1xuICBjcm9zc09yaWdpbiA9IGNyb3NzT3JpZ2luICE9PSB1bmRlZmluZWQgPyBjcm9zc09yaWdpbiA6IGRlZmF1bHRzLmNyb3NzT3JpZ2luO1xuICBjcm9zc09yaWdpbiA9IHNldFRvQW5vbnltb3VzSWZVbmRlZmluZWRBbmRVUkxJc05vdFNhbWVPcmlnaW4odXJsLCBjcm9zc09yaWdpbik7XG5cbiAgaWYgKHR5cGVvZiBJbWFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGlmIChjcm9zc09yaWdpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbjtcbiAgICB9XG5cbiAgICB2YXIgY2xlYXJFdmVudEhhbmRsZXJzID0gZnVuY3Rpb24gY2xlYXJFdmVudEhhbmRsZXJzKCkge1xuICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgIGltZyA9IG51bGw7XG4gICAgfTtcblxuICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcigpIHtcbiAgICAgIHZhciBtc2cgPSBcImNvdWxkbid0IGxvYWQgaW1hZ2U6IFwiICsgdXJsO1xuICAgICAgaGVscGVyLmVycm9yKG1zZyk7XG4gICAgICBjYWxsYmFjayhtc2csIGltZyk7XG4gICAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICB9O1xuXG4gICAgdmFyIG9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGltZyk7XG4gICAgICBjbGVhckV2ZW50SGFuZGxlcnMoKTtcbiAgICB9O1xuXG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWQpO1xuICAgIGltZy5zcmMgPSB1cmw7XG4gICAgcmV0dXJuIGltZztcbiAgfSBlbHNlIGlmICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGVycjtcbiAgICB2YXIgYm07XG5cbiAgICB2YXIgY2IgPSBmdW5jdGlvbiBjYigpIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgYm0pO1xuICAgIH07XG5cbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gICAgaWYgKGNyb3NzT3JpZ2luKSB7XG4gICAgICBvcHRpb25zLm1vZGUgPSAnY29ycyc7IC8vIFRPRE86IG5vdCBzdXJlIGhvdyB0byB0cmFuc2xhdGUgaW1hZ2UuY3Jvc3NPcmlnaW5cbiAgICB9XG5cbiAgICBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UuYmxvYigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgIHJldHVybiBjcmVhdGVJbWFnZUJpdG1hcChibG9iLCB7XG4gICAgICAgIHByZW11bHRpcGx5QWxwaGE6ICdub25lJyxcbiAgICAgICAgY29sb3JTcGFjZUNvbnZlcnNpb246ICdub25lJ1xuICAgICAgfSk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoYml0bWFwKSB7XG4gICAgICAvLyBub3Qgc3VyZSBpZiB0aGlzIHdvcmtzLiBXZSBkb24ndCB3YW50XG4gICAgICAvLyB0byBjYXRjaCB0aGUgdXNlcidzIGVycm9yLiBTbywgY2FsbFxuICAgICAgLy8gdGhlIGNhbGxiYWNrIGluIGEgdGltZW91dCBzbyB3ZSdyZVxuICAgICAgLy8gbm90IGluIHRoaXMgc2NvcGUgaW5zaWRlIHRoZSBwcm9taXNlLlxuICAgICAgYm0gPSBiaXRtYXA7XG4gICAgICBzZXRUaW1lb3V0KGNiKTtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlcnIgPSBlO1xuICAgICAgc2V0VGltZW91dChjYik7XG4gICAgfSk7XG4gICAgaW1nID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBpbWc7XG59XG4vKipcbiAqIGNoZWNrIGlmIG9iamVjdCBpcyBhIFRleEltYWdlU291cmNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3QgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBvYmplY3QgaXMgYSBUZXhJbWFnZVNvdXJjZVxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVGV4SW1hZ2VTb3VyY2Uob2JqKSB7XG4gIHJldHVybiB0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEltYWdlQml0bWFwIHx8IHR5cGVvZiBJbWFnZURhdGEgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEltYWdlRGF0YSB8fCB0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xufVxuLyoqXG4gKiBpZiBvYmogaXMgYW4gVGV4SW1hZ2VTb3VyY2UgdGhlbiBqdXN0XG4gKiB1c2VzIGl0IG90aGVyd2lzZSBpZiBvYmogaXMgYSBzdHJpbmdcbiAqIHRoZW4gbG9hZCBpdCBmaXJzdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xUZXhJbWFnZVNvdXJjZX0gb2JqXG4gKiBAcGFyYW0ge3N0cmluZ30gY3Jvc3NPcmlnaW5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oZXJyLCBpbWcpfSBbY2FsbGJhY2tdIGEgY2FsbGJhY2sgdGhhdCdzIHBhc3NlZCBhbiBlcnJvciBhbmQgdGhlIGltYWdlLiBUaGUgZXJyb3Igd2lsbCBiZSBub24tbnVsbFxuICogICAgIGlmIHRoZXJlIHdhcyBhbiBlcnJvclxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvYWRBbmRVc2VJbWFnZShvYmosIGNyb3NzT3JpZ2luLCBjYWxsYmFjaykge1xuICBpZiAoaXNUZXhJbWFnZVNvdXJjZShvYmopKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBvYmopO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICByZXR1cm4gbG9hZEltYWdlKG9iaiwgY3Jvc3NPcmlnaW4sIGNhbGxiYWNrKTtcbn1cbi8qKlxuICogU2V0cyBhIHRleHR1cmUgdG8gYSAxeDEgcGl4ZWwgY29sb3IuIElmIGBvcHRpb25zLmNvbG9yID09PSBmYWxzZWAgaXMgbm90aGluZyBoYXBwZW5zLiBJZiBpdCdzIG5vdCBzZXRcbiAqIHRoZSBkZWZhdWx0IHRleHR1cmUgY29sb3IgaXMgdXNlZCB3aGljaCBjYW4gYmUgc2V0IGJ5IGNhbGxpbmcgYHNldERlZmF1bHRUZXh0dXJlQ29sb3JgLlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIHRoZSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIFdlYkdMVGV4dHVyZSB0byBzZXQgcGFyYW1ldGVycyBmb3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogICBUaGlzIGlzIG9mdGVuIHRoZSBzYW1lIG9wdGlvbnMgeW91IHBhc3NlZCBpbiB3aGVuIHlvdSBjcmVhdGVkIHRoZSB0ZXh0dXJlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuXG4gIGlmIChvcHRpb25zLmNvbG9yID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBBc3N1bWUgaXQncyBhIFVSTFxuICAvLyBQdXQgMXgxIHBpeGVscyBpbiB0ZXh0dXJlLiBUaGF0IG1ha2VzIGl0IHJlbmRlcmFibGUgaW1tZWRpYXRlbHkgcmVnYXJkbGVzcyBvZiBmaWx0ZXJpbmcuXG5cblxuICB2YXIgY29sb3IgPSBtYWtlMVBpeGVsKG9wdGlvbnMuY29sb3IpO1xuXG4gIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfQ1VCRV9NQVApIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgNjsgKytpaSkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1ggKyBpaSwgMCwgUkdCQSwgMSwgMSwgMCwgUkdCQSwgVU5TSUdORURfQllURSwgY29sb3IpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0YXJnZXQgPT09IFRFWFRVUkVfM0QgfHwgdGFyZ2V0ID09PSBURVhUVVJFXzJEX0FSUkFZKSB7XG4gICAgZ2wudGV4SW1hZ2UzRCh0YXJnZXQsIDAsIFJHQkEsIDEsIDEsIDEsIDAsIFJHQkEsIFVOU0lHTkVEX0JZVEUsIGNvbG9yKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgMCwgUkdCQSwgMSwgMSwgMCwgUkdCQSwgVU5TSUdORURfQllURSwgY29sb3IpO1xuICB9XG59XG4vKipcbiAqIFRoZSBzcmMgaW1hZ2UocykgdXNlZCB0byBjcmVhdGUgYSB0ZXh0dXJlLlxuICpcbiAqIFdoZW4geW91IGNhbGwge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVRleHR1cmV9IG9yIHtAbGluayBtb2R1bGU6dHdnbC5jcmVhdGVUZXh0dXJlc31cbiAqIHlvdSBjYW4gcGFzcyBpbiB1cmxzIGZvciBpbWFnZXMgdG8gbG9hZCBpbnRvIHRoZSB0ZXh0dXJlcy4gSWYgaXQncyBhIHNpbmdsZSB1cmxcbiAqIHRoZW4gdGhpcyB3aWxsIGJlIGEgc2luZ2xlIEhUTUxJbWFnZUVsZW1lbnQuIElmIGl0J3MgYW4gYXJyYXkgb2YgdXJscyB1c2VkIGZvciBhIGN1YmVtYXBcbiAqIHRoaXMgd2lsbCBiZSBhIGNvcnJlc3BvbmRpbmcgYXJyYXkgb2YgaW1hZ2VzIGZvciB0aGUgY3ViZW1hcC5cbiAqXG4gKiBAdHlwZWRlZiB7SFRNTEltYWdlRWxlbWVudHxIVE1MSW1hZ2VFbGVtZW50W119IFRleHR1cmVTcmNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cbi8qKlxuICogQSBjYWxsYmFjayBmb3Igd2hlbiBhbiBpbWFnZSBmaW5pc2hlZCBkb3dubG9hZGluZyBhbmQgYmVlbiB1cGxvYWRlZCBpbnRvIGEgdGV4dHVyZVxuICogQGNhbGxiYWNrIFRleHR1cmVSZWFkeUNhbGxiYWNrXG4gKiBAcGFyYW0geyp9IGVyciBJZiB0cnV0aHkgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleHR1cmUgdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVTcmN9IHNvdXJjZSBpbWFnZShzKSB1c2VkIHRvIGFzIHRoZSBzcmMgZm9yIHRoZSB0ZXh0dXJlXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgZm9yIHdoZW4gYWxsIGltYWdlcyBoYXZlIGZpbmlzaGVkIGRvd25sb2FkaW5nIGFuZCBiZWVuIHVwbG9hZGVkIGludG8gdGhlaXIgcmVzcGVjdGl2ZSB0ZXh0dXJlc1xuICogQGNhbGxiYWNrIFRleHR1cmVzUmVhZHlDYWxsYmFja1xuICogQHBhcmFtIHsqfSBlcnIgSWYgdHJ1dGh5IHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIFdlYkdMVGV4dHVyZT59IHRleHR1cmVzIHRoZSBjcmVhdGVkIHRleHR1cmVzIGJ5IG5hbWUuIFNhbWUgYXMgcmV0dXJuZWQgYnkge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVRleHR1cmVzfS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLlRleHR1cmVTcmM+fSBzb3VyY2VzIHRoZSBpbWFnZShzKSB1c2VkIGZvciB0aGUgdGV4dHVyZSBieSBuYW1lLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZvciB3aGVuIGFuIGltYWdlIGZpbmlzaGVkIGRvd25sb2FkaW5nIGFuZCBiZWVuIHVwbG9hZGVkIGludG8gYSB0ZXh0dXJlXG4gKiBAY2FsbGJhY2sgQ3ViZW1hcFJlYWR5Q2FsbGJhY2tcbiAqIEBwYXJhbSB7Kn0gZXJyIElmIHRydXRoeSB0aGVyZSB3YXMgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSB0ZXh0dXJlLlxuICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50W119IGltZ3MgdGhlIGltYWdlcyBmb3IgZWFjaCBmYWNlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBBIGNhbGxiYWNrIGZvciB3aGVuIGFuIGltYWdlIGZpbmlzaGVkIGRvd25sb2FkaW5nIGFuZCBiZWVuIHVwbG9hZGVkIGludG8gYSB0ZXh0dXJlXG4gKiBAY2FsbGJhY2sgVGhyZWVEUmVhZHlDYWxsYmFja1xuICogQHBhcmFtIHsqfSBlcnIgSWYgdHJ1dGh5IHRoZXJlIHdhcyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7V2ViR0xUZXh0dXJlfSB0ZXggdGhlIHRleHR1cmUuXG4gKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnRbXX0gaW1ncyB0aGUgaW1hZ2VzIGZvciBlYWNoIHNsaWNlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBMb2FkcyBhIHRleHR1cmUgZnJvbSBhbiBpbWFnZSBmcm9tIGEgVXJsIGFzIHNwZWNpZmllZCBpbiBgb3B0aW9ucy5zcmNgXG4gKiBJZiBgb3B0aW9ucy5jb2xvciAhPT0gZmFsc2VgIHdpbGwgc2V0IHRoZSB0ZXh0dXJlIHRvIGEgMXgxIHBpeGVsIGNvbG9yIHNvIHRoYXQgdGhlIHRleHR1cmUgaXNcbiAqIGltbWVkaWF0ZWx5IHVzZWFibGUuIEl0IHdpbGwgYmUgdXBkYXRlZCB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgaW1hZ2Ugb25jZSB0aGUgaW1hZ2UgaGFzIGZpbmlzaGVkXG4gKiBkb3dubG9hZGluZy4gRmlsdGVyaW5nIG9wdGlvbnMgd2lsbCBiZSBzZXQgYXMgYXBwcm9wcmlhdGUgZm9yIGltYWdlIHVubGVzcyBgb3B0aW9ucy5hdXRvID09PSBmYWxzZWAuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGltYWdlIGhhcyBmaW5pc2hlZCBsb2FkaW5nLiBlcnIgd2lsbFxuICogICAgYmUgbm9uIG51bGwgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQHJldHVybiB7SFRNTEltYWdlRWxlbWVudH0gdGhlIGltYWdlIGJlaW5nIGRvd25sb2FkZWQuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlRnJvbVVybChnbCwgdGV4LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzLnRleHR1cmVPcHRpb25zO1xuICBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKTsgLy8gQmVjYXVzZSBpdCdzIGFzeW5jIHdlIG5lZWQgdG8gY29weSB0aGUgb3B0aW9ucy5cblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIHZhciBpbWcgPSBsb2FkQW5kVXNlSW1hZ2Uob3B0aW9ucy5zcmMsIG9wdGlvbnMuY3Jvc3NPcmlnaW4sIGZ1bmN0aW9uIChlcnIsIGltZykge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgdGV4LCBpbWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUZXh0dXJlRnJvbUVsZW1lbnQoZ2wsIHRleCwgaW1nLCBvcHRpb25zKTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHRleCwgaW1nKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaW1nO1xufVxuLyoqXG4gKiBMb2FkcyBhIGN1YmVtYXAgZnJvbSA2IHVybHMgb3IgVGV4SW1hZ2VTb3VyY2VzIGFzIHNwZWNpZmllZCBpbiBgb3B0aW9ucy5zcmNgLiBXaWxsIHNldCB0aGUgY3ViZW1hcCB0byBhIDF4MSBwaXhlbCBjb2xvclxuICogc28gdGhhdCBpdCBpcyB1c2FibGUgaW1tZWRpYXRlbHkgdW5sZXNzIGBvcHRpb24uY29sb3IgPT09IGZhbHNlYC5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfSBvcHRpb25zIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkN1YmVtYXBSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gYWxsIHRoZSBpbWFnZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLiBlcnIgd2lsbFxuICogICAgYmUgbm9uIG51bGwgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkQ3ViZW1hcEZyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgdmFyIHVybHMgPSBvcHRpb25zLnNyYztcblxuICBpZiAodXJscy5sZW5ndGggIT09IDYpIHtcbiAgICB0aHJvdyBcInRoZXJlIG11c3QgYmUgNiB1cmxzIGZvciBhIGN1YmVtYXBcIjtcbiAgfVxuXG4gIHZhciBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgdmFyIGludGVybmFsRm9ybWF0ID0gb3B0aW9ucy5pbnRlcm5hbEZvcm1hdCB8fCBvcHRpb25zLmZvcm1hdCB8fCBSR0JBO1xuICB2YXIgZm9ybWF0VHlwZSA9IGdldEZvcm1hdEFuZFR5cGVGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCk7XG4gIHZhciBmb3JtYXQgPSBvcHRpb25zLmZvcm1hdCB8fCBmb3JtYXRUeXBlLmZvcm1hdDtcbiAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgVU5TSUdORURfQllURTtcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG5cbiAgaWYgKHRhcmdldCAhPT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIHRocm93IFwidGFyZ2V0IG11c3QgYmUgVEVYVFVSRV9DVUJFX01BUFwiO1xuICB9XG5cbiAgc2V0VGV4dHVyZVRvMVBpeGVsQ29sb3IoZ2wsIHRleCwgb3B0aW9ucyk7IC8vIEJlY2F1c2UgaXQncyBhc3luYyB3ZSBuZWVkIHRvIGNvcHkgdGhlIG9wdGlvbnMuXG5cbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICB2YXIgbnVtVG9Mb2FkID0gNjtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgZmFjZXMgPSBnZXRDdWJlRmFjZU9yZGVyKGdsLCBvcHRpb25zKTtcbiAgdmFyIGltZ3M7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmdW5jdGlvbiB1cGxvYWRJbWcoZmFjZVRhcmdldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICAgIC0tbnVtVG9Mb2FkO1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaW1nLndpZHRoICE9PSBpbWcuaGVpZ2h0KSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goXCJjdWJlbWFwIGZhY2UgaW1nIGlzIG5vdCBhIHNxdWFyZTogXCIgKyBpbWcuc3JjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICAgICAgICAgIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTsgLy8gU28gYXNzdW1pbmcgdGhpcyBpcyB0aGUgZmlyc3QgaW1hZ2Ugd2Ugbm93IGhhdmUgb25lIGZhY2UgdGhhdCdzIGltZyBzaXplZFxuICAgICAgICAgIC8vIGFuZCA1IGZhY2VzIHRoYXQgYXJlIDF4MSBwaXhlbCBzbyBzaXplIHRoZSBvdGhlciBmYWNlc1xuXG4gICAgICAgICAgaWYgKG51bVRvTG9hZCA9PT0gNSkge1xuICAgICAgICAgICAgLy8gdXNlIHRoZSBkZWZhdWx0IG9yZGVyXG4gICAgICAgICAgICBnZXRDdWJlRmFjZU9yZGVyKGdsKS5mb3JFYWNoKGZ1bmN0aW9uIChvdGhlclRhcmdldCkge1xuICAgICAgICAgICAgICAvLyBTaG91bGQgd2UgcmUtdXNlIHRoZSBzYW1lIGZhY2Ugb3IgYSBjb2xvcj9cbiAgICAgICAgICAgICAgZ2wudGV4SW1hZ2UyRChvdGhlclRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBmb3JtYXQsIHR5cGUsIGltZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2wudGV4SW1hZ2UyRChmYWNlVGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcCh0YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobnVtVG9Mb2FkID09PSAwKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsIHRleCwgaW1ncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGltZ3MgPSB1cmxzLm1hcChmdW5jdGlvbiAodXJsLCBuZHgpIHtcbiAgICByZXR1cm4gbG9hZEFuZFVzZUltYWdlKHVybCwgb3B0aW9ucy5jcm9zc09yaWdpbiwgdXBsb2FkSW1nKGZhY2VzW25keF0pKTtcbiAgfSk7XG59XG4vKipcbiAqIExvYWRzIGEgMmQgYXJyYXkgb3IgM2QgdGV4dHVyZSBmcm9tIHVybHMgT1IgVGV4SW1hZ2VTb3VyY2VzIGFzIHNwZWNpZmllZCBpbiBgb3B0aW9ucy5zcmNgLlxuICogV2lsbCBzZXQgdGhlIHRleHR1cmUgdG8gYSAxeDEgcGl4ZWwgY29sb3JcbiAqIHNvIHRoYXQgaXQgaXMgdXNhYmxlIGltbWVkaWF0ZWx5IHVubGVzcyBgb3B0aW9uLmNvbG9yID09PSBmYWxzZWAuXG4gKlxuICogSWYgdGhlIHdpZHRoIGFuZCBoZWlnaHQgaXMgbm90IHNwZWNpZmllZCB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgZmlyc3RcbiAqIGltYWdlIGxvYWRlZCB3aWxsIGJlIHVzZWQuIE5vdGUgdGhhdCBzaW5jZSBpbWFnZXMgYXJlIGxvYWRlZCBhc3luY1xuICogd2hpY2ggaW1hZ2UgZG93bmxvYWRzIGZpcnN0IGlzIHVua25vd24uXG4gKlxuICogSWYgYW4gaW1hZ2UgaXMgbm90IHRoZSBzYW1lIHNpemUgYXMgdGhlIHdpZHRoIGFuZCBoZWlnaHQgaXQgd2lsbCBiZSBzY2FsZWRcbiAqIHRvIHRoYXQgd2lkdGggYW5kIGhlaWdodC5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UaHJlZURSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gYWxsIHRoZSBpbWFnZXMgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nLiBlcnIgd2lsbFxuICogICAgYmUgbm9uIG51bGwgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBsb2FkU2xpY2VzRnJvbVVybHMoZ2wsIHRleCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICB2YXIgdXJscyA9IG9wdGlvbnMuc3JjO1xuICB2YXIgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IG9wdGlvbnMuZm9ybWF0IHx8IFJHQkE7XG4gIHZhciBmb3JtYXRUeXBlID0gZ2V0Rm9ybWF0QW5kVHlwZUZvckludGVybmFsRm9ybWF0KGludGVybmFsRm9ybWF0KTtcbiAgdmFyIGZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8IGZvcm1hdFR5cGUuZm9ybWF0O1xuICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBVTlNJR05FRF9CWVRFO1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRF9BUlJBWTtcblxuICBpZiAodGFyZ2V0ICE9PSBURVhUVVJFXzNEICYmIHRhcmdldCAhPT0gVEVYVFVSRV8yRF9BUlJBWSkge1xuICAgIHRocm93IFwidGFyZ2V0IG11c3QgYmUgVEVYVFVSRV8zRCBvciBURVhUVVJFXzJEX0FSUkFZXCI7XG4gIH1cblxuICBzZXRUZXh0dXJlVG8xUGl4ZWxDb2xvcihnbCwgdGV4LCBvcHRpb25zKTsgLy8gQmVjYXVzZSBpdCdzIGFzeW5jIHdlIG5lZWQgdG8gY29weSB0aGUgb3B0aW9ucy5cblxuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIHZhciBudW1Ub0xvYWQgPSB1cmxzLmxlbmd0aDtcbiAgdmFyIGVycm9ycyA9IFtdO1xuICB2YXIgaW1nczsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHZhciBsZXZlbCA9IG9wdGlvbnMubGV2ZWwgfHwgMDtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICB2YXIgZGVwdGggPSB1cmxzLmxlbmd0aDtcbiAgdmFyIGZpcnN0SW1hZ2UgPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIHVwbG9hZEltZyhzbGljZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyLCBpbWcpIHtcbiAgICAgIC0tbnVtVG9Mb2FkO1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQYWNrU3RhdGUoZ2wsIG9wdGlvbnMpO1xuICAgICAgICBnbC5iaW5kVGV4dHVyZSh0YXJnZXQsIHRleCk7XG5cbiAgICAgICAgaWYgKGZpcnN0SW1hZ2UpIHtcbiAgICAgICAgICBmaXJzdEltYWdlID0gZmFsc2U7XG4gICAgICAgICAgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IGltZy53aWR0aDtcbiAgICAgICAgICBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCBpbWcuaGVpZ2h0O1xuICAgICAgICAgIGdsLnRleEltYWdlM0QodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIGRlcHRoLCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpOyAvLyBwdXQgaXQgaW4gZXZlcnkgc2xpY2Ugb3RoZXJ3aXNlIHNvbWUgc2xpY2VzIHdpbGwgYmUgMCwwLDAsMFxuXG4gICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBkZXB0aDsgKytzKSB7XG4gICAgICAgICAgICBnbC50ZXhTdWJJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIDAsIDAsIHMsIHdpZHRoLCBoZWlnaHQsIDEsIGZvcm1hdCwgdHlwZSwgaW1nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNyYyA9IGltZztcbiAgICAgICAgICB2YXIgY3R4O1xuXG4gICAgICAgICAgaWYgKGltZy53aWR0aCAhPT0gd2lkdGggfHwgaW1nLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBTaXplIHRoZSBpbWFnZSB0byBmaXhcbiAgICAgICAgICAgIGN0eCA9IGdldFNoYXJlZDJEQ29udGV4dCgpO1xuICAgICAgICAgICAgc3JjID0gY3R4LmNhbnZhcztcbiAgICAgICAgICAgIGN0eC5jYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGdsLnRleFN1YkltYWdlM0QodGFyZ2V0LCBsZXZlbCwgMCwgMCwgc2xpY2UsIHdpZHRoLCBoZWlnaHQsIDEsIGZvcm1hdCwgdHlwZSwgc3JjKTsgLy8gZnJlZSB0aGUgY2FudmFzIG1lbW9yeVxuXG4gICAgICAgICAgaWYgKGN0eCAmJiBzcmMgPT09IGN0eC5jYW52YXMpIHtcbiAgICAgICAgICAgIGN0eC5jYW52YXMud2lkdGggPSAwO1xuICAgICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG91bGRBdXRvbWF0aWNhbGx5U2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUob3B0aW9ucykpIHtcbiAgICAgICAgICBnbC5nZW5lcmF0ZU1pcG1hcCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1Ub0xvYWQgPT09IDApIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3JzLmxlbmd0aCA/IGVycm9ycyA6IHVuZGVmaW5lZCwgdGV4LCBpbWdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgaW1ncyA9IHVybHMubWFwKGZ1bmN0aW9uICh1cmwsIG5keCkge1xuICAgIHJldHVybiBsb2FkQW5kVXNlSW1hZ2UodXJsLCBvcHRpb25zLmNyb3NzT3JpZ2luLCB1cGxvYWRJbWcobmR4KSk7XG4gIH0pO1xufVxuLyoqXG4gKiBTZXRzIGEgdGV4dHVyZSBmcm9tIGFuIGFycmF5IG9yIHR5cGVkIGFycmF5LiBJZiB0aGUgd2lkdGggb3IgaGVpZ2h0IGlzIG5vdCBwcm92aWRlZCB3aWxsIGF0dGVtcHQgdG9cbiAqIGd1ZXNzIHRoZSBzaXplLiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zfS5cbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge1dlYkdMVGV4dHVyZX0gdGV4IHRoZSBXZWJHTFRleHR1cmUgdG8gc2V0IHBhcmFtZXRlcnMgZm9yXG4gKiBAcGFyYW0geyhudW1iZXJbXXxBcnJheUJ1ZmZlclZpZXcpfSBzcmMgQW4gYXJyYXkgb3IgdHlwZWQgYXJyeSB3aXRoIHRleHR1cmUgZGF0YS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IFtvcHRpb25zXSBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogICBUaGlzIGlzIG9mdGVuIHRoZSBzYW1lIG9wdGlvbnMgeW91IHBhc3NlZCBpbiB3aGVuIHlvdSBjcmVhdGVkIHRoZSB0ZXh0dXJlLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRUZXh0dXJlRnJvbUFycmF5KGdsLCB0ZXgsIHNyYywgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cy50ZXh0dXJlT3B0aW9ucztcbiAgdmFyIHRhcmdldCA9IG9wdGlvbnMudGFyZ2V0IHx8IFRFWFRVUkVfMkQ7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcbiAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgdmFyIGhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICB2YXIgZGVwdGggPSBvcHRpb25zLmRlcHRoO1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGdldFRleHR1cmVUeXBlRm9yQXJyYXlUeXBlKGdsLCBzcmMsIGZvcm1hdFR5cGUudHlwZSk7XG5cbiAgaWYgKCFpc0FycmF5QnVmZmVyKHNyYykpIHtcbiAgICB2YXIgVHlwZSA9IHR5cGVkQXJyYXlzLmdldFR5cGVkQXJyYXlUeXBlRm9yR0xUeXBlKHR5cGUpO1xuICAgIHNyYyA9IG5ldyBUeXBlKHNyYyk7XG4gIH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXkpIHtcbiAgICBzcmMgPSBuZXcgVWludDhBcnJheShzcmMuYnVmZmVyKTtcbiAgfVxuXG4gIHZhciBieXRlc1BlckVsZW1lbnQgPSBnZXRCeXRlc1BlckVsZW1lbnRGb3JJbnRlcm5hbEZvcm1hdChpbnRlcm5hbEZvcm1hdCwgdHlwZSk7XG4gIHZhciBudW1FbGVtZW50cyA9IHNyYy5ieXRlTGVuZ3RoIC8gYnl0ZXNQZXJFbGVtZW50OyAvLyBUT0RPOiBjaGVjayBVTlBBQ0tfQUxJR05NRU5UP1xuXG4gIGlmIChudW1FbGVtZW50cyAlIDEpIHtcbiAgICB0aHJvdyBcImxlbmd0aCB3cm9uZyBzaXplIGZvciBmb3JtYXQ6IFwiICsgdXRpbHMuZ2xFbnVtVG9TdHJpbmcoZ2wsIGZvcm1hdCk7XG4gIH1cblxuICB2YXIgZGltZW5zaW9ucztcblxuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFXzNEIHx8IHRhcmdldCA9PT0gVEVYVFVSRV8yRF9BUlJBWSkge1xuICAgIGlmICghd2lkdGggJiYgIWhlaWdodCAmJiAhZGVwdGgpIHtcbiAgICAgIHZhciBzaXplID0gTWF0aC5jYnJ0KG51bUVsZW1lbnRzKTtcblxuICAgICAgaWYgKHNpemUgJSAxICE9PSAwKSB7XG4gICAgICAgIHRocm93IFwiY2FuJ3QgZ3Vlc3MgY3ViZSBzaXplIG9mIGFycmF5IG9mIG51bUVsZW1lbnRzOiBcIiArIG51bUVsZW1lbnRzO1xuICAgICAgfVxuXG4gICAgICB3aWR0aCA9IHNpemU7XG4gICAgICBoZWlnaHQgPSBzaXplO1xuICAgICAgZGVwdGggPSBzaXplO1xuICAgIH0gZWxzZSBpZiAod2lkdGggJiYgKCFoZWlnaHQgfHwgIWRlcHRoKSkge1xuICAgICAgZGltZW5zaW9ucyA9IGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCBoZWlnaHQsIGRlcHRoLCBudW1FbGVtZW50cyAvIHdpZHRoKTtcbiAgICAgIGhlaWdodCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICBkZXB0aCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoaGVpZ2h0ICYmICghd2lkdGggfHwgIWRlcHRoKSkge1xuICAgICAgZGltZW5zaW9ucyA9IGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCB3aWR0aCwgZGVwdGgsIG51bUVsZW1lbnRzIC8gaGVpZ2h0KTtcbiAgICAgIHdpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIGRlcHRoID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpbWVuc2lvbnMgPSBndWVzc0RpbWVuc2lvbnMoZ2wsIHRhcmdldCwgd2lkdGgsIGhlaWdodCwgbnVtRWxlbWVudHMgLyBkZXB0aCk7XG4gICAgICB3aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XG4gICAgICBoZWlnaHQgPSBkaW1lbnNpb25zLmhlaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGltZW5zaW9ucyA9IGd1ZXNzRGltZW5zaW9ucyhnbCwgdGFyZ2V0LCB3aWR0aCwgaGVpZ2h0LCBudW1FbGVtZW50cyk7XG4gICAgd2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xuICAgIGhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICB9XG5cbiAgc2V0U2tpcFN0YXRlVG9EZWZhdWx0KGdsKTtcbiAgZ2wucGl4ZWxTdG9yZWkoVU5QQUNLX0FMSUdOTUVOVCwgb3B0aW9ucy51bnBhY2tBbGlnbm1lbnQgfHwgMSk7XG4gIHNldFBhY2tTdGF0ZShnbCwgb3B0aW9ucyk7XG5cbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIHZhciBlbGVtZW50c1BlckVsZW1lbnQgPSBieXRlc1BlckVsZW1lbnQgLyBzcmMuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgdmFyIGZhY2VTaXplID0gbnVtRWxlbWVudHMgLyA2ICogZWxlbWVudHNQZXJFbGVtZW50O1xuICAgIGdldEN1YmVGYWNlc1dpdGhOZHgoZ2wsIG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBmYWNlU2l6ZSAqIGYubmR4O1xuICAgICAgdmFyIGRhdGEgPSBzcmMuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyBmYWNlU2l6ZSk7XG4gICAgICBnbC50ZXhJbWFnZTJEKGYuZmFjZSwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIGRhdGEpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV8zRCB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkpIHtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBzcmMpO1xuICB9IGVsc2Uge1xuICAgIGdsLnRleEltYWdlMkQodGFyZ2V0LCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgc3JjKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGRlcHRoOiBkZXB0aCxcbiAgICB0eXBlOiB0eXBlXG4gIH07XG59XG4vKipcbiAqIFNldHMgYSB0ZXh0dXJlIHdpdGggbm8gY29udGVudHMgb2YgYSBjZXJ0YWluIHNpemUuIEluIG90aGVyIHdvcmRzIGNhbGxzIGBnbC50ZXhJbWFnZTJEYCB3aXRoIGBudWxsYC5cbiAqIFlvdSBtdXN0IHNldCBgb3B0aW9ucy53aWR0aGAgYW5kIGBvcHRpb25zLmhlaWdodGAuXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgV2ViR0xUZXh0dXJlIHRvIHNldCBwYXJhbWV0ZXJzIGZvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gb3B0aW9ucyBBIFRleHR1cmVPcHRpb25zIG9iamVjdCB3aXRoIHdoYXRldmVyIHBhcmFtZXRlcnMgeW91IHdhbnQgc2V0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3RleHR1cmVzXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRFbXB0eVRleHR1cmUoZ2wsIHRleCwgb3B0aW9ucykge1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGZvcm1hdFR5cGUudHlwZTtcbiAgc2V0UGFja1N0YXRlKGdsLCBvcHRpb25zKTtcblxuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDY7ICsraWkpIHtcbiAgICAgIGdsLnRleEltYWdlMkQoVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YICsgaWksIGxldmVsLCBpbnRlcm5hbEZvcm1hdCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV8zRCB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkpIHtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCwgb3B0aW9ucy5kZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBDcmVhdGVzIGEgdGV4dHVyZSBiYXNlZCBvbiB0aGUgb3B0aW9ucyBwYXNzZWQgaW4uXG4gKlxuICogTm90ZTogbWF5IHJlc2V0IFVOUEFDS19BTElHTk1FTlQsIFVOUEFDS19ST1dfTEVOR1RILCBVTlBBQ0tfSU1BR0VfSEVJR0hULCBVTlBBQ0tfU0tJUF9JTUFHRVNcbiAqIFVOUEFDS19TS0lQX1BJWEVMUywgYW5kIFVOUEFDS19TS0lQX1JPV1NcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5UZXh0dXJlT3B0aW9uc30gW29wdGlvbnNdIEEgVGV4dHVyZU9wdGlvbnMgb2JqZWN0IHdpdGggd2hhdGV2ZXIgcGFyYW1ldGVycyB5b3Ugd2FudCBzZXQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVSZWFkeUNhbGxiYWNrfSBbY2FsbGJhY2tdIEEgY2FsbGJhY2sgY2FsbGVkIHdoZW4gYW4gaW1hZ2UgaGFzIGJlZW4gZG93bmxvYWRlZCBhbmQgdXBsb2FkZWQgdG8gdGhlIHRleHR1cmUuXG4gKiBAcmV0dXJuIHtXZWJHTFRleHR1cmV9IHRoZSBjcmVhdGVkIHRleHR1cmUuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdGV4dHVyZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmUoZ2wsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHMudGV4dHVyZU9wdGlvbnM7XG4gIHZhciB0ZXggPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gIHZhciB0YXJnZXQgPSBvcHRpb25zLnRhcmdldCB8fCBURVhUVVJFXzJEO1xuICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoIHx8IDE7XG4gIHZhciBoZWlnaHQgPSBvcHRpb25zLmhlaWdodCB8fCAxO1xuICB2YXIgaW50ZXJuYWxGb3JtYXQgPSBvcHRpb25zLmludGVybmFsRm9ybWF0IHx8IFJHQkE7XG4gIGdsLmJpbmRUZXh0dXJlKHRhcmdldCwgdGV4KTtcblxuICBpZiAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgLy8gdGhpcyBzaG91bGQgaGF2ZSBiZWVuIHRoZSBkZWZhdWx0IGZvciBjdWJlbWFwcyA6KFxuICAgIGdsLnRleFBhcmFtZXRlcmkodGFyZ2V0LCBURVhUVVJFX1dSQVBfUywgQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaSh0YXJnZXQsIFRFWFRVUkVfV1JBUF9ULCBDTEFNUF9UT19FREdFKTtcbiAgfVxuXG4gIHZhciBzcmMgPSBvcHRpb25zLnNyYztcblxuICBpZiAoc3JjKSB7XG4gICAgaWYgKHR5cGVvZiBzcmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgc3JjID0gc3JjKGdsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbG9hZFRleHR1cmVGcm9tVXJsKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXlCdWZmZXIoc3JjKSB8fCBBcnJheS5pc0FycmF5KHNyYykgJiYgKHR5cGVvZiBzcmNbMF0gPT09ICdudW1iZXInIHx8IEFycmF5LmlzQXJyYXkoc3JjWzBdKSB8fCBpc0FycmF5QnVmZmVyKHNyY1swXSkpKSB7XG4gICAgICB2YXIgZGltZW5zaW9ucyA9IHNldFRleHR1cmVGcm9tQXJyYXkoZ2wsIHRleCwgc3JjLCBvcHRpb25zKTtcbiAgICAgIHdpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIGhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzcmMpICYmICh0eXBlb2Ygc3JjWzBdID09PSAnc3RyaW5nJyB8fCBpc1RleEltYWdlU291cmNlKHNyY1swXSkpKSB7XG4gICAgICBpZiAodGFyZ2V0ID09PSBURVhUVVJFX0NVQkVfTUFQKSB7XG4gICAgICAgIGxvYWRDdWJlbWFwRnJvbVVybHMoZ2wsIHRleCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZFNsaWNlc0Zyb21VcmxzKGdsLCB0ZXgsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgKGlzVGV4SW1hZ2VTb3VyY2Uoc3JjKSlcbiAgICAgIHNldFRleHR1cmVGcm9tRWxlbWVudChnbCwgdGV4LCBzcmMsIG9wdGlvbnMpO1xuICAgICAgd2lkdGggPSBzcmMud2lkdGg7XG4gICAgICBoZWlnaHQgPSBzcmMuaGVpZ2h0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRFbXB0eVRleHR1cmUoZ2wsIHRleCwgb3B0aW9ucyk7XG4gIH1cblxuICBpZiAoc2hvdWxkQXV0b21hdGljYWxseVNldFRleHR1cmVGaWx0ZXJpbmdGb3JTaXplKG9wdGlvbnMpKSB7XG4gICAgc2V0VGV4dHVyZUZpbHRlcmluZ0ZvclNpemUoZ2wsIHRleCwgb3B0aW9ucywgd2lkdGgsIGhlaWdodCwgaW50ZXJuYWxGb3JtYXQpO1xuICB9XG5cbiAgc2V0VGV4dHVyZVBhcmFtZXRlcnMoZ2wsIHRleCwgb3B0aW9ucyk7XG4gIHJldHVybiB0ZXg7XG59XG4vKipcbiAqIFJlc2l6ZXMgYSB0ZXh0dXJlIGJhc2VkIG9uIHRoZSBvcHRpb25zIHBhc3NlZCBpbi5cbiAqXG4gKiBOb3RlOiBUaGlzIGlzIG5vdCBhIGdlbmVyaWMgcmVzaXplIGFueXRoaW5nIGZ1bmN0aW9uLlxuICogSXQncyBtb3N0bHkgdXNlZCBieSB7QGxpbmsgbW9kdWxlOnR3Z2wucmVzaXplRnJhbWVidWZmZXJJbmZvfVxuICogSXQgd2lsbCB1c2UgYG9wdGlvbnMuc3JjYCBpZiBpdCBleGlzdHMgdG8gdHJ5IHRvIGRldGVybWluZSBhIGB0eXBlYFxuICogb3RoZXJ3aXNlIGl0IHdpbGwgYXNzdW1lIGBnbC5VTlNJR05FRF9CWVRFYC4gTm8gZGF0YSBpcyBwcm92aWRlZFxuICogZm9yIHRoZSB0ZXh0dXJlLiBUZXh0dXJlIHBhcmFtZXRlcnMgd2lsbCBiZSBzZXQgYWNjb3JkaW5nbHlcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgdGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogQHBhcmFtIHtXZWJHTFRleHR1cmV9IHRleCB0aGUgdGV4dHVyZSB0byByZXNpemVcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9IG9wdGlvbnMgQSBUZXh0dXJlT3B0aW9ucyBvYmplY3Qgd2l0aCB3aGF0ZXZlciBwYXJhbWV0ZXJzIHlvdSB3YW50IHNldC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhdIHRoZSBuZXcgd2lkdGguIElmIG5vdCBwYXNzZWQgaW4gd2lsbCB1c2UgYG9wdGlvbnMud2lkdGhgXG4gKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodF0gdGhlIG5ldyBoZWlnaHQuIElmIG5vdCBwYXNzZWQgaW4gd2lsbCB1c2UgYG9wdGlvbnMuaGVpZ2h0YFxuICogQHBhcmFtIHtudW1iZXJ9IFtkZXB0aF0gdGhlIG5ldyBkZXB0aC4gSWYgbm90IHBhc3NlZCBpbiB3aWxsIHVzZSBgb3B0aW9ucy5kZXB0aGBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gcmVzaXplVGV4dHVyZShnbCwgdGV4LCBvcHRpb25zLCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCkge1xuICB3aWR0aCA9IHdpZHRoIHx8IG9wdGlvbnMud2lkdGg7XG4gIGhlaWdodCA9IGhlaWdodCB8fCBvcHRpb25zLmhlaWdodDtcbiAgZGVwdGggPSBkZXB0aCB8fCBvcHRpb25zLmRlcHRoO1xuICB2YXIgdGFyZ2V0ID0gb3B0aW9ucy50YXJnZXQgfHwgVEVYVFVSRV8yRDtcbiAgZ2wuYmluZFRleHR1cmUodGFyZ2V0LCB0ZXgpO1xuICB2YXIgbGV2ZWwgPSBvcHRpb25zLmxldmVsIHx8IDA7XG4gIHZhciBpbnRlcm5hbEZvcm1hdCA9IG9wdGlvbnMuaW50ZXJuYWxGb3JtYXQgfHwgb3B0aW9ucy5mb3JtYXQgfHwgUkdCQTtcbiAgdmFyIGZvcm1hdFR5cGUgPSBnZXRGb3JtYXRBbmRUeXBlRm9ySW50ZXJuYWxGb3JtYXQoaW50ZXJuYWxGb3JtYXQpO1xuICB2YXIgZm9ybWF0ID0gb3B0aW9ucy5mb3JtYXQgfHwgZm9ybWF0VHlwZS5mb3JtYXQ7XG4gIHZhciB0eXBlO1xuICB2YXIgc3JjID0gb3B0aW9ucy5zcmM7XG5cbiAgaWYgKCFzcmMpIHtcbiAgICB0eXBlID0gb3B0aW9ucy50eXBlIHx8IGZvcm1hdFR5cGUudHlwZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKHNyYykgfHwgQXJyYXkuaXNBcnJheShzcmMpICYmIHR5cGVvZiBzcmNbMF0gPT09ICdudW1iZXInKSB7XG4gICAgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCBnZXRUZXh0dXJlVHlwZUZvckFycmF5VHlwZShnbCwgc3JjLCBmb3JtYXRUeXBlLnR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgZm9ybWF0VHlwZS50eXBlO1xuICB9XG5cbiAgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV9DVUJFX01BUCkge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCA2OyArK2lpKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWCArIGlpLCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIHdpZHRoLCBoZWlnaHQsIDAsIGZvcm1hdCwgdHlwZSwgbnVsbCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gVEVYVFVSRV8zRCB8fCB0YXJnZXQgPT09IFRFWFRVUkVfMkRfQVJSQVkpIHtcbiAgICBnbC50ZXhJbWFnZTNEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBnbC50ZXhJbWFnZTJEKHRhcmdldCwgbGV2ZWwsIGludGVybmFsRm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpO1xuICB9XG59XG4vKipcbiAqIENoZWNrIGlmIGEgc3JjIGlzIGFuIGFzeW5jIHJlcXVlc3QuXG4gKiBpZiBzcmMgaXMgYSBzdHJpbmcgd2UncmUgZ29pbmcgdG8gZG93bmxvYWQgYW4gaW1hZ2VcbiAqIGlmIHNyYyBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIHdlJ3JlIGdvaW5nIHRvIGRvd25sb2FkIGN1YmVtYXAgaW1hZ2VzXG4gKiBAcGFyYW0geyp9IHNyYyBUaGUgc3JjIGZyb20gYSBUZXh0dXJlT3B0aW9uc1xuICogQHJldHVybnMge2Jvb2x9IHRydWUgaWYgc3JjIGlzIGFzeW5jLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzQXN5bmNTcmMoc3JjKSB7XG4gIHJldHVybiB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KHNyYykgJiYgdHlwZW9mIHNyY1swXSA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBidW5jaCBvZiB0ZXh0dXJlcyBiYXNlZCBvbiB0aGUgcGFzc2VkIGluIG9wdGlvbnMuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgY29uc3QgdGV4dHVyZXMgPSB0d2dsLmNyZWF0ZVRleHR1cmVzKGdsLCB7XG4gKiAgICAgICAvLyBhIHBvd2VyIG9mIDIgaW1hZ2VcbiAqICAgICAgIGhmdEljb246IHsgc3JjOiBcImltYWdlcy9oZnQtaWNvbi0xNi5wbmdcIiwgbWFnOiBnbC5ORUFSRVNUIH0sXG4gKiAgICAgICAvLyBhIG5vbi1wb3dlciBvZiAyIGltYWdlXG4gKiAgICAgICBjbG92ZXI6IHsgc3JjOiBcImltYWdlcy9jbG92ZXIuanBnXCIgfSxcbiAqICAgICAgIC8vIEZyb20gYSBjYW52YXNcbiAqICAgICAgIGZyb21DYW52YXM6IHsgc3JjOiBjdHguY2FudmFzIH0sXG4gKiAgICAgICAvLyBBIGN1YmVtYXAgZnJvbSA2IGltYWdlc1xuICogICAgICAgeW9rb2hhbWE6IHtcbiAqICAgICAgICAgdGFyZ2V0OiBnbC5URVhUVVJFX0NVQkVfTUFQLFxuICogICAgICAgICBzcmM6IFtcbiAqICAgICAgICAgICAnaW1hZ2VzL3lva29oYW1hL3Bvc3guanBnJyxcbiAqICAgICAgICAgICAnaW1hZ2VzL3lva29oYW1hL25lZ3guanBnJyxcbiAqICAgICAgICAgICAnaW1hZ2VzL3lva29oYW1hL3Bvc3kuanBnJyxcbiAqICAgICAgICAgICAnaW1hZ2VzL3lva29oYW1hL25lZ3kuanBnJyxcbiAqICAgICAgICAgICAnaW1hZ2VzL3lva29oYW1hL3Bvc3ouanBnJyxcbiAqICAgICAgICAgICAnaW1hZ2VzL3lva29oYW1hL25lZ3ouanBnJyxcbiAqICAgICAgICAgXSxcbiAqICAgICAgIH0sXG4gKiAgICAgICAvLyBBIGN1YmVtYXAgZnJvbSAxIGltYWdlIChjYW4gYmUgMXg2LCAyeDMsIDN4MiwgNngxKVxuICogICAgICAgZ29sZGVuZ2F0ZToge1xuICogICAgICAgICB0YXJnZXQ6IGdsLlRFWFRVUkVfQ1VCRV9NQVAsXG4gKiAgICAgICAgIHNyYzogJ2ltYWdlcy9nb2xkZW5nYXRlLmpwZycsXG4gKiAgICAgICB9LFxuICogICAgICAgLy8gQSAyeDIgcGl4ZWwgdGV4dHVyZSBmcm9tIGEgSmF2YVNjcmlwdCBhcnJheVxuICogICAgICAgY2hlY2tlcjoge1xuICogICAgICAgICBtYWc6IGdsLk5FQVJFU1QsXG4gKiAgICAgICAgIG1pbjogZ2wuTElORUFSLFxuICogICAgICAgICBzcmM6IFtcbiAqICAgICAgICAgICAyNTUsMjU1LDI1NSwyNTUsXG4gKiAgICAgICAgICAgMTkyLDE5MiwxOTIsMjU1LFxuICogICAgICAgICAgIDE5MiwxOTIsMTkyLDI1NSxcbiAqICAgICAgICAgICAyNTUsMjU1LDI1NSwyNTUsXG4gKiAgICAgICAgIF0sXG4gKiAgICAgICB9LFxuICogICAgICAgLy8gYSAxeDIgcGl4ZWwgdGV4dHVyZSBmcm9tIGEgdHlwZWQgYXJyYXkuXG4gKiAgICAgICBzdHJpcGU6IHtcbiAqICAgICAgICAgbWFnOiBnbC5ORUFSRVNULFxuICogICAgICAgICBtaW46IGdsLkxJTkVBUixcbiAqICAgICAgICAgZm9ybWF0OiBnbC5MVU1JTkFOQ0UsXG4gKiAgICAgICAgIHNyYzogbmV3IFVpbnQ4QXJyYXkoW1xuICogICAgICAgICAgIDI1NSxcbiAqICAgICAgICAgICAxMjgsXG4gKiAgICAgICAgICAgMjU1LFxuICogICAgICAgICAgIDEyOCxcbiAqICAgICAgICAgICAyNTUsXG4gKiAgICAgICAgICAgMTI4LFxuICogICAgICAgICAgIDI1NSxcbiAqICAgICAgICAgICAxMjgsXG4gKiAgICAgICAgIF0pLFxuICogICAgICAgICB3aWR0aDogMSxcbiAqICAgICAgIH0sXG4gKiAgICAgfSk7XG4gKlxuICogTm93XG4gKlxuICogKiAgIGB0ZXh0dXJlcy5oZnRJY29uYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICogKiAgIGB0ZXh0dXJlcy5jbG92ZXJgIHdpbGwgYmUgYSAyZCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLmZyb21DYW52YXNgIHdpbGwgYmUgYSAyZCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLnlvaG9oYW1hYCB3aWxsIGJlIGEgY3ViZW1hcCB0ZXh0dXJlXG4gKiAqICAgYHRleHR1cmVzLmdvbGRlbmdhdGVgIHdpbGwgYmUgYSBjdWJlbWFwIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMuY2hlY2tlcmAgd2lsbCBiZSBhIDJkIHRleHR1cmVcbiAqICogICBgdGV4dHVyZXMuc3RyaXBlYCB3aWxsIGJlIGEgMmQgdGV4dHVyZVxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCB0aGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLG1vZHVsZTp0d2dsLlRleHR1cmVPcHRpb25zPn0gb3B0aW9ucyBBIG9iamVjdCBvZiBUZXh0dXJlT3B0aW9ucyBvbmUgcGVyIHRleHR1cmUuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLlRleHR1cmVzUmVhZHlDYWxsYmFja30gW2NhbGxiYWNrXSBBIGNhbGxiYWNrIGNhbGxlZCB3aGVuIGFsbCB0ZXh0dXJlcyBoYXZlIGJlZW4gZG93bmxvYWRlZC5cbiAqIEByZXR1cm4ge09iamVjdC48c3RyaW5nLFdlYkdMVGV4dHVyZT59IHRoZSBjcmVhdGVkIHRleHR1cmVzIGJ5IG5hbWVcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC90ZXh0dXJlc1xuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZXMoZ2wsIHRleHR1cmVPcHRpb25zLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gIHZhciBudW1Eb3dubG9hZGluZyA9IDA7XG4gIHZhciBlcnJvcnMgPSBbXTtcbiAgdmFyIHRleHR1cmVzID0ge307XG4gIHZhciBpbWFnZXMgPSB7fTtcblxuICBmdW5jdGlvbiBjYWxsQ2FsbGJhY2tJZlJlYWR5KCkge1xuICAgIGlmIChudW1Eb3dubG9hZGluZyA9PT0gMCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9ycy5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsIHRleHR1cmVzLCBpbWFnZXMpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXModGV4dHVyZU9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRleHR1cmVPcHRpb25zW25hbWVdO1xuICAgIHZhciBvbkxvYWRGbjtcblxuICAgIGlmIChpc0FzeW5jU3JjKG9wdGlvbnMuc3JjKSkge1xuICAgICAgb25Mb2FkRm4gPSBmdW5jdGlvbiBvbkxvYWRGbihlcnIsIHRleCwgaW1nKSB7XG4gICAgICAgIGltYWdlc1tuYW1lXSA9IGltZztcbiAgICAgICAgLS1udW1Eb3dubG9hZGluZztcblxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxDYWxsYmFja0lmUmVhZHkoKTtcbiAgICAgIH07XG5cbiAgICAgICsrbnVtRG93bmxvYWRpbmc7XG4gICAgfVxuXG4gICAgdGV4dHVyZXNbbmFtZV0gPSBjcmVhdGVUZXh0dXJlKGdsLCBvcHRpb25zLCBvbkxvYWRGbik7XG4gIH0pOyAvLyBxdWV1ZSB0aGUgY2FsbGJhY2sgaWYgdGhlcmUgYXJlIG5vIGltYWdlcyB0byBkb3dubG9hZC5cbiAgLy8gV2UgZG8gdGhpcyBiZWNhdXNlIGlmIHlvdXIgY29kZSBpcyBzdHJ1Y3R1cmVkIHRvIHdhaXQgZm9yXG4gIC8vIGltYWdlcyB0byBkb3dubG9hZCBidXQgdGhlbiB5b3UgY29tbWVudCBvdXQgYWxsIHRoZSBhc3luY1xuICAvLyBpbWFnZXMgeW91ciBjb2RlIHdvdWxkIGJyZWFrLlxuXG4gIGNhbGxDYWxsYmFja0lmUmVhZHkoKTtcbiAgcmV0dXJuIHRleHR1cmVzO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90d2dsLWZ1bGwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3R3Z2wtZnVsbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIF9leHBvcnROYW1lcyA9IHtcbiAgbTQ6IHRydWUsXG4gIHYzOiB0cnVlLFxuICBwcmltaXRpdmVzOiB0cnVlXG59O1xuZXhwb3J0cy5wcmltaXRpdmVzID0gZXhwb3J0cy52MyA9IGV4cG9ydHMubTQgPSB2b2lkIDA7XG5cbnZhciBtNCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbTQuanMgKi8gXCIuL3NyYy9tNC5qc1wiKSk7XG5cbmV4cG9ydHMubTQgPSBtNDtcblxudmFyIHYzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92My5qcyAqLyBcIi4vc3JjL3YzLmpzXCIpKTtcblxuZXhwb3J0cy52MyA9IHYzO1xuXG52YXIgcHJpbWl0aXZlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJpbWl0aXZlcy5qcyAqLyBcIi4vc3JjL3ByaW1pdGl2ZXMuanNcIikpO1xuXG5leHBvcnRzLnByaW1pdGl2ZXMgPSBwcmltaXRpdmVzO1xuXG52YXIgX3R3Z2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3R3Z2wuanMgKi8gXCIuL3NyYy90d2dsLmpzXCIpO1xuXG5PYmplY3Qua2V5cyhfdHdnbCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gX3R3Z2xba2V5XTtcbn0pO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90d2dsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdHdnbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7XG4gIGFkZEV4dGVuc2lvbnNUb0NvbnRleHQ6IHRydWUsXG4gIGdldENvbnRleHQ6IHRydWUsXG4gIGdldFdlYkdMQ29udGV4dDogdHJ1ZSxcbiAgcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZTogdHJ1ZSxcbiAgc2V0RGVmYXVsdHM6IHRydWUsXG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIHRleHR1cmVzOiB0cnVlLFxuICB1dGlsczogdHJ1ZSxcbiAgZHJhdzogdHJ1ZSxcbiAgZnJhbWVidWZmZXJzOiB0cnVlLFxuICBwcm9ncmFtczogdHJ1ZSxcbiAgdHlwZWRhcnJheXM6IHRydWUsXG4gIHZlcnRleEFycmF5czogdHJ1ZVxufTtcbmV4cG9ydHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCA9IGFkZEV4dGVuc2lvbnNUb0NvbnRleHQ7XG5leHBvcnRzLmdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuZXhwb3J0cy5nZXRXZWJHTENvbnRleHQgPSBnZXRXZWJHTENvbnRleHQ7XG5leHBvcnRzLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUgPSByZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplO1xuZXhwb3J0cy5zZXREZWZhdWx0cyA9IHNldERlZmF1bHRzO1xuZXhwb3J0cy52ZXJ0ZXhBcnJheXMgPSBleHBvcnRzLnR5cGVkYXJyYXlzID0gZXhwb3J0cy5wcm9ncmFtcyA9IGV4cG9ydHMuZnJhbWVidWZmZXJzID0gZXhwb3J0cy5kcmF3ID0gZXhwb3J0cy51dGlscyA9IGV4cG9ydHMudGV4dHVyZXMgPSBleHBvcnRzLmF0dHJpYnV0ZXMgPSB2b2lkIDA7XG5cbnZhciBhdHRyaWJ1dGVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hdHRyaWJ1dGVzLmpzICovIFwiLi9zcmMvYXR0cmlidXRlcy5qc1wiKSk7XG5cbmV4cG9ydHMuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIgfHwga2V5ID09PSBcIl9fZXNNb2R1bGVcIikgcmV0dXJuO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9leHBvcnROYW1lcywga2V5KSkgcmV0dXJuO1xuICBleHBvcnRzW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG59KTtcblxudmFyIHRleHR1cmVzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXh0dXJlcy5qcyAqLyBcIi4vc3JjL3RleHR1cmVzLmpzXCIpKTtcblxuZXhwb3J0cy50ZXh0dXJlcyA9IHRleHR1cmVzO1xuT2JqZWN0LmtleXModGV4dHVyZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IHRleHR1cmVzW2tleV07XG59KTtcblxudmFyIGhlbHBlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vaGVscGVyLmpzICovIFwiLi9zcmMvaGVscGVyLmpzXCIpKTtcblxudmFyIHV0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi91dGlscy5qcyAqLyBcIi4vc3JjL3V0aWxzLmpzXCIpKTtcblxuZXhwb3J0cy51dGlscyA9IHV0aWxzO1xuT2JqZWN0LmtleXModXRpbHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IHV0aWxzW2tleV07XG59KTtcblxudmFyIGRyYXcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RyYXcuanMgKi8gXCIuL3NyYy9kcmF3LmpzXCIpKTtcblxuZXhwb3J0cy5kcmF3ID0gZHJhdztcbk9iamVjdC5rZXlzKGRyYXcpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IGRyYXdba2V5XTtcbn0pO1xuXG52YXIgZnJhbWVidWZmZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9mcmFtZWJ1ZmZlcnMuanMgKi8gXCIuL3NyYy9mcmFtZWJ1ZmZlcnMuanNcIikpO1xuXG5leHBvcnRzLmZyYW1lYnVmZmVycyA9IGZyYW1lYnVmZmVycztcbk9iamVjdC5rZXlzKGZyYW1lYnVmZmVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gZnJhbWVidWZmZXJzW2tleV07XG59KTtcblxudmFyIHByb2dyYW1zID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcm9ncmFtcy5qcyAqLyBcIi4vc3JjL3Byb2dyYW1zLmpzXCIpKTtcblxuZXhwb3J0cy5wcm9ncmFtcyA9IHByb2dyYW1zO1xuT2JqZWN0LmtleXMocHJvZ3JhbXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IHByb2dyYW1zW2tleV07XG59KTtcblxudmFyIHR5cGVkYXJyYXlzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90eXBlZGFycmF5cy5qcyAqLyBcIi4vc3JjL3R5cGVkYXJyYXlzLmpzXCIpKTtcblxuZXhwb3J0cy50eXBlZGFycmF5cyA9IHR5cGVkYXJyYXlzO1xuT2JqZWN0LmtleXModHlwZWRhcnJheXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIiB8fCBrZXkgPT09IFwiX19lc01vZHVsZVwiKSByZXR1cm47XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX2V4cG9ydE5hbWVzLCBrZXkpKSByZXR1cm47XG4gIGV4cG9ydHNba2V5XSA9IHR5cGVkYXJyYXlzW2tleV07XG59KTtcblxudmFyIHZlcnRleEFycmF5cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdmVydGV4LWFycmF5cy5qcyAqLyBcIi4vc3JjL3ZlcnRleC1hcnJheXMuanNcIikpO1xuXG5leHBvcnRzLnZlcnRleEFycmF5cyA9IHZlcnRleEFycmF5cztcbk9iamVjdC5rZXlzKHZlcnRleEFycmF5cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgZXhwb3J0c1trZXldID0gdmVydGV4QXJyYXlzW2tleV07XG59KTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIFRoZSBtYWluIFRXR0wgbW9kdWxlLlxuICpcbiAqIEZvciBtb3N0IHVzZSBjYXNlcyB5b3Ugc2hvdWxkbid0IG5lZWQgYW55dGhpbmcgb3V0c2lkZSB0aGlzIG1vZHVsZS5cbiAqIEV4Y2VwdGlvbnMgYmV0d2VlbiB0aGUgc3R1ZmYgYWRkZWQgdG8gdHdnbC1mdWxsICh2MywgbTQsIHByaW1pdGl2ZXMpXG4gKlxuICogQG1vZHVsZSB0d2dsXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9hdHRyaWJ1dGVzLnNldEF0dHJpYkluZm9CdWZmZXJGcm9tQXJyYXkgYXMgc2V0QXR0cmliSW5mb0J1ZmZlckZyb21BcnJheVxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvYXR0cmlidXRlcy5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyBhcyBjcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5c1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvYXR0cmlidXRlcy5jcmVhdGVWZXJ0ZXhBcnJheUluZm8gYXMgY3JlYXRlVmVydGV4QXJyYXlJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9kcmF3LmRyYXdCdWZmZXJJbmZvIGFzIGRyYXdCdWZmZXJJbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9kcmF3LmRyYXdPYmplY3RMaXN0IGFzIGRyYXdPYmplY3RMaXN0XG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9mcmFtZWJ1ZmZlcnMuY3JlYXRlRnJhbWVidWZmZXJJbmZvIGFzIGNyZWF0ZUZyYW1lYnVmZmVySW5mb1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvZnJhbWVidWZmZXJzLnJlc2l6ZUZyYW1lYnVmZmVySW5mbyBhcyByZXNpemVGcmFtZWJ1ZmZlckluZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL2ZyYW1lYnVmZmVycy5iaW5kRnJhbWVidWZmZXJJbmZvIGFzIGJpbmRGcmFtZWJ1ZmZlckluZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLmNyZWF0ZVByb2dyYW1JbmZvIGFzIGNyZWF0ZVByb2dyYW1JbmZvXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9wcm9ncmFtcy5jcmVhdGVVbmlmb3JtQmxvY2tJbmZvIGFzIGNyZWF0ZVVuaWZvcm1CbG9ja0luZm9cbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3Byb2dyYW1zLmJpbmRVbmlmb3JtQmxvY2sgYXMgYmluZFVuaWZvcm1CbG9ja1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0VW5pZm9ybUJsb2NrIGFzIHNldFVuaWZvcm1CbG9ja1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0QmxvY2tVbmlmb3JtcyBhcyBzZXRCbG9ja1VuaWZvcm1zXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC9wcm9ncmFtcy5zZXRVbmlmb3JtcyBhcyBzZXRVbmlmb3Jtc1xuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvcHJvZ3JhbXMuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMgYXMgc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXNcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3RleHR1cmVzLnNldFRleHR1cmVGcm9tQXJyYXkgYXMgc2V0VGV4dHVyZUZyb21BcnJheVxuICogQGJvcnJvd3MgbW9kdWxlOnR3Z2wvdGV4dHVyZXMuY3JlYXRlVGV4dHVyZSBhcyBjcmVhdGVUZXh0dXJlXG4gKiBAYm9ycm93cyBtb2R1bGU6dHdnbC90ZXh0dXJlcy5yZXNpemVUZXh0dXJlIGFzIHJlc2l6ZVRleHR1cmVcbiAqIEBib3Jyb3dzIG1vZHVsZTp0d2dsL3RleHR1cmVzLmNyZWF0ZVRleHR1cmVzIGFzIGNyZWF0ZVRleHR1cmVzXG4gKi9cbi8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzZWUgYSBnbG9iYWwgZ2xcbnZhciBnbCA9IHVuZGVmaW5lZDtcbi8qIGVzbGludC1kaXNhYmxlLWxpbmUgKi9cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGRFeHRlbnNpb25zVG9Db250ZXh0OiB0cnVlXG59O1xuLyoqXG4gKiBWYXJpb3VzIGRlZmF1bHQgc2V0dGluZ3MgZm9yIHR3Z2wuXG4gKlxuICogTm90ZTogWW91IGNhbiBjYWxsIHRoaXMgYW55IG51bWJlciBvZiB0aW1lcy4gRXhhbXBsZTpcbiAqXG4gKiAgICAgdHdnbC5zZXREZWZhdWx0cyh7IHRleHR1cmVDb2xvcjogWzEsIDAsIDAsIDFdIH0pO1xuICogICAgIHR3Z2wuc2V0RGVmYXVsdHMoeyBhdHRyaWJQcmVmaXg6ICdhXycgfSk7XG4gKlxuICogaXMgZXF1aXZhbGVudCB0b1xuICpcbiAqICAgICB0d2dsLnNldERlZmF1bHRzKHtcbiAqICAgICAgIHRleHR1cmVDb2xvcjogWzEsIDAsIDAsIDFdLFxuICogICAgICAgYXR0cmliUHJlZml4OiAnYV8nLFxuICogICAgIH0pO1xuICpcbiAqIEB0eXBlZGVmIHtPYmplY3R9IERlZmF1bHRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2F0dHJpYlByZWZpeF0gVGhlIHByZWZpeCB0byBzdGljayBvbiBhdHRyaWJ1dGVzXG4gKlxuICogICBXaGVuIHdyaXRpbmcgc2hhZGVycyBJIHByZWZlciB0byBuYW1lIGF0dHJpYnV0ZXMgd2l0aCBgYV9gLCB1bmlmb3JtcyB3aXRoIGB1X2AgYW5kIHZhcnlpbmdzIHdpdGggYHZfYFxuICogICBhcyBpdCBtYWtlcyBpdCBjbGVhciB3aGVyZSB0aGV5IGNhbWUgZnJvbS4gQnV0LCB3aGVuIGJ1aWxkaW5nIGdlb21ldHJ5IEkgcHJlZmVyIHVzaW5nIHVuLXByZWZpeGVkIG5hbWVzLlxuICpcbiAqICAgSW4gb3RoZXIgd29yZHMgSSdsbCBjcmVhdGUgYXJyYXlzIG9mIGdlb21ldHJ5IGxpa2UgdGhpc1xuICpcbiAqICAgICAgIGNvbnN0IGFycmF5cyA9IHtcbiAqICAgICAgICAgcG9zaXRpb246IC4uLlxuICogICAgICAgICBub3JtYWw6IC4uLlxuICogICAgICAgICB0ZXhjb29yZDogLi4uXG4gKiAgICAgICB9O1xuICpcbiAqICAgQnV0IG5lZWQgdGhvc2UgbWFwcGVkIHRvIGF0dHJpYnV0ZXMgYW5kIG15IGF0dHJpYnV0ZXMgc3RhcnQgd2l0aCBgYV9gLlxuICpcbiAqICAgRGVmYXVsdDogYFwiXCJgXG4gKlxuICogQHByb3BlcnR5IHtudW1iZXJbXX0gW3RleHR1cmVDb2xvcl0gQXJyYXkgb2YgNCB2YWx1ZXMgaW4gdGhlIHJhbmdlIDAgdG8gMVxuICpcbiAqICAgVGhlIGRlZmF1bHQgdGV4dHVyZSBjb2xvciBpcyB1c2VkIHdoZW4gbG9hZGluZyB0ZXh0dXJlcyBmcm9tXG4gKiAgIHVybHMuIEJlY2F1c2UgdGhlIFVSTCB3aWxsIGJlIGxvYWRlZCBhc3luYyB3ZSdkIGxpa2UgdG8gYmVcbiAqICAgYWJsZSB0byB1c2UgdGhlIHRleHR1cmUgaW1tZWRpYXRlbHkuIEJ5IHB1dHRpbmcgYSAxeDEgcGl4ZWxcbiAqICAgY29sb3IgaW4gdGhlIHRleHR1cmUgd2UgY2FuIHN0YXJ0IHVzaW5nIHRoZSB0ZXh0dXJlIGJlZm9yZVxuICogICB0aGUgVVJMIGhhcyBsb2FkZWQuXG4gKlxuICogICBEZWZhdWx0OiBgWzAuNSwgMC43NSwgMSwgMV1gXG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtjcm9zc09yaWdpbl1cbiAqXG4gKiAgIElmIG5vdCB1bmRlZmluZWQgc2V0cyB0aGUgY3Jvc3NPcmlnaW4gYXR0cmlidXRlIG9uIGltYWdlc1xuICogICB0aGF0IHR3Z2wgY3JlYXRlcyB3aGVuIGRvd25sb2FkaW5nIGltYWdlcyBmb3IgdGV4dHVyZXMuXG4gKlxuICogICBBbHNvIHNlZSB7QGxpbmsgbW9kdWxlOnR3Z2wuVGV4dHVyZU9wdGlvbnN9LlxuICpcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gW2FkZEV4dGVuc2lvbnNUb0NvbnRleHRdXG4gKlxuICogICBJZiB0cnVlLCB0aGVuLCB3aGVuIHR3Z2wgd2lsbCB0cnkgdG8gYWRkIGFueSBzdXBwb3J0ZWQgV2ViR0wgZXh0ZW5zaW9uc1xuICogICBkaXJlY3RseSB0byB0aGUgY29udGV4dCB1bmRlciB0aGVpciBub3JtYWwgR0wgbmFtZXMuIEZvciBleGFtcGxlXG4gKiAgIGlmIEFOR0xFX2luc3RhbmNlc19hcnJheXMgZXhpc3RzIHRoZW4gdHdnbCB3b3VsZCBlbmFibGUgaXQsXG4gKiAgIGFkZCB0aGUgZnVuY3Rpb25zIGB2ZXJ0ZXhBdHRyaWJEaXZpc29yYCwgYGRyYXdBcnJheXNJbnN0YW5jZWRgLFxuICogICBgZHJhd0VsZW1lbnRzSW5zdGFuY2VkYCwgYW5kIHRoZSBjb25zdGFudCBgVkVSVEVYX0FUVFJJQl9BUlJBWV9ESVZJU09SYFxuICogICB0byB0aGUgYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBTZXRzIHZhcmlvdXMgZGVmYXVsdHMgZm9yIHR3Z2wuXG4gKlxuICogSW4gdGhlIGludGVyZXN0IG9mIHRlcnNlbmVzcyB3aGljaCBpcyBraW5kIG9mIHRoZSBwb2ludFxuICogb2YgdHdnbCBJJ3ZlIGludGVncmF0ZWQgYSBmZXcgb2YgdGhlIG9sZGVyIGZ1bmN0aW9ucyBoZXJlXG4gKlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC5EZWZhdWx0c30gbmV3RGVmYXVsdHMgVGhlIGRlZmF1bHQgc2V0dGluZ3MuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5mdW5jdGlvbiBzZXREZWZhdWx0cyhuZXdEZWZhdWx0cykge1xuICBoZWxwZXIuY29weUV4aXN0aW5nUHJvcGVydGllcyhuZXdEZWZhdWx0cywgZGVmYXVsdHMpO1xuICBhdHRyaWJ1dGVzLnNldEF0dHJpYnV0ZURlZmF1bHRzXyhuZXdEZWZhdWx0cyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICB0ZXh0dXJlcy5zZXRUZXh0dXJlRGVmYXVsdHNfKG5ld0RlZmF1bHRzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufVxuXG52YXIgcHJlZml4UkUgPSAvXiguKj8pXy87XG5cbmZ1bmN0aW9uIGFkZEV4dGVuc2lvblRvQ29udGV4dChnbCwgZXh0ZW5zaW9uTmFtZSkge1xuICB1dGlscy5nbEVudW1Ub1N0cmluZyhnbCwgMCk7XG4gIHZhciBleHQgPSBnbC5nZXRFeHRlbnNpb24oZXh0ZW5zaW9uTmFtZSk7XG5cbiAgaWYgKGV4dCkge1xuICAgIHZhciBlbnVtcyA9IHt9O1xuICAgIHZhciBmblN1ZmZpeCA9IHByZWZpeFJFLmV4ZWMoZXh0ZW5zaW9uTmFtZSlbMV07XG4gICAgdmFyIGVudW1TdWZmaXggPSAnXycgKyBmblN1ZmZpeDtcblxuICAgIGZvciAodmFyIGtleSBpbiBleHQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGV4dFtrZXldO1xuICAgICAgdmFyIGlzRnVuYyA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIHZhciBzdWZmaXggPSBpc0Z1bmMgPyBmblN1ZmZpeCA6IGVudW1TdWZmaXg7XG4gICAgICB2YXIgbmFtZSA9IGtleTsgLy8gZXhhbXBsZXMgb2Ygd2hlcmUgdGhpcyBpcyBub3QgdHJ1ZSBhcmUgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNcbiAgICAgIC8vIGFuZCBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGNcblxuICAgICAgaWYgKGtleS5lbmRzV2l0aChzdWZmaXgpKSB7XG4gICAgICAgIG5hbWUgPSBrZXkuc3Vic3RyaW5nKDAsIGtleS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdsW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFpc0Z1bmMgJiYgZ2xbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgaGVscGVyLndhcm4obmFtZSwgZ2xbbmFtZV0sIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNGdW5jKSB7XG4gICAgICAgICAgZ2xbbmFtZV0gPSBmdW5jdGlvbiAob3JpZ0ZuKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gb3JpZ0ZuLmFwcGx5KGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2xbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICBlbnVtc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBwYXNzIHRoZSBtb2RpZmllZCBlbnVtcyB0byBnbEVudW1Ub1N0cmluZ1xuXG5cbiAgICBlbnVtcy5jb25zdHJ1Y3RvciA9IHtcbiAgICAgIG5hbWU6IGV4dC5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgfTtcbiAgICB1dGlscy5nbEVudW1Ub1N0cmluZyhlbnVtcywgMCk7XG4gIH1cblxuICByZXR1cm4gZXh0O1xufVxuLypcbiAqIElmIHlvdSdyZSB3b25kZXJpbmcgd2h5IHRoZSBjb2RlIGRvZXNuJ3QganVzdCBpdGVyYXRlXG4gKiBvdmVyIGFsbCBleHRlbnNpb25zIHVzaW5nIGBnbC5nZXRFeHRlbnNpb25zYCBpcyB0aGF0IGl0J3MgcG9zc2libGVcbiAqIHNvbWUgZnV0dXJlIGV4dGVuc2lvbiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGlzIGNvZGUuIFJhdGhlciB0aGFuXG4gKiBoYXZlIHRoaW5nIHN1ZGRlbmx5IGJyZWFrIGl0IHNlZW1zIGJldHRlciB0byBtYW51YWxseSBhZGQgdG8gdGhpc1xuICogbGlzdC5cbiAqXG4gKi9cblxuXG52YXIgc3VwcG9ydGVkRXh0ZW5zaW9ucyA9IFsnQU5HTEVfaW5zdGFuY2VkX2FycmF5cycsICdFWFRfYmxlbmRfbWlubWF4JywgJ0VYVF9jb2xvcl9idWZmZXJfZmxvYXQnLCAnRVhUX2NvbG9yX2J1ZmZlcl9oYWxmX2Zsb2F0JywgJ0VYVF9kaXNqb2ludF90aW1lcl9xdWVyeScsICdFWFRfZGlzam9pbnRfdGltZXJfcXVlcnlfd2ViZ2wyJywgJ0VYVF9mcmFnX2RlcHRoJywgJ0VYVF9zUkdCJywgJ0VYVF9zaGFkZXJfdGV4dHVyZV9sb2QnLCAnRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJywgJ09FU19lbGVtZW50X2luZGV4X3VpbnQnLCAnT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzJywgJ09FU190ZXh0dXJlX2Zsb2F0JywgJ09FU190ZXh0dXJlX2Zsb2F0X2xpbmVhcicsICdPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0JywgJ09FU190ZXh0dXJlX2hhbGZfZmxvYXRfbGluZWFyJywgJ09FU192ZXJ0ZXhfYXJyYXlfb2JqZWN0JywgJ1dFQkdMX2NvbG9yX2J1ZmZlcl9mbG9hdCcsICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfYXRjJywgJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9ldGMxJywgJ1dFQkdMX2NvbXByZXNzZWRfdGV4dHVyZV9wdnJ0YycsICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycsICdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0Y19zcmdiJywgJ1dFQkdMX2RlcHRoX3RleHR1cmUnLCAnV0VCR0xfZHJhd19idWZmZXJzJ107XG4vKipcbiAqIEF0dGVtcHRzIHRvIGVuYWJsZSBhbGwgb2YgdGhlIGZvbGxvd2luZyBleHRlbnNpb25zXG4gKiBhbmQgYWRkIHRoZWlyIGZ1bmN0aW9ucyBhbmQgY29uc3RhbnRzIHRvIHRoZVxuICogYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAgdXNpbmcgdGhlaXIgbm9ybWFsIG5vbi1leHRlbnNpb24gbGlrZSBuYW1lcy5cbiAqXG4gKiAgICAgIEFOR0xFX2luc3RhbmNlZF9hcnJheXNcbiAqICAgICAgRVhUX2JsZW5kX21pbm1heFxuICogICAgICBFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XG4gKiAgICAgIEVYVF9jb2xvcl9idWZmZXJfaGFsZl9mbG9hdFxuICogICAgICBFWFRfZGlzam9pbnRfdGltZXJfcXVlcnlcbiAqICAgICAgRVhUX2Rpc2pvaW50X3RpbWVyX3F1ZXJ5X3dlYmdsMlxuICogICAgICBFWFRfZnJhZ19kZXB0aFxuICogICAgICBFWFRfc1JHQlxuICogICAgICBFWFRfc2hhZGVyX3RleHR1cmVfbG9kXG4gKiAgICAgIEVYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1xuICogICAgICBPRVNfZWxlbWVudF9pbmRleF91aW50XG4gKiAgICAgIE9FU19zdGFuZGFyZF9kZXJpdmF0aXZlc1xuICogICAgICBPRVNfdGV4dHVyZV9mbG9hdFxuICogICAgICBPRVNfdGV4dHVyZV9mbG9hdF9saW5lYXJcbiAqICAgICAgT0VTX3RleHR1cmVfaGFsZl9mbG9hdFxuICogICAgICBPRVNfdGV4dHVyZV9oYWxmX2Zsb2F0X2xpbmVhclxuICogICAgICBPRVNfdmVydGV4X2FycmF5X29iamVjdFxuICogICAgICBXRUJHTF9jb2xvcl9idWZmZXJfZmxvYXRcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX2F0Y1xuICogICAgICBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfZXRjMVxuICogICAgICBXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfcHZydGNcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNcbiAqICAgICAgV0VCR0xfY29tcHJlc3NlZF90ZXh0dXJlX3MzdGNfc3JnYlxuICogICAgICBXRUJHTF9kZXB0aF90ZXh0dXJlXG4gKiAgICAgIFdFQkdMX2RyYXdfYnVmZmVyc1xuICpcbiAqIEZvciBleGFtcGxlIGlmIGBBTkdMRV9pbnN0YW5jZWRfYXJyYXlzYCBleGlzdHMgdGhlbiB0aGUgZnVuY3Rpb25zXG4gKiBgZHJhd0FycmF5c0luc3RhbmNlZGAsIGBkcmF3RWxlbWVudHNJbnN0YW5jZWRgLCBgdmVydGV4QXR0cmliRGl2aXNvcmBcbiAqIGFuZCB0aGUgY29uc3RhbnQgYFZFUlRFWF9BVFRSSUJfQVJSQVlfRElWSVNPUmAgYXJlIGFkZGVkIHRvIHRoZVxuICogYFdlYkdMUmVuZGVyaW5nQ29udGV4dGAuXG4gKlxuICogTm90ZSB0aGF0IGlmIHlvdSB3YW50IHRvIGtub3cgaWYgdGhlIGV4dGVuc2lvbiBleGlzdHMgeW91IHNob3VsZFxuICogcHJvYmFibHkgY2FsbCBgZ2wuZ2V0RXh0ZW5zaW9uYCBmb3IgZWFjaCBleHRlbnNpb24uIEFsdGVybmF0aXZlbHlcbiAqIHlvdSBjYW4gY2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YgdGhlIGZ1bmN0aW9ucyBvciBjb25zdGFudHMgdGhhdFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIGFkZGVkLiBGb3IgZXhhbXBsZVxuICpcbiAqICAgIGlmIChnbC5kcmF3QnVmZmVycykge1xuICogICAgICAvLyBFaXRoZXIgV0VCR0xfZHJhd19idWZmZXJzIHdhcyBlbmFibGVkIE9SIHlvdSdyZSBydW5uaW5nIGluIFdlYkdMMlxuICogICAgICAuLi4uXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5mdW5jdGlvbiBhZGRFeHRlbnNpb25zVG9Db250ZXh0KGdsKSB7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBzdXBwb3J0ZWRFeHRlbnNpb25zLmxlbmd0aDsgKytpaSkge1xuICAgIGFkZEV4dGVuc2lvblRvQ29udGV4dChnbCwgc3VwcG9ydGVkRXh0ZW5zaW9uc1tpaV0pO1xuICB9XG59XG4vKipcbiAqIENyZWF0ZXMgYSB3ZWJnbCBjb250ZXh0LlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldFxuICogICAgIGNvbnRleHQgZnJvbS4gSWYgb25lIGlzIG5vdCBwYXNzZWQgaW4gb25lIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZTNEQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKSB7XG4gIHZhciBuYW1lcyA9IFtcIndlYmdsXCIsIFwiZXhwZXJpbWVudGFsLXdlYmdsXCJdO1xuICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hbWVzLmxlbmd0aDsgKytpaSkge1xuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChuYW1lc1tpaV0sIG9wdF9hdHRyaWJzKTtcblxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBpZiAoZGVmYXVsdHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCkge1xuICAgICAgICBhZGRFeHRlbnNpb25zVG9Db250ZXh0KGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbi8qKlxuICogR2V0cyBhIFdlYkdMMSBjb250ZXh0LlxuICpcbiAqIE5vdGU6IFdpbGwgYXR0ZW1wdCB0byBlbmFibGUgVmVydGV4IEFycmF5IE9iamVjdHNcbiAqIGFuZCBhZGQgV2ViR0wyIGVudHJ5IHBvaW50cy4gKHVubGVzcyB5b3UgZmlyc3Qgc2V0IGRlZmF1bHRzIHdpdGhcbiAqIGB0d2dsLnNldERlZmF1bHRzKHtlbmFibGVWZXJ0ZXhBcnJheU9iamVjdHM6IGZhbHNlfSlgO1xuICpcbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBhIGNhbnZhcyBlbGVtZW50LlxuICogQHBhcmFtIHtXZWJHTENvbnRleHRBdHRyaWJ1dGVzfSBbb3B0X2F0dHJpYnNdIG9wdGlvbmFsIHdlYmdsIGNvbnRleHQgY3JlYXRpb24gYXR0cmlidXRlc1xuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRXZWJHTENvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicykge1xuICB2YXIgZ2wgPSBjcmVhdGUzRENvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicyk7XG4gIHJldHVybiBnbDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHdlYmdsIGNvbnRleHQuXG4gKlxuICogV2lsbCByZXR1cm4gYSBXZWJHTDIgY29udGV4dCBpZiBwb3NzaWJsZS5cbiAqXG4gKiBZb3UgY2FuIGNoZWNrIGlmIGl0J3MgV2ViR0wyIHdpdGhcbiAqXG4gKiAgICAgdHdnbC5pc1dlYkdMMihnbCk7XG4gKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgdGFnIHRvIGdldFxuICogICAgIGNvbnRleHQgZnJvbS4gSWYgb25lIGlzIG5vdCBwYXNzZWQgaW4gb25lIHdpbGwgYmVcbiAqICAgICBjcmVhdGVkLlxuICogQHJldHVybiB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBUaGUgY3JlYXRlZCBjb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKSB7XG4gIHZhciBuYW1lcyA9IFtcIndlYmdsMlwiLCBcIndlYmdsXCIsIFwiZXhwZXJpbWVudGFsLXdlYmdsXCJdO1xuICB2YXIgY29udGV4dCA9IG51bGw7XG5cbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG5hbWVzLmxlbmd0aDsgKytpaSkge1xuICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChuYW1lc1tpaV0sIG9wdF9hdHRyaWJzKTtcblxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBpZiAoZGVmYXVsdHMuYWRkRXh0ZW5zaW9uc1RvQ29udGV4dCkge1xuICAgICAgICBhZGRFeHRlbnNpb25zVG9Db250ZXh0KGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cbi8qKlxuICogR2V0cyBhIFdlYkdMIGNvbnRleHQuICBXaWxsIGNyZWF0ZSBhIFdlYkdMMiBjb250ZXh0IGlmIHBvc3NpYmxlLlxuICpcbiAqIFlvdSBjYW4gY2hlY2sgaWYgaXQncyBXZWJHTDIgd2l0aFxuICpcbiAqICAgIGZ1bmN0aW9uIGlzV2ViR0wyKGdsKSB7XG4gKiAgICAgIHJldHVybiBnbC5nZXRQYXJhbWV0ZXIoZ2wuVkVSU0lPTikuaW5kZXhPZihcIldlYkdMIDIuMCBcIikgPT0gMDtcbiAqICAgIH1cbiAqXG4gKiBOb3RlOiBGb3IgYSBXZWJHTDEgY29udGV4dCB3aWxsIGF0dGVtcHQgdG8gZW5hYmxlIFZlcnRleCBBcnJheSBPYmplY3RzXG4gKiBhbmQgYWRkIFdlYkdMMiBlbnRyeSBwb2ludHMuICh1bmxlc3MgeW91IGZpcnN0IHNldCBkZWZhdWx0cyB3aXRoXG4gKiBgdHdnbC5zZXREZWZhdWx0cyh7ZW5hYmxlVmVydGV4QXJyYXlPYmplY3RzOiBmYWxzZX0pYDtcbiAqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgYSBjYW52YXMgZWxlbWVudC5cbiAqIEBwYXJhbSB7V2ViR0xDb250ZXh0QXR0cmlidXRlc30gW29wdF9hdHRyaWJzXSBvcHRpb25hbCB3ZWJnbCBjb250ZXh0IGNyZWF0aW9uIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gVGhlIGNyZWF0ZWQgY29udGV4dC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dChjYW52YXMsIG9wdF9hdHRyaWJzKSB7XG4gIHZhciBnbCA9IGNyZWF0ZUNvbnRleHQoY2FudmFzLCBvcHRfYXR0cmlicyk7XG4gIHJldHVybiBnbDtcbn1cbi8qKlxuICogUmVzaXplIGEgY2FudmFzIHRvIG1hdGNoIHRoZSBzaXplIGl0J3MgZGlzcGxheWVkLlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFRoZSBjYW52YXMgdG8gcmVzaXplLlxuICogQHBhcmFtIHtudW1iZXJ9IFttdWx0aXBsaWVyXSBTbyB5b3UgY2FuIHBhc3MgaW4gYHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvYCBvciBvdGhlciBzY2FsZSB2YWx1ZSBpZiB5b3Ugd2FudCB0by5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGNhbnZhcyB3YXMgcmVzaXplZC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbFxuICovXG5cblxuZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMsIG11bHRpcGxpZXIpIHtcbiAgbXVsdGlwbGllciA9IG11bHRpcGxpZXIgfHwgMTtcbiAgbXVsdGlwbGllciA9IE1hdGgubWF4KDAsIG11bHRpcGxpZXIpO1xuICB2YXIgd2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGggKiBtdWx0aXBsaWVyIHwgMDtcbiAgdmFyIGhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHQgKiBtdWx0aXBsaWVyIHwgMDtcblxuICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90eXBlZGFycmF5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90eXBlZGFycmF5cy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRHTFR5cGVGb3JUeXBlZEFycmF5ID0gZ2V0R0xUeXBlRm9yVHlwZWRBcnJheTtcbmV4cG9ydHMuZ2V0R0xUeXBlRm9yVHlwZWRBcnJheVR5cGUgPSBnZXRHTFR5cGVGb3JUeXBlZEFycmF5VHlwZTtcbmV4cG9ydHMuZ2V0VHlwZWRBcnJheVR5cGVGb3JHTFR5cGUgPSBnZXRUeXBlZEFycmF5VHlwZUZvckdMVHlwZTtcbmV4cG9ydHMuaXNBcnJheUJ1ZmZlciA9IHZvaWQgMDtcblxuLypcbiAqIENvcHlyaWdodCAyMDE5IEdyZWdnIFRhdmFyZXNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuICogY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLFxuICogdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvblxuICogdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsXG4gKiBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAqIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMXG4gKiBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAqIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVJcbiAqIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vKipcbiAqIExvdyBsZXZlbCBzaGFkZXIgdHlwZWQgYXJyYXkgcmVsYXRlZCBmdW5jdGlvbnNcbiAqXG4gKiBZb3Ugc2hvdWxkIGdlbmVyYWxseSBub3QgbmVlZCB0byB1c2UgdGhlc2UgZnVuY3Rpb25zLiBUaGV5IGFyZSBwcm92aWRlZFxuICogZm9yIHRob3NlIGNhc2VzIHdoZXJlIHlvdSdyZSBkb2luZyBzb21ldGhpbmcgb3V0IG9mIHRoZSBvcmRpbmFyeVxuICogYW5kIHlvdSBuZWVkIGxvd2VyIGxldmVsIGFjY2Vzcy5cbiAqXG4gKiBGb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB0aGV5IGFyZSBhdmFpbGFibGUgYXQgYm90aCBgdHdnbC50eXBlZEFycmF5YCBhbmQgYHR3Z2xgXG4gKiBpdHNlbGZcbiAqXG4gKiBTZWUge0BsaW5rIG1vZHVsZTp0d2dsfSBmb3IgY29yZSBmdW5jdGlvbnNcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvdHlwZWRBcnJheVxuICovXG4vLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2VlIGEgZ2xvYmFsIGdsXG52YXIgZ2wgPSB1bmRlZmluZWQ7XG4vKiBlc2xpbnQtZGlzYWJsZS1saW5lICovXG5cbi8qIERhdGFUeXBlICovXG5cbnZhciBCWVRFID0gMHgxNDAwO1xudmFyIFVOU0lHTkVEX0JZVEUgPSAweDE0MDE7XG52YXIgU0hPUlQgPSAweDE0MDI7XG52YXIgVU5TSUdORURfU0hPUlQgPSAweDE0MDM7XG52YXIgSU5UID0gMHgxNDA0O1xudmFyIFVOU0lHTkVEX0lOVCA9IDB4MTQwNTtcbnZhciBGTE9BVCA9IDB4MTQwNjtcbnZhciBVTlNJR05FRF9TSE9SVF80XzRfNF80ID0gMHg4MDMzO1xudmFyIFVOU0lHTkVEX1NIT1JUXzVfNV81XzEgPSAweDgwMzQ7XG52YXIgVU5TSUdORURfU0hPUlRfNV82XzUgPSAweDgzNjM7XG52YXIgSEFMRl9GTE9BVCA9IDB4MTQwQjtcbnZhciBVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVYgPSAweDgzNjg7XG52YXIgVU5TSUdORURfSU5UXzEwRl8xMUZfMTFGX1JFViA9IDB4OEMzQjtcbnZhciBVTlNJR05FRF9JTlRfNV85XzlfOV9SRVYgPSAweDhDM0U7XG52YXIgRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWID0gMHg4REFEO1xudmFyIFVOU0lHTkVEX0lOVF8yNF84ID0gMHg4NEZBO1xudmFyIGdsVHlwZVRvVHlwZWRBcnJheSA9IHt9O1xue1xuICB2YXIgdHQgPSBnbFR5cGVUb1R5cGVkQXJyYXk7XG4gIHR0W0JZVEVdID0gSW50OEFycmF5O1xuICB0dFtVTlNJR05FRF9CWVRFXSA9IFVpbnQ4QXJyYXk7XG4gIHR0W1NIT1JUXSA9IEludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXSA9IFVpbnQxNkFycmF5O1xuICB0dFtJTlRdID0gSW50MzJBcnJheTtcbiAgdHRbVU5TSUdORURfSU5UXSA9IFVpbnQzMkFycmF5O1xuICB0dFtGTE9BVF0gPSBGbG9hdDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzRfNF80XzRdID0gVWludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzVfNV81XzFdID0gVWludDE2QXJyYXk7XG4gIHR0W1VOU0lHTkVEX1NIT1JUXzVfNl81XSA9IFVpbnQxNkFycmF5O1xuICB0dFtIQUxGX0ZMT0FUXSA9IFVpbnQxNkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMl8xMF8xMF8xMF9SRVZdID0gVWludDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX0lOVF8xMEZfMTFGXzExRl9SRVZdID0gVWludDMyQXJyYXk7XG4gIHR0W1VOU0lHTkVEX0lOVF81XzlfOV85X1JFVl0gPSBVaW50MzJBcnJheTtcbiAgdHRbRkxPQVRfMzJfVU5TSUdORURfSU5UXzI0XzhfUkVWXSA9IFVpbnQzMkFycmF5O1xuICB0dFtVTlNJR05FRF9JTlRfMjRfOF0gPSBVaW50MzJBcnJheTtcbn1cbi8qKlxuICogR2V0IHRoZSBHTCB0eXBlIGZvciBhIHR5cGVkQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJWaWV3fSB0eXBlZEFycmF5IGEgdHlwZWRBcnJheVxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgR0wgdHlwZSBmb3IgYXJyYXkuIEZvciBleGFtcGxlIHBhc3MgaW4gYW4gYEludDhBcnJheWAgYW5kIGBnbC5CWVRFYCB3aWxsXG4gKiAgIGJlIHJldHVybmVkLiBQYXNzIGluIGEgYFVpbnQzMkFycmF5YCBhbmQgYGdsLlVOU0lHTkVEX0lOVGAgd2lsbCBiZSByZXR1cm5lZFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3R5cGVkQXJyYXlcbiAqL1xuXG5mdW5jdGlvbiBnZXRHTFR5cGVGb3JUeXBlZEFycmF5KHR5cGVkQXJyYXkpIHtcbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfQllURTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIFNIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXkpIHtcbiAgICByZXR1cm4gVU5TSUdORURfU0hPUlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIElOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX0lOVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSkge1xuICAgIHJldHVybiBGTE9BVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIHR5cGVkIGFycmF5IHR5cGUnKTtcbn1cbi8qKlxuICogR2V0IHRoZSBHTCB0eXBlIGZvciBhIHR5cGVkQXJyYXkgdHlwZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlclZpZXd9IHR5cGVkQXJyYXlUeXBlIGEgdHlwZWRBcnJheSBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7bnVtYmVyfSB0aGUgR0wgdHlwZSBmb3IgdHlwZS4gRm9yIGV4YW1wbGUgcGFzcyBpbiBgSW50OEFycmF5YCBhbmQgYGdsLkJZVEVgIHdpbGxcbiAqICAgYmUgcmV0dXJuZWQuIFBhc3MgaW4gYFVpbnQzMkFycmF5YCBhbmQgYGdsLlVOU0lHTkVEX0lOVGAgd2lsbCBiZSByZXR1cm5lZFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3R5cGVkQXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEdMVHlwZUZvclR5cGVkQXJyYXlUeXBlKHR5cGVkQXJyYXlUeXBlKSB7XG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50OEFycmF5KSB7XG4gICAgcmV0dXJuIEJZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50OEFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX0JZVEU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50OENsYW1wZWRBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9CWVRFO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50MTZBcnJheSkge1xuICAgIHJldHVybiBTSE9SVDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cblxuICBpZiAodHlwZWRBcnJheVR5cGUgPT09IFVpbnQxNkFycmF5KSB7XG4gICAgcmV0dXJuIFVOU0lHTkVEX1NIT1JUO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuXG4gIGlmICh0eXBlZEFycmF5VHlwZSA9PT0gSW50MzJBcnJheSkge1xuICAgIHJldHVybiBJTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBVaW50MzJBcnJheSkge1xuICAgIHJldHVybiBVTlNJR05FRF9JTlQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgaWYgKHR5cGVkQXJyYXlUeXBlID09PSBGbG9hdDMyQXJyYXkpIHtcbiAgICByZXR1cm4gRkxPQVQ7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCB0eXBlZCBhcnJheSB0eXBlJyk7XG59XG4vKipcbiAqIEdldCB0aGUgdHlwZWQgYXJyYXkgY29uc3RydWN0b3IgZm9yIGEgZ2l2ZW4gR0wgdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgdGhlIEdMIHR5cGUuIChlZzogYGdsLlVOU0lHTkVEX0lOVGApXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gdGhlIGNvbnN0cnVjdG9yIGZvciBhIHRoZSBjb3JyZXNwb25kaW5nIHR5cGVkIGFycmF5LiAoZWcuIGBVaW50MzJBcnJheWApLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3R5cGVkQXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFR5cGVkQXJyYXlUeXBlRm9yR0xUeXBlKHR5cGUpIHtcbiAgdmFyIENUT1IgPSBnbFR5cGVUb1R5cGVkQXJyYXlbdHlwZV07XG5cbiAgaWYgKCFDVE9SKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGdsIHR5cGUnKTtcbiAgfVxuXG4gIHJldHVybiBDVE9SO1xufVxuXG52YXIgaXNBcnJheUJ1ZmZlciA9IHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiBpc0FycmF5QnVmZmVyT3JTaGFyZWRBcnJheUJ1ZmZlcihhKSB7XG4gIHJldHVybiBhICYmIGEuYnVmZmVyICYmIChhLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGEuYnVmZmVyIGluc3RhbmNlb2YgU2hhcmVkQXJyYXlCdWZmZXIpO1xufSA6IGZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIoYSkge1xuICByZXR1cm4gYSAmJiBhLmJ1ZmZlciAmJiBhLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xufTtcbmV4cG9ydHMuaXNBcnJheUJ1ZmZlciA9IGlzQXJyYXlCdWZmZXI7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmlzV2ViR0wxID0gaXNXZWJHTDE7XG5leHBvcnRzLmlzV2ViR0wyID0gaXNXZWJHTDI7XG5leHBvcnRzLmdsRW51bVRvU3RyaW5nID0gdm9pZCAwO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMTkgR3JlZ2cgVGF2YXJlc1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4gKiBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uXG4gKiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSxcbiAqIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiAgSU4gTk8gRVZFTlQgU0hBTExcbiAqIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qKlxuICogR2V0cyB0aGUgZ2wgdmVyc2lvbiBhcyBhIG51bWJlclxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHZlcnNpb24gb2YgZ2xcbiAqIEBwcml2YXRlXG4gKi9cbi8vZnVuY3Rpb24gZ2V0VmVyc2lvbkFzTnVtYmVyKGdsKSB7XG4vLyAgcmV0dXJuIHBhcnNlRmxvYXQoZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLnN1YnN0cig2KSk7XG4vL31cblxuLyoqXG4gKiBDaGVjayBpZiBjb250ZXh0IGlzIFdlYkdMIDIuMFxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIGl0J3MgV2ViR0wgMi4wXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuZnVuY3Rpb24gaXNXZWJHTDIoZ2wpIHtcbiAgLy8gVGhpcyBpcyB0aGUgY29ycmVjdCBjaGVjayBidXQgaXQncyBzbG93XG4gIC8vICByZXR1cm4gZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLmluZGV4T2YoXCJXZWJHTCAyLjBcIikgPT09IDA7XG4gIC8vIFRoaXMgbWlnaHQgYWxzbyBiZSB0aGUgY29ycmVjdCBjaGVjayBidXQgSSdtIGFzc3VtaW5nIGl0J3Mgc2xvdy1pc2hcbiAgLy8gcmV0dXJuIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dDtcbiAgcmV0dXJuICEhZ2wudGV4U3RvcmFnZTJEO1xufVxuLyoqXG4gKiBDaGVjayBpZiBjb250ZXh0IGlzIFdlYkdMIDEuMFxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0XG4gKiBAcmV0dXJuIHtib29sfSB0cnVlIGlmIGl0J3MgV2ViR0wgMS4wXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2xcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzV2ViR0wxKGdsKSB7XG4gIC8vIFRoaXMgaXMgdGhlIGNvcnJlY3QgY2hlY2sgYnV0IGl0J3Mgc2xvd1xuICAvLyBjb25zdCB2ZXJzaW9uID0gZ2V0VmVyc2lvbkFzTnVtYmVyKGdsKTtcbiAgLy8gcmV0dXJuIHZlcnNpb24gPD0gMS4wICYmIHZlcnNpb24gPiAwLjA7ICAvLyBiZWNhdXNlIGFzIG9mIDIwMTYvNSBFZGdlIHJldHVybnMgMC45NlxuICAvLyBUaGlzIG1pZ2h0IGFsc28gYmUgdGhlIGNvcnJlY3QgY2hlY2sgYnV0IEknbSBhc3N1bWluZyBpdCdzIHNsb3ctaXNoXG4gIC8vIHJldHVybiBnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcbiAgcmV0dXJuICFnbC50ZXhTdG9yYWdlMkQ7XG59XG4vKipcbiAqIEdldHMgYSBzdHJpbmcgZm9yIFdlYkdMIGVudW1cbiAqXG4gKiBOb3RlOiBTZXZlcmFsIGVudW1zIGFyZSB0aGUgc2FtZS4gV2l0aG91dCBtb3JlXG4gKiBjb250ZXh0ICh3aGljaCBmdW5jdGlvbikgaXQncyBpbXBvc3NpYmxlIHRvIGFsd2F5c1xuICogZ2l2ZSB0aGUgY29ycmVjdCBlbnVtLiBBcyBpdCBpcywgZm9yIG1hdGNoaW5nIHZhbHVlc1xuICogaXQgZ2l2ZXMgYWxsIGVudW1zLiBDaGVja2luZyB0aGUgV2ViR0wyUmVuZGVyaW5nQ29udGV4dFxuICogdGhhdCBtZWFuc1xuICpcbiAqICAgICAgMCAgICAgPSBaRVJPIHwgUE9JTlQgfCBOT05FIHwgTk9fRVJST1JcbiAqICAgICAgMSAgICAgPSBPTkUgfCBMSU5FUyB8IFNZTkNfRkxVU0hfQ09NTUFORFNfQklUXG4gKiAgICAgIDMyNzc3ID0gQkxFTkRfRVFVQVRJT05fUkdCIHwgQkxFTkRfRVFVQVRJT05fUkdCXG4gKiAgICAgIDM2NjYyID0gQ09QWV9SRUFEX0JVRkZFUiB8IENPUFlfUkVBRF9CVUZGRVJfQklORElOR1xuICogICAgICAzNjY2MyA9IENPUFlfV1JJVEVfQlVGRkVSIHwgQ09QWV9XUklURV9CVUZGRVJfQklORElOR1xuICogICAgICAzNjAwNiA9IEZSQU1FQlVGRkVSX0JJTkRJTkcgfCBEUkFXX0ZSQU1FQlVGRkVSX0JJTkRJTkdcbiAqXG4gKiBJdCdzIGFsc28gbm90IHVzZWZ1bCBmb3IgYml0cyByZWFsbHkgdW5sZXNzIHlvdSBwYXNzIGluIGluZGl2aWR1YWwgYml0cy5cbiAqIEluIG90aGVyIHdvcmRzXG4gKlxuICogICAgIGNvbnN0IGJpdHMgPSBnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVDtcbiAqICAgICB0d2dsLmdsRW51bVRvU3RyaW5nKGdsLCBiaXRzKTsgIC8vIG5vdCBnb2luZyB0byB3b3JrXG4gKlxuICogTm90ZSB0aGF0IHNvbWUgZW51bXMgb25seSBleGlzdCBvbiBleHRlbnNpb25zLiBJZiB5b3VcbiAqIHdhbnQgdGhlbSB0byBzaG93IHVwIHlvdSBuZWVkIHRvIHBhc3MgdGhlIGV4dGVuc2lvbiBhdCBsZWFzdFxuICogb25jZS4gRm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgY29uc3QgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9jb21wcmVzc2VkX3RleHR1cmVfczN0YycpO1xuICogICAgIGlmIChleHQpIHtcbiAqICAgICAgICB0d2dsLmdsRW51bVRvU3RyaW5nKGV4dCwgMCk7ICAvLyBqdXN0IHByaW1lIHRoZSBmdW5jdGlvblxuICpcbiAqICAgICAgICAuLmxhdGVyLi5cbiAqXG4gKiAgICAgICAgY29uc3QgaW50ZXJuYWxGb3JtYXQgPSBleHQuQ09NUFJFU1NFRF9SR0JfUzNUQ19EWFQxX0VYVDtcbiAqICAgICAgICBjb25zb2xlLmxvZyh0d2dsLmdsRW51bVRvU3RyaW5nKGdsLCBpbnRlcm5hbEZvcm1hdCkpO1xuICpcbiAqIE5vdGljZSBJIGRpZG4ndCBoYXZlIHRvIHBhc3MgdGhlIGV4dGVuc2lvbiB0aGUgc2Vjb25kIHRpbWUuIFRoaXMgbWVhbnNcbiAqIHlvdSBjYW4gaGF2ZSBwbGFjZSB0aGF0IGdlbmVyaWNhbGx5IGdldHMgYW4gZW51bSBmb3IgdGV4dHVyZSBmb3JtYXRzIGZvciBleGFtcGxlLlxuICogYW5kIGFzIGxvbmcgYXMgeW91IHByaW1lZCB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgZXh0ZW5zaW9uc1xuICpcbiAqIElmIHlvdSdyZSB1c2luZyBgdHdnbC5hZGRFeHRlbnNpb25zVG9Db250ZXh0YCB0byBlbmFibGUgeW91ciBleHRlbnNpb25zXG4gKiB0aGVuIHR3Z2wgd2lsbCBhdXRvbWF0aWNhbGx5IGdldCB0aGUgZXh0ZW5zaW9uJ3MgZW51bXMuXG4gKlxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIEEgV2ViR0xSZW5kZXJpbmdDb250ZXh0IG9yIGFueSBleHRlbnNpb24gb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBlbnVtIHlvdSB3YW50IHRvIGxvb2sgdXAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGVudW0gc3RyaW5nIG9yIGhleCB2YWx1ZVxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKiBAZnVuY3Rpb24gZ2xFbnVtVG9TdHJpbmdcbiAqL1xuXG5cbnZhciBnbEVudW1Ub1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhhdmVFbnVtc0ZvclR5cGUgPSB7fTtcbiAgdmFyIGVudW1zID0ge307XG5cbiAgZnVuY3Rpb24gYWRkRW51bXMoZ2wpIHtcbiAgICB2YXIgdHlwZSA9IGdsLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICBpZiAoIWhhdmVFbnVtc0ZvclR5cGVbdHlwZV0pIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBnbCkge1xuICAgICAgICBpZiAodHlwZW9mIGdsW2tleV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdmFyIGV4aXN0aW5nID0gZW51bXNbZ2xba2V5XV07XG4gICAgICAgICAgZW51bXNbZ2xba2V5XV0gPSBleGlzdGluZyA/IFwiXCIuY29uY2F0KGV4aXN0aW5nLCBcIiB8IFwiKS5jb25jYXQoa2V5KSA6IGtleTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoYXZlRW51bXNGb3JUeXBlW3R5cGVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gZ2xFbnVtVG9TdHJpbmcoZ2wsIHZhbHVlKSB7XG4gICAgYWRkRW51bXMoZ2wpO1xuICAgIHJldHVybiBlbnVtc1t2YWx1ZV0gfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBcIjB4XCIuY29uY2F0KHZhbHVlLnRvU3RyaW5nKDE2KSkgOiB2YWx1ZSk7XG4gIH07XG59KCk7XG5cbmV4cG9ydHMuZ2xFbnVtVG9TdHJpbmcgPSBnbEVudW1Ub1N0cmluZztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdjMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdjMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYWRkID0gYWRkO1xuZXhwb3J0cy5jb3B5ID0gY29weTtcbmV4cG9ydHMuY3JlYXRlID0gY3JlYXRlO1xuZXhwb3J0cy5jcm9zcyA9IGNyb3NzO1xuZXhwb3J0cy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuZXhwb3J0cy5kaXN0YW5jZVNxID0gZGlzdGFuY2VTcTtcbmV4cG9ydHMuZGl2aWRlID0gZGl2aWRlO1xuZXhwb3J0cy5kaXZTY2FsYXIgPSBkaXZTY2FsYXI7XG5leHBvcnRzLmRvdCA9IGRvdDtcbmV4cG9ydHMubGVycCA9IGxlcnA7XG5leHBvcnRzLmxlcnBWID0gbGVycFY7XG5leHBvcnRzLmxlbmd0aCA9IGxlbmd0aDtcbmV4cG9ydHMubGVuZ3RoU3EgPSBsZW5ndGhTcTtcbmV4cG9ydHMubWF4ID0gbWF4O1xuZXhwb3J0cy5taW4gPSBtaW47XG5leHBvcnRzLm11bFNjYWxhciA9IG11bFNjYWxhcjtcbmV4cG9ydHMubXVsdGlwbHkgPSBtdWx0aXBseTtcbmV4cG9ydHMubmVnYXRlID0gbmVnYXRlO1xuZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemU7XG5leHBvcnRzLnNldERlZmF1bHRUeXBlID0gc2V0RGVmYXVsdFR5cGU7XG5leHBvcnRzLnN1YnRyYWN0ID0gc3VidHJhY3Q7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKlxuICogVmVjMyBtYXRoIG1hdGggZnVuY3Rpb25zLlxuICpcbiAqIEFsbW9zdCBhbGwgZnVuY3Rpb25zIHRha2UgYW4gb3B0aW9uYWwgYGRzdGAgYXJndW1lbnQuIElmIGl0IGlzIG5vdCBwYXNzZWQgaW4gdGhlXG4gKiBmdW5jdGlvbnMgd2lsbCBjcmVhdGUgYSBuZXcgVmVjMy4gSW4gb3RoZXIgd29yZHMgeW91IGNhbiBkbyB0aGlzXG4gKlxuICogICAgIHZhciB2ID0gdjMuY3Jvc3ModjEsIHYyKTsgIC8vIENyZWF0ZXMgYSBuZXcgVmVjMyB3aXRoIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIuXG4gKlxuICogb3JcbiAqXG4gKiAgICAgdmFyIHYgPSB2My5jcmVhdGUoKTtcbiAqICAgICB2My5jcm9zcyh2MSwgdjIsIHYpOyAgLy8gUHV0cyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB2MSB4IHYyIGluIHZcbiAqXG4gKiBUaGUgZmlyc3Qgc3R5bGUgaXMgb2Z0ZW4gZWFzaWVyIGJ1dCBkZXBlbmRpbmcgb24gd2hlcmUgaXQncyB1c2VkIGl0IGdlbmVyYXRlcyBnYXJiYWdlIHdoZXJlXG4gKiBhcyB0aGVyZSBpcyBhbG1vc3QgbmV2ZXIgYWxsb2NhdGlvbiB3aXRoIHRoZSBzZWNvbmQgc3R5bGUuXG4gKlxuICogSXQgaXMgYWx3YXlzIHNhdmUgdG8gcGFzcyBhbnkgdmVjdG9yIGFzIHRoZSBkZXN0aW5hdGlvbi4gU28gZm9yIGV4YW1wbGVcbiAqXG4gKiAgICAgdjMuY3Jvc3ModjEsIHYyLCB2MSk7ICAvLyBQdXRzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHYxIHggdjIgaW4gdjFcbiAqXG4gKiBAbW9kdWxlIHR3Z2wvdjNcbiAqL1xudmFyIFZlY1R5cGUgPSBGbG9hdDMyQXJyYXk7XG4vKipcbiAqIEEgSmF2YVNjcmlwdCBhcnJheSB3aXRoIDMgdmFsdWVzIG9yIGEgRmxvYXQzMkFycmF5IHdpdGggMyB2YWx1ZXMuXG4gKiBXaGVuIGNyZWF0ZWQgYnkgdGhlIGxpYnJhcnkgd2lsbCBjcmVhdGUgdGhlIGRlZmF1bHQgdHlwZSB3aGljaCBpcyBgRmxvYXQzMkFycmF5YFxuICogYnV0IGNhbiBiZSBzZXQgYnkgY2FsbGluZyB7QGxpbmsgbW9kdWxlOnR3Z2wvdjMuc2V0RGVmYXVsdFR5cGV9LlxuICogQHR5cGVkZWYgeyhudW1iZXJbXXxGbG9hdDMyQXJyYXkpfSBWZWMzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG4vKipcbiAqIFNldHMgdGhlIHR5cGUgdGhpcyBsaWJyYXJ5IGNyZWF0ZXMgZm9yIGEgVmVjM1xuICogQHBhcmFtIHtjb25zdHJ1Y3Rvcn0gY3RvciB0aGUgY29uc3RydWN0b3IgZm9yIHRoZSB0eXBlLiBFaXRoZXIgYEZsb2F0MzJBcnJheWAgb3IgYEFycmF5YFxuICogQHJldHVybiB7Y29uc3RydWN0b3J9IHByZXZpb3VzIGNvbnN0cnVjdG9yIGZvciBWZWMzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5mdW5jdGlvbiBzZXREZWZhdWx0VHlwZShjdG9yKSB7XG4gIHZhciBvbGRUeXBlID0gVmVjVHlwZTtcbiAgVmVjVHlwZSA9IGN0b3I7XG4gIHJldHVybiBvbGRUeXBlO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgdmVjMzsgbWF5IGJlIGNhbGxlZCB3aXRoIHgsIHksIHogdG8gc2V0IGluaXRpYWwgdmFsdWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IFt4XSBJbml0aWFsIHggdmFsdWUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIEluaXRpYWwgeSB2YWx1ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbel0gSW5pdGlhbCB6IHZhbHVlLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdGhlIGNyZWF0ZWQgdmVjdG9yXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZSh4LCB5LCB6KSB7XG4gIHZhciBkc3QgPSBuZXcgVmVjVHlwZSgzKTtcblxuICBpZiAoeCkge1xuICAgIGRzdFswXSA9IHg7XG4gIH1cblxuICBpZiAoeSkge1xuICAgIGRzdFsxXSA9IHk7XG4gIH1cblxuICBpZiAoeikge1xuICAgIGRzdFsyXSA9IHo7XG4gIH1cblxuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBBZGRzIHR3byB2ZWN0b3JzOyBhc3N1bWVzIGEgYW5kIGIgaGF2ZSB0aGUgc2FtZSBkaW1lbnNpb24uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IEEgdmVjdG9yIHRoYSB0aXMgdGhlIHN1bSBvZiBhIGFuZCBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBhZGQoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gYVswXSArIGJbMF07XG4gIGRzdFsxXSA9IGFbMV0gKyBiWzFdO1xuICBkc3RbMl0gPSBhWzJdICsgYlsyXTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogU3VidHJhY3RzIHR3byB2ZWN0b3JzLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBBIHZlY3RvciB0aGF0IGlzIHRoZSBkaWZmZXJlbmNlIG9mIGEgYW5kIGIuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIGRzdFswXSA9IGFbMF0gLSBiWzBdO1xuICBkc3RbMV0gPSBhWzFdIC0gYlsxXTtcbiAgZHN0WzJdID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIFBlcmZvcm1zIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9uIHR3byB2ZWN0b3JzLlxuICogR2l2ZW4gdmVjdG9ycyBhIGFuZCBiIGFuZCBpbnRlcnBvbGF0aW9uIGNvZWZmaWNpZW50IHQsIHJldHVybnNcbiAqIGEgKyB0ICogKGIgLSBhKS5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0IEludGVycG9sYXRpb24gY29lZmZpY2llbnQuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBsaW5lYXIgaW50ZXJwb2xhdGVkIHJlc3VsdC5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gbGVycChhLCBiLCB0LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSBhWzBdICsgdCAqIChiWzBdIC0gYVswXSk7XG4gIGRzdFsxXSA9IGFbMV0gKyB0ICogKGJbMV0gLSBhWzFdKTtcbiAgZHN0WzJdID0gYVsyXSArIHQgKiAoYlsyXSAtIGFbMl0pO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBQZXJmb3JtcyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvbiB0d28gdmVjdG9ycy5cbiAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiBhbmQgaW50ZXJwb2xhdGlvbiBjb2VmZmljaWVudCB2ZWN0b3IgdCwgcmV0dXJuc1xuICogYSArIHQgKiAoYiAtIGEpLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB0IEludGVycG9sYXRpb24gY29lZmZpY2llbnRzIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdGhlIGxpbmVhciBpbnRlcnBvbGF0ZWQgcmVzdWx0LlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBsZXJwVihhLCBiLCB0LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSBhWzBdICsgdFswXSAqIChiWzBdIC0gYVswXSk7XG4gIGRzdFsxXSA9IGFbMV0gKyB0WzFdICogKGJbMV0gLSBhWzFdKTtcbiAgZHN0WzJdID0gYVsyXSArIHRbMl0gKiAoYlsyXSAtIGFbMl0pO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSZXR1cm4gbWF4IHZhbHVlcyBvZiB0d28gdmVjdG9ycy5cbiAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gKiBbbWF4KGFbMF0sIGJbMF0pLCBtYXgoYVsxXSwgYlsxXSksIG1heChhWzJdLCBiWzJdKV0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBtYXggY29tcG9uZW50cyB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1heChhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgZHN0WzFdID0gTWF0aC5tYXgoYVsxXSwgYlsxXSk7XG4gIGRzdFsyXSA9IE1hdGgubWF4KGFbMl0sIGJbMl0pO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBSZXR1cm4gbWluIHZhbHVlcyBvZiB0d28gdmVjdG9ycy5cbiAqIEdpdmVuIHZlY3RvcnMgYSBhbmQgYiByZXR1cm5zXG4gKiBbbWluKGFbMF0sIGJbMF0pLCBtaW4oYVsxXSwgYlsxXSksIG1pbihhWzJdLCBiWzJdKV0uXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBtaW4gY29tcG9uZW50cyB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1pbihhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgZHN0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIGRzdFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGJ5IGEgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge251bWJlcn0gayBUaGUgc2NhbGFyLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgc2NhbGVkIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gbXVsU2NhbGFyKHYsIGssIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIGRzdFswXSA9IHZbMF0gKiBrO1xuICBkc3RbMV0gPSB2WzFdICogaztcbiAgZHN0WzJdID0gdlsyXSAqIGs7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgYSBzY2FsYXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBrIFRoZSBzY2FsYXIuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBzY2FsZWQgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBkaXZTY2FsYXIodiwgaywgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gdlswXSAvIGs7XG4gIGRzdFsxXSA9IHZbMV0gLyBrO1xuICBkc3RbMl0gPSB2WzJdIC8gaztcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGNyb3NzIHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnM7IGFzc3VtZXMgYm90aCB2ZWN0b3JzIGhhdmVcbiAqIHRocmVlIGVudHJpZXMuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB2ZWN0b3Igb2YgYSBjcm9zcyBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBjcm9zcyhhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICB2YXIgdDEgPSBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdO1xuICB2YXIgdDIgPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICBkc3RbMF0gPSBhWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdO1xuICBkc3RbMV0gPSB0MTtcbiAgZHN0WzJdID0gdDI7XG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yczsgYXNzdW1lcyBib3RoIHZlY3RvcnMgaGF2ZVxuICogdGhyZWUgZW50cmllcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYSBPcGVyYW5kIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gYiBPcGVyYW5kIHZlY3Rvci5cbiAqIEByZXR1cm4ge251bWJlcn0gZG90IHByb2R1Y3RcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gZG90KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0gKyBhWzJdICogYlsyXTtcbn1cbi8qKlxuICogQ29tcHV0ZXMgdGhlIGxlbmd0aCBvZiB2ZWN0b3JcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gdiB2ZWN0b3IuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGxlbmd0aCBvZiB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gIHJldHVybiBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbn1cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNxdWFyZSBvZiB0aGUgbGVuZ3RoIG9mIHZlY3RvclxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSB2IHZlY3Rvci5cbiAqIEByZXR1cm4ge251bWJlcn0gc3F1YXJlIG9mIHRoZSBsZW5ndGggb2YgdmVjdG9yLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBsZW5ndGhTcSh2KSB7XG4gIHJldHVybiB2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl07XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIHZlY3Rvci5cbiAqIEByZXR1cm4ge251bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIGR4ID0gYVswXSAtIGJbMF07XG4gIHZhciBkeSA9IGFbMV0gLSBiWzFdO1xuICB2YXIgZHogPSBhWzJdIC0gYlsyXTtcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHopO1xufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgcG9pbnRzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIHZlY3Rvci5cbiAqIEByZXR1cm4ge251bWJlcn0gc3F1YXJlIG9mIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gZGlzdGFuY2VTcShhLCBiKSB7XG4gIHZhciBkeCA9IGFbMF0gLSBiWzBdO1xuICB2YXIgZHkgPSBhWzFdIC0gYlsxXTtcbiAgdmFyIGR6ID0gYVsyXSAtIGJbMl07XG4gIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHo7XG59XG4vKipcbiAqIERpdmlkZXMgYSB2ZWN0b3IgYnkgaXRzIEV1Y2xpZGVhbiBsZW5ndGggYW5kIHJldHVybnMgdGhlIHF1b3RpZW50LlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIFRoZSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSBub3JtYWxpemVkIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92M1xuICovXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplKGEsIGRzdCkge1xuICBkc3QgPSBkc3QgfHwgbmV3IFZlY1R5cGUoMyk7XG4gIHZhciBsZW5TcSA9IGFbMF0gKiBhWzBdICsgYVsxXSAqIGFbMV0gKyBhWzJdICogYVsyXTtcbiAgdmFyIGxlbiA9IE1hdGguc3FydChsZW5TcSk7XG5cbiAgaWYgKGxlbiA+IDAuMDAwMDEpIHtcbiAgICBkc3RbMF0gPSBhWzBdIC8gbGVuO1xuICAgIGRzdFsxXSA9IGFbMV0gLyBsZW47XG4gICAgZHN0WzJdID0gYVsyXSAvIGxlbjtcbiAgfSBlbHNlIHtcbiAgICBkc3RbMF0gPSAwO1xuICAgIGRzdFsxXSA9IDA7XG4gICAgZHN0WzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59XG4vKipcbiAqIE5lZ2F0ZXMgYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gLXYuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIG5lZ2F0ZSh2LCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSAtdlswXTtcbiAgZHN0WzFdID0gLXZbMV07XG4gIGRzdFsyXSA9IC12WzJdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBDb3BpZXMgYSB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IHYgVGhlIHZlY3Rvci5cbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gW2RzdF0gdmVjdG9yIHRvIGhvbGQgcmVzdWx0LiBJZiBub3QgbmV3IG9uZSBpcyBjcmVhdGVkLlxuICogQHJldHVybiB7bW9kdWxlOnR3Z2wvdjMuVmVjM30gQSBjb3B5IG9mIHYuXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdjNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvcHkodiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gdlswXTtcbiAgZHN0WzFdID0gdlsxXTtcbiAgZHN0WzJdID0gdlsyXTtcbiAgcmV0dXJuIGRzdDtcbn1cbi8qKlxuICogTXVsdGlwbGllcyBhIHZlY3RvciBieSBhbm90aGVyIHZlY3RvciAoY29tcG9uZW50LXdpc2UpOyBhc3N1bWVzIGEgYW5kXG4gKiBiIGhhdmUgdGhlIHNhbWUgbGVuZ3RoLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBhIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBiIE9wZXJhbmQgdmVjdG9yLlxuICogQHBhcmFtIHttb2R1bGU6dHdnbC92My5WZWMzfSBbZHN0XSB2ZWN0b3IgdG8gaG9sZCByZXN1bHQuIElmIG5vdCBuZXcgb25lIGlzIGNyZWF0ZWQuXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC92My5WZWMzfSBUaGUgdmVjdG9yIG9mIHByb2R1Y3RzIG9mIGVudHJpZXMgb2YgYSBhbmRcbiAqICAgICBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBtdWx0aXBseShhLCBiLCBkc3QpIHtcbiAgZHN0ID0gZHN0IHx8IG5ldyBWZWNUeXBlKDMpO1xuICBkc3RbMF0gPSBhWzBdICogYlswXTtcbiAgZHN0WzFdID0gYVsxXSAqIGJbMV07XG4gIGRzdFsyXSA9IGFbMl0gKiBiWzJdO1xuICByZXR1cm4gZHN0O1xufVxuLyoqXG4gKiBEaXZpZGVzIGEgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIChjb21wb25lbnQtd2lzZSk7IGFzc3VtZXMgYSBhbmRcbiAqIGIgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGEgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IGIgT3BlcmFuZCB2ZWN0b3IuXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFtkc3RdIHZlY3RvciB0byBob2xkIHJlc3VsdC4gSWYgbm90IG5ldyBvbmUgaXMgY3JlYXRlZC5cbiAqIEByZXR1cm4ge21vZHVsZTp0d2dsL3YzLlZlYzN9IFRoZSB2ZWN0b3Igb2YgcXVvdGllbnRzIG9mIGVudHJpZXMgb2YgYSBhbmRcbiAqICAgICBiLlxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsL3YzXG4gKi9cblxuXG5mdW5jdGlvbiBkaXZpZGUoYSwgYiwgZHN0KSB7XG4gIGRzdCA9IGRzdCB8fCBuZXcgVmVjVHlwZSgzKTtcbiAgZHN0WzBdID0gYVswXSAvIGJbMF07XG4gIGRzdFsxXSA9IGFbMV0gLyBiWzFdO1xuICBkc3RbMl0gPSBhWzJdIC8gYlsyXTtcbiAgcmV0dXJuIGRzdDtcbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdmVydGV4LWFycmF5cy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3ZlcnRleC1hcnJheXMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZVZlcnRleEFycmF5SW5mbyA9IGNyZWF0ZVZlcnRleEFycmF5SW5mbztcbmV4cG9ydHMuY3JlYXRlVkFPQW5kU2V0QXR0cmlidXRlcyA9IGNyZWF0ZVZBT0FuZFNldEF0dHJpYnV0ZXM7XG5leHBvcnRzLmNyZWF0ZVZBT0Zyb21CdWZmZXJJbmZvID0gY3JlYXRlVkFPRnJvbUJ1ZmZlckluZm87XG5cbnZhciBwcm9ncmFtcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJvZ3JhbXMuanMgKi8gXCIuL3NyYy9wcm9ncmFtcy5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAxOSBHcmVnZyBUYXZhcmVzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbiAqIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSxcbiAqIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb25cbiAqIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLFxuICogYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gKiBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuICBJTiBOTyBFVkVOVCBTSEFMTFxuICogVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gKiBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSXG4gKiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKi9cblxuLyoqXG4gKiB2ZXJ0ZXggYXJyYXkgb2JqZWN0IHJlbGF0ZWQgZnVuY3Rpb25zXG4gKlxuICogWW91IHNob3VsZCBnZW5lcmFsbHkgbm90IG5lZWQgdG8gdXNlIHRoZXNlIGZ1bmN0aW9ucy4gVGhleSBhcmUgcHJvdmlkZWRcbiAqIGZvciB0aG9zZSBjYXNlcyB3aGVyZSB5b3UncmUgZG9pbmcgc29tZXRoaW5nIG91dCBvZiB0aGUgb3JkaW5hcnlcbiAqIGFuZCB5b3UgbmVlZCBsb3dlciBsZXZlbCBhY2Nlc3MuXG4gKlxuICogRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgdGhleSBhcmUgYXZhaWxhYmxlIGF0IGJvdGggYHR3Z2wuYXR0cmlidXRlc2AgYW5kIGB0d2dsYFxuICogaXRzZWxmXG4gKlxuICogU2VlIHtAbGluayBtb2R1bGU6dHdnbH0gZm9yIGNvcmUgZnVuY3Rpb25zXG4gKlxuICogQG1vZHVsZSB0d2dsL3ZlcnRleEFycmF5c1xuICovXG52YXIgRUxFTUVOVF9BUlJBWV9CVUZGRVIgPSAweDg4OTM7XG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFZlcnRleEFycmF5SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IG51bUVsZW1lbnRzIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcGFzcyB0byBgZ2wuZHJhd0FycmF5c2Agb3IgYGdsLmRyYXdFbGVtZW50c2AuXG4gKiBAcHJvcGVydHkge251bWJlcn0gW2VsZW1lbnRUeXBlXSBUaGUgdHlwZSBvZiBpbmRpY2VzIGBVTlNJR05FRF9CWVRFYCwgYFVOU0lHTkVEX1NIT1JUYCBldGMuLlxuICogQHByb3BlcnR5IHtXZWJHTFZlcnRleEFycmF5T2JqZWN0fSBbdmVydGV4QXJyYXlPYmplY3RdIGEgdmVydGV4IGFycmF5IG9iamVjdFxuICogQG1lbWJlck9mIG1vZHVsZTp0d2dsXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgVmVydGV4QXJyYXlJbmZvIGZyb20gYSBCdWZmZXJJbmZvIGFuZCBvbmUgb3IgbW9yZSBQcm9ncmFtSW5mb3NcbiAqXG4gKiBUaGlzIGNhbiBiZSBwYXNzZWQgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGVzfSBhbmQgdG9cbiAqIHtAbGluayBtb2R1bGU6dHdnbDpkcmF3QnVmZmVySW5mb30uXG4gKlxuICogPiAqKklNUE9SVEFOVDoqKiBWZXJ0ZXggQXJyYXkgT2JqZWN0cyBhcmUgKipub3QqKiBhIGRpcmVjdCBhbmFsb2cgZm9yIGEgQnVmZmVySW5mby4gVmVydGV4IEFycmF5IE9iamVjdHNcbiAqICAgYXNzaWduIGJ1ZmZlcnMgdG8gc3BlY2lmaWMgYXR0cmlidXRlcyBhdCBjcmVhdGlvbiB0aW1lLiBUaGF0IG1lYW5zIHRoZXkgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIHByb2dyYW1zXG4gKiAgIHdobydzIGF0dHJpYnV0ZXMgdXNlIHRoZSBzYW1lIGF0dHJpYnV0ZSBsb2NhdGlvbnMgZm9yIHRoZSBzYW1lIHB1cnBvc2VzLlxuICpcbiAqID4gQmluZCB5b3VyIGF0dHJpYnV0ZSBsb2NhdGlvbnMgYnkgcGFzc2luZyBhbiBhcnJheSBvZiBhdHRyaWJ1dGUgbmFtZXMgdG8ge0BsaW5rIG1vZHVsZTp0d2dsLmNyZWF0ZVByb2dyYW1JbmZvfVxuICogICBvciB1c2UgV2ViR0wgMidzIEdMU0wgRVMgMydzIGBsYXlvdXQobG9jYXRpb24gPSA8bnVtPilgIHRvIG1ha2Ugc3VyZSBsb2NhdGlvbnMgbWF0Y2guXG4gKlxuICogYWxzb1xuICpcbiAqID4gKipJTVBPUlRBTlQ6KiogQWZ0ZXIgY2FsbGluZyB0d2dsLnNldEJ1ZmZlcnNBbmRBdHRyaWJ1dGUgd2l0aCBhIEJ1ZmZlckluZm8gdGhhdCB1c2VzIGEgVmVydGV4IEFycmF5IE9iamVjdFxuICogICB0aGF0IFZlcnRleCBBcnJheSBPYmplY3Qgd2lsbCBiZSBib3VuZC4gVGhhdCBtZWFucyAqKkFOWSBNQU5JUFVMQVRJT04gT0YgRUxFTUVOVF9BUlJBWV9CVUZGRVIgb3IgQVRUUklCVVRFUyoqXG4gKiAgIHdpbGwgYWZmZWN0IHRoZSBWZXJ0ZXggQXJyYXkgT2JqZWN0IHN0YXRlLlxuICpcbiAqID4gQ2FsbCBgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpYCB0byBnZXQgYmFjayBtYW5pcHVsYXRpbmcgdGhlIGdsb2JhbCBhdHRyaWJ1dGVzIGFuZCBFTEVNRU5UX0FSUkFZX0JVRkZFUi5cbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgQSBXZWJHTFJlbmRlcmluZ0NvbnRleHRcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm98bW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm9bXX0gcHJvZ3JhbUluZm8gYSBwcm9ncmFtSW5mbyBvciBhcnJheSBvZiBwcm9ncmFtSW5mb3NcbiAqIEBwYXJhbSB7bW9kdWxlOnR3Z2wuQnVmZmVySW5mb30gYnVmZmVySW5mbyBCdWZmZXJJbmZvIGFzIHJldHVybmVkIGZyb20gY3JlYXRlQnVmZmVySW5mb0Zyb21BcnJheXMgZXRjLi4uXG4gKlxuICogICAgWW91IG5lZWQgdG8gbWFrZSBzdXJlIGV2ZXJ5IGF0dHJpYnV0ZSB0aGF0IHdpbGwgYmUgdXNlZCBpcyBib3VuZC4gU28gZm9yIGV4YW1wbGUgYXNzdW1lIHNoYWRlciAxXG4gKiAgICB1c2VzIGF0dHJpYnV0ZXMgQSwgQiwgQyBhbmQgc2hhZGVyIDIgdXNlcyBhdHRyaWJ1dGVzIEEsIEIsIEQuIElmIHlvdSBvbmx5IHBhc3MgaW4gdGhlIHByb2dyYW1JbmZvXG4gKiAgICBmb3Igc2hhZGVyIDEgdGhlbiBvbmx5IGF0dHJpYnV0ZXMgQSwgQiwgYW5kIEMgd2lsbCBoYXZlIHRoZWlyIGF0dHJpYnV0ZXMgc2V0IGJlY2F1c2UgVFdHTCBkb2Vzbid0XG4gKiAgICBub3cgYXR0cmlidXRlIEQncyBsb2NhdGlvbi5cbiAqXG4gKiAgICBTbywgeW91IGNhbiBwYXNzIGluIGJvdGggc2hhZGVyIDEgYW5kIHNoYWRlciAyJ3MgcHJvZ3JhbUluZm9cbiAqXG4gKiBAcmV0dXJuIHttb2R1bGU6dHdnbC5WZXJ0ZXhBcnJheUluZm99IFRoZSBjcmVhdGVkIFZlcnRleEFycmF5SW5mb1xuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92ZXJ0ZXhBcnJheXNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhBcnJheUluZm8oZ2wsIHByb2dyYW1JbmZvcywgYnVmZmVySW5mbykge1xuICB2YXIgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKTtcbiAgZ2wuYmluZFZlcnRleEFycmF5KHZhbyk7XG5cbiAgaWYgKCFwcm9ncmFtSW5mb3MubGVuZ3RoKSB7XG4gICAgcHJvZ3JhbUluZm9zID0gW3Byb2dyYW1JbmZvc107XG4gIH1cblxuICBwcm9ncmFtSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3JhbUluZm8pIHtcbiAgICBwcm9ncmFtcy5zZXRCdWZmZXJzQW5kQXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8sIGJ1ZmZlckluZm8pO1xuICB9KTtcbiAgZ2wuYmluZFZlcnRleEFycmF5KG51bGwpO1xuICByZXR1cm4ge1xuICAgIG51bUVsZW1lbnRzOiBidWZmZXJJbmZvLm51bUVsZW1lbnRzLFxuICAgIGVsZW1lbnRUeXBlOiBidWZmZXJJbmZvLmVsZW1lbnRUeXBlLFxuICAgIHZlcnRleEFycmF5T2JqZWN0OiB2YW9cbiAgfTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHZlcnRleCBhcnJheSBvYmplY3QgYW5kIHRoZW4gc2V0cyB0aGUgYXR0cmlidXRlcyBvbiBpdFxuICpcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBUaGUgV2ViR0xSZW5kZXJpbmdDb250ZXh0IHRvIHVzZS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn0gc2V0dGVycyBBdHRyaWJ1dGUgc2V0dGVycyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUF0dHJpYnV0ZVNldHRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIG1vZHVsZTp0d2dsLkF0dHJpYkluZm8+fSBhdHRyaWJzIEF0dHJpYkluZm9zIG1hcHBlZCBieSBhdHRyaWJ1dGUgbmFtZS5cbiAqIEBwYXJhbSB7V2ViR0xCdWZmZXJ9IFtpbmRpY2VzXSBhbiBvcHRpb25hbCBFTEVNRU5UX0FSUkFZX0JVRkZFUiBvZiBpbmRpY2VzXG4gKiBAbWVtYmVyT2YgbW9kdWxlOnR3Z2wvdmVydGV4QXJyYXlzXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVWQU9BbmRTZXRBdHRyaWJ1dGVzKGdsLCBzZXR0ZXJzLCBhdHRyaWJzLCBpbmRpY2VzKSB7XG4gIHZhciB2YW8gPSBnbC5jcmVhdGVWZXJ0ZXhBcnJheSgpO1xuICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKTtcbiAgcHJvZ3JhbXMuc2V0QXR0cmlidXRlcyhzZXR0ZXJzLCBhdHRyaWJzKTtcblxuICBpZiAoaW5kaWNlcykge1xuICAgIGdsLmJpbmRCdWZmZXIoRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGluZGljZXMpO1xuICB9IC8vIFdlIHVuYmluZCB0aGlzIGJlY2F1c2Ugb3RoZXJ3aXNlIGFueSBjaGFuZ2UgdG8gRUxFTUVOVF9BUlJBWV9CVUZGRVJcbiAgLy8gbGlrZSB3aGVuIGNyZWF0aW5nIGJ1ZmZlcnMgZm9yIG90aGVyIHN0dWZmIHdpbGwgbWVzcyB1cCB0aGlzIFZBTydzIGJpbmRpbmdcblxuXG4gIGdsLmJpbmRWZXJ0ZXhBcnJheShudWxsKTtcbiAgcmV0dXJuIHZhbztcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHZlcnRleCBhcnJheSBvYmplY3QgYW5kIHRoZW4gc2V0cyB0aGUgYXR0cmlidXRlc1xuICogb24gaXRcbiAqXG4gKiBAcGFyYW0ge1dlYkdMUmVuZGVyaW5nQ29udGV4dH0gZ2wgVGhlIFdlYkdMUmVuZGVyaW5nQ29udGV4dFxuICogICAgICAgIHRvIHVzZS5cbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPnwgbW9kdWxlOnR3Z2wuUHJvZ3JhbUluZm99IHByb2dyYW1JbmZvIGFzIHJldHVybmVkIGZyb20gY3JlYXRlUHJvZ3JhbUluZm8gb3IgQXR0cmlidXRlIHNldHRlcnMgYXMgcmV0dXJuZWQgZnJvbSBjcmVhdGVBdHRyaWJ1dGVTZXR0ZXJzXG4gKiBAcGFyYW0ge21vZHVsZTp0d2dsLkJ1ZmZlckluZm99IGJ1ZmZlckluZm8gQnVmZmVySW5mbyBhcyByZXR1cm5lZCBmcm9tIGNyZWF0ZUJ1ZmZlckluZm9Gcm9tQXJyYXlzIGV0Yy4uLlxuICogQHBhcmFtIHtXZWJHTEJ1ZmZlcn0gW2luZGljZXNdIGFuIG9wdGlvbmFsIEVMRU1FTlRfQVJSQVlfQlVGRkVSIG9mIGluZGljZXNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6dHdnbC92ZXJ0ZXhBcnJheXNcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVZBT0Zyb21CdWZmZXJJbmZvKGdsLCBwcm9ncmFtSW5mbywgYnVmZmVySW5mbykge1xuICByZXR1cm4gY3JlYXRlVkFPQW5kU2V0QXR0cmlidXRlcyhnbCwgcHJvZ3JhbUluZm8uYXR0cmliU2V0dGVycyB8fCBwcm9ncmFtSW5mbywgYnVmZmVySW5mby5hdHRyaWJzLCBidWZmZXJJbmZvLmluZGljZXMpO1xufVxuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHdnbC1mdWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiIFxuY29uc3QgZ2xzbCA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xuY29uc3QgdHdnbCA9IHJlcXVpcmUoXCJ0d2dsLmpzXCIpO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSBnbHNsKFtcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IHBvc2l0aW9uO1xcbn1cIl0pOyBcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gZ2xzbChbXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG51bmlmb3JtIGZsb2F0IHVfd2lkdGg7XFxudW5pZm9ybSBmbG9hdCB1X2hlaWdodDtcXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdV9hc3BlY3Q7XFxuXFxudmVjMyBjb2xvcnBwYWxyb2pvID0gdmVjMygwLjY0NywgMC4wMDQsIDAuMDA0KTtcXG52ZWMzIGNvbG9ycHBhbGF6dWwgPSB2ZWMzKDAuMDEyLCAwLCAwLjUxOCk7XFxudmVjMyBjb2xvcm5hcmFuamEgPSB2ZWMzKDEsIDAuNDI0LCAwKTtcXG52ZWMzIGNvbG9ydHVycXVlc2EgPSB2ZWMzKDAuMTE4LCAwLjQyNCwgMC44MTYpO1xcblxcbi8vXFxuLy8gRGVzY3JpcHRpb24gOiBBcnJheSBhbmQgdGV4dHVyZWxlc3MgR0xTTCAyRC8zRC80RCBzaW1wbGV4XFxuLy8gICAgICAgICAgICAgICBub2lzZSBmdW5jdGlvbnMuXFxuLy8gICAgICBBdXRob3IgOiBJYW4gTWNFd2FuLCBBc2hpbWEgQXJ0cy5cXG4vLyAgTWFpbnRhaW5lciA6IGlqbVxcbi8vICAgICBMYXN0bW9kIDogMjAxMTA4MjIgKGlqbSlcXG4vLyAgICAgTGljZW5zZSA6IENvcHlyaWdodCAoQykgMjAxMSBBc2hpbWEgQXJ0cy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4vLyAgICAgICAgICAgICAgIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZS5cXG4vLyAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hc2hpbWEvd2ViZ2wtbm9pc2VcXG4vL1xcblxcbnZlYzMgbW9kMjg5KHZlYzMgeCkge1xcbiAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuMCAvIDI4OS4wKSkgKiAyODkuMDtcXG59XFxuXFxudmVjNCBtb2QyODkodmVjNCB4KSB7XFxuICByZXR1cm4geCAtIGZsb29yKHggKiAoMS4wIC8gMjg5LjApKSAqIDI4OS4wO1xcbn1cXG5cXG52ZWM0IHBlcm11dGUodmVjNCB4KSB7XFxuICAgICByZXR1cm4gbW9kMjg5KCgoeCozNC4wKSsxLjApKngpO1xcbn1cXG5cXG52ZWM0IHRheWxvckludlNxcnQodmVjNCByKVxcbntcXG4gIHJldHVybiAxLjc5Mjg0MjkxNDAwMTU5IC0gMC44NTM3MzQ3MjA5NTMxNCAqIHI7XFxufVxcblxcbmZsb2F0IHNub2lzZSh2ZWMzIHYpXFxuICB7XFxuICBjb25zdCB2ZWMyICBDID0gdmVjMigxLjAvNi4wLCAxLjAvMy4wKSA7XFxuICBjb25zdCB2ZWM0ICBEID0gdmVjNCgwLjAsIDAuNSwgMS4wLCAyLjApO1xcblxcbi8vIEZpcnN0IGNvcm5lclxcbiAgdmVjMyBpICA9IGZsb29yKHYgKyBkb3QodiwgQy55eXkpICk7XFxuICB2ZWMzIHgwID0gICB2IC0gaSArIGRvdChpLCBDLnh4eCkgO1xcblxcbi8vIE90aGVyIGNvcm5lcnNcXG4gIHZlYzMgZ18wID0gc3RlcCh4MC55engsIHgwLnh5eik7XFxuICB2ZWMzIGwgPSAxLjAgLSBnXzA7XFxuICB2ZWMzIGkxID0gbWluKCBnXzAueHl6LCBsLnp4eSApO1xcbiAgdmVjMyBpMiA9IG1heCggZ18wLnh5eiwgbC56eHkgKTtcXG5cXG4gIC8vICAgeDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHh4O1xcbiAgLy8gICB4MSA9IHgwIC0gaTEgICsgMS4wICogQy54eHg7XFxuICAvLyAgIHgyID0geDAgLSBpMiAgKyAyLjAgKiBDLnh4eDtcXG4gIC8vICAgeDMgPSB4MCAtIDEuMCArIDMuMCAqIEMueHh4O1xcbiAgdmVjMyB4MSA9IHgwIC0gaTEgKyBDLnh4eDtcXG4gIHZlYzMgeDIgPSB4MCAtIGkyICsgQy55eXk7IC8vIDIuMCpDLnggPSAxLzMgPSBDLnlcXG4gIHZlYzMgeDMgPSB4MCAtIEQueXl5OyAgICAgIC8vIC0xLjArMy4wKkMueCA9IC0wLjUgPSAtRC55XFxuXFxuLy8gUGVybXV0YXRpb25zXFxuICBpID0gbW9kMjg5KGkpO1xcbiAgdmVjNCBwID0gcGVybXV0ZSggcGVybXV0ZSggcGVybXV0ZShcXG4gICAgICAgICAgICAgaS56ICsgdmVjNCgwLjAsIGkxLnosIGkyLnosIDEuMCApKVxcbiAgICAgICAgICAgKyBpLnkgKyB2ZWM0KDAuMCwgaTEueSwgaTIueSwgMS4wICkpXFxuICAgICAgICAgICArIGkueCArIHZlYzQoMC4wLCBpMS54LCBpMi54LCAxLjAgKSk7XFxuXFxuLy8gR3JhZGllbnRzOiA3eDcgcG9pbnRzIG92ZXIgYSBzcXVhcmUsIG1hcHBlZCBvbnRvIGFuIG9jdGFoZWRyb24uXFxuLy8gVGhlIHJpbmcgc2l6ZSAxNyoxNyA9IDI4OSBpcyBjbG9zZSB0byBhIG11bHRpcGxlIG9mIDQ5ICg0OSo2ID0gMjk0KVxcbiAgZmxvYXQgbl8gPSAwLjE0Mjg1NzE0Mjg1NzsgLy8gMS4wLzcuMFxcbiAgdmVjMyAgbnMgPSBuXyAqIEQud3l6IC0gRC54eng7XFxuXFxuICB2ZWM0IGogPSBwIC0gNDkuMCAqIGZsb29yKHAgKiBucy56ICogbnMueik7ICAvLyAgbW9kKHAsNyo3KVxcblxcbiAgdmVjNCB4XyA9IGZsb29yKGogKiBucy56KTtcXG4gIHZlYzQgeV8gPSBmbG9vcihqIC0gNy4wICogeF8gKTsgICAgLy8gbW9kKGosTilcXG5cXG4gIHZlYzQgeCA9IHhfICpucy54ICsgbnMueXl5eTtcXG4gIHZlYzQgeSA9IHlfICpucy54ICsgbnMueXl5eTtcXG4gIHZlYzQgaCA9IDEuMCAtIGFicyh4KSAtIGFicyh5KTtcXG5cXG4gIHZlYzQgYjAgPSB2ZWM0KCB4Lnh5LCB5Lnh5ICk7XFxuICB2ZWM0IGIxID0gdmVjNCggeC56dywgeS56dyApO1xcblxcbiAgLy92ZWM0IHMwID0gdmVjNChsZXNzVGhhbihiMCwwLjApKSoyLjAgLSAxLjA7XFxuICAvL3ZlYzQgczEgPSB2ZWM0KGxlc3NUaGFuKGIxLDAuMCkpKjIuMCAtIDEuMDtcXG4gIHZlYzQgczAgPSBmbG9vcihiMCkqMi4wICsgMS4wO1xcbiAgdmVjNCBzMSA9IGZsb29yKGIxKSoyLjAgKyAxLjA7XFxuICB2ZWM0IHNoID0gLXN0ZXAoaCwgdmVjNCgwLjApKTtcXG5cXG4gIHZlYzQgYTAgPSBiMC54enl3ICsgczAueHp5dypzaC54eHl5IDtcXG4gIHZlYzQgYTEgPSBiMS54enl3ICsgczEueHp5dypzaC56end3IDtcXG5cXG4gIHZlYzMgcDAgPSB2ZWMzKGEwLnh5LGgueCk7XFxuICB2ZWMzIHAxID0gdmVjMyhhMC56dyxoLnkpO1xcbiAgdmVjMyBwMiA9IHZlYzMoYTEueHksaC56KTtcXG4gIHZlYzMgcDMgPSB2ZWMzKGExLnp3LGgudyk7XFxuXFxuLy9Ob3JtYWxpc2UgZ3JhZGllbnRzXFxuICB2ZWM0IG5vcm0gPSB0YXlsb3JJbnZTcXJ0KHZlYzQoZG90KHAwLHAwKSwgZG90KHAxLHAxKSwgZG90KHAyLCBwMiksIGRvdChwMyxwMykpKTtcXG4gIHAwICo9IG5vcm0ueDtcXG4gIHAxICo9IG5vcm0ueTtcXG4gIHAyICo9IG5vcm0uejtcXG4gIHAzICo9IG5vcm0udztcXG5cXG4vLyBNaXggZmluYWwgbm9pc2UgdmFsdWVcXG4gIHZlYzQgbSA9IG1heCgwLjYgLSB2ZWM0KGRvdCh4MCx4MCksIGRvdCh4MSx4MSksIGRvdCh4Mix4MiksIGRvdCh4Myx4MykpLCAwLjApO1xcbiAgbSA9IG0gKiBtO1xcbiAgcmV0dXJuIDQyLjAgKiBkb3QoIG0qbSwgdmVjNCggZG90KHAwLHgwKSwgZG90KHAxLHgxKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdChwMix4MiksIGRvdChwMyx4MykgKSApO1xcbiAgfVxcblxcbmZsb2F0IGh1ZTJyZ2IoZmxvYXQgZjEsIGZsb2F0IGYyLCBmbG9hdCBodWUpIHtcXG4gICAgaWYgKGh1ZSA8IDAuMClcXG4gICAgICAgIGh1ZSArPSAxLjA7XFxuICAgIGVsc2UgaWYgKGh1ZSA+IDEuMClcXG4gICAgICAgIGh1ZSAtPSAxLjA7XFxuICAgIGZsb2F0IHJlcztcXG4gICAgaWYgKCg2LjAgKiBodWUpIDwgMS4wKVxcbiAgICAgICAgcmVzID0gZjEgKyAoZjIgLSBmMSkgKiA2LjAgKiBodWU7XFxuICAgIGVsc2UgaWYgKCgyLjAgKiBodWUpIDwgMS4wKVxcbiAgICAgICAgcmVzID0gZjI7XFxuICAgIGVsc2UgaWYgKCgzLjAgKiBodWUpIDwgMi4wKVxcbiAgICAgICAgcmVzID0gZjEgKyAoZjIgLSBmMSkgKiAoKDIuMCAvIDMuMCkgLSBodWUpICogNi4wO1xcbiAgICBlbHNlXFxuICAgICAgICByZXMgPSBmMTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudmVjMyBoc2wycmdiKHZlYzMgaHNsKSB7XFxuICAgIHZlYzMgcmdiO1xcbiAgICBcXG4gICAgaWYgKGhzbC55ID09IDAuMCkge1xcbiAgICAgICAgcmdiID0gdmVjMyhoc2wueik7IC8vIEx1bWluYW5jZVxcbiAgICB9IGVsc2Uge1xcbiAgICAgICAgZmxvYXQgZjI7XFxuICAgICAgICBcXG4gICAgICAgIGlmIChoc2wueiA8IDAuNSlcXG4gICAgICAgICAgICBmMiA9IGhzbC56ICogKDEuMCArIGhzbC55KTtcXG4gICAgICAgIGVsc2VcXG4gICAgICAgICAgICBmMiA9IGhzbC56ICsgaHNsLnkgLSBoc2wueSAqIGhzbC56O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgZmxvYXQgZjEgPSAyLjAgKiBoc2wueiAtIGYyO1xcbiAgICAgICAgXFxuICAgICAgICByZ2IuciA9IGh1ZTJyZ2IoZjEsIGYyLCBoc2wueCArICgxLjAvMy4wKSk7XFxuICAgICAgICByZ2IuZyA9IGh1ZTJyZ2IoZjEsIGYyLCBoc2wueCk7XFxuICAgICAgICByZ2IuYiA9IGh1ZTJyZ2IoZjEsIGYyLCBoc2wueCAtICgxLjAvMy4wKSk7XFxuICAgIH0gICBcXG4gICAgcmV0dXJuIHJnYjtcXG59XFxuXFxudmVjMyBoc2wycmdiKGZsb2F0IGgsIGZsb2F0IHMsIGZsb2F0IGwpIHtcXG4gICAgcmV0dXJuIGhzbDJyZ2IodmVjMyhoLCBzLCBsKSk7XFxufVxcblxcbnZvaWQgbWFpbiAoKSB7XFxuICAgIC8vIG5vcm1hbGl6ZWQgcG9zaXRpb24gb2YgZWFjaCBmcmFnbWVudFxcbiAgICBmbG9hdCBub3JtYWxpemVkWCA9IChnbF9GcmFnQ29vcmQueC91X3Jlc29sdXRpb24ueCkgKiAyLiAtMS47XFxuICAgIGZsb2F0IG5vcm1hbGl6ZWRZID0gKGdsX0ZyYWdDb29yZC55L3VfcmVzb2x1dGlvbi55KSAqIDIuIC0xLjtcXG4gICAgdmVjMiBwb3MgPSB2ZWMyKG5vcm1hbGl6ZWRYLCBub3JtYWxpemVkWSk7XFxuXFxuICAgIC8vIGNlbnRlciBvZiB0aGUgaW1hZ2UgaXMgKDAuMCwgMC4wKVxcbiAgICB2ZWMyIGNlbnRlciA9IHZlYzIoMC4wKTtcXG5cXG4gICAgLy8gaWYgeW91IHdhbnQgdG8gbWFrZSBhIHBlcmZlY3QgcHJvcG9ydGlvbiAsIGFkZCB0aGlzIGxpbmUgdG8gYXZvaWQgY2lyY2xlIGJlaW5nIHdpZGVyIG9uIHggYmVjYXVzZSBvZiBob3Jpem9udGFsIHNjcmVlbnNcXG4gICAgcG9zLnggKj0gdV9hc3BlY3Q7XFxuXFxuICAgIC8vIHRoaXMgaXMgdG8gY3JlYXRlIGEgY2lyY3VsYXIgbWFza1xcbiAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKGNlbnRlciAtIHBvcyk7XFxuICAgIGZsb2F0IGFscGhhID0gc21vb3Roc3RlcCgwLjc1LCAwLjg1LCBkaXN0KTtcXG5cXG4gICAgZmxvYXQgbiA9IHNub2lzZSh2ZWMzKG5vcm1hbGl6ZWRYLCBub3JtYWxpemVkWSwgdV90aW1lKi4zKSk7XFxuICAgIHZlYzMgY29sb3IgPSB2ZWMzKG4rMC4yLCBjb3MobiksIG4qNS4pO1xcbiAgICB2ZWMzIG1hc2tlZCA9IG1peChjb2xvciwgdmVjMygxLjApLCBhbHBoYSk7XFxuICAgIFxcbiAgICAvLyBkbyBub3QgdG91Y2ggYWxwaGEgaW4gaGVyZS4gaWYgd2FudGluZyB0byBtb2RpZnkgXFxcImFscGhhXFxcIiBvZiBsYXllcnMsIHVzZSBtaXggZnVuY3Rpb24gYmVmb3JlIHRoaXMuIFxcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KG1hc2tlZCwgMS4wKTtcXG59XCJdKTsgXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuXG5jb25zdCBtb3VzZSA9IFswLCAwXTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICBtb3VzZVswXSA9IGUucGFnZVg7XG4gICAgbW91c2VbMV0gPSBlLnBhZ2VZO1xufSk7XG5cbmNvbnN0IHByb2dyYW1JbmZvID0gdHdnbC5jcmVhdGVQcm9ncmFtSW5mbyhnbCwgW3ZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXJdKTtcblxuY29uc3QgYXJyYXlzID0ge1xuICAgIHBvc2l0aW9uOiBbLTEsIC0xLCAwLCAxLCAtMSwgMCwgLTEsIDEsIDAsIC0xLCAxLCAwLCAxLCAtMSwgMCwgMSwgMSwgMF1cbn07XG5jb25zdCBidWZmZXJJbmZvID0gdHdnbC5jcmVhdGVCdWZmZXJJbmZvRnJvbUFycmF5cyhnbCwgYXJyYXlzKTtcblxuZnVuY3Rpb24gcmVuZGVyKHRpbWUpIHtcbiAgICB0d2dsLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUoZ2wuY2FudmFzKTtcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XG4gICAgICAgIHVfdGltZTogdGltZSAqIDAuMDAxLFxuICAgICAgICB1X3Jlc29sdXRpb246IFtnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHRdLFxuICAgICAgICB1X21vdXNlOiBtb3VzZSxcbiAgICAgICAgdV9hc3BlY3Q6IGdsLmNhbnZhcy53aWR0aC9nbC5jYW52YXMuaGVpZ2h0LFxuICAgIH07XG5cbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1JbmZvLnByb2dyYW0pO1xuICAgIHR3Z2wuc2V0QnVmZmVyc0FuZEF0dHJpYnV0ZXMoZ2wsIHByb2dyYW1JbmZvLCBidWZmZXJJbmZvKTtcbiAgICB0d2dsLnNldFVuaWZvcm1zKHByb2dyYW1JbmZvLCB1bmlmb3Jtcyk7XG4gICAgdHdnbC5kcmF3QnVmZmVySW5mbyhnbCwgYnVmZmVySW5mbyk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbn1cbnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG4iXX0=
