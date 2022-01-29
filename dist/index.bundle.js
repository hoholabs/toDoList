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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color1: rgb(188, 139, 192);\n  --color2: rgba(70, 29, 66, 0.85);\n  --color3: rgb(228, 209, 228);\n}\n\n#main-container {\n  color: var(--color2);\n  display: -ms-grid;\n  display: grid;\n  width: 80vw;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  border: none;\n}\n\n#nav {\n  border-bottom: 0;\n}\n\n#title-bar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr .5fr .5fr 5vw;\n      grid-template-columns: 1fr .5fr .5fr 5vw;\n  border: solid var(--color2) 2px;\n  border-radius: 0px 25px 0px 0px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 30px;\n  background-color: var(--color3);\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n#tab-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#new-tab-button {\n  border-radius: 1vw;\n  border: 0;\n  color: var(--color2);\n  height: 3vw;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 5px;\n}\n\n.tab {\n  border: solid var(--color2) 2px;\n  border-radius: 30px 30px 5px 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n  height: 25px;\n  line-height: 30px;\n  width: 50px;\n  margin-right: 5px;\n  text-align: center;\n}\n\n.task {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr .5fr 5vw;\n      grid-template-columns: 3vw 1fr .5fr .5fr 5vw;\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color: var(--color3);\n  -ms-flex-line-pack: center;\n      align-content: center;\n  width: 80vw;\n}\n\n.task-item {\n  border-radius: 5px;\n  padding: 5px;\n  color: var(--color2);\n  background-color: var(--color3);\n  margin: 1px;\n  border: solid var(--color3) 1px;\n}\n\n.inTab {\n  display: none;\n}\n\n.name {\n  text-align: left;\n  width: 20vw;\n}\n\n.desc {\n  display: none;\n  text-align: left;\n  width: 1fr;\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 3;\n  grid-column: 1/4;\n  word-wrap: break-word;\n}\n\n.show-desc {\n  display: inline;\n}\n\n.editing {\n  border: solid var(--color2) 1px;\n}\n\n.due {\n  text-align: center;\n  width: 20vw;\n}\n\n.priority {\n  text-align: center;\n  width: 20vw;\n}\n\n.task-menu-button {\n  width: MIN(30px, 5vw);\n  border: none;\n  border-radius: 1vw;\n  background-color: var(--color3);\n  color: var(--color2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.task-menu-button img {\n  width: MIN(20px, 3vw);\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#new-task-btn {\n  height: 30px;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  border-radius: 0px 0px 20px 50px;\n}\n\n.task-menu-popup {\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n  background-color: var(--color3);\n  width: 100px;\n  height: 100px;\n  right: 50px;\n  position: absolute;\n  display: none;\n}\n\n.task-edit-popup-btn {\n  background-color: var(--color3);\n  border: none;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAAS;EACT,gCAAS;EACT,4BAAS;ACCX;;ADGA;EAEE,oBAAoB;EACpB,iBAAY;EACZ,aAAW;EACX,WAAA;EACA,wBAAc;MACd,qBAAY;UACb,uBAAA;ECDC,cAAc;EDGhB,YAAI;ACDJ;;AAEA;EDQA,gBAAU;ACNV;;AAEA;EDQE,iBAAe;EACf,aAAY;EACZ,mCAAiB;MACjB,wCAAkB;EAClB,+BAAY;EACZ,+BAA+B;EAC/B,YAAQ;EACR,iBAAe;EAGhB,kBAAA;ECRC,YAAY;EDYd,+BAAQ;EAEN,aAAY;EACb,0BAAA;MCXK,qBAAqB;ADY3B;;ACTA;EDaE,oBAAoB;EACpB,oBAAW;EAEX,aAAY;ACZd;;AAEA;EDaA,kBAAI;EACF,SAAO;EACP,oBAAe;EACf,WAAA;EACA,2BAAiB;MACjB,0BAAY;MACZ,kBAAiB;EACjB,WAAW;ACXb;;AAEA;EACE,+BAA+B;EDejC,gCAAK;EACH,mBAAY;EACZ,iBAAA;EACA,YAAQ;EACR,iBAAa;EACb,WAAS;EACT,iBAAiB;EACjB,kBAAkB;ACbpB;;AAEA;EDeC,iBAAA;ECbC,aAAa;EDef,uCAAU;MAER,4CAAkB;EAClB,+BAAY;EACZ,aAAO;EACP,YAAA;EACA,iBAAW;EACX,kBAAc;EAEf,+BAAA;ECfC,0BAA0B;MDiBtB,qBAAA;EACJ,WAAQ;ACfV;;ADkBA;EACE,kBAAgB;EAChB,YAAW;EACZ,oBAAA;ECfC,+BAA+B;EDgBjC,WAAK;EACH,+BAAY;ACdd;;AAEA;EDgBE,aAAa;ACdf;;AAEA;EDkBC,gBAAU;EACT,WAAS;AChBX;;ADmBC;EAEC,aAAa;EAEb,gBAAA;EClBA,UAAU;EDoBZ,eAAI;MACF,iBAAkB;EAClB,kBAAW;EACZ,uBAAA;EClBC,gBAAgB;EDmBlB,qBAAS;ACjBT;;AAEA;EACE,eAAe;ADoBjB;;ACjBA;EDqBE,+BAAkB;ACnBpB;;AAEA;EDgCC,kBAAA;EC9BC,WAAW;ADWb;;ACRA;EDsBI,kBAAW;EACX,WAAS;ACpBb;;AAEA;EACE,qBAAqB;EDuBvB,YAAa;EACX,kBAAY;EACZ,+BAA+B;EAC/B,oBAAc;EACd,oBAAa;EACb,oBAAe;EAChB,aAAA;ACrBD;;AAEA;EDuBE,qBAAmB;EACnB,oBAAkB;KAClB,iBAAW;EACX,YAAO;EACP,oBAAW;EACX,oBAAiB;EACjB,aAAY;EACb,wBAAA;MCrBK,qBAAqB;UDuB3B,uBAAoB;EAClB,yBAAkB;MAClB,sBAAY;UACZ,mBAAmB;ACrBrB;;AAEA;EACE,YAAY;EACZ,+BAA+B;EAC/B,+BAA+B;EAC/B,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;EACZ,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,mBAAmB;AACrB;AACA,oCAAoC","sourceRoot":""}]);
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

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskMenuBtn": () => (/* binding */ taskMenuBtn),
/* harmony export */   "colorPriority": () => (/* binding */ colorPriority),
/* harmony export */   "priorityDropdown": () => (/* binding */ priorityDropdown),
/* harmony export */   "expandBtn": () => (/* binding */ expandBtn)
/* harmony export */ });
/* harmony import */ var _noun_three_dot_4287657_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noun-three-dot-4287657.svg */ "./src/noun-three-dot-4287657.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



