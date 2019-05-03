webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/cms/preview-templates/page-preview.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();




var PagePreview = function PagePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  var body = widgetFor('body');
  var title = entry.getIn(['data', 'title']);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, body)));
};

var _default = PagePreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PagePreview, "PagePreview", "/Users/apple/Work/myproject/MyProfileSite/src/cms/preview-templates/page-preview.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/cms/preview-templates/page-preview.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Provider/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      _toggleTheme = _ref.toggleTheme;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Provider, {
    value: {
      theme: theme,
      toggleTheme: function toggleTheme() {
        return _toggleTheme();
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children);
};

var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withState"])('theme', 'handleTheme', 'light'), Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withHandlers"])({
  toggleTheme: function toggleTheme(_ref2) {
    var theme = _ref2.theme,
        handleTheme = _ref2.handleTheme;
    return function () {
      if (theme === 'dark') {
        handleTheme('light');
        localStorage.setItem('theme', 'light');
      } else {
        handleTheme('dark');
        localStorage.setItem('theme', 'dark');
      }
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_2__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    var localTheme = localStorage.getItem('theme');

    if (localTheme) {
      this.props.handleTheme(localTheme);
    }
  }
}));
Wrapper.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  toggleTheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
var Provider = enhance(Wrapper);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper, "Wrapper", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Provider/index.js");
  reactHotLoader.register(enhance, "enhance", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Provider/index.js");
  reactHotLoader.register(Provider, "Provider", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Provider/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(226);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(234);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(392);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(393);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Layout/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();








var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_main__WEBPACK_IMPORTED_MODULE_6__["MainWrapper"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LayoutStyled, {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Subscribe"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme__WEBPACK_IMPORTED_MODULE_4__["Footer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }));
  }));
};
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
var LayoutStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__LayoutStyled"
})(["width:100%;padding-top:7rem;", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme === 'dark' && 'background: #212121;';
});
var _default = Layout;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Layout, "Layout", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Layout/index.js");
  reactHotLoader.register(LayoutStyled, "LayoutStyled", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Layout/index.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Layout/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(236);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(369);
/* harmony import */ var _Hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(378);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(380);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(382);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();










var HeaderWrapper = function HeaderWrapper(_ref) {
  var sidebar = _ref.sidebar,
      toggle = _ref.toggle,
      isHomePage = _ref.isHomePage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["StyledHeader"], {
      isHomePage: isHomePage,
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Overlay"], {
      sidebar: sidebar,
      onClick: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hamburger__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isHomePage: isHomePage,
      sidebar: sidebar,
      toggle: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sidebar: sidebar,
      toggle: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  });
};

var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withStateHandlers"])(function () {
  return {
    sidebar: false,
    isHomePage: false
  };
}, {
  toggle: function toggle(_ref3) {
    var sidebar = _ref3.sidebar;
    return function () {
      return {
        sidebar: !sidebar
      };
    };
  },
  setHomePage: function setHomePage(_ref4) {
    var isHomePage = _ref4.isHomePage;
    return function () {
      return {
        isHomePage: !isHomePage
      };
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_2__["lifecycle"])({
  componentDidMount: function componentDidMount() {
    if (location.pathname === Object(gatsby__WEBPACK_IMPORTED_MODULE_1__["withPrefix"])('/')) this.props.setHomePage();
  }
}));
var Header = enhance(HeaderWrapper);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HeaderWrapper, "HeaderWrapper", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/index.js");
  reactHotLoader.register(enhance, "enhance", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/index.js");
  reactHotLoader.register(Header, "Header", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(237);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(250);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/.cache/gatsby-browser-entry.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();





var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "development" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StaticQueryContext, "StaticQueryContext", "/Users/apple/Work/myproject/MyProfileSite/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(StaticQuery, "StaticQuery", "/Users/apple/Work/myproject/MyProfileSite/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(useStaticQuery, "useStaticQuery", "/Users/apple/Work/myproject/MyProfileSite/.cache/gatsby-browser-entry.js");
  reactHotLoader.register(graphql, "graphql", "/Users/apple/Work/myproject/MyProfileSite/.cache/gatsby-browser-entry.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(238);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(240);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(355);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(236);
/* harmony import */ var _socketIo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(345);



var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/.cache/json-store.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






if (false) {}

var getPathFromProps = function getPathFromProps(props) {
  return props.pageResources && props.pageResources.page ? props.pageResources.page.path : undefined;
};

var JSONStore =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(JSONStore, _React$Component);

  function JSONStore(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleMittEvent = function (type, event) {
      _this.setState({
        staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getStaticQueryData"])(),
        pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getPageQueryData"])()
      });
    };

    _this.state = {
      staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getStaticQueryData"])(),
      pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getPageQueryData"])(),
      path: null
    };
    return _this;
  }

  var _proto = JSONStore.prototype;

  _proto.componentDidMount = function componentDidMount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["registerPath"])(getPathFromProps(this.props));

    ___emitter.on("*", this.handleMittEvent);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["unregisterPath"])(this.state.path);

    ___emitter.off("*", this.handleMittEvent);
  };

  JSONStore.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var newPath = getPathFromProps(props);

    if (newPath !== state.path) {
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["unregisterPath"])(state.path);
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["registerPath"])(newPath);
      return {
        path: newPath
      };
    }

    return null;
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - location changed
    // - page data for path changed
    // - static query results changed
    return this.props.location !== nextProps.location || this.state.path !== nextState.path || this.state.pageQueryData[nextState.path] !== nextState.pageQueryData[nextState.path] || this.state.staticQueryData !== nextState.staticQueryData;
  };

  _proto.render = function render() {
    var data = this.state.pageQueryData[getPathFromProps(this.props)]; // eslint-disable-next-line

    var _this$props = this.props,
        pages = _this$props.pages,
        propsWithoutPages = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["pages"]);

    if (!data) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["StaticQueryContext"].Provider, {
      value: this.state.staticQueryData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, propsWithoutPages, data, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return JSONStore;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var _default = JSONStore;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getPathFromProps, "getPathFromProps", "/Users/apple/Work/myproject/MyProfileSite/.cache/json-store.js");
  reactHotLoader.register(JSONStore, "JSONStore", "/Users/apple/Work/myproject/MyProfileSite/.cache/json-store.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/.cache/json-store.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(236);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var _NavbarLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(370);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(377);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Navbar/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();







var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var theme = _ref.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
      as: _common__WEBPACK_IMPORTED_MODULE_2__["Container"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Brand"], {
      as: gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],
      theme: theme,
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["BrandLogo"], {
      as: _common__WEBPACK_IMPORTED_MODULE_2__["Logo"],
      color: theme === 'dark' ? '#fff' : '#212121',
      strokeWidth: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), "doananh234"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarLinks__WEBPACK_IMPORTED_MODULE_3__["default"], {
      desktop: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  });
};

