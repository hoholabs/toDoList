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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color1: rgb(150, 192, 139);\n  --color2: rgba(70, 29, 66, 0.85);\n  --color3: rgb(228, 209, 228);\n}\n\n#main-container {\n  color: var(--color2);\n  display: -ms-grid;\n  display: grid;\n  width: 80vw;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  border: none;\n}\n\n#nav {\n  border-bottom: 0;\n  width: 80vw;\n}\n\n#title-bar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-radius: 15px 50px 0px 0px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 40px;\n  background-color: var(--color3);\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.title-item {\n  background-color: var(--color3);\n  color: var(--color2);\n  border: none;\n  border-radius: 10px;\n}\n\n#tab-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#new-tab-button {\n  border-radius: 1vw;\n  border: 0;\n  color: var(--color2);\n  height: 3vw;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 5px;\n}\n\n.tab {\n  border: solid var(--color2) 2px;\n  border-radius: 30px 30px 5px 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n  height: 25px;\n  line-height: 30px;\n  width: 50px;\n  margin-right: 5px;\n  text-align: center;\n}\n\n.task {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color: var(--color3);\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.task-item {\n  border-radius: 5px;\n  padding: 5px;\n  color: var(--color2);\n  background-color: var(--color3);\n  margin: 1px;\n  border: solid var(--color3) 1px;\n}\n\n.inTab {\n  display: none;\n}\n\n.name {\n  text-align: center;\n}\n\n.desc {\n  display: none;\n  text-align: center;\n  width: 1fr;\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2/4;\n  word-wrap: break-word;\n  background-color: var(--color3);\n}\n\n.show-desc {\n  display: inline;\n}\n\n.editing {\n  border: solid var(--color2) 1px;\n}\n\n.due {\n  text-align: center;\n}\n\n.priority {\n  display: none;\n  text-align: center;\n}\n\n.task-menu-button {\n  border: none;\n  border-radius: 1vw;\n  background-color: var(--color3);\n  color: var(--color2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.task-menu-button img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#new-task-btn {\n  height: 30px;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  border-radius: 0px 0px 15px 50px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 40px;\n}\n\n.task-menu-popup {\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n  background-color: var(--color3);\n  position: absolute;\n  display: none;\n}\n\n.task-menu-popup-btn {\n  background-color: var(--color3);\n  color: var(--color2);\n  border: none;\n  border-radius: 10px;\n}\n\n#label-dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAAS;EACT,gCAAS;EACT,4BAAS;ACCX;;ADGA;EAEE,oBAAoB;EACpB,iBAAY;EACZ,aAAW;EACX,WAAA;EACA,wBAAc;MACd,qBAAY;UACb,uBAAA;ECDC,cAAc;EDGhB,YAAI;ACDJ;;AAEA;EACE,gBAAgB;EDQlB,WAAU;ACNV;;AAEA;EDSE,iBAAe;EACf,aAAY;EACZ,sCAAiB;MACjB,2CAAkB;EAClB,+BAAY;EACZ,gCAA+B;EAC/B,YAAQ;EACR,iBAAe;EAGhB,kBAAA;ECTC,YAAY;EDWd,+BAAW;EACT,aAAA;EACA,0BAAoB;MACpB,qBAAY;ACTd;;AAEA;EDaA,+BAAQ;EAEN,oBAAY;EACb,YAAA;ECZC,mBAAmB;ADarB;;ACVA;EDcE,oBAAoB;EACpB,oBAAW;EAEX,aAAY;ACbd;;AAEA;EDcA,kBAAI;EACF,SAAO;EACP,oBAAe;EACf,WAAA;EACA,2BAAiB;MACjB,0BAAY;MACZ,kBAAiB;EACjB,WAAW;ACZb;;AAEA;EACE,+BAA+B;EDgBjC,gCAAK;EACH,mBAAY;EACZ,iBAAA;EACA,YAAQ;EACR,iBAAa;EACb,WAAS;EACT,iBAAiB;EACjB,kBAAkB;ACdpB;;AAEA;EACE,iBAAiB;EDiBnB,aAAU;EAER,sCAAkB;MAClB,2CAAY;EACZ,+BAAoB;EACpB,aAAA;EACA,YAAW;EACX,iBAAc;EAEf,kBAAA;ECjBC,+BAA+B;EDmBjC,0BAAM;MACJ,qBAAY;ACjBd;;ADoBA;EACE,kBAAkB;EAEnB,YAAA;EClBC,oBAAoB;EDmBtB,+BAAK;EACH,WAAQ;EACR,+BAAkB;ACjBpB;;AAEA;EDoBE,aAAW;AClBb;;AAEA;EDsBC,kBAAU;ACpBX;;AAEA;EDsBC,aAAQ;EAEP,kBAAc;EAEd,UAAA;ECtBA,eAAe;MDwBb,iBAAA;EACF,kBAAkB;EAEnB,uBAAA;ECvBC,gBAAgB;EDwBlB,qBAAS;EACP,+BAAY;ACtBd;;AAEA;ED0BA,eAAiB;ACxBjB;;AAEA;ED4BE,+BAAoB;AC1BtB;;AAEA;EDkBA,kBASE;ACzBF;;AAEA;ED8BI,aAAA;EACA,kBAAa;AC5BjB;;ADgCA;EACE,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,oBAAa;EACb,oBAAe;EACf,oBAAY;EACZ,aAAY;AC7Bd;;AAEA;EACE,oBAAoB;KD+BtB,iBAAgB;EACd,YAAO;EACP,oBAAmB;EACnB,oBAAkB;EAIlB,aAAS;EACT,wBAAY;MACb,qBAAA;UChCS,uBAAuB;EDkCjC,yBAAoB;MAClB,sBAAkB;UACX,mBAAa;AChCtB;;AAEA;EACE,YAAY;EDkCd,+BAAe;EACb,+BAAa;EACb,aAAA;EACA,gCAAkB;EAClB,YAAA;EACA,iBAAa;EACb,kBAAe;EAChB,YAAA;AChCD;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,kBAAkB;EAClB,+BAA+B;EAC/B,+BAA+B;EAC/B,mBAAmB;AACrB;AACA,oCAAoC","sourceRoot":""}]);
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


    let taskEditBtn = document.createElement('button');
    taskEditBtn.addEventListener('click', () =>{editTask(taskId);});
    taskEditBtn.classList.add('task-menu-popup-btn');
    let taskEditIcon = document.createElement('i');
    taskEditIcon.textContent = "edit";
    taskEditIcon.className = 'material-icons';
    taskEditBtn.append(taskEditIcon);
    editTaskPopup.append(taskEditBtn)


    let taskCrossBtn = document.createElement('button');
    taskCrossBtn.addEventListener('click', crossoutTask);
    taskCrossBtn.classList.add('task-menu-popup-btn');
    let taskCrossIcon =  document.createElement('i');
    taskCrossIcon.className = 'material-icons';
    taskCrossIcon.textContent = 'strikethrough_s';
    taskCrossBtn.append(taskCrossIcon);
    editTaskPopup.append(taskCrossBtn)


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
    hidePopups();

    //let thisTask = this.parentNode.parentNode.parentNode;
    let thisTask = document.getElementById(taskId);
    //console.log(thisTask);

    let textFields = thisTask.querySelectorAll('.name, .desc, .due')

    //makes all textfields editable
    textFields.forEach(element => {
        element.contentEditable = "true";
        element.classList.add('editing'); 
    });

    //shows description
    let thisDesc = thisTask.querySelector('.desc');
    thisDesc.classList.add('show-desc');

    //hide the menu button and expand button
    let menuBtn = thisTask.querySelector('.task-menu-button');
    let expBtn = thisTask.querySelector('.expand-button');
    menuBtn.style.display = "none";
    expBtn.style.color = "var(--color3)";

    //make label interactive //////////////////////////////////////
    let thisLabel = thisTask.querySelector('.label');
    let thisLabelDiv = thisTask.querySelector('.label-div');
    console.log(thisLabel);
    thisLabel.addEventListener('click', function(event){
        event.preventDefault();
        thisLabelDiv.append(labelDropdown());
    })

    //add "OK" button
    let okBtn = document.createElement('i');
    okBtn.textContent = "done";
    okBtn.id = 'task-edit-ok-btn';
    okBtn.classList.add('material-icons');
    thisTask.append(okBtn);

    //add function to ok button to do stuff
    okBtn.addEventListener('click', function(){
        //make taskfields content not editable
        textFields.forEach(element => {
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
        //show menu and expand button again
        menuBtn.style.display = "block";
        expBtn.style.color = "var(--color2)";

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
function removeTask(id){
    hidePopups();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.deleteTask)((0,_tasks__WEBPACK_IMPORTED_MODULE_1__.findTask)(id));
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.saveTaskList)();

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

        
        //priority.style.color = color;
        //priority.style.cssText = `background-color: ${color}; color: ${color}`

        //adds the task at the bottom of the main container
        mainContainer.append(task);
    }
    
    i++
});

