/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color1: rgb(150, 192, 139);\n  --color2: rgba(70, 29, 66, 0.85);\n  --color3: rgb(228, 209, 228);\n}\n\n#main-container {\n  color: var(--color2);\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  border: none;\n}\n\n#nav {\n  border-bottom: 0;\n  width: 80vw;\n}\n\n#title-bar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-radius: 15px 50px 0px 0px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 0px;\n  height: 40px;\n  background-color: var(--color3);\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.title-item {\n  background-color: var(--color3);\n  color: var(--color2);\n  border: none;\n  border-radius: 10px;\n}\n\n#tab-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#new-tab-button {\n  border-radius: 1vw;\n  border: 0;\n  color: var(--color2);\n  height: 3vw;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 5px;\n}\n\n.tab {\n  border: solid var(--color2) 2px;\n  border-radius: 30px 30px 5px 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n  height: 25px;\n  line-height: 30px;\n  width: 50px;\n  margin: 0;\n  margin-right: 5px;\n  text-align: center;\n}\n\n.task {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color: var(--color3);\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.task-item {\n  border-radius: 5px;\n  padding: 5px;\n  color: var(--color2);\n  background-color: var(--color3);\n  margin: 1px;\n  border: solid var(--color3) 1px;\n}\n\n.inTab {\n  display: none;\n}\n\n.strike {\n  display: none;\n}\n\n.name {\n  text-align: center;\n}\n\n.desc {\n  display: none;\n  text-align: center;\n  width: 1fr;\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2/4;\n  word-wrap: break-word;\n  background-color: var(--color3);\n}\n\n.show-desc {\n  display: inline;\n}\n\n.editing {\n  border: solid var(--color2) 1px;\n}\n\n.due {\n  text-align: center;\n}\n\n.priority {\n  display: none;\n  text-align: center;\n}\n\n.task-menu-button {\n  border: none;\n  border-radius: 1vw;\n  background-color: var(--color3);\n  color: var(--color2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.task-menu-button img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#new-task-btn {\n  height: 30px;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  border-radius: 0px 0px 15px 50px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 40px;\n}\n\n.task-menu-popup {\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n  background-color: var(--color3);\n  position: absolute;\n  display: none;\n}\n\n.task-menu-popup-btn {\n  background-color: var(--color3);\n  color: var(--color2);\n  border: none;\n  border-radius: 10px;\n}\n\n#label-dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n}\n\n.calendar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  width: 30vw;\n}\n\n.calendar select {\n  width: 100%;\n}\n\n.calendar #selectDay {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-column: 1/3;\n  -ms-grid-columns: (1fr)[7];\n      grid-template-columns: repeat(7, 1fr);\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDaysInMonth/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/getDaysInMonth/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDaysInMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/getMonth/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getYear/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getYear/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfMonth/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCalendar": () => (/* binding */ createCalendar)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getYear/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDaysInMonth/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getMonth/index.js");


function createCalendar(){
    const calendar = document.createElement('div');
    calendar.classList.add('calendar');

    var today = new Date(); 

    //YEAR
    const selectYear = document.createElement('select');
    selectYear.classList.add('calendar');

    for (let index = 0; index < 10; index++) {
        let option = document.createElement("option");
        option.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(today)+index;
        option.text = option.value;
        selectYear.add(option, null);
    }

    //MONTH
    const selectMonth = document.createElement('select');

    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    for (let index = 0; index < months.length; index++) {
        let option = document.createElement("option");
        option.value = index;
        option.text = months[index];
        selectMonth.add(option, null);
    }

    //DAY
    const selectDay = document.createElement('div');
    selectDay.id = "selectDay";

    const days =["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    let startDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(today);
    let startDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(startDate);
    let daysInMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(today);
    let daysInLastMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(today)-1);
    let daysColumns = Math.ceil((daysInMonth+startDay)/7);
    
    console.log(daysInLastMonth);
    
    for (let index = 0; index < days.length; index++) {
        let day = document.createElement('div');
        day.textContent = days[index];
        day.classList.add('day');
        selectDay.append(day);
        
    }

    for (let index = 7; index < 7*(daysColumns+1); index++) {
        let day = document.createElement('div');
        day.textContent = index-7-startDay;
        day.classList.add('day');
        selectDay.append(day);       
    }

    calendar.append(selectMonth);
    calendar.append(selectYear);
    calendar.append(selectDay);

    

    let mm = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(today);
    //console.log(getYear(today));


    return calendar;
}

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskMenuBtn": () => (/* binding */ taskMenuBtn),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "colorPriority": () => (/* binding */ colorPriority),
/* harmony export */   "labelDropdown": () => (/* binding */ labelDropdown),
/* harmony export */   "expandBtn": () => (/* binding */ expandBtn)
/* harmony export */ });
/* harmony import */ var _noun_three_dot_4287657_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noun-three-dot-4287657.svg */ "./src/noun-three-dot-4287657.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



//create and return the edit task button

function taskMenuBtn(taskId){
    const taskMenuDiv = document.createElement('div');
    taskMenuDiv.classList.add('task-menu-button');
    const taskMenuBtn = document.createElement('button');
    taskMenuBtn.classList.add('task-menu-button');
    const menuIcon = document.createElement('i');
    menuIcon.classList.add('material-icons');
    menuIcon.textContent  = 'menu';
    taskMenuBtn.append(menuIcon);

    //create task popup
    let editTaskPopup = document.createElement('div');
    editTaskPopup.classList.add('task-menu-popup')

    //add menu buttons to the popup

    //EDIT
    let taskEditBtn = document.createElement('button');
    taskEditBtn.addEventListener('click', () =>{editTask(taskId);});
    taskEditBtn.classList.add('task-menu-popup-btn');
    let taskEditIcon = document.createElement('i');
    taskEditIcon.textContent = "edit";
    taskEditIcon.className = 'material-icons';
    taskEditBtn.append(taskEditIcon);
    editTaskPopup.append(taskEditBtn)

    //STEIKETHROUGH
    let taskCrossBtn = document.createElement('button');
    taskCrossBtn.addEventListener('click', () => {crossoutTask(taskId);});
    taskCrossBtn.classList.add('task-menu-popup-btn');
    let taskCrossIcon =  document.createElement('i');
    taskCrossIcon.className = 'material-icons';
    taskCrossIcon.textContent = 'strikethrough_s';
    taskCrossBtn.append(taskCrossIcon);
    editTaskPopup.append(taskCrossBtn)

    //REMOVE
    let taskRemoveBtn = document.createElement('button');
    taskRemoveBtn.addEventListener('click', () => {removeTask(taskId);});
    taskRemoveBtn.classList.add('task-menu-popup-btn');
    let taskRemoveIcon =  document.createElement('i');
    taskRemoveIcon.className = 'material-icons';
    taskRemoveIcon.textContent = 'delete';
    taskRemoveBtn.append(taskRemoveIcon);
    editTaskPopup.append(taskRemoveBtn)

    //append the popup to the menu div
    taskMenuDiv.append(editTaskPopup);

    //add even listener to button to show popup
    taskMenuBtn.addEventListener('click', function(){
        editTaskPopup.style.display = "grid";
    });

    //add event listener to hide popup on mouseleave
    editTaskPopup.addEventListener('mouseleave', function(){
        editTaskPopup.style.display = "none";
    });
    //append the button to the div
    taskMenuDiv.append(taskMenuBtn);
    return taskMenuDiv;
    };



//function to hide all (task menu) popups
function hidePopups(){
    //console.log("hide popups");

    document.querySelectorAll('.task-menu-popup').forEach(element => {
        //console.log(element);
        element.style.display = "none";
    });
}

//function to edit a task