//create and return the edit task button

function taskMenuBtn(){
    const taskMenuDiv = document.createElement('div');
    taskMenuDiv.classList.add('task-menu-button');
    const taskMenuBtn = document.createElement('button');
    taskMenuBtn.classList.add('task-menu-button');
    const editIcon = document.createElement('i');
    editIcon.classList.add('material-icons');
    editIcon.textContent  = 'menu';
    // const editIcon = new Image();
    // editIcon.src = threeDots;
    taskMenuBtn.append(editIcon);

    //create task popup
    let editTaskPopup = document.createElement('div');
    editTaskPopup.classList.add('task-menu-popup')

    //add menu buttons to the popup

    let taskEditBtn = document.createElement('button');
    taskEditBtn.textContent = "edit";
    taskEditBtn.addEventListener('click', editTask)
    taskEditBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskEditBtn)

    let taskCrossBtn = document.createElement('button');
    taskCrossBtn.textContent = "cross-out";
    taskCrossBtn.addEventListener('click', crossoutTask);
    taskCrossBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskCrossBtn)

    let taskRemoveBtn = document.createElement('button');
    taskRemoveBtn.textContent = "remove";
    taskRemoveBtn.addEventListener('click', removeTask);
    taskRemoveBtn.classList.add('task-edit-popup-btn');
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
function editTask(){
    hidePopups();

    let thisTask = this.parentNode.parentNode.parentNode;

    //makes all cells editable
    thisTask.childNodes.forEach(element => {
        element.contentEditable = "true";
        element.classList.add('editing'); 
    });

    //shows description
    let thisDesc = thisTask.querySelector('.desc');
    thisDesc.classList.add('show-desc');

    //hide the menu button
    let menuBtn = this.parentNode.parentNode
    //console.log(menuBtn);
    menuBtn.style.display = "none";

    //add "OK" button
    let okBtn = document.createElement('i');
    okBtn.textContent = "done";
    okBtn.id = 'task-edit-ok-btn';
    okBtn.classList.add('material-icons');
    thisTask.append(okBtn);

    //add function to ok button to do stuff
    okBtn.addEventListener('click', function(){
        //make thisTask content not editable
        thisTask.childNodes.forEach(element => {
            element.contentEditable = "false";
            element.classList.remove('editing');    
        });
        //save the edited data to the tasklist

        //brute forced.. ugly.. fix later

        let index = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.findTask)(thisTask.id)
        let name = thisTask.querySelectorAll('.task-item')[0].textContent
        let desc = thisTask.querySelectorAll('.task-item')[1].textContent
        let due = thisTask.querySelectorAll('.task-item')[2].textContent
        let priority = thisTask.querySelectorAll('.task-item')[3].textContent

        ;(0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'name',name);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'desc',desc);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'due',due);
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.changeTask)(index,'priority',priority);

        thisDesc.classList.remove('show-desc');

        //remove the ok button
        document.getElementById('task-edit-ok-btn').remove();
        //show menu button again
        menuBtn.style.display = "block";

        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.saveTaskList)();
        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.showTasks)();

    });


}

//function to strikeout a task
function crossoutTask(){
    hidePopups();
    this.parentNode.parentNode.parentNode.style.textDecoration= "line-through";
}

//function to remove a task
function removeTask(){
    hidePopups();

    let index = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.findTask)(this.parentNode.parentNode.parentNode.id);
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(index);
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.saveTaskList)();

}

function colorPriority(num){
    let colors = ['red','orange','yellow','green','blue','white'];
    return colors[num];

}

function priorityDropdown(){
    let colors = ['red','orange','yellow','green','blue','white'];

    let dropDown = document.createElement('div')

    for (let index = 0; index < colors.length; index++) {
        let button = document.createElement('button')
        button.style.backgroundColor = colors[index];
        dropDown.append(button);
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

// TITLE BAR

//create title bar
let titleBar = document.createElement('div')
titleBar.id = 'title-bar';
let titles = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)('Task', 'Description', 'Due date', 'Priority','none');
delete titles.desc;
//console.log(titles);

for (const prop in titles) {
    if (Object.hasOwnProperty.call(titles, prop)) {
        let div = document.createElement('div');
        div.classList.add("task-item", prop)
        div.textContent = titles[prop]
        titleBar.append(div);
    }
}
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
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");



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
    //sconsole.log(taskList);
    showTasks();
}

//function to change task

function changeTask(index,prop,value){
    taskList[index][prop] = value;
};

//function to call to make tasks
function createTask(name,desc,due,priority,inTab){
    return{
      name:name,
      desc:desc,
      due:due,
      priority:priority,
      inTab:inTab
    }
  }
  