var _default = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Navbar, "Navbar", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Navbar/index.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Navbar/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var _static_icons_night_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(371);
/* harmony import */ var _static_icons_night_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_icons_night_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_icons_day_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(372);
/* harmony import */ var _static_icons_day_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_icons_day_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(373);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/NavbarLinks/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();









var NavbarLinks = function NavbarLinks(_ref) {
  var desktop = _ref.desktop;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme,
        toggleTheme = _ref2.toggleTheme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Links"], {
      desktop: desktop,
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/",
      activeClassName: "current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/about/",
      activeClassName: "current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/project/",
      activeClassName: "current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/blog/",
      activeClassName: "current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Blog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/contact/",
      activeClassName: "current",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledButton"], {
      type: "button",
      onClick: toggleTheme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: theme === 'dark' ? _static_icons_day_svg__WEBPACK_IMPORTED_MODULE_4___default.a : _static_icons_night_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
      alt: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })));
  });
};

NavbarLinks.propTypes = {
  desktop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
var _default = NavbarLinks;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavbarLinks, "NavbarLinks", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/NavbarLinks/index.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/NavbarLinks/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(379);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Hamburger/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();





var Hamburger = function Hamburger(_ref) {
  var sidebar = _ref.sidebar,
      toggle = _ref.toggle,
      isHomePage = _ref.isHomePage;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["HamburgerIcon"], {
      isHomePage: isHomePage,
      sidebar: sidebar,
      onClick: toggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      top: true,
      sidebar: sidebar,
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      mid: true,
      sidebar: sidebar,
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      bottom: true,
      sidebar: sidebar,
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  });
};

var _default = Hamburger;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Hamburger, "Hamburger", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Hamburger/index.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Hamburger/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
/* harmony import */ var _NavbarLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(381);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Sidebar/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var Sidebar = function Sidebar(_ref) {
  var sidebar = _ref.sidebar,
      toggle = _ref.toggle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["SidebarContainer"], {
      active: sidebar,
      onClick: toggle,
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavbarLinks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  });
};

var _default = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Sidebar, "Sidebar", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Sidebar/index.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Header/Sidebar/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(236);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var _Copyrights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(387);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(391);


var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Footer/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var Footer = function Footer() {
  var social = [{
    id: 0,
    name: 'Twitter',
    link: 'https://twitter.com/doananh234',
    icon: _common__WEBPACK_IMPORTED_MODULE_4__["Twitter"],
    last: false
  }, {
    id: 1,
    name: 'Github',
    link: 'https://github.com/doananh234',
    icon: _common__WEBPACK_IMPORTED_MODULE_4__["GithubIcon"],
    last: false
  }, {
    id: 2,
    name: 'Instagram',
    link: 'https://instagram.com/doananh23419',
    icon: _common__WEBPACK_IMPORTED_MODULE_4__["Instagram"],
    last: false
  }, {
    id: 3,
    name: 'Unsplash',
    link: 'https://unsplash.com/doananh234',
    icon: _common__WEBPACK_IMPORTED_MODULE_4__["Unsplash"],
    last: false
  }, {
    id: 4,
    name: 'Linkedin',
    link: 'https://linkedin.com/in/ismail-ghallou-630149122',
    icon: _common__WEBPACK_IMPORTED_MODULE_4__["Linkedin"],
    last: false
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, function (_ref) {
    var theme = _ref.theme;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["FooterContainer"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["FullContainer"], {
      className: "background-gradient",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Wrapper"], {
      as: _common__WEBPACK_IMPORTED_MODULE_4__["Container"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Brand"], {
      as: gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"],
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledLogo"], {
      as: _common__WEBPACK_IMPORTED_MODULE_4__["Logo"],
      color: "#fff",
      strokeWidth: "2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), ' ', "doananh234"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "About")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Contact")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Blog"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Follow me on"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, social.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          link = _ref2.link,
          icon = _ref2.icon,
          last = _ref2.last;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Social"], {
        key: id,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "follow me on " + name,
        href: link,
        last: last,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Grow"], {
        as: icon,
        width: "24",
        height: "24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }));
    }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Copyrights__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  });
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Footer, "Footer", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Footer/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(236);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var _static_footer_gatsby_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(388);
/* harmony import */ var _static_footer_gatsby_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_footer_gatsby_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_footer_netlify_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(389);
/* harmony import */ var _static_footer_netlify_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_footer_netlify_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(390);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Footer/Copyrights/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();








var Copyrights = function Copyrights() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (_ref) {
    var theme = _ref.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
      as: _common__WEBPACK_IMPORTED_MODULE_2__["SmallerContainer"],
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Links"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\xA9", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Item"], {
      as: gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "doananh234"), ' ', "2016-", new Date().getFullYear() + " "));
  });
};