function editTask(taskId){
    console.log(taskId);
    let thisTask = document.getElementById(taskId);
    // //function to reset page if user clicks outside of box
    ////// interferes with label dropdown

    // document.addEventListener("click", function(event) {
    //     // If user clicks inside the element, do nothing
    //     if (event.target.closest(`#${taskId}`)) return
    //     // If user clicks outside the element, hide it!
    //     showTasks();
    //   })

    let index = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.findTask)(taskId)

    //get task data from tasklist
    let task = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.getTask)(index);
    console.log(thisTask);

    //replace divs with input fields where appropriate

    //name
    let nameInput = document.createElement('input');
    nameInput.value = task.name;
    nameInput.placeholder = "Task";
    nameInput.classList.add('task-item', 'name');
    thisTask.querySelector('.name').replaceWith(nameInput);
    //due
    let dueInput = document.createElement('input');
    dueInput.value = task.due;
    dueInput.placeholder = "Due Date";
    dueInput.classList.add('task-item', 'due');
    thisTask.querySelector('.due').replaceWith(dueInput);
    //description
    let descInput = document.createElement('input');
    descInput.value = task.desc;
    descInput.placeholder = "Description";
    descInput.classList.add('task-item','desc');
    thisTask.querySelector('.desc').replaceWith(descInput);

    //show description
    let thisDesc = thisTask.querySelector('.desc');
    thisDesc.classList.add('show-desc');

    //hide the menu button and expand button
    let menuBtn = thisTask.querySelector('.task-menu-button');
    let expBtn = thisTask.querySelector('.expand-button');
    menuBtn.style.display = "none";
    //expBtn.style.color = "var(--color3)";

    //make label interactive
    let thisLabel = thisTask.querySelector('.label');
    let thisLabelDiv = thisTask.querySelector('.label-div');
    thisLabel.addEventListener('click', function(event){
        event.preventDefault();
        thisLabelDiv.append(labelDropdown());
    })

    //save changes button

    //add "OK" button
    let okBtn = document.createElement('i');
    okBtn.textContent = "done";
    okBtn.id = 'task-edit-ok-btn';
    okBtn.classList.add('material-icons');
    thisTask.append(okBtn);

    //add function to ok button to do stuff
    okBtn.addEventListener('click', function(){

        //save the edited data to the tasklist

        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'name',nameInput.value);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'desc',descInput.value);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'due',dueInput.value);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'priority',thisTask.querySelector('.priority').textContent);

        //remove show-desc class 
        thisDesc.classList.remove('show-desc');

        //remove the ok button
        document.getElementById('task-edit-ok-btn').remove();
        //show menu and expand button again
        menuBtn.style.display = "block";
        //expBtn.style.color = "var(--color2)";

        //save task list to local storage
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.saveTaskList)();
        
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.showTasks)();

    });


}

//function to strikeout a task
function crossoutTask(id){

    let index = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.findTask)(id);
    let task = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.getTask)(index);

    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'strike',task.strike ? false : true);

    hidePopups();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.saveTaskList)();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.showTasks)();

}

//function to remove a task
function removeTask(id){
    hidePopups();
    /// should turn all text red, 
    //create a new red delete button where the desc dropdown is
    //change the menu button to a cancel button
    
    //if you click on red delete;
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.deleteTask)((0,_tasks__WEBPACK_IMPORTED_MODULE_1__.findTask)(id));
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.saveTaskList)();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.showTasks)();
    //if you click on cancel;
    //        showTasks();

}

//function to return a color based on priority
function colorPriority(num){
    let colors = [
        'red',      //0
        'orange',   //1
        'yellow',   //2
        'green',    //3
        'blue',     //4
        'white'     //5
    ];
    return colors[num];

}

function labelDropdown(){
    

    let dropDown = document.createElement('div')
    dropDown.id = "label-dropdown";

    for (let index = 0; index < 6; index++) {
        let label = document.createElement('i')
        label.classList.add('material-icons')
        label.textContent = 'label';
        label.style.color = colorPriority(index);
        label.id = `label-${index}`

        label.addEventListener('click',function (event){
            event.preventDefault();
            let thisTask = this.parentElement.parentElement.parentElement;
            let newLabel = this.id.slice(6)
            //change label to new label number
            thisTask.querySelector('.priority').textContent = newLabel;
            //change label color for style points  
            thisTask.querySelector('.label').style.color = colorPriority(newLabel);
            // remove the dropdown
            document.getElementById('label-dropdown').remove();
        })

        console.log("appended");
        dropDown.append(label);
    }

    return dropDown;

}

function expandBtn(){
    let expandButton = document.createElement('i');
    expandButton.classList.add('material-icons', 'expand-button');
    expandButton.textContent = 'expand_more';
    expandButton.addEventListener('click', function(){
        let thisTask = this.parentNode;
        //toggle "show description"
        thisTask.querySelector('.desc').classList.toggle('show-desc')
        //toggle icon
        this.textContent == 'expand_more' ? this.textContent = 'expand_less' : this.textContent = 'expand_more'; 
    })
    return expandButton;
}


/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTab": () => (/* binding */ getTab),
/* harmony export */   "addNav": () => (/* binding */ addNav)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


//Get main container from page
let mainContainer = document.getElementById('main-container');

// NAV BAR

//Create navigation bar
let navBar = document.createElement("nav");
navBar.id = "nav"
navBar.style.display = "grid";
navBar.textContent = "NAV BAR";

// TAB BAR

//ceate tab bar
let tabBar = document.createElement("div");
tabBar.id = "tab-bar";
//tabBar.textContent = "TAB BAR";
    //create new tab button
    let newTabBtn = document.createElement('i');
    newTabBtn.id = "new-tab-button";
    newTabBtn.classList.add('material-icons');
    newTabBtn.textContent = 'add_circle_outline';
    tabBar.append(newTabBtn);
    //give new tab busson functionalty
    newTabBtn.addEventListener('click',newTabPrompt);
    function newTabPrompt(){
        let newTab = prompt("New tab name:");
        addTab(newTab);
    }

addTab("main");
addTab("second");
addTab("third");
navBar.append(tabBar);

//function to add tab to Navbar

function addTab(name){
    let newTab = document.createElement("div");
    newTab.className = "tab";
    newTab.textContent = name;
    newTab.style.order = "-1";
    newTab.addEventListener('click',tabClick);
    tabBar.append(newTab);
};

//add functionality to tab bar
let currentTab = "main";

function tabClick(){

    currentTab = this.textContent;

    document.querySelectorAll(".tab").forEach(element => {
        element.style.color = "purple";
    });
    this.style.color = "red";
    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.showTasks)();
    

};

function getTab(){
    return currentTab;
}

// TITLE BAR ///

//create title bar
let titleBar = document.createElement('div')
titleBar.id = 'title-bar';
let titles = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)('Task', 'Description', 'Due date', 'Priority','none');
delete titles.desc;


//title bar tab menu button
let tabMenu = document.createElement('button');
tabMenu.className = "title-item";
let tabMenuIcon = document.createElement('i');
tabMenuIcon.className = 'material-icons';
tabMenuIcon.textContent = 'menu';
tabMenu.append(tabMenuIcon);
titleBar.append(tabMenu);

for (const prop in titles) {
    if (Object.hasOwnProperty.call(titles, prop)) {
        let div = document.createElement('div');
        div.classList.add("title-item", prop)
        div.textContent = titles[prop]
        titleBar.append(div);
    }
}

//change name to icon
let name = titleBar.querySelector('.name');
name.textContent = "";
let title = document.createElement('i');
title.textContent = "title";
title.classList.add('material-icons');
name.append(title);

//change due date icon
let due = titleBar.querySelector('.due');
due.textContent = "";
let event = document.createElement('i');
event.textContent = "event";
event.classList.add('material-icons');
due.append(event);

//add label icon
let label = document.createElement('i');
label.textContent = "label";
label.classList.add('material-icons');
titleBar.append(label);

navBar.append(titleBar);




//Add Nav to top of page
function addNav(){
    mainContainer.append(navBar);
}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTaskList": () => (/* binding */ setTaskList),
/* harmony export */   "changeTask": () => (/* binding */ changeTask),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "saveTaskList": () => (/* binding */ saveTaskList),
/* harmony export */   "showTasks": () => (/* binding */ showTasks),
/* harmony export */   "newTask": () => (/* binding */ newTask),
/* harmony export */   "createNewTaskBtn": () => (/* binding */ createNewTaskBtn),
/* harmony export */   "findTask": () => (/* binding */ findTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "getTask": () => (/* binding */ getTask)
/* harmony export */ });
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");




let mainContainer = document.getElementById('main-container');

//extend functionality of local storage to allow for arrays and objects
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let taskList = [];

//function to overwrite taskList
function setTaskList(newTaskList){
    taskList = newTaskList;
    showTasks();
}

