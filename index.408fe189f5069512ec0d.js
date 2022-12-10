"use strict";
(self["webpackChunky"] = self["webpackChunky"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/addBookForm.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/addBookForm.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form {\n    position: absolute;\n}\n\nform fieldset {\n    background-color: var(--main-color-light);\n    border: 10px solid var(--main-color-dark);\n    border-radius: 20px;\n    padding: 40px;\n}\n\nform legend {\n    font-size: 1.5rem;\n    padding: 0 20px;\n}\n\nform li {\n    margin-bottom: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\nform li:nth-child(4) {\n    flex-wrap: wrap;\n}\n\nform input[type=\"text\"],\nform input[type=\"number\"] {\n    border-radius: 50px;\n    border: none;\n    height: 2rem;\n    padding: 0 10px;\n    outline: none;\n    background-color: var(--library-color);\n}\n\nform input.error {\n    border: 3px solid red;\n}\n\nform input.success {\n    border: 3px solid green;\n}\n\nform label.finish {\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\nform label.finish:first-child {\n    margin-right: 10px;\n}\n\nform button[type=\"submit\"] {\n    display: block;\n    margin: 0 auto;\n}\n\nform .closeBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 35px;\n    height: 35px;\n    background-color: #fff;\n    border-radius: 20px;\n    border: 5px solid var(--main-color-dark);\n}\n\nform .closeBtn::before,\nform .closeBtn::after {\n    position: absolute;\n    content: \"\";\n    height: 20px;\n    width: 2px;\n    top: 50%;\n    right: 50%;\n    background-color: var(--main-color-dark);\n    opacity: 0.5;\n}\n\nform .closeBtn::before {\n    transform: translate(50%, -50%) rotate(45deg);\n}\n\nform .closeBtn::after {\n    transform: translate(50%, -50%) rotate(-45deg);\n}\n\nform .closeBtn:hover::before,\nform .closeBtn:hover::after {\n    opacity: 1;\n}\n\nform button[type=\"submit\"] {\n    background-color: var(--button-bgc-color);\n    color: var(--main-color-light);\n    min-width: 125px;\n    border-radius: 20px;\n    padding: 10px 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/addBookForm.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,yCAAyC;IACzC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,aAAa;IACb,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,wCAAwC;AAC5C;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,UAAU;IACV,QAAQ;IACR,UAAU;IACV,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,6CAA6C;AACjD;;AAEA;IACI,8CAA8C;AAClD;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,yCAAyC;IACzC,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["form {\n    position: absolute;\n}\n\nform fieldset {\n    background-color: var(--main-color-light);\n    border: 10px solid var(--main-color-dark);\n    border-radius: 20px;\n    padding: 40px;\n}\n\nform legend {\n    font-size: 1.5rem;\n    padding: 0 20px;\n}\n\nform li {\n    margin-bottom: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 20px;\n}\n\nform li:nth-child(4) {\n    flex-wrap: wrap;\n}\n\nform input[type=\"text\"],\nform input[type=\"number\"] {\n    border-radius: 50px;\n    border: none;\n    height: 2rem;\n    padding: 0 10px;\n    outline: none;\n    background-color: var(--library-color);\n}\n\nform input.error {\n    border: 3px solid red;\n}\n\nform input.success {\n    border: 3px solid green;\n}\n\nform label.finish {\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\nform label.finish:first-child {\n    margin-right: 10px;\n}\n\nform button[type=\"submit\"] {\n    display: block;\n    margin: 0 auto;\n}\n\nform .closeBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 35px;\n    height: 35px;\n    background-color: #fff;\n    border-radius: 20px;\n    border: 5px solid var(--main-color-dark);\n}\n\nform .closeBtn::before,\nform .closeBtn::after {\n    position: absolute;\n    content: \"\";\n    height: 20px;\n    width: 2px;\n    top: 50%;\n    right: 50%;\n    background-color: var(--main-color-dark);\n    opacity: 0.5;\n}\n\nform .closeBtn::before {\n    transform: translate(50%, -50%) rotate(45deg);\n}\n\nform .closeBtn::after {\n    transform: translate(50%, -50%) rotate(-45deg);\n}\n\nform .closeBtn:hover::before,\nform .closeBtn:hover::after {\n    opacity: 1;\n}\n\nform button[type=\"submit\"] {\n    background-color: var(--button-bgc-color);\n    color: var(--main-color-light);\n    min-width: 125px;\n    border-radius: 20px;\n    padding: 10px 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_library_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./library.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/library.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_addBookForm_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./addBookForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/addBookForm.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_library_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_addBookForm_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/library.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/library.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/check.png */ "./src/img/check.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".library {\n    min-width: 400px;\n    width: 80%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    row-gap: 30px;\n}\n\n.library .title {\n    font-weight: bold;\n}\n\n.library .bookItem {\n    border: 2px solid var(--main-color-dark);\n    padding: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: space-between;\n    column-gap: 20px;\n    position: relative;\n}\n\n.library .info {\n    display: flex;\n    column-gap: 10px;\n    align-items: center;\n}\n\n.library .stamp {\n    display: inline-block;\n    padding: 10px 0px;\n    text-transform: uppercase;\n    border-radius: 20px;\n    color: #d23;\n    font-size: 1.5rem;\n    border: 8px double #d23;\n    font-family: \"Courier\";\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: max(200px, 30%);\n    transform: translate(-50%, -50%) scale(1) rotate(-10deg);\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity .3s, visibility .3s;\n}\n\n.library .bookItem.finished .stamp {\n    opacity: 1;\n    visibility: visible;\n    animation: pulse .5s;\n}\n\n@keyframes pulse {\n    0% {\n        opacity: 0;\n        transform: translate(-50%, -50%) rotate(-5deg) scale(5);\n    }\n    50% {\n        opacity: 0.5;\n        transform: translate(-50%, -50%) rotate(-8deg) scale(1);\n    }\n    100% {\n        opacity: 1;\n        transform: translate(-50%, -50%) rotate(-10deg) scale(1);\n    }\n}\n\n.library .completeBtn {\n    appearance: none;\n    position: absolute;\n    right: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    margin-right: 15px;\n    width: 25px;\n    height: 25px;\n    border: 2px solid black;\n    border-radius: 50px;\n    display: grid;\n    place-content: center;\n    cursor: pointer;\n}\n\n.library .completeBtn::before {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n}\n\n.library .bookItem.finished .completeBtn::before {\n    transform: scale(0.9);\n    filter: invert(21%) sepia(98%) saturate(4405%) hue-rotate(109deg)\n        brightness(95%) contrast(102%);\n}\n\n.library .bookItem.finished .completeBtn {\n    border-color: rgb(0, 128, 0);\n}\n\n.library .completeBtn:hover {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n}\n\n.library .btnWrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.btnWrap button {\n    color: var(--main-color-light);\n    min-width: 125px;\n    border-radius: 20px;\n    padding: 10px 30px;\n    border: 1px solid transparent;\n    display: block;\n}\n\n.btnWrap button:hover {\n    border: 1px solid var(--main-color-dark);\n    box-shadow: 0px 0px 5px 1px var(--main-color-dark);\n}\n\n.btnWrap .editBtn {\n    background-color: goldenrod;\n}\n.btnWrap .deleteBtn {\n    background-color: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/css/library.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,UAAU;IACV,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,iBAAiB;IACjB,uBAAuB;IACvB,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,wDAAwD;IACxD,UAAU;IACV,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI;QACI,UAAU;QACV,uDAAuD;IAC3D;IACA;QACI,YAAY;QACZ,uDAAuD;IAC3D;IACA;QACI,UAAU;QACV,wDAAwD;IAC5D;AACJ;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,QAAQ;IACR,2BAA2B;IAC3B,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uCAAuC;IACvC,yDAAyC;IACzC,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB;sCACkC;AACtC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,wCAAwC;IACxC,kDAAkD;AACtD;;AAEA;IACI,2BAA2B;AAC/B;AACA;IACI,sBAAsB;AAC1B","sourcesContent":[".library {\n    min-width: 400px;\n    width: 80%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    row-gap: 30px;\n}\n\n.library .title {\n    font-weight: bold;\n}\n\n.library .bookItem {\n    border: 2px solid var(--main-color-dark);\n    padding: 20px;\n    border-radius: 20px;\n    display: flex;\n    justify-content: space-between;\n    column-gap: 20px;\n    position: relative;\n}\n\n.library .info {\n    display: flex;\n    column-gap: 10px;\n    align-items: center;\n}\n\n.library .stamp {\n    display: inline-block;\n    padding: 10px 0px;\n    text-transform: uppercase;\n    border-radius: 20px;\n    color: #d23;\n    font-size: 1.5rem;\n    border: 8px double #d23;\n    font-family: \"Courier\";\n    text-align: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: max(200px, 30%);\n    transform: translate(-50%, -50%) scale(1) rotate(-10deg);\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity .3s, visibility .3s;\n}\n\n.library .bookItem.finished .stamp {\n    opacity: 1;\n    visibility: visible;\n    animation: pulse .5s;\n}\n\n@keyframes pulse {\n    0% {\n        opacity: 0;\n        transform: translate(-50%, -50%) rotate(-5deg) scale(5);\n    }\n    50% {\n        opacity: 0.5;\n        transform: translate(-50%, -50%) rotate(-8deg) scale(1);\n    }\n    100% {\n        opacity: 1;\n        transform: translate(-50%, -50%) rotate(-10deg) scale(1);\n    }\n}\n\n.library .completeBtn {\n    appearance: none;\n    position: absolute;\n    right: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    margin-right: 15px;\n    width: 25px;\n    height: 25px;\n    border: 2px solid black;\n    border-radius: 50px;\n    display: grid;\n    place-content: center;\n    cursor: pointer;\n}\n\n.library .completeBtn::before {\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    transform: scale(0);\n    transition: 120ms transform ease-in-out;\n    background-image: url(\"../img/check.png\");\n    background-size: cover;\n}\n\n.library .bookItem.finished .completeBtn::before {\n    transform: scale(0.9);\n    filter: invert(21%) sepia(98%) saturate(4405%) hue-rotate(109deg)\n        brightness(95%) contrast(102%);\n}\n\n.library .bookItem.finished .completeBtn {\n    border-color: rgb(0, 128, 0);\n}\n\n.library .completeBtn:hover {\n    outline: 2px solid currentColor;\n    outline-offset: 2px;\n}\n\n.library .btnWrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.btnWrap button {\n    color: var(--main-color-light);\n    min-width: 125px;\n    border-radius: 20px;\n    padding: 10px 30px;\n    border: 1px solid transparent;\n    display: block;\n}\n\n.btnWrap button:hover {\n    border: 1px solid var(--main-color-dark);\n    box-shadow: 0px 0px 5px 1px var(--main-color-dark);\n}\n\n.btnWrap .editBtn {\n    background-color: goldenrod;\n}\n.btnWrap .deleteBtn {\n    background-color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://necolas.github.io/normalize.css/latest/normalize.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* normalize */\n/* Noto Sans */\n\n:root {\n    --main-color-light: rgb(255, 255, 255);\n    --main-color-dark: rgb(0, 0, 0);\n    --library-color: rgb(226, 232, 240);\n    --button-bgc-color: rgb(25, 146, 211);\n    --overlay-bgc-color:  rgba(0, 0, 0, 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    font-family: \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n        Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n        \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nul,\nli {\n    list-style: none;\n}\n\nbutton {\n    border: 0;\n    cursor: pointer;\n}\n\nbody {\n    display: grid;\n    grid-template: 100px 8fr / 1fr 1fr;\n    grid-template-areas: \n    'header header'\n    'main main';\n    min-height: 100vh;\n    height: auto;\n    position: relative;\n}\n\nheader {\n    grid-area: header;\n    padding: 20px 30px;\n    background-color: var(--main-color-light);\n    min-height: 100px;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1;\n}\n\n\n.container {\n    grid-area: main;\n    background-color: var(--library-color);\n    padding: 50px;\n}\n\n.overlay {\n    visibility: hidden;\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color:var(--overlay-bgc-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.overlay.show {\n    visibility: visible;\n    opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA,cAAc;AAEd,cAAc;;AAGd;IACI,sCAAsC;IACtC,+BAA+B;IAC/B,mCAAmC;IACnC,qCAAqC;IACrC,wCAAwC;AAC5C;;AAEA;IACI,sBAAsB;IACtB;;2CAEuC;AAC3C;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC;;eAEW;IACX,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,yCAAyC;IACzC,iBAAiB;IACjB,eAAe;IACf,OAAO;IACP,QAAQ;IACR,MAAM;IACN,UAAU;AACd;;;AAGA;IACI,eAAe;IACf,sCAAsC;IACtC,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,yCAAyC;IACzC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd","sourcesContent":["/* normalize */\n@import url(\"https://necolas.github.io/normalize.css/latest/normalize.css\");\n/* Noto Sans */\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap\");\n\n:root {\n    --main-color-light: rgb(255, 255, 255);\n    --main-color-dark: rgb(0, 0, 0);\n    --library-color: rgb(226, 232, 240);\n    --button-bgc-color: rgb(25, 146, 211);\n    --overlay-bgc-color:  rgba(0, 0, 0, 0.3);\n}\n\n* {\n    box-sizing: border-box;\n    font-family: \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n        Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n        \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n\nul,\nli {\n    list-style: none;\n}\n\nbutton {\n    border: 0;\n    cursor: pointer;\n}\n\nbody {\n    display: grid;\n    grid-template: 100px 8fr / 1fr 1fr;\n    grid-template-areas: \n    'header header'\n    'main main';\n    min-height: 100vh;\n    height: auto;\n    position: relative;\n}\n\nheader {\n    grid-area: header;\n    padding: 20px 30px;\n    background-color: var(--main-color-light);\n    min-height: 100px;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1;\n}\n\n\n.container {\n    grid-area: main;\n    background-color: var(--library-color);\n    padding: 50px;\n}\n\n.overlay {\n    visibility: hidden;\n    opacity: 0;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color:var(--overlay-bgc-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n}\n\n.overlay.show {\n    visibility: visible;\n    opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.navbar .addBtn {\n    background-color: var(--button-bgc-color);\n    color: var(--main-color-light);\n    min-width: 125px;\n    border-radius: 20px;\n    padding: 10px 30px;\n}\n\n    ", "",{"version":3,"sources":["webpack://./src/css/navbar.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,yCAAyC;IACzC,8BAA8B;IAC9B,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.navbar .addBtn {\n    background-color: var(--button-bgc-color);\n    color: var(--main-color-light);\n    min-width: 125px;\n    border-radius: 20px;\n    padding: 10px 30px;\n}\n\n    "],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/handleBook.js":
/*!**************************************!*\
  !*** ./src/components/handleBook.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleBook": () => (/* binding */ handleBook)
/* harmony export */ });
/* harmony import */ var _layout_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/container */ "./src/layout/container.js");




const handleBook = (() => {
    const getBooks = () => {
        const books = localStorage.getItem("books");

        if (!books) return [];

        return JSON.parse(books);
    };

    const createBook = (data) => {
        try {
            const book = data;
            const books = getBooks();

            if (books.length > 0) {
                book.id = books.at(-1).id + 1;
            } else {
                book.id = 1;
            }

            books.push(book);

            localStorage.setItem("books", JSON.stringify(books));

            _layout_container__WEBPACK_IMPORTED_MODULE_0__.container.createItem(book);
        } catch (error) {
            console.log(error);
        }
    };

    const updateBook = (data, id) => {
        try {
            const book = data;
            const books = getBooks();
            const index = books.findIndex((item) => item.id === id);

            books[index].title = book.title;
            books[index].author = book.author;
            books[index].pages = book.pages;
            books[index].isFinished = book.isFinished;

            localStorage.setItem("books", JSON.stringify(books));

            _layout_container__WEBPACK_IMPORTED_MODULE_0__.container.updateItem(books[index]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBook = (book) => {
        try {
            const books = getBooks();
            const index = books.findIndex((item) => item.id === book.id);

            books.splice(index, 1);

            localStorage.setItem("books", JSON.stringify(books));

            _layout_container__WEBPACK_IMPORTED_MODULE_0__.container.deleteItem(book.id)

        } catch (error) {
            console.log(error);
        }
    };

    return {
        createBook,
        updateBook,
        deleteBook,
        getBooks,
    };
})();




/***/ }),

/***/ "./src/components/handleForm.js":
/*!**************************************!*\
  !*** ./src/components/handleForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleForm": () => (/* binding */ handleForm)
/* harmony export */ });
/* harmony import */ var _components_handleBook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/handleBook */ "./src/components/handleBook.js");




const handleForm = (() => {
    const validField = function (e) {
        const inputState = this.validity; // Constraint validation
        const type = this.type;
        this.setCustomValidity("");

        if (this.classList.length === 1) {
            this.classList.remove(this.classList[0]);
        }

        if (this.value.length === 0 || inputState.valueMissing) {
            return;
        }

        if (e.type === "focusout") {
            this.removeEventListener("focusout", handleForm.validField);
            this.addEventListener("input", validField);
        }

        const patterns = {
            title: "^[A-Za-z0-9]{1,100}$",
            author: "^[A-Za-z0-9]{1,20}$",
            number: "^[0-9]{1,4}$",
        };

        let regex = new RegExp(patterns[this.type], "g");

        if (type === "text") {
            regex = new RegExp(patterns[this.name], "g");
        }

        const valid = regex.test(this.value);

        if (!valid || !inputState.valid) {
            switch (type) {
                case "text":
                    if (this.name === "title") {
                        this.setCustomValidity(
                            "The value must be alphanumeric of 100 characters."
                        );
                    }

                    if (this.name === "author") {
                        this.setCustomValidity(
                            "The value must be alphanumeric of 20 characters."
                        );
                    }
                    break;
                case "number":
                    this.setCustomValidity("The number must be less than 9999");
                    break;
            }
            this.reportValidity();
            this.classList.add("error");
            return;
        }

        this.classList.add("success");
    };

    const submitData = function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);

        for (let key in formProps) {
            let field = this.elements[key];

            if (field.length) {
                field = Array.from(field).find((i) => i.checked);
            }

            if (!field.value) {
                field.removeEventListener("focusout", handleForm.validField);
                field.addEventListener("input", validField);
                field.setCustomValidity("The field must be correct value");
                field.reportValidity();
                field.classList.add("error");
                return false;
            }

            if (field.classList.contains("error")) {
                validField.call(field, e);
                return false;
            }
        }

        if (this.dataset.bookId) {
            _components_handleBook__WEBPACK_IMPORTED_MODULE_0__.handleBook.updateBook(formProps, +this.dataset.bookId);
        } else {
            _components_handleBook__WEBPACK_IMPORTED_MODULE_0__.handleBook.createBook(formProps);
        }

        return true
    };

    return {
        validField,
        submitData,
    };
})();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ "./src/library.js");




