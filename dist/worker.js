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
/******/ 	__webpack_require__.p = "/~hiukim/projects/WebCards/mind-ar-js2/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ar.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-any-array/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/is-any-array/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const toString = Object.prototype.toString;

function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}

module.exports = isAnyArray;


/***/ }),

/***/ "./node_modules/ml-array-max/lib-es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-array-max/lib-es6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "./node_modules/is-any-array/src/index.js");
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function max(input) {
  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var maxValue = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] > maxValue) maxValue = input[i];
  }

  return maxValue;
}

/* harmony default export */ __webpack_exports__["default"] = (max);


/***/ }),

/***/ "./node_modules/ml-array-min/lib-es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-array-min/lib-es6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "./node_modules/is-any-array/src/index.js");
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function min(input) {
  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var minValue = input[0];

  for (var i = 1; i < input.length; i++) {
    if (input[i] < minValue) minValue = input[i];
  }

  return minValue;
}

/* harmony default export */ __webpack_exports__["default"] = (min);


/***/ }),

/***/ "./node_modules/ml-array-rescale/lib-es6/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ml-array-rescale/lib-es6/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "./node_modules/is-any-array/src/index.js");
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_any_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ml_array_max__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-array-max */ "./node_modules/ml-array-max/lib-es6/index.js");
/* harmony import */ var ml_array_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml-array-min */ "./node_modules/ml-array-min/lib-es6/index.js");




/**
 *
 * @param {Array} input
 * @param {object} [options={}]
 * @param {Array} [options.output=[]] specify the output array, can be the input array for in place modification
 */

function rescale(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(input)) {
    throw new TypeError('input must be an array');
  } else if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var output;

  if (options.output !== undefined) {
    if (!is_any_array__WEBPACK_IMPORTED_MODULE_0___default()(options.output)) {
      throw new TypeError('output option must be an array if specified');
    }

    output = options.output;
  } else {
    output = new Array(input.length);
  }

  var currentMin = Object(ml_array_min__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
  var currentMax = Object(ml_array_max__WEBPACK_IMPORTED_MODULE_1__["default"])(input);

  if (currentMin === currentMax) {
    throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
  }

  var _options$min = options.min,
      minValue = _options$min === void 0 ? options.autoMinMax ? currentMin : 0 : _options$min,
      _options$max = options.max,
      maxValue = _options$max === void 0 ? options.autoMinMax ? currentMax : 1 : _options$max;

  if (minValue >= maxValue) {
    throw new RangeError('min option must be smaller than max option');
  }

  var factor = (maxValue - minValue) / (currentMax - currentMin);

  for (var i = 0; i < input.length; i++) {
    output[i] = (input[i] - currentMin) * factor + minValue;
  }

  return output;
}

/* harmony default export */ __webpack_exports__["default"] = (rescale);


/***/ }),

/***/ "./node_modules/ml-matrix/src/correlation.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/correlation.js ***!
  \***************************************************/
/*! exports provided: correlation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correlation", function() { return correlation; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");


function correlation(xMatrix, yMatrix = xMatrix, options = {}) {
  xMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](xMatrix);
  let yIsSame = false;
  if (
    typeof yMatrix === 'object' &&
    !_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(yMatrix) &&
    !Array.isArray(yMatrix)
  ) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](yMatrix);
  }
  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }

  const { center = true, scale = true } = options;
  if (center) {
    xMatrix.center('column');
    if (!yIsSame) {
      yMatrix.center('column');
    }
  }
  if (scale) {
    xMatrix.scale('column');
    if (!yIsSame) {
      yMatrix.scale('column');
    }
  }

  const sdx = xMatrix.standardDeviation('column', { unbiased: true });
  const sdy = yIsSame
    ? sdx
    : yMatrix.standardDeviation('column', { unbiased: true });

  const corr = xMatrix.transpose().mmul(yMatrix);
  for (let i = 0; i < corr.rows; i++) {
    for (let j = 0; j < corr.columns; j++) {
      corr.set(
        i,
        j,
        corr.get(i, j) * (1 / (sdx[i] * sdy[j])) * (1 / (xMatrix.rows - 1)),
      );
    }
  }
  return corr;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/covariance.js":
/*!**************************************************!*\
  !*** ./node_modules/ml-matrix/src/covariance.js ***!
  \**************************************************/
/*! exports provided: covariance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covariance", function() { return covariance; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");


function covariance(xMatrix, yMatrix = xMatrix, options = {}) {
  xMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](xMatrix);
  let yIsSame = false;
  if (
    typeof yMatrix === 'object' &&
    !_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(yMatrix) &&
    !Array.isArray(yMatrix)
  ) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](yMatrix);
  }
  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }
  const { center = true } = options;
  if (center) {
    xMatrix = xMatrix.center('column');
    if (!yIsSame) {
      yMatrix = yMatrix.center('column');
    }
  }
  const cov = xMatrix.transpose().mmul(yMatrix);
  for (let i = 0; i < cov.rows; i++) {
    for (let j = 0; j < cov.columns; j++) {
      cov.set(i, j, cov.get(i, j) * (1 / (xMatrix.rows - 1)));
    }
  }
  return cov;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/cholesky.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/cholesky.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CholeskyDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class CholeskyDecomposition {
  constructor(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);
    if (!value.isSymmetric()) {
      throw new Error('Matrix is not symmetric');
    }

    let a = value;
    let dimension = a.rows;
    let l = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](dimension, dimension);
    let positiveDefinite = true;
    let i, j, k;

    for (j = 0; j < dimension; j++) {
      let d = 0;
      for (k = 0; k < j; k++) {
        let s = 0;
        for (i = 0; i < k; i++) {
          s += l.get(k, i) * l.get(j, i);
        }
        s = (a.get(j, k) - s) / l.get(k, k);
        l.set(j, k, s);
        d = d + s * s;
      }

      d = a.get(j, j) - d;

      positiveDefinite &= d > 0;
      l.set(j, j, Math.sqrt(Math.max(d, 0)));
      for (k = j + 1; k < dimension; k++) {
        l.set(j, k, 0);
      }
    }

    this.L = l;
    this.positiveDefinite = Boolean(positiveDefinite);
  }

  isPositiveDefinite() {
    return this.positiveDefinite;
  }

  solve(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let l = this.L;
    let dimension = l.rows;

    if (value.rows !== dimension) {
      throw new Error('Matrix dimensions do not match');
    }
    if (this.isPositiveDefinite() === false) {
      throw new Error('Matrix is not positive definite');
    }

    let count = value.columns;
    let B = value.clone();
    let i, j, k;

    for (k = 0; k < dimension; k++) {
      for (j = 0; j < count; j++) {
        for (i = 0; i < k; i++) {
          B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(k, i));
        }
        B.set(k, j, B.get(k, j) / l.get(k, k));
      }
    }

    for (k = dimension - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        for (i = k + 1; i < dimension; i++) {
          B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(i, k));
        }
        B.set(k, j, B.get(k, j) / l.get(k, k));
      }
    }

    return B;
  }

  get lowerTriangularMatrix() {
    return this.L;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/evd.js":
/*!**********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/evd.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EigenvalueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/dc/util.js");





class EigenvalueDecomposition {
  constructor(matrix, options = {}) {
    const { assumeSymmetric = false } = options;

    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
    if (!matrix.isSquare()) {
      throw new Error('Matrix is not a square matrix');
    }

    let n = matrix.columns;
    let V = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let d = new Float64Array(n);
    let e = new Float64Array(n);
    let value = matrix;
    let i, j;

    let isSymmetric = false;
    if (assumeSymmetric) {
      isSymmetric = true;
    } else {
      isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          V.set(i, j, value.get(i, j));
        }
      }
      tred2(n, e, d, V);
      tql2(n, e, d, V);
    } else {
      let H = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
      let ort = new Float64Array(n);
      for (j = 0; j < n; j++) {
        for (i = 0; i < n; i++) {
          H.set(i, j, value.get(i, j));
        }
      }
      orthes(n, H, ort, V);
      hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
  }

  get realEigenvalues() {
    return Array.from(this.d);
  }

  get imaginaryEigenvalues() {
    return Array.from(this.e);
  }

  get eigenvectorMatrix() {
    return this.V;
  }

  get diagonalMatrix() {
    let n = this.n;
    let e = this.e;
    let d = this.d;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let i, j;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        X.set(i, j, 0);
      }
      X.set(i, i, d[i]);
      if (e[i] > 0) {
        X.set(i, i + 1, e[i]);
      } else if (e[i] < 0) {
        X.set(i, i - 1, e[i]);
      }
    }
    return X;
  }
}

function tred2(n, e, d, V) {
  let f, g, h, i, j, k, hh, scale;

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
  }

  for (i = n - 1; i > 0; i--) {
    scale = 0;
    h = 0;
    for (k = 0; k < i; k++) {
      scale = scale + Math.abs(d[k]);
    }

    if (scale === 0) {
      e[i] = d[i - 1];
      for (j = 0; j < i; j++) {
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
        V.set(j, i, 0);
      }
    } else {
      for (k = 0; k < i; k++) {
        d[k] /= scale;
        h += d[k] * d[k];
      }

      f = d[i - 1];
      g = Math.sqrt(h);
      if (f > 0) {
        g = -g;
      }

      e[i] = scale * g;
      h = h - f * g;
      d[i - 1] = f - g;
      for (j = 0; j < i; j++) {
        e[j] = 0;
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        V.set(j, i, f);
        g = e[j] + V.get(j, j) * f;
        for (k = j + 1; k <= i - 1; k++) {
          g += V.get(k, j) * d[k];
          e[k] += V.get(k, j) * f;
        }
        e[j] = g;
      }

      f = 0;
      for (j = 0; j < i; j++) {
        e[j] /= h;
        f += e[j] * d[j];
      }

      hh = f / (h + h);
      for (j = 0; j < i; j++) {
        e[j] -= hh * d[j];
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        g = e[j];
        for (k = j; k <= i - 1; k++) {
          V.set(k, j, V.get(k, j) - (f * e[k] + g * d[k]));
        }
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
      }
    }
    d[i] = h;
  }

  for (i = 0; i < n - 1; i++) {
    V.set(n - 1, i, V.get(i, i));
    V.set(i, i, 1);
    h = d[i + 1];
    if (h !== 0) {
      for (k = 0; k <= i; k++) {
        d[k] = V.get(k, i + 1) / h;
      }

      for (j = 0; j <= i; j++) {
        g = 0;
        for (k = 0; k <= i; k++) {
          g += V.get(k, i + 1) * V.get(k, j);
        }
        for (k = 0; k <= i; k++) {
          V.set(k, j, V.get(k, j) - g * d[k]);
        }
      }
    }

    for (k = 0; k <= i; k++) {
      V.set(k, i + 1, 0);
    }
  }

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
    V.set(n - 1, j, 0);
  }

  V.set(n - 1, n - 1, 1);
  e[0] = 0;
}

function tql2(n, e, d, V) {
  let g, h, i, j, k, l, m, p, r, dl1, c, c2, c3, el1, s, s2, iter;

  for (i = 1; i < n; i++) {
    e[i - 1] = e[i];
  }

  e[n - 1] = 0;

  let f = 0;
  let tst1 = 0;
  let eps = Number.EPSILON;

  for (l = 0; l < n; l++) {
    tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
    m = l;
    while (m < n) {
      if (Math.abs(e[m]) <= eps * tst1) {
        break;
      }
      m++;
    }

    if (m > l) {
      iter = 0;
      do {
        iter = iter + 1;

        g = d[l];
        p = (d[l + 1] - g) / (2 * e[l]);
        r = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(p, 1);
        if (p < 0) {
          r = -r;
        }

        d[l] = e[l] / (p + r);
        d[l + 1] = e[l] * (p + r);
        dl1 = d[l + 1];
        h = g - d[l];
        for (i = l + 2; i < n; i++) {
          d[i] -= h;
        }

        f = f + h;

        p = d[m];
        c = 1;
        c2 = c;
        c3 = c;
        el1 = e[l + 1];
        s = 0;
        s2 = 0;
        for (i = m - 1; i >= l; i--) {
          c3 = c2;
          c2 = c;
          s2 = s;
          g = c * e[i];
          h = c * p;
          r = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(p, e[i]);
          e[i + 1] = s * r;
          s = e[i] / r;
          c = p / r;
          p = c * d[i] - s * g;
          d[i + 1] = h + s * (c * g + s * d[i]);

          for (k = 0; k < n; k++) {
            h = V.get(k, i + 1);
            V.set(k, i + 1, s * V.get(k, i) + c * h);
            V.set(k, i, c * V.get(k, i) - s * h);
          }
        }

        p = (-s * s2 * c3 * el1 * e[l]) / dl1;
        e[l] = s * p;
        d[l] = c * p;
      } while (Math.abs(e[l]) > eps * tst1);
    }
    d[l] = d[l] + f;
    e[l] = 0;
  }

  for (i = 0; i < n - 1; i++) {
    k = i;
    p = d[i];
    for (j = i + 1; j < n; j++) {
      if (d[j] < p) {
        k = j;
        p = d[j];
      }
    }

    if (k !== i) {
      d[k] = d[i];
      d[i] = p;
      for (j = 0; j < n; j++) {
        p = V.get(j, i);
        V.set(j, i, V.get(j, k));
        V.set(j, k, p);
      }
    }
  }
}

function orthes(n, H, ort, V) {
  let low = 0;
  let high = n - 1;
  let f, g, h, i, j, m;
  let scale;

  for (m = low + 1; m <= high - 1; m++) {
    scale = 0;
    for (i = m; i <= high; i++) {
      scale = scale + Math.abs(H.get(i, m - 1));
    }

    if (scale !== 0) {
      h = 0;
      for (i = high; i >= m; i--) {
        ort[i] = H.get(i, m - 1) / scale;
        h += ort[i] * ort[i];
      }

      g = Math.sqrt(h);
      if (ort[m] > 0) {
        g = -g;
      }

      h = h - ort[m] * g;
      ort[m] = ort[m] - g;

      for (j = m; j < n; j++) {
        f = 0;
        for (i = high; i >= m; i--) {
          f += ort[i] * H.get(i, j);
        }

        f = f / h;
        for (i = m; i <= high; i++) {
          H.set(i, j, H.get(i, j) - f * ort[i]);
        }
      }

      for (i = 0; i <= high; i++) {
        f = 0;
        for (j = high; j >= m; j--) {
          f += ort[j] * H.get(i, j);
        }

        f = f / h;
        for (j = m; j <= high; j++) {
          H.set(i, j, H.get(i, j) - f * ort[j]);
        }
      }

      ort[m] = scale * ort[m];
      H.set(m, m - 1, scale * g);
    }
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      V.set(i, j, i === j ? 1 : 0);
    }
  }

  for (m = high - 1; m >= low + 1; m--) {
    if (H.get(m, m - 1) !== 0) {
      for (i = m + 1; i <= high; i++) {
        ort[i] = H.get(i, m - 1);
      }

      for (j = m; j <= high; j++) {
        g = 0;
        for (i = m; i <= high; i++) {
          g += ort[i] * V.get(i, j);
        }

        g = g / ort[m] / H.get(m, m - 1);
        for (i = m; i <= high; i++) {
          V.set(i, j, V.get(i, j) + g * ort[i]);
        }
      }
    }
  }
}

function hqr2(nn, e, d, V, H) {
  let n = nn - 1;
  let low = 0;
  let high = nn - 1;
  let eps = Number.EPSILON;
  let exshift = 0;
  let norm = 0;
  let p = 0;
  let q = 0;
  let r = 0;
  let s = 0;
  let z = 0;
  let iter = 0;
  let i, j, k, l, m, t, w, x, y;
  let ra, sa, vr, vi;
  let notlast, cdivres;

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      d[i] = H.get(i, i);
      e[i] = 0;
    }

    for (j = Math.max(i - 1, 0); j < nn; j++) {
      norm = norm + Math.abs(H.get(i, j));
    }
  }

  while (n >= low) {
    l = n;
    while (l > low) {
      s = Math.abs(H.get(l - 1, l - 1)) + Math.abs(H.get(l, l));
      if (s === 0) {
        s = norm;
      }
      if (Math.abs(H.get(l, l - 1)) < eps * s) {
        break;
      }
      l--;
    }

    if (l === n) {
      H.set(n, n, H.get(n, n) + exshift);
      d[n] = H.get(n, n);
      e[n] = 0;
      n--;
      iter = 0;
    } else if (l === n - 1) {
      w = H.get(n, n - 1) * H.get(n - 1, n);
      p = (H.get(n - 1, n - 1) - H.get(n, n)) / 2;
      q = p * p + w;
      z = Math.sqrt(Math.abs(q));
      H.set(n, n, H.get(n, n) + exshift);
      H.set(n - 1, n - 1, H.get(n - 1, n - 1) + exshift);
      x = H.get(n, n);

      if (q >= 0) {
        z = p >= 0 ? p + z : p - z;
        d[n - 1] = x + z;
        d[n] = d[n - 1];
        if (z !== 0) {
          d[n] = x - w / z;
        }
        e[n - 1] = 0;
        e[n] = 0;
        x = H.get(n, n - 1);
        s = Math.abs(x) + Math.abs(z);
        p = x / s;
        q = z / s;
        r = Math.sqrt(p * p + q * q);
        p = p / r;
        q = q / r;

        for (j = n - 1; j < nn; j++) {
          z = H.get(n - 1, j);
          H.set(n - 1, j, q * z + p * H.get(n, j));
          H.set(n, j, q * H.get(n, j) - p * z);
        }

        for (i = 0; i <= n; i++) {
          z = H.get(i, n - 1);
          H.set(i, n - 1, q * z + p * H.get(i, n));
          H.set(i, n, q * H.get(i, n) - p * z);
        }

        for (i = low; i <= high; i++) {
          z = V.get(i, n - 1);
          V.set(i, n - 1, q * z + p * V.get(i, n));
          V.set(i, n, q * V.get(i, n) - p * z);
        }
      } else {
        d[n - 1] = x + p;
        d[n] = x + p;
        e[n - 1] = z;
        e[n] = -z;
      }

      n = n - 2;
      iter = 0;
    } else {
      x = H.get(n, n);
      y = 0;
      w = 0;
      if (l < n) {
        y = H.get(n - 1, n - 1);
        w = H.get(n, n - 1) * H.get(n - 1, n);
      }

      if (iter === 10) {
        exshift += x;
        for (i = low; i <= n; i++) {
          H.set(i, i, H.get(i, i) - x);
        }
        s = Math.abs(H.get(n, n - 1)) + Math.abs(H.get(n - 1, n - 2));
        x = y = 0.75 * s;
        w = -0.4375 * s * s;
      }

      if (iter === 30) {
        s = (y - x) / 2;
        s = s * s + w;
        if (s > 0) {
          s = Math.sqrt(s);
          if (y < x) {
            s = -s;
          }
          s = x - w / ((y - x) / 2 + s);
          for (i = low; i <= n; i++) {
            H.set(i, i, H.get(i, i) - s);
          }
          exshift += s;
          x = y = w = 0.964;
        }
      }

      iter = iter + 1;

      m = n - 2;
      while (m >= l) {
        z = H.get(m, m);
        r = x - z;
        s = y - z;
        p = (r * s - w) / H.get(m + 1, m) + H.get(m, m + 1);
        q = H.get(m + 1, m + 1) - z - r - s;
        r = H.get(m + 2, m + 1);
        s = Math.abs(p) + Math.abs(q) + Math.abs(r);
        p = p / s;
        q = q / s;
        r = r / s;
        if (m === l) {
          break;
        }
        if (
          Math.abs(H.get(m, m - 1)) * (Math.abs(q) + Math.abs(r)) <
          eps *
            (Math.abs(p) *
              (Math.abs(H.get(m - 1, m - 1)) +
                Math.abs(z) +
                Math.abs(H.get(m + 1, m + 1))))
        ) {
          break;
        }
        m--;
      }

      for (i = m + 2; i <= n; i++) {
        H.set(i, i - 2, 0);
        if (i > m + 2) {
          H.set(i, i - 3, 0);
        }
      }

      for (k = m; k <= n - 1; k++) {
        notlast = k !== n - 1;
        if (k !== m) {
          p = H.get(k, k - 1);
          q = H.get(k + 1, k - 1);
          r = notlast ? H.get(k + 2, k - 1) : 0;
          x = Math.abs(p) + Math.abs(q) + Math.abs(r);
          if (x !== 0) {
            p = p / x;
            q = q / x;
            r = r / x;
          }
        }

        if (x === 0) {
          break;
        }

        s = Math.sqrt(p * p + q * q + r * r);
        if (p < 0) {
          s = -s;
        }

        if (s !== 0) {
          if (k !== m) {
            H.set(k, k - 1, -s * x);
          } else if (l !== m) {
            H.set(k, k - 1, -H.get(k, k - 1));
          }

          p = p + s;
          x = p / s;
          y = q / s;
          z = r / s;
          q = q / p;
          r = r / p;

          for (j = k; j < nn; j++) {
            p = H.get(k, j) + q * H.get(k + 1, j);
            if (notlast) {
              p = p + r * H.get(k + 2, j);
              H.set(k + 2, j, H.get(k + 2, j) - p * z);
            }

            H.set(k, j, H.get(k, j) - p * x);
            H.set(k + 1, j, H.get(k + 1, j) - p * y);
          }

          for (i = 0; i <= Math.min(n, k + 3); i++) {
            p = x * H.get(i, k) + y * H.get(i, k + 1);
            if (notlast) {
              p = p + z * H.get(i, k + 2);
              H.set(i, k + 2, H.get(i, k + 2) - p * r);
            }

            H.set(i, k, H.get(i, k) - p);
            H.set(i, k + 1, H.get(i, k + 1) - p * q);
          }

          for (i = low; i <= high; i++) {
            p = x * V.get(i, k) + y * V.get(i, k + 1);
            if (notlast) {
              p = p + z * V.get(i, k + 2);
              V.set(i, k + 2, V.get(i, k + 2) - p * r);
            }

            V.set(i, k, V.get(i, k) - p);
            V.set(i, k + 1, V.get(i, k + 1) - p * q);
          }
        }
      }
    }
  }

  if (norm === 0) {
    return;
  }

  for (n = nn - 1; n >= 0; n--) {
    p = d[n];
    q = e[n];

    if (q === 0) {
      l = n;
      H.set(n, n, 1);
      for (i = n - 1; i >= 0; i--) {
        w = H.get(i, i) - p;
        r = 0;
        for (j = l; j <= n; j++) {
          r = r + H.get(i, j) * H.get(j, n);
        }

        if (e[i] < 0) {
          z = w;
          s = r;
        } else {
          l = i;
          if (e[i] === 0) {
            H.set(i, n, w !== 0 ? -r / w : -r / (eps * norm));
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
            t = (x * s - z * r) / q;
            H.set(i, n, t);
            H.set(
              i + 1,
              n,
              Math.abs(x) > Math.abs(z) ? (-r - w * t) / x : (-s - y * t) / z,
            );
          }

          t = Math.abs(H.get(i, n));
          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    } else if (q < 0) {
      l = n - 1;

      if (Math.abs(H.get(n, n - 1)) > Math.abs(H.get(n - 1, n))) {
        H.set(n - 1, n - 1, q / H.get(n, n - 1));
        H.set(n - 1, n, -(H.get(n, n) - p) / H.get(n, n - 1));
      } else {
        cdivres = cdiv(0, -H.get(n - 1, n), H.get(n - 1, n - 1) - p, q);
        H.set(n - 1, n - 1, cdivres[0]);
        H.set(n - 1, n, cdivres[1]);
      }

      H.set(n, n - 1, 0);
      H.set(n, n, 1);
      for (i = n - 2; i >= 0; i--) {
        ra = 0;
        sa = 0;
        for (j = l; j <= n; j++) {
          ra = ra + H.get(i, j) * H.get(j, n - 1);
          sa = sa + H.get(i, j) * H.get(j, n);
        }

        w = H.get(i, i) - p;

        if (e[i] < 0) {
          z = w;
          r = ra;
          s = sa;
        } else {
          l = i;
          if (e[i] === 0) {
            cdivres = cdiv(-ra, -sa, w, q);
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
            vi = (d[i] - p) * 2 * q;
            if (vr === 0 && vi === 0) {
              vr =
                eps *
                norm *
                (Math.abs(w) +
                  Math.abs(q) +
                  Math.abs(x) +
                  Math.abs(y) +
                  Math.abs(z));
            }
            cdivres = cdiv(
              x * r - z * ra + q * sa,
              x * s - z * sa - q * ra,
              vr,
              vi,
            );
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
            if (Math.abs(x) > Math.abs(z) + Math.abs(q)) {
              H.set(
                i + 1,
                n - 1,
                (-ra - w * H.get(i, n - 1) + q * H.get(i, n)) / x,
              );
              H.set(
                i + 1,
                n,
                (-sa - w * H.get(i, n) - q * H.get(i, n - 1)) / x,
              );
            } else {
              cdivres = cdiv(
                -r - y * H.get(i, n - 1),
                -s - y * H.get(i, n),
                z,
                q,
              );
              H.set(i + 1, n - 1, cdivres[0]);
              H.set(i + 1, n, cdivres[1]);
            }
          }

          t = Math.max(Math.abs(H.get(i, n - 1)), Math.abs(H.get(i, n)));
          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n - 1, H.get(j, n - 1) / t);
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    }
  }

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      for (j = i; j < nn; j++) {
        V.set(i, j, H.get(i, j));
      }
    }
  }

  for (j = nn - 1; j >= low; j--) {
    for (i = low; i <= high; i++) {
      z = 0;
      for (k = low; k <= Math.min(j, high); k++) {
        z = z + V.get(i, k) * H.get(k, j);
      }
      V.set(i, j, z);
    }
  }
}

function cdiv(xr, xi, yr, yi) {
  let r, d;
  if (Math.abs(yr) > Math.abs(yi)) {
    r = yi / yr;
    d = yr + r * yi;
    return [(xr + r * xi) / d, (xi - r * xr) / d];
  } else {
    r = yr / yi;
    d = yi + r * yr;
    return [(r * xr + xi) / d, (r * xi - xr) / d];
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/lu.js":
/*!*********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/lu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LuDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class LuDecomposition {
  constructor(matrix) {
    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);

    let lu = matrix.clone();
    let rows = lu.rows;
    let columns = lu.columns;
    let pivotVector = new Float64Array(rows);
    let pivotSign = 1;
    let i, j, k, p, s, t, v;
    let LUcolj, kmax;

    for (i = 0; i < rows; i++) {
      pivotVector[i] = i;
    }

    LUcolj = new Float64Array(rows);

    for (j = 0; j < columns; j++) {
      for (i = 0; i < rows; i++) {
        LUcolj[i] = lu.get(i, j);
      }

      for (i = 0; i < rows; i++) {
        kmax = Math.min(i, j);
        s = 0;
        for (k = 0; k < kmax; k++) {
          s += lu.get(i, k) * LUcolj[k];
        }
        LUcolj[i] -= s;
        lu.set(i, j, LUcolj[i]);
      }

      p = j;
      for (i = j + 1; i < rows; i++) {
        if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
          p = i;
        }
      }

      if (p !== j) {
        for (k = 0; k < columns; k++) {
          t = lu.get(p, k);
          lu.set(p, k, lu.get(j, k));
          lu.set(j, k, t);
        }

        v = pivotVector[p];
        pivotVector[p] = pivotVector[j];
        pivotVector[j] = v;

        pivotSign = -pivotSign;
      }

      if (j < rows && lu.get(j, j) !== 0) {
        for (i = j + 1; i < rows; i++) {
          lu.set(i, j, lu.get(i, j) / lu.get(j, j));
        }
      }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
  }

  isSingular() {
    let data = this.LU;
    let col = data.columns;
    for (let j = 0; j < col; j++) {
      if (data.get(j, j) === 0) {
        return true;
      }
    }
    return false;
  }

  solve(value) {
    value = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].checkMatrix(value);

    let lu = this.LU;
    let rows = lu.rows;

    if (rows !== value.rows) {
      throw new Error('Invalid matrix dimensions');
    }
    if (this.isSingular()) {
      throw new Error('LU matrix is singular');
    }

    let count = value.columns;
    let X = value.subMatrixRow(this.pivotVector, 0, count - 1);
    let columns = lu.columns;
    let i, j, k;

    for (k = 0; k < columns; k++) {
      for (i = k + 1; i < columns; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
        }
      }
    }
    for (k = columns - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        X.set(k, j, X.get(k, j) / lu.get(k, k));
      }
      for (i = 0; i < k; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
        }
      }
    }
    return X;
  }

  get determinant() {
    let data = this.LU;
    if (!data.isSquare()) {
      throw new Error('Matrix must be square');
    }
    let determinant = this.pivotSign;
    let col = data.columns;
    for (let j = 0; j < col; j++) {
      determinant *= data.get(j, j);
    }
    return determinant;
  }

  get lowerTriangularMatrix() {
    let data = this.LU;
    let rows = data.rows;
    let columns = data.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i > j) {
          X.set(i, j, data.get(i, j));
        } else if (i === j) {
          X.set(i, j, 1);
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get upperTriangularMatrix() {
    let data = this.LU;
    let rows = data.rows;
    let columns = data.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i <= j) {
          X.set(i, j, data.get(i, j));
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get pivotPermutationVector() {
    return Array.from(this.pivotVector);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/nipals.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/nipals.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nipals; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class nipals {
  constructor(X, options = {}) {
    X = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(X);
    let { Y } = options;
    const {
      scaleScores = false,
      maxIterations = 1000,
      terminationCriteria = 1e-10,
    } = options;

    let u;
    if (Y) {
      if (Array.isArray(Y) && typeof Y[0] === 'number') {
        Y = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].columnVector(Y);
      } else {
        Y = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(Y);
      }
      if (!Y.isColumnVector() || Y.rows !== X.rows) {
        throw new Error('Y must be a column vector of length X.rows');
      }
      u = Y;
    } else {
      u = X.getColumnVector(0);
    }

    let diff = 1;
    let t, q, w, tOld;

    for (
      let counter = 0;
      counter < maxIterations && diff > terminationCriteria;
      counter++
    ) {
      w = X.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0));
      w = w.div(w.norm());

      t = X.mmul(w).div(w.transpose().mmul(w).get(0, 0));

      if (counter > 0) {
        diff = t.clone().sub(tOld).pow(2).sum();
      }
      tOld = t.clone();

      if (Y) {
        q = Y.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
        q = q.div(q.norm());

        u = Y.mmul(q).div(q.transpose().mmul(q).get(0, 0));
      } else {
        u = t;
      }
    }

    if (Y) {
      let p = X.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      p = p.div(p.norm());
      let xResidual = X.clone().sub(t.clone().mmul(p.transpose()));
      let residual = u.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      let yResidual = Y.clone().sub(
        t.clone().mulS(residual.get(0, 0)).mmul(q.transpose()),
      );

      this.t = t;
      this.p = p.transpose();
      this.w = w.transpose();
      this.q = q;
      this.u = u;
      this.s = t.transpose().mmul(t);
      this.xResidual = xResidual;
      this.yResidual = yResidual;
      this.betas = residual;
    } else {
      this.w = w.transpose();
      this.s = t.transpose().mmul(t).sqrt();
      if (scaleScores) {
        this.t = t.clone().div(this.s.get(0, 0));
      } else {
        this.t = t;
      }
      this.xResidual = X.sub(t.mmul(w.transpose()));
    }
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/qr.js":
/*!*********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/qr.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QrDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/dc/util.js");





class QrDecomposition {
  constructor(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let qr = value.clone();
    let m = value.rows;
    let n = value.columns;
    let rdiag = new Float64Array(n);
    let i, j, k, s;

    for (k = 0; k < n; k++) {
      let nrm = 0;
      for (i = k; i < m; i++) {
        nrm = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(nrm, qr.get(i, k));
      }
      if (nrm !== 0) {
        if (qr.get(k, k) < 0) {
          nrm = -nrm;
        }
        for (i = k; i < m; i++) {
          qr.set(i, k, qr.get(i, k) / nrm);
        }
        qr.set(k, k, qr.get(k, k) + 1);
        for (j = k + 1; j < n; j++) {
          s = 0;
          for (i = k; i < m; i++) {
            s += qr.get(i, k) * qr.get(i, j);
          }
          s = -s / qr.get(k, k);
          for (i = k; i < m; i++) {
            qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
          }
        }
      }
      rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
  }

  solve(value) {
    value = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].checkMatrix(value);

    let qr = this.QR;
    let m = qr.rows;

    if (value.rows !== m) {
      throw new Error('Matrix row dimensions must agree');
    }
    if (!this.isFullRank()) {
      throw new Error('Matrix is rank deficient');
    }

    let count = value.columns;
    let X = value.clone();
    let n = qr.columns;
    let i, j, k, s;

    for (k = 0; k < n; k++) {
      for (j = 0; j < count; j++) {
        s = 0;
        for (i = k; i < m; i++) {
          s += qr.get(i, k) * X.get(i, j);
        }
        s = -s / qr.get(k, k);
        for (i = k; i < m; i++) {
          X.set(i, j, X.get(i, j) + s * qr.get(i, k));
        }
      }
    }
    for (k = n - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        X.set(k, j, X.get(k, j) / this.Rdiag[k]);
      }
      for (i = 0; i < k; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * qr.get(i, k));
        }
      }
    }

    return X.subMatrix(0, n - 1, 0, count - 1);
  }

  isFullRank() {
    let columns = this.QR.columns;
    for (let i = 0; i < columns; i++) {
      if (this.Rdiag[i] === 0) {
        return false;
      }
    }
    return true;
  }

  get upperTriangularMatrix() {
    let qr = this.QR;
    let n = qr.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let i, j;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (i < j) {
          X.set(i, j, qr.get(i, j));
        } else if (i === j) {
          X.set(i, j, this.Rdiag[i]);
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get orthogonalMatrix() {
    let qr = this.QR;
    let rows = qr.rows;
    let columns = qr.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    let i, j, k, s;

    for (k = columns - 1; k >= 0; k--) {
      for (i = 0; i < rows; i++) {
        X.set(i, k, 0);
      }
      X.set(k, k, 1);
      for (j = k; j < columns; j++) {
        if (qr.get(k, k) !== 0) {
          s = 0;
          for (i = k; i < rows; i++) {
            s += qr.get(i, k) * X.get(i, j);
          }

          s = -s / qr.get(k, k);

          for (i = k; i < rows; i++) {
            X.set(i, j, X.get(i, j) + s * qr.get(i, k));
          }
        }
      }
    }
    return X;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/svd.js":
/*!**********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/svd.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingularValueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/dc/util.js");





class SingularValueDecomposition {
  constructor(value, options = {}) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let m = value.rows;
    let n = value.columns;

    const {
      computeLeftSingularVectors = true,
      computeRightSingularVectors = true,
      autoTranspose = false,
    } = options;

    let wantu = Boolean(computeLeftSingularVectors);
    let wantv = Boolean(computeRightSingularVectors);

    let swapped = false;
    let a;
    if (m < n) {
      if (!autoTranspose) {
        a = value.clone();
        // eslint-disable-next-line no-console
        console.warn(
          'Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose',
        );
      } else {
        a = value.transpose();
        m = a.rows;
        n = a.columns;
        swapped = true;
        let aux = wantu;
        wantu = wantv;
        wantv = aux;
      }
    } else {
      a = value.clone();
    }

    let nu = Math.min(m, n);
    let ni = Math.min(m + 1, n);
    let s = new Float64Array(ni);
    let U = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](m, nu);
    let V = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);

    let e = new Float64Array(n);
    let work = new Float64Array(m);

    let si = new Float64Array(ni);
    for (let i = 0; i < ni; i++) si[i] = i;

    let nct = Math.min(m - 1, n);
    let nrt = Math.max(0, Math.min(n - 2, m));
    let mrc = Math.max(nct, nrt);

    for (let k = 0; k < mrc; k++) {
      if (k < nct) {
        s[k] = 0;
        for (let i = k; i < m; i++) {
          s[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[k], a.get(i, k));
        }
        if (s[k] !== 0) {
          if (a.get(k, k) < 0) {
            s[k] = -s[k];
          }
          for (let i = k; i < m; i++) {
            a.set(i, k, a.get(i, k) / s[k]);
          }
          a.set(k, k, a.get(k, k) + 1);
        }
        s[k] = -s[k];
      }

      for (let j = k + 1; j < n; j++) {
        if (k < nct && s[k] !== 0) {
          let t = 0;
          for (let i = k; i < m; i++) {
            t += a.get(i, k) * a.get(i, j);
          }
          t = -t / a.get(k, k);
          for (let i = k; i < m; i++) {
            a.set(i, j, a.get(i, j) + t * a.get(i, k));
          }
        }
        e[j] = a.get(k, j);
      }

      if (wantu && k < nct) {
        for (let i = k; i < m; i++) {
          U.set(i, k, a.get(i, k));
        }
      }

      if (k < nrt) {
        e[k] = 0;
        for (let i = k + 1; i < n; i++) {
          e[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(e[k], e[i]);
        }
        if (e[k] !== 0) {
          if (e[k + 1] < 0) {
            e[k] = 0 - e[k];
          }
          for (let i = k + 1; i < n; i++) {
            e[i] /= e[k];
          }
          e[k + 1] += 1;
        }
        e[k] = -e[k];
        if (k + 1 < m && e[k] !== 0) {
          for (let i = k + 1; i < m; i++) {
            work[i] = 0;
          }
          for (let i = k + 1; i < m; i++) {
            for (let j = k + 1; j < n; j++) {
              work[i] += e[j] * a.get(i, j);
            }
          }
          for (let j = k + 1; j < n; j++) {
            let t = -e[j] / e[k + 1];
            for (let i = k + 1; i < m; i++) {
              a.set(i, j, a.get(i, j) + t * work[i]);
            }
          }
        }
        if (wantv) {
          for (let i = k + 1; i < n; i++) {
            V.set(i, k, e[i]);
          }
        }
      }
    }

    let p = Math.min(n, m + 1);
    if (nct < n) {
      s[nct] = a.get(nct, nct);
    }
    if (m < p) {
      s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
      e[nrt] = a.get(nrt, p - 1);
    }
    e[p - 1] = 0;

    if (wantu) {
      for (let j = nct; j < nu; j++) {
        for (let i = 0; i < m; i++) {
          U.set(i, j, 0);
        }
        U.set(j, j, 1);
      }
      for (let k = nct - 1; k >= 0; k--) {
        if (s[k] !== 0) {
          for (let j = k + 1; j < nu; j++) {
            let t = 0;
            for (let i = k; i < m; i++) {
              t += U.get(i, k) * U.get(i, j);
            }
            t = -t / U.get(k, k);
            for (let i = k; i < m; i++) {
              U.set(i, j, U.get(i, j) + t * U.get(i, k));
            }
          }
          for (let i = k; i < m; i++) {
            U.set(i, k, -U.get(i, k));
          }
          U.set(k, k, 1 + U.get(k, k));
          for (let i = 0; i < k - 1; i++) {
            U.set(i, k, 0);
          }
        } else {
          for (let i = 0; i < m; i++) {
            U.set(i, k, 0);
          }
          U.set(k, k, 1);
        }
      }
    }

    if (wantv) {
      for (let k = n - 1; k >= 0; k--) {
        if (k < nrt && e[k] !== 0) {
          for (let j = k + 1; j < n; j++) {
            let t = 0;
            for (let i = k + 1; i < n; i++) {
              t += V.get(i, k) * V.get(i, j);
            }
            t = -t / V.get(k + 1, k);
            for (let i = k + 1; i < n; i++) {
              V.set(i, j, V.get(i, j) + t * V.get(i, k));
            }
          }
        }
        for (let i = 0; i < n; i++) {
          V.set(i, k, 0);
        }
        V.set(k, k, 1);
      }
    }

    let pp = p - 1;
    let iter = 0;
    let eps = Number.EPSILON;
    while (p > 0) {
      let k, kase;
      for (k = p - 2; k >= -1; k--) {
        if (k === -1) {
          break;
        }
        const alpha =
          Number.MIN_VALUE + eps * Math.abs(s[k] + Math.abs(s[k + 1]));
        if (Math.abs(e[k]) <= alpha || Number.isNaN(e[k])) {
          e[k] = 0;
          break;
        }
      }
      if (k === p - 2) {
        kase = 4;
      } else {
        let ks;
        for (ks = p - 1; ks >= k; ks--) {
          if (ks === k) {
            break;
          }
          let t =
            (ks !== p ? Math.abs(e[ks]) : 0) +
            (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
          if (Math.abs(s[ks]) <= eps * t) {
            s[ks] = 0;
            break;
          }
        }
        if (ks === k) {
          kase = 3;
        } else if (ks === p - 1) {
          kase = 1;
        } else {
          kase = 2;
          k = ks;
        }
      }

      k++;

      switch (kase) {
        case 1: {
          let f = e[p - 2];
          e[p - 2] = 0;
          for (let j = p - 2; j >= k; j--) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[j], f);
            let cs = s[j] / t;
            let sn = f / t;
            s[j] = t;
            if (j !== k) {
              f = -sn * e[j - 1];
              e[j - 1] = cs * e[j - 1];
            }
            if (wantv) {
              for (let i = 0; i < n; i++) {
                t = cs * V.get(i, j) + sn * V.get(i, p - 1);
                V.set(i, p - 1, -sn * V.get(i, j) + cs * V.get(i, p - 1));
                V.set(i, j, t);
              }
            }
          }
          break;
        }
        case 2: {
          let f = e[k - 1];
          e[k - 1] = 0;
          for (let j = k; j < p; j++) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[j], f);
            let cs = s[j] / t;
            let sn = f / t;
            s[j] = t;
            f = -sn * e[j];
            e[j] = cs * e[j];
            if (wantu) {
              for (let i = 0; i < m; i++) {
                t = cs * U.get(i, j) + sn * U.get(i, k - 1);
                U.set(i, k - 1, -sn * U.get(i, j) + cs * U.get(i, k - 1));
                U.set(i, j, t);
              }
            }
          }
          break;
        }
        case 3: {
          const scale = Math.max(
            Math.abs(s[p - 1]),
            Math.abs(s[p - 2]),
            Math.abs(e[p - 2]),
            Math.abs(s[k]),
            Math.abs(e[k]),
          );
          const sp = s[p - 1] / scale;
          const spm1 = s[p - 2] / scale;
          const epm1 = e[p - 2] / scale;
          const sk = s[k] / scale;
          const ek = e[k] / scale;
          const b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
          const c = sp * epm1 * (sp * epm1);
          let shift = 0;
          if (b !== 0 || c !== 0) {
            if (b < 0) {
              shift = 0 - Math.sqrt(b * b + c);
            } else {
              shift = Math.sqrt(b * b + c);
            }
            shift = c / (b + shift);
          }
          let f = (sk + sp) * (sk - sp) + shift;
          let g = sk * ek;
          for (let j = k; j < p - 1; j++) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(f, g);
            if (t === 0) t = Number.MIN_VALUE;
            let cs = f / t;
            let sn = g / t;
            if (j !== k) {
              e[j - 1] = t;
            }
            f = cs * s[j] + sn * e[j];
            e[j] = cs * e[j] - sn * s[j];
            g = sn * s[j + 1];
            s[j + 1] = cs * s[j + 1];
            if (wantv) {
              for (let i = 0; i < n; i++) {
                t = cs * V.get(i, j) + sn * V.get(i, j + 1);
                V.set(i, j + 1, -sn * V.get(i, j) + cs * V.get(i, j + 1));
                V.set(i, j, t);
              }
            }
            t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(f, g);
            if (t === 0) t = Number.MIN_VALUE;
            cs = f / t;
            sn = g / t;
            s[j] = t;
            f = cs * e[j] + sn * s[j + 1];
            s[j + 1] = -sn * e[j] + cs * s[j + 1];
            g = sn * e[j + 1];
            e[j + 1] = cs * e[j + 1];
            if (wantu && j < m - 1) {
              for (let i = 0; i < m; i++) {
                t = cs * U.get(i, j) + sn * U.get(i, j + 1);
                U.set(i, j + 1, -sn * U.get(i, j) + cs * U.get(i, j + 1));
                U.set(i, j, t);
              }
            }
          }
          e[p - 2] = f;
          iter = iter + 1;
          break;
        }
        case 4: {
          if (s[k] <= 0) {
            s[k] = s[k] < 0 ? -s[k] : 0;
            if (wantv) {
              for (let i = 0; i <= pp; i++) {
                V.set(i, k, -V.get(i, k));
              }
            }
          }
          while (k < pp) {
            if (s[k] >= s[k + 1]) {
              break;
            }
            let t = s[k];
            s[k] = s[k + 1];
            s[k + 1] = t;
            if (wantv && k < n - 1) {
              for (let i = 0; i < n; i++) {
                t = V.get(i, k + 1);
                V.set(i, k + 1, V.get(i, k));
                V.set(i, k, t);
              }
            }
            if (wantu && k < m - 1) {
              for (let i = 0; i < m; i++) {
                t = U.get(i, k + 1);
                U.set(i, k + 1, U.get(i, k));
                U.set(i, k, t);
              }
            }
            k++;
          }
          iter = 0;
          p--;
          break;
        }
        // no default
      }
    }

    if (swapped) {
      let tmp = V;
      V = U;
      U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
  }

  solve(value) {
    let Y = value;
    let e = this.threshold;
    let scols = this.s.length;
    let Ls = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].zeros(scols, scols);

    for (let i = 0; i < scols; i++) {
      if (Math.abs(this.s[i]) <= e) {
        Ls.set(i, i, 0);
      } else {
        Ls.set(i, i, 1 / this.s[i]);
      }
    }

    let U = this.U;
    let V = this.rightSingularVectors;

    let VL = V.mmul(Ls);
    let vrows = V.rows;
    let urows = U.rows;
    let VLU = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].zeros(vrows, urows);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < urows; j++) {
        let sum = 0;
        for (let k = 0; k < scols; k++) {
          sum += VL.get(i, k) * U.get(j, k);
        }
        VLU.set(i, j, sum);
      }
    }

    return VLU.mmul(Y);
  }

  solveForDiagonal(value) {
    return this.solve(_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].diag(value));
  }

  inverse() {
    let V = this.V;
    let e = this.threshold;
    let vrows = V.rows;
    let vcols = V.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](vrows, this.s.length);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < vcols; j++) {
        if (Math.abs(this.s[j]) > e) {
          X.set(i, j, V.get(i, j) / this.s[j]);
        }
      }
    }

    let U = this.U;

    let urows = U.rows;
    let ucols = U.columns;
    let Y = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](vrows, urows);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < urows; j++) {
        let sum = 0;
        for (let k = 0; k < ucols; k++) {
          sum += X.get(i, k) * U.get(j, k);
        }
        Y.set(i, j, sum);
      }
    }

    return Y;
  }

  get condition() {
    return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
  }

  get norm2() {
    return this.s[0];
  }

  get rank() {
    let tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
    let r = 0;
    let s = this.s;
    for (let i = 0, ii = s.length; i < ii; i++) {
      if (s[i] > tol) {
        r++;
      }
    }
    return r;
  }

  get diagonal() {
    return Array.from(this.s);
  }

  get threshold() {
    return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
  }

  get leftSingularVectors() {
    return this.U;
  }

  get rightSingularVectors() {
    return this.V;
  }

  get diagonalMatrix() {
    return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].diag(this.s);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/dc/util.js":
/*!***********************************************!*\
  !*** ./node_modules/ml-matrix/src/dc/util.js ***!
  \***********************************************/
/*! exports provided: hypotenuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hypotenuse", function() { return hypotenuse; });
function hypotenuse(a, b) {
  let r = 0;
  if (Math.abs(a) > Math.abs(b)) {
    r = b / a;
    return Math.abs(a) * Math.sqrt(1 + r * r);
  }
  if (b !== 0) {
    r = a / b;
    return Math.abs(b) * Math.sqrt(1 + r * r);
  }
  return 0;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/decompositions.js":
/*!******************************************************!*\
  !*** ./node_modules/ml-matrix/src/decompositions.js ***!
  \******************************************************/
/*! exports provided: inverse, solve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return solve; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/lu */ "./node_modules/ml-matrix/src/dc/lu.js");
/* harmony import */ var _dc_qr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dc/qr */ "./node_modules/ml-matrix/src/dc/qr.js");
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dc/svd */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");






function inverse(matrix, useSVD = false) {
  matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(matrix);
  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__["default"](matrix).inverse();
  } else {
    return solve(matrix, _matrix__WEBPACK_IMPORTED_MODULE_3__["default"].eye(matrix.rows));
  }
}

function solve(leftHandSide, rightHandSide, useSVD = false) {
  leftHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(leftHandSide);
  rightHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(rightHandSide);
  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__["default"](leftHandSide).solve(rightHandSide);
  } else {
    return leftHandSide.isSquare()
      ? new _dc_lu__WEBPACK_IMPORTED_MODULE_0__["default"](leftHandSide).solve(rightHandSide)
      : new _dc_qr__WEBPACK_IMPORTED_MODULE_1__["default"](leftHandSide).solve(rightHandSide);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/determinant.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/determinant.js ***!
  \***************************************************/
/*! exports provided: determinant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/lu */ "./node_modules/ml-matrix/src/dc/lu.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _views_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/selection */ "./node_modules/ml-matrix/src/views/selection.js");




function determinant(matrix) {
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
  if (matrix.isSquare()) {
    let a, b, c, d;
    if (matrix.columns === 2) {
      // 2 x 2 matrix
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(1, 0);
      d = matrix.get(1, 1);

      return a * d - b * c;
    } else if (matrix.columns === 3) {
      // 3 x 3 matrix
      let subMatrix0, subMatrix1, subMatrix2;
      subMatrix0 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [1, 2]);
      subMatrix1 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [0, 2]);
      subMatrix2 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [0, 1]);
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(0, 2);

      return (
        a * determinant(subMatrix0) -
        b * determinant(subMatrix1) +
        c * determinant(subMatrix2)
      );
    } else {
      // general purpose determinant using the LU decomposition
      return new _dc_lu__WEBPACK_IMPORTED_MODULE_0__["default"](matrix).determinant;
    }
  } else {
    throw Error('determinant can only be calculated for a square matrix');
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ml-matrix/src/index.js ***!
  \*********************************************/
/*! exports provided: AbstractMatrix, default, Matrix, MatrixColumnView, MatrixColumnSelectionView, MatrixFlipColumnView, MatrixFlipRowView, MatrixRowView, MatrixRowSelectionView, MatrixSelectionView, MatrixSubView, MatrixTransposeView, wrap, WrapperMatrix1D, WrapperMatrix2D, solve, inverse, determinant, linearDependencies, pseudoInverse, covariance, correlation, SingularValueDecomposition, SVD, EigenvalueDecomposition, EVD, CholeskyDecomposition, CHO, LuDecomposition, LU, QrDecomposition, QR, Nipals, NIPALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/index */ "./node_modules/ml-matrix/src/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixColumnView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixColumnSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixFlipColumnView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixFlipRowView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixRowView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixRowSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixSubView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixTransposeView"]; });

/* harmony import */ var _wrap_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap/wrap */ "./node_modules/ml-matrix/src/wrap/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_wrap__WEBPACK_IMPORTED_MODULE_2__["wrap"]; });

/* harmony import */ var _wrap_WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrap/WrapperMatrix1D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix1D", function() { return _wrap_WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap/WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix2D", function() { return _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _decompositions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decompositions */ "./node_modules/ml-matrix/src/decompositions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return _decompositions__WEBPACK_IMPORTED_MODULE_5__["solve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return _decompositions__WEBPACK_IMPORTED_MODULE_5__["inverse"]; });

/* harmony import */ var _determinant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./determinant */ "./node_modules/ml-matrix/src/determinant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return _determinant__WEBPACK_IMPORTED_MODULE_6__["determinant"]; });

/* harmony import */ var _linearDependencies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linearDependencies */ "./node_modules/ml-matrix/src/linearDependencies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return _linearDependencies__WEBPACK_IMPORTED_MODULE_7__["linearDependencies"]; });

/* harmony import */ var _pseudoInverse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pseudoInverse */ "./node_modules/ml-matrix/src/pseudoInverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return _pseudoInverse__WEBPACK_IMPORTED_MODULE_8__["pseudoInverse"]; });

/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./covariance */ "./node_modules/ml-matrix/src/covariance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "covariance", function() { return _covariance__WEBPACK_IMPORTED_MODULE_9__["covariance"]; });

/* harmony import */ var _correlation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./correlation */ "./node_modules/ml-matrix/src/correlation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correlation", function() { return _correlation__WEBPACK_IMPORTED_MODULE_10__["correlation"]; });

/* harmony import */ var _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dc/svd.js */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVD", function() { return _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dc/evd.js */ "./node_modules/ml-matrix/src/dc/evd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVD", function() { return _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dc/cholesky.js */ "./node_modules/ml-matrix/src/dc/cholesky.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHO", function() { return _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dc/lu.js */ "./node_modules/ml-matrix/src/dc/lu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LU", function() { return _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dc/qr.js */ "./node_modules/ml-matrix/src/dc/qr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrDecomposition", function() { return _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QR", function() { return _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dc/nipals.js */ "./node_modules/ml-matrix/src/dc/nipals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nipals", function() { return _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIPALS", function() { return _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });























/***/ }),

/***/ "./node_modules/ml-matrix/src/inspect.js":
/*!***********************************************!*\
  !*** ./node_modules/ml-matrix/src/inspect.js ***!
  \***********************************************/
/*! exports provided: inspectMatrix, inspectMatrixWithOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectMatrix", function() { return inspectMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectMatrixWithOptions", function() { return inspectMatrixWithOptions; });
const indent = ' '.repeat(2);
const indentData = ' '.repeat(4);

function inspectMatrix() {
  return inspectMatrixWithOptions(this);
}

function inspectMatrixWithOptions(matrix, options = {}) {
  const { maxRows = 15, maxColumns = 10, maxNumSize = 8 } = options;
  return `${matrix.constructor.name} {
${indent}[
${indentData}${inspectData(matrix, maxRows, maxColumns, maxNumSize)}
${indent}]
${indent}rows: ${matrix.rows}
${indent}columns: ${matrix.columns}
}`;
}

function inspectData(matrix, maxRows, maxColumns, maxNumSize) {
  const { rows, columns } = matrix;
  const maxI = Math.min(rows, maxRows);
  const maxJ = Math.min(columns, maxColumns);
  const result = [];
  for (let i = 0; i < maxI; i++) {
    let line = [];
    for (let j = 0; j < maxJ; j++) {
      line.push(formatNumber(matrix.get(i, j), maxNumSize));
    }
    result.push(`${line.join(' ')}`);
  }
  if (maxJ !== columns) {
    result[result.length - 1] += ` ... ${columns - maxColumns} more columns`;
  }
  if (maxI !== rows) {
    result.push(`... ${rows - maxRows} more rows`);
  }
  return result.join(`\n${indentData}`);
}

function formatNumber(num, maxNumSize) {
  const numStr = String(num);
  if (numStr.length <= maxNumSize) {
    return numStr.padEnd(maxNumSize, ' ');
  }
  const precise = num.toPrecision(maxNumSize - 2);
  if (precise.length <= maxNumSize) {
    return precise;
  }
  const exponential = num.toExponential(maxNumSize - 2);
  const eIndex = exponential.indexOf('e');
  const e = exponential.slice(eIndex);
  return exponential.slice(0, maxNumSize - e.length) + e;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/linearDependencies.js":
/*!**********************************************************!*\
  !*** ./node_modules/ml-matrix/src/linearDependencies.js ***!
  \**********************************************************/
/*! exports provided: linearDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return linearDependencies; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/svd */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");



function xrange(n, exception) {
  let range = [];
  for (let i = 0; i < n; i++) {
    if (i !== exception) {
      range.push(i);
    }
  }
  return range;
}

function dependenciesOneRow(
  error,
  matrix,
  index,
  thresholdValue = 10e-10,
  thresholdError = 10e-10,
) {
  if (error > thresholdError) {
    return new Array(matrix.rows + 1).fill(0);
  } else {
    let returnArray = matrix.addRow(index, [0]);
    for (let i = 0; i < returnArray.rows; i++) {
      if (Math.abs(returnArray.get(i, 0)) < thresholdValue) {
        returnArray.set(i, 0, 0);
      }
    }
    return returnArray.to1DArray();
  }
}

function linearDependencies(matrix, options = {}) {
  const { thresholdValue = 10e-10, thresholdError = 10e-10 } = options;
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);

  let n = matrix.rows;
  let results = new _matrix__WEBPACK_IMPORTED_MODULE_1__["default"](n, n);

  for (let i = 0; i < n; i++) {
    let b = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].columnVector(matrix.getRow(i));
    let Abis = matrix.subMatrixRow(xrange(n, i)).transpose();
    let svd = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__["default"](Abis);
    let x = svd.solve(b);
    let error = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].sub(b, Abis.mmul(x)).abs().max();
    results.setRow(
      i,
      dependenciesOneRow(error, x, i, thresholdValue, thresholdError),
    );
  }
  return results;
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/mathOperations.js":
/*!******************************************************!*\
  !*** ./node_modules/ml-matrix/src/mathOperations.js ***!
  \******************************************************/
/*! exports provided: installMathOperations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installMathOperations", function() { return installMathOperations; });
function installMathOperations(AbstractMatrix, Matrix) {
  AbstractMatrix.prototype.add = function add(value) {
    if (typeof value === 'number') return this.addS(value);
    return this.addM(value);
  };

  AbstractMatrix.prototype.addS = function addS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.addM = function addM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.add = function add(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.add(value);
  };

  AbstractMatrix.prototype.sub = function sub(value) {
    if (typeof value === 'number') return this.subS(value);
    return this.subM(value);
  };

  AbstractMatrix.prototype.subS = function subS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.subM = function subM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.sub = function sub(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sub(value);
  };
  AbstractMatrix.prototype.subtract = AbstractMatrix.prototype.sub;
  AbstractMatrix.prototype.subtractS = AbstractMatrix.prototype.subS;
  AbstractMatrix.prototype.subtractM = AbstractMatrix.prototype.subM;
  AbstractMatrix.subtract = AbstractMatrix.sub;

  AbstractMatrix.prototype.mul = function mul(value) {
    if (typeof value === 'number') return this.mulS(value);
    return this.mulM(value);
  };

  AbstractMatrix.prototype.mulS = function mulS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.mulM = function mulM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.mul = function mul(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.mul(value);
  };
  AbstractMatrix.prototype.multiply = AbstractMatrix.prototype.mul;
  AbstractMatrix.prototype.multiplyS = AbstractMatrix.prototype.mulS;
  AbstractMatrix.prototype.multiplyM = AbstractMatrix.prototype.mulM;
  AbstractMatrix.multiply = AbstractMatrix.mul;

  AbstractMatrix.prototype.div = function div(value) {
    if (typeof value === 'number') return this.divS(value);
    return this.divM(value);
  };

  AbstractMatrix.prototype.divS = function divS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.divM = function divM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.div = function div(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.div(value);
  };
  AbstractMatrix.prototype.divide = AbstractMatrix.prototype.div;
  AbstractMatrix.prototype.divideS = AbstractMatrix.prototype.divS;
  AbstractMatrix.prototype.divideM = AbstractMatrix.prototype.divM;
  AbstractMatrix.divide = AbstractMatrix.div;

  AbstractMatrix.prototype.mod = function mod(value) {
    if (typeof value === 'number') return this.modS(value);
    return this.modM(value);
  };

  AbstractMatrix.prototype.modS = function modS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.modM = function modM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.mod = function mod(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.mod(value);
  };
  AbstractMatrix.prototype.modulus = AbstractMatrix.prototype.mod;
  AbstractMatrix.prototype.modulusS = AbstractMatrix.prototype.modS;
  AbstractMatrix.prototype.modulusM = AbstractMatrix.prototype.modM;
  AbstractMatrix.modulus = AbstractMatrix.mod;

  AbstractMatrix.prototype.and = function and(value) {
    if (typeof value === 'number') return this.andS(value);
    return this.andM(value);
  };

  AbstractMatrix.prototype.andS = function andS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.andM = function andM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.and = function and(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.and(value);
  };

  AbstractMatrix.prototype.or = function or(value) {
    if (typeof value === 'number') return this.orS(value);
    return this.orM(value);
  };

  AbstractMatrix.prototype.orS = function orS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.orM = function orM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.or = function or(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.or(value);
  };

  AbstractMatrix.prototype.xor = function xor(value) {
    if (typeof value === 'number') return this.xorS(value);
    return this.xorM(value);
  };

  AbstractMatrix.prototype.xorS = function xorS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.xorM = function xorM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.xor = function xor(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.xor(value);
  };

  AbstractMatrix.prototype.leftShift = function leftShift(value) {
    if (typeof value === 'number') return this.leftShiftS(value);
    return this.leftShiftM(value);
  };

  AbstractMatrix.prototype.leftShiftS = function leftShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.leftShiftM = function leftShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.leftShift = function leftShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.leftShift(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShift = function signPropagatingRightShift(value) {
    if (typeof value === 'number') return this.signPropagatingRightShiftS(value);
    return this.signPropagatingRightShiftM(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShiftS = function signPropagatingRightShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.signPropagatingRightShiftM = function signPropagatingRightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.signPropagatingRightShift = function signPropagatingRightShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.signPropagatingRightShift(value);
  };

  AbstractMatrix.prototype.rightShift = function rightShift(value) {
    if (typeof value === 'number') return this.rightShiftS(value);
    return this.rightShiftM(value);
  };

  AbstractMatrix.prototype.rightShiftS = function rightShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.rightShiftM = function rightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.rightShift = function rightShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.rightShift(value);
  };
  AbstractMatrix.prototype.zeroFillRightShift = AbstractMatrix.prototype.rightShift;
  AbstractMatrix.prototype.zeroFillRightShiftS = AbstractMatrix.prototype.rightShiftS;
  AbstractMatrix.prototype.zeroFillRightShiftM = AbstractMatrix.prototype.rightShiftM;
  AbstractMatrix.zeroFillRightShift = AbstractMatrix.rightShift;

  AbstractMatrix.prototype.not = function not() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, ~(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.not = function not(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.not();
  };

  AbstractMatrix.prototype.abs = function abs() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.abs(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.abs = function abs(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.abs();
  };

  AbstractMatrix.prototype.acos = function acos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acos(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.acos = function acos(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.acos();
  };

  AbstractMatrix.prototype.acosh = function acosh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acosh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.acosh = function acosh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.acosh();
  };

  AbstractMatrix.prototype.asin = function asin() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asin(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.asin = function asin(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.asin();
  };

  AbstractMatrix.prototype.asinh = function asinh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asinh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.asinh = function asinh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.asinh();
  };

  AbstractMatrix.prototype.atan = function atan() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atan(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.atan = function atan(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.atan();
  };

  AbstractMatrix.prototype.atanh = function atanh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atanh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.atanh = function atanh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.atanh();
  };

  AbstractMatrix.prototype.cbrt = function cbrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cbrt(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cbrt = function cbrt(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cbrt();
  };

  AbstractMatrix.prototype.ceil = function ceil() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.ceil(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.ceil = function ceil(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.ceil();
  };

  AbstractMatrix.prototype.clz32 = function clz32() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.clz32(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.clz32 = function clz32(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.clz32();
  };

  AbstractMatrix.prototype.cos = function cos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cos(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cos = function cos(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cos();
  };

  AbstractMatrix.prototype.cosh = function cosh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cosh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cosh = function cosh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cosh();
  };

  AbstractMatrix.prototype.exp = function exp() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.exp(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.exp = function exp(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.exp();
  };

  AbstractMatrix.prototype.expm1 = function expm1() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.expm1(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.expm1 = function expm1(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.expm1();
  };

  AbstractMatrix.prototype.floor = function floor() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.floor(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.floor = function floor(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.floor();
  };

  AbstractMatrix.prototype.fround = function fround() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.fround(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.fround = function fround(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.fround();
  };

  AbstractMatrix.prototype.log = function log() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log = function log(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log();
  };

  AbstractMatrix.prototype.log1p = function log1p() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log1p(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log1p = function log1p(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log1p();
  };

  AbstractMatrix.prototype.log10 = function log10() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log10(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log10 = function log10(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log10();
  };

  AbstractMatrix.prototype.log2 = function log2() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log2(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log2 = function log2(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log2();
  };

  AbstractMatrix.prototype.round = function round() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.round(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.round = function round(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.round();
  };

  AbstractMatrix.prototype.sign = function sign() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sign(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sign = function sign(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sign();
  };

  AbstractMatrix.prototype.sin = function sin() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sin(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sin = function sin(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sin();
  };

  AbstractMatrix.prototype.sinh = function sinh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sinh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sinh = function sinh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sinh();
  };

  AbstractMatrix.prototype.sqrt = function sqrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sqrt(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sqrt = function sqrt(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sqrt();
  };

  AbstractMatrix.prototype.tan = function tan() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tan(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.tan = function tan(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.tan();
  };

  AbstractMatrix.prototype.tanh = function tanh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tanh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.tanh = function tanh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.tanh();
  };

  AbstractMatrix.prototype.trunc = function trunc() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.trunc(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.trunc = function trunc(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.trunc();
  };

  AbstractMatrix.pow = function pow(matrix, arg0) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.pow(arg0);
  };

  AbstractMatrix.prototype.pow = function pow(value) {
    if (typeof value === 'number') return this.powS(value);
    return this.powM(value);
  };

  AbstractMatrix.prototype.powS = function powS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), value));
      }
    }
    return this;
  };

  AbstractMatrix.prototype.powM = function powM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), matrix.get(i, j)));
      }
    }
    return this;
  };
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/matrix.js":
/*!**********************************************!*\
  !*** ./node_modules/ml-matrix/src/matrix.js ***!
  \**********************************************/
/*! exports provided: AbstractMatrix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return AbstractMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-array-rescale */ "./node_modules/ml-array-rescale/lib-es6/index.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "./node_modules/ml-matrix/src/inspect.js");
/* harmony import */ var _mathOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathOperations */ "./node_modules/ml-matrix/src/mathOperations.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat */ "./node_modules/ml-matrix/src/stat.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/util.js");







class AbstractMatrix {
  static from1DArray(newRows, newColumns, newData) {
    let length = newRows * newColumns;
    if (length !== newData.length) {
      throw new RangeError('data length does not match given dimensions');
    }
    let newMatrix = new Matrix(newRows, newColumns);
    for (let row = 0; row < newRows; row++) {
      for (let column = 0; column < newColumns; column++) {
        newMatrix.set(row, column, newData[row * newColumns + column]);
      }
    }
    return newMatrix;
  }

  static rowVector(newData) {
    let vector = new Matrix(1, newData.length);
    for (let i = 0; i < newData.length; i++) {
      vector.set(0, i, newData[i]);
    }
    return vector;
  }

  static columnVector(newData) {
    let vector = new Matrix(newData.length, 1);
    for (let i = 0; i < newData.length; i++) {
      vector.set(i, 0, newData[i]);
    }
    return vector;
  }

  static zeros(rows, columns) {
    return new Matrix(rows, columns);
  }

  static ones(rows, columns) {
    return new Matrix(rows, columns).fill(1);
  }

  static rand(rows, columns, options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { random = Math.random } = options;
    let matrix = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrix.set(i, j, random());
      }
    }
    return matrix;
  }

  static randInt(rows, columns, options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1000, random = Math.random } = options;
    if (!Number.isInteger(min)) throw new TypeError('min must be an integer');
    if (!Number.isInteger(max)) throw new TypeError('max must be an integer');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let interval = max - min;
    let matrix = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let value = min + Math.round(random() * interval);
        matrix.set(i, j, value);
      }
    }
    return matrix;
  }

  static eye(rows, columns, value) {
    if (columns === undefined) columns = rows;
    if (value === undefined) value = 1;
    let min = Math.min(rows, columns);
    let matrix = this.zeros(rows, columns);
    for (let i = 0; i < min; i++) {
      matrix.set(i, i, value);
    }
    return matrix;
  }

  static diag(data, rows, columns) {
    let l = data.length;
    if (rows === undefined) rows = l;
    if (columns === undefined) columns = rows;
    let min = Math.min(l, rows, columns);
    let matrix = this.zeros(rows, columns);
    for (let i = 0; i < min; i++) {
      matrix.set(i, i, data[i]);
    }
    return matrix;
  }

  static min(matrix1, matrix2) {
    matrix1 = this.checkMatrix(matrix1);
    matrix2 = this.checkMatrix(matrix2);
    let rows = matrix1.rows;
    let columns = matrix1.columns;
    let result = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
      }
    }
    return result;
  }

  static max(matrix1, matrix2) {
    matrix1 = this.checkMatrix(matrix1);
    matrix2 = this.checkMatrix(matrix2);
    let rows = matrix1.rows;
    let columns = matrix1.columns;
    let result = new this(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
      }
    }
    return result;
  }

  static checkMatrix(value) {
    return AbstractMatrix.isMatrix(value) ? value : new Matrix(value);
  }

  static isMatrix(value) {
    return value != null && value.klass === 'Matrix';
  }

  get size() {
    return this.rows * this.columns;
  }

  apply(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        callback.call(this, i, j);
      }
    }
    return this;
  }

  to1DArray() {
    let array = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        array.push(this.get(i, j));
      }
    }
    return array;
  }

  to2DArray() {
    let copy = [];
    for (let i = 0; i < this.rows; i++) {
      copy.push([]);
      for (let j = 0; j < this.columns; j++) {
        copy[i].push(this.get(i, j));
      }
    }
    return copy;
  }

  toJSON() {
    return this.to2DArray();
  }

  isRowVector() {
    return this.rows === 1;
  }

  isColumnVector() {
    return this.columns === 1;
  }

  isVector() {
    return this.rows === 1 || this.columns === 1;
  }

  isSquare() {
    return this.rows === this.columns;
  }

  isSymmetric() {
    if (this.isSquare()) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j <= i; j++) {
          if (this.get(i, j) !== this.get(j, i)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  isEchelonForm() {
    let i = 0;
    let j = 0;
    let previousColumn = -1;
    let isEchelonForm = true;
    let checked = false;
    while (i < this.rows && isEchelonForm) {
      j = 0;
      checked = false;
      while (j < this.columns && checked === false) {
        if (this.get(i, j) === 0) {
          j++;
        } else if (this.get(i, j) === 1 && j > previousColumn) {
          checked = true;
          previousColumn = j;
        } else {
          isEchelonForm = false;
          checked = true;
        }
      }
      i++;
    }
    return isEchelonForm;
  }

  isReducedEchelonForm() {
    let i = 0;
    let j = 0;
    let previousColumn = -1;
    let isReducedEchelonForm = true;
    let checked = false;
    while (i < this.rows && isReducedEchelonForm) {
      j = 0;
      checked = false;
      while (j < this.columns && checked === false) {
        if (this.get(i, j) === 0) {
          j++;
        } else if (this.get(i, j) === 1 && j > previousColumn) {
          checked = true;
          previousColumn = j;
        } else {
          isReducedEchelonForm = false;
          checked = true;
        }
      }
      for (let k = j + 1; k < this.rows; k++) {
        if (this.get(i, k) !== 0) {
          isReducedEchelonForm = false;
        }
      }
      i++;
    }
    return isReducedEchelonForm;
  }

  echelonForm() {
    let result = this.clone();
    let h = 0;
    let k = 0;
    while (h < result.rows && k < result.columns) {
      let iMax = h;
      for (let i = h; i < result.rows; i++) {
        if (result.get(i, k) > result.get(iMax, k)) {
          iMax = i;
        }
      }
      if (result.get(iMax, k) === 0) {
        k++;
      } else {
        result.swapRows(h, iMax);
        let tmp = result.get(h, k);
        for (let j = k; j < result.columns; j++) {
          result.set(h, j, result.get(h, j) / tmp);
        }
        for (let i = h + 1; i < result.rows; i++) {
          let factor = result.get(i, k) / result.get(h, k);
          result.set(i, k, 0);
          for (let j = k + 1; j < result.columns; j++) {
            result.set(i, j, result.get(i, j) - result.get(h, j) * factor);
          }
        }
        h++;
        k++;
      }
    }
    return result;
  }

  reducedEchelonForm() {
    let result = this.echelonForm();
    let m = result.columns;
    let n = result.rows;
    let h = n - 1;
    while (h >= 0) {
      if (result.maxRow(h) === 0) {
        h--;
      } else {
        let p = 0;
        let pivot = false;
        while (p < n && pivot === false) {
          if (result.get(h, p) === 1) {
            pivot = true;
          } else {
            p++;
          }
        }
        for (let i = 0; i < h; i++) {
          let factor = result.get(i, p);
          for (let j = p; j < m; j++) {
            let tmp = result.get(i, j) - factor * result.get(h, j);
            result.set(i, j, tmp);
          }
        }
        h--;
      }
    }
    return result;
  }

  set() {
    throw new Error('set method is unimplemented');
  }

  get() {
    throw new Error('get method is unimplemented');
  }

  repeat(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { rows = 1, columns = 1 } = options;
    if (!Number.isInteger(rows) || rows <= 0) {
      throw new TypeError('rows must be a positive integer');
    }
    if (!Number.isInteger(columns) || columns <= 0) {
      throw new TypeError('columns must be a positive integer');
    }
    let matrix = new Matrix(this.rows * rows, this.columns * columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrix.setSubMatrix(this, this.rows * i, this.columns * j);
      }
    }
    return matrix;
  }

  fill(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, value);
      }
    }
    return this;
  }

  neg() {
    return this.mulS(-1);
  }

  getRow(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    let row = [];
    for (let i = 0; i < this.columns; i++) {
      row.push(this.get(index, i));
    }
    return row;
  }

  getRowVector(index) {
    return Matrix.rowVector(this.getRow(index));
  }

  setRow(index, array) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, array);
    for (let i = 0; i < this.columns; i++) {
      this.set(index, i, array[i]);
    }
    return this;
  }

  swapRows(row1, row2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row1);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row2);
    for (let i = 0; i < this.columns; i++) {
      let temp = this.get(row1, i);
      this.set(row1, i, this.get(row2, i));
      this.set(row2, i, temp);
    }
    return this;
  }

  getColumn(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    let column = [];
    for (let i = 0; i < this.rows; i++) {
      column.push(this.get(i, index));
    }
    return column;
  }

  getColumnVector(index) {
    return Matrix.columnVector(this.getColumn(index));
  }

  setColumn(index, array) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, array);
    for (let i = 0; i < this.rows; i++) {
      this.set(i, index, array[i]);
    }
    return this;
  }

  swapColumns(column1, column2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column1);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column2);
    for (let i = 0; i < this.rows; i++) {
      let temp = this.get(i, column1);
      this.set(i, column1, this.get(i, column2));
      this.set(i, column2, temp);
    }
    return this;
  }

  addRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + vector[j]);
      }
    }
    return this;
  }

  subRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - vector[j]);
      }
    }
    return this;
  }

  mulRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * vector[j]);
      }
    }
    return this;
  }

  divRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / vector[j]);
      }
    }
    return this;
  }

  addColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + vector[i]);
      }
    }
    return this;
  }

  subColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - vector[i]);
      }
    }
    return this;
  }

  mulColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * vector[i]);
      }
    }
    return this;
  }

  divColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / vector[i]);
      }
    }
    return this;
  }

  mulRow(index, value) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    for (let i = 0; i < this.columns; i++) {
      this.set(index, i, this.get(index, i) * value);
    }
    return this;
  }

  mulColumn(index, value) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    for (let i = 0; i < this.rows; i++) {
      this.set(i, index, this.get(i, index) * value);
    }
    return this;
  }

  max() {
    let v = this.get(0, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) > v) {
          v = this.get(i, j);
        }
      }
    }
    return v;
  }

  maxIndex() {
    let v = this.get(0, 0);
    let idx = [0, 0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) > v) {
          v = this.get(i, j);
          idx[0] = i;
          idx[1] = j;
        }
      }
    }
    return idx;
  }

  min() {
    let v = this.get(0, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) < v) {
          v = this.get(i, j);
        }
      }
    }
    return v;
  }

  minIndex() {
    let v = this.get(0, 0);
    let idx = [0, 0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) < v) {
          v = this.get(i, j);
          idx[0] = i;
          idx[1] = j;
        }
      }
    }
    return idx;
  }

  maxRow(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) > v) {
        v = this.get(row, i);
      }
    }
    return v;
  }

  maxRowIndex(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    let idx = [row, 0];
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) > v) {
        v = this.get(row, i);
        idx[1] = i;
      }
    }
    return idx;
  }

  minRow(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) < v) {
        v = this.get(row, i);
      }
    }
    return v;
  }

  minRowIndex(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    let v = this.get(row, 0);
    let idx = [row, 0];
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) < v) {
        v = this.get(row, i);
        idx[1] = i;
      }
    }
    return idx;
  }

  maxColumn(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) > v) {
        v = this.get(i, column);
      }
    }
    return v;
  }

  maxColumnIndex(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    let idx = [0, column];
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) > v) {
        v = this.get(i, column);
        idx[0] = i;
      }
    }
    return idx;
  }

  minColumn(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) < v) {
        v = this.get(i, column);
      }
    }
    return v;
  }

  minColumnIndex(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    let v = this.get(0, column);
    let idx = [0, column];
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) < v) {
        v = this.get(i, column);
        idx[0] = i;
      }
    }
    return idx;
  }

  diag() {
    let min = Math.min(this.rows, this.columns);
    let diag = [];
    for (let i = 0; i < min; i++) {
      diag.push(this.get(i, i));
    }
    return diag;
  }

  norm(type = 'frobenius') {
    let result = 0;
    if (type === 'max') {
      return this.max();
    } else if (type === 'frobenius') {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result = result + this.get(i, j) * this.get(i, j);
        }
      }
      return Math.sqrt(result);
    } else {
      throw new RangeError(`unknown norm type: ${type}`);
    }
  }

  cumulativeSum() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        sum += this.get(i, j);
        this.set(i, j, sum);
      }
    }
    return this;
  }

  dot(vector2) {
    if (AbstractMatrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
    let vector1 = this.to1DArray();
    if (vector1.length !== vector2.length) {
      throw new RangeError('vectors do not have the same size');
    }
    let dot = 0;
    for (let i = 0; i < vector1.length; i++) {
      dot += vector1[i] * vector2[i];
    }
    return dot;
  }

  mmul(other) {
    other = Matrix.checkMatrix(other);

    let m = this.rows;
    let n = this.columns;
    let p = other.columns;

    let result = new Matrix(m, p);

    let Bcolj = new Float64Array(n);
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        Bcolj[k] = other.get(k, j);
      }

      for (let i = 0; i < m; i++) {
        let s = 0;
        for (let k = 0; k < n; k++) {
          s += this.get(i, k) * Bcolj[k];
        }

        result.set(i, j, s);
      }
    }
    return result;
  }

  strassen2x2(other) {
    other = Matrix.checkMatrix(other);
    let result = new Matrix(2, 2);
    const a11 = this.get(0, 0);
    const b11 = other.get(0, 0);
    const a12 = this.get(0, 1);
    const b12 = other.get(0, 1);
    const a21 = this.get(1, 0);
    const b21 = other.get(1, 0);
    const a22 = this.get(1, 1);
    const b22 = other.get(1, 1);

    // Compute intermediate values.
    const m1 = (a11 + a22) * (b11 + b22);
    const m2 = (a21 + a22) * b11;
    const m3 = a11 * (b12 - b22);
    const m4 = a22 * (b21 - b11);
    const m5 = (a11 + a12) * b22;
    const m6 = (a21 - a11) * (b11 + b12);
    const m7 = (a12 - a22) * (b21 + b22);

    // Combine intermediate values into the output.
    const c00 = m1 + m4 - m5 + m7;
    const c01 = m3 + m5;
    const c10 = m2 + m4;
    const c11 = m1 - m2 + m3 + m6;

    result.set(0, 0, c00);
    result.set(0, 1, c01);
    result.set(1, 0, c10);
    result.set(1, 1, c11);
    return result;
  }

  strassen3x3(other) {
    other = Matrix.checkMatrix(other);
    let result = new Matrix(3, 3);

    const a00 = this.get(0, 0);
    const a01 = this.get(0, 1);
    const a02 = this.get(0, 2);
    const a10 = this.get(1, 0);
    const a11 = this.get(1, 1);
    const a12 = this.get(1, 2);
    const a20 = this.get(2, 0);
    const a21 = this.get(2, 1);
    const a22 = this.get(2, 2);

    const b00 = other.get(0, 0);
    const b01 = other.get(0, 1);
    const b02 = other.get(0, 2);
    const b10 = other.get(1, 0);
    const b11 = other.get(1, 1);
    const b12 = other.get(1, 2);
    const b20 = other.get(2, 0);
    const b21 = other.get(2, 1);
    const b22 = other.get(2, 2);

    const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
    const m2 = (a00 - a10) * (-b01 + b11);
    const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
    const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
    const m5 = (a10 + a11) * (-b00 + b01);
    const m6 = a00 * b00;
    const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
    const m8 = (-a00 + a20) * (b02 - b12);
    const m9 = (a20 + a21) * (-b00 + b02);
    const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
    const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
    const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
    const m13 = (a02 - a22) * (b11 - b21);
    const m14 = a02 * b20;
    const m15 = (a21 + a22) * (-b20 + b21);
    const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
    const m17 = (a02 - a12) * (b12 - b22);
    const m18 = (a11 + a12) * (-b20 + b22);
    const m19 = a01 * b10;
    const m20 = a12 * b21;
    const m21 = a10 * b02;
    const m22 = a20 * b01;
    const m23 = a22 * b22;

    const c00 = m6 + m14 + m19;
    const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
    const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
    const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
    const c11 = m2 + m4 + m5 + m6 + m20;
    const c12 = m14 + m16 + m17 + m18 + m21;
    const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
    const c21 = m12 + m13 + m14 + m15 + m22;
    const c22 = m6 + m7 + m8 + m9 + m23;

    result.set(0, 0, c00);
    result.set(0, 1, c01);
    result.set(0, 2, c02);
    result.set(1, 0, c10);
    result.set(1, 1, c11);
    result.set(1, 2, c12);
    result.set(2, 0, c20);
    result.set(2, 1, c21);
    result.set(2, 2, c22);
    return result;
  }

  mmulStrassen(y) {
    y = Matrix.checkMatrix(y);
    let x = this.clone();
    let r1 = x.rows;
    let c1 = x.columns;
    let r2 = y.rows;
    let c2 = y.columns;
    if (c1 !== r2) {
      // eslint-disable-next-line no-console
      console.warn(
        `Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`,
      );
    }

    // Put a matrix into the top left of a matrix of zeros.
    // `rows` and `cols` are the dimensions of the output matrix.
    function embed(mat, rows, cols) {
      let r = mat.rows;
      let c = mat.columns;
      if (r === rows && c === cols) {
        return mat;
      } else {
        let resultat = AbstractMatrix.zeros(rows, cols);
        resultat = resultat.setSubMatrix(mat, 0, 0);
        return resultat;
      }
    }

    // Make sure both matrices are the same size.
    // This is exclusively for simplicity:
    // this algorithm can be implemented with matrices of different sizes.

    let r = Math.max(r1, r2);
    let c = Math.max(c1, c2);
    x = embed(x, r, c);
    y = embed(y, r, c);

    // Our recursive multiplication function.
    function blockMult(a, b, rows, cols) {
      // For small matrices, resort to naive multiplication.
      if (rows <= 512 || cols <= 512) {
        return a.mmul(b); // a is equivalent to this
      }

      // Apply dynamic padding.
      if (rows % 2 === 1 && cols % 2 === 1) {
        a = embed(a, rows + 1, cols + 1);
        b = embed(b, rows + 1, cols + 1);
      } else if (rows % 2 === 1) {
        a = embed(a, rows + 1, cols);
        b = embed(b, rows + 1, cols);
      } else if (cols % 2 === 1) {
        a = embed(a, rows, cols + 1);
        b = embed(b, rows, cols + 1);
      }

      let halfRows = parseInt(a.rows / 2, 10);
      let halfCols = parseInt(a.columns / 2, 10);
      // Subdivide input matrices.
      let a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
      let b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

      let a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
      let b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

      let a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
      let b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

      let a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
      let b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

      // Compute intermediate values.
      let m1 = blockMult(
        AbstractMatrix.add(a11, a22),
        AbstractMatrix.add(b11, b22),
        halfRows,
        halfCols,
      );
      let m2 = blockMult(AbstractMatrix.add(a21, a22), b11, halfRows, halfCols);
      let m3 = blockMult(a11, AbstractMatrix.sub(b12, b22), halfRows, halfCols);
      let m4 = blockMult(a22, AbstractMatrix.sub(b21, b11), halfRows, halfCols);
      let m5 = blockMult(AbstractMatrix.add(a11, a12), b22, halfRows, halfCols);
      let m6 = blockMult(
        AbstractMatrix.sub(a21, a11),
        AbstractMatrix.add(b11, b12),
        halfRows,
        halfCols,
      );
      let m7 = blockMult(
        AbstractMatrix.sub(a12, a22),
        AbstractMatrix.add(b21, b22),
        halfRows,
        halfCols,
      );

      // Combine intermediate values into the output.
      let c11 = AbstractMatrix.add(m1, m4);
      c11.sub(m5);
      c11.add(m7);
      let c12 = AbstractMatrix.add(m3, m5);
      let c21 = AbstractMatrix.add(m2, m4);
      let c22 = AbstractMatrix.sub(m1, m2);
      c22.add(m3);
      c22.add(m6);

      // Crop output to the desired size (undo dynamic padding).
      let resultat = AbstractMatrix.zeros(2 * c11.rows, 2 * c11.columns);
      resultat = resultat.setSubMatrix(c11, 0, 0);
      resultat = resultat.setSubMatrix(c12, c11.rows, 0);
      resultat = resultat.setSubMatrix(c21, 0, c11.columns);
      resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
      return resultat.subMatrix(0, rows - 1, 0, cols - 1);
    }
    return blockMult(x, y, r, c);
  }

  scaleRows(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1 } = options;
    if (!Number.isFinite(min)) throw new TypeError('min must be a number');
    if (!Number.isFinite(max)) throw new TypeError('max must be a number');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.rows; i++) {
      const row = this.getRow(i);
      Object(ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__["default"])(row, { min, max, output: row });
      newMatrix.setRow(i, row);
    }
    return newMatrix;
  }

  scaleColumns(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1 } = options;
    if (!Number.isFinite(min)) throw new TypeError('min must be a number');
    if (!Number.isFinite(max)) throw new TypeError('max must be a number');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.columns; i++) {
      const column = this.getColumn(i);
      Object(ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__["default"])(column, {
        min: min,
        max: max,
        output: column,
      });
      newMatrix.setColumn(i, column);
    }
    return newMatrix;
  }

  flipRows() {
    const middle = Math.ceil(this.columns / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < middle; j++) {
        let first = this.get(i, j);
        let last = this.get(i, this.columns - 1 - j);
        this.set(i, j, last);
        this.set(i, this.columns - 1 - j, first);
      }
    }
    return this;
  }

  flipColumns() {
    const middle = Math.ceil(this.rows / 2);
    for (let j = 0; j < this.columns; j++) {
      for (let i = 0; i < middle; i++) {
        let first = this.get(i, j);
        let last = this.get(this.rows - 1 - i, j);
        this.set(i, j, last);
        this.set(this.rows - 1 - i, j, first);
      }
    }
    return this;
  }

  kroneckerProduct(other) {
    other = Matrix.checkMatrix(other);

    let m = this.rows;
    let n = this.columns;
    let p = other.rows;
    let q = other.columns;

    let result = new Matrix(m * p, n * q);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < p; k++) {
          for (let l = 0; l < q; l++) {
            result.set(p * i + k, q * j + l, this.get(i, j) * other.get(k, l));
          }
        }
      }
    }
    return result;
  }

  transpose() {
    let result = new Matrix(this.columns, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        result.set(j, i, this.get(i, j));
      }
    }
    return result;
  }

  sortRows(compareFunction = compareNumbers) {
    for (let i = 0; i < this.rows; i++) {
      this.setRow(i, this.getRow(i).sort(compareFunction));
    }
    return this;
  }

  sortColumns(compareFunction = compareNumbers) {
    for (let i = 0; i < this.columns; i++) {
      this.setColumn(i, this.getColumn(i).sort(compareFunction));
    }
    return this;
  }

  subMatrix(startRow, endRow, startColumn, endColumn) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRange"])(this, startRow, endRow, startColumn, endColumn);
    let newMatrix = new Matrix(
      endRow - startRow + 1,
      endColumn - startColumn + 1,
    );
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startColumn; j <= endColumn; j++) {
        newMatrix.set(i - startRow, j - startColumn, this.get(i, j));
      }
    }
    return newMatrix;
  }

  subMatrixRow(indices, startColumn, endColumn) {
    if (startColumn === undefined) startColumn = 0;
    if (endColumn === undefined) endColumn = this.columns - 1;
    if (
      startColumn > endColumn ||
      startColumn < 0 ||
      startColumn >= this.columns ||
      endColumn < 0 ||
      endColumn >= this.columns
    ) {
      throw new RangeError('Argument out of range');
    }

    let newMatrix = new Matrix(indices.length, endColumn - startColumn + 1);
    for (let i = 0; i < indices.length; i++) {
      for (let j = startColumn; j <= endColumn; j++) {
        if (indices[i] < 0 || indices[i] >= this.rows) {
          throw new RangeError(`Row index out of range: ${indices[i]}`);
        }
        newMatrix.set(i, j - startColumn, this.get(indices[i], j));
      }
    }
    return newMatrix;
  }

  subMatrixColumn(indices, startRow, endRow) {
    if (startRow === undefined) startRow = 0;
    if (endRow === undefined) endRow = this.rows - 1;
    if (
      startRow > endRow ||
      startRow < 0 ||
      startRow >= this.rows ||
      endRow < 0 ||
      endRow >= this.rows
    ) {
      throw new RangeError('Argument out of range');
    }

    let newMatrix = new Matrix(endRow - startRow + 1, indices.length);
    for (let i = 0; i < indices.length; i++) {
      for (let j = startRow; j <= endRow; j++) {
        if (indices[i] < 0 || indices[i] >= this.columns) {
          throw new RangeError(`Column index out of range: ${indices[i]}`);
        }
        newMatrix.set(j - startRow, i, this.get(j, indices[i]));
      }
    }
    return newMatrix;
  }

  setSubMatrix(matrix, startRow, startColumn) {
    matrix = Matrix.checkMatrix(matrix);
    let endRow = startRow + matrix.rows - 1;
    let endColumn = startColumn + matrix.columns - 1;
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRange"])(this, startRow, endRow, startColumn, endColumn);
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.columns; j++) {
        this.set(startRow + i, startColumn + j, matrix.get(i, j));
      }
    }
    return this;
  }

  selection(rowIndices, columnIndices) {
    let indices = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkIndices"])(this, rowIndices, columnIndices);
    let newMatrix = new Matrix(rowIndices.length, columnIndices.length);
    for (let i = 0; i < indices.row.length; i++) {
      let rowIndex = indices.row[i];
      for (let j = 0; j < indices.column.length; j++) {
        let columnIndex = indices.column[j];
        newMatrix.set(i, j, this.get(rowIndex, columnIndex));
      }
    }
    return newMatrix;
  }

  trace() {
    let min = Math.min(this.rows, this.columns);
    let trace = 0;
    for (let i = 0; i < min; i++) {
      trace += this.get(i, i);
    }
    return trace;
  }

  clone() {
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        newMatrix.set(row, column, this.get(row, column));
      }
    }
    return newMatrix;
  }

  sum(by) {
    switch (by) {
      case 'row':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumByRow"])(this);
      case 'column':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumByColumn"])(this);
      case undefined:
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumAll"])(this);
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  product(by) {
    switch (by) {
      case 'row':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productByRow"])(this);
      case 'column':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productByColumn"])(this);
      case undefined:
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productAll"])(this);
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  mean(by) {
    const sum = this.sum(by);
    switch (by) {
      case 'row': {
        for (let i = 0; i < this.rows; i++) {
          sum[i] /= this.columns;
        }
        return sum;
      }
      case 'column': {
        for (let i = 0; i < this.columns; i++) {
          sum[i] /= this.rows;
        }
        return sum;
      }
      case undefined:
        return sum / this.size;
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  variance(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { unbiased = true, mean = this.mean(by) } = options;
    if (typeof unbiased !== 'boolean') {
      throw new TypeError('unbiased must be a boolean');
    }
    switch (by) {
      case 'row': {
        if (!Array.isArray(mean)) {
          throw new TypeError('mean must be an array');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceByRow"])(this, unbiased, mean);
      }
      case 'column': {
        if (!Array.isArray(mean)) {
          throw new TypeError('mean must be an array');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceByColumn"])(this, unbiased, mean);
      }
      case undefined: {
        if (typeof mean !== 'number') {
          throw new TypeError('mean must be a number');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceAll"])(this, unbiased, mean);
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  standardDeviation(by, options) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    const variance = this.variance(by, options);
    if (by === undefined) {
      return Math.sqrt(variance);
    } else {
      for (let i = 0; i < variance.length; i++) {
        variance[i] = Math.sqrt(variance[i]);
      }
      return variance;
    }
  }

  center(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { center = this.mean(by) } = options;
    switch (by) {
      case 'row': {
        if (!Array.isArray(center)) {
          throw new TypeError('center must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerByRow"])(this, center);
        return this;
      }
      case 'column': {
        if (!Array.isArray(center)) {
          throw new TypeError('center must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerByColumn"])(this, center);
        return this;
      }
      case undefined: {
        if (typeof center !== 'number') {
          throw new TypeError('center must be a number');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerAll"])(this, center);
        return this;
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  scale(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    let scale = options.scale;
    switch (by) {
      case 'row': {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleByRow"])(this);
        } else if (!Array.isArray(scale)) {
          throw new TypeError('scale must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleByRow"])(this, scale);
        return this;
      }
      case 'column': {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleByColumn"])(this);
        } else if (!Array.isArray(scale)) {
          throw new TypeError('scale must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleByColumn"])(this, scale);
        return this;
      }
      case undefined: {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleAll"])(this);
        } else if (typeof scale !== 'number') {
          throw new TypeError('scale must be a number');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleAll"])(this, scale);
        return this;
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  toString(options) {
    return Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["inspectMatrixWithOptions"])(this, options);
  }
}

AbstractMatrix.prototype.klass = 'Matrix';
if (typeof Symbol !== 'undefined') {
  AbstractMatrix.prototype[
    Symbol.for('nodejs.util.inspect.custom')
  ] = _inspect__WEBPACK_IMPORTED_MODULE_1__["inspectMatrix"];
}

function compareNumbers(a, b) {
  return a - b;
}

// Synonyms
AbstractMatrix.random = AbstractMatrix.rand;
AbstractMatrix.randomInt = AbstractMatrix.randInt;
AbstractMatrix.diagonal = AbstractMatrix.diag;
AbstractMatrix.prototype.diagonal = AbstractMatrix.prototype.diag;
AbstractMatrix.identity = AbstractMatrix.eye;
AbstractMatrix.prototype.negate = AbstractMatrix.prototype.neg;
AbstractMatrix.prototype.tensorProduct =
  AbstractMatrix.prototype.kroneckerProduct;

class Matrix extends AbstractMatrix {
  constructor(nRows, nColumns) {
    super();
    if (Matrix.isMatrix(nRows)) {
      return nRows.clone();
    } else if (Number.isInteger(nRows) && nRows > 0) {
      // Create an empty matrix
      this.data = [];
      if (Number.isInteger(nColumns) && nColumns > 0) {
        for (let i = 0; i < nRows; i++) {
          this.data.push(new Float64Array(nColumns));
        }
      } else {
        throw new TypeError('nColumns must be a positive integer');
      }
    } else if (Array.isArray(nRows)) {
      // Copy the values from the 2D array
      const arrayData = nRows;
      nRows = arrayData.length;
      nColumns = arrayData[0].length;
      if (typeof nColumns !== 'number' || nColumns === 0) {
        throw new TypeError(
          'Data must be a 2D array with at least one element',
        );
      }
      this.data = [];
      for (let i = 0; i < nRows; i++) {
        if (arrayData[i].length !== nColumns) {
          throw new RangeError('Inconsistent array dimensions');
        }
        this.data.push(Float64Array.from(arrayData[i]));
      }
    } else {
      throw new TypeError(
        'First argument must be a positive number or an array',
      );
    }
    this.rows = nRows;
    this.columns = nColumns;
    return this;
  }

  set(rowIndex, columnIndex, value) {
    this.data[rowIndex][columnIndex] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.data[rowIndex][columnIndex];
  }

  removeRow(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    if (this.rows === 1) {
      throw new RangeError('A matrix cannot have less than one row');
    }
    this.data.splice(index, 1);
    this.rows -= 1;
    return this;
  }

  addRow(index, array) {
    if (array === undefined) {
      array = index;
      index = this.rows;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index, true);
    array = Float64Array.from(Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, array, true));
    this.data.splice(index, 0, array);
    this.rows += 1;
    return this;
  }

  removeColumn(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    if (this.columns === 1) {
      throw new RangeError('A matrix cannot have less than one column');
    }
    for (let i = 0; i < this.rows; i++) {
      const newRow = new Float64Array(this.columns - 1);
      for (let j = 0; j < index; j++) {
        newRow[j] = this.data[i][j];
      }
      for (let j = index + 1; j < this.columns; j++) {
        newRow[j - 1] = this.data[i][j];
      }
      this.data[i] = newRow;
    }
    this.columns -= 1;
    return this;
  }

  addColumn(index, array) {
    if (typeof array === 'undefined') {
      array = index;
      index = this.columns;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index, true);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, array);
    for (let i = 0; i < this.rows; i++) {
      const newRow = new Float64Array(this.columns + 1);
      let j = 0;
      for (; j < index; j++) {
        newRow[j] = this.data[i][j];
      }
      newRow[j++] = array[i];
      for (; j < this.columns + 1; j++) {
        newRow[j] = this.data[i][j - 1];
      }
      this.data[i] = newRow;
    }
    this.columns += 1;
    return this;
  }
}

Object(_mathOperations__WEBPACK_IMPORTED_MODULE_2__["installMathOperations"])(AbstractMatrix, Matrix);


/***/ }),

/***/ "./node_modules/ml-matrix/src/pseudoInverse.js":
/*!*****************************************************!*\
  !*** ./node_modules/ml-matrix/src/pseudoInverse.js ***!
  \*****************************************************/
/*! exports provided: pseudoInverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return pseudoInverse; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/svd */ "./node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "./node_modules/ml-matrix/src/matrix.js");



function pseudoInverse(matrix, threshold = Number.EPSILON) {
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
  let svdSolution = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__["default"](matrix, { autoTranspose: true });

  let U = svdSolution.leftSingularVectors;
  let V = svdSolution.rightSingularVectors;
  let s = svdSolution.diagonal;

  for (let i = 0; i < s.length; i++) {
    if (Math.abs(s[i]) > threshold) {
      s[i] = 1.0 / s[i];
    } else {
      s[i] = 0.0;
    }
  }

  return V.mmul(_matrix__WEBPACK_IMPORTED_MODULE_1__["default"].diag(s).mmul(U.transpose()));
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/stat.js":
/*!********************************************!*\
  !*** ./node_modules/ml-matrix/src/stat.js ***!
  \********************************************/
/*! exports provided: sumByRow, sumByColumn, sumAll, productByRow, productByColumn, productAll, varianceByRow, varianceByColumn, varianceAll, centerByRow, centerByColumn, centerAll, getScaleByRow, scaleByRow, getScaleByColumn, scaleByColumn, getScaleAll, scaleAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumByRow", function() { return sumByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumByColumn", function() { return sumByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumAll", function() { return sumAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByRow", function() { return productByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByColumn", function() { return productByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productAll", function() { return productAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceByRow", function() { return varianceByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceByColumn", function() { return varianceByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceAll", function() { return varianceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerByRow", function() { return centerByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerByColumn", function() { return centerByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerAll", function() { return centerAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleByRow", function() { return getScaleByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleByRow", function() { return scaleByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleByColumn", function() { return getScaleByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleByColumn", function() { return scaleByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleAll", function() { return getScaleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAll", function() { return scaleAll; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./node_modules/ml-matrix/src/util.js");


function sumByRow(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.rows);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[i] += matrix.get(i, j);
    }
  }
  return sum;
}

function sumByColumn(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.columns);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[j] += matrix.get(i, j);
    }
  }
  return sum;
}

function sumAll(matrix) {
  let v = 0;
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      v += matrix.get(i, j);
    }
  }
  return v;
}

function productByRow(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.rows, 1);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[i] *= matrix.get(i, j);
    }
  }
  return sum;
}

function productByColumn(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.columns, 1);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[j] *= matrix.get(i, j);
    }
  }
  return sum;
}

function productAll(matrix) {
  let v = 1;
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      v *= matrix.get(i, j);
    }
  }
  return v;
}

function varianceByRow(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const variance = [];

  for (let i = 0; i < rows; i++) {
    let sum1 = 0;
    let sum2 = 0;
    let x = 0;
    for (let j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean[i];
      sum1 += x;
      sum2 += x * x;
    }
    if (unbiased) {
      variance.push((sum2 - (sum1 * sum1) / cols) / (cols - 1));
    } else {
      variance.push((sum2 - (sum1 * sum1) / cols) / cols);
    }
  }
  return variance;
}

function varianceByColumn(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const variance = [];

  for (let j = 0; j < cols; j++) {
    let sum1 = 0;
    let sum2 = 0;
    let x = 0;
    for (let i = 0; i < rows; i++) {
      x = matrix.get(i, j) - mean[j];
      sum1 += x;
      sum2 += x * x;
    }
    if (unbiased) {
      variance.push((sum2 - (sum1 * sum1) / rows) / (rows - 1));
    } else {
      variance.push((sum2 - (sum1 * sum1) / rows) / rows);
    }
  }
  return variance;
}

function varianceAll(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const size = rows * cols;

  let sum1 = 0;
  let sum2 = 0;
  let x = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean;
      sum1 += x;
      sum2 += x * x;
    }
  }
  if (unbiased) {
    return (sum2 - (sum1 * sum1) / size) / (size - 1);
  } else {
    return (sum2 - (sum1 * sum1) / size) / size;
  }
}

function centerByRow(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[i]);
    }
  }
}

function centerByColumn(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[j]);
    }
  }
}

function centerAll(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean);
    }
  }
}

function getScaleByRow(matrix) {
  const scale = [];
  for (let i = 0; i < matrix.rows; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.columns; j++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.columns - 1);
    }
    scale.push(Math.sqrt(sum));
  }
  return scale;
}

function scaleByRow(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[i]);
    }
  }
}

function getScaleByColumn(matrix) {
  const scale = [];
  for (let j = 0; j < matrix.columns; j++) {
    let sum = 0;
    for (let i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.rows - 1);
    }
    scale.push(Math.sqrt(sum));
  }
  return scale;
}

function scaleByColumn(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[j]);
    }
  }
}

function getScaleAll(matrix) {
  const divider = matrix.size - 1;
  let sum = 0;
  for (let j = 0; j < matrix.columns; j++) {
    for (let i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / divider;
    }
  }
  return Math.sqrt(sum);
}

function scaleAll(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale);
    }
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/util.js":
/*!********************************************!*\
  !*** ./node_modules/ml-matrix/src/util.js ***!
  \********************************************/
/*! exports provided: checkRowIndex, checkColumnIndex, checkRowVector, checkColumnVector, checkIndices, checkRowIndices, checkColumnIndices, checkRange, newArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowIndex", function() { return checkRowIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnIndex", function() { return checkColumnIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowVector", function() { return checkRowVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnVector", function() { return checkColumnVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIndices", function() { return checkIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowIndices", function() { return checkRowIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnIndices", function() { return checkColumnIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRange", function() { return checkRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArray", function() { return newArray; });
/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
  let max = outer ? matrix.rows : matrix.rows - 1;
  if (index < 0 || index > max) {
    throw new RangeError('Row index out of range');
  }
}

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkColumnIndex(matrix, index, outer) {
  let max = outer ? matrix.columns : matrix.columns - 1;
  if (index < 0 || index > max) {
    throw new RangeError('Column index out of range');
  }
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkRowVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }
  if (vector.length !== matrix.columns) {
    throw new RangeError(
      'vector size must be the same as the number of columns',
    );
  }
  return vector;
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkColumnVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }
  if (vector.length !== matrix.rows) {
    throw new RangeError('vector size must be the same as the number of rows');
  }
  return vector;
}

function checkIndices(matrix, rowIndices, columnIndices) {
  return {
    row: checkRowIndices(matrix, rowIndices),
    column: checkColumnIndices(matrix, columnIndices),
  };
}

function checkRowIndices(matrix, rowIndices) {
  if (typeof rowIndices !== 'object') {
    throw new TypeError('unexpected type for row indices');
  }

  let rowOut = rowIndices.some((r) => {
    return r < 0 || r >= matrix.rows;
  });

  if (rowOut) {
    throw new RangeError('row indices are out of range');
  }

  if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);

  return rowIndices;
}

function checkColumnIndices(matrix, columnIndices) {
  if (typeof columnIndices !== 'object') {
    throw new TypeError('unexpected type for column indices');
  }

  let columnOut = columnIndices.some((c) => {
    return c < 0 || c >= matrix.columns;
  });

  if (columnOut) {
    throw new RangeError('column indices are out of range');
  }
  if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);

  return columnIndices;
}

function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
  if (arguments.length !== 5) {
    throw new RangeError('expected 4 arguments');
  }
  checkNumber('startRow', startRow);
  checkNumber('endRow', endRow);
  checkNumber('startColumn', startColumn);
  checkNumber('endColumn', endColumn);
  if (
    startRow > endRow ||
    startColumn > endColumn ||
    startRow < 0 ||
    startRow >= matrix.rows ||
    endRow < 0 ||
    endRow >= matrix.rows ||
    startColumn < 0 ||
    startColumn >= matrix.columns ||
    endColumn < 0 ||
    endColumn >= matrix.columns
  ) {
    throw new RangeError('Submatrix indices are out of range');
  }
}

function newArray(length, value = 0) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(value);
  }
  return array;
}

function checkNumber(name, value) {
  if (typeof value !== 'number') {
    throw new TypeError(`${name} must be a number`);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/base.js":
/*!**************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/base.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseView; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");


class BaseView extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(matrix, rows, columns) {
    super();
    this.matrix = matrix;
    this.rows = rows;
    this.columns = columns;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/column.js":
/*!****************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/column.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixColumnView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixColumnView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkColumnIndex"])(matrix, column);
    super(matrix, matrix.rows, 1);
    this.column = column;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.column, value);
    return this;
  }

  get(rowIndex) {
    return this.matrix.get(rowIndex, this.column);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/columnSelection.js":
/*!*************************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/columnSelection.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixColumnSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixColumnSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, columnIndices) {
    columnIndices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkColumnIndices"])(matrix, columnIndices);
    super(matrix, matrix.rows, columnIndices.length);
    this.columnIndices = columnIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/flipColumn.js":
/*!********************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/flipColumn.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixFlipColumnView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");


class MatrixFlipColumnView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.rows, matrix.columns);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/flipRow.js":
/*!*****************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/flipRow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixFlipRowView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");


class MatrixFlipRowView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.rows, matrix.columns);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/index.js ***!
  \***************************************************/
/*! exports provided: MatrixColumnView, MatrixColumnSelectionView, MatrixFlipColumnView, MatrixFlipRowView, MatrixRowView, MatrixRowSelectionView, MatrixSelectionView, MatrixSubView, MatrixTransposeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "./node_modules/ml-matrix/src/views/column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return _column__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _columnSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnSelection */ "./node_modules/ml-matrix/src/views/columnSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return _columnSelection__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _flipColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipColumn */ "./node_modules/ml-matrix/src/views/flipColumn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return _flipColumn__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _flipRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flipRow */ "./node_modules/ml-matrix/src/views/flipRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return _flipRow__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row */ "./node_modules/ml-matrix/src/views/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return _row__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _rowSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rowSelection */ "./node_modules/ml-matrix/src/views/rowSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return _rowSelection__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ "./node_modules/ml-matrix/src/views/selection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return _selection__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub */ "./node_modules/ml-matrix/src/views/sub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return _sub__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transpose */ "./node_modules/ml-matrix/src/views/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return _transpose__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "./node_modules/ml-matrix/src/views/row.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/row.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixRowView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixRowView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRowIndex"])(matrix, row);
    super(matrix, 1, matrix.columns);
    this.row = row;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.row, columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.row, columnIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/rowSelection.js":
/*!**********************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/rowSelection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixRowSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixRowSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, rowIndices) {
    rowIndices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRowIndices"])(matrix, rowIndices);
    super(matrix, rowIndices.length, matrix.columns);
    this.rowIndices = rowIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/selection.js":
/*!*******************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/selection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, rowIndices, columnIndices) {
    let indices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkIndices"])(matrix, rowIndices, columnIndices);
    super(matrix, indices.row.length, indices.column.length);
    this.rowIndices = indices.row;
    this.columnIndices = indices.column;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
    );
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/sub.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/sub.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixSubView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");




class MatrixSubView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, startRow, endRow, startColumn, endColumn) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRange"])(matrix, startRow, endRow, startColumn, endColumn);
    super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
    this.startRow = startRow;
    this.startColumn = startColumn;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.startRow + rowIndex,
      this.startColumn + columnIndex,
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.startRow + rowIndex,
      this.startColumn + columnIndex,
    );
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/views/transpose.js":
/*!*******************************************************!*\
  !*** ./node_modules/ml-matrix/src/views/transpose.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixTransposeView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/ml-matrix/src/views/base.js");


class MatrixTransposeView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.columns, matrix.rows);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(columnIndex, rowIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(columnIndex, rowIndex);
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js":
/*!************************************************************!*\
  !*** ./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperMatrix1D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");


class WrapperMatrix1D extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(data, options = {}) {
    const { rows = 1 } = options;

    if (data.length % rows !== 0) {
      throw new Error('the data length is not divisible by the number of rows');
    }
    super();
    this.rows = rows;
    this.columns = data.length / rows;
    this.data = data;
  }

  set(rowIndex, columnIndex, value) {
    let index = this._calculateIndex(rowIndex, columnIndex);
    this.data[index] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    let index = this._calculateIndex(rowIndex, columnIndex);
    return this.data[index];
  }

  _calculateIndex(row, column) {
    return row * this.columns + column;
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js":
/*!************************************************************!*\
  !*** ./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperMatrix2D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "./node_modules/ml-matrix/src/matrix.js");


class WrapperMatrix2D extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(data) {
    super();
    this.data = data;
    this.rows = data.length;
    this.columns = data[0].length;
  }

  set(rowIndex, columnIndex, value) {
    this.data[rowIndex][columnIndex] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.data[rowIndex][columnIndex];
  }
}


/***/ }),

/***/ "./node_modules/ml-matrix/src/wrap/wrap.js":
/*!*************************************************!*\
  !*** ./node_modules/ml-matrix/src/wrap/wrap.js ***!
  \*************************************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WrapperMatrix1D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js");
/* harmony import */ var _WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrapperMatrix2D */ "./node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



function wrap(array, options) {
  if (Array.isArray(array)) {
    if (array[0] && Array.isArray(array[0])) {
      return new _WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"](array);
    } else {
      return new _WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_0__["default"](array, options);
    }
  } else {
    throw new Error('the argument is not an array');
  }
}


/***/ }),

/***/ "./node_modules/tinyqueue/index.js":
/*!*****************************************!*\
  !*** ./node_modules/tinyqueue/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TinyQueue; });

class TinyQueue {
    constructor(data = [], compare = defaultCompare) {
        this.data = data;
        this.length = this.data.length;
        this.compare = compare;

        if (this.length > 0) {
            for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
        }
    }

    push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    }

    pop() {
        if (this.length === 0) return undefined;

        const top = this.data[0];
        const bottom = this.data.pop();
        this.length--;

        if (this.length > 0) {
            this.data[0] = bottom;
            this._down(0);
        }

        return top;
    }

    peek() {
        return this.data[0];
    }

    _up(pos) {
        const {data, compare} = this;
        const item = data[pos];

        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            const current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    }

    _down(pos) {
        const {data, compare} = this;
        const halfLength = this.length >> 1;
        const item = data[pos];

        while (pos < halfLength) {
            let left = (pos << 1) + 1;
            let best = data[left];
            const right = left + 1;

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}


/***/ }),

/***/ "./src/ar.worker.js":
/*!**************************!*\
  !*** ./src/ar.worker.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Engine} = __webpack_require__(/*! ./engine.js */ "./src/engine.js");

let _engine = null;

onmessage = (msg) => {
  const {data} = msg;
  if (data.type === 'setup') {
    const {options} = data;
    _engine = new Engine(options.inputWidth, options.inputHeight);
    postMessage({
      type: 'setupDone',
      projectionMatrix: _engine.getProjectionMatrix()
    });
  }
  else if (data.type === 'addImageTarget') {
    const {options} = data;
    _engine.addImageTarget(data.options);
    postMessage({type: 'addImageTargetDone'});
  }
  else if (data.type === 'process') {
    const {options} = data;
    const result = _engine.process(options.queryImageData);
    postMessage({
      type: 'processDone',
      result: result
    });
  }
};


/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {ImageTarget} = __webpack_require__(/*! ./image-target/index.js */ "./src/image-target/index.js");

class Engine {
  constructor(inputWidth, inputHeight) {
    this.inputWidth = inputWidth;
    this.inputHeight = inputHeight;
    this._imageTargets = [];

    const near = 10;
    const far = 1000;
    const fovy = 45.0 * Math.PI / 180; // 45 in radian. field of view vertical
    const f = (inputHeight/2) / Math.tan(fovy/2);
    //     [fx  s cx]
    // K = [ 0 fx cy]
    //     [ 0  0  1]
    this._projectionTransform = [
      [f, 0, inputWidth / 2],
      [0, f, inputHeight / 2],
      [0, 0, 1]
    ];
    console.log("project transform", JSON.stringify(this._projectionTransform));

    this._projectionMatrix = _glProjectionMatrix({
      projectionTransform: this._projectionTransform,
      width: inputWidth - 1, // -1 is not necessary?
      height: inputHeight - 1,
      near: near,
      far: far,
    });
  }

  getProjectionMatrix() {
    return this._projectionMatrix;
  }

  addImageTarget(options) {
    const imageTarget = new ImageTarget(Object.assign({projectionTransform: this._projectionTransform}, options));
    this._imageTargets.push(imageTarget);
  }

  process(queryImageData) {
    const queryImage = {data: queryImageData, width: this.inputWidth, height: this.inputHeight};
    const result = [];
    this._imageTargets.forEach((imageTarget) => {
      const modelViewTransform = imageTarget.process(queryImage);
      const worldMatrix = modelViewTransform === null? null: _glModelViewMatrix({modelViewTransform});

      //console.log("worldMatrix", worldMatrix);

      result.push({
        worldMatrix: worldMatrix
      })
    });
    return result;
  }
}

// build openGL modelView matrix
const _glModelViewMatrix = ({modelViewTransform}) => {
  const openGLWorldMatrix = [
    modelViewTransform[0][0], -modelViewTransform[1][0], -modelViewTransform[2][0], 0,
    modelViewTransform[0][1], -modelViewTransform[1][1], -modelViewTransform[2][1], 0,
    modelViewTransform[0][2], -modelViewTransform[1][2], -modelViewTransform[2][2], 0,
    modelViewTransform[0][3], -modelViewTransform[1][3], -modelViewTransform[2][3], 1
  ];
  return openGLWorldMatrix;
}

// build openGL projection matrix
const _glProjectionMatrix = ({projectionTransform, width, height, near, far}) => {
  const proj = [
    [2 * projectionTransform[0][0] / width, 0, -(2 * projectionTransform[0][2] / width - 1), 0],
    [0, 2 * projectionTransform[1][1] / height, -(2 * projectionTransform[1][2] / height - 1), 0],
    [0, 0, -(far + near) / (far - near), -2 * far * near / (far - near)],
    [0, 0, -1, 0]
  ];

  const projMatrix = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      projMatrix.push(proj[j][i]);
    }
  }
  return projMatrix;
}

module.exports = {
  Engine,
}



/***/ }),

/***/ "./src/image-target/icp/estimate_homography.js":
/*!*****************************************************!*\
  !*** ./src/image-target/icp/estimate_homography.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Matrix, inverse} = __webpack_require__(/*! ml-matrix */ "./node_modules/ml-matrix/src/index.js");
const {applyModelViewProjectionTransform, buildModelViewProjectionTransform, computeScreenCoordiate} = __webpack_require__(/*! ./utils.js */ "./src/image-target/icp/utils.js");

// build world matrix with list of matching worldCoords|screenCoords
//
// Step 1. estimate homography with list of pairs
// Ref: https://www.uio.no/studier/emner/matnat/its/TEK5030/v19/lect/lecture_4_3-estimating-homographies-from-feature-correspondences.pdf  (Basic homography estimation from points)
//
// Step 2. decompose homography into rotation and translation matrixes (i.e. world matrix)
// Ref: can anyone provide reference?
const estimateHomography = ({screenCoords, worldCoords, projectionTransform}) => {
  const num = screenCoords.length;
  const AData = [];
  const BData = [];
  for (let j = 0; j < num; j++) {
    const row1 = [
      worldCoords[j].x,
      worldCoords[j].y,
      1,
      0,
      0,
      0,
      -(worldCoords[j].x * screenCoords[j].x),
      -(worldCoords[j].y * screenCoords[j].x),
    ];
    const row2 = [
      0,
      0,
      0,
      worldCoords[j].x,
      worldCoords[j].y,
      1,
      -(worldCoords[j].x * screenCoords[j].y),
      -(worldCoords[j].y * screenCoords[j].y),
    ];
    AData.push(row1);
    AData.push(row2);

    BData.push([screenCoords[j].x]);
    BData.push([screenCoords[j].y]);
  }

  const A = new Matrix(AData);
  const B = new Matrix(BData);
  const AT = A.transpose();
  const ATA = AT.mmul(A);
  const ATB = AT.mmul(B);
  const ATAInv = inverse(ATA);
  const C = ATAInv.mmul(ATB).to1DArray();

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    for (let j = 0; j < A.data.length; j++) {
      for (let i = 0; i < A.data[j].length; i++) {
        if (!window.cmp(A.data[j][i], window.debugMatch.matA[j][i], 0.1)) {
          console.log("INCORRECT A", j, i, A.data[j][i], window.debugMatch.matA[j][i]);
        }
      }
    }
    for (let j = 0; j < C.length; j++) {
      if (!window.cmp(C[j], window.debugMatch.matC[j], 0.001)) {
        console.log("INCORRECT C", j, C[j], window.debugMatch.matC[j]);
      }
    }
  }

  const H = new Matrix([
    [C[0], C[1], C[2]],
    [C[3], C[4], C[5]],
    [C[6], C[7], 1]
  ]);

  const K = new Matrix(projectionTransform);
  const KInv = inverse(K);

  const _KInvH = KInv.mmul(H);
  const KInvH = _KInvH.to1DArray();

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dv = window.debugMatch.v;
    const dt = window.debugMatch.t;
    const dKInvH = [
      [dv[0][0],dv[1][0],dt[0]],
      [dv[0][1],dv[1][1],dt[1]],
      [dv[0][2],dv[1][2],dt[2]]
    ];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if(!window.cmp(_KInvH.data[i][j], dKInvH[i][j])) {
          console.log("INCORRECT KInvH", i, j, KInvH.data, dKInvH);
          break;
        }
      }
    }
  }

  const norm1 = Math.sqrt( KInvH[0] * KInvH[0] + KInvH[3] * KInvH[3] + KInvH[6] * KInvH[6]);
  const norm2 = Math.sqrt( KInvH[1] * KInvH[1] + KInvH[4] * KInvH[4] + KInvH[7] * KInvH[7]);
  const tnorm = (norm1 + norm2) / 2;

  const rotate = [];
  rotate[0] = KInvH[0] / norm1;
  rotate[3] = KInvH[3] / norm1;
  rotate[6] = KInvH[6] / norm1;

  rotate[1] = KInvH[1] / norm2;
  rotate[4] = KInvH[4] / norm2;
  rotate[7] = KInvH[7] / norm2;

  rotate[2] = rotate[3] * rotate[7] - rotate[6] * rotate[4];
  rotate[5] = rotate[6] * rotate[1] - rotate[0] * rotate[7];
  rotate[8] = rotate[0] * rotate[4] - rotate[1] * rotate[3];

  const norm3 = Math.sqrt(rotate[2] * rotate[2] + rotate[5] * rotate[5] + rotate[8] * rotate[8]);
  rotate[2] /= norm3;
  rotate[5] /= norm3;
  rotate[8] /= norm3;

  // TODO: artoolkit has check_rotation() that somehow switch the rotate vector. not sure what that does. Can anyone advice?
  // https://github.com/artoolkitx/artoolkit5/blob/5bf0b671ff16ead527b9b892e6aeb1a2771f97be/lib/SRC/ARICP/icpUtil.c#L215

  const tran = []
  tran[0] = KInvH[2] / tnorm;
  tran[1] = KInvH[5] / tnorm;
  tran[2] = KInvH[8] / tnorm;

  let initialModelViewTransform = [
    [rotate[0], rotate[1], rotate[2], tran[0]],
    [rotate[3], rotate[4], rotate[5], tran[1]],
    [rotate[6], rotate[7], rotate[8], tran[2]]
  ];

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    console.log("initialModelViewTransform", initialModelViewTransform, window.debugMatch.initMatXw2Xc);
    for (let j = 0; j < initialModelViewTransform.length; j++) {
      for (let i = 0; i < initialModelViewTransform[j].length; i++) {
        if (!window.cmp(initialModelViewTransform[j][i], window.debugMatch.initMatXw2Xc[j][i], 0.0001)) {
          console.log("INCORRECT initialModelViewTransform", j, i, initialModelViewTransform[j][i], window.debugMatch.initMatXw2Xc[j][i]);
        }
      }
    }
  }

  return initialModelViewTransform;
};

module.exports = {
  estimateHomography
}


/***/ }),

/***/ "./src/image-target/icp/refine_homography.js":
/*!***************************************************!*\
  !*** ./src/image-target/icp/refine_homography.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Matrix, inverse} = __webpack_require__(/*! ml-matrix */ "./node_modules/ml-matrix/src/index.js");
const {getProjectionTransform, applyModelViewProjectionTransform, buildModelViewProjectionTransform, computeScreenCoordiate} = __webpack_require__(/*! ./utils.js */ "./src/image-target/icp/utils.js");

// TODO: the error computation seems problematic. should it be relative to the size of detection?
//       now the values are hardcoded, e.g. K2_Factor = 4

const K2_FACTOR = 4.0;
const ICP_MAX_LOOP = 10;
const ICP_BREAK_LOOP_ERROR_THRESH = 0.1;
const ICP_BREAK_LOOP_ERROR_RATIO_THRESH = 0.99;
const ICP_BREAK_LOOP_ERROR_THRESH2 = 4.0;

// ICP iteration with points
// Can someone provide theoretical reference?
const refineHomography = ({initialModelViewTransform, projectionTransform, worldCoords, screenCoords, isRobustMode, inlierProb}) => {
  let modelViewTransform = initialModelViewTransform;

  let err0 = 0.0;
  let err1 = 0.0;
  for (let l = 0; l <= ICP_MAX_LOOP; l++) {

    const modelViewProjectionTransform = buildModelViewProjectionTransform(projectionTransform, modelViewTransform);

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      //console.log("projectionTransform", projectionTransform);
      if (!window.cmp2DArray(modelViewTransform, window.debugMatch.icp_matXw2Xc[l])) {
        console.log("INCORRECT ICP modelViewTransform", l, modelViewTransform, window.debugMatch.icp_matXw2Xc[l]);
      }

      if (!window.cmp2DArray(modelViewProjectionTransform, window.debugMatch.icp_matXw2U[l])) {
        console.log("INCORRECT ICP modelViewProjectionTransform", l, modelViewProjectionTransform, window.debugMatch.icp_matXw2U[l]);
      }
    }

    const E = [];
    const dxs = [];
    const dys = [];
    for (let n = 0; n < worldCoords.length; n++) {
      const u = computeScreenCoordiate(modelViewProjectionTransform, worldCoords[n].x, worldCoords[n].y, worldCoords[n].z);
      const dx = screenCoords[n].x - u.x;
      const dy = screenCoords[n].y - u.y;
      dxs.push(dx);
      dys.push(dy);
      E.push(dx * dx + dy * dy);
    }

    if (typeof window !== 'undefined' && window.DEBUG_TRACK && isRobustMode) {
      const dr = window.debugMatch.icp_robust[window.debug.icprobustIndex][l];
      //console.log("icp E", E, dr.E);
    }

    let K2; // robust mode only
    err1 = 0.0;
    if (isRobustMode) {
      const inlierNum = Math.max(3, Math.floor(worldCoords.length * inlierProb) - 1);
      const E2 = []; // for robust mode only
      for (let n = 0; n < worldCoords.length; n++) {
        E2.push(E[n]);
      }
      E2.sort((a, b) => {return a-b;});

      if (typeof window !== 'undefined' && window.DEBUG_TRACK && isRobustMode) {
        const dr = window.debugMatch.icp_robust[window.debug.icprobustIndex][l];
        //console.log("icp E", E2, dr.E2);
      }

      K2 = Math.max(E2[inlierNum] * K2_FACTOR, 16.0);
      for (let n = 0; n < worldCoords.length; n++) {
        if (E2[n] > K2) err1 += K2/ 6;
        else err1 +=  K2/6.0 * (1.0 - (1.0-E2[n]/K2)*(1.0-E2[n]/K2)*(1.0-E2[n]/K2));
      }
    } else {
      for (let n = 0; n < worldCoords.length; n++) {
        err1 += E[n];
      }
    }
    //console.log("err1 before", err1, err1/worldCoords.length);
    err1 /= worldCoords.length;

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      //if (!window.cmp(err1, window.debugMatch.icp_err1[l])) {
      //  console.log("INCORRECT ICP err1", l, err1, window.debugMatch.icp_err1[l]);
      //}
    }

    if (err1 < ICP_BREAK_LOOP_ERROR_THRESH) break;
    if (l > 0 && err1 < ICP_BREAK_LOOP_ERROR_THRESH2 && err1/err0 > ICP_BREAK_LOOP_ERROR_RATIO_THRESH) break;
    if (l === ICP_MAX_LOOP) break;

    err0 = err1;

    const dU = [];
    const allJ_U_S = [];
    for (let n = 0; n < worldCoords.length; n++) {
      if (isRobustMode && E[n] > K2) {
        continue;
      }

      const J_U_S = _getJ_U_S({modelViewProjectionTransform, modelViewTransform, projectionTransform, worldCoord: worldCoords[n]});

      if (isRobustMode) {
        const W = (1.0 - E[n]/K2)*(1.0 - E[n]/K2);

        if (typeof window !== 'undefined' && window.DEBUG_TRACK && isRobustMode) {
          const dr = window.debugMatch.icp_robust[window.debug.icprobustIndex][l];
          //console.log("icp W", W, dr.W);
        }

        for (let j = 0; j < 2; j++) {
          for (let i = 0; i < 6; i++) {
            J_U_S[j][i] *= W;
          }
        }
        dU.push([dxs[n] * W]);
        dU.push([dys[n] * W]);
      } else {
        dU.push([dxs[n]]);
        dU.push([dys[n]]);
      }

      //console.log("J_U_S", J_U_S, debugContent.icp_J_U_S[l][n]);
      for (let i = 0; i < J_U_S.length; i++) {
        allJ_U_S.push(J_U_S[i]);
      }
    }

    if (typeof window !== 'undefined' && window.DEBUG_TRACK && isRobustMode) {
      const dr = window.debugMatch.icp_robust[window.debug.icprobustIndex][l];
      //console.log("icp du", dU, dr.dU);
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      if (!window.cmpArray(dU, window.debugMatch.icp_dU[l], 0.001)) {
        console.log("INCORRECT ICP dU", l, dU, window.debugMatch.icp_dU[l]);
      }
    }
    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dJUS = [];
      for (let i = 0; i < window.debugMatch.icp_J_U_S[l].length; i++) {
        dJUS.push(window.debugMatch.icp_J_U_S[l][i][0]);
        dJUS.push(window.debugMatch.icp_J_U_S[l][i][1]);
      }

      if (!window.cmp2DArray(allJ_U_S, dJUS, 0.001)) {
        console.log("INCORRECT ICP J_U_S", l, allJ_U_S, dJUS);
      }
    }

    const dS = _getDeltaS({dU, J_U_S: allJ_U_S});
    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      if (!window.cmpArray(dS, window.debugMatch.icp_dS[l], 0.001)) {
        console.log("INCORRECT ICP dS", l, dS, window.debugMatch.icp_dS[l]);
      }
    }

    if (dS === null) break;
    modelViewTransform = _updateModelViewTransform({modelViewTransform, dS});
  }
  return {modelViewTransform, err: err1};
}

_updateModelViewTransform = ({modelViewTransform, dS}) => {
  const q = [];
  let ra = dS[0] * dS[0] + dS[1] * dS[1] + dS[2] * dS[2];
  if( ra < 0.000001 ) {
    q[0] = 1.0;
    q[1] = 0.0;
    q[2] = 0.0;
    q[3] = 0.0;
  } else {
    ra = Math.sqrt(ra);
    q[0] = dS[0] / ra;
    q[1] = dS[1] / ra;
    q[2] = dS[2] / ra;
    q[3] = ra;
  }
  q[4] = dS[3];
  q[5] = dS[4];
  q[6] = dS[5];

  const cra = Math.cos(q[3]);
  const one_cra = 1.0 - cra;
  const sra = Math.sin(q[3]);
  const mat = [[],[],[]];

  mat[0][0] = q[0]*q[0]*one_cra + cra;
  mat[0][1] = q[0]*q[1]*one_cra - q[2]*sra;
  mat[0][2] = q[0]*q[2]*one_cra + q[1]*sra;
  mat[0][3] = q[4];
  mat[1][0] = q[1]*q[0]*one_cra + q[2]*sra;
  mat[1][1] = q[1]*q[1]*one_cra + cra;
  mat[1][2] = q[1]*q[2]*one_cra - q[0]*sra;
  mat[1][3] = q[5];
  mat[2][0] = q[2]*q[0]*one_cra - q[1]*sra;
  mat[2][1] = q[2]*q[1]*one_cra + q[0]*sra;
  mat[2][2] = q[2]*q[2]*one_cra + cra;
  mat[2][3] = q[6];

  const mat2 = [[],[],[]];
  for (let j = 0; j < 3; j++ ) {
    for (let i = 0; i < 4; i++ ) {
      mat2[j][i] = modelViewTransform[j][0] * mat[0][i]
                   + modelViewTransform[j][1] * mat[1][i]
                   + modelViewTransform[j][2] * mat[2][i];
    }
    mat2[j][3] += modelViewTransform[j][3];
  }
  return mat2;
}

_getDeltaS = ({dU, J_U_S}) => {
  const J = new Matrix(J_U_S);
  const U = new Matrix(dU);

  const JT = J.transpose();
  const JTJ = JT.mmul(J);
  const JTU = JT.mmul(U);

  let JTJInv;
  try {
    JTJInv = inverse(JTJ);
  } catch (e) {
    return null;
  }

  const S = JTJInv.mmul(JTU);
  return S.to1DArray();
}

_getJ_U_S = ({modelViewProjectionTransform, modelViewTransform, projectionTransform, worldCoord}) => {
  const T = modelViewTransform;
  const {x, y, z} = worldCoord;

  const u = applyModelViewProjectionTransform(modelViewProjectionTransform, x, y, z);
  //console.log("u", u);
  //if (Math.abs(u.z) < 0.000001) return null;

  const z2 = u.z * u.z;
  const J_U_Xc = [[],[]];
  J_U_Xc[0][0] = (projectionTransform[0][0] * u.z - projectionTransform[2][0] * u.x) / z2;
  J_U_Xc[0][1] = (projectionTransform[0][1] * u.z - projectionTransform[2][1] * u.x) / z2;
  J_U_Xc[0][2] = (projectionTransform[0][2] * u.z - projectionTransform[2][2] * u.x) / z2;
  J_U_Xc[1][0] = (projectionTransform[1][0] * u.z - projectionTransform[2][0] * u.y) / z2;
  J_U_Xc[1][1] = (projectionTransform[1][1] * u.z - projectionTransform[2][1] * u.y) / z2;
  J_U_Xc[1][2] = (projectionTransform[1][2] * u.z - projectionTransform[2][2] * u.y) / z2;

  const J_Xc_S = [
    [T[0][2] * y - T[0][1] * z, T[0][0] * z - T[0][2] * x, T[0][1] * x - T[0][0] * y, T[0][0], T[0][1], T[0][2]],
    [T[1][2] * y - T[1][1] * z, T[1][0] * z - T[1][2] * x, T[1][1] * x - T[1][0] * y, T[1][0], T[1][1], T[1][2]],
    [T[2][2] * y - T[2][1] * z, T[2][0] * z - T[2][2] * x, T[2][1] * x - T[2][0] * y, T[2][0], T[2][1], T[2][2]],
  ];

  //console.log("J_Xc_S", J_Xc_S, '--vs--', '0.', debugContent.icp_J_Xc_S[0], '1.', debugContent.icp_J_Xc_S[1]);
  //console.log("J_U_Xc", J_U_Xc, '--vs--', '0.', debugContent.icp_J_U_Xc[0], '1.', debugContent.icp_J_U_Xc[1]);

  const J_U_S = [[], []];
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 6; i++) {
      J_U_S[j][i] = 0.0;
      for (let k = 0; k < 3; k++ ) {
        J_U_S[j][i] += J_U_Xc[j][k] * J_Xc_S[k][i];
      }
    }
  }
  return J_U_S;
}

module.exports = {
  refineHomography
}


/***/ }),

/***/ "./src/image-target/icp/utils.js":
/*!***************************************!*\
  !*** ./src/image-target/icp/utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
const getProjectionTransform = () => {
  // TODO: non-hardcoded camera matrix?
  //     [fx  s cx]
  // K = [ 0 fx cy]
  //     [ 0  0  1]
  const KData = [
    [ 304.68270459335025, 0, 161.7239532470703],
    [ 0, 303.2606118015537, 118.80326843261719],
    [ 0, 0, 1.0]
  ];
  return KData;
}
*/

const buildModelViewProjectionTransform = (projectionTransform, modelViewTransform) => {
  const modelViewProjectionTransform = [[],[],[]];
  for (let j = 0; j < 3; j++ ) {
    for (let i = 0; i < 4; i++) {
      modelViewProjectionTransform[j][i] = projectionTransform[j][0] * modelViewTransform[0][i]
                                         + projectionTransform[j][1] * modelViewTransform[1][i]
                                         + projectionTransform[j][2] * modelViewTransform[2][i];
    }
  }
  return modelViewProjectionTransform;
}

const applyModelViewProjectionTransform = (modelViewProjectionTransform, x, y, z) => {
  const ux = modelViewProjectionTransform[0][0] * x + modelViewProjectionTransform[0][1] * y
     + modelViewProjectionTransform[0][2] * z + modelViewProjectionTransform[0][3];
  const uy = modelViewProjectionTransform[1][0] * x + modelViewProjectionTransform[1][1] * y
     + modelViewProjectionTransform[1][2] * z + modelViewProjectionTransform[1][3];
  const uz  = modelViewProjectionTransform[2][0] * x + modelViewProjectionTransform[2][1] * y
     + modelViewProjectionTransform[2][2] * z + modelViewProjectionTransform[2][3];
  return {x: ux, y: uy, z: uz};
}

const computeScreenCoordiate = (modelViewProjectionTransform, x, y, z) => {
  const {x: ux, y: uy, z: uz} = applyModelViewProjectionTransform(modelViewProjectionTransform, x, y, z);
  //console.log("x, y, z", ux, uy, uz);
  if( Math.abs(uz) < 0.000001 ) return null;
  return {x: ux/uz, y: uy/uz};
}

const screenToMarkerCoordinate = (modelViewProjectionTransform, sx, sy) => {
  const c11 = modelViewProjectionTransform[2][0] * sx - modelViewProjectionTransform[0][0];
  const c12 = modelViewProjectionTransform[2][1] * sx - modelViewProjectionTransform[0][1];
  const c21 = modelViewProjectionTransform[2][0] * sy - modelViewProjectionTransform[1][0];
  const c22 = modelViewProjectionTransform[2][1] * sy - modelViewProjectionTransform[1][1];
  const b1  = modelViewProjectionTransform[0][3] - modelViewProjectionTransform[2][3] * sx;
  const b2  = modelViewProjectionTransform[1][3] - modelViewProjectionTransform[2][3] * sy;

  const m = c11 * c22 - c12 * c21;
  return {
    x: (c22 * b1 - c12 * b2) / m,
    y: (c11 * b2 - c21 * b1) / m
  }
}

module.exports = {
  screenToMarkerCoordinate,
  //getProjectionTransform,
  buildModelViewProjectionTransform,
  applyModelViewProjectionTransform,
  computeScreenCoordiate
}


/***/ }),

/***/ "./src/image-target/image-list.js":
/*!****************************************!*\
  !*** ./src/image-target/image-list.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {resize} = __webpack_require__(/*! ./utils/images.js */ "./src/image-target/utils/images.js");

const DEFAULT_DPI = 72;
const MIN_IMAGE_PIXEL_SIZE = 28;

// return list of {data, width, height, dpi}
const buildImageList = (inputImage) => {
  const dpi = DEFAULT_DPI;
  const minDpi = Math.floor(1.0 * MIN_IMAGE_PIXEL_SIZE / Math.min(inputImage.width, inputImage.height) * dpi * 1000) / 1000;
  const dpiList = [];

  let c = minDpi;
  while (true) {
    dpiList.push(c);
    c *= Math.pow(2.0, 1.0/3.0);
    c = Math.fround(c); // can remove this line in production. trying to reproduce the same result as artoolkit, which use float.
    if (c >= dpi * 0.95) {
      c = dpi;
      break;
    }
  }
  dpiList.push(c);
  dpiList.reverse();

  const imageList = []; // list of {data: [width x height], width, height}
  for (let i = 0; i < dpiList.length; i++) {
    const w = inputImage.width * dpiList[i] / dpi;
    const h = inputImage.height * dpiList[i] / dpi;
    imageList.push(Object.assign(resize({image: inputImage, ratio: dpiList[i]/dpi}), {dpi: dpiList[i]}));
  }

  //return [imageList[0]];

  return imageList;
}

module.exports = {
  buildImageList
}


/***/ }),

/***/ "./src/image-target/index.js":
/*!***********************************!*\
  !*** ./src/image-target/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {resize} = __webpack_require__(/*! ./utils/images.js */ "./src/image-target/utils/images.js");
const {buildImageList} = __webpack_require__(/*! ./image-list.js */ "./src/image-target/image-list.js");
const {Matcher, compileMatching} = __webpack_require__(/*! ./matching/matcher.js */ "./src/image-target/matching/matcher.js");
const {Tracker, compileTracking} = __webpack_require__(/*! ./tracking/tracker.js */ "./src/image-target/tracking/tracker.js");
const {estimateHomography} = __webpack_require__(/*! ./icp/estimate_homography.js */ "./src/image-target/icp/estimate_homography.js");
const {refineHomography} = __webpack_require__(/*! ./icp/refine_homography */ "./src/image-target/icp/refine_homography.js");

class ImageTarget {
  constructor(options) {
    const {type, input, projectionTransform} = options;
    let imageList;
    let targetImage;
    let matchingData;
    let trackingData;

    if (type === 'compiled') {
      targetImage = input.targetImage;
      imageList = input.imageList;
      matchingData = input.matchingData;
      trackingData = input.trackingData;
      //imageList = buildImageList(targetImage);
    } else {
      targetImage = input;
      imageList = buildImageList(targetImage);
      matchingData = compileMatching({imageList});
      trackingData = compileTracking({imageList});
    }
    console.log("image target consdtructor", imageList, matchingData, trackingData);

    this.projectionTransform = projectionTransform;
    this.matcher = new Matcher(matchingData);
    this.tracker = new Tracker(trackingData, imageList, projectionTransform);

    this.isTracking = false;
  }

  process(queryImage) {
    const processImage = Object.assign(queryImage, {dpi: 72});

    if (!this.isTracking) {
      const matchResult = this.matcher.match(processImage);
      //console.log("match result", matchResult);
      if (matchResult === null) return null;

      const {screenCoords, worldCoords} = matchResult;
      const initialModelViewTransform = estimateHomography({screenCoords, worldCoords, projectionTransform: this.projectionTransform});
      console.log("initial matched model view transform", initialModelViewTransform);

      if (initialModelViewTransform === null) return null;

      // TODO: maybe don't this refineHomography. result seems worse when the detected size is big
      const {modelViewTransform: refinedModelViewTransform, err} = refineHomography({initialModelViewTransform, projectionTransform: this.projectionTransform, worldCoords, screenCoords});

      if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
        console.log("refine err", err);
        console.log("refinedModelViewTransform", refinedModelViewTransform, window.debugMatch.camPose);
        if (!window.cmp2DArray(refinedModelViewTransform, window.debugMatch.camPose, 0.0001)) {
          console.log("INCORRECT ICP refinedModelViewTransform", refinedModelViewTransform, window.debugMatch.camPose);
        }
      }
      //console.log("initial refined model view transform", refinedModelViewTransform);

      this.isTracking = true;
      this.tracker.detected(refinedModelViewTransform);
    }

    if (this.isTracking) {
      this.tracker.track(processImage);
    }

    const updatedModelViewTransform = this.tracker.getLatest();
    //console.log("tracking updated model view transform", updatedModelViewTransform);
    if (updatedModelViewTransform === null) {
      this.isTracking = false;
    }

    return updatedModelViewTransform;
    //return initialModelViewTransform;
    //return refinedModelViewTransform;
  }
}

const compile = (targetImage) => {
  const imageList = buildImageList(targetImage);

  var _start = new Date().getTime();
  const trackingData = compileTracking({imageList});
  //const trackingData = null;
  var _end = new Date().getTime();
  console.log('exec time compile tracking: ', _start, _end, _end - _start);

  const matchingData = compileMatching({imageList});
  //const matchingData = null;
  return {targetImage, matchingData, trackingData, imageList};
  //return {matchingData, trackingData};
}

module.exports = {
  ImageTarget,
  compile
}


/***/ }),

/***/ "./src/image-target/matching/detector.js":
/*!***********************************************!*\
  !*** ./src/image-target/matching/detector.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {upsampleBilinear, downsampleBilinear} = __webpack_require__(/*! ../utils/images.js */ "./src/image-target/utils/images.js");

const MAX_SUBPIXEL_DISTANCE_SQR = 3 * 3;
const LAPLACIAN_SQR_THRESHOLD = 3 * 3;
const EDGE_THRESHOLD = 4.0;
const EDGE_HESSIAN_THRESHOLD = ((EDGE_THRESHOLD+1) * (EDGE_THRESHOLD+1) / EDGE_THRESHOLD);
const MAX_FEATURE_POINTS = 500;
const PRUNE_FEATURES_NUM_BUCKETS = 10; // per dimension

const ORIENTATION_NUM_BINS = 36;
const ORIENTATION_GAUSSIAN_EXPANSION_FACTOR = 3.0;
const ORIENTATION_REGION_EXPANSION_FACTOR = 1.5;
const ORIENTATION_SMOOTHING_ITERATIONS = 5;
const ORIENTATION_PEAK_THRESHOLD = 0.8;

const ONE_OVER_2PI = 0.159154943091895;

// Detect minima and maximum in Laplacian images
const detect = ({gaussianPyramid, dogPyramid}) => {
  const originalWidth = dogPyramid.images[0].width;
  const originalHeight = dogPyramid.images[0].height;

  const mK = Math.pow(2, 1.0 / (gaussianPyramid.numScalesPerOctaves-1));

  const featurePoints = [];

  for (let k = 1; k < dogPyramid.images.length - 1; k++) {
    let image0 = dogPyramid.images[k-1];
    let image1 = dogPyramid.images[k];
    let image2 = dogPyramid.images[k+1];

    const octave = Math.floor(k / dogPyramid.numScalesPerOctaves);
    const scale = k % dogPyramid.numScalesPerOctaves;

    let hasUpsample = false;
    let hasPadOneWidth = false;
    let hasPadOneHeight = false;

    if ( Math.floor(image0.width/2) == image1.width) {
      image0 = downsampleBilinear({image: image0});
    }

    if ( Math.floor(image1.width/2) == image2.width) {
      hasUpsample = true;
      hasPadOneWidth = image1.width % 2 === 1;
      hasPadOneHeight = image1.height % 2 === 1;
      image2 = upsampleBilinear({image: image2, padOneWidth: hasPadOneWidth, padOneHeight: hasPadOneHeight});
    }

    const width = image1.width;
    const height = image1.height;

    const neighbours = [
      0, -1, 1,
      -image1.width, -image1.width-1, -image1.width+1,
      image1.width, image1.width-1, image1.width+1
    ];

    // In upsample image, ignore the border
    // it's possible to further pad one more line (i.e. upsacale 2x2 -> 5x5) at the end, so ignore one more line
    let startI = hasUpsample? 2: 1;
    let startJ = startI;

    // should it be "image1.width -2" ? but this yield consistent result with artoolkit
    let endI = hasUpsample? image1.width - 3: image1.width - 1;
    let endJ = hasUpsample? image1.height - 3: image1.height - 1;
    if (hasPadOneWidth) endI -= 1;
    if (hasPadOneHeight) endJ -= 1;

    for (let j = startJ; j < endJ; j++) {
      for (let i = startI; i < endI; i++) {
        const pos = j*image1.width + i;
        const v = image1.data[pos];

        if (v*v < LAPLACIAN_SQR_THRESHOLD) continue;

        // Step 1: find maxima/ minima in laplacian images

        let isMax = true;
        for (let d = 0; d < neighbours.length; d++) {
          if (v <= image0.data[pos+neighbours[d]]) {isMax = false; break};
          if (v <= image2.data[pos+neighbours[d]]) {isMax = false; break};
          if (d !== 0 && v <= image1.data[pos+neighbours[d]]) {isMax = false; break};
        }

        let isMin = true;
        for (let d = 0; d < neighbours.length; d++) {
          if (v >= image0.data[pos+neighbours[d]]) {isMin = false; break};
          if (v >= image2.data[pos+neighbours[d]]) {isMin = false; break};
          if (d !== 0 && v >= image1.data[pos+neighbours[d]]) {isMin = false; break};
        }

        if (!isMax && !isMin) continue; // extrema -> feature point

        // Step 2: sub-pixel refinement (I'm not sure what that means. Any educational ref?)

        // Compute spatial derivatives
        const dx = 0.5 * (image1.data[pos + 1] - image1.data[pos - 1]);
        const dy = 0.5 * (image1.data[pos + width] - image1.data[pos - width]);
        const dxx = image1.data[pos + 1] + image1.data[pos - 1] - 2 * image1.data[pos];
        const dyy = image1.data[pos + width] + image1.data[pos - width] - 2 * image1.data[pos];
        const dxy = 0.25 * (image1.data[pos - width -1] + image1.data[pos + width + 1] - image1.data[pos - width +1] - image1.data[pos + width - 1]);

        // Compute scale derivates
        const ds = 0.5 * (image2.data[pos] - image0.data[pos]);
        const dss = image2.data[pos] + image0.data[pos] - 2 * image1.data[pos];
        const dxs = 0.25 * ((image0.data[pos-1] - image0.data[pos+1]) + (-image2.data[pos-1] + image2.data[pos+1]));
        const dys = 0.25 * ((image0.data[pos-width] - image0.data[pos+width]) + (-image2.data[pos-width] + image2.data[pos+width]));

        // Hessian matrix
        const hessian = [
          dxx, dxy, dxs,
          dxy, dyy, dys,
          dxs, dys, dss
        ];

        // b
        const b = [
          -dx,
          -dy,
          -ds
        ];

        // Solve H * u = b;
        const u = _solveSymmetric33({A: hessian, b: b});
        if (u === null) continue; // no solution

        // If points move too much in the sub-pixel update, then the point probably unstable.
        if (u[0] * u[0] + u[1] * u[1] > MAX_SUBPIXEL_DISTANCE_SQR) continue;

        // compute edge score
        const det = (dxx * dyy) - (dxy * dxy);
        if (det === 0) continue;

        const edgeScore = (dxx + dyy) * (dxx + dyy) / det;
        if (Math.abs(edgeScore) >= EDGE_HESSIAN_THRESHOLD ) continue;

        const score = v - (b[0] * u[0] + b[1] * u[1] + b[2] * u[2]);
        if (score * score < LAPLACIAN_SQR_THRESHOLD) continue;

        // original x = x*2^n + 2^(n-1) - 0.5
        // original y = y*2^n + 2^(n-1) - 0.5
        const originalX = i * Math.pow(2, octave) + Math.pow(2, octave-1) - 0.5;
        const originalY = j * Math.pow(2, octave) + Math.pow(2, octave-1) - 0.5;

        const newX = originalX + u[0] * Math.pow(2, octave);
        const newY = originalY + u[1] * Math.pow(2, octave);
        if (newX < 0 || newX >= originalWidth || newY < 0 || newY >= originalHeight) continue;

        const spScale = Math.min(Math.max(0, scale + u[2]), dogPyramid.numScalesPerOctaves);
        const newSigma = Math.pow(mK, spScale) * (1 << octave);

        let newOctaveX = newX * (1.0 / Math.pow(2, octave)) + 0.5 * (1.0 / Math.pow(2, octave)) - 0.5;
        let newOctaveY = newY * (1.0 / Math.pow(2, octave)) + 0.5 * (1.0 / Math.pow(2, octave)) - 0.5;
        newOctaveX = Math.floor(newOctaveX + 0.5);
        newOctaveY = Math.floor(newOctaveY + 0.5);

        featurePoints.push({
          octave: octave,
          scale: scale,
          octaveX: newOctaveX,
          octaveY: newOctaveY,
          x: newX,
          y: newY,
          sigma: newSigma,
          score: score,
        })
      }
    }
  }
  if (typeof window !== 'undefined' && window.DEBUG) {
    const fps = window.debugContent.featurePoints2[window.debug.keyframeIndex];
    console.log("featurepoints2", featurePoints.length, 'vs', fps.length);
    for (let i = 0; i < fps.length; i++) {
      const fp1 = featurePoints[i];
      const fp2 = fps[i];
      //if (!window.cmpObj(fp1, fp2, ['x', 'y', 'score', 'sigma', 'spScale', 'edgeScore'])) {
      if (!window.cmpObj(fp1, fp2, ['x', 'y', 'score', 'sigma'])) {
        console.log("INCORRECT featurepoint2", fp1, fp2);
      }
    }
  }

  const prunedFeaturePoints = _pruneFeatures({featurePoints: featurePoints, width: originalWidth, height: originalHeight});

  // console.log("pruned feature points length", prunedFeaturePoints.length);

  // compute feature orientations
  const gradients = _computeGradients({pyramid: gaussianPyramid});

  const orientedFeaturePoints = [];
  for (let i = 0; i < prunedFeaturePoints.length; i++) {
    if (typeof window !== 'undefined' && window.DEBUG) {
      window.debug.orientationComputeIndex = i;
    }

    const fp = prunedFeaturePoints[i];
    const octaveSigma = fp.sigma * (1.0 / Math.pow(2, fp.octave));

    const gradient = gradients[fp.octave * gaussianPyramid.numScalesPerOctaves + fp.scale];
    const angles = _computeOrientation({x: fp.octaveX, y: fp.octaveY, sigma: octaveSigma, octave: fp.octave, scale: fp.scale, gradient: gradient});

    for (let j = 0; j < angles.length; j++) {
      orientedFeaturePoints.push(Object.assign({
        angle: angles[j]
      }, prunedFeaturePoints[i]));
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG) {
    const fps = window.debugContent.featurePoints4[window.debug.keyframeIndex];
    console.log("featurepoints4", orientedFeaturePoints.length, 'vs', fps.length);
    for (let i = 0; i < fps.length; i++) {
      const fp1 = orientedFeaturePoints[i];
      const fp2 = fps[i];
      //if (!window.cmpObj(fp1, fp2, ['x', 'y', 'score', 'sigma', 'spScale', 'edgeScore', 'angle'])) {
      if (!window.cmpObj(fp1, fp2, ['x', 'y', 'score', 'sigma', 'angle'])) {
        console.log("INCORRECT featurepoint4", fp1, fp2);
        return;
      }
    }
  }

  return orientedFeaturePoints;
}

const _computeOrientation = (options) => {
  const {x, y, sigma, octave, scale, gradient} = options;

  const gwSigma = Math.max(1.0, ORIENTATION_GAUSSIAN_EXPANSION_FACTOR * sigma);
  const gwScale = -1.0 / (2 * gwSigma * gwSigma);

  const radius = ORIENTATION_REGION_EXPANSION_FACTOR * gwSigma;
  const radius2 = Math.ceil( radius * radius - 0.5);

  const x0 = Math.max(0, x - Math.floor(radius + 0.5));
  const x1 = Math.min(gradient.width-1, x + Math.floor(radius + 0.5));
  const y0 = Math.max(0, y - Math.floor(radius + 0.5));
  const y1 = Math.min(gradient.height-1, y + Math.floor(radius + 0.5));

  if (typeof window !== 'undefined' && window.DEBUG) {
    const o = window.debugContent.orientationCompute[window.debug.keyframeIndex][window.debug.orientationComputeIndex];
    if (Math.floor(o.x + 0.5) !== x || Math.floor(o.y + 0.5) !== y) {
      console.log("INCORRECT orientation input");
    }
    if (x0 !== o.x0 || x1 !== o.x1 || y0 !== o.y0 || y1 !== o.y1) {
      console.log("INCORRECT xy range");
    }
    if (radius2 !== o.radius2) {
      console.log("INCORRECT radius", radius, radius2, o.radius, o.radius2);
    }
    window.debug.fbinIndex = -1;
  }

  const histogram = [];
  for (let i = 0; i < ORIENTATION_NUM_BINS; i++) {
    histogram.push(0);
  }

  for (let yp = y0; yp <= y1; yp++) {
    const dy = yp - y;
    const dy2 = dy * dy;

    for (let xp = x0; xp <= x1; xp++) {
      if (typeof window !== 'undefined' && window.DEBUG) {
        window.debug.fbinIndex += 1;
      }

      const dx = xp - x;
      const dx2 = dx * dx;

      const r2 = dx2 + dy2;
      if(r2 > radius2) {
        continue; // only use the gradients within the circular window
      }

      const gradientValue = gradient.values[ yp * gradient.width + xp ];
      const angle = gradientValue.angle;
      const mag = gradientValue.mag;

      const w = _fastExp6({x: r2 * gwScale}); // Compute the gaussian weight based on distance from center of keypoint

      const fbin  = ORIENTATION_NUM_BINS * angle * ONE_OVER_2PI;

      const bin = Math.floor(fbin - 0.5);
      const w2 = fbin - bin - 0.5;
      const w1 = (1.0 - w2);
      const b1 = (bin + ORIENTATION_NUM_BINS) % ORIENTATION_NUM_BINS;
      const b2 = (bin + 1) % ORIENTATION_NUM_BINS;
      const magnitude = w * mag;

      if (typeof window !== 'undefined' && window.DEBUG) {
        const o = window.debugContent.orientationCompute[window.debug.keyframeIndex][window.debug.orientationComputeIndex];
        if (Math.abs(fbin - o.fbins[window.debug.fbinIndex]) > 0.001) {
          console.log("INCORRECT fbin", r2, radius2, fbin, 'vs', o.fbins[window.debug.fbinIndex]);
        }
        const details = o.fbinDetails[window.debug.fbinIndex];
        if (b1 !== details.b1 || b2 !== details.b2) {
          console.log("INCORRECT b1b2", b1, b2, details.b1, details.b2);
        }
        if (Math.abs(w1 - details.w1) > 0.001 || Math.abs(w2 - details.w2) > 0.001) {
          console.log("INCORRECT w1w2", w1, w2, details.w1, details.w2);
        }
        if (Math.abs(details.magnitude - magnitude) > 0.001) {
          console.log("INCORRECT mag: ", magnitude, details.magnitude);
        }
      }

      histogram[b1] += w1 * magnitude;
      histogram[b2] += w2 * magnitude;
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG) {
    const o = window.debugContent.orientationCompute[window.debug.keyframeIndex][window.debug.orientationComputeIndex];
    for (let i = 0; i < histogram.length; i++) {
      if (Math.abs(o.histograms[i] - histogram[i]) > 0.001) {
        console.log("INCORRECT histogram", i, window.debug.orientationComputeIndex, JSON.stringify(o.histograms), JSON.stringify(histogram));
        console.log(o, 'vs', {x, y, sigma, octave });
        break;
      }
    }
  }

  //console.log("ori: ", x, y, octave, scale, gwSigma, gwScale, radius, radius2, JSON.stringify(histogram));

  // The orientation histogram is smoothed with a Gaussian
  // sigma=1
  const kernel = [0.274068619061197, 0.451862761877606, 0.274068619061197];
  for(let i = 0; i < ORIENTATION_SMOOTHING_ITERATIONS; i++) {
    const old = [];
    for (let j = 0; j < histogram.length; j++) {
      old[j] = histogram[j];
    }

    for (let j = 0; j < histogram.length; j++) {
      histogram[j] = kernel[0] * old[(j - 1 + histogram.length) % histogram.length]
                    + kernel[1] * old[j]
                    + kernel[2] * old[(j+1) % histogram.length];
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG) {
    const o = window.debugContent.orientationCompute[window.debug.keyframeIndex][window.debug.orientationComputeIndex];
    for (let i = 0; i < histogram.length; i++) {
      if (Math.abs(o.smoothedHistograms[i] - histogram[i]) > 0.001) {
        console.log("INCORRECT smoothed histogram", i, window.debug.orientationComputeIndex, JSON.stringify(o.smoothedHistograms), JSON.stringify(histogram));
        break;
      }
    }
  }

  // Find the peak of the histogram.
  let maxHeight = 0;
  for(let i = 0; i < ORIENTATION_NUM_BINS; i++) {
    if(histogram[i] > maxHeight) {
      maxHeight = histogram[i];
    }
  }

  if (maxHeight === 0) {
    return [];
  }

  // Find all the peaks.
  const angles = [];
  for(let i = 0; i < ORIENTATION_NUM_BINS; i++) {
    const prev = (i - 1 + histogram.length) % histogram.length;
    const next = (i + 1) % histogram.length;

    // add 0.0001 in comparison to avoid too sensitive to rounding precision
    if (histogram[i] > ORIENTATION_PEAK_THRESHOLD * maxHeight && (histogram[i] > histogram[prev] + 0.0001) && (histogram[i] > histogram[next] + 0.0001)) {
      // The default sub-pixel bin location is the discrete location if the quadratic fitting fails.
      let fbin = i;

      const ret = _quadratic3Points({
        p1: [i-1, histogram[prev]],
        p2: [i, histogram[i]],
        p3: [i+1, histogram[next]]
      });

      if (ret !== null) {
        const {A, B, C} = ret;

        // Find the critical point of a quadratic. y = A*x^2 + B*x + C
        if (A != 0) {
          fbin = -B / (2 * A);
        }
      }

      if (typeof window !== 'undefined' && window.DEBUG) {
        const o = window.debugContent.orientationCompute[window.debug.keyframeIndex][window.debug.orientationComputeIndex];
        if (!window.cmp(fbin, o.histfbins[i])) {
          console.log("INCORRECT orientation fbin", i, fbin, 'vs', o.histfbins[i], o.histAs[i], o.histBs[i], o.histCs[i]);
          console.log("hist", histogram[i], histogram[prev], histogram[next], ORIENTATION_PEAK_THRESHOLD * maxHeight);
        }
      }

      let an =  2.0 * Math.PI * ((fbin + 0.5 + ORIENTATION_NUM_BINS) / ORIENTATION_NUM_BINS);
      while (an > 2.0 * Math.PI) { // modula
        an -= 2.0 * Math.PI;
      }
      angles.push(an);
    }
  }
  return angles;
}



/**
 * Fit a quatratic to 3 points. The system of equations is:
 *
 * y0 = A*x0^2 + B*x0 + C
 * y1 = A*x1^2 + B*x1 + C
 * y2 = A*x2^2 + B*x2 + C
 *
 * This system of equations is solved for A,B,C.
 */
const _quadratic3Points = (options) => {
  const {p1, p2, p3} = options;
  const d1 = (p3[0]-p2[0])*(p3[0]-p1[0]);
  const d2 = (p1[0]-p2[0])*(p3[0]-p1[0]);
  const d3 = p1[0]-p2[0];

  // If any of the denominators are zero then return FALSE.
  if (d1 == 0 || d2 == 0 || d3 == 0) {
    return null;
  }

  const a = p1[0]*p1[0];
  const b = p2[0]*p2[0];

  // Solve for the coefficients A,B,C
  const A = ((p3[1]-p2[1])/d1)-((p1[1]-p2[1])/d2);
  const B = ((p1[1]-p2[1])+(A*(b-a)))/d3;
  const C = p1[1]-(A*a)-(B*p1[0]);

  return {A, B, C};
}

/**
 * 0.01% error at 1.030
 * 0.10% error at 1.520
 * 1.00% error at 2.330
 * 5.00% error at 3.285
 */
const _fastExp6 = (options) => {
  const {x} = options;
  return (720+x*(720+x*(360+x*(120+x*(30+x*(6+x))))))*0.0013888888;
}

const _computeGradients = (options) => {
  const {pyramid} = options;
  const gradients = [];

  for (let k = 0; k < pyramid.images.length; k++) {
    const values = [];
    const image = pyramid.images[k];

    for (let j = 0; j < image.height; j++) {
      const prevJ = j > 0? j - 1: j;
      const nextJ = j < image.height - 1? j + 1: j;

      for (let i = 0; i < image.width; i++) {
        const prevI = i > 0? i - 1: i;
        const nextI = i < image.width - 1? i + 1: i;
        const dx = image.data[j * image.width + nextI] - image.data[j * image.width + prevI];
        const dy = image.data[nextJ * image.width + i] - image.data[prevJ * image.width + i];

        values.push({
          angle: Math.atan2(dy, dx) + Math.PI,
          mag: Math.sqrt(dx * dx + dy * dy)
        });
      }
    }
    gradients.push({
      width: image.width,
      height: image.height,
      values: values
    });
  }
  return gradients;
}

// divide the image into PRUNE_FEATURES_NUM_BUCKETS * PRUNE_FEATURES_NUM_BUCKETS area
// in each area, sort feature points by score, and return the top N
const _pruneFeatures = (options) => {
  const {featurePoints, width, height} = options;

  // Note: seems not to be a consistent implementation. Might need to remove this line
  //   The feature points are prune per bucket, e.g. if 501 points in bucket 1, turns out only 5 valid
  //   Similarly, if 500 points all in bucket 1, they all passed because globally <= maxNumFeaturePoints
  if (featurePoints.length <= MAX_FEATURE_POINTS) return featurePoints;

  const resultFeaturePoints = [];

  const nBuckets = PRUNE_FEATURES_NUM_BUCKETS * PRUNE_FEATURES_NUM_BUCKETS;
  const nPointsPerBuckets = MAX_FEATURE_POINTS / nBuckets;

  const buckets = [];
  for (let i = 0; i < nBuckets; i++) {
    buckets.push([]);
  }

  const dx = Math.ceil(1.0 * width / PRUNE_FEATURES_NUM_BUCKETS);
  const dy = Math.ceil(1.0 * height / PRUNE_FEATURES_NUM_BUCKETS);

  for (let i = 0; i < featurePoints.length; i++) {
    const bucketX = Math.floor(featurePoints[i].x / dx);
    const bucketY = Math.floor(featurePoints[i].y / dy);

    const bucketIndex = bucketY * PRUNE_FEATURES_NUM_BUCKETS + bucketX;
      console.log("index", featurePoints[i]);
    buckets[bucketIndex].push(featurePoints[i]);
  }

  for (let i = 0; i < PRUNE_FEATURES_NUM_BUCKETS; i++) {
    for (let j = 0; j < PRUNE_FEATURES_NUM_BUCKETS; j++) {
      const bucketIndex = j * PRUNE_FEATURES_NUM_BUCKETS + i;
      const bucket = buckets[bucketIndex];
      const nSelected = Math.min(bucket.length, nPointsPerBuckets);

      if (bucket.length > nSelected) {
        bucket.sort((f1, f2) => {
          return Math.abs(f1.score) > Math.abs(f2.score)? -1: 1;
        });
      }
      for (let k = 0; k < nSelected; k++) {
        resultFeaturePoints.push(bucket[k]);
      }
    }
  }
  return resultFeaturePoints;
}

// solve x = Ab, where A is symmetric
// [x0]   [A0 A1 A2] [b0]
// [x1] = [A3 A4 A5] [b1]
// [x2]   [A6 A7 A8] [b2]
const _solveSymmetric33 = (options) => {
  const {A, b} = options;

  const det = A[0] * A[4] * A[8]
            - A[0] * A[5] * A[5]
            - A[4] * A[2] * A[2]
            - A[8] * A[1] * A[1]
            + 2 * A[1] * A[2] * A[5];

  if ( Math.abs(det) < 0.0000001) return null; // determinant undefined. no solution

  const B = []; // inverse of A
  B[0] = A[4] * A[8] - A[5] * A[7];
  B[1] = A[2] * A[7] - A[1] * A[8];
  B[2] = A[1] * A[5] - A[2] * A[4];
  B[3] = A[5] * A[6] - A[3] * A[8];
  B[4] = A[0] * A[8] - A[2] * A[6];
  B[5] = A[2] * A[3] - A[0] * A[5];
  B[6] = A[3] * A[7] - A[4] * A[6];
  B[7] = A[1] * A[6] - A[0] * A[7];
  B[8] = A[0] * A[4] - A[1] * A[3];

  const x = [];
  x[0] = B[0] * b[0] + B[1] * b[1] + B[2] * b[2];
  x[1] = B[3] * b[0] + B[4] * b[1] + B[5] * b[2];
  x[2] = B[6] * b[0] + B[7] * b[1] + B[8] * b[2];

  x[0] = 1.0 * x[0] / det;
  x[1] = 1.0 * x[1] / det;
  x[2] = 1.0 * x[2] / det;

  return x;
}

module.exports = {
  detect
}



/***/ }),

/***/ "./src/image-target/matching/dog-pyramid.js":
/*!**************************************************!*\
  !*** ./src/image-target/matching/dog-pyramid.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// compute Difference-of-Gaussian pyramids from gaussian pyramids
//
// pyramid = {
//   numOctaves,
//   numScalesPerOctaves,
//   images: [{data, width, height}, {}, {}] // image at octave i and scale j = images[i * numScalesPerOctaves + j]
// }

const build = ({gaussianPyramid}) => {
  const numOctaves = gaussianPyramid.numOctaves;
  const numScalesPerOctaves = gaussianPyramid.numScalesPerOctaves - 1;

  const pyramidImages = [];
  for (let i = 0; i < numOctaves; i++) {
    for (let j = 0; j < numScalesPerOctaves; j++) {
      const image1 = gaussianPyramid.images[i * gaussianPyramid.numScalesPerOctaves + j];
      const image2 = gaussianPyramid.images[i * gaussianPyramid.numScalesPerOctaves + j + 1];
      pyramidImages.push(  _differenceImageBinomial({image1, image2}));
    }
  }
  return {
    numOctaves,
    numScalesPerOctaves,
    images: pyramidImages
  }
}

const _differenceImageBinomial = ({image1, image2}) => {
  if (image1.data.length !== image2.data.length) {
    throw "image length doesn't match";
  }

  const data = new Float32Array(image1.data.length);
  for (let i = 0; i < image1.data.length; i++) {
    data[i] = image1.data[i] - image2.data[i];
  }
  return {data: data, width: image1.width, height: image1.height};
}

module.exports = {
  build
};


/***/ }),

/***/ "./src/image-target/matching/freak-extractor.js":
/*!******************************************************!*\
  !*** ./src/image-target/matching/freak-extractor.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const EXPANSION_FACTOR = 7;

// 37 points = 6 rings x 6 points per ring + 1 center
const FREAK_RINGS = [
  // ring 5
  {
    sigma: 0.550000,
    points: [
      [-1.000000, 0.000000],
      [-0.500000, -0.866025],
      [0.500000, -0.866025],
      [1.000000, -0.000000],
      [0.500000, 0.866025],
      [-0.500000, 0.866025]
    ]
  },
  // ring 4
  {
    sigma: 0.475000,
    points: [
      [0.000000, 0.930969],
      [-0.806243, 0.465485],
      [-0.806243, -0.465485],
      [-0.000000, -0.930969],
      [0.806243, -0.465485],
      [0.806243, 0.465485]
    ]
  },
  // ring 3
  {
    sigma: 0.400000,
    points: [
      [0.847306, -0.000000],
      [0.423653, 0.733789],
      [-0.423653, 0.733789],
      [-0.847306, 0.000000],
      [-0.423653, -0.733789],
      [0.423653, -0.733789]
    ]
  },
  // ring 2
  {
    sigma: 0.325000,
    points: [
      [-0.000000, -0.741094],
      [0.641806, -0.370547],
      [0.641806, 0.370547],
      [0.000000, 0.741094],
      [-0.641806, 0.370547],
      [-0.641806, -0.370547]
    ]
  },
  // ring 1
  {
    sigma: 0.250000,
    points: [
      [-0.595502, 0.000000],
      [-0.297751, -0.515720],
      [0.297751, -0.515720],
      [0.595502, -0.000000],
      [0.297751, 0.515720],
      [-0.297751, 0.515720]
    ]
  },
  // ring 0
  {
    sigma: 0.175000,
    points: [
      [0.000000, 0.362783],
      [-0.314179, 0.181391],
      [-0.314179, -0.181391],
      [-0.000000, -0.362783],
      [0.314179, -0.181391],
      [0.314179, 0.181391]
    ]
  },
  // center
  {
    sigma: 0.100000,
    points: [
      [0, 0]
    ]
  }
]

// pyramid: gaussian pyramid
const extract = (options) => {
  const {pyramid, points} = options;

  const mK = Math.pow(2, 1.0 / (pyramid.numScalesPerOctaves-1));
  const oneOverLogK = 1.0 / Math.log(mK);

  const descriptors = [];
  for (let p = 0; p < points.length; p++) {

    if (typeof window !== 'undefined' && window.DEBUG) {
      if (window.debugFreakSampleIndex === undefined) window.debugFreakSampleIndex = -1;
      window.debugFreakSampleIndex += 1;
    }

    const point = points[p];

    // Ensure the scale of the similarity transform is at least "1".
    const transformScale = Math.max(1, point.sigma * EXPANSION_FACTOR);

    // Transformation from canonical test locations to image
    const S = _similarityMatrix({scale: transformScale, angle: point.angle, x: point.x, y: point.y});

    //console.log("S: ", point.scale, point.angle, S);

    const samples = [];
    for (let r = 0; r < FREAK_RINGS.length; r++) {
      const sigma = transformScale * FREAK_RINGS[r].sigma;

      let octave = Math.floor(Math.log2(sigma));
      const fscale = Math.log(sigma / Math.pow(2, octave)) * oneOverLogK;
      let scale = Math.round(fscale);

      // sgima of last scale =  sigma of the first scale in next octave
      // prefer coarser octaves for efficiency
      if (scale === pyramid.numScalesPerOctaves - 1) {
        octave = octave + 1;
        scale = 0;
      }
      // clip octave and scale
      if (octave < 0) {
        octave = 0;
        scale = 0;
      }
      if (octave >= pyramid.numOctaves) {
        octave = pyramid.numOctaves - 1;
        scale = pyramid.numScalesPerOctaves - 1;
      }

      // for downsample point
      const image = pyramid.images[octave * pyramid.numScalesPerOctaves + scale];
      const a = 1.0 / (Math.pow(2, octave));
      const b = 0.5 * a - 0.5;

      for (let i = 0; i < FREAK_RINGS[r].points.length; i++) {
        const point = FREAK_RINGS[r].points[i];
        const x = S[0] * point[0] + S[1] * point[1] + S[2];
        const y = S[3] * point[0] + S[4] * point[1] + S[5];

        let xp = x * a + b; // x in octave
        let yp = y * a + b; // y in octave
        // bilinear interpolation
        xp = Math.max(0, Math.min(xp, image.width - 2));
        yp = Math.max(0, Math.min(yp, image.height - 2));

        const x0 = Math.floor(xp);
        const x1 = x0 + 1;
        const y0 = Math.floor(yp);
        const y1 = y0 + 1;

        const value = (x1-xp) * (y1-yp) * image.data[y0 * image.width + x0]
                    + (xp-x0) * (y1-yp) * image.data[y0 * image.width + x1]
                    + (x1-xp) * (yp-y0) * image.data[y1 * image.width + x0]
                    + (xp-x0) * (yp-y0) * image.data[y1 * image.width + x1];

        samples.push(value);

        if (typeof window !== 'undefined' && window.DEBUG) {
          if (window.debug.keyframeIndex === 2 && p === 424) {
            const sampleIndex = samples.length-1;
            const dSamples = window.debugContent.freakSamples[window.debugFreakSampleIndex];
            //console.log("freak sample", window.debug.keyframeIndex, sampleIndex, dSamples[sampleIndex], {xp, yp, value});
          }
        }
      }
    }


    const desc = [];
    for (let i = 0; i < samples.length; i++) {
      for (let j = i+1; j < samples.length; j++) {
        // avoid too senstive to rounding precision
        //desc.push(samples[i] < samples[j]);
        desc.push(samples[i] < samples[j] + 0.0001);

        if (typeof window !== 'undefined' && window.DEBUG) {
          //if (window.debug.keyframeIndex === 2 && p === 424) {
            if (i === 0 && j === 1) window.debugCompareFreakIndex = 0;
            const dCompare = window.debugContent.compareFreak[window.debugFreakSampleIndex];
            const dSamples = window.debugContent.freakSamples[window.debugFreakSampleIndex];
            if (!!desc[desc.length-1] !== !! dCompare[window.debugCompareFreakIndex]) {
              console.log("INCORRECT freak compare", i, j, desc[desc.length-1], 'vs', dCompare[window.debugCompareFreakIndex]);
              console.log(samples[i], samples[j], dSamples[i], dSamples[j]);
            }
            window.debugCompareFreakIndex += 1;
          //}
        }
      }
    }

    // encode descriptors in binary format
    // 37 samples = 1+2+3+...+36 = 666 comparisons = 666 bits
    // ceil(666/32) = 84 numbers (32bit number)
    const descBit = [];
    let temp = 0;
    let count = 0;
    for (let i = 0; i < desc.length; i++) {
      if (desc[i]) temp += 1;
      count += 1;
      if (count === 32) {
        descBit.push(temp);
        temp = 0;
        count = 0;
      } else {
        temp = (temp << 1) >>> 0; // >>> 0 to make it unsigned
      }
    }
    descBit.push(temp);

    descriptors.push(descBit);
  }
  return descriptors;
}

const _similarityMatrix = (options) => {
  const {scale, angle, x, y} = options;
  const c = scale * Math.cos(angle);
  const s = scale * Math.sin(angle);

  const S = [
    c, -s, x,
    s, c, y,
    0, 0, 1
  ]
  return S;
}

module.exports = {
  extract
}


/***/ }),

/***/ "./src/image-target/matching/gaussian-pyramid.js":
/*!*******************************************************!*\
  !*** ./src/image-target/matching/gaussian-pyramid.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {downsampleBilinear} = __webpack_require__(/*! ../utils/images.js */ "./src/image-target/utils/images.js");

// Build a gussian pyramid, with the following structure:
//
// pyramid = {
//   numOctaves,
//   numScalesPerOctaves,
//   images: [{data, width, height}, {}, {}] // image at octave i and scale j = images[i * numScalesPerOctaves + j]
// }

const build = ({image, numScalesPerOctaves, minSize}) => {
  const {data, width, height} = image;

  const numOctaves = _numOctaves({width, height, minSize: minSize});

  const pyramidImages = [];
  for (let i = 0; i < numOctaves; i++) {
    if (i === 0) {
      pyramidImages.push(_applyFilter({image}));
    } else {
      // first image of each octave, downsample from previous
      pyramidImages.push(downsampleBilinear({image: pyramidImages[pyramidImages.length-1]}));
    }

    // remaining images of octave, 4th order binomail from previous
    for (let j = 0; j < numScalesPerOctaves - 1; j++) {
      if (j === 0) {
        pyramidImages.push(_applyFilter({image: pyramidImages[pyramidImages.length-1]}));
      } else {
        // FIX ME?
        // in artoolkit, it apply filter twice....  is it a bug?
        pyramidImages.push(_applyFilter({image: _applyFilter({image: pyramidImages[pyramidImages.length-1]})}));
      }
    }
  }

  const pyramid = {
    numOctaves: numOctaves,
    numScalesPerOctaves: numScalesPerOctaves,
    images: pyramidImages
  }
  return pyramid;
}

const _numOctaves = (options) => {
  let {width, height, minSize} = options;
  let numOctaves = 0;
  while (width >= minSize && height >= minSize) {
    width /= 2;
    height /= 2;
    numOctaves++;
  }
  return numOctaves;
}

//4th order binomial
const _applyFilter = ({image}) => {
  const {data, width, height} = image;
  if (width < 5) {console.log("image too small"); return;}
  if (height < 5) {console.log("image too small"); return;}

  const temp = new Float32Array(data.length);

  // apply horizontal filter. border is computed by extending border pixel
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      const pos = j * width + i;

      temp[pos] = data[j*width + Math.max(i-2,0)] +
                  data[j*width + Math.max(i-1,0)] * 4 +
                  data[j*width + i] * 6 +
                  data[j*width + Math.min(i+1,width-1)] * 4 +
                  data[j*width + Math.min(i+2,width-1)];
    }
  }

  const dst = new Float32Array(data.length);
  // apply vertical filter. border is computed by extending border pixel
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const pos = j * width + i;

      dst[pos] = temp[Math.max(j-2,0) * width + i] +
                 temp[Math.max(j-1,0) * width + i] * 4 +
                 temp[j * width + i] * 6 +
                 temp[Math.min(j+1,height-1) * width + i] * 4 +
                 temp[Math.min(j+2,height-1) * width + i];

      // average of (1+4+6+4+1) * (1+4+6+4+1) = 256 numbers
      dst[pos] = dst[pos] / 256.0;
    }
  }
  return {data: dst, width: width, height: height};
};

module.exports = {
  build
};


/***/ }),

/***/ "./src/image-target/matching/hamming-distance.js":
/*!*******************************************************!*\
  !*** ./src/image-target/matching/hamming-distance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Fast computation on number of bit sets
// Ref: https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetParallel
const compute = (options) => {
  const {v1, v2} = options;
  let d = 0;
  for (let i = 0; i < v1.length; i++) {
    let x = (v1[i] ^ v2[i]) >>> 0;
    d += bitCount(x);
  }
  return d;
}

const bitCount = (v) => {
  var c = v - ((v >> 1) & 0x55555555);
  c = ((c >> 2) & 0x33333333) + (c & 0x33333333);
  c = ((c >> 4) + c) & 0x0F0F0F0F;
  c = ((c >> 8) + c) & 0x00FF00FF;
  c = ((c >> 16) + c) & 0x0000FFFF;
  return c;
}

module.exports = {
  compute
};


/***/ }),

/***/ "./src/image-target/matching/hierarchical-clustering.js":
/*!**************************************************************!*\
  !*** ./src/image-target/matching/hierarchical-clustering.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {compute: hammingCompute} = __webpack_require__(/*! ./hamming-distance.js */ "./src/image-target/matching/hamming-distance.js");
const {createRandomizer} = __webpack_require__(/*! ../utils/randomizer.js */ "./src/image-target/utils/randomizer.js");

const MIN_FEATURE_PER_NODE = 16;
const NUM_ASSIGNMENT_HYPOTHESES =  128;
const NUM_CENTERS = 8;

// kmedoids clustering of points, with hamming distance of FREAK descriptor
//
// node = {
//   isLeaf: bool,
//   children: [], list of children node
//   pointIndexes: [], list of int, point indexes
//   centerPointIndex: int
// }
const build = ({points}) => {
  const pointIndexes = [];
  for (let i = 0; i < points.length; i++) {
    pointIndexes.push(i);
  }

  const randomizer = createRandomizer();

  const rootNode = _build({points: points, pointIndexes: pointIndexes, centerPointIndex: null, randomizer});
  return {rootNode};
}

// recursive build hierarchy clusters
const _build = (options) => {
  const {points, pointIndexes, centerPointIndex, randomizer} = options;

  let isLeaf = false;

  if (pointIndexes.length <= NUM_CENTERS || pointIndexes.length <= MIN_FEATURE_PER_NODE) {
    isLeaf = true;
  }

  const clusters = {};
  if (!isLeaf) {
    // compute clusters
    const assignment = _computeKMedoids({points, pointIndexes, randomizer});

    for (let i = 0; i < assignment.length; i++) {
      if (clusters[pointIndexes[assignment[i]]] === undefined) {
        clusters[pointIndexes[assignment[i]]] = [];
      }
      clusters[pointIndexes[assignment[i]]].push(pointIndexes[i]);
    }
  }
  if (Object.keys(clusters).length === 1) {
    isLeaf = true;
  }

  const node = {
    centerPointIndex: centerPointIndex
  }

  if (isLeaf) {
    node.leaf = true;
    node.pointIndexes = [];
    for (let i = 0; i < pointIndexes.length; i++) {
      node.pointIndexes.push(pointIndexes[i]);
    }
    return node;
  }

  // recursive build children
  node.leaf = false;
  node.children = [];

  Object.keys(clusters).forEach((centerIndex) => {
    node.children.push(_build({points: points, pointIndexes: clusters[centerIndex], centerPointIndex: centerIndex, randomizer}));
  });
  return node;
}

_computeKMedoids = (options) => {
  const {points, pointIndexes, randomizer} = options;

  const randomPointIndexes = [];
  for (let i = 0; i < pointIndexes.length; i++) {
    randomPointIndexes.push(i);
  }

  let bestSumD = Number.MAX_SAFE_INTEGER;
  let bestAssignmentIndex = -1;

  const assignments = [];
  for (let i = 0; i < NUM_ASSIGNMENT_HYPOTHESES; i++) {
    randomizer.arrayShuffle({arr: randomPointIndexes, sampleSize: NUM_CENTERS});

    let sumD = 0;
    const assignment = [];
    for (let j = 0; j < pointIndexes.length; j++) {
      let bestD = Number.MAX_SAFE_INTEGER;
      for (let k = 0; k < NUM_CENTERS; k++) {
        const centerIndex = pointIndexes[randomPointIndexes[k]];
        const d = hammingCompute({v1: points[pointIndexes[j]].descriptors, v2: points[centerIndex].descriptors});
        if (d < bestD) {
          assignment[j] = randomPointIndexes[k];
          bestD = d;
        }
      }
      sumD += bestD;
    }
    assignments.push(assignment);

    if (sumD < bestSumD) {
      bestSumD = sumD;
      bestAssignmentIndex = i;
    }
  }
  return assignments[bestAssignmentIndex];
}

module.exports = {
  build,
};



/***/ }),

/***/ "./src/image-target/matching/homography.js":
/*!*************************************************!*\
  !*** ./src/image-target/matching/homography.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {createRandomizer} = __webpack_require__(/*! ../utils/randomizer.js */ "./src/image-target/utils/randomizer.js");
const {quadrilateralConvex, matrixInverse33, smallestTriangleArea, multiplyPointHomographyInhomogenous, checkThreePointsConsistent, checkFourPointsConsistent, determinant} = __webpack_require__(/*! ../utils/geometry.js */ "./src/image-target/utils/geometry.js");

const EPSILON = 0.0000000000001;
const SQRT2 = 1.41421356237309504880;
const HOMOGRAPHY_DEFAULT_CAUCHY_SCALE = 0.01;
const HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES = 1024;
const HOMOGRAPHY_DEFAULT_MAX_TRIALS = 1064;
const HOMOGRAPHY_DEFAULT_CHUNK_SIZE = 50;

// testPoints is four corners of keyframe
const computeHomography = (options) => {
  const {srcPoints, dstPoints, keyframe} = options;

  const testPoints = [
    [0, 0],
    [keyframe.width, 0],
    [keyframe.width, keyframe.height],
    [0, keyframe.height]
  ]

  const sampleSize = 4; // use four points to compute homography
  if (srcPoints.length < sampleSize) return null;

  const scale = HOMOGRAPHY_DEFAULT_CAUCHY_SCALE;
  const oneOverScale2 = 1.0 / (scale * scale);
  const chuckSize = Math.min(HOMOGRAPHY_DEFAULT_CHUNK_SIZE, srcPoints.length);

  const randomizer = createRandomizer();

  const perm = [];
  for (let i = 0; i < srcPoints.length; i++) {
    perm[i] = i;
  }

  randomizer.arrayShuffle({arr: perm, sampleSize: perm.length});

  // build numerous hypotheses by randoming draw four points
  // TODO: optimize: if number of points is less than certain number, can brute force all combinations
  let trial = 0;
  const Hs = [];
  while (trial < HOMOGRAPHY_DEFAULT_MAX_TRIALS && Hs.length < HOMOGRAPHY_DEFAULT_NUM_HYPOTHESES) {

    randomizer.arrayShuffle({arr: perm, sampleSize: sampleSize});

    trial +=1;

    if (!checkFourPointsConsistent(
      srcPoints[perm[0]], srcPoints[perm[1]], srcPoints[perm[2]], srcPoints[perm[3]],
      dstPoints[perm[0]], dstPoints[perm[1]], dstPoints[perm[2]], dstPoints[perm[3]])) {
      continue;
    }

    const H = _solveHomographyFourPoints({
      srcPoints: [srcPoints[perm[0]], srcPoints[perm[1]], srcPoints[perm[2]], srcPoints[perm[3]]],
      dstPoints: [dstPoints[perm[0]], dstPoints[perm[1]], dstPoints[perm[2]], dstPoints[perm[3]]],
    });

    if (H === null) continue;

    if(!_checkHomographyPointsGeometricallyConsistent({H, testPoints})) {
      continue;
    }

    Hs.push(H);
  }

  if (Hs.length === 0) return null;

  // pick the best hypothesis
  const hypotheses = [];
  for (let i = 0; i < Hs.length; i++) {
    hypotheses.push({
      H: Hs[i],
      cost: 0
    })
  }

  let curChuckSize = chuckSize;
  for (let i = 0; i < srcPoints.length && hypotheses.length > 2; i += curChuckSize) {
    curChuckSize = Math.min(chuckSize, srcPoints.length - i);
    let chuckEnd = i + curChuckSize;

    for (let j = 0; j < hypotheses.length; j++) {
      for (let k = i; k < chuckEnd; k++) {
        const cost = _cauchyProjectiveReprojectionCost({H: hypotheses[j].H, srcPoint: srcPoints[k], dstPoint: dstPoints[k], oneOverScale2});
        hypotheses[j].cost += cost;
      }
    }

    hypotheses.sort((h1, h2) => {return h1.cost - h2.cost});
    hypotheses.splice(-Math.floor((hypotheses.length+1)/2)); // keep the best half
  }

  let bestIndex = 0;
  for (let i = 1; i < hypotheses.length; i++) {
    if (hypotheses[i].cost < hypotheses[bestIndex].cost) bestIndex = i;
  }

  const finalH = _normalizeHomography({inH: hypotheses[bestIndex].H});

  if (!_checkHeuristics({H: finalH, testPoints, keyframe})) return null;
  return finalH;
}

const _checkHeuristics = ({H, testPoints, keyframe}) => {
  const HInv = matrixInverse33(H, 0.00001);
  // console.log("final H Inv: ", HInv);
  if (HInv === null) return false;

  const mp = []
  for (let i = 0; i < testPoints.length; i++) { // 4 test points, corner of keyframe
    mp.push(multiplyPointHomographyInhomogenous(testPoints[i], HInv));
  }
  const smallArea = smallestTriangleArea(mp[0], mp[1], mp[2], mp[3]);

  if (smallArea < keyframe.width * keyframe.height * 0.0001) return false;

  if (!quadrilateralConvex(mp[0], mp[1], mp[2], mp[3])) return false;

  return true;
}

const _normalizeHomography = ({inH}) => {
  const oneOver = 1.0 / inH[8];

  const H = [];
  for (let i = 0; i < 8; i++) {
    H[i] = inH[i] * oneOver;
  }
  H[8] = 1.0;
  return H;
}

const _cauchyProjectiveReprojectionCost = ({H, srcPoint, dstPoint, oneOverScale2}) => {
  const x = multiplyPointHomographyInhomogenous(srcPoint, H);
  const f =[
    x[0] - dstPoint[0],
    x[1] - dstPoint[1]
  ];
  return Math.log(1 + (f[0]*f[0]+f[1]*f[1]) * oneOverScale2);
}

const _checkHomographyPointsGeometricallyConsistent = ({H, testPoints}) => {
  const mappedPoints = [];
  for (let i = 0; i < testPoints.length; i++) {
    mappedPoints[i] = multiplyPointHomographyInhomogenous(testPoints[i], H);
    //console.log("map", testPoints[i], mappedPoints[i], H);
  }
  for (let i = 0; i < testPoints.length; i++) {
    const i1 = i;
    const i2 = (i+1) % testPoints.length;
    const i3 = (i+2) % testPoints.length;
    if (!checkThreePointsConsistent(
      testPoints[i1], testPoints[i2], testPoints[i3],
      mappedPoints[i1], mappedPoints[i2], mappedPoints[i3])) return false;
  }
  return true;
}

// Condition four 2D points such that the mean is zero and the standard deviation is sqrt(2).
const _condition4Points2d = ({x1, x2, x3, x4}) => {
  const mu = [];
  const d1 = [];
  const d2 = [];
  const d3 = [];
  const d4 = [];

  mu[0] = (x1[0]+x2[0]+x3[0]+x4[0])/4;
  mu[1] = (x1[1]+x2[1]+x3[1]+x4[1])/4;

  d1[0] = x1[0]-mu[0];
  d1[1] = x1[1]-mu[1];
  d2[0] = x2[0]-mu[0];
  d2[1] = x2[1]-mu[1];
  d3[0] = x3[0]-mu[0];
  d3[1] = x3[1]-mu[1];
  d4[0] = x4[0]-mu[0];
  d4[1] = x4[1]-mu[1];

  const ds1 = Math.sqrt(d1[0]*d1[0]+d1[1]*d1[1]);
  const ds2 = Math.sqrt(d2[0]*d2[0]+d2[1]*d2[1]);
  const ds3 = Math.sqrt(d3[0]*d3[0]+d3[1]*d3[1]);
  const ds4 = Math.sqrt(d4[0]*d4[0]+d4[1]*d4[1]);
  const d = (ds1+ds2+ds3+ds4)/4;

  if (d == 0) return null;

  const s = (1.0/d)*SQRT2;

  const xp1 = [];
  const xp2 = [];
  const xp3 = [];
  const xp4 = [];

  xp1[0] = d1[0]*s;
  xp1[1] = d1[1]*s;
  xp2[0] = d2[0]*s;
  xp2[1] = d2[1]*s;
  xp3[0] = d3[0]*s;
  xp3[1] = d3[1]*s;
  xp4[0] = d4[0]*s;
  xp4[1] = d4[1]*s;

  return {xp1, xp2, xp3, xp4, s, t: mu};
}

const _solveHomographyFourPoints = ({srcPoints, dstPoints}) => {
  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    window.debug.homographyIndex += 1;
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const {x1, x2, x3, x4, xp1, xp2, xp3, xp4} = dHomography;
    const l1 = [srcPoints[0],srcPoints[1],srcPoints[2],srcPoints[3],dstPoints[0],dstPoints[1],dstPoints[2],dstPoints[3]];
    const l2 = [x1, x2, x3, x4, xp1, xp2, xp3, xp4];
    for (let i = 0; i < l1.length; i++) {
      if (!window.cmp(l1[i][0], l2[i][0]) || !window.cmp(l1[i][1], l2[i][1])) {
        console.log('INCORRECT homography points', window.debug.homographyIndex, i, l1[i], l2[i]);
      }
    }
  }

  const res1 = _condition4Points2d({x1: srcPoints[0], x2: srcPoints[1], x3: srcPoints[2], x4: srcPoints[3]});

  if (res1 === null) return null;

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const {x1p, x2p, x3p, x4p, t, s} = dHomography;
    const l1 = [res1.xp1, res1.xp2, res1.xp3, res1.xp4, res1.t];
    const l2 = [x1p, x2p, x3p, x4p, t];
    for (let i = 0; i < l1.length; i++) {
      if (!window.cmp(l1[i][0], l2[i][0]) || !window.cmp(l1[i][1], l2[i][1])) {
        console.log('INCORRECT homography res1', window.debug.homographyIndex, i, l1[i], l2[i]);
      }
    }
    if (!window.cmp(res1.s, s)) {
      console.log('INCORRECT homography res1 S', window.debug.homographyIndex, res1.s, s);
    }
  }

  const res2 = _condition4Points2d({x1: dstPoints[0], x2: dstPoints[1], x3: dstPoints[2], x4: dstPoints[3]});
  if (res2 === null) return null;

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const {xp1p, xp2p, xp3p, xp4p, tp, sp} = dHomography;
    const l1 = [res2.xp1, res2.xp2, res2.xp3, res2.xp4, res2.t];
    const l2 = [xp1p, xp2p, xp3p, xp4p, tp];
    for (let i = 0; i < l1.length; i++) {
      if (!window.cmp(l1[i][0], l2[i][0]) || !window.cmp(l1[i][1], l2[i][1])) {
        console.log('INCORRECT homography res1', window.debug.homographyIndex, i, l1[i], l2[i]);
      }
    }
    if (!window.cmp(res2.s, sp)) {
      console.log('INCORRECT homography res1 S', window.debug.homographyIndex, i, res2.s, sp);
    }
  }

  const Hn = _solveHomography4PointsInhomogenous({
    x1: res1.xp1, x2: res1.xp2, x3: res1.xp3, x4: res1.xp4,
    xp1: res2.xp1, xp2: res2.xp2, xp3: res2.xp3, xp4: res2.xp4,
  });

  if (Hn === null) return null;

  if (Math.abs(determinant(Hn)) < 0.00001) return null;

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dHomography = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex];
    const dHn = dHomography.Hn;
    if (!window.cmpArray(Hn, dHn, 0.001)) {
      console.log("INCORRECT Hn", window.debug.querykeyframeIndex, window.debug.homographyIndex, Hn, dHn);
    }
    const dDetH = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].detH;
    if (!window.cmp(determinant(Hn), dDetH)) {
      console.log("INCORRECT determinant", determinant(Hn), dDetH);
    }
  }

  const H = _denomalizeHomography({H: Hn, s: res1.s, t: res1.t, sp: res2.s, tp: res2.t});

  return H;
}

// denormalize homography
// Hp = inv(Tp)*H*T
const _denomalizeHomography = ({H, s, t, sp, tp}) => {
  const a = H[6]*tp[0];
  const b = H[7]*tp[0];
  const c = H[0]/sp;
  const d = H[1]/sp;
  const apc = a+c;
  const bpd = b+d;

  const e = H[6]*tp[1];
  const f = H[7]*tp[1];
  const g = H[3]/sp;
  const h = H[4]/sp;
  const epg = e+g;
  const fph = f+h;

  const stx = s*t[0];
  const sty = s*t[1];

  const Hp = [];
  Hp[0] = s*apc;
  Hp[1] = s*bpd;
  Hp[2] = H[8]*tp[0] + H[2]/sp - stx*apc - sty*bpd;

  Hp[3] = s*epg;
  Hp[4] = s*fph;
  Hp[5] = H[8]*tp[1] + H[5]/sp - stx*epg - sty*fph;

  Hp[6] = H[6]*s;
  Hp[7] = H[7]*s;
  Hp[8] = H[8] - Hp[6]*t[0] - Hp[7]*t[1];

  return Hp;
};

// can someone verify the implementation of this QR decomposition?
const _solveHomography4PointsInhomogenous = ({x1, x2, x3, x4, xp1, xp2, xp3, xp4}) => {
  const xList = [x1, x2, x3, x4];
  const xpList = [xp1, xp2, xp3, xp4];

  const A = []; // 8 x 9
  for (let i = 0; i < 4; i++) {
    const offset = i * 18;
    const x = xList[i];
    const xp = xpList[i];
    A[offset+0] = -x[0];
    A[offset+1] = -x[1];
    A[offset+2] = -1;
    A[offset+3] = 0;
    A[offset+4] = 0;
    A[offset+5] = 0;
    A[offset+6] = xp[0]*x[0];
    A[offset+7] = xp[0]*x[1];
    A[offset+8] = xp[0];
    A[offset+9] = 0;
    A[offset+10] = 0;
    A[offset+11] = 0;
    A[offset+12] = -x[0];
    A[offset+13] = -x[1];
    A[offset+14] = -1;
    A[offset+15] = xp[1]*x[0];
    A[offset+16] = xp[1]*x[1];
    A[offset+17] = xp[1];
  }

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dA = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].A;
    if (!window.cmpArray(A, dA)) {
      console.log("INCORRECT A", window.debug.querykeyframeIndex, window.debug.homographyIndex, A, dA);
    }
  }

  const Q = [];
  for (let i = 0; i < 72; i++) {
    Q[i] = A[i];
  }

  // solve x for Ax=0 with QR decomposition with Gram-Schmidt
  for (let row = 0; row < 8; row++) {
    if (row > 0) {
      for (let j = row; j < 8; j++) {
        // project a vector "a" onto a normalized basis vector "e".
        // x = x - dot(a,e)*e

        let d = 0; // dot(a, e);
        for (let i = 0; i < 9; i++) {
          d += Q[(row-1) * 9 + i] * A[j * 9 + i];
        }

        for (let i = 0; i < 9; i++) {
          Q[j * 9 + i] -= d * Q[ (row-1) * 9 + i];
        }
      }
    }

    let maxValue = -1;
    let maxRow = -1;
    const ss = [];
    for (let j = row; j < 8; j++) {
      ss[j] = 0;
      for (let i = 0; i < 9; i++) {
        ss[j] += (Q[j*9+i] * Q[j*9+i]);
      }
      if (ss[j] > maxValue) {
        maxValue = ss[j];
        maxRow = j;
      }
    }
    if ( Math.abs(ss[maxRow]) < EPSILON) {
      return null; // no solution
    }

    // swap current row with maxindex row
    if (row !== maxRow) {
      for (let i = 0; i < 9; i++) {
        let tmp = A[row * 9 + i];
        A[row * 9 + i] = A[maxRow * 9 + i];
        A[maxRow * 9 + i] = tmp;

        let tmp2 = Q[row * 9 + i];
        Q[row * 9 + i] = Q[maxRow * 9 + i];
        Q[maxRow * 9 + i] = tmp2;
      }
    }

    for (let i = 0; i < 9; i++) {
      Q[row * 9 + i] = 1.0 * Q[row * 9 + i] / Math.sqrt(ss[maxRow]);
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dQ = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].Q8;
    if (!window.cmpArray(Q, dQ, 0.001)) {
      console.log("INCORRECT Q8", window.debug.querykeyframeIndex, window.debug.homographyIndex, Q, dQ);
    }
  }

  // compute x from Q
  const w = [];
  const X = [];
  for (let row = 0; row < 9; row++) {
    for (let i = 0; i < 9; i++) {
      X[row * 9 + i] = (Q[i] * -Q[row]);
    }
    X[row * 9 + row] = 1 + X[row * 9 + row];

    for (let j = 1; j < 8; j++) {
      for(let i = 0; i < 9; i++) {
        X[row * 9 + i] += (Q[j * 9 + i] * -Q[j * 9 + row]);
      }
    }

    let ss = 0;
    for (let i = 0; i < 9; i++) {
      ss += (X[row * 9 + i] * X[row * 9 + i]);
    }
    if (Math.abs(ss) < EPSILON) {
      w[row] = 0;
      continue;
    }

    w[row] = Math.sqrt(ss);
    for (let i = 0; i < 9; i++) {
      X[row * 9 + i] = X[row * 9 + i] / w[row];
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
    const dX = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].X;
    const dw = window.debugMatch.querykeyframes[window.debug.querykeyframeIndex].homography[window.debug.homographyIndex].w;
    if (!window.cmpArray(X, dX, 0.01)) {
      console.log("INCORRECT X", window.debug.querykeyframeIndex, window.debug.homographyIndex, JSON.parse(JSON.stringify(X)), dX);
    }
    if (!window.cmpArray(w, dw, 0.01)) {
      console.log("INCORRECT w", window.debug.querykeyframeIndex, window.debug.homographyIndex, JSON.parse(JSON.stringify(w)), dw);
    }
  }

  let maxRow = -1;
  let maxValue = -1;
  for (let j = 0; j < 9; j++) {
    if (w[j] > maxValue) {
      maxRow = j;
      maxValue = w[j];
    }
  }


  if (maxValue == 0) return null; // no solution

  const x = [];
  for (let i = 0; i < 9; i++) {
    x[i] = X[maxRow * 9 + i];
  }

  return x;
}

module.exports = {
  computeHomography,
}



/***/ }),

/***/ "./src/image-target/matching/hough.js":
/*!********************************************!*\
  !*** ./src/image-target/matching/hough.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const kHoughBinDelta = 1;

// mathces [querypointIndex:x, keypointIndex: x]
const computeHoughMatches = (options) => {
  const {keypoints, querypoints, keywidth, keyheight, querywidth, queryheight, matches} = options;

  const maxX = querywidth * 1.2;
  const minX = -maxX;
  const maxY = queryheight * 1.2;
  const minY = -maxY;
  const numAngleBins = 12;
  const numScaleBins = 10;
  const minScale = -1;
  const maxScale = 1;
  const scaleK = 10.0;
  const scaleOneOverLogK = 1.0 / Math.log(scaleK);
  const maxDim = Math.max(keywidth, keyheight);
  const keycenterX = Math.floor(keywidth / 2);
  const keycenterY = Math.floor(keyheight / 2);

  // compute numXBins and numYBins based on matches
  const projectedDims = [];
  for (let i = 0; i < matches.length; i++) {
    const queryscale = querypoints[matches[i].querypointIndex].scale;
    const keyscale = keypoints[matches[i].keypointIndex].scale;
    if (keyscale == 0) console.log("ERROR divide zero");
    const scale = queryscale / keyscale;
    projectedDims.push( scale * maxDim );
  }

  // TODO optimize median
  //   weird. median should be [Math.floor(projectedDims.length/2) - 1] ?
  projectedDims.sort((a1, a2) => {return a1 - a2});
  const medianProjectedDim = projectedDims[ Math.floor(projectedDims.length/2) - (projectedDims.length%2==0?1:0) -1 ];

  const binSize = 0.25 * medianProjectedDim;
  const numXBins = Math.max(5, Math.ceil((maxX - minX) / binSize));
  const numYBins = Math.max(5, Math.ceil((maxY - minY) / binSize));

  const numXYBins = numXBins * numYBins;
  const numXYAngleBins = numXYBins * numAngleBins;

  // do voting
  const querypointValids = [];
  const querypointBinLocations = [];
  const votes = {};
  for (let i = 0; i < matches.length; i++) {
    const querypoint = querypoints[matches[i].querypointIndex];
    const keypoint = keypoints[matches[i].keypointIndex];

    const {x, y, scale, angle} = _mapCorrespondence({querypoint, keypoint, keycenterX, keycenterY, scaleOneOverLogK});

    // Check that the vote is within range
    if (x < minX || x >= maxX || y < minY || y >= maxY || angle <= -Math.PI || angle > Math.PI || scale < minScale || scale >= maxScale) {
      querypointValids[i] = false;
      continue;
    }

    // map properties to bins
    let fbinX = numXBins * (x - minX) / (maxX - minX);
    let fbinY = numYBins * (y - minY) / (maxY - minY);
    let fbinAngle = numAngleBins * (angle + Math.PI) / (2.0 * Math.PI);
    let fbinScale = numScaleBins * (scale - minScale) / (maxScale - minScale);

    querypointBinLocations[i] = {binX: fbinX, binY: fbinY, binAngle: fbinAngle, binScale: fbinScale};

    let binX = Math.floor(fbinX - 0.5);
    let binY = Math.floor(fbinY - 0.5);
    let binScale = Math.floor(fbinScale - 0.5);
    let binAngle = (Math.floor(fbinAngle - 0.5) + numAngleBins) % numAngleBins;

    // check can vote all 16 bins
    if (binX < 0 || binX + 1 >= numXBins || binY < 0 || binY + 1 >= numYBins || binScale < 0 || binScale +1 >= numScaleBins) {
      querypointValids[i] = false;
      continue;
    }

    for (let dx = 0; dx < 2; dx++) {
      let binX2 = binX + dx;

      for (let dy = 0; dy < 2; dy++) {
        let binY2 = binY + dy;

        for (let dangle = 0; dangle < 2; dangle++) {
          let binAngle2 = (binAngle + dangle) % numAngleBins;

          for (let dscale = 0; dscale < 2; dscale++) {
            let binScale2 = binScale + dscale;

            const binIndex = binX2 + binY2 * numXBins + binAngle2 * numXYBins + binScale2 * numXYAngleBins;

            if (votes[binIndex] === undefined) votes[binIndex] = 0;
            votes[binIndex] += 1;
          }
        }
      }
    }
    querypointValids[i] = true;
  }

  let maxVotes = 0;
  let maxVoteIndex = -1;
  Object.keys(votes).forEach((index) => {
    if (votes[index] > maxVotes) {
      maxVotes = votes[index];
      maxVoteIndex = index;
    }
  });

  if (maxVotes < 3) return [];

  // get back bins from vote index
  const binX = Math.floor(((maxVoteIndex % numXYAngleBins) % numXYBins) % numXBins);
  const binY = Math.floor((((maxVoteIndex - binX) % numXYAngleBins) % numXYBins) / numXBins);
  const binAngle = Math.floor(((maxVoteIndex - binX - (binY * numXBins)) % numXYAngleBins) / numXYBins);
  const binScale = Math.floor((maxVoteIndex - binX - (binY * numXBins) - (binAngle * numXYBins)) / numXYAngleBins);

  //console.log("hough voted: ", {binX, binY, binAngle, binScale, maxVoteIndex});

  const houghMatches = [];
  for (let i = 0; i < matches.length; i++) {
    if (!querypointValids[i]) continue;

    const queryBins = querypointBinLocations[i];
    // compute bin difference
    const distBinX = Math.abs(queryBins.binX - (binX+0.5));
    if (distBinX >= kHoughBinDelta) continue;

    const distBinY = Math.abs(queryBins.binY - (binY+0.5));
    if (distBinY >= kHoughBinDelta) continue;

    const distBinScale = Math.abs(queryBins.binScale - (binScale+0.5));
    if (distBinScale >= kHoughBinDelta) continue;

    const temp = Math.abs(queryBins.binAngle - (binAngle+0.5));
    const distBinAngle = Math.min(temp, numAngleBins - temp);
    if (distBinAngle >= kHoughBinDelta) continue;

    houghMatches.push(matches[i]);
  }
  return houghMatches;
}

const _mapCorrespondence = ({querypoint, keypoint, keycenterX, keycenterY, scaleOneOverLogK}) => {
  // map angle to (-pi, pi]
  let angle = querypoint.angle - keypoint.angle;
  if (angle <= -Math.PI) angle += 2*Math.PI;
  else if (angle > Math.PI) angle -= 2*Math.PI;

  const scale = querypoint.scale / keypoint.scale;

  // 2x2 similarity
  const cos = scale * Math.cos(angle);
  const sin = scale * Math.sin(angle);
  const S = [cos, -sin, sin, cos];

  const tp = [
    S[0] * keypoint.x2D + S[1] * keypoint.y2D,
    S[2] * keypoint.x2D + S[3] * keypoint.y2D
  ];
  const tx = querypoint.x2D - tp[0];
  const ty = querypoint.y2D - tp[1];

  return {
    x: S[0] * keycenterX + S[1] * keycenterY + tx,
    y: S[2] * keycenterX + S[3] * keycenterY + ty,
    angle: angle,
    scale: Math.log(scale) * scaleOneOverLogK
  }
}

module.exports = {
  computeHoughMatches
}



/***/ }),

/***/ "./src/image-target/matching/matcher.js":
/*!**********************************************!*\
  !*** ./src/image-target/matching/matcher.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {build: buildGaussianPyramid} = __webpack_require__(/*! ./gaussian-pyramid */ "./src/image-target/matching/gaussian-pyramid.js");
const {build: buildDoGPyramid} = __webpack_require__(/*! ./dog-pyramid */ "./src/image-target/matching/dog-pyramid.js");
const {build: hierarchicalClusteringBuild} = __webpack_require__(/*! ./hierarchical-clustering.js */ "./src/image-target/matching/hierarchical-clustering.js");
const {detect} = __webpack_require__(/*! ./detector */ "./src/image-target/matching/detector.js");
const {extract} = __webpack_require__(/*! ./freak-extractor */ "./src/image-target/matching/freak-extractor.js");
const {match} = __webpack_require__(/*! ./matching */ "./src/image-target/matching/matching.js");

const PYRAMID_NUM_SCALES_PER_OCTAVES = 3;
const PYRAMID_MIN_SIZE = 8;
//const FEATURE_DENSITY = 100;

class Matcher {
  constructor(matchingData) {
    this.keyframes = matchingData.keyframes;
  }

  // return a list of screenCoords -> worldCoords pairs
  match(targetImage) {
    const querypoints = _extractPoints({image: targetImage});

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      if (querypoints.length !== window.debugMatch.points.length) {
        console.log("INCORRECT querypoints length", querypoints.length, window.debugMatch.points.length);
      }
      for (let i = 0; i < querypoints.length; i++) {
        if (!window.cmp(querypoints[i].x2D, window.debugMatch.points[i].x)) {
          console.log("INCORRECT query point", i, querypoints[i], window.debugMatch.points[i]);
        }
      }
    }
    const result = match({keyframes: this.keyframes, querypoints: querypoints, querywidth: targetImage.width, queryheight: targetImage.height});

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      console.log("result", result);
      if (!!result !== !!window.debugMatch.finalH) {
        console.log("INCORRECT match result", result, window.debugMatch.finalH);
      }
      if (result !== null) {
        if (result.keyframeIndex !== window.debugMatch.finalMatchId) {

        }
        if (!window.cmpArray(result.H, window.debugMatch.finalH)) {
          console.log("INCORRECT result H", result.H, window.debugMatch.finalH);
        }
        console.log("final matches length", result.matches.length, window.debugMatch.finalMatches.length);
        const dMatches = window.debugMatch.finalMatches;
        for (let i = 0; i < result.matches.length; i++) {
          if (result.matches[i].querypointIndex !== dMatches[i].ins || result.matches[i].keypointIndex !== dMatches[i].res) {
            console.log("INCORRECT final matches", i, result.matches, dMatches);
            break;
          }
        }
      }
    }

    if (result === null) return null;

    const screenCoords = [];
    const worldCoords = [];
    const keyframe = this.keyframes[result.keyframeIndex];
    for (let i = 0; i < result.matches.length; i++) {
      const querypointIndex = result.matches[i].querypointIndex;
      const keypointIndex = result.matches[i].keypointIndex;
      screenCoords.push({
        x: querypoints[querypointIndex].x2D,
        y: querypoints[querypointIndex].y2D,
      })
      worldCoords.push({
        x: keyframe.points[keypointIndex].x3D,
        y: keyframe.points[keypointIndex].y3D,
        z: 0,
      })
    }

    return {screenCoords, worldCoords};
  }
}

const _extractPoints = ({image}) => {
  if (typeof window !== 'undefined' && window.DEBUG_TIME) {
    var _start = new Date().getTime();
  }

  //const maxFeatureNum = FEATURE_DENSITY * image.width * image.height / (480.0*360);
  const gaussianPyramid = buildGaussianPyramid({image, minSize: PYRAMID_MIN_SIZE, numScalesPerOctaves: PYRAMID_NUM_SCALES_PER_OCTAVES});

  if (typeof window !== 'undefined' && window.DEBUG_TIME) {
    console.log('exec time extract points until gaussian: ', new Date().getTime() - _start);
  }

  const dogPyramid = buildDoGPyramid({gaussianPyramid: gaussianPyramid});

  if (typeof window !== 'undefined' && window.DEBUG_TIME) {
    console.log('exec time extract points until dog ', new Date().getTime() - _start);
  }

  const featurePoints = detect({gaussianPyramid, dogPyramid});

  if (typeof window !== 'undefined' && window.DEBUG_TIME) {
    console.log('exec time extract points until detect', new Date().getTime() - _start);
  }

  const descriptors = extract({pyramid: gaussianPyramid, points: featurePoints});

  if (typeof window !== 'undefined' && window.DEBUG_TIME) {
    console.log('exec time extract points until extract', new Date().getTime() - _start);
  }

  const keypoints = [];
  for (let i = 0; i < featurePoints.length; i++) {
    keypoints.push({
      x2D: featurePoints[i].x,
      y2D: featurePoints[i].y,
      x3D: (featurePoints[i].x + 0.5) / image.dpi * 25.4, // inch to millimeter
      y3D: ((image.height-0.5) - featurePoints[i].y) / image.dpi * 25.4, // inch to millimeter
      angle: featurePoints[i].angle,
      scale: featurePoints[i].sigma,
      maxima: featurePoints[i].score > 0,
      descriptors: descriptors[i]
    })
  }

  if (typeof window !== 'undefined' && window.DEBUG) {
    const dPoints = window.debugContent.refDataSet[window.debug.keyframeIndex];
    console.log("keypoints length", window.debug.keyframeIndex, keypoints.length, 'vs', dPoints.length);
    for (let i = 0; i < keypoints.length; i++) {
      if (!window.cmpObj(keypoints[i], dPoints[i], ['x2D', 'y2D', 'x3D', 'y3D', 'scale', 'angle'])
         || (!!keypoints[i].maxima !== !!dPoints[i].maxima)
      ) {
        console.log("INCORRECT keypoint", i, keypoints[i], dPoints[i]);
      }
      const dDescriptors = [];
      for (let j = 0; j < keypoints[i].descriptors.length; j++) {
        let bit = "";
        // artoolkit bit ordering [7 6 5 4 3 2 1 0, 15 14 13 12 11 10 9 8, 23 22 21 20 19 18 17 15, ...]
        for (let k = 0; k < 4; k++) {
          let v = dPoints[i].descriptors[j*4+k].toString(2).padStart(8, 0).split("").reverse().join("");
          bit = bit + v;
        }
        let dVal = parseInt(bit, 2) >>> 0;
        dDescriptors.push(dVal);
      }

      for (let j = 0; j < keypoints[i].descriptors.length-1; j++) { // the last byte has different ordering. don't want to fix
        if (keypoints[i].descriptors[j] !== dDescriptors[j]) {
          console.log("INCORRECT keypoint descriptors", i, j, keypoints[i], dPoints[i], dDescriptors);
          break;
        }
      }
    }
  }

  return keypoints;
}

const _buildKeyframes = ({imageList}) => {
  const keyframes = [];

  for (let i = 0; i < imageList.length; i++) {
    if (typeof window !== 'undefined' && window.DEBUG) {
      window.debug.keyframeIndex = i;
    }

    const image = imageList[i];
    const keypoints = _extractPoints({image});
    const pointsCluster = hierarchicalClusteringBuild({points: keypoints});
    keyframes.push({points: keypoints, pointsCluster, width: image.width, height: image.height});

    if (typeof window !== 'undefined' && window.DEBUG) {
      const dCluster = window.debugContent.clusters[i];

      const goNode = (n1, n2) => {
        //console.log("node", n1.pointIndexes, n2.pointIndexes);
        if (!!n1.leaf !== !!n2.isLeaf) {
          console.log("INCORRECT node leaf", n1, n2);
        }
        if (n1.leaf) {
          if (n1.pointIndexes.length !== n2.pointIndexes.length) {
            console.log("INCORRECT node pointIndexes", n1, n2);
          }
          for (let i = 0; i < n1.pointIndexes.length; i++) {
            if (n1.pointIndexes[i] !== n2.pointIndexes[i]) {
              console.log("INCORRECT node pointIndexes", n1, n2);
            }
          }
        } else {
          if (n1.children.length !== n2.children.length) {
            console.log("INCORRECT node children length", n1, n2);
          }
          for (let i = 0; i < n1.children.length; i++) {
            goNode(n1.children[i], n2.children[i]);
          }
        }
      }
      goNode(pointsCluster.rootNode, dCluster);
    }
  }
  return keyframes;
}

const compileMatching = ({imageList}) => {
  const keyframes = _buildKeyframes({imageList});
  return {keyframes};
}

module.exports = {
  Matcher,
  compileMatching
}


/***/ }),

/***/ "./src/image-target/matching/matching.js":
/*!***********************************************!*\
  !*** ./src/image-target/matching/matching.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const TinyQueue = __webpack_require__(/*! tinyqueue */ "./node_modules/tinyqueue/index.js").default;
const {compute: hammingCompute} = __webpack_require__(/*! ./hamming-distance.js */ "./src/image-target/matching/hamming-distance.js");
const {computeHoughMatches} = __webpack_require__(/*! ./hough.js */ "./src/image-target/matching/hough.js");
const {computeHomography} = __webpack_require__(/*! ./homography.js */ "./src/image-target/matching/homography.js");
const {multiplyPointHomographyInhomogenous, matrixInverse33} = __webpack_require__(/*! ../utils/geometry.js */ "./src/image-target/utils/geometry.js");

const INLIER_THRESHOLD = 3;
const MIN_NUM_INLIERS = 8;
const CLUSTER_MAX_POP = 8;
const HAMMING_THRESHOLD = 0.7;

// match list of querpoints against pre-built list of keyframes
const match = ({keyframes, querypoints, querywidth, queryheight}) => {
  let result = null;

  for (let i = 0; i < keyframes.length; i++) {
    const keyframe = keyframes[i];
    const keypoints = keyframe.points;

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      window.debug.querykeyframeIndex = i;
    }
    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      var _start = new Date().getTime();
    }

    const matches = [];
    for (let j = 0; j < querypoints.length; j++) {
      const rootNode = keyframe.pointsCluster.rootNode;
      const querypoint = querypoints[j];
      const keypointIndexes = [];
      const queue = new TinyQueue([], (a1, a2) => {return a1.d - a2.d});

      _query({node: rootNode, keypoints, querypoint, queue, keypointIndexes, numPop: 0});

      let bestIndex = -1;
      let bestD1 = Number.MAX_SAFE_INTEGER;
      let bestD2 = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < keypointIndexes.length; k++) {
        const keypoint = keypoints[keypointIndexes[k]];
        if (keypoint.maxima != querypoint.maxima) continue;

        const d = hammingCompute({v1: keypoint.descriptors, v2: querypoint.descriptors});
        if (d < bestD1) {
          bestD2 = bestD1;
          bestD1 = d;
          bestIndex = keypointIndexes[k];
        } else if (d < bestD2) {
          bestD2 = d;
        }
      }
      if (bestIndex !== -1 && (bestD2 === Number.MAX_SAFE_INTEGER || (1.0 * bestD1 / bestD2) < HAMMING_THRESHOLD)) {
        matches.push({querypointIndex: j, keypointIndex: bestIndex});
      }

      if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
        if (!window.debug.queryMatchIndex) window.debug.queryMatchIndex = 0;
        const dMatch = window.debugMatch.matches[window.debug.queryMatchIndex];
        if (bestIndex === -1) {
          if (dMatch && dMatch.bestIndex !== 2147483647) {
            console.log("INCORRECT query match", bestD1, bestD2, bestIndex, 'vs', dMatch.firstBest, dMatch.secondBest, dMatch.bestIndex);
          }
        } else {
          if (bestIndex !== dMatch.bestIndex) {
            console.log("INCORRECT query match", bestD1, bestD2, bestIndex, 'vs', dMatch.firstBest, dMatch.secondBest, dMatch.bestIndex);
          }
        }
        window.debug.queryMatchIndex += 1;
      }
    }

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until first match: ', new Date().getTime() - _start);
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dMatches = window.debugMatch.querykeyframes[i].matches1;
      console.log("matches 1", matches.length, dMatches.length);
      if (matches.length !== dMatches.length) {
        console.log("INCORRECT matches1 length");
      }
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].querypointIndex !== dMatches[i].ins || matches[i].keypointIndex !== dMatches[i].res) {
          console.log("INCORRECT matches1", i, matches[i], dMatches[i]);
        }
      }
    }

    if (matches.length < MIN_NUM_INLIERS) {
      continue;
    }

    const houghMatches = computeHoughMatches({
      keypoints: keyframe.points,
      querypoints,
      keywidth: keyframe.width,
      keyheight: keyframe.height,
      querywidth,
      queryheight,
      matches,
    });

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until first hough match: ', new Date().getTime() - _start);
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dMatches = window.debugMatch.querykeyframes[i].houghMatches1;
      console.log("hough matches 1", houghMatches.length, dMatches.length);
      if (houghMatches.length !== dMatches.length) {
        console.log("INCORRECT matches1 length");
      }
      for (let i = 0; i < houghMatches.length; i++) {
        if (houghMatches[i].querypointIndex !== dMatches[i].ins || houghMatches[i].keypointIndex !== dMatches[i].res) {
          console.log("INCORRECT matches1", i);
        }
      }
    }

    const srcPoints = [];
    const dstPoints = [];
    for (let i = 0; i < houghMatches.length; i++) {
      const querypoint = querypoints[houghMatches[i].querypointIndex];
      const keypoint = keypoints[houghMatches[i].keypointIndex];
      srcPoints.push([ keypoint.x2D, keypoint.y2D ]);
      dstPoints.push([ querypoint.x2D, querypoint.y2D ]);
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      window.debug.homographyIndex = -1; // +1 at start
    }

    const H = computeHomography({
      srcPoints,
      dstPoints,
      keyframe,
    });

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until first Homography: ', new Date().getTime() - _start);
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dH = window.debugMatch.querykeyframes[i].H1;
      if (!window.cmpArray(H, dH, 0.001)) {
        console.log("INCORRECT H1", i, H, dH);
      }
    }

    if (H === null) continue;

    const inlierMatches = _findInlierMatches({
      querypoints,
      keypoints: keyframe.points,
      H,
      matches: houghMatches,
      threshold: INLIER_THRESHOLD
    });

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until first inlier matches: ', new Date().getTime() - _start);
    }

    if (inlierMatches.length < MIN_NUM_INLIERS) {
      continue;
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dMatches = window.debugMatch.querykeyframes[i].inlierMatches1;
      console.log("inlier matches 1", inlierMatches.length, dMatches.length);
      if (inlierMatches.length !== dMatches.length) {
        console.log("INCORRECT inlierMatches1 length");
      }
      for (let i = 0; i < inlierMatches.length; i++) {
        if (inlierMatches[i].querypointIndex !== dMatches[i].ins || inlierMatches[i].keypointIndex !== dMatches[i].res) {
          console.log("INCORRECT inlierMatches1", i);
        }
      }
    }

    // do another loop of match using the homography
    const HInv = matrixInverse33(H, 0.00001);
    const dThreshold2 = 10 * 10;
    const matches2 = [];
    for (let j = 0; j < querypoints.length; j++) {
      const querypoint = querypoints[j];
      const mapquerypoint = multiplyPointHomographyInhomogenous([querypoint.x2D, querypoint.y2D], HInv);

      let bestIndex = -1;
      let bestD1 = Number.MAX_SAFE_INTEGER;
      let bestD2 = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < keypoints.length; k++) {
        const keypoint = keypoints[k];
        if (keypoint.maxima != querypoint.maxima) continue;

        // check distance threshold
        const d2 = (keypoint.x2D - mapquerypoint[0]) * (keypoint.x2D - mapquerypoint[0])
                  + (keypoint.y2D - mapquerypoint[1]) * (keypoint.y2D - mapquerypoint[1]);
        if (d2 > dThreshold2) continue;

        const d = hammingCompute({v1: keypoint.descriptors, v2: querypoint.descriptors});
        if (d < bestD1) {
          bestD2 = bestD1;
          bestD1 = d;
          bestIndex = k;
        } else if (d < bestD2) {
          bestD2 = d;
        }
      }

      if (bestIndex !== -1 && (bestD2 === Number.MAX_SAFE_INTEGER || (1.0 * bestD1 / bestD2) < HAMMING_THRESHOLD)) {
        matches2.push({querypointIndex: j, keypointIndex: bestIndex});
      }
    }

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until second matches: ', new Date().getTime() - _start);
    }

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dMatches = window.debugMatch.querykeyframes[i].matches2;
      console.log("matches 2", matches2.length, dMatches.length);
      if (matches2.length !== dMatches.length) {
        console.log("INCORRECT matches2 length");
      }
      for (let i = 0; i < matches2.length; i++) {
        if (matches2[i].querypointIndex !== dMatches[i].ins || matches2[i].keypointIndex !== dMatches[i].res) {
          console.log("INCORRECT matches2", i);
        }
      }
    }

    const houghMatches2 = computeHoughMatches({
      keypoints: keyframe.points,
      querypoints,
      keywidth: keyframe.width,
      keyheight: keyframe.height,
      querywidth,
      queryheight,
      matches: matches2,
    });

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until second hough matches: ', new Date().getTime() - _start);
    }

    const srcPoints2 = [];
    const dstPoints2 = [];
    for (let i = 0; i < houghMatches2.length; i++) {
      const querypoint = querypoints[houghMatches2[i].querypointIndex];
      const keypoint = keypoints[houghMatches2[i].keypointIndex];
      srcPoints2.push([ keypoint.x2D, keypoint.y2D ]);
      dstPoints2.push([ querypoint.x2D, querypoint.y2D ]);
    }

    const H2 = computeHomography({
      srcPoints: srcPoints2,
      dstPoints: dstPoints2,
      keyframe
    });

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dH = window.debugMatch.querykeyframes[i].H2;
      if (!window.cmpArray(H2, dH, 0.0001)) {
        console.log("INCORRECT H2", i, H2, dH);
      }
    }

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until second homography: ', new Date().getTime() - _start);
    }

    if (H2 === null) continue;

    const inlierMatches2 = _findInlierMatches({
      querypoints,
      keypoints: keyframe.points,
      H: H2,
      matches: houghMatches2,
      threshold: INLIER_THRESHOLD
    });

    if (typeof window !== 'undefined' && window.DEBUG_MATCH) {
      const dMatches = window.debugMatch.querykeyframes[i].inlierMatches2;
      console.log("inlier matches 2", inlierMatches2.length, dMatches.length);
      if (inlierMatches2.length !== dMatches.length) {
        console.log("INCORRECT inlierMatches2 length");
      }
      for (let i = 0; i < inlierMatches2.length; i++) {
        if (inlierMatches2[i].querypointIndex !== dMatches[i].ins || inlierMatches2[i].keypointIndex !== dMatches[i].res) {
          console.log("INCORRECT inlierMatches2", i);
        }
      }
    }

    if (typeof window !== 'undefined' && window.DEBUG_TIME) {
      console.log('exec time until second inlier matches: ', new Date().getTime() - _start);
    }

    if (inlierMatches2.length < MIN_NUM_INLIERS) {
      continue;
    }

    if (result === null || result.matches.length < inlierMatches2.length) {
      result = {
        keyframeIndex: i,
        matches: inlierMatches2,
        H: H2,
      }
    }
  }

  return result;
};

const _query = ({node, keypoints, querypoint, queue, keypointIndexes, numPop}) => {
  if (node.leaf) {
    for (let i = 0; i < node.pointIndexes.length; i++) {
      keypointIndexes.push(node.pointIndexes[i]);
    }
    return;
  }

  const distances = [];
  for (let i = 0; i < node.children.length; i++) {
    const childNode = node.children[i];
    const centerPointIndex = childNode.centerPointIndex;
    const d = hammingCompute({v1: keypoints[centerPointIndex].descriptors, v2: querypoint.descriptors});
    distances.push(d);
  }

  let minD = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < node.children.length; i++) {
    minD = Math.min(minD, distances[i]);
  }

  for (let i = 0; i < node.children.length; i++) {
    if (distances[i] !== minD) {
      queue.push({node: node.children[i], d: distances[i]});
    }
  }
  for (let i = 0; i < node.children.length; i++) {
    if (distances[i] === minD) {
      _query({node: node.children[i], keypoints, querypoint, queue, keypointIndexes, numPop});
    }
  }

  if (numPop < CLUSTER_MAX_POP && queue.length > 0) {
    const {node, d} = queue.pop();
    numPop += 1;
    _query({node, keypoints, querypoint, queue, keypointIndexes, numPop});
  }
};

const _findInlierMatches = (options) => {
  const {keypoints, querypoints, H, matches, threshold} = options;

  const threshold2 = threshold * threshold;

  const goodMatches = [];
  for (let i = 0; i < matches.length; i++) {
    const querypoint = querypoints[matches[i].querypointIndex];
    const keypoint = keypoints[matches[i].keypointIndex];
    const mp = multiplyPointHomographyInhomogenous([keypoint.x2D, keypoint.y2D], H);
    const d2 = (mp[0] - querypoint.x2D) * (mp[0] - querypoint.x2D) + (mp[1] - querypoint.y2D) * (mp[1] - querypoint.y2D);
    if (d2 <= threshold2) {
      goodMatches.push( matches[i] );
    }
  }
  return goodMatches;
}

module.exports = {
  match
}


/***/ }),

/***/ "./src/image-target/tracking/extractor.js":
/*!************************************************!*\
  !*** ./src/image-target/tracking/extractor.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {Cumsum} = __webpack_require__(/*! ../utils/cumsum */ "./src/image-target/utils/cumsum.js");

const SEARCH_SIZE1 = 10;
const SEARCH_SIZE2 = 2;

const TEMPLATE_SIZE = 22
const TEMPLATE_SD_THRESH = 5.0;
const MAX_SIM_THRESH = 0.95;

const MAX_THRESH = 0.9;
const MIN_THRESH = 0.55;
const SD_THRESH = 8.0;
const OCCUPANCY_SIZE = 24 * 2 / 3;

/*
 * Input image is in grey format. the imageData array size is width * height. value range from 0-255
 * pixel value at row r and c = imageData[r * width + c]
 *
 * @param {Uint8Array} options.imageData
 * @param {int} options.width image width
 * @param {int} options.height image height
 */
const extract = (image) => {
  const {data: imageData, width, height, dpi} = image;

  // Step 1 - filter out interesting points. Interesting points have strong pixel value changed across neighbours
  const isPixelSelected = [width * height];
  for (let i = 0; i < isPixelSelected.length; i++) isPixelSelected[i] = false;

  // Step 1.1 consider a pixel at position (x, y). compute:
  //   dx = ((data[x+1, y-1] - data[x-1, y-1]) + (data[x+1, y] - data[x-1, y]) + (data[x+1, y+1] - data[x-1, y-1])) / 256 / 3
  //   dy = ((data[x+1, y+1] - data[x+1, y-1]) + (data[x, y+1] - data[x, y-1]) + (data[x-1, y+1] - data[x-1, y-1])) / 256 / 3
  //   dValue =  sqrt(dx^2 + dy^2) / 2;
  const dValue = new Float32Array(imageData.length);
  for (let i = 0; i < width; i++) {
    dValue[i] = -1;
    dValue[width * (height-1) + i] = -1;
  }
  for (let j = 0; j < height; j++) {
    dValue[j*width] = -1;
    dValue[j*width + width-1] = -1;
  }

  for (let i = 1; i < width-1; i++) {
    for (let j = 1; j < height-1; j++) {
      let pos = i + width * j;

      let dx = 0.0;
      let dy = 0.0;
      for (let k = -1; k <= 1; k++) {
        dx += (imageData[pos + width*k + 1] - imageData[pos + width*k -1]);
        dy += (imageData[pos + width + k] - imageData[pos - width + k]);
      }
      dx /= (3 * 256);
      dy /= (3 * 256);
      dValue[pos] = Math.sqrt( (dx * dx + dy * dy) / 2);
    }
  }

  // Step 1.2 - select all pixel which is dValue largest than all its neighbour as "potential" candidate
  //  the number of selected points is still too many, so we use the value to further filter (e.g. largest the dValue, the better)
  const dValueHist = new Uint32Array(1000); // histogram of dvalue scaled to [0, 1000)
  for (let i = 0; i < 1000; i++) dValueHist[i] = 0;
  const neighbourOffsets = [-1, 1, -width, width];
  let allCount = 0;
  for (let i = 1; i < width-1; i++) {
    for (let j = 1; j < height-1; j++) {
      let pos = i + width * j;
      let isMax = true;
      for (let d = 0; d < neighbourOffsets.length; d++) {
        if (dValue[pos] <= dValue[pos + neighbourOffsets[d]]) {
          isMax = false;
          break;
        }
      }
      if (isMax) {
        let k = Math.floor(dValue[pos] * 1000);
        if (k > 999) k = 999; // k>999 should not happen if computaiton is correction
        if (k < 0) k = 0; // k<0 should not happen if computaiton is correction
        dValueHist[k] += 1;
        allCount += 1;
        isPixelSelected[pos] = true;
      }
    }
  }

  // reduce number of points according to dValue.
  // actually, the whole Step 1. might be better to just sort the dvalues and pick the top (0.02 * width * height) points
  const maxPoints = 0.02 * width * height;
  let k = 999;
  let filteredCount = 0;
  while (k >= 0) {
    filteredCount += dValueHist[k];
    if (filteredCount > maxPoints) break;
    k--;
  }

  //console.log("image size: ", width * height);
  //console.log("extracted featues: ", allCount);
  //console.log("filtered featues: ", filteredCount);

  for (let i = 0; i < isPixelSelected.length; i++) {
    if (isPixelSelected[i]) {
      if (dValue[i] * 1000 < k) isPixelSelected[i] = false;
    }
  }

  //console.log("selected count: ", isPixelSelected.reduce((a, b) => {return a + (b?1:0);}, 0));

  // Step 2
  // prebuild cumulative sum matrix for fast computation
  const imageDataSqr = [];
  for (let i = 0; i < imageData.length; i++) {
    imageDataSqr[i] = imageData[i] * imageData[i];
  }
  const imageDataCumsum = new Cumsum(imageData, width, height);
  const imageDataSqrCumsum = new Cumsum(imageDataSqr, width, height);

  // holds the max similariliy value computed within SEARCH area of each pixel
  const featureMap = new Float32Array(imageData.length);

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const pos = j * width + i;
      if (!isPixelSelected[pos]) {
        featureMap[pos] = 1.0;
        continue;
      }

      const vlen = _templateVar({image, cx: i, cy: j, sdThresh: TEMPLATE_SD_THRESH, imageDataCumsum, imageDataSqrCumsum});
      if (vlen === null) {
        featureMap[pos] = 1.0;
        continue;
      }

      let max = -1.0;
      for (let jj = -SEARCH_SIZE1; jj <= SEARCH_SIZE1; jj++) {
        for (let ii = -SEARCH_SIZE1; ii <= SEARCH_SIZE1; ii++) {
          if (ii * ii + jj * jj <= SEARCH_SIZE2 * SEARCH_SIZE2) continue;
          const sim = _getSimilarity({image, cx: i+ii, cy: j+jj, vlen: vlen, tx: i, ty: j, imageDataCumsum, imageDataSqrCumsum});

          if (sim === null) continue;

          if (sim > max) {
            max = sim;
            if (max > MAX_SIM_THRESH) break;
          }
        }
        if (max > MAX_SIM_THRESH) break;
      }
      featureMap[pos] = max;
    }
  }

  if (window.DEBUG) {
    console.log("featuremap", featureMap.length, window.debugContent.featureMaps[window.debug.extractIndex].length);
    for (let i = 0; i < featureMap.length; i++) {
      if ( Math.abs(featureMap[i] - window.debugContent.featureMaps[window.debug.extractIndex][i]) > 0.00001) {
        console.log("incorrect feature map", i, featureMap[i], window.debugContent.featureMaps[window.debug.extractIndex][i]);
      }
    }
  }

  // Step 2.2 select feature
  const coords = _selectFeature({image, featureMap, templateSize: TEMPLATE_SIZE, searchSize: SEARCH_SIZE2, occSize: OCCUPANCY_SIZE, maxSimThresh: MAX_THRESH, minSimThresh: MIN_THRESH, sdThresh: SD_THRESH, imageDataCumsum, imageDataSqrCumsum});

  return coords;
}

const _selectFeature = (options) => {
  let {image, featureMap, templateSize, searchSize, occSize, maxSimThresh, minSimThresh, sdThresh, imageDataCumsum, imageDataSqrCumsum} = options;
  const {data: imageData, width, height, dpi} = image;

  //console.log("params: ", templateSize, templateSize, occSize, maxSimThresh, minSimThresh, sdThresh);

  occSize *= 2;

  const divSize = (templateSize * 2 + 1) * 3;
  const xDiv = Math.floor(width / divSize);
  const yDiv = Math.floor(height / divSize);

  let maxFeatureNum = Math.floor(width / occSize) * Math.floor(height / occSize) + xDiv * yDiv;
  //console.log("max feature num: ", maxFeatureNum);

  const coords = [];
  const image2 = new Float32Array(imageData.length);
  for (let i = 0; i < image2.length; i++) {
    image2[i] = featureMap[i];
  }

  let num = 0;
  while (num < maxFeatureNum) {
    let minSim = maxSimThresh;
    let cx = -1;
    let cy = -1;
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        if (image2[j*width+i] < minSim) {
          minSim = image2[j*width+i];
          cx = i;
          cy = j;
        }
      }
    }
    if (cx === -1) break;

    const vlen = _templateVar({image, cx: cx, cy: cy, sdThresh: 0, imageDataCumsum, imageDataSqrCumsum});
    if (vlen === null) {
      image2[ cy * width + cx ] = 1.0;
      continue;
    }
    if (vlen / (templateSize * 2 + 1) < sdThresh) {
      image2[ cy * width + cx ] = 1.0;
      continue;
    }

    let min = 1.0;
    let max = -1.0;

    for (let j = -searchSize; j <= searchSize; j++) {
      for (let i = -searchSize; i <= searchSize; i++) {
        if (i*i + j*j > searchSize * searchSize) continue;
        if (i === 0 && j === 0) continue;

        const sim = _getSimilarity({image, vlen, cx: cx+i, cy: cy+j, tx: cx, ty:cy, imageDataCumsum, imageDataSqrCumsum});
        if (sim === null) continue;

        if (sim < min) {
          min = sim;
          if (min < minSimThresh && min < minSim) break;
        }
        if (sim > max) {
          max = sim;
          if (max > 0.99) break;
        }
      }
      if( (min < minSimThresh && min < minSim) || max > 0.99 ) break;
    }

    if( (min < minSimThresh && min < minSim) || max > 0.99 ) {
        image2[ cy * width + cx ] = 1.0;
        continue;
    }

    coords.push({
      x: cx,
      y: cy,
      mx: 1.0 * cx / dpi * 25.4,
      my: 1.0 * (height - cy) / dpi * 25.4,
      maxSim: minSim,
    })

    num += 1;
    //console.log(num, '(', cx, ',', cy, ')', minSim, 'min = ', min, 'max = ', max, 'sd = ', vlen/(templateSize*2+1));

    // no other feature points within occSize square
    for (let j = -occSize; j <= occSize; j++) {
      for (let i = -occSize; i <= occSize; i++) {
        if (cy + j < 0 || cy + j >= height || cx + i < 0 || cx + i >= width) continue;
        image2[ (cy+j)*width + (cx+i) ] = 1.0;
      }
    }
  }
  return coords;
}

// compute variances of the pixels, centered at (cx, cy)
const _templateVar = ({image, cx, cy, sdThresh, imageDataCumsum, imageDataSqrCumsum}) => {
  if (cx - TEMPLATE_SIZE < 0 || cx + TEMPLATE_SIZE >= image.width) return null;
  if (cy - TEMPLATE_SIZE < 0 || cy + TEMPLATE_SIZE >= image.height) return null;

  const templateWidth = 2 * TEMPLATE_SIZE + 1;
  const nPixels = templateWidth * templateWidth;

  let average = imageDataCumsum.query(cx - TEMPLATE_SIZE, cy - TEMPLATE_SIZE, cx + TEMPLATE_SIZE, cy+TEMPLATE_SIZE);
  average /= nPixels;

  //v = sum((pixel_i - avg)^2) for all pixel i within the template
  //  = sum(pixel_i^2) - sum(2 * avg * pixel_i) + sum(avg^avg)

  let vlen = imageDataSqrCumsum.query(cx - TEMPLATE_SIZE, cy - TEMPLATE_SIZE, cx + TEMPLATE_SIZE, cy+TEMPLATE_SIZE);
  vlen -= 2 * average * imageDataCumsum.query(cx - TEMPLATE_SIZE, cy - TEMPLATE_SIZE, cx + TEMPLATE_SIZE, cy+TEMPLATE_SIZE);
  vlen += nPixels * average * average;

  if (vlen / nPixels < sdThresh * sdThresh) return null;
  vlen = Math.sqrt(vlen);
  return vlen;
}

const _getSimilarity = (options) => {
  const {image, cx, cy, vlen, tx, ty, imageDataCumsum, imageDataSqrCumsum} = options;
  const {data: imageData, width, height} = image;
  const templateSize = TEMPLATE_SIZE;

  if (cx - templateSize < 0 || cx + templateSize >= width) return null;
  if (cy - templateSize < 0 || cy + templateSize >= height) return null;

  const templateWidth = 2 * templateSize + 1;

  let sx = imageDataCumsum.query(cx-templateSize, cy-templateSize, cx+templateSize, cy+templateSize);
  let sxx = imageDataSqrCumsum.query(cx-templateSize, cy-templateSize, cx+templateSize, cy+templateSize);
  let sxy = 0;

  // !! This loop is the performance bottleneck. Use moving pointers to optimize
  //
  //   for (let i = cx - templateSize, i2 = tx - templateSize; i <= cx + templateSize; i++, i2++) {
  //     for (let j = cy - templateSize, j2 = ty - templateSize; j <= cy + templateSize; j++, j2++) {
  //       sxy += imageData[j*width + i] * imageData[j2*width + i2];
  //     }
  //   }
  //
  let p1 = (cy-templateSize) * width + (cx-templateSize);
  let p2 = (ty-templateSize) * width + (tx-templateSize);
  let nextRowOffset = width - templateWidth;
  for (let j = 0; j < templateWidth; j++) {
    for (let i = 0; i < templateWidth; i++) {
      sxy += imageData[p1] * imageData[p2];
      p1 +=1;
      p2 +=1;
    }
    p1 += nextRowOffset;
    p2 += nextRowOffset;
  }

  let templateAverage = imageDataCumsum.query(tx-templateSize, ty-templateSize, tx+templateSize, ty+templateSize);
  templateAverage /= templateWidth * templateWidth;
  sxy -= templateAverage * sx;

  let vlen2 = sxx - sx*sx / (templateWidth * templateWidth);
  if (vlen2 == 0) return null;
  vlen2 = Math.sqrt(vlen2);

  const sim = 1.0 * sxy / (vlen * vlen2);
  return sim;
}

module.exports = {
  extract
};


/***/ }),

/***/ "./src/image-target/tracking/tracker.js":
/*!**********************************************!*\
  !*** ./src/image-target/tracking/tracker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {extract} = __webpack_require__(/*! ./extractor */ "./src/image-target/tracking/extractor.js");
const {track} = __webpack_require__(/*! ./tracking */ "./src/image-target/tracking/tracking.js");
const {createRandomizer} = __webpack_require__(/*! ../utils/randomizer.js */ "./src/image-target/utils/randomizer.js");

class Tracker {
  constructor(trackingData, imageList, projectionTransform) {
    this.featureSets = trackingData.featureSets;
    this.imageList = imageList;
    this.projectionTransform = projectionTransform;
    this.randomizer = createRandomizer();
    this.prevResults = [];
  }

  detected(modelViewTransform) {
    this.prevResults = [{
      modelViewTransform: modelViewTransform,
      selectedFeatures: []
    }];
  }

  track(targetImage) {
    const result = track({
      projectionTransform: this.projectionTransform,
      featureSets: this.featureSets,
      prevResults: this.prevResults,
      randomizer: this.randomizer,
      imageList: this.imageList,
      targetImage,
    });

    if (result !== null) {
      this.prevResults.push(result);
      if (this.prevResults.length > 3) {
        this.prevResults.shift();
      }
    } else {
      this.prevResults = [];
    }
  }

  getLatest() {
    if (this.prevResults.length === 0) return null;

    return this.prevResults[this.prevResults.length-1].modelViewTransform;
  }
}

const _buildFeatureSets = ({imageList}) => {
  const featureSets = [];
  for (let i = 0; i < imageList.length; i++) {
    if (window.DEBUG) {window.debug.extractIndex = i};

    const image = imageList[i];
    const coords = extract(image);

    const featureSet = {};
    featureSet.scale = i;
    featureSet.mindpi = (i === imageList.length-1)? imageList[i].dpi * 0.5: imageList[i+1].dpi;
    featureSet.maxdpi = (i === 0)? imageList[i].dpi * 2: (imageList[i].dpi * 0.8 + imageList[i-1].dpi * 0.2);
    featureSet.coords = [];
    for (let j = 0; j < coords.length; j++) {
      featureSet.coords.push({
        x: coords[j].x,
        y: coords[j].y,
        mx: coords[j].mx,
        my: coords[j].my,
        maxSim: coords[j].maxSim,
      });
    }
    featureSets.push(featureSet);
  }
  return featureSets;
}

const compileTracking = ({imageList}) => {
  const featureSets = _buildFeatureSets({imageList});
  return {featureSets};
}

module.exports = {
  Tracker,
  compileTracking
}


/***/ }),

/***/ "./src/image-target/tracking/tracking.js":
/*!***********************************************!*\
  !*** ./src/image-target/tracking/tracking.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {screenToMarkerCoordinate, applyModelViewProjectionTransform, buildModelViewProjectionTransform, computeScreenCoordiate} = __webpack_require__(/*! ../icp/utils.js */ "./src/image-target/icp/utils.js");
const {refineHomography} = __webpack_require__(/*! ../icp/refine_homography.js */ "./src/image-target/icp/refine_homography.js");

const AR2_TRACKING_CANDIDATE_MAX = 200

const AR2_DEFAULT_SEARCH_FEATURE_NUM = 16;
const AR2_TEMP_SCALE = 2;
const AR2_DEFAULT_TS = 6;
const AR2_DEFAULT_TRACKING_SD_THRESH = 5.0;
//const AR2_SIM_THRESH = 0.5;
const AR2_SIM_THRESH = 0.2; // 0.5 is default. 0.2 for debug
const AR2_TRACKING_THRESH = 5.0;
//const AR2_TRACKING_THRESH = 0.2;// 5 is the default. 0.2 for debug
const AR2_SEARCH_SIZE = 6;

const SKIP_INTERVAL = 3;
const KEEP_NUM = 3;

const track = ({projectionTransform, featureSets, imageList, prevResults, targetImage, randomizer}) => {
  const prevModelViewProjectionTransforms = [];
  for (let i = 0;  i < prevResults.length; i++) {
    const t = buildModelViewProjectionTransform(projectionTransform, prevResults[i].modelViewTransform);
    prevModelViewProjectionTransforms.push(t);
  }

  const modelViewTransform = prevResults[prevResults.length-1].modelViewTransform;
  const modelViewProjectionTransform = prevModelViewProjectionTransforms[prevModelViewProjectionTransforms.length-1];

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    window.debug.trackFeatureIndex = -1;
    window.debug.trackingSubIndex = -1;
    window.debug.templateComputeIndex = -1;
  }

  const candidates1 = [];
  const candidates2 = [];
  for (let j = 0; j < featureSets.length; j++) {
    const maxdpi = featureSets[j].maxdpi;
    const mindpi = featureSets[j].mindpi;
    for (let k = 0; k < featureSets[j].coords.length; k++) {
      const {mx, my} = featureSets[j].coords[k];
      const u = computeScreenCoordiate(modelViewProjectionTransform, mx, my, 0);
      if (u === null) continue;

      if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
        window.debug.trackFeatureIndex += 1;
      }

      const {x: sx, y: sy} = u;

      if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
        const f1 = {mx, my, sx, sy, maxdpi, mindpi};
        const f2 = window.debugMatch.trackFeatures[window.debug.trackFeatureIndex];
        if (!window.cmpObj(f1, f2, ['mx', 'my', 'sx', 'sy', 'maxdpi', 'mindpi'])) {
          console.log('INCORRECT track feature', j, k, f1, f2);
        }
      }

      if (sx < 0 || sx >= targetImage.width) continue;
      if (sy < 0 || sy >= targetImage.height) continue;

      const vdir = [];
      vdir[0] = modelViewTransform[0][0] * mx
              + modelViewTransform[0][1] * my
              + modelViewTransform[0][3];
      vdir[1] = modelViewTransform[1][0] * mx
              + modelViewTransform[1][1] * my
              + modelViewTransform[1][3];
      vdir[2] = modelViewTransform[2][0] * mx
              + modelViewTransform[2][1] * my
              + modelViewTransform[2][3];
      const vlen = Math.sqrt(vdir[0]*vdir[0] + vdir[1]*vdir[1] + vdir[2]*vdir[2]);
      vdir[0] /= vlen;
      vdir[1] /= vlen;
      vdir[2] /= vlen;
      const vdirValue = vdir[0]*modelViewTransform[0][2] + vdir[1]*modelViewTransform[1][2] + vdir[2]*modelViewProjectionTransform[2][2];

      if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
        const v1 = [vdir[0], vdir[1], vdir[2], vdirValue];
        const v2 = window.debugMatch.trackFeatures[window.debug.trackFeatureIndex].vdir;
        if (!window.cmpArray(v1, v2)) {
          console.log('INCORRECT track feature vdir', j, k, v1, v2);
        }
      }

      if (vdirValue > -0.1) continue;

      const u1 = computeScreenCoordiate(modelViewProjectionTransform, mx+10, my, 0);
      const u2 = computeScreenCoordiate(modelViewProjectionTransform, mx, my+10, 0);
      const d1 = (u1.x - u.x) * (u1.x - u.x) + (u1.y - u.y) * (u1.y - u.y);
      const d2 = (u2.x - u.x) * (u2.x - u.x) + (u2.y - u.y) * (u2.y - u.y);
      const dpi = [];
      if (d1 < d2) {
        dpi[0] = Math.sqrt(d2) * 2.54; // because mx+10, moved 10. so do 25.4 / 10 = 2.54?
        dpi[1] = Math.sqrt(d1) * 2.54;
      } else {
        dpi[0] = Math.sqrt(d1) * 2.54;
        dpi[1] = Math.sqrt(d2) * 2.54;
      }

      if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
        const v1 = [dpi[0], dpi[1]];
        const v2 = window.debugMatch.trackFeatures[window.debug.trackFeatureIndex].w;
        if (!window.cmpArray(v1, v2)) {
          console.log('INCORRECT track feature dpi', j, k, v1, v2);
        }
      }

      let candidates = null;
      if (dpi[1] <= maxdpi && dpi[1] >= mindpi) {
        candidates = candidates1;
      } else if (dpi[1] <= maxdpi * 2 && dpi[1] >= mindpi / 2) {
        if (candidates2.length === AR2_TRACKING_CANDIDATE_MAX) continue;

        candidates = candidates2;
      }
      if (candidates !== null) {
        candidates.push({level: j, num: k, sx: sx, sy: sy, mx, my, flag: false})
      }
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    console.log("candidates1: ", candidates1.length, window.debugMatch.candidates1.length);
    for (let i = 0; i < candidates1.length; i++) {
      if (!window.cmpObj(candidates1[i], window.debugMatch.candidates1[i], ['level', 'num', 'sx', 'sy'])) {
        console.log("INCORRECT candidate 1", candidates1[i], 'vs', window.debugMatch.candidates1[i]);
      }
    }
    console.log("candidates2: ", candidates2.length, window.debugMatch.candidates2.length);
    for (let i = 0; i < candidates2.length; i++) {
      if (!window.cmpObj(candidates2[i], window.debugMatch.candidates2[i], ['level', 'num', 'sx', 'sy'])) {
        console.log("INCORRECT candidate 2", candidates2[i], 'vs', window.debugMatch.candidates2[i]);
      }
    }
  }

  let i = 0;
  let num = 0;
  let pos = [null, null, null, null];
  let candidates = candidates1;
  let fromCandidates1 = true;
  const selectedFeatures = [];
  const prevSelectedFeatures = prevResults[prevResults.length-1].selectedFeatures;

  while (i < AR2_DEFAULT_SEARCH_FEATURE_NUM) {
    let k = _selectTemplate({pos, prevSelectedFeatures, candidates, num, xsize: targetImage.width, ysize: targetImage.height, randomizer: randomizer});
    //console.log("selected: ", num, k);
    if (k < 0 && fromCandidates1) {
      fromCandidates1 = false;
      candidates = candidates2;
      continue;
    }

    if (k < 0) break;

    candidates[k].flag = true;
    i++;

    pos[num] = [candidates[k].sx, candidates[k].sy];

    const result = _tracking2dSub({targetImage, imageList, modelViewTransform, modelViewProjectionTransform, candidate: candidates[k], prevModelViewProjectionTransforms});

    if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
      const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex];
      console.log("best match", result, t2.bestMatched);
      if (result === null) {
        if (t2.length > 0) {
          console.log("INCORRECT best match", result, t2.bestMatched);
        }
      } else {
        if (t2.bestMatched.length === 0) {
          console.log("INCORRECT best match", result, t2.bestMatched);
        } else {
          if (result.pos2D.x !== t2.bestMatched[0].pos2d[0] || result.pos2D.y !== t2.bestMatched[0].pos2d[1]) {
            console.log("INCORRECT best match pos2D", result, t2.bestMatched);
          }
          if (!window.cmp(result.pos3D.x, t2.bestMatched[0].pos3d[0]) || !window.cmp(result.pos3D.y, t2.bestMatched[0].pos3d[1])) {
            console.log("INCORRECT best match pos3D", result, t2.bestMatched);
          }
        }
      }
    }

    if (result === null) continue;
    if (result.sim <= AR2_SIM_THRESH) continue;

    selectedFeatures.push(Object.assign({level: candidates[k].level, num: candidates[k].num}, result));

    num += 1;
    //if (num === 5) num = 0;
  }

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    console.log("selected features", selectedFeatures.length, window.debugMatch.selectedFeatures.length);
    for (let i = 0; i < selectedFeatures.length; i++) {
      const f1 = selectedFeatures[i];
      const f2 = window.debugMatch.selectedFeatures[i];
      if (f1.pos2D.x !== f2.pos2D[0] || f1.pos2D.y !== f2.pos2D[1]) {
        console.log("INCORRECT selected feature pos2D", i, f1, f2);
      }
      if (!window.cmp(f1.pos3D.x, f2.pos3D[0]) || !window.cmp(f1.pos3D.y, f2.pos3D[1])) {
        console.log("INCORRECT selected feature pos3D", i, f1, f2);
      }
    }
  }

  if (selectedFeatures.length < 4) {
    return null;
    //return {modelViewTransform, selectedFeatures};
  }

  const inlierProbs = [1.0, 0.8, 0.6, 0.4, 0.0];
  let err = null;
  let newModelViewTransform = modelViewTransform;
  let finalModelViewTransform = null;
  for (let i = 0; i < inlierProbs.length; i++) {
    if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
      window.debug.icprobustIndex = i-1;
    }
    let ret = _computeUpdatedTran({modelViewTransform: newModelViewTransform, selectedFeatures, projectionTransform, inlierProb: inlierProbs[i]});
    err = ret.err;
    newModelViewTransform = ret.newModelViewTransform;

    if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
      console.log("tracker icp point", i, newModelViewTransform, err);
      const dErr = window.debugMatch['getTransMat'+(i+1)+'Err'];
      const dMat = window.debugMatch['getTransMat'+(i+1)];
      if (!window.cmp(err, dErr)) {
        console.log("INCORRECT icp err", i, err, dErr);
      }
      if (!window.cmp2DArray(newModelViewTransform, dMat)) {
        console.log("INCORRECT icp mat", i, newModelViewTransform, dMat);
      }
    }

    if (err < AR2_TRACKING_THRESH) {
      finalModelViewTransform = newModelViewTransform;
      break;
    }
  }

  if (finalModelViewTransform === null) return null;

  return {
    modelViewTransform: finalModelViewTransform,
    selectedFeatures
  }
};

const _computeUpdatedTran = ({modelViewTransform, projectionTransform, selectedFeatures, inlierProb}) => {
  let dx = 0;
  let dy = 0;
  let dz = 0;
  for (let i = 0; i < selectedFeatures.length; i++) {
    dx += selectedFeatures[i].pos3D.x;
    dy += selectedFeatures[i].pos3D.y;
    dz += selectedFeatures[i].pos3D.z;
  }
  dx /= selectedFeatures.length;
  dy /= selectedFeatures.length;
  dz /= selectedFeatures.length;

  const worldCoords = [];
  const screenCoords = [];
  for (let i = 0; i < selectedFeatures.length; i++) {
    screenCoords.push({x: selectedFeatures[i].pos2D.x, y: selectedFeatures[i].pos2D.y});
    worldCoords.push({x: selectedFeatures[i].pos3D.x - dx, y: selectedFeatures[i].pos3D.y - dy, z: selectedFeatures[i].pos3D.z - dz});
  }

  const diffModelViewTransform = [[],[],[]];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      diffModelViewTransform[j][i] = modelViewTransform[j][i];
    }
  }
  diffModelViewTransform[0][3] = modelViewTransform[0][0] * dx + modelViewTransform[0][1] * dy + modelViewTransform[0][2] * dz + modelViewTransform[0][3];
  diffModelViewTransform[1][3] = modelViewTransform[1][0] * dx + modelViewTransform[1][1] * dy + modelViewTransform[1][2] * dz + modelViewTransform[1][3];
  diffModelViewTransform[2][3] = modelViewTransform[2][0] * dx + modelViewTransform[2][1] * dy + modelViewTransform[2][2] * dz + modelViewTransform[2][3];

  let ret;
  if (inlierProb < 1) {
     ret = refineHomography({initialModelViewTransform: diffModelViewTransform, projectionTransform, worldCoords, screenCoords, isRobustMode: true, inlierProb});
  } else {
     ret = refineHomography({initialModelViewTransform: diffModelViewTransform, projectionTransform, worldCoords, screenCoords, isRobustMode: false});
  }

  const newModelViewTransform = [[],[],[]];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      newModelViewTransform[j][i] = ret.modelViewTransform[j][i];
    }
  }
  newModelViewTransform[0][3] = ret.modelViewTransform[0][3] - ret.modelViewTransform[0][0] * dx - ret.modelViewTransform[0][1] * dy - ret.modelViewTransform[0][2] * dz;
  newModelViewTransform[1][3] = ret.modelViewTransform[1][3] - ret.modelViewTransform[1][0] * dx - ret.modelViewTransform[1][1] * dy - ret.modelViewTransform[1][2] * dz;
  newModelViewTransform[2][3] = ret.modelViewTransform[2][3] - ret.modelViewTransform[2][0] * dx - ret.modelViewTransform[2][1] * dy - ret.modelViewTransform[2][2] * dz;


  return {err: ret.err, newModelViewTransform};
};

const _tracking2dSub = ({targetImage, imageList, modelViewTransform, modelViewProjectionTransform, candidate, prevModelViewProjectionTransforms}) => {
  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    window.debug.trackingSubIndex += 1;
    window.debug.trackingMatchingSumIndex = -1;
    window.debug.skipMatchingSum = false;
  }
  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    const t1 = {level: candidate.level, num: candidate.num, candidate};
    const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex];
    //console.log("tracking2d", t1, t2);
    if (!window.cmp(t1.candidate.sx, t2.sx) || !window.cmp(t1.candidate.sy, t2.sy)) {
      console.log("INCORRECT tracking 2dsub candidate", t1.candidate, t2);
    }
  }

  const image = imageList[candidate.level];
  const xsize = targetImage.width;
  const ysize = targetImage.height;
  const dpi = image.dpi;
  const {mx, my} = candidate;
  const tsize = AR2_DEFAULT_TS * 2 + 1;
  const {template, validNum: templateValidNum, vlen: templateVlen, sum: templateSum} = _setTemplate({image, dpi, modelViewProjectionTransform, mx, my});

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex];
    for (let i = 0; i < t2.template.length; i++) {
      if (t2.template[i] === 4096) t2.template[i] = null;
    }
    if (!window.cmpArray(template, t2.template)) {
      console.log("INCORRECT tracking2d template", template, t2.template);
    }
    if (!window.cmp(templateVlen, t2.vlen)) console.log("INCORRECT vlen", templateVlen, t2.vlen);
    if (!window.cmp(templateSum, t2.sum)) console.log("INCORRECT sum", templateSum, t2.sum);
    if (!window.cmp(templateValidNum, t2.validNum)) console.log("INCORRECT validNum", templateValidNum, t2.validNum);
  }

  if (templateVlen * templateVlen < tsize * tsize * AR2_DEFAULT_TRACKING_SD_THRESH * AR2_DEFAULT_TRACKING_SD_THRESH) return null;

  // search points
  const us = [];
  const search = [];
  for (let i = 0; i < prevModelViewProjectionTransforms.length; i++) {
    const u = computeScreenCoordiate(prevModelViewProjectionTransforms[i], mx, my, 0);
    us.push([u.x, u.y]);
  }
  for (let i = prevModelViewProjectionTransforms.length-1; i >= 0; i--) {
    if (i + 2 < prevModelViewProjectionTransforms.length) {
      const p1 = us[i+2];
      const p2 = us[i+1];
      const p = us[i];
      search.push([
        Math.floor(3 * p1[0] - 3 * p2[0] + p[0]),
        Math.floor(3 * p1[1] - 3 * p2[1] + p[1]),
      ]);
    } else if (i + 1 < prevModelViewProjectionTransforms.length) {
      const p1 = us[i+1];
      const p = us[i];
      search.push([
        Math.floor(2 * p1[0] - p[0]),
        Math.floor(2 * p1[1] - p[1]),
      ]);

    } else {
      const p = us[i];
      search.push([
        Math.floor(p[0]),
        Math.floor(p[1])
      ]);
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex];
    console.log("search", mx, my, search, t2.search);
  }

  // get best matching
  const mfImage = [];
  for (let j = 0; j < image.height; j++) {
    mfImage.push([]);
    for (let i = 0; i < image.width; i++) {
      mfImage[j].push(null);
    }
  }

  const rx = AR2_SEARCH_SIZE;
  const ry = AR2_SEARCH_SIZE;
  for (let n = 0; n < search.length; n++) {
     // "Snap" position to centre of grid square.
    const px = Math.floor(search[n][0]/(SKIP_INTERVAL + 1))*(SKIP_INTERVAL + 1) + (SKIP_INTERVAL + 1)/2;
    const py = Math.floor(search[n][1]/(SKIP_INTERVAL + 1))*(SKIP_INTERVAL + 1) + (SKIP_INTERVAL + 1)/2;

    let sx = px - rx; // Start position in x.
    if( sx < 0 ) sx = 0;
    let ex = px + rx; // End position in x.
    if( ex >= xsize ) ex = xsize - 1;

    let sy = py - ry; // Start position in y.
    if( sy < 0 ) sy = 0;
    let ey = py + ry; // End position in y.
    if( ey >= ysize ) ey = ysize - 1;

    // Initialise mfImage by writing 0s into the potential search space.
    for (let j = sy; j <= ey; j++ ) {
      for (let i = sx; i <= ex; i++ ) {
        mfImage[j * image.width + i] = 0;
      }
    }
  }

  const keepCandidates = [];
  for (let n = 0; n < search.length; n++) {
    const px = Math.floor(search[n][0]/(SKIP_INTERVAL + 1))*(SKIP_INTERVAL + 1) + (SKIP_INTERVAL + 1)/2;
    const py = Math.floor(search[n][1]/(SKIP_INTERVAL + 1))*(SKIP_INTERVAL + 1) + (SKIP_INTERVAL + 1)/2;

    // -6, -2, +2, +6 (search size=6, skip=3)
    for (let j = py - ry; j <= py + ry; j += SKIP_INTERVAL + 1) {
      if( j - AR2_DEFAULT_TS * AR2_TEMP_SCALE <  0     ) continue;
      if( j + AR2_DEFAULT_TS * AR2_TEMP_SCALE >= ysize ) break;

      for(let i = px - rx; i <= px + rx; i += SKIP_INTERVAL + 1 ) {
        if( i - AR2_DEFAULT_TS * AR2_TEMP_SCALE <  0     ) continue;
        if( i + AR2_DEFAULT_TS * AR2_TEMP_SCALE >= xsize ) break;

        if( mfImage[ j * xsize + i] === 1) continue; // Skip pixels already matched.
        mfImage[j * xsize + i] = 1; // Mark this pixel as matched.

        const wval = _computePointVal({i, j, tsize, xsize, targetImage, template, templateVlen, templateSum, templateValidNum});

        keepCandidates.push({
          x: i,
          y: j,
          wval: wval
        })
      }
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex];
    console.log("keep candidates length", keepCandidates.length, t2.matchingCompute.length);
    for (let i = 0; i < keepCandidates.length; i++) {
      const c1 = keepCandidates[i];
      const c2 = t2.matchingCompute[i];
      if (!window.cmpObj(c1, {x: c2.i, y: c2.j, wval: c2.wval}, ['x', 'y'])) {
        console.log("INCORRECT keep candidate",i, c1, c2);
      }
    }
  }

  // Third pass. Determine best candidate.
  // TODO if keep only 3, can do faster if sort during insert
  //console.log("matching compute", keepCandidates, debugSub.matchingCompute);
  keepCandidates.sort((c1, c2) => {return c2.wval - c1.wval});
  keepCandidates.splice(KEEP_NUM);

  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    window.debug.skipMatchingSum = true;
  }

  // can remove SKIP_INTERVAL and combine this step and previous step? might be slower, but simpler
  let wval2 = -1;
  let bx = -1;
  let by = -1;
  for (let l = 0; l < keepCandidates.length; l++) {
    const cx = keepCandidates[l].x;
    const cy = keepCandidates[l].y;
    for(let j = cy - SKIP_INTERVAL; j <= cy + SKIP_INTERVAL; j++ ) {
      if( j - AR2_DEFAULT_TS * AR2_TEMP_SCALE <  0     ) continue;
      if( j + AR2_DEFAULT_TS * AR2_TEMP_SCALE >= ysize ) break;

      for(let i = cx - SKIP_INTERVAL; i <= cx + SKIP_INTERVAL; i++ ) {
        if( i - AR2_DEFAULT_TS * AR2_TEMP_SCALE <  0     ) continue;
        if( i + AR2_DEFAULT_TS * AR2_TEMP_SCALE >= xsize ) break;

        const wval = _computePointVal({i, j, tsize, xsize, targetImage, template, templateVlen, templateSum, templateValidNum});
        if (wval > wval2) {
          wval2 = wval;
          bx = i;
          by = j;
        }
      }
    }
  }

  if (wval2 === -1) return null;

  //console.log("selected matchingCandidates", keepCandidates, debugSub.matchingCandidates);
  //console.log("bestMatchingCompute", debugSub.bestMatchingCompute);
  //console.log("bestMatched", {mx, my, bx, by, bestVal, pos3D}, debugSub.bestMatched, debugSub.bestMatched[0].trans);

  return {
    pos2D: {x: bx, y: by},
    pos3D: {x: mx, y: my, z: 0},
    sim: wval2/ 10000.0
  }
}

const _computePointVal = ({i, j, tsize, xsize, targetImage, template, templateVlen, templateSum, templateValidNum}) => {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  for (let jj = -AR2_DEFAULT_TS; jj <= AR2_DEFAULT_TS; jj++) {
    for (let ii = -AR2_DEFAULT_TS; ii <= AR2_DEFAULT_TS; ii++) {
      const templateIndex = (jj + AR2_DEFAULT_TS) * tsize + (ii + AR2_DEFAULT_TS);

      const index = (j + jj * AR2_TEMP_SCALE) * xsize + (i + ii * AR2_TEMP_SCALE);
      if (template[templateIndex] !== null) {
        sum1 += targetImage.data[index];
        sum2 += targetImage.data[index] * targetImage.data[index];
        sum3 += targetImage.data[index] * template[templateIndex];

        if (typeof window !== 'undefined' && window.DEBUG_TRACK && !window.debug.skipMatchingSum) {
          window.debug.trackingMatchingSumIndex += 1;
          const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex].matchingComputeSum[window.debug.trackingMatchingSumIndex];
          if (!t2 || sum1 !== t2.sum1 || sum2 !== t2.sum2 || sum3 !== t2.sum3) {
            console.log("INCORRECT matching sum", window.debug.trackingMatchingSumIndex, i, j, sum1, sum2, sum3, t2);
            return;
          }
        }

        //console.log("matchingComputeSum", {ii, jj, p2_x: (i + ii * AR2_TEMP_SCALE), p2_y: (j + jj * AR2_TEMP_SCALE), p2: targetImage.data[index], p1: template[templateIndex], sum1, sum2, sum3}, debugSub.matchingComputeSum[debugSumIndex++]);

        //console.log("sum", sum1, sum2, sum3, index, templateIndex, template[templateIndex], targetImage.data[index]);
      }
    }
  }

  if (typeof window !== 'undefined' && window.DEBUG_TRACK && !window.debug.skipMatchingSum) {
    const t2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex].matchingComputeSum[window.debug.trackingMatchingSumIndex];
    //console.log("done", window.debug.trackingSubIndex, sum1, sum2, sum3, t2);
    //console.log("matching sum", t2);
  }

  sum3 -= sum1 * templateSum / templateValidNum;
  const vlen = sum2 - sum1 * sum1 / templateValidNum;
  let wval = 0;
  if (vlen !== 0) {
    wval = sum3 * 100 / templateVlen * 100 / Math.floor(Math.sqrt(vlen));
    //wval = Math.floor(Math.floor(Math.floor(sum3) * 100 / Math.floor(templateVlen)) * 100 / Math.floor(Math.sqrt(vlen)));
    //console.log("wval", wval, templateVlen, vlen, templateValidNum);
  }

  if (typeof window !== 'undefined' && window.DEBUG_TRACK && !window.debug.skipMatchingSum) {
    //console.log("done", window.debug.trackingSubIndex, sum3, vlen, templateVlen, wval);
  }

  return wval;
}

const _setTemplate = ({image, dpi, modelViewProjectionTransform, mx, my}) => {
  const u = computeScreenCoordiate(modelViewProjectionTransform, mx, my, 0);
  const sx = Math.floor(u.x + 0.5);
  const sy = Math.floor(u.y + 0.5);

  //console.log("_setTemplate", modelViewProjectionTransform, mx, my, u, sx, sy, 'debugSub', debugSub.trans, debugSub.wtrans, debugSub.mx, debugSub.my, debugSub.sx, debugSub.sy, debugSub.ix, debugSub.iy);

  const tsize = AR2_DEFAULT_TS;

  const template = [];
  /*
  for (let j = 0; j <= tsize * 2; j++) {
    template.push([]);
    for (let i = 0; i <= tsize * 2; i++) {
      template[j].push(null);
    }
  }
  */
  if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
    window.debug.templateComputeIndex = -1;
  }

  let sum = 0.0;
  let sum2 = 0.0;
  let k = 0;
  for (let j = -tsize; j <= tsize; j++) {
    const sy2 = sy + j * AR2_TEMP_SCALE;
    for (let i = -tsize; i <= tsize; i++) {
      const sx2 = sx + i * AR2_TEMP_SCALE;

      const {x: mx2, y: my2} = screenToMarkerCoordinate(modelViewProjectionTransform, sx2, sy2);

      let ix = Math.floor(mx2 * dpi / 25.4 + 0.5);
      if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
        // crazy hack for debugging....
        if (ix ===  163 &&  Math.abs(mx2-81.74991690104808)<0.000000001) ix = 164;
        //if (ix === -1 && mx2 === -1.0571840521437157) ix = 0;
      }

      const iy = Math.floor(image.height - my2 * dpi / 25.4 + 0.5);
      //console.log("ix iy", ix, iy, image.width, image.height, mx2, my2, dpi);
      if (ix < 0 || ix >= image.width) {
        template.push(null);
        continue;
      }
      if (iy < 0 || iy >= image.height) {
        template.push(null);
        continue;
      }

      const pixel = image.data[iy * image.width + ix];

      if (typeof window !== 'undefined' && window.DEBUG_TRACK) {
        window.debug.templateComputeIndex += 1;
        const d1 = {ix, iy, sx: sx2, sy: sy2, mx: mx2, my: my2, pixel};
        const d2 = window.debugMatch.tracking2dSub[window.debug.trackingSubIndex].templateCompute[window.debug.templateComputeIndex];
        if (!window.cmpObj(d1, d2, ['ix', 'iy', 'sx', 'sy', 'mx', 'my'])) {
          console.log("INCORRECT template compute", window.debug.templateComputeIndex, d1, d2);
        } else {
          if (d1.pixel !== d2.pixel) {
            console.log('mx2, my2', mx2, my2, dpi, mx2 * dpi / 25.4);
            console.log("INCORRECT template compute pixel", window.debug.templateComputeIndex, d1, d2);
          }
        }
      }

      //template[j+tsize][i+tsize] = pixel;
      template.push(pixel);
      sum += pixel;
      sum2 += pixel * pixel;
      k += 1;
    }
  }

  const vlen = Math.sqrt(sum2 - sum * sum / k);
  //console.log("vlen: ", vlen, "sum: ", sum, "sum2: ", sum2, "k: ", k);
  return {
    template,
    vlen,
    sum,
    validNum: k
  }
}

const _selectTemplate = ({pos, prevSelectedFeatures, candidates, num, xsize, ysize, randomizer}) => {
  if (num === 0) {
    let dmax = 0.0;
    let index = -1;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].flag) continue;
      if (candidates[i].sx < xsize/8 || candidates[i].sx > xsize*7/8) continue;
      if (candidates[i].sy < ysize/8 || candidates[i].sy > ysize*7/8) continue;
      const d = (candidates[i].sx - xsize/2) * (candidates[i].sx - xsize/2)
              + (candidates[i].sy - ysize/2) * (candidates[i].sy - ysize/2);
      if (d > dmax) {
        dmax = d;
        index = i;
      }
    }
    //console.log("selectTemplate", num, dmax, index);
    return index;
  }
  else if (num === 1) {
    let dmax = 0.0;
    let index = -1;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].flag) continue;
      if (candidates[i].sx < xsize/8 || candidates[i].sx > xsize*7/8) continue;
      if (candidates[i].sy < ysize/8 || candidates[i].sy > ysize*7/8) continue;

      const d = (candidates[i].sx - pos[0][0]) * (candidates[i].sx - pos[0][0])
              + (candidates[i].sy - pos[0][1]) * (candidates[i].sy - pos[0][1]);
      if (d > dmax) {
        dmax = d;
        index = i;
      }
    }
    //console.log("selectTemplate", num, dmax, index);
    return index;
  }
  else if (num === 2) {
    let dmax = 0.0;
    let index = -1;
    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].flag) continue;
      if (candidates[i].sx < xsize/8 || candidates[i].sx > xsize*7/8) continue;
      if (candidates[i].sy < ysize/8 || candidates[i].sy > ysize*7/8) continue;

      let d = (candidates[i].sx - pos[0][0]) * (pos[1][1] - pos[0][1])
              - (candidates[i].sy - pos[0][1]) * (pos[1][0] - pos[0][0]);
      d = d * d;
      if (d > dmax) {
        dmax = d;
        index = i;
      }
    }
    //console.log("selectTemplate", num, dmax, index);
    return index;
  }
  else if (num === 3) {
    const {sin: p2sin, cos: p2cos} = _getVectorAngle(pos[0], pos[1]);
    const {sin: p3sin, cos: p3cos} = _getVectorAngle(pos[0], pos[2]);

    let smax = 0.0;
    let index = -1;

    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].flag) continue;
      if (candidates[i].sx < xsize/8 || candidates[i].sx > xsize*7/8) continue;
      if (candidates[i].sy < ysize/8 || candidates[i].sy > ysize*7/8) continue;

      const cPos = [candidates[i].sx, candidates[i].sy];
      const {sin: p4sin, cos: p4cos} = _getVectorAngle(pos[0], cPos);

      let q1, r1, r2;
      if(((p3sin*p2cos - p3cos*p2sin) >= 0.0) && ((p4sin*p2cos - p4cos*p2sin) >= 0.0)) {
        if( p4sin*p3cos - p4cos*p3sin >= 0.0 ) {
          q1 = pos[1]; r1 = pos[2]; r2 = cPos;
        }
        else {
          q1 = pos[1]; r1 = cPos; r2 = pos[2];
        }
      }
      else if(((p4sin*p3cos - p4cos*p3sin) >= 0.0) && ((p2sin*p3cos - p2cos*p3sin) >= 0.0)) {
        if( p4sin*p2cos - p4cos*p2sin >= 0.0 ) {
          q1 = pos[2]; r1 = pos[1]; r2 = cPos;
        }
        else {
          q1 = pos[2]; r1 = cPos; r2 = pos[1];
        }
      }
      else if(((p2sin*p4cos - p2cos*p4sin) >= 0.0) && ((p3sin*p4cos - p3cos*p4sin) >= 0.0)) {
        if( p3sin*p2cos - p3cos*p2sin >= 0.0 ) {
          q1 = cPos; r1 = pos[1]; r2 = pos[2];
        }
        else {
          q1 = cPos; r1 = pos[2]; r2 = pos[1];
        }
      }
      else continue;

      const s = _getRegionArea(pos[0], q1, r1, r2);

      if( s > smax ) {
        smax = s;
        index = i;
      }
    }
    //console.log("selectTemplate", num, smax, index);
    return index;
  }
  else {
    for (let i = 0; i < prevSelectedFeatures.length; i++) {
      for (let j = 0; j < candidates.length; j++) {
        if (candidates[j].flag) continue;

        if (prevSelectedFeatures[i].level === candidates[j].level
          && prevSelectedFeatures[i].num === candidates[j].num) {
          return j;
        }
      }
    }

    let available = 0;
    for (let i = 0; i < candidates.length; i++) {
      if (!candidates[i].flag)  available += 1;
    }
    let pick = randomizer.nextInt(available);
    //let pick = Math.floor(Math.random() * available);
    for (let i = 0; i < candidates.length; i++) {
      if (!candidates[i].flag) {
        if (pick === 0) {
          return i;
        } else {
          pick -= 1;
        }
      }
    }
  }
  return -1;
}

const _getVectorAngle = (p1, p2) => {
  const l = Math.sqrt( (p2[0]-p1[0])*(p2[0]-p1[0]) + (p2[1]-p1[1])*(p2[1]-p1[1]) );
  return {
    sin: (p2[1] - p1[1]) / l,
    cos: (p2[0] - p1[0]) / l
  }
}

const _getRegionArea = (p1, p2, p3, p4) => {
  const s = _getTriangleArea(p1, p2, p3)
          + _getTriangleArea(p1, p3, p4);
  return s;
}

const _getTriangleArea = (p1, p2, p3) => {
  const x1 = p2[0] - p1[0];
  const y1 = p2[1] - p1[1];
  const x2 = p3[0] - p1[0];
  const y2 = p3[1] - p1[1];

  const s = 1.0 * (x1 * y2 - x2 * y1) / 2.0;
  return Math.abs(s);
}

module.exports = {
  track
}


/***/ }),

/***/ "./src/image-target/utils/cumsum.js":
/*!******************************************!*\
  !*** ./src/image-target/utils/cumsum.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast 2D submatrix sum using cumulative sum algorithm
class Cumsum {
  constructor(data, width, height) {
    this.cumsum = [];
    for (let j = 0; j < height; j++) {
      this.cumsum.push([]);
      for (let i = 0; i < width; i++) {
        this.cumsum[j].push(0);
      }
    }

    this.cumsum[0][0] = data[0];
    for (let i = 1; i < width; i++) {
      this.cumsum[0][i] = this.cumsum[0][i-1] + data[i];
    }
    for (let j = 1; j < height; j++) {
      this.cumsum[j][0] = this.cumsum[j-1][0] + data[j*width];
    }

    for (let j = 1; j < height; j++) {
      for (let i = 1; i < width; i++) {
        this.cumsum[j][i] = data[j*width+i]
                               + this.cumsum[j-1][i]
                               + this.cumsum[j][i-1]
                               - this.cumsum[j-1][i-1];
      }
    }
  }

  query(x1, y1, x2, y2) {
    let ret = this.cumsum[y2][x2];
    if (y1 > 0) ret -= this.cumsum[y1-1][x2];
    if (x1 > 0) ret -= this.cumsum[y2][x1-1];
    if (x1 > 0 && y1 > 0) ret += this.cumsum[y1-1][x1-1];
    return ret;
  }
}

module.exports = {
  Cumsum
}


/***/ }),

/***/ "./src/image-target/utils/geometry.js":
/*!********************************************!*\
  !*** ./src/image-target/utils/geometry.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// check which side point C on the line from A to B
const linePointSide = (A, B, C) => {
  return ((B[0]-A[0])*(C[1]-A[1])-(B[1]-A[1])*(C[0]-A[0]));
}

// srcPoints, dstPoints: array of four elements [x, y]
const checkFourPointsConsistent = (x1, x2, x3, x4, x1p, x2p, x3p, x4p) => {
  if ((linePointSide(x1, x2, x3) > 0) !== (linePointSide(x1p, x2p, x3p) > 0)) return false;
  if ((linePointSide(x2, x3, x4) > 0) !== (linePointSide(x2p, x3p, x4p) > 0)) return false;
  if ((linePointSide(x3, x4, x1) > 0) !== (linePointSide(x3p, x4p, x1p) > 0)) return false;
  if ((linePointSide(x4, x1, x2) > 0) !== (linePointSide(x4p, x1p, x2p) > 0)) return false;
  return true;
}

const checkThreePointsConsistent = (x1, x2, x3, x1p, x2p, x3p) => {
  if ((linePointSide(x1, x2, x3) > 0) !== (linePointSide(x1p, x2p, x3p) > 0)) return false;
  return true;
}

const determinant = (A) => {
  const C1 =  A[4] * A[8] - A[5] * A[7];
  const C2 =  A[3] * A[8] - A[5] * A[6];
  const C3 =  A[3] * A[7] - A[4] * A[6];
  return A[0] * C1 - A[1] * C2 + A[2] * C3;
}

const matrixInverse33 = (A, threshold) => {
  const det = determinant(A);
  if (Math.abs(det) <= threshold) return null;
  const oneOver = 1.0 / det;

  const B = [
    (A[4] * A[8] - A[5] * A[7]) * oneOver,
    (A[2] * A[7] - A[1] * A[8]) * oneOver,
    (A[1] * A[5] - A[2] * A[4]) * oneOver,
    (A[5] * A[6] - A[3] * A[8]) * oneOver,
    (A[0] * A[8] - A[2] * A[6]) * oneOver,
    (A[2] * A[3] - A[0] * A[5]) * oneOver,
    (A[3] * A[7] - A[4] * A[6]) * oneOver,
    (A[1] * A[6] - A[0] * A[7]) * oneOver,
    (A[0] * A[4] - A[1] * A[3]) * oneOver,
  ];
  return B;
}

const matrixMul33 = (A, B) => {
  const C = [];
  C[0] = A[0]*B[0] + A[1]*B[3] + A[2]*B[6];
  C[1] = A[0]*B[1] + A[1]*B[4] + A[2]*B[7];
  C[2] = A[0]*B[2] + A[1]*B[5] + A[2]*B[8];
  C[3] = A[3]*B[0] + A[4]*B[3] + A[5]*B[6];
  C[4] = A[3]*B[1] + A[4]*B[4] + A[5]*B[7];
  C[5] = A[3]*B[2] + A[4]*B[5] + A[5]*B[8];
  C[6] = A[6]*B[0] + A[7]*B[3] + A[8]*B[6];
  C[7] = A[6]*B[1] + A[7]*B[4] + A[8]*B[7];
  C[8] = A[6]*B[2] + A[7]*B[5] + A[8]*B[8];
  return C;
}

const multiplyPointHomographyInhomogenous = (x, H) => {
  const w = H[6]*x[0] + H[7]*x[1] + H[8];
  const xp = [];
  xp[0] = (H[0]*x[0] + H[1]*x[1] + H[2])/w;
  xp[1] = (H[3]*x[0] + H[4]*x[1] + H[5])/w;
  return xp;
}

const smallestTriangleArea = (x1, x2, x3, x4) => {
  const v12 = _vector(x2, x1);
  const v13 = _vector(x3, x1);
  const v14 = _vector(x4, x1);
  const v32 = _vector(x2, x3);
  const v34 = _vector(x4, x3);
  const a1 = _areaOfTriangle(v12, v13);
  const a2 = _areaOfTriangle(v13, v14);
  const a3 = _areaOfTriangle(v12, v14);
  const a4 = _areaOfTriangle(v32, v34);
  return Math.min(Math.min(Math.min(a1, a2), a3), a4);
}

// check if four points form a convex quadrilaternal.
// all four combinations should have same sign
const quadrilateralConvex = (x1, x2, x3, x4) => {
  const first = linePointSide(x1, x2, x3) <= 0;
  if ( (linePointSide(x2, x3, x4) <= 0) !== first) return false;
  if ( (linePointSide(x3, x4, x1) <= 0) !== first) return false;
  if ( (linePointSide(x4, x1, x2) <= 0) !== first) return false;

  //if (linePointSide(x1, x2, x3) <= 0) return false;
  //if (linePointSide(x2, x3, x4) <= 0) return false;
  //if (linePointSide(x3, x4, x1) <= 0) return false;
  //if (linePointSide(x4, x1, x2) <= 0) return false;
  return true;
}

const _vector = (a, b) => {
  return [
    a[0] - b[0],
    a[1] - b[1]
  ]
}

const _areaOfTriangle = (u, v) => {
  const a = u[0]*v[1] - u[1]*v[0];
  return Math.abs(a) * 0.5;
}

module.exports = {
  matrixInverse33,
  matrixMul33,
  quadrilateralConvex,
  smallestTriangleArea,
  multiplyPointHomographyInhomogenous,
  checkThreePointsConsistent,
  checkFourPointsConsistent,
  determinant
}



/***/ }),

/***/ "./src/image-target/utils/images.js":
/*!******************************************!*\
  !*** ./src/image-target/utils/images.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const upsampleBilinear = ({image, padOneWidth, padOneHeight}) => {
  const {width, height, data} = image;

  const dstWidth = image.width * 2 + (padOneWidth?1:0);
  const dstHeight = image.height * 2 + (padOneHeight?1:0);

  const temp = new Float32Array(dstWidth * dstHeight);
  for (let i = 0; i < dstWidth; i++) {
    const si = 0.5 * i - 0.25;
    let si0 = Math.floor(si);
    let si1 = Math.ceil(si);
    if (si0 < 0) si0 = 0; // border
    if (si1 >= width) si1 = width - 1; // border

    for (let j = 0; j < dstHeight; j++) {
      const sj = 0.5 * j - 0.25;
      let sj0 = Math.floor(sj);
      let sj1 = Math.ceil(sj);
      if (sj0 < 0) sj0 = 0; // border
      if (sj1 >= height) sj1 = height - 1; //border

      const value = (si1 - si) * (sj1 - sj) * data[ sj0 * width + si0 ] +
                    (si1 - si) * (sj - sj0) * data[ sj1 * width + si0 ] +
                    (si - si0) * (sj1 - sj) * data[ sj0 * width + si1 ] +
                    (si - si0) * (sj - sj0) * data[ sj1 * width + si1 ];

      temp[j * dstWidth + i] = value;
    }
  }

  return {data: temp, width: dstWidth, height: dstHeight};
}

const downsampleBilinear = ({image}) => {
  const {data, width, height} = image;

  const dstWidth = Math.floor(width / 2);
  const dstHeight = Math.floor(height / 2);

  const temp = new Float32Array(dstWidth * dstHeight);
  const offsets = [0, 1, width, width+1];
  for (let j = 0; j < dstHeight; j++) {
    for (let i = 0; i < dstWidth; i++) {
      let srcPos = j*2 * width + i*2;

      let value = 0.0;
      for (let d = 0; d < offsets.length; d++) {
        value += data[srcPos+ offsets[d]];
      }
      value *= 0.25;
      temp[j*dstWidth+i] = value;
    }
  }
  return {data: temp, width: dstWidth, height: dstHeight};
}

const resize = ({image, ratio}) => {
  const width = Math.round(image.width * ratio);
  const height = Math.round(image.height * ratio);

  const imageData = new Float32Array(width * height);
  for (let i = 0; i < width; i++) {
    let si1 = Math.round(1.0 * i / ratio);
    let si2 = Math.round(1.0 * (i+1) / ratio) - 1;
    if (si2 >= image.width) si2 = image.width - 1;

    for (let j = 0; j < height; j++) {
      let sj1 = Math.round(1.0 * j / ratio);
      let sj2 = Math.round(1.0 * (j+1) / ratio) - 1;
      if (sj2 >= image.height) sj2 = image.height - 1;

      let sum = 0;
      let count = 0;
      for (let ii = si1; ii <= si2; ii++) {
        for (let jj = sj1; jj <= sj2; jj++) {
          sum += (1.0 * image.data[jj * image.width + ii]);
          count += 1;
        }
      }
      imageData[j * width + i] = Math.floor(sum / count);
    }
  }
  return {data: imageData, width: width, height: height};
}

module.exports = {
  downsampleBilinear,
  upsampleBilinear,
  resize,
}



/***/ }),

/***/ "./src/image-target/utils/randomizer.js":
/*!**********************************************!*\
  !*** ./src/image-target/utils/randomizer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const mRandSeed = 1234;

const createRandomizer = () => {
  const randomizer = {
    seed: mRandSeed,

    arrayShuffle(options) {
      const {arr, sampleSize} = options;
      for (let i = 0; i < sampleSize; i++) {

        this.seed = (214013 * this.seed + 2531011) % (1 << 31);
        let k = (this.seed >> 16) & 0x7fff;
        k = k % arr.length;

        let tmp = arr[i];
        arr[i] = arr[k];
        arr[k] = tmp;
      }
    },

    nextInt(maxValue) {
      this.seed = (214013 * this.seed + 2531011) % (1 << 31);
      let k = (this.seed >> 16) & 0x7fff;
      k = k % maxValue;
      return k;
    }
  }
  return randomizer;
}

module.exports = {
  createRandomizer
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWFueS1hcnJheS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLWFycmF5LW1heC9saWItZXM2L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1hcnJheS1taW4vbGliLWVzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtYXJyYXktcmVzY2FsZS9saWItZXM2L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2NvcnJlbGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2NvdmFyaWFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvY2hvbGVza3kuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvZXZkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL2x1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2RjL25pcGFscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9xci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kYy9zdmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvZGMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kZWNvbXBvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9kZXRlcm1pbmFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9pbnNwZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL2xpbmVhckRlcGVuZGVuY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9tYXRoT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvcHNldWRvSW52ZXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy9zdGF0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9jb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvY29sdW1uU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL2ZsaXBDb2x1bW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvZmxpcFJvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9yb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3Mvcm93U2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3ZpZXdzL3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWwtbWF0cml4L3NyYy92aWV3cy9zdWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21sLW1hdHJpeC9zcmMvdmlld3MvdHJhbnNwb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDFELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvV3JhcHBlck1hdHJpeDJELmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tbC1tYXRyaXgvc3JjL3dyYXAvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueXF1ZXVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hci53b3JrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L2ljcC9lc3RpbWF0ZV9ob21vZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvaWNwL3JlZmluZV9ob21vZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvaWNwL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvaW1hZ2UtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvbWF0Y2hpbmcvZGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC9tYXRjaGluZy9kb2ctcHlyYW1pZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L21hdGNoaW5nL2ZyZWFrLWV4dHJhY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L21hdGNoaW5nL2dhdXNzaWFuLXB5cmFtaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC9tYXRjaGluZy9oYW1taW5nLWRpc3RhbmNlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvbWF0Y2hpbmcvaGllcmFyY2hpY2FsLWNsdXN0ZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC9tYXRjaGluZy9ob21vZ3JhcGh5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvbWF0Y2hpbmcvaG91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC9tYXRjaGluZy9tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvbWF0Y2hpbmcvbWF0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC90cmFja2luZy9leHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC90cmFja2luZy90cmFja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS10YXJnZXQvdHJhY2tpbmcvdHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC91dGlscy9jdW1zdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlLXRhcmdldC91dGlscy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L3V0aWxzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtdGFyZ2V0L3V0aWxzL3JhbmRvbWl6ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztR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Q3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGVBQWU7QUFDbEMscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQyxxQkFBcUIsa0JBQWtCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3R6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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Q0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkMsMEJBQTBCLFdBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pGQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixxQkFBcUIsZ0JBQWdCOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoid29ya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvfmhpdWtpbS9wcm9qZWN0cy9XZWJDYXJkcy9taW5kLWFyLWpzMi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hci53b3JrZXIuanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gaXNBbnlBcnJheShvYmplY3QpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqZWN0KS5lbmRzV2l0aCgnQXJyYXldJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBbnlBcnJheTtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJ2lzLWFueS1hcnJheSc7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIG1heGltdW0gb2YgdGhlIGdpdmVuIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIG1heChpbnB1dCkge1xuICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICB2YXIgbWF4VmFsdWUgPSBpbnB1dFswXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlucHV0W2ldID4gbWF4VmFsdWUpIG1heFZhbHVlID0gaW5wdXRbaV07XG4gIH1cblxuICByZXR1cm4gbWF4VmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1heDtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJ2lzLWFueS1hcnJheSc7XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIG1pbmltdW0gb2YgdGhlIGdpdmVuIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBpbnB1dFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cbmZ1bmN0aW9uIG1pbihpbnB1dCkge1xuICBpZiAoIWlzQXJyYXkoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5wdXQgbXVzdCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIGVtcHR5Jyk7XG4gIH1cblxuICB2YXIgbWluVmFsdWUgPSBpbnB1dFswXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGlucHV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlucHV0W2ldIDwgbWluVmFsdWUpIG1pblZhbHVlID0gaW5wdXRbaV07XG4gIH1cblxuICByZXR1cm4gbWluVmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbjtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJ2lzLWFueS1hcnJheSc7XG5pbXBvcnQgbWF4IGZyb20gJ21sLWFycmF5LW1heCc7XG5pbXBvcnQgbWluIGZyb20gJ21sLWFycmF5LW1pbic7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGlucHV0XG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnM9e31dXG4gKiBAcGFyYW0ge0FycmF5fSBbb3B0aW9ucy5vdXRwdXQ9W11dIHNwZWNpZnkgdGhlIG91dHB1dCBhcnJheSwgY2FuIGJlIHRoZSBpbnB1dCBhcnJheSBmb3IgaW4gcGxhY2UgbW9kaWZpY2F0aW9uXG4gKi9cblxuZnVuY3Rpb24gcmVzY2FsZShpbnB1dCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgaWYgKCFpc0FycmF5KGlucHV0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2lucHV0IG11c3QgYmUgYW4gYXJyYXknKTtcbiAgfSBlbHNlIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnB1dCBtdXN0IG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgdmFyIG91dHB1dDtcblxuICBpZiAob3B0aW9ucy5vdXRwdXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICghaXNBcnJheShvcHRpb25zLm91dHB1dCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ291dHB1dCBvcHRpb24gbXVzdCBiZSBhbiBhcnJheSBpZiBzcGVjaWZpZWQnKTtcbiAgICB9XG5cbiAgICBvdXRwdXQgPSBvcHRpb25zLm91dHB1dDtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBuZXcgQXJyYXkoaW5wdXQubGVuZ3RoKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50TWluID0gbWluKGlucHV0KTtcbiAgdmFyIGN1cnJlbnRNYXggPSBtYXgoaW5wdXQpO1xuXG4gIGlmIChjdXJyZW50TWluID09PSBjdXJyZW50TWF4KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbmltdW0gYW5kIG1heGltdW0gaW5wdXQgdmFsdWVzIGFyZSBlcXVhbC4gQ2Fubm90IHJlc2NhbGUgYSBjb25zdGFudCBhcnJheScpO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1pbiA9IG9wdGlvbnMubWluLFxuICAgICAgbWluVmFsdWUgPSBfb3B0aW9ucyRtaW4gPT09IHZvaWQgMCA/IG9wdGlvbnMuYXV0b01pbk1heCA/IGN1cnJlbnRNaW4gOiAwIDogX29wdGlvbnMkbWluLFxuICAgICAgX29wdGlvbnMkbWF4ID0gb3B0aW9ucy5tYXgsXG4gICAgICBtYXhWYWx1ZSA9IF9vcHRpb25zJG1heCA9PT0gdm9pZCAwID8gb3B0aW9ucy5hdXRvTWluTWF4ID8gY3VycmVudE1heCA6IDEgOiBfb3B0aW9ucyRtYXg7XG5cbiAgaWYgKG1pblZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBvcHRpb24gbXVzdCBiZSBzbWFsbGVyIHRoYW4gbWF4IG9wdGlvbicpO1xuICB9XG5cbiAgdmFyIGZhY3RvciA9IChtYXhWYWx1ZSAtIG1pblZhbHVlKSAvIChjdXJyZW50TWF4IC0gY3VycmVudE1pbik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFtpXSA9IChpbnB1dFtpXSAtIGN1cnJlbnRNaW4pICogZmFjdG9yICsgbWluVmFsdWU7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNjYWxlO1xuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JyZWxhdGlvbih4TWF0cml4LCB5TWF0cml4ID0geE1hdHJpeCwgb3B0aW9ucyA9IHt9KSB7XG4gIHhNYXRyaXggPSBuZXcgTWF0cml4KHhNYXRyaXgpO1xuICBsZXQgeUlzU2FtZSA9IGZhbHNlO1xuICBpZiAoXG4gICAgdHlwZW9mIHlNYXRyaXggPT09ICdvYmplY3QnICYmXG4gICAgIU1hdHJpeC5pc01hdHJpeCh5TWF0cml4KSAmJlxuICAgICFBcnJheS5pc0FycmF5KHlNYXRyaXgpXG4gICkge1xuICAgIG9wdGlvbnMgPSB5TWF0cml4O1xuICAgIHlNYXRyaXggPSB4TWF0cml4O1xuICAgIHlJc1NhbWUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHlNYXRyaXggPSBuZXcgTWF0cml4KHlNYXRyaXgpO1xuICB9XG4gIGlmICh4TWF0cml4LnJvd3MgIT09IHlNYXRyaXgucm93cykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvdGggbWF0cmljZXMgbXVzdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiByb3dzJyk7XG4gIH1cblxuICBjb25zdCB7IGNlbnRlciA9IHRydWUsIHNjYWxlID0gdHJ1ZSB9ID0gb3B0aW9ucztcbiAgaWYgKGNlbnRlcikge1xuICAgIHhNYXRyaXguY2VudGVyKCdjb2x1bW4nKTtcbiAgICBpZiAoIXlJc1NhbWUpIHtcbiAgICAgIHlNYXRyaXguY2VudGVyKCdjb2x1bW4nKTtcbiAgICB9XG4gIH1cbiAgaWYgKHNjYWxlKSB7XG4gICAgeE1hdHJpeC5zY2FsZSgnY29sdW1uJyk7XG4gICAgaWYgKCF5SXNTYW1lKSB7XG4gICAgICB5TWF0cml4LnNjYWxlKCdjb2x1bW4nKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzZHggPSB4TWF0cml4LnN0YW5kYXJkRGV2aWF0aW9uKCdjb2x1bW4nLCB7IHVuYmlhc2VkOiB0cnVlIH0pO1xuICBjb25zdCBzZHkgPSB5SXNTYW1lXG4gICAgPyBzZHhcbiAgICA6IHlNYXRyaXguc3RhbmRhcmREZXZpYXRpb24oJ2NvbHVtbicsIHsgdW5iaWFzZWQ6IHRydWUgfSk7XG5cbiAgY29uc3QgY29yciA9IHhNYXRyaXgudHJhbnNwb3NlKCkubW11bCh5TWF0cml4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3JyLnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29yci5jb2x1bW5zOyBqKyspIHtcbiAgICAgIGNvcnIuc2V0KFxuICAgICAgICBpLFxuICAgICAgICBqLFxuICAgICAgICBjb3JyLmdldChpLCBqKSAqICgxIC8gKHNkeFtpXSAqIHNkeVtqXSkpICogKDEgLyAoeE1hdHJpeC5yb3dzIC0gMSkpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvcnI7XG59XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJy4vbWF0cml4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvdmFyaWFuY2UoeE1hdHJpeCwgeU1hdHJpeCA9IHhNYXRyaXgsIG9wdGlvbnMgPSB7fSkge1xuICB4TWF0cml4ID0gbmV3IE1hdHJpeCh4TWF0cml4KTtcbiAgbGV0IHlJc1NhbWUgPSBmYWxzZTtcbiAgaWYgKFxuICAgIHR5cGVvZiB5TWF0cml4ID09PSAnb2JqZWN0JyAmJlxuICAgICFNYXRyaXguaXNNYXRyaXgoeU1hdHJpeCkgJiZcbiAgICAhQXJyYXkuaXNBcnJheSh5TWF0cml4KVxuICApIHtcbiAgICBvcHRpb25zID0geU1hdHJpeDtcbiAgICB5TWF0cml4ID0geE1hdHJpeDtcbiAgICB5SXNTYW1lID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB5TWF0cml4ID0gbmV3IE1hdHJpeCh5TWF0cml4KTtcbiAgfVxuICBpZiAoeE1hdHJpeC5yb3dzICE9PSB5TWF0cml4LnJvd3MpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb3RoIG1hdHJpY2VzIG11c3QgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2Ygcm93cycpO1xuICB9XG4gIGNvbnN0IHsgY2VudGVyID0gdHJ1ZSB9ID0gb3B0aW9ucztcbiAgaWYgKGNlbnRlcikge1xuICAgIHhNYXRyaXggPSB4TWF0cml4LmNlbnRlcignY29sdW1uJyk7XG4gICAgaWYgKCF5SXNTYW1lKSB7XG4gICAgICB5TWF0cml4ID0geU1hdHJpeC5jZW50ZXIoJ2NvbHVtbicpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb3YgPSB4TWF0cml4LnRyYW5zcG9zZSgpLm1tdWwoeU1hdHJpeCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY292LnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY292LmNvbHVtbnM7IGorKykge1xuICAgICAgY292LnNldChpLCBqLCBjb3YuZ2V0KGksIGopICogKDEgLyAoeE1hdHJpeC5yb3dzIC0gMSkpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdjtcbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaG9sZXNreURlY29tcG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcbiAgICBpZiAoIXZhbHVlLmlzU3ltbWV0cmljKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIG5vdCBzeW1tZXRyaWMnKTtcbiAgICB9XG5cbiAgICBsZXQgYSA9IHZhbHVlO1xuICAgIGxldCBkaW1lbnNpb24gPSBhLnJvd3M7XG4gICAgbGV0IGwgPSBuZXcgTWF0cml4KGRpbWVuc2lvbiwgZGltZW5zaW9uKTtcbiAgICBsZXQgcG9zaXRpdmVEZWZpbml0ZSA9IHRydWU7XG4gICAgbGV0IGksIGosIGs7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgZGltZW5zaW9uOyBqKyspIHtcbiAgICAgIGxldCBkID0gMDtcbiAgICAgIGZvciAoayA9IDA7IGsgPCBqOyBrKyspIHtcbiAgICAgICAgbGV0IHMgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgazsgaSsrKSB7XG4gICAgICAgICAgcyArPSBsLmdldChrLCBpKSAqIGwuZ2V0KGosIGkpO1xuICAgICAgICB9XG4gICAgICAgIHMgPSAoYS5nZXQoaiwgaykgLSBzKSAvIGwuZ2V0KGssIGspO1xuICAgICAgICBsLnNldChqLCBrLCBzKTtcbiAgICAgICAgZCA9IGQgKyBzICogcztcbiAgICAgIH1cblxuICAgICAgZCA9IGEuZ2V0KGosIGopIC0gZDtcblxuICAgICAgcG9zaXRpdmVEZWZpbml0ZSAmPSBkID4gMDtcbiAgICAgIGwuc2V0KGosIGosIE1hdGguc3FydChNYXRoLm1heChkLCAwKSkpO1xuICAgICAgZm9yIChrID0gaiArIDE7IGsgPCBkaW1lbnNpb247IGsrKykge1xuICAgICAgICBsLnNldChqLCBrLCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLkwgPSBsO1xuICAgIHRoaXMucG9zaXRpdmVEZWZpbml0ZSA9IEJvb2xlYW4ocG9zaXRpdmVEZWZpbml0ZSk7XG4gIH1cblxuICBpc1Bvc2l0aXZlRGVmaW5pdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpdmVEZWZpbml0ZTtcbiAgfVxuXG4gIHNvbHZlKHZhbHVlKSB7XG4gICAgdmFsdWUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgodmFsdWUpO1xuXG4gICAgbGV0IGwgPSB0aGlzLkw7XG4gICAgbGV0IGRpbWVuc2lvbiA9IGwucm93cztcblxuICAgIGlmICh2YWx1ZS5yb3dzICE9PSBkaW1lbnNpb24pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGRpbWVuc2lvbnMgZG8gbm90IG1hdGNoJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzUG9zaXRpdmVEZWZpbml0ZSgpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggaXMgbm90IHBvc2l0aXZlIGRlZmluaXRlJyk7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICBsZXQgQiA9IHZhbHVlLmNsb25lKCk7XG4gICAgbGV0IGksIGosIGs7XG5cbiAgICBmb3IgKGsgPSAwOyBrIDwgZGltZW5zaW9uOyBrKyspIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrOyBpKyspIHtcbiAgICAgICAgICBCLnNldChrLCBqLCBCLmdldChrLCBqKSAtIEIuZ2V0KGksIGopICogbC5nZXQoaywgaSkpO1xuICAgICAgICB9XG4gICAgICAgIEIuc2V0KGssIGosIEIuZ2V0KGssIGopIC8gbC5nZXQoaywgaykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoayA9IGRpbWVuc2lvbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IGRpbWVuc2lvbjsgaSsrKSB7XG4gICAgICAgICAgQi5zZXQoaywgaiwgQi5nZXQoaywgaikgLSBCLmdldChpLCBqKSAqIGwuZ2V0KGksIGspKTtcbiAgICAgICAgfVxuICAgICAgICBCLnNldChrLCBqLCBCLmdldChrLCBqKSAvIGwuZ2V0KGssIGspKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQjtcbiAgfVxuXG4gIGdldCBsb3dlclRyaWFuZ3VsYXJNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuTDtcbiAgfVxufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuaW1wb3J0IFdyYXBwZXJNYXRyaXgyRCBmcm9tICcuLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmltcG9ydCB7IGh5cG90ZW51c2UgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBhc3N1bWVTeW1tZXRyaWMgPSBmYWxzZSB9ID0gb3B0aW9ucztcblxuICAgIG1hdHJpeCA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICghbWF0cml4LmlzU3F1YXJlKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIG5vdCBhIHNxdWFyZSBtYXRyaXgnKTtcbiAgICB9XG5cbiAgICBsZXQgbiA9IG1hdHJpeC5jb2x1bW5zO1xuICAgIGxldCBWID0gbmV3IE1hdHJpeChuLCBuKTtcbiAgICBsZXQgZCA9IG5ldyBGbG9hdDY0QXJyYXkobik7XG4gICAgbGV0IGUgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIGxldCB2YWx1ZSA9IG1hdHJpeDtcbiAgICBsZXQgaSwgajtcblxuICAgIGxldCBpc1N5bW1ldHJpYyA9IGZhbHNlO1xuICAgIGlmIChhc3N1bWVTeW1tZXRyaWMpIHtcbiAgICAgIGlzU3ltbWV0cmljID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNTeW1tZXRyaWMgPSBtYXRyaXguaXNTeW1tZXRyaWMoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNTeW1tZXRyaWMpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICAgIFYuc2V0KGksIGosIHZhbHVlLmdldChpLCBqKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRyZWQyKG4sIGUsIGQsIFYpO1xuICAgICAgdHFsMihuLCBlLCBkLCBWKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IEggPSBuZXcgTWF0cml4KG4sIG4pO1xuICAgICAgbGV0IG9ydCA9IG5ldyBGbG9hdDY0QXJyYXkobik7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBILnNldChpLCBqLCB2YWx1ZS5nZXQoaSwgaikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcnRoZXMobiwgSCwgb3J0LCBWKTtcbiAgICAgIGhxcjIobiwgZSwgZCwgViwgSCk7XG4gICAgfVxuXG4gICAgdGhpcy5uID0gbjtcbiAgICB0aGlzLmUgPSBlO1xuICAgIHRoaXMuZCA9IGQ7XG4gICAgdGhpcy5WID0gVjtcbiAgfVxuXG4gIGdldCByZWFsRWlnZW52YWx1ZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5kKTtcbiAgfVxuXG4gIGdldCBpbWFnaW5hcnlFaWdlbnZhbHVlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmUpO1xuICB9XG5cbiAgZ2V0IGVpZ2VudmVjdG9yTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLlY7XG4gIH1cblxuICBnZXQgZGlhZ29uYWxNYXRyaXgoKSB7XG4gICAgbGV0IG4gPSB0aGlzLm47XG4gICAgbGV0IGUgPSB0aGlzLmU7XG4gICAgbGV0IGQgPSB0aGlzLmQ7XG4gICAgbGV0IFggPSBuZXcgTWF0cml4KG4sIG4pO1xuICAgIGxldCBpLCBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgWC5zZXQoaSwgaiwgMCk7XG4gICAgICB9XG4gICAgICBYLnNldChpLCBpLCBkW2ldKTtcbiAgICAgIGlmIChlW2ldID4gMCkge1xuICAgICAgICBYLnNldChpLCBpICsgMSwgZVtpXSk7XG4gICAgICB9IGVsc2UgaWYgKGVbaV0gPCAwKSB7XG4gICAgICAgIFguc2V0KGksIGkgLSAxLCBlW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFg7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJlZDIobiwgZSwgZCwgVikge1xuICBsZXQgZiwgZywgaCwgaSwgaiwgaywgaGgsIHNjYWxlO1xuXG4gIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBkW2pdID0gVi5nZXQobiAtIDEsIGopO1xuICB9XG5cbiAgZm9yIChpID0gbiAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICBzY2FsZSA9IDA7XG4gICAgaCA9IDA7XG4gICAgZm9yIChrID0gMDsgayA8IGk7IGsrKykge1xuICAgICAgc2NhbGUgPSBzY2FsZSArIE1hdGguYWJzKGRba10pO1xuICAgIH1cblxuICAgIGlmIChzY2FsZSA9PT0gMCkge1xuICAgICAgZVtpXSA9IGRbaSAtIDFdO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBkW2pdID0gVi5nZXQoaSAtIDEsIGopO1xuICAgICAgICBWLnNldChpLCBqLCAwKTtcbiAgICAgICAgVi5zZXQoaiwgaSwgMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoayA9IDA7IGsgPCBpOyBrKyspIHtcbiAgICAgICAgZFtrXSAvPSBzY2FsZTtcbiAgICAgICAgaCArPSBkW2tdICogZFtrXTtcbiAgICAgIH1cblxuICAgICAgZiA9IGRbaSAtIDFdO1xuICAgICAgZyA9IE1hdGguc3FydChoKTtcbiAgICAgIGlmIChmID4gMCkge1xuICAgICAgICBnID0gLWc7XG4gICAgICB9XG5cbiAgICAgIGVbaV0gPSBzY2FsZSAqIGc7XG4gICAgICBoID0gaCAtIGYgKiBnO1xuICAgICAgZFtpIC0gMV0gPSBmIC0gZztcbiAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgZVtqXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgZiA9IGRbal07XG4gICAgICAgIFYuc2V0KGosIGksIGYpO1xuICAgICAgICBnID0gZVtqXSArIFYuZ2V0KGosIGopICogZjtcbiAgICAgICAgZm9yIChrID0gaiArIDE7IGsgPD0gaSAtIDE7IGsrKykge1xuICAgICAgICAgIGcgKz0gVi5nZXQoaywgaikgKiBkW2tdO1xuICAgICAgICAgIGVba10gKz0gVi5nZXQoaywgaikgKiBmO1xuICAgICAgICB9XG4gICAgICAgIGVbal0gPSBnO1xuICAgICAgfVxuXG4gICAgICBmID0gMDtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgZVtqXSAvPSBoO1xuICAgICAgICBmICs9IGVbal0gKiBkW2pdO1xuICAgICAgfVxuXG4gICAgICBoaCA9IGYgLyAoaCArIGgpO1xuICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBlW2pdIC09IGhoICogZFtqXTtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBmID0gZFtqXTtcbiAgICAgICAgZyA9IGVbal07XG4gICAgICAgIGZvciAoayA9IGo7IGsgPD0gaSAtIDE7IGsrKykge1xuICAgICAgICAgIFYuc2V0KGssIGosIFYuZ2V0KGssIGopIC0gKGYgKiBlW2tdICsgZyAqIGRba10pKTtcbiAgICAgICAgfVxuICAgICAgICBkW2pdID0gVi5nZXQoaSAtIDEsIGopO1xuICAgICAgICBWLnNldChpLCBqLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZFtpXSA9IGg7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgIFYuc2V0KG4gLSAxLCBpLCBWLmdldChpLCBpKSk7XG4gICAgVi5zZXQoaSwgaSwgMSk7XG4gICAgaCA9IGRbaSArIDFdO1xuICAgIGlmIChoICE9PSAwKSB7XG4gICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICBkW2tdID0gVi5nZXQoaywgaSArIDEpIC8gaDtcbiAgICAgIH1cblxuICAgICAgZm9yIChqID0gMDsgaiA8PSBpOyBqKyspIHtcbiAgICAgICAgZyA9IDA7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPD0gaTsgaysrKSB7XG4gICAgICAgICAgZyArPSBWLmdldChrLCBpICsgMSkgKiBWLmdldChrLCBqKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGsgPSAwOyBrIDw9IGk7IGsrKykge1xuICAgICAgICAgIFYuc2V0KGssIGosIFYuZ2V0KGssIGopIC0gZyAqIGRba10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChrID0gMDsgayA8PSBpOyBrKyspIHtcbiAgICAgIFYuc2V0KGssIGkgKyAxLCAwKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgZFtqXSA9IFYuZ2V0KG4gLSAxLCBqKTtcbiAgICBWLnNldChuIC0gMSwgaiwgMCk7XG4gIH1cblxuICBWLnNldChuIC0gMSwgbiAtIDEsIDEpO1xuICBlWzBdID0gMDtcbn1cblxuZnVuY3Rpb24gdHFsMihuLCBlLCBkLCBWKSB7XG4gIGxldCBnLCBoLCBpLCBqLCBrLCBsLCBtLCBwLCByLCBkbDEsIGMsIGMyLCBjMywgZWwxLCBzLCBzMiwgaXRlcjtcblxuICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgZVtpIC0gMV0gPSBlW2ldO1xuICB9XG5cbiAgZVtuIC0gMV0gPSAwO1xuXG4gIGxldCBmID0gMDtcbiAgbGV0IHRzdDEgPSAwO1xuICBsZXQgZXBzID0gTnVtYmVyLkVQU0lMT047XG5cbiAgZm9yIChsID0gMDsgbCA8IG47IGwrKykge1xuICAgIHRzdDEgPSBNYXRoLm1heCh0c3QxLCBNYXRoLmFicyhkW2xdKSArIE1hdGguYWJzKGVbbF0pKTtcbiAgICBtID0gbDtcbiAgICB3aGlsZSAobSA8IG4pIHtcbiAgICAgIGlmIChNYXRoLmFicyhlW21dKSA8PSBlcHMgKiB0c3QxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbSsrO1xuICAgIH1cblxuICAgIGlmIChtID4gbCkge1xuICAgICAgaXRlciA9IDA7XG4gICAgICBkbyB7XG4gICAgICAgIGl0ZXIgPSBpdGVyICsgMTtcblxuICAgICAgICBnID0gZFtsXTtcbiAgICAgICAgcCA9IChkW2wgKyAxXSAtIGcpIC8gKDIgKiBlW2xdKTtcbiAgICAgICAgciA9IGh5cG90ZW51c2UocCwgMSk7XG4gICAgICAgIGlmIChwIDwgMCkge1xuICAgICAgICAgIHIgPSAtcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRbbF0gPSBlW2xdIC8gKHAgKyByKTtcbiAgICAgICAgZFtsICsgMV0gPSBlW2xdICogKHAgKyByKTtcbiAgICAgICAgZGwxID0gZFtsICsgMV07XG4gICAgICAgIGggPSBnIC0gZFtsXTtcbiAgICAgICAgZm9yIChpID0gbCArIDI7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBkW2ldIC09IGg7XG4gICAgICAgIH1cblxuICAgICAgICBmID0gZiArIGg7XG5cbiAgICAgICAgcCA9IGRbbV07XG4gICAgICAgIGMgPSAxO1xuICAgICAgICBjMiA9IGM7XG4gICAgICAgIGMzID0gYztcbiAgICAgICAgZWwxID0gZVtsICsgMV07XG4gICAgICAgIHMgPSAwO1xuICAgICAgICBzMiA9IDA7XG4gICAgICAgIGZvciAoaSA9IG0gLSAxOyBpID49IGw7IGktLSkge1xuICAgICAgICAgIGMzID0gYzI7XG4gICAgICAgICAgYzIgPSBjO1xuICAgICAgICAgIHMyID0gcztcbiAgICAgICAgICBnID0gYyAqIGVbaV07XG4gICAgICAgICAgaCA9IGMgKiBwO1xuICAgICAgICAgIHIgPSBoeXBvdGVudXNlKHAsIGVbaV0pO1xuICAgICAgICAgIGVbaSArIDFdID0gcyAqIHI7XG4gICAgICAgICAgcyA9IGVbaV0gLyByO1xuICAgICAgICAgIGMgPSBwIC8gcjtcbiAgICAgICAgICBwID0gYyAqIGRbaV0gLSBzICogZztcbiAgICAgICAgICBkW2kgKyAxXSA9IGggKyBzICogKGMgKiBnICsgcyAqIGRbaV0pO1xuXG4gICAgICAgICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgaCA9IFYuZ2V0KGssIGkgKyAxKTtcbiAgICAgICAgICAgIFYuc2V0KGssIGkgKyAxLCBzICogVi5nZXQoaywgaSkgKyBjICogaCk7XG4gICAgICAgICAgICBWLnNldChrLCBpLCBjICogVi5nZXQoaywgaSkgLSBzICogaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCA9ICgtcyAqIHMyICogYzMgKiBlbDEgKiBlW2xdKSAvIGRsMTtcbiAgICAgICAgZVtsXSA9IHMgKiBwO1xuICAgICAgICBkW2xdID0gYyAqIHA7XG4gICAgICB9IHdoaWxlIChNYXRoLmFicyhlW2xdKSA+IGVwcyAqIHRzdDEpO1xuICAgIH1cbiAgICBkW2xdID0gZFtsXSArIGY7XG4gICAgZVtsXSA9IDA7XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgIGsgPSBpO1xuICAgIHAgPSBkW2ldO1xuICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICBpZiAoZFtqXSA8IHApIHtcbiAgICAgICAgayA9IGo7XG4gICAgICAgIHAgPSBkW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrICE9PSBpKSB7XG4gICAgICBkW2tdID0gZFtpXTtcbiAgICAgIGRbaV0gPSBwO1xuICAgICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICBwID0gVi5nZXQoaiwgaSk7XG4gICAgICAgIFYuc2V0KGosIGksIFYuZ2V0KGosIGspKTtcbiAgICAgICAgVi5zZXQoaiwgaywgcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG9ydGhlcyhuLCBILCBvcnQsIFYpIHtcbiAgbGV0IGxvdyA9IDA7XG4gIGxldCBoaWdoID0gbiAtIDE7XG4gIGxldCBmLCBnLCBoLCBpLCBqLCBtO1xuICBsZXQgc2NhbGU7XG5cbiAgZm9yIChtID0gbG93ICsgMTsgbSA8PSBoaWdoIC0gMTsgbSsrKSB7XG4gICAgc2NhbGUgPSAwO1xuICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICBzY2FsZSA9IHNjYWxlICsgTWF0aC5hYnMoSC5nZXQoaSwgbSAtIDEpKTtcbiAgICB9XG5cbiAgICBpZiAoc2NhbGUgIT09IDApIHtcbiAgICAgIGggPSAwO1xuICAgICAgZm9yIChpID0gaGlnaDsgaSA+PSBtOyBpLS0pIHtcbiAgICAgICAgb3J0W2ldID0gSC5nZXQoaSwgbSAtIDEpIC8gc2NhbGU7XG4gICAgICAgIGggKz0gb3J0W2ldICogb3J0W2ldO1xuICAgICAgfVxuXG4gICAgICBnID0gTWF0aC5zcXJ0KGgpO1xuICAgICAgaWYgKG9ydFttXSA+IDApIHtcbiAgICAgICAgZyA9IC1nO1xuICAgICAgfVxuXG4gICAgICBoID0gaCAtIG9ydFttXSAqIGc7XG4gICAgICBvcnRbbV0gPSBvcnRbbV0gLSBnO1xuXG4gICAgICBmb3IgKGogPSBtOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGYgPSAwO1xuICAgICAgICBmb3IgKGkgPSBoaWdoOyBpID49IG07IGktLSkge1xuICAgICAgICAgIGYgKz0gb3J0W2ldICogSC5nZXQoaSwgaik7XG4gICAgICAgIH1cblxuICAgICAgICBmID0gZiAvIGg7XG4gICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgSC5zZXQoaSwgaiwgSC5nZXQoaSwgaikgLSBmICogb3J0W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDw9IGhpZ2g7IGkrKykge1xuICAgICAgICBmID0gMDtcbiAgICAgICAgZm9yIChqID0gaGlnaDsgaiA+PSBtOyBqLS0pIHtcbiAgICAgICAgICBmICs9IG9ydFtqXSAqIEguZ2V0KGksIGopO1xuICAgICAgICB9XG5cbiAgICAgICAgZiA9IGYgLyBoO1xuICAgICAgICBmb3IgKGogPSBtOyBqIDw9IGhpZ2g7IGorKykge1xuICAgICAgICAgIEguc2V0KGksIGosIEguZ2V0KGksIGopIC0gZiAqIG9ydFtqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3J0W21dID0gc2NhbGUgKiBvcnRbbV07XG4gICAgICBILnNldChtLCBtIC0gMSwgc2NhbGUgKiBnKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgZm9yIChqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgVi5zZXQoaSwgaiwgaSA9PT0gaiA/IDEgOiAwKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKG0gPSBoaWdoIC0gMTsgbSA+PSBsb3cgKyAxOyBtLS0pIHtcbiAgICBpZiAoSC5nZXQobSwgbSAtIDEpICE9PSAwKSB7XG4gICAgICBmb3IgKGkgPSBtICsgMTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgb3J0W2ldID0gSC5nZXQoaSwgbSAtIDEpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGogPSBtOyBqIDw9IGhpZ2g7IGorKykge1xuICAgICAgICBnID0gMDtcbiAgICAgICAgZm9yIChpID0gbTsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICBnICs9IG9ydFtpXSAqIFYuZ2V0KGksIGopO1xuICAgICAgICB9XG5cbiAgICAgICAgZyA9IGcgLyBvcnRbbV0gLyBILmdldChtLCBtIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IG07IGkgPD0gaGlnaDsgaSsrKSB7XG4gICAgICAgICAgVi5zZXQoaSwgaiwgVi5nZXQoaSwgaikgKyBnICogb3J0W2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBocXIyKG5uLCBlLCBkLCBWLCBIKSB7XG4gIGxldCBuID0gbm4gLSAxO1xuICBsZXQgbG93ID0gMDtcbiAgbGV0IGhpZ2ggPSBubiAtIDE7XG4gIGxldCBlcHMgPSBOdW1iZXIuRVBTSUxPTjtcbiAgbGV0IGV4c2hpZnQgPSAwO1xuICBsZXQgbm9ybSA9IDA7XG4gIGxldCBwID0gMDtcbiAgbGV0IHEgPSAwO1xuICBsZXQgciA9IDA7XG4gIGxldCBzID0gMDtcbiAgbGV0IHogPSAwO1xuICBsZXQgaXRlciA9IDA7XG4gIGxldCBpLCBqLCBrLCBsLCBtLCB0LCB3LCB4LCB5O1xuICBsZXQgcmEsIHNhLCB2ciwgdmk7XG4gIGxldCBub3RsYXN0LCBjZGl2cmVzO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBubjsgaSsrKSB7XG4gICAgaWYgKGkgPCBsb3cgfHwgaSA+IGhpZ2gpIHtcbiAgICAgIGRbaV0gPSBILmdldChpLCBpKTtcbiAgICAgIGVbaV0gPSAwO1xuICAgIH1cblxuICAgIGZvciAoaiA9IE1hdGgubWF4KGkgLSAxLCAwKTsgaiA8IG5uOyBqKyspIHtcbiAgICAgIG5vcm0gPSBub3JtICsgTWF0aC5hYnMoSC5nZXQoaSwgaikpO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChuID49IGxvdykge1xuICAgIGwgPSBuO1xuICAgIHdoaWxlIChsID4gbG93KSB7XG4gICAgICBzID0gTWF0aC5hYnMoSC5nZXQobCAtIDEsIGwgLSAxKSkgKyBNYXRoLmFicyhILmdldChsLCBsKSk7XG4gICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICBzID0gbm9ybTtcbiAgICAgIH1cbiAgICAgIGlmIChNYXRoLmFicyhILmdldChsLCBsIC0gMSkpIDwgZXBzICogcykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGwtLTtcbiAgICB9XG5cbiAgICBpZiAobCA9PT0gbikge1xuICAgICAgSC5zZXQobiwgbiwgSC5nZXQobiwgbikgKyBleHNoaWZ0KTtcbiAgICAgIGRbbl0gPSBILmdldChuLCBuKTtcbiAgICAgIGVbbl0gPSAwO1xuICAgICAgbi0tO1xuICAgICAgaXRlciA9IDA7XG4gICAgfSBlbHNlIGlmIChsID09PSBuIC0gMSkge1xuICAgICAgdyA9IEguZ2V0KG4sIG4gLSAxKSAqIEguZ2V0KG4gLSAxLCBuKTtcbiAgICAgIHAgPSAoSC5nZXQobiAtIDEsIG4gLSAxKSAtIEguZ2V0KG4sIG4pKSAvIDI7XG4gICAgICBxID0gcCAqIHAgKyB3O1xuICAgICAgeiA9IE1hdGguc3FydChNYXRoLmFicyhxKSk7XG4gICAgICBILnNldChuLCBuLCBILmdldChuLCBuKSArIGV4c2hpZnQpO1xuICAgICAgSC5zZXQobiAtIDEsIG4gLSAxLCBILmdldChuIC0gMSwgbiAtIDEpICsgZXhzaGlmdCk7XG4gICAgICB4ID0gSC5nZXQobiwgbik7XG5cbiAgICAgIGlmIChxID49IDApIHtcbiAgICAgICAgeiA9IHAgPj0gMCA/IHAgKyB6IDogcCAtIHo7XG4gICAgICAgIGRbbiAtIDFdID0geCArIHo7XG4gICAgICAgIGRbbl0gPSBkW24gLSAxXTtcbiAgICAgICAgaWYgKHogIT09IDApIHtcbiAgICAgICAgICBkW25dID0geCAtIHcgLyB6O1xuICAgICAgICB9XG4gICAgICAgIGVbbiAtIDFdID0gMDtcbiAgICAgICAgZVtuXSA9IDA7XG4gICAgICAgIHggPSBILmdldChuLCBuIC0gMSk7XG4gICAgICAgIHMgPSBNYXRoLmFicyh4KSArIE1hdGguYWJzKHopO1xuICAgICAgICBwID0geCAvIHM7XG4gICAgICAgIHEgPSB6IC8gcztcbiAgICAgICAgciA9IE1hdGguc3FydChwICogcCArIHEgKiBxKTtcbiAgICAgICAgcCA9IHAgLyByO1xuICAgICAgICBxID0gcSAvIHI7XG5cbiAgICAgICAgZm9yIChqID0gbiAtIDE7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgeiA9IEguZ2V0KG4gLSAxLCBqKTtcbiAgICAgICAgICBILnNldChuIC0gMSwgaiwgcSAqIHogKyBwICogSC5nZXQobiwgaikpO1xuICAgICAgICAgIEguc2V0KG4sIGosIHEgKiBILmdldChuLCBqKSAtIHAgKiB6KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgeiA9IEguZ2V0KGksIG4gLSAxKTtcbiAgICAgICAgICBILnNldChpLCBuIC0gMSwgcSAqIHogKyBwICogSC5nZXQoaSwgbikpO1xuICAgICAgICAgIEguc2V0KGksIG4sIHEgKiBILmdldChpLCBuKSAtIHAgKiB6KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICB6ID0gVi5nZXQoaSwgbiAtIDEpO1xuICAgICAgICAgIFYuc2V0KGksIG4gLSAxLCBxICogeiArIHAgKiBWLmdldChpLCBuKSk7XG4gICAgICAgICAgVi5zZXQoaSwgbiwgcSAqIFYuZ2V0KGksIG4pIC0gcCAqIHopO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkW24gLSAxXSA9IHggKyBwO1xuICAgICAgICBkW25dID0geCArIHA7XG4gICAgICAgIGVbbiAtIDFdID0gejtcbiAgICAgICAgZVtuXSA9IC16O1xuICAgICAgfVxuXG4gICAgICBuID0gbiAtIDI7XG4gICAgICBpdGVyID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IEguZ2V0KG4sIG4pO1xuICAgICAgeSA9IDA7XG4gICAgICB3ID0gMDtcbiAgICAgIGlmIChsIDwgbikge1xuICAgICAgICB5ID0gSC5nZXQobiAtIDEsIG4gLSAxKTtcbiAgICAgICAgdyA9IEguZ2V0KG4sIG4gLSAxKSAqIEguZ2V0KG4gLSAxLCBuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZXIgPT09IDEwKSB7XG4gICAgICAgIGV4c2hpZnQgKz0geDtcbiAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IG47IGkrKykge1xuICAgICAgICAgIEguc2V0KGksIGksIEguZ2V0KGksIGkpIC0geCk7XG4gICAgICAgIH1cbiAgICAgICAgcyA9IE1hdGguYWJzKEguZ2V0KG4sIG4gLSAxKSkgKyBNYXRoLmFicyhILmdldChuIC0gMSwgbiAtIDIpKTtcbiAgICAgICAgeCA9IHkgPSAwLjc1ICogcztcbiAgICAgICAgdyA9IC0wLjQzNzUgKiBzICogcztcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZXIgPT09IDMwKSB7XG4gICAgICAgIHMgPSAoeSAtIHgpIC8gMjtcbiAgICAgICAgcyA9IHMgKiBzICsgdztcbiAgICAgICAgaWYgKHMgPiAwKSB7XG4gICAgICAgICAgcyA9IE1hdGguc3FydChzKTtcbiAgICAgICAgICBpZiAoeSA8IHgpIHtcbiAgICAgICAgICAgIHMgPSAtcztcbiAgICAgICAgICB9XG4gICAgICAgICAgcyA9IHggLSB3IC8gKCh5IC0geCkgLyAyICsgcyk7XG4gICAgICAgICAgZm9yIChpID0gbG93OyBpIDw9IG47IGkrKykge1xuICAgICAgICAgICAgSC5zZXQoaSwgaSwgSC5nZXQoaSwgaSkgLSBzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhzaGlmdCArPSBzO1xuICAgICAgICAgIHggPSB5ID0gdyA9IDAuOTY0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGl0ZXIgPSBpdGVyICsgMTtcblxuICAgICAgbSA9IG4gLSAyO1xuICAgICAgd2hpbGUgKG0gPj0gbCkge1xuICAgICAgICB6ID0gSC5nZXQobSwgbSk7XG4gICAgICAgIHIgPSB4IC0gejtcbiAgICAgICAgcyA9IHkgLSB6O1xuICAgICAgICBwID0gKHIgKiBzIC0gdykgLyBILmdldChtICsgMSwgbSkgKyBILmdldChtLCBtICsgMSk7XG4gICAgICAgIHEgPSBILmdldChtICsgMSwgbSArIDEpIC0geiAtIHIgLSBzO1xuICAgICAgICByID0gSC5nZXQobSArIDIsIG0gKyAxKTtcbiAgICAgICAgcyA9IE1hdGguYWJzKHApICsgTWF0aC5hYnMocSkgKyBNYXRoLmFicyhyKTtcbiAgICAgICAgcCA9IHAgLyBzO1xuICAgICAgICBxID0gcSAvIHM7XG4gICAgICAgIHIgPSByIC8gcztcbiAgICAgICAgaWYgKG0gPT09IGwpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgTWF0aC5hYnMoSC5nZXQobSwgbSAtIDEpKSAqIChNYXRoLmFicyhxKSArIE1hdGguYWJzKHIpKSA8XG4gICAgICAgICAgZXBzICpcbiAgICAgICAgICAgIChNYXRoLmFicyhwKSAqXG4gICAgICAgICAgICAgIChNYXRoLmFicyhILmdldChtIC0gMSwgbSAtIDEpKSArXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoeikgK1xuICAgICAgICAgICAgICAgIE1hdGguYWJzKEguZ2V0KG0gKyAxLCBtICsgMSkpKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbS0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGkgPSBtICsgMjsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgSC5zZXQoaSwgaSAtIDIsIDApO1xuICAgICAgICBpZiAoaSA+IG0gKyAyKSB7XG4gICAgICAgICAgSC5zZXQoaSwgaSAtIDMsIDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAoayA9IG07IGsgPD0gbiAtIDE7IGsrKykge1xuICAgICAgICBub3RsYXN0ID0gayAhPT0gbiAtIDE7XG4gICAgICAgIGlmIChrICE9PSBtKSB7XG4gICAgICAgICAgcCA9IEguZ2V0KGssIGsgLSAxKTtcbiAgICAgICAgICBxID0gSC5nZXQoayArIDEsIGsgLSAxKTtcbiAgICAgICAgICByID0gbm90bGFzdCA/IEguZ2V0KGsgKyAyLCBrIC0gMSkgOiAwO1xuICAgICAgICAgIHggPSBNYXRoLmFicyhwKSArIE1hdGguYWJzKHEpICsgTWF0aC5hYnMocik7XG4gICAgICAgICAgaWYgKHggIT09IDApIHtcbiAgICAgICAgICAgIHAgPSBwIC8geDtcbiAgICAgICAgICAgIHEgPSBxIC8geDtcbiAgICAgICAgICAgIHIgPSByIC8geDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcyA9IE1hdGguc3FydChwICogcCArIHEgKiBxICsgciAqIHIpO1xuICAgICAgICBpZiAocCA8IDApIHtcbiAgICAgICAgICBzID0gLXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocyAhPT0gMCkge1xuICAgICAgICAgIGlmIChrICE9PSBtKSB7XG4gICAgICAgICAgICBILnNldChrLCBrIC0gMSwgLXMgKiB4KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGwgIT09IG0pIHtcbiAgICAgICAgICAgIEguc2V0KGssIGsgLSAxLCAtSC5nZXQoaywgayAtIDEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwID0gcCArIHM7XG4gICAgICAgICAgeCA9IHAgLyBzO1xuICAgICAgICAgIHkgPSBxIC8gcztcbiAgICAgICAgICB6ID0gciAvIHM7XG4gICAgICAgICAgcSA9IHEgLyBwO1xuICAgICAgICAgIHIgPSByIC8gcDtcblxuICAgICAgICAgIGZvciAoaiA9IGs7IGogPCBubjsgaisrKSB7XG4gICAgICAgICAgICBwID0gSC5nZXQoaywgaikgKyBxICogSC5nZXQoayArIDEsIGopO1xuICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgcCA9IHAgKyByICogSC5nZXQoayArIDIsIGopO1xuICAgICAgICAgICAgICBILnNldChrICsgMiwgaiwgSC5nZXQoayArIDIsIGopIC0gcCAqIHopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBILnNldChrLCBqLCBILmdldChrLCBqKSAtIHAgKiB4KTtcbiAgICAgICAgICAgIEguc2V0KGsgKyAxLCBqLCBILmdldChrICsgMSwgaikgLSBwICogeSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBNYXRoLm1pbihuLCBrICsgMyk7IGkrKykge1xuICAgICAgICAgICAgcCA9IHggKiBILmdldChpLCBrKSArIHkgKiBILmdldChpLCBrICsgMSk7XG4gICAgICAgICAgICBpZiAobm90bGFzdCkge1xuICAgICAgICAgICAgICBwID0gcCArIHogKiBILmdldChpLCBrICsgMik7XG4gICAgICAgICAgICAgIEguc2V0KGksIGsgKyAyLCBILmdldChpLCBrICsgMikgLSBwICogcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEguc2V0KGksIGssIEguZ2V0KGksIGspIC0gcCk7XG4gICAgICAgICAgICBILnNldChpLCBrICsgMSwgSC5nZXQoaSwgayArIDEpIC0gcCAqIHEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgICAgICAgIHAgPSB4ICogVi5nZXQoaSwgaykgKyB5ICogVi5nZXQoaSwgayArIDEpO1xuICAgICAgICAgICAgaWYgKG5vdGxhc3QpIHtcbiAgICAgICAgICAgICAgcCA9IHAgKyB6ICogVi5nZXQoaSwgayArIDIpO1xuICAgICAgICAgICAgICBWLnNldChpLCBrICsgMiwgVi5nZXQoaSwgayArIDIpIC0gcCAqIHIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWLnNldChpLCBrLCBWLmdldChpLCBrKSAtIHApO1xuICAgICAgICAgICAgVi5zZXQoaSwgayArIDEsIFYuZ2V0KGksIGsgKyAxKSAtIHAgKiBxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobm9ybSA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobiA9IG5uIC0gMTsgbiA+PSAwOyBuLS0pIHtcbiAgICBwID0gZFtuXTtcbiAgICBxID0gZVtuXTtcblxuICAgIGlmIChxID09PSAwKSB7XG4gICAgICBsID0gbjtcbiAgICAgIEguc2V0KG4sIG4sIDEpO1xuICAgICAgZm9yIChpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHcgPSBILmdldChpLCBpKSAtIHA7XG4gICAgICAgIHIgPSAwO1xuICAgICAgICBmb3IgKGogPSBsOyBqIDw9IG47IGorKykge1xuICAgICAgICAgIHIgPSByICsgSC5nZXQoaSwgaikgKiBILmdldChqLCBuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlW2ldIDwgMCkge1xuICAgICAgICAgIHogPSB3O1xuICAgICAgICAgIHMgPSByO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGwgPSBpO1xuICAgICAgICAgIGlmIChlW2ldID09PSAwKSB7XG4gICAgICAgICAgICBILnNldChpLCBuLCB3ICE9PSAwID8gLXIgLyB3IDogLXIgLyAoZXBzICogbm9ybSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gSC5nZXQoaSwgaSArIDEpO1xuICAgICAgICAgICAgeSA9IEguZ2V0KGkgKyAxLCBpKTtcbiAgICAgICAgICAgIHEgPSAoZFtpXSAtIHApICogKGRbaV0gLSBwKSArIGVbaV0gKiBlW2ldO1xuICAgICAgICAgICAgdCA9ICh4ICogcyAtIHogKiByKSAvIHE7XG4gICAgICAgICAgICBILnNldChpLCBuLCB0KTtcbiAgICAgICAgICAgIEguc2V0KFxuICAgICAgICAgICAgICBpICsgMSxcbiAgICAgICAgICAgICAgbixcbiAgICAgICAgICAgICAgTWF0aC5hYnMoeCkgPiBNYXRoLmFicyh6KSA/ICgtciAtIHcgKiB0KSAvIHggOiAoLXMgLSB5ICogdCkgLyB6LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ID0gTWF0aC5hYnMoSC5nZXQoaSwgbikpO1xuICAgICAgICAgIGlmIChlcHMgKiB0ICogdCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAoaiA9IGk7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgICAgIEguc2V0KGosIG4sIEguZ2V0KGosIG4pIC8gdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChxIDwgMCkge1xuICAgICAgbCA9IG4gLSAxO1xuXG4gICAgICBpZiAoTWF0aC5hYnMoSC5nZXQobiwgbiAtIDEpKSA+IE1hdGguYWJzKEguZ2V0KG4gLSAxLCBuKSkpIHtcbiAgICAgICAgSC5zZXQobiAtIDEsIG4gLSAxLCBxIC8gSC5nZXQobiwgbiAtIDEpKTtcbiAgICAgICAgSC5zZXQobiAtIDEsIG4sIC0oSC5nZXQobiwgbikgLSBwKSAvIEguZ2V0KG4sIG4gLSAxKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZGl2cmVzID0gY2RpdigwLCAtSC5nZXQobiAtIDEsIG4pLCBILmdldChuIC0gMSwgbiAtIDEpIC0gcCwgcSk7XG4gICAgICAgIEguc2V0KG4gLSAxLCBuIC0gMSwgY2RpdnJlc1swXSk7XG4gICAgICAgIEguc2V0KG4gLSAxLCBuLCBjZGl2cmVzWzFdKTtcbiAgICAgIH1cblxuICAgICAgSC5zZXQobiwgbiAtIDEsIDApO1xuICAgICAgSC5zZXQobiwgbiwgMSk7XG4gICAgICBmb3IgKGkgPSBuIC0gMjsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgcmEgPSAwO1xuICAgICAgICBzYSA9IDA7XG4gICAgICAgIGZvciAoaiA9IGw7IGogPD0gbjsgaisrKSB7XG4gICAgICAgICAgcmEgPSByYSArIEguZ2V0KGksIGopICogSC5nZXQoaiwgbiAtIDEpO1xuICAgICAgICAgIHNhID0gc2EgKyBILmdldChpLCBqKSAqIEguZ2V0KGosIG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdyA9IEguZ2V0KGksIGkpIC0gcDtcblxuICAgICAgICBpZiAoZVtpXSA8IDApIHtcbiAgICAgICAgICB6ID0gdztcbiAgICAgICAgICByID0gcmE7XG4gICAgICAgICAgcyA9IHNhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGwgPSBpO1xuICAgICAgICAgIGlmIChlW2ldID09PSAwKSB7XG4gICAgICAgICAgICBjZGl2cmVzID0gY2RpdigtcmEsIC1zYSwgdywgcSk7XG4gICAgICAgICAgICBILnNldChpLCBuIC0gMSwgY2RpdnJlc1swXSk7XG4gICAgICAgICAgICBILnNldChpLCBuLCBjZGl2cmVzWzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IEguZ2V0KGksIGkgKyAxKTtcbiAgICAgICAgICAgIHkgPSBILmdldChpICsgMSwgaSk7XG4gICAgICAgICAgICB2ciA9IChkW2ldIC0gcCkgKiAoZFtpXSAtIHApICsgZVtpXSAqIGVbaV0gLSBxICogcTtcbiAgICAgICAgICAgIHZpID0gKGRbaV0gLSBwKSAqIDIgKiBxO1xuICAgICAgICAgICAgaWYgKHZyID09PSAwICYmIHZpID09PSAwKSB7XG4gICAgICAgICAgICAgIHZyID1cbiAgICAgICAgICAgICAgICBlcHMgKlxuICAgICAgICAgICAgICAgIG5vcm0gKlxuICAgICAgICAgICAgICAgIChNYXRoLmFicyh3KSArXG4gICAgICAgICAgICAgICAgICBNYXRoLmFicyhxKSArXG4gICAgICAgICAgICAgICAgICBNYXRoLmFicyh4KSArXG4gICAgICAgICAgICAgICAgICBNYXRoLmFicyh5KSArXG4gICAgICAgICAgICAgICAgICBNYXRoLmFicyh6KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZGl2cmVzID0gY2RpdihcbiAgICAgICAgICAgICAgeCAqIHIgLSB6ICogcmEgKyBxICogc2EsXG4gICAgICAgICAgICAgIHggKiBzIC0geiAqIHNhIC0gcSAqIHJhLFxuICAgICAgICAgICAgICB2cixcbiAgICAgICAgICAgICAgdmksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSC5zZXQoaSwgbiAtIDEsIGNkaXZyZXNbMF0pO1xuICAgICAgICAgICAgSC5zZXQoaSwgbiwgY2RpdnJlc1sxXSk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoeCkgPiBNYXRoLmFicyh6KSArIE1hdGguYWJzKHEpKSB7XG4gICAgICAgICAgICAgIEguc2V0KFxuICAgICAgICAgICAgICAgIGkgKyAxLFxuICAgICAgICAgICAgICAgIG4gLSAxLFxuICAgICAgICAgICAgICAgICgtcmEgLSB3ICogSC5nZXQoaSwgbiAtIDEpICsgcSAqIEguZ2V0KGksIG4pKSAvIHgsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIEguc2V0KFxuICAgICAgICAgICAgICAgIGkgKyAxLFxuICAgICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICAgKC1zYSAtIHcgKiBILmdldChpLCBuKSAtIHEgKiBILmdldChpLCBuIC0gMSkpIC8geCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNkaXZyZXMgPSBjZGl2KFxuICAgICAgICAgICAgICAgIC1yIC0geSAqIEguZ2V0KGksIG4gLSAxKSxcbiAgICAgICAgICAgICAgICAtcyAtIHkgKiBILmdldChpLCBuKSxcbiAgICAgICAgICAgICAgICB6LFxuICAgICAgICAgICAgICAgIHEsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIEguc2V0KGkgKyAxLCBuIC0gMSwgY2RpdnJlc1swXSk7XG4gICAgICAgICAgICAgIEguc2V0KGkgKyAxLCBuLCBjZGl2cmVzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ID0gTWF0aC5tYXgoTWF0aC5hYnMoSC5nZXQoaSwgbiAtIDEpKSwgTWF0aC5hYnMoSC5nZXQoaSwgbikpKTtcbiAgICAgICAgICBpZiAoZXBzICogdCAqIHQgPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGogPSBpOyBqIDw9IG47IGorKykge1xuICAgICAgICAgICAgICBILnNldChqLCBuIC0gMSwgSC5nZXQoaiwgbiAtIDEpIC8gdCk7XG4gICAgICAgICAgICAgIEguc2V0KGosIG4sIEguZ2V0KGosIG4pIC8gdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9yIChpID0gMDsgaSA8IG5uOyBpKyspIHtcbiAgICBpZiAoaSA8IGxvdyB8fCBpID4gaGlnaCkge1xuICAgICAgZm9yIChqID0gaTsgaiA8IG5uOyBqKyspIHtcbiAgICAgICAgVi5zZXQoaSwgaiwgSC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoaiA9IG5uIC0gMTsgaiA+PSBsb3c7IGotLSkge1xuICAgIGZvciAoaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcbiAgICAgIHogPSAwO1xuICAgICAgZm9yIChrID0gbG93OyBrIDw9IE1hdGgubWluKGosIGhpZ2gpOyBrKyspIHtcbiAgICAgICAgeiA9IHogKyBWLmdldChpLCBrKSAqIEguZ2V0KGssIGopO1xuICAgICAgfVxuICAgICAgVi5zZXQoaSwgaiwgeik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNkaXYoeHIsIHhpLCB5ciwgeWkpIHtcbiAgbGV0IHIsIGQ7XG4gIGlmIChNYXRoLmFicyh5cikgPiBNYXRoLmFicyh5aSkpIHtcbiAgICByID0geWkgLyB5cjtcbiAgICBkID0geXIgKyByICogeWk7XG4gICAgcmV0dXJuIFsoeHIgKyByICogeGkpIC8gZCwgKHhpIC0gciAqIHhyKSAvIGRdO1xuICB9IGVsc2Uge1xuICAgIHIgPSB5ciAvIHlpO1xuICAgIGQgPSB5aSArIHIgKiB5cjtcbiAgICByZXR1cm4gWyhyICogeHIgKyB4aSkgLyBkLCAociAqIHhpIC0geHIpIC8gZF07XG4gIH1cbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMdURlY29tcG9zaXRpb24ge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgobWF0cml4KTtcblxuICAgIGxldCBsdSA9IG1hdHJpeC5jbG9uZSgpO1xuICAgIGxldCByb3dzID0gbHUucm93cztcbiAgICBsZXQgY29sdW1ucyA9IGx1LmNvbHVtbnM7XG4gICAgbGV0IHBpdm90VmVjdG9yID0gbmV3IEZsb2F0NjRBcnJheShyb3dzKTtcbiAgICBsZXQgcGl2b3RTaWduID0gMTtcbiAgICBsZXQgaSwgaiwgaywgcCwgcywgdCwgdjtcbiAgICBsZXQgTFVjb2xqLCBrbWF4O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgcGl2b3RWZWN0b3JbaV0gPSBpO1xuICAgIH1cblxuICAgIExVY29saiA9IG5ldyBGbG9hdDY0QXJyYXkocm93cyk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgIExVY29saltpXSA9IGx1LmdldChpLCBqKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgICBrbWF4ID0gTWF0aC5taW4oaSwgaik7XG4gICAgICAgIHMgPSAwO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwga21heDsgaysrKSB7XG4gICAgICAgICAgcyArPSBsdS5nZXQoaSwgaykgKiBMVWNvbGpba107XG4gICAgICAgIH1cbiAgICAgICAgTFVjb2xqW2ldIC09IHM7XG4gICAgICAgIGx1LnNldChpLCBqLCBMVWNvbGpbaV0pO1xuICAgICAgfVxuXG4gICAgICBwID0gajtcbiAgICAgIGZvciAoaSA9IGogKyAxOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhMVWNvbGpbaV0pID4gTWF0aC5hYnMoTFVjb2xqW3BdKSkge1xuICAgICAgICAgIHAgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwICE9PSBqKSB7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBjb2x1bW5zOyBrKyspIHtcbiAgICAgICAgICB0ID0gbHUuZ2V0KHAsIGspO1xuICAgICAgICAgIGx1LnNldChwLCBrLCBsdS5nZXQoaiwgaykpO1xuICAgICAgICAgIGx1LnNldChqLCBrLCB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHYgPSBwaXZvdFZlY3RvcltwXTtcbiAgICAgICAgcGl2b3RWZWN0b3JbcF0gPSBwaXZvdFZlY3RvcltqXTtcbiAgICAgICAgcGl2b3RWZWN0b3Jbal0gPSB2O1xuXG4gICAgICAgIHBpdm90U2lnbiA9IC1waXZvdFNpZ247XG4gICAgICB9XG5cbiAgICAgIGlmIChqIDwgcm93cyAmJiBsdS5nZXQoaiwgaikgIT09IDApIHtcbiAgICAgICAgZm9yIChpID0gaiArIDE7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICBsdS5zZXQoaSwgaiwgbHUuZ2V0KGksIGopIC8gbHUuZ2V0KGosIGopKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuTFUgPSBsdTtcbiAgICB0aGlzLnBpdm90VmVjdG9yID0gcGl2b3RWZWN0b3I7XG4gICAgdGhpcy5waXZvdFNpZ24gPSBwaXZvdFNpZ247XG4gIH1cblxuICBpc1Npbmd1bGFyKCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5MVTtcbiAgICBsZXQgY29sID0gZGF0YS5jb2x1bW5zO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sOyBqKyspIHtcbiAgICAgIGlmIChkYXRhLmdldChqLCBqKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc29sdmUodmFsdWUpIHtcbiAgICB2YWx1ZSA9IE1hdHJpeC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICBsZXQgbHUgPSB0aGlzLkxVO1xuICAgIGxldCByb3dzID0gbHUucm93cztcblxuICAgIGlmIChyb3dzICE9PSB2YWx1ZS5yb3dzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbWF0cml4IGRpbWVuc2lvbnMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNTaW5ndWxhcigpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xVIG1hdHJpeCBpcyBzaW5ndWxhcicpO1xuICAgIH1cblxuICAgIGxldCBjb3VudCA9IHZhbHVlLmNvbHVtbnM7XG4gICAgbGV0IFggPSB2YWx1ZS5zdWJNYXRyaXhSb3codGhpcy5waXZvdFZlY3RvciwgMCwgY291bnQgLSAxKTtcbiAgICBsZXQgY29sdW1ucyA9IGx1LmNvbHVtbnM7XG4gICAgbGV0IGksIGosIGs7XG5cbiAgICBmb3IgKGsgPSAwOyBrIDwgY29sdW1uczsgaysrKSB7XG4gICAgICBmb3IgKGkgPSBrICsgMTsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgIFguc2V0KGksIGosIFguZ2V0KGksIGopIC0gWC5nZXQoaywgaikgKiBsdS5nZXQoaSwgaykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoayA9IGNvbHVtbnMgLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgWC5zZXQoaywgaiwgWC5nZXQoaywgaikgLyBsdS5nZXQoaywgaykpO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgIFguc2V0KGksIGosIFguZ2V0KGksIGopIC0gWC5nZXQoaywgaikgKiBsdS5nZXQoaSwgaykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBYO1xuICB9XG5cbiAgZ2V0IGRldGVybWluYW50KCkge1xuICAgIGxldCBkYXRhID0gdGhpcy5MVTtcbiAgICBpZiAoIWRhdGEuaXNTcXVhcmUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXRyaXggbXVzdCBiZSBzcXVhcmUnKTtcbiAgICB9XG4gICAgbGV0IGRldGVybWluYW50ID0gdGhpcy5waXZvdFNpZ247XG4gICAgbGV0IGNvbCA9IGRhdGEuY29sdW1ucztcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbDsgaisrKSB7XG4gICAgICBkZXRlcm1pbmFudCAqPSBkYXRhLmdldChqLCBqKTtcbiAgICB9XG4gICAgcmV0dXJuIGRldGVybWluYW50O1xuICB9XG5cbiAgZ2V0IGxvd2VyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuTFU7XG4gICAgbGV0IHJvd3MgPSBkYXRhLnJvd3M7XG4gICAgbGV0IGNvbHVtbnMgPSBkYXRhLmNvbHVtbnM7XG4gICAgbGV0IFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBpZiAoaSA+IGopIHtcbiAgICAgICAgICBYLnNldChpLCBqLCBkYXRhLmdldChpLCBqKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaikge1xuICAgICAgICAgIFguc2V0KGksIGosIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFguc2V0KGksIGosIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBYO1xuICB9XG5cbiAgZ2V0IHVwcGVyVHJpYW5ndWxhck1hdHJpeCgpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuTFU7XG4gICAgbGV0IHJvd3MgPSBkYXRhLnJvd3M7XG4gICAgbGV0IGNvbHVtbnMgPSBkYXRhLmNvbHVtbnM7XG4gICAgbGV0IFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBpZiAoaSA8PSBqKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgZGF0YS5nZXQoaSwgaikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFguc2V0KGksIGosIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBYO1xuICB9XG5cbiAgZ2V0IHBpdm90UGVybXV0YXRpb25WZWN0b3IoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5waXZvdFZlY3Rvcik7XG4gIH1cbn1cbiIsImltcG9ydCBNYXRyaXggZnJvbSAnLi4vbWF0cml4JztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuaXBhbHMge1xuICBjb25zdHJ1Y3RvcihYLCBvcHRpb25zID0ge30pIHtcbiAgICBYID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KFgpO1xuICAgIGxldCB7IFkgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qge1xuICAgICAgc2NhbGVTY29yZXMgPSBmYWxzZSxcbiAgICAgIG1heEl0ZXJhdGlvbnMgPSAxMDAwLFxuICAgICAgdGVybWluYXRpb25Dcml0ZXJpYSA9IDFlLTEwLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgbGV0IHU7XG4gICAgaWYgKFkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KFkpICYmIHR5cGVvZiBZWzBdID09PSAnbnVtYmVyJykge1xuICAgICAgICBZID0gTWF0cml4LmNvbHVtblZlY3RvcihZKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFkgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgoWSk7XG4gICAgICB9XG4gICAgICBpZiAoIVkuaXNDb2x1bW5WZWN0b3IoKSB8fCBZLnJvd3MgIT09IFgucm93cykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1kgbXVzdCBiZSBhIGNvbHVtbiB2ZWN0b3Igb2YgbGVuZ3RoIFgucm93cycpO1xuICAgICAgfVxuICAgICAgdSA9IFk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHUgPSBYLmdldENvbHVtblZlY3RvcigwKTtcbiAgICB9XG5cbiAgICBsZXQgZGlmZiA9IDE7XG4gICAgbGV0IHQsIHEsIHcsIHRPbGQ7XG5cbiAgICBmb3IgKFxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgY291bnRlciA8IG1heEl0ZXJhdGlvbnMgJiYgZGlmZiA+IHRlcm1pbmF0aW9uQ3JpdGVyaWE7XG4gICAgICBjb3VudGVyKytcbiAgICApIHtcbiAgICAgIHcgPSBYLnRyYW5zcG9zZSgpLm1tdWwodSkuZGl2KHUudHJhbnNwb3NlKCkubW11bCh1KS5nZXQoMCwgMCkpO1xuICAgICAgdyA9IHcuZGl2KHcubm9ybSgpKTtcblxuICAgICAgdCA9IFgubW11bCh3KS5kaXYody50cmFuc3Bvc2UoKS5tbXVsKHcpLmdldCgwLCAwKSk7XG5cbiAgICAgIGlmIChjb3VudGVyID4gMCkge1xuICAgICAgICBkaWZmID0gdC5jbG9uZSgpLnN1Yih0T2xkKS5wb3coMikuc3VtKCk7XG4gICAgICB9XG4gICAgICB0T2xkID0gdC5jbG9uZSgpO1xuXG4gICAgICBpZiAoWSkge1xuICAgICAgICBxID0gWS50cmFuc3Bvc2UoKS5tbXVsKHQpLmRpdih0LnRyYW5zcG9zZSgpLm1tdWwodCkuZ2V0KDAsIDApKTtcbiAgICAgICAgcSA9IHEuZGl2KHEubm9ybSgpKTtcblxuICAgICAgICB1ID0gWS5tbXVsKHEpLmRpdihxLnRyYW5zcG9zZSgpLm1tdWwocSkuZ2V0KDAsIDApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHUgPSB0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChZKSB7XG4gICAgICBsZXQgcCA9IFgudHJhbnNwb3NlKCkubW11bCh0KS5kaXYodC50cmFuc3Bvc2UoKS5tbXVsKHQpLmdldCgwLCAwKSk7XG4gICAgICBwID0gcC5kaXYocC5ub3JtKCkpO1xuICAgICAgbGV0IHhSZXNpZHVhbCA9IFguY2xvbmUoKS5zdWIodC5jbG9uZSgpLm1tdWwocC50cmFuc3Bvc2UoKSkpO1xuICAgICAgbGV0IHJlc2lkdWFsID0gdS50cmFuc3Bvc2UoKS5tbXVsKHQpLmRpdih0LnRyYW5zcG9zZSgpLm1tdWwodCkuZ2V0KDAsIDApKTtcbiAgICAgIGxldCB5UmVzaWR1YWwgPSBZLmNsb25lKCkuc3ViKFxuICAgICAgICB0LmNsb25lKCkubXVsUyhyZXNpZHVhbC5nZXQoMCwgMCkpLm1tdWwocS50cmFuc3Bvc2UoKSksXG4gICAgICApO1xuXG4gICAgICB0aGlzLnQgPSB0O1xuICAgICAgdGhpcy5wID0gcC50cmFuc3Bvc2UoKTtcbiAgICAgIHRoaXMudyA9IHcudHJhbnNwb3NlKCk7XG4gICAgICB0aGlzLnEgPSBxO1xuICAgICAgdGhpcy51ID0gdTtcbiAgICAgIHRoaXMucyA9IHQudHJhbnNwb3NlKCkubW11bCh0KTtcbiAgICAgIHRoaXMueFJlc2lkdWFsID0geFJlc2lkdWFsO1xuICAgICAgdGhpcy55UmVzaWR1YWwgPSB5UmVzaWR1YWw7XG4gICAgICB0aGlzLmJldGFzID0gcmVzaWR1YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudyA9IHcudHJhbnNwb3NlKCk7XG4gICAgICB0aGlzLnMgPSB0LnRyYW5zcG9zZSgpLm1tdWwodCkuc3FydCgpO1xuICAgICAgaWYgKHNjYWxlU2NvcmVzKSB7XG4gICAgICAgIHRoaXMudCA9IHQuY2xvbmUoKS5kaXYodGhpcy5zLmdldCgwLCAwKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnQgPSB0O1xuICAgICAgfVxuICAgICAgdGhpcy54UmVzaWR1YWwgPSBYLnN1Yih0Lm1tdWwody50cmFuc3Bvc2UoKSkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IE1hdHJpeCBmcm9tICcuLi9tYXRyaXgnO1xuaW1wb3J0IFdyYXBwZXJNYXRyaXgyRCBmcm9tICcuLi93cmFwL1dyYXBwZXJNYXRyaXgyRCc7XG5cbmltcG9ydCB7IGh5cG90ZW51c2UgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRckRlY29tcG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgIGxldCBxciA9IHZhbHVlLmNsb25lKCk7XG4gICAgbGV0IG0gPSB2YWx1ZS5yb3dzO1xuICAgIGxldCBuID0gdmFsdWUuY29sdW1ucztcbiAgICBsZXQgcmRpYWcgPSBuZXcgRmxvYXQ2NEFycmF5KG4pO1xuICAgIGxldCBpLCBqLCBrLCBzO1xuXG4gICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgbGV0IG5ybSA9IDA7XG4gICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgIG5ybSA9IGh5cG90ZW51c2UobnJtLCBxci5nZXQoaSwgaykpO1xuICAgICAgfVxuICAgICAgaWYgKG5ybSAhPT0gMCkge1xuICAgICAgICBpZiAocXIuZ2V0KGssIGspIDwgMCkge1xuICAgICAgICAgIG5ybSA9IC1ucm07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgIHFyLnNldChpLCBrLCBxci5nZXQoaSwgaykgLyBucm0pO1xuICAgICAgICB9XG4gICAgICAgIHFyLnNldChrLCBrLCBxci5nZXQoaywgaykgKyAxKTtcbiAgICAgICAgZm9yIChqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICBzID0gMDtcbiAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICBzICs9IHFyLmdldChpLCBrKSAqIHFyLmdldChpLCBqKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcyA9IC1zIC8gcXIuZ2V0KGssIGspO1xuICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgIHFyLnNldChpLCBqLCBxci5nZXQoaSwgaikgKyBzICogcXIuZ2V0KGksIGspKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJkaWFnW2tdID0gLW5ybTtcbiAgICB9XG5cbiAgICB0aGlzLlFSID0gcXI7XG4gICAgdGhpcy5SZGlhZyA9IHJkaWFnO1xuICB9XG5cbiAgc29sdmUodmFsdWUpIHtcbiAgICB2YWx1ZSA9IE1hdHJpeC5jaGVja01hdHJpeCh2YWx1ZSk7XG5cbiAgICBsZXQgcXIgPSB0aGlzLlFSO1xuICAgIGxldCBtID0gcXIucm93cztcblxuICAgIGlmICh2YWx1ZS5yb3dzICE9PSBtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHJpeCByb3cgZGltZW5zaW9ucyBtdXN0IGFncmVlJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0Z1bGxSYW5rKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWF0cml4IGlzIHJhbmsgZGVmaWNpZW50Jyk7XG4gICAgfVxuXG4gICAgbGV0IGNvdW50ID0gdmFsdWUuY29sdW1ucztcbiAgICBsZXQgWCA9IHZhbHVlLmNsb25lKCk7XG4gICAgbGV0IG4gPSBxci5jb2x1bW5zO1xuICAgIGxldCBpLCBqLCBrLCBzO1xuXG4gICAgZm9yIChrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgcyA9IDA7XG4gICAgICAgIGZvciAoaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICBzICs9IHFyLmdldChpLCBrKSAqIFguZ2V0KGksIGopO1xuICAgICAgICB9XG4gICAgICAgIHMgPSAtcyAvIHFyLmdldChrLCBrKTtcbiAgICAgICAgZm9yIChpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgIFguc2V0KGksIGosIFguZ2V0KGksIGopICsgcyAqIHFyLmdldChpLCBrKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrID0gbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICBYLnNldChrLCBqLCBYLmdldChrLCBqKSAvIHRoaXMuUmRpYWdba10pO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMDsgaSA8IGs7IGkrKykge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgIFguc2V0KGksIGosIFguZ2V0KGksIGopIC0gWC5nZXQoaywgaikgKiBxci5nZXQoaSwgaykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFguc3ViTWF0cml4KDAsIG4gLSAxLCAwLCBjb3VudCAtIDEpO1xuICB9XG5cbiAgaXNGdWxsUmFuaygpIHtcbiAgICBsZXQgY29sdW1ucyA9IHRoaXMuUVIuY29sdW1ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKHRoaXMuUmRpYWdbaV0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cHBlclRyaWFuZ3VsYXJNYXRyaXgoKSB7XG4gICAgbGV0IHFyID0gdGhpcy5RUjtcbiAgICBsZXQgbiA9IHFyLmNvbHVtbnM7XG4gICAgbGV0IFggPSBuZXcgTWF0cml4KG4sIG4pO1xuICAgIGxldCBpLCBqO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgaWYgKGkgPCBqKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgcXIuZ2V0KGksIGopKTtcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSBqKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgdGhpcy5SZGlhZ1tpXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFg7XG4gIH1cblxuICBnZXQgb3J0aG9nb25hbE1hdHJpeCgpIHtcbiAgICBsZXQgcXIgPSB0aGlzLlFSO1xuICAgIGxldCByb3dzID0gcXIucm93cztcbiAgICBsZXQgY29sdW1ucyA9IHFyLmNvbHVtbnM7XG4gICAgbGV0IFggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgIGxldCBpLCBqLCBrLCBzO1xuXG4gICAgZm9yIChrID0gY29sdW1ucyAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgIFguc2V0KGksIGssIDApO1xuICAgICAgfVxuICAgICAgWC5zZXQoaywgaywgMSk7XG4gICAgICBmb3IgKGogPSBrOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGlmIChxci5nZXQoaywgaykgIT09IDApIHtcbiAgICAgICAgICBzID0gMDtcbiAgICAgICAgICBmb3IgKGkgPSBrOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICAgICAgICBzICs9IHFyLmdldChpLCBrKSAqIFguZ2V0KGksIGopO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHMgPSAtcyAvIHFyLmdldChrLCBrKTtcblxuICAgICAgICAgIGZvciAoaSA9IGs7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgICAgICAgIFguc2V0KGksIGosIFguZ2V0KGksIGopICsgcyAqIHFyLmdldChpLCBrKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBYO1xuICB9XG59XG4iLCJpbXBvcnQgTWF0cml4IGZyb20gJy4uL21hdHJpeCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4uL3dyYXAvV3JhcHBlck1hdHJpeDJEJztcblxuaW1wb3J0IHsgaHlwb3RlbnVzZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHZhbHVlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KHZhbHVlKTtcblxuICAgIGxldCBtID0gdmFsdWUucm93cztcbiAgICBsZXQgbiA9IHZhbHVlLmNvbHVtbnM7XG5cbiAgICBjb25zdCB7XG4gICAgICBjb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycyA9IHRydWUsXG4gICAgICBjb21wdXRlUmlnaHRTaW5ndWxhclZlY3RvcnMgPSB0cnVlLFxuICAgICAgYXV0b1RyYW5zcG9zZSA9IGZhbHNlLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgbGV0IHdhbnR1ID0gQm9vbGVhbihjb21wdXRlTGVmdFNpbmd1bGFyVmVjdG9ycyk7XG4gICAgbGV0IHdhbnR2ID0gQm9vbGVhbihjb21wdXRlUmlnaHRTaW5ndWxhclZlY3RvcnMpO1xuXG4gICAgbGV0IHN3YXBwZWQgPSBmYWxzZTtcbiAgICBsZXQgYTtcbiAgICBpZiAobSA8IG4pIHtcbiAgICAgIGlmICghYXV0b1RyYW5zcG9zZSkge1xuICAgICAgICBhID0gdmFsdWUuY2xvbmUoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdDb21wdXRpbmcgU1ZEIG9uIGEgbWF0cml4IHdpdGggbW9yZSBjb2x1bW5zIHRoYW4gcm93cy4gQ29uc2lkZXIgZW5hYmxpbmcgYXV0b1RyYW5zcG9zZScsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhID0gdmFsdWUudHJhbnNwb3NlKCk7XG4gICAgICAgIG0gPSBhLnJvd3M7XG4gICAgICAgIG4gPSBhLmNvbHVtbnM7XG4gICAgICAgIHN3YXBwZWQgPSB0cnVlO1xuICAgICAgICBsZXQgYXV4ID0gd2FudHU7XG4gICAgICAgIHdhbnR1ID0gd2FudHY7XG4gICAgICAgIHdhbnR2ID0gYXV4O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhID0gdmFsdWUuY2xvbmUoKTtcbiAgICB9XG5cbiAgICBsZXQgbnUgPSBNYXRoLm1pbihtLCBuKTtcbiAgICBsZXQgbmkgPSBNYXRoLm1pbihtICsgMSwgbik7XG4gICAgbGV0IHMgPSBuZXcgRmxvYXQ2NEFycmF5KG5pKTtcbiAgICBsZXQgVSA9IG5ldyBNYXRyaXgobSwgbnUpO1xuICAgIGxldCBWID0gbmV3IE1hdHJpeChuLCBuKTtcblxuICAgIGxldCBlID0gbmV3IEZsb2F0NjRBcnJheShuKTtcbiAgICBsZXQgd29yayA9IG5ldyBGbG9hdDY0QXJyYXkobSk7XG5cbiAgICBsZXQgc2kgPSBuZXcgRmxvYXQ2NEFycmF5KG5pKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5pOyBpKyspIHNpW2ldID0gaTtcblxuICAgIGxldCBuY3QgPSBNYXRoLm1pbihtIC0gMSwgbik7XG4gICAgbGV0IG5ydCA9IE1hdGgubWF4KDAsIE1hdGgubWluKG4gLSAyLCBtKSk7XG4gICAgbGV0IG1yYyA9IE1hdGgubWF4KG5jdCwgbnJ0KTtcblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbXJjOyBrKyspIHtcbiAgICAgIGlmIChrIDwgbmN0KSB7XG4gICAgICAgIHNba10gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgIHNba10gPSBoeXBvdGVudXNlKHNba10sIGEuZ2V0KGksIGspKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc1trXSAhPT0gMCkge1xuICAgICAgICAgIGlmIChhLmdldChrLCBrKSA8IDApIHtcbiAgICAgICAgICAgIHNba10gPSAtc1trXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgIGEuc2V0KGksIGssIGEuZ2V0KGksIGspIC8gc1trXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEuc2V0KGssIGssIGEuZ2V0KGssIGspICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgc1trXSA9IC1zW2tdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgaWYgKGsgPCBuY3QgJiYgc1trXSAhPT0gMCkge1xuICAgICAgICAgIGxldCB0ID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgdCArPSBhLmdldChpLCBrKSAqIGEuZ2V0KGksIGopO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ID0gLXQgLyBhLmdldChrLCBrKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgYS5zZXQoaSwgaiwgYS5nZXQoaSwgaikgKyB0ICogYS5nZXQoaSwgaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlW2pdID0gYS5nZXQoaywgaik7XG4gICAgICB9XG5cbiAgICAgIGlmICh3YW50dSAmJiBrIDwgbmN0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgVS5zZXQoaSwgaywgYS5nZXQoaSwgaykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChrIDwgbnJ0KSB7XG4gICAgICAgIGVba10gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBlW2tdID0gaHlwb3RlbnVzZShlW2tdLCBlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZVtrXSAhPT0gMCkge1xuICAgICAgICAgIGlmIChlW2sgKyAxXSA8IDApIHtcbiAgICAgICAgICAgIGVba10gPSAwIC0gZVtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGsgKyAxOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBlW2ldIC89IGVba107XG4gICAgICAgICAgfVxuICAgICAgICAgIGVbayArIDFdICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZVtrXSA9IC1lW2tdO1xuICAgICAgICBpZiAoayArIDEgPCBtICYmIGVba10gIT09IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgIHdvcmtbaV0gPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICB3b3JrW2ldICs9IGVbal0gKiBhLmdldChpLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaiA9IGsgKyAxOyBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdCA9IC1lW2pdIC8gZVtrICsgMV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgYS5zZXQoaSwgaiwgYS5nZXQoaSwgaikgKyB0ICogd29ya1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh3YW50dikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgVi5zZXQoaSwgaywgZVtpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHAgPSBNYXRoLm1pbihuLCBtICsgMSk7XG4gICAgaWYgKG5jdCA8IG4pIHtcbiAgICAgIHNbbmN0XSA9IGEuZ2V0KG5jdCwgbmN0KTtcbiAgICB9XG4gICAgaWYgKG0gPCBwKSB7XG4gICAgICBzW3AgLSAxXSA9IDA7XG4gICAgfVxuICAgIGlmIChucnQgKyAxIDwgcCkge1xuICAgICAgZVtucnRdID0gYS5nZXQobnJ0LCBwIC0gMSk7XG4gICAgfVxuICAgIGVbcCAtIDFdID0gMDtcblxuICAgIGlmICh3YW50dSkge1xuICAgICAgZm9yIChsZXQgaiA9IG5jdDsgaiA8IG51OyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICBVLnNldChpLCBqLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBVLnNldChqLCBqLCAxKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGsgPSBuY3QgLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICBpZiAoc1trXSAhPT0gMCkge1xuICAgICAgICAgIGZvciAobGV0IGogPSBrICsgMTsgaiA8IG51OyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgICAgIHQgKz0gVS5nZXQoaSwgaykgKiBVLmdldChpLCBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSAtdCAvIFUuZ2V0KGssIGspO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGs7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICAgICAgVS5zZXQoaSwgaiwgVS5nZXQoaSwgaikgKyB0ICogVS5nZXQoaSwgaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGxldCBpID0gazsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgVS5zZXQoaSwgaywgLVUuZ2V0KGksIGspKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgVS5zZXQoaywgaywgMSArIFUuZ2V0KGssIGspKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGsgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIFUuc2V0KGksIGssIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgVS5zZXQoaSwgaywgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFUuc2V0KGssIGssIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHdhbnR2KSB7XG4gICAgICBmb3IgKGxldCBrID0gbiAtIDE7IGsgPj0gMDsgay0tKSB7XG4gICAgICAgIGlmIChrIDwgbnJ0ICYmIGVba10gIT09IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBrICsgMTsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICB0ICs9IFYuZ2V0KGksIGspICogVi5nZXQoaSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ID0gLXQgLyBWLmdldChrICsgMSwgayk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gayArIDE7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgVi5zZXQoaSwgaiwgVi5nZXQoaSwgaikgKyB0ICogVi5nZXQoaSwgaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIFYuc2V0KGksIGssIDApO1xuICAgICAgICB9XG4gICAgICAgIFYuc2V0KGssIGssIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcCA9IHAgLSAxO1xuICAgIGxldCBpdGVyID0gMDtcbiAgICBsZXQgZXBzID0gTnVtYmVyLkVQU0lMT047XG4gICAgd2hpbGUgKHAgPiAwKSB7XG4gICAgICBsZXQgaywga2FzZTtcbiAgICAgIGZvciAoayA9IHAgLSAyOyBrID49IC0xOyBrLS0pIHtcbiAgICAgICAgaWYgKGsgPT09IC0xKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxwaGEgPVxuICAgICAgICAgIE51bWJlci5NSU5fVkFMVUUgKyBlcHMgKiBNYXRoLmFicyhzW2tdICsgTWF0aC5hYnMoc1trICsgMV0pKTtcbiAgICAgICAgaWYgKE1hdGguYWJzKGVba10pIDw9IGFscGhhIHx8IE51bWJlci5pc05hTihlW2tdKSkge1xuICAgICAgICAgIGVba10gPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoayA9PT0gcCAtIDIpIHtcbiAgICAgICAga2FzZSA9IDQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQga3M7XG4gICAgICAgIGZvciAoa3MgPSBwIC0gMTsga3MgPj0gazsga3MtLSkge1xuICAgICAgICAgIGlmIChrcyA9PT0gaykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB0ID1cbiAgICAgICAgICAgIChrcyAhPT0gcCA/IE1hdGguYWJzKGVba3NdKSA6IDApICtcbiAgICAgICAgICAgIChrcyAhPT0gayArIDEgPyBNYXRoLmFicyhlW2tzIC0gMV0pIDogMCk7XG4gICAgICAgICAgaWYgKE1hdGguYWJzKHNba3NdKSA8PSBlcHMgKiB0KSB7XG4gICAgICAgICAgICBzW2tzXSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtzID09PSBrKSB7XG4gICAgICAgICAga2FzZSA9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAoa3MgPT09IHAgLSAxKSB7XG4gICAgICAgICAga2FzZSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAga2FzZSA9IDI7XG4gICAgICAgICAgayA9IGtzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGsrKztcblxuICAgICAgc3dpdGNoIChrYXNlKSB7XG4gICAgICAgIGNhc2UgMToge1xuICAgICAgICAgIGxldCBmID0gZVtwIC0gMl07XG4gICAgICAgICAgZVtwIC0gMl0gPSAwO1xuICAgICAgICAgIGZvciAobGV0IGogPSBwIC0gMjsgaiA+PSBrOyBqLS0pIHtcbiAgICAgICAgICAgIGxldCB0ID0gaHlwb3RlbnVzZShzW2pdLCBmKTtcbiAgICAgICAgICAgIGxldCBjcyA9IHNbal0gLyB0O1xuICAgICAgICAgICAgbGV0IHNuID0gZiAvIHQ7XG4gICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgIGlmIChqICE9PSBrKSB7XG4gICAgICAgICAgICAgIGYgPSAtc24gKiBlW2ogLSAxXTtcbiAgICAgICAgICAgICAgZVtqIC0gMV0gPSBjcyAqIGVbaiAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdCA9IGNzICogVi5nZXQoaSwgaikgKyBzbiAqIFYuZ2V0KGksIHAgLSAxKTtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBwIC0gMSwgLXNuICogVi5nZXQoaSwgaikgKyBjcyAqIFYuZ2V0KGksIHAgLSAxKSk7XG4gICAgICAgICAgICAgICAgVi5zZXQoaSwgaiwgdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgbGV0IGYgPSBlW2sgLSAxXTtcbiAgICAgICAgICBlW2sgLSAxXSA9IDA7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IGs7IGogPCBwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gaHlwb3RlbnVzZShzW2pdLCBmKTtcbiAgICAgICAgICAgIGxldCBjcyA9IHNbal0gLyB0O1xuICAgICAgICAgICAgbGV0IHNuID0gZiAvIHQ7XG4gICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgIGYgPSAtc24gKiBlW2pdO1xuICAgICAgICAgICAgZVtqXSA9IGNzICogZVtqXTtcbiAgICAgICAgICAgIGlmICh3YW50dSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgIHQgPSBjcyAqIFUuZ2V0KGksIGopICsgc24gKiBVLmdldChpLCBrIC0gMSk7XG4gICAgICAgICAgICAgICAgVS5zZXQoaSwgayAtIDEsIC1zbiAqIFUuZ2V0KGksIGopICsgY3MgKiBVLmdldChpLCBrIC0gMSkpO1xuICAgICAgICAgICAgICAgIFUuc2V0KGksIGosIHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBNYXRoLmFicyhzW3AgLSAxXSksXG4gICAgICAgICAgICBNYXRoLmFicyhzW3AgLSAyXSksXG4gICAgICAgICAgICBNYXRoLmFicyhlW3AgLSAyXSksXG4gICAgICAgICAgICBNYXRoLmFicyhzW2tdKSxcbiAgICAgICAgICAgIE1hdGguYWJzKGVba10pLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3Qgc3AgPSBzW3AgLSAxXSAvIHNjYWxlO1xuICAgICAgICAgIGNvbnN0IHNwbTEgPSBzW3AgLSAyXSAvIHNjYWxlO1xuICAgICAgICAgIGNvbnN0IGVwbTEgPSBlW3AgLSAyXSAvIHNjYWxlO1xuICAgICAgICAgIGNvbnN0IHNrID0gc1trXSAvIHNjYWxlO1xuICAgICAgICAgIGNvbnN0IGVrID0gZVtrXSAvIHNjYWxlO1xuICAgICAgICAgIGNvbnN0IGIgPSAoKHNwbTEgKyBzcCkgKiAoc3BtMSAtIHNwKSArIGVwbTEgKiBlcG0xKSAvIDI7XG4gICAgICAgICAgY29uc3QgYyA9IHNwICogZXBtMSAqIChzcCAqIGVwbTEpO1xuICAgICAgICAgIGxldCBzaGlmdCA9IDA7XG4gICAgICAgICAgaWYgKGIgIT09IDAgfHwgYyAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKGIgPCAwKSB7XG4gICAgICAgICAgICAgIHNoaWZ0ID0gMCAtIE1hdGguc3FydChiICogYiArIGMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2hpZnQgPSBNYXRoLnNxcnQoYiAqIGIgKyBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaWZ0ID0gYyAvIChiICsgc2hpZnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgZiA9IChzayArIHNwKSAqIChzayAtIHNwKSArIHNoaWZ0O1xuICAgICAgICAgIGxldCBnID0gc2sgKiBlaztcbiAgICAgICAgICBmb3IgKGxldCBqID0gazsgaiA8IHAgLSAxOyBqKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gaHlwb3RlbnVzZShmLCBnKTtcbiAgICAgICAgICAgIGlmICh0ID09PSAwKSB0ID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgICAgIGxldCBjcyA9IGYgLyB0O1xuICAgICAgICAgICAgbGV0IHNuID0gZyAvIHQ7XG4gICAgICAgICAgICBpZiAoaiAhPT0gaykge1xuICAgICAgICAgICAgICBlW2ogLSAxXSA9IHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmID0gY3MgKiBzW2pdICsgc24gKiBlW2pdO1xuICAgICAgICAgICAgZVtqXSA9IGNzICogZVtqXSAtIHNuICogc1tqXTtcbiAgICAgICAgICAgIGcgPSBzbiAqIHNbaiArIDFdO1xuICAgICAgICAgICAgc1tqICsgMV0gPSBjcyAqIHNbaiArIDFdO1xuICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdCA9IGNzICogVi5nZXQoaSwgaikgKyBzbiAqIFYuZ2V0KGksIGogKyAxKTtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBqICsgMSwgLXNuICogVi5nZXQoaSwgaikgKyBjcyAqIFYuZ2V0KGksIGogKyAxKSk7XG4gICAgICAgICAgICAgICAgVi5zZXQoaSwgaiwgdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHQgPSBoeXBvdGVudXNlKGYsIGcpO1xuICAgICAgICAgICAgaWYgKHQgPT09IDApIHQgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgICAgICAgICAgY3MgPSBmIC8gdDtcbiAgICAgICAgICAgIHNuID0gZyAvIHQ7XG4gICAgICAgICAgICBzW2pdID0gdDtcbiAgICAgICAgICAgIGYgPSBjcyAqIGVbal0gKyBzbiAqIHNbaiArIDFdO1xuICAgICAgICAgICAgc1tqICsgMV0gPSAtc24gKiBlW2pdICsgY3MgKiBzW2ogKyAxXTtcbiAgICAgICAgICAgIGcgPSBzbiAqIGVbaiArIDFdO1xuICAgICAgICAgICAgZVtqICsgMV0gPSBjcyAqIGVbaiArIDFdO1xuICAgICAgICAgICAgaWYgKHdhbnR1ICYmIGogPCBtIC0gMSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgIHQgPSBjcyAqIFUuZ2V0KGksIGopICsgc24gKiBVLmdldChpLCBqICsgMSk7XG4gICAgICAgICAgICAgICAgVS5zZXQoaSwgaiArIDEsIC1zbiAqIFUuZ2V0KGksIGopICsgY3MgKiBVLmdldChpLCBqICsgMSkpO1xuICAgICAgICAgICAgICAgIFUuc2V0KGksIGosIHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVbcCAtIDJdID0gZjtcbiAgICAgICAgICBpdGVyID0gaXRlciArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgaWYgKHNba10gPD0gMCkge1xuICAgICAgICAgICAgc1trXSA9IHNba10gPCAwID8gLXNba10gOiAwO1xuICAgICAgICAgICAgaWYgKHdhbnR2KSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHBwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBrLCAtVi5nZXQoaSwgaykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChrIDwgcHApIHtcbiAgICAgICAgICAgIGlmIChzW2tdID49IHNbayArIDFdKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHQgPSBzW2tdO1xuICAgICAgICAgICAgc1trXSA9IHNbayArIDFdO1xuICAgICAgICAgICAgc1trICsgMV0gPSB0O1xuICAgICAgICAgICAgaWYgKHdhbnR2ICYmIGsgPCBuIC0gMSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIHQgPSBWLmdldChpLCBrICsgMSk7XG4gICAgICAgICAgICAgICAgVi5zZXQoaSwgayArIDEsIFYuZ2V0KGksIGspKTtcbiAgICAgICAgICAgICAgICBWLnNldChpLCBrLCB0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdhbnR1ICYmIGsgPCBtIC0gMSkge1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICAgIHQgPSBVLmdldChpLCBrICsgMSk7XG4gICAgICAgICAgICAgICAgVS5zZXQoaSwgayArIDEsIFUuZ2V0KGksIGspKTtcbiAgICAgICAgICAgICAgICBVLnNldChpLCBrLCB0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVyID0gMDtcbiAgICAgICAgICBwLS07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm8gZGVmYXVsdFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzd2FwcGVkKSB7XG4gICAgICBsZXQgdG1wID0gVjtcbiAgICAgIFYgPSBVO1xuICAgICAgVSA9IHRtcDtcbiAgICB9XG5cbiAgICB0aGlzLm0gPSBtO1xuICAgIHRoaXMubiA9IG47XG4gICAgdGhpcy5zID0gcztcbiAgICB0aGlzLlUgPSBVO1xuICAgIHRoaXMuViA9IFY7XG4gIH1cblxuICBzb2x2ZSh2YWx1ZSkge1xuICAgIGxldCBZID0gdmFsdWU7XG4gICAgbGV0IGUgPSB0aGlzLnRocmVzaG9sZDtcbiAgICBsZXQgc2NvbHMgPSB0aGlzLnMubGVuZ3RoO1xuICAgIGxldCBMcyA9IE1hdHJpeC56ZXJvcyhzY29scywgc2NvbHMpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY29sczsgaSsrKSB7XG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5zW2ldKSA8PSBlKSB7XG4gICAgICAgIExzLnNldChpLCBpLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExzLnNldChpLCBpLCAxIC8gdGhpcy5zW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgVSA9IHRoaXMuVTtcbiAgICBsZXQgViA9IHRoaXMucmlnaHRTaW5ndWxhclZlY3RvcnM7XG5cbiAgICBsZXQgVkwgPSBWLm1tdWwoTHMpO1xuICAgIGxldCB2cm93cyA9IFYucm93cztcbiAgICBsZXQgdXJvd3MgPSBVLnJvd3M7XG4gICAgbGV0IFZMVSA9IE1hdHJpeC56ZXJvcyh2cm93cywgdXJvd3MpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVyb3dzOyBqKyspIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2NvbHM7IGsrKykge1xuICAgICAgICAgIHN1bSArPSBWTC5nZXQoaSwgaykgKiBVLmdldChqLCBrKTtcbiAgICAgICAgfVxuICAgICAgICBWTFUuc2V0KGksIGosIHN1bSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFZMVS5tbXVsKFkpO1xuICB9XG5cbiAgc29sdmVGb3JEaWFnb25hbCh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnNvbHZlKE1hdHJpeC5kaWFnKHZhbHVlKSk7XG4gIH1cblxuICBpbnZlcnNlKCkge1xuICAgIGxldCBWID0gdGhpcy5WO1xuICAgIGxldCBlID0gdGhpcy50aHJlc2hvbGQ7XG4gICAgbGV0IHZyb3dzID0gVi5yb3dzO1xuICAgIGxldCB2Y29scyA9IFYuY29sdW1ucztcbiAgICBsZXQgWCA9IG5ldyBNYXRyaXgodnJvd3MsIHRoaXMucy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZjb2xzOyBqKyspIHtcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc1tqXSkgPiBlKSB7XG4gICAgICAgICAgWC5zZXQoaSwgaiwgVi5nZXQoaSwgaikgLyB0aGlzLnNbal0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IFUgPSB0aGlzLlU7XG5cbiAgICBsZXQgdXJvd3MgPSBVLnJvd3M7XG4gICAgbGV0IHVjb2xzID0gVS5jb2x1bW5zO1xuICAgIGxldCBZID0gbmV3IE1hdHJpeCh2cm93cywgdXJvd3MpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2cm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVyb3dzOyBqKyspIHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdWNvbHM7IGsrKykge1xuICAgICAgICAgIHN1bSArPSBYLmdldChpLCBrKSAqIFUuZ2V0KGosIGspO1xuICAgICAgICB9XG4gICAgICAgIFkuc2V0KGksIGosIHN1bSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFk7XG4gIH1cblxuICBnZXQgY29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNbMF0gLyB0aGlzLnNbTWF0aC5taW4odGhpcy5tLCB0aGlzLm4pIC0gMV07XG4gIH1cblxuICBnZXQgbm9ybTIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc1swXTtcbiAgfVxuXG4gIGdldCByYW5rKCkge1xuICAgIGxldCB0b2wgPSBNYXRoLm1heCh0aGlzLm0sIHRoaXMubikgKiB0aGlzLnNbMF0gKiBOdW1iZXIuRVBTSUxPTjtcbiAgICBsZXQgciA9IDA7XG4gICAgbGV0IHMgPSB0aGlzLnM7XG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICBpZiAoc1tpXSA+IHRvbCkge1xuICAgICAgICByKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByO1xuICB9XG5cbiAgZ2V0IGRpYWdvbmFsKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucyk7XG4gIH1cblxuICBnZXQgdGhyZXNob2xkKCkge1xuICAgIHJldHVybiAoTnVtYmVyLkVQU0lMT04gLyAyKSAqIE1hdGgubWF4KHRoaXMubSwgdGhpcy5uKSAqIHRoaXMuc1swXTtcbiAgfVxuXG4gIGdldCBsZWZ0U2luZ3VsYXJWZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLlU7XG4gIH1cblxuICBnZXQgcmlnaHRTaW5ndWxhclZlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuVjtcbiAgfVxuXG4gIGdldCBkaWFnb25hbE1hdHJpeCgpIHtcbiAgICByZXR1cm4gTWF0cml4LmRpYWcodGhpcy5zKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGh5cG90ZW51c2UoYSwgYikge1xuICBsZXQgciA9IDA7XG4gIGlmIChNYXRoLmFicyhhKSA+IE1hdGguYWJzKGIpKSB7XG4gICAgciA9IGIgLyBhO1xuICAgIHJldHVybiBNYXRoLmFicyhhKSAqIE1hdGguc3FydCgxICsgciAqIHIpO1xuICB9XG4gIGlmIChiICE9PSAwKSB7XG4gICAgciA9IGEgLyBiO1xuICAgIHJldHVybiBNYXRoLmFicyhiKSAqIE1hdGguc3FydCgxICsgciAqIHIpO1xuICB9XG4gIHJldHVybiAwO1xufVxuIiwiaW1wb3J0IEx1RGVjb21wb3NpdGlvbiBmcm9tICcuL2RjL2x1JztcbmltcG9ydCBRckRlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9xcic7XG5pbXBvcnQgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9zdmQnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5pbXBvcnQgV3JhcHBlck1hdHJpeDJEIGZyb20gJy4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJzZShtYXRyaXgsIHVzZVNWRCA9IGZhbHNlKSB7XG4gIG1hdHJpeCA9IFdyYXBwZXJNYXRyaXgyRC5jaGVja01hdHJpeChtYXRyaXgpO1xuICBpZiAodXNlU1ZEKSB7XG4gICAgcmV0dXJuIG5ldyBTaW5ndWxhclZhbHVlRGVjb21wb3NpdGlvbihtYXRyaXgpLmludmVyc2UoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29sdmUobWF0cml4LCBNYXRyaXguZXllKG1hdHJpeC5yb3dzKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvbHZlKGxlZnRIYW5kU2lkZSwgcmlnaHRIYW5kU2lkZSwgdXNlU1ZEID0gZmFsc2UpIHtcbiAgbGVmdEhhbmRTaWRlID0gV3JhcHBlck1hdHJpeDJELmNoZWNrTWF0cml4KGxlZnRIYW5kU2lkZSk7XG4gIHJpZ2h0SGFuZFNpZGUgPSBXcmFwcGVyTWF0cml4MkQuY2hlY2tNYXRyaXgocmlnaHRIYW5kU2lkZSk7XG4gIGlmICh1c2VTVkQpIHtcbiAgICByZXR1cm4gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKGxlZnRIYW5kU2lkZSkuc29sdmUocmlnaHRIYW5kU2lkZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxlZnRIYW5kU2lkZS5pc1NxdWFyZSgpXG4gICAgICA/IG5ldyBMdURlY29tcG9zaXRpb24obGVmdEhhbmRTaWRlKS5zb2x2ZShyaWdodEhhbmRTaWRlKVxuICAgICAgOiBuZXcgUXJEZWNvbXBvc2l0aW9uKGxlZnRIYW5kU2lkZSkuc29sdmUocmlnaHRIYW5kU2lkZSk7XG4gIH1cbn1cbiIsImltcG9ydCBMdURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9sdSc7XG5pbXBvcnQgTWF0cml4IGZyb20gJy4vbWF0cml4JztcbmltcG9ydCBNYXRyaXhTZWxlY3Rpb25WaWV3IGZyb20gJy4vdmlld3Mvc2VsZWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KG1hdHJpeCkge1xuICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgaWYgKG1hdHJpeC5pc1NxdWFyZSgpKSB7XG4gICAgbGV0IGEsIGIsIGMsIGQ7XG4gICAgaWYgKG1hdHJpeC5jb2x1bW5zID09PSAyKSB7XG4gICAgICAvLyAyIHggMiBtYXRyaXhcbiAgICAgIGEgPSBtYXRyaXguZ2V0KDAsIDApO1xuICAgICAgYiA9IG1hdHJpeC5nZXQoMCwgMSk7XG4gICAgICBjID0gbWF0cml4LmdldCgxLCAwKTtcbiAgICAgIGQgPSBtYXRyaXguZ2V0KDEsIDEpO1xuXG4gICAgICByZXR1cm4gYSAqIGQgLSBiICogYztcbiAgICB9IGVsc2UgaWYgKG1hdHJpeC5jb2x1bW5zID09PSAzKSB7XG4gICAgICAvLyAzIHggMyBtYXRyaXhcbiAgICAgIGxldCBzdWJNYXRyaXgwLCBzdWJNYXRyaXgxLCBzdWJNYXRyaXgyO1xuICAgICAgc3ViTWF0cml4MCA9IG5ldyBNYXRyaXhTZWxlY3Rpb25WaWV3KG1hdHJpeCwgWzEsIDJdLCBbMSwgMl0pO1xuICAgICAgc3ViTWF0cml4MSA9IG5ldyBNYXRyaXhTZWxlY3Rpb25WaWV3KG1hdHJpeCwgWzEsIDJdLCBbMCwgMl0pO1xuICAgICAgc3ViTWF0cml4MiA9IG5ldyBNYXRyaXhTZWxlY3Rpb25WaWV3KG1hdHJpeCwgWzEsIDJdLCBbMCwgMV0pO1xuICAgICAgYSA9IG1hdHJpeC5nZXQoMCwgMCk7XG4gICAgICBiID0gbWF0cml4LmdldCgwLCAxKTtcbiAgICAgIGMgPSBtYXRyaXguZ2V0KDAsIDIpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBhICogZGV0ZXJtaW5hbnQoc3ViTWF0cml4MCkgLVxuICAgICAgICBiICogZGV0ZXJtaW5hbnQoc3ViTWF0cml4MSkgK1xuICAgICAgICBjICogZGV0ZXJtaW5hbnQoc3ViTWF0cml4MilcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdlbmVyYWwgcHVycG9zZSBkZXRlcm1pbmFudCB1c2luZyB0aGUgTFUgZGVjb21wb3NpdGlvblxuICAgICAgcmV0dXJuIG5ldyBMdURlY29tcG9zaXRpb24obWF0cml4KS5kZXRlcm1pbmFudDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoJ2RldGVybWluYW50IGNhbiBvbmx5IGJlIGNhbGN1bGF0ZWQgZm9yIGEgc3F1YXJlIG1hdHJpeCcpO1xuICB9XG59XG4iLCJleHBvcnQgeyBBYnN0cmFjdE1hdHJpeCwgZGVmYXVsdCwgZGVmYXVsdCBhcyBNYXRyaXggfSBmcm9tICcuL21hdHJpeCc7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXdzL2luZGV4JztcblxuZXhwb3J0IHsgd3JhcCB9IGZyb20gJy4vd3JhcC93cmFwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV3JhcHBlck1hdHJpeDFEIH0gZnJvbSAnLi93cmFwL1dyYXBwZXJNYXRyaXgxRCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdyYXBwZXJNYXRyaXgyRCB9IGZyb20gJy4vd3JhcC9XcmFwcGVyTWF0cml4MkQnO1xuXG5leHBvcnQgeyBzb2x2ZSwgaW52ZXJzZSB9IGZyb20gJy4vZGVjb21wb3NpdGlvbnMnO1xuZXhwb3J0IHsgZGV0ZXJtaW5hbnQgfSBmcm9tICcuL2RldGVybWluYW50JztcbmV4cG9ydCB7IGxpbmVhckRlcGVuZGVuY2llcyB9IGZyb20gJy4vbGluZWFyRGVwZW5kZW5jaWVzJztcbmV4cG9ydCB7IHBzZXVkb0ludmVyc2UgfSBmcm9tICcuL3BzZXVkb0ludmVyc2UnO1xuZXhwb3J0IHsgY292YXJpYW5jZSB9IGZyb20gJy4vY292YXJpYW5jZSc7XG5leHBvcnQgeyBjb3JyZWxhdGlvbiB9IGZyb20gJy4vY29ycmVsYXRpb24nO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uLFxuICBkZWZhdWx0IGFzIFNWRCxcbn0gZnJvbSAnLi9kYy9zdmQuanMnO1xuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBFaWdlbnZhbHVlRGVjb21wb3NpdGlvbixcbiAgZGVmYXVsdCBhcyBFVkQsXG59IGZyb20gJy4vZGMvZXZkLmpzJztcbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgQ2hvbGVza3lEZWNvbXBvc2l0aW9uLFxuICBkZWZhdWx0IGFzIENITyxcbn0gZnJvbSAnLi9kYy9jaG9sZXNreS5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEx1RGVjb21wb3NpdGlvbiwgZGVmYXVsdCBhcyBMVSB9IGZyb20gJy4vZGMvbHUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBRckRlY29tcG9zaXRpb24sIGRlZmF1bHQgYXMgUVIgfSBmcm9tICcuL2RjL3FyLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmlwYWxzLCBkZWZhdWx0IGFzIE5JUEFMUyB9IGZyb20gJy4vZGMvbmlwYWxzLmpzJztcbiIsImNvbnN0IGluZGVudCA9ICcgJy5yZXBlYXQoMik7XG5jb25zdCBpbmRlbnREYXRhID0gJyAnLnJlcGVhdCg0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluc3BlY3RNYXRyaXgoKSB7XG4gIHJldHVybiBpbnNwZWN0TWF0cml4V2l0aE9wdGlvbnModGhpcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNwZWN0TWF0cml4V2l0aE9wdGlvbnMobWF0cml4LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyBtYXhSb3dzID0gMTUsIG1heENvbHVtbnMgPSAxMCwgbWF4TnVtU2l6ZSA9IDggfSA9IG9wdGlvbnM7XG4gIHJldHVybiBgJHttYXRyaXguY29uc3RydWN0b3IubmFtZX0ge1xuJHtpbmRlbnR9W1xuJHtpbmRlbnREYXRhfSR7aW5zcGVjdERhdGEobWF0cml4LCBtYXhSb3dzLCBtYXhDb2x1bW5zLCBtYXhOdW1TaXplKX1cbiR7aW5kZW50fV1cbiR7aW5kZW50fXJvd3M6ICR7bWF0cml4LnJvd3N9XG4ke2luZGVudH1jb2x1bW5zOiAke21hdHJpeC5jb2x1bW5zfVxufWA7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3REYXRhKG1hdHJpeCwgbWF4Um93cywgbWF4Q29sdW1ucywgbWF4TnVtU2l6ZSkge1xuICBjb25zdCB7IHJvd3MsIGNvbHVtbnMgfSA9IG1hdHJpeDtcbiAgY29uc3QgbWF4SSA9IE1hdGgubWluKHJvd3MsIG1heFJvd3MpO1xuICBjb25zdCBtYXhKID0gTWF0aC5taW4oY29sdW1ucywgbWF4Q29sdW1ucyk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1heEk7IGkrKykge1xuICAgIGxldCBsaW5lID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXhKOyBqKyspIHtcbiAgICAgIGxpbmUucHVzaChmb3JtYXROdW1iZXIobWF0cml4LmdldChpLCBqKSwgbWF4TnVtU2l6ZSkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChgJHtsaW5lLmpvaW4oJyAnKX1gKTtcbiAgfVxuICBpZiAobWF4SiAhPT0gY29sdW1ucykge1xuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gKz0gYCAuLi4gJHtjb2x1bW5zIC0gbWF4Q29sdW1uc30gbW9yZSBjb2x1bW5zYDtcbiAgfVxuICBpZiAobWF4SSAhPT0gcm93cykge1xuICAgIHJlc3VsdC5wdXNoKGAuLi4gJHtyb3dzIC0gbWF4Um93c30gbW9yZSByb3dzYCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5qb2luKGBcXG4ke2luZGVudERhdGF9YCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0sIG1heE51bVNpemUpIHtcbiAgY29uc3QgbnVtU3RyID0gU3RyaW5nKG51bSk7XG4gIGlmIChudW1TdHIubGVuZ3RoIDw9IG1heE51bVNpemUpIHtcbiAgICByZXR1cm4gbnVtU3RyLnBhZEVuZChtYXhOdW1TaXplLCAnICcpO1xuICB9XG4gIGNvbnN0IHByZWNpc2UgPSBudW0udG9QcmVjaXNpb24obWF4TnVtU2l6ZSAtIDIpO1xuICBpZiAocHJlY2lzZS5sZW5ndGggPD0gbWF4TnVtU2l6ZSkge1xuICAgIHJldHVybiBwcmVjaXNlO1xuICB9XG4gIGNvbnN0IGV4cG9uZW50aWFsID0gbnVtLnRvRXhwb25lbnRpYWwobWF4TnVtU2l6ZSAtIDIpO1xuICBjb25zdCBlSW5kZXggPSBleHBvbmVudGlhbC5pbmRleE9mKCdlJyk7XG4gIGNvbnN0IGUgPSBleHBvbmVudGlhbC5zbGljZShlSW5kZXgpO1xuICByZXR1cm4gZXhwb25lbnRpYWwuc2xpY2UoMCwgbWF4TnVtU2l6ZSAtIGUubGVuZ3RoKSArIGU7XG59XG4iLCJpbXBvcnQgU2luZ3VsYXJWYWx1ZURlY29tcG9zaXRpb24gZnJvbSAnLi9kYy9zdmQnO1xuaW1wb3J0IE1hdHJpeCBmcm9tICcuL21hdHJpeCc7XG5cbmZ1bmN0aW9uIHhyYW5nZShuLCBleGNlcHRpb24pIHtcbiAgbGV0IHJhbmdlID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGkgIT09IGV4Y2VwdGlvbikge1xuICAgICAgcmFuZ2UucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhbmdlO1xufVxuXG5mdW5jdGlvbiBkZXBlbmRlbmNpZXNPbmVSb3coXG4gIGVycm9yLFxuICBtYXRyaXgsXG4gIGluZGV4LFxuICB0aHJlc2hvbGRWYWx1ZSA9IDEwZS0xMCxcbiAgdGhyZXNob2xkRXJyb3IgPSAxMGUtMTAsXG4pIHtcbiAgaWYgKGVycm9yID4gdGhyZXNob2xkRXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IEFycmF5KG1hdHJpeC5yb3dzICsgMSkuZmlsbCgwKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcmV0dXJuQXJyYXkgPSBtYXRyaXguYWRkUm93KGluZGV4LCBbMF0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0dXJuQXJyYXkucm93czsgaSsrKSB7XG4gICAgICBpZiAoTWF0aC5hYnMocmV0dXJuQXJyYXkuZ2V0KGksIDApKSA8IHRocmVzaG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybkFycmF5LnNldChpLCAwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybkFycmF5LnRvMURBcnJheSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJEZXBlbmRlbmNpZXMobWF0cml4LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgeyB0aHJlc2hvbGRWYWx1ZSA9IDEwZS0xMCwgdGhyZXNob2xkRXJyb3IgPSAxMGUtMTAgfSA9IG9wdGlvbnM7XG4gIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuXG4gIGxldCBuID0gbWF0cml4LnJvd3M7XG4gIGxldCByZXN1bHRzID0gbmV3IE1hdHJpeChuLCBuKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGxldCBiID0gTWF0cml4LmNvbHVtblZlY3RvcihtYXRyaXguZ2V0Um93KGkpKTtcbiAgICBsZXQgQWJpcyA9IG1hdHJpeC5zdWJNYXRyaXhSb3coeHJhbmdlKG4sIGkpKS50cmFuc3Bvc2UoKTtcbiAgICBsZXQgc3ZkID0gbmV3IFNpbmd1bGFyVmFsdWVEZWNvbXBvc2l0aW9uKEFiaXMpO1xuICAgIGxldCB4ID0gc3ZkLnNvbHZlKGIpO1xuICAgIGxldCBlcnJvciA9IE1hdHJpeC5zdWIoYiwgQWJpcy5tbXVsKHgpKS5hYnMoKS5tYXgoKTtcbiAgICByZXN1bHRzLnNldFJvdyhcbiAgICAgIGksXG4gICAgICBkZXBlbmRlbmNpZXNPbmVSb3coZXJyb3IsIHgsIGksIHRocmVzaG9sZFZhbHVlLCB0aHJlc2hvbGRFcnJvciksXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0cztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpbnN0YWxsTWF0aE9wZXJhdGlvbnMoQWJzdHJhY3RNYXRyaXgsIE1hdHJpeCkge1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLmFkZFModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLmFkZE0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hZGRTID0gZnVuY3Rpb24gYWRkUyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKyB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hZGRNID0gZnVuY3Rpb24gYWRkTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICsgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmFkZCA9IGZ1bmN0aW9uIGFkZChtYXRyaXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguYWRkKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gc3ViKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLnN1YlModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnN1Yk0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zdWJTID0gZnVuY3Rpb24gc3ViUyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgLSB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zdWJNID0gZnVuY3Rpb24gc3ViTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC0gbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnN1YiA9IGZ1bmN0aW9uIHN1YihtYXRyaXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguc3ViKHZhbHVlKTtcbiAgfTtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0ID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1YjtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1YnRyYWN0UyA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zdWJTO1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc3VidHJhY3RNID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnN1Yk07XG4gIEFic3RyYWN0TWF0cml4LnN1YnRyYWN0ID0gQWJzdHJhY3RNYXRyaXguc3ViO1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tdWwgPSBmdW5jdGlvbiBtdWwodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMubXVsUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMubXVsTSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm11bFMgPSBmdW5jdGlvbiBtdWxTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm11bE0gPSBmdW5jdGlvbiBtdWxNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgKiBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgubXVsID0gZnVuY3Rpb24gbXVsKG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5tdWwodmFsdWUpO1xuICB9O1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHkgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsO1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsdGlwbHlTID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm11bFM7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tdWx0aXBseU0gPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubXVsTTtcbiAgQWJzdHJhY3RNYXRyaXgubXVsdGlwbHkgPSBBYnN0cmFjdE1hdHJpeC5tdWw7XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmRpdiA9IGZ1bmN0aW9uIGRpdih2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5kaXZTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5kaXZNKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGl2UyA9IGZ1bmN0aW9uIGRpdlModmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIC8gdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGl2TSA9IGZ1bmN0aW9uIGRpdk0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAvIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5kaXYgPSBmdW5jdGlvbiBkaXYobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmRpdih2YWx1ZSk7XG4gIH07XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZpZGUgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGl2O1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGl2aWRlUyA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZTO1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGl2aWRlTSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5kaXZNO1xuICBBYnN0cmFjdE1hdHJpeC5kaXZpZGUgPSBBYnN0cmFjdE1hdHJpeC5kaXY7XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZCA9IGZ1bmN0aW9uIG1vZCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5tb2RTKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5tb2RNKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubW9kUyA9IGZ1bmN0aW9uIG1vZFModmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopICUgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubW9kTSA9IGZ1bmN0aW9uIG1vZE0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAlIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5tb2QgPSBmdW5jdGlvbiBtb2QobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4Lm1vZCh2YWx1ZSk7XG4gIH07XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tb2R1bHVzID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZDtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZHVsdXNTID0gQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm1vZFM7XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tb2R1bHVzTSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5tb2RNO1xuICBBYnN0cmFjdE1hdHJpeC5tb2R1bHVzID0gQWJzdHJhY3RNYXRyaXgubW9kO1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiBhbmQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMuYW5kUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuYW5kTSh2YWx1ZSk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFuZFMgPSBmdW5jdGlvbiBhbmRTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAmIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFuZE0gPSBmdW5jdGlvbiBhbmRNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgJiBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguYW5kID0gZnVuY3Rpb24gYW5kKG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hbmQodmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uIG9yKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLm9yUyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMub3JNKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUub3JTID0gZnVuY3Rpb24gb3JTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSB8IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm9yTSA9IGZ1bmN0aW9uIG9yTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIHwgbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4Lm9yID0gZnVuY3Rpb24gb3IobWF0cml4LCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4Lm9yKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24geG9yKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLnhvclModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnhvck0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS54b3JTID0gZnVuY3Rpb24geG9yUyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgXiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS54b3JNID0gZnVuY3Rpb24geG9yTShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIHRoaXMuZ2V0KGksIGopIF4gbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnhvciA9IGZ1bmN0aW9uIHhvcihtYXRyaXgsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgueG9yKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubGVmdFNoaWZ0ID0gZnVuY3Rpb24gbGVmdFNoaWZ0KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLmxlZnRTaGlmdFModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLmxlZnRTaGlmdE0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5sZWZ0U2hpZnRTID0gZnVuY3Rpb24gbGVmdFNoaWZ0Uyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgPDwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubGVmdFNoaWZ0TSA9IGZ1bmN0aW9uIGxlZnRTaGlmdE0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSA8PCBtYXRyaXguZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgubGVmdFNoaWZ0ID0gZnVuY3Rpb24gbGVmdFNoaWZ0KG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5sZWZ0U2hpZnQodmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0ID0gZnVuY3Rpb24gc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdCh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gdGhpcy5zaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0Uyh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuc2lnblByb3BhZ2F0aW5nUmlnaHRTaGlmdE0odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0UyA9IGZ1bmN0aW9uIHNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnRTKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSA+PiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0TSA9IGZ1bmN0aW9uIHNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnRNKG1hdHJpeCkge1xuICAgIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICAgIGlmICh0aGlzLnJvd3MgIT09IG1hdHJpeC5yb3dzIHx8XG4gICAgICB0aGlzLmNvbHVtbnMgIT09IG1hdHJpeC5jb2x1bW5zKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTWF0cmljZXMgZGltZW5zaW9ucyBtdXN0IGJlIGVxdWFsJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgPj4gbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnNpZ25Qcm9wYWdhdGluZ1JpZ2h0U2hpZnQgPSBmdW5jdGlvbiBzaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0KG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5zaWduUHJvcGFnYXRpbmdSaWdodFNoaWZ0KHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUucmlnaHRTaGlmdCA9IGZ1bmN0aW9uIHJpZ2h0U2hpZnQodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIHRoaXMucmlnaHRTaGlmdFModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnJpZ2h0U2hpZnRNKHZhbHVlKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUucmlnaHRTaGlmdFMgPSBmdW5jdGlvbiByaWdodFNoaWZ0Uyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgdGhpcy5nZXQoaSwgaikgPj4+IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnJpZ2h0U2hpZnRNID0gZnVuY3Rpb24gcmlnaHRTaGlmdE0obWF0cml4KSB7XG4gICAgbWF0cml4ID0gTWF0cml4LmNoZWNrTWF0cml4KG1hdHJpeCk7XG4gICAgaWYgKHRoaXMucm93cyAhPT0gbWF0cml4LnJvd3MgfHxcbiAgICAgIHRoaXMuY29sdW1ucyAhPT0gbWF0cml4LmNvbHVtbnMpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdNYXRyaWNlcyBkaW1lbnNpb25zIG11c3QgYmUgZXF1YWwnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSA+Pj4gbWF0cml4LmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnJpZ2h0U2hpZnQgPSBmdW5jdGlvbiByaWdodFNoaWZ0KG1hdHJpeCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5yaWdodFNoaWZ0KHZhbHVlKTtcbiAgfTtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnplcm9GaWxsUmlnaHRTaGlmdCA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5yaWdodFNoaWZ0O1xuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuemVyb0ZpbGxSaWdodFNoaWZ0UyA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5yaWdodFNoaWZ0UztcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnplcm9GaWxsUmlnaHRTaGlmdE0gPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUucmlnaHRTaGlmdE07XG4gIEFic3RyYWN0TWF0cml4Lnplcm9GaWxsUmlnaHRTaGlmdCA9IEFic3RyYWN0TWF0cml4LnJpZ2h0U2hpZnQ7XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm5vdCA9IGZ1bmN0aW9uIG5vdCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIH4odGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgubm90ID0gZnVuY3Rpb24gbm90KG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4Lm5vdCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiBhYnMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmFicyh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5hYnMgPSBmdW5jdGlvbiBhYnMobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguYWJzKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFjb3MgPSBmdW5jdGlvbiBhY29zKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5hY29zKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmFjb3MgPSBmdW5jdGlvbiBhY29zKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmFjb3MoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYWNvc2ggPSBmdW5jdGlvbiBhY29zaCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguYWNvc2godGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguYWNvc2ggPSBmdW5jdGlvbiBhY29zaChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hY29zaCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hc2luID0gZnVuY3Rpb24gYXNpbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguYXNpbih0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5hc2luID0gZnVuY3Rpb24gYXNpbihtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5hc2luKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmFzaW5oID0gZnVuY3Rpb24gYXNpbmgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmFzaW5oKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmFzaW5oID0gZnVuY3Rpb24gYXNpbmgobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguYXNpbmgoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuYXRhbiA9IGZ1bmN0aW9uIGF0YW4oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmF0YW4odGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguYXRhbiA9IGZ1bmN0aW9uIGF0YW4obWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguYXRhbigpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5hdGFuaCA9IGZ1bmN0aW9uIGF0YW5oKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5hdGFuaCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5hdGFuaCA9IGZ1bmN0aW9uIGF0YW5oKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmF0YW5oKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmNicnQgPSBmdW5jdGlvbiBjYnJ0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5jYnJ0KHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmNicnQgPSBmdW5jdGlvbiBjYnJ0KG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmNicnQoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuY2VpbCA9IGZ1bmN0aW9uIGNlaWwoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmNlaWwodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguY2VpbCA9IGZ1bmN0aW9uIGNlaWwobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguY2VpbCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5jbHozMiA9IGZ1bmN0aW9uIGNsejMyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5jbHozMih0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5jbHozMiA9IGZ1bmN0aW9uIGNsejMyKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmNsejMyKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmNvcyA9IGZ1bmN0aW9uIGNvcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguY29zKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmNvcyA9IGZ1bmN0aW9uIGNvcyhtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5jb3MoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuY29zaCA9IGZ1bmN0aW9uIGNvc2goKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmNvc2godGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguY29zaCA9IGZ1bmN0aW9uIGNvc2gobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguY29zaCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5leHAgPSBmdW5jdGlvbiBleHAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmV4cCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5leHAgPSBmdW5jdGlvbiBleHAobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguZXhwKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmV4cG0xID0gZnVuY3Rpb24gZXhwbTEoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmV4cG0xKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmV4cG0xID0gZnVuY3Rpb24gZXhwbTEobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguZXhwbTEoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZmxvb3IgPSBmdW5jdGlvbiBmbG9vcigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguZmxvb3IodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguZmxvb3IgPSBmdW5jdGlvbiBmbG9vcihtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5mbG9vcigpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5mcm91bmQgPSBmdW5jdGlvbiBmcm91bmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLmZyb3VuZCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5mcm91bmQgPSBmdW5jdGlvbiBmcm91bmQobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguZnJvdW5kKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIGxvZygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGgubG9nKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmxvZyA9IGZ1bmN0aW9uIGxvZyhtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5sb2coKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUubG9nMXAgPSBmdW5jdGlvbiBsb2cxcCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGgubG9nMXAodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgubG9nMXAgPSBmdW5jdGlvbiBsb2cxcChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5sb2cxcCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5sb2cxMCA9IGZ1bmN0aW9uIGxvZzEwKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5sb2cxMCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5sb2cxMCA9IGZ1bmN0aW9uIGxvZzEwKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmxvZzEwKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmxvZzIgPSBmdW5jdGlvbiBsb2cyKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5sb2cyKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LmxvZzIgPSBmdW5jdGlvbiBsb2cyKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LmxvZzIoKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUucm91bmQgPSBmdW5jdGlvbiByb3VuZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGgucm91bmQodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucm91bmQgPSBmdW5jdGlvbiByb3VuZChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5yb3VuZCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zaWduID0gZnVuY3Rpb24gc2lnbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguc2lnbih0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5zaWduID0gZnVuY3Rpb24gc2lnbihtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5zaWduKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnNpbiA9IGZ1bmN0aW9uIHNpbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguc2luKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnNpbiA9IGZ1bmN0aW9uIHNpbihtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5zaW4oKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuc2luaCA9IGZ1bmN0aW9uIHNpbmgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLnNpbmgodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXguc2luaCA9IGZ1bmN0aW9uIHNpbmgobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXguc2luaCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5zcXJ0ID0gZnVuY3Rpb24gc3FydCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGguc3FydCh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5zcXJ0ID0gZnVuY3Rpb24gc3FydChtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC5zcXJ0KCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLnRhbiA9IGZ1bmN0aW9uIHRhbigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGgudGFuKHRoaXMuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnRhbiA9IGZ1bmN0aW9uIHRhbihtYXRyaXgpIHtcbiAgICBjb25zdCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG1hdHJpeCk7XG4gICAgcmV0dXJuIG5ld01hdHJpeC50YW4oKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUudGFuaCA9IGZ1bmN0aW9uIHRhbmgoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCBNYXRoLnRhbmgodGhpcy5nZXQoaSwgaikpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgudGFuaCA9IGZ1bmN0aW9uIHRhbmgobWF0cml4KSB7XG4gICAgY29uc3QgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChtYXRyaXgpO1xuICAgIHJldHVybiBuZXdNYXRyaXgudGFuaCgpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC50cnVuYyh0aGlzLmdldChpLCBqKSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC50cnVuYyA9IGZ1bmN0aW9uIHRydW5jKG1hdHJpeCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnRydW5jKCk7XG4gIH07XG5cbiAgQWJzdHJhY3RNYXRyaXgucG93ID0gZnVuY3Rpb24gcG93KG1hdHJpeCwgYXJnMCkge1xuICAgIGNvbnN0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgobWF0cml4KTtcbiAgICByZXR1cm4gbmV3TWF0cml4LnBvdyhhcmcwKTtcbiAgfTtcblxuICBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gcG93KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHJldHVybiB0aGlzLnBvd1ModmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnBvd00odmFsdWUpO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5wb3dTID0gZnVuY3Rpb24gcG93Uyh2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgTWF0aC5wb3codGhpcy5nZXQoaSwgaiksIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5wb3dNID0gZnVuY3Rpb24gcG93TShtYXRyaXgpIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBpZiAodGhpcy5yb3dzICE9PSBtYXRyaXgucm93cyB8fFxuICAgICAgdGhpcy5jb2x1bW5zICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ01hdHJpY2VzIGRpbWVuc2lvbnMgbXVzdCBiZSBlcXVhbCcpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIE1hdGgucG93KHRoaXMuZ2V0KGksIGopLCBtYXRyaXguZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xufVxuIiwiaW1wb3J0IHJlc2NhbGUgZnJvbSAnbWwtYXJyYXktcmVzY2FsZSc7XG5cbmltcG9ydCB7IGluc3BlY3RNYXRyaXgsIGluc3BlY3RNYXRyaXhXaXRoT3B0aW9ucyB9IGZyb20gJy4vaW5zcGVjdCc7XG5pbXBvcnQgeyBpbnN0YWxsTWF0aE9wZXJhdGlvbnMgfSBmcm9tICcuL21hdGhPcGVyYXRpb25zJztcbmltcG9ydCB7XG4gIHN1bUJ5Um93LFxuICBzdW1CeUNvbHVtbixcbiAgc3VtQWxsLFxuICBwcm9kdWN0QnlSb3csXG4gIHByb2R1Y3RCeUNvbHVtbixcbiAgcHJvZHVjdEFsbCxcbiAgdmFyaWFuY2VCeVJvdyxcbiAgdmFyaWFuY2VCeUNvbHVtbixcbiAgdmFyaWFuY2VBbGwsXG4gIGNlbnRlckJ5Um93LFxuICBjZW50ZXJCeUNvbHVtbixcbiAgY2VudGVyQWxsLFxuICBzY2FsZUJ5Um93LFxuICBzY2FsZUJ5Q29sdW1uLFxuICBzY2FsZUFsbCxcbiAgZ2V0U2NhbGVCeVJvdyxcbiAgZ2V0U2NhbGVCeUNvbHVtbixcbiAgZ2V0U2NhbGVBbGwsXG59IGZyb20gJy4vc3RhdCc7XG5pbXBvcnQge1xuICBjaGVja1Jvd1ZlY3RvcixcbiAgY2hlY2tSb3dJbmRleCxcbiAgY2hlY2tDb2x1bW5JbmRleCxcbiAgY2hlY2tDb2x1bW5WZWN0b3IsXG4gIGNoZWNrUmFuZ2UsXG4gIGNoZWNrSW5kaWNlcyxcbn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0TWF0cml4IHtcbiAgc3RhdGljIGZyb20xREFycmF5KG5ld1Jvd3MsIG5ld0NvbHVtbnMsIG5ld0RhdGEpIHtcbiAgICBsZXQgbGVuZ3RoID0gbmV3Um93cyAqIG5ld0NvbHVtbnM7XG4gICAgaWYgKGxlbmd0aCAhPT0gbmV3RGF0YS5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdkYXRhIGxlbmd0aCBkb2VzIG5vdCBtYXRjaCBnaXZlbiBkaW1lbnNpb25zJyk7XG4gICAgfVxuICAgIGxldCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KG5ld1Jvd3MsIG5ld0NvbHVtbnMpO1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG5ld1Jvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBuZXdDb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICBuZXdNYXRyaXguc2V0KHJvdywgY29sdW1uLCBuZXdEYXRhW3JvdyAqIG5ld0NvbHVtbnMgKyBjb2x1bW5dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyByb3dWZWN0b3IobmV3RGF0YSkge1xuICAgIGxldCB2ZWN0b3IgPSBuZXcgTWF0cml4KDEsIG5ld0RhdGEubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZlY3Rvci5zZXQoMCwgaSwgbmV3RGF0YVtpXSk7XG4gICAgfVxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgY29sdW1uVmVjdG9yKG5ld0RhdGEpIHtcbiAgICBsZXQgdmVjdG9yID0gbmV3IE1hdHJpeChuZXdEYXRhLmxlbmd0aCwgMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2ZWN0b3Iuc2V0KGksIDAsIG5ld0RhdGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIHplcm9zKHJvd3MsIGNvbHVtbnMpIHtcbiAgICByZXR1cm4gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBvbmVzKHJvd3MsIGNvbHVtbnMpIHtcbiAgICByZXR1cm4gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zKS5maWxsKDEpO1xuICB9XG5cbiAgc3RhdGljIHJhbmQocm93cywgY29sdW1ucywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICBjb25zdCB7IHJhbmRvbSA9IE1hdGgucmFuZG9tIH0gPSBvcHRpb25zO1xuICAgIGxldCBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBtYXRyaXguc2V0KGksIGosIHJhbmRvbSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyByYW5kSW50KHJvd3MsIGNvbHVtbnMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgY29uc3QgeyBtaW4gPSAwLCBtYXggPSAxMDAwLCByYW5kb20gPSBNYXRoLnJhbmRvbSB9ID0gb3B0aW9ucztcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobWluKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbWluIG11c3QgYmUgYW4gaW50ZWdlcicpO1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihtYXgpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhbiBpbnRlZ2VyJyk7XG4gICAgaWYgKG1pbiA+PSBtYXgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gbXVzdCBiZSBzbWFsbGVyIHRoYW4gbWF4Jyk7XG4gICAgbGV0IGludGVydmFsID0gbWF4IC0gbWluO1xuICAgIGxldCBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBsZXQgdmFsdWUgPSBtaW4gKyBNYXRoLnJvdW5kKHJhbmRvbSgpICogaW50ZXJ2YWwpO1xuICAgICAgICBtYXRyaXguc2V0KGksIGosIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBleWUocm93cywgY29sdW1ucywgdmFsdWUpIHtcbiAgICBpZiAoY29sdW1ucyA9PT0gdW5kZWZpbmVkKSBjb2x1bW5zID0gcm93cztcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgdmFsdWUgPSAxO1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbihyb3dzLCBjb2x1bW5zKTtcbiAgICBsZXQgbWF0cml4ID0gdGhpcy56ZXJvcyhyb3dzLCBjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICBtYXRyaXguc2V0KGksIGksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBkaWFnKGRhdGEsIHJvd3MsIGNvbHVtbnMpIHtcbiAgICBsZXQgbCA9IGRhdGEubGVuZ3RoO1xuICAgIGlmIChyb3dzID09PSB1bmRlZmluZWQpIHJvd3MgPSBsO1xuICAgIGlmIChjb2x1bW5zID09PSB1bmRlZmluZWQpIGNvbHVtbnMgPSByb3dzO1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbihsLCByb3dzLCBjb2x1bW5zKTtcbiAgICBsZXQgbWF0cml4ID0gdGhpcy56ZXJvcyhyb3dzLCBjb2x1bW5zKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbjsgaSsrKSB7XG4gICAgICBtYXRyaXguc2V0KGksIGksIGRhdGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIG1pbihtYXRyaXgxLCBtYXRyaXgyKSB7XG4gICAgbWF0cml4MSA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4MSk7XG4gICAgbWF0cml4MiA9IHRoaXMuY2hlY2tNYXRyaXgobWF0cml4Mik7XG4gICAgbGV0IHJvd3MgPSBtYXRyaXgxLnJvd3M7XG4gICAgbGV0IGNvbHVtbnMgPSBtYXRyaXgxLmNvbHVtbnM7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgTWF0aC5taW4obWF0cml4MS5nZXQoaSwgaiksIG1hdHJpeDIuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgbWF4KG1hdHJpeDEsIG1hdHJpeDIpIHtcbiAgICBtYXRyaXgxID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgxKTtcbiAgICBtYXRyaXgyID0gdGhpcy5jaGVja01hdHJpeChtYXRyaXgyKTtcbiAgICBsZXQgcm93cyA9IG1hdHJpeDEucm93cztcbiAgICBsZXQgY29sdW1ucyA9IG1hdHJpeDEuY29sdW1ucztcbiAgICBsZXQgcmVzdWx0ID0gbmV3IHRoaXMocm93cywgY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoaSwgaiwgTWF0aC5tYXgobWF0cml4MS5nZXQoaSwgaiksIG1hdHJpeDIuZ2V0KGksIGopKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tNYXRyaXgodmFsdWUpIHtcbiAgICByZXR1cm4gQWJzdHJhY3RNYXRyaXguaXNNYXRyaXgodmFsdWUpID8gdmFsdWUgOiBuZXcgTWF0cml4KHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBpc01hdHJpeCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmtsYXNzID09PSAnTWF0cml4JztcbiAgfVxuXG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnM7XG4gIH1cblxuICBhcHBseShjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgaSwgaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG8xREFycmF5KCkge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgYXJyYXkucHVzaCh0aGlzLmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHRvMkRBcnJheSgpIHtcbiAgICBsZXQgY29weSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGNvcHkucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIGNvcHlbaV0ucHVzaCh0aGlzLmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3B5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvMkRBcnJheSgpO1xuICB9XG5cbiAgaXNSb3dWZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cyA9PT0gMTtcbiAgfVxuXG4gIGlzQ29sdW1uVmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnMgPT09IDE7XG4gIH1cblxuICBpc1ZlY3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzID09PSAxIHx8IHRoaXMuY29sdW1ucyA9PT0gMTtcbiAgfVxuXG4gIGlzU3F1YXJlKCkge1xuICAgIHJldHVybiB0aGlzLnJvd3MgPT09IHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGlzU3ltbWV0cmljKCkge1xuICAgIGlmICh0aGlzLmlzU3F1YXJlKCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gaTsgaisrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopICE9PSB0aGlzLmdldChqLCBpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzRWNoZWxvbkZvcm0oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgcHJldmlvdXNDb2x1bW4gPSAtMTtcbiAgICBsZXQgaXNFY2hlbG9uRm9ybSA9IHRydWU7XG4gICAgbGV0IGNoZWNrZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IHRoaXMucm93cyAmJiBpc0VjaGVsb25Gb3JtKSB7XG4gICAgICBqID0gMDtcbiAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHdoaWxlIChqIDwgdGhpcy5jb2x1bW5zICYmIGNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA9PT0gMCkge1xuICAgICAgICAgIGorKztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldChpLCBqKSA9PT0gMSAmJiBqID4gcHJldmlvdXNDb2x1bW4pIHtcbiAgICAgICAgICBjaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBwcmV2aW91c0NvbHVtbiA9IGo7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNFY2hlbG9uRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBpc0VjaGVsb25Gb3JtO1xuICB9XG5cbiAgaXNSZWR1Y2VkRWNoZWxvbkZvcm0oKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgcHJldmlvdXNDb2x1bW4gPSAtMTtcbiAgICBsZXQgaXNSZWR1Y2VkRWNoZWxvbkZvcm0gPSB0cnVlO1xuICAgIGxldCBjaGVja2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKGkgPCB0aGlzLnJvd3MgJiYgaXNSZWR1Y2VkRWNoZWxvbkZvcm0pIHtcbiAgICAgIGogPSAwO1xuICAgICAgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGogPCB0aGlzLmNvbHVtbnMgJiYgY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopID09PSAwKSB7XG4gICAgICAgICAgaisrO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0KGksIGopID09PSAxICYmIGogPiBwcmV2aW91c0NvbHVtbikge1xuICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIHByZXZpb3VzQ29sdW1uID0gajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc1JlZHVjZWRFY2hlbG9uRm9ybSA9IGZhbHNlO1xuICAgICAgICAgIGNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBrID0gaiArIDE7IGsgPCB0aGlzLnJvd3M7IGsrKykge1xuICAgICAgICBpZiAodGhpcy5nZXQoaSwgaykgIT09IDApIHtcbiAgICAgICAgICBpc1JlZHVjZWRFY2hlbG9uRm9ybSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBpc1JlZHVjZWRFY2hlbG9uRm9ybTtcbiAgfVxuXG4gIGVjaGVsb25Gb3JtKCkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLmNsb25lKCk7XG4gICAgbGV0IGggPSAwO1xuICAgIGxldCBrID0gMDtcbiAgICB3aGlsZSAoaCA8IHJlc3VsdC5yb3dzICYmIGsgPCByZXN1bHQuY29sdW1ucykge1xuICAgICAgbGV0IGlNYXggPSBoO1xuICAgICAgZm9yIChsZXQgaSA9IGg7IGkgPCByZXN1bHQucm93czsgaSsrKSB7XG4gICAgICAgIGlmIChyZXN1bHQuZ2V0KGksIGspID4gcmVzdWx0LmdldChpTWF4LCBrKSkge1xuICAgICAgICAgIGlNYXggPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmdldChpTWF4LCBrKSA9PT0gMCkge1xuICAgICAgICBrKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQuc3dhcFJvd3MoaCwgaU1heCk7XG4gICAgICAgIGxldCB0bXAgPSByZXN1bHQuZ2V0KGgsIGspO1xuICAgICAgICBmb3IgKGxldCBqID0gazsgaiA8IHJlc3VsdC5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgICByZXN1bHQuc2V0KGgsIGosIHJlc3VsdC5nZXQoaCwgaikgLyB0bXApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBoICsgMTsgaSA8IHJlc3VsdC5yb3dzOyBpKyspIHtcbiAgICAgICAgICBsZXQgZmFjdG9yID0gcmVzdWx0LmdldChpLCBrKSAvIHJlc3VsdC5nZXQoaCwgayk7XG4gICAgICAgICAgcmVzdWx0LnNldChpLCBrLCAwKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gayArIDE7IGogPCByZXN1bHQuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGksIGosIHJlc3VsdC5nZXQoaSwgaikgLSByZXN1bHQuZ2V0KGgsIGopICogZmFjdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaCsrO1xuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZWR1Y2VkRWNoZWxvbkZvcm0oKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuZWNoZWxvbkZvcm0oKTtcbiAgICBsZXQgbSA9IHJlc3VsdC5jb2x1bW5zO1xuICAgIGxldCBuID0gcmVzdWx0LnJvd3M7XG4gICAgbGV0IGggPSBuIC0gMTtcbiAgICB3aGlsZSAoaCA+PSAwKSB7XG4gICAgICBpZiAocmVzdWx0Lm1heFJvdyhoKSA9PT0gMCkge1xuICAgICAgICBoLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcCA9IDA7XG4gICAgICAgIGxldCBwaXZvdCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAocCA8IG4gJiYgcGl2b3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5nZXQoaCwgcCkgPT09IDEpIHtcbiAgICAgICAgICAgIHBpdm90ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGg7IGkrKykge1xuICAgICAgICAgIGxldCBmYWN0b3IgPSByZXN1bHQuZ2V0KGksIHApO1xuICAgICAgICAgIGZvciAobGV0IGogPSBwOyBqIDwgbTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gcmVzdWx0LmdldChpLCBqKSAtIGZhY3RvciAqIHJlc3VsdC5nZXQoaCwgaik7XG4gICAgICAgICAgICByZXN1bHQuc2V0KGksIGosIHRtcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldCBtZXRob2QgaXMgdW5pbXBsZW1lbnRlZCcpO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0IG1ldGhvZCBpcyB1bmltcGxlbWVudGVkJyk7XG4gIH1cblxuICByZXBlYXQob3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICBjb25zdCB7IHJvd3MgPSAxLCBjb2x1bW5zID0gMSB9ID0gb3B0aW9ucztcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIocm93cykgfHwgcm93cyA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdyb3dzIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyJyk7XG4gICAgfVxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjb2x1bW5zKSB8fCBjb2x1bW5zIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvbHVtbnMgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXInKTtcbiAgICB9XG4gICAgbGV0IG1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5yb3dzICogcm93cywgdGhpcy5jb2x1bW5zICogY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIG1hdHJpeC5zZXRTdWJNYXRyaXgodGhpcywgdGhpcy5yb3dzICogaSwgdGhpcy5jb2x1bW5zICogaik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBmaWxsKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbmVnKCkge1xuICAgIHJldHVybiB0aGlzLm11bFMoLTEpO1xuICB9XG5cbiAgZ2V0Um93KGluZGV4KSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgbGV0IHJvdyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIHJvdy5wdXNoKHRoaXMuZ2V0KGluZGV4LCBpKSk7XG4gICAgfVxuICAgIHJldHVybiByb3c7XG4gIH1cblxuICBnZXRSb3dWZWN0b3IoaW5kZXgpIHtcbiAgICByZXR1cm4gTWF0cml4LnJvd1ZlY3Rvcih0aGlzLmdldFJvdyhpbmRleCkpO1xuICB9XG5cbiAgc2V0Um93KGluZGV4LCBhcnJheSkge1xuICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgIGFycmF5ID0gY2hlY2tSb3dWZWN0b3IodGhpcywgYXJyYXkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0KGluZGV4LCBpLCBhcnJheVtpXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3dhcFJvd3Mocm93MSwgcm93Mikge1xuICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93MSk7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBsZXQgdGVtcCA9IHRoaXMuZ2V0KHJvdzEsIGkpO1xuICAgICAgdGhpcy5zZXQocm93MSwgaSwgdGhpcy5nZXQocm93MiwgaSkpO1xuICAgICAgdGhpcy5zZXQocm93MiwgaSwgdGVtcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0Q29sdW1uKGluZGV4KSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBpbmRleCk7XG4gICAgbGV0IGNvbHVtbiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGNvbHVtbi5wdXNoKHRoaXMuZ2V0KGksIGluZGV4KSk7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICBnZXRDb2x1bW5WZWN0b3IoaW5kZXgpIHtcbiAgICByZXR1cm4gTWF0cml4LmNvbHVtblZlY3Rvcih0aGlzLmdldENvbHVtbihpbmRleCkpO1xuICB9XG5cbiAgc2V0Q29sdW1uKGluZGV4LCBhcnJheSkge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgIGFycmF5ID0gY2hlY2tDb2x1bW5WZWN0b3IodGhpcywgYXJyYXkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0KGksIGluZGV4LCBhcnJheVtpXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3dhcENvbHVtbnMoY29sdW1uMSwgY29sdW1uMikge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgY29sdW1uMSk7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBsZXQgdGVtcCA9IHRoaXMuZ2V0KGksIGNvbHVtbjEpO1xuICAgICAgdGhpcy5zZXQoaSwgY29sdW1uMSwgdGhpcy5nZXQoaSwgY29sdW1uMikpO1xuICAgICAgdGhpcy5zZXQoaSwgY29sdW1uMiwgdGVtcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkUm93VmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSArIHZlY3RvcltqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3ViUm93VmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAtIHZlY3RvcltqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbXVsUm93VmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIHZlY3RvcltqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGl2Um93VmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrUm93VmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAvIHZlY3RvcltqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSArIHZlY3RvcltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3ViQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAtIHZlY3RvcltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbXVsQ29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAqIHZlY3RvcltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGl2Q29sdW1uVmVjdG9yKHZlY3Rvcikge1xuICAgIHZlY3RvciA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIHZlY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICB0aGlzLnNldChpLCBqLCB0aGlzLmdldChpLCBqKSAvIHZlY3RvcltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbXVsUm93KGluZGV4LCB2YWx1ZSkge1xuICAgIGNoZWNrUm93SW5kZXgodGhpcywgaW5kZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0KGluZGV4LCBpLCB0aGlzLmdldChpbmRleCwgaSkgKiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbXVsQ29sdW1uKGluZGV4LCB2YWx1ZSkge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0KGksIGluZGV4LCB0aGlzLmdldChpLCBpbmRleCkgKiB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbWF4KCkge1xuICAgIGxldCB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICBpZiAodGhpcy5nZXQoaSwgaikgPiB2KSB7XG4gICAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgbWF4SW5kZXgoKSB7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCAwKTtcbiAgICBsZXQgaWR4ID0gWzAsIDBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopID4gdikge1xuICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgICAgIGlkeFsxXSA9IGo7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuXG4gIG1pbigpIHtcbiAgICBsZXQgdiA9IHRoaXMuZ2V0KDAsIDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KGksIGopIDwgdikge1xuICAgICAgICAgIHYgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIG1pbkluZGV4KCkge1xuICAgIGxldCB2ID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgbGV0IGlkeCA9IFswLCAwXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChpLCBqKSA8IHYpIHtcbiAgICAgICAgICB2ID0gdGhpcy5nZXQoaSwgaik7XG4gICAgICAgICAgaWR4WzBdID0gaTtcbiAgICAgICAgICBpZHhbMV0gPSBqO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH1cblxuICBtYXhSb3cocm93KSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgIGxldCB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nZXQocm93LCBpKSA+IHYpIHtcbiAgICAgICAgdiA9IHRoaXMuZ2V0KHJvdywgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgbWF4Um93SW5kZXgocm93KSB7XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCByb3cpO1xuICAgIGxldCB2ID0gdGhpcy5nZXQocm93LCAwKTtcbiAgICBsZXQgaWR4ID0gW3JvdywgMF07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPiB2KSB7XG4gICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgICBpZHhbMV0gPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWR4O1xuICB9XG5cbiAgbWluUm93KHJvdykge1xuICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICBsZXQgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2V0KHJvdywgaSkgPCB2KSB7XG4gICAgICAgIHYgPSB0aGlzLmdldChyb3csIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdjtcbiAgfVxuXG4gIG1pblJvd0luZGV4KHJvdykge1xuICAgIGNoZWNrUm93SW5kZXgodGhpcywgcm93KTtcbiAgICBsZXQgdiA9IHRoaXMuZ2V0KHJvdywgMCk7XG4gICAgbGV0IGlkeCA9IFtyb3csIDBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5jb2x1bW5zOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdldChyb3csIGkpIDwgdikge1xuICAgICAgICB2ID0gdGhpcy5nZXQocm93LCBpKTtcbiAgICAgICAgaWR4WzFdID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuXG4gIG1heENvbHVtbihjb2x1bW4pIHtcbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmdldChpLCBjb2x1bW4pID4gdikge1xuICAgICAgICB2ID0gdGhpcy5nZXQoaSwgY29sdW1uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICBtYXhDb2x1bW5JbmRleChjb2x1bW4pIHtcbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGNvbHVtbik7XG4gICAgbGV0IHYgPSB0aGlzLmdldCgwLCBjb2x1bW4pO1xuICAgIGxldCBpZHggPSBbMCwgY29sdW1uXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA+IHYpIHtcbiAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICAgIGlkeFswXSA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH1cblxuICBtaW5Db2x1bW4oY29sdW1uKSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgIGxldCB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5nZXQoaSwgY29sdW1uKSA8IHYpIHtcbiAgICAgICAgdiA9IHRoaXMuZ2V0KGksIGNvbHVtbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgbWluQ29sdW1uSW5kZXgoY29sdW1uKSB7XG4gICAgY2hlY2tDb2x1bW5JbmRleCh0aGlzLCBjb2x1bW4pO1xuICAgIGxldCB2ID0gdGhpcy5nZXQoMCwgY29sdW1uKTtcbiAgICBsZXQgaWR4ID0gWzAsIGNvbHVtbl07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgaWYgKHRoaXMuZ2V0KGksIGNvbHVtbikgPCB2KSB7XG4gICAgICAgIHYgPSB0aGlzLmdldChpLCBjb2x1bW4pO1xuICAgICAgICBpZHhbMF0gPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaWR4O1xuICB9XG5cbiAgZGlhZygpIHtcbiAgICBsZXQgbWluID0gTWF0aC5taW4odGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgIGxldCBkaWFnID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgZGlhZy5wdXNoKHRoaXMuZ2V0KGksIGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpYWc7XG4gIH1cblxuICBub3JtKHR5cGUgPSAnZnJvYmVuaXVzJykge1xuICAgIGxldCByZXN1bHQgPSAwO1xuICAgIGlmICh0eXBlID09PSAnbWF4Jykge1xuICAgICAgcmV0dXJuIHRoaXMubWF4KCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnJvYmVuaXVzJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGhpcy5nZXQoaSwgaikgKiB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIE1hdGguc3FydChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgdW5rbm93biBub3JtIHR5cGU6ICR7dHlwZX1gKTtcbiAgICB9XG4gIH1cblxuICBjdW11bGF0aXZlU3VtKCkge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgc3VtICs9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICB0aGlzLnNldChpLCBqLCBzdW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRvdCh2ZWN0b3IyKSB7XG4gICAgaWYgKEFic3RyYWN0TWF0cml4LmlzTWF0cml4KHZlY3RvcjIpKSB2ZWN0b3IyID0gdmVjdG9yMi50bzFEQXJyYXkoKTtcbiAgICBsZXQgdmVjdG9yMSA9IHRoaXMudG8xREFycmF5KCk7XG4gICAgaWYgKHZlY3RvcjEubGVuZ3RoICE9PSB2ZWN0b3IyLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3ZlY3RvcnMgZG8gbm90IGhhdmUgdGhlIHNhbWUgc2l6ZScpO1xuICAgIH1cbiAgICBsZXQgZG90ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlY3RvcjEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvdCArPSB2ZWN0b3IxW2ldICogdmVjdG9yMltpXTtcbiAgICB9XG4gICAgcmV0dXJuIGRvdDtcbiAgfVxuXG4gIG1tdWwob3RoZXIpIHtcbiAgICBvdGhlciA9IE1hdHJpeC5jaGVja01hdHJpeChvdGhlcik7XG5cbiAgICBsZXQgbSA9IHRoaXMucm93cztcbiAgICBsZXQgbiA9IHRoaXMuY29sdW1ucztcbiAgICBsZXQgcCA9IG90aGVyLmNvbHVtbnM7XG5cbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hdHJpeChtLCBwKTtcblxuICAgIGxldCBCY29saiA9IG5ldyBGbG9hdDY0QXJyYXkobik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgIEJjb2xqW2tdID0gb3RoZXIuZ2V0KGssIGopO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG07IGkrKykge1xuICAgICAgICBsZXQgcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgcyArPSB0aGlzLmdldChpLCBrKSAqIEJjb2xqW2tdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnNldChpLCBqLCBzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0cmFzc2VuMngyKG90aGVyKSB7XG4gICAgb3RoZXIgPSBNYXRyaXguY2hlY2tNYXRyaXgob3RoZXIpO1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWF0cml4KDIsIDIpO1xuICAgIGNvbnN0IGExMSA9IHRoaXMuZ2V0KDAsIDApO1xuICAgIGNvbnN0IGIxMSA9IG90aGVyLmdldCgwLCAwKTtcbiAgICBjb25zdCBhMTIgPSB0aGlzLmdldCgwLCAxKTtcbiAgICBjb25zdCBiMTIgPSBvdGhlci5nZXQoMCwgMSk7XG4gICAgY29uc3QgYTIxID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgY29uc3QgYjIxID0gb3RoZXIuZ2V0KDEsIDApO1xuICAgIGNvbnN0IGEyMiA9IHRoaXMuZ2V0KDEsIDEpO1xuICAgIGNvbnN0IGIyMiA9IG90aGVyLmdldCgxLCAxKTtcblxuICAgIC8vIENvbXB1dGUgaW50ZXJtZWRpYXRlIHZhbHVlcy5cbiAgICBjb25zdCBtMSA9IChhMTEgKyBhMjIpICogKGIxMSArIGIyMik7XG4gICAgY29uc3QgbTIgPSAoYTIxICsgYTIyKSAqIGIxMTtcbiAgICBjb25zdCBtMyA9IGExMSAqIChiMTIgLSBiMjIpO1xuICAgIGNvbnN0IG00ID0gYTIyICogKGIyMSAtIGIxMSk7XG4gICAgY29uc3QgbTUgPSAoYTExICsgYTEyKSAqIGIyMjtcbiAgICBjb25zdCBtNiA9IChhMjEgLSBhMTEpICogKGIxMSArIGIxMik7XG4gICAgY29uc3QgbTcgPSAoYTEyIC0gYTIyKSAqIChiMjEgKyBiMjIpO1xuXG4gICAgLy8gQ29tYmluZSBpbnRlcm1lZGlhdGUgdmFsdWVzIGludG8gdGhlIG91dHB1dC5cbiAgICBjb25zdCBjMDAgPSBtMSArIG00IC0gbTUgKyBtNztcbiAgICBjb25zdCBjMDEgPSBtMyArIG01O1xuICAgIGNvbnN0IGMxMCA9IG0yICsgbTQ7XG4gICAgY29uc3QgYzExID0gbTEgLSBtMiArIG0zICsgbTY7XG5cbiAgICByZXN1bHQuc2V0KDAsIDAsIGMwMCk7XG4gICAgcmVzdWx0LnNldCgwLCAxLCBjMDEpO1xuICAgIHJlc3VsdC5zZXQoMSwgMCwgYzEwKTtcbiAgICByZXN1bHQuc2V0KDEsIDEsIGMxMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHN0cmFzc2VuM3gzKG90aGVyKSB7XG4gICAgb3RoZXIgPSBNYXRyaXguY2hlY2tNYXRyaXgob3RoZXIpO1xuICAgIGxldCByZXN1bHQgPSBuZXcgTWF0cml4KDMsIDMpO1xuXG4gICAgY29uc3QgYTAwID0gdGhpcy5nZXQoMCwgMCk7XG4gICAgY29uc3QgYTAxID0gdGhpcy5nZXQoMCwgMSk7XG4gICAgY29uc3QgYTAyID0gdGhpcy5nZXQoMCwgMik7XG4gICAgY29uc3QgYTEwID0gdGhpcy5nZXQoMSwgMCk7XG4gICAgY29uc3QgYTExID0gdGhpcy5nZXQoMSwgMSk7XG4gICAgY29uc3QgYTEyID0gdGhpcy5nZXQoMSwgMik7XG4gICAgY29uc3QgYTIwID0gdGhpcy5nZXQoMiwgMCk7XG4gICAgY29uc3QgYTIxID0gdGhpcy5nZXQoMiwgMSk7XG4gICAgY29uc3QgYTIyID0gdGhpcy5nZXQoMiwgMik7XG5cbiAgICBjb25zdCBiMDAgPSBvdGhlci5nZXQoMCwgMCk7XG4gICAgY29uc3QgYjAxID0gb3RoZXIuZ2V0KDAsIDEpO1xuICAgIGNvbnN0IGIwMiA9IG90aGVyLmdldCgwLCAyKTtcbiAgICBjb25zdCBiMTAgPSBvdGhlci5nZXQoMSwgMCk7XG4gICAgY29uc3QgYjExID0gb3RoZXIuZ2V0KDEsIDEpO1xuICAgIGNvbnN0IGIxMiA9IG90aGVyLmdldCgxLCAyKTtcbiAgICBjb25zdCBiMjAgPSBvdGhlci5nZXQoMiwgMCk7XG4gICAgY29uc3QgYjIxID0gb3RoZXIuZ2V0KDIsIDEpO1xuICAgIGNvbnN0IGIyMiA9IG90aGVyLmdldCgyLCAyKTtcblxuICAgIGNvbnN0IG0xID0gKGEwMCArIGEwMSArIGEwMiAtIGExMCAtIGExMSAtIGEyMSAtIGEyMikgKiBiMTE7XG4gICAgY29uc3QgbTIgPSAoYTAwIC0gYTEwKSAqICgtYjAxICsgYjExKTtcbiAgICBjb25zdCBtMyA9IGExMSAqICgtYjAwICsgYjAxICsgYjEwIC0gYjExIC0gYjEyIC0gYjIwICsgYjIyKTtcbiAgICBjb25zdCBtNCA9ICgtYTAwICsgYTEwICsgYTExKSAqIChiMDAgLSBiMDEgKyBiMTEpO1xuICAgIGNvbnN0IG01ID0gKGExMCArIGExMSkgKiAoLWIwMCArIGIwMSk7XG4gICAgY29uc3QgbTYgPSBhMDAgKiBiMDA7XG4gICAgY29uc3QgbTcgPSAoLWEwMCArIGEyMCArIGEyMSkgKiAoYjAwIC0gYjAyICsgYjEyKTtcbiAgICBjb25zdCBtOCA9ICgtYTAwICsgYTIwKSAqIChiMDIgLSBiMTIpO1xuICAgIGNvbnN0IG05ID0gKGEyMCArIGEyMSkgKiAoLWIwMCArIGIwMik7XG4gICAgY29uc3QgbTEwID0gKGEwMCArIGEwMSArIGEwMiAtIGExMSAtIGExMiAtIGEyMCAtIGEyMSkgKiBiMTI7XG4gICAgY29uc3QgbTExID0gYTIxICogKC1iMDAgKyBiMDIgKyBiMTAgLSBiMTEgLSBiMTIgLSBiMjAgKyBiMjEpO1xuICAgIGNvbnN0IG0xMiA9ICgtYTAyICsgYTIxICsgYTIyKSAqIChiMTEgKyBiMjAgLSBiMjEpO1xuICAgIGNvbnN0IG0xMyA9IChhMDIgLSBhMjIpICogKGIxMSAtIGIyMSk7XG4gICAgY29uc3QgbTE0ID0gYTAyICogYjIwO1xuICAgIGNvbnN0IG0xNSA9IChhMjEgKyBhMjIpICogKC1iMjAgKyBiMjEpO1xuICAgIGNvbnN0IG0xNiA9ICgtYTAyICsgYTExICsgYTEyKSAqIChiMTIgKyBiMjAgLSBiMjIpO1xuICAgIGNvbnN0IG0xNyA9IChhMDIgLSBhMTIpICogKGIxMiAtIGIyMik7XG4gICAgY29uc3QgbTE4ID0gKGExMSArIGExMikgKiAoLWIyMCArIGIyMik7XG4gICAgY29uc3QgbTE5ID0gYTAxICogYjEwO1xuICAgIGNvbnN0IG0yMCA9IGExMiAqIGIyMTtcbiAgICBjb25zdCBtMjEgPSBhMTAgKiBiMDI7XG4gICAgY29uc3QgbTIyID0gYTIwICogYjAxO1xuICAgIGNvbnN0IG0yMyA9IGEyMiAqIGIyMjtcblxuICAgIGNvbnN0IGMwMCA9IG02ICsgbTE0ICsgbTE5O1xuICAgIGNvbnN0IGMwMSA9IG0xICsgbTQgKyBtNSArIG02ICsgbTEyICsgbTE0ICsgbTE1O1xuICAgIGNvbnN0IGMwMiA9IG02ICsgbTcgKyBtOSArIG0xMCArIG0xNCArIG0xNiArIG0xODtcbiAgICBjb25zdCBjMTAgPSBtMiArIG0zICsgbTQgKyBtNiArIG0xNCArIG0xNiArIG0xNztcbiAgICBjb25zdCBjMTEgPSBtMiArIG00ICsgbTUgKyBtNiArIG0yMDtcbiAgICBjb25zdCBjMTIgPSBtMTQgKyBtMTYgKyBtMTcgKyBtMTggKyBtMjE7XG4gICAgY29uc3QgYzIwID0gbTYgKyBtNyArIG04ICsgbTExICsgbTEyICsgbTEzICsgbTE0O1xuICAgIGNvbnN0IGMyMSA9IG0xMiArIG0xMyArIG0xNCArIG0xNSArIG0yMjtcbiAgICBjb25zdCBjMjIgPSBtNiArIG03ICsgbTggKyBtOSArIG0yMztcblxuICAgIHJlc3VsdC5zZXQoMCwgMCwgYzAwKTtcbiAgICByZXN1bHQuc2V0KDAsIDEsIGMwMSk7XG4gICAgcmVzdWx0LnNldCgwLCAyLCBjMDIpO1xuICAgIHJlc3VsdC5zZXQoMSwgMCwgYzEwKTtcbiAgICByZXN1bHQuc2V0KDEsIDEsIGMxMSk7XG4gICAgcmVzdWx0LnNldCgxLCAyLCBjMTIpO1xuICAgIHJlc3VsdC5zZXQoMiwgMCwgYzIwKTtcbiAgICByZXN1bHQuc2V0KDIsIDEsIGMyMSk7XG4gICAgcmVzdWx0LnNldCgyLCAyLCBjMjIpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBtbXVsU3RyYXNzZW4oeSkge1xuICAgIHkgPSBNYXRyaXguY2hlY2tNYXRyaXgoeSk7XG4gICAgbGV0IHggPSB0aGlzLmNsb25lKCk7XG4gICAgbGV0IHIxID0geC5yb3dzO1xuICAgIGxldCBjMSA9IHguY29sdW1ucztcbiAgICBsZXQgcjIgPSB5LnJvd3M7XG4gICAgbGV0IGMyID0geS5jb2x1bW5zO1xuICAgIGlmIChjMSAhPT0gcjIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBNdWx0aXBseWluZyAke3IxfSB4ICR7YzF9IGFuZCAke3IyfSB4ICR7YzJ9IG1hdHJpeDogZGltZW5zaW9ucyBkbyBub3QgbWF0Y2guYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUHV0IGEgbWF0cml4IGludG8gdGhlIHRvcCBsZWZ0IG9mIGEgbWF0cml4IG9mIHplcm9zLlxuICAgIC8vIGByb3dzYCBhbmQgYGNvbHNgIGFyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgb3V0cHV0IG1hdHJpeC5cbiAgICBmdW5jdGlvbiBlbWJlZChtYXQsIHJvd3MsIGNvbHMpIHtcbiAgICAgIGxldCByID0gbWF0LnJvd3M7XG4gICAgICBsZXQgYyA9IG1hdC5jb2x1bW5zO1xuICAgICAgaWYgKHIgPT09IHJvd3MgJiYgYyA9PT0gY29scykge1xuICAgICAgICByZXR1cm4gbWF0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHJlc3VsdGF0ID0gQWJzdHJhY3RNYXRyaXguemVyb3Mocm93cywgY29scyk7XG4gICAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KG1hdCwgMCwgMCk7XG4gICAgICAgIHJldHVybiByZXN1bHRhdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgYm90aCBtYXRyaWNlcyBhcmUgdGhlIHNhbWUgc2l6ZS5cbiAgICAvLyBUaGlzIGlzIGV4Y2x1c2l2ZWx5IGZvciBzaW1wbGljaXR5OlxuICAgIC8vIHRoaXMgYWxnb3JpdGhtIGNhbiBiZSBpbXBsZW1lbnRlZCB3aXRoIG1hdHJpY2VzIG9mIGRpZmZlcmVudCBzaXplcy5cblxuICAgIGxldCByID0gTWF0aC5tYXgocjEsIHIyKTtcbiAgICBsZXQgYyA9IE1hdGgubWF4KGMxLCBjMik7XG4gICAgeCA9IGVtYmVkKHgsIHIsIGMpO1xuICAgIHkgPSBlbWJlZCh5LCByLCBjKTtcblxuICAgIC8vIE91ciByZWN1cnNpdmUgbXVsdGlwbGljYXRpb24gZnVuY3Rpb24uXG4gICAgZnVuY3Rpb24gYmxvY2tNdWx0KGEsIGIsIHJvd3MsIGNvbHMpIHtcbiAgICAgIC8vIEZvciBzbWFsbCBtYXRyaWNlcywgcmVzb3J0IHRvIG5haXZlIG11bHRpcGxpY2F0aW9uLlxuICAgICAgaWYgKHJvd3MgPD0gNTEyIHx8IGNvbHMgPD0gNTEyKSB7XG4gICAgICAgIHJldHVybiBhLm1tdWwoYik7IC8vIGEgaXMgZXF1aXZhbGVudCB0byB0aGlzXG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGR5bmFtaWMgcGFkZGluZy5cbiAgICAgIGlmIChyb3dzICUgMiA9PT0gMSAmJiBjb2xzICUgMiA9PT0gMSkge1xuICAgICAgICBhID0gZW1iZWQoYSwgcm93cyArIDEsIGNvbHMgKyAxKTtcbiAgICAgICAgYiA9IGVtYmVkKGIsIHJvd3MgKyAxLCBjb2xzICsgMSk7XG4gICAgICB9IGVsc2UgaWYgKHJvd3MgJSAyID09PSAxKSB7XG4gICAgICAgIGEgPSBlbWJlZChhLCByb3dzICsgMSwgY29scyk7XG4gICAgICAgIGIgPSBlbWJlZChiLCByb3dzICsgMSwgY29scyk7XG4gICAgICB9IGVsc2UgaWYgKGNvbHMgJSAyID09PSAxKSB7XG4gICAgICAgIGEgPSBlbWJlZChhLCByb3dzLCBjb2xzICsgMSk7XG4gICAgICAgIGIgPSBlbWJlZChiLCByb3dzLCBjb2xzICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBoYWxmUm93cyA9IHBhcnNlSW50KGEucm93cyAvIDIsIDEwKTtcbiAgICAgIGxldCBoYWxmQ29scyA9IHBhcnNlSW50KGEuY29sdW1ucyAvIDIsIDEwKTtcbiAgICAgIC8vIFN1YmRpdmlkZSBpbnB1dCBtYXRyaWNlcy5cbiAgICAgIGxldCBhMTEgPSBhLnN1Yk1hdHJpeCgwLCBoYWxmUm93cyAtIDEsIDAsIGhhbGZDb2xzIC0gMSk7XG4gICAgICBsZXQgYjExID0gYi5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCAwLCBoYWxmQ29scyAtIDEpO1xuXG4gICAgICBsZXQgYTEyID0gYS5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCBoYWxmQ29scywgYS5jb2x1bW5zIC0gMSk7XG4gICAgICBsZXQgYjEyID0gYi5zdWJNYXRyaXgoMCwgaGFsZlJvd3MgLSAxLCBoYWxmQ29scywgYi5jb2x1bW5zIC0gMSk7XG5cbiAgICAgIGxldCBhMjEgPSBhLnN1Yk1hdHJpeChoYWxmUm93cywgYS5yb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcbiAgICAgIGxldCBiMjEgPSBiLnN1Yk1hdHJpeChoYWxmUm93cywgYi5yb3dzIC0gMSwgMCwgaGFsZkNvbHMgLSAxKTtcblxuICAgICAgbGV0IGEyMiA9IGEuc3ViTWF0cml4KGhhbGZSb3dzLCBhLnJvd3MgLSAxLCBoYWxmQ29scywgYS5jb2x1bW5zIC0gMSk7XG4gICAgICBsZXQgYjIyID0gYi5zdWJNYXRyaXgoaGFsZlJvd3MsIGIucm93cyAtIDEsIGhhbGZDb2xzLCBiLmNvbHVtbnMgLSAxKTtcblxuICAgICAgLy8gQ29tcHV0ZSBpbnRlcm1lZGlhdGUgdmFsdWVzLlxuICAgICAgbGV0IG0xID0gYmxvY2tNdWx0KFxuICAgICAgICBBYnN0cmFjdE1hdHJpeC5hZGQoYTExLCBhMjIpLFxuICAgICAgICBBYnN0cmFjdE1hdHJpeC5hZGQoYjExLCBiMjIpLFxuICAgICAgICBoYWxmUm93cyxcbiAgICAgICAgaGFsZkNvbHMsXG4gICAgICApO1xuICAgICAgbGV0IG0yID0gYmxvY2tNdWx0KEFic3RyYWN0TWF0cml4LmFkZChhMjEsIGEyMiksIGIxMSwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgIGxldCBtMyA9IGJsb2NrTXVsdChhMTEsIEFic3RyYWN0TWF0cml4LnN1YihiMTIsIGIyMiksIGhhbGZSb3dzLCBoYWxmQ29scyk7XG4gICAgICBsZXQgbTQgPSBibG9ja011bHQoYTIyLCBBYnN0cmFjdE1hdHJpeC5zdWIoYjIxLCBiMTEpLCBoYWxmUm93cywgaGFsZkNvbHMpO1xuICAgICAgbGV0IG01ID0gYmxvY2tNdWx0KEFic3RyYWN0TWF0cml4LmFkZChhMTEsIGExMiksIGIyMiwgaGFsZlJvd3MsIGhhbGZDb2xzKTtcbiAgICAgIGxldCBtNiA9IGJsb2NrTXVsdChcbiAgICAgICAgQWJzdHJhY3RNYXRyaXguc3ViKGEyMSwgYTExKSxcbiAgICAgICAgQWJzdHJhY3RNYXRyaXguYWRkKGIxMSwgYjEyKSxcbiAgICAgICAgaGFsZlJvd3MsXG4gICAgICAgIGhhbGZDb2xzLFxuICAgICAgKTtcbiAgICAgIGxldCBtNyA9IGJsb2NrTXVsdChcbiAgICAgICAgQWJzdHJhY3RNYXRyaXguc3ViKGExMiwgYTIyKSxcbiAgICAgICAgQWJzdHJhY3RNYXRyaXguYWRkKGIyMSwgYjIyKSxcbiAgICAgICAgaGFsZlJvd3MsXG4gICAgICAgIGhhbGZDb2xzLFxuICAgICAgKTtcblxuICAgICAgLy8gQ29tYmluZSBpbnRlcm1lZGlhdGUgdmFsdWVzIGludG8gdGhlIG91dHB1dC5cbiAgICAgIGxldCBjMTEgPSBBYnN0cmFjdE1hdHJpeC5hZGQobTEsIG00KTtcbiAgICAgIGMxMS5zdWIobTUpO1xuICAgICAgYzExLmFkZChtNyk7XG4gICAgICBsZXQgYzEyID0gQWJzdHJhY3RNYXRyaXguYWRkKG0zLCBtNSk7XG4gICAgICBsZXQgYzIxID0gQWJzdHJhY3RNYXRyaXguYWRkKG0yLCBtNCk7XG4gICAgICBsZXQgYzIyID0gQWJzdHJhY3RNYXRyaXguc3ViKG0xLCBtMik7XG4gICAgICBjMjIuYWRkKG0zKTtcbiAgICAgIGMyMi5hZGQobTYpO1xuXG4gICAgICAvLyBDcm9wIG91dHB1dCB0byB0aGUgZGVzaXJlZCBzaXplICh1bmRvIGR5bmFtaWMgcGFkZGluZykuXG4gICAgICBsZXQgcmVzdWx0YXQgPSBBYnN0cmFjdE1hdHJpeC56ZXJvcygyICogYzExLnJvd3MsIDIgKiBjMTEuY29sdW1ucyk7XG4gICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMTEsIDAsIDApO1xuICAgICAgcmVzdWx0YXQgPSByZXN1bHRhdC5zZXRTdWJNYXRyaXgoYzEyLCBjMTEucm93cywgMCk7XG4gICAgICByZXN1bHRhdCA9IHJlc3VsdGF0LnNldFN1Yk1hdHJpeChjMjEsIDAsIGMxMS5jb2x1bW5zKTtcbiAgICAgIHJlc3VsdGF0ID0gcmVzdWx0YXQuc2V0U3ViTWF0cml4KGMyMiwgYzExLnJvd3MsIGMxMS5jb2x1bW5zKTtcbiAgICAgIHJldHVybiByZXN1bHRhdC5zdWJNYXRyaXgoMCwgcm93cyAtIDEsIDAsIGNvbHMgLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrTXVsdCh4LCB5LCByLCBjKTtcbiAgfVxuXG4gIHNjYWxlUm93cyhvcHRpb25zID0ge30pIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIGNvbnN0IHsgbWluID0gMCwgbWF4ID0gMSB9ID0gb3B0aW9ucztcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShtaW4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaW4gbXVzdCBiZSBhIG51bWJlcicpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1heCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heCBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKG1pbiA+PSBtYXgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdtaW4gbXVzdCBiZSBzbWFsbGVyIHRoYW4gbWF4Jyk7XG4gICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ2V0Um93KGkpO1xuICAgICAgcmVzY2FsZShyb3csIHsgbWluLCBtYXgsIG91dHB1dDogcm93IH0pO1xuICAgICAgbmV3TWF0cml4LnNldFJvdyhpLCByb3cpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWF0cml4O1xuICB9XG5cbiAgc2NhbGVDb2x1bW5zKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgbXVzdCBiZSBhbiBvYmplY3QnKTtcbiAgICB9XG4gICAgY29uc3QgeyBtaW4gPSAwLCBtYXggPSAxIH0gPSBvcHRpb25zO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKG1pbikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21pbiBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobWF4KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4IG11c3QgYmUgYSBudW1iZXInKTtcbiAgICBpZiAobWluID49IG1heCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ21pbiBtdXN0IGJlIHNtYWxsZXIgdGhhbiBtYXgnKTtcbiAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oaSk7XG4gICAgICByZXNjYWxlKGNvbHVtbiwge1xuICAgICAgICBtaW46IG1pbixcbiAgICAgICAgbWF4OiBtYXgsXG4gICAgICAgIG91dHB1dDogY29sdW1uLFxuICAgICAgfSk7XG4gICAgICBuZXdNYXRyaXguc2V0Q29sdW1uKGksIGNvbHVtbik7XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXRyaXg7XG4gIH1cblxuICBmbGlwUm93cygpIHtcbiAgICBjb25zdCBtaWRkbGUgPSBNYXRoLmNlaWwodGhpcy5jb2x1bW5zIC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtaWRkbGU7IGorKykge1xuICAgICAgICBsZXQgZmlyc3QgPSB0aGlzLmdldChpLCBqKTtcbiAgICAgICAgbGV0IGxhc3QgPSB0aGlzLmdldChpLCB0aGlzLmNvbHVtbnMgLSAxIC0gaik7XG4gICAgICAgIHRoaXMuc2V0KGksIGosIGxhc3QpO1xuICAgICAgICB0aGlzLnNldChpLCB0aGlzLmNvbHVtbnMgLSAxIC0gaiwgZmlyc3QpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZsaXBDb2x1bW5zKCkge1xuICAgIGNvbnN0IG1pZGRsZSA9IE1hdGguY2VpbCh0aGlzLnJvd3MgLyAyKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sdW1uczsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pZGRsZTsgaSsrKSB7XG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMuZ2V0KGksIGopO1xuICAgICAgICBsZXQgbGFzdCA9IHRoaXMuZ2V0KHRoaXMucm93cyAtIDEgLSBpLCBqKTtcbiAgICAgICAgdGhpcy5zZXQoaSwgaiwgbGFzdCk7XG4gICAgICAgIHRoaXMuc2V0KHRoaXMucm93cyAtIDEgLSBpLCBqLCBmaXJzdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAga3JvbmVja2VyUHJvZHVjdChvdGhlcikge1xuICAgIG90aGVyID0gTWF0cml4LmNoZWNrTWF0cml4KG90aGVyKTtcblxuICAgIGxldCBtID0gdGhpcy5yb3dzO1xuICAgIGxldCBuID0gdGhpcy5jb2x1bW5zO1xuICAgIGxldCBwID0gb3RoZXIucm93cztcbiAgICBsZXQgcSA9IG90aGVyLmNvbHVtbnM7XG5cbiAgICBsZXQgcmVzdWx0ID0gbmV3IE1hdHJpeChtICogcCwgbiAqIHEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHA7IGsrKykge1xuICAgICAgICAgIGZvciAobGV0IGwgPSAwOyBsIDwgcTsgbCsrKSB7XG4gICAgICAgICAgICByZXN1bHQuc2V0KHAgKiBpICsgaywgcSAqIGogKyBsLCB0aGlzLmdldChpLCBqKSAqIG90aGVyLmdldChrLCBsKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0cmFuc3Bvc2UoKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBNYXRyaXgodGhpcy5jb2x1bW5zLCB0aGlzLnJvd3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgcmVzdWx0LnNldChqLCBpLCB0aGlzLmdldChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzb3J0Um93cyhjb21wYXJlRnVuY3Rpb24gPSBjb21wYXJlTnVtYmVycykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yb3dzOyBpKyspIHtcbiAgICAgIHRoaXMuc2V0Um93KGksIHRoaXMuZ2V0Um93KGkpLnNvcnQoY29tcGFyZUZ1bmN0aW9uKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc29ydENvbHVtbnMoY29tcGFyZUZ1bmN0aW9uID0gY29tcGFyZU51bWJlcnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1uczsgaSsrKSB7XG4gICAgICB0aGlzLnNldENvbHVtbihpLCB0aGlzLmdldENvbHVtbihpKS5zb3J0KGNvbXBhcmVGdW5jdGlvbikpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1Yk1hdHJpeChzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgY2hlY2tSYW5nZSh0aGlzLCBzdGFydFJvdywgZW5kUm93LCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKTtcbiAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChcbiAgICAgIGVuZFJvdyAtIHN0YXJ0Um93ICsgMSxcbiAgICAgIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSxcbiAgICApO1xuICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29sdW1uOyBqIDw9IGVuZENvbHVtbjsgaisrKSB7XG4gICAgICAgIG5ld01hdHJpeC5zZXQoaSAtIHN0YXJ0Um93LCBqIC0gc3RhcnRDb2x1bW4sIHRoaXMuZ2V0KGksIGopKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld01hdHJpeDtcbiAgfVxuXG4gIHN1Yk1hdHJpeFJvdyhpbmRpY2VzLCBzdGFydENvbHVtbiwgZW5kQ29sdW1uKSB7XG4gICAgaWYgKHN0YXJ0Q29sdW1uID09PSB1bmRlZmluZWQpIHN0YXJ0Q29sdW1uID0gMDtcbiAgICBpZiAoZW5kQ29sdW1uID09PSB1bmRlZmluZWQpIGVuZENvbHVtbiA9IHRoaXMuY29sdW1ucyAtIDE7XG4gICAgaWYgKFxuICAgICAgc3RhcnRDb2x1bW4gPiBlbmRDb2x1bW4gfHxcbiAgICAgIHN0YXJ0Q29sdW1uIDwgMCB8fFxuICAgICAgc3RhcnRDb2x1bW4gPj0gdGhpcy5jb2x1bW5zIHx8XG4gICAgICBlbmRDb2x1bW4gPCAwIHx8XG4gICAgICBlbmRDb2x1bW4gPj0gdGhpcy5jb2x1bW5zXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXJndW1lbnQgb3V0IG9mIHJhbmdlJyk7XG4gICAgfVxuXG4gICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgoaW5kaWNlcy5sZW5ndGgsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2x1bW47IGogPD0gZW5kQ29sdW1uOyBqKyspIHtcbiAgICAgICAgaWYgKGluZGljZXNbaV0gPCAwIHx8IGluZGljZXNbaV0gPj0gdGhpcy5yb3dzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYFJvdyBpbmRleCBvdXQgb2YgcmFuZ2U6ICR7aW5kaWNlc1tpXX1gKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdNYXRyaXguc2V0KGksIGogLSBzdGFydENvbHVtbiwgdGhpcy5nZXQoaW5kaWNlc1tpXSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3TWF0cml4O1xuICB9XG5cbiAgc3ViTWF0cml4Q29sdW1uKGluZGljZXMsIHN0YXJ0Um93LCBlbmRSb3cpIHtcbiAgICBpZiAoc3RhcnRSb3cgPT09IHVuZGVmaW5lZCkgc3RhcnRSb3cgPSAwO1xuICAgIGlmIChlbmRSb3cgPT09IHVuZGVmaW5lZCkgZW5kUm93ID0gdGhpcy5yb3dzIC0gMTtcbiAgICBpZiAoXG4gICAgICBzdGFydFJvdyA+IGVuZFJvdyB8fFxuICAgICAgc3RhcnRSb3cgPCAwIHx8XG4gICAgICBzdGFydFJvdyA+PSB0aGlzLnJvd3MgfHxcbiAgICAgIGVuZFJvdyA8IDAgfHxcbiAgICAgIGVuZFJvdyA+PSB0aGlzLnJvd3NcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBcmd1bWVudCBvdXQgb2YgcmFuZ2UnKTtcbiAgICB9XG5cbiAgICBsZXQgbmV3TWF0cml4ID0gbmV3IE1hdHJpeChlbmRSb3cgLSBzdGFydFJvdyArIDEsIGluZGljZXMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSBzdGFydFJvdzsgaiA8PSBlbmRSb3c7IGorKykge1xuICAgICAgICBpZiAoaW5kaWNlc1tpXSA8IDAgfHwgaW5kaWNlc1tpXSA+PSB0aGlzLmNvbHVtbnMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgQ29sdW1uIGluZGV4IG91dCBvZiByYW5nZTogJHtpbmRpY2VzW2ldfWApO1xuICAgICAgICB9XG4gICAgICAgIG5ld01hdHJpeC5zZXQoaiAtIHN0YXJ0Um93LCBpLCB0aGlzLmdldChqLCBpbmRpY2VzW2ldKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXRyaXg7XG4gIH1cblxuICBzZXRTdWJNYXRyaXgobWF0cml4LCBzdGFydFJvdywgc3RhcnRDb2x1bW4pIHtcbiAgICBtYXRyaXggPSBNYXRyaXguY2hlY2tNYXRyaXgobWF0cml4KTtcbiAgICBsZXQgZW5kUm93ID0gc3RhcnRSb3cgKyBtYXRyaXgucm93cyAtIDE7XG4gICAgbGV0IGVuZENvbHVtbiA9IHN0YXJ0Q29sdW1uICsgbWF0cml4LmNvbHVtbnMgLSAxO1xuICAgIGNoZWNrUmFuZ2UodGhpcywgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgICAgdGhpcy5zZXQoc3RhcnRSb3cgKyBpLCBzdGFydENvbHVtbiArIGosIG1hdHJpeC5nZXQoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlbGVjdGlvbihyb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgbGV0IGluZGljZXMgPSBjaGVja0luZGljZXModGhpcywgcm93SW5kaWNlcywgY29sdW1uSW5kaWNlcyk7XG4gICAgbGV0IG5ld01hdHJpeCA9IG5ldyBNYXRyaXgocm93SW5kaWNlcy5sZW5ndGgsIGNvbHVtbkluZGljZXMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXMucm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcm93SW5kZXggPSBpbmRpY2VzLnJvd1tpXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW5kaWNlcy5jb2x1bW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGNvbHVtbkluZGV4ID0gaW5kaWNlcy5jb2x1bW5bal07XG4gICAgICAgIG5ld01hdHJpeC5zZXQoaSwgaiwgdGhpcy5nZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXRyaXg7XG4gIH1cblxuICB0cmFjZSgpIHtcbiAgICBsZXQgbWluID0gTWF0aC5taW4odGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpO1xuICAgIGxldCB0cmFjZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW47IGkrKykge1xuICAgICAgdHJhY2UgKz0gdGhpcy5nZXQoaSwgaSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFjZTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCBuZXdNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMucm93cywgdGhpcy5jb2x1bW5zKTtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIG5ld01hdHJpeC5zZXQocm93LCBjb2x1bW4sIHRoaXMuZ2V0KHJvdywgY29sdW1uKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXRyaXg7XG4gIH1cblxuICBzdW0oYnkpIHtcbiAgICBzd2l0Y2ggKGJ5KSB7XG4gICAgICBjYXNlICdyb3cnOlxuICAgICAgICByZXR1cm4gc3VtQnlSb3codGhpcyk7XG4gICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICByZXR1cm4gc3VtQnlDb2x1bW4odGhpcyk7XG4gICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgcmV0dXJuIHN1bUFsbCh0aGlzKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBvcHRpb246ICR7Ynl9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJvZHVjdChieSkge1xuICAgIHN3aXRjaCAoYnkpIHtcbiAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICAgIHJldHVybiBwcm9kdWN0QnlSb3codGhpcyk7XG4gICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICByZXR1cm4gcHJvZHVjdEJ5Q29sdW1uKHRoaXMpO1xuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiBwcm9kdWN0QWxsKHRoaXMpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9wdGlvbjogJHtieX1gKTtcbiAgICB9XG4gIH1cblxuICBtZWFuKGJ5KSB7XG4gICAgY29uc3Qgc3VtID0gdGhpcy5zdW0oYnkpO1xuICAgIHN3aXRjaCAoYnkpIHtcbiAgICAgIGNhc2UgJ3Jvdyc6IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgICAgIHN1bVtpXSAvPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NvbHVtbic6IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnM7IGkrKykge1xuICAgICAgICAgIHN1bVtpXSAvPSB0aGlzLnJvd3M7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgIH1cbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gc3VtIC8gdGhpcy5zaXplO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9wdGlvbjogJHtieX1gKTtcbiAgICB9XG4gIH1cblxuICB2YXJpYW5jZShieSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBieSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSBieTtcbiAgICAgIGJ5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIGNvbnN0IHsgdW5iaWFzZWQgPSB0cnVlLCBtZWFuID0gdGhpcy5tZWFuKGJ5KSB9ID0gb3B0aW9ucztcbiAgICBpZiAodHlwZW9mIHVuYmlhc2VkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3VuYmlhc2VkIG11c3QgYmUgYSBib29sZWFuJyk7XG4gICAgfVxuICAgIHN3aXRjaCAoYnkpIHtcbiAgICAgIGNhc2UgJ3Jvdyc6IHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG1lYW4pKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWVhbiBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhcmlhbmNlQnlSb3codGhpcywgdW5iaWFzZWQsIG1lYW4pO1xuICAgICAgfVxuICAgICAgY2FzZSAnY29sdW1uJzoge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWVhbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtZWFuIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFyaWFuY2VCeUNvbHVtbih0aGlzLCB1bmJpYXNlZCwgbWVhbik7XG4gICAgICB9XG4gICAgICBjYXNlIHVuZGVmaW5lZDoge1xuICAgICAgICBpZiAodHlwZW9mIG1lYW4gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWVhbiBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhcmlhbmNlQWxsKHRoaXMsIHVuYmlhc2VkLCBtZWFuKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBvcHRpb246ICR7Ynl9YCk7XG4gICAgfVxuICB9XG5cbiAgc3RhbmRhcmREZXZpYXRpb24oYnksIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIGJ5ID09PSAnb2JqZWN0Jykge1xuICAgICAgb3B0aW9ucyA9IGJ5O1xuICAgICAgYnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHZhcmlhbmNlID0gdGhpcy52YXJpYW5jZShieSwgb3B0aW9ucyk7XG4gICAgaWYgKGJ5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodmFyaWFuY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhcmlhbmNlW2ldID0gTWF0aC5zcXJ0KHZhcmlhbmNlW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YXJpYW5jZTtcbiAgICB9XG4gIH1cblxuICBjZW50ZXIoYnksIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0eXBlb2YgYnkgPT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRpb25zID0gYnk7XG4gICAgICBieSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgIH1cbiAgICBjb25zdCB7IGNlbnRlciA9IHRoaXMubWVhbihieSkgfSA9IG9wdGlvbnM7XG4gICAgc3dpdGNoIChieSkge1xuICAgICAgY2FzZSAncm93Jzoge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2VudGVyKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NlbnRlciBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY2VudGVyQnlSb3codGhpcywgY2VudGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBjYXNlICdjb2x1bW4nOiB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjZW50ZXIpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2VudGVyIG11c3QgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICBjZW50ZXJCeUNvbHVtbih0aGlzLCBjZW50ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGNhc2UgdW5kZWZpbmVkOiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2VudGVyICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NlbnRlciBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY2VudGVyQWxsKHRoaXMsIGNlbnRlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIG9wdGlvbjogJHtieX1gKTtcbiAgICB9XG4gIH1cblxuICBzY2FsZShieSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBieSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG9wdGlvbnMgPSBieTtcbiAgICAgIGJ5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gICAgfVxuICAgIGxldCBzY2FsZSA9IG9wdGlvbnMuc2NhbGU7XG4gICAgc3dpdGNoIChieSkge1xuICAgICAgY2FzZSAncm93Jzoge1xuICAgICAgICBpZiAoc2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNjYWxlID0gZ2V0U2NhbGVCeVJvdyh0aGlzKTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShzY2FsZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzY2FsZSBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgc2NhbGVCeVJvdyh0aGlzLCBzY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgY2FzZSAnY29sdW1uJzoge1xuICAgICAgICBpZiAoc2NhbGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNjYWxlID0gZ2V0U2NhbGVCeUNvbHVtbih0aGlzKTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShzY2FsZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzY2FsZSBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgc2NhbGVCeUNvbHVtbih0aGlzLCBzY2FsZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgY2FzZSB1bmRlZmluZWQ6IHtcbiAgICAgICAgaWYgKHNjYWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzY2FsZSA9IGdldFNjYWxlQWxsKHRoaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzY2FsZSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzY2FsZSBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2NhbGVBbGwodGhpcywgc2NhbGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBvcHRpb246ICR7Ynl9YCk7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiBpbnNwZWN0TWF0cml4V2l0aE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4gIH1cbn1cblxuQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLmtsYXNzID0gJ01hdHJpeCc7XG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlW1xuICAgIFN5bWJvbC5mb3IoJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJylcbiAgXSA9IGluc3BlY3RNYXRyaXg7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVOdW1iZXJzKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuXG4vLyBTeW5vbnltc1xuQWJzdHJhY3RNYXRyaXgucmFuZG9tID0gQWJzdHJhY3RNYXRyaXgucmFuZDtcbkFic3RyYWN0TWF0cml4LnJhbmRvbUludCA9IEFic3RyYWN0TWF0cml4LnJhbmRJbnQ7XG5BYnN0cmFjdE1hdHJpeC5kaWFnb25hbCA9IEFic3RyYWN0TWF0cml4LmRpYWc7XG5BYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGlhZ29uYWwgPSBBYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUuZGlhZztcbkFic3RyYWN0TWF0cml4LmlkZW50aXR5ID0gQWJzdHJhY3RNYXRyaXguZXllO1xuQWJzdHJhY3RNYXRyaXgucHJvdG90eXBlLm5lZ2F0ZSA9IEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5uZWc7XG5BYnN0cmFjdE1hdHJpeC5wcm90b3R5cGUudGVuc29yUHJvZHVjdCA9XG4gIEFic3RyYWN0TWF0cml4LnByb3RvdHlwZS5rcm9uZWNrZXJQcm9kdWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXggZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKG5Sb3dzLCBuQ29sdW1ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKE1hdHJpeC5pc01hdHJpeChuUm93cykpIHtcbiAgICAgIHJldHVybiBuUm93cy5jbG9uZSgpO1xuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcihuUm93cykgJiYgblJvd3MgPiAwKSB7XG4gICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgbWF0cml4XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG5Db2x1bW5zKSAmJiBuQ29sdW1ucyA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuUm93czsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLnB1c2gobmV3IEZsb2F0NjRBcnJheShuQ29sdW1ucykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCduQ29sdW1ucyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShuUm93cykpIHtcbiAgICAgIC8vIENvcHkgdGhlIHZhbHVlcyBmcm9tIHRoZSAyRCBhcnJheVxuICAgICAgY29uc3QgYXJyYXlEYXRhID0gblJvd3M7XG4gICAgICBuUm93cyA9IGFycmF5RGF0YS5sZW5ndGg7XG4gICAgICBuQ29sdW1ucyA9IGFycmF5RGF0YVswXS5sZW5ndGg7XG4gICAgICBpZiAodHlwZW9mIG5Db2x1bW5zICE9PSAnbnVtYmVyJyB8fCBuQ29sdW1ucyA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICdEYXRhIG11c3QgYmUgYSAyRCBhcnJheSB3aXRoIGF0IGxlYXN0IG9uZSBlbGVtZW50JyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuUm93czsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheURhdGFbaV0ubGVuZ3RoICE9PSBuQ29sdW1ucykge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmNvbnNpc3RlbnQgYXJyYXkgZGltZW5zaW9ucycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKEZsb2F0NjRBcnJheS5mcm9tKGFycmF5RGF0YVtpXSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlciBvciBhbiBhcnJheScsXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLnJvd3MgPSBuUm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBuQ29sdW1ucztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5kYXRhW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3Jvd0luZGV4XVtjb2x1bW5JbmRleF07XG4gIH1cblxuICByZW1vdmVSb3coaW5kZXgpIHtcbiAgICBjaGVja1Jvd0luZGV4KHRoaXMsIGluZGV4KTtcbiAgICBpZiAodGhpcy5yb3dzID09PSAxKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQSBtYXRyaXggY2Fubm90IGhhdmUgbGVzcyB0aGFuIG9uZSByb3cnKTtcbiAgICB9XG4gICAgdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5yb3dzIC09IDE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRSb3coaW5kZXgsIGFycmF5KSB7XG4gICAgaWYgKGFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFycmF5ID0gaW5kZXg7XG4gICAgICBpbmRleCA9IHRoaXMucm93cztcbiAgICB9XG4gICAgY2hlY2tSb3dJbmRleCh0aGlzLCBpbmRleCwgdHJ1ZSk7XG4gICAgYXJyYXkgPSBGbG9hdDY0QXJyYXkuZnJvbShjaGVja1Jvd1ZlY3Rvcih0aGlzLCBhcnJheSwgdHJ1ZSkpO1xuICAgIHRoaXMuZGF0YS5zcGxpY2UoaW5kZXgsIDAsIGFycmF5KTtcbiAgICB0aGlzLnJvd3MgKz0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUNvbHVtbihpbmRleCkge1xuICAgIGNoZWNrQ29sdW1uSW5kZXgodGhpcywgaW5kZXgpO1xuICAgIGlmICh0aGlzLmNvbHVtbnMgPT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBIG1hdHJpeCBjYW5ub3QgaGF2ZSBsZXNzIHRoYW4gb25lIGNvbHVtbicpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdSb3cgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuY29sdW1ucyAtIDEpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbmRleDsgaisrKSB7XG4gICAgICAgIG5ld1Jvd1tqXSA9IHRoaXMuZGF0YVtpXVtqXTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGogPSBpbmRleCArIDE7IGogPCB0aGlzLmNvbHVtbnM7IGorKykge1xuICAgICAgICBuZXdSb3dbaiAtIDFdID0gdGhpcy5kYXRhW2ldW2pdO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhW2ldID0gbmV3Um93O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtbnMgLT0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZENvbHVtbihpbmRleCwgYXJyYXkpIHtcbiAgICBpZiAodHlwZW9mIGFycmF5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgYXJyYXkgPSBpbmRleDtcbiAgICAgIGluZGV4ID0gdGhpcy5jb2x1bW5zO1xuICAgIH1cbiAgICBjaGVja0NvbHVtbkluZGV4KHRoaXMsIGluZGV4LCB0cnVlKTtcbiAgICBhcnJheSA9IGNoZWNrQ29sdW1uVmVjdG9yKHRoaXMsIGFycmF5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm93czsgaSsrKSB7XG4gICAgICBjb25zdCBuZXdSb3cgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuY29sdW1ucyArIDEpO1xuICAgICAgbGV0IGogPSAwO1xuICAgICAgZm9yICg7IGogPCBpbmRleDsgaisrKSB7XG4gICAgICAgIG5ld1Jvd1tqXSA9IHRoaXMuZGF0YVtpXVtqXTtcbiAgICAgIH1cbiAgICAgIG5ld1Jvd1tqKytdID0gYXJyYXlbaV07XG4gICAgICBmb3IgKDsgaiA8IHRoaXMuY29sdW1ucyArIDE7IGorKykge1xuICAgICAgICBuZXdSb3dbal0gPSB0aGlzLmRhdGFbaV1baiAtIDFdO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhW2ldID0gbmV3Um93O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtbnMgKz0gMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5pbnN0YWxsTWF0aE9wZXJhdGlvbnMoQWJzdHJhY3RNYXRyaXgsIE1hdHJpeCk7XG4iLCJpbXBvcnQgU1ZEIGZyb20gJy4vZGMvc3ZkJztcbmltcG9ydCBNYXRyaXggZnJvbSAnLi9tYXRyaXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHNldWRvSW52ZXJzZShtYXRyaXgsIHRocmVzaG9sZCA9IE51bWJlci5FUFNJTE9OKSB7XG4gIG1hdHJpeCA9IE1hdHJpeC5jaGVja01hdHJpeChtYXRyaXgpO1xuICBsZXQgc3ZkU29sdXRpb24gPSBuZXcgU1ZEKG1hdHJpeCwgeyBhdXRvVHJhbnNwb3NlOiB0cnVlIH0pO1xuXG4gIGxldCBVID0gc3ZkU29sdXRpb24ubGVmdFNpbmd1bGFyVmVjdG9ycztcbiAgbGV0IFYgPSBzdmRTb2x1dGlvbi5yaWdodFNpbmd1bGFyVmVjdG9ycztcbiAgbGV0IHMgPSBzdmRTb2x1dGlvbi5kaWFnb25hbDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoTWF0aC5hYnMoc1tpXSkgPiB0aHJlc2hvbGQpIHtcbiAgICAgIHNbaV0gPSAxLjAgLyBzW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICBzW2ldID0gMC4wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBWLm1tdWwoTWF0cml4LmRpYWcocykubW11bChVLnRyYW5zcG9zZSgpKSk7XG59XG4iLCJpbXBvcnQgeyBuZXdBcnJheSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdW1CeVJvdyhtYXRyaXgpIHtcbiAgbGV0IHN1bSA9IG5ld0FycmF5KG1hdHJpeC5yb3dzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgKytpKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgKytqKSB7XG4gICAgICBzdW1baV0gKz0gbWF0cml4LmdldChpLCBqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUJ5Q29sdW1uKG1hdHJpeCkge1xuICBsZXQgc3VtID0gbmV3QXJyYXkobWF0cml4LmNvbHVtbnMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyArK2kpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyArK2opIHtcbiAgICAgIHN1bVtqXSArPSBtYXRyaXguZ2V0KGksIGopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VtQWxsKG1hdHJpeCkge1xuICBsZXQgdiA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgdiArPSBtYXRyaXguZ2V0KGksIGopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RCeVJvdyhtYXRyaXgpIHtcbiAgbGV0IHN1bSA9IG5ld0FycmF5KG1hdHJpeC5yb3dzLCAxKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgKytpKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgKytqKSB7XG4gICAgICBzdW1baV0gKj0gbWF0cml4LmdldChpLCBqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RCeUNvbHVtbihtYXRyaXgpIHtcbiAgbGV0IHN1bSA9IG5ld0FycmF5KG1hdHJpeC5jb2x1bW5zLCAxKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgKytpKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgKytqKSB7XG4gICAgICBzdW1bal0gKj0gbWF0cml4LmdldChpLCBqKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2R1Y3RBbGwobWF0cml4KSB7XG4gIGxldCB2ID0gMTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICB2ICo9IG1hdHJpeC5nZXQoaSwgaik7XG4gICAgfVxuICB9XG4gIHJldHVybiB2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFuY2VCeVJvdyhtYXRyaXgsIHVuYmlhc2VkLCBtZWFuKSB7XG4gIGNvbnN0IHJvd3MgPSBtYXRyaXgucm93cztcbiAgY29uc3QgY29scyA9IG1hdHJpeC5jb2x1bW5zO1xuICBjb25zdCB2YXJpYW5jZSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgbGV0IHN1bTEgPSAwO1xuICAgIGxldCBzdW0yID0gMDtcbiAgICBsZXQgeCA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcbiAgICAgIHggPSBtYXRyaXguZ2V0KGksIGopIC0gbWVhbltpXTtcbiAgICAgIHN1bTEgKz0geDtcbiAgICAgIHN1bTIgKz0geCAqIHg7XG4gICAgfVxuICAgIGlmICh1bmJpYXNlZCkge1xuICAgICAgdmFyaWFuY2UucHVzaCgoc3VtMiAtIChzdW0xICogc3VtMSkgLyBjb2xzKSAvIChjb2xzIC0gMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYW5jZS5wdXNoKChzdW0yIC0gKHN1bTEgKiBzdW0xKSAvIGNvbHMpIC8gY29scyk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2YXJpYW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhcmlhbmNlQnlDb2x1bW4obWF0cml4LCB1bmJpYXNlZCwgbWVhbikge1xuICBjb25zdCByb3dzID0gbWF0cml4LnJvd3M7XG4gIGNvbnN0IGNvbHMgPSBtYXRyaXguY29sdW1ucztcbiAgY29uc3QgdmFyaWFuY2UgPSBbXTtcblxuICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgIGxldCBzdW0xID0gMDtcbiAgICBsZXQgc3VtMiA9IDA7XG4gICAgbGV0IHggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICB4ID0gbWF0cml4LmdldChpLCBqKSAtIG1lYW5bal07XG4gICAgICBzdW0xICs9IHg7XG4gICAgICBzdW0yICs9IHggKiB4O1xuICAgIH1cbiAgICBpZiAodW5iaWFzZWQpIHtcbiAgICAgIHZhcmlhbmNlLnB1c2goKHN1bTIgLSAoc3VtMSAqIHN1bTEpIC8gcm93cykgLyAocm93cyAtIDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFuY2UucHVzaCgoc3VtMiAtIChzdW0xICogc3VtMSkgLyByb3dzKSAvIHJvd3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdmFyaWFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYW5jZUFsbChtYXRyaXgsIHVuYmlhc2VkLCBtZWFuKSB7XG4gIGNvbnN0IHJvd3MgPSBtYXRyaXgucm93cztcbiAgY29uc3QgY29scyA9IG1hdHJpeC5jb2x1bW5zO1xuICBjb25zdCBzaXplID0gcm93cyAqIGNvbHM7XG5cbiAgbGV0IHN1bTEgPSAwO1xuICBsZXQgc3VtMiA9IDA7XG4gIGxldCB4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xuICAgICAgeCA9IG1hdHJpeC5nZXQoaSwgaikgLSBtZWFuO1xuICAgICAgc3VtMSArPSB4O1xuICAgICAgc3VtMiArPSB4ICogeDtcbiAgICB9XG4gIH1cbiAgaWYgKHVuYmlhc2VkKSB7XG4gICAgcmV0dXJuIChzdW0yIC0gKHN1bTEgKiBzdW0xKSAvIHNpemUpIC8gKHNpemUgLSAxKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHN1bTIgLSAoc3VtMSAqIHN1bTEpIC8gc2l6ZSkgLyBzaXplO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjZW50ZXJCeVJvdyhtYXRyaXgsIG1lYW4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICBtYXRyaXguc2V0KGksIGosIG1hdHJpeC5nZXQoaSwgaikgLSBtZWFuW2ldKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNlbnRlckJ5Q29sdW1uKG1hdHJpeCwgbWVhbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgaiwgbWF0cml4LmdldChpLCBqKSAtIG1lYW5bal0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2VudGVyQWxsKG1hdHJpeCwgbWVhbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICAgIG1hdHJpeC5zZXQoaSwgaiwgbWF0cml4LmdldChpLCBqKSAtIG1lYW4pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVCeVJvdyhtYXRyaXgpIHtcbiAgY29uc3Qgc2NhbGUgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICBzdW0gKz0gTWF0aC5wb3cobWF0cml4LmdldChpLCBqKSwgMikgLyAobWF0cml4LmNvbHVtbnMgLSAxKTtcbiAgICB9XG4gICAgc2NhbGUucHVzaChNYXRoLnNxcnQoc3VtKSk7XG4gIH1cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVCeVJvdyhtYXRyaXgsIHNjYWxlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgbWF0cml4LnNldChpLCBqLCBtYXRyaXguZ2V0KGksIGopIC8gc2NhbGVbaV0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVCeUNvbHVtbihtYXRyaXgpIHtcbiAgY29uc3Qgc2NhbGUgPSBbXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgICBzdW0gKz0gTWF0aC5wb3cobWF0cml4LmdldChpLCBqKSwgMikgLyAobWF0cml4LnJvd3MgLSAxKTtcbiAgICB9XG4gICAgc2NhbGUucHVzaChNYXRoLnNxcnQoc3VtKSk7XG4gIH1cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVCeUNvbHVtbihtYXRyaXgsIHNjYWxlKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4LnJvd3M7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4LmNvbHVtbnM7IGorKykge1xuICAgICAgbWF0cml4LnNldChpLCBqLCBtYXRyaXguZ2V0KGksIGopIC8gc2NhbGVbal0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVBbGwobWF0cml4KSB7XG4gIGNvbnN0IGRpdmlkZXIgPSBtYXRyaXguc2l6ZSAtIDE7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG1hdHJpeC5jb2x1bW5zOyBqKyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5yb3dzOyBpKyspIHtcbiAgICAgIHN1bSArPSBNYXRoLnBvdyhtYXRyaXguZ2V0KGksIGopLCAyKSAvIGRpdmlkZXI7XG4gICAgfVxuICB9XG4gIHJldHVybiBNYXRoLnNxcnQoc3VtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQWxsKG1hdHJpeCwgc2NhbGUpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgucm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXRyaXguY29sdW1uczsgaisrKSB7XG4gICAgICBtYXRyaXguc2V0KGksIGosIG1hdHJpeC5nZXQoaSwgaikgLyBzY2FsZSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBwcml2YXRlXG4gKiBDaGVjayB0aGF0IGEgcm93IGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzXG4gKiBAcGFyYW0ge01hdHJpeH0gbWF0cml4XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW291dGVyXVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dJbmRleChtYXRyaXgsIGluZGV4LCBvdXRlcikge1xuICBsZXQgbWF4ID0gb3V0ZXIgPyBtYXRyaXgucm93cyA6IG1hdHJpeC5yb3dzIC0gMTtcbiAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IG1heCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdSb3cgaW5kZXggb3V0IG9mIHJhbmdlJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICogQ2hlY2sgdGhhdCBhIGNvbHVtbiBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kc1xuICogQHBhcmFtIHtNYXRyaXh9IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvdXRlcl1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uSW5kZXgobWF0cml4LCBpbmRleCwgb3V0ZXIpIHtcbiAgbGV0IG1heCA9IG91dGVyID8gbWF0cml4LmNvbHVtbnMgOiBtYXRyaXguY29sdW1ucyAtIDE7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBtYXgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ29sdW1uIGluZGV4IG91dCBvZiByYW5nZScpO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIHZlY3RvciBpcyBhbiBhcnJheSB3aXRoIHRoZSByaWdodCBsZW5ndGhcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3JcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUm93VmVjdG9yKG1hdHJpeCwgdmVjdG9yKSB7XG4gIGlmICh2ZWN0b3IudG8xREFycmF5KSB7XG4gICAgdmVjdG9yID0gdmVjdG9yLnRvMURBcnJheSgpO1xuICB9XG4gIGlmICh2ZWN0b3IubGVuZ3RoICE9PSBtYXRyaXguY29sdW1ucykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgJ3ZlY3RvciBzaXplIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhlIG51bWJlciBvZiBjb2x1bW5zJyxcbiAgICApO1xuICB9XG4gIHJldHVybiB2ZWN0b3I7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIENoZWNrIHRoYXQgdGhlIHByb3ZpZGVkIHZlY3RvciBpcyBhbiBhcnJheSB3aXRoIHRoZSByaWdodCBsZW5ndGhcbiAqIEBwYXJhbSB7TWF0cml4fSBtYXRyaXhcbiAqIEBwYXJhbSB7QXJyYXl8TWF0cml4fSB2ZWN0b3JcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sdW1uVmVjdG9yKG1hdHJpeCwgdmVjdG9yKSB7XG4gIGlmICh2ZWN0b3IudG8xREFycmF5KSB7XG4gICAgdmVjdG9yID0gdmVjdG9yLnRvMURBcnJheSgpO1xuICB9XG4gIGlmICh2ZWN0b3IubGVuZ3RoICE9PSBtYXRyaXgucm93cykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd2ZWN0b3Igc2l6ZSBtdXN0IGJlIHRoZSBzYW1lIGFzIHRoZSBudW1iZXIgb2Ygcm93cycpO1xuICB9XG4gIHJldHVybiB2ZWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gIHJldHVybiB7XG4gICAgcm93OiBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKSxcbiAgICBjb2x1bW46IGNoZWNrQ29sdW1uSW5kaWNlcyhtYXRyaXgsIGNvbHVtbkluZGljZXMpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSb3dJbmRpY2VzKG1hdHJpeCwgcm93SW5kaWNlcykge1xuICBpZiAodHlwZW9mIHJvd0luZGljZXMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5leHBlY3RlZCB0eXBlIGZvciByb3cgaW5kaWNlcycpO1xuICB9XG5cbiAgbGV0IHJvd091dCA9IHJvd0luZGljZXMuc29tZSgocikgPT4ge1xuICAgIHJldHVybiByIDwgMCB8fCByID49IG1hdHJpeC5yb3dzO1xuICB9KTtcblxuICBpZiAocm93T3V0KSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3JvdyBpbmRpY2VzIGFyZSBvdXQgb2YgcmFuZ2UnKTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShyb3dJbmRpY2VzKSkgcm93SW5kaWNlcyA9IEFycmF5LmZyb20ocm93SW5kaWNlcyk7XG5cbiAgcmV0dXJuIHJvd0luZGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKSB7XG4gIGlmICh0eXBlb2YgY29sdW1uSW5kaWNlcyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bmV4cGVjdGVkIHR5cGUgZm9yIGNvbHVtbiBpbmRpY2VzJyk7XG4gIH1cblxuICBsZXQgY29sdW1uT3V0ID0gY29sdW1uSW5kaWNlcy5zb21lKChjKSA9PiB7XG4gICAgcmV0dXJuIGMgPCAwIHx8IGMgPj0gbWF0cml4LmNvbHVtbnM7XG4gIH0pO1xuXG4gIGlmIChjb2x1bW5PdXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignY29sdW1uIGluZGljZXMgYXJlIG91dCBvZiByYW5nZScpO1xuICB9XG4gIGlmICghQXJyYXkuaXNBcnJheShjb2x1bW5JbmRpY2VzKSkgY29sdW1uSW5kaWNlcyA9IEFycmF5LmZyb20oY29sdW1uSW5kaWNlcyk7XG5cbiAgcmV0dXJuIGNvbHVtbkluZGljZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JhbmdlKG1hdHJpeCwgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdleHBlY3RlZCA0IGFyZ3VtZW50cycpO1xuICB9XG4gIGNoZWNrTnVtYmVyKCdzdGFydFJvdycsIHN0YXJ0Um93KTtcbiAgY2hlY2tOdW1iZXIoJ2VuZFJvdycsIGVuZFJvdyk7XG4gIGNoZWNrTnVtYmVyKCdzdGFydENvbHVtbicsIHN0YXJ0Q29sdW1uKTtcbiAgY2hlY2tOdW1iZXIoJ2VuZENvbHVtbicsIGVuZENvbHVtbik7XG4gIGlmIChcbiAgICBzdGFydFJvdyA+IGVuZFJvdyB8fFxuICAgIHN0YXJ0Q29sdW1uID4gZW5kQ29sdW1uIHx8XG4gICAgc3RhcnRSb3cgPCAwIHx8XG4gICAgc3RhcnRSb3cgPj0gbWF0cml4LnJvd3MgfHxcbiAgICBlbmRSb3cgPCAwIHx8XG4gICAgZW5kUm93ID49IG1hdHJpeC5yb3dzIHx8XG4gICAgc3RhcnRDb2x1bW4gPCAwIHx8XG4gICAgc3RhcnRDb2x1bW4gPj0gbWF0cml4LmNvbHVtbnMgfHxcbiAgICBlbmRDb2x1bW4gPCAwIHx8XG4gICAgZW5kQ29sdW1uID49IG1hdHJpeC5jb2x1bW5zXG4gICkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdTdWJtYXRyaXggaW5kaWNlcyBhcmUgb3V0IG9mIHJhbmdlJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0FycmF5KGxlbmd0aCwgdmFsdWUgPSAwKSB7XG4gIGxldCBhcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXkucHVzaCh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBjaGVja051bWJlcihuYW1lLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gbXVzdCBiZSBhIG51bWJlcmApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdE1hdHJpeCB9IGZyb20gJy4uL21hdHJpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VWaWV3IGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvd3MsIGNvbHVtbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2hlY2tDb2x1bW5JbmRleCB9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4Q29sdW1uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBjb2x1bW4pIHtcbiAgICBjaGVja0NvbHVtbkluZGV4KG1hdHJpeCwgY29sdW1uKTtcbiAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCAxKTtcbiAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXRyaXguc2V0KHJvd0luZGV4LCB0aGlzLmNvbHVtbiwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChyb3dJbmRleCwgdGhpcy5jb2x1bW4pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjaGVja0NvbHVtbkluZGljZXMgfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeENvbHVtblNlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgY29sdW1uSW5kaWNlcykge1xuICAgIGNvbHVtbkluZGljZXMgPSBjaGVja0NvbHVtbkluZGljZXMobWF0cml4LCBjb2x1bW5JbmRpY2VzKTtcbiAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5yb3dzLCBjb2x1bW5JbmRpY2VzLmxlbmd0aCk7XG4gICAgdGhpcy5jb2x1bW5JbmRpY2VzID0gY29sdW1uSW5kaWNlcztcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXRyaXguc2V0KHJvd0luZGV4LCB0aGlzLmNvbHVtbkluZGljZXNbY29sdW1uSW5kZXhdLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldChyb3dJbmRleCwgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSk7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhGbGlwQ29sdW1uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgbWF0cml4LmNvbHVtbnMpO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQocm93SW5kZXgsIHRoaXMuY29sdW1ucyAtIGNvbHVtbkluZGV4IC0gMSk7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhGbGlwUm93VmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgc3VwZXIobWF0cml4LCBtYXRyaXgucm93cywgbWF0cml4LmNvbHVtbnMpO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQodGhpcy5yb3dzIC0gcm93SW5kZXggLSAxLCBjb2x1bW5JbmRleCwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQodGhpcy5yb3dzIC0gcm93SW5kZXggLSAxLCBjb2x1bW5JbmRleCk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4Q29sdW1uVmlldyB9IGZyb20gJy4vY29sdW1uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4Q29sdW1uU2VsZWN0aW9uVmlldyB9IGZyb20gJy4vY29sdW1uU2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWF0cml4RmxpcENvbHVtblZpZXcgfSBmcm9tICcuL2ZsaXBDb2x1bW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNYXRyaXhGbGlwUm93VmlldyB9IGZyb20gJy4vZmxpcFJvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeFJvd1ZpZXcgfSBmcm9tICcuL3Jvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgfSBmcm9tICcuL3Jvd1NlbGVjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeFNlbGVjdGlvblZpZXcgfSBmcm9tICcuL3NlbGVjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeFN1YlZpZXcgfSBmcm9tICcuL3N1Yic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeFRyYW5zcG9zZVZpZXcgfSBmcm9tICcuL3RyYW5zcG9zZSc7XG4iLCJpbXBvcnQgeyBjaGVja1Jvd0luZGV4IH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhSb3dWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHJvdykge1xuICAgIGNoZWNrUm93SW5kZXgobWF0cml4LCByb3cpO1xuICAgIHN1cGVyKG1hdHJpeCwgMSwgbWF0cml4LmNvbHVtbnMpO1xuICAgIHRoaXMucm93ID0gcm93O1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICB0aGlzLm1hdHJpeC5zZXQodGhpcy5yb3csIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvdywgY29sdW1uSW5kZXgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjaGVja1Jvd0luZGljZXMgfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IEJhc2VWaWV3IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeFJvd1NlbGVjdGlvblZpZXcgZXh0ZW5kcyBCYXNlVmlldyB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgcm93SW5kaWNlcykge1xuICAgIHJvd0luZGljZXMgPSBjaGVja1Jvd0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzKTtcbiAgICBzdXBlcihtYXRyaXgsIHJvd0luZGljZXMubGVuZ3RoLCBtYXRyaXguY29sdW1ucyk7XG4gICAgdGhpcy5yb3dJbmRpY2VzID0gcm93SW5kaWNlcztcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXRyaXguc2V0KHRoaXMucm93SW5kaWNlc1tyb3dJbmRleF0sIGNvbHVtbkluZGV4LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4LmdldCh0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLCBjb2x1bW5JbmRleCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNoZWNrSW5kaWNlcyB9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQgQmFzZVZpZXcgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4U2VsZWN0aW9uVmlldyBleHRlbmRzIEJhc2VWaWV3IHtcbiAgY29uc3RydWN0b3IobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKSB7XG4gICAgbGV0IGluZGljZXMgPSBjaGVja0luZGljZXMobWF0cml4LCByb3dJbmRpY2VzLCBjb2x1bW5JbmRpY2VzKTtcbiAgICBzdXBlcihtYXRyaXgsIGluZGljZXMucm93Lmxlbmd0aCwgaW5kaWNlcy5jb2x1bW4ubGVuZ3RoKTtcbiAgICB0aGlzLnJvd0luZGljZXMgPSBpbmRpY2VzLnJvdztcbiAgICB0aGlzLmNvbHVtbkluZGljZXMgPSBpbmRpY2VzLmNvbHVtbjtcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXRyaXguc2V0KFxuICAgICAgdGhpcy5yb3dJbmRpY2VzW3Jvd0luZGV4XSxcbiAgICAgIHRoaXMuY29sdW1uSW5kaWNlc1tjb2x1bW5JbmRleF0sXG4gICAgICB2YWx1ZSxcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeC5nZXQoXG4gICAgICB0aGlzLnJvd0luZGljZXNbcm93SW5kZXhdLFxuICAgICAgdGhpcy5jb2x1bW5JbmRpY2VzW2NvbHVtbkluZGV4XSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjaGVja1JhbmdlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhTdWJWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHN0YXJ0Um93LCBlbmRSb3csIHN0YXJ0Q29sdW1uLCBlbmRDb2x1bW4pIHtcbiAgICBjaGVja1JhbmdlKG1hdHJpeCwgc3RhcnRSb3csIGVuZFJvdywgc3RhcnRDb2x1bW4sIGVuZENvbHVtbik7XG4gICAgc3VwZXIobWF0cml4LCBlbmRSb3cgLSBzdGFydFJvdyArIDEsIGVuZENvbHVtbiAtIHN0YXJ0Q29sdW1uICsgMSk7XG4gICAgdGhpcy5zdGFydFJvdyA9IHN0YXJ0Um93O1xuICAgIHRoaXMuc3RhcnRDb2x1bW4gPSBzdGFydENvbHVtbjtcbiAgfVxuXG4gIHNldChyb3dJbmRleCwgY29sdW1uSW5kZXgsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXRyaXguc2V0KFxuICAgICAgdGhpcy5zdGFydFJvdyArIHJvd0luZGV4LFxuICAgICAgdGhpcy5zdGFydENvbHVtbiArIGNvbHVtbkluZGV4LFxuICAgICAgdmFsdWUsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KFxuICAgICAgdGhpcy5zdGFydFJvdyArIHJvd0luZGV4LFxuICAgICAgdGhpcy5zdGFydENvbHVtbiArIGNvbHVtbkluZGV4LFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBCYXNlVmlldyBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXhUcmFuc3Bvc2VWaWV3IGV4dGVuZHMgQmFzZVZpZXcge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcihtYXRyaXgsIG1hdHJpeC5jb2x1bW5zLCBtYXRyaXgucm93cyk7XG4gIH1cblxuICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMubWF0cml4LnNldChjb2x1bW5JbmRleCwgcm93SW5kZXgsIHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXguZ2V0KGNvbHVtbkluZGV4LCByb3dJbmRleCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFic3RyYWN0TWF0cml4IH0gZnJvbSAnLi4vbWF0cml4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV3JhcHBlck1hdHJpeDFEIGV4dGVuZHMgQWJzdHJhY3RNYXRyaXgge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7IHJvd3MgPSAxIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoICUgcm93cyAhPT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGUgZGF0YSBsZW5ndGggaXMgbm90IGRpdmlzaWJsZSBieSB0aGUgbnVtYmVyIG9mIHJvd3MnKTtcbiAgICB9XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY29sdW1ucyA9IGRhdGEubGVuZ3RoIC8gcm93cztcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgc2V0KHJvd0luZGV4LCBjb2x1bW5JbmRleCwgdmFsdWUpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9jYWxjdWxhdGVJbmRleChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldChyb3dJbmRleCwgY29sdW1uSW5kZXgpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLl9jYWxjdWxhdGVJbmRleChyb3dJbmRleCwgY29sdW1uSW5kZXgpO1xuICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xuICB9XG5cbiAgX2NhbGN1bGF0ZUluZGV4KHJvdywgY29sdW1uKSB7XG4gICAgcmV0dXJuIHJvdyAqIHRoaXMuY29sdW1ucyArIGNvbHVtbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWJzdHJhY3RNYXRyaXggfSBmcm9tICcuLi9tYXRyaXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXcmFwcGVyTWF0cml4MkQgZXh0ZW5kcyBBYnN0cmFjdE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5yb3dzID0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5jb2x1bW5zID0gZGF0YVswXS5sZW5ndGg7XG4gIH1cblxuICBzZXQocm93SW5kZXgsIGNvbHVtbkluZGV4LCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVtyb3dJbmRleF1bY29sdW1uSW5kZXhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQocm93SW5kZXgsIGNvbHVtbkluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVtyb3dJbmRleF1bY29sdW1uSW5kZXhdO1xuICB9XG59XG4iLCJpbXBvcnQgV3JhcHBlck1hdHJpeDFEIGZyb20gJy4vV3JhcHBlck1hdHJpeDFEJztcbmltcG9ydCBXcmFwcGVyTWF0cml4MkQgZnJvbSAnLi9XcmFwcGVyTWF0cml4MkQnO1xuXG5leHBvcnQgZnVuY3Rpb24gd3JhcChhcnJheSwgb3B0aW9ucykge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICBpZiAoYXJyYXlbMF0gJiYgQXJyYXkuaXNBcnJheShhcnJheVswXSkpIHtcbiAgICAgIHJldHVybiBuZXcgV3JhcHBlck1hdHJpeDJEKGFycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBXcmFwcGVyTWF0cml4MUQoYXJyYXksIG9wdGlvbnMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RoZSBhcmd1bWVudCBpcyBub3QgYW4gYXJyYXknKTtcbiAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW55UXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSBbXSwgY29tcGFyZSA9IGRlZmF1bHRDb21wYXJlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jb21wYXJlID0gY29tcGFyZTtcblxuICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKHRoaXMubGVuZ3RoID4+IDEpIC0gMTsgaSA+PSAwOyBpLS0pIHRoaXMuX2Rvd24oaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdXNoKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgIHRoaXMuX3VwKHRoaXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5kYXRhWzBdO1xuICAgICAgICBjb25zdCBib3R0b20gPSB0aGlzLmRhdGEucG9wKCk7XG4gICAgICAgIHRoaXMubGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhWzBdID0gYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5fZG93bigwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVswXTtcbiAgICB9XG5cbiAgICBfdXAocG9zKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhLCBjb21wYXJlfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhW3Bvc107XG5cbiAgICAgICAgd2hpbGUgKHBvcyA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IChwb3MgLSAxKSA+PiAxO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGRhdGFbcGFyZW50XTtcbiAgICAgICAgICAgIGlmIChjb21wYXJlKGl0ZW0sIGN1cnJlbnQpID49IDApIGJyZWFrO1xuICAgICAgICAgICAgZGF0YVtwb3NdID0gY3VycmVudDtcbiAgICAgICAgICAgIHBvcyA9IHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbcG9zXSA9IGl0ZW07XG4gICAgfVxuXG4gICAgX2Rvd24ocG9zKSB7XG4gICAgICAgIGNvbnN0IHtkYXRhLCBjb21wYXJlfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGhhbGZMZW5ndGggPSB0aGlzLmxlbmd0aCA+PiAxO1xuICAgICAgICBjb25zdCBpdGVtID0gZGF0YVtwb3NdO1xuXG4gICAgICAgIHdoaWxlIChwb3MgPCBoYWxmTGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgbGVmdCA9IChwb3MgPDwgMSkgKyAxO1xuICAgICAgICAgICAgbGV0IGJlc3QgPSBkYXRhW2xlZnRdO1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgMTtcblxuICAgICAgICAgICAgaWYgKHJpZ2h0IDwgdGhpcy5sZW5ndGggJiYgY29tcGFyZShkYXRhW3JpZ2h0XSwgYmVzdCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGJlc3QgPSBkYXRhW3JpZ2h0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb21wYXJlKGJlc3QsIGl0ZW0pID49IDApIGJyZWFrO1xuXG4gICAgICAgICAgICBkYXRhW3Bvc10gPSBiZXN0O1xuICAgICAgICAgICAgcG9zID0gbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFbcG9zXSA9IGl0ZW07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZShhLCBiKSB7XG4gICAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiAwO1xufVxuIiwiY29uc3Qge0VuZ2luZX0gPSByZXF1aXJlKCcuL2VuZ2luZS5qcycpO1xuXG5sZXQgX2VuZ2luZSA9IG51bGw7XG5cbm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgY29uc3Qge2RhdGF9ID0gbXNnO1xuICBpZiAoZGF0YS50eXBlID09PSAnc2V0dXAnKSB7XG4gICAgY29uc3Qge29wdGlvbnN9ID0gZGF0YTtcbiAgICBfZW5naW5lID0gbmV3IEVuZ2luZShvcHRpb25zLmlucHV0V2lkdGgsIG9wdGlvbnMuaW5wdXRIZWlnaHQpO1xuICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdzZXR1cERvbmUnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeDogX2VuZ2luZS5nZXRQcm9qZWN0aW9uTWF0cml4KClcbiAgICB9KTtcbiAgfVxuICBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdhZGRJbWFnZVRhcmdldCcpIHtcbiAgICBjb25zdCB7b3B0aW9uc30gPSBkYXRhO1xuICAgIF9lbmdpbmUuYWRkSW1hZ2VUYXJnZXQoZGF0YS5vcHRpb25zKTtcbiAgICBwb3N0TWVzc2FnZSh7dHlwZTogJ2FkZEltYWdlVGFyZ2V0RG9uZSd9KTtcbiAgfVxuICBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdwcm9jZXNzJykge1xuICAgIGNvbnN0IHtvcHRpb25zfSA9IGRhdGE7XG4gICAgY29uc3QgcmVzdWx0ID0gX2VuZ2luZS5wcm9jZXNzKG9wdGlvbnMucXVlcnlJbWFnZURhdGEpO1xuICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdwcm9jZXNzRG9uZScsXG4gICAgICByZXN1bHQ6IHJlc3VsdFxuICAgIH0pO1xuICB9XG59O1xuIiwiY29uc3Qge0ltYWdlVGFyZ2V0fSA9IHJlcXVpcmUoJy4vaW1hZ2UtdGFyZ2V0L2luZGV4LmpzJyk7XG5cbmNsYXNzIEVuZ2luZSB7XG4gIGNvbnN0cnVjdG9yKGlucHV0V2lkdGgsIGlucHV0SGVpZ2h0KSB7XG4gICAgdGhpcy5pbnB1dFdpZHRoID0gaW5wdXRXaWR0aDtcbiAgICB0aGlzLmlucHV0SGVpZ2h0ID0gaW5wdXRIZWlnaHQ7XG4gICAgdGhpcy5faW1hZ2VUYXJnZXRzID0gW107XG5cbiAgICBjb25zdCBuZWFyID0gMTA7XG4gICAgY29uc3QgZmFyID0gMTAwMDtcbiAgICBjb25zdCBmb3Z5ID0gNDUuMCAqIE1hdGguUEkgLyAxODA7IC8vIDQ1IGluIHJhZGlhbi4gZmllbGQgb2YgdmlldyB2ZXJ0aWNhbFxuICAgIGNvbnN0IGYgPSAoaW5wdXRIZWlnaHQvMikgLyBNYXRoLnRhbihmb3Z5LzIpO1xuICAgIC8vICAgICBbZnggIHMgY3hdXG4gICAgLy8gSyA9IFsgMCBmeCBjeV1cbiAgICAvLyAgICAgWyAwICAwICAxXVxuICAgIHRoaXMuX3Byb2plY3Rpb25UcmFuc2Zvcm0gPSBbXG4gICAgICBbZiwgMCwgaW5wdXRXaWR0aCAvIDJdLFxuICAgICAgWzAsIGYsIGlucHV0SGVpZ2h0IC8gMl0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdO1xuICAgIGNvbnNvbGUubG9nKFwicHJvamVjdCB0cmFuc2Zvcm1cIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5fcHJvamVjdGlvblRyYW5zZm9ybSkpO1xuXG4gICAgdGhpcy5fcHJvamVjdGlvbk1hdHJpeCA9IF9nbFByb2plY3Rpb25NYXRyaXgoe1xuICAgICAgcHJvamVjdGlvblRyYW5zZm9ybTogdGhpcy5fcHJvamVjdGlvblRyYW5zZm9ybSxcbiAgICAgIHdpZHRoOiBpbnB1dFdpZHRoIC0gMSwgLy8gLTEgaXMgbm90IG5lY2Vzc2FyeT9cbiAgICAgIGhlaWdodDogaW5wdXRIZWlnaHQgLSAxLFxuICAgICAgbmVhcjogbmVhcixcbiAgICAgIGZhcjogZmFyLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdGlvbk1hdHJpeDtcbiAgfVxuXG4gIGFkZEltYWdlVGFyZ2V0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBpbWFnZVRhcmdldCA9IG5ldyBJbWFnZVRhcmdldChPYmplY3QuYXNzaWduKHtwcm9qZWN0aW9uVHJhbnNmb3JtOiB0aGlzLl9wcm9qZWN0aW9uVHJhbnNmb3JtfSwgb3B0aW9ucykpO1xuICAgIHRoaXMuX2ltYWdlVGFyZ2V0cy5wdXNoKGltYWdlVGFyZ2V0KTtcbiAgfVxuXG4gIHByb2Nlc3MocXVlcnlJbWFnZURhdGEpIHtcbiAgICBjb25zdCBxdWVyeUltYWdlID0ge2RhdGE6IHF1ZXJ5SW1hZ2VEYXRhLCB3aWR0aDogdGhpcy5pbnB1dFdpZHRoLCBoZWlnaHQ6IHRoaXMuaW5wdXRIZWlnaHR9O1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHRoaXMuX2ltYWdlVGFyZ2V0cy5mb3JFYWNoKChpbWFnZVRhcmdldCkgPT4ge1xuICAgICAgY29uc3QgbW9kZWxWaWV3VHJhbnNmb3JtID0gaW1hZ2VUYXJnZXQucHJvY2VzcyhxdWVyeUltYWdlKTtcbiAgICAgIGNvbnN0IHdvcmxkTWF0cml4ID0gbW9kZWxWaWV3VHJhbnNmb3JtID09PSBudWxsPyBudWxsOiBfZ2xNb2RlbFZpZXdNYXRyaXgoe21vZGVsVmlld1RyYW5zZm9ybX0pO1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwid29ybGRNYXRyaXhcIiwgd29ybGRNYXRyaXgpO1xuXG4gICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgIHdvcmxkTWF0cml4OiB3b3JsZE1hdHJpeFxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8vIGJ1aWxkIG9wZW5HTCBtb2RlbFZpZXcgbWF0cml4XG5jb25zdCBfZ2xNb2RlbFZpZXdNYXRyaXggPSAoe21vZGVsVmlld1RyYW5zZm9ybX0pID0+IHtcbiAgY29uc3Qgb3BlbkdMV29ybGRNYXRyaXggPSBbXG4gICAgbW9kZWxWaWV3VHJhbnNmb3JtWzBdWzBdLCAtbW9kZWxWaWV3VHJhbnNmb3JtWzFdWzBdLCAtbW9kZWxWaWV3VHJhbnNmb3JtWzJdWzBdLCAwLFxuICAgIG1vZGVsVmlld1RyYW5zZm9ybVswXVsxXSwgLW1vZGVsVmlld1RyYW5zZm9ybVsxXVsxXSwgLW1vZGVsVmlld1RyYW5zZm9ybVsyXVsxXSwgMCxcbiAgICBtb2RlbFZpZXdUcmFuc2Zvcm1bMF1bMl0sIC1tb2RlbFZpZXdUcmFuc2Zvcm1bMV1bMl0sIC1tb2RlbFZpZXdUcmFuc2Zvcm1bMl1bMl0sIDAsXG4gICAgbW9kZWxWaWV3VHJhbnNmb3JtWzBdWzNdLCAtbW9kZWxWaWV3VHJhbnNmb3JtWzFdWzNdLCAtbW9kZWxWaWV3VHJhbnNmb3JtWzJdWzNdLCAxXG4gIF07XG4gIHJldHVybiBvcGVuR0xXb3JsZE1hdHJpeDtcbn1cblxuLy8gYnVpbGQgb3BlbkdMIHByb2plY3Rpb24gbWF0cml4XG5jb25zdCBfZ2xQcm9qZWN0aW9uTWF0cml4ID0gKHtwcm9qZWN0aW9uVHJhbnNmb3JtLCB3aWR0aCwgaGVpZ2h0LCBuZWFyLCBmYXJ9KSA9PiB7XG4gIGNvbnN0IHByb2ogPSBbXG4gICAgWzIgKiBwcm9qZWN0aW9uVHJhbnNmb3JtWzBdWzBdIC8gd2lkdGgsIDAsIC0oMiAqIHByb2plY3Rpb25UcmFuc2Zvcm1bMF1bMl0gLyB3aWR0aCAtIDEpLCAwXSxcbiAgICBbMCwgMiAqIHByb2plY3Rpb25UcmFuc2Zvcm1bMV1bMV0gLyBoZWlnaHQsIC0oMiAqIHByb2plY3Rpb25UcmFuc2Zvcm1bMV1bMl0gLyBoZWlnaHQgLSAxKSwgMF0sXG4gICAgWzAsIDAsIC0oZmFyICsgbmVhcikgLyAoZmFyIC0gbmVhciksIC0yICogZmFyICogbmVhciAvIChmYXIgLSBuZWFyKV0sXG4gICAgWzAsIDAsIC0xLCAwXVxuICBdO1xuXG4gIGNvbnN0IHByb2pNYXRyaXggPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgcHJvak1hdHJpeC5wdXNoKHByb2pbal1baV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHJvak1hdHJpeDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVuZ2luZSxcbn1cblxuIiwiY29uc3Qge01hdHJpeCwgaW52ZXJzZX0gPSByZXF1aXJlKCdtbC1tYXRyaXgnKTtcbmNvbnN0IHthcHBseU1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIGJ1aWxkTW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgY29tcHV0ZVNjcmVlbkNvb3JkaWF0ZX0gPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG5cbi8vIGJ1aWxkIHdvcmxkIG1hdHJpeCB3aXRoIGxpc3Qgb2YgbWF0Y2hpbmcgd29ybGRDb29yZHN8c2NyZWVuQ29vcmRzXG4vL1xuLy8gU3RlcCAxLiBlc3RpbWF0ZSBob21vZ3JhcGh5IHdpdGggbGlzdCBvZiBwYWlyc1xuLy8gUmVmOiBodHRwczovL3d3dy51aW8ubm8vc3R1ZGllci9lbW5lci9tYXRuYXQvaXRzL1RFSzUwMzAvdjE5L2xlY3QvbGVjdHVyZV80XzMtZXN0aW1hdGluZy1ob21vZ3JhcGhpZXMtZnJvbS1mZWF0dXJlLWNvcnJlc3BvbmRlbmNlcy5wZGYgIChCYXNpYyBob21vZ3JhcGh5IGVzdGltYXRpb24gZnJvbSBwb2ludHMpXG4vL1xuLy8gU3RlcCAyLiBkZWNvbXBvc2UgaG9tb2dyYXBoeSBpbnRvIHJvdGF0aW9uIGFuZCB0cmFuc2xhdGlvbiBtYXRyaXhlcyAoaS5lLiB3b3JsZCBtYXRyaXgpXG4vLyBSZWY6IGNhbiBhbnlvbmUgcHJvdmlkZSByZWZlcmVuY2U/XG5jb25zdCBlc3RpbWF0ZUhvbW9ncmFwaHkgPSAoe3NjcmVlbkNvb3Jkcywgd29ybGRDb29yZHMsIHByb2plY3Rpb25UcmFuc2Zvcm19KSA9PiB7XG4gIGNvbnN0IG51bSA9IHNjcmVlbkNvb3Jkcy5sZW5ndGg7XG4gIGNvbnN0IEFEYXRhID0gW107XG4gIGNvbnN0IEJEYXRhID0gW107XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbnVtOyBqKyspIHtcbiAgICBjb25zdCByb3cxID0gW1xuICAgICAgd29ybGRDb29yZHNbal0ueCxcbiAgICAgIHdvcmxkQ29vcmRzW2pdLnksXG4gICAgICAxLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgLSh3b3JsZENvb3Jkc1tqXS54ICogc2NyZWVuQ29vcmRzW2pdLngpLFxuICAgICAgLSh3b3JsZENvb3Jkc1tqXS55ICogc2NyZWVuQ29vcmRzW2pdLngpLFxuICAgIF07XG4gICAgY29uc3Qgcm93MiA9IFtcbiAgICAgIDAsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHdvcmxkQ29vcmRzW2pdLngsXG4gICAgICB3b3JsZENvb3Jkc1tqXS55LFxuICAgICAgMSxcbiAgICAgIC0od29ybGRDb29yZHNbal0ueCAqIHNjcmVlbkNvb3Jkc1tqXS55KSxcbiAgICAgIC0od29ybGRDb29yZHNbal0ueSAqIHNjcmVlbkNvb3Jkc1tqXS55KSxcbiAgICBdO1xuICAgIEFEYXRhLnB1c2gocm93MSk7XG4gICAgQURhdGEucHVzaChyb3cyKTtcblxuICAgIEJEYXRhLnB1c2goW3NjcmVlbkNvb3Jkc1tqXS54XSk7XG4gICAgQkRhdGEucHVzaChbc2NyZWVuQ29vcmRzW2pdLnldKTtcbiAgfVxuXG4gIGNvbnN0IEEgPSBuZXcgTWF0cml4KEFEYXRhKTtcbiAgY29uc3QgQiA9IG5ldyBNYXRyaXgoQkRhdGEpO1xuICBjb25zdCBBVCA9IEEudHJhbnNwb3NlKCk7XG4gIGNvbnN0IEFUQSA9IEFULm1tdWwoQSk7XG4gIGNvbnN0IEFUQiA9IEFULm1tdWwoQik7XG4gIGNvbnN0IEFUQUludiA9IGludmVyc2UoQVRBKTtcbiAgY29uc3QgQyA9IEFUQUludi5tbXVsKEFUQikudG8xREFycmF5KCk7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQS5kYXRhLmxlbmd0aDsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEEuZGF0YVtqXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXdpbmRvdy5jbXAoQS5kYXRhW2pdW2ldLCB3aW5kb3cuZGVidWdNYXRjaC5tYXRBW2pdW2ldLCAwLjEpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgQVwiLCBqLCBpLCBBLmRhdGFbal1baV0sIHdpbmRvdy5kZWJ1Z01hdGNoLm1hdEFbal1baV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgQy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKCF3aW5kb3cuY21wKENbal0sIHdpbmRvdy5kZWJ1Z01hdGNoLm1hdENbal0sIDAuMDAxKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBDXCIsIGosIENbal0sIHdpbmRvdy5kZWJ1Z01hdGNoLm1hdENbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEggPSBuZXcgTWF0cml4KFtcbiAgICBbQ1swXSwgQ1sxXSwgQ1syXV0sXG4gICAgW0NbM10sIENbNF0sIENbNV1dLFxuICAgIFtDWzZdLCBDWzddLCAxXVxuICBdKTtcblxuICBjb25zdCBLID0gbmV3IE1hdHJpeChwcm9qZWN0aW9uVHJhbnNmb3JtKTtcbiAgY29uc3QgS0ludiA9IGludmVyc2UoSyk7XG5cbiAgY29uc3QgX0tJbnZIID0gS0ludi5tbXVsKEgpO1xuICBjb25zdCBLSW52SCA9IF9LSW52SC50bzFEQXJyYXkoKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgY29uc3QgZHYgPSB3aW5kb3cuZGVidWdNYXRjaC52O1xuICAgIGNvbnN0IGR0ID0gd2luZG93LmRlYnVnTWF0Y2gudDtcbiAgICBjb25zdCBkS0ludkggPSBbXG4gICAgICBbZHZbMF1bMF0sZHZbMV1bMF0sZHRbMF1dLFxuICAgICAgW2R2WzBdWzFdLGR2WzFdWzFdLGR0WzFdXSxcbiAgICAgIFtkdlswXVsyXSxkdlsxXVsyXSxkdFsyXV1cbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICBpZighd2luZG93LmNtcChfS0ludkguZGF0YVtpXVtqXSwgZEtJbnZIW2ldW2pdKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIEtJbnZIXCIsIGksIGosIEtJbnZILmRhdGEsIGRLSW52SCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBub3JtMSA9IE1hdGguc3FydCggS0ludkhbMF0gKiBLSW52SFswXSArIEtJbnZIWzNdICogS0ludkhbM10gKyBLSW52SFs2XSAqIEtJbnZIWzZdKTtcbiAgY29uc3Qgbm9ybTIgPSBNYXRoLnNxcnQoIEtJbnZIWzFdICogS0ludkhbMV0gKyBLSW52SFs0XSAqIEtJbnZIWzRdICsgS0ludkhbN10gKiBLSW52SFs3XSk7XG4gIGNvbnN0IHRub3JtID0gKG5vcm0xICsgbm9ybTIpIC8gMjtcblxuICBjb25zdCByb3RhdGUgPSBbXTtcbiAgcm90YXRlWzBdID0gS0ludkhbMF0gLyBub3JtMTtcbiAgcm90YXRlWzNdID0gS0ludkhbM10gLyBub3JtMTtcbiAgcm90YXRlWzZdID0gS0ludkhbNl0gLyBub3JtMTtcblxuICByb3RhdGVbMV0gPSBLSW52SFsxXSAvIG5vcm0yO1xuICByb3RhdGVbNF0gPSBLSW52SFs0XSAvIG5vcm0yO1xuICByb3RhdGVbN10gPSBLSW52SFs3XSAvIG5vcm0yO1xuXG4gIHJvdGF0ZVsyXSA9IHJvdGF0ZVszXSAqIHJvdGF0ZVs3XSAtIHJvdGF0ZVs2XSAqIHJvdGF0ZVs0XTtcbiAgcm90YXRlWzVdID0gcm90YXRlWzZdICogcm90YXRlWzFdIC0gcm90YXRlWzBdICogcm90YXRlWzddO1xuICByb3RhdGVbOF0gPSByb3RhdGVbMF0gKiByb3RhdGVbNF0gLSByb3RhdGVbMV0gKiByb3RhdGVbM107XG5cbiAgY29uc3Qgbm9ybTMgPSBNYXRoLnNxcnQocm90YXRlWzJdICogcm90YXRlWzJdICsgcm90YXRlWzVdICogcm90YXRlWzVdICsgcm90YXRlWzhdICogcm90YXRlWzhdKTtcbiAgcm90YXRlWzJdIC89IG5vcm0zO1xuICByb3RhdGVbNV0gLz0gbm9ybTM7XG4gIHJvdGF0ZVs4XSAvPSBub3JtMztcblxuICAvLyBUT0RPOiBhcnRvb2xraXQgaGFzIGNoZWNrX3JvdGF0aW9uKCkgdGhhdCBzb21laG93IHN3aXRjaCB0aGUgcm90YXRlIHZlY3Rvci4gbm90IHN1cmUgd2hhdCB0aGF0IGRvZXMuIENhbiBhbnlvbmUgYWR2aWNlP1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXJ0b29sa2l0eC9hcnRvb2xraXQ1L2Jsb2IvNWJmMGI2NzFmZjE2ZWFkNTI3YjliODkyZTZhZWIxYTI3NzFmOTdiZS9saWIvU1JDL0FSSUNQL2ljcFV0aWwuYyNMMjE1XG5cbiAgY29uc3QgdHJhbiA9IFtdXG4gIHRyYW5bMF0gPSBLSW52SFsyXSAvIHRub3JtO1xuICB0cmFuWzFdID0gS0ludkhbNV0gLyB0bm9ybTtcbiAgdHJhblsyXSA9IEtJbnZIWzhdIC8gdG5vcm07XG5cbiAgbGV0IGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm0gPSBbXG4gICAgW3JvdGF0ZVswXSwgcm90YXRlWzFdLCByb3RhdGVbMl0sIHRyYW5bMF1dLFxuICAgIFtyb3RhdGVbM10sIHJvdGF0ZVs0XSwgcm90YXRlWzVdLCB0cmFuWzFdXSxcbiAgICBbcm90YXRlWzZdLCByb3RhdGVbN10sIHJvdGF0ZVs4XSwgdHJhblsyXV1cbiAgXTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0aWFsTW9kZWxWaWV3VHJhbnNmb3JtXCIsIGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm0sIHdpbmRvdy5kZWJ1Z01hdGNoLmluaXRNYXRYdzJYYyk7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbml0aWFsTW9kZWxWaWV3VHJhbnNmb3JtLmxlbmd0aDsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm1bal0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuY21wKGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm1bal1baV0sIHdpbmRvdy5kZWJ1Z01hdGNoLmluaXRNYXRYdzJYY1tqXVtpXSwgMC4wMDAxKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm1cIiwgaiwgaSwgaW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybVtqXVtpXSwgd2luZG93LmRlYnVnTWF0Y2guaW5pdE1hdFh3MlhjW2pdW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbml0aWFsTW9kZWxWaWV3VHJhbnNmb3JtO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVzdGltYXRlSG9tb2dyYXBoeVxufVxuIiwiY29uc3Qge01hdHJpeCwgaW52ZXJzZX0gPSByZXF1aXJlKCdtbC1tYXRyaXgnKTtcbmNvbnN0IHtnZXRQcm9qZWN0aW9uVHJhbnNmb3JtLCBhcHBseU1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIGJ1aWxkTW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgY29tcHV0ZVNjcmVlbkNvb3JkaWF0ZX0gPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG5cbi8vIFRPRE86IHRoZSBlcnJvciBjb21wdXRhdGlvbiBzZWVtcyBwcm9ibGVtYXRpYy4gc2hvdWxkIGl0IGJlIHJlbGF0aXZlIHRvIHRoZSBzaXplIG9mIGRldGVjdGlvbj9cbi8vICAgICAgIG5vdyB0aGUgdmFsdWVzIGFyZSBoYXJkY29kZWQsIGUuZy4gSzJfRmFjdG9yID0gNFxuXG5jb25zdCBLMl9GQUNUT1IgPSA0LjA7XG5jb25zdCBJQ1BfTUFYX0xPT1AgPSAxMDtcbmNvbnN0IElDUF9CUkVBS19MT09QX0VSUk9SX1RIUkVTSCA9IDAuMTtcbmNvbnN0IElDUF9CUkVBS19MT09QX0VSUk9SX1JBVElPX1RIUkVTSCA9IDAuOTk7XG5jb25zdCBJQ1BfQlJFQUtfTE9PUF9FUlJPUl9USFJFU0gyID0gNC4wO1xuXG4vLyBJQ1AgaXRlcmF0aW9uIHdpdGggcG9pbnRzXG4vLyBDYW4gc29tZW9uZSBwcm92aWRlIHRoZW9yZXRpY2FsIHJlZmVyZW5jZT9cbmNvbnN0IHJlZmluZUhvbW9ncmFwaHkgPSAoe2luaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm0sIHByb2plY3Rpb25UcmFuc2Zvcm0sIHdvcmxkQ29vcmRzLCBzY3JlZW5Db29yZHMsIGlzUm9idXN0TW9kZSwgaW5saWVyUHJvYn0pID0+IHtcbiAgbGV0IG1vZGVsVmlld1RyYW5zZm9ybSA9IGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm07XG5cbiAgbGV0IGVycjAgPSAwLjA7XG4gIGxldCBlcnIxID0gMC4wO1xuICBmb3IgKGxldCBsID0gMDsgbCA8PSBJQ1BfTUFYX0xPT1A7IGwrKykge1xuXG4gICAgY29uc3QgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSA9IGJ1aWxkTW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybShwcm9qZWN0aW9uVHJhbnNmb3JtLCBtb2RlbFZpZXdUcmFuc2Zvcm0pO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcInByb2plY3Rpb25UcmFuc2Zvcm1cIiwgcHJvamVjdGlvblRyYW5zZm9ybSk7XG4gICAgICBpZiAoIXdpbmRvdy5jbXAyREFycmF5KG1vZGVsVmlld1RyYW5zZm9ybSwgd2luZG93LmRlYnVnTWF0Y2guaWNwX21hdFh3MlhjW2xdKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBJQ1AgbW9kZWxWaWV3VHJhbnNmb3JtXCIsIGwsIG1vZGVsVmlld1RyYW5zZm9ybSwgd2luZG93LmRlYnVnTWF0Y2guaWNwX21hdFh3MlhjW2xdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF3aW5kb3cuY21wMkRBcnJheShtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCB3aW5kb3cuZGVidWdNYXRjaC5pY3BfbWF0WHcyVVtsXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgSUNQIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1cIiwgbCwgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgd2luZG93LmRlYnVnTWF0Y2guaWNwX21hdFh3MlVbbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IEUgPSBbXTtcbiAgICBjb25zdCBkeHMgPSBbXTtcbiAgICBjb25zdCBkeXMgPSBbXTtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IHdvcmxkQ29vcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICBjb25zdCB1ID0gY29tcHV0ZVNjcmVlbkNvb3JkaWF0ZShtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCB3b3JsZENvb3Jkc1tuXS54LCB3b3JsZENvb3Jkc1tuXS55LCB3b3JsZENvb3Jkc1tuXS56KTtcbiAgICAgIGNvbnN0IGR4ID0gc2NyZWVuQ29vcmRzW25dLnggLSB1Lng7XG4gICAgICBjb25zdCBkeSA9IHNjcmVlbkNvb3Jkc1tuXS55IC0gdS55O1xuICAgICAgZHhzLnB1c2goZHgpO1xuICAgICAgZHlzLnB1c2goZHkpO1xuICAgICAgRS5wdXNoKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLICYmIGlzUm9idXN0TW9kZSkge1xuICAgICAgY29uc3QgZHIgPSB3aW5kb3cuZGVidWdNYXRjaC5pY3Bfcm9idXN0W3dpbmRvdy5kZWJ1Zy5pY3Byb2J1c3RJbmRleF1bbF07XG4gICAgICAvL2NvbnNvbGUubG9nKFwiaWNwIEVcIiwgRSwgZHIuRSk7XG4gICAgfVxuXG4gICAgbGV0IEsyOyAvLyByb2J1c3QgbW9kZSBvbmx5XG4gICAgZXJyMSA9IDAuMDtcbiAgICBpZiAoaXNSb2J1c3RNb2RlKSB7XG4gICAgICBjb25zdCBpbmxpZXJOdW0gPSBNYXRoLm1heCgzLCBNYXRoLmZsb29yKHdvcmxkQ29vcmRzLmxlbmd0aCAqIGlubGllclByb2IpIC0gMSk7XG4gICAgICBjb25zdCBFMiA9IFtdOyAvLyBmb3Igcm9idXN0IG1vZGUgb25seVxuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3JsZENvb3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBFMi5wdXNoKEVbbl0pO1xuICAgICAgfVxuICAgICAgRTIuc29ydCgoYSwgYikgPT4ge3JldHVybiBhLWI7fSk7XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0sgJiYgaXNSb2J1c3RNb2RlKSB7XG4gICAgICAgIGNvbnN0IGRyID0gd2luZG93LmRlYnVnTWF0Y2guaWNwX3JvYnVzdFt3aW5kb3cuZGVidWcuaWNwcm9idXN0SW5kZXhdW2xdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaWNwIEVcIiwgRTIsIGRyLkUyKTtcbiAgICAgIH1cblxuICAgICAgSzIgPSBNYXRoLm1heChFMltpbmxpZXJOdW1dICogSzJfRkFDVE9SLCAxNi4wKTtcbiAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgd29ybGRDb29yZHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgaWYgKEUyW25dID4gSzIpIGVycjEgKz0gSzIvIDY7XG4gICAgICAgIGVsc2UgZXJyMSArPSAgSzIvNi4wICogKDEuMCAtICgxLjAtRTJbbl0vSzIpKigxLjAtRTJbbl0vSzIpKigxLjAtRTJbbl0vSzIpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCB3b3JsZENvb3Jkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBlcnIxICs9IEVbbl07XG4gICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJlcnIxIGJlZm9yZVwiLCBlcnIxLCBlcnIxL3dvcmxkQ29vcmRzLmxlbmd0aCk7XG4gICAgZXJyMSAvPSB3b3JsZENvb3Jkcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgICAvL2lmICghd2luZG93LmNtcChlcnIxLCB3aW5kb3cuZGVidWdNYXRjaC5pY3BfZXJyMVtsXSkpIHtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBJQ1AgZXJyMVwiLCBsLCBlcnIxLCB3aW5kb3cuZGVidWdNYXRjaC5pY3BfZXJyMVtsXSk7XG4gICAgICAvL31cbiAgICB9XG5cbiAgICBpZiAoZXJyMSA8IElDUF9CUkVBS19MT09QX0VSUk9SX1RIUkVTSCkgYnJlYWs7XG4gICAgaWYgKGwgPiAwICYmIGVycjEgPCBJQ1BfQlJFQUtfTE9PUF9FUlJPUl9USFJFU0gyICYmIGVycjEvZXJyMCA+IElDUF9CUkVBS19MT09QX0VSUk9SX1JBVElPX1RIUkVTSCkgYnJlYWs7XG4gICAgaWYgKGwgPT09IElDUF9NQVhfTE9PUCkgYnJlYWs7XG5cbiAgICBlcnIwID0gZXJyMTtcblxuICAgIGNvbnN0IGRVID0gW107XG4gICAgY29uc3QgYWxsSl9VX1MgPSBbXTtcbiAgICBmb3IgKGxldCBuID0gMDsgbiA8IHdvcmxkQ29vcmRzLmxlbmd0aDsgbisrKSB7XG4gICAgICBpZiAoaXNSb2J1c3RNb2RlICYmIEVbbl0gPiBLMikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgSl9VX1MgPSBfZ2V0Sl9VX1Moe21vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIG1vZGVsVmlld1RyYW5zZm9ybSwgcHJvamVjdGlvblRyYW5zZm9ybSwgd29ybGRDb29yZDogd29ybGRDb29yZHNbbl19KTtcblxuICAgICAgaWYgKGlzUm9idXN0TW9kZSkge1xuICAgICAgICBjb25zdCBXID0gKDEuMCAtIEVbbl0vSzIpKigxLjAgLSBFW25dL0syKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLICYmIGlzUm9idXN0TW9kZSkge1xuICAgICAgICAgIGNvbnN0IGRyID0gd2luZG93LmRlYnVnTWF0Y2guaWNwX3JvYnVzdFt3aW5kb3cuZGVidWcuaWNwcm9idXN0SW5kZXhdW2xdO1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpY3AgV1wiLCBXLCBkci5XKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIEpfVV9TW2pdW2ldICo9IFc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRVLnB1c2goW2R4c1tuXSAqIFddKTtcbiAgICAgICAgZFUucHVzaChbZHlzW25dICogV10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZFUucHVzaChbZHhzW25dXSk7XG4gICAgICAgIGRVLnB1c2goW2R5c1tuXV0pO1xuICAgICAgfVxuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiSl9VX1NcIiwgSl9VX1MsIGRlYnVnQ29udGVudC5pY3BfSl9VX1NbbF1bbl0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBKX1VfUy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhbGxKX1VfUy5wdXNoKEpfVV9TW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLICYmIGlzUm9idXN0TW9kZSkge1xuICAgICAgY29uc3QgZHIgPSB3aW5kb3cuZGVidWdNYXRjaC5pY3Bfcm9idXN0W3dpbmRvdy5kZWJ1Zy5pY3Byb2J1c3RJbmRleF1bbF07XG4gICAgICAvL2NvbnNvbGUubG9nKFwiaWNwIGR1XCIsIGRVLCBkci5kVSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgICAgaWYgKCF3aW5kb3cuY21wQXJyYXkoZFUsIHdpbmRvdy5kZWJ1Z01hdGNoLmljcF9kVVtsXSwgMC4wMDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIElDUCBkVVwiLCBsLCBkVSwgd2luZG93LmRlYnVnTWF0Y2guaWNwX2RVW2xdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgICAgY29uc3QgZEpVUyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cuZGVidWdNYXRjaC5pY3BfSl9VX1NbbF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZEpVUy5wdXNoKHdpbmRvdy5kZWJ1Z01hdGNoLmljcF9KX1VfU1tsXVtpXVswXSk7XG4gICAgICAgIGRKVVMucHVzaCh3aW5kb3cuZGVidWdNYXRjaC5pY3BfSl9VX1NbbF1baV1bMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXdpbmRvdy5jbXAyREFycmF5KGFsbEpfVV9TLCBkSlVTLCAwLjAwMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgSUNQIEpfVV9TXCIsIGwsIGFsbEpfVV9TLCBkSlVTKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkUyA9IF9nZXREZWx0YVMoe2RVLCBKX1VfUzogYWxsSl9VX1N9KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgICBpZiAoIXdpbmRvdy5jbXBBcnJheShkUywgd2luZG93LmRlYnVnTWF0Y2guaWNwX2RTW2xdLCAwLjAwMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgSUNQIGRTXCIsIGwsIGRTLCB3aW5kb3cuZGVidWdNYXRjaC5pY3BfZFNbbF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkUyA9PT0gbnVsbCkgYnJlYWs7XG4gICAgbW9kZWxWaWV3VHJhbnNmb3JtID0gX3VwZGF0ZU1vZGVsVmlld1RyYW5zZm9ybSh7bW9kZWxWaWV3VHJhbnNmb3JtLCBkU30pO1xuICB9XG4gIHJldHVybiB7bW9kZWxWaWV3VHJhbnNmb3JtLCBlcnI6IGVycjF9O1xufVxuXG5fdXBkYXRlTW9kZWxWaWV3VHJhbnNmb3JtID0gKHttb2RlbFZpZXdUcmFuc2Zvcm0sIGRTfSkgPT4ge1xuICBjb25zdCBxID0gW107XG4gIGxldCByYSA9IGRTWzBdICogZFNbMF0gKyBkU1sxXSAqIGRTWzFdICsgZFNbMl0gKiBkU1syXTtcbiAgaWYoIHJhIDwgMC4wMDAwMDEgKSB7XG4gICAgcVswXSA9IDEuMDtcbiAgICBxWzFdID0gMC4wO1xuICAgIHFbMl0gPSAwLjA7XG4gICAgcVszXSA9IDAuMDtcbiAgfSBlbHNlIHtcbiAgICByYSA9IE1hdGguc3FydChyYSk7XG4gICAgcVswXSA9IGRTWzBdIC8gcmE7XG4gICAgcVsxXSA9IGRTWzFdIC8gcmE7XG4gICAgcVsyXSA9IGRTWzJdIC8gcmE7XG4gICAgcVszXSA9IHJhO1xuICB9XG4gIHFbNF0gPSBkU1szXTtcbiAgcVs1XSA9IGRTWzRdO1xuICBxWzZdID0gZFNbNV07XG5cbiAgY29uc3QgY3JhID0gTWF0aC5jb3MocVszXSk7XG4gIGNvbnN0IG9uZV9jcmEgPSAxLjAgLSBjcmE7XG4gIGNvbnN0IHNyYSA9IE1hdGguc2luKHFbM10pO1xuICBjb25zdCBtYXQgPSBbW10sW10sW11dO1xuXG4gIG1hdFswXVswXSA9IHFbMF0qcVswXSpvbmVfY3JhICsgY3JhO1xuICBtYXRbMF1bMV0gPSBxWzBdKnFbMV0qb25lX2NyYSAtIHFbMl0qc3JhO1xuICBtYXRbMF1bMl0gPSBxWzBdKnFbMl0qb25lX2NyYSArIHFbMV0qc3JhO1xuICBtYXRbMF1bM10gPSBxWzRdO1xuICBtYXRbMV1bMF0gPSBxWzFdKnFbMF0qb25lX2NyYSArIHFbMl0qc3JhO1xuICBtYXRbMV1bMV0gPSBxWzFdKnFbMV0qb25lX2NyYSArIGNyYTtcbiAgbWF0WzFdWzJdID0gcVsxXSpxWzJdKm9uZV9jcmEgLSBxWzBdKnNyYTtcbiAgbWF0WzFdWzNdID0gcVs1XTtcbiAgbWF0WzJdWzBdID0gcVsyXSpxWzBdKm9uZV9jcmEgLSBxWzFdKnNyYTtcbiAgbWF0WzJdWzFdID0gcVsyXSpxWzFdKm9uZV9jcmEgKyBxWzBdKnNyYTtcbiAgbWF0WzJdWzJdID0gcVsyXSpxWzJdKm9uZV9jcmEgKyBjcmE7XG4gIG1hdFsyXVszXSA9IHFbNl07XG5cbiAgY29uc3QgbWF0MiA9IFtbXSxbXSxbXV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrICkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrICkge1xuICAgICAgbWF0MltqXVtpXSA9IG1vZGVsVmlld1RyYW5zZm9ybVtqXVswXSAqIG1hdFswXVtpXVxuICAgICAgICAgICAgICAgICAgICsgbW9kZWxWaWV3VHJhbnNmb3JtW2pdWzFdICogbWF0WzFdW2ldXG4gICAgICAgICAgICAgICAgICAgKyBtb2RlbFZpZXdUcmFuc2Zvcm1bal1bMl0gKiBtYXRbMl1baV07XG4gICAgfVxuICAgIG1hdDJbal1bM10gKz0gbW9kZWxWaWV3VHJhbnNmb3JtW2pdWzNdO1xuICB9XG4gIHJldHVybiBtYXQyO1xufVxuXG5fZ2V0RGVsdGFTID0gKHtkVSwgSl9VX1N9KSA9PiB7XG4gIGNvbnN0IEogPSBuZXcgTWF0cml4KEpfVV9TKTtcbiAgY29uc3QgVSA9IG5ldyBNYXRyaXgoZFUpO1xuXG4gIGNvbnN0IEpUID0gSi50cmFuc3Bvc2UoKTtcbiAgY29uc3QgSlRKID0gSlQubW11bChKKTtcbiAgY29uc3QgSlRVID0gSlQubW11bChVKTtcblxuICBsZXQgSlRKSW52O1xuICB0cnkge1xuICAgIEpUSkludiA9IGludmVyc2UoSlRKKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgUyA9IEpUSkludi5tbXVsKEpUVSk7XG4gIHJldHVybiBTLnRvMURBcnJheSgpO1xufVxuXG5fZ2V0Sl9VX1MgPSAoe21vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIG1vZGVsVmlld1RyYW5zZm9ybSwgcHJvamVjdGlvblRyYW5zZm9ybSwgd29ybGRDb29yZH0pID0+IHtcbiAgY29uc3QgVCA9IG1vZGVsVmlld1RyYW5zZm9ybTtcbiAgY29uc3Qge3gsIHksIHp9ID0gd29ybGRDb29yZDtcblxuICBjb25zdCB1ID0gYXBwbHlNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtKG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIHgsIHksIHopO1xuICAvL2NvbnNvbGUubG9nKFwidVwiLCB1KTtcbiAgLy9pZiAoTWF0aC5hYnModS56KSA8IDAuMDAwMDAxKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB6MiA9IHUueiAqIHUuejtcbiAgY29uc3QgSl9VX1hjID0gW1tdLFtdXTtcbiAgSl9VX1hjWzBdWzBdID0gKHByb2plY3Rpb25UcmFuc2Zvcm1bMF1bMF0gKiB1LnogLSBwcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzBdICogdS54KSAvIHoyO1xuICBKX1VfWGNbMF1bMV0gPSAocHJvamVjdGlvblRyYW5zZm9ybVswXVsxXSAqIHUueiAtIHByb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiB1LngpIC8gejI7XG4gIEpfVV9YY1swXVsyXSA9IChwcm9qZWN0aW9uVHJhbnNmb3JtWzBdWzJdICogdS56IC0gcHJvamVjdGlvblRyYW5zZm9ybVsyXVsyXSAqIHUueCkgLyB6MjtcbiAgSl9VX1hjWzFdWzBdID0gKHByb2plY3Rpb25UcmFuc2Zvcm1bMV1bMF0gKiB1LnogLSBwcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzBdICogdS55KSAvIHoyO1xuICBKX1VfWGNbMV1bMV0gPSAocHJvamVjdGlvblRyYW5zZm9ybVsxXVsxXSAqIHUueiAtIHByb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiB1LnkpIC8gejI7XG4gIEpfVV9YY1sxXVsyXSA9IChwcm9qZWN0aW9uVHJhbnNmb3JtWzFdWzJdICogdS56IC0gcHJvamVjdGlvblRyYW5zZm9ybVsyXVsyXSAqIHUueSkgLyB6MjtcblxuICBjb25zdCBKX1hjX1MgPSBbXG4gICAgW1RbMF1bMl0gKiB5IC0gVFswXVsxXSAqIHosIFRbMF1bMF0gKiB6IC0gVFswXVsyXSAqIHgsIFRbMF1bMV0gKiB4IC0gVFswXVswXSAqIHksIFRbMF1bMF0sIFRbMF1bMV0sIFRbMF1bMl1dLFxuICAgIFtUWzFdWzJdICogeSAtIFRbMV1bMV0gKiB6LCBUWzFdWzBdICogeiAtIFRbMV1bMl0gKiB4LCBUWzFdWzFdICogeCAtIFRbMV1bMF0gKiB5LCBUWzFdWzBdLCBUWzFdWzFdLCBUWzFdWzJdXSxcbiAgICBbVFsyXVsyXSAqIHkgLSBUWzJdWzFdICogeiwgVFsyXVswXSAqIHogLSBUWzJdWzJdICogeCwgVFsyXVsxXSAqIHggLSBUWzJdWzBdICogeSwgVFsyXVswXSwgVFsyXVsxXSwgVFsyXVsyXV0sXG4gIF07XG5cbiAgLy9jb25zb2xlLmxvZyhcIkpfWGNfU1wiLCBKX1hjX1MsICctLXZzLS0nLCAnMC4nLCBkZWJ1Z0NvbnRlbnQuaWNwX0pfWGNfU1swXSwgJzEuJywgZGVidWdDb250ZW50LmljcF9KX1hjX1NbMV0pO1xuICAvL2NvbnNvbGUubG9nKFwiSl9VX1hjXCIsIEpfVV9YYywgJy0tdnMtLScsICcwLicsIGRlYnVnQ29udGVudC5pY3BfSl9VX1hjWzBdLCAnMS4nLCBkZWJ1Z0NvbnRlbnQuaWNwX0pfVV9YY1sxXSk7XG5cbiAgY29uc3QgSl9VX1MgPSBbW10sIFtdXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgSl9VX1Nbal1baV0gPSAwLjA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKyApIHtcbiAgICAgICAgSl9VX1Nbal1baV0gKz0gSl9VX1hjW2pdW2tdICogSl9YY19TW2tdW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gSl9VX1M7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWZpbmVIb21vZ3JhcGh5XG59XG4iLCIvKlxuY29uc3QgZ2V0UHJvamVjdGlvblRyYW5zZm9ybSA9ICgpID0+IHtcbiAgLy8gVE9ETzogbm9uLWhhcmRjb2RlZCBjYW1lcmEgbWF0cml4P1xuICAvLyAgICAgW2Z4ICBzIGN4XVxuICAvLyBLID0gWyAwIGZ4IGN5XVxuICAvLyAgICAgWyAwICAwICAxXVxuICBjb25zdCBLRGF0YSA9IFtcbiAgICBbIDMwNC42ODI3MDQ1OTMzNTAyNSwgMCwgMTYxLjcyMzk1MzI0NzA3MDNdLFxuICAgIFsgMCwgMzAzLjI2MDYxMTgwMTU1MzcsIDExOC44MDMyNjg0MzI2MTcxOV0sXG4gICAgWyAwLCAwLCAxLjBdXG4gIF07XG4gIHJldHVybiBLRGF0YTtcbn1cbiovXG5cbmNvbnN0IGJ1aWxkTW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSA9IChwcm9qZWN0aW9uVHJhbnNmb3JtLCBtb2RlbFZpZXdUcmFuc2Zvcm0pID0+IHtcbiAgY29uc3QgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSA9IFtbXSxbXSxbXV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrICkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtW2pdW2ldID0gcHJvamVjdGlvblRyYW5zZm9ybVtqXVswXSAqIG1vZGVsVmlld1RyYW5zZm9ybVswXVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHByb2plY3Rpb25UcmFuc2Zvcm1bal1bMV0gKiBtb2RlbFZpZXdUcmFuc2Zvcm1bMV1baV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBwcm9qZWN0aW9uVHJhbnNmb3JtW2pdWzJdICogbW9kZWxWaWV3VHJhbnNmb3JtWzJdW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybTtcbn1cblxuY29uc3QgYXBwbHlNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtID0gKG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIHgsIHksIHopID0+IHtcbiAgY29uc3QgdXggPSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzBdWzBdICogeCArIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bMV0gKiB5XG4gICAgICsgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVswXVsyXSAqIHogKyBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzBdWzNdO1xuICBjb25zdCB1eSA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bMF0gKiB4ICsgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVsxXVsxXSAqIHlcbiAgICAgKyBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzFdWzJdICogeiArIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bM107XG4gIGNvbnN0IHV6ICA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMF0gKiB4ICsgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVsyXVsxXSAqIHlcbiAgICAgKyBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzJdICogeiArIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bM107XG4gIHJldHVybiB7eDogdXgsIHk6IHV5LCB6OiB1en07XG59XG5cbmNvbnN0IGNvbXB1dGVTY3JlZW5Db29yZGlhdGUgPSAobW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgeCwgeSwgeikgPT4ge1xuICBjb25zdCB7eDogdXgsIHk6IHV5LCB6OiB1en0gPSBhcHBseU1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0obW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgeCwgeSwgeik7XG4gIC8vY29uc29sZS5sb2coXCJ4LCB5LCB6XCIsIHV4LCB1eSwgdXopO1xuICBpZiggTWF0aC5hYnModXopIDwgMC4wMDAwMDEgKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHt4OiB1eC91eiwgeTogdXkvdXp9O1xufVxuXG5jb25zdCBzY3JlZW5Ub01hcmtlckNvb3JkaW5hdGUgPSAobW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgc3gsIHN5KSA9PiB7XG4gIGNvbnN0IGMxMSA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMF0gKiBzeCAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bMF07XG4gIGNvbnN0IGMxMiA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiBzeCAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bMV07XG4gIGNvbnN0IGMyMSA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMF0gKiBzeSAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bMF07XG4gIGNvbnN0IGMyMiA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMl1bMV0gKiBzeSAtIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bMV07XG4gIGNvbnN0IGIxICA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMF1bM10gLSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzNdICogc3g7XG4gIGNvbnN0IGIyICA9IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1bMV1bM10gLSBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtWzJdWzNdICogc3k7XG5cbiAgY29uc3QgbSA9IGMxMSAqIGMyMiAtIGMxMiAqIGMyMTtcbiAgcmV0dXJuIHtcbiAgICB4OiAoYzIyICogYjEgLSBjMTIgKiBiMikgLyBtLFxuICAgIHk6IChjMTEgKiBiMiAtIGMyMSAqIGIxKSAvIG1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2NyZWVuVG9NYXJrZXJDb29yZGluYXRlLFxuICAvL2dldFByb2plY3Rpb25UcmFuc2Zvcm0sXG4gIGJ1aWxkTW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSxcbiAgYXBwbHlNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLFxuICBjb21wdXRlU2NyZWVuQ29vcmRpYXRlXG59XG4iLCJjb25zdCB7cmVzaXplfSA9IHJlcXVpcmUoXCIuL3V0aWxzL2ltYWdlcy5qc1wiKTtcblxuY29uc3QgREVGQVVMVF9EUEkgPSA3MjtcbmNvbnN0IE1JTl9JTUFHRV9QSVhFTF9TSVpFID0gMjg7XG5cbi8vIHJldHVybiBsaXN0IG9mIHtkYXRhLCB3aWR0aCwgaGVpZ2h0LCBkcGl9XG5jb25zdCBidWlsZEltYWdlTGlzdCA9IChpbnB1dEltYWdlKSA9PiB7XG4gIGNvbnN0IGRwaSA9IERFRkFVTFRfRFBJO1xuICBjb25zdCBtaW5EcGkgPSBNYXRoLmZsb29yKDEuMCAqIE1JTl9JTUFHRV9QSVhFTF9TSVpFIC8gTWF0aC5taW4oaW5wdXRJbWFnZS53aWR0aCwgaW5wdXRJbWFnZS5oZWlnaHQpICogZHBpICogMTAwMCkgLyAxMDAwO1xuICBjb25zdCBkcGlMaXN0ID0gW107XG5cbiAgbGV0IGMgPSBtaW5EcGk7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgZHBpTGlzdC5wdXNoKGMpO1xuICAgIGMgKj0gTWF0aC5wb3coMi4wLCAxLjAvMy4wKTtcbiAgICBjID0gTWF0aC5mcm91bmQoYyk7IC8vIGNhbiByZW1vdmUgdGhpcyBsaW5lIGluIHByb2R1Y3Rpb24uIHRyeWluZyB0byByZXByb2R1Y2UgdGhlIHNhbWUgcmVzdWx0IGFzIGFydG9vbGtpdCwgd2hpY2ggdXNlIGZsb2F0LlxuICAgIGlmIChjID49IGRwaSAqIDAuOTUpIHtcbiAgICAgIGMgPSBkcGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZHBpTGlzdC5wdXNoKGMpO1xuICBkcGlMaXN0LnJldmVyc2UoKTtcblxuICBjb25zdCBpbWFnZUxpc3QgPSBbXTsgLy8gbGlzdCBvZiB7ZGF0YTogW3dpZHRoIHggaGVpZ2h0XSwgd2lkdGgsIGhlaWdodH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcGlMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdyA9IGlucHV0SW1hZ2Uud2lkdGggKiBkcGlMaXN0W2ldIC8gZHBpO1xuICAgIGNvbnN0IGggPSBpbnB1dEltYWdlLmhlaWdodCAqIGRwaUxpc3RbaV0gLyBkcGk7XG4gICAgaW1hZ2VMaXN0LnB1c2goT2JqZWN0LmFzc2lnbihyZXNpemUoe2ltYWdlOiBpbnB1dEltYWdlLCByYXRpbzogZHBpTGlzdFtpXS9kcGl9KSwge2RwaTogZHBpTGlzdFtpXX0pKTtcbiAgfVxuXG4gIC8vcmV0dXJuIFtpbWFnZUxpc3RbMF1dO1xuXG4gIHJldHVybiBpbWFnZUxpc3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWlsZEltYWdlTGlzdFxufVxuIiwiY29uc3Qge3Jlc2l6ZX0gPSByZXF1aXJlKFwiLi91dGlscy9pbWFnZXMuanNcIik7XG5jb25zdCB7YnVpbGRJbWFnZUxpc3R9ID0gcmVxdWlyZSgnLi9pbWFnZS1saXN0LmpzJyk7XG5jb25zdCB7TWF0Y2hlciwgY29tcGlsZU1hdGNoaW5nfSA9IHJlcXVpcmUoJy4vbWF0Y2hpbmcvbWF0Y2hlci5qcycpO1xuY29uc3Qge1RyYWNrZXIsIGNvbXBpbGVUcmFja2luZ30gPSByZXF1aXJlKCcuL3RyYWNraW5nL3RyYWNrZXIuanMnKTtcbmNvbnN0IHtlc3RpbWF0ZUhvbW9ncmFwaHl9ID0gcmVxdWlyZSgnLi9pY3AvZXN0aW1hdGVfaG9tb2dyYXBoeS5qcycpO1xuY29uc3Qge3JlZmluZUhvbW9ncmFwaHl9ID0gcmVxdWlyZSgnLi9pY3AvcmVmaW5lX2hvbW9ncmFwaHknKTtcblxuY2xhc3MgSW1hZ2VUYXJnZXQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgY29uc3Qge3R5cGUsIGlucHV0LCBwcm9qZWN0aW9uVHJhbnNmb3JtfSA9IG9wdGlvbnM7XG4gICAgbGV0IGltYWdlTGlzdDtcbiAgICBsZXQgdGFyZ2V0SW1hZ2U7XG4gICAgbGV0IG1hdGNoaW5nRGF0YTtcbiAgICBsZXQgdHJhY2tpbmdEYXRhO1xuXG4gICAgaWYgKHR5cGUgPT09ICdjb21waWxlZCcpIHtcbiAgICAgIHRhcmdldEltYWdlID0gaW5wdXQudGFyZ2V0SW1hZ2U7XG4gICAgICBpbWFnZUxpc3QgPSBpbnB1dC5pbWFnZUxpc3Q7XG4gICAgICBtYXRjaGluZ0RhdGEgPSBpbnB1dC5tYXRjaGluZ0RhdGE7XG4gICAgICB0cmFja2luZ0RhdGEgPSBpbnB1dC50cmFja2luZ0RhdGE7XG4gICAgICAvL2ltYWdlTGlzdCA9IGJ1aWxkSW1hZ2VMaXN0KHRhcmdldEltYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0SW1hZ2UgPSBpbnB1dDtcbiAgICAgIGltYWdlTGlzdCA9IGJ1aWxkSW1hZ2VMaXN0KHRhcmdldEltYWdlKTtcbiAgICAgIG1hdGNoaW5nRGF0YSA9IGNvbXBpbGVNYXRjaGluZyh7aW1hZ2VMaXN0fSk7XG4gICAgICB0cmFja2luZ0RhdGEgPSBjb21waWxlVHJhY2tpbmcoe2ltYWdlTGlzdH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImltYWdlIHRhcmdldCBjb25zZHRydWN0b3JcIiwgaW1hZ2VMaXN0LCBtYXRjaGluZ0RhdGEsIHRyYWNraW5nRGF0YSk7XG5cbiAgICB0aGlzLnByb2plY3Rpb25UcmFuc2Zvcm0gPSBwcm9qZWN0aW9uVHJhbnNmb3JtO1xuICAgIHRoaXMubWF0Y2hlciA9IG5ldyBNYXRjaGVyKG1hdGNoaW5nRGF0YSk7XG4gICAgdGhpcy50cmFja2VyID0gbmV3IFRyYWNrZXIodHJhY2tpbmdEYXRhLCBpbWFnZUxpc3QsIHByb2plY3Rpb25UcmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5pc1RyYWNraW5nID0gZmFsc2U7XG4gIH1cblxuICBwcm9jZXNzKHF1ZXJ5SW1hZ2UpIHtcbiAgICBjb25zdCBwcm9jZXNzSW1hZ2UgPSBPYmplY3QuYXNzaWduKHF1ZXJ5SW1hZ2UsIHtkcGk6IDcyfSk7XG5cbiAgICBpZiAoIXRoaXMuaXNUcmFja2luZykge1xuICAgICAgY29uc3QgbWF0Y2hSZXN1bHQgPSB0aGlzLm1hdGNoZXIubWF0Y2gocHJvY2Vzc0ltYWdlKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJtYXRjaCByZXN1bHRcIiwgbWF0Y2hSZXN1bHQpO1xuICAgICAgaWYgKG1hdGNoUmVzdWx0ID09PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3Qge3NjcmVlbkNvb3Jkcywgd29ybGRDb29yZHN9ID0gbWF0Y2hSZXN1bHQ7XG4gICAgICBjb25zdCBpbml0aWFsTW9kZWxWaWV3VHJhbnNmb3JtID0gZXN0aW1hdGVIb21vZ3JhcGh5KHtzY3JlZW5Db29yZHMsIHdvcmxkQ29vcmRzLCBwcm9qZWN0aW9uVHJhbnNmb3JtOiB0aGlzLnByb2plY3Rpb25UcmFuc2Zvcm19KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5pdGlhbCBtYXRjaGVkIG1vZGVsIHZpZXcgdHJhbnNmb3JtXCIsIGluaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm0pO1xuXG4gICAgICBpZiAoaW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIC8vIFRPRE86IG1heWJlIGRvbid0IHRoaXMgcmVmaW5lSG9tb2dyYXBoeS4gcmVzdWx0IHNlZW1zIHdvcnNlIHdoZW4gdGhlIGRldGVjdGVkIHNpemUgaXMgYmlnXG4gICAgICBjb25zdCB7bW9kZWxWaWV3VHJhbnNmb3JtOiByZWZpbmVkTW9kZWxWaWV3VHJhbnNmb3JtLCBlcnJ9ID0gcmVmaW5lSG9tb2dyYXBoeSh7aW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybSwgcHJvamVjdGlvblRyYW5zZm9ybTogdGhpcy5wcm9qZWN0aW9uVHJhbnNmb3JtLCB3b3JsZENvb3Jkcywgc2NyZWVuQ29vcmRzfSk7XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWZpbmUgZXJyXCIsIGVycik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVmaW5lZE1vZGVsVmlld1RyYW5zZm9ybVwiLCByZWZpbmVkTW9kZWxWaWV3VHJhbnNmb3JtLCB3aW5kb3cuZGVidWdNYXRjaC5jYW1Qb3NlKTtcbiAgICAgICAgaWYgKCF3aW5kb3cuY21wMkRBcnJheShyZWZpbmVkTW9kZWxWaWV3VHJhbnNmb3JtLCB3aW5kb3cuZGVidWdNYXRjaC5jYW1Qb3NlLCAwLjAwMDEpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgSUNQIHJlZmluZWRNb2RlbFZpZXdUcmFuc2Zvcm1cIiwgcmVmaW5lZE1vZGVsVmlld1RyYW5zZm9ybSwgd2luZG93LmRlYnVnTWF0Y2guY2FtUG9zZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vY29uc29sZS5sb2coXCJpbml0aWFsIHJlZmluZWQgbW9kZWwgdmlldyB0cmFuc2Zvcm1cIiwgcmVmaW5lZE1vZGVsVmlld1RyYW5zZm9ybSk7XG5cbiAgICAgIHRoaXMuaXNUcmFja2luZyA9IHRydWU7XG4gICAgICB0aGlzLnRyYWNrZXIuZGV0ZWN0ZWQocmVmaW5lZE1vZGVsVmlld1RyYW5zZm9ybSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNUcmFja2luZykge1xuICAgICAgdGhpcy50cmFja2VyLnRyYWNrKHByb2Nlc3NJbWFnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZE1vZGVsVmlld1RyYW5zZm9ybSA9IHRoaXMudHJhY2tlci5nZXRMYXRlc3QoKTtcbiAgICAvL2NvbnNvbGUubG9nKFwidHJhY2tpbmcgdXBkYXRlZCBtb2RlbCB2aWV3IHRyYW5zZm9ybVwiLCB1cGRhdGVkTW9kZWxWaWV3VHJhbnNmb3JtKTtcbiAgICBpZiAodXBkYXRlZE1vZGVsVmlld1RyYW5zZm9ybSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5pc1RyYWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZWRNb2RlbFZpZXdUcmFuc2Zvcm07XG4gICAgLy9yZXR1cm4gaW5pdGlhbE1vZGVsVmlld1RyYW5zZm9ybTtcbiAgICAvL3JldHVybiByZWZpbmVkTW9kZWxWaWV3VHJhbnNmb3JtO1xuICB9XG59XG5cbmNvbnN0IGNvbXBpbGUgPSAodGFyZ2V0SW1hZ2UpID0+IHtcbiAgY29uc3QgaW1hZ2VMaXN0ID0gYnVpbGRJbWFnZUxpc3QodGFyZ2V0SW1hZ2UpO1xuXG4gIHZhciBfc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgY29uc3QgdHJhY2tpbmdEYXRhID0gY29tcGlsZVRyYWNraW5nKHtpbWFnZUxpc3R9KTtcbiAgLy9jb25zdCB0cmFja2luZ0RhdGEgPSBudWxsO1xuICB2YXIgX2VuZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBjb25zb2xlLmxvZygnZXhlYyB0aW1lIGNvbXBpbGUgdHJhY2tpbmc6ICcsIF9zdGFydCwgX2VuZCwgX2VuZCAtIF9zdGFydCk7XG5cbiAgY29uc3QgbWF0Y2hpbmdEYXRhID0gY29tcGlsZU1hdGNoaW5nKHtpbWFnZUxpc3R9KTtcbiAgLy9jb25zdCBtYXRjaGluZ0RhdGEgPSBudWxsO1xuICByZXR1cm4ge3RhcmdldEltYWdlLCBtYXRjaGluZ0RhdGEsIHRyYWNraW5nRGF0YSwgaW1hZ2VMaXN0fTtcbiAgLy9yZXR1cm4ge21hdGNoaW5nRGF0YSwgdHJhY2tpbmdEYXRhfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEltYWdlVGFyZ2V0LFxuICBjb21waWxlXG59XG4iLCJjb25zdCB7dXBzYW1wbGVCaWxpbmVhciwgZG93bnNhbXBsZUJpbGluZWFyfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ltYWdlcy5qcycpO1xuXG5jb25zdCBNQVhfU1VCUElYRUxfRElTVEFOQ0VfU1FSID0gMyAqIDM7XG5jb25zdCBMQVBMQUNJQU5fU1FSX1RIUkVTSE9MRCA9IDMgKiAzO1xuY29uc3QgRURHRV9USFJFU0hPTEQgPSA0LjA7XG5jb25zdCBFREdFX0hFU1NJQU5fVEhSRVNIT0xEID0gKChFREdFX1RIUkVTSE9MRCsxKSAqIChFREdFX1RIUkVTSE9MRCsxKSAvIEVER0VfVEhSRVNIT0xEKTtcbmNvbnN0IE1BWF9GRUFUVVJFX1BPSU5UUyA9IDUwMDtcbmNvbnN0IFBSVU5FX0ZFQVRVUkVTX05VTV9CVUNLRVRTID0gMTA7IC8vIHBlciBkaW1lbnNpb25cblxuY29uc3QgT1JJRU5UQVRJT05fTlVNX0JJTlMgPSAzNjtcbmNvbnN0IE9SSUVOVEFUSU9OX0dBVVNTSUFOX0VYUEFOU0lPTl9GQUNUT1IgPSAzLjA7XG5jb25zdCBPUklFTlRBVElPTl9SRUdJT05fRVhQQU5TSU9OX0ZBQ1RPUiA9IDEuNTtcbmNvbnN0IE9SSUVOVEFUSU9OX1NNT09USElOR19JVEVSQVRJT05TID0gNTtcbmNvbnN0IE9SSUVOVEFUSU9OX1BFQUtfVEhSRVNIT0xEID0gMC44O1xuXG5jb25zdCBPTkVfT1ZFUl8yUEkgPSAwLjE1OTE1NDk0MzA5MTg5NTtcblxuLy8gRGV0ZWN0IG1pbmltYSBhbmQgbWF4aW11bSBpbiBMYXBsYWNpYW4gaW1hZ2VzXG5jb25zdCBkZXRlY3QgPSAoe2dhdXNzaWFuUHlyYW1pZCwgZG9nUHlyYW1pZH0pID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IGRvZ1B5cmFtaWQuaW1hZ2VzWzBdLndpZHRoO1xuICBjb25zdCBvcmlnaW5hbEhlaWdodCA9IGRvZ1B5cmFtaWQuaW1hZ2VzWzBdLmhlaWdodDtcblxuICBjb25zdCBtSyA9IE1hdGgucG93KDIsIDEuMCAvIChnYXVzc2lhblB5cmFtaWQubnVtU2NhbGVzUGVyT2N0YXZlcy0xKSk7XG5cbiAgY29uc3QgZmVhdHVyZVBvaW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGsgPSAxOyBrIDwgZG9nUHlyYW1pZC5pbWFnZXMubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgbGV0IGltYWdlMCA9IGRvZ1B5cmFtaWQuaW1hZ2VzW2stMV07XG4gICAgbGV0IGltYWdlMSA9IGRvZ1B5cmFtaWQuaW1hZ2VzW2tdO1xuICAgIGxldCBpbWFnZTIgPSBkb2dQeXJhbWlkLmltYWdlc1trKzFdO1xuXG4gICAgY29uc3Qgb2N0YXZlID0gTWF0aC5mbG9vcihrIC8gZG9nUHlyYW1pZC5udW1TY2FsZXNQZXJPY3RhdmVzKTtcbiAgICBjb25zdCBzY2FsZSA9IGsgJSBkb2dQeXJhbWlkLm51bVNjYWxlc1Blck9jdGF2ZXM7XG5cbiAgICBsZXQgaGFzVXBzYW1wbGUgPSBmYWxzZTtcbiAgICBsZXQgaGFzUGFkT25lV2lkdGggPSBmYWxzZTtcbiAgICBsZXQgaGFzUGFkT25lSGVpZ2h0ID0gZmFsc2U7XG5cbiAgICBpZiAoIE1hdGguZmxvb3IoaW1hZ2UwLndpZHRoLzIpID09IGltYWdlMS53aWR0aCkge1xuICAgICAgaW1hZ2UwID0gZG93bnNhbXBsZUJpbGluZWFyKHtpbWFnZTogaW1hZ2UwfSk7XG4gICAgfVxuXG4gICAgaWYgKCBNYXRoLmZsb29yKGltYWdlMS53aWR0aC8yKSA9PSBpbWFnZTIud2lkdGgpIHtcbiAgICAgIGhhc1Vwc2FtcGxlID0gdHJ1ZTtcbiAgICAgIGhhc1BhZE9uZVdpZHRoID0gaW1hZ2UxLndpZHRoICUgMiA9PT0gMTtcbiAgICAgIGhhc1BhZE9uZUhlaWdodCA9IGltYWdlMS5oZWlnaHQgJSAyID09PSAxO1xuICAgICAgaW1hZ2UyID0gdXBzYW1wbGVCaWxpbmVhcih7aW1hZ2U6IGltYWdlMiwgcGFkT25lV2lkdGg6IGhhc1BhZE9uZVdpZHRoLCBwYWRPbmVIZWlnaHQ6IGhhc1BhZE9uZUhlaWdodH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2UxLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGltYWdlMS5oZWlnaHQ7XG5cbiAgICBjb25zdCBuZWlnaGJvdXJzID0gW1xuICAgICAgMCwgLTEsIDEsXG4gICAgICAtaW1hZ2UxLndpZHRoLCAtaW1hZ2UxLndpZHRoLTEsIC1pbWFnZTEud2lkdGgrMSxcbiAgICAgIGltYWdlMS53aWR0aCwgaW1hZ2UxLndpZHRoLTEsIGltYWdlMS53aWR0aCsxXG4gICAgXTtcblxuICAgIC8vIEluIHVwc2FtcGxlIGltYWdlLCBpZ25vcmUgdGhlIGJvcmRlclxuICAgIC8vIGl0J3MgcG9zc2libGUgdG8gZnVydGhlciBwYWQgb25lIG1vcmUgbGluZSAoaS5lLiB1cHNhY2FsZSAyeDIgLT4gNXg1KSBhdCB0aGUgZW5kLCBzbyBpZ25vcmUgb25lIG1vcmUgbGluZVxuICAgIGxldCBzdGFydEkgPSBoYXNVcHNhbXBsZT8gMjogMTtcbiAgICBsZXQgc3RhcnRKID0gc3RhcnRJO1xuXG4gICAgLy8gc2hvdWxkIGl0IGJlIFwiaW1hZ2UxLndpZHRoIC0yXCIgPyBidXQgdGhpcyB5aWVsZCBjb25zaXN0ZW50IHJlc3VsdCB3aXRoIGFydG9vbGtpdFxuICAgIGxldCBlbmRJID0gaGFzVXBzYW1wbGU/IGltYWdlMS53aWR0aCAtIDM6IGltYWdlMS53aWR0aCAtIDE7XG4gICAgbGV0IGVuZEogPSBoYXNVcHNhbXBsZT8gaW1hZ2UxLmhlaWdodCAtIDM6IGltYWdlMS5oZWlnaHQgLSAxO1xuICAgIGlmIChoYXNQYWRPbmVXaWR0aCkgZW5kSSAtPSAxO1xuICAgIGlmIChoYXNQYWRPbmVIZWlnaHQpIGVuZEogLT0gMTtcblxuICAgIGZvciAobGV0IGogPSBzdGFydEo7IGogPCBlbmRKOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydEk7IGkgPCBlbmRJOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zID0gaippbWFnZTEud2lkdGggKyBpO1xuICAgICAgICBjb25zdCB2ID0gaW1hZ2UxLmRhdGFbcG9zXTtcblxuICAgICAgICBpZiAodip2IDwgTEFQTEFDSUFOX1NRUl9USFJFU0hPTEQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFN0ZXAgMTogZmluZCBtYXhpbWEvIG1pbmltYSBpbiBsYXBsYWNpYW4gaW1hZ2VzXG5cbiAgICAgICAgbGV0IGlzTWF4ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCBuZWlnaGJvdXJzLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgICAgaWYgKHYgPD0gaW1hZ2UwLmRhdGFbcG9zK25laWdoYm91cnNbZF1dKSB7aXNNYXggPSBmYWxzZTsgYnJlYWt9O1xuICAgICAgICAgIGlmICh2IDw9IGltYWdlMi5kYXRhW3BvcytuZWlnaGJvdXJzW2RdXSkge2lzTWF4ID0gZmFsc2U7IGJyZWFrfTtcbiAgICAgICAgICBpZiAoZCAhPT0gMCAmJiB2IDw9IGltYWdlMS5kYXRhW3BvcytuZWlnaGJvdXJzW2RdXSkge2lzTWF4ID0gZmFsc2U7IGJyZWFrfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc01pbiA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGQgPSAwOyBkIDwgbmVpZ2hib3Vycy5sZW5ndGg7IGQrKykge1xuICAgICAgICAgIGlmICh2ID49IGltYWdlMC5kYXRhW3BvcytuZWlnaGJvdXJzW2RdXSkge2lzTWluID0gZmFsc2U7IGJyZWFrfTtcbiAgICAgICAgICBpZiAodiA+PSBpbWFnZTIuZGF0YVtwb3MrbmVpZ2hib3Vyc1tkXV0pIHtpc01pbiA9IGZhbHNlOyBicmVha307XG4gICAgICAgICAgaWYgKGQgIT09IDAgJiYgdiA+PSBpbWFnZTEuZGF0YVtwb3MrbmVpZ2hib3Vyc1tkXV0pIHtpc01pbiA9IGZhbHNlOyBicmVha307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzTWF4ICYmICFpc01pbikgY29udGludWU7IC8vIGV4dHJlbWEgLT4gZmVhdHVyZSBwb2ludFxuXG4gICAgICAgIC8vIFN0ZXAgMjogc3ViLXBpeGVsIHJlZmluZW1lbnQgKEknbSBub3Qgc3VyZSB3aGF0IHRoYXQgbWVhbnMuIEFueSBlZHVjYXRpb25hbCByZWY/KVxuXG4gICAgICAgIC8vIENvbXB1dGUgc3BhdGlhbCBkZXJpdmF0aXZlc1xuICAgICAgICBjb25zdCBkeCA9IDAuNSAqIChpbWFnZTEuZGF0YVtwb3MgKyAxXSAtIGltYWdlMS5kYXRhW3BvcyAtIDFdKTtcbiAgICAgICAgY29uc3QgZHkgPSAwLjUgKiAoaW1hZ2UxLmRhdGFbcG9zICsgd2lkdGhdIC0gaW1hZ2UxLmRhdGFbcG9zIC0gd2lkdGhdKTtcbiAgICAgICAgY29uc3QgZHh4ID0gaW1hZ2UxLmRhdGFbcG9zICsgMV0gKyBpbWFnZTEuZGF0YVtwb3MgLSAxXSAtIDIgKiBpbWFnZTEuZGF0YVtwb3NdO1xuICAgICAgICBjb25zdCBkeXkgPSBpbWFnZTEuZGF0YVtwb3MgKyB3aWR0aF0gKyBpbWFnZTEuZGF0YVtwb3MgLSB3aWR0aF0gLSAyICogaW1hZ2UxLmRhdGFbcG9zXTtcbiAgICAgICAgY29uc3QgZHh5ID0gMC4yNSAqIChpbWFnZTEuZGF0YVtwb3MgLSB3aWR0aCAtMV0gKyBpbWFnZTEuZGF0YVtwb3MgKyB3aWR0aCArIDFdIC0gaW1hZ2UxLmRhdGFbcG9zIC0gd2lkdGggKzFdIC0gaW1hZ2UxLmRhdGFbcG9zICsgd2lkdGggLSAxXSk7XG5cbiAgICAgICAgLy8gQ29tcHV0ZSBzY2FsZSBkZXJpdmF0ZXNcbiAgICAgICAgY29uc3QgZHMgPSAwLjUgKiAoaW1hZ2UyLmRhdGFbcG9zXSAtIGltYWdlMC5kYXRhW3Bvc10pO1xuICAgICAgICBjb25zdCBkc3MgPSBpbWFnZTIuZGF0YVtwb3NdICsgaW1hZ2UwLmRhdGFbcG9zXSAtIDIgKiBpbWFnZTEuZGF0YVtwb3NdO1xuICAgICAgICBjb25zdCBkeHMgPSAwLjI1ICogKChpbWFnZTAuZGF0YVtwb3MtMV0gLSBpbWFnZTAuZGF0YVtwb3MrMV0pICsgKC1pbWFnZTIuZGF0YVtwb3MtMV0gKyBpbWFnZTIuZGF0YVtwb3MrMV0pKTtcbiAgICAgICAgY29uc3QgZHlzID0gMC4yNSAqICgoaW1hZ2UwLmRhdGFbcG9zLXdpZHRoXSAtIGltYWdlMC5kYXRhW3Bvcyt3aWR0aF0pICsgKC1pbWFnZTIuZGF0YVtwb3Mtd2lkdGhdICsgaW1hZ2UyLmRhdGFbcG9zK3dpZHRoXSkpO1xuXG4gICAgICAgIC8vIEhlc3NpYW4gbWF0cml4XG4gICAgICAgIGNvbnN0IGhlc3NpYW4gPSBbXG4gICAgICAgICAgZHh4LCBkeHksIGR4cyxcbiAgICAgICAgICBkeHksIGR5eSwgZHlzLFxuICAgICAgICAgIGR4cywgZHlzLCBkc3NcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBiXG4gICAgICAgIGNvbnN0IGIgPSBbXG4gICAgICAgICAgLWR4LFxuICAgICAgICAgIC1keSxcbiAgICAgICAgICAtZHNcbiAgICAgICAgXTtcblxuICAgICAgICAvLyBTb2x2ZSBIICogdSA9IGI7XG4gICAgICAgIGNvbnN0IHUgPSBfc29sdmVTeW1tZXRyaWMzMyh7QTogaGVzc2lhbiwgYjogYn0pO1xuICAgICAgICBpZiAodSA9PT0gbnVsbCkgY29udGludWU7IC8vIG5vIHNvbHV0aW9uXG5cbiAgICAgICAgLy8gSWYgcG9pbnRzIG1vdmUgdG9vIG11Y2ggaW4gdGhlIHN1Yi1waXhlbCB1cGRhdGUsIHRoZW4gdGhlIHBvaW50IHByb2JhYmx5IHVuc3RhYmxlLlxuICAgICAgICBpZiAodVswXSAqIHVbMF0gKyB1WzFdICogdVsxXSA+IE1BWF9TVUJQSVhFTF9ESVNUQU5DRV9TUVIpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIGNvbXB1dGUgZWRnZSBzY29yZVxuICAgICAgICBjb25zdCBkZXQgPSAoZHh4ICogZHl5KSAtIChkeHkgKiBkeHkpO1xuICAgICAgICBpZiAoZGV0ID09PSAwKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBlZGdlU2NvcmUgPSAoZHh4ICsgZHl5KSAqIChkeHggKyBkeXkpIC8gZGV0O1xuICAgICAgICBpZiAoTWF0aC5hYnMoZWRnZVNjb3JlKSA+PSBFREdFX0hFU1NJQU5fVEhSRVNIT0xEICkgY29udGludWU7XG5cbiAgICAgICAgY29uc3Qgc2NvcmUgPSB2IC0gKGJbMF0gKiB1WzBdICsgYlsxXSAqIHVbMV0gKyBiWzJdICogdVsyXSk7XG4gICAgICAgIGlmIChzY29yZSAqIHNjb3JlIDwgTEFQTEFDSUFOX1NRUl9USFJFU0hPTEQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIG9yaWdpbmFsIHggPSB4KjJebiArIDJeKG4tMSkgLSAwLjVcbiAgICAgICAgLy8gb3JpZ2luYWwgeSA9IHkqMl5uICsgMl4obi0xKSAtIDAuNVxuICAgICAgICBjb25zdCBvcmlnaW5hbFggPSBpICogTWF0aC5wb3coMiwgb2N0YXZlKSArIE1hdGgucG93KDIsIG9jdGF2ZS0xKSAtIDAuNTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxZID0gaiAqIE1hdGgucG93KDIsIG9jdGF2ZSkgKyBNYXRoLnBvdygyLCBvY3RhdmUtMSkgLSAwLjU7XG5cbiAgICAgICAgY29uc3QgbmV3WCA9IG9yaWdpbmFsWCArIHVbMF0gKiBNYXRoLnBvdygyLCBvY3RhdmUpO1xuICAgICAgICBjb25zdCBuZXdZID0gb3JpZ2luYWxZICsgdVsxXSAqIE1hdGgucG93KDIsIG9jdGF2ZSk7XG4gICAgICAgIGlmIChuZXdYIDwgMCB8fCBuZXdYID49IG9yaWdpbmFsV2lkdGggfHwgbmV3WSA8IDAgfHwgbmV3WSA+PSBvcmlnaW5hbEhlaWdodCkgY29udGludWU7XG5cbiAgICAgICAgY29uc3Qgc3BTY2FsZSA9IE1hdGgubWluKE1hdGgubWF4KDAsIHNjYWxlICsgdVsyXSksIGRvZ1B5cmFtaWQubnVtU2NhbGVzUGVyT2N0YXZlcyk7XG4gICAgICAgIGNvbnN0IG5ld1NpZ21hID0gTWF0aC5wb3cobUssIHNwU2NhbGUpICogKDEgPDwgb2N0YXZlKTtcblxuICAgICAgICBsZXQgbmV3T2N0YXZlWCA9IG5ld1ggKiAoMS4wIC8gTWF0aC5wb3coMiwgb2N0YXZlKSkgKyAwLjUgKiAoMS4wIC8gTWF0aC5wb3coMiwgb2N0YXZlKSkgLSAwLjU7XG4gICAgICAgIGxldCBuZXdPY3RhdmVZID0gbmV3WSAqICgxLjAgLyBNYXRoLnBvdygyLCBvY3RhdmUpKSArIDAuNSAqICgxLjAgLyBNYXRoLnBvdygyLCBvY3RhdmUpKSAtIDAuNTtcbiAgICAgICAgbmV3T2N0YXZlWCA9IE1hdGguZmxvb3IobmV3T2N0YXZlWCArIDAuNSk7XG4gICAgICAgIG5ld09jdGF2ZVkgPSBNYXRoLmZsb29yKG5ld09jdGF2ZVkgKyAwLjUpO1xuXG4gICAgICAgIGZlYXR1cmVQb2ludHMucHVzaCh7XG4gICAgICAgICAgb2N0YXZlOiBvY3RhdmUsXG4gICAgICAgICAgc2NhbGU6IHNjYWxlLFxuICAgICAgICAgIG9jdGF2ZVg6IG5ld09jdGF2ZVgsXG4gICAgICAgICAgb2N0YXZlWTogbmV3T2N0YXZlWSxcbiAgICAgICAgICB4OiBuZXdYLFxuICAgICAgICAgIHk6IG5ld1ksXG4gICAgICAgICAgc2lnbWE6IG5ld1NpZ21hLFxuICAgICAgICAgIHNjb3JlOiBzY29yZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVRykge1xuICAgIGNvbnN0IGZwcyA9IHdpbmRvdy5kZWJ1Z0NvbnRlbnQuZmVhdHVyZVBvaW50czJbd2luZG93LmRlYnVnLmtleWZyYW1lSW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKFwiZmVhdHVyZXBvaW50czJcIiwgZmVhdHVyZVBvaW50cy5sZW5ndGgsICd2cycsIGZwcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmcDEgPSBmZWF0dXJlUG9pbnRzW2ldO1xuICAgICAgY29uc3QgZnAyID0gZnBzW2ldO1xuICAgICAgLy9pZiAoIXdpbmRvdy5jbXBPYmooZnAxLCBmcDIsIFsneCcsICd5JywgJ3Njb3JlJywgJ3NpZ21hJywgJ3NwU2NhbGUnLCAnZWRnZVNjb3JlJ10pKSB7XG4gICAgICBpZiAoIXdpbmRvdy5jbXBPYmooZnAxLCBmcDIsIFsneCcsICd5JywgJ3Njb3JlJywgJ3NpZ21hJ10pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGZlYXR1cmVwb2ludDJcIiwgZnAxLCBmcDIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHBydW5lZEZlYXR1cmVQb2ludHMgPSBfcHJ1bmVGZWF0dXJlcyh7ZmVhdHVyZVBvaW50czogZmVhdHVyZVBvaW50cywgd2lkdGg6IG9yaWdpbmFsV2lkdGgsIGhlaWdodDogb3JpZ2luYWxIZWlnaHR9KTtcblxuICAvLyBjb25zb2xlLmxvZyhcInBydW5lZCBmZWF0dXJlIHBvaW50cyBsZW5ndGhcIiwgcHJ1bmVkRmVhdHVyZVBvaW50cy5sZW5ndGgpO1xuXG4gIC8vIGNvbXB1dGUgZmVhdHVyZSBvcmllbnRhdGlvbnNcbiAgY29uc3QgZ3JhZGllbnRzID0gX2NvbXB1dGVHcmFkaWVudHMoe3B5cmFtaWQ6IGdhdXNzaWFuUHlyYW1pZH0pO1xuXG4gIGNvbnN0IG9yaWVudGVkRmVhdHVyZVBvaW50cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBydW5lZEZlYXR1cmVQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHKSB7XG4gICAgICB3aW5kb3cuZGVidWcub3JpZW50YXRpb25Db21wdXRlSW5kZXggPSBpO1xuICAgIH1cblxuICAgIGNvbnN0IGZwID0gcHJ1bmVkRmVhdHVyZVBvaW50c1tpXTtcbiAgICBjb25zdCBvY3RhdmVTaWdtYSA9IGZwLnNpZ21hICogKDEuMCAvIE1hdGgucG93KDIsIGZwLm9jdGF2ZSkpO1xuXG4gICAgY29uc3QgZ3JhZGllbnQgPSBncmFkaWVudHNbZnAub2N0YXZlICogZ2F1c3NpYW5QeXJhbWlkLm51bVNjYWxlc1Blck9jdGF2ZXMgKyBmcC5zY2FsZV07XG4gICAgY29uc3QgYW5nbGVzID0gX2NvbXB1dGVPcmllbnRhdGlvbih7eDogZnAub2N0YXZlWCwgeTogZnAub2N0YXZlWSwgc2lnbWE6IG9jdGF2ZVNpZ21hLCBvY3RhdmU6IGZwLm9jdGF2ZSwgc2NhbGU6IGZwLnNjYWxlLCBncmFkaWVudDogZ3JhZGllbnR9KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYW5nbGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBvcmllbnRlZEZlYXR1cmVQb2ludHMucHVzaChPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYW5nbGU6IGFuZ2xlc1tqXVxuICAgICAgfSwgcHJ1bmVkRmVhdHVyZVBvaW50c1tpXSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUcpIHtcbiAgICBjb25zdCBmcHMgPSB3aW5kb3cuZGVidWdDb250ZW50LmZlYXR1cmVQb2ludHM0W3dpbmRvdy5kZWJ1Zy5rZXlmcmFtZUluZGV4XTtcbiAgICBjb25zb2xlLmxvZyhcImZlYXR1cmVwb2ludHM0XCIsIG9yaWVudGVkRmVhdHVyZVBvaW50cy5sZW5ndGgsICd2cycsIGZwcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmcDEgPSBvcmllbnRlZEZlYXR1cmVQb2ludHNbaV07XG4gICAgICBjb25zdCBmcDIgPSBmcHNbaV07XG4gICAgICAvL2lmICghd2luZG93LmNtcE9iaihmcDEsIGZwMiwgWyd4JywgJ3knLCAnc2NvcmUnLCAnc2lnbWEnLCAnc3BTY2FsZScsICdlZGdlU2NvcmUnLCAnYW5nbGUnXSkpIHtcbiAgICAgIGlmICghd2luZG93LmNtcE9iaihmcDEsIGZwMiwgWyd4JywgJ3knLCAnc2NvcmUnLCAnc2lnbWEnLCAnYW5nbGUnXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgZmVhdHVyZXBvaW50NFwiLCBmcDEsIGZwMik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3JpZW50ZWRGZWF0dXJlUG9pbnRzO1xufVxuXG5jb25zdCBfY29tcHV0ZU9yaWVudGF0aW9uID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge3gsIHksIHNpZ21hLCBvY3RhdmUsIHNjYWxlLCBncmFkaWVudH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGd3U2lnbWEgPSBNYXRoLm1heCgxLjAsIE9SSUVOVEFUSU9OX0dBVVNTSUFOX0VYUEFOU0lPTl9GQUNUT1IgKiBzaWdtYSk7XG4gIGNvbnN0IGd3U2NhbGUgPSAtMS4wIC8gKDIgKiBnd1NpZ21hICogZ3dTaWdtYSk7XG5cbiAgY29uc3QgcmFkaXVzID0gT1JJRU5UQVRJT05fUkVHSU9OX0VYUEFOU0lPTl9GQUNUT1IgKiBnd1NpZ21hO1xuICBjb25zdCByYWRpdXMyID0gTWF0aC5jZWlsKCByYWRpdXMgKiByYWRpdXMgLSAwLjUpO1xuXG4gIGNvbnN0IHgwID0gTWF0aC5tYXgoMCwgeCAtIE1hdGguZmxvb3IocmFkaXVzICsgMC41KSk7XG4gIGNvbnN0IHgxID0gTWF0aC5taW4oZ3JhZGllbnQud2lkdGgtMSwgeCArIE1hdGguZmxvb3IocmFkaXVzICsgMC41KSk7XG4gIGNvbnN0IHkwID0gTWF0aC5tYXgoMCwgeSAtIE1hdGguZmxvb3IocmFkaXVzICsgMC41KSk7XG4gIGNvbnN0IHkxID0gTWF0aC5taW4oZ3JhZGllbnQuaGVpZ2h0LTEsIHkgKyBNYXRoLmZsb29yKHJhZGl1cyArIDAuNSkpO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUcpIHtcbiAgICBjb25zdCBvID0gd2luZG93LmRlYnVnQ29udGVudC5vcmllbnRhdGlvbkNvbXB1dGVbd2luZG93LmRlYnVnLmtleWZyYW1lSW5kZXhdW3dpbmRvdy5kZWJ1Zy5vcmllbnRhdGlvbkNvbXB1dGVJbmRleF07XG4gICAgaWYgKE1hdGguZmxvb3Ioby54ICsgMC41KSAhPT0geCB8fCBNYXRoLmZsb29yKG8ueSArIDAuNSkgIT09IHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG9yaWVudGF0aW9uIGlucHV0XCIpO1xuICAgIH1cbiAgICBpZiAoeDAgIT09IG8ueDAgfHwgeDEgIT09IG8ueDEgfHwgeTAgIT09IG8ueTAgfHwgeTEgIT09IG8ueTEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHh5IHJhbmdlXCIpO1xuICAgIH1cbiAgICBpZiAocmFkaXVzMiAhPT0gby5yYWRpdXMyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCByYWRpdXNcIiwgcmFkaXVzLCByYWRpdXMyLCBvLnJhZGl1cywgby5yYWRpdXMyKTtcbiAgICB9XG4gICAgd2luZG93LmRlYnVnLmZiaW5JbmRleCA9IC0xO1xuICB9XG5cbiAgY29uc3QgaGlzdG9ncmFtID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgT1JJRU5UQVRJT05fTlVNX0JJTlM7IGkrKykge1xuICAgIGhpc3RvZ3JhbS5wdXNoKDApO1xuICB9XG5cbiAgZm9yIChsZXQgeXAgPSB5MDsgeXAgPD0geTE7IHlwKyspIHtcbiAgICBjb25zdCBkeSA9IHlwIC0geTtcbiAgICBjb25zdCBkeTIgPSBkeSAqIGR5O1xuXG4gICAgZm9yIChsZXQgeHAgPSB4MDsgeHAgPD0geDE7IHhwKyspIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUcpIHtcbiAgICAgICAgd2luZG93LmRlYnVnLmZiaW5JbmRleCArPSAxO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkeCA9IHhwIC0geDtcbiAgICAgIGNvbnN0IGR4MiA9IGR4ICogZHg7XG5cbiAgICAgIGNvbnN0IHIyID0gZHgyICsgZHkyO1xuICAgICAgaWYocjIgPiByYWRpdXMyKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBvbmx5IHVzZSB0aGUgZ3JhZGllbnRzIHdpdGhpbiB0aGUgY2lyY3VsYXIgd2luZG93XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGdyYWRpZW50VmFsdWUgPSBncmFkaWVudC52YWx1ZXNbIHlwICogZ3JhZGllbnQud2lkdGggKyB4cCBdO1xuICAgICAgY29uc3QgYW5nbGUgPSBncmFkaWVudFZhbHVlLmFuZ2xlO1xuICAgICAgY29uc3QgbWFnID0gZ3JhZGllbnRWYWx1ZS5tYWc7XG5cbiAgICAgIGNvbnN0IHcgPSBfZmFzdEV4cDYoe3g6IHIyICogZ3dTY2FsZX0pOyAvLyBDb21wdXRlIHRoZSBnYXVzc2lhbiB3ZWlnaHQgYmFzZWQgb24gZGlzdGFuY2UgZnJvbSBjZW50ZXIgb2Yga2V5cG9pbnRcblxuICAgICAgY29uc3QgZmJpbiAgPSBPUklFTlRBVElPTl9OVU1fQklOUyAqIGFuZ2xlICogT05FX09WRVJfMlBJO1xuXG4gICAgICBjb25zdCBiaW4gPSBNYXRoLmZsb29yKGZiaW4gLSAwLjUpO1xuICAgICAgY29uc3QgdzIgPSBmYmluIC0gYmluIC0gMC41O1xuICAgICAgY29uc3QgdzEgPSAoMS4wIC0gdzIpO1xuICAgICAgY29uc3QgYjEgPSAoYmluICsgT1JJRU5UQVRJT05fTlVNX0JJTlMpICUgT1JJRU5UQVRJT05fTlVNX0JJTlM7XG4gICAgICBjb25zdCBiMiA9IChiaW4gKyAxKSAlIE9SSUVOVEFUSU9OX05VTV9CSU5TO1xuICAgICAgY29uc3QgbWFnbml0dWRlID0gdyAqIG1hZztcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVRykge1xuICAgICAgICBjb25zdCBvID0gd2luZG93LmRlYnVnQ29udGVudC5vcmllbnRhdGlvbkNvbXB1dGVbd2luZG93LmRlYnVnLmtleWZyYW1lSW5kZXhdW3dpbmRvdy5kZWJ1Zy5vcmllbnRhdGlvbkNvbXB1dGVJbmRleF07XG4gICAgICAgIGlmIChNYXRoLmFicyhmYmluIC0gby5mYmluc1t3aW5kb3cuZGVidWcuZmJpbkluZGV4XSkgPiAwLjAwMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGZiaW5cIiwgcjIsIHJhZGl1czIsIGZiaW4sICd2cycsIG8uZmJpbnNbd2luZG93LmRlYnVnLmZiaW5JbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBvLmZiaW5EZXRhaWxzW3dpbmRvdy5kZWJ1Zy5mYmluSW5kZXhdO1xuICAgICAgICBpZiAoYjEgIT09IGRldGFpbHMuYjEgfHwgYjIgIT09IGRldGFpbHMuYjIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBiMWIyXCIsIGIxLCBiMiwgZGV0YWlscy5iMSwgZGV0YWlscy5iMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguYWJzKHcxIC0gZGV0YWlscy53MSkgPiAwLjAwMSB8fCBNYXRoLmFicyh3MiAtIGRldGFpbHMudzIpID4gMC4wMDEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCB3MXcyXCIsIHcxLCB3MiwgZGV0YWlscy53MSwgZGV0YWlscy53Mik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguYWJzKGRldGFpbHMubWFnbml0dWRlIC0gbWFnbml0dWRlKSA+IDAuMDAxKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgbWFnOiBcIiwgbWFnbml0dWRlLCBkZXRhaWxzLm1hZ25pdHVkZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaGlzdG9ncmFtW2IxXSArPSB3MSAqIG1hZ25pdHVkZTtcbiAgICAgIGhpc3RvZ3JhbVtiMl0gKz0gdzIgKiBtYWduaXR1ZGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVRykge1xuICAgIGNvbnN0IG8gPSB3aW5kb3cuZGVidWdDb250ZW50Lm9yaWVudGF0aW9uQ29tcHV0ZVt3aW5kb3cuZGVidWcua2V5ZnJhbWVJbmRleF1bd2luZG93LmRlYnVnLm9yaWVudGF0aW9uQ29tcHV0ZUluZGV4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvZ3JhbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKE1hdGguYWJzKG8uaGlzdG9ncmFtc1tpXSAtIGhpc3RvZ3JhbVtpXSkgPiAwLjAwMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBoaXN0b2dyYW1cIiwgaSwgd2luZG93LmRlYnVnLm9yaWVudGF0aW9uQ29tcHV0ZUluZGV4LCBKU09OLnN0cmluZ2lmeShvLmhpc3RvZ3JhbXMpLCBKU09OLnN0cmluZ2lmeShoaXN0b2dyYW0pKTtcbiAgICAgICAgY29uc29sZS5sb2cobywgJ3ZzJywge3gsIHksIHNpZ21hLCBvY3RhdmUgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vY29uc29sZS5sb2coXCJvcmk6IFwiLCB4LCB5LCBvY3RhdmUsIHNjYWxlLCBnd1NpZ21hLCBnd1NjYWxlLCByYWRpdXMsIHJhZGl1czIsIEpTT04uc3RyaW5naWZ5KGhpc3RvZ3JhbSkpO1xuXG4gIC8vIFRoZSBvcmllbnRhdGlvbiBoaXN0b2dyYW0gaXMgc21vb3RoZWQgd2l0aCBhIEdhdXNzaWFuXG4gIC8vIHNpZ21hPTFcbiAgY29uc3Qga2VybmVsID0gWzAuMjc0MDY4NjE5MDYxMTk3LCAwLjQ1MTg2Mjc2MTg3NzYwNiwgMC4yNzQwNjg2MTkwNjExOTddO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgT1JJRU5UQVRJT05fU01PT1RISU5HX0lURVJBVElPTlM7IGkrKykge1xuICAgIGNvbnN0IG9sZCA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGlzdG9ncmFtLmxlbmd0aDsgaisrKSB7XG4gICAgICBvbGRbal0gPSBoaXN0b2dyYW1bal07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoaXN0b2dyYW0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGhpc3RvZ3JhbVtqXSA9IGtlcm5lbFswXSAqIG9sZFsoaiAtIDEgKyBoaXN0b2dyYW0ubGVuZ3RoKSAlIGhpc3RvZ3JhbS5sZW5ndGhdXG4gICAgICAgICAgICAgICAgICAgICsga2VybmVsWzFdICogb2xkW2pdXG4gICAgICAgICAgICAgICAgICAgICsga2VybmVsWzJdICogb2xkWyhqKzEpICUgaGlzdG9ncmFtLmxlbmd0aF07XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVRykge1xuICAgIGNvbnN0IG8gPSB3aW5kb3cuZGVidWdDb250ZW50Lm9yaWVudGF0aW9uQ29tcHV0ZVt3aW5kb3cuZGVidWcua2V5ZnJhbWVJbmRleF1bd2luZG93LmRlYnVnLm9yaWVudGF0aW9uQ29tcHV0ZUluZGV4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3RvZ3JhbS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKE1hdGguYWJzKG8uc21vb3RoZWRIaXN0b2dyYW1zW2ldIC0gaGlzdG9ncmFtW2ldKSA+IDAuMDAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHNtb290aGVkIGhpc3RvZ3JhbVwiLCBpLCB3aW5kb3cuZGVidWcub3JpZW50YXRpb25Db21wdXRlSW5kZXgsIEpTT04uc3RyaW5naWZ5KG8uc21vb3RoZWRIaXN0b2dyYW1zKSwgSlNPTi5zdHJpbmdpZnkoaGlzdG9ncmFtKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHBlYWsgb2YgdGhlIGhpc3RvZ3JhbS5cbiAgbGV0IG1heEhlaWdodCA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBPUklFTlRBVElPTl9OVU1fQklOUzsgaSsrKSB7XG4gICAgaWYoaGlzdG9ncmFtW2ldID4gbWF4SGVpZ2h0KSB7XG4gICAgICBtYXhIZWlnaHQgPSBoaXN0b2dyYW1baV07XG4gICAgfVxuICB9XG5cbiAgaWYgKG1heEhlaWdodCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIEZpbmQgYWxsIHRoZSBwZWFrcy5cbiAgY29uc3QgYW5nbGVzID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBPUklFTlRBVElPTl9OVU1fQklOUzsgaSsrKSB7XG4gICAgY29uc3QgcHJldiA9IChpIC0gMSArIGhpc3RvZ3JhbS5sZW5ndGgpICUgaGlzdG9ncmFtLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0ID0gKGkgKyAxKSAlIGhpc3RvZ3JhbS5sZW5ndGg7XG5cbiAgICAvLyBhZGQgMC4wMDAxIGluIGNvbXBhcmlzb24gdG8gYXZvaWQgdG9vIHNlbnNpdGl2ZSB0byByb3VuZGluZyBwcmVjaXNpb25cbiAgICBpZiAoaGlzdG9ncmFtW2ldID4gT1JJRU5UQVRJT05fUEVBS19USFJFU0hPTEQgKiBtYXhIZWlnaHQgJiYgKGhpc3RvZ3JhbVtpXSA+IGhpc3RvZ3JhbVtwcmV2XSArIDAuMDAwMSkgJiYgKGhpc3RvZ3JhbVtpXSA+IGhpc3RvZ3JhbVtuZXh0XSArIDAuMDAwMSkpIHtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IHN1Yi1waXhlbCBiaW4gbG9jYXRpb24gaXMgdGhlIGRpc2NyZXRlIGxvY2F0aW9uIGlmIHRoZSBxdWFkcmF0aWMgZml0dGluZyBmYWlscy5cbiAgICAgIGxldCBmYmluID0gaTtcblxuICAgICAgY29uc3QgcmV0ID0gX3F1YWRyYXRpYzNQb2ludHMoe1xuICAgICAgICBwMTogW2ktMSwgaGlzdG9ncmFtW3ByZXZdXSxcbiAgICAgICAgcDI6IFtpLCBoaXN0b2dyYW1baV1dLFxuICAgICAgICBwMzogW2krMSwgaGlzdG9ncmFtW25leHRdXVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qge0EsIEIsIEN9ID0gcmV0O1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIGNyaXRpY2FsIHBvaW50IG9mIGEgcXVhZHJhdGljLiB5ID0gQSp4XjIgKyBCKnggKyBDXG4gICAgICAgIGlmIChBICE9IDApIHtcbiAgICAgICAgICBmYmluID0gLUIgLyAoMiAqIEEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUcpIHtcbiAgICAgICAgY29uc3QgbyA9IHdpbmRvdy5kZWJ1Z0NvbnRlbnQub3JpZW50YXRpb25Db21wdXRlW3dpbmRvdy5kZWJ1Zy5rZXlmcmFtZUluZGV4XVt3aW5kb3cuZGVidWcub3JpZW50YXRpb25Db21wdXRlSW5kZXhdO1xuICAgICAgICBpZiAoIXdpbmRvdy5jbXAoZmJpbiwgby5oaXN0ZmJpbnNbaV0pKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1Qgb3JpZW50YXRpb24gZmJpblwiLCBpLCBmYmluLCAndnMnLCBvLmhpc3RmYmluc1tpXSwgby5oaXN0QXNbaV0sIG8uaGlzdEJzW2ldLCBvLmhpc3RDc1tpXSk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJoaXN0XCIsIGhpc3RvZ3JhbVtpXSwgaGlzdG9ncmFtW3ByZXZdLCBoaXN0b2dyYW1bbmV4dF0sIE9SSUVOVEFUSU9OX1BFQUtfVEhSRVNIT0xEICogbWF4SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgYW4gPSAgMi4wICogTWF0aC5QSSAqICgoZmJpbiArIDAuNSArIE9SSUVOVEFUSU9OX05VTV9CSU5TKSAvIE9SSUVOVEFUSU9OX05VTV9CSU5TKTtcbiAgICAgIHdoaWxlIChhbiA+IDIuMCAqIE1hdGguUEkpIHsgLy8gbW9kdWxhXG4gICAgICAgIGFuIC09IDIuMCAqIE1hdGguUEk7XG4gICAgICB9XG4gICAgICBhbmdsZXMucHVzaChhbik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhbmdsZXM7XG59XG5cblxuXG4vKipcbiAqIEZpdCBhIHF1YXRyYXRpYyB0byAzIHBvaW50cy4gVGhlIHN5c3RlbSBvZiBlcXVhdGlvbnMgaXM6XG4gKlxuICogeTAgPSBBKngwXjIgKyBCKngwICsgQ1xuICogeTEgPSBBKngxXjIgKyBCKngxICsgQ1xuICogeTIgPSBBKngyXjIgKyBCKngyICsgQ1xuICpcbiAqIFRoaXMgc3lzdGVtIG9mIGVxdWF0aW9ucyBpcyBzb2x2ZWQgZm9yIEEsQixDLlxuICovXG5jb25zdCBfcXVhZHJhdGljM1BvaW50cyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtwMSwgcDIsIHAzfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGQxID0gKHAzWzBdLXAyWzBdKSoocDNbMF0tcDFbMF0pO1xuICBjb25zdCBkMiA9IChwMVswXS1wMlswXSkqKHAzWzBdLXAxWzBdKTtcbiAgY29uc3QgZDMgPSBwMVswXS1wMlswXTtcblxuICAvLyBJZiBhbnkgb2YgdGhlIGRlbm9taW5hdG9ycyBhcmUgemVybyB0aGVuIHJldHVybiBGQUxTRS5cbiAgaWYgKGQxID09IDAgfHwgZDIgPT0gMCB8fCBkMyA9PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBhID0gcDFbMF0qcDFbMF07XG4gIGNvbnN0IGIgPSBwMlswXSpwMlswXTtcblxuICAvLyBTb2x2ZSBmb3IgdGhlIGNvZWZmaWNpZW50cyBBLEIsQ1xuICBjb25zdCBBID0gKChwM1sxXS1wMlsxXSkvZDEpLSgocDFbMV0tcDJbMV0pL2QyKTtcbiAgY29uc3QgQiA9ICgocDFbMV0tcDJbMV0pKyhBKihiLWEpKSkvZDM7XG4gIGNvbnN0IEMgPSBwMVsxXS0oQSphKS0oQipwMVswXSk7XG5cbiAgcmV0dXJuIHtBLCBCLCBDfTtcbn1cblxuLyoqXG4gKiAwLjAxJSBlcnJvciBhdCAxLjAzMFxuICogMC4xMCUgZXJyb3IgYXQgMS41MjBcbiAqIDEuMDAlIGVycm9yIGF0IDIuMzMwXG4gKiA1LjAwJSBlcnJvciBhdCAzLjI4NVxuICovXG5jb25zdCBfZmFzdEV4cDYgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7eH0gPSBvcHRpb25zO1xuICByZXR1cm4gKDcyMCt4Kig3MjAreCooMzYwK3gqKDEyMCt4KigzMCt4Kig2K3gpKSkpKSkqMC4wMDEzODg4ODg4O1xufVxuXG5jb25zdCBfY29tcHV0ZUdyYWRpZW50cyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtweXJhbWlkfSA9IG9wdGlvbnM7XG4gIGNvbnN0IGdyYWRpZW50cyA9IFtdO1xuXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgcHlyYW1pZC5pbWFnZXMubGVuZ3RoOyBrKyspIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICBjb25zdCBpbWFnZSA9IHB5cmFtaWQuaW1hZ2VzW2tdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbWFnZS5oZWlnaHQ7IGorKykge1xuICAgICAgY29uc3QgcHJldkogPSBqID4gMD8gaiAtIDE6IGo7XG4gICAgICBjb25zdCBuZXh0SiA9IGogPCBpbWFnZS5oZWlnaHQgLSAxPyBqICsgMTogajtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZS53aWR0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByZXZJID0gaSA+IDA/IGkgLSAxOiBpO1xuICAgICAgICBjb25zdCBuZXh0SSA9IGkgPCBpbWFnZS53aWR0aCAtIDE/IGkgKyAxOiBpO1xuICAgICAgICBjb25zdCBkeCA9IGltYWdlLmRhdGFbaiAqIGltYWdlLndpZHRoICsgbmV4dEldIC0gaW1hZ2UuZGF0YVtqICogaW1hZ2Uud2lkdGggKyBwcmV2SV07XG4gICAgICAgIGNvbnN0IGR5ID0gaW1hZ2UuZGF0YVtuZXh0SiAqIGltYWdlLndpZHRoICsgaV0gLSBpbWFnZS5kYXRhW3ByZXZKICogaW1hZ2Uud2lkdGggKyBpXTtcblxuICAgICAgICB2YWx1ZXMucHVzaCh7XG4gICAgICAgICAgYW5nbGU6IE1hdGguYXRhbjIoZHksIGR4KSArIE1hdGguUEksXG4gICAgICAgICAgbWFnOiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBncmFkaWVudHMucHVzaCh7XG4gICAgICB3aWR0aDogaW1hZ2Uud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcbiAgICAgIHZhbHVlczogdmFsdWVzXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGdyYWRpZW50cztcbn1cblxuLy8gZGl2aWRlIHRoZSBpbWFnZSBpbnRvIFBSVU5FX0ZFQVRVUkVTX05VTV9CVUNLRVRTICogUFJVTkVfRkVBVFVSRVNfTlVNX0JVQ0tFVFMgYXJlYVxuLy8gaW4gZWFjaCBhcmVhLCBzb3J0IGZlYXR1cmUgcG9pbnRzIGJ5IHNjb3JlLCBhbmQgcmV0dXJuIHRoZSB0b3AgTlxuY29uc3QgX3BydW5lRmVhdHVyZXMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7ZmVhdHVyZVBvaW50cywgd2lkdGgsIGhlaWdodH0gPSBvcHRpb25zO1xuXG4gIC8vIE5vdGU6IHNlZW1zIG5vdCB0byBiZSBhIGNvbnNpc3RlbnQgaW1wbGVtZW50YXRpb24uIE1pZ2h0IG5lZWQgdG8gcmVtb3ZlIHRoaXMgbGluZVxuICAvLyAgIFRoZSBmZWF0dXJlIHBvaW50cyBhcmUgcHJ1bmUgcGVyIGJ1Y2tldCwgZS5nLiBpZiA1MDEgcG9pbnRzIGluIGJ1Y2tldCAxLCB0dXJucyBvdXQgb25seSA1IHZhbGlkXG4gIC8vICAgU2ltaWxhcmx5LCBpZiA1MDAgcG9pbnRzIGFsbCBpbiBidWNrZXQgMSwgdGhleSBhbGwgcGFzc2VkIGJlY2F1c2UgZ2xvYmFsbHkgPD0gbWF4TnVtRmVhdHVyZVBvaW50c1xuICBpZiAoZmVhdHVyZVBvaW50cy5sZW5ndGggPD0gTUFYX0ZFQVRVUkVfUE9JTlRTKSByZXR1cm4gZmVhdHVyZVBvaW50cztcblxuICBjb25zdCByZXN1bHRGZWF0dXJlUG9pbnRzID0gW107XG5cbiAgY29uc3QgbkJ1Y2tldHMgPSBQUlVORV9GRUFUVVJFU19OVU1fQlVDS0VUUyAqIFBSVU5FX0ZFQVRVUkVTX05VTV9CVUNLRVRTO1xuICBjb25zdCBuUG9pbnRzUGVyQnVja2V0cyA9IE1BWF9GRUFUVVJFX1BPSU5UUyAvIG5CdWNrZXRzO1xuXG4gIGNvbnN0IGJ1Y2tldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuQnVja2V0czsgaSsrKSB7XG4gICAgYnVja2V0cy5wdXNoKFtdKTtcbiAgfVxuXG4gIGNvbnN0IGR4ID0gTWF0aC5jZWlsKDEuMCAqIHdpZHRoIC8gUFJVTkVfRkVBVFVSRVNfTlVNX0JVQ0tFVFMpO1xuICBjb25zdCBkeSA9IE1hdGguY2VpbCgxLjAgKiBoZWlnaHQgLyBQUlVORV9GRUFUVVJFU19OVU1fQlVDS0VUUyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlUG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYnVja2V0WCA9IE1hdGguZmxvb3IoZmVhdHVyZVBvaW50c1tpXS54IC8gZHgpO1xuICAgIGNvbnN0IGJ1Y2tldFkgPSBNYXRoLmZsb29yKGZlYXR1cmVQb2ludHNbaV0ueSAvIGR5KTtcblxuICAgIGNvbnN0IGJ1Y2tldEluZGV4ID0gYnVja2V0WSAqIFBSVU5FX0ZFQVRVUkVTX05VTV9CVUNLRVRTICsgYnVja2V0WDtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIiwgZmVhdHVyZVBvaW50c1tpXSk7XG4gICAgYnVja2V0c1tidWNrZXRJbmRleF0ucHVzaChmZWF0dXJlUG9pbnRzW2ldKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUFJVTkVfRkVBVFVSRVNfTlVNX0JVQ0tFVFM7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgUFJVTkVfRkVBVFVSRVNfTlVNX0JVQ0tFVFM7IGorKykge1xuICAgICAgY29uc3QgYnVja2V0SW5kZXggPSBqICogUFJVTkVfRkVBVFVSRVNfTlVNX0JVQ0tFVFMgKyBpO1xuICAgICAgY29uc3QgYnVja2V0ID0gYnVja2V0c1tidWNrZXRJbmRleF07XG4gICAgICBjb25zdCBuU2VsZWN0ZWQgPSBNYXRoLm1pbihidWNrZXQubGVuZ3RoLCBuUG9pbnRzUGVyQnVja2V0cyk7XG5cbiAgICAgIGlmIChidWNrZXQubGVuZ3RoID4gblNlbGVjdGVkKSB7XG4gICAgICAgIGJ1Y2tldC5zb3J0KChmMSwgZjIpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoZjEuc2NvcmUpID4gTWF0aC5hYnMoZjIuc2NvcmUpPyAtMTogMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG5TZWxlY3RlZDsgaysrKSB7XG4gICAgICAgIHJlc3VsdEZlYXR1cmVQb2ludHMucHVzaChidWNrZXRba10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0RmVhdHVyZVBvaW50cztcbn1cblxuLy8gc29sdmUgeCA9IEFiLCB3aGVyZSBBIGlzIHN5bW1ldHJpY1xuLy8gW3gwXSAgIFtBMCBBMSBBMl0gW2IwXVxuLy8gW3gxXSA9IFtBMyBBNCBBNV0gW2IxXVxuLy8gW3gyXSAgIFtBNiBBNyBBOF0gW2IyXVxuY29uc3QgX3NvbHZlU3ltbWV0cmljMzMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7QSwgYn0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGRldCA9IEFbMF0gKiBBWzRdICogQVs4XVxuICAgICAgICAgICAgLSBBWzBdICogQVs1XSAqIEFbNV1cbiAgICAgICAgICAgIC0gQVs0XSAqIEFbMl0gKiBBWzJdXG4gICAgICAgICAgICAtIEFbOF0gKiBBWzFdICogQVsxXVxuICAgICAgICAgICAgKyAyICogQVsxXSAqIEFbMl0gKiBBWzVdO1xuXG4gIGlmICggTWF0aC5hYnMoZGV0KSA8IDAuMDAwMDAwMSkgcmV0dXJuIG51bGw7IC8vIGRldGVybWluYW50IHVuZGVmaW5lZC4gbm8gc29sdXRpb25cblxuICBjb25zdCBCID0gW107IC8vIGludmVyc2Ugb2YgQVxuICBCWzBdID0gQVs0XSAqIEFbOF0gLSBBWzVdICogQVs3XTtcbiAgQlsxXSA9IEFbMl0gKiBBWzddIC0gQVsxXSAqIEFbOF07XG4gIEJbMl0gPSBBWzFdICogQVs1XSAtIEFbMl0gKiBBWzRdO1xuICBCWzNdID0gQVs1XSAqIEFbNl0gLSBBWzNdICogQVs4XTtcbiAgQls0XSA9IEFbMF0gKiBBWzhdIC0gQVsyXSAqIEFbNl07XG4gIEJbNV0gPSBBWzJdICogQVszXSAtIEFbMF0gKiBBWzVdO1xuICBCWzZdID0gQVszXSAqIEFbN10gLSBBWzRdICogQVs2XTtcbiAgQls3XSA9IEFbMV0gKiBBWzZdIC0gQVswXSAqIEFbN107XG4gIEJbOF0gPSBBWzBdICogQVs0XSAtIEFbMV0gKiBBWzNdO1xuXG4gIGNvbnN0IHggPSBbXTtcbiAgeFswXSA9IEJbMF0gKiBiWzBdICsgQlsxXSAqIGJbMV0gKyBCWzJdICogYlsyXTtcbiAgeFsxXSA9IEJbM10gKiBiWzBdICsgQls0XSAqIGJbMV0gKyBCWzVdICogYlsyXTtcbiAgeFsyXSA9IEJbNl0gKiBiWzBdICsgQls3XSAqIGJbMV0gKyBCWzhdICogYlsyXTtcblxuICB4WzBdID0gMS4wICogeFswXSAvIGRldDtcbiAgeFsxXSA9IDEuMCAqIHhbMV0gLyBkZXQ7XG4gIHhbMl0gPSAxLjAgKiB4WzJdIC8gZGV0O1xuXG4gIHJldHVybiB4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGV0ZWN0XG59XG5cbiIsIi8vIGNvbXB1dGUgRGlmZmVyZW5jZS1vZi1HYXVzc2lhbiBweXJhbWlkcyBmcm9tIGdhdXNzaWFuIHB5cmFtaWRzXG4vL1xuLy8gcHlyYW1pZCA9IHtcbi8vICAgbnVtT2N0YXZlcyxcbi8vICAgbnVtU2NhbGVzUGVyT2N0YXZlcyxcbi8vICAgaW1hZ2VzOiBbe2RhdGEsIHdpZHRoLCBoZWlnaHR9LCB7fSwge31dIC8vIGltYWdlIGF0IG9jdGF2ZSBpIGFuZCBzY2FsZSBqID0gaW1hZ2VzW2kgKiBudW1TY2FsZXNQZXJPY3RhdmVzICsgal1cbi8vIH1cblxuY29uc3QgYnVpbGQgPSAoe2dhdXNzaWFuUHlyYW1pZH0pID0+IHtcbiAgY29uc3QgbnVtT2N0YXZlcyA9IGdhdXNzaWFuUHlyYW1pZC5udW1PY3RhdmVzO1xuICBjb25zdCBudW1TY2FsZXNQZXJPY3RhdmVzID0gZ2F1c3NpYW5QeXJhbWlkLm51bVNjYWxlc1Blck9jdGF2ZXMgLSAxO1xuXG4gIGNvbnN0IHB5cmFtaWRJbWFnZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PY3RhdmVzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bVNjYWxlc1Blck9jdGF2ZXM7IGorKykge1xuICAgICAgY29uc3QgaW1hZ2UxID0gZ2F1c3NpYW5QeXJhbWlkLmltYWdlc1tpICogZ2F1c3NpYW5QeXJhbWlkLm51bVNjYWxlc1Blck9jdGF2ZXMgKyBqXTtcbiAgICAgIGNvbnN0IGltYWdlMiA9IGdhdXNzaWFuUHlyYW1pZC5pbWFnZXNbaSAqIGdhdXNzaWFuUHlyYW1pZC5udW1TY2FsZXNQZXJPY3RhdmVzICsgaiArIDFdO1xuICAgICAgcHlyYW1pZEltYWdlcy5wdXNoKCAgX2RpZmZlcmVuY2VJbWFnZUJpbm9taWFsKHtpbWFnZTEsIGltYWdlMn0pKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBudW1PY3RhdmVzLFxuICAgIG51bVNjYWxlc1Blck9jdGF2ZXMsXG4gICAgaW1hZ2VzOiBweXJhbWlkSW1hZ2VzXG4gIH1cbn1cblxuY29uc3QgX2RpZmZlcmVuY2VJbWFnZUJpbm9taWFsID0gKHtpbWFnZTEsIGltYWdlMn0pID0+IHtcbiAgaWYgKGltYWdlMS5kYXRhLmxlbmd0aCAhPT0gaW1hZ2UyLmRhdGEubGVuZ3RoKSB7XG4gICAgdGhyb3cgXCJpbWFnZSBsZW5ndGggZG9lc24ndCBtYXRjaFwiO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IG5ldyBGbG9hdDMyQXJyYXkoaW1hZ2UxLmRhdGEubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZTEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGRhdGFbaV0gPSBpbWFnZTEuZGF0YVtpXSAtIGltYWdlMi5kYXRhW2ldO1xuICB9XG4gIHJldHVybiB7ZGF0YTogZGF0YSwgd2lkdGg6IGltYWdlMS53aWR0aCwgaGVpZ2h0OiBpbWFnZTEuaGVpZ2h0fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJ1aWxkXG59O1xuIiwiY29uc3QgRVhQQU5TSU9OX0ZBQ1RPUiA9IDc7XG5cbi8vIDM3IHBvaW50cyA9IDYgcmluZ3MgeCA2IHBvaW50cyBwZXIgcmluZyArIDEgY2VudGVyXG5jb25zdCBGUkVBS19SSU5HUyA9IFtcbiAgLy8gcmluZyA1XG4gIHtcbiAgICBzaWdtYTogMC41NTAwMDAsXG4gICAgcG9pbnRzOiBbXG4gICAgICBbLTEuMDAwMDAwLCAwLjAwMDAwMF0sXG4gICAgICBbLTAuNTAwMDAwLCAtMC44NjYwMjVdLFxuICAgICAgWzAuNTAwMDAwLCAtMC44NjYwMjVdLFxuICAgICAgWzEuMDAwMDAwLCAtMC4wMDAwMDBdLFxuICAgICAgWzAuNTAwMDAwLCAwLjg2NjAyNV0sXG4gICAgICBbLTAuNTAwMDAwLCAwLjg2NjAyNV1cbiAgICBdXG4gIH0sXG4gIC8vIHJpbmcgNFxuICB7XG4gICAgc2lnbWE6IDAuNDc1MDAwLFxuICAgIHBvaW50czogW1xuICAgICAgWzAuMDAwMDAwLCAwLjkzMDk2OV0sXG4gICAgICBbLTAuODA2MjQzLCAwLjQ2NTQ4NV0sXG4gICAgICBbLTAuODA2MjQzLCAtMC40NjU0ODVdLFxuICAgICAgWy0wLjAwMDAwMCwgLTAuOTMwOTY5XSxcbiAgICAgIFswLjgwNjI0MywgLTAuNDY1NDg1XSxcbiAgICAgIFswLjgwNjI0MywgMC40NjU0ODVdXG4gICAgXVxuICB9LFxuICAvLyByaW5nIDNcbiAge1xuICAgIHNpZ21hOiAwLjQwMDAwMCxcbiAgICBwb2ludHM6IFtcbiAgICAgIFswLjg0NzMwNiwgLTAuMDAwMDAwXSxcbiAgICAgIFswLjQyMzY1MywgMC43MzM3ODldLFxuICAgICAgWy0wLjQyMzY1MywgMC43MzM3ODldLFxuICAgICAgWy0wLjg0NzMwNiwgMC4wMDAwMDBdLFxuICAgICAgWy0wLjQyMzY1MywgLTAuNzMzNzg5XSxcbiAgICAgIFswLjQyMzY1MywgLTAuNzMzNzg5XVxuICAgIF1cbiAgfSxcbiAgLy8gcmluZyAyXG4gIHtcbiAgICBzaWdtYTogMC4zMjUwMDAsXG4gICAgcG9pbnRzOiBbXG4gICAgICBbLTAuMDAwMDAwLCAtMC43NDEwOTRdLFxuICAgICAgWzAuNjQxODA2LCAtMC4zNzA1NDddLFxuICAgICAgWzAuNjQxODA2LCAwLjM3MDU0N10sXG4gICAgICBbMC4wMDAwMDAsIDAuNzQxMDk0XSxcbiAgICAgIFstMC42NDE4MDYsIDAuMzcwNTQ3XSxcbiAgICAgIFstMC42NDE4MDYsIC0wLjM3MDU0N11cbiAgICBdXG4gIH0sXG4gIC8vIHJpbmcgMVxuICB7XG4gICAgc2lnbWE6IDAuMjUwMDAwLFxuICAgIHBvaW50czogW1xuICAgICAgWy0wLjU5NTUwMiwgMC4wMDAwMDBdLFxuICAgICAgWy0wLjI5Nzc1MSwgLTAuNTE1NzIwXSxcbiAgICAgIFswLjI5Nzc1MSwgLTAuNTE1NzIwXSxcbiAgICAgIFswLjU5NTUwMiwgLTAuMDAwMDAwXSxcbiAgICAgIFswLjI5Nzc1MSwgMC41MTU3MjBdLFxuICAgICAgWy0wLjI5Nzc1MSwgMC41MTU3MjBdXG4gICAgXVxuICB9LFxuICAvLyByaW5nIDBcbiAge1xuICAgIHNpZ21hOiAwLjE3NTAwMCxcbiAgICBwb2ludHM6IFtcbiAgICAgIFswLjAwMDAwMCwgMC4zNjI3ODNdLFxuICAgICAgWy0wLjMxNDE3OSwgMC4xODEzOTFdLFxuICAgICAgWy0wLjMxNDE3OSwgLTAuMTgxMzkxXSxcbiAgICAgIFstMC4wMDAwMDAsIC0wLjM2Mjc4M10sXG4gICAgICBbMC4zMTQxNzksIC0wLjE4MTM5MV0sXG4gICAgICBbMC4zMTQxNzksIDAuMTgxMzkxXVxuICAgIF1cbiAgfSxcbiAgLy8gY2VudGVyXG4gIHtcbiAgICBzaWdtYTogMC4xMDAwMDAsXG4gICAgcG9pbnRzOiBbXG4gICAgICBbMCwgMF1cbiAgICBdXG4gIH1cbl1cblxuLy8gcHlyYW1pZDogZ2F1c3NpYW4gcHlyYW1pZFxuY29uc3QgZXh0cmFjdCA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtweXJhbWlkLCBwb2ludHN9ID0gb3B0aW9ucztcblxuICBjb25zdCBtSyA9IE1hdGgucG93KDIsIDEuMCAvIChweXJhbWlkLm51bVNjYWxlc1Blck9jdGF2ZXMtMSkpO1xuICBjb25zdCBvbmVPdmVyTG9nSyA9IDEuMCAvIE1hdGgubG9nKG1LKTtcblxuICBjb25zdCBkZXNjcmlwdG9ycyA9IFtdO1xuICBmb3IgKGxldCBwID0gMDsgcCA8IHBvaW50cy5sZW5ndGg7IHArKykge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVRykge1xuICAgICAgaWYgKHdpbmRvdy5kZWJ1Z0ZyZWFrU2FtcGxlSW5kZXggPT09IHVuZGVmaW5lZCkgd2luZG93LmRlYnVnRnJlYWtTYW1wbGVJbmRleCA9IC0xO1xuICAgICAgd2luZG93LmRlYnVnRnJlYWtTYW1wbGVJbmRleCArPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW3BdO1xuXG4gICAgLy8gRW5zdXJlIHRoZSBzY2FsZSBvZiB0aGUgc2ltaWxhcml0eSB0cmFuc2Zvcm0gaXMgYXQgbGVhc3QgXCIxXCIuXG4gICAgY29uc3QgdHJhbnNmb3JtU2NhbGUgPSBNYXRoLm1heCgxLCBwb2ludC5zaWdtYSAqIEVYUEFOU0lPTl9GQUNUT1IpO1xuXG4gICAgLy8gVHJhbnNmb3JtYXRpb24gZnJvbSBjYW5vbmljYWwgdGVzdCBsb2NhdGlvbnMgdG8gaW1hZ2VcbiAgICBjb25zdCBTID0gX3NpbWlsYXJpdHlNYXRyaXgoe3NjYWxlOiB0cmFuc2Zvcm1TY2FsZSwgYW5nbGU6IHBvaW50LmFuZ2xlLCB4OiBwb2ludC54LCB5OiBwb2ludC55fSk7XG5cbiAgICAvL2NvbnNvbGUubG9nKFwiUzogXCIsIHBvaW50LnNjYWxlLCBwb2ludC5hbmdsZSwgUyk7XG5cbiAgICBjb25zdCBzYW1wbGVzID0gW107XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBGUkVBS19SSU5HUy5sZW5ndGg7IHIrKykge1xuICAgICAgY29uc3Qgc2lnbWEgPSB0cmFuc2Zvcm1TY2FsZSAqIEZSRUFLX1JJTkdTW3JdLnNpZ21hO1xuXG4gICAgICBsZXQgb2N0YXZlID0gTWF0aC5mbG9vcihNYXRoLmxvZzIoc2lnbWEpKTtcbiAgICAgIGNvbnN0IGZzY2FsZSA9IE1hdGgubG9nKHNpZ21hIC8gTWF0aC5wb3coMiwgb2N0YXZlKSkgKiBvbmVPdmVyTG9nSztcbiAgICAgIGxldCBzY2FsZSA9IE1hdGgucm91bmQoZnNjYWxlKTtcblxuICAgICAgLy8gc2dpbWEgb2YgbGFzdCBzY2FsZSA9ICBzaWdtYSBvZiB0aGUgZmlyc3Qgc2NhbGUgaW4gbmV4dCBvY3RhdmVcbiAgICAgIC8vIHByZWZlciBjb2Fyc2VyIG9jdGF2ZXMgZm9yIGVmZmljaWVuY3lcbiAgICAgIGlmIChzY2FsZSA9PT0gcHlyYW1pZC5udW1TY2FsZXNQZXJPY3RhdmVzIC0gMSkge1xuICAgICAgICBvY3RhdmUgPSBvY3RhdmUgKyAxO1xuICAgICAgICBzY2FsZSA9IDA7XG4gICAgICB9XG4gICAgICAvLyBjbGlwIG9jdGF2ZSBhbmQgc2NhbGVcbiAgICAgIGlmIChvY3RhdmUgPCAwKSB7XG4gICAgICAgIG9jdGF2ZSA9IDA7XG4gICAgICAgIHNjYWxlID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChvY3RhdmUgPj0gcHlyYW1pZC5udW1PY3RhdmVzKSB7XG4gICAgICAgIG9jdGF2ZSA9IHB5cmFtaWQubnVtT2N0YXZlcyAtIDE7XG4gICAgICAgIHNjYWxlID0gcHlyYW1pZC5udW1TY2FsZXNQZXJPY3RhdmVzIC0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gZm9yIGRvd25zYW1wbGUgcG9pbnRcbiAgICAgIGNvbnN0IGltYWdlID0gcHlyYW1pZC5pbWFnZXNbb2N0YXZlICogcHlyYW1pZC5udW1TY2FsZXNQZXJPY3RhdmVzICsgc2NhbGVdO1xuICAgICAgY29uc3QgYSA9IDEuMCAvIChNYXRoLnBvdygyLCBvY3RhdmUpKTtcbiAgICAgIGNvbnN0IGIgPSAwLjUgKiBhIC0gMC41O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEZSRUFLX1JJTkdTW3JdLnBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwb2ludCA9IEZSRUFLX1JJTkdTW3JdLnBvaW50c1tpXTtcbiAgICAgICAgY29uc3QgeCA9IFNbMF0gKiBwb2ludFswXSArIFNbMV0gKiBwb2ludFsxXSArIFNbMl07XG4gICAgICAgIGNvbnN0IHkgPSBTWzNdICogcG9pbnRbMF0gKyBTWzRdICogcG9pbnRbMV0gKyBTWzVdO1xuXG4gICAgICAgIGxldCB4cCA9IHggKiBhICsgYjsgLy8geCBpbiBvY3RhdmVcbiAgICAgICAgbGV0IHlwID0geSAqIGEgKyBiOyAvLyB5IGluIG9jdGF2ZVxuICAgICAgICAvLyBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHhwID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oeHAsIGltYWdlLndpZHRoIC0gMikpO1xuICAgICAgICB5cCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHlwLCBpbWFnZS5oZWlnaHQgLSAyKSk7XG5cbiAgICAgICAgY29uc3QgeDAgPSBNYXRoLmZsb29yKHhwKTtcbiAgICAgICAgY29uc3QgeDEgPSB4MCArIDE7XG4gICAgICAgIGNvbnN0IHkwID0gTWF0aC5mbG9vcih5cCk7XG4gICAgICAgIGNvbnN0IHkxID0geTAgKyAxO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gKHgxLXhwKSAqICh5MS15cCkgKiBpbWFnZS5kYXRhW3kwICogaW1hZ2Uud2lkdGggKyB4MF1cbiAgICAgICAgICAgICAgICAgICAgKyAoeHAteDApICogKHkxLXlwKSAqIGltYWdlLmRhdGFbeTAgKiBpbWFnZS53aWR0aCArIHgxXVxuICAgICAgICAgICAgICAgICAgICArICh4MS14cCkgKiAoeXAteTApICogaW1hZ2UuZGF0YVt5MSAqIGltYWdlLndpZHRoICsgeDBdXG4gICAgICAgICAgICAgICAgICAgICsgKHhwLXgwKSAqICh5cC15MCkgKiBpbWFnZS5kYXRhW3kxICogaW1hZ2Uud2lkdGggKyB4MV07XG5cbiAgICAgICAgc2FtcGxlcy5wdXNoKHZhbHVlKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5kZWJ1Zy5rZXlmcmFtZUluZGV4ID09PSAyICYmIHAgPT09IDQyNCkge1xuICAgICAgICAgICAgY29uc3Qgc2FtcGxlSW5kZXggPSBzYW1wbGVzLmxlbmd0aC0xO1xuICAgICAgICAgICAgY29uc3QgZFNhbXBsZXMgPSB3aW5kb3cuZGVidWdDb250ZW50LmZyZWFrU2FtcGxlc1t3aW5kb3cuZGVidWdGcmVha1NhbXBsZUluZGV4XTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJmcmVhayBzYW1wbGVcIiwgd2luZG93LmRlYnVnLmtleWZyYW1lSW5kZXgsIHNhbXBsZUluZGV4LCBkU2FtcGxlc1tzYW1wbGVJbmRleF0sIHt4cCwgeXAsIHZhbHVlfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBkZXNjID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gaSsxOyBqIDwgc2FtcGxlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAvLyBhdm9pZCB0b28gc2Vuc3RpdmUgdG8gcm91bmRpbmcgcHJlY2lzaW9uXG4gICAgICAgIC8vZGVzYy5wdXNoKHNhbXBsZXNbaV0gPCBzYW1wbGVzW2pdKTtcbiAgICAgICAgZGVzYy5wdXNoKHNhbXBsZXNbaV0gPCBzYW1wbGVzW2pdICsgMC4wMDAxKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHKSB7XG4gICAgICAgICAgLy9pZiAod2luZG93LmRlYnVnLmtleWZyYW1lSW5kZXggPT09IDIgJiYgcCA9PT0gNDI0KSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBqID09PSAxKSB3aW5kb3cuZGVidWdDb21wYXJlRnJlYWtJbmRleCA9IDA7XG4gICAgICAgICAgICBjb25zdCBkQ29tcGFyZSA9IHdpbmRvdy5kZWJ1Z0NvbnRlbnQuY29tcGFyZUZyZWFrW3dpbmRvdy5kZWJ1Z0ZyZWFrU2FtcGxlSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZFNhbXBsZXMgPSB3aW5kb3cuZGVidWdDb250ZW50LmZyZWFrU2FtcGxlc1t3aW5kb3cuZGVidWdGcmVha1NhbXBsZUluZGV4XTtcbiAgICAgICAgICAgIGlmICghIWRlc2NbZGVzYy5sZW5ndGgtMV0gIT09ICEhIGRDb21wYXJlW3dpbmRvdy5kZWJ1Z0NvbXBhcmVGcmVha0luZGV4XSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBmcmVhayBjb21wYXJlXCIsIGksIGosIGRlc2NbZGVzYy5sZW5ndGgtMV0sICd2cycsIGRDb21wYXJlW3dpbmRvdy5kZWJ1Z0NvbXBhcmVGcmVha0luZGV4XSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNhbXBsZXNbaV0sIHNhbXBsZXNbal0sIGRTYW1wbGVzW2ldLCBkU2FtcGxlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuZGVidWdDb21wYXJlRnJlYWtJbmRleCArPSAxO1xuICAgICAgICAgIC8vfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZW5jb2RlIGRlc2NyaXB0b3JzIGluIGJpbmFyeSBmb3JtYXRcbiAgICAvLyAzNyBzYW1wbGVzID0gMSsyKzMrLi4uKzM2ID0gNjY2IGNvbXBhcmlzb25zID0gNjY2IGJpdHNcbiAgICAvLyBjZWlsKDY2Ni8zMikgPSA4NCBudW1iZXJzICgzMmJpdCBudW1iZXIpXG4gICAgY29uc3QgZGVzY0JpdCA9IFtdO1xuICAgIGxldCB0ZW1wID0gMDtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzYy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRlc2NbaV0pIHRlbXAgKz0gMTtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgICBpZiAoY291bnQgPT09IDMyKSB7XG4gICAgICAgIGRlc2NCaXQucHVzaCh0ZW1wKTtcbiAgICAgICAgdGVtcCA9IDA7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAgPSAodGVtcCA8PCAxKSA+Pj4gMDsgLy8gPj4+IDAgdG8gbWFrZSBpdCB1bnNpZ25lZFxuICAgICAgfVxuICAgIH1cbiAgICBkZXNjQml0LnB1c2godGVtcCk7XG5cbiAgICBkZXNjcmlwdG9ycy5wdXNoKGRlc2NCaXQpO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9ycztcbn1cblxuY29uc3QgX3NpbWlsYXJpdHlNYXRyaXggPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7c2NhbGUsIGFuZ2xlLCB4LCB5fSA9IG9wdGlvbnM7XG4gIGNvbnN0IGMgPSBzY2FsZSAqIE1hdGguY29zKGFuZ2xlKTtcbiAgY29uc3QgcyA9IHNjYWxlICogTWF0aC5zaW4oYW5nbGUpO1xuXG4gIGNvbnN0IFMgPSBbXG4gICAgYywgLXMsIHgsXG4gICAgcywgYywgeSxcbiAgICAwLCAwLCAxXG4gIF1cbiAgcmV0dXJuIFM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBleHRyYWN0XG59XG4iLCJjb25zdCB7ZG93bnNhbXBsZUJpbGluZWFyfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ltYWdlcy5qcycpO1xuXG4vLyBCdWlsZCBhIGd1c3NpYW4gcHlyYW1pZCwgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcbi8vXG4vLyBweXJhbWlkID0ge1xuLy8gICBudW1PY3RhdmVzLFxuLy8gICBudW1TY2FsZXNQZXJPY3RhdmVzLFxuLy8gICBpbWFnZXM6IFt7ZGF0YSwgd2lkdGgsIGhlaWdodH0sIHt9LCB7fV0gLy8gaW1hZ2UgYXQgb2N0YXZlIGkgYW5kIHNjYWxlIGogPSBpbWFnZXNbaSAqIG51bVNjYWxlc1Blck9jdGF2ZXMgKyBqXVxuLy8gfVxuXG5jb25zdCBidWlsZCA9ICh7aW1hZ2UsIG51bVNjYWxlc1Blck9jdGF2ZXMsIG1pblNpemV9KSA9PiB7XG4gIGNvbnN0IHtkYXRhLCB3aWR0aCwgaGVpZ2h0fSA9IGltYWdlO1xuXG4gIGNvbnN0IG51bU9jdGF2ZXMgPSBfbnVtT2N0YXZlcyh7d2lkdGgsIGhlaWdodCwgbWluU2l6ZTogbWluU2l6ZX0pO1xuXG4gIGNvbnN0IHB5cmFtaWRJbWFnZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PY3RhdmVzOyBpKyspIHtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcHlyYW1pZEltYWdlcy5wdXNoKF9hcHBseUZpbHRlcih7aW1hZ2V9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpcnN0IGltYWdlIG9mIGVhY2ggb2N0YXZlLCBkb3duc2FtcGxlIGZyb20gcHJldmlvdXNcbiAgICAgIHB5cmFtaWRJbWFnZXMucHVzaChkb3duc2FtcGxlQmlsaW5lYXIoe2ltYWdlOiBweXJhbWlkSW1hZ2VzW3B5cmFtaWRJbWFnZXMubGVuZ3RoLTFdfSkpO1xuICAgIH1cblxuICAgIC8vIHJlbWFpbmluZyBpbWFnZXMgb2Ygb2N0YXZlLCA0dGggb3JkZXIgYmlub21haWwgZnJvbSBwcmV2aW91c1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtU2NhbGVzUGVyT2N0YXZlcyAtIDE7IGorKykge1xuICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgcHlyYW1pZEltYWdlcy5wdXNoKF9hcHBseUZpbHRlcih7aW1hZ2U6IHB5cmFtaWRJbWFnZXNbcHlyYW1pZEltYWdlcy5sZW5ndGgtMV19KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGSVggTUU/XG4gICAgICAgIC8vIGluIGFydG9vbGtpdCwgaXQgYXBwbHkgZmlsdGVyIHR3aWNlLi4uLiAgaXMgaXQgYSBidWc/XG4gICAgICAgIHB5cmFtaWRJbWFnZXMucHVzaChfYXBwbHlGaWx0ZXIoe2ltYWdlOiBfYXBwbHlGaWx0ZXIoe2ltYWdlOiBweXJhbWlkSW1hZ2VzW3B5cmFtaWRJbWFnZXMubGVuZ3RoLTFdfSl9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcHlyYW1pZCA9IHtcbiAgICBudW1PY3RhdmVzOiBudW1PY3RhdmVzLFxuICAgIG51bVNjYWxlc1Blck9jdGF2ZXM6IG51bVNjYWxlc1Blck9jdGF2ZXMsXG4gICAgaW1hZ2VzOiBweXJhbWlkSW1hZ2VzXG4gIH1cbiAgcmV0dXJuIHB5cmFtaWQ7XG59XG5cbmNvbnN0IF9udW1PY3RhdmVzID0gKG9wdGlvbnMpID0+IHtcbiAgbGV0IHt3aWR0aCwgaGVpZ2h0LCBtaW5TaXplfSA9IG9wdGlvbnM7XG4gIGxldCBudW1PY3RhdmVzID0gMDtcbiAgd2hpbGUgKHdpZHRoID49IG1pblNpemUgJiYgaGVpZ2h0ID49IG1pblNpemUpIHtcbiAgICB3aWR0aCAvPSAyO1xuICAgIGhlaWdodCAvPSAyO1xuICAgIG51bU9jdGF2ZXMrKztcbiAgfVxuICByZXR1cm4gbnVtT2N0YXZlcztcbn1cblxuLy80dGggb3JkZXIgYmlub21pYWxcbmNvbnN0IF9hcHBseUZpbHRlciA9ICh7aW1hZ2V9KSA9PiB7XG4gIGNvbnN0IHtkYXRhLCB3aWR0aCwgaGVpZ2h0fSA9IGltYWdlO1xuICBpZiAod2lkdGggPCA1KSB7Y29uc29sZS5sb2coXCJpbWFnZSB0b28gc21hbGxcIik7IHJldHVybjt9XG4gIGlmIChoZWlnaHQgPCA1KSB7Y29uc29sZS5sb2coXCJpbWFnZSB0b28gc21hbGxcIik7IHJldHVybjt9XG5cbiAgY29uc3QgdGVtcCA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xuXG4gIC8vIGFwcGx5IGhvcml6b250YWwgZmlsdGVyLiBib3JkZXIgaXMgY29tcHV0ZWQgYnkgZXh0ZW5kaW5nIGJvcmRlciBwaXhlbFxuICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwb3MgPSBqICogd2lkdGggKyBpO1xuXG4gICAgICB0ZW1wW3Bvc10gPSBkYXRhW2oqd2lkdGggKyBNYXRoLm1heChpLTIsMCldICtcbiAgICAgICAgICAgICAgICAgIGRhdGFbaip3aWR0aCArIE1hdGgubWF4KGktMSwwKV0gKiA0ICtcbiAgICAgICAgICAgICAgICAgIGRhdGFbaip3aWR0aCArIGldICogNiArXG4gICAgICAgICAgICAgICAgICBkYXRhW2oqd2lkdGggKyBNYXRoLm1pbihpKzEsd2lkdGgtMSldICogNCArXG4gICAgICAgICAgICAgICAgICBkYXRhW2oqd2lkdGggKyBNYXRoLm1pbihpKzIsd2lkdGgtMSldO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRzdCA9IG5ldyBGbG9hdDMyQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAvLyBhcHBseSB2ZXJ0aWNhbCBmaWx0ZXIuIGJvcmRlciBpcyBjb21wdXRlZCBieSBleHRlbmRpbmcgYm9yZGVyIHBpeGVsXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgIGNvbnN0IHBvcyA9IGogKiB3aWR0aCArIGk7XG5cbiAgICAgIGRzdFtwb3NdID0gdGVtcFtNYXRoLm1heChqLTIsMCkgKiB3aWR0aCArIGldICtcbiAgICAgICAgICAgICAgICAgdGVtcFtNYXRoLm1heChqLTEsMCkgKiB3aWR0aCArIGldICogNCArXG4gICAgICAgICAgICAgICAgIHRlbXBbaiAqIHdpZHRoICsgaV0gKiA2ICtcbiAgICAgICAgICAgICAgICAgdGVtcFtNYXRoLm1pbihqKzEsaGVpZ2h0LTEpICogd2lkdGggKyBpXSAqIDQgK1xuICAgICAgICAgICAgICAgICB0ZW1wW01hdGgubWluKGorMixoZWlnaHQtMSkgKiB3aWR0aCArIGldO1xuXG4gICAgICAvLyBhdmVyYWdlIG9mICgxKzQrNis0KzEpICogKDErNCs2KzQrMSkgPSAyNTYgbnVtYmVyc1xuICAgICAgZHN0W3Bvc10gPSBkc3RbcG9zXSAvIDI1Ni4wO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge2RhdGE6IGRzdCwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVpbGRcbn07XG4iLCIvLyBGYXN0IGNvbXB1dGF0aW9uIG9uIG51bWJlciBvZiBiaXQgc2V0c1xuLy8gUmVmOiBodHRwczovL2dyYXBoaWNzLnN0YW5mb3JkLmVkdS9+c2VhbmRlci9iaXRoYWNrcy5odG1sI0NvdW50Qml0c1NldFBhcmFsbGVsXG5jb25zdCBjb21wdXRlID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge3YxLCB2Mn0gPSBvcHRpb25zO1xuICBsZXQgZCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdjEubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgeCA9ICh2MVtpXSBeIHYyW2ldKSA+Pj4gMDtcbiAgICBkICs9IGJpdENvdW50KHgpO1xuICB9XG4gIHJldHVybiBkO1xufVxuXG5jb25zdCBiaXRDb3VudCA9ICh2KSA9PiB7XG4gIHZhciBjID0gdiAtICgodiA+PiAxKSAmIDB4NTU1NTU1NTUpO1xuICBjID0gKChjID4+IDIpICYgMHgzMzMzMzMzMykgKyAoYyAmIDB4MzMzMzMzMzMpO1xuICBjID0gKChjID4+IDQpICsgYykgJiAweDBGMEYwRjBGO1xuICBjID0gKChjID4+IDgpICsgYykgJiAweDAwRkYwMEZGO1xuICBjID0gKChjID4+IDE2KSArIGMpICYgMHgwMDAwRkZGRjtcbiAgcmV0dXJuIGM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wdXRlXG59O1xuIiwiY29uc3Qge2NvbXB1dGU6IGhhbW1pbmdDb21wdXRlfSA9IHJlcXVpcmUoJy4vaGFtbWluZy1kaXN0YW5jZS5qcycpO1xuY29uc3Qge2NyZWF0ZVJhbmRvbWl6ZXJ9ID0gcmVxdWlyZSgnLi4vdXRpbHMvcmFuZG9taXplci5qcycpO1xuXG5jb25zdCBNSU5fRkVBVFVSRV9QRVJfTk9ERSA9IDE2O1xuY29uc3QgTlVNX0FTU0lHTk1FTlRfSFlQT1RIRVNFUyA9ICAxMjg7XG5jb25zdCBOVU1fQ0VOVEVSUyA9IDg7XG5cbi8vIGttZWRvaWRzIGNsdXN0ZXJpbmcgb2YgcG9pbnRzLCB3aXRoIGhhbW1pbmcgZGlzdGFuY2Ugb2YgRlJFQUsgZGVzY3JpcHRvclxuLy9cbi8vIG5vZGUgPSB7XG4vLyAgIGlzTGVhZjogYm9vbCxcbi8vICAgY2hpbGRyZW46IFtdLCBsaXN0IG9mIGNoaWxkcmVuIG5vZGVcbi8vICAgcG9pbnRJbmRleGVzOiBbXSwgbGlzdCBvZiBpbnQsIHBvaW50IGluZGV4ZXNcbi8vICAgY2VudGVyUG9pbnRJbmRleDogaW50XG4vLyB9XG5jb25zdCBidWlsZCA9ICh7cG9pbnRzfSkgPT4ge1xuICBjb25zdCBwb2ludEluZGV4ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBwb2ludEluZGV4ZXMucHVzaChpKTtcbiAgfVxuXG4gIGNvbnN0IHJhbmRvbWl6ZXIgPSBjcmVhdGVSYW5kb21pemVyKCk7XG5cbiAgY29uc3Qgcm9vdE5vZGUgPSBfYnVpbGQoe3BvaW50czogcG9pbnRzLCBwb2ludEluZGV4ZXM6IHBvaW50SW5kZXhlcywgY2VudGVyUG9pbnRJbmRleDogbnVsbCwgcmFuZG9taXplcn0pO1xuICByZXR1cm4ge3Jvb3ROb2RlfTtcbn1cblxuLy8gcmVjdXJzaXZlIGJ1aWxkIGhpZXJhcmNoeSBjbHVzdGVyc1xuY29uc3QgX2J1aWxkID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge3BvaW50cywgcG9pbnRJbmRleGVzLCBjZW50ZXJQb2ludEluZGV4LCByYW5kb21pemVyfSA9IG9wdGlvbnM7XG5cbiAgbGV0IGlzTGVhZiA9IGZhbHNlO1xuXG4gIGlmIChwb2ludEluZGV4ZXMubGVuZ3RoIDw9IE5VTV9DRU5URVJTIHx8IHBvaW50SW5kZXhlcy5sZW5ndGggPD0gTUlOX0ZFQVRVUkVfUEVSX05PREUpIHtcbiAgICBpc0xlYWYgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgY2x1c3RlcnMgPSB7fTtcbiAgaWYgKCFpc0xlYWYpIHtcbiAgICAvLyBjb21wdXRlIGNsdXN0ZXJzXG4gICAgY29uc3QgYXNzaWdubWVudCA9IF9jb21wdXRlS01lZG9pZHMoe3BvaW50cywgcG9pbnRJbmRleGVzLCByYW5kb21pemVyfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2lnbm1lbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjbHVzdGVyc1twb2ludEluZGV4ZXNbYXNzaWdubWVudFtpXV1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2x1c3RlcnNbcG9pbnRJbmRleGVzW2Fzc2lnbm1lbnRbaV1dXSA9IFtdO1xuICAgICAgfVxuICAgICAgY2x1c3RlcnNbcG9pbnRJbmRleGVzW2Fzc2lnbm1lbnRbaV1dXS5wdXNoKHBvaW50SW5kZXhlc1tpXSk7XG4gICAgfVxuICB9XG4gIGlmIChPYmplY3Qua2V5cyhjbHVzdGVycykubGVuZ3RoID09PSAxKSB7XG4gICAgaXNMZWFmID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IG5vZGUgPSB7XG4gICAgY2VudGVyUG9pbnRJbmRleDogY2VudGVyUG9pbnRJbmRleFxuICB9XG5cbiAgaWYgKGlzTGVhZikge1xuICAgIG5vZGUubGVhZiA9IHRydWU7XG4gICAgbm9kZS5wb2ludEluZGV4ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50SW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5wb2ludEluZGV4ZXMucHVzaChwb2ludEluZGV4ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8vIHJlY3Vyc2l2ZSBidWlsZCBjaGlsZHJlblxuICBub2RlLmxlYWYgPSBmYWxzZTtcbiAgbm9kZS5jaGlsZHJlbiA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGNsdXN0ZXJzKS5mb3JFYWNoKChjZW50ZXJJbmRleCkgPT4ge1xuICAgIG5vZGUuY2hpbGRyZW4ucHVzaChfYnVpbGQoe3BvaW50czogcG9pbnRzLCBwb2ludEluZGV4ZXM6IGNsdXN0ZXJzW2NlbnRlckluZGV4XSwgY2VudGVyUG9pbnRJbmRleDogY2VudGVySW5kZXgsIHJhbmRvbWl6ZXJ9KSk7XG4gIH0pO1xuICByZXR1cm4gbm9kZTtcbn1cblxuX2NvbXB1dGVLTWVkb2lkcyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtwb2ludHMsIHBvaW50SW5kZXhlcywgcmFuZG9taXplcn0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHJhbmRvbVBvaW50SW5kZXhlcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50SW5kZXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJhbmRvbVBvaW50SW5kZXhlcy5wdXNoKGkpO1xuICB9XG5cbiAgbGV0IGJlc3RTdW1EID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gIGxldCBiZXN0QXNzaWdubWVudEluZGV4ID0gLTE7XG5cbiAgY29uc3QgYXNzaWdubWVudHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fQVNTSUdOTUVOVF9IWVBPVEhFU0VTOyBpKyspIHtcbiAgICByYW5kb21pemVyLmFycmF5U2h1ZmZsZSh7YXJyOiByYW5kb21Qb2ludEluZGV4ZXMsIHNhbXBsZVNpemU6IE5VTV9DRU5URVJTfSk7XG5cbiAgICBsZXQgc3VtRCA9IDA7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9pbnRJbmRleGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICBsZXQgYmVzdEQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgTlVNX0NFTlRFUlM7IGsrKykge1xuICAgICAgICBjb25zdCBjZW50ZXJJbmRleCA9IHBvaW50SW5kZXhlc1tyYW5kb21Qb2ludEluZGV4ZXNba11dO1xuICAgICAgICBjb25zdCBkID0gaGFtbWluZ0NvbXB1dGUoe3YxOiBwb2ludHNbcG9pbnRJbmRleGVzW2pdXS5kZXNjcmlwdG9ycywgdjI6IHBvaW50c1tjZW50ZXJJbmRleF0uZGVzY3JpcHRvcnN9KTtcbiAgICAgICAgaWYgKGQgPCBiZXN0RCkge1xuICAgICAgICAgIGFzc2lnbm1lbnRbal0gPSByYW5kb21Qb2ludEluZGV4ZXNba107XG4gICAgICAgICAgYmVzdEQgPSBkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzdW1EICs9IGJlc3REO1xuICAgIH1cbiAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuXG4gICAgaWYgKHN1bUQgPCBiZXN0U3VtRCkge1xuICAgICAgYmVzdFN1bUQgPSBzdW1EO1xuICAgICAgYmVzdEFzc2lnbm1lbnRJbmRleCA9IGk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhc3NpZ25tZW50c1tiZXN0QXNzaWdubWVudEluZGV4XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJ1aWxkLFxufTtcblxuIiwiY29uc3Qge2NyZWF0ZVJhbmRvbWl6ZXJ9ID0gcmVxdWlyZSgnLi4vdXRpbHMvcmFuZG9taXplci5qcycpO1xuY29uc3Qge3F1YWRyaWxhdGVyYWxDb252ZXgsIG1hdHJpeEludmVyc2UzMywgc21hbGxlc3RUcmlhbmdsZUFyZWEsIG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzLCBjaGVja1RocmVlUG9pbnRzQ29uc2lzdGVudCwgY2hlY2tGb3VyUG9pbnRzQ29uc2lzdGVudCwgZGV0ZXJtaW5hbnR9ID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2VvbWV0cnkuanMnKTtcblxuY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAwMDAwMDAwMTtcbmNvbnN0IFNRUlQyID0gMS40MTQyMTM1NjIzNzMwOTUwNDg4MDtcbmNvbnN0IEhPTU9HUkFQSFlfREVGQVVMVF9DQVVDSFlfU0NBTEUgPSAwLjAxO1xuY29uc3QgSE9NT0dSQVBIWV9ERUZBVUxUX05VTV9IWVBPVEhFU0VTID0gMTAyNDtcbmNvbnN0IEhPTU9HUkFQSFlfREVGQVVMVF9NQVhfVFJJQUxTID0gMTA2NDtcbmNvbnN0IEhPTU9HUkFQSFlfREVGQVVMVF9DSFVOS19TSVpFID0gNTA7XG5cbi8vIHRlc3RQb2ludHMgaXMgZm91ciBjb3JuZXJzIG9mIGtleWZyYW1lXG5jb25zdCBjb21wdXRlSG9tb2dyYXBoeSA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtzcmNQb2ludHMsIGRzdFBvaW50cywga2V5ZnJhbWV9ID0gb3B0aW9ucztcblxuICBjb25zdCB0ZXN0UG9pbnRzID0gW1xuICAgIFswLCAwXSxcbiAgICBba2V5ZnJhbWUud2lkdGgsIDBdLFxuICAgIFtrZXlmcmFtZS53aWR0aCwga2V5ZnJhbWUuaGVpZ2h0XSxcbiAgICBbMCwga2V5ZnJhbWUuaGVpZ2h0XVxuICBdXG5cbiAgY29uc3Qgc2FtcGxlU2l6ZSA9IDQ7IC8vIHVzZSBmb3VyIHBvaW50cyB0byBjb21wdXRlIGhvbW9ncmFwaHlcbiAgaWYgKHNyY1BvaW50cy5sZW5ndGggPCBzYW1wbGVTaXplKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzY2FsZSA9IEhPTU9HUkFQSFlfREVGQVVMVF9DQVVDSFlfU0NBTEU7XG4gIGNvbnN0IG9uZU92ZXJTY2FsZTIgPSAxLjAgLyAoc2NhbGUgKiBzY2FsZSk7XG4gIGNvbnN0IGNodWNrU2l6ZSA9IE1hdGgubWluKEhPTU9HUkFQSFlfREVGQVVMVF9DSFVOS19TSVpFLCBzcmNQb2ludHMubGVuZ3RoKTtcblxuICBjb25zdCByYW5kb21pemVyID0gY3JlYXRlUmFuZG9taXplcigpO1xuXG4gIGNvbnN0IHBlcm0gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBwZXJtW2ldID0gaTtcbiAgfVxuXG4gIHJhbmRvbWl6ZXIuYXJyYXlTaHVmZmxlKHthcnI6IHBlcm0sIHNhbXBsZVNpemU6IHBlcm0ubGVuZ3RofSk7XG5cbiAgLy8gYnVpbGQgbnVtZXJvdXMgaHlwb3RoZXNlcyBieSByYW5kb21pbmcgZHJhdyBmb3VyIHBvaW50c1xuICAvLyBUT0RPOiBvcHRpbWl6ZTogaWYgbnVtYmVyIG9mIHBvaW50cyBpcyBsZXNzIHRoYW4gY2VydGFpbiBudW1iZXIsIGNhbiBicnV0ZSBmb3JjZSBhbGwgY29tYmluYXRpb25zXG4gIGxldCB0cmlhbCA9IDA7XG4gIGNvbnN0IEhzID0gW107XG4gIHdoaWxlICh0cmlhbCA8IEhPTU9HUkFQSFlfREVGQVVMVF9NQVhfVFJJQUxTICYmIEhzLmxlbmd0aCA8IEhPTU9HUkFQSFlfREVGQVVMVF9OVU1fSFlQT1RIRVNFUykge1xuXG4gICAgcmFuZG9taXplci5hcnJheVNodWZmbGUoe2FycjogcGVybSwgc2FtcGxlU2l6ZTogc2FtcGxlU2l6ZX0pO1xuXG4gICAgdHJpYWwgKz0xO1xuXG4gICAgaWYgKCFjaGVja0ZvdXJQb2ludHNDb25zaXN0ZW50KFxuICAgICAgc3JjUG9pbnRzW3Blcm1bMF1dLCBzcmNQb2ludHNbcGVybVsxXV0sIHNyY1BvaW50c1twZXJtWzJdXSwgc3JjUG9pbnRzW3Blcm1bM11dLFxuICAgICAgZHN0UG9pbnRzW3Blcm1bMF1dLCBkc3RQb2ludHNbcGVybVsxXV0sIGRzdFBvaW50c1twZXJtWzJdXSwgZHN0UG9pbnRzW3Blcm1bM11dKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgSCA9IF9zb2x2ZUhvbW9ncmFwaHlGb3VyUG9pbnRzKHtcbiAgICAgIHNyY1BvaW50czogW3NyY1BvaW50c1twZXJtWzBdXSwgc3JjUG9pbnRzW3Blcm1bMV1dLCBzcmNQb2ludHNbcGVybVsyXV0sIHNyY1BvaW50c1twZXJtWzNdXV0sXG4gICAgICBkc3RQb2ludHM6IFtkc3RQb2ludHNbcGVybVswXV0sIGRzdFBvaW50c1twZXJtWzFdXSwgZHN0UG9pbnRzW3Blcm1bMl1dLCBkc3RQb2ludHNbcGVybVszXV1dLFxuICAgIH0pO1xuXG4gICAgaWYgKEggPT09IG51bGwpIGNvbnRpbnVlO1xuXG4gICAgaWYoIV9jaGVja0hvbW9ncmFwaHlQb2ludHNHZW9tZXRyaWNhbGx5Q29uc2lzdGVudCh7SCwgdGVzdFBvaW50c30pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBIcy5wdXNoKEgpO1xuICB9XG5cbiAgaWYgKEhzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgLy8gcGljayB0aGUgYmVzdCBoeXBvdGhlc2lzXG4gIGNvbnN0IGh5cG90aGVzZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBIcy5sZW5ndGg7IGkrKykge1xuICAgIGh5cG90aGVzZXMucHVzaCh7XG4gICAgICBIOiBIc1tpXSxcbiAgICAgIGNvc3Q6IDBcbiAgICB9KVxuICB9XG5cbiAgbGV0IGN1ckNodWNrU2l6ZSA9IGNodWNrU2l6ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmNQb2ludHMubGVuZ3RoICYmIGh5cG90aGVzZXMubGVuZ3RoID4gMjsgaSArPSBjdXJDaHVja1NpemUpIHtcbiAgICBjdXJDaHVja1NpemUgPSBNYXRoLm1pbihjaHVja1NpemUsIHNyY1BvaW50cy5sZW5ndGggLSBpKTtcbiAgICBsZXQgY2h1Y2tFbmQgPSBpICsgY3VyQ2h1Y2tTaXplO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoeXBvdGhlc2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICBmb3IgKGxldCBrID0gaTsgayA8IGNodWNrRW5kOyBrKyspIHtcbiAgICAgICAgY29uc3QgY29zdCA9IF9jYXVjaHlQcm9qZWN0aXZlUmVwcm9qZWN0aW9uQ29zdCh7SDogaHlwb3RoZXNlc1tqXS5ILCBzcmNQb2ludDogc3JjUG9pbnRzW2tdLCBkc3RQb2ludDogZHN0UG9pbnRzW2tdLCBvbmVPdmVyU2NhbGUyfSk7XG4gICAgICAgIGh5cG90aGVzZXNbal0uY29zdCArPSBjb3N0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGh5cG90aGVzZXMuc29ydCgoaDEsIGgyKSA9PiB7cmV0dXJuIGgxLmNvc3QgLSBoMi5jb3N0fSk7XG4gICAgaHlwb3RoZXNlcy5zcGxpY2UoLU1hdGguZmxvb3IoKGh5cG90aGVzZXMubGVuZ3RoKzEpLzIpKTsgLy8ga2VlcCB0aGUgYmVzdCBoYWxmXG4gIH1cblxuICBsZXQgYmVzdEluZGV4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBoeXBvdGhlc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGh5cG90aGVzZXNbaV0uY29zdCA8IGh5cG90aGVzZXNbYmVzdEluZGV4XS5jb3N0KSBiZXN0SW5kZXggPSBpO1xuICB9XG5cbiAgY29uc3QgZmluYWxIID0gX25vcm1hbGl6ZUhvbW9ncmFwaHkoe2luSDogaHlwb3RoZXNlc1tiZXN0SW5kZXhdLkh9KTtcblxuICBpZiAoIV9jaGVja0hldXJpc3RpY3Moe0g6IGZpbmFsSCwgdGVzdFBvaW50cywga2V5ZnJhbWV9KSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBmaW5hbEg7XG59XG5cbmNvbnN0IF9jaGVja0hldXJpc3RpY3MgPSAoe0gsIHRlc3RQb2ludHMsIGtleWZyYW1lfSkgPT4ge1xuICBjb25zdCBISW52ID0gbWF0cml4SW52ZXJzZTMzKEgsIDAuMDAwMDEpO1xuICAvLyBjb25zb2xlLmxvZyhcImZpbmFsIEggSW52OiBcIiwgSEludik7XG4gIGlmIChISW52ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgbXAgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RQb2ludHMubGVuZ3RoOyBpKyspIHsgLy8gNCB0ZXN0IHBvaW50cywgY29ybmVyIG9mIGtleWZyYW1lXG4gICAgbXAucHVzaChtdWx0aXBseVBvaW50SG9tb2dyYXBoeUluaG9tb2dlbm91cyh0ZXN0UG9pbnRzW2ldLCBISW52KSk7XG4gIH1cbiAgY29uc3Qgc21hbGxBcmVhID0gc21hbGxlc3RUcmlhbmdsZUFyZWEobXBbMF0sIG1wWzFdLCBtcFsyXSwgbXBbM10pO1xuXG4gIGlmIChzbWFsbEFyZWEgPCBrZXlmcmFtZS53aWR0aCAqIGtleWZyYW1lLmhlaWdodCAqIDAuMDAwMSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICghcXVhZHJpbGF0ZXJhbENvbnZleChtcFswXSwgbXBbMV0sIG1wWzJdLCBtcFszXSkpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgX25vcm1hbGl6ZUhvbW9ncmFwaHkgPSAoe2luSH0pID0+IHtcbiAgY29uc3Qgb25lT3ZlciA9IDEuMCAvIGluSFs4XTtcblxuICBjb25zdCBIID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgSFtpXSA9IGluSFtpXSAqIG9uZU92ZXI7XG4gIH1cbiAgSFs4XSA9IDEuMDtcbiAgcmV0dXJuIEg7XG59XG5cbmNvbnN0IF9jYXVjaHlQcm9qZWN0aXZlUmVwcm9qZWN0aW9uQ29zdCA9ICh7SCwgc3JjUG9pbnQsIGRzdFBvaW50LCBvbmVPdmVyU2NhbGUyfSkgPT4ge1xuICBjb25zdCB4ID0gbXVsdGlwbHlQb2ludEhvbW9ncmFwaHlJbmhvbW9nZW5vdXMoc3JjUG9pbnQsIEgpO1xuICBjb25zdCBmID1bXG4gICAgeFswXSAtIGRzdFBvaW50WzBdLFxuICAgIHhbMV0gLSBkc3RQb2ludFsxXVxuICBdO1xuICByZXR1cm4gTWF0aC5sb2coMSArIChmWzBdKmZbMF0rZlsxXSpmWzFdKSAqIG9uZU92ZXJTY2FsZTIpO1xufVxuXG5jb25zdCBfY2hlY2tIb21vZ3JhcGh5UG9pbnRzR2VvbWV0cmljYWxseUNvbnNpc3RlbnQgPSAoe0gsIHRlc3RQb2ludHN9KSA9PiB7XG4gIGNvbnN0IG1hcHBlZFBvaW50cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBwZWRQb2ludHNbaV0gPSBtdWx0aXBseVBvaW50SG9tb2dyYXBoeUluaG9tb2dlbm91cyh0ZXN0UG9pbnRzW2ldLCBIKTtcbiAgICAvL2NvbnNvbGUubG9nKFwibWFwXCIsIHRlc3RQb2ludHNbaV0sIG1hcHBlZFBvaW50c1tpXSwgSCk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0UG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaTEgPSBpO1xuICAgIGNvbnN0IGkyID0gKGkrMSkgJSB0ZXN0UG9pbnRzLmxlbmd0aDtcbiAgICBjb25zdCBpMyA9IChpKzIpICUgdGVzdFBvaW50cy5sZW5ndGg7XG4gICAgaWYgKCFjaGVja1RocmVlUG9pbnRzQ29uc2lzdGVudChcbiAgICAgIHRlc3RQb2ludHNbaTFdLCB0ZXN0UG9pbnRzW2kyXSwgdGVzdFBvaW50c1tpM10sXG4gICAgICBtYXBwZWRQb2ludHNbaTFdLCBtYXBwZWRQb2ludHNbaTJdLCBtYXBwZWRQb2ludHNbaTNdKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBDb25kaXRpb24gZm91ciAyRCBwb2ludHMgc3VjaCB0aGF0IHRoZSBtZWFuIGlzIHplcm8gYW5kIHRoZSBzdGFuZGFyZCBkZXZpYXRpb24gaXMgc3FydCgyKS5cbmNvbnN0IF9jb25kaXRpb240UG9pbnRzMmQgPSAoe3gxLCB4MiwgeDMsIHg0fSkgPT4ge1xuICBjb25zdCBtdSA9IFtdO1xuICBjb25zdCBkMSA9IFtdO1xuICBjb25zdCBkMiA9IFtdO1xuICBjb25zdCBkMyA9IFtdO1xuICBjb25zdCBkNCA9IFtdO1xuXG4gIG11WzBdID0gKHgxWzBdK3gyWzBdK3gzWzBdK3g0WzBdKS80O1xuICBtdVsxXSA9ICh4MVsxXSt4MlsxXSt4M1sxXSt4NFsxXSkvNDtcblxuICBkMVswXSA9IHgxWzBdLW11WzBdO1xuICBkMVsxXSA9IHgxWzFdLW11WzFdO1xuICBkMlswXSA9IHgyWzBdLW11WzBdO1xuICBkMlsxXSA9IHgyWzFdLW11WzFdO1xuICBkM1swXSA9IHgzWzBdLW11WzBdO1xuICBkM1sxXSA9IHgzWzFdLW11WzFdO1xuICBkNFswXSA9IHg0WzBdLW11WzBdO1xuICBkNFsxXSA9IHg0WzFdLW11WzFdO1xuXG4gIGNvbnN0IGRzMSA9IE1hdGguc3FydChkMVswXSpkMVswXStkMVsxXSpkMVsxXSk7XG4gIGNvbnN0IGRzMiA9IE1hdGguc3FydChkMlswXSpkMlswXStkMlsxXSpkMlsxXSk7XG4gIGNvbnN0IGRzMyA9IE1hdGguc3FydChkM1swXSpkM1swXStkM1sxXSpkM1sxXSk7XG4gIGNvbnN0IGRzNCA9IE1hdGguc3FydChkNFswXSpkNFswXStkNFsxXSpkNFsxXSk7XG4gIGNvbnN0IGQgPSAoZHMxK2RzMitkczMrZHM0KS80O1xuXG4gIGlmIChkID09IDApIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHMgPSAoMS4wL2QpKlNRUlQyO1xuXG4gIGNvbnN0IHhwMSA9IFtdO1xuICBjb25zdCB4cDIgPSBbXTtcbiAgY29uc3QgeHAzID0gW107XG4gIGNvbnN0IHhwNCA9IFtdO1xuXG4gIHhwMVswXSA9IGQxWzBdKnM7XG4gIHhwMVsxXSA9IGQxWzFdKnM7XG4gIHhwMlswXSA9IGQyWzBdKnM7XG4gIHhwMlsxXSA9IGQyWzFdKnM7XG4gIHhwM1swXSA9IGQzWzBdKnM7XG4gIHhwM1sxXSA9IGQzWzFdKnM7XG4gIHhwNFswXSA9IGQ0WzBdKnM7XG4gIHhwNFsxXSA9IGQ0WzFdKnM7XG5cbiAgcmV0dXJuIHt4cDEsIHhwMiwgeHAzLCB4cDQsIHMsIHQ6IG11fTtcbn1cblxuY29uc3QgX3NvbHZlSG9tb2dyYXBoeUZvdXJQb2ludHMgPSAoe3NyY1BvaW50cywgZHN0UG9pbnRzfSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCArPSAxO1xuICAgIGNvbnN0IGRIb21vZ3JhcGh5ID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XTtcbiAgICBjb25zdCB7eDEsIHgyLCB4MywgeDQsIHhwMSwgeHAyLCB4cDMsIHhwNH0gPSBkSG9tb2dyYXBoeTtcbiAgICBjb25zdCBsMSA9IFtzcmNQb2ludHNbMF0sc3JjUG9pbnRzWzFdLHNyY1BvaW50c1syXSxzcmNQb2ludHNbM10sZHN0UG9pbnRzWzBdLGRzdFBvaW50c1sxXSxkc3RQb2ludHNbMl0sZHN0UG9pbnRzWzNdXTtcbiAgICBjb25zdCBsMiA9IFt4MSwgeDIsIHgzLCB4NCwgeHAxLCB4cDIsIHhwMywgeHA0XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGwxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXdpbmRvdy5jbXAobDFbaV1bMF0sIGwyW2ldWzBdKSB8fCAhd2luZG93LmNtcChsMVtpXVsxXSwgbDJbaV1bMV0pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJTkNPUlJFQ1QgaG9tb2dyYXBoeSBwb2ludHMnLCB3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4LCBpLCBsMVtpXSwgbDJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlczEgPSBfY29uZGl0aW9uNFBvaW50czJkKHt4MTogc3JjUG9pbnRzWzBdLCB4Mjogc3JjUG9pbnRzWzFdLCB4Mzogc3JjUG9pbnRzWzJdLCB4NDogc3JjUG9pbnRzWzNdfSk7XG5cbiAgaWYgKHJlczEgPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICBjb25zdCBkSG9tb2dyYXBoeSA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF07XG4gICAgY29uc3Qge3gxcCwgeDJwLCB4M3AsIHg0cCwgdCwgc30gPSBkSG9tb2dyYXBoeTtcbiAgICBjb25zdCBsMSA9IFtyZXMxLnhwMSwgcmVzMS54cDIsIHJlczEueHAzLCByZXMxLnhwNCwgcmVzMS50XTtcbiAgICBjb25zdCBsMiA9IFt4MXAsIHgycCwgeDNwLCB4NHAsIHRdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghd2luZG93LmNtcChsMVtpXVswXSwgbDJbaV1bMF0pIHx8ICF3aW5kb3cuY21wKGwxW2ldWzFdLCBsMltpXVsxXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCBob21vZ3JhcGh5IHJlczEnLCB3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4LCBpLCBsMVtpXSwgbDJbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbXAocmVzMS5zLCBzKSkge1xuICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCBob21vZ3JhcGh5IHJlczEgUycsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIHJlczEucywgcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcmVzMiA9IF9jb25kaXRpb240UG9pbnRzMmQoe3gxOiBkc3RQb2ludHNbMF0sIHgyOiBkc3RQb2ludHNbMV0sIHgzOiBkc3RQb2ludHNbMl0sIHg0OiBkc3RQb2ludHNbM119KTtcbiAgaWYgKHJlczIgPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICBjb25zdCBkSG9tb2dyYXBoeSA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF07XG4gICAgY29uc3Qge3hwMXAsIHhwMnAsIHhwM3AsIHhwNHAsIHRwLCBzcH0gPSBkSG9tb2dyYXBoeTtcbiAgICBjb25zdCBsMSA9IFtyZXMyLnhwMSwgcmVzMi54cDIsIHJlczIueHAzLCByZXMyLnhwNCwgcmVzMi50XTtcbiAgICBjb25zdCBsMiA9IFt4cDFwLCB4cDJwLCB4cDNwLCB4cDRwLCB0cF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsMS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF3aW5kb3cuY21wKGwxW2ldWzBdLCBsMltpXVswXSkgfHwgIXdpbmRvdy5jbXAobDFbaV1bMV0sIGwyW2ldWzFdKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnSU5DT1JSRUNUIGhvbW9ncmFwaHkgcmVzMScsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIGksIGwxW2ldLCBsMltpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghd2luZG93LmNtcChyZXMyLnMsIHNwKSkge1xuICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCBob21vZ3JhcGh5IHJlczEgUycsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIGksIHJlczIucywgc3ApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEhuID0gX3NvbHZlSG9tb2dyYXBoeTRQb2ludHNJbmhvbW9nZW5vdXMoe1xuICAgIHgxOiByZXMxLnhwMSwgeDI6IHJlczEueHAyLCB4MzogcmVzMS54cDMsIHg0OiByZXMxLnhwNCxcbiAgICB4cDE6IHJlczIueHAxLCB4cDI6IHJlczIueHAyLCB4cDM6IHJlczIueHAzLCB4cDQ6IHJlczIueHA0LFxuICB9KTtcblxuICBpZiAoSG4gPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIGlmIChNYXRoLmFicyhkZXRlcm1pbmFudChIbikpIDwgMC4wMDAwMSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgIGNvbnN0IGRIb21vZ3JhcGh5ID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleF0uaG9tb2dyYXBoeVt3aW5kb3cuZGVidWcuaG9tb2dyYXBoeUluZGV4XTtcbiAgICBjb25zdCBkSG4gPSBkSG9tb2dyYXBoeS5IbjtcbiAgICBpZiAoIXdpbmRvdy5jbXBBcnJheShIbiwgZEhuLCAwLjAwMSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIEhuXCIsIHdpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXgsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIEhuLCBkSG4pO1xuICAgIH1cbiAgICBjb25zdCBkRGV0SCA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF0uZGV0SDtcbiAgICBpZiAoIXdpbmRvdy5jbXAoZGV0ZXJtaW5hbnQoSG4pLCBkRGV0SCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGRldGVybWluYW50XCIsIGRldGVybWluYW50KEhuKSwgZERldEgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEggPSBfZGVub21hbGl6ZUhvbW9ncmFwaHkoe0g6IEhuLCBzOiByZXMxLnMsIHQ6IHJlczEudCwgc3A6IHJlczIucywgdHA6IHJlczIudH0pO1xuXG4gIHJldHVybiBIO1xufVxuXG4vLyBkZW5vcm1hbGl6ZSBob21vZ3JhcGh5XG4vLyBIcCA9IGludihUcCkqSCpUXG5jb25zdCBfZGVub21hbGl6ZUhvbW9ncmFwaHkgPSAoe0gsIHMsIHQsIHNwLCB0cH0pID0+IHtcbiAgY29uc3QgYSA9IEhbNl0qdHBbMF07XG4gIGNvbnN0IGIgPSBIWzddKnRwWzBdO1xuICBjb25zdCBjID0gSFswXS9zcDtcbiAgY29uc3QgZCA9IEhbMV0vc3A7XG4gIGNvbnN0IGFwYyA9IGErYztcbiAgY29uc3QgYnBkID0gYitkO1xuXG4gIGNvbnN0IGUgPSBIWzZdKnRwWzFdO1xuICBjb25zdCBmID0gSFs3XSp0cFsxXTtcbiAgY29uc3QgZyA9IEhbM10vc3A7XG4gIGNvbnN0IGggPSBIWzRdL3NwO1xuICBjb25zdCBlcGcgPSBlK2c7XG4gIGNvbnN0IGZwaCA9IGYraDtcblxuICBjb25zdCBzdHggPSBzKnRbMF07XG4gIGNvbnN0IHN0eSA9IHMqdFsxXTtcblxuICBjb25zdCBIcCA9IFtdO1xuICBIcFswXSA9IHMqYXBjO1xuICBIcFsxXSA9IHMqYnBkO1xuICBIcFsyXSA9IEhbOF0qdHBbMF0gKyBIWzJdL3NwIC0gc3R4KmFwYyAtIHN0eSpicGQ7XG5cbiAgSHBbM10gPSBzKmVwZztcbiAgSHBbNF0gPSBzKmZwaDtcbiAgSHBbNV0gPSBIWzhdKnRwWzFdICsgSFs1XS9zcCAtIHN0eCplcGcgLSBzdHkqZnBoO1xuXG4gIEhwWzZdID0gSFs2XSpzO1xuICBIcFs3XSA9IEhbN10qcztcbiAgSHBbOF0gPSBIWzhdIC0gSHBbNl0qdFswXSAtIEhwWzddKnRbMV07XG5cbiAgcmV0dXJuIEhwO1xufTtcblxuLy8gY2FuIHNvbWVvbmUgdmVyaWZ5IHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIFFSIGRlY29tcG9zaXRpb24/XG5jb25zdCBfc29sdmVIb21vZ3JhcGh5NFBvaW50c0luaG9tb2dlbm91cyA9ICh7eDEsIHgyLCB4MywgeDQsIHhwMSwgeHAyLCB4cDMsIHhwNH0pID0+IHtcbiAgY29uc3QgeExpc3QgPSBbeDEsIHgyLCB4MywgeDRdO1xuICBjb25zdCB4cExpc3QgPSBbeHAxLCB4cDIsIHhwMywgeHA0XTtcblxuICBjb25zdCBBID0gW107IC8vIDggeCA5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaSAqIDE4O1xuICAgIGNvbnN0IHggPSB4TGlzdFtpXTtcbiAgICBjb25zdCB4cCA9IHhwTGlzdFtpXTtcbiAgICBBW29mZnNldCswXSA9IC14WzBdO1xuICAgIEFbb2Zmc2V0KzFdID0gLXhbMV07XG4gICAgQVtvZmZzZXQrMl0gPSAtMTtcbiAgICBBW29mZnNldCszXSA9IDA7XG4gICAgQVtvZmZzZXQrNF0gPSAwO1xuICAgIEFbb2Zmc2V0KzVdID0gMDtcbiAgICBBW29mZnNldCs2XSA9IHhwWzBdKnhbMF07XG4gICAgQVtvZmZzZXQrN10gPSB4cFswXSp4WzFdO1xuICAgIEFbb2Zmc2V0KzhdID0geHBbMF07XG4gICAgQVtvZmZzZXQrOV0gPSAwO1xuICAgIEFbb2Zmc2V0KzEwXSA9IDA7XG4gICAgQVtvZmZzZXQrMTFdID0gMDtcbiAgICBBW29mZnNldCsxMl0gPSAteFswXTtcbiAgICBBW29mZnNldCsxM10gPSAteFsxXTtcbiAgICBBW29mZnNldCsxNF0gPSAtMTtcbiAgICBBW29mZnNldCsxNV0gPSB4cFsxXSp4WzBdO1xuICAgIEFbb2Zmc2V0KzE2XSA9IHhwWzFdKnhbMV07XG4gICAgQVtvZmZzZXQrMTddID0geHBbMV07XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgY29uc3QgZEEgPSB3aW5kb3cuZGVidWdNYXRjaC5xdWVyeWtleWZyYW1lc1t3aW5kb3cuZGVidWcucXVlcnlrZXlmcmFtZUluZGV4XS5ob21vZ3JhcGh5W3dpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXhdLkE7XG4gICAgaWYgKCF3aW5kb3cuY21wQXJyYXkoQSwgZEEpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBBXCIsIHdpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXgsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIEEsIGRBKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBRID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzI7IGkrKykge1xuICAgIFFbaV0gPSBBW2ldO1xuICB9XG5cbiAgLy8gc29sdmUgeCBmb3IgQXg9MCB3aXRoIFFSIGRlY29tcG9zaXRpb24gd2l0aCBHcmFtLVNjaG1pZHRcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgODsgcm93KyspIHtcbiAgICBpZiAocm93ID4gMCkge1xuICAgICAgZm9yIChsZXQgaiA9IHJvdzsgaiA8IDg7IGorKykge1xuICAgICAgICAvLyBwcm9qZWN0IGEgdmVjdG9yIFwiYVwiIG9udG8gYSBub3JtYWxpemVkIGJhc2lzIHZlY3RvciBcImVcIi5cbiAgICAgICAgLy8geCA9IHggLSBkb3QoYSxlKSplXG5cbiAgICAgICAgbGV0IGQgPSAwOyAvLyBkb3QoYSwgZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgZCArPSBRWyhyb3ctMSkgKiA5ICsgaV0gKiBBW2ogKiA5ICsgaV07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgIFFbaiAqIDkgKyBpXSAtPSBkICogUVsgKHJvdy0xKSAqIDkgKyBpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtYXhWYWx1ZSA9IC0xO1xuICAgIGxldCBtYXhSb3cgPSAtMTtcbiAgICBjb25zdCBzcyA9IFtdO1xuICAgIGZvciAobGV0IGogPSByb3c7IGogPCA4OyBqKyspIHtcbiAgICAgIHNzW2pdID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIHNzW2pdICs9IChRW2oqOStpXSAqIFFbaio5K2ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChzc1tqXSA+IG1heFZhbHVlKSB7XG4gICAgICAgIG1heFZhbHVlID0gc3Nbal07XG4gICAgICAgIG1heFJvdyA9IGo7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICggTWF0aC5hYnMoc3NbbWF4Um93XSkgPCBFUFNJTE9OKSB7XG4gICAgICByZXR1cm4gbnVsbDsgLy8gbm8gc29sdXRpb25cbiAgICB9XG5cbiAgICAvLyBzd2FwIGN1cnJlbnQgcm93IHdpdGggbWF4aW5kZXggcm93XG4gICAgaWYgKHJvdyAhPT0gbWF4Um93KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICBsZXQgdG1wID0gQVtyb3cgKiA5ICsgaV07XG4gICAgICAgIEFbcm93ICogOSArIGldID0gQVttYXhSb3cgKiA5ICsgaV07XG4gICAgICAgIEFbbWF4Um93ICogOSArIGldID0gdG1wO1xuXG4gICAgICAgIGxldCB0bXAyID0gUVtyb3cgKiA5ICsgaV07XG4gICAgICAgIFFbcm93ICogOSArIGldID0gUVttYXhSb3cgKiA5ICsgaV07XG4gICAgICAgIFFbbWF4Um93ICogOSArIGldID0gdG1wMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgUVtyb3cgKiA5ICsgaV0gPSAxLjAgKiBRW3JvdyAqIDkgKyBpXSAvIE1hdGguc3FydChzc1ttYXhSb3ddKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgY29uc3QgZFEgPSB3aW5kb3cuZGVidWdNYXRjaC5xdWVyeWtleWZyYW1lc1t3aW5kb3cuZGVidWcucXVlcnlrZXlmcmFtZUluZGV4XS5ob21vZ3JhcGh5W3dpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXhdLlE4O1xuICAgIGlmICghd2luZG93LmNtcEFycmF5KFEsIGRRLCAwLjAwMSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIFE4XCIsIHdpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXgsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIFEsIGRRKTtcbiAgICB9XG4gIH1cblxuICAvLyBjb21wdXRlIHggZnJvbSBRXG4gIGNvbnN0IHcgPSBbXTtcbiAgY29uc3QgWCA9IFtdO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA5OyByb3crKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBYW3JvdyAqIDkgKyBpXSA9IChRW2ldICogLVFbcm93XSk7XG4gICAgfVxuICAgIFhbcm93ICogOSArIHJvd10gPSAxICsgWFtyb3cgKiA5ICsgcm93XTtcblxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgODsgaisrKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIFhbcm93ICogOSArIGldICs9IChRW2ogKiA5ICsgaV0gKiAtUVtqICogOSArIHJvd10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBzcyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgIHNzICs9IChYW3JvdyAqIDkgKyBpXSAqIFhbcm93ICogOSArIGldKTtcbiAgICB9XG4gICAgaWYgKE1hdGguYWJzKHNzKSA8IEVQU0lMT04pIHtcbiAgICAgIHdbcm93XSA9IDA7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB3W3Jvd10gPSBNYXRoLnNxcnQoc3MpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICBYW3JvdyAqIDkgKyBpXSA9IFhbcm93ICogOSArIGldIC8gd1tyb3ddO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICBjb25zdCBkWCA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF0uWDtcbiAgICBjb25zdCBkdyA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW3dpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXhdLmhvbW9ncmFwaHlbd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleF0udztcbiAgICBpZiAoIXdpbmRvdy5jbXBBcnJheShYLCBkWCwgMC4wMSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIFhcIiwgd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleCwgd2luZG93LmRlYnVnLmhvbW9ncmFwaHlJbmRleCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShYKSksIGRYKTtcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY21wQXJyYXkodywgZHcsIDAuMDEpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCB3XCIsIHdpbmRvdy5kZWJ1Zy5xdWVyeWtleWZyYW1lSW5kZXgsIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXgsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodykpLCBkdyk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG1heFJvdyA9IC0xO1xuICBsZXQgbWF4VmFsdWUgPSAtMTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCA5OyBqKyspIHtcbiAgICBpZiAod1tqXSA+IG1heFZhbHVlKSB7XG4gICAgICBtYXhSb3cgPSBqO1xuICAgICAgbWF4VmFsdWUgPSB3W2pdO1xuICAgIH1cbiAgfVxuXG5cbiAgaWYgKG1heFZhbHVlID09IDApIHJldHVybiBudWxsOyAvLyBubyBzb2x1dGlvblxuXG4gIGNvbnN0IHggPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICB4W2ldID0gWFttYXhSb3cgKiA5ICsgaV07XG4gIH1cblxuICByZXR1cm4geDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVIb21vZ3JhcGh5LFxufVxuXG4iLCJjb25zdCBrSG91Z2hCaW5EZWx0YSA9IDE7XG5cbi8vIG1hdGhjZXMgW3F1ZXJ5cG9pbnRJbmRleDp4LCBrZXlwb2ludEluZGV4OiB4XVxuY29uc3QgY29tcHV0ZUhvdWdoTWF0Y2hlcyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtrZXlwb2ludHMsIHF1ZXJ5cG9pbnRzLCBrZXl3aWR0aCwga2V5aGVpZ2h0LCBxdWVyeXdpZHRoLCBxdWVyeWhlaWdodCwgbWF0Y2hlc30gPSBvcHRpb25zO1xuXG4gIGNvbnN0IG1heFggPSBxdWVyeXdpZHRoICogMS4yO1xuICBjb25zdCBtaW5YID0gLW1heFg7XG4gIGNvbnN0IG1heFkgPSBxdWVyeWhlaWdodCAqIDEuMjtcbiAgY29uc3QgbWluWSA9IC1tYXhZO1xuICBjb25zdCBudW1BbmdsZUJpbnMgPSAxMjtcbiAgY29uc3QgbnVtU2NhbGVCaW5zID0gMTA7XG4gIGNvbnN0IG1pblNjYWxlID0gLTE7XG4gIGNvbnN0IG1heFNjYWxlID0gMTtcbiAgY29uc3Qgc2NhbGVLID0gMTAuMDtcbiAgY29uc3Qgc2NhbGVPbmVPdmVyTG9nSyA9IDEuMCAvIE1hdGgubG9nKHNjYWxlSyk7XG4gIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KGtleXdpZHRoLCBrZXloZWlnaHQpO1xuICBjb25zdCBrZXljZW50ZXJYID0gTWF0aC5mbG9vcihrZXl3aWR0aCAvIDIpO1xuICBjb25zdCBrZXljZW50ZXJZID0gTWF0aC5mbG9vcihrZXloZWlnaHQgLyAyKTtcblxuICAvLyBjb21wdXRlIG51bVhCaW5zIGFuZCBudW1ZQmlucyBiYXNlZCBvbiBtYXRjaGVzXG4gIGNvbnN0IHByb2plY3RlZERpbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcXVlcnlzY2FsZSA9IHF1ZXJ5cG9pbnRzW21hdGNoZXNbaV0ucXVlcnlwb2ludEluZGV4XS5zY2FsZTtcbiAgICBjb25zdCBrZXlzY2FsZSA9IGtleXBvaW50c1ttYXRjaGVzW2ldLmtleXBvaW50SW5kZXhdLnNjYWxlO1xuICAgIGlmIChrZXlzY2FsZSA9PSAwKSBjb25zb2xlLmxvZyhcIkVSUk9SIGRpdmlkZSB6ZXJvXCIpO1xuICAgIGNvbnN0IHNjYWxlID0gcXVlcnlzY2FsZSAvIGtleXNjYWxlO1xuICAgIHByb2plY3RlZERpbXMucHVzaCggc2NhbGUgKiBtYXhEaW0gKTtcbiAgfVxuXG4gIC8vIFRPRE8gb3B0aW1pemUgbWVkaWFuXG4gIC8vICAgd2VpcmQuIG1lZGlhbiBzaG91bGQgYmUgW01hdGguZmxvb3IocHJvamVjdGVkRGltcy5sZW5ndGgvMikgLSAxXSA/XG4gIHByb2plY3RlZERpbXMuc29ydCgoYTEsIGEyKSA9PiB7cmV0dXJuIGExIC0gYTJ9KTtcbiAgY29uc3QgbWVkaWFuUHJvamVjdGVkRGltID0gcHJvamVjdGVkRGltc1sgTWF0aC5mbG9vcihwcm9qZWN0ZWREaW1zLmxlbmd0aC8yKSAtIChwcm9qZWN0ZWREaW1zLmxlbmd0aCUyPT0wPzE6MCkgLTEgXTtcblxuICBjb25zdCBiaW5TaXplID0gMC4yNSAqIG1lZGlhblByb2plY3RlZERpbTtcbiAgY29uc3QgbnVtWEJpbnMgPSBNYXRoLm1heCg1LCBNYXRoLmNlaWwoKG1heFggLSBtaW5YKSAvIGJpblNpemUpKTtcbiAgY29uc3QgbnVtWUJpbnMgPSBNYXRoLm1heCg1LCBNYXRoLmNlaWwoKG1heFkgLSBtaW5ZKSAvIGJpblNpemUpKTtcblxuICBjb25zdCBudW1YWUJpbnMgPSBudW1YQmlucyAqIG51bVlCaW5zO1xuICBjb25zdCBudW1YWUFuZ2xlQmlucyA9IG51bVhZQmlucyAqIG51bUFuZ2xlQmlucztcblxuICAvLyBkbyB2b3RpbmdcbiAgY29uc3QgcXVlcnlwb2ludFZhbGlkcyA9IFtdO1xuICBjb25zdCBxdWVyeXBvaW50QmluTG9jYXRpb25zID0gW107XG4gIGNvbnN0IHZvdGVzID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHF1ZXJ5cG9pbnQgPSBxdWVyeXBvaW50c1ttYXRjaGVzW2ldLnF1ZXJ5cG9pbnRJbmRleF07XG4gICAgY29uc3Qga2V5cG9pbnQgPSBrZXlwb2ludHNbbWF0Y2hlc1tpXS5rZXlwb2ludEluZGV4XTtcblxuICAgIGNvbnN0IHt4LCB5LCBzY2FsZSwgYW5nbGV9ID0gX21hcENvcnJlc3BvbmRlbmNlKHtxdWVyeXBvaW50LCBrZXlwb2ludCwga2V5Y2VudGVyWCwga2V5Y2VudGVyWSwgc2NhbGVPbmVPdmVyTG9nS30pO1xuXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgdm90ZSBpcyB3aXRoaW4gcmFuZ2VcbiAgICBpZiAoeCA8IG1pblggfHwgeCA+PSBtYXhYIHx8IHkgPCBtaW5ZIHx8IHkgPj0gbWF4WSB8fCBhbmdsZSA8PSAtTWF0aC5QSSB8fCBhbmdsZSA+IE1hdGguUEkgfHwgc2NhbGUgPCBtaW5TY2FsZSB8fCBzY2FsZSA+PSBtYXhTY2FsZSkge1xuICAgICAgcXVlcnlwb2ludFZhbGlkc1tpXSA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbWFwIHByb3BlcnRpZXMgdG8gYmluc1xuICAgIGxldCBmYmluWCA9IG51bVhCaW5zICogKHggLSBtaW5YKSAvIChtYXhYIC0gbWluWCk7XG4gICAgbGV0IGZiaW5ZID0gbnVtWUJpbnMgKiAoeSAtIG1pblkpIC8gKG1heFkgLSBtaW5ZKTtcbiAgICBsZXQgZmJpbkFuZ2xlID0gbnVtQW5nbGVCaW5zICogKGFuZ2xlICsgTWF0aC5QSSkgLyAoMi4wICogTWF0aC5QSSk7XG4gICAgbGV0IGZiaW5TY2FsZSA9IG51bVNjYWxlQmlucyAqIChzY2FsZSAtIG1pblNjYWxlKSAvIChtYXhTY2FsZSAtIG1pblNjYWxlKTtcblxuICAgIHF1ZXJ5cG9pbnRCaW5Mb2NhdGlvbnNbaV0gPSB7YmluWDogZmJpblgsIGJpblk6IGZiaW5ZLCBiaW5BbmdsZTogZmJpbkFuZ2xlLCBiaW5TY2FsZTogZmJpblNjYWxlfTtcblxuICAgIGxldCBiaW5YID0gTWF0aC5mbG9vcihmYmluWCAtIDAuNSk7XG4gICAgbGV0IGJpblkgPSBNYXRoLmZsb29yKGZiaW5ZIC0gMC41KTtcbiAgICBsZXQgYmluU2NhbGUgPSBNYXRoLmZsb29yKGZiaW5TY2FsZSAtIDAuNSk7XG4gICAgbGV0IGJpbkFuZ2xlID0gKE1hdGguZmxvb3IoZmJpbkFuZ2xlIC0gMC41KSArIG51bUFuZ2xlQmlucykgJSBudW1BbmdsZUJpbnM7XG5cbiAgICAvLyBjaGVjayBjYW4gdm90ZSBhbGwgMTYgYmluc1xuICAgIGlmIChiaW5YIDwgMCB8fCBiaW5YICsgMSA+PSBudW1YQmlucyB8fCBiaW5ZIDwgMCB8fCBiaW5ZICsgMSA+PSBudW1ZQmlucyB8fCBiaW5TY2FsZSA8IDAgfHwgYmluU2NhbGUgKzEgPj0gbnVtU2NhbGVCaW5zKSB7XG4gICAgICBxdWVyeXBvaW50VmFsaWRzW2ldID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBkeCA9IDA7IGR4IDwgMjsgZHgrKykge1xuICAgICAgbGV0IGJpblgyID0gYmluWCArIGR4O1xuXG4gICAgICBmb3IgKGxldCBkeSA9IDA7IGR5IDwgMjsgZHkrKykge1xuICAgICAgICBsZXQgYmluWTIgPSBiaW5ZICsgZHk7XG5cbiAgICAgICAgZm9yIChsZXQgZGFuZ2xlID0gMDsgZGFuZ2xlIDwgMjsgZGFuZ2xlKyspIHtcbiAgICAgICAgICBsZXQgYmluQW5nbGUyID0gKGJpbkFuZ2xlICsgZGFuZ2xlKSAlIG51bUFuZ2xlQmlucztcblxuICAgICAgICAgIGZvciAobGV0IGRzY2FsZSA9IDA7IGRzY2FsZSA8IDI7IGRzY2FsZSsrKSB7XG4gICAgICAgICAgICBsZXQgYmluU2NhbGUyID0gYmluU2NhbGUgKyBkc2NhbGU7XG5cbiAgICAgICAgICAgIGNvbnN0IGJpbkluZGV4ID0gYmluWDIgKyBiaW5ZMiAqIG51bVhCaW5zICsgYmluQW5nbGUyICogbnVtWFlCaW5zICsgYmluU2NhbGUyICogbnVtWFlBbmdsZUJpbnM7XG5cbiAgICAgICAgICAgIGlmICh2b3Rlc1tiaW5JbmRleF0gPT09IHVuZGVmaW5lZCkgdm90ZXNbYmluSW5kZXhdID0gMDtcbiAgICAgICAgICAgIHZvdGVzW2JpbkluZGV4XSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBxdWVyeXBvaW50VmFsaWRzW2ldID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBtYXhWb3RlcyA9IDA7XG4gIGxldCBtYXhWb3RlSW5kZXggPSAtMTtcbiAgT2JqZWN0LmtleXModm90ZXMpLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgaWYgKHZvdGVzW2luZGV4XSA+IG1heFZvdGVzKSB7XG4gICAgICBtYXhWb3RlcyA9IHZvdGVzW2luZGV4XTtcbiAgICAgIG1heFZvdGVJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKG1heFZvdGVzIDwgMykgcmV0dXJuIFtdO1xuXG4gIC8vIGdldCBiYWNrIGJpbnMgZnJvbSB2b3RlIGluZGV4XG4gIGNvbnN0IGJpblggPSBNYXRoLmZsb29yKCgobWF4Vm90ZUluZGV4ICUgbnVtWFlBbmdsZUJpbnMpICUgbnVtWFlCaW5zKSAlIG51bVhCaW5zKTtcbiAgY29uc3QgYmluWSA9IE1hdGguZmxvb3IoKCgobWF4Vm90ZUluZGV4IC0gYmluWCkgJSBudW1YWUFuZ2xlQmlucykgJSBudW1YWUJpbnMpIC8gbnVtWEJpbnMpO1xuICBjb25zdCBiaW5BbmdsZSA9IE1hdGguZmxvb3IoKChtYXhWb3RlSW5kZXggLSBiaW5YIC0gKGJpblkgKiBudW1YQmlucykpICUgbnVtWFlBbmdsZUJpbnMpIC8gbnVtWFlCaW5zKTtcbiAgY29uc3QgYmluU2NhbGUgPSBNYXRoLmZsb29yKChtYXhWb3RlSW5kZXggLSBiaW5YIC0gKGJpblkgKiBudW1YQmlucykgLSAoYmluQW5nbGUgKiBudW1YWUJpbnMpKSAvIG51bVhZQW5nbGVCaW5zKTtcblxuICAvL2NvbnNvbGUubG9nKFwiaG91Z2ggdm90ZWQ6IFwiLCB7YmluWCwgYmluWSwgYmluQW5nbGUsIGJpblNjYWxlLCBtYXhWb3RlSW5kZXh9KTtcblxuICBjb25zdCBob3VnaE1hdGNoZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFxdWVyeXBvaW50VmFsaWRzW2ldKSBjb250aW51ZTtcblxuICAgIGNvbnN0IHF1ZXJ5QmlucyA9IHF1ZXJ5cG9pbnRCaW5Mb2NhdGlvbnNbaV07XG4gICAgLy8gY29tcHV0ZSBiaW4gZGlmZmVyZW5jZVxuICAgIGNvbnN0IGRpc3RCaW5YID0gTWF0aC5hYnMocXVlcnlCaW5zLmJpblggLSAoYmluWCswLjUpKTtcbiAgICBpZiAoZGlzdEJpblggPj0ga0hvdWdoQmluRGVsdGEpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgZGlzdEJpblkgPSBNYXRoLmFicyhxdWVyeUJpbnMuYmluWSAtIChiaW5ZKzAuNSkpO1xuICAgIGlmIChkaXN0QmluWSA+PSBrSG91Z2hCaW5EZWx0YSkgY29udGludWU7XG5cbiAgICBjb25zdCBkaXN0QmluU2NhbGUgPSBNYXRoLmFicyhxdWVyeUJpbnMuYmluU2NhbGUgLSAoYmluU2NhbGUrMC41KSk7XG4gICAgaWYgKGRpc3RCaW5TY2FsZSA+PSBrSG91Z2hCaW5EZWx0YSkgY29udGludWU7XG5cbiAgICBjb25zdCB0ZW1wID0gTWF0aC5hYnMocXVlcnlCaW5zLmJpbkFuZ2xlIC0gKGJpbkFuZ2xlKzAuNSkpO1xuICAgIGNvbnN0IGRpc3RCaW5BbmdsZSA9IE1hdGgubWluKHRlbXAsIG51bUFuZ2xlQmlucyAtIHRlbXApO1xuICAgIGlmIChkaXN0QmluQW5nbGUgPj0ga0hvdWdoQmluRGVsdGEpIGNvbnRpbnVlO1xuXG4gICAgaG91Z2hNYXRjaGVzLnB1c2gobWF0Y2hlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGhvdWdoTWF0Y2hlcztcbn1cblxuY29uc3QgX21hcENvcnJlc3BvbmRlbmNlID0gKHtxdWVyeXBvaW50LCBrZXlwb2ludCwga2V5Y2VudGVyWCwga2V5Y2VudGVyWSwgc2NhbGVPbmVPdmVyTG9nS30pID0+IHtcbiAgLy8gbWFwIGFuZ2xlIHRvICgtcGksIHBpXVxuICBsZXQgYW5nbGUgPSBxdWVyeXBvaW50LmFuZ2xlIC0ga2V5cG9pbnQuYW5nbGU7XG4gIGlmIChhbmdsZSA8PSAtTWF0aC5QSSkgYW5nbGUgKz0gMipNYXRoLlBJO1xuICBlbHNlIGlmIChhbmdsZSA+IE1hdGguUEkpIGFuZ2xlIC09IDIqTWF0aC5QSTtcblxuICBjb25zdCBzY2FsZSA9IHF1ZXJ5cG9pbnQuc2NhbGUgLyBrZXlwb2ludC5zY2FsZTtcblxuICAvLyAyeDIgc2ltaWxhcml0eVxuICBjb25zdCBjb3MgPSBzY2FsZSAqIE1hdGguY29zKGFuZ2xlKTtcbiAgY29uc3Qgc2luID0gc2NhbGUgKiBNYXRoLnNpbihhbmdsZSk7XG4gIGNvbnN0IFMgPSBbY29zLCAtc2luLCBzaW4sIGNvc107XG5cbiAgY29uc3QgdHAgPSBbXG4gICAgU1swXSAqIGtleXBvaW50LngyRCArIFNbMV0gKiBrZXlwb2ludC55MkQsXG4gICAgU1syXSAqIGtleXBvaW50LngyRCArIFNbM10gKiBrZXlwb2ludC55MkRcbiAgXTtcbiAgY29uc3QgdHggPSBxdWVyeXBvaW50LngyRCAtIHRwWzBdO1xuICBjb25zdCB0eSA9IHF1ZXJ5cG9pbnQueTJEIC0gdHBbMV07XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBTWzBdICoga2V5Y2VudGVyWCArIFNbMV0gKiBrZXljZW50ZXJZICsgdHgsXG4gICAgeTogU1syXSAqIGtleWNlbnRlclggKyBTWzNdICoga2V5Y2VudGVyWSArIHR5LFxuICAgIGFuZ2xlOiBhbmdsZSxcbiAgICBzY2FsZTogTWF0aC5sb2coc2NhbGUpICogc2NhbGVPbmVPdmVyTG9nS1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb21wdXRlSG91Z2hNYXRjaGVzXG59XG5cbiIsImNvbnN0IHtidWlsZDogYnVpbGRHYXVzc2lhblB5cmFtaWR9ID0gcmVxdWlyZSgnLi9nYXVzc2lhbi1weXJhbWlkJyk7XG5jb25zdCB7YnVpbGQ6IGJ1aWxkRG9HUHlyYW1pZH0gPSByZXF1aXJlKCcuL2RvZy1weXJhbWlkJyk7XG5jb25zdCB7YnVpbGQ6IGhpZXJhcmNoaWNhbENsdXN0ZXJpbmdCdWlsZH0gPSByZXF1aXJlKCcuL2hpZXJhcmNoaWNhbC1jbHVzdGVyaW5nLmpzJyk7XG5jb25zdCB7ZGV0ZWN0fSA9IHJlcXVpcmUoJy4vZGV0ZWN0b3InKTtcbmNvbnN0IHtleHRyYWN0fSA9IHJlcXVpcmUoJy4vZnJlYWstZXh0cmFjdG9yJyk7XG5jb25zdCB7bWF0Y2h9ID0gcmVxdWlyZSgnLi9tYXRjaGluZycpO1xuXG5jb25zdCBQWVJBTUlEX05VTV9TQ0FMRVNfUEVSX09DVEFWRVMgPSAzO1xuY29uc3QgUFlSQU1JRF9NSU5fU0laRSA9IDg7XG4vL2NvbnN0IEZFQVRVUkVfREVOU0lUWSA9IDEwMDtcblxuY2xhc3MgTWF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKG1hdGNoaW5nRGF0YSkge1xuICAgIHRoaXMua2V5ZnJhbWVzID0gbWF0Y2hpbmdEYXRhLmtleWZyYW1lcztcbiAgfVxuXG4gIC8vIHJldHVybiBhIGxpc3Qgb2Ygc2NyZWVuQ29vcmRzIC0+IHdvcmxkQ29vcmRzIHBhaXJzXG4gIG1hdGNoKHRhcmdldEltYWdlKSB7XG4gICAgY29uc3QgcXVlcnlwb2ludHMgPSBfZXh0cmFjdFBvaW50cyh7aW1hZ2U6IHRhcmdldEltYWdlfSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgICBpZiAocXVlcnlwb2ludHMubGVuZ3RoICE9PSB3aW5kb3cuZGVidWdNYXRjaC5wb2ludHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHF1ZXJ5cG9pbnRzIGxlbmd0aFwiLCBxdWVyeXBvaW50cy5sZW5ndGgsIHdpbmRvdy5kZWJ1Z01hdGNoLnBvaW50cy5sZW5ndGgpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeXBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXdpbmRvdy5jbXAocXVlcnlwb2ludHNbaV0ueDJELCB3aW5kb3cuZGVidWdNYXRjaC5wb2ludHNbaV0ueCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBxdWVyeSBwb2ludFwiLCBpLCBxdWVyeXBvaW50c1tpXSwgd2luZG93LmRlYnVnTWF0Y2gucG9pbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBtYXRjaCh7a2V5ZnJhbWVzOiB0aGlzLmtleWZyYW1lcywgcXVlcnlwb2ludHM6IHF1ZXJ5cG9pbnRzLCBxdWVyeXdpZHRoOiB0YXJnZXRJbWFnZS53aWR0aCwgcXVlcnloZWlnaHQ6IHRhcmdldEltYWdlLmhlaWdodH0pO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcbiAgICAgIGlmICghIXJlc3VsdCAhPT0gISF3aW5kb3cuZGVidWdNYXRjaC5maW5hbEgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgbWF0Y2ggcmVzdWx0XCIsIHJlc3VsdCwgd2luZG93LmRlYnVnTWF0Y2guZmluYWxIKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5rZXlmcmFtZUluZGV4ICE9PSB3aW5kb3cuZGVidWdNYXRjaC5maW5hbE1hdGNoSWQpIHtcblxuICAgICAgICB9XG4gICAgICAgIGlmICghd2luZG93LmNtcEFycmF5KHJlc3VsdC5ILCB3aW5kb3cuZGVidWdNYXRjaC5maW5hbEgpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgcmVzdWx0IEhcIiwgcmVzdWx0LkgsIHdpbmRvdy5kZWJ1Z01hdGNoLmZpbmFsSCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJmaW5hbCBtYXRjaGVzIGxlbmd0aFwiLCByZXN1bHQubWF0Y2hlcy5sZW5ndGgsIHdpbmRvdy5kZWJ1Z01hdGNoLmZpbmFsTWF0Y2hlcy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBkTWF0Y2hlcyA9IHdpbmRvdy5kZWJ1Z01hdGNoLmZpbmFsTWF0Y2hlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChyZXN1bHQubWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXggIT09IGRNYXRjaGVzW2ldLmlucyB8fCByZXN1bHQubWF0Y2hlc1tpXS5rZXlwb2ludEluZGV4ICE9PSBkTWF0Y2hlc1tpXS5yZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGZpbmFsIG1hdGNoZXNcIiwgaSwgcmVzdWx0Lm1hdGNoZXMsIGRNYXRjaGVzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3Qgc2NyZWVuQ29vcmRzID0gW107XG4gICAgY29uc3Qgd29ybGRDb29yZHMgPSBbXTtcbiAgICBjb25zdCBrZXlmcmFtZSA9IHRoaXMua2V5ZnJhbWVzW3Jlc3VsdC5rZXlmcmFtZUluZGV4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5tYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBxdWVyeXBvaW50SW5kZXggPSByZXN1bHQubWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXg7XG4gICAgICBjb25zdCBrZXlwb2ludEluZGV4ID0gcmVzdWx0Lm1hdGNoZXNbaV0ua2V5cG9pbnRJbmRleDtcbiAgICAgIHNjcmVlbkNvb3Jkcy5wdXNoKHtcbiAgICAgICAgeDogcXVlcnlwb2ludHNbcXVlcnlwb2ludEluZGV4XS54MkQsXG4gICAgICAgIHk6IHF1ZXJ5cG9pbnRzW3F1ZXJ5cG9pbnRJbmRleF0ueTJELFxuICAgICAgfSlcbiAgICAgIHdvcmxkQ29vcmRzLnB1c2goe1xuICAgICAgICB4OiBrZXlmcmFtZS5wb2ludHNba2V5cG9pbnRJbmRleF0ueDNELFxuICAgICAgICB5OiBrZXlmcmFtZS5wb2ludHNba2V5cG9pbnRJbmRleF0ueTNELFxuICAgICAgICB6OiAwLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge3NjcmVlbkNvb3Jkcywgd29ybGRDb29yZHN9O1xuICB9XG59XG5cbmNvbnN0IF9leHRyYWN0UG9pbnRzID0gKHtpbWFnZX0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19USU1FKSB7XG4gICAgdmFyIF9zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbiAgLy9jb25zdCBtYXhGZWF0dXJlTnVtID0gRkVBVFVSRV9ERU5TSVRZICogaW1hZ2Uud2lkdGggKiBpbWFnZS5oZWlnaHQgLyAoNDgwLjAqMzYwKTtcbiAgY29uc3QgZ2F1c3NpYW5QeXJhbWlkID0gYnVpbGRHYXVzc2lhblB5cmFtaWQoe2ltYWdlLCBtaW5TaXplOiBQWVJBTUlEX01JTl9TSVpFLCBudW1TY2FsZXNQZXJPY3RhdmVzOiBQWVJBTUlEX05VTV9TQ0FMRVNfUEVSX09DVEFWRVN9KTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RJTUUpIHtcbiAgICBjb25zb2xlLmxvZygnZXhlYyB0aW1lIGV4dHJhY3QgcG9pbnRzIHVudGlsIGdhdXNzaWFuOiAnLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF9zdGFydCk7XG4gIH1cblxuICBjb25zdCBkb2dQeXJhbWlkID0gYnVpbGREb0dQeXJhbWlkKHtnYXVzc2lhblB5cmFtaWQ6IGdhdXNzaWFuUHlyYW1pZH0pO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVElNRSkge1xuICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgZXh0cmFjdCBwb2ludHMgdW50aWwgZG9nICcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3N0YXJ0KTtcbiAgfVxuXG4gIGNvbnN0IGZlYXR1cmVQb2ludHMgPSBkZXRlY3Qoe2dhdXNzaWFuUHlyYW1pZCwgZG9nUHlyYW1pZH0pO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVElNRSkge1xuICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgZXh0cmFjdCBwb2ludHMgdW50aWwgZGV0ZWN0JywgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfc3RhcnQpO1xuICB9XG5cbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBleHRyYWN0KHtweXJhbWlkOiBnYXVzc2lhblB5cmFtaWQsIHBvaW50czogZmVhdHVyZVBvaW50c30pO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVElNRSkge1xuICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgZXh0cmFjdCBwb2ludHMgdW50aWwgZXh0cmFjdCcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3N0YXJ0KTtcbiAgfVxuXG4gIGNvbnN0IGtleXBvaW50cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXlwb2ludHMucHVzaCh7XG4gICAgICB4MkQ6IGZlYXR1cmVQb2ludHNbaV0ueCxcbiAgICAgIHkyRDogZmVhdHVyZVBvaW50c1tpXS55LFxuICAgICAgeDNEOiAoZmVhdHVyZVBvaW50c1tpXS54ICsgMC41KSAvIGltYWdlLmRwaSAqIDI1LjQsIC8vIGluY2ggdG8gbWlsbGltZXRlclxuICAgICAgeTNEOiAoKGltYWdlLmhlaWdodC0wLjUpIC0gZmVhdHVyZVBvaW50c1tpXS55KSAvIGltYWdlLmRwaSAqIDI1LjQsIC8vIGluY2ggdG8gbWlsbGltZXRlclxuICAgICAgYW5nbGU6IGZlYXR1cmVQb2ludHNbaV0uYW5nbGUsXG4gICAgICBzY2FsZTogZmVhdHVyZVBvaW50c1tpXS5zaWdtYSxcbiAgICAgIG1heGltYTogZmVhdHVyZVBvaW50c1tpXS5zY29yZSA+IDAsXG4gICAgICBkZXNjcmlwdG9yczogZGVzY3JpcHRvcnNbaV1cbiAgICB9KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVRykge1xuICAgIGNvbnN0IGRQb2ludHMgPSB3aW5kb3cuZGVidWdDb250ZW50LnJlZkRhdGFTZXRbd2luZG93LmRlYnVnLmtleWZyYW1lSW5kZXhdO1xuICAgIGNvbnNvbGUubG9nKFwia2V5cG9pbnRzIGxlbmd0aFwiLCB3aW5kb3cuZGVidWcua2V5ZnJhbWVJbmRleCwga2V5cG9pbnRzLmxlbmd0aCwgJ3ZzJywgZFBvaW50cy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXdpbmRvdy5jbXBPYmooa2V5cG9pbnRzW2ldLCBkUG9pbnRzW2ldLCBbJ3gyRCcsICd5MkQnLCAneDNEJywgJ3kzRCcsICdzY2FsZScsICdhbmdsZSddKVxuICAgICAgICAgfHwgKCEha2V5cG9pbnRzW2ldLm1heGltYSAhPT0gISFkUG9pbnRzW2ldLm1heGltYSlcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBrZXlwb2ludFwiLCBpLCBrZXlwb2ludHNbaV0sIGRQb2ludHNbaV0pO1xuICAgICAgfVxuICAgICAgY29uc3QgZERlc2NyaXB0b3JzID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXBvaW50c1tpXS5kZXNjcmlwdG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICBsZXQgYml0ID0gXCJcIjtcbiAgICAgICAgLy8gYXJ0b29sa2l0IGJpdCBvcmRlcmluZyBbNyA2IDUgNCAzIDIgMSAwLCAxNSAxNCAxMyAxMiAxMSAxMCA5IDgsIDIzIDIyIDIxIDIwIDE5IDE4IDE3IDE1LCAuLi5dXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICAgICAgbGV0IHYgPSBkUG9pbnRzW2ldLmRlc2NyaXB0b3JzW2oqNCtrXS50b1N0cmluZygyKS5wYWRTdGFydCg4LCAwKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICAgICAgICBiaXQgPSBiaXQgKyB2O1xuICAgICAgICB9XG4gICAgICAgIGxldCBkVmFsID0gcGFyc2VJbnQoYml0LCAyKSA+Pj4gMDtcbiAgICAgICAgZERlc2NyaXB0b3JzLnB1c2goZFZhbCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cG9pbnRzW2ldLmRlc2NyaXB0b3JzLmxlbmd0aC0xOyBqKyspIHsgLy8gdGhlIGxhc3QgYnl0ZSBoYXMgZGlmZmVyZW50IG9yZGVyaW5nLiBkb24ndCB3YW50IHRvIGZpeFxuICAgICAgICBpZiAoa2V5cG9pbnRzW2ldLmRlc2NyaXB0b3JzW2pdICE9PSBkRGVzY3JpcHRvcnNbal0pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBrZXlwb2ludCBkZXNjcmlwdG9yc1wiLCBpLCBqLCBrZXlwb2ludHNbaV0sIGRQb2ludHNbaV0sIGREZXNjcmlwdG9ycyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ga2V5cG9pbnRzO1xufVxuXG5jb25zdCBfYnVpbGRLZXlmcmFtZXMgPSAoe2ltYWdlTGlzdH0pID0+IHtcbiAgY29uc3Qga2V5ZnJhbWVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHKSB7XG4gICAgICB3aW5kb3cuZGVidWcua2V5ZnJhbWVJbmRleCA9IGk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZUxpc3RbaV07XG4gICAgY29uc3Qga2V5cG9pbnRzID0gX2V4dHJhY3RQb2ludHMoe2ltYWdlfSk7XG4gICAgY29uc3QgcG9pbnRzQ2x1c3RlciA9IGhpZXJhcmNoaWNhbENsdXN0ZXJpbmdCdWlsZCh7cG9pbnRzOiBrZXlwb2ludHN9KTtcbiAgICBrZXlmcmFtZXMucHVzaCh7cG9pbnRzOiBrZXlwb2ludHMsIHBvaW50c0NsdXN0ZXIsIHdpZHRoOiBpbWFnZS53aWR0aCwgaGVpZ2h0OiBpbWFnZS5oZWlnaHR9KTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUcpIHtcbiAgICAgIGNvbnN0IGRDbHVzdGVyID0gd2luZG93LmRlYnVnQ29udGVudC5jbHVzdGVyc1tpXTtcblxuICAgICAgY29uc3QgZ29Ob2RlID0gKG4xLCBuMikgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwibm9kZVwiLCBuMS5wb2ludEluZGV4ZXMsIG4yLnBvaW50SW5kZXhlcyk7XG4gICAgICAgIGlmICghIW4xLmxlYWYgIT09ICEhbjIuaXNMZWFmKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1Qgbm9kZSBsZWFmXCIsIG4xLCBuMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4xLmxlYWYpIHtcbiAgICAgICAgICBpZiAobjEucG9pbnRJbmRleGVzLmxlbmd0aCAhPT0gbjIucG9pbnRJbmRleGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1Qgbm9kZSBwb2ludEluZGV4ZXNcIiwgbjEsIG4yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuMS5wb2ludEluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChuMS5wb2ludEluZGV4ZXNbaV0gIT09IG4yLnBvaW50SW5kZXhlc1tpXSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBub2RlIHBvaW50SW5kZXhlc1wiLCBuMSwgbjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobjEuY2hpbGRyZW4ubGVuZ3RoICE9PSBuMi5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG5vZGUgY2hpbGRyZW4gbGVuZ3RoXCIsIG4xLCBuMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdvTm9kZShuMS5jaGlsZHJlbltpXSwgbjIuY2hpbGRyZW5baV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZ29Ob2RlKHBvaW50c0NsdXN0ZXIucm9vdE5vZGUsIGRDbHVzdGVyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGtleWZyYW1lcztcbn1cblxuY29uc3QgY29tcGlsZU1hdGNoaW5nID0gKHtpbWFnZUxpc3R9KSA9PiB7XG4gIGNvbnN0IGtleWZyYW1lcyA9IF9idWlsZEtleWZyYW1lcyh7aW1hZ2VMaXN0fSk7XG4gIHJldHVybiB7a2V5ZnJhbWVzfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1hdGNoZXIsXG4gIGNvbXBpbGVNYXRjaGluZ1xufVxuIiwiY29uc3QgVGlueVF1ZXVlID0gcmVxdWlyZSgndGlueXF1ZXVlJykuZGVmYXVsdDtcbmNvbnN0IHtjb21wdXRlOiBoYW1taW5nQ29tcHV0ZX0gPSByZXF1aXJlKCcuL2hhbW1pbmctZGlzdGFuY2UuanMnKTtcbmNvbnN0IHtjb21wdXRlSG91Z2hNYXRjaGVzfSA9IHJlcXVpcmUoJy4vaG91Z2guanMnKTtcbmNvbnN0IHtjb21wdXRlSG9tb2dyYXBoeX0gPSByZXF1aXJlKCcuL2hvbW9ncmFwaHkuanMnKTtcbmNvbnN0IHttdWx0aXBseVBvaW50SG9tb2dyYXBoeUluaG9tb2dlbm91cywgbWF0cml4SW52ZXJzZTMzfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dlb21ldHJ5LmpzJyk7XG5cbmNvbnN0IElOTElFUl9USFJFU0hPTEQgPSAzO1xuY29uc3QgTUlOX05VTV9JTkxJRVJTID0gODtcbmNvbnN0IENMVVNURVJfTUFYX1BPUCA9IDg7XG5jb25zdCBIQU1NSU5HX1RIUkVTSE9MRCA9IDAuNztcblxuLy8gbWF0Y2ggbGlzdCBvZiBxdWVycG9pbnRzIGFnYWluc3QgcHJlLWJ1aWx0IGxpc3Qgb2Yga2V5ZnJhbWVzXG5jb25zdCBtYXRjaCA9ICh7a2V5ZnJhbWVzLCBxdWVyeXBvaW50cywgcXVlcnl3aWR0aCwgcXVlcnloZWlnaHR9KSA9PiB7XG4gIGxldCByZXN1bHQgPSBudWxsO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5ZnJhbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ZnJhbWUgPSBrZXlmcmFtZXNbaV07XG4gICAgY29uc3Qga2V5cG9pbnRzID0ga2V5ZnJhbWUucG9pbnRzO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgICAgd2luZG93LmRlYnVnLnF1ZXJ5a2V5ZnJhbWVJbmRleCA9IGk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVElNRSkge1xuICAgICAgdmFyIF9zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHF1ZXJ5cG9pbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCByb290Tm9kZSA9IGtleWZyYW1lLnBvaW50c0NsdXN0ZXIucm9vdE5vZGU7XG4gICAgICBjb25zdCBxdWVyeXBvaW50ID0gcXVlcnlwb2ludHNbal07XG4gICAgICBjb25zdCBrZXlwb2ludEluZGV4ZXMgPSBbXTtcbiAgICAgIGNvbnN0IHF1ZXVlID0gbmV3IFRpbnlRdWV1ZShbXSwgKGExLCBhMikgPT4ge3JldHVybiBhMS5kIC0gYTIuZH0pO1xuXG4gICAgICBfcXVlcnkoe25vZGU6IHJvb3ROb2RlLCBrZXlwb2ludHMsIHF1ZXJ5cG9pbnQsIHF1ZXVlLCBrZXlwb2ludEluZGV4ZXMsIG51bVBvcDogMH0pO1xuXG4gICAgICBsZXQgYmVzdEluZGV4ID0gLTE7XG4gICAgICBsZXQgYmVzdEQxID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgICBsZXQgYmVzdEQyID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5cG9pbnRJbmRleGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIGNvbnN0IGtleXBvaW50ID0ga2V5cG9pbnRzW2tleXBvaW50SW5kZXhlc1trXV07XG4gICAgICAgIGlmIChrZXlwb2ludC5tYXhpbWEgIT0gcXVlcnlwb2ludC5tYXhpbWEpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGQgPSBoYW1taW5nQ29tcHV0ZSh7djE6IGtleXBvaW50LmRlc2NyaXB0b3JzLCB2MjogcXVlcnlwb2ludC5kZXNjcmlwdG9yc30pO1xuICAgICAgICBpZiAoZCA8IGJlc3REMSkge1xuICAgICAgICAgIGJlc3REMiA9IGJlc3REMTtcbiAgICAgICAgICBiZXN0RDEgPSBkO1xuICAgICAgICAgIGJlc3RJbmRleCA9IGtleXBvaW50SW5kZXhlc1trXTtcbiAgICAgICAgfSBlbHNlIGlmIChkIDwgYmVzdEQyKSB7XG4gICAgICAgICAgYmVzdEQyID0gZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJlc3RJbmRleCAhPT0gLTEgJiYgKGJlc3REMiA9PT0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgKDEuMCAqIGJlc3REMSAvIGJlc3REMikgPCBIQU1NSU5HX1RIUkVTSE9MRCkpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHtxdWVyeXBvaW50SW5kZXg6IGosIGtleXBvaW50SW5kZXg6IGJlc3RJbmRleH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgICAgIGlmICghd2luZG93LmRlYnVnLnF1ZXJ5TWF0Y2hJbmRleCkgd2luZG93LmRlYnVnLnF1ZXJ5TWF0Y2hJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGRNYXRjaCA9IHdpbmRvdy5kZWJ1Z01hdGNoLm1hdGNoZXNbd2luZG93LmRlYnVnLnF1ZXJ5TWF0Y2hJbmRleF07XG4gICAgICAgIGlmIChiZXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaWYgKGRNYXRjaCAmJiBkTWF0Y2guYmVzdEluZGV4ICE9PSAyMTQ3NDgzNjQ3KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBxdWVyeSBtYXRjaFwiLCBiZXN0RDEsIGJlc3REMiwgYmVzdEluZGV4LCAndnMnLCBkTWF0Y2guZmlyc3RCZXN0LCBkTWF0Y2guc2Vjb25kQmVzdCwgZE1hdGNoLmJlc3RJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChiZXN0SW5kZXggIT09IGRNYXRjaC5iZXN0SW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHF1ZXJ5IG1hdGNoXCIsIGJlc3REMSwgYmVzdEQyLCBiZXN0SW5kZXgsICd2cycsIGRNYXRjaC5maXJzdEJlc3QsIGRNYXRjaC5zZWNvbmRCZXN0LCBkTWF0Y2guYmVzdEluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmRlYnVnLnF1ZXJ5TWF0Y2hJbmRleCArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVElNRSkge1xuICAgICAgY29uc29sZS5sb2coJ2V4ZWMgdGltZSB1bnRpbCBmaXJzdCBtYXRjaDogJywgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfc3RhcnQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICAgIGNvbnN0IGRNYXRjaGVzID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbaV0ubWF0Y2hlczE7XG4gICAgICBjb25zb2xlLmxvZyhcIm1hdGNoZXMgMVwiLCBtYXRjaGVzLmxlbmd0aCwgZE1hdGNoZXMubGVuZ3RoKTtcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCAhPT0gZE1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG1hdGNoZXMxIGxlbmd0aFwiKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXggIT09IGRNYXRjaGVzW2ldLmlucyB8fCBtYXRjaGVzW2ldLmtleXBvaW50SW5kZXggIT09IGRNYXRjaGVzW2ldLnJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG1hdGNoZXMxXCIsIGksIG1hdGNoZXNbaV0sIGRNYXRjaGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA8IE1JTl9OVU1fSU5MSUVSUykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgaG91Z2hNYXRjaGVzID0gY29tcHV0ZUhvdWdoTWF0Y2hlcyh7XG4gICAgICBrZXlwb2ludHM6IGtleWZyYW1lLnBvaW50cyxcbiAgICAgIHF1ZXJ5cG9pbnRzLFxuICAgICAga2V5d2lkdGg6IGtleWZyYW1lLndpZHRoLFxuICAgICAga2V5aGVpZ2h0OiBrZXlmcmFtZS5oZWlnaHQsXG4gICAgICBxdWVyeXdpZHRoLFxuICAgICAgcXVlcnloZWlnaHQsXG4gICAgICBtYXRjaGVzLFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19USU1FKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXhlYyB0aW1lIHVudGlsIGZpcnN0IGhvdWdoIG1hdGNoOiAnLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF9zdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19NQVRDSCkge1xuICAgICAgY29uc3QgZE1hdGNoZXMgPSB3aW5kb3cuZGVidWdNYXRjaC5xdWVyeWtleWZyYW1lc1tpXS5ob3VnaE1hdGNoZXMxO1xuICAgICAgY29uc29sZS5sb2coXCJob3VnaCBtYXRjaGVzIDFcIiwgaG91Z2hNYXRjaGVzLmxlbmd0aCwgZE1hdGNoZXMubGVuZ3RoKTtcbiAgICAgIGlmIChob3VnaE1hdGNoZXMubGVuZ3RoICE9PSBkTWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgbWF0Y2hlczEgbGVuZ3RoXCIpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VnaE1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhvdWdoTWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXggIT09IGRNYXRjaGVzW2ldLmlucyB8fCBob3VnaE1hdGNoZXNbaV0ua2V5cG9pbnRJbmRleCAhPT0gZE1hdGNoZXNbaV0ucmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgbWF0Y2hlczFcIiwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzcmNQb2ludHMgPSBbXTtcbiAgICBjb25zdCBkc3RQb2ludHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdWdoTWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcXVlcnlwb2ludCA9IHF1ZXJ5cG9pbnRzW2hvdWdoTWF0Y2hlc1tpXS5xdWVyeXBvaW50SW5kZXhdO1xuICAgICAgY29uc3Qga2V5cG9pbnQgPSBrZXlwb2ludHNbaG91Z2hNYXRjaGVzW2ldLmtleXBvaW50SW5kZXhdO1xuICAgICAgc3JjUG9pbnRzLnB1c2goWyBrZXlwb2ludC54MkQsIGtleXBvaW50LnkyRCBdKTtcbiAgICAgIGRzdFBvaW50cy5wdXNoKFsgcXVlcnlwb2ludC54MkQsIHF1ZXJ5cG9pbnQueTJEIF0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICAgIHdpbmRvdy5kZWJ1Zy5ob21vZ3JhcGh5SW5kZXggPSAtMTsgLy8gKzEgYXQgc3RhcnRcbiAgICB9XG5cbiAgICBjb25zdCBIID0gY29tcHV0ZUhvbW9ncmFwaHkoe1xuICAgICAgc3JjUG9pbnRzLFxuICAgICAgZHN0UG9pbnRzLFxuICAgICAga2V5ZnJhbWUsXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RJTUUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgdW50aWwgZmlyc3QgSG9tb2dyYXBoeTogJywgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfc3RhcnQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICAgIGNvbnN0IGRIID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbaV0uSDE7XG4gICAgICBpZiAoIXdpbmRvdy5jbXBBcnJheShILCBkSCwgMC4wMDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIEgxXCIsIGksIEgsIGRIKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoSCA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICBjb25zdCBpbmxpZXJNYXRjaGVzID0gX2ZpbmRJbmxpZXJNYXRjaGVzKHtcbiAgICAgIHF1ZXJ5cG9pbnRzLFxuICAgICAga2V5cG9pbnRzOiBrZXlmcmFtZS5wb2ludHMsXG4gICAgICBILFxuICAgICAgbWF0Y2hlczogaG91Z2hNYXRjaGVzLFxuICAgICAgdGhyZXNob2xkOiBJTkxJRVJfVEhSRVNIT0xEXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RJTUUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgdW50aWwgZmlyc3QgaW5saWVyIG1hdGNoZXM6ICcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3N0YXJ0KTtcbiAgICB9XG5cbiAgICBpZiAoaW5saWVyTWF0Y2hlcy5sZW5ndGggPCBNSU5fTlVNX0lOTElFUlMpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICAgIGNvbnN0IGRNYXRjaGVzID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbaV0uaW5saWVyTWF0Y2hlczE7XG4gICAgICBjb25zb2xlLmxvZyhcImlubGllciBtYXRjaGVzIDFcIiwgaW5saWVyTWF0Y2hlcy5sZW5ndGgsIGRNYXRjaGVzLmxlbmd0aCk7XG4gICAgICBpZiAoaW5saWVyTWF0Y2hlcy5sZW5ndGggIT09IGRNYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBpbmxpZXJNYXRjaGVzMSBsZW5ndGhcIik7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlubGllck1hdGNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlubGllck1hdGNoZXNbaV0ucXVlcnlwb2ludEluZGV4ICE9PSBkTWF0Y2hlc1tpXS5pbnMgfHwgaW5saWVyTWF0Y2hlc1tpXS5rZXlwb2ludEluZGV4ICE9PSBkTWF0Y2hlc1tpXS5yZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBpbmxpZXJNYXRjaGVzMVwiLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRvIGFub3RoZXIgbG9vcCBvZiBtYXRjaCB1c2luZyB0aGUgaG9tb2dyYXBoeVxuICAgIGNvbnN0IEhJbnYgPSBtYXRyaXhJbnZlcnNlMzMoSCwgMC4wMDAwMSk7XG4gICAgY29uc3QgZFRocmVzaG9sZDIgPSAxMCAqIDEwO1xuICAgIGNvbnN0IG1hdGNoZXMyID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBxdWVyeXBvaW50cy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgcXVlcnlwb2ludCA9IHF1ZXJ5cG9pbnRzW2pdO1xuICAgICAgY29uc3QgbWFwcXVlcnlwb2ludCA9IG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzKFtxdWVyeXBvaW50LngyRCwgcXVlcnlwb2ludC55MkRdLCBISW52KTtcblxuICAgICAgbGV0IGJlc3RJbmRleCA9IC0xO1xuICAgICAgbGV0IGJlc3REMSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgbGV0IGJlc3REMiA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleXBvaW50cy5sZW5ndGg7IGsrKykge1xuICAgICAgICBjb25zdCBrZXlwb2ludCA9IGtleXBvaW50c1trXTtcbiAgICAgICAgaWYgKGtleXBvaW50Lm1heGltYSAhPSBxdWVyeXBvaW50Lm1heGltYSkgY29udGludWU7XG5cbiAgICAgICAgLy8gY2hlY2sgZGlzdGFuY2UgdGhyZXNob2xkXG4gICAgICAgIGNvbnN0IGQyID0gKGtleXBvaW50LngyRCAtIG1hcHF1ZXJ5cG9pbnRbMF0pICogKGtleXBvaW50LngyRCAtIG1hcHF1ZXJ5cG9pbnRbMF0pXG4gICAgICAgICAgICAgICAgICArIChrZXlwb2ludC55MkQgLSBtYXBxdWVyeXBvaW50WzFdKSAqIChrZXlwb2ludC55MkQgLSBtYXBxdWVyeXBvaW50WzFdKTtcbiAgICAgICAgaWYgKGQyID4gZFRocmVzaG9sZDIpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGQgPSBoYW1taW5nQ29tcHV0ZSh7djE6IGtleXBvaW50LmRlc2NyaXB0b3JzLCB2MjogcXVlcnlwb2ludC5kZXNjcmlwdG9yc30pO1xuICAgICAgICBpZiAoZCA8IGJlc3REMSkge1xuICAgICAgICAgIGJlc3REMiA9IGJlc3REMTtcbiAgICAgICAgICBiZXN0RDEgPSBkO1xuICAgICAgICAgIGJlc3RJbmRleCA9IGs7XG4gICAgICAgIH0gZWxzZSBpZiAoZCA8IGJlc3REMikge1xuICAgICAgICAgIGJlc3REMiA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGJlc3RJbmRleCAhPT0gLTEgJiYgKGJlc3REMiA9PT0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgKDEuMCAqIGJlc3REMSAvIGJlc3REMikgPCBIQU1NSU5HX1RIUkVTSE9MRCkpIHtcbiAgICAgICAgbWF0Y2hlczIucHVzaCh7cXVlcnlwb2ludEluZGV4OiBqLCBrZXlwb2ludEluZGV4OiBiZXN0SW5kZXh9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RJTUUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgdW50aWwgc2Vjb25kIG1hdGNoZXM6ICcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3N0YXJ0KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgICBjb25zdCBkTWF0Y2hlcyA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW2ldLm1hdGNoZXMyO1xuICAgICAgY29uc29sZS5sb2coXCJtYXRjaGVzIDJcIiwgbWF0Y2hlczIubGVuZ3RoLCBkTWF0Y2hlcy5sZW5ndGgpO1xuICAgICAgaWYgKG1hdGNoZXMyLmxlbmd0aCAhPT0gZE1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG1hdGNoZXMyIGxlbmd0aFwiKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlczIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG1hdGNoZXMyW2ldLnF1ZXJ5cG9pbnRJbmRleCAhPT0gZE1hdGNoZXNbaV0uaW5zIHx8IG1hdGNoZXMyW2ldLmtleXBvaW50SW5kZXggIT09IGRNYXRjaGVzW2ldLnJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG1hdGNoZXMyXCIsIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaG91Z2hNYXRjaGVzMiA9IGNvbXB1dGVIb3VnaE1hdGNoZXMoe1xuICAgICAga2V5cG9pbnRzOiBrZXlmcmFtZS5wb2ludHMsXG4gICAgICBxdWVyeXBvaW50cyxcbiAgICAgIGtleXdpZHRoOiBrZXlmcmFtZS53aWR0aCxcbiAgICAgIGtleWhlaWdodDoga2V5ZnJhbWUuaGVpZ2h0LFxuICAgICAgcXVlcnl3aWR0aCxcbiAgICAgIHF1ZXJ5aGVpZ2h0LFxuICAgICAgbWF0Y2hlczogbWF0Y2hlczIsXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RJTUUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdleGVjIHRpbWUgdW50aWwgc2Vjb25kIGhvdWdoIG1hdGNoZXM6ICcsIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3N0YXJ0KTtcbiAgICB9XG5cbiAgICBjb25zdCBzcmNQb2ludHMyID0gW107XG4gICAgY29uc3QgZHN0UG9pbnRzMiA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91Z2hNYXRjaGVzMi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcXVlcnlwb2ludCA9IHF1ZXJ5cG9pbnRzW2hvdWdoTWF0Y2hlczJbaV0ucXVlcnlwb2ludEluZGV4XTtcbiAgICAgIGNvbnN0IGtleXBvaW50ID0ga2V5cG9pbnRzW2hvdWdoTWF0Y2hlczJbaV0ua2V5cG9pbnRJbmRleF07XG4gICAgICBzcmNQb2ludHMyLnB1c2goWyBrZXlwb2ludC54MkQsIGtleXBvaW50LnkyRCBdKTtcbiAgICAgIGRzdFBvaW50czIucHVzaChbIHF1ZXJ5cG9pbnQueDJELCBxdWVyeXBvaW50LnkyRCBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBIMiA9IGNvbXB1dGVIb21vZ3JhcGh5KHtcbiAgICAgIHNyY1BvaW50czogc3JjUG9pbnRzMixcbiAgICAgIGRzdFBvaW50czogZHN0UG9pbnRzMixcbiAgICAgIGtleWZyYW1lXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX01BVENIKSB7XG4gICAgICBjb25zdCBkSCA9IHdpbmRvdy5kZWJ1Z01hdGNoLnF1ZXJ5a2V5ZnJhbWVzW2ldLkgyO1xuICAgICAgaWYgKCF3aW5kb3cuY21wQXJyYXkoSDIsIGRILCAwLjAwMDEpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIEgyXCIsIGksIEgyLCBkSCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19USU1FKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXhlYyB0aW1lIHVudGlsIHNlY29uZCBob21vZ3JhcGh5OiAnLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIF9zdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKEgyID09PSBudWxsKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGlubGllck1hdGNoZXMyID0gX2ZpbmRJbmxpZXJNYXRjaGVzKHtcbiAgICAgIHF1ZXJ5cG9pbnRzLFxuICAgICAga2V5cG9pbnRzOiBrZXlmcmFtZS5wb2ludHMsXG4gICAgICBIOiBIMixcbiAgICAgIG1hdGNoZXM6IGhvdWdoTWF0Y2hlczIsXG4gICAgICB0aHJlc2hvbGQ6IElOTElFUl9USFJFU0hPTERcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfTUFUQ0gpIHtcbiAgICAgIGNvbnN0IGRNYXRjaGVzID0gd2luZG93LmRlYnVnTWF0Y2gucXVlcnlrZXlmcmFtZXNbaV0uaW5saWVyTWF0Y2hlczI7XG4gICAgICBjb25zb2xlLmxvZyhcImlubGllciBtYXRjaGVzIDJcIiwgaW5saWVyTWF0Y2hlczIubGVuZ3RoLCBkTWF0Y2hlcy5sZW5ndGgpO1xuICAgICAgaWYgKGlubGllck1hdGNoZXMyLmxlbmd0aCAhPT0gZE1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGlubGllck1hdGNoZXMyIGxlbmd0aFwiKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5saWVyTWF0Y2hlczIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlubGllck1hdGNoZXMyW2ldLnF1ZXJ5cG9pbnRJbmRleCAhPT0gZE1hdGNoZXNbaV0uaW5zIHx8IGlubGllck1hdGNoZXMyW2ldLmtleXBvaW50SW5kZXggIT09IGRNYXRjaGVzW2ldLnJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGlubGllck1hdGNoZXMyXCIsIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19USU1FKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXhlYyB0aW1lIHVudGlsIHNlY29uZCBpbmxpZXIgbWF0Y2hlczogJywgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBfc3RhcnQpO1xuICAgIH1cblxuICAgIGlmIChpbmxpZXJNYXRjaGVzMi5sZW5ndGggPCBNSU5fTlVNX0lOTElFUlMpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0Lm1hdGNoZXMubGVuZ3RoIDwgaW5saWVyTWF0Y2hlczIubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIGtleWZyYW1lSW5kZXg6IGksXG4gICAgICAgIG1hdGNoZXM6IGlubGllck1hdGNoZXMyLFxuICAgICAgICBIOiBIMixcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgX3F1ZXJ5ID0gKHtub2RlLCBrZXlwb2ludHMsIHF1ZXJ5cG9pbnQsIHF1ZXVlLCBrZXlwb2ludEluZGV4ZXMsIG51bVBvcH0pID0+IHtcbiAgaWYgKG5vZGUubGVhZikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5wb2ludEluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleXBvaW50SW5kZXhlcy5wdXNoKG5vZGUucG9pbnRJbmRleGVzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGlzdGFuY2VzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5vZGUuY2hpbGRyZW5baV07XG4gICAgY29uc3QgY2VudGVyUG9pbnRJbmRleCA9IGNoaWxkTm9kZS5jZW50ZXJQb2ludEluZGV4O1xuICAgIGNvbnN0IGQgPSBoYW1taW5nQ29tcHV0ZSh7djE6IGtleXBvaW50c1tjZW50ZXJQb2ludEluZGV4XS5kZXNjcmlwdG9ycywgdjI6IHF1ZXJ5cG9pbnQuZGVzY3JpcHRvcnN9KTtcbiAgICBkaXN0YW5jZXMucHVzaChkKTtcbiAgfVxuXG4gIGxldCBtaW5EID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIG1pbkQgPSBNYXRoLm1pbihtaW5ELCBkaXN0YW5jZXNbaV0pO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRpc3RhbmNlc1tpXSAhPT0gbWluRCkge1xuICAgICAgcXVldWUucHVzaCh7bm9kZTogbm9kZS5jaGlsZHJlbltpXSwgZDogZGlzdGFuY2VzW2ldfSk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkaXN0YW5jZXNbaV0gPT09IG1pbkQpIHtcbiAgICAgIF9xdWVyeSh7bm9kZTogbm9kZS5jaGlsZHJlbltpXSwga2V5cG9pbnRzLCBxdWVyeXBvaW50LCBxdWV1ZSwga2V5cG9pbnRJbmRleGVzLCBudW1Qb3B9KTtcbiAgICB9XG4gIH1cblxuICBpZiAobnVtUG9wIDwgQ0xVU1RFUl9NQVhfUE9QICYmIHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCB7bm9kZSwgZH0gPSBxdWV1ZS5wb3AoKTtcbiAgICBudW1Qb3AgKz0gMTtcbiAgICBfcXVlcnkoe25vZGUsIGtleXBvaW50cywgcXVlcnlwb2ludCwgcXVldWUsIGtleXBvaW50SW5kZXhlcywgbnVtUG9wfSk7XG4gIH1cbn07XG5cbmNvbnN0IF9maW5kSW5saWVyTWF0Y2hlcyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtrZXlwb2ludHMsIHF1ZXJ5cG9pbnRzLCBILCBtYXRjaGVzLCB0aHJlc2hvbGR9ID0gb3B0aW9ucztcblxuICBjb25zdCB0aHJlc2hvbGQyID0gdGhyZXNob2xkICogdGhyZXNob2xkO1xuXG4gIGNvbnN0IGdvb2RNYXRjaGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHF1ZXJ5cG9pbnQgPSBxdWVyeXBvaW50c1ttYXRjaGVzW2ldLnF1ZXJ5cG9pbnRJbmRleF07XG4gICAgY29uc3Qga2V5cG9pbnQgPSBrZXlwb2ludHNbbWF0Y2hlc1tpXS5rZXlwb2ludEluZGV4XTtcbiAgICBjb25zdCBtcCA9IG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzKFtrZXlwb2ludC54MkQsIGtleXBvaW50LnkyRF0sIEgpO1xuICAgIGNvbnN0IGQyID0gKG1wWzBdIC0gcXVlcnlwb2ludC54MkQpICogKG1wWzBdIC0gcXVlcnlwb2ludC54MkQpICsgKG1wWzFdIC0gcXVlcnlwb2ludC55MkQpICogKG1wWzFdIC0gcXVlcnlwb2ludC55MkQpO1xuICAgIGlmIChkMiA8PSB0aHJlc2hvbGQyKSB7XG4gICAgICBnb29kTWF0Y2hlcy5wdXNoKCBtYXRjaGVzW2ldICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBnb29kTWF0Y2hlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1hdGNoXG59XG4iLCJjb25zdCB7Q3Vtc3VtfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2N1bXN1bScpO1xuXG5jb25zdCBTRUFSQ0hfU0laRTEgPSAxMDtcbmNvbnN0IFNFQVJDSF9TSVpFMiA9IDI7XG5cbmNvbnN0IFRFTVBMQVRFX1NJWkUgPSAyMlxuY29uc3QgVEVNUExBVEVfU0RfVEhSRVNIID0gNS4wO1xuY29uc3QgTUFYX1NJTV9USFJFU0ggPSAwLjk1O1xuXG5jb25zdCBNQVhfVEhSRVNIID0gMC45O1xuY29uc3QgTUlOX1RIUkVTSCA9IDAuNTU7XG5jb25zdCBTRF9USFJFU0ggPSA4LjA7XG5jb25zdCBPQ0NVUEFOQ1lfU0laRSA9IDI0ICogMiAvIDM7XG5cbi8qXG4gKiBJbnB1dCBpbWFnZSBpcyBpbiBncmV5IGZvcm1hdC4gdGhlIGltYWdlRGF0YSBhcnJheSBzaXplIGlzIHdpZHRoICogaGVpZ2h0LiB2YWx1ZSByYW5nZSBmcm9tIDAtMjU1XG4gKiBwaXhlbCB2YWx1ZSBhdCByb3cgciBhbmQgYyA9IGltYWdlRGF0YVtyICogd2lkdGggKyBjXVxuICpcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gb3B0aW9ucy5pbWFnZURhdGFcbiAqIEBwYXJhbSB7aW50fSBvcHRpb25zLndpZHRoIGltYWdlIHdpZHRoXG4gKiBAcGFyYW0ge2ludH0gb3B0aW9ucy5oZWlnaHQgaW1hZ2UgaGVpZ2h0XG4gKi9cbmNvbnN0IGV4dHJhY3QgPSAoaW1hZ2UpID0+IHtcbiAgY29uc3Qge2RhdGE6IGltYWdlRGF0YSwgd2lkdGgsIGhlaWdodCwgZHBpfSA9IGltYWdlO1xuXG4gIC8vIFN0ZXAgMSAtIGZpbHRlciBvdXQgaW50ZXJlc3RpbmcgcG9pbnRzLiBJbnRlcmVzdGluZyBwb2ludHMgaGF2ZSBzdHJvbmcgcGl4ZWwgdmFsdWUgY2hhbmdlZCBhY3Jvc3MgbmVpZ2hib3Vyc1xuICBjb25zdCBpc1BpeGVsU2VsZWN0ZWQgPSBbd2lkdGggKiBoZWlnaHRdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGlzUGl4ZWxTZWxlY3RlZC5sZW5ndGg7IGkrKykgaXNQaXhlbFNlbGVjdGVkW2ldID0gZmFsc2U7XG5cbiAgLy8gU3RlcCAxLjEgY29uc2lkZXIgYSBwaXhlbCBhdCBwb3NpdGlvbiAoeCwgeSkuIGNvbXB1dGU6XG4gIC8vICAgZHggPSAoKGRhdGFbeCsxLCB5LTFdIC0gZGF0YVt4LTEsIHktMV0pICsgKGRhdGFbeCsxLCB5XSAtIGRhdGFbeC0xLCB5XSkgKyAoZGF0YVt4KzEsIHkrMV0gLSBkYXRhW3gtMSwgeS0xXSkpIC8gMjU2IC8gM1xuICAvLyAgIGR5ID0gKChkYXRhW3grMSwgeSsxXSAtIGRhdGFbeCsxLCB5LTFdKSArIChkYXRhW3gsIHkrMV0gLSBkYXRhW3gsIHktMV0pICsgKGRhdGFbeC0xLCB5KzFdIC0gZGF0YVt4LTEsIHktMV0pKSAvIDI1NiAvIDNcbiAgLy8gICBkVmFsdWUgPSAgc3FydChkeF4yICsgZHleMikgLyAyO1xuICBjb25zdCBkVmFsdWUgPSBuZXcgRmxvYXQzMkFycmF5KGltYWdlRGF0YS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICBkVmFsdWVbaV0gPSAtMTtcbiAgICBkVmFsdWVbd2lkdGggKiAoaGVpZ2h0LTEpICsgaV0gPSAtMTtcbiAgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgZFZhbHVlW2oqd2lkdGhdID0gLTE7XG4gICAgZFZhbHVlW2oqd2lkdGggKyB3aWR0aC0xXSA9IC0xO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB3aWR0aC0xOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IGhlaWdodC0xOyBqKyspIHtcbiAgICAgIGxldCBwb3MgPSBpICsgd2lkdGggKiBqO1xuXG4gICAgICBsZXQgZHggPSAwLjA7XG4gICAgICBsZXQgZHkgPSAwLjA7XG4gICAgICBmb3IgKGxldCBrID0gLTE7IGsgPD0gMTsgaysrKSB7XG4gICAgICAgIGR4ICs9IChpbWFnZURhdGFbcG9zICsgd2lkdGgqayArIDFdIC0gaW1hZ2VEYXRhW3BvcyArIHdpZHRoKmsgLTFdKTtcbiAgICAgICAgZHkgKz0gKGltYWdlRGF0YVtwb3MgKyB3aWR0aCArIGtdIC0gaW1hZ2VEYXRhW3BvcyAtIHdpZHRoICsga10pO1xuICAgICAgfVxuICAgICAgZHggLz0gKDMgKiAyNTYpO1xuICAgICAgZHkgLz0gKDMgKiAyNTYpO1xuICAgICAgZFZhbHVlW3Bvc10gPSBNYXRoLnNxcnQoIChkeCAqIGR4ICsgZHkgKiBkeSkgLyAyKTtcbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDEuMiAtIHNlbGVjdCBhbGwgcGl4ZWwgd2hpY2ggaXMgZFZhbHVlIGxhcmdlc3QgdGhhbiBhbGwgaXRzIG5laWdoYm91ciBhcyBcInBvdGVudGlhbFwiIGNhbmRpZGF0ZVxuICAvLyAgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBwb2ludHMgaXMgc3RpbGwgdG9vIG1hbnksIHNvIHdlIHVzZSB0aGUgdmFsdWUgdG8gZnVydGhlciBmaWx0ZXIgKGUuZy4gbGFyZ2VzdCB0aGUgZFZhbHVlLCB0aGUgYmV0dGVyKVxuICBjb25zdCBkVmFsdWVIaXN0ID0gbmV3IFVpbnQzMkFycmF5KDEwMDApOyAvLyBoaXN0b2dyYW0gb2YgZHZhbHVlIHNjYWxlZCB0byBbMCwgMTAwMClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIGRWYWx1ZUhpc3RbaV0gPSAwO1xuICBjb25zdCBuZWlnaGJvdXJPZmZzZXRzID0gWy0xLCAxLCAtd2lkdGgsIHdpZHRoXTtcbiAgbGV0IGFsbENvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCB3aWR0aC0xOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IGhlaWdodC0xOyBqKyspIHtcbiAgICAgIGxldCBwb3MgPSBpICsgd2lkdGggKiBqO1xuICAgICAgbGV0IGlzTWF4ID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGQgPSAwOyBkIDwgbmVpZ2hib3VyT2Zmc2V0cy5sZW5ndGg7IGQrKykge1xuICAgICAgICBpZiAoZFZhbHVlW3Bvc10gPD0gZFZhbHVlW3BvcyArIG5laWdoYm91ck9mZnNldHNbZF1dKSB7XG4gICAgICAgICAgaXNNYXggPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzTWF4KSB7XG4gICAgICAgIGxldCBrID0gTWF0aC5mbG9vcihkVmFsdWVbcG9zXSAqIDEwMDApO1xuICAgICAgICBpZiAoayA+IDk5OSkgayA9IDk5OTsgLy8gaz45OTkgc2hvdWxkIG5vdCBoYXBwZW4gaWYgY29tcHV0YWl0b24gaXMgY29ycmVjdGlvblxuICAgICAgICBpZiAoayA8IDApIGsgPSAwOyAvLyBrPDAgc2hvdWxkIG5vdCBoYXBwZW4gaWYgY29tcHV0YWl0b24gaXMgY29ycmVjdGlvblxuICAgICAgICBkVmFsdWVIaXN0W2tdICs9IDE7XG4gICAgICAgIGFsbENvdW50ICs9IDE7XG4gICAgICAgIGlzUGl4ZWxTZWxlY3RlZFtwb3NdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyByZWR1Y2UgbnVtYmVyIG9mIHBvaW50cyBhY2NvcmRpbmcgdG8gZFZhbHVlLlxuICAvLyBhY3R1YWxseSwgdGhlIHdob2xlIFN0ZXAgMS4gbWlnaHQgYmUgYmV0dGVyIHRvIGp1c3Qgc29ydCB0aGUgZHZhbHVlcyBhbmQgcGljayB0aGUgdG9wICgwLjAyICogd2lkdGggKiBoZWlnaHQpIHBvaW50c1xuICBjb25zdCBtYXhQb2ludHMgPSAwLjAyICogd2lkdGggKiBoZWlnaHQ7XG4gIGxldCBrID0gOTk5O1xuICBsZXQgZmlsdGVyZWRDb3VudCA9IDA7XG4gIHdoaWxlIChrID49IDApIHtcbiAgICBmaWx0ZXJlZENvdW50ICs9IGRWYWx1ZUhpc3Rba107XG4gICAgaWYgKGZpbHRlcmVkQ291bnQgPiBtYXhQb2ludHMpIGJyZWFrO1xuICAgIGstLTtcbiAgfVxuXG4gIC8vY29uc29sZS5sb2coXCJpbWFnZSBzaXplOiBcIiwgd2lkdGggKiBoZWlnaHQpO1xuICAvL2NvbnNvbGUubG9nKFwiZXh0cmFjdGVkIGZlYXR1ZXM6IFwiLCBhbGxDb3VudCk7XG4gIC8vY29uc29sZS5sb2coXCJmaWx0ZXJlZCBmZWF0dWVzOiBcIiwgZmlsdGVyZWRDb3VudCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpc1BpeGVsU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNQaXhlbFNlbGVjdGVkW2ldKSB7XG4gICAgICBpZiAoZFZhbHVlW2ldICogMTAwMCA8IGspIGlzUGl4ZWxTZWxlY3RlZFtpXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZCBjb3VudDogXCIsIGlzUGl4ZWxTZWxlY3RlZC5yZWR1Y2UoKGEsIGIpID0+IHtyZXR1cm4gYSArIChiPzE6MCk7fSwgMCkpO1xuXG4gIC8vIFN0ZXAgMlxuICAvLyBwcmVidWlsZCBjdW11bGF0aXZlIHN1bSBtYXRyaXggZm9yIGZhc3QgY29tcHV0YXRpb25cbiAgY29uc3QgaW1hZ2VEYXRhU3FyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaW1hZ2VEYXRhU3FyW2ldID0gaW1hZ2VEYXRhW2ldICogaW1hZ2VEYXRhW2ldO1xuICB9XG4gIGNvbnN0IGltYWdlRGF0YUN1bXN1bSA9IG5ldyBDdW1zdW0oaW1hZ2VEYXRhLCB3aWR0aCwgaGVpZ2h0KTtcbiAgY29uc3QgaW1hZ2VEYXRhU3FyQ3Vtc3VtID0gbmV3IEN1bXN1bShpbWFnZURhdGFTcXIsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIC8vIGhvbGRzIHRoZSBtYXggc2ltaWxhcmlsaXkgdmFsdWUgY29tcHV0ZWQgd2l0aGluIFNFQVJDSCBhcmVhIG9mIGVhY2ggcGl4ZWxcbiAgY29uc3QgZmVhdHVyZU1hcCA9IG5ldyBGbG9hdDMyQXJyYXkoaW1hZ2VEYXRhLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgY29uc3QgcG9zID0gaiAqIHdpZHRoICsgaTtcbiAgICAgIGlmICghaXNQaXhlbFNlbGVjdGVkW3Bvc10pIHtcbiAgICAgICAgZmVhdHVyZU1hcFtwb3NdID0gMS4wO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmxlbiA9IF90ZW1wbGF0ZVZhcih7aW1hZ2UsIGN4OiBpLCBjeTogaiwgc2RUaHJlc2g6IFRFTVBMQVRFX1NEX1RIUkVTSCwgaW1hZ2VEYXRhQ3Vtc3VtLCBpbWFnZURhdGFTcXJDdW1zdW19KTtcbiAgICAgIGlmICh2bGVuID09PSBudWxsKSB7XG4gICAgICAgIGZlYXR1cmVNYXBbcG9zXSA9IDEuMDtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBtYXggPSAtMS4wO1xuICAgICAgZm9yIChsZXQgamogPSAtU0VBUkNIX1NJWkUxOyBqaiA8PSBTRUFSQ0hfU0laRTE7IGpqKyspIHtcbiAgICAgICAgZm9yIChsZXQgaWkgPSAtU0VBUkNIX1NJWkUxOyBpaSA8PSBTRUFSQ0hfU0laRTE7IGlpKyspIHtcbiAgICAgICAgICBpZiAoaWkgKiBpaSArIGpqICogamogPD0gU0VBUkNIX1NJWkUyICogU0VBUkNIX1NJWkUyKSBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCBzaW0gPSBfZ2V0U2ltaWxhcml0eSh7aW1hZ2UsIGN4OiBpK2lpLCBjeTogaitqaiwgdmxlbjogdmxlbiwgdHg6IGksIHR5OiBqLCBpbWFnZURhdGFDdW1zdW0sIGltYWdlRGF0YVNxckN1bXN1bX0pO1xuXG4gICAgICAgICAgaWYgKHNpbSA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgICBpZiAoc2ltID4gbWF4KSB7XG4gICAgICAgICAgICBtYXggPSBzaW07XG4gICAgICAgICAgICBpZiAobWF4ID4gTUFYX1NJTV9USFJFU0gpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ID4gTUFYX1NJTV9USFJFU0gpIGJyZWFrO1xuICAgICAgfVxuICAgICAgZmVhdHVyZU1hcFtwb3NdID0gbWF4O1xuICAgIH1cbiAgfVxuXG4gIGlmICh3aW5kb3cuREVCVUcpIHtcbiAgICBjb25zb2xlLmxvZyhcImZlYXR1cmVtYXBcIiwgZmVhdHVyZU1hcC5sZW5ndGgsIHdpbmRvdy5kZWJ1Z0NvbnRlbnQuZmVhdHVyZU1hcHNbd2luZG93LmRlYnVnLmV4dHJhY3RJbmRleF0ubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVNYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICggTWF0aC5hYnMoZmVhdHVyZU1hcFtpXSAtIHdpbmRvdy5kZWJ1Z0NvbnRlbnQuZmVhdHVyZU1hcHNbd2luZG93LmRlYnVnLmV4dHJhY3RJbmRleF1baV0pID4gMC4wMDAwMSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluY29ycmVjdCBmZWF0dXJlIG1hcFwiLCBpLCBmZWF0dXJlTWFwW2ldLCB3aW5kb3cuZGVidWdDb250ZW50LmZlYXR1cmVNYXBzW3dpbmRvdy5kZWJ1Zy5leHRyYWN0SW5kZXhdW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGVwIDIuMiBzZWxlY3QgZmVhdHVyZVxuICBjb25zdCBjb29yZHMgPSBfc2VsZWN0RmVhdHVyZSh7aW1hZ2UsIGZlYXR1cmVNYXAsIHRlbXBsYXRlU2l6ZTogVEVNUExBVEVfU0laRSwgc2VhcmNoU2l6ZTogU0VBUkNIX1NJWkUyLCBvY2NTaXplOiBPQ0NVUEFOQ1lfU0laRSwgbWF4U2ltVGhyZXNoOiBNQVhfVEhSRVNILCBtaW5TaW1UaHJlc2g6IE1JTl9USFJFU0gsIHNkVGhyZXNoOiBTRF9USFJFU0gsIGltYWdlRGF0YUN1bXN1bSwgaW1hZ2VEYXRhU3FyQ3Vtc3VtfSk7XG5cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuY29uc3QgX3NlbGVjdEZlYXR1cmUgPSAob3B0aW9ucykgPT4ge1xuICBsZXQge2ltYWdlLCBmZWF0dXJlTWFwLCB0ZW1wbGF0ZVNpemUsIHNlYXJjaFNpemUsIG9jY1NpemUsIG1heFNpbVRocmVzaCwgbWluU2ltVGhyZXNoLCBzZFRocmVzaCwgaW1hZ2VEYXRhQ3Vtc3VtLCBpbWFnZURhdGFTcXJDdW1zdW19ID0gb3B0aW9ucztcbiAgY29uc3Qge2RhdGE6IGltYWdlRGF0YSwgd2lkdGgsIGhlaWdodCwgZHBpfSA9IGltYWdlO1xuXG4gIC8vY29uc29sZS5sb2coXCJwYXJhbXM6IFwiLCB0ZW1wbGF0ZVNpemUsIHRlbXBsYXRlU2l6ZSwgb2NjU2l6ZSwgbWF4U2ltVGhyZXNoLCBtaW5TaW1UaHJlc2gsIHNkVGhyZXNoKTtcblxuICBvY2NTaXplICo9IDI7XG5cbiAgY29uc3QgZGl2U2l6ZSA9ICh0ZW1wbGF0ZVNpemUgKiAyICsgMSkgKiAzO1xuICBjb25zdCB4RGl2ID0gTWF0aC5mbG9vcih3aWR0aCAvIGRpdlNpemUpO1xuICBjb25zdCB5RGl2ID0gTWF0aC5mbG9vcihoZWlnaHQgLyBkaXZTaXplKTtcblxuICBsZXQgbWF4RmVhdHVyZU51bSA9IE1hdGguZmxvb3Iod2lkdGggLyBvY2NTaXplKSAqIE1hdGguZmxvb3IoaGVpZ2h0IC8gb2NjU2l6ZSkgKyB4RGl2ICogeURpdjtcbiAgLy9jb25zb2xlLmxvZyhcIm1heCBmZWF0dXJlIG51bTogXCIsIG1heEZlYXR1cmVOdW0pO1xuXG4gIGNvbnN0IGNvb3JkcyA9IFtdO1xuICBjb25zdCBpbWFnZTIgPSBuZXcgRmxvYXQzMkFycmF5KGltYWdlRGF0YS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlMi5sZW5ndGg7IGkrKykge1xuICAgIGltYWdlMltpXSA9IGZlYXR1cmVNYXBbaV07XG4gIH1cblxuICBsZXQgbnVtID0gMDtcbiAgd2hpbGUgKG51bSA8IG1heEZlYXR1cmVOdW0pIHtcbiAgICBsZXQgbWluU2ltID0gbWF4U2ltVGhyZXNoO1xuICAgIGxldCBjeCA9IC0xO1xuICAgIGxldCBjeSA9IC0xO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICBpZiAoaW1hZ2UyW2oqd2lkdGgraV0gPCBtaW5TaW0pIHtcbiAgICAgICAgICBtaW5TaW0gPSBpbWFnZTJbaip3aWR0aCtpXTtcbiAgICAgICAgICBjeCA9IGk7XG4gICAgICAgICAgY3kgPSBqO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjeCA9PT0gLTEpIGJyZWFrO1xuXG4gICAgY29uc3QgdmxlbiA9IF90ZW1wbGF0ZVZhcih7aW1hZ2UsIGN4OiBjeCwgY3k6IGN5LCBzZFRocmVzaDogMCwgaW1hZ2VEYXRhQ3Vtc3VtLCBpbWFnZURhdGFTcXJDdW1zdW19KTtcbiAgICBpZiAodmxlbiA9PT0gbnVsbCkge1xuICAgICAgaW1hZ2UyWyBjeSAqIHdpZHRoICsgY3ggXSA9IDEuMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAodmxlbiAvICh0ZW1wbGF0ZVNpemUgKiAyICsgMSkgPCBzZFRocmVzaCkge1xuICAgICAgaW1hZ2UyWyBjeSAqIHdpZHRoICsgY3ggXSA9IDEuMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCBtaW4gPSAxLjA7XG4gICAgbGV0IG1heCA9IC0xLjA7XG5cbiAgICBmb3IgKGxldCBqID0gLXNlYXJjaFNpemU7IGogPD0gc2VhcmNoU2l6ZTsgaisrKSB7XG4gICAgICBmb3IgKGxldCBpID0gLXNlYXJjaFNpemU7IGkgPD0gc2VhcmNoU2l6ZTsgaSsrKSB7XG4gICAgICAgIGlmIChpKmkgKyBqKmogPiBzZWFyY2hTaXplICogc2VhcmNoU2l6ZSkgY29udGludWU7XG4gICAgICAgIGlmIChpID09PSAwICYmIGogPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IHNpbSA9IF9nZXRTaW1pbGFyaXR5KHtpbWFnZSwgdmxlbiwgY3g6IGN4K2ksIGN5OiBjeStqLCB0eDogY3gsIHR5OmN5LCBpbWFnZURhdGFDdW1zdW0sIGltYWdlRGF0YVNxckN1bXN1bX0pO1xuICAgICAgICBpZiAoc2ltID09PSBudWxsKSBjb250aW51ZTtcblxuICAgICAgICBpZiAoc2ltIDwgbWluKSB7XG4gICAgICAgICAgbWluID0gc2ltO1xuICAgICAgICAgIGlmIChtaW4gPCBtaW5TaW1UaHJlc2ggJiYgbWluIDwgbWluU2ltKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2ltID4gbWF4KSB7XG4gICAgICAgICAgbWF4ID0gc2ltO1xuICAgICAgICAgIGlmIChtYXggPiAwLjk5KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoIChtaW4gPCBtaW5TaW1UaHJlc2ggJiYgbWluIDwgbWluU2ltKSB8fCBtYXggPiAwLjk5ICkgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYoIChtaW4gPCBtaW5TaW1UaHJlc2ggJiYgbWluIDwgbWluU2ltKSB8fCBtYXggPiAwLjk5ICkge1xuICAgICAgICBpbWFnZTJbIGN5ICogd2lkdGggKyBjeCBdID0gMS4wO1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb29yZHMucHVzaCh7XG4gICAgICB4OiBjeCxcbiAgICAgIHk6IGN5LFxuICAgICAgbXg6IDEuMCAqIGN4IC8gZHBpICogMjUuNCxcbiAgICAgIG15OiAxLjAgKiAoaGVpZ2h0IC0gY3kpIC8gZHBpICogMjUuNCxcbiAgICAgIG1heFNpbTogbWluU2ltLFxuICAgIH0pXG5cbiAgICBudW0gKz0gMTtcbiAgICAvL2NvbnNvbGUubG9nKG51bSwgJygnLCBjeCwgJywnLCBjeSwgJyknLCBtaW5TaW0sICdtaW4gPSAnLCBtaW4sICdtYXggPSAnLCBtYXgsICdzZCA9ICcsIHZsZW4vKHRlbXBsYXRlU2l6ZSoyKzEpKTtcblxuICAgIC8vIG5vIG90aGVyIGZlYXR1cmUgcG9pbnRzIHdpdGhpbiBvY2NTaXplIHNxdWFyZVxuICAgIGZvciAobGV0IGogPSAtb2NjU2l6ZTsgaiA8PSBvY2NTaXplOyBqKyspIHtcbiAgICAgIGZvciAobGV0IGkgPSAtb2NjU2l6ZTsgaSA8PSBvY2NTaXplOyBpKyspIHtcbiAgICAgICAgaWYgKGN5ICsgaiA8IDAgfHwgY3kgKyBqID49IGhlaWdodCB8fCBjeCArIGkgPCAwIHx8IGN4ICsgaSA+PSB3aWR0aCkgY29udGludWU7XG4gICAgICAgIGltYWdlMlsgKGN5K2opKndpZHRoICsgKGN4K2kpIF0gPSAxLjA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb29yZHM7XG59XG5cbi8vIGNvbXB1dGUgdmFyaWFuY2VzIG9mIHRoZSBwaXhlbHMsIGNlbnRlcmVkIGF0IChjeCwgY3kpXG5jb25zdCBfdGVtcGxhdGVWYXIgPSAoe2ltYWdlLCBjeCwgY3ksIHNkVGhyZXNoLCBpbWFnZURhdGFDdW1zdW0sIGltYWdlRGF0YVNxckN1bXN1bX0pID0+IHtcbiAgaWYgKGN4IC0gVEVNUExBVEVfU0laRSA8IDAgfHwgY3ggKyBURU1QTEFURV9TSVpFID49IGltYWdlLndpZHRoKSByZXR1cm4gbnVsbDtcbiAgaWYgKGN5IC0gVEVNUExBVEVfU0laRSA8IDAgfHwgY3kgKyBURU1QTEFURV9TSVpFID49IGltYWdlLmhlaWdodCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgdGVtcGxhdGVXaWR0aCA9IDIgKiBURU1QTEFURV9TSVpFICsgMTtcbiAgY29uc3QgblBpeGVscyA9IHRlbXBsYXRlV2lkdGggKiB0ZW1wbGF0ZVdpZHRoO1xuXG4gIGxldCBhdmVyYWdlID0gaW1hZ2VEYXRhQ3Vtc3VtLnF1ZXJ5KGN4IC0gVEVNUExBVEVfU0laRSwgY3kgLSBURU1QTEFURV9TSVpFLCBjeCArIFRFTVBMQVRFX1NJWkUsIGN5K1RFTVBMQVRFX1NJWkUpO1xuICBhdmVyYWdlIC89IG5QaXhlbHM7XG5cbiAgLy92ID0gc3VtKChwaXhlbF9pIC0gYXZnKV4yKSBmb3IgYWxsIHBpeGVsIGkgd2l0aGluIHRoZSB0ZW1wbGF0ZVxuICAvLyAgPSBzdW0ocGl4ZWxfaV4yKSAtIHN1bSgyICogYXZnICogcGl4ZWxfaSkgKyBzdW0oYXZnXmF2ZylcblxuICBsZXQgdmxlbiA9IGltYWdlRGF0YVNxckN1bXN1bS5xdWVyeShjeCAtIFRFTVBMQVRFX1NJWkUsIGN5IC0gVEVNUExBVEVfU0laRSwgY3ggKyBURU1QTEFURV9TSVpFLCBjeStURU1QTEFURV9TSVpFKTtcbiAgdmxlbiAtPSAyICogYXZlcmFnZSAqIGltYWdlRGF0YUN1bXN1bS5xdWVyeShjeCAtIFRFTVBMQVRFX1NJWkUsIGN5IC0gVEVNUExBVEVfU0laRSwgY3ggKyBURU1QTEFURV9TSVpFLCBjeStURU1QTEFURV9TSVpFKTtcbiAgdmxlbiArPSBuUGl4ZWxzICogYXZlcmFnZSAqIGF2ZXJhZ2U7XG5cbiAgaWYgKHZsZW4gLyBuUGl4ZWxzIDwgc2RUaHJlc2ggKiBzZFRocmVzaCkgcmV0dXJuIG51bGw7XG4gIHZsZW4gPSBNYXRoLnNxcnQodmxlbik7XG4gIHJldHVybiB2bGVuO1xufVxuXG5jb25zdCBfZ2V0U2ltaWxhcml0eSA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtpbWFnZSwgY3gsIGN5LCB2bGVuLCB0eCwgdHksIGltYWdlRGF0YUN1bXN1bSwgaW1hZ2VEYXRhU3FyQ3Vtc3VtfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHtkYXRhOiBpbWFnZURhdGEsIHdpZHRoLCBoZWlnaHR9ID0gaW1hZ2U7XG4gIGNvbnN0IHRlbXBsYXRlU2l6ZSA9IFRFTVBMQVRFX1NJWkU7XG5cbiAgaWYgKGN4IC0gdGVtcGxhdGVTaXplIDwgMCB8fCBjeCArIHRlbXBsYXRlU2l6ZSA+PSB3aWR0aCkgcmV0dXJuIG51bGw7XG4gIGlmIChjeSAtIHRlbXBsYXRlU2l6ZSA8IDAgfHwgY3kgKyB0ZW1wbGF0ZVNpemUgPj0gaGVpZ2h0KSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB0ZW1wbGF0ZVdpZHRoID0gMiAqIHRlbXBsYXRlU2l6ZSArIDE7XG5cbiAgbGV0IHN4ID0gaW1hZ2VEYXRhQ3Vtc3VtLnF1ZXJ5KGN4LXRlbXBsYXRlU2l6ZSwgY3ktdGVtcGxhdGVTaXplLCBjeCt0ZW1wbGF0ZVNpemUsIGN5K3RlbXBsYXRlU2l6ZSk7XG4gIGxldCBzeHggPSBpbWFnZURhdGFTcXJDdW1zdW0ucXVlcnkoY3gtdGVtcGxhdGVTaXplLCBjeS10ZW1wbGF0ZVNpemUsIGN4K3RlbXBsYXRlU2l6ZSwgY3krdGVtcGxhdGVTaXplKTtcbiAgbGV0IHN4eSA9IDA7XG5cbiAgLy8gISEgVGhpcyBsb29wIGlzIHRoZSBwZXJmb3JtYW5jZSBib3R0bGVuZWNrLiBVc2UgbW92aW5nIHBvaW50ZXJzIHRvIG9wdGltaXplXG4gIC8vXG4gIC8vICAgZm9yIChsZXQgaSA9IGN4IC0gdGVtcGxhdGVTaXplLCBpMiA9IHR4IC0gdGVtcGxhdGVTaXplOyBpIDw9IGN4ICsgdGVtcGxhdGVTaXplOyBpKyssIGkyKyspIHtcbiAgLy8gICAgIGZvciAobGV0IGogPSBjeSAtIHRlbXBsYXRlU2l6ZSwgajIgPSB0eSAtIHRlbXBsYXRlU2l6ZTsgaiA8PSBjeSArIHRlbXBsYXRlU2l6ZTsgaisrLCBqMisrKSB7XG4gIC8vICAgICAgIHN4eSArPSBpbWFnZURhdGFbaip3aWR0aCArIGldICogaW1hZ2VEYXRhW2oyKndpZHRoICsgaTJdO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy9cbiAgbGV0IHAxID0gKGN5LXRlbXBsYXRlU2l6ZSkgKiB3aWR0aCArIChjeC10ZW1wbGF0ZVNpemUpO1xuICBsZXQgcDIgPSAodHktdGVtcGxhdGVTaXplKSAqIHdpZHRoICsgKHR4LXRlbXBsYXRlU2l6ZSk7XG4gIGxldCBuZXh0Um93T2Zmc2V0ID0gd2lkdGggLSB0ZW1wbGF0ZVdpZHRoO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IHRlbXBsYXRlV2lkdGg7IGorKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcGxhdGVXaWR0aDsgaSsrKSB7XG4gICAgICBzeHkgKz0gaW1hZ2VEYXRhW3AxXSAqIGltYWdlRGF0YVtwMl07XG4gICAgICBwMSArPTE7XG4gICAgICBwMiArPTE7XG4gICAgfVxuICAgIHAxICs9IG5leHRSb3dPZmZzZXQ7XG4gICAgcDIgKz0gbmV4dFJvd09mZnNldDtcbiAgfVxuXG4gIGxldCB0ZW1wbGF0ZUF2ZXJhZ2UgPSBpbWFnZURhdGFDdW1zdW0ucXVlcnkodHgtdGVtcGxhdGVTaXplLCB0eS10ZW1wbGF0ZVNpemUsIHR4K3RlbXBsYXRlU2l6ZSwgdHkrdGVtcGxhdGVTaXplKTtcbiAgdGVtcGxhdGVBdmVyYWdlIC89IHRlbXBsYXRlV2lkdGggKiB0ZW1wbGF0ZVdpZHRoO1xuICBzeHkgLT0gdGVtcGxhdGVBdmVyYWdlICogc3g7XG5cbiAgbGV0IHZsZW4yID0gc3h4IC0gc3gqc3ggLyAodGVtcGxhdGVXaWR0aCAqIHRlbXBsYXRlV2lkdGgpO1xuICBpZiAodmxlbjIgPT0gMCkgcmV0dXJuIG51bGw7XG4gIHZsZW4yID0gTWF0aC5zcXJ0KHZsZW4yKTtcblxuICBjb25zdCBzaW0gPSAxLjAgKiBzeHkgLyAodmxlbiAqIHZsZW4yKTtcbiAgcmV0dXJuIHNpbTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGV4dHJhY3Rcbn07XG4iLCJjb25zdCB7ZXh0cmFjdH0gPSByZXF1aXJlKCcuL2V4dHJhY3RvcicpO1xuY29uc3Qge3RyYWNrfSA9IHJlcXVpcmUoJy4vdHJhY2tpbmcnKTtcbmNvbnN0IHtjcmVhdGVSYW5kb21pemVyfSA9IHJlcXVpcmUoJy4uL3V0aWxzL3JhbmRvbWl6ZXIuanMnKTtcblxuY2xhc3MgVHJhY2tlciB7XG4gIGNvbnN0cnVjdG9yKHRyYWNraW5nRGF0YSwgaW1hZ2VMaXN0LCBwcm9qZWN0aW9uVHJhbnNmb3JtKSB7XG4gICAgdGhpcy5mZWF0dXJlU2V0cyA9IHRyYWNraW5nRGF0YS5mZWF0dXJlU2V0cztcbiAgICB0aGlzLmltYWdlTGlzdCA9IGltYWdlTGlzdDtcbiAgICB0aGlzLnByb2plY3Rpb25UcmFuc2Zvcm0gPSBwcm9qZWN0aW9uVHJhbnNmb3JtO1xuICAgIHRoaXMucmFuZG9taXplciA9IGNyZWF0ZVJhbmRvbWl6ZXIoKTtcbiAgICB0aGlzLnByZXZSZXN1bHRzID0gW107XG4gIH1cblxuICBkZXRlY3RlZChtb2RlbFZpZXdUcmFuc2Zvcm0pIHtcbiAgICB0aGlzLnByZXZSZXN1bHRzID0gW3tcbiAgICAgIG1vZGVsVmlld1RyYW5zZm9ybTogbW9kZWxWaWV3VHJhbnNmb3JtLFxuICAgICAgc2VsZWN0ZWRGZWF0dXJlczogW11cbiAgICB9XTtcbiAgfVxuXG4gIHRyYWNrKHRhcmdldEltYWdlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdHJhY2soe1xuICAgICAgcHJvamVjdGlvblRyYW5zZm9ybTogdGhpcy5wcm9qZWN0aW9uVHJhbnNmb3JtLFxuICAgICAgZmVhdHVyZVNldHM6IHRoaXMuZmVhdHVyZVNldHMsXG4gICAgICBwcmV2UmVzdWx0czogdGhpcy5wcmV2UmVzdWx0cyxcbiAgICAgIHJhbmRvbWl6ZXI6IHRoaXMucmFuZG9taXplcixcbiAgICAgIGltYWdlTGlzdDogdGhpcy5pbWFnZUxpc3QsXG4gICAgICB0YXJnZXRJbWFnZSxcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldlJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgaWYgKHRoaXMucHJldlJlc3VsdHMubGVuZ3RoID4gMykge1xuICAgICAgICB0aGlzLnByZXZSZXN1bHRzLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJldlJlc3VsdHMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBnZXRMYXRlc3QoKSB7XG4gICAgaWYgKHRoaXMucHJldlJlc3VsdHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLnByZXZSZXN1bHRzW3RoaXMucHJldlJlc3VsdHMubGVuZ3RoLTFdLm1vZGVsVmlld1RyYW5zZm9ybTtcbiAgfVxufVxuXG5jb25zdCBfYnVpbGRGZWF0dXJlU2V0cyA9ICh7aW1hZ2VMaXN0fSkgPT4ge1xuICBjb25zdCBmZWF0dXJlU2V0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh3aW5kb3cuREVCVUcpIHt3aW5kb3cuZGVidWcuZXh0cmFjdEluZGV4ID0gaX07XG5cbiAgICBjb25zdCBpbWFnZSA9IGltYWdlTGlzdFtpXTtcbiAgICBjb25zdCBjb29yZHMgPSBleHRyYWN0KGltYWdlKTtcblxuICAgIGNvbnN0IGZlYXR1cmVTZXQgPSB7fTtcbiAgICBmZWF0dXJlU2V0LnNjYWxlID0gaTtcbiAgICBmZWF0dXJlU2V0Lm1pbmRwaSA9IChpID09PSBpbWFnZUxpc3QubGVuZ3RoLTEpPyBpbWFnZUxpc3RbaV0uZHBpICogMC41OiBpbWFnZUxpc3RbaSsxXS5kcGk7XG4gICAgZmVhdHVyZVNldC5tYXhkcGkgPSAoaSA9PT0gMCk/IGltYWdlTGlzdFtpXS5kcGkgKiAyOiAoaW1hZ2VMaXN0W2ldLmRwaSAqIDAuOCArIGltYWdlTGlzdFtpLTFdLmRwaSAqIDAuMik7XG4gICAgZmVhdHVyZVNldC5jb29yZHMgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgZmVhdHVyZVNldC5jb29yZHMucHVzaCh7XG4gICAgICAgIHg6IGNvb3Jkc1tqXS54LFxuICAgICAgICB5OiBjb29yZHNbal0ueSxcbiAgICAgICAgbXg6IGNvb3Jkc1tqXS5teCxcbiAgICAgICAgbXk6IGNvb3Jkc1tqXS5teSxcbiAgICAgICAgbWF4U2ltOiBjb29yZHNbal0ubWF4U2ltLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGZlYXR1cmVTZXRzLnB1c2goZmVhdHVyZVNldCk7XG4gIH1cbiAgcmV0dXJuIGZlYXR1cmVTZXRzO1xufVxuXG5jb25zdCBjb21waWxlVHJhY2tpbmcgPSAoe2ltYWdlTGlzdH0pID0+IHtcbiAgY29uc3QgZmVhdHVyZVNldHMgPSBfYnVpbGRGZWF0dXJlU2V0cyh7aW1hZ2VMaXN0fSk7XG4gIHJldHVybiB7ZmVhdHVyZVNldHN9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVHJhY2tlcixcbiAgY29tcGlsZVRyYWNraW5nXG59XG4iLCJjb25zdCB7c2NyZWVuVG9NYXJrZXJDb29yZGluYXRlLCBhcHBseU1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIGJ1aWxkTW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgY29tcHV0ZVNjcmVlbkNvb3JkaWF0ZX0gPSByZXF1aXJlKCcuLi9pY3AvdXRpbHMuanMnKTtcbmNvbnN0IHtyZWZpbmVIb21vZ3JhcGh5fSA9IHJlcXVpcmUoJy4uL2ljcC9yZWZpbmVfaG9tb2dyYXBoeS5qcycpO1xuXG5jb25zdCBBUjJfVFJBQ0tJTkdfQ0FORElEQVRFX01BWCA9IDIwMFxuXG5jb25zdCBBUjJfREVGQVVMVF9TRUFSQ0hfRkVBVFVSRV9OVU0gPSAxNjtcbmNvbnN0IEFSMl9URU1QX1NDQUxFID0gMjtcbmNvbnN0IEFSMl9ERUZBVUxUX1RTID0gNjtcbmNvbnN0IEFSMl9ERUZBVUxUX1RSQUNLSU5HX1NEX1RIUkVTSCA9IDUuMDtcbi8vY29uc3QgQVIyX1NJTV9USFJFU0ggPSAwLjU7XG5jb25zdCBBUjJfU0lNX1RIUkVTSCA9IDAuMjsgLy8gMC41IGlzIGRlZmF1bHQuIDAuMiBmb3IgZGVidWdcbmNvbnN0IEFSMl9UUkFDS0lOR19USFJFU0ggPSA1LjA7XG4vL2NvbnN0IEFSMl9UUkFDS0lOR19USFJFU0ggPSAwLjI7Ly8gNSBpcyB0aGUgZGVmYXVsdC4gMC4yIGZvciBkZWJ1Z1xuY29uc3QgQVIyX1NFQVJDSF9TSVpFID0gNjtcblxuY29uc3QgU0tJUF9JTlRFUlZBTCA9IDM7XG5jb25zdCBLRUVQX05VTSA9IDM7XG5cbmNvbnN0IHRyYWNrID0gKHtwcm9qZWN0aW9uVHJhbnNmb3JtLCBmZWF0dXJlU2V0cywgaW1hZ2VMaXN0LCBwcmV2UmVzdWx0cywgdGFyZ2V0SW1hZ2UsIHJhbmRvbWl6ZXJ9KSA9PiB7XG4gIGNvbnN0IHByZXZNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgIGkgPCBwcmV2UmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHQgPSBidWlsZE1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0ocHJvamVjdGlvblRyYW5zZm9ybSwgcHJldlJlc3VsdHNbaV0ubW9kZWxWaWV3VHJhbnNmb3JtKTtcbiAgICBwcmV2TW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybXMucHVzaCh0KTtcbiAgfVxuXG4gIGNvbnN0IG1vZGVsVmlld1RyYW5zZm9ybSA9IHByZXZSZXN1bHRzW3ByZXZSZXN1bHRzLmxlbmd0aC0xXS5tb2RlbFZpZXdUcmFuc2Zvcm07XG4gIGNvbnN0IG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0gPSBwcmV2TW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybXNbcHJldk1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1zLmxlbmd0aC0xXTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgd2luZG93LmRlYnVnLnRyYWNrRmVhdHVyZUluZGV4ID0gLTE7XG4gICAgd2luZG93LmRlYnVnLnRyYWNraW5nU3ViSW5kZXggPSAtMTtcbiAgICB3aW5kb3cuZGVidWcudGVtcGxhdGVDb21wdXRlSW5kZXggPSAtMTtcbiAgfVxuXG4gIGNvbnN0IGNhbmRpZGF0ZXMxID0gW107XG4gIGNvbnN0IGNhbmRpZGF0ZXMyID0gW107XG4gIGZvciAobGV0IGogPSAwOyBqIDwgZmVhdHVyZVNldHMubGVuZ3RoOyBqKyspIHtcbiAgICBjb25zdCBtYXhkcGkgPSBmZWF0dXJlU2V0c1tqXS5tYXhkcGk7XG4gICAgY29uc3QgbWluZHBpID0gZmVhdHVyZVNldHNbal0ubWluZHBpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZmVhdHVyZVNldHNbal0uY29vcmRzLmxlbmd0aDsgaysrKSB7XG4gICAgICBjb25zdCB7bXgsIG15fSA9IGZlYXR1cmVTZXRzW2pdLmNvb3Jkc1trXTtcbiAgICAgIGNvbnN0IHUgPSBjb21wdXRlU2NyZWVuQ29vcmRpYXRlKG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIG14LCBteSwgMCk7XG4gICAgICBpZiAodSA9PT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0spIHtcbiAgICAgICAgd2luZG93LmRlYnVnLnRyYWNrRmVhdHVyZUluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHt4OiBzeCwgeTogc3l9ID0gdTtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19UUkFDSykge1xuICAgICAgICBjb25zdCBmMSA9IHtteCwgbXksIHN4LCBzeSwgbWF4ZHBpLCBtaW5kcGl9O1xuICAgICAgICBjb25zdCBmMiA9IHdpbmRvdy5kZWJ1Z01hdGNoLnRyYWNrRmVhdHVyZXNbd2luZG93LmRlYnVnLnRyYWNrRmVhdHVyZUluZGV4XTtcbiAgICAgICAgaWYgKCF3aW5kb3cuY21wT2JqKGYxLCBmMiwgWydteCcsICdteScsICdzeCcsICdzeScsICdtYXhkcGknLCAnbWluZHBpJ10pKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCB0cmFjayBmZWF0dXJlJywgaiwgaywgZjEsIGYyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3ggPCAwIHx8IHN4ID49IHRhcmdldEltYWdlLndpZHRoKSBjb250aW51ZTtcbiAgICAgIGlmIChzeSA8IDAgfHwgc3kgPj0gdGFyZ2V0SW1hZ2UuaGVpZ2h0KSBjb250aW51ZTtcblxuICAgICAgY29uc3QgdmRpciA9IFtdO1xuICAgICAgdmRpclswXSA9IG1vZGVsVmlld1RyYW5zZm9ybVswXVswXSAqIG14XG4gICAgICAgICAgICAgICsgbW9kZWxWaWV3VHJhbnNmb3JtWzBdWzFdICogbXlcbiAgICAgICAgICAgICAgKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMF1bM107XG4gICAgICB2ZGlyWzFdID0gbW9kZWxWaWV3VHJhbnNmb3JtWzFdWzBdICogbXhcbiAgICAgICAgICAgICAgKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMV1bMV0gKiBteVxuICAgICAgICAgICAgICArIG1vZGVsVmlld1RyYW5zZm9ybVsxXVszXTtcbiAgICAgIHZkaXJbMl0gPSBtb2RlbFZpZXdUcmFuc2Zvcm1bMl1bMF0gKiBteFxuICAgICAgICAgICAgICArIG1vZGVsVmlld1RyYW5zZm9ybVsyXVsxXSAqIG15XG4gICAgICAgICAgICAgICsgbW9kZWxWaWV3VHJhbnNmb3JtWzJdWzNdO1xuICAgICAgY29uc3QgdmxlbiA9IE1hdGguc3FydCh2ZGlyWzBdKnZkaXJbMF0gKyB2ZGlyWzFdKnZkaXJbMV0gKyB2ZGlyWzJdKnZkaXJbMl0pO1xuICAgICAgdmRpclswXSAvPSB2bGVuO1xuICAgICAgdmRpclsxXSAvPSB2bGVuO1xuICAgICAgdmRpclsyXSAvPSB2bGVuO1xuICAgICAgY29uc3QgdmRpclZhbHVlID0gdmRpclswXSptb2RlbFZpZXdUcmFuc2Zvcm1bMF1bMl0gKyB2ZGlyWzFdKm1vZGVsVmlld1RyYW5zZm9ybVsxXVsyXSArIHZkaXJbMl0qbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybVsyXVsyXTtcblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19UUkFDSykge1xuICAgICAgICBjb25zdCB2MSA9IFt2ZGlyWzBdLCB2ZGlyWzFdLCB2ZGlyWzJdLCB2ZGlyVmFsdWVdO1xuICAgICAgICBjb25zdCB2MiA9IHdpbmRvdy5kZWJ1Z01hdGNoLnRyYWNrRmVhdHVyZXNbd2luZG93LmRlYnVnLnRyYWNrRmVhdHVyZUluZGV4XS52ZGlyO1xuICAgICAgICBpZiAoIXdpbmRvdy5jbXBBcnJheSh2MSwgdjIpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCB0cmFjayBmZWF0dXJlIHZkaXInLCBqLCBrLCB2MSwgdjIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZGlyVmFsdWUgPiAtMC4xKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgdTEgPSBjb21wdXRlU2NyZWVuQ29vcmRpYXRlKG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIG14KzEwLCBteSwgMCk7XG4gICAgICBjb25zdCB1MiA9IGNvbXB1dGVTY3JlZW5Db29yZGlhdGUobW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgbXgsIG15KzEwLCAwKTtcbiAgICAgIGNvbnN0IGQxID0gKHUxLnggLSB1LngpICogKHUxLnggLSB1LngpICsgKHUxLnkgLSB1LnkpICogKHUxLnkgLSB1LnkpO1xuICAgICAgY29uc3QgZDIgPSAodTIueCAtIHUueCkgKiAodTIueCAtIHUueCkgKyAodTIueSAtIHUueSkgKiAodTIueSAtIHUueSk7XG4gICAgICBjb25zdCBkcGkgPSBbXTtcbiAgICAgIGlmIChkMSA8IGQyKSB7XG4gICAgICAgIGRwaVswXSA9IE1hdGguc3FydChkMikgKiAyLjU0OyAvLyBiZWNhdXNlIG14KzEwLCBtb3ZlZCAxMC4gc28gZG8gMjUuNCAvIDEwID0gMi41ND9cbiAgICAgICAgZHBpWzFdID0gTWF0aC5zcXJ0KGQxKSAqIDIuNTQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcGlbMF0gPSBNYXRoLnNxcnQoZDEpICogMi41NDtcbiAgICAgICAgZHBpWzFdID0gTWF0aC5zcXJ0KGQyKSAqIDIuNTQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0spIHtcbiAgICAgICAgY29uc3QgdjEgPSBbZHBpWzBdLCBkcGlbMV1dO1xuICAgICAgICBjb25zdCB2MiA9IHdpbmRvdy5kZWJ1Z01hdGNoLnRyYWNrRmVhdHVyZXNbd2luZG93LmRlYnVnLnRyYWNrRmVhdHVyZUluZGV4XS53O1xuICAgICAgICBpZiAoIXdpbmRvdy5jbXBBcnJheSh2MSwgdjIpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0lOQ09SUkVDVCB0cmFjayBmZWF0dXJlIGRwaScsIGosIGssIHYxLCB2Mik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNhbmRpZGF0ZXMgPSBudWxsO1xuICAgICAgaWYgKGRwaVsxXSA8PSBtYXhkcGkgJiYgZHBpWzFdID49IG1pbmRwaSkge1xuICAgICAgICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlczE7XG4gICAgICB9IGVsc2UgaWYgKGRwaVsxXSA8PSBtYXhkcGkgKiAyICYmIGRwaVsxXSA+PSBtaW5kcGkgLyAyKSB7XG4gICAgICAgIGlmIChjYW5kaWRhdGVzMi5sZW5ndGggPT09IEFSMl9UUkFDS0lOR19DQU5ESURBVEVfTUFYKSBjb250aW51ZTtcblxuICAgICAgICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlczI7XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgICBjYW5kaWRhdGVzLnB1c2goe2xldmVsOiBqLCBudW06IGssIHN4OiBzeCwgc3k6IHN5LCBteCwgbXksIGZsYWc6IGZhbHNlfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgY29uc29sZS5sb2coXCJjYW5kaWRhdGVzMTogXCIsIGNhbmRpZGF0ZXMxLmxlbmd0aCwgd2luZG93LmRlYnVnTWF0Y2guY2FuZGlkYXRlczEubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMxLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXdpbmRvdy5jbXBPYmooY2FuZGlkYXRlczFbaV0sIHdpbmRvdy5kZWJ1Z01hdGNoLmNhbmRpZGF0ZXMxW2ldLCBbJ2xldmVsJywgJ251bScsICdzeCcsICdzeSddKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBjYW5kaWRhdGUgMVwiLCBjYW5kaWRhdGVzMVtpXSwgJ3ZzJywgd2luZG93LmRlYnVnTWF0Y2guY2FuZGlkYXRlczFbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImNhbmRpZGF0ZXMyOiBcIiwgY2FuZGlkYXRlczIubGVuZ3RoLCB3aW5kb3cuZGVidWdNYXRjaC5jYW5kaWRhdGVzMi5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlczIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghd2luZG93LmNtcE9iaihjYW5kaWRhdGVzMltpXSwgd2luZG93LmRlYnVnTWF0Y2guY2FuZGlkYXRlczJbaV0sIFsnbGV2ZWwnLCAnbnVtJywgJ3N4JywgJ3N5J10pKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGNhbmRpZGF0ZSAyXCIsIGNhbmRpZGF0ZXMyW2ldLCAndnMnLCB3aW5kb3cuZGVidWdNYXRjaC5jYW5kaWRhdGVzMltpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IGkgPSAwO1xuICBsZXQgbnVtID0gMDtcbiAgbGV0IHBvcyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgbGV0IGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzMTtcbiAgbGV0IGZyb21DYW5kaWRhdGVzMSA9IHRydWU7XG4gIGNvbnN0IHNlbGVjdGVkRmVhdHVyZXMgPSBbXTtcbiAgY29uc3QgcHJldlNlbGVjdGVkRmVhdHVyZXMgPSBwcmV2UmVzdWx0c1twcmV2UmVzdWx0cy5sZW5ndGgtMV0uc2VsZWN0ZWRGZWF0dXJlcztcblxuICB3aGlsZSAoaSA8IEFSMl9ERUZBVUxUX1NFQVJDSF9GRUFUVVJFX05VTSkge1xuICAgIGxldCBrID0gX3NlbGVjdFRlbXBsYXRlKHtwb3MsIHByZXZTZWxlY3RlZEZlYXR1cmVzLCBjYW5kaWRhdGVzLCBudW0sIHhzaXplOiB0YXJnZXRJbWFnZS53aWR0aCwgeXNpemU6IHRhcmdldEltYWdlLmhlaWdodCwgcmFuZG9taXplcjogcmFuZG9taXplcn0pO1xuICAgIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZDogXCIsIG51bSwgayk7XG4gICAgaWYgKGsgPCAwICYmIGZyb21DYW5kaWRhdGVzMSkge1xuICAgICAgZnJvbUNhbmRpZGF0ZXMxID0gZmFsc2U7XG4gICAgICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlczI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoayA8IDApIGJyZWFrO1xuXG4gICAgY2FuZGlkYXRlc1trXS5mbGFnID0gdHJ1ZTtcbiAgICBpKys7XG5cbiAgICBwb3NbbnVtXSA9IFtjYW5kaWRhdGVzW2tdLnN4LCBjYW5kaWRhdGVzW2tdLnN5XTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IF90cmFja2luZzJkU3ViKHt0YXJnZXRJbWFnZSwgaW1hZ2VMaXN0LCBtb2RlbFZpZXdUcmFuc2Zvcm0sIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIGNhbmRpZGF0ZTogY2FuZGlkYXRlc1trXSwgcHJldk1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1zfSk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgICBjb25zdCB0MiA9IHdpbmRvdy5kZWJ1Z01hdGNoLnRyYWNraW5nMmRTdWJbd2luZG93LmRlYnVnLnRyYWNraW5nU3ViSW5kZXhdO1xuICAgICAgY29uc29sZS5sb2coXCJiZXN0IG1hdGNoXCIsIHJlc3VsdCwgdDIuYmVzdE1hdGNoZWQpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodDIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGJlc3QgbWF0Y2hcIiwgcmVzdWx0LCB0Mi5iZXN0TWF0Y2hlZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0Mi5iZXN0TWF0Y2hlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBiZXN0IG1hdGNoXCIsIHJlc3VsdCwgdDIuYmVzdE1hdGNoZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChyZXN1bHQucG9zMkQueCAhPT0gdDIuYmVzdE1hdGNoZWRbMF0ucG9zMmRbMF0gfHwgcmVzdWx0LnBvczJELnkgIT09IHQyLmJlc3RNYXRjaGVkWzBdLnBvczJkWzFdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBiZXN0IG1hdGNoIHBvczJEXCIsIHJlc3VsdCwgdDIuYmVzdE1hdGNoZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXdpbmRvdy5jbXAocmVzdWx0LnBvczNELngsIHQyLmJlc3RNYXRjaGVkWzBdLnBvczNkWzBdKSB8fCAhd2luZG93LmNtcChyZXN1bHQucG9zM0QueSwgdDIuYmVzdE1hdGNoZWRbMF0ucG9zM2RbMV0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBiZXN0IG1hdGNoIHBvczNEXCIsIHJlc3VsdCwgdDIuYmVzdE1hdGNoZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgIGlmIChyZXN1bHQuc2ltIDw9IEFSMl9TSU1fVEhSRVNIKSBjb250aW51ZTtcblxuICAgIHNlbGVjdGVkRmVhdHVyZXMucHVzaChPYmplY3QuYXNzaWduKHtsZXZlbDogY2FuZGlkYXRlc1trXS5sZXZlbCwgbnVtOiBjYW5kaWRhdGVzW2tdLm51bX0sIHJlc3VsdCkpO1xuXG4gICAgbnVtICs9IDE7XG4gICAgLy9pZiAobnVtID09PSA1KSBudW0gPSAwO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19UUkFDSykge1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgZmVhdHVyZXNcIiwgc2VsZWN0ZWRGZWF0dXJlcy5sZW5ndGgsIHdpbmRvdy5kZWJ1Z01hdGNoLnNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGYxID0gc2VsZWN0ZWRGZWF0dXJlc1tpXTtcbiAgICAgIGNvbnN0IGYyID0gd2luZG93LmRlYnVnTWF0Y2guc2VsZWN0ZWRGZWF0dXJlc1tpXTtcbiAgICAgIGlmIChmMS5wb3MyRC54ICE9PSBmMi5wb3MyRFswXSB8fCBmMS5wb3MyRC55ICE9PSBmMi5wb3MyRFsxXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBzZWxlY3RlZCBmZWF0dXJlIHBvczJEXCIsIGksIGYxLCBmMik7XG4gICAgICB9XG4gICAgICBpZiAoIXdpbmRvdy5jbXAoZjEucG9zM0QueCwgZjIucG9zM0RbMF0pIHx8ICF3aW5kb3cuY21wKGYxLnBvczNELnksIGYyLnBvczNEWzFdKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCBzZWxlY3RlZCBmZWF0dXJlIHBvczNEXCIsIGksIGYxLCBmMik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoIDwgNCkge1xuICAgIHJldHVybiBudWxsO1xuICAgIC8vcmV0dXJuIHttb2RlbFZpZXdUcmFuc2Zvcm0sIHNlbGVjdGVkRmVhdHVyZXN9O1xuICB9XG5cbiAgY29uc3QgaW5saWVyUHJvYnMgPSBbMS4wLCAwLjgsIDAuNiwgMC40LCAwLjBdO1xuICBsZXQgZXJyID0gbnVsbDtcbiAgbGV0IG5ld01vZGVsVmlld1RyYW5zZm9ybSA9IG1vZGVsVmlld1RyYW5zZm9ybTtcbiAgbGV0IGZpbmFsTW9kZWxWaWV3VHJhbnNmb3JtID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmxpZXJQcm9icy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0spIHtcbiAgICAgIHdpbmRvdy5kZWJ1Zy5pY3Byb2J1c3RJbmRleCA9IGktMTtcbiAgICB9XG4gICAgbGV0IHJldCA9IF9jb21wdXRlVXBkYXRlZFRyYW4oe21vZGVsVmlld1RyYW5zZm9ybTogbmV3TW9kZWxWaWV3VHJhbnNmb3JtLCBzZWxlY3RlZEZlYXR1cmVzLCBwcm9qZWN0aW9uVHJhbnNmb3JtLCBpbmxpZXJQcm9iOiBpbmxpZXJQcm9ic1tpXX0pO1xuICAgIGVyciA9IHJldC5lcnI7XG4gICAgbmV3TW9kZWxWaWV3VHJhbnNmb3JtID0gcmV0Lm5ld01vZGVsVmlld1RyYW5zZm9ybTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0spIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJhY2tlciBpY3AgcG9pbnRcIiwgaSwgbmV3TW9kZWxWaWV3VHJhbnNmb3JtLCBlcnIpO1xuICAgICAgY29uc3QgZEVyciA9IHdpbmRvdy5kZWJ1Z01hdGNoWydnZXRUcmFuc01hdCcrKGkrMSkrJ0VyciddO1xuICAgICAgY29uc3QgZE1hdCA9IHdpbmRvdy5kZWJ1Z01hdGNoWydnZXRUcmFuc01hdCcrKGkrMSldO1xuICAgICAgaWYgKCF3aW5kb3cuY21wKGVyciwgZEVycikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgaWNwIGVyclwiLCBpLCBlcnIsIGRFcnIpO1xuICAgICAgfVxuICAgICAgaWYgKCF3aW5kb3cuY21wMkRBcnJheShuZXdNb2RlbFZpZXdUcmFuc2Zvcm0sIGRNYXQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIGljcCBtYXRcIiwgaSwgbmV3TW9kZWxWaWV3VHJhbnNmb3JtLCBkTWF0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyIDwgQVIyX1RSQUNLSU5HX1RIUkVTSCkge1xuICAgICAgZmluYWxNb2RlbFZpZXdUcmFuc2Zvcm0gPSBuZXdNb2RlbFZpZXdUcmFuc2Zvcm07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoZmluYWxNb2RlbFZpZXdUcmFuc2Zvcm0gPT09IG51bGwpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgbW9kZWxWaWV3VHJhbnNmb3JtOiBmaW5hbE1vZGVsVmlld1RyYW5zZm9ybSxcbiAgICBzZWxlY3RlZEZlYXR1cmVzXG4gIH1cbn07XG5cbmNvbnN0IF9jb21wdXRlVXBkYXRlZFRyYW4gPSAoe21vZGVsVmlld1RyYW5zZm9ybSwgcHJvamVjdGlvblRyYW5zZm9ybSwgc2VsZWN0ZWRGZWF0dXJlcywgaW5saWVyUHJvYn0pID0+IHtcbiAgbGV0IGR4ID0gMDtcbiAgbGV0IGR5ID0gMDtcbiAgbGV0IGR6ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZHggKz0gc2VsZWN0ZWRGZWF0dXJlc1tpXS5wb3MzRC54O1xuICAgIGR5ICs9IHNlbGVjdGVkRmVhdHVyZXNbaV0ucG9zM0QueTtcbiAgICBkeiArPSBzZWxlY3RlZEZlYXR1cmVzW2ldLnBvczNELno7XG4gIH1cbiAgZHggLz0gc2VsZWN0ZWRGZWF0dXJlcy5sZW5ndGg7XG4gIGR5IC89IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoO1xuICBkeiAvPSBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDtcblxuICBjb25zdCB3b3JsZENvb3JkcyA9IFtdO1xuICBjb25zdCBzY3JlZW5Db29yZHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2NyZWVuQ29vcmRzLnB1c2goe3g6IHNlbGVjdGVkRmVhdHVyZXNbaV0ucG9zMkQueCwgeTogc2VsZWN0ZWRGZWF0dXJlc1tpXS5wb3MyRC55fSk7XG4gICAgd29ybGRDb29yZHMucHVzaCh7eDogc2VsZWN0ZWRGZWF0dXJlc1tpXS5wb3MzRC54IC0gZHgsIHk6IHNlbGVjdGVkRmVhdHVyZXNbaV0ucG9zM0QueSAtIGR5LCB6OiBzZWxlY3RlZEZlYXR1cmVzW2ldLnBvczNELnogLSBken0pO1xuICB9XG5cbiAgY29uc3QgZGlmZk1vZGVsVmlld1RyYW5zZm9ybSA9IFtbXSxbXSxbXV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGRpZmZNb2RlbFZpZXdUcmFuc2Zvcm1bal1baV0gPSBtb2RlbFZpZXdUcmFuc2Zvcm1bal1baV07XG4gICAgfVxuICB9XG4gIGRpZmZNb2RlbFZpZXdUcmFuc2Zvcm1bMF1bM10gPSBtb2RlbFZpZXdUcmFuc2Zvcm1bMF1bMF0gKiBkeCArIG1vZGVsVmlld1RyYW5zZm9ybVswXVsxXSAqIGR5ICsgbW9kZWxWaWV3VHJhbnNmb3JtWzBdWzJdICogZHogKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMF1bM107XG4gIGRpZmZNb2RlbFZpZXdUcmFuc2Zvcm1bMV1bM10gPSBtb2RlbFZpZXdUcmFuc2Zvcm1bMV1bMF0gKiBkeCArIG1vZGVsVmlld1RyYW5zZm9ybVsxXVsxXSAqIGR5ICsgbW9kZWxWaWV3VHJhbnNmb3JtWzFdWzJdICogZHogKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMV1bM107XG4gIGRpZmZNb2RlbFZpZXdUcmFuc2Zvcm1bMl1bM10gPSBtb2RlbFZpZXdUcmFuc2Zvcm1bMl1bMF0gKiBkeCArIG1vZGVsVmlld1RyYW5zZm9ybVsyXVsxXSAqIGR5ICsgbW9kZWxWaWV3VHJhbnNmb3JtWzJdWzJdICogZHogKyBtb2RlbFZpZXdUcmFuc2Zvcm1bMl1bM107XG5cbiAgbGV0IHJldDtcbiAgaWYgKGlubGllclByb2IgPCAxKSB7XG4gICAgIHJldCA9IHJlZmluZUhvbW9ncmFwaHkoe2luaXRpYWxNb2RlbFZpZXdUcmFuc2Zvcm06IGRpZmZNb2RlbFZpZXdUcmFuc2Zvcm0sIHByb2plY3Rpb25UcmFuc2Zvcm0sIHdvcmxkQ29vcmRzLCBzY3JlZW5Db29yZHMsIGlzUm9idXN0TW9kZTogdHJ1ZSwgaW5saWVyUHJvYn0pO1xuICB9IGVsc2Uge1xuICAgICByZXQgPSByZWZpbmVIb21vZ3JhcGh5KHtpbml0aWFsTW9kZWxWaWV3VHJhbnNmb3JtOiBkaWZmTW9kZWxWaWV3VHJhbnNmb3JtLCBwcm9qZWN0aW9uVHJhbnNmb3JtLCB3b3JsZENvb3Jkcywgc2NyZWVuQ29vcmRzLCBpc1JvYnVzdE1vZGU6IGZhbHNlfSk7XG4gIH1cblxuICBjb25zdCBuZXdNb2RlbFZpZXdUcmFuc2Zvcm0gPSBbW10sW10sW11dO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBuZXdNb2RlbFZpZXdUcmFuc2Zvcm1bal1baV0gPSByZXQubW9kZWxWaWV3VHJhbnNmb3JtW2pdW2ldO1xuICAgIH1cbiAgfVxuICBuZXdNb2RlbFZpZXdUcmFuc2Zvcm1bMF1bM10gPSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzBdWzNdIC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVswXVswXSAqIGR4IC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVswXVsxXSAqIGR5IC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVswXVsyXSAqIGR6O1xuICBuZXdNb2RlbFZpZXdUcmFuc2Zvcm1bMV1bM10gPSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzFdWzNdIC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVsxXVswXSAqIGR4IC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVsxXVsxXSAqIGR5IC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVsxXVsyXSAqIGR6O1xuICBuZXdNb2RlbFZpZXdUcmFuc2Zvcm1bMl1bM10gPSByZXQubW9kZWxWaWV3VHJhbnNmb3JtWzJdWzNdIC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVsyXVswXSAqIGR4IC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVsyXVsxXSAqIGR5IC0gcmV0Lm1vZGVsVmlld1RyYW5zZm9ybVsyXVsyXSAqIGR6O1xuXG5cbiAgcmV0dXJuIHtlcnI6IHJldC5lcnIsIG5ld01vZGVsVmlld1RyYW5zZm9ybX07XG59O1xuXG5jb25zdCBfdHJhY2tpbmcyZFN1YiA9ICh7dGFyZ2V0SW1hZ2UsIGltYWdlTGlzdCwgbW9kZWxWaWV3VHJhbnNmb3JtLCBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCBjYW5kaWRhdGUsIHByZXZNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3Jtc30pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19UUkFDSykge1xuICAgIHdpbmRvdy5kZWJ1Zy50cmFja2luZ1N1YkluZGV4ICs9IDE7XG4gICAgd2luZG93LmRlYnVnLnRyYWNraW5nTWF0Y2hpbmdTdW1JbmRleCA9IC0xO1xuICAgIHdpbmRvdy5kZWJ1Zy5za2lwTWF0Y2hpbmdTdW0gPSBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgY29uc3QgdDEgPSB7bGV2ZWw6IGNhbmRpZGF0ZS5sZXZlbCwgbnVtOiBjYW5kaWRhdGUubnVtLCBjYW5kaWRhdGV9O1xuICAgIGNvbnN0IHQyID0gd2luZG93LmRlYnVnTWF0Y2gudHJhY2tpbmcyZFN1Ylt3aW5kb3cuZGVidWcudHJhY2tpbmdTdWJJbmRleF07XG4gICAgLy9jb25zb2xlLmxvZyhcInRyYWNraW5nMmRcIiwgdDEsIHQyKTtcbiAgICBpZiAoIXdpbmRvdy5jbXAodDEuY2FuZGlkYXRlLnN4LCB0Mi5zeCkgfHwgIXdpbmRvdy5jbXAodDEuY2FuZGlkYXRlLnN5LCB0Mi5zeSkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHRyYWNraW5nIDJkc3ViIGNhbmRpZGF0ZVwiLCB0MS5jYW5kaWRhdGUsIHQyKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBpbWFnZSA9IGltYWdlTGlzdFtjYW5kaWRhdGUubGV2ZWxdO1xuICBjb25zdCB4c2l6ZSA9IHRhcmdldEltYWdlLndpZHRoO1xuICBjb25zdCB5c2l6ZSA9IHRhcmdldEltYWdlLmhlaWdodDtcbiAgY29uc3QgZHBpID0gaW1hZ2UuZHBpO1xuICBjb25zdCB7bXgsIG15fSA9IGNhbmRpZGF0ZTtcbiAgY29uc3QgdHNpemUgPSBBUjJfREVGQVVMVF9UUyAqIDIgKyAxO1xuICBjb25zdCB7dGVtcGxhdGUsIHZhbGlkTnVtOiB0ZW1wbGF0ZVZhbGlkTnVtLCB2bGVuOiB0ZW1wbGF0ZVZsZW4sIHN1bTogdGVtcGxhdGVTdW19ID0gX3NldFRlbXBsYXRlKHtpbWFnZSwgZHBpLCBtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCBteCwgbXl9KTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgY29uc3QgdDIgPSB3aW5kb3cuZGVidWdNYXRjaC50cmFja2luZzJkU3ViW3dpbmRvdy5kZWJ1Zy50cmFja2luZ1N1YkluZGV4XTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHQyLnRlbXBsYXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodDIudGVtcGxhdGVbaV0gPT09IDQwOTYpIHQyLnRlbXBsYXRlW2ldID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuY21wQXJyYXkodGVtcGxhdGUsIHQyLnRlbXBsYXRlKSkge1xuICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgdHJhY2tpbmcyZCB0ZW1wbGF0ZVwiLCB0ZW1wbGF0ZSwgdDIudGVtcGxhdGUpO1xuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5jbXAodGVtcGxhdGVWbGVuLCB0Mi52bGVuKSkgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgdmxlblwiLCB0ZW1wbGF0ZVZsZW4sIHQyLnZsZW4pO1xuICAgIGlmICghd2luZG93LmNtcCh0ZW1wbGF0ZVN1bSwgdDIuc3VtKSkgY29uc29sZS5sb2coXCJJTkNPUlJFQ1Qgc3VtXCIsIHRlbXBsYXRlU3VtLCB0Mi5zdW0pO1xuICAgIGlmICghd2luZG93LmNtcCh0ZW1wbGF0ZVZhbGlkTnVtLCB0Mi52YWxpZE51bSkpIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIHZhbGlkTnVtXCIsIHRlbXBsYXRlVmFsaWROdW0sIHQyLnZhbGlkTnVtKTtcbiAgfVxuXG4gIGlmICh0ZW1wbGF0ZVZsZW4gKiB0ZW1wbGF0ZVZsZW4gPCB0c2l6ZSAqIHRzaXplICogQVIyX0RFRkFVTFRfVFJBQ0tJTkdfU0RfVEhSRVNIICogQVIyX0RFRkFVTFRfVFJBQ0tJTkdfU0RfVEhSRVNIKSByZXR1cm4gbnVsbDtcblxuICAvLyBzZWFyY2ggcG9pbnRzXG4gIGNvbnN0IHVzID0gW107XG4gIGNvbnN0IHNlYXJjaCA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3Jtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHUgPSBjb21wdXRlU2NyZWVuQ29vcmRpYXRlKHByZXZNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3Jtc1tpXSwgbXgsIG15LCAwKTtcbiAgICB1cy5wdXNoKFt1LngsIHUueV0pO1xuICB9XG4gIGZvciAobGV0IGkgPSBwcmV2TW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybXMubGVuZ3RoLTE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGkgKyAyIDwgcHJldk1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm1zLmxlbmd0aCkge1xuICAgICAgY29uc3QgcDEgPSB1c1tpKzJdO1xuICAgICAgY29uc3QgcDIgPSB1c1tpKzFdO1xuICAgICAgY29uc3QgcCA9IHVzW2ldO1xuICAgICAgc2VhcmNoLnB1c2goW1xuICAgICAgICBNYXRoLmZsb29yKDMgKiBwMVswXSAtIDMgKiBwMlswXSArIHBbMF0pLFxuICAgICAgICBNYXRoLmZsb29yKDMgKiBwMVsxXSAtIDMgKiBwMlsxXSArIHBbMV0pLFxuICAgICAgXSk7XG4gICAgfSBlbHNlIGlmIChpICsgMSA8IHByZXZNb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3Jtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHAxID0gdXNbaSsxXTtcbiAgICAgIGNvbnN0IHAgPSB1c1tpXTtcbiAgICAgIHNlYXJjaC5wdXNoKFtcbiAgICAgICAgTWF0aC5mbG9vcigyICogcDFbMF0gLSBwWzBdKSxcbiAgICAgICAgTWF0aC5mbG9vcigyICogcDFbMV0gLSBwWzFdKSxcbiAgICAgIF0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHAgPSB1c1tpXTtcbiAgICAgIHNlYXJjaC5wdXNoKFtcbiAgICAgICAgTWF0aC5mbG9vcihwWzBdKSxcbiAgICAgICAgTWF0aC5mbG9vcihwWzFdKVxuICAgICAgXSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19UUkFDSykge1xuICAgIGNvbnN0IHQyID0gd2luZG93LmRlYnVnTWF0Y2gudHJhY2tpbmcyZFN1Ylt3aW5kb3cuZGVidWcudHJhY2tpbmdTdWJJbmRleF07XG4gICAgY29uc29sZS5sb2coXCJzZWFyY2hcIiwgbXgsIG15LCBzZWFyY2gsIHQyLnNlYXJjaCk7XG4gIH1cblxuICAvLyBnZXQgYmVzdCBtYXRjaGluZ1xuICBjb25zdCBtZkltYWdlID0gW107XG4gIGZvciAobGV0IGogPSAwOyBqIDwgaW1hZ2UuaGVpZ2h0OyBqKyspIHtcbiAgICBtZkltYWdlLnB1c2goW10pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2Uud2lkdGg7IGkrKykge1xuICAgICAgbWZJbWFnZVtqXS5wdXNoKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJ4ID0gQVIyX1NFQVJDSF9TSVpFO1xuICBjb25zdCByeSA9IEFSMl9TRUFSQ0hfU0laRTtcbiAgZm9yIChsZXQgbiA9IDA7IG4gPCBzZWFyY2gubGVuZ3RoOyBuKyspIHtcbiAgICAgLy8gXCJTbmFwXCIgcG9zaXRpb24gdG8gY2VudHJlIG9mIGdyaWQgc3F1YXJlLlxuICAgIGNvbnN0IHB4ID0gTWF0aC5mbG9vcihzZWFyY2hbbl1bMF0vKFNLSVBfSU5URVJWQUwgKyAxKSkqKFNLSVBfSU5URVJWQUwgKyAxKSArIChTS0lQX0lOVEVSVkFMICsgMSkvMjtcbiAgICBjb25zdCBweSA9IE1hdGguZmxvb3Ioc2VhcmNoW25dWzFdLyhTS0lQX0lOVEVSVkFMICsgMSkpKihTS0lQX0lOVEVSVkFMICsgMSkgKyAoU0tJUF9JTlRFUlZBTCArIDEpLzI7XG5cbiAgICBsZXQgc3ggPSBweCAtIHJ4OyAvLyBTdGFydCBwb3NpdGlvbiBpbiB4LlxuICAgIGlmKCBzeCA8IDAgKSBzeCA9IDA7XG4gICAgbGV0IGV4ID0gcHggKyByeDsgLy8gRW5kIHBvc2l0aW9uIGluIHguXG4gICAgaWYoIGV4ID49IHhzaXplICkgZXggPSB4c2l6ZSAtIDE7XG5cbiAgICBsZXQgc3kgPSBweSAtIHJ5OyAvLyBTdGFydCBwb3NpdGlvbiBpbiB5LlxuICAgIGlmKCBzeSA8IDAgKSBzeSA9IDA7XG4gICAgbGV0IGV5ID0gcHkgKyByeTsgLy8gRW5kIHBvc2l0aW9uIGluIHkuXG4gICAgaWYoIGV5ID49IHlzaXplICkgZXkgPSB5c2l6ZSAtIDE7XG5cbiAgICAvLyBJbml0aWFsaXNlIG1mSW1hZ2UgYnkgd3JpdGluZyAwcyBpbnRvIHRoZSBwb3RlbnRpYWwgc2VhcmNoIHNwYWNlLlxuICAgIGZvciAobGV0IGogPSBzeTsgaiA8PSBleTsgaisrICkge1xuICAgICAgZm9yIChsZXQgaSA9IHN4OyBpIDw9IGV4OyBpKysgKSB7XG4gICAgICAgIG1mSW1hZ2VbaiAqIGltYWdlLndpZHRoICsgaV0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtlZXBDYW5kaWRhdGVzID0gW107XG4gIGZvciAobGV0IG4gPSAwOyBuIDwgc2VhcmNoLmxlbmd0aDsgbisrKSB7XG4gICAgY29uc3QgcHggPSBNYXRoLmZsb29yKHNlYXJjaFtuXVswXS8oU0tJUF9JTlRFUlZBTCArIDEpKSooU0tJUF9JTlRFUlZBTCArIDEpICsgKFNLSVBfSU5URVJWQUwgKyAxKS8yO1xuICAgIGNvbnN0IHB5ID0gTWF0aC5mbG9vcihzZWFyY2hbbl1bMV0vKFNLSVBfSU5URVJWQUwgKyAxKSkqKFNLSVBfSU5URVJWQUwgKyAxKSArIChTS0lQX0lOVEVSVkFMICsgMSkvMjtcblxuICAgIC8vIC02LCAtMiwgKzIsICs2IChzZWFyY2ggc2l6ZT02LCBza2lwPTMpXG4gICAgZm9yIChsZXQgaiA9IHB5IC0gcnk7IGogPD0gcHkgKyByeTsgaiArPSBTS0lQX0lOVEVSVkFMICsgMSkge1xuICAgICAgaWYoIGogLSBBUjJfREVGQVVMVF9UUyAqIEFSMl9URU1QX1NDQUxFIDwgIDAgICAgICkgY29udGludWU7XG4gICAgICBpZiggaiArIEFSMl9ERUZBVUxUX1RTICogQVIyX1RFTVBfU0NBTEUgPj0geXNpemUgKSBicmVhaztcblxuICAgICAgZm9yKGxldCBpID0gcHggLSByeDsgaSA8PSBweCArIHJ4OyBpICs9IFNLSVBfSU5URVJWQUwgKyAxICkge1xuICAgICAgICBpZiggaSAtIEFSMl9ERUZBVUxUX1RTICogQVIyX1RFTVBfU0NBTEUgPCAgMCAgICAgKSBjb250aW51ZTtcbiAgICAgICAgaWYoIGkgKyBBUjJfREVGQVVMVF9UUyAqIEFSMl9URU1QX1NDQUxFID49IHhzaXplICkgYnJlYWs7XG5cbiAgICAgICAgaWYoIG1mSW1hZ2VbIGogKiB4c2l6ZSArIGldID09PSAxKSBjb250aW51ZTsgLy8gU2tpcCBwaXhlbHMgYWxyZWFkeSBtYXRjaGVkLlxuICAgICAgICBtZkltYWdlW2ogKiB4c2l6ZSArIGldID0gMTsgLy8gTWFyayB0aGlzIHBpeGVsIGFzIG1hdGNoZWQuXG5cbiAgICAgICAgY29uc3Qgd3ZhbCA9IF9jb21wdXRlUG9pbnRWYWwoe2ksIGosIHRzaXplLCB4c2l6ZSwgdGFyZ2V0SW1hZ2UsIHRlbXBsYXRlLCB0ZW1wbGF0ZVZsZW4sIHRlbXBsYXRlU3VtLCB0ZW1wbGF0ZVZhbGlkTnVtfSk7XG5cbiAgICAgICAga2VlcENhbmRpZGF0ZXMucHVzaCh7XG4gICAgICAgICAgeDogaSxcbiAgICAgICAgICB5OiBqLFxuICAgICAgICAgIHd2YWw6IHd2YWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgY29uc3QgdDIgPSB3aW5kb3cuZGVidWdNYXRjaC50cmFja2luZzJkU3ViW3dpbmRvdy5kZWJ1Zy50cmFja2luZ1N1YkluZGV4XTtcbiAgICBjb25zb2xlLmxvZyhcImtlZXAgY2FuZGlkYXRlcyBsZW5ndGhcIiwga2VlcENhbmRpZGF0ZXMubGVuZ3RoLCB0Mi5tYXRjaGluZ0NvbXB1dGUubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtlZXBDYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjMSA9IGtlZXBDYW5kaWRhdGVzW2ldO1xuICAgICAgY29uc3QgYzIgPSB0Mi5tYXRjaGluZ0NvbXB1dGVbaV07XG4gICAgICBpZiAoIXdpbmRvdy5jbXBPYmooYzEsIHt4OiBjMi5pLCB5OiBjMi5qLCB3dmFsOiBjMi53dmFsfSwgWyd4JywgJ3knXSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1Qga2VlcCBjYW5kaWRhdGVcIixpLCBjMSwgYzIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXJkIHBhc3MuIERldGVybWluZSBiZXN0IGNhbmRpZGF0ZS5cbiAgLy8gVE9ETyBpZiBrZWVwIG9ubHkgMywgY2FuIGRvIGZhc3RlciBpZiBzb3J0IGR1cmluZyBpbnNlcnRcbiAgLy9jb25zb2xlLmxvZyhcIm1hdGNoaW5nIGNvbXB1dGVcIiwga2VlcENhbmRpZGF0ZXMsIGRlYnVnU3ViLm1hdGNoaW5nQ29tcHV0ZSk7XG4gIGtlZXBDYW5kaWRhdGVzLnNvcnQoKGMxLCBjMikgPT4ge3JldHVybiBjMi53dmFsIC0gYzEud3ZhbH0pO1xuICBrZWVwQ2FuZGlkYXRlcy5zcGxpY2UoS0VFUF9OVU0pO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0spIHtcbiAgICB3aW5kb3cuZGVidWcuc2tpcE1hdGNoaW5nU3VtID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGNhbiByZW1vdmUgU0tJUF9JTlRFUlZBTCBhbmQgY29tYmluZSB0aGlzIHN0ZXAgYW5kIHByZXZpb3VzIHN0ZXA/IG1pZ2h0IGJlIHNsb3dlciwgYnV0IHNpbXBsZXJcbiAgbGV0IHd2YWwyID0gLTE7XG4gIGxldCBieCA9IC0xO1xuICBsZXQgYnkgPSAtMTtcbiAgZm9yIChsZXQgbCA9IDA7IGwgPCBrZWVwQ2FuZGlkYXRlcy5sZW5ndGg7IGwrKykge1xuICAgIGNvbnN0IGN4ID0ga2VlcENhbmRpZGF0ZXNbbF0ueDtcbiAgICBjb25zdCBjeSA9IGtlZXBDYW5kaWRhdGVzW2xdLnk7XG4gICAgZm9yKGxldCBqID0gY3kgLSBTS0lQX0lOVEVSVkFMOyBqIDw9IGN5ICsgU0tJUF9JTlRFUlZBTDsgaisrICkge1xuICAgICAgaWYoIGogLSBBUjJfREVGQVVMVF9UUyAqIEFSMl9URU1QX1NDQUxFIDwgIDAgICAgICkgY29udGludWU7XG4gICAgICBpZiggaiArIEFSMl9ERUZBVUxUX1RTICogQVIyX1RFTVBfU0NBTEUgPj0geXNpemUgKSBicmVhaztcblxuICAgICAgZm9yKGxldCBpID0gY3ggLSBTS0lQX0lOVEVSVkFMOyBpIDw9IGN4ICsgU0tJUF9JTlRFUlZBTDsgaSsrICkge1xuICAgICAgICBpZiggaSAtIEFSMl9ERUZBVUxUX1RTICogQVIyX1RFTVBfU0NBTEUgPCAgMCAgICAgKSBjb250aW51ZTtcbiAgICAgICAgaWYoIGkgKyBBUjJfREVGQVVMVF9UUyAqIEFSMl9URU1QX1NDQUxFID49IHhzaXplICkgYnJlYWs7XG5cbiAgICAgICAgY29uc3Qgd3ZhbCA9IF9jb21wdXRlUG9pbnRWYWwoe2ksIGosIHRzaXplLCB4c2l6ZSwgdGFyZ2V0SW1hZ2UsIHRlbXBsYXRlLCB0ZW1wbGF0ZVZsZW4sIHRlbXBsYXRlU3VtLCB0ZW1wbGF0ZVZhbGlkTnVtfSk7XG4gICAgICAgIGlmICh3dmFsID4gd3ZhbDIpIHtcbiAgICAgICAgICB3dmFsMiA9IHd2YWw7XG4gICAgICAgICAgYnggPSBpO1xuICAgICAgICAgIGJ5ID0gajtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh3dmFsMiA9PT0gLTEpIHJldHVybiBudWxsO1xuXG4gIC8vY29uc29sZS5sb2coXCJzZWxlY3RlZCBtYXRjaGluZ0NhbmRpZGF0ZXNcIiwga2VlcENhbmRpZGF0ZXMsIGRlYnVnU3ViLm1hdGNoaW5nQ2FuZGlkYXRlcyk7XG4gIC8vY29uc29sZS5sb2coXCJiZXN0TWF0Y2hpbmdDb21wdXRlXCIsIGRlYnVnU3ViLmJlc3RNYXRjaGluZ0NvbXB1dGUpO1xuICAvL2NvbnNvbGUubG9nKFwiYmVzdE1hdGNoZWRcIiwge214LCBteSwgYngsIGJ5LCBiZXN0VmFsLCBwb3MzRH0sIGRlYnVnU3ViLmJlc3RNYXRjaGVkLCBkZWJ1Z1N1Yi5iZXN0TWF0Y2hlZFswXS50cmFucyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3MyRDoge3g6IGJ4LCB5OiBieX0sXG4gICAgcG9zM0Q6IHt4OiBteCwgeTogbXksIHo6IDB9LFxuICAgIHNpbTogd3ZhbDIvIDEwMDAwLjBcbiAgfVxufVxuXG5jb25zdCBfY29tcHV0ZVBvaW50VmFsID0gKHtpLCBqLCB0c2l6ZSwgeHNpemUsIHRhcmdldEltYWdlLCB0ZW1wbGF0ZSwgdGVtcGxhdGVWbGVuLCB0ZW1wbGF0ZVN1bSwgdGVtcGxhdGVWYWxpZE51bX0pID0+IHtcbiAgbGV0IHN1bTEgPSAwO1xuICBsZXQgc3VtMiA9IDA7XG4gIGxldCBzdW0zID0gMDtcbiAgZm9yIChsZXQgamogPSAtQVIyX0RFRkFVTFRfVFM7IGpqIDw9IEFSMl9ERUZBVUxUX1RTOyBqaisrKSB7XG4gICAgZm9yIChsZXQgaWkgPSAtQVIyX0RFRkFVTFRfVFM7IGlpIDw9IEFSMl9ERUZBVUxUX1RTOyBpaSsrKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUluZGV4ID0gKGpqICsgQVIyX0RFRkFVTFRfVFMpICogdHNpemUgKyAoaWkgKyBBUjJfREVGQVVMVF9UUyk7XG5cbiAgICAgIGNvbnN0IGluZGV4ID0gKGogKyBqaiAqIEFSMl9URU1QX1NDQUxFKSAqIHhzaXplICsgKGkgKyBpaSAqIEFSMl9URU1QX1NDQUxFKTtcbiAgICAgIGlmICh0ZW1wbGF0ZVt0ZW1wbGF0ZUluZGV4XSAhPT0gbnVsbCkge1xuICAgICAgICBzdW0xICs9IHRhcmdldEltYWdlLmRhdGFbaW5kZXhdO1xuICAgICAgICBzdW0yICs9IHRhcmdldEltYWdlLmRhdGFbaW5kZXhdICogdGFyZ2V0SW1hZ2UuZGF0YVtpbmRleF07XG4gICAgICAgIHN1bTMgKz0gdGFyZ2V0SW1hZ2UuZGF0YVtpbmRleF0gKiB0ZW1wbGF0ZVt0ZW1wbGF0ZUluZGV4XTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLICYmICF3aW5kb3cuZGVidWcuc2tpcE1hdGNoaW5nU3VtKSB7XG4gICAgICAgICAgd2luZG93LmRlYnVnLnRyYWNraW5nTWF0Y2hpbmdTdW1JbmRleCArPSAxO1xuICAgICAgICAgIGNvbnN0IHQyID0gd2luZG93LmRlYnVnTWF0Y2gudHJhY2tpbmcyZFN1Ylt3aW5kb3cuZGVidWcudHJhY2tpbmdTdWJJbmRleF0ubWF0Y2hpbmdDb21wdXRlU3VtW3dpbmRvdy5kZWJ1Zy50cmFja2luZ01hdGNoaW5nU3VtSW5kZXhdO1xuICAgICAgICAgIGlmICghdDIgfHwgc3VtMSAhPT0gdDIuc3VtMSB8fCBzdW0yICE9PSB0Mi5zdW0yIHx8IHN1bTMgIT09IHQyLnN1bTMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5DT1JSRUNUIG1hdGNoaW5nIHN1bVwiLCB3aW5kb3cuZGVidWcudHJhY2tpbmdNYXRjaGluZ1N1bUluZGV4LCBpLCBqLCBzdW0xLCBzdW0yLCBzdW0zLCB0Mik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1hdGNoaW5nQ29tcHV0ZVN1bVwiLCB7aWksIGpqLCBwMl94OiAoaSArIGlpICogQVIyX1RFTVBfU0NBTEUpLCBwMl95OiAoaiArIGpqICogQVIyX1RFTVBfU0NBTEUpLCBwMjogdGFyZ2V0SW1hZ2UuZGF0YVtpbmRleF0sIHAxOiB0ZW1wbGF0ZVt0ZW1wbGF0ZUluZGV4XSwgc3VtMSwgc3VtMiwgc3VtM30sIGRlYnVnU3ViLm1hdGNoaW5nQ29tcHV0ZVN1bVtkZWJ1Z1N1bUluZGV4KytdKTtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwic3VtXCIsIHN1bTEsIHN1bTIsIHN1bTMsIGluZGV4LCB0ZW1wbGF0ZUluZGV4LCB0ZW1wbGF0ZVt0ZW1wbGF0ZUluZGV4XSwgdGFyZ2V0SW1hZ2UuZGF0YVtpbmRleF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0sgJiYgIXdpbmRvdy5kZWJ1Zy5za2lwTWF0Y2hpbmdTdW0pIHtcbiAgICBjb25zdCB0MiA9IHdpbmRvdy5kZWJ1Z01hdGNoLnRyYWNraW5nMmRTdWJbd2luZG93LmRlYnVnLnRyYWNraW5nU3ViSW5kZXhdLm1hdGNoaW5nQ29tcHV0ZVN1bVt3aW5kb3cuZGVidWcudHJhY2tpbmdNYXRjaGluZ1N1bUluZGV4XTtcbiAgICAvL2NvbnNvbGUubG9nKFwiZG9uZVwiLCB3aW5kb3cuZGVidWcudHJhY2tpbmdTdWJJbmRleCwgc3VtMSwgc3VtMiwgc3VtMywgdDIpO1xuICAgIC8vY29uc29sZS5sb2coXCJtYXRjaGluZyBzdW1cIiwgdDIpO1xuICB9XG5cbiAgc3VtMyAtPSBzdW0xICogdGVtcGxhdGVTdW0gLyB0ZW1wbGF0ZVZhbGlkTnVtO1xuICBjb25zdCB2bGVuID0gc3VtMiAtIHN1bTEgKiBzdW0xIC8gdGVtcGxhdGVWYWxpZE51bTtcbiAgbGV0IHd2YWwgPSAwO1xuICBpZiAodmxlbiAhPT0gMCkge1xuICAgIHd2YWwgPSBzdW0zICogMTAwIC8gdGVtcGxhdGVWbGVuICogMTAwIC8gTWF0aC5mbG9vcihNYXRoLnNxcnQodmxlbikpO1xuICAgIC8vd3ZhbCA9IE1hdGguZmxvb3IoTWF0aC5mbG9vcihNYXRoLmZsb29yKHN1bTMpICogMTAwIC8gTWF0aC5mbG9vcih0ZW1wbGF0ZVZsZW4pKSAqIDEwMCAvIE1hdGguZmxvb3IoTWF0aC5zcXJ0KHZsZW4pKSk7XG4gICAgLy9jb25zb2xlLmxvZyhcInd2YWxcIiwgd3ZhbCwgdGVtcGxhdGVWbGVuLCB2bGVuLCB0ZW1wbGF0ZVZhbGlkTnVtKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0sgJiYgIXdpbmRvdy5kZWJ1Zy5za2lwTWF0Y2hpbmdTdW0pIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiZG9uZVwiLCB3aW5kb3cuZGVidWcudHJhY2tpbmdTdWJJbmRleCwgc3VtMywgdmxlbiwgdGVtcGxhdGVWbGVuLCB3dmFsKTtcbiAgfVxuXG4gIHJldHVybiB3dmFsO1xufVxuXG5jb25zdCBfc2V0VGVtcGxhdGUgPSAoe2ltYWdlLCBkcGksIG1vZGVsVmlld1Byb2plY3Rpb25UcmFuc2Zvcm0sIG14LCBteX0pID0+IHtcbiAgY29uc3QgdSA9IGNvbXB1dGVTY3JlZW5Db29yZGlhdGUobW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgbXgsIG15LCAwKTtcbiAgY29uc3Qgc3ggPSBNYXRoLmZsb29yKHUueCArIDAuNSk7XG4gIGNvbnN0IHN5ID0gTWF0aC5mbG9vcih1LnkgKyAwLjUpO1xuXG4gIC8vY29uc29sZS5sb2coXCJfc2V0VGVtcGxhdGVcIiwgbW9kZWxWaWV3UHJvamVjdGlvblRyYW5zZm9ybSwgbXgsIG15LCB1LCBzeCwgc3ksICdkZWJ1Z1N1YicsIGRlYnVnU3ViLnRyYW5zLCBkZWJ1Z1N1Yi53dHJhbnMsIGRlYnVnU3ViLm14LCBkZWJ1Z1N1Yi5teSwgZGVidWdTdWIuc3gsIGRlYnVnU3ViLnN5LCBkZWJ1Z1N1Yi5peCwgZGVidWdTdWIuaXkpO1xuXG4gIGNvbnN0IHRzaXplID0gQVIyX0RFRkFVTFRfVFM7XG5cbiAgY29uc3QgdGVtcGxhdGUgPSBbXTtcbiAgLypcbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gdHNpemUgKiAyOyBqKyspIHtcbiAgICB0ZW1wbGF0ZS5wdXNoKFtdKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0c2l6ZSAqIDI7IGkrKykge1xuICAgICAgdGVtcGxhdGVbal0ucHVzaChudWxsKTtcbiAgICB9XG4gIH1cbiAgKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ERUJVR19UUkFDSykge1xuICAgIHdpbmRvdy5kZWJ1Zy50ZW1wbGF0ZUNvbXB1dGVJbmRleCA9IC0xO1xuICB9XG5cbiAgbGV0IHN1bSA9IDAuMDtcbiAgbGV0IHN1bTIgPSAwLjA7XG4gIGxldCBrID0gMDtcbiAgZm9yIChsZXQgaiA9IC10c2l6ZTsgaiA8PSB0c2l6ZTsgaisrKSB7XG4gICAgY29uc3Qgc3kyID0gc3kgKyBqICogQVIyX1RFTVBfU0NBTEU7XG4gICAgZm9yIChsZXQgaSA9IC10c2l6ZTsgaSA8PSB0c2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCBzeDIgPSBzeCArIGkgKiBBUjJfVEVNUF9TQ0FMRTtcblxuICAgICAgY29uc3Qge3g6IG14MiwgeTogbXkyfSA9IHNjcmVlblRvTWFya2VyQ29vcmRpbmF0ZShtb2RlbFZpZXdQcm9qZWN0aW9uVHJhbnNmb3JtLCBzeDIsIHN5Mik7XG5cbiAgICAgIGxldCBpeCA9IE1hdGguZmxvb3IobXgyICogZHBpIC8gMjUuNCArIDAuNSk7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LkRFQlVHX1RSQUNLKSB7XG4gICAgICAgIC8vIGNyYXp5IGhhY2sgZm9yIGRlYnVnZ2luZy4uLi5cbiAgICAgICAgaWYgKGl4ID09PSAgMTYzICYmICBNYXRoLmFicyhteDItODEuNzQ5OTE2OTAxMDQ4MDgpPDAuMDAwMDAwMDAxKSBpeCA9IDE2NDtcbiAgICAgICAgLy9pZiAoaXggPT09IC0xICYmIG14MiA9PT0gLTEuMDU3MTg0MDUyMTQzNzE1NykgaXggPSAwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpeSA9IE1hdGguZmxvb3IoaW1hZ2UuaGVpZ2h0IC0gbXkyICogZHBpIC8gMjUuNCArIDAuNSk7XG4gICAgICAvL2NvbnNvbGUubG9nKFwiaXggaXlcIiwgaXgsIGl5LCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCBteDIsIG15MiwgZHBpKTtcbiAgICAgIGlmIChpeCA8IDAgfHwgaXggPj0gaW1hZ2Uud2lkdGgpIHtcbiAgICAgICAgdGVtcGxhdGUucHVzaChudWxsKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoaXkgPCAwIHx8IGl5ID49IGltYWdlLmhlaWdodCkge1xuICAgICAgICB0ZW1wbGF0ZS5wdXNoKG51bGwpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGl4ZWwgPSBpbWFnZS5kYXRhW2l5ICogaW1hZ2Uud2lkdGggKyBpeF07XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuREVCVUdfVFJBQ0spIHtcbiAgICAgICAgd2luZG93LmRlYnVnLnRlbXBsYXRlQ29tcHV0ZUluZGV4ICs9IDE7XG4gICAgICAgIGNvbnN0IGQxID0ge2l4LCBpeSwgc3g6IHN4Miwgc3k6IHN5MiwgbXg6IG14MiwgbXk6IG15MiwgcGl4ZWx9O1xuICAgICAgICBjb25zdCBkMiA9IHdpbmRvdy5kZWJ1Z01hdGNoLnRyYWNraW5nMmRTdWJbd2luZG93LmRlYnVnLnRyYWNraW5nU3ViSW5kZXhdLnRlbXBsYXRlQ29tcHV0ZVt3aW5kb3cuZGVidWcudGVtcGxhdGVDb21wdXRlSW5kZXhdO1xuICAgICAgICBpZiAoIXdpbmRvdy5jbXBPYmooZDEsIGQyLCBbJ2l4JywgJ2l5JywgJ3N4JywgJ3N5JywgJ214JywgJ215J10pKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJJTkNPUlJFQ1QgdGVtcGxhdGUgY29tcHV0ZVwiLCB3aW5kb3cuZGVidWcudGVtcGxhdGVDb21wdXRlSW5kZXgsIGQxLCBkMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGQxLnBpeGVsICE9PSBkMi5waXhlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ214MiwgbXkyJywgbXgyLCBteTIsIGRwaSwgbXgyICogZHBpIC8gMjUuNCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOQ09SUkVDVCB0ZW1wbGF0ZSBjb21wdXRlIHBpeGVsXCIsIHdpbmRvdy5kZWJ1Zy50ZW1wbGF0ZUNvbXB1dGVJbmRleCwgZDEsIGQyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy90ZW1wbGF0ZVtqK3RzaXplXVtpK3RzaXplXSA9IHBpeGVsO1xuICAgICAgdGVtcGxhdGUucHVzaChwaXhlbCk7XG4gICAgICBzdW0gKz0gcGl4ZWw7XG4gICAgICBzdW0yICs9IHBpeGVsICogcGl4ZWw7XG4gICAgICBrICs9IDE7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdmxlbiA9IE1hdGguc3FydChzdW0yIC0gc3VtICogc3VtIC8gayk7XG4gIC8vY29uc29sZS5sb2coXCJ2bGVuOiBcIiwgdmxlbiwgXCJzdW06IFwiLCBzdW0sIFwic3VtMjogXCIsIHN1bTIsIFwiazogXCIsIGspO1xuICByZXR1cm4ge1xuICAgIHRlbXBsYXRlLFxuICAgIHZsZW4sXG4gICAgc3VtLFxuICAgIHZhbGlkTnVtOiBrXG4gIH1cbn1cblxuY29uc3QgX3NlbGVjdFRlbXBsYXRlID0gKHtwb3MsIHByZXZTZWxlY3RlZEZlYXR1cmVzLCBjYW5kaWRhdGVzLCBudW0sIHhzaXplLCB5c2l6ZSwgcmFuZG9taXplcn0pID0+IHtcbiAgaWYgKG51bSA9PT0gMCkge1xuICAgIGxldCBkbWF4ID0gMC4wO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhbmRpZGF0ZXNbaV0uZmxhZykgY29udGludWU7XG4gICAgICBpZiAoY2FuZGlkYXRlc1tpXS5zeCA8IHhzaXplLzggfHwgY2FuZGlkYXRlc1tpXS5zeCA+IHhzaXplKjcvOCkgY29udGludWU7XG4gICAgICBpZiAoY2FuZGlkYXRlc1tpXS5zeSA8IHlzaXplLzggfHwgY2FuZGlkYXRlc1tpXS5zeSA+IHlzaXplKjcvOCkgY29udGludWU7XG4gICAgICBjb25zdCBkID0gKGNhbmRpZGF0ZXNbaV0uc3ggLSB4c2l6ZS8yKSAqIChjYW5kaWRhdGVzW2ldLnN4IC0geHNpemUvMilcbiAgICAgICAgICAgICAgKyAoY2FuZGlkYXRlc1tpXS5zeSAtIHlzaXplLzIpICogKGNhbmRpZGF0ZXNbaV0uc3kgLSB5c2l6ZS8yKTtcbiAgICAgIGlmIChkID4gZG1heCkge1xuICAgICAgICBkbWF4ID0gZDtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFwic2VsZWN0VGVtcGxhdGVcIiwgbnVtLCBkbWF4LCBpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIGVsc2UgaWYgKG51bSA9PT0gMSkge1xuICAgIGxldCBkbWF4ID0gMC4wO1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhbmRpZGF0ZXNbaV0uZmxhZykgY29udGludWU7XG4gICAgICBpZiAoY2FuZGlkYXRlc1tpXS5zeCA8IHhzaXplLzggfHwgY2FuZGlkYXRlc1tpXS5zeCA+IHhzaXplKjcvOCkgY29udGludWU7XG4gICAgICBpZiAoY2FuZGlkYXRlc1tpXS5zeSA8IHlzaXplLzggfHwgY2FuZGlkYXRlc1tpXS5zeSA+IHlzaXplKjcvOCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGQgPSAoY2FuZGlkYXRlc1tpXS5zeCAtIHBvc1swXVswXSkgKiAoY2FuZGlkYXRlc1tpXS5zeCAtIHBvc1swXVswXSlcbiAgICAgICAgICAgICAgKyAoY2FuZGlkYXRlc1tpXS5zeSAtIHBvc1swXVsxXSkgKiAoY2FuZGlkYXRlc1tpXS5zeSAtIHBvc1swXVsxXSk7XG4gICAgICBpZiAoZCA+IGRtYXgpIHtcbiAgICAgICAgZG1heCA9IGQ7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdFRlbXBsYXRlXCIsIG51bSwgZG1heCwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICBlbHNlIGlmIChudW0gPT09IDIpIHtcbiAgICBsZXQgZG1heCA9IDAuMDtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjYW5kaWRhdGVzW2ldLmZsYWcpIGNvbnRpbnVlO1xuICAgICAgaWYgKGNhbmRpZGF0ZXNbaV0uc3ggPCB4c2l6ZS84IHx8IGNhbmRpZGF0ZXNbaV0uc3ggPiB4c2l6ZSo3LzgpIGNvbnRpbnVlO1xuICAgICAgaWYgKGNhbmRpZGF0ZXNbaV0uc3kgPCB5c2l6ZS84IHx8IGNhbmRpZGF0ZXNbaV0uc3kgPiB5c2l6ZSo3LzgpIGNvbnRpbnVlO1xuXG4gICAgICBsZXQgZCA9IChjYW5kaWRhdGVzW2ldLnN4IC0gcG9zWzBdWzBdKSAqIChwb3NbMV1bMV0gLSBwb3NbMF1bMV0pXG4gICAgICAgICAgICAgIC0gKGNhbmRpZGF0ZXNbaV0uc3kgLSBwb3NbMF1bMV0pICogKHBvc1sxXVswXSAtIHBvc1swXVswXSk7XG4gICAgICBkID0gZCAqIGQ7XG4gICAgICBpZiAoZCA+IGRtYXgpIHtcbiAgICAgICAgZG1heCA9IGQ7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdFRlbXBsYXRlXCIsIG51bSwgZG1heCwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICBlbHNlIGlmIChudW0gPT09IDMpIHtcbiAgICBjb25zdCB7c2luOiBwMnNpbiwgY29zOiBwMmNvc30gPSBfZ2V0VmVjdG9yQW5nbGUocG9zWzBdLCBwb3NbMV0pO1xuICAgIGNvbnN0IHtzaW46IHAzc2luLCBjb3M6IHAzY29zfSA9IF9nZXRWZWN0b3JBbmdsZShwb3NbMF0sIHBvc1syXSk7XG5cbiAgICBsZXQgc21heCA9IDAuMDtcbiAgICBsZXQgaW5kZXggPSAtMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGNhbmRpZGF0ZXNbaV0uZmxhZykgY29udGludWU7XG4gICAgICBpZiAoY2FuZGlkYXRlc1tpXS5zeCA8IHhzaXplLzggfHwgY2FuZGlkYXRlc1tpXS5zeCA+IHhzaXplKjcvOCkgY29udGludWU7XG4gICAgICBpZiAoY2FuZGlkYXRlc1tpXS5zeSA8IHlzaXplLzggfHwgY2FuZGlkYXRlc1tpXS5zeSA+IHlzaXplKjcvOCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGNQb3MgPSBbY2FuZGlkYXRlc1tpXS5zeCwgY2FuZGlkYXRlc1tpXS5zeV07XG4gICAgICBjb25zdCB7c2luOiBwNHNpbiwgY29zOiBwNGNvc30gPSBfZ2V0VmVjdG9yQW5nbGUocG9zWzBdLCBjUG9zKTtcblxuICAgICAgbGV0IHExLCByMSwgcjI7XG4gICAgICBpZigoKHAzc2luKnAyY29zIC0gcDNjb3MqcDJzaW4pID49IDAuMCkgJiYgKChwNHNpbipwMmNvcyAtIHA0Y29zKnAyc2luKSA+PSAwLjApKSB7XG4gICAgICAgIGlmKCBwNHNpbipwM2NvcyAtIHA0Y29zKnAzc2luID49IDAuMCApIHtcbiAgICAgICAgICBxMSA9IHBvc1sxXTsgcjEgPSBwb3NbMl07IHIyID0gY1BvcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBxMSA9IHBvc1sxXTsgcjEgPSBjUG9zOyByMiA9IHBvc1syXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZigoKHA0c2luKnAzY29zIC0gcDRjb3MqcDNzaW4pID49IDAuMCkgJiYgKChwMnNpbipwM2NvcyAtIHAyY29zKnAzc2luKSA+PSAwLjApKSB7XG4gICAgICAgIGlmKCBwNHNpbipwMmNvcyAtIHA0Y29zKnAyc2luID49IDAuMCApIHtcbiAgICAgICAgICBxMSA9IHBvc1syXTsgcjEgPSBwb3NbMV07IHIyID0gY1BvcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBxMSA9IHBvc1syXTsgcjEgPSBjUG9zOyByMiA9IHBvc1sxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZigoKHAyc2luKnA0Y29zIC0gcDJjb3MqcDRzaW4pID49IDAuMCkgJiYgKChwM3NpbipwNGNvcyAtIHAzY29zKnA0c2luKSA+PSAwLjApKSB7XG4gICAgICAgIGlmKCBwM3NpbipwMmNvcyAtIHAzY29zKnAyc2luID49IDAuMCApIHtcbiAgICAgICAgICBxMSA9IGNQb3M7IHIxID0gcG9zWzFdOyByMiA9IHBvc1syXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBxMSA9IGNQb3M7IHIxID0gcG9zWzJdOyByMiA9IHBvc1sxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcyA9IF9nZXRSZWdpb25BcmVhKHBvc1swXSwgcTEsIHIxLCByMik7XG5cbiAgICAgIGlmKCBzID4gc21heCApIHtcbiAgICAgICAgc21heCA9IHM7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhcInNlbGVjdFRlbXBsYXRlXCIsIG51bSwgc21heCwgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuICBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZTZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZXNbal0uZmxhZykgY29udGludWU7XG5cbiAgICAgICAgaWYgKHByZXZTZWxlY3RlZEZlYXR1cmVzW2ldLmxldmVsID09PSBjYW5kaWRhdGVzW2pdLmxldmVsXG4gICAgICAgICAgJiYgcHJldlNlbGVjdGVkRmVhdHVyZXNbaV0ubnVtID09PSBjYW5kaWRhdGVzW2pdLm51bSkge1xuICAgICAgICAgIHJldHVybiBqO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGF2YWlsYWJsZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWNhbmRpZGF0ZXNbaV0uZmxhZykgIGF2YWlsYWJsZSArPSAxO1xuICAgIH1cbiAgICBsZXQgcGljayA9IHJhbmRvbWl6ZXIubmV4dEludChhdmFpbGFibGUpO1xuICAgIC8vbGV0IHBpY2sgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFjYW5kaWRhdGVzW2ldLmZsYWcpIHtcbiAgICAgICAgaWYgKHBpY2sgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaWNrIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5jb25zdCBfZ2V0VmVjdG9yQW5nbGUgPSAocDEsIHAyKSA9PiB7XG4gIGNvbnN0IGwgPSBNYXRoLnNxcnQoIChwMlswXS1wMVswXSkqKHAyWzBdLXAxWzBdKSArIChwMlsxXS1wMVsxXSkqKHAyWzFdLXAxWzFdKSApO1xuICByZXR1cm4ge1xuICAgIHNpbjogKHAyWzFdIC0gcDFbMV0pIC8gbCxcbiAgICBjb3M6IChwMlswXSAtIHAxWzBdKSAvIGxcbiAgfVxufVxuXG5jb25zdCBfZ2V0UmVnaW9uQXJlYSA9IChwMSwgcDIsIHAzLCBwNCkgPT4ge1xuICBjb25zdCBzID0gX2dldFRyaWFuZ2xlQXJlYShwMSwgcDIsIHAzKVxuICAgICAgICAgICsgX2dldFRyaWFuZ2xlQXJlYShwMSwgcDMsIHA0KTtcbiAgcmV0dXJuIHM7XG59XG5cbmNvbnN0IF9nZXRUcmlhbmdsZUFyZWEgPSAocDEsIHAyLCBwMykgPT4ge1xuICBjb25zdCB4MSA9IHAyWzBdIC0gcDFbMF07XG4gIGNvbnN0IHkxID0gcDJbMV0gLSBwMVsxXTtcbiAgY29uc3QgeDIgPSBwM1swXSAtIHAxWzBdO1xuICBjb25zdCB5MiA9IHAzWzFdIC0gcDFbMV07XG5cbiAgY29uc3QgcyA9IDEuMCAqICh4MSAqIHkyIC0geDIgKiB5MSkgLyAyLjA7XG4gIHJldHVybiBNYXRoLmFicyhzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHRyYWNrXG59XG4iLCIvLyBmYXN0IDJEIHN1Ym1hdHJpeCBzdW0gdXNpbmcgY3VtdWxhdGl2ZSBzdW0gYWxnb3JpdGhtXG5jbGFzcyBDdW1zdW0ge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy5jdW1zdW0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKSB7XG4gICAgICB0aGlzLmN1bXN1bS5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgICAgICB0aGlzLmN1bXN1bVtqXS5wdXNoKDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3Vtc3VtWzBdWzBdID0gZGF0YVswXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHdpZHRoOyBpKyspIHtcbiAgICAgIHRoaXMuY3Vtc3VtWzBdW2ldID0gdGhpcy5jdW1zdW1bMF1baS0xXSArIGRhdGFbaV07XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAxOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgIHRoaXMuY3Vtc3VtW2pdWzBdID0gdGhpcy5jdW1zdW1bai0xXVswXSArIGRhdGFbaip3aWR0aF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCBoZWlnaHQ7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB3aWR0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuY3Vtc3VtW2pdW2ldID0gZGF0YVtqKndpZHRoK2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLmN1bXN1bVtqLTFdW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLmN1bXN1bVtqXVtpLTFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB0aGlzLmN1bXN1bVtqLTFdW2ktMV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcXVlcnkoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBsZXQgcmV0ID0gdGhpcy5jdW1zdW1beTJdW3gyXTtcbiAgICBpZiAoeTEgPiAwKSByZXQgLT0gdGhpcy5jdW1zdW1beTEtMV1beDJdO1xuICAgIGlmICh4MSA+IDApIHJldCAtPSB0aGlzLmN1bXN1bVt5Ml1beDEtMV07XG4gICAgaWYgKHgxID4gMCAmJiB5MSA+IDApIHJldCArPSB0aGlzLmN1bXN1bVt5MS0xXVt4MS0xXTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDdW1zdW1cbn1cbiIsIi8vIGNoZWNrIHdoaWNoIHNpZGUgcG9pbnQgQyBvbiB0aGUgbGluZSBmcm9tIEEgdG8gQlxuY29uc3QgbGluZVBvaW50U2lkZSA9IChBLCBCLCBDKSA9PiB7XG4gIHJldHVybiAoKEJbMF0tQVswXSkqKENbMV0tQVsxXSktKEJbMV0tQVsxXSkqKENbMF0tQVswXSkpO1xufVxuXG4vLyBzcmNQb2ludHMsIGRzdFBvaW50czogYXJyYXkgb2YgZm91ciBlbGVtZW50cyBbeCwgeV1cbmNvbnN0IGNoZWNrRm91clBvaW50c0NvbnNpc3RlbnQgPSAoeDEsIHgyLCB4MywgeDQsIHgxcCwgeDJwLCB4M3AsIHg0cCkgPT4ge1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDEsIHgyLCB4MykgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDFwLCB4MnAsIHgzcCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDIsIHgzLCB4NCkgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDJwLCB4M3AsIHg0cCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDMsIHg0LCB4MSkgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDNwLCB4NHAsIHgxcCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDQsIHgxLCB4MikgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDRwLCB4MXAsIHgycCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgY2hlY2tUaHJlZVBvaW50c0NvbnNpc3RlbnQgPSAoeDEsIHgyLCB4MywgeDFwLCB4MnAsIHgzcCkgPT4ge1xuICBpZiAoKGxpbmVQb2ludFNpZGUoeDEsIHgyLCB4MykgPiAwKSAhPT0gKGxpbmVQb2ludFNpZGUoeDFwLCB4MnAsIHgzcCkgPiAwKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuY29uc3QgZGV0ZXJtaW5hbnQgPSAoQSkgPT4ge1xuICBjb25zdCBDMSA9ICBBWzRdICogQVs4XSAtIEFbNV0gKiBBWzddO1xuICBjb25zdCBDMiA9ICBBWzNdICogQVs4XSAtIEFbNV0gKiBBWzZdO1xuICBjb25zdCBDMyA9ICBBWzNdICogQVs3XSAtIEFbNF0gKiBBWzZdO1xuICByZXR1cm4gQVswXSAqIEMxIC0gQVsxXSAqIEMyICsgQVsyXSAqIEMzO1xufVxuXG5jb25zdCBtYXRyaXhJbnZlcnNlMzMgPSAoQSwgdGhyZXNob2xkKSA9PiB7XG4gIGNvbnN0IGRldCA9IGRldGVybWluYW50KEEpO1xuICBpZiAoTWF0aC5hYnMoZGV0KSA8PSB0aHJlc2hvbGQpIHJldHVybiBudWxsO1xuICBjb25zdCBvbmVPdmVyID0gMS4wIC8gZGV0O1xuXG4gIGNvbnN0IEIgPSBbXG4gICAgKEFbNF0gKiBBWzhdIC0gQVs1XSAqIEFbN10pICogb25lT3ZlcixcbiAgICAoQVsyXSAqIEFbN10gLSBBWzFdICogQVs4XSkgKiBvbmVPdmVyLFxuICAgIChBWzFdICogQVs1XSAtIEFbMl0gKiBBWzRdKSAqIG9uZU92ZXIsXG4gICAgKEFbNV0gKiBBWzZdIC0gQVszXSAqIEFbOF0pICogb25lT3ZlcixcbiAgICAoQVswXSAqIEFbOF0gLSBBWzJdICogQVs2XSkgKiBvbmVPdmVyLFxuICAgIChBWzJdICogQVszXSAtIEFbMF0gKiBBWzVdKSAqIG9uZU92ZXIsXG4gICAgKEFbM10gKiBBWzddIC0gQVs0XSAqIEFbNl0pICogb25lT3ZlcixcbiAgICAoQVsxXSAqIEFbNl0gLSBBWzBdICogQVs3XSkgKiBvbmVPdmVyLFxuICAgIChBWzBdICogQVs0XSAtIEFbMV0gKiBBWzNdKSAqIG9uZU92ZXIsXG4gIF07XG4gIHJldHVybiBCO1xufVxuXG5jb25zdCBtYXRyaXhNdWwzMyA9IChBLCBCKSA9PiB7XG4gIGNvbnN0IEMgPSBbXTtcbiAgQ1swXSA9IEFbMF0qQlswXSArIEFbMV0qQlszXSArIEFbMl0qQls2XTtcbiAgQ1sxXSA9IEFbMF0qQlsxXSArIEFbMV0qQls0XSArIEFbMl0qQls3XTtcbiAgQ1syXSA9IEFbMF0qQlsyXSArIEFbMV0qQls1XSArIEFbMl0qQls4XTtcbiAgQ1szXSA9IEFbM10qQlswXSArIEFbNF0qQlszXSArIEFbNV0qQls2XTtcbiAgQ1s0XSA9IEFbM10qQlsxXSArIEFbNF0qQls0XSArIEFbNV0qQls3XTtcbiAgQ1s1XSA9IEFbM10qQlsyXSArIEFbNF0qQls1XSArIEFbNV0qQls4XTtcbiAgQ1s2XSA9IEFbNl0qQlswXSArIEFbN10qQlszXSArIEFbOF0qQls2XTtcbiAgQ1s3XSA9IEFbNl0qQlsxXSArIEFbN10qQls0XSArIEFbOF0qQls3XTtcbiAgQ1s4XSA9IEFbNl0qQlsyXSArIEFbN10qQls1XSArIEFbOF0qQls4XTtcbiAgcmV0dXJuIEM7XG59XG5cbmNvbnN0IG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzID0gKHgsIEgpID0+IHtcbiAgY29uc3QgdyA9IEhbNl0qeFswXSArIEhbN10qeFsxXSArIEhbOF07XG4gIGNvbnN0IHhwID0gW107XG4gIHhwWzBdID0gKEhbMF0qeFswXSArIEhbMV0qeFsxXSArIEhbMl0pL3c7XG4gIHhwWzFdID0gKEhbM10qeFswXSArIEhbNF0qeFsxXSArIEhbNV0pL3c7XG4gIHJldHVybiB4cDtcbn1cblxuY29uc3Qgc21hbGxlc3RUcmlhbmdsZUFyZWEgPSAoeDEsIHgyLCB4MywgeDQpID0+IHtcbiAgY29uc3QgdjEyID0gX3ZlY3Rvcih4MiwgeDEpO1xuICBjb25zdCB2MTMgPSBfdmVjdG9yKHgzLCB4MSk7XG4gIGNvbnN0IHYxNCA9IF92ZWN0b3IoeDQsIHgxKTtcbiAgY29uc3QgdjMyID0gX3ZlY3Rvcih4MiwgeDMpO1xuICBjb25zdCB2MzQgPSBfdmVjdG9yKHg0LCB4Myk7XG4gIGNvbnN0IGExID0gX2FyZWFPZlRyaWFuZ2xlKHYxMiwgdjEzKTtcbiAgY29uc3QgYTIgPSBfYXJlYU9mVHJpYW5nbGUodjEzLCB2MTQpO1xuICBjb25zdCBhMyA9IF9hcmVhT2ZUcmlhbmdsZSh2MTIsIHYxNCk7XG4gIGNvbnN0IGE0ID0gX2FyZWFPZlRyaWFuZ2xlKHYzMiwgdjM0KTtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWluKE1hdGgubWluKGExLCBhMiksIGEzKSwgYTQpO1xufVxuXG4vLyBjaGVjayBpZiBmb3VyIHBvaW50cyBmb3JtIGEgY29udmV4IHF1YWRyaWxhdGVybmFsLlxuLy8gYWxsIGZvdXIgY29tYmluYXRpb25zIHNob3VsZCBoYXZlIHNhbWUgc2lnblxuY29uc3QgcXVhZHJpbGF0ZXJhbENvbnZleCA9ICh4MSwgeDIsIHgzLCB4NCkgPT4ge1xuICBjb25zdCBmaXJzdCA9IGxpbmVQb2ludFNpZGUoeDEsIHgyLCB4MykgPD0gMDtcbiAgaWYgKCAobGluZVBvaW50U2lkZSh4MiwgeDMsIHg0KSA8PSAwKSAhPT0gZmlyc3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKCAobGluZVBvaW50U2lkZSh4MywgeDQsIHgxKSA8PSAwKSAhPT0gZmlyc3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKCAobGluZVBvaW50U2lkZSh4NCwgeDEsIHgyKSA8PSAwKSAhPT0gZmlyc3QpIHJldHVybiBmYWxzZTtcblxuICAvL2lmIChsaW5lUG9pbnRTaWRlKHgxLCB4MiwgeDMpIDw9IDApIHJldHVybiBmYWxzZTtcbiAgLy9pZiAobGluZVBvaW50U2lkZSh4MiwgeDMsIHg0KSA8PSAwKSByZXR1cm4gZmFsc2U7XG4gIC8vaWYgKGxpbmVQb2ludFNpZGUoeDMsIHg0LCB4MSkgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAvL2lmIChsaW5lUG9pbnRTaWRlKHg0LCB4MSwgeDIpIDw9IDApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IF92ZWN0b3IgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gW1xuICAgIGFbMF0gLSBiWzBdLFxuICAgIGFbMV0gLSBiWzFdXG4gIF1cbn1cblxuY29uc3QgX2FyZWFPZlRyaWFuZ2xlID0gKHUsIHYpID0+IHtcbiAgY29uc3QgYSA9IHVbMF0qdlsxXSAtIHVbMV0qdlswXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEpICogMC41O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWF0cml4SW52ZXJzZTMzLFxuICBtYXRyaXhNdWwzMyxcbiAgcXVhZHJpbGF0ZXJhbENvbnZleCxcbiAgc21hbGxlc3RUcmlhbmdsZUFyZWEsXG4gIG11bHRpcGx5UG9pbnRIb21vZ3JhcGh5SW5ob21vZ2Vub3VzLFxuICBjaGVja1RocmVlUG9pbnRzQ29uc2lzdGVudCxcbiAgY2hlY2tGb3VyUG9pbnRzQ29uc2lzdGVudCxcbiAgZGV0ZXJtaW5hbnRcbn1cblxuIiwiY29uc3QgdXBzYW1wbGVCaWxpbmVhciA9ICh7aW1hZ2UsIHBhZE9uZVdpZHRoLCBwYWRPbmVIZWlnaHR9KSA9PiB7XG4gIGNvbnN0IHt3aWR0aCwgaGVpZ2h0LCBkYXRhfSA9IGltYWdlO1xuXG4gIGNvbnN0IGRzdFdpZHRoID0gaW1hZ2Uud2lkdGggKiAyICsgKHBhZE9uZVdpZHRoPzE6MCk7XG4gIGNvbnN0IGRzdEhlaWdodCA9IGltYWdlLmhlaWdodCAqIDIgKyAocGFkT25lSGVpZ2h0PzE6MCk7XG5cbiAgY29uc3QgdGVtcCA9IG5ldyBGbG9hdDMyQXJyYXkoZHN0V2lkdGggKiBkc3RIZWlnaHQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRzdFdpZHRoOyBpKyspIHtcbiAgICBjb25zdCBzaSA9IDAuNSAqIGkgLSAwLjI1O1xuICAgIGxldCBzaTAgPSBNYXRoLmZsb29yKHNpKTtcbiAgICBsZXQgc2kxID0gTWF0aC5jZWlsKHNpKTtcbiAgICBpZiAoc2kwIDwgMCkgc2kwID0gMDsgLy8gYm9yZGVyXG4gICAgaWYgKHNpMSA+PSB3aWR0aCkgc2kxID0gd2lkdGggLSAxOyAvLyBib3JkZXJcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgZHN0SGVpZ2h0OyBqKyspIHtcbiAgICAgIGNvbnN0IHNqID0gMC41ICogaiAtIDAuMjU7XG4gICAgICBsZXQgc2owID0gTWF0aC5mbG9vcihzaik7XG4gICAgICBsZXQgc2oxID0gTWF0aC5jZWlsKHNqKTtcbiAgICAgIGlmIChzajAgPCAwKSBzajAgPSAwOyAvLyBib3JkZXJcbiAgICAgIGlmIChzajEgPj0gaGVpZ2h0KSBzajEgPSBoZWlnaHQgLSAxOyAvL2JvcmRlclxuXG4gICAgICBjb25zdCB2YWx1ZSA9IChzaTEgLSBzaSkgKiAoc2oxIC0gc2opICogZGF0YVsgc2owICogd2lkdGggKyBzaTAgXSArXG4gICAgICAgICAgICAgICAgICAgIChzaTEgLSBzaSkgKiAoc2ogLSBzajApICogZGF0YVsgc2oxICogd2lkdGggKyBzaTAgXSArXG4gICAgICAgICAgICAgICAgICAgIChzaSAtIHNpMCkgKiAoc2oxIC0gc2opICogZGF0YVsgc2owICogd2lkdGggKyBzaTEgXSArXG4gICAgICAgICAgICAgICAgICAgIChzaSAtIHNpMCkgKiAoc2ogLSBzajApICogZGF0YVsgc2oxICogd2lkdGggKyBzaTEgXTtcblxuICAgICAgdGVtcFtqICogZHN0V2lkdGggKyBpXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7ZGF0YTogdGVtcCwgd2lkdGg6IGRzdFdpZHRoLCBoZWlnaHQ6IGRzdEhlaWdodH07XG59XG5cbmNvbnN0IGRvd25zYW1wbGVCaWxpbmVhciA9ICh7aW1hZ2V9KSA9PiB7XG4gIGNvbnN0IHtkYXRhLCB3aWR0aCwgaGVpZ2h0fSA9IGltYWdlO1xuXG4gIGNvbnN0IGRzdFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCAvIDIpO1xuICBjb25zdCBkc3RIZWlnaHQgPSBNYXRoLmZsb29yKGhlaWdodCAvIDIpO1xuXG4gIGNvbnN0IHRlbXAgPSBuZXcgRmxvYXQzMkFycmF5KGRzdFdpZHRoICogZHN0SGVpZ2h0KTtcbiAgY29uc3Qgb2Zmc2V0cyA9IFswLCAxLCB3aWR0aCwgd2lkdGgrMV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgZHN0SGVpZ2h0OyBqKyspIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRzdFdpZHRoOyBpKyspIHtcbiAgICAgIGxldCBzcmNQb3MgPSBqKjIgKiB3aWR0aCArIGkqMjtcblxuICAgICAgbGV0IHZhbHVlID0gMC4wO1xuICAgICAgZm9yIChsZXQgZCA9IDA7IGQgPCBvZmZzZXRzLmxlbmd0aDsgZCsrKSB7XG4gICAgICAgIHZhbHVlICs9IGRhdGFbc3JjUG9zKyBvZmZzZXRzW2RdXTtcbiAgICAgIH1cbiAgICAgIHZhbHVlICo9IDAuMjU7XG4gICAgICB0ZW1wW2oqZHN0V2lkdGgraV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtkYXRhOiB0ZW1wLCB3aWR0aDogZHN0V2lkdGgsIGhlaWdodDogZHN0SGVpZ2h0fTtcbn1cblxuY29uc3QgcmVzaXplID0gKHtpbWFnZSwgcmF0aW99KSA9PiB7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5yb3VuZChpbWFnZS53aWR0aCAqIHJhdGlvKTtcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5yb3VuZChpbWFnZS5oZWlnaHQgKiByYXRpbyk7XG5cbiAgY29uc3QgaW1hZ2VEYXRhID0gbmV3IEZsb2F0MzJBcnJheSh3aWR0aCAqIGhlaWdodCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2lkdGg7IGkrKykge1xuICAgIGxldCBzaTEgPSBNYXRoLnJvdW5kKDEuMCAqIGkgLyByYXRpbyk7XG4gICAgbGV0IHNpMiA9IE1hdGgucm91bmQoMS4wICogKGkrMSkgLyByYXRpbykgLSAxO1xuICAgIGlmIChzaTIgPj0gaW1hZ2Uud2lkdGgpIHNpMiA9IGltYWdlLndpZHRoIC0gMTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspIHtcbiAgICAgIGxldCBzajEgPSBNYXRoLnJvdW5kKDEuMCAqIGogLyByYXRpbyk7XG4gICAgICBsZXQgc2oyID0gTWF0aC5yb3VuZCgxLjAgKiAoaisxKSAvIHJhdGlvKSAtIDE7XG4gICAgICBpZiAoc2oyID49IGltYWdlLmhlaWdodCkgc2oyID0gaW1hZ2UuaGVpZ2h0IC0gMTtcblxuICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaWkgPSBzaTE7IGlpIDw9IHNpMjsgaWkrKykge1xuICAgICAgICBmb3IgKGxldCBqaiA9IHNqMTsgamogPD0gc2oyOyBqaisrKSB7XG4gICAgICAgICAgc3VtICs9ICgxLjAgKiBpbWFnZS5kYXRhW2pqICogaW1hZ2Uud2lkdGggKyBpaV0pO1xuICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGltYWdlRGF0YVtqICogd2lkdGggKyBpXSA9IE1hdGguZmxvb3Ioc3VtIC8gY291bnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge2RhdGE6IGltYWdlRGF0YSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkb3duc2FtcGxlQmlsaW5lYXIsXG4gIHVwc2FtcGxlQmlsaW5lYXIsXG4gIHJlc2l6ZSxcbn1cblxuIiwiY29uc3QgbVJhbmRTZWVkID0gMTIzNDtcblxuY29uc3QgY3JlYXRlUmFuZG9taXplciA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9taXplciA9IHtcbiAgICBzZWVkOiBtUmFuZFNlZWQsXG5cbiAgICBhcnJheVNodWZmbGUob3B0aW9ucykge1xuICAgICAgY29uc3Qge2Fyciwgc2FtcGxlU2l6ZX0gPSBvcHRpb25zO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYW1wbGVTaXplOyBpKyspIHtcblxuICAgICAgICB0aGlzLnNlZWQgPSAoMjE0MDEzICogdGhpcy5zZWVkICsgMjUzMTAxMSkgJSAoMSA8PCAzMSk7XG4gICAgICAgIGxldCBrID0gKHRoaXMuc2VlZCA+PiAxNikgJiAweDdmZmY7XG4gICAgICAgIGsgPSBrICUgYXJyLmxlbmd0aDtcblxuICAgICAgICBsZXQgdG1wID0gYXJyW2ldO1xuICAgICAgICBhcnJbaV0gPSBhcnJba107XG4gICAgICAgIGFycltrXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbmV4dEludChtYXhWYWx1ZSkge1xuICAgICAgdGhpcy5zZWVkID0gKDIxNDAxMyAqIHRoaXMuc2VlZCArIDI1MzEwMTEpICUgKDEgPDwgMzEpO1xuICAgICAgbGV0IGsgPSAodGhpcy5zZWVkID4+IDE2KSAmIDB4N2ZmZjtcbiAgICAgIGsgPSBrICUgbWF4VmFsdWU7XG4gICAgICByZXR1cm4gaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhbmRvbWl6ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVSYW5kb21pemVyXG59XG4iXSwic291cmNlUm9vdCI6IiJ9