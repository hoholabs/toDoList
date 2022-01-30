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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --color1: rgb(188, 139, 192);\n  --color2: rgba(70, 29, 66, 0.85);\n  --color3: rgb(228, 209, 228);\n}\n\n#main-container {\n  color: var(--color2);\n  display: -ms-grid;\n  display: grid;\n  width: 80vw;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  border: none;\n}\n\n#nav {\n  border-bottom: 0;\n  width: 80vw;\n}\n\n#title-bar {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-radius: 15px 50px 0px 0px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 40px;\n  background-color: var(--color3);\n  display: grid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n#tab-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n#new-tab-button {\n  border-radius: 1vw;\n  border: 0;\n  color: var(--color2);\n  height: 3vw;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 5px;\n}\n\n.tab {\n  border: solid var(--color2) 2px;\n  border-radius: 30px 30px 5px 5px;\n  padding-right: 10px;\n  padding-left: 5px;\n  height: 25px;\n  line-height: 30px;\n  width: 50px;\n  margin-right: 5px;\n  text-align: center;\n}\n\n.task {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 3vw 1fr .5fr 5vw 5vw;\n      grid-template-columns: 3vw 1fr .5fr 5vw 5vw;\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  background-color: var(--color3);\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.task-item {\n  border-radius: 5px;\n  padding: 5px;\n  color: var(--color2);\n  background-color: var(--color3);\n  margin: 1px;\n  border: solid var(--color3) 1px;\n}\n\n.inTab {\n  display: none;\n}\n\n.name {\n  text-align: center;\n}\n\n.desc {\n  display: none;\n  text-align: center;\n  width: 1fr;\n  -ms-grid-row: 2;\n      grid-row-start: 2;\n  -ms-grid-column: 2;\n  -ms-grid-column-span: 2;\n  grid-column: 2/4;\n  word-wrap: break-word;\n  background-color: var(--color3);\n}\n\n.show-desc {\n  display: inline;\n}\n\n.editing {\n  border: solid var(--color2) 1px;\n}\n\n.due {\n  text-align: center;\n}\n\n.priority {\n  display: none;\n  text-align: center;\n}\n\n.task-menu-button {\n  width: MIN(30px, 5vw);\n  border: none;\n  border-radius: 1vw;\n  background-color: var(--color3);\n  color: var(--color2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.task-menu-button img {\n  width: MIN(20px, 3vw);\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n#new-task-btn {\n  height: 30px;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-top: 0;\n  border-radius: 0px 0px 15px 50px;\n  padding: 1px;\n  padding-left: 5px;\n  padding-right: 5px;\n  height: 40px;\n}\n\n.task-menu-popup {\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n  background-color: var(--color3);\n  width: 100px;\n  height: 100px;\n  right: 50px;\n  position: absolute;\n  display: none;\n}\n\n.task-edit-popup-btn {\n  background-color: var(--color3);\n  border: none;\n  border-radius: 10px;\n}\n\n#label-dropdown {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  background-color: var(--color3);\n  border: solid var(--color2) 2px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAAS;EACT,gCAAS;EACT,4BAAS;ACCX;;ADGA;EAEE,oBAAoB;EACpB,iBAAY;EACZ,aAAW;EACX,WAAA;EACA,wBAAc;MACd,qBAAY;UACb,uBAAA;ECDC,cAAc;EDGhB,YAAI;ACDJ;;AAEA;EACE,gBAAgB;EDQlB,WAAU;ACNV;;AAEA;EDSE,iBAAe;EACf,aAAY;EACZ,sCAAiB;MACjB,2CAAkB;EAClB,+BAAY;EACZ,gCAA+B;EAC/B,YAAQ;EACR,iBAAe;EAGhB,kBAAA;ECTC,YAAY;EDad,+BAAQ;EAEN,aAAY;EACb,0BAAA;MCZK,qBAAqB;ADa3B;;ACVA;EDcE,oBAAoB;EACpB,oBAAW;EAEX,aAAY;ACbd;;AAEA;EDcA,kBAAI;EACF,SAAO;EACP,oBAAe;EACf,WAAA;EACA,2BAAiB;MACjB,0BAAY;MACZ,kBAAiB;EACjB,WAAW;ACZb;;AAEA;EACE,+BAA+B;EDgBjC,gCAAK;EACH,mBAAY;EACZ,iBAAA;EACA,YAAQ;EACR,iBAAa;EACb,WAAS;EACT,iBAAiB;EACjB,kBAAkB;ACdpB;;AAEA;EACE,iBAAiB;EDiBnB,aAAU;EAER,sCAAkB;MAClB,2CAAY;EACZ,+BAAoB;EACpB,aAAA;EACA,YAAW;EACX,iBAAc;EAEf,kBAAA;ECjBC,+BAA+B;EDmBjC,0BAAM;MACJ,qBAAY;ACjBd;;ADoBA;EACE,kBAAkB;EAEnB,YAAA;EClBC,oBAAoB;EDmBtB,+BAAK;EACH,WAAQ;EACR,+BAAkB;ACjBpB;;AAEA;EDoBE,aAAW;AClBb;;AAEA;EDsBC,kBAAU;ACpBX;;AAEA;EDsBC,aAAQ;EAEP,kBAAc;EAEd,UAAA;ECtBA,eAAe;MDwBb,iBAAA;EACF,kBAAkB;EAEnB,uBAAA;ECvBC,gBAAgB;EDwBlB,qBAAS;EACP,+BAAY;ACtBd;;AAEA;ED0BA,eAAiB;ACxBjB;;AAEA;ED2BE,+BAA+B;ACzBjC;;AAEA;EACE,kBAAkB;ADiBpB;;ACdA;ED4BI,aAAW;EACX,kBAAa;AC1BjB;;AAEA;EACE,qBAAqB;ED6BvB,YAAa;EACX,kBAAY;EACZ,+BAA+B;EAC/B,oBAAc;EACd,oBAAa;EACb,oBAAe;EACf,aAAY;AC3Bd;;AAEA;ED6BC,qBAAA;EC3BC,oBAAoB;KD6BtB,iBAAgB;EACd,YAAO;EACP,oBAAmB;EACnB,oBAAkB;EAClB,aAAW;EACX,wBAAY;MACZ,qBAAW;UACH,uBAAS;EACjB,yBAAY;MACb,sBAAA;UC3BS,mBAAmB;AD6B7B;;AC1BA;ED6BE,YAAA;EACD,+BAAA;EC3BC,+BAA+B;ED6BjC,aAAe;EACb,gCAAa;EACb,YAAA;EACA,iBAAU;EACV,kBAAkB;EAClB,YAAO;AC3BT;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,+BAA+B;EAC/B,YAAY;EACZ,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,aAAa;EACb,4BAA4B;EAC5B,6BAA6B;MACzB,0BAA0B;UACtB,sBAAsB;EAC9B,kBAAkB;EAClB,+BAA+B;EAC/B,+BAA+B;EAC/B,mBAAmB;AACrB;AACA,oCAAoC","sourceRoot":""}]);
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
    const editIcon = document.createElement('i');
    editIcon.classList.add('material-icons');
    editIcon.textContent  = 'menu';
    taskMenuBtn.append(editIcon);

    //create task popup
    let editTaskPopup = document.createElement('div');
    editTaskPopup.classList.add('task-menu-popup')

    //add menu buttons to the popup

    let taskEditBtn = document.createElement('button');
    taskEditBtn.textContent = "edit";
    taskEditBtn.addEventListener('click', () =>{editTask(taskId);});
    taskEditBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskEditBtn)

    let taskCrossBtn = document.createElement('button');
    taskCrossBtn.textContent = "cross-out";
    taskCrossBtn.addEventListener('click', crossoutTask);
    taskCrossBtn.classList.add('task-edit-popup-btn');
    editTaskPopup.append(taskCrossBtn)

    let taskRemoveBtn = document.createElement('button');
    taskRemoveBtn.textContent = "remove";
    taskRemoveBtn.addEventListener('click', () => {removeTask(taskId);});
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