const library = (0,_library__WEBPACK_IMPORTED_MODULE_0__.createLibrary)();

library.init();


/***/ }),

/***/ "./src/layout/container.js":
/*!*********************************!*\
  !*** ./src/layout/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "container": () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/layout/header.js");
/* harmony import */ var _components_handleBook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/handleBook */ "./src/components/handleBook.js");





const container = (() => {
    const library = document.querySelector(".library");

    library.addEventListener("pointerdown", activeItemBtn);

    const createItem = (book) => {
        const template = `
            <input class="completeBtn" type="checkbox" />
                <div>
                    <p class="title"></p>
                    <div class="info">
                        <p>Author: <span class="author"></span></p>
                        <span>—</span>
                        <p><span class="pages">400</span> pages</p>
                    </div>
                </div>
                <div class="btnWrap">
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>
                </div>
                <span class="stamp">Finished</span>
            </li>`;

        const li = document.createElement("li");
        li.className = "bookItem";
        li.innerHTML = template;
        li.id = book.id;

        if (+book.isFinished) {
            li.classList.add("finished");
        }

        li.querySelector(".title").textContent = book.title;
        li.querySelector(".author").textContent = book.author;
        li.querySelector(".pages").textContent = book.pages;

        library.append(li);
    };

    const updateItem = (book) => {
        const item = document.querySelector(`.bookItem[id='${book.id}']`);

        if (+book.isFinished) {
            item.classList.add("finished");
        } else {
            item.classList.remove("finished");
        }

        item.querySelector(".title").textContent = book.title;
        item.querySelector(".author").textContent = book.author;
        item.querySelector(".pages").textContent = book.pages;
    };

    const deleteItem = (id) => {
        const item = document.querySelector(`.bookItem[id='${id}']`);
        item.remove();
    }

    function activeItemBtn(e) {
        if (e.target.closest(".editBtn")) {
            const books = _components_handleBook__WEBPACK_IMPORTED_MODULE_1__.handleBook.getBooks();

            const book = books.find(
                (item) => item.id === +e.target.closest(".bookItem").id
            );

            if (!book) return;

            _header__WEBPACK_IMPORTED_MODULE_0__.header.createBookForm(book);
        }
        if (e.target.closest(".deleteBtn")) {
            const books = _components_handleBook__WEBPACK_IMPORTED_MODULE_1__.handleBook.getBooks();

            const book = books.find(
                (item) => item.id === +e.target.closest(".bookItem").id
            );

            if (!book) return;

            _components_handleBook__WEBPACK_IMPORTED_MODULE_1__.handleBook.deleteBook(book);
        }
        if (e.target.closest(".completeBtn")) {
            const books = _components_handleBook__WEBPACK_IMPORTED_MODULE_1__.handleBook.getBooks();

            const book = books.find(
                (item) => item.id === +e.target.closest(".bookItem").id
            );

            if (!book) return;

            if (+book.isFinished) {
                book.isFinished = '0'
            } else {
                book.isFinished = "1";
            }

            _components_handleBook__WEBPACK_IMPORTED_MODULE_1__.handleBook.updateBook(book, book.id);
        }
    }

    return {
        createItem,
        updateItem,
        deleteItem,
    };
})();