var _default = Copyrights;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Copyrights, "Copyrights", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Footer/Copyrights/index.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/theme/Footer/Copyrights/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _components_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(397);
/* harmony import */ var _components_CardBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(398);
/* harmony import */ var _components_CardFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(400);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(401);

var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();








var Card = function Card(_ref) {
  var id = _ref.id,
      link = _ref.link,
      title = _ref.title,
      image = _ref.image,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["Wrapper"], {
      id: id,
      as: "a",
      href: link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["StyledCard"], {
      className: "shadow-super-light",
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CardHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CardBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
      image: image,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CardFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })));
  });
};
Card.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Card, "Card", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(226);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(374);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardHeader.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();







var CardHeader = function CardHeader(_ref) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, title));
  });
};

CardHeader.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CardHeader__Wrapper"
})(["padding:1rem;h3{font-size:0.9em;margin:0;font-weight:normal;@media (max-width:680px){font-size:1.2em;}color:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return _config_theme__WEBPACK_IMPORTED_MODULE_3__["default"][theme].text[0];
});
var _default = CardHeader;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardHeader, "CardHeader", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardHeader.js");
  reactHotLoader.register(Wrapper, "Wrapper", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardHeader.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardHeader.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(226);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(399);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardBody.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var CardBody = function CardBody(_ref) {
  var title = _ref.title,
      image = _ref.image;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fluid: image.childImageSharp.fluid,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

CardBody.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CardBody__Wrapper"
})(["overflow:visible;.gatsby-image-wrapper{transition:0.3s;}img{position:relative;left:0;right:0;top:0;bottom:0;width:100%;display:block;transition:0.3s;}"]);
var _default = CardBody;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardBody, "CardBody", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardBody.js");
  reactHotLoader.register(Wrapper, "Wrapper", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardBody.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardBody.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview_templates_page_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _preview_templates_post_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(780);
/* harmony import */ var _CSSInjector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/cms/cms.js";



 // Used like

Object(_CSSInjector__WEBPACK_IMPORTED_MODULE_3__["registerPreviewTemplate"])('pages', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_preview_templates_page_preview__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));
Object(_CSSInjector__WEBPACK_IMPORTED_MODULE_3__["registerPreviewTemplate"])('posts', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_preview_templates_post_preview__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}));

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(226);
/* harmony import */ var _config_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(374);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardFooter.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();







var CardFooter = function CardFooter(_ref) {
  var description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, description));
  });
};