//function to add the task to the list
function addTask (task){
    //console.log(taskList);
    taskList.push(task);
    saveTaskList();
    //console.log(localStorage);
    //console.log(localStorage.getObj('taskList'));

    //console.log(importlist);

};

//function to write tasklist to local storage

function saveTaskList(){
    localStorage.setObj('taskList', taskList);
}



//function to show tasklist in DOM

function showTasks(tab){
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
        //add menu button to task
        task.append((0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.taskMenuBtn)());

        //assign each task an id
        task.id = `task-${i}`;

        //color the priority
        let color = (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__.colorPriority)(element.priority);
        let priority = task.querySelector('.priority');
        priority.style.cssText = `background-color: ${color}; color: ${color}`

        //adds the task at the bottom of the main container
        mainContainer.append(task);
    }
    
    i++
});

createNewTaskBtn();
};

//function to add a new task

function newTask(){
    //remove the new task button
    let newTaskBtn = document.getElementById('new-task-btn');
    newTaskBtn.remove();

    //Create a task line made of inputs
    let newTask = document.createElement('div')
    newTask.className = 'task';    

    let element = createTask('','','','','');

    for (const prop in element) {
        if (Object.hasOwnProperty.call(element, prop)) {
            let input = document.createElement('input');
            input.classList.add('task-item', prop)
            input.id = `new-task-${prop}`;
            input.value = element[prop]
            newTask.append(input);
        }
    }

    //adding the "OK" button
    let okBtn = document.createElement('button');
    okBtn.id = "ok-btn";
    okBtn.textContent = "OK";
    okBtn.addEventListener('click', function() {
        //console.log("ok");
        let newTaskName = document.getElementById('new-task-name').value;
        let newTaskDesc = document.getElementById('new-task-desc').value;
        let newTaskDue = document.getElementById('new-task-due').value;
        let newTaskPriority = document.getElementById('new-task-priority').value;
        let newTaskinTab = (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.getTab)();
        
        let newTask = createTask(newTaskName,newTaskDesc,newTaskDue,newTaskPriority,newTaskinTab);
        addTask(newTask);
        showTasks();
    });
    newTask.append(okBtn);
    


    mainContainer.append(newTask);
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
    showTasks();
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
//addTask(createTask("example1","description1","1/1/2021","1","main"));
//addTask(createTask("example2","description2","1/2/2021","2","main"));
(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.showTasks)();


//function to read local storage, 
//set empty array if empty... set stored tasklist otherwise

if(!localStorage.getItem('taskList')) {
  console.log("local storage is empty");
} else {
  (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.setTaskList)(localStorage.getObj('taskList'));
}

//ATTRIBUTES

// Three Dot by wahyakup from NounProject.com

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN5QjtBQUNaO0FBQ3NEOztBQUV4Rjs7QUFFQSwrQ0FBTTtBQUNOO0FBQ0E7QUFDQSxpREFBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUUsbURBQVc7QUFDYjs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yMTogcmdiKDE4OCwgMTM5LCAxOTIpO1xcbiAgLS1jb2xvcjI6IHJnYmEoNzAsIDI5LCA2NiwgMC44NSk7XFxuICAtLWNvbG9yMzogcmdiKDIyOCwgMjA5LCAyMjgpO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogODB2dztcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNuYXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuI3RpdGxlLWJhciB7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAxZnIgLjVmciAuNWZyIDV2dztcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAuNWZyIC41ZnIgNXZ3O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAyNXB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdGFiLWJhciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI25ldy10YWItYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgaGVpZ2h0OiAzdnc7XFxuICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWdyaWQtcm93LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbi50YWIge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCA1cHggNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAzdncgMWZyIC41ZnIgLjVmciA1dnc7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzdncgMWZyIC41ZnIgLjVmciA1dnc7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHZ3O1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIG1hcmdpbjogMXB4O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjMpIDFweDtcXG59XFxuXFxuLmluVGFiIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuLmRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMWZyO1xcbiAgLW1zLWdyaWQtcm93OiAyO1xcbiAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAxO1xcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDM7XFxuICBncmlkLWNvbHVtbjogMS80O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uc2hvdy1kZXNjIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXRpbmcge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDFweDtcXG59XFxuXFxuLmR1ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjB2dztcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4udGFzay1tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogTUlOKDMwcHgsIDV2dyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbWVudS1idXR0b24gaW1nIHtcXG4gIHdpZHRoOiBNSU4oMjBweCwgM3Z3KTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCA1MHB4O1xcbn1cXG5cXG4udGFzay1tZW51LXBvcHVwIHtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWVkaXQtcG9wdXAtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBUztFQUNULGdDQUFTO0VBQ1QsNEJBQVM7QUNDWDs7QURHQTtFQUVFLG9CQUFvQjtFQUNwQixpQkFBWTtFQUNaLGFBQVc7RUFDWCxXQUFBO0VBQ0Esd0JBQWM7TUFDZCxxQkFBWTtVQUNiLHVCQUFBO0VDREMsY0FBYztFREdoQixZQUFJO0FDREo7O0FBRUE7RURRQSxnQkFBVTtBQ05WOztBQUVBO0VEUUUsaUJBQWU7RUFDZixhQUFZO0VBQ1osbUNBQWlCO01BQ2pCLHdDQUFrQjtFQUNsQiwrQkFBWTtFQUNaLCtCQUErQjtFQUMvQixZQUFRO0VBQ1IsaUJBQWU7RUFHaEIsa0JBQUE7RUNSQyxZQUFZO0VEWWQsK0JBQVE7RUFFTixhQUFZO0VBQ2IsMEJBQUE7TUNYSyxxQkFBcUI7QURZM0I7O0FDVEE7RURhRSxvQkFBb0I7RUFDcEIsb0JBQVc7RUFFWCxhQUFZO0FDWmQ7O0FBRUE7RURhQSxrQkFBSTtFQUNGLFNBQU87RUFDUCxvQkFBZTtFQUNmLFdBQUE7RUFDQSwyQkFBaUI7TUFDakIsMEJBQVk7TUFDWixrQkFBaUI7RUFDakIsV0FBVztBQ1hiOztBQUVBO0VBQ0UsK0JBQStCO0VEZWpDLGdDQUFLO0VBQ0gsbUJBQVk7RUFDWixpQkFBQTtFQUNBLFlBQVE7RUFDUixpQkFBYTtFQUNiLFdBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0FDYnBCOztBQUVBO0VEZUMsaUJBQUE7RUNiQyxhQUFhO0VEZWYsdUNBQVU7TUFFUiw0Q0FBa0I7RUFDbEIsK0JBQVk7RUFDWixhQUFPO0VBQ1AsWUFBQTtFQUNBLGlCQUFXO0VBQ1gsa0JBQWM7RUFFZiwrQkFBQTtFQ2ZDLDBCQUEwQjtNRGlCdEIscUJBQUE7RUFDSixXQUFRO0FDZlY7O0FEa0JBO0VBQ0Usa0JBQWdCO0VBQ2hCLFlBQVc7RUFDWixvQkFBQTtFQ2ZDLCtCQUErQjtFRGdCakMsV0FBSztFQUNILCtCQUFZO0FDZGQ7O0FBRUE7RURnQkUsYUFBYTtBQ2RmOztBQUVBO0VEa0JDLGdCQUFVO0VBQ1QsV0FBUztBQ2hCWDs7QURtQkM7RUFFQyxhQUFhO0VBRWIsZ0JBQUE7RUNsQkEsVUFBVTtFRG9CWixlQUFJO01BQ0YsaUJBQWtCO0VBQ2xCLGtCQUFXO0VBQ1osdUJBQUE7RUNsQkMsZ0JBQWdCO0VEbUJsQixxQkFBUztBQ2pCVDs7QUFFQTtFQUNFLGVBQWU7QURvQmpCOztBQ2pCQTtFRHFCRSwrQkFBa0I7QUNuQnBCOztBQUVBO0VEZ0NDLGtCQUFBO0VDOUJDLFdBQVc7QURXYjs7QUNSQTtFRHNCSSxrQkFBVztFQUNYLFdBQVM7QUNwQmI7O0FBRUE7RUFDRSxxQkFBcUI7RUR1QnZCLFlBQWE7RUFDWCxrQkFBWTtFQUNaLCtCQUErQjtFQUMvQixvQkFBYztFQUNkLG9CQUFhO0VBQ2Isb0JBQWU7RUFDaEIsYUFBQTtBQ3JCRDs7QUFFQTtFRHVCRSxxQkFBbUI7RUFDbkIsb0JBQWtCO0tBQ2xCLGlCQUFXO0VBQ1gsWUFBTztFQUNQLG9CQUFXO0VBQ1gsb0JBQWlCO0VBQ2pCLGFBQVk7RUFDYix3QkFBQTtNQ3JCSyxxQkFBcUI7VUR1QjNCLHVCQUFvQjtFQUNsQix5QkFBa0I7TUFDbEIsc0JBQVk7VUFDWixtQkFBbUI7QUNyQnJCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBLG9DQUFvQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGhyZWVEb3RzIGZyb20gJy4vbm91bi10aHJlZS1kb3QtNDI4NzY1Ny5zdmcnO1xuaW1wb3J0IHsgY2hhbmdlVGFzaywgZmluZFRhc2ssIGRlbGV0ZVRhc2ssIHNhdmVUYXNrTGlzdCwgc2hvd1Rhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vY3JlYXRlIGFuZCByZXR1cm4gdGhlIGVkaXQgdGFzayBidXR0b25cblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2tNZW51QnRuKCl7XG4gICAgY29uc3QgdGFza01lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrTWVudURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtYnV0dG9uJyk7XG4gICAgY29uc3QgdGFza01lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtYnV0dG9uJyk7XG4gICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBlZGl0SWNvbi50ZXh0Q29udGVudCAgPSAnbWVudSc7XG4gICAgLy8gY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBlZGl0SWNvbi5zcmMgPSB0aHJlZURvdHM7XG4gICAgdGFza01lbnVCdG4uYXBwZW5kKGVkaXRJY29uKTtcblxuICAgIC8vY3JlYXRlIHRhc2sgcG9wdXBcbiAgICBsZXQgZWRpdFRhc2tQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRUYXNrUG9wdXAuY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LXBvcHVwJylcblxuICAgIC8vYWRkIG1lbnUgYnV0dG9ucyB0byB0aGUgcG9wdXBcblxuICAgIGxldCB0YXNrRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tFZGl0QnRuLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgdGFza0VkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzaylcbiAgICB0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtcG9wdXAtYnRuJyk7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza0VkaXRCdG4pXG5cbiAgICBsZXQgdGFza0Nyb3NzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0Nyb3NzQnRuLnRleHRDb250ZW50ID0gXCJjcm9zcy1vdXRcIjtcbiAgICB0YXNrQ3Jvc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcm9zc291dFRhc2spO1xuICAgIHRhc2tDcm9zc0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtcG9wdXAtYnRuJyk7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza0Nyb3NzQnRuKVxuXG4gICAgbGV0IHRhc2tSZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrUmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJyZW1vdmVcIjtcbiAgICB0YXNrUmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFzayk7XG4gICAgdGFza1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtcG9wdXAtYnRuJyk7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza1JlbW92ZUJ0bilcblxuICAgIC8vYXBwZW5kIHRoZSBwb3B1cCB0byB0aGUgbWVudSBkaXZcbiAgICB0YXNrTWVudURpdi5hcHBlbmQoZWRpdFRhc2tQb3B1cCk7XG5cbiAgICAvL2FkZCBldmVuIGxpc3RlbmVyIHRvIGJ1dHRvbiB0byBzaG93IHBvcHVwXG4gICAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBlZGl0VGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9KTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGhpZGUgcG9wdXAgb24gbW91c2VsZWF2ZVxuICAgIGVkaXRUYXNrUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGVkaXRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIC8vYXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGRpdlxuICAgIHRhc2tNZW51RGl2LmFwcGVuZCh0YXNrTWVudUJ0bik7XG4gICAgcmV0dXJuIHRhc2tNZW51RGl2O1xuICAgIH07XG5cblxuXG4vL2Z1bmN0aW9uIHRvIGhpZGUgYWxsICh0YXNrIG1lbnUpIHBvcHVwc1xuZnVuY3Rpb24gaGlkZVBvcHVwcygpe1xuICAgIC8vY29uc29sZS5sb2coXCJoaWRlIHBvcHVwc1wiKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLW1lbnUtcG9wdXAnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbn1cblxuLy9mdW5jdGlvbiB0byBlZGl0IGEgdGFza1xuZnVuY3Rpb24gZWRpdFRhc2soKXtcbiAgICBoaWRlUG9wdXBzKCk7XG5cbiAgICBsZXQgdGhpc1Rhc2sgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgLy9tYWtlcyBhbGwgY2VsbHMgZWRpdGFibGVcbiAgICB0aGlzVGFzay5jaGlsZE5vZGVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdGluZycpOyBcbiAgICB9KTtcblxuICAgIC8vc2hvd3MgZGVzY3JpcHRpb25cbiAgICBsZXQgdGhpc0Rlc2MgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzYycpO1xuICAgIHRoaXNEZXNjLmNsYXNzTGlzdC5hZGQoJ3Nob3ctZGVzYycpO1xuXG4gICAgLy9oaWRlIHRoZSBtZW51IGJ1dHRvblxuICAgIGxldCBtZW51QnRuID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGVcbiAgICAvL2NvbnNvbGUubG9nKG1lbnVCdG4pO1xuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgLy9hZGQgXCJPS1wiIGJ1dHRvblxuICAgIGxldCBva0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBva0J0bi50ZXh0Q29udGVudCA9IFwiZG9uZVwiO1xuICAgIG9rQnRuLmlkID0gJ3Rhc2stZWRpdC1vay1idG4nO1xuICAgIG9rQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgdGhpc1Rhc2suYXBwZW5kKG9rQnRuKTtcblxuICAgIC8vYWRkIGZ1bmN0aW9uIHRvIG9rIGJ1dHRvbiB0byBkbyBzdHVmZlxuICAgIG9rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgLy9tYWtlIHRoaXNUYXNrIGNvbnRlbnQgbm90IGVkaXRhYmxlXG4gICAgICAgIHRoaXNUYXNrLmNoaWxkTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0aW5nJyk7ICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgLy9zYXZlIHRoZSBlZGl0ZWQgZGF0YSB0byB0aGUgdGFza2xpc3RcblxuICAgICAgICAvL2JydXRlIGZvcmNlZC4uIHVnbHkuLiBmaXggbGF0ZXJcblxuICAgICAgICBsZXQgaW5kZXggPSBmaW5kVGFzayh0aGlzVGFzay5pZClcbiAgICAgICAgbGV0IG5hbWUgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pdGVtJylbMF0udGV4dENvbnRlbnRcbiAgICAgICAgbGV0IGRlc2MgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pdGVtJylbMV0udGV4dENvbnRlbnRcbiAgICAgICAgbGV0IGR1ZSA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKVsyXS50ZXh0Q29udGVudFxuICAgICAgICBsZXQgcHJpb3JpdHkgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pdGVtJylbM10udGV4dENvbnRlbnRcblxuICAgICAgICBjaGFuZ2VUYXNrKGluZGV4LCduYW1lJyxuYW1lKTtcbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwnZGVzYycsZGVzYyk7XG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ2R1ZScsZHVlKTtcbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwncHJpb3JpdHknLHByaW9yaXR5KTtcblxuICAgICAgICB0aGlzRGVzYy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWRlc2MnKTtcblxuICAgICAgICAvL3JlbW92ZSB0aGUgb2sgYnV0dG9uXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWVkaXQtb2stYnRuJykucmVtb3ZlKCk7XG4gICAgICAgIC8vc2hvdyBtZW51IGJ1dHRvbiBhZ2FpblxuICAgICAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgc2F2ZVRhc2tMaXN0KCk7XG4gICAgICAgIHNob3dUYXNrcygpO1xuXG4gICAgfSk7XG5cblxufVxuXG4vL2Z1bmN0aW9uIHRvIHN0cmlrZW91dCBhIHRhc2tcbmZ1bmN0aW9uIGNyb3Nzb3V0VGFzaygpe1xuICAgIGhpZGVQb3B1cHMoKTtcbiAgICB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnN0eWxlLnRleHREZWNvcmF0aW9uPSBcImxpbmUtdGhyb3VnaFwiO1xufVxuXG4vL2Z1bmN0aW9uIHRvIHJlbW92ZSBhIHRhc2tcbmZ1bmN0aW9uIHJlbW92ZVRhc2soKXtcbiAgICBoaWRlUG9wdXBzKCk7XG5cbiAgICBsZXQgaW5kZXggPSBmaW5kVGFzayh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICBkZWxldGVUYXNrKGluZGV4KTtcbiAgICBzYXZlVGFza0xpc3QoKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sb3JQcmlvcml0eShudW0pe1xuICAgIGxldCBjb2xvcnMgPSBbJ3JlZCcsJ29yYW5nZScsJ3llbGxvdycsJ2dyZWVuJywnYmx1ZScsJ3doaXRlJ107XG4gICAgcmV0dXJuIGNvbG9yc1tudW1dO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmlvcml0eURyb3Bkb3duKCl7XG4gICAgbGV0IGNvbG9ycyA9IFsncmVkJywnb3JhbmdlJywneWVsbG93JywnZ3JlZW4nLCdibHVlJywnd2hpdGUnXTtcblxuICAgIGxldCBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sb3JzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tpbmRleF07XG4gICAgICAgIGRyb3BEb3duLmFwcGVuZChidXR0b24pO1xuICAgIH1cblxuICAgIHJldHVybiBkcm9wRG93bjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQnRuKCl7XG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnLCAnZXhwYW5kLWJ1dHRvbicpO1xuICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdleHBhbmRfbW9yZSc7XG4gICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHRoaXNUYXNrID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAvL3RvZ2dsZSBcInNob3cgZGVzY3JpcHRpb25cIlxuICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzYycpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGVzYycpXG4gICAgICAgIC8vdG9nZ2xlIGljb25cbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9PSAnZXhwYW5kX21vcmUnID8gdGhpcy50ZXh0Q29udGVudCA9ICdleHBhbmRfbGVzcycgOiB0aGlzLnRleHRDb250ZW50ID0gJ2V4cGFuZF9tb3JlJzsgXG4gICAgfSlcbiAgICByZXR1cm4gZXhwYW5kQnV0dG9uO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgc2hvd1Rhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vR2V0IG1haW4gY29udGFpbmVyIGZyb20gcGFnZVxubGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuLy8gTkFWIEJBUlxuXG4vL0NyZWF0ZSBuYXZpZ2F0aW9uIGJhclxubGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXZCYXIuaWQgPSBcIm5hdlwiXG5uYXZCYXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xubmF2QmFyLnRleHRDb250ZW50ID0gXCJOQVYgQkFSXCI7XG5cbi8vIFRBQiBCQVJcblxuLy9jZWF0ZSB0YWIgYmFyXG5sZXQgdGFiQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhYkJhci5pZCA9IFwidGFiLWJhclwiO1xuLy90YWJCYXIudGV4dENvbnRlbnQgPSBcIlRBQiBCQVJcIjtcbiAgICAvL2NyZWF0ZSBuZXcgdGFiIGJ1dHRvblxuICAgIGxldCBuZXdUYWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbmV3VGFiQnRuLmlkID0gXCJuZXctdGFiLWJ1dHRvblwiO1xuICAgIG5ld1RhYkJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIG5ld1RhYkJ0bi50ZXh0Q29udGVudCA9ICdhZGRfY2lyY2xlX291dGxpbmUnO1xuICAgIHRhYkJhci5hcHBlbmQobmV3VGFiQnRuKTtcbiAgICAvL2dpdmUgbmV3IHRhYiBidXNzb24gZnVuY3Rpb25hbHR5XG4gICAgbmV3VGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdUYWJQcm9tcHQpO1xuICAgIGZ1bmN0aW9uIG5ld1RhYlByb21wdCgpe1xuICAgICAgICBsZXQgbmV3VGFiID0gcHJvbXB0KFwiTmV3IHRhYiBuYW1lOlwiKTtcbiAgICAgICAgYWRkVGFiKG5ld1RhYik7XG4gICAgfVxuXG5hZGRUYWIoXCJtYWluXCIpO1xuYWRkVGFiKFwic2Vjb25kXCIpO1xuYWRkVGFiKFwidGhpcmRcIik7XG5uYXZCYXIuYXBwZW5kKHRhYkJhcik7XG5cbi8vZnVuY3Rpb24gdG8gYWRkIHRhYiB0byBOYXZiYXJcblxuZnVuY3Rpb24gYWRkVGFiKG5hbWUpe1xuICAgIGxldCBuZXdUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RhYi5jbGFzc05hbWUgPSBcInRhYlwiO1xuICAgIG5ld1RhYi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbmV3VGFiLnN0eWxlLm9yZGVyID0gXCItMVwiO1xuICAgIG5ld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFiQ2xpY2spO1xuICAgIHRhYkJhci5hcHBlbmQobmV3VGFiKTtcbn07XG5cbi8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFiIGJhclxubGV0IGN1cnJlbnRUYWIgPSBcIm1haW5cIjtcblxuZnVuY3Rpb24gdGFiQ2xpY2soKXtcblxuICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRleHRDb250ZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwicHVycGxlXCI7XG4gICAgfSk7XG4gICAgdGhpcy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgc2hvd1Rhc2tzKCk7XG4gICAgXG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWIoKXtcbiAgICByZXR1cm4gY3VycmVudFRhYjtcbn1cblxuLy8gVElUTEUgQkFSXG5cbi8vY3JlYXRlIHRpdGxlIGJhclxubGV0IHRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRpdGxlQmFyLmlkID0gJ3RpdGxlLWJhcic7XG5sZXQgdGl0bGVzID0gY3JlYXRlVGFzaygnVGFzaycsICdEZXNjcmlwdGlvbicsICdEdWUgZGF0ZScsICdQcmlvcml0eScsJ25vbmUnKTtcbmRlbGV0ZSB0aXRsZXMuZGVzYztcbi8vY29uc29sZS5sb2codGl0bGVzKTtcblxuZm9yIChjb25zdCBwcm9wIGluIHRpdGxlcykge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aXRsZXMsIHByb3ApKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIiwgcHJvcClcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gdGl0bGVzW3Byb3BdXG4gICAgICAgIHRpdGxlQmFyLmFwcGVuZChkaXYpO1xuICAgIH1cbn1cbm5hdkJhci5hcHBlbmQodGl0bGVCYXIpO1xuXG5cblxuXG4vL0FkZCBOYXYgdG8gdG9wIG9mIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBhZGROYXYoKXtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChuYXZCYXIpO1xufVxuXG4iLCJpbXBvcnQgeyBnZXRUYWIgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyB0YXNrTWVudUJ0biwgZXhwYW5kQnRuLCBwcmlvcml0eURyb3Bkb3duLCBjb2xvclByaW9yaXR5fSBmcm9tICcuL2VkaXRUYXNrLmpzJztcblxubGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuLy9leHRlbmQgZnVuY3Rpb25hbGl0eSBvZiBsb2NhbCBzdG9yYWdlIHRvIGFsbG93IGZvciBhcnJheXMgYW5kIG9iamVjdHNcblN0b3JhZ2UucHJvdG90eXBlLnNldE9iaiA9IGZ1bmN0aW9uKGtleSwgb2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iaikpXG59XG5TdG9yYWdlLnByb3RvdHlwZS5nZXRPYmogPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldEl0ZW0oa2V5KSlcbn1cblxubGV0IHRhc2tMaXN0ID0gW107XG4vL2Z1bmN0aW9uIHRvIG92ZXJ3cml0ZSB0YXNrTGlzdFxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGFza0xpc3QobmV3VGFza0xpc3Qpe1xuICAgIHRhc2tMaXN0ID0gbmV3VGFza0xpc3Q7XG4gICAgLy9zY29uc29sZS5sb2codGFza0xpc3QpO1xuICAgIHNob3dUYXNrcygpO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGNoYW5nZSB0YXNrXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYXNrKGluZGV4LHByb3AsdmFsdWUpe1xuICAgIHRhc2tMaXN0W2luZGV4XVtwcm9wXSA9IHZhbHVlO1xufTtcblxuLy9mdW5jdGlvbiB0byBjYWxsIHRvIG1ha2UgdGFza3NcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsZGVzYyxkdWUscHJpb3JpdHksaW5UYWIpe1xuICAgIHJldHVybntcbiAgICAgIG5hbWU6bmFtZSxcbiAgICAgIGRlc2M6ZGVzYyxcbiAgICAgIGR1ZTpkdWUsXG4gICAgICBwcmlvcml0eTpwcmlvcml0eSxcbiAgICAgIGluVGFiOmluVGFiXG4gICAgfVxuICB9XG4gIFxuLy9mdW5jdGlvbiB0byBhZGQgdGhlIHRhc2sgdG8gdGhlIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrICh0YXNrKXtcbiAgICAvL2NvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIHNhdmVUYXNrTGlzdCgpO1xuICAgIC8vY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICAvL2NvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Rhc2tMaXN0JykpO1xuXG4gICAgLy9jb25zb2xlLmxvZyhpbXBvcnRsaXN0KTtcblxufTtcblxuLy9mdW5jdGlvbiB0byB3cml0ZSB0YXNrbGlzdCB0byBsb2NhbCBzdG9yYWdlXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza0xpc3QoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCd0YXNrTGlzdCcsIHRhc2tMaXN0KTtcbn1cblxuXG5cbi8vZnVuY3Rpb24gdG8gc2hvdyB0YXNrbGlzdCBpbiBET01cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyh0YWIpe1xuY2xlYXJUYXNrcygpO1xuLy9pIHRvIHRyYWNrIHdoaWNoIGluZGV4IG9mIHRhc2tMaXN0IGNvZGUgaXMgY2hlY2tpbmdcbnZhciBpPTBcblxuLy9sb29rIHRocm91Z2ggZXZlcnkgZWxlbWVudCBvZiB0aGUgdHJhc2tsaXN0XG50YXNrTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgLy8gaWYgdGhlIGN1cnJlbnQgdGFzaydzICdpbnRhYicgaXMgdGhlIHNhbWUgYXMgY3VycmVudCB0YWJcbiAgICBpZihlbGVtZW50LmluVGFiID09IGdldFRhYigpKXtcblxuICAgICAgICAvL2NyZWF0ZXMgYSBkaXYgZm9yIHRoZSB0YXNrXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFzay5jbGFzc05hbWUgPSAndGFzayc7ICAgIFxuXG4gICAgICAgIC8vYXBwZW5kIGV4cGFuZCBidXR0b25cbiAgICAgICAgdGFzay5hcHBlbmQoZXhwYW5kQnRuKCkpO1xuXG4gICAgICAgIC8vbG9vcHMgdGhyb3VnaCBlYWNoIGVsZW1lbnQgaW4gdGhlIG9iamVjdCB0byBjcmVhdGUgYW4gaW5wdXQsXG4gICAgICAgIC8vIGFzc2lnbiBhIGNsYXNzbmFtZSwgdmFsdWUsIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHRhc2tcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbGVtZW50LCBwcm9wKSkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyxwcm9wKTtcbiAgICAgICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBlbGVtZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kKGRpdik7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2FkZCBtZW51IGJ1dHRvbiB0byB0YXNrXG4gICAgICAgIHRhc2suYXBwZW5kKHRhc2tNZW51QnRuKCkpO1xuXG4gICAgICAgIC8vYXNzaWduIGVhY2ggdGFzayBhbiBpZFxuICAgICAgICB0YXNrLmlkID0gYHRhc2stJHtpfWA7XG5cbiAgICAgICAgLy9jb2xvciB0aGUgcHJpb3JpdHlcbiAgICAgICAgbGV0IGNvbG9yID0gY29sb3JQcmlvcml0eShlbGVtZW50LnByaW9yaXR5KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbiAgICAgICAgcHJpb3JpdHkuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTsgY29sb3I6ICR7Y29sb3J9YFxuXG4gICAgICAgIC8vYWRkcyB0aGUgdGFzayBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYWluIGNvbnRhaW5lclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0YXNrKTtcbiAgICB9XG4gICAgXG4gICAgaSsrXG59KTtcblxuY3JlYXRlTmV3VGFza0J0bigpO1xufTtcblxuLy9mdW5jdGlvbiB0byBhZGQgYSBuZXcgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3VGFzaygpe1xuICAgIC8vcmVtb3ZlIHRoZSBuZXcgdGFzayBidXR0b25cbiAgICBsZXQgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1idG4nKTtcbiAgICBuZXdUYXNrQnRuLnJlbW92ZSgpO1xuXG4gICAgLy9DcmVhdGUgYSB0YXNrIGxpbmUgbWFkZSBvZiBpbnB1dHNcbiAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3VGFzay5jbGFzc05hbWUgPSAndGFzayc7ICAgIFxuXG4gICAgbGV0IGVsZW1lbnQgPSBjcmVhdGVUYXNrKCcnLCcnLCcnLCcnLCcnKTtcblxuICAgIGZvciAoY29uc3QgcHJvcCBpbiBlbGVtZW50KSB7XG4gICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbGVtZW50LCBwcm9wKSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScsIHByb3ApXG4gICAgICAgICAgICBpbnB1dC5pZCA9IGBuZXctdGFzay0ke3Byb3B9YDtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZWxlbWVudFtwcm9wXVxuICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9hZGRpbmcgdGhlIFwiT0tcIiBidXR0b25cbiAgICBsZXQgb2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBva0J0bi5pZCA9IFwib2stYnRuXCI7XG4gICAgb2tCdG4udGV4dENvbnRlbnQgPSBcIk9LXCI7XG4gICAgb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9rXCIpO1xuICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stbmFtZScpLnZhbHVlO1xuICAgICAgICBsZXQgbmV3VGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXRhc2stZGVzYycpLnZhbHVlO1xuICAgICAgICBsZXQgbmV3VGFza0R1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1kdWUnKS52YWx1ZTtcbiAgICAgICAgbGV0IG5ld1Rhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctdGFzay1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBsZXQgbmV3VGFza2luVGFiID0gZ2V0VGFiKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sobmV3VGFza05hbWUsbmV3VGFza0Rlc2MsbmV3VGFza0R1ZSxuZXdUYXNrUHJpb3JpdHksbmV3VGFza2luVGFiKTtcbiAgICAgICAgYWRkVGFzayhuZXdUYXNrKTtcbiAgICAgICAgc2hvd1Rhc2tzKCk7XG4gICAgfSk7XG4gICAgbmV3VGFzay5hcHBlbmQob2tCdG4pO1xuICAgIFxuXG5cbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChuZXdUYXNrKTtcbn1cblxuLy9mdW5jdGlvbiB0byBjbGVhciBhbGwgdGFza3NcbmZ1bmN0aW9uIGNsZWFyVGFza3MoKXtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2xlYXIgc3RhcnRlZFwiKTtcbiAgICBjb25zdCBhcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHsgICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGxldCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1idG5cIilcbiAgICBpZiAobmV3VGFza0J0biAhPSBudWxsKXtcbiAgICBuZXdUYXNrQnRuLnJlbW92ZSgpO1xuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZyhcImNsZWFyIGZpbmlzaGVkXCIpO1xufTtcblxuLy9mdW5jdGlvbiB0byBjcmVhdGUgYWRkIGJsYW5rIHRhc2sgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0J0bigpe1xuICAgIGxldCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBuZXdUYXNrQnRuLmlkID0gXCJuZXctdGFzay1idG5cIjtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdUYXNrKTsgXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobmV3VGFza0J0bik7XG59XG5cbi8vZnVuY3Rpb24gdG8gZmluZCBhIHRhc2sgYnkgaXRzIGlkXG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFzayhpZCl7XG4gICAgbGV0IGluZGV4ID0gaWQuc2xpY2UoNSk7XG4gICAgcmV0dXJuIGluZGV4XG59XG5cbi8vZnVuY3Rpb24gdG8gcmVtb3ZlIGEgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2hvd1Rhc2tzKCk7XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGZvcm1hdCwgY29tcGFyZUFzYyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGFkZE5hdiB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7IHNldFRhc2tMaXN0LCBjcmVhdGVUYXNrLCBuZXdUYXNrLCBjcmVhdGVOZXdUYXNrQnRuLCBzaG93VGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuLy9sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5hZGROYXYoKTtcbi8vYWRkVGFzayhjcmVhdGVUYXNrKFwiZXhhbXBsZTFcIixcImRlc2NyaXB0aW9uMVwiLFwiMS8xLzIwMjFcIixcIjFcIixcIm1haW5cIikpO1xuLy9hZGRUYXNrKGNyZWF0ZVRhc2soXCJleGFtcGxlMlwiLFwiZGVzY3JpcHRpb24yXCIsXCIxLzIvMjAyMVwiLFwiMlwiLFwibWFpblwiKSk7XG5zaG93VGFza3MoKTtcblxuXG4vL2Z1bmN0aW9uIHRvIHJlYWQgbG9jYWwgc3RvcmFnZSwgXG4vL3NldCBlbXB0eSBhcnJheSBpZiBlbXB0eS4uLiBzZXQgc3RvcmVkIHRhc2tsaXN0IG90aGVyd2lzZVxuXG5pZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpIHtcbiAgY29uc29sZS5sb2coXCJsb2NhbCBzdG9yYWdlIGlzIGVtcHR5XCIpO1xufSBlbHNlIHtcbiAgc2V0VGFza0xpc3QobG9jYWxTdG9yYWdlLmdldE9iaigndGFza0xpc3QnKSk7XG59XG5cbi8vQVRUUklCVVRFU1xuXG4vLyBUaHJlZSBEb3QgYnkgd2FoeWFrdXAgZnJvbSBOb3VuUHJvamVjdC5jb21cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==