//function to change task

function changeTask(index,prop,value){
    taskList[index][prop] = value;
};

//function to call to make tasks
function createTask(name,desc,due,priority,inTab,strike){
    return{
      name:name,
      desc:desc,
      due:due,
      priority:priority,
      inTab:inTab,
      strike:strike
    }
  }
  
//function to add the task to the list
function addTask (task){

    taskList.push(task);
    saveTaskList();
};

//function to write tasklist to local storage

function saveTaskList(){
    localStorage.setObj('taskList', taskList);
}



//function to show tasklist in DOM

function showTasks(){
clearTasks();
//i to track which index of taskList code is checking
var i=0

//look through every element of the trasklist
taskList.forEach(element => {

    // if the current task's 'intab' is the same as current tab
    if(element.inTab == (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.getTab)()){

        //creates a div for the task
        let task = document.createElement('div')
        task.className = 'task';    

        //append expand button
        task.append((0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.expandBtn)());

        //loops through each element in the object to create an input,
        // assign a classname, value, and append it to the task
        for (const prop in element) {
            if (Object.hasOwnProperty.call(element, prop)) {            
                let div = document.createElement('div');
                div.classList.add('task-item',prop);
                div.textContent = element[prop];
                task.append(div);              
            }
        }

        //adds strikethrough
        let strike = task.querySelector('.strike').textContent;
        if (strike == "true") {
            task.querySelector('.name').style.textDecoration= "line-through"
            task.querySelector('.due').style.textDecoration= "line-through"
        };
        
        //assign each task an id
        task.id = `task-${i}`;

        //add a label


            //color the priority
        let color = (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.colorPriority)(element.priority);
        let label = document.createElement('i');
        label.classList.add('material-icons','label');
        label.textContent = "label";
        label.style.color = color;
        const labelDiv = document.createElement('div')
        labelDiv.classList.add('label-div');
        labelDiv.append(label);
        task.append(labelDiv);

        //add menu button to task
        task.append((0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.taskMenuBtn)(`task-${i}`));

        //adds the task at the bottom of the main container
        mainContainer.append(task);
    }
    
    i++
});

createNewTaskBtn();
mainContainer.append((0,_calendar_js__WEBPACK_IMPORTED_MODULE_2__.createCalendar)());
};

//function to add a new task 

function newTask(){
    //create blank task and then edit it
    let newTask = createTask('','','','',(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.getTab)(),'false');
    addTask(newTask);
    showTasks();
    //find the newest, blank task
    //console.log(taskList.length-1);
    (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.editTask)(`task-${taskList.length-1}`);
}

//function to clear all tasks
function clearTasks(){
    //console.log("clear started");
    const array = document.querySelectorAll('.task');
    array.forEach(element => {        
        element.remove();
    });
    let newTaskBtn = document.getElementById("new-task-btn")
    if (newTaskBtn != null){
    newTaskBtn.remove();
    };
    //console.log("clear finished");
};

//function to create add blank task button
function createNewTaskBtn(){
    let newTaskBtn = document.createElement('button');
    newTaskBtn.textContent = '+';
    newTaskBtn.id = "new-task-btn";
    newTaskBtn.addEventListener('click',newTask); 
    mainContainer.append(newTaskBtn);
}

//function to find a task by its id

function findTask(id){
    let index = id.slice(5);
    return index
}

//function to remove a task

function deleteTask(index) {
    taskList.splice(index, 1);
}

function getTask(index) {
    return taskList[index];
}


/***/ }),

