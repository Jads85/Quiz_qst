module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.json":
/*!*****************!*\
  !*** ./db.json ***!
  \*****************/
/*! exports provided: bg, title, description, questions, external, theme, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"bg\":\"https://wallpapercave.com/wp/wp2543323.jpg\",\"title\":\"Quiz CSS da Alura\",\"description\":\"Teste os seus conhecimentos sobre CSS e vamos ver quantos layouts você vai deixar de quebrar\",\"questions\":[{\"image\":\"https://media.giphy.com/media/xUOxf3yDKCuwpOlT3i/giphy.gif\",\"title\":\"Como fazer um seletor por id via CSS?\",\"description\":\"Essa é pra aquecer\",\"answer\":2,\"alternatives\":[\".elemento\",\"*elemento\",\"#elemento\",\"%elemento\"]},{\"image\":\"https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif\",\"title\":\"Como fazer um background gradiente com css?\",\"description\":\"Faz tempo em haha\",\"answer\":0,\"alternatives\":[\"background: linear-gradient(#e66465, #9198e5);\",\"background: gradient(#e66465, #9198e5);\"]}],\"external\":[\"\"],\"theme\":{\"colors\":{\"primary\":\"#00b8d4\",\"secondary\":\"#2c387e\",\"mainBg\":\"#171B35\",\"contrastText\":\"#FFFFFF\",\"wrong\":\"#ff1744\",\"success\":\"#303f9f\"},\"borderRadius\":\"4px\"}}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: QuizContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
/* harmony import */ var _src_components_Widget___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Widget/ */ "./src/components/Widget/index.js");
/* harmony import */ var _src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/QuizBackground */ "./src/components/QuizBackground/index.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/GitHubCorner */ "./src/components/GitHubCorner/index.js");
var _jsxFileName = "C:\\Users\\jadson franca\\Desktop\\React\\Quiz\\drivequiz\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 //const BackgroundImage = styled.div`
//  background-image:url(${db.bg});
//  flex:1;
//  background-size: cover;
//  background-position: center;
//`;

const QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-0"
})(["width:100%;max-width:350px;padding-top:45px;margin:auto 10%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
function Home() {
  return __jsx(_src_components_QuizBackground__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundImage: _db_json__WEBPACK_IMPORTED_MODULE_2__.bg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, __jsx(QuizContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_src_components_Widget___WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(_src_components_Widget___WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_2__.title)), __jsx(_src_components_Widget___WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, _db_json__WEBPACK_IMPORTED_MODULE_2__.description))), __jsx(_src_components_Widget___WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_src_components_Widget___WEBPACK_IMPORTED_MODULE_3__["default"].Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Quizes da Galera"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "lorem ipsum dolor sit amet..."))), __jsx(_src_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  })), __jsx(_src_components_GitHubCorner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    projectUrl: "https://github.com/omariosouto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }));
}

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\jadson franca\\Desktop\\React\\Quiz\\drivequiz\\src\\components\\Footer\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // src/components/Footer/index.js

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "sc-1f5euyg-0"
})(["background-color:#00000070;padding:20px;display:flex;align-items:center;border-radius:4px;img{width:58px;margin-right:23px;}a{color:white;text-decoration:none;transition:.3s;&:hover,&:focus{opacity:.5;}span{text-decoration:underline;}}"]);
function Footer(props) {
  return (// eslint-disable-next-line react/jsx-props-no-spreading
    __jsx(FooterWrapper, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 5
      }
    }), __jsx("a", {
      href: "https://www.alura.com.br/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: "https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",
      alt: "Logo Alura",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, "Orgulhosamente criado durante", ' ', "a", ' ', __jsx("a", {
      href: "https://www.alura.com.br/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }
    }, "Imers\xE3o React da Alura"))))
  );
}

/***/ }),