// TITLE BAR

//create title bar
let titleBar = document.createElement('div')
titleBar.id = 'title-bar';
let titles = (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.createTask)('Task', 'Description', 'Due date', 'Priority','none');
delete titles.desc;
//console.log(titles);

//div for first grid slot

titleBar.append(document.createElement('div'));

for (const prop in titles) {
    if (Object.hasOwnProperty.call(titles, prop)) {
        let div = document.createElement('div');
        div.classList.add("tab-item", prop)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUN5QjtBQUNaO0FBQ3NEOztBQUV4Rjs7QUFFQSwrQ0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLGlEQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsRUFBRSxtREFBVztBQUNiOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3IxOiByZ2IoMTg4LCAxMzksIDE5Mik7XFxuICAtLWNvbG9yMjogcmdiYSg3MCwgMjksIDY2LCAwLjg1KTtcXG4gIC0tY29sb3IzOiByZ2IoMjI4LCAyMDksIDIyOCk7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI25hdiB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcblxcbiN0aXRsZS1iYXIge1xcbiAgZGlzcGxheTogLW1zLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLW1zLWdyaWQtY29sdW1uczogM3Z3IDFmciAuNWZyIDV2dyA1dnc7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzdncgMWZyIC41ZnIgNXZ3IDV2dztcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDUwcHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0YWItYmFyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbmV3LXRhYi1idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yMik7XFxuICBoZWlnaHQ6IDN2dztcXG4gIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnRhYiB7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDVweCA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IC1tcy1ncmlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDN2dyAxZnIgLjVmciA1dncgNXZ3O1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM3Z3IDFmciAuNWZyIDV2dyA1dnc7XFxuICBib3JkZXI6IHNvbGlkIHZhcigtLWNvbG9yMikgMnB4O1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3IyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBtYXJnaW46IDFweDtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IzKSAxcHg7XFxufVxcblxcbi5pblRhYiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubmFtZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5kZXNjIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMWZyO1xcbiAgLW1zLWdyaWQtcm93OiAyO1xcbiAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgLW1zLWdyaWQtY29sdW1uOiAyO1xcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDI7XFxuICBncmlkLWNvbHVtbjogMi80O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG59XFxuXFxuLnNob3ctZGVzYyB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5lZGl0aW5nIHtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAxcHg7XFxufVxcblxcbi5kdWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbWVudS1idXR0b24ge1xcbiAgd2lkdGg6IE1JTigzMHB4LCA1dncpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjIpO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLW1lbnUtYnV0dG9uIGltZyB7XFxuICB3aWR0aDogTUlOKDIwcHgsIDN2dyk7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ldy10YXNrLWJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggNTBweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4udGFzay1tZW51LXBvcHVwIHtcXG4gIGJvcmRlcjogc29saWQgdmFyKC0tY29sb3IyKSAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICByaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWVkaXQtcG9wdXAtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jbGFiZWwtZHJvcGRvd24ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1jb2xvcjIpIDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUFTO0VBQ1QsZ0NBQVM7RUFDVCw0QkFBUztBQ0NYOztBREdBO0VBRUUsb0JBQW9CO0VBQ3BCLGlCQUFZO0VBQ1osYUFBVztFQUNYLFdBQUE7RUFDQSx3QkFBYztNQUNkLHFCQUFZO1VBQ2IsdUJBQUE7RUNEQyxjQUFjO0VER2hCLFlBQUk7QUNESjs7QUFFQTtFQUNFLGdCQUFnQjtFRFFsQixXQUFVO0FDTlY7O0FBRUE7RURTRSxpQkFBZTtFQUNmLGFBQVk7RUFDWixzQ0FBaUI7TUFDakIsMkNBQWtCO0VBQ2xCLCtCQUFZO0VBQ1osZ0NBQStCO0VBQy9CLFlBQVE7RUFDUixpQkFBZTtFQUdoQixrQkFBQTtFQ1RDLFlBQVk7RURhZCwrQkFBUTtFQUVOLGFBQVk7RUFDYiwwQkFBQTtNQ1pLLHFCQUFxQjtBRGEzQjs7QUNWQTtFRGNFLG9CQUFvQjtFQUNwQixvQkFBVztFQUVYLGFBQVk7QUNiZDs7QUFFQTtFRGNBLGtCQUFJO0VBQ0YsU0FBTztFQUNQLG9CQUFlO0VBQ2YsV0FBQTtFQUNBLDJCQUFpQjtNQUNqQiwwQkFBWTtNQUNaLGtCQUFpQjtFQUNqQixXQUFXO0FDWmI7O0FBRUE7RUFDRSwrQkFBK0I7RURnQmpDLGdDQUFLO0VBQ0gsbUJBQVk7RUFDWixpQkFBQTtFQUNBLFlBQVE7RUFDUixpQkFBYTtFQUNiLFdBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0FDZHBCOztBQUVBO0VBQ0UsaUJBQWlCO0VEaUJuQixhQUFVO0VBRVIsc0NBQWtCO01BQ2xCLDJDQUFZO0VBQ1osK0JBQW9CO0VBQ3BCLGFBQUE7RUFDQSxZQUFXO0VBQ1gsaUJBQWM7RUFFZixrQkFBQTtFQ2pCQywrQkFBK0I7RURtQmpDLDBCQUFNO01BQ0oscUJBQVk7QUNqQmQ7O0FEb0JBO0VBQ0Usa0JBQWtCO0VBRW5CLFlBQUE7RUNsQkMsb0JBQW9CO0VEbUJ0QiwrQkFBSztFQUNILFdBQVE7RUFDUiwrQkFBa0I7QUNqQnBCOztBQUVBO0VEb0JFLGFBQVc7QUNsQmI7O0FBRUE7RURzQkMsa0JBQVU7QUNwQlg7O0FBRUE7RURzQkMsYUFBUTtFQUVQLGtCQUFjO0VBRWQsVUFBQTtFQ3RCQSxlQUFlO01Ed0JiLGlCQUFBO0VBQ0Ysa0JBQWtCO0VBRW5CLHVCQUFBO0VDdkJDLGdCQUFnQjtFRHdCbEIscUJBQVM7RUFDUCwrQkFBWTtBQ3RCZDs7QUFFQTtFRDBCQSxlQUFpQjtBQ3hCakI7O0FBRUE7RUQyQkUsK0JBQStCO0FDekJqQzs7QUFFQTtFQUNFLGtCQUFrQjtBRGlCcEI7O0FDZEE7RUQ0QkksYUFBVztFQUNYLGtCQUFhO0FDMUJqQjs7QUFFQTtFQUNFLHFCQUFxQjtFRDZCdkIsWUFBYTtFQUNYLGtCQUFZO0VBQ1osK0JBQStCO0VBQy9CLG9CQUFjO0VBQ2Qsb0JBQWE7RUFDYixvQkFBZTtFQUNmLGFBQVk7QUMzQmQ7O0FBRUE7RUQ2QkMscUJBQUE7RUMzQkMsb0JBQW9CO0tENkJ0QixpQkFBZ0I7RUFDZCxZQUFPO0VBQ1Asb0JBQW1CO0VBQ25CLG9CQUFrQjtFQUNsQixhQUFXO0VBQ1gsd0JBQVk7TUFDWixxQkFBVztVQUNILHVCQUFTO0VBQ2pCLHlCQUFZO01BQ2Isc0JBQUE7VUMzQlMsbUJBQW1CO0FENkI3Qjs7QUMxQkE7RUQ2QkUsWUFBQTtFQUNELCtCQUFBO0VDM0JDLCtCQUErQjtFRDZCakMsYUFBZTtFQUNiLGdDQUFhO0VBQ2IsWUFBQTtFQUNBLGlCQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQU87QUMzQlQ7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsNkJBQTZCO01BQ3pCLDBCQUEwQjtVQUN0QixzQkFBc0I7RUFDOUIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCO0FBQ0Esb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0aHJlZURvdHMgZnJvbSAnLi9ub3VuLXRocmVlLWRvdC00Mjg3NjU3LnN2Zyc7XG5pbXBvcnQgeyBjaGFuZ2VUYXNrLCBmaW5kVGFzaywgZGVsZXRlVGFzaywgc2F2ZVRhc2tMaXN0LCBzaG93VGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuLy9jcmVhdGUgYW5kIHJldHVybiB0aGUgZWRpdCB0YXNrIGJ1dHRvblxuXG5leHBvcnQgZnVuY3Rpb24gdGFza01lbnVCdG4odGFza0lkKXtcbiAgICBjb25zdCB0YXNrTWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tNZW51RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWVudS1idXR0b24nKTtcbiAgICBjb25zdCB0YXNrTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbWVudS1idXR0b24nKTtcbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIGVkaXRJY29uLnRleHRDb250ZW50ICA9ICdtZW51JztcbiAgICB0YXNrTWVudUJ0bi5hcHBlbmQoZWRpdEljb24pO1xuXG4gICAgLy9jcmVhdGUgdGFzayBwb3B1cFxuICAgIGxldCBlZGl0VGFza1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdFRhc2tQb3B1cC5jbGFzc0xpc3QuYWRkKCd0YXNrLW1lbnUtcG9wdXAnKVxuXG4gICAgLy9hZGQgbWVudSBidXR0b25zIHRvIHRoZSBwb3B1cFxuXG4gICAgbGV0IHRhc2tFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0VkaXRCdG4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgICB0YXNrRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e2VkaXRUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LXBvcHVwLWJ0bicpO1xuICAgIGVkaXRUYXNrUG9wdXAuYXBwZW5kKHRhc2tFZGl0QnRuKVxuXG4gICAgbGV0IHRhc2tDcm9zc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tDcm9zc0J0bi50ZXh0Q29udGVudCA9IFwiY3Jvc3Mtb3V0XCI7XG4gICAgdGFza0Nyb3NzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3Jvc3NvdXRUYXNrKTtcbiAgICB0YXNrQ3Jvc3NCdG4uY2xhc3NMaXN0LmFkZCgndGFzay1lZGl0LXBvcHVwLWJ0bicpO1xuICAgIGVkaXRUYXNrUG9wdXAuYXBwZW5kKHRhc2tDcm9zc0J0bilcblxuICAgIGxldCB0YXNrUmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza1JlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwicmVtb3ZlXCI7XG4gICAgdGFza1JlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtyZW1vdmVUYXNrKHRhc2tJZCk7fSk7XG4gICAgdGFza1JlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrLWVkaXQtcG9wdXAtYnRuJyk7XG4gICAgZWRpdFRhc2tQb3B1cC5hcHBlbmQodGFza1JlbW92ZUJ0bilcblxuICAgIC8vYXBwZW5kIHRoZSBwb3B1cCB0byB0aGUgbWVudSBkaXZcbiAgICB0YXNrTWVudURpdi5hcHBlbmQoZWRpdFRhc2tQb3B1cCk7XG5cbiAgICAvL2FkZCBldmVuIGxpc3RlbmVyIHRvIGJ1dHRvbiB0byBzaG93IHBvcHVwXG4gICAgdGFza01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBlZGl0VGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICB9KTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGhpZGUgcG9wdXAgb24gbW91c2VsZWF2ZVxuICAgIGVkaXRUYXNrUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGVkaXRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuICAgIC8vYXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGRpdlxuICAgIHRhc2tNZW51RGl2LmFwcGVuZCh0YXNrTWVudUJ0bik7XG4gICAgcmV0dXJuIHRhc2tNZW51RGl2O1xuICAgIH07XG5cblxuXG4vL2Z1bmN0aW9uIHRvIGhpZGUgYWxsICh0YXNrIG1lbnUpIHBvcHVwc1xuZnVuY3Rpb24gaGlkZVBvcHVwcygpe1xuICAgIC8vY29uc29sZS5sb2coXCJoaWRlIHBvcHVwc1wiKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLW1lbnUtcG9wdXAnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcbn1cblxuLy9mdW5jdGlvbiB0byBlZGl0IGEgdGFza1xuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2tJZCl7XG4gICAgaGlkZVBvcHVwcygpO1xuXG4gICAgLy9sZXQgdGhpc1Rhc2sgPSB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGxldCB0aGlzVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJZCk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzVGFzayk7XG5cbiAgICBsZXQgdGV4dEZpZWxkcyA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYW1lLCAuZGVzYywgLmR1ZScpXG5cbiAgICAvL21ha2VzIGFsbCB0ZXh0ZmllbGRzIGVkaXRhYmxlXG4gICAgdGV4dEZpZWxkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXRpbmcnKTsgXG4gICAgfSk7XG5cbiAgICAvL3Nob3dzIGRlc2NyaXB0aW9uXG4gICAgbGV0IHRoaXNEZXNjID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmRlc2MnKTtcbiAgICB0aGlzRGVzYy5jbGFzc0xpc3QuYWRkKCdzaG93LWRlc2MnKTtcblxuICAgIC8vaGlkZSB0aGUgbWVudSBidXR0b24gYW5kIGV4cGFuZCBidXR0b25cbiAgICBsZXQgbWVudUJ0biA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW1lbnUtYnV0dG9uJyk7XG4gICAgbGV0IGV4cEJ0biA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQtYnV0dG9uJyk7XG4gICAgbWVudUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZXhwQnRuLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1jb2xvcjMpXCI7XG5cbiAgICAvL21ha2UgbGFiZWwgaW50ZXJhY3RpdmUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBsZXQgdGhpc0xhYmVsID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvcignLmxhYmVsJyk7XG4gICAgbGV0IHRoaXNMYWJlbERpdiA9IHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1kaXYnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzTGFiZWwpO1xuICAgIHRoaXNMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpc0xhYmVsRGl2LmFwcGVuZChsYWJlbERyb3Bkb3duKCkpO1xuICAgIH0pXG5cbiAgICAvL2FkZCBcIk9LXCIgYnV0dG9uXG4gICAgbGV0IG9rQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG9rQnRuLnRleHRDb250ZW50ID0gXCJkb25lXCI7XG4gICAgb2tCdG4uaWQgPSAndGFzay1lZGl0LW9rLWJ0bic7XG4gICAgb2tCdG4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbiAgICB0aGlzVGFzay5hcHBlbmQob2tCdG4pO1xuXG4gICAgLy9hZGQgZnVuY3Rpb24gdG8gb2sgYnV0dG9uIHRvIGRvIHN0dWZmXG4gICAgb2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAvL21ha2UgdGFza2ZpZWxkcyBjb250ZW50IG5vdCBlZGl0YWJsZVxuICAgICAgICB0ZXh0RmllbGRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGluZycpOyAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIC8vc2F2ZSB0aGUgZWRpdGVkIGRhdGEgdG8gdGhlIHRhc2tsaXN0XG5cbiAgICAgICAgLy9icnV0ZSBmb3JjZWQuLiB1Z2x5Li4gZml4IGxhdGVyXG5cbiAgICAgICAgbGV0IGluZGV4ID0gZmluZFRhc2sodGhpc1Rhc2suaWQpXG4gICAgICAgIGxldCBuYW1lID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staXRlbScpWzBdLnRleHRDb250ZW50XG4gICAgICAgIGxldCBkZXNjID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staXRlbScpWzFdLnRleHRDb250ZW50XG4gICAgICAgIGxldCBkdWUgPSB0aGlzVGFzay5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1pdGVtJylbMl0udGV4dENvbnRlbnRcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gdGhpc1Rhc2sucXVlcnlTZWxlY3RvckFsbCgnLnRhc2staXRlbScpWzNdLnRleHRDb250ZW50XG5cbiAgICAgICAgY2hhbmdlVGFzayhpbmRleCwnbmFtZScsbmFtZSk7XG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ2Rlc2MnLGRlc2MpO1xuICAgICAgICBjaGFuZ2VUYXNrKGluZGV4LCdkdWUnLGR1ZSk7XG4gICAgICAgIGNoYW5nZVRhc2soaW5kZXgsJ3ByaW9yaXR5Jyxwcmlvcml0eSk7XG5cbiAgICAgICAgdGhpc0Rlc2MuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1kZXNjJyk7XG5cbiAgICAgICAgLy9yZW1vdmUgdGhlIG9rIGJ1dHRvblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1lZGl0LW9rLWJ0bicpLnJlbW92ZSgpO1xuICAgICAgICAvL3Nob3cgbWVudSBhbmQgZXhwYW5kIGJ1dHRvbiBhZ2FpblxuICAgICAgICBtZW51QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGV4cEJ0bi5zdHlsZS5jb2xvciA9IFwidmFyKC0tY29sb3IyKVwiO1xuXG4gICAgICAgIHNhdmVUYXNrTGlzdCgpO1xuICAgICAgICBzaG93VGFza3MoKTtcblxuICAgIH0pO1xuXG5cbn1cblxuLy9mdW5jdGlvbiB0byBzdHJpa2VvdXQgYSB0YXNrXG5mdW5jdGlvbiBjcm9zc291dFRhc2soKXtcbiAgICBoaWRlUG9wdXBzKCk7XG4gICAgdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5zdHlsZS50ZXh0RGVjb3JhdGlvbj0gXCJsaW5lLXRocm91Z2hcIjtcbn1cblxuLy9mdW5jdGlvbiB0byByZW1vdmUgYSB0YXNrXG5mdW5jdGlvbiByZW1vdmVUYXNrKGlkKXtcbiAgICBoaWRlUG9wdXBzKCk7XG4gICAgZGVsZXRlVGFzayhmaW5kVGFzayhpZCkpO1xuICAgIHNhdmVUYXNrTGlzdCgpO1xuXG59XG5cbi8vZnVuY3Rpb24gdG8gcmV0dXJuIGEgY29sb3IgYmFzZWQgb24gcHJpb3JpdHlcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclByaW9yaXR5KG51bSl7XG4gICAgbGV0IGNvbG9ycyA9IFtcbiAgICAgICAgJ3JlZCcsICAgICAgLy8wXG4gICAgICAgICdvcmFuZ2UnLCAgIC8vMVxuICAgICAgICAneWVsbG93JywgICAvLzJcbiAgICAgICAgJ2dyZWVuJywgICAgLy8zXG4gICAgICAgICdibHVlJywgICAgIC8vNFxuICAgICAgICAnd2hpdGUnICAgICAvLzVcbiAgICBdO1xuICAgIHJldHVybiBjb2xvcnNbbnVtXTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxEcm9wZG93bigpe1xuICAgIFxuXG4gICAgbGV0IGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkcm9wRG93bi5pZCA9IFwibGFiZWwtZHJvcGRvd25cIjtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA2OyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ2xhYmVsJztcbiAgICAgICAgbGFiZWwuc3R5bGUuY29sb3IgPSBjb2xvclByaW9yaXR5KGluZGV4KTtcbiAgICAgICAgbGFiZWwuaWQgPSBgbGFiZWwtJHtpbmRleH1gXG5cbiAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHRoaXNUYXNrID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBuZXdMYWJlbCA9IHRoaXMuaWQuc2xpY2UoNilcbiAgICAgICAgICAgIC8vY2hhbmdlIGxhYmVsIHRvIG5ldyBsYWJlbCBudW1iZXJcbiAgICAgICAgICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnRleHRDb250ZW50ID0gbmV3TGFiZWw7XG4gICAgICAgICAgICAvL2NoYW5nZSBsYWJlbCBjb2xvciBmb3Igc3R5bGUgcG9pbnRzICBcbiAgICAgICAgICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbCcpLnN0eWxlLmNvbG9yID0gY29sb3JQcmlvcml0eShuZXdMYWJlbCk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGRyb3Bkb3duXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFiZWwtZHJvcGRvd24nKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcGVuZGVkXCIpO1xuICAgICAgICBkcm9wRG93bi5hcHBlbmQobGFiZWwpO1xuICAgIH1cblxuICAgIHJldHVybiBkcm9wRG93bjtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kQnRuKCl7XG4gICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnLCAnZXhwYW5kLWJ1dHRvbicpO1xuICAgIGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdleHBhbmRfbW9yZSc7XG4gICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IHRoaXNUYXNrID0gdGhpcy5wYXJlbnROb2RlO1xuICAgICAgICAvL3RvZ2dsZSBcInNob3cgZGVzY3JpcHRpb25cIlxuICAgICAgICB0aGlzVGFzay5xdWVyeVNlbGVjdG9yKCcuZGVzYycpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZGVzYycpXG4gICAgICAgIC8vdG9nZ2xlIGljb25cbiAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9PSAnZXhwYW5kX21vcmUnID8gdGhpcy50ZXh0Q29udGVudCA9ICdleHBhbmRfbGVzcycgOiB0aGlzLnRleHRDb250ZW50ID0gJ2V4cGFuZF9tb3JlJzsgXG4gICAgfSlcbiAgICByZXR1cm4gZXhwYW5kQnV0dG9uO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzaywgc2hvd1Rhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vR2V0IG1haW4gY29udGFpbmVyIGZyb20gcGFnZVxubGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuLy8gTkFWIEJBUlxuXG4vL0NyZWF0ZSBuYXZpZ2F0aW9uIGJhclxubGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5uYXZCYXIuaWQgPSBcIm5hdlwiXG5uYXZCYXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xubmF2QmFyLnRleHRDb250ZW50ID0gXCJOQVYgQkFSXCI7XG5cbi8vIFRBQiBCQVJcblxuLy9jZWF0ZSB0YWIgYmFyXG5sZXQgdGFiQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhYkJhci5pZCA9IFwidGFiLWJhclwiO1xuLy90YWJCYXIudGV4dENvbnRlbnQgPSBcIlRBQiBCQVJcIjtcbiAgICAvL2NyZWF0ZSBuZXcgdGFiIGJ1dHRvblxuICAgIGxldCBuZXdUYWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbmV3VGFiQnRuLmlkID0gXCJuZXctdGFiLWJ1dHRvblwiO1xuICAgIG5ld1RhYkJ0bi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuICAgIG5ld1RhYkJ0bi50ZXh0Q29udGVudCA9ICdhZGRfY2lyY2xlX291dGxpbmUnO1xuICAgIHRhYkJhci5hcHBlbmQobmV3VGFiQnRuKTtcbiAgICAvL2dpdmUgbmV3IHRhYiBidXNzb24gZnVuY3Rpb25hbHR5XG4gICAgbmV3VGFiQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdUYWJQcm9tcHQpO1xuICAgIGZ1bmN0aW9uIG5ld1RhYlByb21wdCgpe1xuICAgICAgICBsZXQgbmV3VGFiID0gcHJvbXB0KFwiTmV3IHRhYiBuYW1lOlwiKTtcbiAgICAgICAgYWRkVGFiKG5ld1RhYik7XG4gICAgfVxuXG5hZGRUYWIoXCJtYWluXCIpO1xuYWRkVGFiKFwic2Vjb25kXCIpO1xuYWRkVGFiKFwidGhpcmRcIik7XG5uYXZCYXIuYXBwZW5kKHRhYkJhcik7XG5cbi8vZnVuY3Rpb24gdG8gYWRkIHRhYiB0byBOYXZiYXJcblxuZnVuY3Rpb24gYWRkVGFiKG5hbWUpe1xuICAgIGxldCBuZXdUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RhYi5jbGFzc05hbWUgPSBcInRhYlwiO1xuICAgIG5ld1RhYi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbmV3VGFiLnN0eWxlLm9yZGVyID0gXCItMVwiO1xuICAgIG5ld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsdGFiQ2xpY2spO1xuICAgIHRhYkJhci5hcHBlbmQobmV3VGFiKTtcbn07XG5cbi8vYWRkIGZ1bmN0aW9uYWxpdHkgdG8gdGFiIGJhclxubGV0IGN1cnJlbnRUYWIgPSBcIm1haW5cIjtcblxuZnVuY3Rpb24gdGFiQ2xpY2soKXtcblxuICAgIGN1cnJlbnRUYWIgPSB0aGlzLnRleHRDb250ZW50O1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJcIikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwicHVycGxlXCI7XG4gICAgfSk7XG4gICAgdGhpcy5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgc2hvd1Rhc2tzKCk7XG4gICAgXG5cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWIoKXtcbiAgICByZXR1cm4gY3VycmVudFRhYjtcbn1cblxuLy8gVElUTEUgQkFSXG5cbi8vY3JlYXRlIHRpdGxlIGJhclxubGV0IHRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRpdGxlQmFyLmlkID0gJ3RpdGxlLWJhcic7XG5sZXQgdGl0bGVzID0gY3JlYXRlVGFzaygnVGFzaycsICdEZXNjcmlwdGlvbicsICdEdWUgZGF0ZScsICdQcmlvcml0eScsJ25vbmUnKTtcbmRlbGV0ZSB0aXRsZXMuZGVzYztcbi8vY29uc29sZS5sb2codGl0bGVzKTtcblxuLy9kaXYgZm9yIGZpcnN0IGdyaWQgc2xvdFxuXG50aXRsZUJhci5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXG5mb3IgKGNvbnN0IHByb3AgaW4gdGl0bGVzKSB7XG4gICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRpdGxlcywgcHJvcCkpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRhYi1pdGVtXCIsIHByb3ApXG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IHRpdGxlc1twcm9wXVxuICAgICAgICB0aXRsZUJhci5hcHBlbmQoZGl2KTtcbiAgICB9XG59XG5cbi8vY2hhbmdlIG5hbWUgdG8gaWNvblxubGV0IG5hbWUgPSB0aXRsZUJhci5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xubmFtZS50ZXh0Q29udGVudCA9IFwiXCI7XG5sZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG50aXRsZS50ZXh0Q29udGVudCA9IFwidGl0bGVcIjtcbnRpdGxlLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG5uYW1lLmFwcGVuZCh0aXRsZSk7XG5cbi8vY2hhbmdlIGR1ZSBkYXRlIGljb25cbmxldCBkdWUgPSB0aXRsZUJhci5xdWVyeVNlbGVjdG9yKCcuZHVlJyk7XG5kdWUudGV4dENvbnRlbnQgPSBcIlwiO1xubGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuZXZlbnQudGV4dENvbnRlbnQgPSBcImV2ZW50XCI7XG5ldmVudC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1pY29ucycpO1xuZHVlLmFwcGVuZChldmVudCk7XG5cbi8vYWRkIGxhYmVsIGljb25cbmxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbmxhYmVsLnRleHRDb250ZW50ID0gXCJsYWJlbFwiO1xubGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMnKTtcbnRpdGxlQmFyLmFwcGVuZChsYWJlbCk7XG5cbm5hdkJhci5hcHBlbmQodGl0bGVCYXIpO1xuXG5cblxuXG4vL0FkZCBOYXYgdG8gdG9wIG9mIHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiBhZGROYXYoKXtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChuYXZCYXIpO1xufVxuXG4iLCJpbXBvcnQgeyBnZXRUYWIgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyB0YXNrTWVudUJ0biwgZXhwYW5kQnRuLCBlZGl0VGFzaywgY29sb3JQcmlvcml0eX0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5cbmxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGFpbmVyJyk7XG5cbi8vZXh0ZW5kIGZ1bmN0aW9uYWxpdHkgb2YgbG9jYWwgc3RvcmFnZSB0byBhbGxvdyBmb3IgYXJyYXlzIGFuZCBvYmplY3RzXG5TdG9yYWdlLnByb3RvdHlwZS5zZXRPYmogPSBmdW5jdGlvbihrZXksIG9iaikge1xuICAgIHJldHVybiB0aGlzLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmopKVxufVxuU3RvcmFnZS5wcm90b3R5cGUuZ2V0T2JqID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRJdGVtKGtleSkpXG59XG5cbmxldCB0YXNrTGlzdCA9IFtdO1xuLy9mdW5jdGlvbiB0byBvdmVyd3JpdGUgdGFza0xpc3RcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KXtcbiAgICB0YXNrTGlzdCA9IG5ld1Rhc2tMaXN0O1xuICAgIC8vc2NvbnNvbGUubG9nKHRhc2tMaXN0KTtcbiAgICBzaG93VGFza3MoKTtcbn1cblxuLy9mdW5jdGlvbiB0byBjaGFuZ2UgdGFza1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGFzayhpbmRleCxwcm9wLHZhbHVlKXtcbiAgICB0YXNrTGlzdFtpbmRleF1bcHJvcF0gPSB2YWx1ZTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gY2FsbCB0byBtYWtlIHRhc2tzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLGRlc2MsZHVlLHByaW9yaXR5LGluVGFiKXtcbiAgICByZXR1cm57XG4gICAgICBuYW1lOm5hbWUsXG4gICAgICBkZXNjOmRlc2MsXG4gICAgICBkdWU6ZHVlLFxuICAgICAgcHJpb3JpdHk6cHJpb3JpdHksXG4gICAgICBpblRhYjppblRhYlxuICAgIH1cbiAgfVxuICBcbi8vZnVuY3Rpb24gdG8gYWRkIHRoZSB0YXNrIHRvIHRoZSBsaXN0XG5leHBvcnQgZnVuY3Rpb24gYWRkVGFzayAodGFzayl7XG5cbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIHNhdmVUYXNrTGlzdCgpO1xufTtcblxuLy9mdW5jdGlvbiB0byB3cml0ZSB0YXNrbGlzdCB0byBsb2NhbCBzdG9yYWdlXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlVGFza0xpc3QoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0T2JqKCd0YXNrTGlzdCcsIHRhc2tMaXN0KTtcbn1cblxuXG5cbi8vZnVuY3Rpb24gdG8gc2hvdyB0YXNrbGlzdCBpbiBET01cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcygpe1xuY2xlYXJUYXNrcygpO1xuLy9pIHRvIHRyYWNrIHdoaWNoIGluZGV4IG9mIHRhc2tMaXN0IGNvZGUgaXMgY2hlY2tpbmdcbnZhciBpPTBcblxuLy9sb29rIHRocm91Z2ggZXZlcnkgZWxlbWVudCBvZiB0aGUgdHJhc2tsaXN0XG50YXNrTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG4gICAgLy8gaWYgdGhlIGN1cnJlbnQgdGFzaydzICdpbnRhYicgaXMgdGhlIHNhbWUgYXMgY3VycmVudCB0YWJcbiAgICBpZihlbGVtZW50LmluVGFiID09IGdldFRhYigpKXtcblxuICAgICAgICAvL2NyZWF0ZXMgYSBkaXYgZm9yIHRoZSB0YXNrXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFzay5jbGFzc05hbWUgPSAndGFzayc7ICAgIFxuXG4gICAgICAgIC8vYXBwZW5kIGV4cGFuZCBidXR0b25cbiAgICAgICAgdGFzay5hcHBlbmQoZXhwYW5kQnRuKCkpO1xuXG4gICAgICAgIC8vbG9vcHMgdGhyb3VnaCBlYWNoIGVsZW1lbnQgaW4gdGhlIG9iamVjdCB0byBjcmVhdGUgYW4gaW5wdXQsXG4gICAgICAgIC8vIGFzc2lnbiBhIGNsYXNzbmFtZSwgdmFsdWUsIGFuZCBhcHBlbmQgaXQgdG8gdGhlIHRhc2tcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlbGVtZW50LCBwcm9wKSkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyxwcm9wKTtcbiAgICAgICAgICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBlbGVtZW50W3Byb3BdO1xuICAgICAgICAgICAgICAgIHRhc2suYXBwZW5kKGRpdik7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAvL2Fzc2lnbiBlYWNoIHRhc2sgYW4gaWRcbiAgICAgICAgdGFzay5pZCA9IGB0YXNrLSR7aX1gO1xuXG4gICAgICAgIC8vYWRkIGEgbGFiZWxcblxuXG4gICAgICAgICAgICAvL2NvbG9yIHRoZSBwcmlvcml0eVxuICAgICAgICBsZXQgY29sb3IgPSBjb2xvclByaW9yaXR5KGVsZW1lbnQucHJpb3JpdHkpO1xuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJywnbGFiZWwnKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBcImxhYmVsXCI7XG4gICAgICAgIGxhYmVsLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIGNvbnN0IGxhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbGFiZWxEaXYuY2xhc3NMaXN0LmFkZCgnbGFiZWwtZGl2Jyk7XG4gICAgICAgIGxhYmVsRGl2LmFwcGVuZChsYWJlbCk7XG4gICAgICAgIHRhc2suYXBwZW5kKGxhYmVsRGl2KTtcblxuICAgICAgICAvL2FkZCBtZW51IGJ1dHRvbiB0byB0YXNrXG4gICAgICAgIHRhc2suYXBwZW5kKHRhc2tNZW51QnRuKGB0YXNrLSR7aX1gKSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vcHJpb3JpdHkuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgLy9wcmlvcml0eS5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9OyBjb2xvcjogJHtjb2xvcn1gXG5cbiAgICAgICAgLy9hZGRzIHRoZSB0YXNrIGF0IHRoZSBib3R0b20gb2YgdGhlIG1haW4gY29udGFpbmVyXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRhc2spO1xuICAgIH1cbiAgICBcbiAgICBpKytcbn0pO1xuXG5jcmVhdGVOZXdUYXNrQnRuKCk7XG59O1xuXG4vL2Z1bmN0aW9uIHRvIGFkZCBhIG5ldyB0YXNrIFxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VGFzaygpe1xuICAgIC8vY3JlYXRlIGJsYW5rIHRhc2sgYW5kIHRoZW4gZWRpdCBpdFxuICAgIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzaygnJywnJywnJywnJyxnZXRUYWIoKSk7XG4gICAgYWRkVGFzayhuZXdUYXNrKTtcbiAgICBzaG93VGFza3MoKTtcbiAgICAvL2ZpbmQgdGhlIG5ld2VzdCwgYmxhbmsgdGFza1xuICAgIC8vY29uc29sZS5sb2codGFza0xpc3QubGVuZ3RoLTEpO1xuICAgIGVkaXRUYXNrKGB0YXNrLSR7dGFza0xpc3QubGVuZ3RoLTF9YCk7XG59XG5cbi8vZnVuY3Rpb24gdG8gY2xlYXIgYWxsIHRhc2tzXG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7XG4gICAgLy9jb25zb2xlLmxvZyhcImNsZWFyIHN0YXJ0ZWRcIik7XG4gICAgY29uc3QgYXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xuICAgIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7ICAgICAgICBcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBsZXQgbmV3VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRhc2stYnRuXCIpXG4gICAgaWYgKG5ld1Rhc2tCdG4gIT0gbnVsbCl7XG4gICAgbmV3VGFza0J0bi5yZW1vdmUoKTtcbiAgICB9O1xuICAgIC8vY29uc29sZS5sb2coXCJjbGVhciBmaW5pc2hlZFwiKTtcbn07XG5cbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGFkZCBibGFuayB0YXNrIGJ1dHRvblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2tCdG4oKXtcbiAgICBsZXQgbmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgbmV3VGFza0J0bi5pZCA9IFwibmV3LXRhc2stYnRuXCI7XG4gICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbmV3VGFzayk7IFxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKG5ld1Rhc2tCdG4pO1xufVxuXG4vL2Z1bmN0aW9uIHRvIGZpbmQgYSB0YXNrIGJ5IGl0cyBpZFxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFRhc2soaWQpe1xuICAgIGxldCBpbmRleCA9IGlkLnNsaWNlKDUpO1xuICAgIHJldHVybiBpbmRleFxufVxuXG4vL2Z1bmN0aW9uIHRvIHJlbW92ZSBhIHRhc2tcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soaW5kZXgpIHtcbiAgICB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNob3dUYXNrcygpO1xufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBmb3JtYXQsIGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBhZGROYXYgfSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyBzZXRUYXNrTGlzdCwgY3JlYXRlVGFzaywgbmV3VGFzaywgY3JlYXRlTmV3VGFza0J0biwgc2hvd1Rhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250YWluZXInKTtcblxuYWRkTmF2KCk7XG4vL2xvY2FsU3RvcmFnZS5jbGVhcigpXG4vL2FkZFRhc2soY3JlYXRlVGFzayhcImV4YW1wbGUxXCIsXCJkZXNjcmlwdGlvbjFcIixcIjEvMS8yMDIxXCIsXCIxXCIsXCJtYWluXCIpKTtcbi8vYWRkVGFzayhjcmVhdGVUYXNrKFwiZXhhbXBsZTJcIixcImRlc2NyaXB0aW9uMlwiLFwiMS8yLzIwMjFcIixcIjJcIixcIm1haW5cIikpO1xuc2hvd1Rhc2tzKCk7XG5cblxuLy9mdW5jdGlvbiB0byByZWFkIGxvY2FsIHN0b3JhZ2UsIFxuLy9zZXQgZW1wdHkgYXJyYXkgaWYgZW1wdHkuLi4gc2V0IHN0b3JlZCB0YXNrbGlzdCBvdGhlcndpc2VcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTGlzdCcpKSB7XG4gIGNvbnNvbGUubG9nKFwibG9jYWwgc3RvcmFnZSBpcyBlbXB0eVwiKTtcbn0gZWxzZSB7XG4gIHNldFRhc2tMaXN0KGxvY2FsU3RvcmFnZS5nZXRPYmooJ3Rhc2tMaXN0JykpO1xufVxuXG4vL0FUVFJJQlVURVNcblxuLy8gVGhyZWUgRG90IGJ5IHdhaHlha3VwIGZyb20gTm91blByb2plY3QuY29tXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=