/***/ "./src/noun-three-dot-4287657.svg":
/*!****************************************!*\
  !*** ./src/noun-three-dot-4287657.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36ffbda09c03aa2f4a83.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





//let mainContainer = document.getElementById('main-container');

(0,_nav_js__WEBPACK_IMPORTED_MODULE_1__.addNav)();
//localStorage.clear()
//addTask(createTask("example1","description1","1/1/2021","1","main"));
//addTask(createTask("example2","description2","1/2/2021","2","main"));
//console.log("main");
//showTasks();


//function to read local storage, 
//set empty array if empty... set stored tasklist otherwise

if(!localStorage.getItem('taskList')) {
  console.log("local storage is empty");
  (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.newTask)();

} else {
  //console.log("local storage not empty");
  (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.setTaskList)(localStorage.getObj('taskList'));
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU07O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUWdEOztBQUVoRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLGlEQUFTO0FBQ2I7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0RBQVU7QUFDdkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdIa0M7QUFDNkM7QUFDakM7O0FBRTlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTs7OztBQUlBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsK0NBQU07O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix1REFBUzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixFQUFFOztBQUU1Qjs7O0FBR0E7QUFDQSxvQkFBb0IsMkRBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5REFBVyxTQUFTLEVBQUU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUJBQXFCLDREQUFjO0FBQ25DOztBQUVBOztBQUVPO0FBQ1A7QUFDQSx5Q0FBeUMsK0NBQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRLFNBQVMsa0JBQWtCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDeUI7QUFDWjtBQUM2Qzs7QUFFL0U7O0FBRUEsK0NBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLCtDQUFPOztBQUVULEVBQUU7QUFDRjtBQUNBLEVBQUUsbURBQVc7QUFDYiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0RGF5c0luTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldE1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXRZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NhbGVuZGFyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yMTogcmdiKDE1MCwgMTkyLCAxMzkpO1xcbiAgLS1jb2xvcjI6IHJnYmEoNzAsIDI5LCA2NiwgMC44NSk7XFxuICAtLWNvbG9yMzogcmdiKDIyOCwgMjA5LCAyMjgpO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuI3RpdGxlLWJhciB7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAzdncgMWZyIC41ZnIgNXZ3IDV2dztcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDN2dyAxZnIgLjVmciA1dncgNXZ3O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0YWItYmFyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmV3LXRhYi1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBoZWlnaHQ6IDN2dztcXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhYiB7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDVweCA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDN2dyAxZnIgLjVmciA1dncgNXZ3O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3Z3IDFmciAuNWZyIDV2dyA1dnc7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBtYXJnaW46IDFweDtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IzKSAxcHg7XFxufVxcblxcbi5pblRhYiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxZnI7XFxuICAtbXMtZ3JpZC1yb3c6IDI7XFxuICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDI7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbn1cXG5cXG4uc2hvdy1kZXNjIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXRpbmcge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDFweDtcXG59XFxuXFxuLmR1ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbWVudS1idXR0b24gaW1nIHtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCA1MHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi50YXNrLW1lbnUtcG9wdXAge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stbWVudS1wb3B1cC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2xhYmVsLWRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY2FsZW5kYXIge1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICB3aWR0aDogMzB2dztcXG59XFxuXFxuLmNhbGVuZGFyIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhbGVuZGFyICNzZWxlY3REYXkge1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDI7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgLW1zLWdyaWQtY29sdW1uczogKDFmcilbN107XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG59XFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQVM7RUFDVCxnQ0FBUztFQUNULDRCQUFTO0FDQ1g7O0FER0E7RUFFRSxvQkFBb0I7RUFDcEIsaUJBQVk7RUFFWixhQUFBO0VBQ0Esd0JBQWM7TUFDZCxxQkFBWTtVQUNiLHVCQUFBO0VDRkMsY0FBYztFREloQixZQUFJO0FDRko7O0FBRUE7RUFDRSxnQkFBZ0I7RURPbEIsV0FBVTtBQ0xWOztBQUVBO0VEUUUsaUJBQWU7RUFDZixhQUFZO0VBQ1osc0NBQWlCO01BQ2pCLDJDQUFrQjtFQUNsQiwrQkFBZ0I7RUFDaEIsZ0NBQVk7RUFDWixZQUFBO0VBQ0EsaUJBQVk7RUFDWixrQkFBZTtFQUdoQixnQkFBQTtFQ1JDLFlBQVk7RURVZCwrQkFBVztFQUNULGFBQUE7RUFDQSwwQkFBb0I7TUFDcEIscUJBQVk7QUNSZDs7QUFFQTtFRFlBLCtCQUFRO0VBRU4sb0JBQVk7RUFDYixZQUFBO0VDWEMsbUJBQW1CO0FEWXJCOztBQ1RBO0VEYUUsb0JBQW9CO0VBQ3BCLG9CQUFXO0VBRVgsYUFBWTtBQ1pkOztBQUVBO0VEYUEsa0JBQUk7RUFDRixTQUFPO0VBQ1Asb0JBQWU7RUFDZixXQUFBO0VBQ0EsMkJBQWlCO01BQ2pCLDBCQUFZO01BQ1osa0JBQWlCO0VBQ2pCLFdBQVc7QUNYYjs7QUFFQTtFRGFDLCtCQUFBO0VDWEMsZ0NBQWdDO0VEZWxDLG1CQUFLO0VBQ0gsaUJBQVk7RUFDWixZQUFBO0VBQ0EsaUJBQWM7RUFDZCxXQUFVO0VBQ1YsU0FBUztFQUNULGlCQUFpQjtFQUNqQixrQkFBa0I7QUNicEI7O0FBRUE7RUFDRSxpQkFBaUI7RURnQm5CLGFBQVU7RUFFUixzQ0FBa0I7TUFDbEIsMkNBQVk7RUFDWiwrQkFBb0I7RUFDcEIsYUFBQTtFQUNBLFlBQVc7RUFDWCxpQkFBYztFQUVmLGtCQUFBO0VDaEJDLCtCQUErQjtFRGtCakMsMEJBQU07TUFDSixxQkFBWTtBQ2hCZDs7QURtQkE7RUFDRSxrQkFBWTtFQUNiLFlBQUE7RUNoQkMsb0JBQW9CO0VEa0J0QiwrQkFBSztFQUNILFdBQVU7RUFFWCwrQkFBQTtBQ2pCRDs7QUFFQTtFRGtCRSxhQUFZO0FDaEJkOztBQUVBO0VEbUJFLGFBQVc7QUNqQmI7O0FBRUE7RURxQkMsa0JBQVU7QUNuQlg7O0FBRUE7RURxQkMsYUFBUTtFQUVQLGtCQUFjO0VBRWQsVUFBQTtFQ3JCQSxlQUFlO01EdUJiLGlCQUFBO0VBQ0Ysa0JBQWtCO0VBRW5CLHVCQUFBO0VDdEJDLGdCQUFnQjtFRHVCbEIscUJBQVM7RUFDUCwrQkFBWTtBQ3JCZDs7QUFFQTtFRHlCQSxlQUFpQjtBQ3ZCakI7O0FBRUE7RUQyQkUsK0JBQW9CO0FDekJ0Qjs7QUFFQTtFRGlCQSxrQkFTRTtBQ3hCRjs7QUFFQTtFRDZCSSxhQUFBO0VBQ0Esa0JBQWE7QUMzQmpCOztBRCtCQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG9CQUFhO0VBQ2Isb0JBQWU7RUFDZixvQkFBWTtFQUNaLGFBQVk7QUM1QmQ7O0FBRUE7RUFDRSxvQkFBb0I7S0Q4QnRCLGlCQUFnQjtFQUNkLFlBQU87RUFDUCxvQkFBbUI7RUFDbkIsb0JBQWtCO0VBSWxCLGFBQVM7RUFDVCx3QkFBWTtNQUNiLHFCQUFBO1VDL0JTLHVCQUF1QjtFRGlDakMseUJBQW9CO01BQ2xCLHNCQUFrQjtVQUNYLG1CQUFhO0FDL0J0Qjs7QUFFQTtFQUNFLFlBQVk7RURpQ2QsK0JBQWU7RUFDYiwrQkFBYTtFQUNiLGFBQUE7RUFDQSxnQ0FBa0I7RUFDbEIsWUFBQTtFQUNBLGlCQUFhO0VBQ2Isa0JBQWU7RUFDaEIsWUFBQTtBQy9CRDs7QUFFQTtFRGtDRSwrQkFBOEI7RUFDOUIsbUJBQVc7RUFXWiwrQkFBQTtFQzFDQyxrQkFBa0I7RUQyQnBCLGFBTUU7QUMvQkY7O0FBRUE7RUR1QkEsK0JBVVk7RUFDUixvQkFBYTtFQUNiLFlBQVc7RUFDWCxtQkFBQTtBQy9CSjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7TUFDekIsMEJBQTBCO1VBQ3RCLHNCQUFzQjtFQUM5QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlCQUF5QjtNQUNyQiw4QkFBOEI7RUFDbEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiwwQkFBMEI7TUFDdEIscUNBQXFDO0FBQzNDO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHswfDF8MnwzfDR8NXw2fSB0aGUgZGF5IG9mIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIHdlZWsgaXMgMjkgRmVicnVhcnkgMjAxMj9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgcmV0dXJuIGRheTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldERheXNJbk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGRheXMgYXJlIGluIEZlYnJ1YXJ5IDIwMDA/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXlzSW5Nb250aChuZXcgRGF0ZSgyMDAwLCAxKSlcbiAqIC8vPT4gMjlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXlzSW5Nb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhJbmRleCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgdmFyIGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoMCk7XG4gIGxhc3REYXlPZk1vbnRoLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoSW5kZXggKyAxLCAwKTtcbiAgbGFzdERheU9mTW9udGguc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBsYXN0RGF5T2ZNb250aC5nZXREYXRlKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXRNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG1vbnRoIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBtb250aCBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0TW9udGgobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIHJldHVybiBtb250aDtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFllYXJcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0WWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMjAxNFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0RnVsbFllYXIoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXREYXRlKDEpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0TW9udGgsIGdldFllYXIsIHN0YXJ0T2ZNb250aCwgZ2V0RGF5LCBnZXREYXlzSW5Nb250aCwgZWFjaFdlZWtlbmRPZk1vbnRoICB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyKCl7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhcicpO1xuXG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTsgXG5cbiAgICAvL1lFQVJcbiAgICBjb25zdCBzZWxlY3RZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0WWVhci5jbGFzc0xpc3QuYWRkKCdjYWxlbmRhcicpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBnZXRZZWFyKHRvZGF5KStpbmRleDtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBvcHRpb24udmFsdWU7XG4gICAgICAgIHNlbGVjdFllYXIuYWRkKG9wdGlvbiwgbnVsbCk7XG4gICAgfVxuXG4gICAgLy9NT05USFxuICAgIGNvbnN0IHNlbGVjdE1vbnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICBjb25zdCBtb250aHMgPSBbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1vbnRocy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGluZGV4O1xuICAgICAgICBvcHRpb24udGV4dCA9IG1vbnRoc1tpbmRleF07XG4gICAgICAgIHNlbGVjdE1vbnRoLmFkZChvcHRpb24sIG51bGwpO1xuICAgIH1cblxuICAgIC8vREFZXG4gICAgY29uc3Qgc2VsZWN0RGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VsZWN0RGF5LmlkID0gXCJzZWxlY3REYXlcIjtcblxuICAgIGNvbnN0IGRheXMgPVtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXVxuXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IHN0YXJ0T2ZNb250aCh0b2RheSk7XG4gICAgbGV0IHN0YXJ0RGF5ID0gZ2V0RGF5KHN0YXJ0RGF0ZSk7XG4gICAgbGV0IGRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGgodG9kYXkpO1xuICAgIGxldCBkYXlzSW5MYXN0TW9udGggPSBnZXREYXlzSW5Nb250aChnZXRNb250aCh0b2RheSktMSk7XG4gICAgbGV0IGRheXNDb2x1bW5zID0gTWF0aC5jZWlsKChkYXlzSW5Nb250aCtzdGFydERheSkvNyk7XG4gICAgXG4gICAgY29uc29sZS5sb2coZGF5c0luTGFzdE1vbnRoKTtcbiAgICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF5cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXkudGV4dENvbnRlbnQgPSBkYXlzW2luZGV4XTtcbiAgICAgICAgZGF5LmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuICAgICAgICBzZWxlY3REYXkuYXBwZW5kKGRheSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gNzsgaW5kZXggPCA3KihkYXlzQ29sdW1ucysxKTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRheS50ZXh0Q29udGVudCA9IGluZGV4LTctc3RhcnREYXk7XG4gICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdkYXknKTtcbiAgICAgICAgc2VsZWN0RGF5LmFwcGVuZChkYXkpOyAgICAgICBcbiAgICB9XG5cbiAgICBjYWxlbmRhci5hcHBlbmQoc2VsZWN0TW9udGgpO1xuICAgIGNhbGVuZGFyLmFwcGVuZChzZWxlY3RZZWFyKTtcbiAgICBjYWxlbmRhci5hcHBlbmQoc2VsZWN0RGF5KTtcblxuICAgIFxuXG4gICAgbGV0IG1tID0gZ2V0TW9udGgodG9kYXkpO1xuICAgIC8vY29uc29sZS5sb2coZ2V0WWVhcih0b2RheSkpO1xuXG5cbiAgICByZXR1cm4gY2FsZW5kYXI7XG59IiwiaW1wb3J0IHRocmVlRG90cyBmcm9tICcuL25vdW4tdGhyZWUtZG90LTQyODc2NTcuc3ZnJztcbmltcG9ydCB7IGNoYW5nZVRhc2ssIGZpbmRUYXNrLCBkZWxldGVUYXNrLCBzYXZlVGFza0xpc3QsIHNob3dUYXNrcywgZ2V0VGFzayB9IGZyb20gJy4vdGFza3MnO1xuXG4vL2NyZWF0ZSBhbmQgcmV0dXJuIHRoZSBlZGl0IHRhc2sgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrTWVudUJ0bih0YXNrSWQpe1xuICAgIGNvbnN0IHRhc2tNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza01lbnVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LWJ1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tNZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza01lbnVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LWJ1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgbWVudUljb24udGV4dENvbnRlbnQgID0gJ21lbnUnO1xuICAgIHRhc2tNZW51QnRuLmFwcGVuZChtZW51SWNvbik7XG5cbiAgICAvL2NyZWF0ZSB0YXNrIHBvcHVwXG4gICAgbGV0IGVkaXRUYXNrUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0VGFza1BvcHVwLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWVudS1wb3B1cCcpXG5cbiAgICAvL2FkZCBtZW51IGJ1dHRvbnMgdG8gdGhlIHBvcHVwXG5cbiAgICAvL0VESVRcbiAgICBsZXQgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e2VkaXRUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LXBvcHVwLWJ0bicpO1xuICAgIGxldCB0YXNrRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdGFza0VkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgdGFza0VkaXRJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgdGFza0VkaXRCdG4uYXBwZW5kKHRhc2tFZGl0SWNvbik7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza0VkaXRCdG4pXG5cbiAgICAvL1NURUlLRVRIUk9VR0hcbiAgICBsZXQgdGFza0Nyb3NzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0Nyb3NzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2Nyb3Nzb3V0VGFzayh0YXNrSWQpO30pO1xuICAgIHRhc2tDcm9zc0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAtYnRuJyk7XG4gICAgbGV0IHRhc2tDcm9zc0ljb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRhc2tDcm9zc0ljb24uY2xhc3NOYW1lID0gJ21hdGVyaWFsLWljb25zJztcbiAgICB0YXNrQ3Jvc3NJY29uLnRleHRDb250ZW50ID0gJ3N0cmlrZXRocm91Z2hfcyc7XG4gICAgdGFza0Nyb3NzQnRuLmFwcGVuZCh0YXNrQ3Jvc3NJY29uKTtcbiAgICBlZGl0VGFza1BvcHVwLmFwcGVuZCh0YXNrQ3Jvc3NCdG4pXG5cbiAgICAvL1JFTU9WRVxuICAgIGxldCB0YXNrUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza1JlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW1vdmVUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAtYnRuJyk7XG4gICAgbGV0IHRhc2tSZW1vdmVJY29uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0YXNrUmVtb3ZlSWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICAgIHRhc2tSZW1vdmVJY29uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgdGFza1JlbW92ZUJ0bi5hcHBlbmQodGFza1JlbW92ZUljb24pO1xuICAgIGVkaXRUYXNrUG9wdXAuYXBwZW5kKHRhc2tSZW1vdmVCdG4pXG5cbiAgICAvL2FwcGVuZCB0aGUgcG9wdXAgdG8gdGhlIG1lbnUgZGl2XG4gICAgdGFza01lbnVEaXYuYXBwZW5kKGVkaXRUYXNrUG9wdXApO1xuXG4gICAgLy9hZGQgZXZlbiBsaXN0ZW5lciB0byBidXR0b24gdG8gc2hvdyBwb3B1cFxuICAgIHRhc2tNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZWRpdFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfSk7XG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBoaWRlIHBvcHVwIG9uIG1vdXNlbGVhdmVcbiAgICBlZGl0VGFza1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xuICAgICAgICBlZGl0VGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICAvL2FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBkaXZcbiAgICB0YXNrTWVudURpdi5hcHBlbmQodGFza01lbnVCdG4pO1xuICAgIHJldHVybiB0YXNrTWVudURpdjtcbiAgICB9O1xuXG5cblxuLy9mdW5jdGlvbiB0byBoaWRlIGFsbCAodGFzayBtZW51KSBwb3B1cHNcbmZ1bmN0aW9uIGhpZGVQb3B1cHMoKXtcbiAgICAvL2NvbnNvbGUubG9nKFwiaGlkZSBwb3B1cHNcIik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1tZW51LXBvcHVwJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG59XG5cbi8vZnVuY3Rpb24gdG8gZWRpdCBhIHRhc2tcblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2tJZCl7XG4gICAgY29uc29sZS5sb2codGFza0lkKTtcbiAgICBsZXQgdGhpc1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpO1xuICAgIC8vIC8vZnVuY3Rpb24gdG8gcmVzZXQgcGFnZSBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGJveFxuICAgIC8vLy8vLyBpbnRlcmZlcmVzIHdpdGggbGFiZWwgZHJvcGRvd25cblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgIC8vICAgICAvLyBJZiB1c2VyIGNsaWNrcyBpbnNpZGUgdGhlIGVsZW1lbnQsIGRvIG5vdGhpbmdcbiAgICAvLyAgICAgaWYgKGV2ZW50LnRhcmdldC5jbG9zZXN0KGAjJHt0YXNrSWR9YCkpIHJldHVyblxuICAgIC8vICAgICAvLyBJZiB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBlbGVtZW50LCBoaWRlIGl0IVxuICAgIC8vICAgICBzaG93VGFza3MoKTtcbiAgICAvLyAgIH0pXG5cbiAgICBsZXQgaW5kZXggPSBmaW5kVGFzayh0YXNrSWQpXG5cbiAgICAvL2dldCB0YXNrIGRhdGEgZnJvbSB0YXNrbGlzdFxuICAgIGxldCB0YXNrID0gZ2V0VGFzayhpbmRleCk7XG4gICAgY29uc29sZS5sb2codGhpc1Rhc2spO1xuXG4gICAgLy9yZXBsYWNlIGRpdnMgd2l0aCBpbnB1dCBmaWVsZHMgd2hlcmUgYXBwcm9wcmlhdGVcblxuICAgIC8vbmFtZVxuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC52YWx1ZSA9IHRhc2submFtZTtcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlRhc2tcIjtcbiAgICBuYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJywgJ25hbWUnKTtcbiAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnJlcGxhY2VXaXRoKG5hbWVJbnB1dCk7XG4gICAgLy9kdWVcbiAgICBsZXQgZHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZUlucHV0LnZhbHVlID0gdGFzay5kdWU7XG4gICAgZHVlSW5wdXQucGxhY2Vob2xkZXIgPSBcIkR1ZSBEYXRlXCI7XG4gICAgZHVlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJywgJ2R1ZScpO1xuICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kdWUnKS5yZXBsYWNlV2l0aChkdWVJbnB1dCk7XG4gICAgLy9kZXNjcmlwdGlvblxuICAgIGxldCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NJbnB1dC52YWx1ZSA9IHRhc2suZGVzYztcbiAgICBkZXNjSW5wdXQucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScsJ2Rlc2MnKTtcbiAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzYycpLnJlcGxhY2VXaXRoKGRlc2NJbnB1dCk7XG5cbiAgICAvL3Nob3cgZGVzY3JpcHRpb25cbiAgICBsZXQgdGhpc0Rlc2MgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuICAgIHRoaXNEZXNjLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZGVzYycpO1xuXG4gICAgLy9oaWRlIHRoZSBtZW51IGJ1dHRvbiBhbmQgZXhwYW5kIGJ1dHRvblxuICAgIGxldCBtZW51QnRuID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLnRhc2stbWVudS1idXR0b24nKTtcbiAgICBsZXQgZXhwQnRuID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmV4cGFuZC1idXR0b24nKTtcbiAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvL2V4cEJ0bi5zdHlsZS5jb2xvciA9IFwidmFyKC0tY29sb3IzKVwiO1xuXG4gICAgLy9tYWtlIGxhYmVsIGludGVyYWN0aXZlXG4gICAgbGV0IHRoaXNMYWJlbCA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpO1xuICAgIGxldCB0aGlzTGFiZWxEaXYgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcubGFiZWwtZGl2Jyk7XG4gICAgdGhpc0xhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzTGFiZWxEaXYuYXBwZW5kKGxhYmVsRHJvcGRvd24oKSk7XG4gICAgfSlcblxuICAgIC8vc2F2ZSBjaGFuZ2VzIGJ1dHRvblxuXG4gICAgLy9hZGQgXCJPS1wiIGJ1dHRvblxuICAgIGxldCBva0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBva0J0bi50ZXh0Q29udGVudCA9IFwiZG9uZVwiO1xuICAgIG9rQnRuLmlkID0gJ3Rhc2stZWRpdC1vay1idG4nO1xuICAgIG9rQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgdGhpc1Rhc2suYXBwZW5kKG9rQnRuKTtcblxuICAgIC8vYWRkIGZ1bmN0aW9uIHRvIG9rIGJ1dHRvbiB0byBkbyBzdHVmZlxuICAgIG9rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAvL3NhdmUgdGhlIGVkaXRlZCBkYXRhIHRvIHRoZSB0YXNrbGlzdFxuXG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ25hbWUnLG5hbWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ2Rlc2MnLGRlc2NJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ2R1ZScsZHVlSW5wdXQudmFsdWUpO1xuICAgICAgICBjaGFuZ2VUYXNrKGluZGV4LCdwcmlvcml0eScsdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudGV4dENvbnRlbnQpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHNob3ctZGVzYyBjbGFzcyBcbiAgICAgICAgdGhpc0Rlc2MuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1kZXNjJyk7XG5cbiAgICAgICAgLy9yZW1vdmUgdGhlIG9rIGJ1dHRvblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1lZGl0LW9rLWJ0bicpLnJlbW92ZSgpO1xuICAgICAgICAvL3Nob3cgbWVudSBhbmQgZXhwYW5kIGJ1dHRvbiBhZ2FpblxuICAgICAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIC8vZXhwQnRuLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1jb2xvcjIpXCI7XG5cbiAgICAgICAgLy9zYXZlIHRhc2sgbGlzdCB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIHNhdmVUYXNrTGlzdCgpO1xuICAgICAgICBcbiAgICAgICAgc2hvd1Rhc2tzKCk7XG5cbiAgICB9KTtcblxuXG59XG5cbi8vZnVuY3Rpb24gdG8gc3RyaWtlb3V0IGEgdGFza1xuZnVuY3Rpb24gY3Jvc3NvdXRUYXNrKGlkKXtcblxuICAgIGxldCBpbmRleCA9IGZpbmRUYXNrKGlkKTtcbiAgICBsZXQgdGFzayA9IGdldFRhc2soaW5kZXgpO1xuXG4gICAgY2hhbmdlVGFzayhpbmRleCwnc3RyaWtlJyx0YXNrLnN0cmlrZSA/IGZhbHNlIDogdHJ1ZSk7XG5cbiAgICBoaWRlUG9wdXBzKCk7XG4gICAgc2F2ZVRhc2tMaXN0KCk7XG4gICAgc2hvd1Rhc2tzKCk7XG5cbn1cblxuLy9mdW5jdGlvbiB0byByZW1vdmUgYSB0YXNrXG5mdW5jdGlvbiByZW1vdmVUYXNrKGlkKXtcbiAgICBoaWRlUG9wdXBzKCk7XG4gICAgLy8vIHNob3VsZCB0dXJuIGFsbCB0ZXh0IHJlZCwgXG4gICAgLy9jcmVhdGUgYSBuZXcgcmVkIGRlbGV0ZSBidXR0b24gd2hlcmUgdGhlIGRlc2MgZHJvcGRvd24gaXNcbiAgICAvL2NoYW5nZSB0aGUgbWVudSBidXR0b24gdG8gYSBjYW5jZWwgYnV0dG9uXG4gICAgXG4gICAgLy9pZiB5b3UgY2xpY2sgb24gcmVkIGRlbGV0ZTtcbiAgICBkZWxldGVUYXNrKGZpbmRUYXNrKGlkKSk7XG4gICAgc2F2ZVRhc2tMaXN0KCk7XG4gICAgc2hvd1Rhc2tzKCk7XG4gICAgLy9pZiB5b3UgY2xpY2sgb24gY2FuY2VsO1xuICAgIC8vICAgICAgICBzaG93VGFza3MoKTtcblxufVxuXG4vL2Z1bmN0aW9uIHRvIHJldHVybiBhIGNvbG9yIGJhc2VkIG9uIHByaW9yaXR5XG5leHBvcnQgZnVuY3Rpb24gY29sb3JQcmlvcml0eShudW0pe1xuICAgIGxldCBjb2xvcnMgPSBbXG4gICAgICAgICdyZWQnLCAgICAgIC8vMFxuICAgICAgICAnb3JhbmdlJywgICAvLzFcbiAgICAgICAgJ3llbGxvdycsICAgLy8yXG4gICAgICAgICdncmVlbicsICAgIC8vM1xuICAgICAgICAnYmx1ZScsICAgICAvLzRcbiAgICAgICAgJ3doaXRlJyAgICAgLy81XG4gICAgXTtcbiAgICByZXR1cm4gY29sb3JzW251bV07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRHJvcGRvd24oKXtcbiAgICBcblxuICAgIGxldCBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZHJvcERvd24uaWQgPSBcImxhYmVsLWRyb3Bkb3duXCI7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdsYWJlbCc7XG4gICAgICAgIGxhYmVsLnN0eWxlLmNvbG9yID0gY29sb3JQcmlvcml0eShpbmRleCk7XG4gICAgICAgIGxhYmVsLmlkID0gYGxhYmVsLSR7aW5kZXh9YFxuXG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB0aGlzVGFzayA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgbmV3TGFiZWwgPSB0aGlzLmlkLnNsaWNlKDYpXG4gICAgICAgICAgICAvL2NoYW5nZSBsYWJlbCB0byBuZXcgbGFiZWwgbnVtYmVyXG4gICAgICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS50ZXh0Q29udGVudCA9IG5ld0xhYmVsO1xuICAgICAgICAgICAgLy9jaGFuZ2UgbGFiZWwgY29sb3IgZm9yIHN0eWxlIHBvaW50cyAgXG4gICAgICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKS5zdHlsZS5jb2xvciA9IGNvbG9yUHJpb3JpdHkobmV3TGFiZWwpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBkcm9wZG93blxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsLWRyb3Bkb3duJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhcHBlbmRlZFwiKTtcbiAgICAgICAgZHJvcERvd24uYXBwZW5kKGxhYmVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHJvcERvd247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEJ0bigpe1xuICAgIGxldCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ2V4cGFuZC1idXR0b24nKTtcbiAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kX21vcmUnO1xuICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0aGlzVGFzayA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgLy90b2dnbGUgXCJzaG93IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmRlc2MnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWRlc2MnKVxuICAgICAgICAvL3RvZ2dsZSBpY29uXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPT0gJ2V4cGFuZF9tb3JlJyA/IHRoaXMudGV4dENvbnRlbnQgPSAnZXhwYW5kX2xlc3MnIDogdGhpcy50ZXh0Q29udGVudCA9ICdleHBhbmRfbW9yZSc7IFxuICAgIH0pXG4gICAgcmV0dXJuIGV4cGFuZEJ1dHRvbjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVRhc2ssIHNob3dUYXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG4vL0dldCBtYWluIGNvbnRhaW5lciBmcm9tIHBhZ2VcbmxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5cbi8vIE5BViBCQVJcblxuLy9DcmVhdGUgbmF2aWdhdGlvbiBiYXJcbmxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2QmFyLmlkID0gXCJuYXZcIlxubmF2QmFyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbm5hdkJhci50ZXh0Q29udGVudCA9IFwiTkFWIEJBUlwiO1xuXG4vLyBUQUIgQkFSXG5cbi8vY2VhdGUgdGFiIGJhclxubGV0IHRhYkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YWJCYXIuaWQgPSBcInRhYi1iYXJcIjtcbi8vdGFiQmFyLnRleHRDb250ZW50ID0gXCJUQUIgQkFSXCI7XG4gICAgLy9jcmVhdGUgbmV3IHRhYiBidXR0b25cbiAgICBsZXQgbmV3VGFiQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG5ld1RhYkJ0bi5pZCA9IFwibmV3LXRhYi1idXR0b25cIjtcbiAgICBuZXdUYWJCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBuZXdUYWJCdG4udGV4dENvbnRlbnQgPSAnYWRkX2NpcmNsZV9vdXRsaW5lJztcbiAgICB0YWJCYXIuYXBwZW5kKG5ld1RhYkJ0bik7XG4gICAgLy9naXZlIG5ldyB0YWIgYnVzc29uIGZ1bmN0aW9uYWx0eVxuICAgIG5ld1RhYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbmV3VGFiUHJvbXB0KTtcbiAgICBmdW5jdGlvbiBuZXdUYWJQcm9tcHQoKXtcbiAgICAgICAgbGV0IG5ld1RhYiA9IHByb21wdChcIk5ldyB0YWIgbmFtZTpcIik7XG4gICAgICAgIGFkZFRhYihuZXdUYWIpO1xuICAgIH1cblxuYWRkVGFiKFwibWFpblwiKTtcbmFkZFRhYihcInNlY29uZFwiKTtcbmFkZFRhYihcInRoaXJkXCIpO1xubmF2QmFyLmFwcGVuZCh0YWJCYXIpO1xuXG4vL2Z1bmN0aW9uIHRvIGFkZCB0YWIgdG8gTmF2YmFyXG5cbmZ1bmN0aW9uIGFkZFRhYihuYW1lKXtcbiAgICBsZXQgbmV3VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYWIuY2xhc3NOYW1lID0gXCJ0YWJcIjtcbiAgICBuZXdUYWIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5ld1RhYi5zdHlsZS5vcmRlciA9IFwiLTFcIjtcbiAgICBuZXdUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhYkNsaWNrKTtcbiAgICB0YWJCYXIuYXBwZW5kKG5ld1RhYik7XG59O1xuXG4vL2FkZCBmdW5jdGlvbmFsaXR5IHRvIHRhYiBiYXJcbmxldCBjdXJyZW50VGFiID0gXCJtYWluXCI7XG5cbmZ1bmN0aW9uIHRhYkNsaWNrKCl7XG5cbiAgICBjdXJyZW50VGFiID0gdGhpcy50ZXh0Q29udGVudDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcInB1cnBsZVwiO1xuICAgIH0pO1xuICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIHNob3dUYXNrcygpO1xuICAgIFxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFiKCl7XG4gICAgcmV0dXJuIGN1cnJlbnRUYWI7XG59XG5cbi8vIFRJVExFIEJBUiAvLy9cblxuLy9jcmVhdGUgdGl0bGUgYmFyXG5sZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGl0bGVCYXIuaWQgPSAndGl0bGUtYmFyJztcbmxldCB0aXRsZXMgPSBjcmVhdGVUYXNrKCdUYXNrJywgJ0Rlc2NyaXB0aW9uJywgJ0R1ZSBkYXRlJywgJ1ByaW9yaXR5Jywnbm9uZScpO1xuZGVsZXRlIHRpdGxlcy5kZXNjO1xuXG5cbi8vdGl0bGUgYmFyIHRhYiBtZW51IGJ1dHRvblxubGV0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnRhYk1lbnUuY2xhc3NOYW1lID0gXCJ0aXRsZS1pdGVtXCI7XG5sZXQgdGFiTWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG50YWJNZW51SWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xudGFiTWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSc7XG50YWJNZW51LmFwcGVuZCh0YWJNZW51SWNvbik7XG50aXRsZUJhci5hcHBlbmQodGFiTWVudSk7XG5cbmZvciAoY29uc3QgcHJvcCBpbiB0aXRsZXMpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGl0bGVzLCBwcm9wKSkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaXRlbVwiLCBwcm9wKVxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0aXRsZXNbcHJvcF1cbiAgICAgICAgdGl0bGVCYXIuYXBwZW5kKGRpdik7XG4gICAgfVxufVxuXG4vL2NoYW5nZSBuYW1lIHRvIGljb25cbmxldCBuYW1lID0gdGl0bGVCYXIucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbm5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcInRpdGxlXCI7XG50aXRsZS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xubmFtZS5hcHBlbmQodGl0bGUpO1xuXG4vL2NoYW5nZSBkdWUgZGF0ZSBpY29uXG5sZXQgZHVlID0gdGl0bGVCYXIucXVlcnlTZWxlY3RvcignLmR1ZScpO1xuZHVlLnRleHRDb250ZW50ID0gXCJcIjtcbmxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmV2ZW50LnRleHRDb250ZW50ID0gXCJldmVudFwiO1xuZXZlbnQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbmR1ZS5hcHBlbmQoZXZlbnQpO1xuXG4vL2FkZCBsYWJlbCBpY29uXG5sZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5sYWJlbC50ZXh0Q29udGVudCA9IFwibGFiZWxcIjtcbmxhYmVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG50aXRsZUJhci5hcHBlbmQobGFiZWwpO1xuXG5uYXZCYXIuYXBwZW5kKHRpdGxlQmFyKTtcblxuXG5cblxuLy9BZGQgTmF2IHRvIHRvcCBvZiBwYWdlXG5leHBvcnQgZnVuY3Rpb24gYWRkTmF2KCl7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobmF2QmFyKTtcbn1cblxuIiwiaW1wb3J0IHsgZ2V0VGFiIH0gZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IHsgdGFza01lbnVCdG4sIGV4cGFuZEJ0biwgZWRpdFRhc2ssIGNvbG9yUHJpb3JpdHl9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FsZW5kYXJ9IGZyb20gJy4vY2FsZW5kYXIuanMnO1xuXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuXG4vL2V4dGVuZCBmdW5jdGlvbmFsaXR5IG9mIGxvY2FsIHN0b3JhZ2UgdG8gYWxsb3cgZm9yIGFycmF5cyBhbmQgb2JqZWN0c1xuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqID0gZnVuY3Rpb24oa2V5LCBvYmopIHtcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcbn1cblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0SXRlbShrZXkpKVxufVxuXG5sZXQgdGFza0xpc3QgPSBbXTtcblxuLy9mdW5jdGlvbiB0byBvdmVyd3JpdGUgdGFza0xpc3RcbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXNrTGlzdChuZXdUYXNrTGlzdCl7XG4gICAgdGFza0xpc3QgPSBuZXdUYXNrTGlzdDtcbiAgICBzaG93VGFza3MoKTtcbn1cblxuLy9mdW5jdGlvbiB0byBjaGFuZ2UgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFzayhpbmRleCxwcm9wLHZhbHVlKXtcbiAgICB0YXNrTGlzdFtpbmRleF1bcHJvcF0gPSB2YWx1ZTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gY2FsbCB0byBtYWtlIHRhc2tzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLGRlc2MsZHVlLHByaW9yaXR5LGluVGFiLHN0cmlrZSl7XG4gICAgcmV0dXJue1xuICAgICAgbmFtZTpuYW1lLFxuICAgICAgZGVzYzpkZXNjLFxuICAgICAgZHVlOmR1ZSxcbiAgICAgIHByaW9yaXR5OnByaW9yaXR5LFxuICAgICAgaW5UYWI6aW5UYWIsXG4gICAgICBzdHJpa2U6c3RyaWtlXG4gICAgfVxuICB9XG4gIFxuLy9mdW5jdGlvbiB0byBhZGQgdGhlIHRhc2sgdG8gdGhlIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrICh0YXNrKXtcblxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgc2F2ZVRhc2tMaXN0KCk7XG59O1xuXG4vL2Z1bmN0aW9uIHRvIHdyaXRlIHRhc2tsaXN0IHRvIGxvY2FsIHN0b3JhZ2VcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrTGlzdCgpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRPYmooJ3Rhc2tMaXN0JywgdGFza0xpc3QpO1xufVxuXG5cblxuLy9mdW5jdGlvbiB0byBzaG93IHRhc2tsaXN0IGluIERPTVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tzKCl7XG5jbGVhclRhc2tzKCk7XG4vL2kgdG8gdHJhY2sgd2hpY2ggaW5kZXggb2YgdGFza0xpc3QgY29kZSBpcyBjaGVja2luZ1xudmFyIGk9MFxuXG4vL2xvb2sgdGhyb3VnaCBldmVyeSBlbGVtZW50IG9mIHRoZSB0cmFza2xpc3RcbnRhc2tMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAvLyBpZiB0aGUgY3VycmVudCB0YXNrJ3MgJ2ludGFiJyBpcyB0aGUgc2FtZSBhcyBjdXJyZW50IHRhYlxuICAgIGlmKGVsZW1lbnQuaW5UYWIgPT0gZ2V0VGFiKCkpe1xuXG4gICAgICAgIC8vY3JlYXRlcyBhIGRpdiBmb3IgdGhlIHRhc2tcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrLmNsYXNzTmFtZSA9ICd0YXNrJzsgICAgXG5cbiAgICAgICAgLy9hcHBlbmQgZXhwYW5kIGJ1dHRvblxuICAgICAgICB0YXNrLmFwcGVuZChleHBhbmRCdG4oKSk7XG5cbiAgICAgICAgLy9sb29wcyB0aHJvdWdoIGVhY2ggZWxlbWVudCBpbiB0aGUgb2JqZWN0IHRvIGNyZWF0ZSBhbiBpbnB1dCxcbiAgICAgICAgLy8gYXNzaWduIGEgY2xhc3NuYW1lLCB2YWx1ZSwgYW5kIGFwcGVuZCBpdCB0byB0aGUgdGFza1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsZW1lbnQsIHByb3ApKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nLHByb3ApO1xuICAgICAgICAgICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGVsZW1lbnRbcHJvcF07XG4gICAgICAgICAgICAgICAgdGFzay5hcHBlbmQoZGl2KTsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hZGRzIHN0cmlrZXRocm91Z2hcbiAgICAgICAgbGV0IHN0cmlrZSA9IHRhc2sucXVlcnlTZWxlY3RvcignLnN0cmlrZScpLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoc3RyaWtlID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykuc3R5bGUudGV4dERlY29yYXRpb249IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgICAgIHRhc2sucXVlcnlTZWxlY3RvcignLmR1ZScpLnN0eWxlLnRleHREZWNvcmF0aW9uPSBcImxpbmUtdGhyb3VnaFwiXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvL2Fzc2lnbiBlYWNoIHRhc2sgYW4gaWRcbiAgICAgICAgdGFzay5pZCA9IGB0YXNrLSR7aX1gO1xuXG4gICAgICAgIC8vYWRkIGEgbGFiZWxcblxuXG4gICAgICAgICAgICAvL2NvbG9yIHRoZSBwcmlvcml0eVxuICAgICAgICBsZXQgY29sb3IgPSBjb2xvclByaW9yaXR5KGVsZW1lbnQucHJpb3JpdHkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBcImxhYmVsXCI7XG4gICAgICAgIGxhYmVsLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIGNvbnN0IGxhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGFiZWxEaXYuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XG4gICAgICAgIGxhYmVsRGl2LmFwcGVuZChsYWJlbCk7XG4gICAgICAgIHRhc2suYXBwZW5kKGxhYmVsRGl2KTtcblxuICAgICAgICAvL2FkZCBtZW51IGJ1dHRvbiB0byB0YXNrXG4gICAgICAgIHRhc2suYXBwZW5kKHRhc2tNZW51QnRuKGB0YXNrLSR7aX1gKSk7XG5cbiAgICAgICAgLy9hZGRzIHRoZSB0YXNrIGF0IHRoZSBib3R0b20gb2YgdGhlIG1haW4gY29udGFpbmVyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRhc2spO1xuICAgIH1cbiAgICBcbiAgICBpKytcbn0pO1xuXG5jcmVhdGVOZXdUYXNrQnRuKCk7XG5tYWluQ29udGFpbmVyLmFwcGVuZChjcmVhdGVDYWxlbmRhcigpKTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gYWRkIGEgbmV3IHRhc2sgXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrKCl7XG4gICAgLy9jcmVhdGUgYmxhbmsgdGFzayBhbmQgdGhlbiBlZGl0IGl0XG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKCcnLCcnLCcnLCcnLGdldFRhYigpLCdmYWxzZScpO1xuICAgIGFkZFRhc2sobmV3VGFzayk7XG4gICAgc2hvd1Rhc2tzKCk7XG4gICAgLy9maW5kIHRoZSBuZXdlc3QsIGJsYW5rIHRhc2tcbiAgICAvL2NvbnNvbGUubG9nKHRhc2tMaXN0Lmxlbmd0aC0xKTtcbiAgICBlZGl0VGFzayhgdGFzay0ke3Rhc2tMaXN0Lmxlbmd0aC0xfWApO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGNsZWFyIGFsbCB0YXNrc1xuZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xuICAgIC8vY29uc29sZS5sb2coXCJjbGVhciBzdGFydGVkXCIpO1xuICAgIGNvbnN0IGFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4geyAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgbGV0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWJ0blwiKVxuICAgIGlmIChuZXdUYXNrQnRuICE9IG51bGwpe1xuICAgIG5ld1Rhc2tCdG4ucmVtb3ZlKCk7XG4gICAgfTtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2xlYXIgZmluaXNoZWRcIik7XG59O1xuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBhZGQgYmxhbmsgdGFzayBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrQnRuKCl7XG4gICAgbGV0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgIG5ld1Rhc2tCdG4uaWQgPSBcIm5ldy10YXNrLWJ0blwiO1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG5ld1Rhc2spOyBcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChuZXdUYXNrQnRuKTtcbn1cblxuLy9mdW5jdGlvbiB0byBmaW5kIGEgdGFzayBieSBpdHMgaWRcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYXNrKGlkKXtcbiAgICBsZXQgaW5kZXggPSBpZC5zbGljZSg1KTtcbiAgICByZXR1cm4gaW5kZXhcbn1cblxuLy9mdW5jdGlvbiB0byByZW1vdmUgYSB0YXNrXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2soaW5kZXgpIHtcbiAgICByZXR1cm4gdGFza0xpc3RbaW5kZXhdO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGFkZE5hdiB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7IHNldFRhc2tMaXN0LCBjcmVhdGVUYXNrLCBuZXdUYXNrLCBhZGRUYXNrLCBzaG93VGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuLy9sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5hZGROYXYoKTtcbi8vbG9jYWxTdG9yYWdlLmNsZWFyKClcbi8vYWRkVGFzayhjcmVhdGVUYXNrKFwiZXhhbXBsZTFcIixcImRlc2NyaXB0aW9uMVwiLFwiMS8xLzIwMjFcIixcIjFcIixcIm1haW5cIikpO1xuLy9hZGRUYXNrKGNyZWF0ZVRhc2soXCJleGFtcGxlMlwiLFwiZGVzY3JpcHRpb24yXCIsXCIxLzIvMjAyMVwiLFwiMlwiLFwibWFpblwiKSk7XG4vL2NvbnNvbGUubG9nKFwibWFpblwiKTtcbi8vc2hvd1Rhc2tzKCk7XG5cblxuLy9mdW5jdGlvbiB0byByZWFkIGxvY2FsIHN0b3JhZ2UsIFxuLy9zZXQgZW1wdHkgYXJyYXkgaWYgZW1wdHkuLi4gc2V0IHN0b3JlZCB0YXNrbGlzdCBvdGhlcndpc2VcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSB7XG4gIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBpcyBlbXB0eVwiKTtcbiAgbmV3VGFzaygpO1xuXG59IGVsc2Uge1xuICAvL2NvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBub3QgZW1wdHlcIik7XG4gIHNldFRhc2tMaXN0KGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Rhc2tMaXN0JykpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9