/***/ "./src/components/GitHubCorner/index.js":
/*!**********************************************!*\
  !*** ./src/components/GitHubCorner/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GitHubCorner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\jadson franca\\Desktop\\React\\Quiz\\drivequiz\\src\\components\\GitHubCorner\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// src/components/GitHubCorner/index.js


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "GitHubCorner__Wrapper",
  componentId: "sc-1x140l1-0"
})(["position:absolute;top:0;border:0;right:0;z-index:20;"]);
const SVGWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "GitHubCorner__SVGWrapper",
  componentId: "sc-1x140l1-1"
})(["fill:", ";color:", ";cursor:pointer;&:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){&:hover .octo-arm{animation:none}& .octo-arm{animation:octocat-wave 560ms ease-in-out}}"], ({
  theme
}) => theme.colors.secondary, ({
  theme
}) => theme.colors.contrastText); // eslint-disable-next-line react/prop-types

function GitHubCorner({
  projectUrl
}) {
  return __jsx(Wrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: projectUrl,
    target: "_blank",
    rel: "noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(SVGWrapper, {
    className: "githubCorner",
    width: "80",
    height: "80",
    viewBox: "0 0 250 250",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
    fill: "currentColor",
    style: {
      transformOrigin: '130px 106px'
    },
    className: "octo-arm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
    fill: "currentColor",
    className: "octo-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/components/QuizBackground/index.js":
/*!************************************************!*\
  !*** ./src/components/QuizBackground/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// src/components/QuizBackground/index.js

const QuizBackground = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "QuizBackground",
  componentId: "ouh9z4-0"
})(["width:100%;background-size:cover;background-position:center;background-image:url(", ");background-color:", ";flex:1;@media screen and (max-width:500px){background-image:none;&:after{content:\"\";background-size:cover;background-position:center;background-image:linear-gradient(transparent,", "),url(", ");display:block;width:100%;height:210px;position:absolute;top:0;left:0;right:0;z-index:1;}*:first-child{position:relative;z-index:10;}}"], ({
  backgroundImage
}) => backgroundImage, ({
  theme
}) => theme.colors.mainBg, ({
  theme
}) => theme.colors.mainBg, ({
  backgroundImage
}) => backgroundImage);
/* harmony default export */ __webpack_exports__["default"] = (QuizBackground);

/***/ }),