CardFooter.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CardFooter__Wrapper"
})(["padding:16px 24px;p{font-size:16px;line-height:1.46429em;margin-bottom:1rem;color:", ";}"], function (_ref3) {
  var theme = _ref3.theme;
  return _config_theme__WEBPACK_IMPORTED_MODULE_3__["default"][theme].text[0];
});
var _default = CardFooter;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardFooter, "CardFooter", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardFooter.js");
  reactHotLoader.register(Wrapper, "Wrapper", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardFooter.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Card/components/CardFooter.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(403);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(411);
/* harmony import */ var _data_Config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_Config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(412);
/* harmony import */ var _static_me_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_me_jpg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/SEO/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var SEO = function SEO(_ref) {
  var title = _ref.title,
      type = _ref.type,
      description = _ref.description,
      articleBody = _ref.articleBody,
      datePublished = _ref.datePublished,
      dateModified = _ref.dateModified,
      cover = _ref.cover,
      _ref$location = _ref.location,
      location = _ref$location === void 0 ? '' : _ref$location;
  var structuredDataArticle = "{\n\"@context\": \"http://schema.org\",\n\"@type\": \"" + type + "\",\n\"mainEntityOfPage\": {\n\"@type\": \"WebPage\",\n\"@id\": \"https://google.com/article\"\n},\n\"headline\": \"" + description + "\",\n\"image\": {\n\"@type\": \"imageObject\",\n\"url\": \"" + (cover ? "https://doananh234.com" + cover : "https://doananh234.com" + _static_me_jpg__WEBPACK_IMPORTED_MODULE_4___default.a) + "\",\n\"height\": \"600\",\n\"width\": \"800\"\n},\n\"datePublished\": \"" + datePublished + "\",\n\"dateModified\": \"" + dateModified + "\",\n\"author\": {\n\"@type\": \"Person\",\n\"name\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["author"] + "\"\n},\n\"articleBody\": \"" + articleBody + "\",\n\"publisher\": {\n\"@type\": \"Organization\",\n\"name\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["author"] + "\",\n\"logo\": {\n\"@type\": \"ImageObject\",\n\"url\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["logo"] + "\"\n}\n},\n\"description\": \"" + description + "\",\n\"url\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + location + "/?ref=doananh234.com\"\n}";
  var structuredDataOrganization = "{ \n\"@context\": \"http://schema.org\",\n\"@type\": \"" + type + "\",\n\"legalName\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["legalName"] + "\",\n\"url\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + "\",\n\"logo\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["logo"] + "\",\n\"foundingDate\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["foundingDate"] + "\",\n\"founders\": [{\n\"@type\": \"Person\",\n\"name\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["legalName"] + "\"\n}],\n\"contactPoint\": [{\n\"@type\": \"ContactPoint\",\n\"email\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["contact"].email + "\",\n\"telephone\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["contact"].phone + "\",\n\"contactType\": \"customer service\"\n}],\n\"address\": {\n\"@type\": \"PostalAddress\",\n\"addressLocality\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["address"].city + "\",\n\"addressRegion\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["address"].region + "\",\n\"addressCountry\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["address"].country + "\",\n\"postalCode\": \"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["address"].zipCode + "\"\n},\n\"sameAs\": [\n\"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["socialLinks"].twitter + "\",\n\"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["socialLinks"].youtube + "\",\n\"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["socialLinks"].linkedin + "\",\n\"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["socialLinks"].instagram + "\",\n\"" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["socialLinks"].github + "\"\n]\n}";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description || _data_Config__WEBPACK_IMPORTED_MODULE_3__["defaultDescription"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "image",
    content: cover ? "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + cover : "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + _static_me_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + location + "/?ref=doananh234.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:type",
    content: type === 'NewsArticle' ? 'NewsArticle' : 'website',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: title ? "doananh234 | " + title : _data_Config__WEBPACK_IMPORTED_MODULE_3__["defaultTitle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: description || _data_Config__WEBPACK_IMPORTED_MODULE_3__["defaultDescription"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: cover ? "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + cover : "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + _static_me_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "fb:app_id",
    content: _data_Config__WEBPACK_IMPORTED_MODULE_3__["social"].facebook,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:creator",
    content: _data_Config__WEBPACK_IMPORTED_MODULE_3__["socialLinks"].twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: _data_Config__WEBPACK_IMPORTED_MODULE_3__["social"].twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:title",
    content: title ? "doananh234 | " + title : _data_Config__WEBPACK_IMPORTED_MODULE_3__["defaultTitle"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:description",
    content: description || _data_Config__WEBPACK_IMPORTED_MODULE_3__["defaultDescription"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image:src",
    content: cover ? "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + cover : "" + _data_Config__WEBPACK_IMPORTED_MODULE_3__["url"] + _static_me_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    type: "application/ld+json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, type === 'NewsArticle' ? structuredDataArticle : structuredDataOrganization), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, title ? "doananh234 | " + title : _data_Config__WEBPACK_IMPORTED_MODULE_3__["defaultTitle"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
    lang: "en",
    dir: "ltr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }));
};
SEO.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  articleBody: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  datePublished: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  dateModified: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  cover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SEO, "SEO", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/SEO/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/me-e6ca0a36ab2052633b41bd0fdab1b772.jpg";

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "More", function() { return More; });
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(414);

var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/More/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();




var More = function More(_ref) {
  var link = _ref.link,
      color = _ref.color,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Item"], {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children, "See more");
};
More.propTypes = {
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(More, "More", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/More/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Logo/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();



var Logo = function Logo(_ref) {
  var color = _ref.color,
      className = _ref.className,
      strokeWidth = _ref.strokeWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 60 60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    d: "M52.3 14.8a27 27 0 0 1-37.4 38.1L36 38.6m16.3-23.8L7.8 45.3A27 27 0 0 1 42.4 5.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};
Logo.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Logo, "Logo", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Logo/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehanceIcon", function() { return BehanceIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/BehanceIcon/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var BehanceIcon = function BehanceIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '18' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '14' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M14.438 2.648h-3.992v.969h3.992v-.969zm-1.969 3.329q-.703 0-1.141.41T10.844 7.5h3.188q-.141-1.523-1.563-1.523zm.125 4.57q.492 0 .953-.25t.594-.68h1.727q-.781 2.398-3.336 2.398-1.672 0-2.66-1.031t-.988-2.711q0-1.625 1.02-2.699T12.533 4.5q1.078 0 1.879.531t1.195 1.398.395 1.937q0 .133-.016.367h-5.141q0 .867.449 1.34t1.301.473zm-10.43-.391h2.313q1.602 0 1.602-1.305 0-1.406-1.555-1.406H2.165v2.711zm0-4.195h2.195q.609 0 .965-.285t.355-.887q0-1.125-1.484-1.125H2.164v2.297zM0 1.984h4.641q.68 0 1.211.109t.988.371.703.754.246 1.203q0 1.414-1.344 2.055.891.25 1.344.898t.453 1.594q0 .586-.191 1.066t-.516.809-.77.555-.945.328-1.047.102H0V1.984z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BehanceIcon, "BehanceIcon", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/BehanceIcon/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DribbbleIcon", function() { return DribbbleIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/DribbbleIcon/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var DribbbleIcon = function DribbbleIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '16' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '18' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M8 11.719q-.328-1.883-1.094-3.891H6.89l-.016.008-.336.129q-.211.082-.789.383t-1.07.641-1.023.895-.805 1.156l-.117-.086Q4.172 12.126 6 12.126q1.031 0 2-.406zM6.555 6.977q-.164-.383-.414-.867-2.43.727-5.258.727-.008.055-.008.164 0 .969.344 1.848t.969 1.574q.391-.695.965-1.301t1.113-.973 1.02-.633.777-.375l.289-.102.102-.027q.071-.019.102-.035zM5.719 5.32q-.937-1.664-1.906-2.953-1.078.508-1.828 1.453t-1 2.125q2.359 0 4.734-.625zm5.344 2.493q-1.641-.469-3.195-.227.68 1.867 1 3.664.867-.586 1.445-1.48t.75-1.957zm-6.29-5.79q-.008 0-.016.008.008-.008.016-.008zm4.61 1.133Q7.938 1.875 6 1.875q-.594 0-1.211.148 1.023 1.328 1.922 2.984.539-.203 1.016-.473t.754-.48.512-.445.293-.316zm1.742 3.789q-.023-1.812-1.164-3.203l-.008.008q-.07.094-.148.191t-.34.348-.555.473-.781.508-1.027.504q.195.414.344.742.016.047.051.137t.059.129q.281-.039.582-.055t.574-.016.539.012.5.031.441.043.375.051.285.047.195.035zM12 7q0 1.633-.805 3.012t-2.184 2.184-3.012.805-3.012-.805-2.184-2.184T-.002 7t.805-3.012 2.184-2.184T5.999.999t3.012.805 2.184 2.184T12 7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DribbbleIcon, "DribbbleIcon", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/DribbbleIcon/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubIcon", function() { return GithubIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/GithubIcon/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var GithubIcon = function GithubIcon(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '18' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '18' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M6 1q1.633 0 3.012.805t2.184 2.184.805 3.012q0 1.961-1.145 3.527t-2.957 2.168q-.211.039-.312-.055t-.102-.234l.004-.598q.004-.575.004-1.051 0-.758-.406-1.109.445-.047.801-.141t.734-.305.633-.52.414-.82.16-1.176q0-.93-.617-1.609.289-.711-.062-1.594-.219-.07-.633.086t-.719.344l-.297.187q-.727-.203-1.5-.203t-1.5.203q-.125-.086-.332-.211t-.652-.301-.664-.105q-.352.883-.062 1.594-.617.68-.617 1.609 0 .664.16 1.172t.41.82.629.523.734.305.801.141q-.305.281-.383.805-.164.078-.352.117t-.445.039-.512-.168-.434-.488q-.148-.25-.379-.406t-.387-.187l-.156-.023q-.164 0-.227.035t-.039.09.07.109.102.094l.055.039q.172.078.34.297t.246.398l.078.18q.102.297.344.48t.523.234.543.055.434-.027l.18-.031q0 .297.004.691t.004.426q0 .141-.102.234t-.312.055q-1.812-.602-2.957-2.168T.001 7.001q0-1.633.805-3.012T2.99 1.805 6.002 1zM2.273 9.617q.023-.055-.055-.094-.078-.023-.102.016-.023.055.055.094.07.047.102-.016zm.243.266q.055-.039-.016-.125-.078-.07-.125-.023-.055.039.016.125.078.078.125.023zm.234.351q.07-.055 0-.148-.062-.102-.133-.047-.07.039 0 .141t.133.055zm.328.328q.062-.062-.031-.148-.094-.094-.156-.023-.07.062.031.148.094.094.156.023zm.445.196q.023-.086-.102-.125-.117-.031-.148.055t.102.117q.117.047.148-.047zm.493.039q0-.102-.133-.086-.125 0-.125.086 0 .102.133.086.125 0 .125-.086zm.453-.078q-.016-.086-.141-.07-.125.023-.109.117t.141.062.109-.109z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GithubIcon, "GithubIcon", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/GithubIcon/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return Instagram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Instagram/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var Instagram = function Instagram(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '12' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '14' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M8 7q0-.828-.586-1.414T6 5t-1.414.586T4 7t.586 1.414T6 9t1.414-.586T8 7zm1.078 0q0 1.281-.898 2.18T6 10.078 3.82 9.18 2.922 7t.898-2.18T6 3.922t2.18.898T9.078 7zm.844-3.203q0 .297-.211.508t-.508.211-.508-.211-.211-.508.211-.508.508-.211.508.211.211.508zM6 2.078l-.598-.004q-.543-.004-.824 0t-.754.023-.805.078-.559.145q-.391.156-.688.453t-.453.688q-.086.227-.145.559t-.078.805-.023.754 0 .824.004.598-.004.598 0 .824.023.754.078.805.145.559q.156.391.453.688t.688.453q.227.086.559.145t.805.078.754.023.824 0T6 11.924t.598.004.824 0 .754-.023.805-.078.559-.145q.391-.156.688-.453t.453-.688q.086-.227.145-.559t.078-.805.023-.754 0-.824-.004-.598.004-.598 0-.824-.023-.754-.078-.805-.145-.559q-.156-.391-.453-.688T9.54 2.32q-.227-.086-.559-.145t-.805-.078-.754-.023-.824 0T6 2.078zM12 7q0 1.789-.039 2.477-.078 1.625-.969 2.516t-2.516.969q-.688.039-2.477.039t-2.477-.039q-1.625-.078-2.516-.969T.037 9.477Q-.002 8.789-.002 7t.039-2.477q.078-1.625.969-2.516t2.516-.969Q4.21.999 5.999.999t2.477.039q1.625.078 2.516.969t.969 2.516Q12 5.211 12 7z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Instagram, "Instagram", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Instagram/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Linkedin/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var Linkedin = function Linkedin(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '12' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '14' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 14 14",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M2.727 4.883v7.742H.149V4.883h2.578zm.164-2.391q.008.57-.395.953t-1.059.383h-.016q-.641 0-1.031-.383t-.391-.953q0-.578.402-.957t1.051-.379 1.039.379.398.957zM12 8.187v4.437H9.43V8.483q0-.82-.316-1.285t-.988-.465q-.492 0-.824.27t-.496.668q-.086.234-.086.633v4.32H4.15q.016-3.117.016-5.055t-.008-2.313l-.008-.375h2.57v1.125h-.016q.156-.25.32-.438t.441-.406.68-.34.895-.121q1.336 0 2.148.887t.813 2.598z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Linkedin, "Linkedin", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Linkedin/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Twitter/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var Twitter = function Twitter(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '13' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '14' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M12.656 3.188q-.523.766-1.266 1.305.008.109.008.328 0 1.016-.297 2.027t-.902 1.941-1.441 1.645-2.016 1.141-2.523.426q-2.117 0-3.875-1.133.273.031.609.031 1.758 0 3.133-1.078-.82-.016-1.469-.504t-.891-1.246q.258.039.477.039.336 0 .664-.086-.875-.18-1.449-.871T.844 5.548v-.031q.531.297 1.141.32-.516-.344-.82-.898T.86 3.736q0-.688.344-1.273.945 1.164 2.301 1.863t2.902.777q-.062-.297-.062-.578 0-1.047.738-1.785t1.785-.738q1.094 0 1.844.797.852-.164 1.602-.609-.289.898-1.109 1.391.727-.078 1.453-.391z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Twitter, "Twitter", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Twitter/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unsplash", function() { return Unsplash; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Unsplash/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();


var Unsplash = function Unsplash(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '16' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '16' : _ref$height,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: className,
    width: width,
    height: height,
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: color,
    d: "M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zM32 10.7v14.9c0 2.3-1.9 4.3-4.3 4.3H4.3C1.9 29.9 0 28 0 25.6v-15c0-2.3 1.9-4.3 4.3-4.3H8L8.8 4c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Unsplash, "Unsplash", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Svg/Unsplash/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShare", function() { return SocialShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(425);
/* harmony import */ var _data_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(411);
/* harmony import */ var _data_Config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_Config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(492);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/SocialShare/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var SocialShare = function SocialShare(_ref) {
  var title = _ref.title,
      path = _ref.path,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 32 : _ref$iconSize;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["RedditShareButton"], {
    url: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3___default.a.url + path,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["RedditIcon"], {
    round: true,
    size: iconSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterShareButton"], {
    url: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3___default.a.url + path,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TwitterIcon"], {
    round: true,
    size: iconSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["GooglePlusShareButton"], {
    url: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3___default.a.url + path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["GooglePlusIcon"], {
    round: true,
    size: iconSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookShareButton"], {
    url: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3___default.a.url + path,
    quote: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["FacebookIcon"], {
    round: true,
    size: iconSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["LinkedinShareButton"], {
    url: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3___default.a.url + path,
    title: title,
    description: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["LinkedinIcon"], {
    round: true,
    size: iconSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramShareButton"], {
    url: "" + _data_Config__WEBPACK_IMPORTED_MODULE_3___default.a.url + path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_2__["TelegramIcon"], {
    round: true,
    size: iconSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
};
SocialShare.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SocialShare, "SocialShare", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/SocialShare/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(384);
/* harmony import */ var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);


var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Project/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();





var Project = function Project(_ref) {
  var title = _ref.title,
      projects = _ref.projects,
      link = _ref.link,
      side = _ref.side,
      color = _ref.color,
      icon = _ref.icon,
      github = _ref.github;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Work"], {
      github: github,
      side: side,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, !github ? projects.edges.map(function (_ref3) {
      var node = _ref3.node;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["Card"], Object.assign({
        key: node.id
      }, node, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }) : projects.map(function (project, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["Repository"], Object.assign({
        key: project.node.id,
        id: index
      }, project, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }), !side && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["More"], {
      link: link,
      color: color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      as: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))));
  });
};
Project.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  projects: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  link: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  side: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  github: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Project, "Project", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Project/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return PageTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(497);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/PageTitle/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();





var PageTitle = function PageTitle(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledTitle"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, children);
  });
};
PageTitle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageTitle, "PageTitle", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/PageTitle/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Subtitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(499);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Subtitle/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();





var Subtitle = function Subtitle(_ref) {
  var children = _ref.children,
      active = _ref.active;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledSubtitle"], {
      theme: theme,
      active: active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, children);
  });
};
Subtitle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Subtitle, "Subtitle", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Subtitle/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPost", function() { return CardPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(501);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/CardPost/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();







var CardPost = function CardPost(_ref) {
  var node = _ref.node;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Item"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Post"], {
      onClick: function onClick() {
        return Object(gatsby__WEBPACK_IMPORTED_MODULE_2__["navigate"])(node.fields.slug);
      },
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["ArticleImg"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: node.frontmatter.thumbnail,
      src: node.frontmatter.thumbnail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["ArticleContent"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["ArticleTitle"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, node.frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Paragraph"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, node.excerpt), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Info"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, node.frontmatter.date))));
  });
};

CardPost.propTypes = {
  node: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardPost, "CardPost", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/CardPost/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(504);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(507);
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(510);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(513);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(496);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Post.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();











var Post = function Post(_ref) {
  var post = _ref.post;
  var html = post.html,
      frontmatter = post.frontmatter,
      fields = post.fields;
  var tags = frontmatter.tags,
      title = frontmatter.title,
      date = frontmatter.date,
      thumbnail = frontmatter.thumbnail;
  var tagSlugs = fields.tagSlugs;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThemeContext__WEBPACK_IMPORTED_MODULE_8__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["PostWrapper"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["ArticleWrapper"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageTitle__WEBPACK_IMPORTED_MODULE_7__["PageTitle"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["ArticleDate"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "" + date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "headerImg",
      alt: thumbnail,
      src: thumbnail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post__content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
      body: html,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "post__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tags__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tags: tags,
      tagSlugs: tagSlugs,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_3__["default"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_6__["Back"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: fields.next,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Previous article"))));
  });
};

Post.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
var _default = Post;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Post, "Post", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Post.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Post.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureAuthor", function() { return PureAuthor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(346);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(236);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(506);
/* harmony import */ var _SocialShare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(424);

var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Author/Author.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var PureAuthor = function PureAuthor(_ref) {
  var data = _ref.data;
  var author = data.site.siteMetadata.author;
  var frontmatter = data.site.frontmatter;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["AuthorWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "author__bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, author, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialShare__WEBPACK_IMPORTED_MODULE_5__["SocialShare"], Object.assign({}, frontmatter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))));
};
PureAuthor.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
var Author = function Author(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "2751542933",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PureAuthor, Object.assign({}, props, {
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  });
};
var _default = Author;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PureAuthor, "PureAuthor", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Author/Author.js");
  reactHotLoader.register(Author, "Author", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Author/Author.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Author/Author.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(509);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Content/Content.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();





var Content = function Content(_ref) {
  var body = _ref.body;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, typeof body === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__body",
    dangerouslySetInnerHTML: {
      __html: body
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, body)));
};

Content.propTypes = {
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var _default = Content;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Content, "Content", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Content/Content.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Content/Content.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(512);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Tags/Tags.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var Tags = function Tags(_ref) {
  var tags = _ref.tags,
      tagSlugs = _ref.tagSlugs;

  if (Array.isArray(tagSlugs)) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["TagWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tags",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "tags__list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, tagSlugs.map(function (slug, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "tags__list-item",
        key: tags[i],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: slug,
        className: "tags__list-item-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, tags[i]));
    }))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
};

Tags.propTypes = {
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  tagSlugs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
var _default = Tags;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tags, "Tags", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Tags/Tags.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Post/Tags/Tags.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repository", function() { return Repository; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(386);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(129);
/* harmony import */ var _static_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(515);
/* harmony import */ var _static_icons_star_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_icons_star_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_icons_fork_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(516);
/* harmony import */ var _static_icons_fork_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_icons_fork_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_icons_star_white_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(517);
/* harmony import */ var _static_icons_star_white_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_icons_star_white_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_icons_fork_white_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(518);
/* harmony import */ var _static_icons_fork_white_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_icons_fork_white_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(519);

var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Repository/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();









var Repository = function Repository(_ref) {
  var id = _ref.id,
      _ref$node = _ref.node,
      name = _ref$node.name,
      url = _ref$node.url,
      description = _ref$node.description,
      totalCount = _ref$node.stargazers.totalCount,
      forkCount = _ref$node.forkCount;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Wrapper"], {
      className: "shadow-super-light",
      id: id,
      as: "a",
      href: url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["StyledRepository"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Description"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_8__["Stars"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: theme === 'dark' ? _static_icons_star_white_svg__WEBPACK_IMPORTED_MODULE_6___default.a : _static_icons_star_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
      alt: "stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), totalCount, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: theme === 'dark' ? _static_icons_fork_white_svg__WEBPACK_IMPORTED_MODULE_7___default.a : _static_icons_fork_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
      alt: "forks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), forkCount)));
  });
};
Repository.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  node: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Repository, "Repository", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Repository/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscribe", function() { return Subscribe; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(521);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(523);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(524);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(305);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(306);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gatsby_plugin_mailchimp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(525);
/* harmony import */ var gatsby_plugin_mailchimp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mailchimp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(132);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(527);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(649);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(129);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(779);





var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Subscribe/index.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();










var Wrapper = function Wrapper(_ref) {
  var errors = _ref.errors,
      isSubmitting = _ref.isSubmitting,
      touched = _ref.touched,
      values = _ref.values,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(___WEBPACK_IMPORTED_MODULE_11__["ThemeContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, function (_ref2) {
    var theme = _ref2.theme;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["FormWrapper"], {
      as: ___WEBPACK_IMPORTED_MODULE_11__["Container"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["StyledForm"], {
      className: "shadow-super-light",
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["Title"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Subscribe to doananh234.com"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["Subtitle"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "And get the latest articles delivered right to your inbox!"), touched.email && errors.email && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["Error"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, errors.email), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["Fields"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Field"], {
      component: _styles__WEBPACK_IMPORTED_MODULE_12__["Input"],
      "aria-label": "please insert your email",
      placeholder: "youremail@example.com",
      onBlur: handleBlur('email'),
      onChange: handleChange('email'),
      type: "email",
      name: "email",
      error: errors.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(___WEBPACK_IMPORTED_MODULE_11__["CustomButton"], {
      type: "submit",
      className: "background-gradient",
      subscribe: true,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Subscribe")), values.status === 'success' && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["Message"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Thank you! You will receive your first email shortly", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      role: "img",
      "aria-label": "successfully subscribed to news letter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\uD83C\uDF89")), values.status === 'error' && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_12__["Error"], {
      server: true,
      dangerouslySetInnerHTML: {
        __html: values.msg
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }))));
  });
};

var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(formik__WEBPACK_IMPORTED_MODULE_9__["withFormik"])({
  mapPropsToValues: function mapPropsToValues() {
    return {
      email: ''
    };
  },
  validationSchema: function validationSchema() {
    return yup__WEBPACK_IMPORTED_MODULE_10__["object"]().shape({
      email: yup__WEBPACK_IMPORTED_MODULE_10__["string"]().email('Please enter a valid email!').required('Email is required!')
    });
  },
  handleSubmit: function () {
    var _handleSubmit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3, _ref4) {
      var email, setErrors, setSubmitting, setValues, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = _ref3.email;
              setErrors = _ref4.setErrors, setSubmitting = _ref4.setSubmitting, setValues = _ref4.setValues;
              _context.prev = 2;
              _context.next = 5;
              return gatsby_plugin_mailchimp__WEBPACK_IMPORTED_MODULE_7___default()(email, {
                pathname: document.location.pathname
              });

            case 5:
              res = _context.sent;

              if (res.result === 'success') {
                setValues({
                  status: 'success',
                  msg: res.msg,
                  email: email
                });
                setSubmitting(false);
              } else {
                setValues({
                  status: 'error',
                  msg: res.msg,
                  email: email
                });
                setSubmitting(false);
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              setErrors({
                message: _context.t0,
                status: 'error'
              });
              setSubmitting(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    function handleSubmit(_x, _x2) {
      return _handleSubmit.apply(this, arguments);
    }

    return handleSubmit;
  }()
}));
Wrapper.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  touched: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  values: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
var Subscribe = enhance(Wrapper);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper, "Wrapper", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Subscribe/index.js");
  reactHotLoader.register(enhance, "enhance", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Subscribe/index.js");
  reactHotLoader.register(Subscribe, "Subscribe", "/Users/apple/Work/myproject/MyProfileSite/src/components/common/Subscribe/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(502);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/cms/preview-templates/post-preview.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();







var PostPreview = function PostPreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  var body = widgetFor('body');
  var title = entry.getIn(['data', 'title']);

  var tags = entry.getIn(['data', 'tags'])._tail.array;

  var date = entry.getIn(['data', 'date']);
  var thumbnail = entry.getIn(['data', 'thumbnail']); // post

  var post = {
    html: body,
    frontmatter: {
      tags: tags,
      title: title,
      date: moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format('DD-MM-YYYY'),
      thumbnail: thumbnail
    },
    fields: {
      // tagSlugs: tags.split(','),
      tagSlugs: tags,
      tags: tags,
      next: ''
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_common_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    post: post,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

PostPreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var _default = PostPreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PostPreview, "PostPreview", "/Users/apple/Work/myproject/MyProfileSite/src/cms/preview-templates/post-preview.js");
  reactHotLoader.register(_default, "default", "/Users/apple/Work/myproject/MyProfileSite/src/cms/preview-templates/post-preview.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPreviewTemplate", function() { return registerPreviewTemplate; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(226);
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var netlify_cms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(netlify_cms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/apple/Work/myproject/MyProfileSite/src/cms/CSSInjector.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).enterModule;
  enterModule && enterModule(module);
})();






var CSSInjector =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(CSSInjector, _React$Component);

  function CSSInjector(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      iframeRef: ''
    };
    return _this;
  }

  var _proto = CSSInjector.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var iframe = document.getElementsByTagName('iframe')[0];
    var iframeHeadElem = iframe.contentDocument.head;
    this.setState({
      iframeRef: iframeHeadElem
    });
  };

  _proto.render = function render() {
    var iframeRef = this.state.iframeRef;
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, iframeRef && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["StyleSheetManager"], {
      target: iframeRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, children));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return CSSInjector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


CSSInjector.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
var registerPreviewTemplate = function registerPreviewTemplate(templateName, children) {
  netlify_cms__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate(templateName, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CSSInjector, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, props));
  });
};
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CSSInjector, "CSSInjector", "/Users/apple/Work/myproject/MyProfileSite/src/cms/CSSInjector.js");
  reactHotLoader.register(registerPreviewTemplate, "registerPreviewTemplate", "/Users/apple/Work/myproject/MyProfileSite/src/cms/CSSInjector.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(12)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ })

})
//# sourceMappingURL=0.96affe01938804a5d005.hot-update.js.map