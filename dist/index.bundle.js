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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color1: rgb(150, 192, 139);\n  --color2: rgba(70, 29, 66, 0.85);\n  --color3: rgb(228, 209, 228);\n}\n\n#main-container {\n  color: var(--color2);\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  border: none;\n}\n\n#nav {\n  border-bottom: 0;\n  width: 80vw;\n}\n\n#title-bar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-radius: 15px 50px 0px 0px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 0px;\n  height: 40px;\n  background-color: var(--color3);\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.title-item {\n  background-color: var(--color3);\n  color: var(--color2);\n  border: none;\n  border-radius: 10px;\n}\n\n#tab-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#new-tab-button {\n  border-radius: 1vw;\n  border: 0;\n  color: var(--color2);\n  height: 3vw;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 5px;\n}\n\n.tab {\n  border: solid var(--color2) 2px;\n  border-radius: 30px 30px 5px 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n  height: 25px;\n  line-height: 30px;\n  width: 50px;\n  margin: 0;\n  margin-right: 5px;\n  text-align: center;\n}\n\n.task {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color: var(--color3);\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.task-item {\n  border-radius: 5px;\n  padding: 5px;\n  color: var(--color2);\n  background-color: var(--color3);\n  margin: 1px;\n  border: solid var(--color3) 1px;\n}\n\n.inTab {\n  display: none;\n}\n\n.strike {\n  display: none;\n}\n\n.name {\n  text-align: center;\n}\n\n.desc {\n  display: none;\n  text-align: center;\n  width: 1fr;\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2/4;\n  word-wrap: break-word;\n  background-color: var(--color3);\n}\n\n.show-desc {\n  display: inline;\n}\n\n.editing {\n  border: solid var(--color2) 1px;\n}\n\n.due {\n  text-align: center;\n}\n\n.priority {\n  display: none;\n  text-align: center;\n}\n\n.task-menu-button {\n  border: none;\n  border-radius: 1vw;\n  background-color: var(--color3);\n  color: var(--color2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.task-menu-button img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#new-task-btn {\n  height: 30px;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  border-radius: 0px 0px 15px 50px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 40px;\n}\n\n.task-menu-popup {\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n  background-color: var(--color3);\n  position: absolute;\n  display: none;\n}\n\n.task-menu-popup-btn {\n  background-color: var(--color3);\n  color: var(--color2);\n  border: none;\n  border-radius: 10px;\n}\n\n#label-dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAAS;EACT,gCAAS;EACT,4BAAS;ACCX;;ADGA;EAEE,oBAAoB;EACpB,iBAAY;EAEZ,aAAA;EACA,wBAAc;MACd,qBAAY;UACb,uBAAA;ECFC,cAAc;EDIhB,YAAI;ACFJ;;AAEA;EACE,gBAAgB;EDOlB,WAAU;ACLV;;AAEA;EDQE,iBAAe;EACf,aAAY;EACZ,sCAAiB;MACjB,2CAAkB;EAClB,+BAAgB;EAChB,gCAAY;EACZ,YAAA;EACA,iBAAY;EACZ,kBAAe;EAGhB,gBAAA;ECRC,YAAY;EDUd,+BAAW;EACT,aAAA;EACA,0BAAoB;MACpB,qBAAY;ACRd;;AAEA;EDYA,+BAAQ;EAEN,oBAAY;EACb,YAAA;ECXC,mBAAmB;ADYrB;;ACTA;EDaE,oBAAoB;EACpB,oBAAW;EAEX,aAAY;ACZd;;AAEA;EDaA,kBAAI;EACF,SAAO;EACP,oBAAe;EACf,WAAA;EACA,2BAAiB;MACjB,0BAAY;MACZ,kBAAiB;EACjB,WAAW;ACXb;;AAEA;EDaC,+BAAA;ECXC,gCAAgC;EDelC,mBAAK;EACH,iBAAY;EACZ,YAAA;EACA,iBAAc;EACd,WAAU;EACV,SAAS;EACT,iBAAiB;EACjB,kBAAkB;ACbpB;;AAEA;EACE,iBAAiB;EDgBnB,aAAU;EAER,sCAAkB;MAClB,2CAAY;EACZ,+BAAoB;EACpB,aAAA;EACA,YAAW;EACX,iBAAc;EAEf,kBAAA;EChBC,+BAA+B;EDkBjC,0BAAM;MACJ,qBAAY;AChBd;;ADmBA;EACE,kBAAY;EACb,YAAA;EChBC,oBAAoB;EDkBtB,+BAAK;EACH,WAAU;EAEX,+BAAA;ACjBD;;AAEA;EDkBE,aAAY;AChBd;;AAEA;EDmBE,aAAW;ACjBb;;AAEA;EDqBC,kBAAU;ACnBX;;AAEA;EDqBC,aAAQ;EAEP,kBAAc;EAEd,UAAA;ECrBA,eAAe;MDuBb,iBAAA;EACF,kBAAkB;EAEnB,uBAAA;ECtBC,gBAAgB;EDuBlB,qBAAS;EACP,+BAAY;ACrBd;;AAEA;EDyBA,eAAiB;ACvBjB;;AAEA;ED2BE,+BAAoB;ACzBtB;;AAEA;EDiBA,kBASE;ACxBF;;AAEA;ED6BI,aAAA;EACA,kBAAa;AC3BjB;;AD+BA;EACE,YAAY;EACZ,kBAAkB;EAClB,+BAA+B;EAC/B,oBAAa;EACb,oBAAe;EACf,oBAAY;EACZ,aAAY;AC5Bd;;AAEA;EACE,oBAAoB;KD8BtB,iBAAgB;EACd,YAAO;EACP,oBAAmB;EACnB,oBAAkB;EAIlB,aAAS;EACT,wBAAY;MACb,qBAAA;UC/BS,uBAAuB;EDiCjC,yBAAoB;MAClB,sBAAkB;UACX,mBAAa;AC/BtB;;AAEA;EACE,YAAY;EDiCd,+BAAe;EACb,+BAAa;EACb,aAAA;EACA,gCAAkB;EAClB,YAAA;EACA,iBAAa;EACb,kBAAe;EAChB,YAAA;AC/BD;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,+BAA+B;EAC/B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,kBAAkB;EAClB,+BAA+B;EAC/B,+BAA+B;EAC/B,mBAAmB;AACrB;AACA,oCAAoC","sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxpREFBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLEVBQUUsbURBQVc7QUFDYjs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2VkaXRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yMTogcmdiKDE1MCwgMTkyLCAxMzkpO1xcbiAgLS1jb2xvcjI6IHJnYmEoNzAsIDI5LCA2NiwgMC44NSk7XFxuICAtLWNvbG9yMzogcmdiKDIyOCwgMjA5LCAyMjgpO1xcbn1cXG5cXG4jbWFpbi1jb250YWluZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jbmF2IHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuI3RpdGxlLWJhciB7XFxuICBkaXNwbGF5OiAtbXMtZ3JpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZ3JpZC1jb2x1bW5zOiAzdncgMWZyIC41ZnIgNXZ3IDV2dztcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDN2dyAxZnIgLjVmciA1dncgNXZ3O1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggNTBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0YWItYmFyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmV3LXRhYi1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBoZWlnaHQ6IDN2dztcXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhYiB7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDVweCA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDN2dyAxZnIgLjVmciA1dncgNXZ3O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3Z3IDFmciAuNWZyIDV2dyA1dnc7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBtYXJnaW46IDFweDtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IzKSAxcHg7XFxufVxcblxcbi5pblRhYiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uYW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRlc2Mge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxZnI7XFxuICAtbXMtZ3JpZC1yb3c6IDI7XFxuICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAtbXMtZ3JpZC1jb2x1bW46IDI7XFxuICAtbXMtZ3JpZC1jb2x1bW4tc3BhbjogMjtcXG4gIGdyaWQtY29sdW1uOiAyLzQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbn1cXG5cXG4uc2hvdy1kZXNjIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmVkaXRpbmcge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDFweDtcXG59XFxuXFxuLmR1ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbWVudS1idXR0b24gaW1nIHtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRhc2stYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCA1MHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi50YXNrLW1lbnUtcG9wdXAge1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stbWVudS1wb3B1cC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2xhYmVsLWRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBUztFQUNULGdDQUFTO0VBQ1QsNEJBQVM7QUNDWDs7QURHQTtFQUVFLG9CQUFvQjtFQUNwQixpQkFBWTtFQUVaLGFBQUE7RUFDQSx3QkFBYztNQUNkLHFCQUFZO1VBQ2IsdUJBQUE7RUNGQyxjQUFjO0VESWhCLFlBQUk7QUNGSjs7QUFFQTtFQUNFLGdCQUFnQjtFRE9sQixXQUFVO0FDTFY7O0FBRUE7RURRRSxpQkFBZTtFQUNmLGFBQVk7RUFDWixzQ0FBaUI7TUFDakIsMkNBQWtCO0VBQ2xCLCtCQUFnQjtFQUNoQixnQ0FBWTtFQUNaLFlBQUE7RUFDQSxpQkFBWTtFQUNaLGtCQUFlO0VBR2hCLGdCQUFBO0VDUkMsWUFBWTtFRFVkLCtCQUFXO0VBQ1QsYUFBQTtFQUNBLDBCQUFvQjtNQUNwQixxQkFBWTtBQ1JkOztBQUVBO0VEWUEsK0JBQVE7RUFFTixvQkFBWTtFQUNiLFlBQUE7RUNYQyxtQkFBbUI7QURZckI7O0FDVEE7RURhRSxvQkFBb0I7RUFDcEIsb0JBQVc7RUFFWCxhQUFZO0FDWmQ7O0FBRUE7RURhQSxrQkFBSTtFQUNGLFNBQU87RUFDUCxvQkFBZTtFQUNmLFdBQUE7RUFDQSwyQkFBaUI7TUFDakIsMEJBQVk7TUFDWixrQkFBaUI7RUFDakIsV0FBVztBQ1hiOztBQUVBO0VEYUMsK0JBQUE7RUNYQyxnQ0FBZ0M7RURlbEMsbUJBQUs7RUFDSCxpQkFBWTtFQUNaLFlBQUE7RUFDQSxpQkFBYztFQUNkLFdBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQ2JwQjs7QUFFQTtFQUNFLGlCQUFpQjtFRGdCbkIsYUFBVTtFQUVSLHNDQUFrQjtNQUNsQiwyQ0FBWTtFQUNaLCtCQUFvQjtFQUNwQixhQUFBO0VBQ0EsWUFBVztFQUNYLGlCQUFjO0VBRWYsa0JBQUE7RUNoQkMsK0JBQStCO0VEa0JqQywwQkFBTTtNQUNKLHFCQUFZO0FDaEJkOztBRG1CQTtFQUNFLGtCQUFZO0VBQ2IsWUFBQTtFQ2hCQyxvQkFBb0I7RURrQnRCLCtCQUFLO0VBQ0gsV0FBVTtFQUVYLCtCQUFBO0FDakJEOztBQUVBO0VEa0JFLGFBQVk7QUNoQmQ7O0FBRUE7RURtQkUsYUFBVztBQ2pCYjs7QUFFQTtFRHFCQyxrQkFBVTtBQ25CWDs7QUFFQTtFRHFCQyxhQUFRO0VBRVAsa0JBQWM7RUFFZCxVQUFBO0VDckJBLGVBQWU7TUR1QmIsaUJBQUE7RUFDRixrQkFBa0I7RUFFbkIsdUJBQUE7RUN0QkMsZ0JBQWdCO0VEdUJsQixxQkFBUztFQUNQLCtCQUFZO0FDckJkOztBQUVBO0VEeUJBLGVBQWlCO0FDdkJqQjs7QUFFQTtFRDJCRSwrQkFBb0I7QUN6QnRCOztBQUVBO0VEaUJBLGtCQVNFO0FDeEJGOztBQUVBO0VENkJJLGFBQUE7RUFDQSxrQkFBYTtBQzNCakI7O0FEK0JBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isb0JBQWE7RUFDYixvQkFBZTtFQUNmLG9CQUFZO0VBQ1osYUFBWTtBQzVCZDs7QUFFQTtFQUNFLG9CQUFvQjtLRDhCdEIsaUJBQWdCO0VBQ2QsWUFBTztFQUNQLG9CQUFtQjtFQUNuQixvQkFBa0I7RUFJbEIsYUFBUztFQUNULHdCQUFZO01BQ2IscUJBQUE7VUMvQlMsdUJBQXVCO0VEaUNqQyx5QkFBb0I7TUFDbEIsc0JBQWtCO1VBQ1gsbUJBQWE7QUMvQnRCOztBQUVBO0VBQ0UsWUFBWTtFRGlDZCwrQkFBZTtFQUNiLCtCQUFhO0VBQ2IsYUFBQTtFQUNBLGdDQUFrQjtFQUNsQixZQUFBO0VBQ0EsaUJBQWE7RUFDYixrQkFBZTtFQUNoQixZQUFBO0FDL0JEOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw2QkFBNkI7TUFDekIsMEJBQTBCO1VBQ3RCLHNCQUFzQjtFQUM5QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7QUFDQSxvQ0FBb0NcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRocmVlRG90cyBmcm9tICcuL25vdW4tdGhyZWUtZG90LTQyODc2NTcuc3ZnJztcbmltcG9ydCB7IGNoYW5nZVRhc2ssIGZpbmRUYXNrLCBkZWxldGVUYXNrLCBzYXZlVGFza0xpc3QsIHNob3dUYXNrcywgZ2V0VGFzayB9IGZyb20gJy4vdGFza3MnO1xuXG4vL2NyZWF0ZSBhbmQgcmV0dXJuIHRoZSBlZGl0IHRhc2sgYnV0dG9uXG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrTWVudUJ0bih0YXNrSWQpe1xuICAgIGNvbnN0IHRhc2tNZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza01lbnVEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LWJ1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tNZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza01lbnVCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LWJ1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgbWVudUljb24udGV4dENvbnRlbnQgID0gJ21lbnUnO1xuICAgIHRhc2tNZW51QnRuLmFwcGVuZChtZW51SWNvbik7XG5cbiAgICAvL2NyZWF0ZSB0YXNrIHBvcHVwXG4gICAgbGV0IGVkaXRUYXNrUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0VGFza1BvcHVwLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWVudS1wb3B1cCcpXG5cbiAgICAvL2FkZCBtZW51IGJ1dHRvbnMgdG8gdGhlIHBvcHVwXG5cbiAgICAvL0VESVRcbiAgICBsZXQgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e2VkaXRUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1tZW51LXBvcHVwLWJ0bicpO1xuICAgIGxldCB0YXNrRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgdGFza0VkaXRJY29uLnRleHRDb250ZW50ID0gXCJlZGl0XCI7XG4gICAgdGFza0VkaXRJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgdGFza0VkaXRCdG4uYXBwZW5kKHRhc2tFZGl0SWNvbik7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza0VkaXRCdG4pXG5cbiAgICAvL1NURUlLRVRIUk9VR0hcbiAgICBsZXQgdGFza0Nyb3NzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0Nyb3NzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2Nyb3Nzb3V0VGFzayh0YXNrSWQpO30pO1xuICAgIHRhc2tDcm9zc0J0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAtYnRuJyk7XG4gICAgbGV0IHRhc2tDcm9zc0ljb24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIHRhc2tDcm9zc0ljb24uY2xhc3NOYW1lID0gJ21hdGVyaWFsLWljb25zJztcbiAgICB0YXNrQ3Jvc3NJY29uLnRleHRDb250ZW50ID0gJ3N0cmlrZXRocm91Z2hfcyc7XG4gICAgdGFza0Nyb3NzQnRuLmFwcGVuZCh0YXNrQ3Jvc3NJY29uKTtcbiAgICBlZGl0VGFza1BvcHVwLmFwcGVuZCh0YXNrQ3Jvc3NCdG4pXG5cbiAgICAvL1JFTU9WRVxuICAgIGxldCB0YXNrUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza1JlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW1vdmVUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAtYnRuJyk7XG4gICAgbGV0IHRhc2tSZW1vdmVJY29uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICB0YXNrUmVtb3ZlSWNvbi5jbGFzc05hbWUgPSAnbWF0ZXJpYWwtaWNvbnMnO1xuICAgIHRhc2tSZW1vdmVJY29uLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgdGFza1JlbW92ZUJ0bi5hcHBlbmQodGFza1JlbW92ZUljb24pO1xuICAgIGVkaXRUYXNrUG9wdXAuYXBwZW5kKHRhc2tSZW1vdmVCdG4pXG5cbiAgICAvL2FwcGVuZCB0aGUgcG9wdXAgdG8gdGhlIG1lbnUgZGl2XG4gICAgdGFza01lbnVEaXYuYXBwZW5kKGVkaXRUYXNrUG9wdXApO1xuXG4gICAgLy9hZGQgZXZlbiBsaXN0ZW5lciB0byBidXR0b24gdG8gc2hvdyBwb3B1cFxuICAgIHRhc2tNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZWRpdFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgfSk7XG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byBoaWRlIHBvcHVwIG9uIG1vdXNlbGVhdmVcbiAgICBlZGl0VGFza1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xuICAgICAgICBlZGl0VGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgICAvL2FwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBkaXZcbiAgICB0YXNrTWVudURpdi5hcHBlbmQodGFza01lbnVCdG4pO1xuICAgIHJldHVybiB0YXNrTWVudURpdjtcbiAgICB9O1xuXG5cblxuLy9mdW5jdGlvbiB0byBoaWRlIGFsbCAodGFzayBtZW51KSBwb3B1cHNcbmZ1bmN0aW9uIGhpZGVQb3B1cHMoKXtcbiAgICAvL2NvbnNvbGUubG9nKFwiaGlkZSBwb3B1cHNcIik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1tZW51LXBvcHVwJykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG59XG5cbi8vZnVuY3Rpb24gdG8gZWRpdCBhIHRhc2tcblxuZnVuY3Rpb24gZWRpdFRhc2sodGFza0lkKXtcbiAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgIGxldCB0aGlzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJZCk7XG4gICAgLy8gLy9mdW5jdGlvbiB0byByZXNldCBwYWdlIGlmIHVzZXIgY2xpY2tzIG91dHNpZGUgb2YgYm94XG4gICAgLy8vLy8vIGludGVyZmVyZXMgd2l0aCBsYWJlbCBkcm9wZG93blxuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gICAgIC8vIElmIHVzZXIgY2xpY2tzIGluc2lkZSB0aGUgZWxlbWVudCwgZG8gbm90aGluZ1xuICAgIC8vICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYCMke3Rhc2tJZH1gKSkgcmV0dXJuXG4gICAgLy8gICAgIC8vIElmIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGVsZW1lbnQsIGhpZGUgaXQhXG4gICAgLy8gICAgIHNob3dUYXNrcygpO1xuICAgIC8vICAgfSlcblxuICAgIGxldCBpbmRleCA9IGZpbmRUYXNrKHRhc2tJZClcblxuICAgIC8vZ2V0IHRhc2sgZGF0YSBmcm9tIHRhc2tsaXN0XG4gICAgbGV0IHRhc2sgPSBnZXRUYXNrKGluZGV4KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzVGFzayk7XG5cbiAgICAvL3JlcGxhY2UgZGl2cyB3aXRoIGlucHV0IGZpZWxkcyB3aGVyZSBhcHByb3ByaWF0ZVxuXG4gICAgLy9uYW1lXG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnZhbHVlID0gdGFzay5uYW1lO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiVGFza1wiO1xuICAgIG5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nLCAnbmFtZScpO1xuICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykucmVwbGFjZVdpdGgobmFtZUlucHV0KTtcbiAgICAvL2R1ZVxuICAgIGxldCBkdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZTtcbiAgICBkdWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIERhdGVcIjtcbiAgICBkdWVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nLCAnZHVlJyk7XG4gICAgdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmR1ZScpLnJlcGxhY2VXaXRoKGR1ZUlucHV0KTtcbiAgICAvL2Rlc2NyaXB0aW9uXG4gICAgbGV0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY0lucHV0LnZhbHVlID0gdGFzay5kZXNjO1xuICAgIGRlc2NJbnB1dC5wbGFjZWhvbGRlciA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJywnZGVzYycpO1xuICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJykucmVwbGFjZVdpdGgoZGVzY0lucHV0KTtcblxuICAgIC8vc2hvdyBkZXNjcmlwdGlvblxuICAgIGxldCB0aGlzRGVzYyA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjJyk7XG4gICAgdGhpc0Rlc2MuY2xhc3NMaXN0LmFkZCgnc2hvdy1kZXNjJyk7XG5cbiAgICAvL2hpZGUgdGhlIG1lbnUgYnV0dG9uIGFuZCBleHBhbmQgYnV0dG9uXG4gICAgbGV0IG1lbnVCdG4gPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1tZW51LWJ1dHRvbicpO1xuICAgIGxldCBleHBCdG4gPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWJ1dHRvbicpO1xuICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIC8vZXhwQnRuLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1jb2xvcjMpXCI7XG5cbiAgICAvL21ha2UgbGFiZWwgaW50ZXJhY3RpdmVcbiAgICBsZXQgdGhpc0xhYmVsID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG4gICAgbGV0IHRoaXNMYWJlbERpdiA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1kaXYnKTtcbiAgICB0aGlzTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXNMYWJlbERpdi5hcHBlbmQobGFiZWxEcm9wZG93bigpKTtcbiAgICB9KVxuXG4gICAgLy9zYXZlIGNoYW5nZXMgYnV0dG9uXG5cbiAgICAvL2FkZCBcIk9LXCIgYnV0dG9uXG4gICAgbGV0IG9rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG9rQnRuLnRleHRDb250ZW50ID0gXCJkb25lXCI7XG4gICAgb2tCdG4uaWQgPSAndGFzay1lZGl0LW9rLWJ0bic7XG4gICAgb2tCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICB0aGlzVGFzay5hcHBlbmQob2tCdG4pO1xuXG4gICAgLy9hZGQgZnVuY3Rpb24gdG8gb2sgYnV0dG9uIHRvIGRvIHN0dWZmXG4gICAgb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgIC8vc2F2ZSB0aGUgZWRpdGVkIGRhdGEgdG8gdGhlIHRhc2tsaXN0XG5cbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwnbmFtZScsbmFtZUlucHV0LnZhbHVlKTtcbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwnZGVzYycsZGVzY0lucHV0LnZhbHVlKTtcbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwnZHVlJyxkdWVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ3ByaW9yaXR5Jyx0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgLy9yZW1vdmUgc2hvdy1kZXNjIGNsYXNzIFxuICAgICAgICB0aGlzRGVzYy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LWRlc2MnKTtcblxuICAgICAgICAvL3JlbW92ZSB0aGUgb2sgYnV0dG9uXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWVkaXQtb2stYnRuJykucmVtb3ZlKCk7XG4gICAgICAgIC8vc2hvdyBtZW51IGFuZCBleHBhbmQgYnV0dG9uIGFnYWluXG4gICAgICAgIG1lbnVCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgLy9leHBCdG4uc3R5bGUuY29sb3IgPSBcInZhcigtLWNvbG9yMilcIjtcblxuICAgICAgICAvL3NhdmUgdGFzayBsaXN0IHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgc2F2ZVRhc2tMaXN0KCk7XG4gICAgICAgIFxuICAgICAgICBzaG93VGFza3MoKTtcblxuICAgIH0pO1xuXG5cbn1cblxuLy9mdW5jdGlvbiB0byBzdHJpa2VvdXQgYSB0YXNrXG5mdW5jdGlvbiBjcm9zc291dFRhc2soaWQpe1xuXG4gICAgbGV0IGluZGV4ID0gZmluZFRhc2soaWQpO1xuICAgIGxldCB0YXNrID0gZ2V0VGFzayhpbmRleCk7XG5cbiAgICBjaGFuZ2VUYXNrKGluZGV4LCdzdHJpa2UnLHRhc2suc3RyaWtlID8gZmFsc2UgOiB0cnVlKTtcblxuICAgIGhpZGVQb3B1cHMoKTtcbiAgICBzYXZlVGFza0xpc3QoKTtcbiAgICBzaG93VGFza3MoKTtcblxufVxuXG4vL2Z1bmN0aW9uIHRvIHJlbW92ZSBhIHRhc2tcbmZ1bmN0aW9uIHJlbW92ZVRhc2soaWQpe1xuICAgIGhpZGVQb3B1cHMoKTtcbiAgICAvLy8gc2hvdWxkIHR1cm4gYWxsIHRleHQgcmVkLCBcbiAgICAvL2NyZWF0ZSBhIG5ldyByZWQgZGVsZXRlIGJ1dHRvbiB3aGVyZSB0aGUgZGVzYyBkcm9wZG93biBpc1xuICAgIC8vY2hhbmdlIHRoZSBtZW51IGJ1dHRvbiB0byBhIGNhbmNlbCBidXR0b25cbiAgICBcbiAgICAvL2lmIHlvdSBjbGljayBvbiByZWQgZGVsZXRlO1xuICAgIGRlbGV0ZVRhc2soZmluZFRhc2soaWQpKTtcbiAgICBzYXZlVGFza0xpc3QoKTtcbiAgICBzaG93VGFza3MoKTtcbiAgICAvL2lmIHlvdSBjbGljayBvbiBjYW5jZWw7XG4gICAgLy8gICAgICAgIHNob3dUYXNrcygpO1xuXG59XG5cbi8vZnVuY3Rpb24gdG8gcmV0dXJuIGEgY29sb3IgYmFzZWQgb24gcHJpb3JpdHlcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclByaW9yaXR5KG51bSl7XG4gICAgbGV0IGNvbG9ycyA9IFtcbiAgICAgICAgJ3JlZCcsICAgICAgLy8wXG4gICAgICAgICdvcmFuZ2UnLCAgIC8vMVxuICAgICAgICAneWVsbG93JywgICAvLzJcbiAgICAgICAgJ2dyZWVuJywgICAgLy8zXG4gICAgICAgICdibHVlJywgICAgIC8vNFxuICAgICAgICAnd2hpdGUnICAgICAvLzVcbiAgICBdO1xuICAgIHJldHVybiBjb2xvcnNbbnVtXTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxEcm9wZG93bigpe1xuICAgIFxuXG4gICAgbGV0IGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkcm9wRG93bi5pZCA9IFwibGFiZWwtZHJvcGRvd25cIjtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA2OyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ2xhYmVsJztcbiAgICAgICAgbGFiZWwuc3R5bGUuY29sb3IgPSBjb2xvclByaW9yaXR5KGluZGV4KTtcbiAgICAgICAgbGFiZWwuaWQgPSBgbGFiZWwtJHtpbmRleH1gXG5cbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHRoaXNUYXNrID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBuZXdMYWJlbCA9IHRoaXMuaWQuc2xpY2UoNilcbiAgICAgICAgICAgIC8vY2hhbmdlIGxhYmVsIHRvIG5ldyBsYWJlbCBudW1iZXJcbiAgICAgICAgICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnRleHRDb250ZW50ID0gbmV3TGFiZWw7XG4gICAgICAgICAgICAvL2NoYW5nZSBsYWJlbCBjb2xvciBmb3Igc3R5bGUgcG9pbnRzICBcbiAgICAgICAgICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpLnN0eWxlLmNvbG9yID0gY29sb3JQcmlvcml0eShuZXdMYWJlbCk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGRyb3Bkb3duXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFiZWwtZHJvcGRvd24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcGVuZGVkXCIpO1xuICAgICAgICBkcm9wRG93bi5hcHBlbmQobGFiZWwpO1xuICAgIH1cblxuICAgIHJldHVybiBkcm9wRG93bjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQnRuKCl7XG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnLCAnZXhwYW5kLWJ1dHRvbicpO1xuICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdleHBhbmRfbW9yZSc7XG4gICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHRoaXNUYXNrID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAvL3RvZ2dsZSBcInNob3cgZGVzY3JpcHRpb25cIlxuICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzYycpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGVzYycpXG4gICAgICAgIC8vdG9nZ2xlIGljb25cbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9PSAnZXhwYW5kX21vcmUnID8gdGhpcy50ZXh0Q29udGVudCA9ICdleHBhbmRfbGVzcycgOiB0aGlzLnRleHRDb250ZW50ID0gJ2V4cGFuZF9tb3JlJzsgXG4gICAgfSlcbiAgICByZXR1cm4gZXhwYW5kQnV0dG9uO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgc2hvd1Rhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vR2V0IG1haW4gY29udGFpbmVyIGZyb20gcGFnZVxubGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuLy8gTkFWIEJBUlxuXG4vL0NyZWF0ZSBuYXZpZ2F0aW9uIGJhclxubGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXZCYXIuaWQgPSBcIm5hdlwiXG5uYXZCYXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xubmF2QmFyLnRleHRDb250ZW50ID0gXCJOQVYgQkFSXCI7XG5cbi8vIFRBQiBCQVJcblxuLy9jZWF0ZSB0YWIgYmFyXG5sZXQgdGFiQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhYkJhci5pZCA9IFwidGFiLWJhclwiO1xuLy90YWJCYXIudGV4dENvbnRlbnQgPSBcIlRBQiBCQVJcIjtcbiAgICAvL2NyZWF0ZSBuZXcgdGFiIGJ1dHRvblxuICAgIGxldCBuZXdUYWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbmV3VGFiQnRuLmlkID0gXCJuZXctdGFiLWJ1dHRvblwiO1xuICAgIG5ld1RhYkJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIG5ld1RhYkJ0bi50ZXh0Q29udGVudCA9ICdhZGRfY2lyY2xlX291dGxpbmUnO1xuICAgIHRhYkJhci5hcHBlbmQobmV3VGFiQnRuKTtcbiAgICAvL2dpdmUgbmV3IHRhYiBidXNzb24gZnVuY3Rpb25hbHR5XG4gICAgbmV3VGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdUYWJQcm9tcHQpO1xuICAgIGZ1bmN0aW9uIG5ld1RhYlByb21wdCgpe1xuICAgICAgICBsZXQgbmV3VGFiID0gcHJvbXB0KFwiTmV3IHRhYiBuYW1lOlwiKTtcbiAgICAgICAgYWRkVGFiKG5ld1RhYik7XG4gICAgfVxuXG5hZGRUYWIoXCJtYWluXCIpO1xuYWRkVGFiKFwic2Vjb25kXCIpO1xuYWRkVGFiKFwidGhpcmRcIik7XG5uYXZCYXIuYXBwZW5kKHRhYkJhcik7XG5cbi8vZnVuY3Rpb24gdG8gYWRkIHRhYiB0byBOYXZiYXJcblxuZnVuY3Rpb24gYWRkVGFiKG5hbWUpe1xuICAgIGxldCBuZXdUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RhYi5jbGFzc05hbWUgPSBcInRhYlwiO1xuICAgIG5ld1RhYi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbmV3VGFiLnN0eWxlLm9yZGVyID0gXCItMVwiO1xuICAgIG5ld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFiQ2xpY2spO1xuICAgIHRhYkJhci5hcHBlbmQobmV3VGFiKTtcbn07XG5cbi8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFiIGJhclxubGV0IGN1cnJlbnRUYWIgPSBcIm1haW5cIjtcblxuZnVuY3Rpb24gdGFiQ2xpY2soKXtcblxuICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRleHRDb250ZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwicHVycGxlXCI7XG4gICAgfSk7XG4gICAgdGhpcy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgc2hvd1Rhc2tzKCk7XG4gICAgXG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWIoKXtcbiAgICByZXR1cm4gY3VycmVudFRhYjtcbn1cblxuLy8gVElUTEUgQkFSIC8vL1xuXG4vL2NyZWF0ZSB0aXRsZSBiYXJcbmxldCB0aXRsZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG50aXRsZUJhci5pZCA9ICd0aXRsZS1iYXInO1xubGV0IHRpdGxlcyA9IGNyZWF0ZVRhc2soJ1Rhc2snLCAnRGVzY3JpcHRpb24nLCAnRHVlIGRhdGUnLCAnUHJpb3JpdHknLCdub25lJyk7XG5kZWxldGUgdGl0bGVzLmRlc2M7XG5cblxuLy90aXRsZSBiYXIgdGFiIG1lbnUgYnV0dG9uXG5sZXQgdGFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xudGFiTWVudS5jbGFzc05hbWUgPSBcInRpdGxlLWl0ZW1cIjtcbmxldCB0YWJNZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbnRhYk1lbnVJY29uLmNsYXNzTmFtZSA9ICdtYXRlcmlhbC1pY29ucyc7XG50YWJNZW51SWNvbi50ZXh0Q29udGVudCA9ICdtZW51JztcbnRhYk1lbnUuYXBwZW5kKHRhYk1lbnVJY29uKTtcbnRpdGxlQmFyLmFwcGVuZCh0YWJNZW51KTtcblxuZm9yIChjb25zdCBwcm9wIGluIHRpdGxlcykge1xuICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0aXRsZXMsIHByb3ApKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pdGVtXCIsIHByb3ApXG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHRpdGxlc1twcm9wXVxuICAgICAgICB0aXRsZUJhci5hcHBlbmQoZGl2KTtcbiAgICB9XG59XG5cbi8vY2hhbmdlIG5hbWUgdG8gaWNvblxubGV0IG5hbWUgPSB0aXRsZUJhci5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xubmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XG5sZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG50aXRsZS50ZXh0Q29udGVudCA9IFwidGl0bGVcIjtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG5uYW1lLmFwcGVuZCh0aXRsZSk7XG5cbi8vY2hhbmdlIGR1ZSBkYXRlIGljb25cbmxldCBkdWUgPSB0aXRsZUJhci5xdWVyeVNlbGVjdG9yKCcuZHVlJyk7XG5kdWUudGV4dENvbnRlbnQgPSBcIlwiO1xubGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuZXZlbnQudGV4dENvbnRlbnQgPSBcImV2ZW50XCI7XG5ldmVudC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuZHVlLmFwcGVuZChldmVudCk7XG5cbi8vYWRkIGxhYmVsIGljb25cbmxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmxhYmVsLnRleHRDb250ZW50ID0gXCJsYWJlbFwiO1xubGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbnRpdGxlQmFyLmFwcGVuZChsYWJlbCk7XG5cbm5hdkJhci5hcHBlbmQodGl0bGVCYXIpO1xuXG5cblxuXG4vL0FkZCBOYXYgdG8gdG9wIG9mIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBhZGROYXYoKXtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChuYXZCYXIpO1xufVxuXG4iLCJpbXBvcnQgeyBnZXRUYWIgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyB0YXNrTWVudUJ0biwgZXhwYW5kQnRuLCBlZGl0VGFzaywgY29sb3JQcmlvcml0eX0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5cbmxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5cbi8vZXh0ZW5kIGZ1bmN0aW9uYWxpdHkgb2YgbG9jYWwgc3RvcmFnZSB0byBhbGxvdyBmb3IgYXJyYXlzIGFuZCBvYmplY3RzXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxufVxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpXG59XG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuXG4vL2Z1bmN0aW9uIHRvIG92ZXJ3cml0ZSB0YXNrTGlzdFxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KXtcbiAgICB0YXNrTGlzdCA9IG5ld1Rhc2tMaXN0O1xuICAgIHNob3dUYXNrcygpO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGNoYW5nZSB0YXNrXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYXNrKGluZGV4LHByb3AsdmFsdWUpe1xuICAgIHRhc2tMaXN0W2luZGV4XVtwcm9wXSA9IHZhbHVlO1xufTtcblxuLy9mdW5jdGlvbiB0byBjYWxsIHRvIG1ha2UgdGFza3NcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsZGVzYyxkdWUscHJpb3JpdHksaW5UYWIsc3RyaWtlKXtcbiAgICByZXR1cm57XG4gICAgICBuYW1lOm5hbWUsXG4gICAgICBkZXNjOmRlc2MsXG4gICAgICBkdWU6ZHVlLFxuICAgICAgcHJpb3JpdHk6cHJpb3JpdHksXG4gICAgICBpblRhYjppblRhYixcbiAgICAgIHN0cmlrZTpzdHJpa2VcbiAgICB9XG4gIH1cbiAgXG4vL2Z1bmN0aW9uIHRvIGFkZCB0aGUgdGFzayB0byB0aGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2sgKHRhc2spe1xuXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICBzYXZlVGFza0xpc3QoKTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gd3JpdGUgdGFza2xpc3QgdG8gbG9jYWwgc3RvcmFnZVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tMaXN0KCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldE9iaigndGFza0xpc3QnLCB0YXNrTGlzdCk7XG59XG5cblxuXG4vL2Z1bmN0aW9uIHRvIHNob3cgdGFza2xpc3QgaW4gRE9NXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoKXtcbmNsZWFyVGFza3MoKTtcbi8vaSB0byB0cmFjayB3aGljaCBpbmRleCBvZiB0YXNrTGlzdCBjb2RlIGlzIGNoZWNraW5nXG52YXIgaT0wXG5cbi8vbG9vayB0aHJvdWdoIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIHRyYXNrbGlzdFxudGFza0xpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgIC8vIGlmIHRoZSBjdXJyZW50IHRhc2sncyAnaW50YWInIGlzIHRoZSBzYW1lIGFzIGN1cnJlbnQgdGFiXG4gICAgaWYoZWxlbWVudC5pblRhYiA9PSBnZXRUYWIoKSl7XG5cbiAgICAgICAgLy9jcmVhdGVzIGEgZGl2IGZvciB0aGUgdGFza1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2suY2xhc3NOYW1lID0gJ3Rhc2snOyAgICBcblxuICAgICAgICAvL2FwcGVuZCBleHBhbmQgYnV0dG9uXG4gICAgICAgIHRhc2suYXBwZW5kKGV4cGFuZEJ0bigpKTtcblxuICAgICAgICAvL2xvb3BzIHRocm91Z2ggZWFjaCBlbGVtZW50IGluIHRoZSBvYmplY3QgdG8gY3JlYXRlIGFuIGlucHV0LFxuICAgICAgICAvLyBhc3NpZ24gYSBjbGFzc25hbWUsIHZhbHVlLCBhbmQgYXBwZW5kIGl0IHRvIHRoZSB0YXNrXG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZWxlbWVudCwgcHJvcCkpIHsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScscHJvcCk7XG4gICAgICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudFtwcm9wXTtcbiAgICAgICAgICAgICAgICB0YXNrLmFwcGVuZChkaXYpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2FkZHMgc3RyaWtldGhyb3VnaFxuICAgICAgICBsZXQgc3RyaWtlID0gdGFzay5xdWVyeVNlbGVjdG9yKCcuc3RyaWtlJykudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmIChzdHJpa2UgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIHRhc2sucXVlcnlTZWxlY3RvcignLm5hbWUnKS5zdHlsZS50ZXh0RGVjb3JhdGlvbj0gXCJsaW5lLXRocm91Z2hcIlxuICAgICAgICAgICAgdGFzay5xdWVyeVNlbGVjdG9yKCcuZHVlJykuc3R5bGUudGV4dERlY29yYXRpb249IFwibGluZS10aHJvdWdoXCJcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vYXNzaWduIGVhY2ggdGFzayBhbiBpZFxuICAgICAgICB0YXNrLmlkID0gYHRhc2stJHtpfWA7XG5cbiAgICAgICAgLy9hZGQgYSBsYWJlbFxuXG5cbiAgICAgICAgICAgIC8vY29sb3IgdGhlIHByaW9yaXR5XG4gICAgICAgIGxldCBjb2xvciA9IGNvbG9yUHJpb3JpdHkoZWxlbWVudC5wcmlvcml0eSk7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnLCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwibGFiZWxcIjtcbiAgICAgICAgbGFiZWwuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgY29uc3QgbGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsYWJlbERpdi5jbGFzc0xpc3QuYWRkKCdsYWJlbC1kaXYnKTtcbiAgICAgICAgbGFiZWxEaXYuYXBwZW5kKGxhYmVsKTtcbiAgICAgICAgdGFzay5hcHBlbmQobGFiZWxEaXYpO1xuXG4gICAgICAgIC8vYWRkIG1lbnUgYnV0dG9uIHRvIHRhc2tcbiAgICAgICAgdGFzay5hcHBlbmQodGFza01lbnVCdG4oYHRhc2stJHtpfWApKTtcblxuICAgICAgICBcbiAgICAgICAgLy9wcmlvcml0eS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgICAgICAvL3ByaW9yaXR5LnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn07IGNvbG9yOiAke2NvbG9yfWBcblxuICAgICAgICAvL2FkZHMgdGhlIHRhc2sgYXQgdGhlIGJvdHRvbSBvZiB0aGUgbWFpbiBjb250YWluZXJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodGFzayk7XG4gICAgfVxuICAgIFxuICAgIGkrK1xufSk7XG5cbmNyZWF0ZU5ld1Rhc2tCdG4oKTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gYWRkIGEgbmV3IHRhc2sgXG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrKCl7XG4gICAgLy9jcmVhdGUgYmxhbmsgdGFzayBhbmQgdGhlbiBlZGl0IGl0XG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKCcnLCcnLCcnLCcnLGdldFRhYigpKTtcbiAgICBhZGRUYXNrKG5ld1Rhc2spO1xuICAgIHNob3dUYXNrcygpO1xuICAgIC8vZmluZCB0aGUgbmV3ZXN0LCBibGFuayB0YXNrXG4gICAgLy9jb25zb2xlLmxvZyh0YXNrTGlzdC5sZW5ndGgtMSk7XG4gICAgZWRpdFRhc2soYHRhc2stJHt0YXNrTGlzdC5sZW5ndGgtMX1gKTtcbn1cblxuLy9mdW5jdGlvbiB0byBjbGVhciBhbGwgdGFza3NcbmZ1bmN0aW9uIGNsZWFyVGFza3MoKXtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2xlYXIgc3RhcnRlZFwiKTtcbiAgICBjb25zdCBhcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHsgICAgICAgIFxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGxldCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1idG5cIilcbiAgICBpZiAobmV3VGFza0J0biAhPSBudWxsKXtcbiAgICBuZXdUYXNrQnRuLnJlbW92ZSgpO1xuICAgIH07XG4gICAgLy9jb25zb2xlLmxvZyhcImNsZWFyIGZpbmlzaGVkXCIpO1xufTtcblxuLy9mdW5jdGlvbiB0byBjcmVhdGUgYWRkIGJsYW5rIHRhc2sgYnV0dG9uXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3VGFza0J0bigpe1xuICAgIGxldCBuZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBuZXdUYXNrQnRuLmlkID0gXCJuZXctdGFzay1idG5cIjtcbiAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdUYXNrKTsgXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmQobmV3VGFza0J0bik7XG59XG5cbi8vZnVuY3Rpb24gdG8gZmluZCBhIHRhc2sgYnkgaXRzIGlkXG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGFzayhpZCl7XG4gICAgbGV0IGluZGV4ID0gaWQuc2xpY2UoNSk7XG4gICAgcmV0dXJuIGluZGV4XG59XG5cbi8vZnVuY3Rpb24gdG8gcmVtb3ZlIGEgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayhpbmRleCkge1xuICAgIHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrKGluZGV4KSB7XG4gICAgcmV0dXJuIHRhc2tMaXN0W2luZGV4XTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBhZGROYXYgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyBzZXRUYXNrTGlzdCwgY3JlYXRlVGFzaywgbmV3VGFzaywgY3JlYXRlTmV3VGFza0J0biwgc2hvd1Rhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuYWRkTmF2KCk7XG4vL2xvY2FsU3RvcmFnZS5jbGVhcigpXG4vL2FkZFRhc2soY3JlYXRlVGFzayhcImV4YW1wbGUxXCIsXCJkZXNjcmlwdGlvbjFcIixcIjEvMS8yMDIxXCIsXCIxXCIsXCJtYWluXCIpKTtcbi8vYWRkVGFzayhjcmVhdGVUYXNrKFwiZXhhbXBsZTJcIixcImRlc2NyaXB0aW9uMlwiLFwiMS8yLzIwMjFcIixcIjJcIixcIm1haW5cIikpO1xuc2hvd1Rhc2tzKCk7XG5cblxuLy9mdW5jdGlvbiB0byByZWFkIGxvY2FsIHN0b3JhZ2UsIFxuLy9zZXQgZW1wdHkgYXJyYXkgaWYgZW1wdHkuLi4gc2V0IHN0b3JlZCB0YXNrbGlzdCBvdGhlcndpc2VcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSB7XG4gIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBpcyBlbXB0eVwiKTtcbn0gZWxzZSB7XG4gIHNldFRhc2tMaXN0KGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Rhc2tMaXN0JykpO1xufVxuXG4vL0FUVFJJQlVURVNcblxuLy8gVGhyZWUgRG90IGJ5IHdhaHlha3VwIGZyb20gTm91blByb2plY3QuY29tXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=