/***/ "./src/components/Widget/index.js":
/*!****************************************!*\
  !*** ./src/components/Widget/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Widget = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget",
  componentId: "i6tyvd-0"
})(["margin-top:24px;margin-bottom:24px;border:1px solid ", ";background-color:", ";border-radius:4px;overflow:hidden;h1,h2,h3{font-size:16px;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:14px;font-weight:400;line-height:1;}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => {
  return theme.colors.mainBg;
});
Widget.Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Widget__Header",
  componentId: "i6tyvd-1"
})(["display:flex;justify-content:flex-start;align-items:center;padding:18px 32px;background-color:", ";*{margin:0;}"], ({
  theme
}) => theme.colors.primary);
Widget.Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Widget__Content",
  componentId: "i6tyvd-2"
})(["padding:24px 32px 32px 32px;& > *:first-child{margin-top:0;}& > *:last-child{margin-bottom:0;}ul{list-style:none;padding:0;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlF1aXpDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIb21lIiwiZGIiLCJiZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJGb290ZXJXcmFwcGVyIiwiZm9vdGVyIiwiRm9vdGVyIiwicHJvcHMiLCJXcmFwcGVyIiwiU1ZHV3JhcHBlciIsInN2ZyIsInRoZW1lIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwiY29udHJhc3RUZXh0IiwiR2l0SHViQ29ybmVyIiwicHJvamVjdFVybCIsInRyYW5zZm9ybU9yaWdpbiIsIlF1aXpCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwibWFpbkJnIiwiV2lkZ2V0IiwicHJpbWFyeSIsIkhlYWRlciIsImhlYWRlciIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxNQUFNQSxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0lBQW5CO0FBWVEsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixTQUNBLE1BQUMsc0VBQUQ7QUFBZ0IsbUJBQWUsRUFBRUMscUNBQUUsQ0FBQ0MsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRCxDQUFRLE1BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0QscUNBQUUsQ0FBQ0UsS0FBUixDQURGLENBREYsRUFJRSxNQUFDLCtEQUFELENBQVEsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixxQ0FBRSxDQUFDRyxXQUFQLENBREYsQ0FKRixDQURGLEVBVUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRCxDQUFRLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUZGLENBREYsQ0FWRixFQWdCRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0FERixFQW1CRSxNQUFDLG9FQUFEO0FBQWMsY0FBVSxFQUFDLGdDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLENBREE7QUF1QkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDbEREOztBQUNBLE1BQU1DLGFBQWEsR0FBR1Asd0RBQU0sQ0FBQ1EsTUFBVjtBQUFBO0FBQUE7QUFBQSxtUEFBbkI7QUF3QmUsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDcEMsU0FDRTtBQUNBLFVBQUMsYUFBRCxlQUFtQkEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNFO0FBQUcsVUFBSSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBQyxxRUFBVDtBQUErRSxTQUFHLEVBQUMsWUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQUVHLEdBRkgsT0FJRyxHQUpILEVBS0U7QUFBRyxVQUFJLEVBQUMsMkJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsQ0FMRixDQUpGO0FBRkY7QUFpQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7QUFDQTtBQUNBO0FBRUEsTUFBTUMsT0FBTyxHQUFHWCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDREQUFiO0FBUUEsTUFBTVcsVUFBVSxHQUFHWix3REFBTSxDQUFDYSxHQUFWO0FBQUE7QUFBQTtBQUFBLDhVQUNOLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxTQUR0QixFQUVMLENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxZQUZ2QixDQUFoQixDLENBc0JBOztBQUNlLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFzQztBQUNuRCxTQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVBLFVBQVQ7QUFBcUIsVUFBTSxFQUFDLFFBQTVCO0FBQXFDLE9BQUcsRUFBQyxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQVksYUFBUyxFQUFDLGNBQXRCO0FBQXFDLFNBQUssRUFBQyxJQUEzQztBQUFnRCxVQUFNLEVBQUMsSUFBdkQ7QUFBNEQsV0FBTyxFQUFDLGFBQXBFO0FBQWtGLG1CQUFZLE1BQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLEtBQUMsRUFBQyxtREFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLEtBQUMsRUFBQywwTEFBUjtBQUFtTSxRQUFJLEVBQUMsY0FBeE07QUFBdU4sU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQUU7QUFBbkIsS0FBOU47QUFBa1EsYUFBUyxFQUFDLFVBQTVRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQU0sS0FBQyxFQUFDLHFoQkFBUjtBQUE4aEIsUUFBSSxFQUFDLGNBQW5pQjtBQUFrakIsYUFBUyxFQUFDLFdBQTVqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixDQURGLENBREY7QUFXRCxDOzs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1DLGNBQWMsR0FBR3JCLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK2JBSU0sQ0FBQztBQUFFcUI7QUFBRixDQUFELEtBQXlCQSxlQUovQixFQUtFLENBQUM7QUFBRVI7QUFBRixDQUFELEtBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhUSxNQUw5QixFQWNtQixDQUFDO0FBQUVUO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVEsTUFkL0MsRUFlTixDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUF5QkEsZUFmbkIsQ0FBcEI7QUFnQ2VELDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25DQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1HLE1BQU0sR0FBR3hCLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaVBBR1UsQ0FBQztBQUFFYTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFVLE9BSHRDLEVBSVUsQ0FBQztBQUFFWDtBQUFGLENBQUQsS0FBZTtBQUNqQyxTQUFPQSxLQUFLLENBQUNDLE1BQU4sQ0FBYVEsTUFBcEI7QUFDRCxDQU5TLENBQVo7QUFzQkFDLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQjFCLHdEQUFNLENBQUMyQixNQUF2QjtBQUFBO0FBQUE7QUFBQSx3SEFLc0IsQ0FBQztBQUFFYjtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFVLE9BTGxEO0FBWUFELE1BQU0sQ0FBQ0ksT0FBUCxHQUFpQjVCLHdEQUFNLENBQUNDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBY2V1QixxRUFBZixFOzs7Ozs7Ozs7OztBQ2xEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJztcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvV2lkZ2V0LydcbmltcG9ydCBRdWl6QmFja2dyb3VuZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IEdpdEh1YkNvcm5lciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9HaXRIdWJDb3JuZXInXG5cblxuXG4vL2NvbnN0IEJhY2tncm91bmRJbWFnZSA9IHN0eWxlZC5kaXZgXG4vLyAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtkYi5iZ30pO1xuLy8gIGZsZXg6MTtcbi8vICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vYDtcblxuZXhwb3J0IGNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbjogYXV0byAxMCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgPFF1aXpCYWNrZ3JvdW5kIGJhY2tncm91bmRJbWFnZT17ZGIuYmd9PlxuICAgIDxRdWl6Q29udGFpbmVyPlxuICAgICAgPFdpZGdldD5cbiAgICAgICAgPFdpZGdldC5IZWFkZXI+XG4gICAgICAgICAgPGgxPntkYi50aXRsZX08L2gxPlxuICAgICAgICA8L1dpZGdldC5IZWFkZXI+XG4gICAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgICA8cD57ZGIuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L1dpZGdldC5Db250ZW50PlxuICAgICAgPC9XaWRnZXQ+XG5cbiAgICAgIDxXaWRnZXQ+XG4gICAgICAgIDxXaWRnZXQuQ29udGVudD5cbiAgICAgICAgICA8aDE+UXVpemVzIGRhIEdhbGVyYTwvaDE+XG4gICAgICAgICAgPHA+bG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuLi48L3A+XG4gICAgICAgIDwvV2lkZ2V0LkNvbnRlbnQ+XG4gICAgICA8L1dpZGdldD5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1F1aXpDb250YWluZXI+XG4gICAgPEdpdEh1YkNvcm5lciBwcm9qZWN0VXJsPVwiaHR0cHM6Ly9naXRodWIuY29tL29tYXJpb3NvdXRvXCIgLz5cbiAgPC9RdWl6QmFja2dyb3VuZD5cbiAgKTtcbn1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG4vLyBzcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanNcclxuY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDcwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1OHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nXHJcbiAgICA8Rm9vdGVyV3JhcHBlciB7Li4ucHJvcHN9PlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWx1cmEuY29tLmJyL1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuYWx1cmEuY29tLmJyL2Fzc2V0cy9pbWcvYWx1cmEtbG9nby13aGl0ZS4xNTcwNTUwNzA3LnN2Z1wiIGFsdD1cIkxvZ28gQWx1cmFcIiAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIE9yZ3VsaG9zYW1lbnRlIGNyaWFkbyBkdXJhbnRlXHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICBhXHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYWx1cmEuY29tLmJyL1wiPlxyXG4gICAgICAgICAgPHNwYW4+SW1lcnPDo28gUmVhY3QgZGEgQWx1cmE8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L3A+XHJcbiAgICA8L0Zvb3RlcldyYXBwZXI+XHJcbiAgKTtcclxufSIsIi8vIHNyYy9jb21wb25lbnRzL0dpdEh1YkNvcm5lci9pbmRleC5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDIwO1xyXG5gO1xyXG5cclxuY29uc3QgU1ZHV3JhcHBlciA9IHN0eWxlZC5zdmdgXHJcbiAgZmlsbDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuY29udHJhc3RUZXh0fTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciAub2N0by1hcm17XHJcbiAgICBhbmltYXRpb246b2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgb2N0b2NhdC13YXZle1xyXG4gICAgMCUsMTAwJXt0cmFuc2Zvcm06cm90YXRlKDApfVxyXG4gICAgMjAlLDYwJXt0cmFuc2Zvcm06cm90YXRlKC0yNWRlZyl9XHJcbiAgICA0MCUsODAle3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfVxyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDo1MDBweCl7XHJcbiAgICAmOmhvdmVyIC5vY3RvLWFybXtcclxuICAgICAgYW5pbWF0aW9uOm5vbmVcclxuICAgIH1cclxuICAgICYgLm9jdG8tYXJte1xyXG4gICAgICBhbmltYXRpb246b2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2l0SHViQ29ybmVyKHsgcHJvamVjdFVybCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyPlxyXG4gICAgICA8YSBocmVmPXtwcm9qZWN0VXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XHJcbiAgICAgICAgPFNWR1dyYXBwZXIgY2xhc3NOYW1lPVwiZ2l0aHViQ29ybmVyXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgdmlld0JveD1cIjAgMCAyNTAgMjUwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTAsMCBMMTE1LDExNSBMMTMwLDExNSBMMTQyLDE0MiBMMjUwLDI1MCBMMjUwLDAgWlwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTEyOC4zLDEwOS4wIEMxMTMuOCw5OS43IDExOS4wLDg5LjYgMTE5LjAsODkuNiBDMTIyLjAsODIuNyAxMjAuNSw3OC42IDEyMC41LDc4LjYgQzExOS4yLDcyLjAgMTIzLjQsNzYuMyAxMjMuNCw3Ni4zIEMxMjcuMyw4MC45IDEyNS41LDg3LjMgMTI1LjUsODcuMyBDMTIyLjksOTcuNiAxMzAuNiwxMDEuOSAxMzQuNCwxMDMuMlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICcxMzBweCAxMDZweCcgfX0gY2xhc3NOYW1lPVwib2N0by1hcm1cIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMTUuMCwxMTUuMCBDMTE0LjksMTE1LjEgMTE4LjcsMTE2LjUgMTE5LjgsMTE1LjQgTDEzMy43LDEwMS42IEMxMzYuOSw5OS4yIDEzOS45LDk4LjQgMTQyLjIsOTguNiBDMTMzLjgsODguMCAxMjcuNSw3NC40IDE0My44LDU4LjAgQzE0OC41LDUzLjQgMTU0LjAsNTEuMiAxNTkuNyw1MS4wIEMxNjAuMyw0OS40IDE2My4yLDQzLjYgMTcxLjQsNDAuMSBDMTcxLjQsNDAuMSAxNzYuMSw0Mi41IDE3OC44LDU2LjIgQzE4My4xLDU4LjYgMTg3LjIsNjEuOCAxOTAuOSw2NS40IEMxOTQuNSw2OS4wIDE5Ny43LDczLjIgMjAwLjEsNzcuNiBDMjEzLjgsODAuMiAyMTYuMyw4NC45IDIxNi4zLDg0LjkgQzIxMi43LDkzLjEgMjA2LjksOTYuMCAyMDUuNCw5Ni42IEMyMDUuMSwxMDIuNCAyMDMuMCwxMDcuOCAxOTguMywxMTIuNSBDMTgxLjksMTI4LjkgMTY4LjMsMTIyLjUgMTU3LjcsMTE0LjEgQzE1Ny45LDExNi45IDE1Ni43LDEyMC45IDE1Mi43LDEyNC45IEwxNDEuMCwxMzYuNSBDMTM5LjgsMTM3LjcgMTQxLjYsMTQxLjkgMTQxLjgsMTQxLjggWlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJvY3RvLWJvZHlcIiAvPlxyXG4gICAgICAgIDwvU1ZHV3JhcHBlcj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gICk7XHJcbn0iLCIvLyBzcmMvY29tcG9uZW50cy9RdWl6QmFja2dyb3VuZC9pbmRleC5qc1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFF1aXpCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHsoeyBiYWNrZ3JvdW5kSW1hZ2UgfSkgPT4gYmFja2dyb3VuZEltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubWFpbkJnfTtcclxuICBmbGV4OiAxO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5tYWluQmd9KSxcclxuICAgICAgICB1cmwoJHsoeyBiYWNrZ3JvdW5kSW1hZ2UgfSkgPT4gYmFja2dyb3VuZEltYWdlfSk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpekJhY2tncm91bmQ7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFdpZGdldCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5tYWluQmc7XHJcbiAgfX07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaDEsIGgyLCBoMyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbmA7XHJcblxyXG5XaWRnZXQuSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE4cHggMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICBcclxuICAqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5XaWRnZXQuQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMjRweCAzMnB4IDMycHggMzJweDtcclxuICAmID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICAmID4gKjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9