/***/ }),

/***/ "./src/layout/header.js":
/*!******************************!*\
  !*** ./src/layout/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _components_handleForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/handleForm */ "./src/components/handleForm.js");




const header = (() => {
    const overlay = document.querySelector(".overlay");
    overlay.addEventListener("pointerdown", closeBookFormByPointer);

    const createBookForm = (book) => {
        const template = `
            <fieldset>
                <button type="button" class="closeBtn"></button>
                <legend>Add New Book!</legend>
                <ul>
                    <li>
                        <label for="bookTitle">Title</label>
                        <input
                            type="text"
                            id="bookTitle"
                            name="title"
                            title="The title must be alphanumeric."
                            maxlength="100"
                            pattern="^[A-Za-z1-9]{1,100}$"
                            required
                        />
                    </li>
                    <li>
                        <label for="bookAuthor">Author</label>
                        <input
                            type="text"
                            id="bookAuthor"
                            name="author"
                            title="The author must be alphanumeric."
                            maxlength="20"
                            pattern="^[A-Za-z1-9]{1,20}$"
                            required
                        />
                    </li>
                    <li>
                        <label for="bookPages">Pages</label>
                        <input
                            type="number"
                            id="bookPages"
                            name="pages"
                            title="The author must be alphanumeric."
                            max="9999"
                            maxlength="4"
                            required
                        />
                    </li>
                    <li>
                        <p>Have you finished it?</p>
                        <div>
                            <label class="finish" for="finished">
                                Yes
                                <input
                                    type="radio"
                                    id="finished"
                                    name="isFinished"
                                    value="1"
                                    required
                                />
                            </label>
                            <label class="finish" for="unfinished">
                                Not yet
                                <input
                                    type="radio"
                                    id="unfinished"
                                    name="isFinished"
                                    value="0"
                                    required
                                    checked
                                />
                            </label>
                        </div>
                    </li>
                </ul>
                <button type="submit">Add Book</button>
            </fieldset>`;

        const form = document.createElement("form");
        form.innerHTML = template;
        form.setAttribute("novalidate", true);

        if (book) {
            form.dataset.bookId = book.id;
            form.elements.title.value = book.title;
            form.elements.author.value = book.author;
            form.elements.pages.value = book.pages;

            for (let field of form.elements.isFinished) {
                if (field.value === book.isFinished) {
                    field.checked = true;
                }
            }
        }

        overlay.append(form);

        const inputs = Array.from(
            form.querySelectorAll("input:not([type='radio'])")
        );

        for (let field of inputs) {
            field.addEventListener("focusout", _components_handleForm__WEBPACK_IMPORTED_MODULE_0__.handleForm.validField);
        }
        form.addEventListener("submit", function (e) {
            const result = _components_handleForm__WEBPACK_IMPORTED_MODULE_0__.handleForm.submitData.call(form, e);
            if (result) {
                closeBookForm();
            }
        });

        overlay.classList.add("show");
    };

    function closeBookFormByPointer(e) {
        const closeBtn = overlay.querySelector(".closeBtn");
        if (e.target === overlay || e.target === closeBtn) {
            closeBookForm();
        }
    }

    function closeBookForm() {
        overlay.firstElementChild.remove();
        overlay.classList.remove("show");
    }

    return {
        createBookForm,
    };
})();