createNewTaskBtn();
};

//function to add a new task 

function newTask(){
    //create blank task and then edit it
    let newTask = createTask('','','','',(0,_nav_js__WEBPACK_IMPORTED_MODULE_0__.getTab)());
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
//localStorage.clear()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2S0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3lCO0FBQ1o7QUFDc0Q7O0FBRXhGOztBQUVBLCtDQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsaURBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixFQUFFLG1EQUFXO0FBQ2I7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvcjE6IHJnYigxNTAsIDE5MiwgMTM5KTtcXG4gIC0tY29sb3IyOiByZ2JhKDcwLCAyOSwgNjYsIDAuODUpO1xcbiAgLS1jb2xvcjM6IHJnYigyMjgsIDIwOSwgMjI4KTtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDgwdnc7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuI3RpdGxlLWJhciB7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAzdncgMWZyIC41ZnIgNXZ3IDV2dztcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDN2dyAxZnIgLjVmciA1dncgNXZ3O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxlLWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RhYi1iYXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNuZXctdGFiLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3JkZXI6IDA7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGhlaWdodDogM3Z3O1xcbiAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1ncmlkLXJvdy1hbGlnbjogY2VudGVyO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4udGFiIHtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggNXB4IDVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogM3Z3IDFmciAuNWZyIDV2dyA1dnc7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzdncgMWZyIC41ZnIgNXZ3IDV2dztcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIG1hcmdpbjogMXB4O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjMpIDFweDtcXG59XFxuXFxuLmluVGFiIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxZnI7XFxuICAtbXMtZ3JpZC1yb3c6IDI7XFxuICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDI7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbn1cXG5cXG4uc2hvdy1kZXNjIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXRpbmcge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDFweDtcXG59XFxuXFxuLmR1ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbWVudS1idXR0b24gaW1nIHtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCA1MHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi50YXNrLW1lbnUtcG9wdXAge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stbWVudS1wb3B1cC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2xhYmVsLWRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBUztFQUNULGdDQUFTO0VBQ1QsNEJBQVM7QUNDWDs7QURHQTtFQUVFLG9CQUFvQjtFQUNwQixpQkFBWTtFQUNaLGFBQVc7RUFDWCxXQUFBO0VBQ0Esd0JBQWM7TUFDZCxxQkFBWTtVQUNiLHVCQUFBO0VDREMsY0FBYztFREdoQixZQUFJO0FDREo7O0FBRUE7RUFDRSxnQkFBZ0I7RURRbEIsV0FBVTtBQ05WOztBQUVBO0VEU0UsaUJBQWU7RUFDZixhQUFZO0VBQ1osc0NBQWlCO01BQ2pCLDJDQUFrQjtFQUNsQiwrQkFBWTtFQUNaLGdDQUErQjtFQUMvQixZQUFRO0VBQ1IsaUJBQWU7RUFHaEIsa0JBQUE7RUNUQyxZQUFZO0VEV2QsK0JBQVc7RUFDVCxhQUFBO0VBQ0EsMEJBQW9CO01BQ3BCLHFCQUFZO0FDVGQ7O0FBRUE7RURhQSwrQkFBUTtFQUVOLG9CQUFZO0VBQ2IsWUFBQTtFQ1pDLG1CQUFtQjtBRGFyQjs7QUNWQTtFRGNFLG9CQUFvQjtFQUNwQixvQkFBVztFQUVYLGFBQVk7QUNiZDs7QUFFQTtFRGNBLGtCQUFJO0VBQ0YsU0FBTztFQUNQLG9CQUFlO0VBQ2YsV0FBQTtFQUNBLDJCQUFpQjtNQUNqQiwwQkFBWTtNQUNaLGtCQUFpQjtFQUNqQixXQUFXO0FDWmI7O0FBRUE7RUFDRSwrQkFBK0I7RURnQmpDLGdDQUFLO0VBQ0gsbUJBQVk7RUFDWixpQkFBQTtFQUNBLFlBQVE7RUFDUixpQkFBYTtFQUNiLFdBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0FDZHBCOztBQUVBO0VBQ0UsaUJBQWlCO0VEaUJuQixhQUFVO0VBRVIsc0NBQWtCO01BQ2xCLDJDQUFZO0VBQ1osK0JBQW9CO0VBQ3BCLGFBQUE7RUFDQSxZQUFXO0VBQ1gsaUJBQWM7RUFFZixrQkFBQTtFQ2pCQywrQkFBK0I7RURtQmpDLDBCQUFNO01BQ0oscUJBQVk7QUNqQmQ7O0FEb0JBO0VBQ0Usa0JBQWtCO0VBRW5CLFlBQUE7RUNsQkMsb0JBQW9CO0VEbUJ0QiwrQkFBSztFQUNILFdBQVE7RUFDUiwrQkFBa0I7QUNqQnBCOztBQUVBO0VEb0JFLGFBQVc7QUNsQmI7O0FBRUE7RURzQkMsa0JBQVU7QUNwQlg7O0FBRUE7RURzQkMsYUFBUTtFQUVQLGtCQUFjO0VBRWQsVUFBQTtFQ3RCQSxlQUFlO01Ed0JiLGlCQUFBO0VBQ0Ysa0JBQWtCO0VBRW5CLHVCQUFBO0VDdkJDLGdCQUFnQjtFRHdCbEIscUJBQVM7RUFDUCwrQkFBWTtBQ3RCZDs7QUFFQTtFRDBCQSxlQUFpQjtBQ3hCakI7O0FBRUE7RUQ0QkUsK0JBQW9CO0FDMUJ0Qjs7QUFFQTtFRGtCQSxrQkFTRTtBQ3pCRjs7QUFFQTtFRDhCSSxhQUFBO0VBQ0Esa0JBQWE7QUM1QmpCOztBRGdDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG9CQUFhO0VBQ2Isb0JBQWU7RUFDZixvQkFBWTtFQUNaLGFBQVk7QUM3QmQ7O0FBRUE7RUFDRSxvQkFBb0I7S0QrQnRCLGlCQUFnQjtFQUNkLFlBQU87RUFDUCxvQkFBbUI7RUFDbkIsb0JBQWtCO0VBSWxCLGFBQVM7RUFDVCx3QkFBWTtNQUNiLHFCQUFBO1VDaENTLHVCQUF1QjtFRGtDakMseUJBQW9CO01BQ2xCLHNCQUFrQjtVQUNYLG1CQUFhO0FDaEN0Qjs7QUFFQTtFQUNFLFlBQVk7RURrQ2QsK0JBQWU7RUFDYiwrQkFBYTtFQUNiLGFBQUE7RUFDQSxnQ0FBa0I7RUFDbEIsWUFBQTtFQUNBLGlCQUFhO0VBQ2Isa0JBQWU7RUFDaEIsWUFBQTtBQ2hDRDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO01BQ3pCLDBCQUEwQjtVQUN0QixzQkFBc0I7RUFDOUIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0aHJlZURvdHMgZnJvbSAnLi9ub3VuLXRocmVlLWRvdC00Mjg3NjU3LnN2Zyc7XG5pbXBvcnQgeyBjaGFuZ2VUYXNrLCBmaW5kVGFzaywgZGVsZXRlVGFzaywgc2F2ZVRhc2tMaXN0LCBzaG93VGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuLy9jcmVhdGUgYW5kIHJldHVybiB0aGUgZWRpdCB0YXNrIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gdGFza01lbnVCdG4odGFza0lkKXtcbiAgICBjb25zdCB0YXNrTWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tNZW51RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWVudS1idXR0b24nKTtcbiAgICBjb25zdCB0YXNrTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWVudS1idXR0b24nKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIG1lbnVJY29uLnRleHRDb250ZW50ICA9ICdtZW51JztcbiAgICB0YXNrTWVudUJ0bi5hcHBlbmQobWVudUljb24pO1xuXG4gICAgLy9jcmVhdGUgdGFzayBwb3B1cFxuICAgIGxldCBlZGl0VGFza1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdFRhc2tQb3B1cC5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAnKVxuXG4gICAgLy9hZGQgbWVudSBidXR0b25zIHRvIHRoZSBwb3B1cFxuXG5cbiAgICBsZXQgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e2VkaXRUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LXBvcHVwLWJ0bicpO1xuICAgIGxldCB0YXNrRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdGFza0VkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgdGFza0VkaXRJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgdGFza0VkaXRCdG4uYXBwZW5kKHRhc2tFZGl0SWNvbik7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza0VkaXRCdG4pXG5cblxuICAgIGxldCB0YXNrQ3Jvc3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQ3Jvc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcm9zc291dFRhc2spO1xuICAgIHRhc2tDcm9zc0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAtYnRuJyk7XG4gICAgbGV0IHRhc2tDcm9zc0ljb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRhc2tDcm9zc0ljb24uY2xhc3NOYW1lID0gJ21hdGVyaWFsLWljb25zJztcbiAgICB0YXNrQ3Jvc3NJY29uLnRleHRDb250ZW50ID0gJ3N0cmlrZXRocm91Z2hfcyc7XG4gICAgdGFza0Nyb3NzQnRuLmFwcGVuZCh0YXNrQ3Jvc3NJY29uKTtcbiAgICBlZGl0VGFza1BvcHVwLmFwcGVuZCh0YXNrQ3Jvc3NCdG4pXG5cblxuICAgIGxldCB0YXNrUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza1JlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW1vdmVUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAtYnRuJyk7XG4gICAgbGV0IHRhc2tSZW1vdmVJY29uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0YXNrUmVtb3ZlSWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICAgIHRhc2tSZW1vdmVJY29uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgdGFza1JlbW92ZUJ0bi5hcHBlbmQodGFza1JlbW92ZUljb24pO1xuICAgIGVkaXRUYXNrUG9wdXAuYXBwZW5kKHRhc2tSZW1vdmVCdG4pXG5cbiAgICAvL2FwcGVuZCB0aGUgcG9wdXAgdG8gdGhlIG1lbnUgZGl2XG4gICAgdGFza01lbnVEaXYuYXBwZW5kKGVkaXRUYXNrUG9wdXApO1xuXG4gICAgLy9hZGQgZXZlbiBsaXN0ZW5lciB0byBidXR0b24gdG8gc2hvdyBwb3B1cFxuICAgIHRhc2tNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZWRpdFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfSk7XG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBoaWRlIHBvcHVwIG9uIG1vdXNlbGVhdmVcbiAgICBlZGl0VGFza1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xuICAgICAgICBlZGl0VGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICAvL2FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBkaXZcbiAgICB0YXNrTWVudURpdi5hcHBlbmQodGFza01lbnVCdG4pO1xuICAgIHJldHVybiB0YXNrTWVudURpdjtcbiAgICB9O1xuXG5cblxuLy9mdW5jdGlvbiB0byBoaWRlIGFsbCAodGFzayBtZW51KSBwb3B1cHNcbmZ1bmN0aW9uIGhpZGVQb3B1cHMoKXtcbiAgICAvL2NvbnNvbGUubG9nKFwiaGlkZSBwb3B1cHNcIik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1tZW51LXBvcHVwJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG59XG5cbi8vZnVuY3Rpb24gdG8gZWRpdCBhIHRhc2tcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayh0YXNrSWQpe1xuICAgIGhpZGVQb3B1cHMoKTtcblxuICAgIC8vbGV0IHRoaXNUYXNrID0gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBsZXQgdGhpc1Rhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpO1xuICAgIC8vY29uc29sZS5sb2codGhpc1Rhc2spO1xuXG4gICAgbGV0IHRleHRGaWVsZHMgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yQWxsKCcubmFtZSwgLmRlc2MsIC5kdWUnKVxuXG4gICAgLy9tYWtlcyBhbGwgdGV4dGZpZWxkcyBlZGl0YWJsZVxuICAgIHRleHRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0aW5nJyk7IFxuICAgIH0pO1xuXG4gICAgLy9zaG93cyBkZXNjcmlwdGlvblxuICAgIGxldCB0aGlzRGVzYyA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XG4gICAgdGhpc0Rlc2MuY2xhc3NMaXN0LmFkZCgnc2hvdy1kZXNjJyk7XG5cbiAgICAvL2hpZGUgdGhlIG1lbnUgYnV0dG9uIGFuZCBleHBhbmQgYnV0dG9uXG4gICAgbGV0IG1lbnVCdG4gPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1tZW51LWJ1dHRvbicpO1xuICAgIGxldCBleHBCdG4gPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ1dHRvbicpO1xuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGV4cEJ0bi5zdHlsZS5jb2xvciA9IFwidmFyKC0tY29sb3IzKVwiO1xuXG4gICAgLy9tYWtlIGxhYmVsIGludGVyYWN0aXZlIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IHRoaXNMYWJlbCA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpO1xuICAgIGxldCB0aGlzTGFiZWxEaXYgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcubGFiZWwtZGl2Jyk7XG4gICAgY29uc29sZS5sb2codGhpc0xhYmVsKTtcbiAgICB0aGlzTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXNMYWJlbERpdi5hcHBlbmQobGFiZWxEcm9wZG93bigpKTtcbiAgICB9KVxuXG4gICAgLy9hZGQgXCJPS1wiIGJ1dHRvblxuICAgIGxldCBva0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBva0J0bi50ZXh0Q29udGVudCA9IFwiZG9uZVwiO1xuICAgIG9rQnRuLmlkID0gJ3Rhc2stZWRpdC1vay1idG4nO1xuICAgIG9rQnRuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgdGhpc1Rhc2suYXBwZW5kKG9rQnRuKTtcblxuICAgIC8vYWRkIGZ1bmN0aW9uIHRvIG9rIGJ1dHRvbiB0byBkbyBzdHVmZlxuICAgIG9rQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgLy9tYWtlIHRhc2tmaWVsZHMgY29udGVudCBub3QgZWRpdGFibGVcbiAgICAgICAgdGV4dEZpZWxkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRpbmcnKTsgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAvL3NhdmUgdGhlIGVkaXRlZCBkYXRhIHRvIHRoZSB0YXNrbGlzdFxuXG4gICAgICAgIC8vYnJ1dGUgZm9yY2VkLi4gdWdseS4uIGZpeCBsYXRlclxuXG4gICAgICAgIGxldCBpbmRleCA9IGZpbmRUYXNrKHRoaXNUYXNrLmlkKVxuICAgICAgICBsZXQgbmFtZSA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKVswXS50ZXh0Q29udGVudFxuICAgICAgICBsZXQgZGVzYyA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKVsxXS50ZXh0Q29udGVudFxuICAgICAgICBsZXQgZHVlID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staXRlbScpWzJdLnRleHRDb250ZW50XG4gICAgICAgIGxldCBwcmlvcml0eSA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWl0ZW0nKVszXS50ZXh0Q29udGVudFxuXG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ25hbWUnLG5hbWUpO1xuICAgICAgICBjaGFuZ2VUYXNrKGluZGV4LCdkZXNjJyxkZXNjKTtcbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwnZHVlJyxkdWUpO1xuICAgICAgICBjaGFuZ2VUYXNrKGluZGV4LCdwcmlvcml0eScscHJpb3JpdHkpO1xuXG4gICAgICAgIHRoaXNEZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctZGVzYycpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHRoZSBvayBidXR0b25cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZWRpdC1vay1idG4nKS5yZW1vdmUoKTtcbiAgICAgICAgLy9zaG93IG1lbnUgYW5kIGV4cGFuZCBidXR0b24gYWdhaW5cbiAgICAgICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBleHBCdG4uc3R5bGUuY29sb3IgPSBcInZhcigtLWNvbG9yMilcIjtcblxuICAgICAgICBzYXZlVGFza0xpc3QoKTtcbiAgICAgICAgc2hvd1Rhc2tzKCk7XG5cbiAgICB9KTtcblxuXG59XG5cbi8vZnVuY3Rpb24gdG8gc3RyaWtlb3V0IGEgdGFza1xuZnVuY3Rpb24gY3Jvc3NvdXRUYXNrKCl7XG4gICAgaGlkZVBvcHVwcygpO1xuICAgIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuc3R5bGUudGV4dERlY29yYXRpb249IFwibGluZS10aHJvdWdoXCI7XG59XG5cbi8vZnVuY3Rpb24gdG8gcmVtb3ZlIGEgdGFza1xuZnVuY3Rpb24gcmVtb3ZlVGFzayhpZCl7XG4gICAgaGlkZVBvcHVwcygpO1xuICAgIGRlbGV0ZVRhc2soZmluZFRhc2soaWQpKTtcbiAgICBzYXZlVGFza0xpc3QoKTtcblxufVxuXG4vL2Z1bmN0aW9uIHRvIHJldHVybiBhIGNvbG9yIGJhc2VkIG9uIHByaW9yaXR5XG5leHBvcnQgZnVuY3Rpb24gY29sb3JQcmlvcml0eShudW0pe1xuICAgIGxldCBjb2xvcnMgPSBbXG4gICAgICAgICdyZWQnLCAgICAgIC8vMFxuICAgICAgICAnb3JhbmdlJywgICAvLzFcbiAgICAgICAgJ3llbGxvdycsICAgLy8yXG4gICAgICAgICdncmVlbicsICAgIC8vM1xuICAgICAgICAnYmx1ZScsICAgICAvLzRcbiAgICAgICAgJ3doaXRlJyAgICAgLy81XG4gICAgXTtcbiAgICByZXR1cm4gY29sb3JzW251bV07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsRHJvcGRvd24oKXtcbiAgICBcblxuICAgIGxldCBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZHJvcERvd24uaWQgPSBcImxhYmVsLWRyb3Bkb3duXCI7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNjsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKVxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdsYWJlbCc7XG4gICAgICAgIGxhYmVsLnN0eWxlLmNvbG9yID0gY29sb3JQcmlvcml0eShpbmRleCk7XG4gICAgICAgIGxhYmVsLmlkID0gYGxhYmVsLSR7aW5kZXh9YFxuXG4gICAgICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB0aGlzVGFzayA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgbmV3TGFiZWwgPSB0aGlzLmlkLnNsaWNlKDYpXG4gICAgICAgICAgICAvL2NoYW5nZSBsYWJlbCB0byBuZXcgbGFiZWwgbnVtYmVyXG4gICAgICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS50ZXh0Q29udGVudCA9IG5ld0xhYmVsO1xuICAgICAgICAgICAgLy9jaGFuZ2UgbGFiZWwgY29sb3IgZm9yIHN0eWxlIHBvaW50cyAgXG4gICAgICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcubGFiZWwnKS5zdHlsZS5jb2xvciA9IGNvbG9yUHJpb3JpdHkobmV3TGFiZWwpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBkcm9wZG93blxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhYmVsLWRyb3Bkb3duJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhcHBlbmRlZFwiKTtcbiAgICAgICAgZHJvcERvd24uYXBwZW5kKGxhYmVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZHJvcERvd247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEJ0bigpe1xuICAgIGxldCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywgJ2V4cGFuZC1idXR0b24nKTtcbiAgICBleHBhbmRCdXR0b24udGV4dENvbnRlbnQgPSAnZXhwYW5kX21vcmUnO1xuICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0aGlzVGFzayA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgLy90b2dnbGUgXCJzaG93IGRlc2NyaXB0aW9uXCJcbiAgICAgICAgdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmRlc2MnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWRlc2MnKVxuICAgICAgICAvL3RvZ2dsZSBpY29uXG4gICAgICAgIHRoaXMudGV4dENvbnRlbnQgPT0gJ2V4cGFuZF9tb3JlJyA/IHRoaXMudGV4dENvbnRlbnQgPSAnZXhwYW5kX2xlc3MnIDogdGhpcy50ZXh0Q29udGVudCA9ICdleHBhbmRfbW9yZSc7IFxuICAgIH0pXG4gICAgcmV0dXJuIGV4cGFuZEJ1dHRvbjtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZVRhc2ssIHNob3dUYXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG4vL0dldCBtYWluIGNvbnRhaW5lciBmcm9tIHBhZ2VcbmxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5cbi8vIE5BViBCQVJcblxuLy9DcmVhdGUgbmF2aWdhdGlvbiBiYXJcbmxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xubmF2QmFyLmlkID0gXCJuYXZcIlxubmF2QmFyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbm5hdkJhci50ZXh0Q29udGVudCA9IFwiTkFWIEJBUlwiO1xuXG4vLyBUQUIgQkFSXG5cbi8vY2VhdGUgdGFiIGJhclxubGV0IHRhYkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50YWJCYXIuaWQgPSBcInRhYi1iYXJcIjtcbi8vdGFiQmFyLnRleHRDb250ZW50ID0gXCJUQUIgQkFSXCI7XG4gICAgLy9jcmVhdGUgbmV3IHRhYiBidXR0b25cbiAgICBsZXQgbmV3VGFiQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG5ld1RhYkJ0bi5pZCA9IFwibmV3LXRhYi1idXR0b25cIjtcbiAgICBuZXdUYWJCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICBuZXdUYWJCdG4udGV4dENvbnRlbnQgPSAnYWRkX2NpcmNsZV9vdXRsaW5lJztcbiAgICB0YWJCYXIuYXBwZW5kKG5ld1RhYkJ0bik7XG4gICAgLy9naXZlIG5ldyB0YWIgYnVzc29uIGZ1bmN0aW9uYWx0eVxuICAgIG5ld1RhYkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbmV3VGFiUHJvbXB0KTtcbiAgICBmdW5jdGlvbiBuZXdUYWJQcm9tcHQoKXtcbiAgICAgICAgbGV0IG5ld1RhYiA9IHByb21wdChcIk5ldyB0YWIgbmFtZTpcIik7XG4gICAgICAgIGFkZFRhYihuZXdUYWIpO1xuICAgIH1cblxuYWRkVGFiKFwibWFpblwiKTtcbmFkZFRhYihcInNlY29uZFwiKTtcbmFkZFRhYihcInRoaXJkXCIpO1xubmF2QmFyLmFwcGVuZCh0YWJCYXIpO1xuXG4vL2Z1bmN0aW9uIHRvIGFkZCB0YWIgdG8gTmF2YmFyXG5cbmZ1bmN0aW9uIGFkZFRhYihuYW1lKXtcbiAgICBsZXQgbmV3VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUYWIuY2xhc3NOYW1lID0gXCJ0YWJcIjtcbiAgICBuZXdUYWIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5ld1RhYi5zdHlsZS5vcmRlciA9IFwiLTFcIjtcbiAgICBuZXdUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRhYkNsaWNrKTtcbiAgICB0YWJCYXIuYXBwZW5kKG5ld1RhYik7XG59O1xuXG4vL2FkZCBmdW5jdGlvbmFsaXR5IHRvIHRhYiBiYXJcbmxldCBjdXJyZW50VGFiID0gXCJtYWluXCI7XG5cbmZ1bmN0aW9uIHRhYkNsaWNrKCl7XG5cbiAgICBjdXJyZW50VGFiID0gdGhpcy50ZXh0Q29udGVudDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiXCIpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcInB1cnBsZVwiO1xuICAgIH0pO1xuICAgIHRoaXMuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIHNob3dUYXNrcygpO1xuICAgIFxuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFiKCl7XG4gICAgcmV0dXJuIGN1cnJlbnRUYWI7XG59XG5cbi8vIFRJVExFIEJBUiAvLy9cblxuLy9jcmVhdGUgdGl0bGUgYmFyXG5sZXQgdGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudGl0bGVCYXIuaWQgPSAndGl0bGUtYmFyJztcbmxldCB0aXRsZXMgPSBjcmVhdGVUYXNrKCdUYXNrJywgJ0Rlc2NyaXB0aW9uJywgJ0R1ZSBkYXRlJywgJ1ByaW9yaXR5Jywnbm9uZScpO1xuZGVsZXRlIHRpdGxlcy5kZXNjO1xuXG5cbi8vdGl0bGUgYmFyIHRhYiBtZW51IGJ1dHRvblxubGV0IHRhYk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnRhYk1lbnUuY2xhc3NOYW1lID0gXCJ0aXRsZS1pdGVtXCI7XG5sZXQgdGFiTWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG50YWJNZW51SWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xudGFiTWVudUljb24udGV4dENvbnRlbnQgPSAnbWVudSc7XG50YWJNZW51LmFwcGVuZCh0YWJNZW51SWNvbik7XG50aXRsZUJhci5hcHBlbmQodGFiTWVudSk7XG5cbmZvciAoY29uc3QgcHJvcCBpbiB0aXRsZXMpIHtcbiAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGl0bGVzLCBwcm9wKSkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaXRlbVwiLCBwcm9wKVxuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSB0aXRsZXNbcHJvcF1cbiAgICAgICAgdGl0bGVCYXIuYXBwZW5kKGRpdik7XG4gICAgfVxufVxuXG4vL2NoYW5nZSBuYW1lIHRvIGljb25cbmxldCBuYW1lID0gdGl0bGVCYXIucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbm5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xubGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcInRpdGxlXCI7XG50aXRsZS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xubmFtZS5hcHBlbmQodGl0bGUpO1xuXG4vL2NoYW5nZSBkdWUgZGF0ZSBpY29uXG5sZXQgZHVlID0gdGl0bGVCYXIucXVlcnlTZWxlY3RvcignLmR1ZScpO1xuZHVlLnRleHRDb250ZW50ID0gXCJcIjtcbmxldCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmV2ZW50LnRleHRDb250ZW50ID0gXCJldmVudFwiO1xuZXZlbnQuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbmR1ZS5hcHBlbmQoZXZlbnQpO1xuXG4vL2FkZCBsYWJlbCBpY29uXG5sZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG5sYWJlbC50ZXh0Q29udGVudCA9IFwibGFiZWxcIjtcbmxhYmVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG50aXRsZUJhci5hcHBlbmQobGFiZWwpO1xuXG5uYXZCYXIuYXBwZW5kKHRpdGxlQmFyKTtcblxuXG5cblxuLy9BZGQgTmF2IHRvIHRvcCBvZiBwYWdlXG5leHBvcnQgZnVuY3Rpb24gYWRkTmF2KCl7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobmF2QmFyKTtcbn1cblxuIiwiaW1wb3J0IHsgZ2V0VGFiIH0gZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IHsgdGFza01lbnVCdG4sIGV4cGFuZEJ0biwgZWRpdFRhc2ssIGNvbG9yUHJpb3JpdHl9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNvbnRhaW5lcicpO1xuXG4vL2V4dGVuZCBmdW5jdGlvbmFsaXR5IG9mIGxvY2FsIHN0b3JhZ2UgdG8gYWxsb3cgZm9yIGFycmF5cyBhbmQgb2JqZWN0c1xuU3RvcmFnZS5wcm90b3R5cGUuc2V0T2JqID0gZnVuY3Rpb24oa2V5LCBvYmopIHtcbiAgICByZXR1cm4gdGhpcy5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSlcbn1cblN0b3JhZ2UucHJvdG90eXBlLmdldE9iaiA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0SXRlbShrZXkpKVxufVxuXG5sZXQgdGFza0xpc3QgPSBbXTtcbi8vZnVuY3Rpb24gdG8gb3ZlcndyaXRlIHRhc2tMaXN0XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUYXNrTGlzdChuZXdUYXNrTGlzdCl7XG4gICAgdGFza0xpc3QgPSBuZXdUYXNrTGlzdDtcbiAgICAvL3Njb25zb2xlLmxvZyh0YXNrTGlzdCk7XG4gICAgc2hvd1Rhc2tzKCk7XG59XG5cbi8vZnVuY3Rpb24gdG8gY2hhbmdlIHRhc2tcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVRhc2soaW5kZXgscHJvcCx2YWx1ZSl7XG4gICAgdGFza0xpc3RbaW5kZXhdW3Byb3BdID0gdmFsdWU7XG59O1xuXG4vL2Z1bmN0aW9uIHRvIGNhbGwgdG8gbWFrZSB0YXNrc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSxkZXNjLGR1ZSxwcmlvcml0eSxpblRhYil7XG4gICAgcmV0dXJue1xuICAgICAgbmFtZTpuYW1lLFxuICAgICAgZGVzYzpkZXNjLFxuICAgICAgZHVlOmR1ZSxcbiAgICAgIHByaW9yaXR5OnByaW9yaXR5LFxuICAgICAgaW5UYWI6aW5UYWJcbiAgICB9XG4gIH1cbiAgXG4vL2Z1bmN0aW9uIHRvIGFkZCB0aGUgdGFzayB0byB0aGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sgKHRhc2spe1xuXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICBzYXZlVGFza0xpc3QoKTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gd3JpdGUgdGFza2xpc3QgdG8gbG9jYWwgc3RvcmFnZVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tMaXN0KCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldE9iaigndGFza0xpc3QnLCB0YXNrTGlzdCk7XG59XG5cblxuXG4vL2Z1bmN0aW9uIHRvIHNob3cgdGFza2xpc3QgaW4gRE9NXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoKXtcbmNsZWFyVGFza3MoKTtcbi8vaSB0byB0cmFjayB3aGljaCBpbmRleCBvZiB0YXNrTGlzdCBjb2RlIGlzIGNoZWNraW5nXG52YXIgaT0wXG5cbi8vbG9vayB0aHJvdWdoIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIHRyYXNrbGlzdFxudGFza0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgIC8vIGlmIHRoZSBjdXJyZW50IHRhc2sncyAnaW50YWInIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnQgdGFiXG4gICAgaWYoZWxlbWVudC5pblRhYiA9PSBnZXRUYWIoKSl7XG5cbiAgICAgICAgLy9jcmVhdGVzIGEgZGl2IGZvciB0aGUgdGFza1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2suY2xhc3NOYW1lID0gJ3Rhc2snOyAgICBcblxuICAgICAgICAvL2FwcGVuZCBleHBhbmQgYnV0dG9uXG4gICAgICAgIHRhc2suYXBwZW5kKGV4cGFuZEJ0bigpKTtcblxuICAgICAgICAvL2xvb3BzIHRocm91Z2ggZWFjaCBlbGVtZW50IGluIHRoZSBvYmplY3QgdG8gY3JlYXRlIGFuIGlucHV0LFxuICAgICAgICAvLyBhc3NpZ24gYSBjbGFzc25hbWUsIHZhbHVlLCBhbmQgYXBwZW5kIGl0IHRvIHRoZSB0YXNrXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZWxlbWVudCwgcHJvcCkpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScscHJvcCk7XG4gICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICB0YXNrLmFwcGVuZChkaXYpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLy9hc3NpZ24gZWFjaCB0YXNrIGFuIGlkXG4gICAgICAgIHRhc2suaWQgPSBgdGFzay0ke2l9YDtcblxuICAgICAgICAvL2FkZCBhIGxhYmVsXG5cblxuICAgICAgICAgICAgLy9jb2xvciB0aGUgcHJpb3JpdHlcbiAgICAgICAgbGV0IGNvbG9yID0gY29sb3JQcmlvcml0eShlbGVtZW50LnByaW9yaXR5KTtcbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycsJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJsYWJlbFwiO1xuICAgICAgICBsYWJlbC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICBjb25zdCBsYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGxhYmVsRGl2LmNsYXNzTGlzdC5hZGQoJ2xhYmVsLWRpdicpO1xuICAgICAgICBsYWJlbERpdi5hcHBlbmQobGFiZWwpO1xuICAgICAgICB0YXNrLmFwcGVuZChsYWJlbERpdik7XG5cbiAgICAgICAgLy9hZGQgbWVudSBidXR0b24gdG8gdGFza1xuICAgICAgICB0YXNrLmFwcGVuZCh0YXNrTWVudUJ0bihgdGFzay0ke2l9YCkpO1xuXG4gICAgICAgIFxuICAgICAgICAvL3ByaW9yaXR5LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIC8vcHJpb3JpdHkuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTsgY29sb3I6ICR7Y29sb3J9YFxuXG4gICAgICAgIC8vYWRkcyB0aGUgdGFzayBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYWluIGNvbnRhaW5lclxuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0YXNrKTtcbiAgICB9XG4gICAgXG4gICAgaSsrXG59KTtcblxuY3JlYXRlTmV3VGFza0J0bigpO1xufTtcblxuLy9mdW5jdGlvbiB0byBhZGQgYSBuZXcgdGFzayBcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2soKXtcbiAgICAvL2NyZWF0ZSBibGFuayB0YXNrIGFuZCB0aGVuIGVkaXQgaXRcbiAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2soJycsJycsJycsJycsZ2V0VGFiKCkpO1xuICAgIGFkZFRhc2sobmV3VGFzayk7XG4gICAgc2hvd1Rhc2tzKCk7XG4gICAgLy9maW5kIHRoZSBuZXdlc3QsIGJsYW5rIHRhc2tcbiAgICAvL2NvbnNvbGUubG9nKHRhc2tMaXN0Lmxlbmd0aC0xKTtcbiAgICBlZGl0VGFzayhgdGFzay0ke3Rhc2tMaXN0Lmxlbmd0aC0xfWApO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGNsZWFyIGFsbCB0YXNrc1xuZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xuICAgIC8vY29uc29sZS5sb2coXCJjbGVhciBzdGFydGVkXCIpO1xuICAgIGNvbnN0IGFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4geyAgICAgICAgXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgbGV0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLWJ0blwiKVxuICAgIGlmIChuZXdUYXNrQnRuICE9IG51bGwpe1xuICAgIG5ld1Rhc2tCdG4ucmVtb3ZlKCk7XG4gICAgfTtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2xlYXIgZmluaXNoZWRcIik7XG59O1xuXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBhZGQgYmxhbmsgdGFzayBidXR0b25cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrQnRuKCl7XG4gICAgbGV0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgIG5ld1Rhc2tCdG4uaWQgPSBcIm5ldy10YXNrLWJ0blwiO1xuICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG5ld1Rhc2spOyBcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChuZXdUYXNrQnRuKTtcbn1cblxuLy9mdW5jdGlvbiB0byBmaW5kIGEgdGFzayBieSBpdHMgaWRcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUYXNrKGlkKXtcbiAgICBsZXQgaW5kZXggPSBpZC5zbGljZSg1KTtcbiAgICByZXR1cm4gaW5kZXhcbn1cblxuLy9mdW5jdGlvbiB0byByZW1vdmUgYSB0YXNrXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKGluZGV4KSB7XG4gICAgdGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzaG93VGFza3MoKTtcbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZm9ybWF0LCBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgYWRkTmF2IH0gZnJvbSAnLi9uYXYuanMnO1xuaW1wb3J0IHsgc2V0VGFza0xpc3QsIGNyZWF0ZVRhc2ssIG5ld1Rhc2ssIGNyZWF0ZU5ld1Rhc2tCdG4sIHNob3dUYXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG4vL2xldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5cbmFkZE5hdigpO1xuLy9sb2NhbFN0b3JhZ2UuY2xlYXIoKVxuLy9hZGRUYXNrKGNyZWF0ZVRhc2soXCJleGFtcGxlMVwiLFwiZGVzY3JpcHRpb24xXCIsXCIxLzEvMjAyMVwiLFwiMVwiLFwibWFpblwiKSk7XG4vL2FkZFRhc2soY3JlYXRlVGFzayhcImV4YW1wbGUyXCIsXCJkZXNjcmlwdGlvbjJcIixcIjEvMi8yMDIxXCIsXCIyXCIsXCJtYWluXCIpKTtcbnNob3dUYXNrcygpO1xuXG5cbi8vZnVuY3Rpb24gdG8gcmVhZCBsb2NhbCBzdG9yYWdlLCBcbi8vc2V0IGVtcHR5IGFycmF5IGlmIGVtcHR5Li4uIHNldCBzdG9yZWQgdGFza2xpc3Qgb3RoZXJ3aXNlXG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSkge1xuICBjb25zb2xlLmxvZyhcImxvY2FsIHN0b3JhZ2UgaXMgZW1wdHlcIik7XG59IGVsc2Uge1xuICBzZXRUYXNrTGlzdChsb2NhbFN0b3JhZ2UuZ2V0T2JqKCd0YXNrTGlzdCcpKTtcbn1cblxuLy9BVFRSSUJVVEVTXG5cbi8vIFRocmVlIERvdCBieSB3YWh5YWt1cCBmcm9tIE5vdW5Qcm9qZWN0LmNvbVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9