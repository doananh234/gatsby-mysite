webpackHotUpdate(0,{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(374);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();



var Links = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__Links"
})(["a{color:", ";text-decoration:none;&.current{font-weight:bold;color:", ";}}", ""], function (_ref) {
  var theme = _ref.theme;
  return _config_theme__WEBPACK_IMPORTED_MODULE_1__["default"][theme].text[5];
}, function (_ref2) {
  var theme = _ref2.theme;
  return _config_theme__WEBPACK_IMPORTED_MODULE_1__["default"][theme].text[0];
}, function (_ref3) {
  var desktop = _ref3.desktop;
  return desktop ? "\n        @media (max-width: 960px) {\n            display: none;\n        }\n\n        a {\n            margin-right: 1rem;\n\n            &:last-child {\n                margin-right: unset;\n            }\n        }\n    " : "\n        padding: 3rem;\n        display: flex;\n        flex-direction: column;\n\n        a {\n            margin-bottom: 1rem;\n\n            &:last-child {\n                margin-bottom: unset;\n            }\n        }\n    ";
});
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styles__StyledButton"
})(["cursor:pointer;border:none;position:relative;background:none;text-align:left;img{margin:0;}"]);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Links, "Links", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/NavbarLinks/styles.js");
  reactHotLoader.register(StyledButton, "StyledButton", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/NavbarLinks/styles.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ })

})
//# sourceMappingURL=0.95f01a67c303e64a0903.hot-update.js.map