/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLibrary": () => (/* binding */ createLibrary)
/* harmony export */ });
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header */ "./src/layout/header.js");
/* harmony import */ var _layout_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/container */ "./src/layout/container.js");
/* harmony import */ var _components_handleBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/handleBook */ "./src/components/handleBook.js");







const createLibrary = () => {
    // caches Dom
    const addBookBtn = document.querySelector(".addBtn");

    // event
    addBookBtn.addEventListener("pointerdown", () => {
        _layout_header__WEBPACK_IMPORTED_MODULE_1__.header.createBookForm();
    });

    const init = () => {
        const books = _components_handleBook__WEBPACK_IMPORTED_MODULE_3__.handleBook.getBooks();

        for (let item of books) {
            _layout_container__WEBPACK_IMPORTED_MODULE_2__.container.createItem(item);
        }
    };

    return {
        init,
    };
};




/***/ }),

/***/ "./src/img/check.png":
/*!***************************!*\
  !*** ./src/img/check.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/2ddfd833a3383b9f54de.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2Nzcy9hZGRCb29rRm9ybS5jc3MiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jc3MvaW5kZXguY3NzIiwid2VicGFjazovL3kvLi9zcmMvY3NzL2xpYnJhcnkuY3NzIiwid2VicGFjazovL3kvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3kvLi9zcmMvY3NzL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3kvLi9zcmMvY3NzL2luZGV4LmNzcz9mN2VhIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8veS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3kvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly95Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb21wb25lbnRzL2hhbmRsZUJvb2suanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9jb21wb25lbnRzL2hhbmRsZUZvcm0uanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly95Ly4vc3JjL2xheW91dC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8veS8uL3NyYy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL3kvLi9zcmMvbGlicmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmZvcm0gZmllbGRzZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0KTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbmZvcm0gbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuZm9ybSBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGxpOm50aC1jaGlsZCg0KSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpYnJhcnktY29sb3IpO1xcbn1cXG5cXG5mb3JtIGlucHV0LmVycm9yIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG5mb3JtIGlucHV0LnN1Y2Nlc3Mge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuZm9ybSBsYWJlbC5maW5pc2gge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvcm0gbGFiZWwuZmluaXNoOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZm9ybSAuY2xvc2VCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItZGFyayk7XFxufVxcblxcbmZvcm0gLmNsb3NlQnRuOjpiZWZvcmUsXFxuZm9ybSAuY2xvc2VCdG46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1kYXJrKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5mb3JtIC5jbG9zZUJ0bjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG5mb3JtIC5jbG9zZUJ0bjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5mb3JtIC5jbG9zZUJ0bjpob3Zlcjo6YmVmb3JlLFxcbmZvcm0gLmNsb3NlQnRuOmhvdmVyOjphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnYy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0KTtcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2FkZEJvb2tGb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmZvcm0gZmllbGRzZXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0KTtcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItZGFyayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbmZvcm0gbGVnZW5kIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuZm9ybSBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtIGxpOm50aC1jaGlsZCg0KSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpYnJhcnktY29sb3IpO1xcbn1cXG5cXG5mb3JtIGlucHV0LmVycm9yIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xcbn1cXG5cXG5mb3JtIGlucHV0LnN1Y2Nlc3Mge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuZm9ybSBsYWJlbC5maW5pc2gge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvcm0gbGFiZWwuZmluaXNoOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZm9ybSAuY2xvc2VCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItZGFyayk7XFxufVxcblxcbmZvcm0gLmNsb3NlQnRuOjpiZWZvcmUsXFxuZm9ybSAuY2xvc2VCdG46OmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMnB4O1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1kYXJrKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5mb3JtIC5jbG9zZUJ0bjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG5mb3JtIC5jbG9zZUJ0bjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xcbn1cXG5cXG5mb3JtIC5jbG9zZUJ0bjpob3Zlcjo6YmVmb3JlLFxcbmZvcm0gLmNsb3NlQnRuOmhvdmVyOjphZnRlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnYy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0KTtcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlicmFyeS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hZGRCb29rRm9ybS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2NoZWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5saWJyYXJ5IHtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDMwcHg7XFxufVxcblxcbi5saWJyYXJ5IC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGlicmFyeSAuYm9va0l0ZW0ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLWRhcmspO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxpYnJhcnkgLmluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlicmFyeSAuc3RhbXAge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBjb2xvcjogI2QyMztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJvcmRlcjogOHB4IGRvdWJsZSAjZDIzO1xcbiAgICBmb250LWZhbWlseTogXFxcIkNvdXJpZXJcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IG1heCgyMDBweCwgMzAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSkgcm90YXRlKC0xMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MsIHZpc2liaWxpdHkgLjNzO1xcbn1cXG5cXG4ubGlicmFyeSAuYm9va0l0ZW0uZmluaXNoZWQgLnN0YW1wIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAuNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgICAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC01ZGVnKSBzY2FsZSg1KTtcXG4gICAgfVxcbiAgICA1MCUge1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC04ZGVnKSBzY2FsZSgxKTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTEwZGVnKSBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG4ubGlicmFyeSAuY29tcGxldGVCdG4ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpYnJhcnkgLmNvbXBsZXRlQnRuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubGlicmFyeSAuYm9va0l0ZW0uZmluaXNoZWQgLmNvbXBsZXRlQnRuOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIxJSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg0NDA1JSkgaHVlLXJvdGF0ZSgxMDlkZWcpXFxuICAgICAgICBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5saWJyYXJ5IC5ib29rSXRlbS5maW5pc2hlZCAuY29tcGxldGVCdG4ge1xcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAxMjgsIDApO1xcbn1cXG5cXG4ubGlicmFyeSAuY29tcGxldGVCdG46aG92ZXIge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG5cXG4ubGlicmFyeSAuYnRuV3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYnRuV3JhcCBidXR0b24ge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci1saWdodCk7XFxuICAgIG1pbi13aWR0aDogMTI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uYnRuV3JhcCBidXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yLWRhcmspO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggdmFyKC0tbWFpbi1jb2xvci1kYXJrKTtcXG59XFxuXFxuLmJ0bldyYXAgLmVkaXRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxufVxcbi5idG5XcmFwIC5kZWxldGVCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2xpYnJhcnkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsd0RBQXdEO0lBQ3hELFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVix1REFBdUQ7SUFDM0Q7SUFDQTtRQUNJLFlBQVk7UUFDWix1REFBdUQ7SUFDM0Q7SUFDQTtRQUNJLFVBQVU7UUFDVix3REFBd0Q7SUFDNUQ7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHlEQUF5QztJQUN6QyxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckI7c0NBQ2tDO0FBQ3RDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGlicmFyeSB7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubGlicmFyeSAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpYnJhcnkgLmJvb2tJdGVtIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvci1kYXJrKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5saWJyYXJ5IC5pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpYnJhcnkgLnN0YW1wIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY29sb3I6ICNkMjM7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBib3JkZXI6IDhweCBkb3VibGUgI2QyMztcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJDb3VyaWVyXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiBtYXgoMjAwcHgsIDMwJSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpIHJvdGF0ZSgtMTBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzLCB2aXNpYmlsaXR5IC4zcztcXG59XFxuXFxuLmxpYnJhcnkgLmJvb2tJdGVtLmZpbmlzaGVkIC5zdGFtcCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIGFuaW1hdGlvbjogcHVsc2UgLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gICAgMCUge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNWRlZykgc2NhbGUoNSk7XFxuICAgIH1cXG4gICAgNTAlIHtcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOGRlZykgc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC0xMGRlZykgc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuLmxpYnJhcnkgLmNvbXBsZXRlQnRuIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saWJyYXJ5IC5jb21wbGV0ZUJ0bjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvY2hlY2sucG5nXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5saWJyYXJ5IC5ib29rSXRlbS5maW5pc2hlZCAuY29tcGxldGVCdG46OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjElKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDQ0MDUlKSBodWUtcm90YXRlKDEwOWRlZylcXG4gICAgICAgIGJyaWdodG5lc3MoOTUlKSBjb250cmFzdCgxMDIlKTtcXG59XFxuXFxuLmxpYnJhcnkgLmJvb2tJdGVtLmZpbmlzaGVkIC5jb21wbGV0ZUJ0biB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XFxufVxcblxcbi5saWJyYXJ5IC5jb21wbGV0ZUJ0bjpob3ZlciB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcblxcbi5saWJyYXJ5IC5idG5XcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5idG5XcmFwIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0KTtcXG4gICAgbWluLXdpZHRoOiAxMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5idG5XcmFwIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tY29sb3ItZGFyayk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCB2YXIoLS1tYWluLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4uYnRuV3JhcCAuZWRpdEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXG59XFxuLmJ0bldyYXAgLmRlbGV0ZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL25lY29sYXMuZ2l0aHViLmlvL25vcm1hbGl6ZS5jc3MvbGF0ZXN0L25vcm1hbGl6ZS5jc3MpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogbm9ybWFsaXplICovXFxuLyogTm90byBTYW5zICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3ItbGlnaHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgLS1tYWluLWNvbG9yLWRhcms6IHJnYigwLCAwLCAwKTtcXG4gICAgLS1saWJyYXJ5LWNvbG9yOiByZ2IoMjI2LCAyMzIsIDI0MCk7XFxuICAgIC0tYnV0dG9uLWJnYy1jb2xvcjogcmdiKDI1LCAxNDYsIDIxMSk7XFxuICAgIC0tb3ZlcmxheS1iZ2MtY29sb3I6ICByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgICAgIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgICAgIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwcHggOGZyIC8gMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdoZWFkZXIgaGVhZGVyJ1xcbiAgICAnbWFpbiBtYWluJztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLWxpZ2h0KTtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlicmFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1vdmVybGF5LWJnYy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ub3ZlcmxheS5zaG93IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBRWQsY0FBYzs7QUFHZDtJQUNJLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEI7OzJDQUV1QztBQUMzQzs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEM7O2VBRVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBub3JtYWxpemUgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9uZWNvbGFzLmdpdGh1Yi5pby9ub3JtYWxpemUuY3NzL2xhdGVzdC9ub3JtYWxpemUuY3NzXFxcIik7XFxuLyogTm90byBTYW5zICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLWNvbG9yLWxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIC0tbWFpbi1jb2xvci1kYXJrOiByZ2IoMCwgMCwgMCk7XFxuICAgIC0tbGlicmFyeS1jb2xvcjogcmdiKDIyNiwgMjMyLCAyNDApO1xcbiAgICAtLWJ1dHRvbi1iZ2MtY29sb3I6IHJnYigyNSwgMTQ2LCAyMTEpO1xcbiAgICAtLW92ZXJsYXktYmdjLWNvbG9yOiAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgICAgICBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgICAgICBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDhmciAvIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbic7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci1saWdodCk7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpYnJhcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tb3ZlcmxheS1iZ2MtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm92ZXJsYXkuc2hvdyB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIgLmFkZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZ2MtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvci1saWdodCk7XFxuICAgIG1pbi13aWR0aDogMTI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG59XFxuXFxuICAgIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2YmFyIC5hZGRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmdjLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tY29sb3ItbGlnaHQpO1xcbiAgICBtaW4td2lkdGg6IDEyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbiAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9sYXlvdXQvY29udGFpbmVyXCI7XG5cbmNvbnN0IGhhbmRsZUJvb2sgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdldEJvb2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib29rcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYm9va3NcIik7XG5cbiAgICAgICAgaWYgKCFib29rcykgcmV0dXJuIFtdO1xuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJvb2tzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlQm9vayA9IChkYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib29rID0gZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gZ2V0Qm9va3MoKTtcblxuICAgICAgICAgICAgaWYgKGJvb2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBib29rLmlkID0gYm9va3MuYXQoLTEpLmlkICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9vay5pZCA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvb2tzLnB1c2goYm9vayk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm9va3NcIiwgSlNPTi5zdHJpbmdpZnkoYm9va3MpKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUl0ZW0oYm9vayk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlQm9vayA9IChkYXRhLCBpZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYm9vayA9IGRhdGE7XG4gICAgICAgICAgICBjb25zdCBib29rcyA9IGdldEJvb2tzKCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGJvb2tzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuXG4gICAgICAgICAgICBib29rc1tpbmRleF0udGl0bGUgPSBib29rLnRpdGxlO1xuICAgICAgICAgICAgYm9va3NbaW5kZXhdLmF1dGhvciA9IGJvb2suYXV0aG9yO1xuICAgICAgICAgICAgYm9va3NbaW5kZXhdLnBhZ2VzID0gYm9vay5wYWdlcztcbiAgICAgICAgICAgIGJvb2tzW2luZGV4XS5pc0ZpbmlzaGVkID0gYm9vay5pc0ZpbmlzaGVkO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJvb2tzXCIsIEpTT04uc3RyaW5naWZ5KGJvb2tzKSk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci51cGRhdGVJdGVtKGJvb2tzW2luZGV4XSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlQm9vayA9IChib29rKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBib29rcyA9IGdldEJvb2tzKCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGJvb2tzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYm9vay5pZCk7XG5cbiAgICAgICAgICAgIGJvb2tzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYm9va3NcIiwgSlNPTi5zdHJpbmdpZnkoYm9va3MpKTtcblxuICAgICAgICAgICAgY29udGFpbmVyLmRlbGV0ZUl0ZW0oYm9vay5pZClcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUJvb2ssXG4gICAgICAgIHVwZGF0ZUJvb2ssXG4gICAgICAgIGRlbGV0ZUJvb2ssXG4gICAgICAgIGdldEJvb2tzLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBoYW5kbGVCb29rIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaGFuZGxlQm9vayB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hhbmRsZUJvb2tcIjtcblxuY29uc3QgaGFuZGxlRm9ybSA9ICgoKSA9PiB7XG4gICAgY29uc3QgdmFsaWRGaWVsZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0U3RhdGUgPSB0aGlzLnZhbGlkaXR5OyAvLyBDb25zdHJhaW50IHZhbGlkYXRpb25cbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgdGhpcy5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcblxuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSAwIHx8IGlucHV0U3RhdGUudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50eXBlID09PSBcImZvY3Vzb3V0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGhhbmRsZUZvcm0udmFsaWRGaWVsZCk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB2YWxpZEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhdHRlcm5zID0ge1xuICAgICAgICAgICAgdGl0bGU6IFwiXltBLVphLXowLTldezEsMTAwfSRcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJeW0EtWmEtejAtOV17MSwyMH0kXCIsXG4gICAgICAgICAgICBudW1iZXI6IFwiXlswLTldezEsNH0kXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuc1t0aGlzLnR5cGVdLCBcImdcIik7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAocGF0dGVybnNbdGhpcy5uYW1lXSwgXCJnXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSByZWdleC50ZXN0KHRoaXMudmFsdWUpO1xuXG4gICAgICAgIGlmICghdmFsaWQgfHwgIWlucHV0U3RhdGUudmFsaWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwidGl0bGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXN0b21WYWxpZGl0eShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSB2YWx1ZSBtdXN0IGJlIGFscGhhbnVtZXJpYyBvZiAxMDAgY2hhcmFjdGVycy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwiYXV0aG9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgdmFsdWUgbXVzdCBiZSBhbHBoYW51bWVyaWMgb2YgMjAgY2hhcmFjdGVycy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tVmFsaWRpdHkoXCJUaGUgbnVtYmVyIG11c3QgYmUgbGVzcyB0aGFuIDk5OTlcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzXCIpO1xuICAgIH07XG5cbiAgICBjb25zdCBzdWJtaXREYXRhID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZm9ybVByb3BzKSB7XG4gICAgICAgICAgICBsZXQgZmllbGQgPSB0aGlzLmVsZW1lbnRzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWVsZCA9IEFycmF5LmZyb20oZmllbGQpLmZpbmQoKGkpID0+IGkuY2hlY2tlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlRm9ybS52YWxpZEZpZWxkKTtcbiAgICAgICAgICAgICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdmFsaWRGaWVsZCk7XG4gICAgICAgICAgICAgICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJUaGUgZmllbGQgbXVzdCBiZSBjb3JyZWN0IHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIGZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yXCIpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRGaWVsZC5jYWxsKGZpZWxkLCBlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kYXRhc2V0LmJvb2tJZCkge1xuICAgICAgICAgICAgaGFuZGxlQm9vay51cGRhdGVCb29rKGZvcm1Qcm9wcywgK3RoaXMuZGF0YXNldC5ib29rSWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlQm9vay5jcmVhdGVCb29rKGZvcm1Qcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWxpZEZpZWxkLFxuICAgICAgICBzdWJtaXREYXRhLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBoYW5kbGVGb3JtIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY3JlYXRlTGlicmFyeSB9IGZyb20gXCIuL2xpYnJhcnlcIjtcblxuY29uc3QgbGlicmFyeSA9IGNyZWF0ZUxpYnJhcnkoKTtcblxubGlicmFyeS5pbml0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBoYW5kbGVCb29rIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGFuZGxlQm9va1wiO1xuXG5jb25zdCBjb250YWluZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpYnJhcnlcIik7XG5cbiAgICBsaWJyYXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBhY3RpdmVJdGVtQnRuKTtcblxuICAgIGNvbnN0IGNyZWF0ZUl0ZW0gPSAoYm9vaykgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImNvbXBsZXRlQnRuXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QXV0aG9yOiA8c3BhbiBjbGFzcz1cImF1dGhvclwiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igJQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzcz1cInBhZ2VzXCI+NDAwPC9zcGFuPiBwYWdlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bldyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXRCdG5cIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVCdG5cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YW1wXCI+RmluaXNoZWQ8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPmA7XG5cbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmNsYXNzTmFtZSA9IFwiYm9va0l0ZW1cIjtcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4gICAgICAgIGxpLmlkID0gYm9vay5pZDtcblxuICAgICAgICBpZiAoK2Jvb2suaXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImZpbmlzaGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS50ZXh0Q29udGVudCA9IGJvb2sudGl0bGU7XG4gICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yXCIpLnRleHRDb250ZW50ID0gYm9vay5hdXRob3I7XG4gICAgICAgIGxpLnF1ZXJ5U2VsZWN0b3IoXCIucGFnZXNcIikudGV4dENvbnRlbnQgPSBib29rLnBhZ2VzO1xuXG4gICAgICAgIGxpYnJhcnkuYXBwZW5kKGxpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlSXRlbSA9IChib29rKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9va0l0ZW1baWQ9JyR7Ym9vay5pZH0nXWApO1xuXG4gICAgICAgIGlmICgrYm9vay5pc0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJmaW5pc2hlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImZpbmlzaGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnRleHRDb250ZW50ID0gYm9vay50aXRsZTtcbiAgICAgICAgaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvclwiKS50ZXh0Q29udGVudCA9IGJvb2suYXV0aG9yO1xuICAgICAgICBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIucGFnZXNcIikudGV4dENvbnRlbnQgPSBib29rLnBhZ2VzO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9va0l0ZW1baWQ9JyR7aWR9J11gKTtcbiAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmVJdGVtQnRuKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuZWRpdEJ0blwiKSkge1xuICAgICAgICAgICAgY29uc3QgYm9va3MgPSBoYW5kbGVCb29rLmdldEJvb2tzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBib29rcy5maW5kKFxuICAgICAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSArZS50YXJnZXQuY2xvc2VzdChcIi5ib29rSXRlbVwiKS5pZFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKCFib29rKSByZXR1cm47XG5cbiAgICAgICAgICAgIGhlYWRlci5jcmVhdGVCb29rRm9ybShib29rKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdChcIi5kZWxldGVCdG5cIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gaGFuZGxlQm9vay5nZXRCb29rcygpO1xuXG4gICAgICAgICAgICBjb25zdCBib29rID0gYm9va3MuZmluZChcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gK2UudGFyZ2V0LmNsb3Nlc3QoXCIuYm9va0l0ZW1cIikuaWRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICghYm9vaykgcmV0dXJuO1xuXG4gICAgICAgICAgICBoYW5kbGVCb29rLmRlbGV0ZUJvb2soYm9vayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoXCIuY29tcGxldGVCdG5cIikpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvb2tzID0gaGFuZGxlQm9vay5nZXRCb29rcygpO1xuXG4gICAgICAgICAgICBjb25zdCBib29rID0gYm9va3MuZmluZChcbiAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gK2UudGFyZ2V0LmNsb3Nlc3QoXCIuYm9va0l0ZW1cIikuaWRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmICghYm9vaykgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAoK2Jvb2suaXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIGJvb2suaXNGaW5pc2hlZCA9ICcwJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib29rLmlzRmluaXNoZWQgPSBcIjFcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlQm9vay51cGRhdGVCb29rKGJvb2ssIGJvb2suaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlSXRlbSxcbiAgICAgICAgdXBkYXRlSXRlbSxcbiAgICAgICAgZGVsZXRlSXRlbSxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29udGFpbmVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgaGFuZGxlRm9ybSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hhbmRsZUZvcm1cIjtcblxuY29uc3QgaGVhZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGNsb3NlQm9va0Zvcm1CeVBvaW50ZXIpO1xuXG4gICAgY29uc3QgY3JlYXRlQm9va0Zvcm0gPSAoYm9vaykgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlQnRuXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGxlZ2VuZD5BZGQgTmV3IEJvb2shPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYm9va1RpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYm9va1RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGhlIHRpdGxlIG11c3QgYmUgYWxwaGFudW1lcmljLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiXltBLVphLXoxLTldezEsMTAwfSRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYm9va0F1dGhvclwiPkF1dGhvcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJib29rQXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXV0aG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRoZSBhdXRob3IgbXVzdCBiZSBhbHBoYW51bWVyaWMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIl5bQS1aYS16MS05XXsxLDIwfSRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYm9va1BhZ2VzXCI+UGFnZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJib29rUGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaGUgYXV0aG9yIG11c3QgYmUgYWxwaGFudW1lcmljLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiOTk5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgeW91IGZpbmlzaGVkIGl0PzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmluaXNoXCIgZm9yPVwiZmluaXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmluaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlzRmluaXNoZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmaW5pc2hcIiBmb3I9XCJ1bmZpbmlzaGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vdCB5ZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1bmZpbmlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc0ZpbmlzaGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBCb29rPC9idXR0b24+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PmA7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtLmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGJvb2spIHtcbiAgICAgICAgICAgIGZvcm0uZGF0YXNldC5ib29rSWQgPSBib29rLmlkO1xuICAgICAgICAgICAgZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZSA9IGJvb2sudGl0bGU7XG4gICAgICAgICAgICBmb3JtLmVsZW1lbnRzLmF1dGhvci52YWx1ZSA9IGJvb2suYXV0aG9yO1xuICAgICAgICAgICAgZm9ybS5lbGVtZW50cy5wYWdlcy52YWx1ZSA9IGJvb2sucGFnZXM7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMuaXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSA9PT0gYm9vay5pc0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kKGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dDpub3QoW3R5cGU9J3JhZGlvJ10pXCIpXG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgaW5wdXRzKSB7XG4gICAgICAgICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgaGFuZGxlRm9ybS52YWxpZEZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZUZvcm0uc3VibWl0RGF0YS5jYWxsKGZvcm0sIGUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNsb3NlQm9va0Zvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2xvc2VCb29rRm9ybUJ5UG9pbnRlcihlKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlQnRuXCIpO1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkgfHwgZS50YXJnZXQgPT09IGNsb3NlQnRuKSB7XG4gICAgICAgICAgICBjbG9zZUJvb2tGb3JtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZUJvb2tGb3JtKCkge1xuICAgICAgICBvdmVybGF5LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUJvb2tGb3JtLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBoZWFkZXIgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gXCIuL2xheW91dC9oZWFkZXJcIjtcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuL2xheW91dC9jb250YWluZXJcIjtcbmltcG9ydCB7IGhhbmRsZUJvb2sgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hhbmRsZUJvb2tcIjtcblxuY29uc3QgY3JlYXRlTGlicmFyeSA9ICgpID0+IHtcbiAgICAvLyBjYWNoZXMgRG9tXG4gICAgY29uc3QgYWRkQm9va0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkQnRuXCIpO1xuXG4gICAgLy8gZXZlbnRcbiAgICBhZGRCb29rQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XG4gICAgICAgIGhlYWRlci5jcmVhdGVCb29rRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9va3MgPSBoYW5kbGVCb29rLmdldEJvb2tzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBib29rcykge1xuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUl0ZW0oaXRlbSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCxcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTGlicmFyeSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9