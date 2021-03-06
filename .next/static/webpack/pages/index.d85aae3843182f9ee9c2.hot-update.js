webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: QuizContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizContainer", function() { return QuizContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db.json */ "./db.json");
var _db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db.json */ "./db.json", 1);
var _jsxFileName = "C:\\Users\\jadson franca\\Desktop\\React\\Quiz\\drivequiz\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__BackgroundImage",
  componentId: "sc-1wbo52z-0"
})(["background-image:url(", ");flex:1;background-size:cover;background-position:center;"], _db_json__WEBPACK_IMPORTED_MODULE_2__.bg);
_c = BackgroundImage;
var QuizContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__QuizContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;max-width:350px;padding-top:45px;margin:auto 10%;@media screen and (max-width:500px){margin:auto;padding:15px;}"]);
var Widget = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__Widget",
  componentId: "sc-1wbo52z-2"
})(["margin-top:24px;margin-bottom:24px;border:1px solid #3f51b5;background-color:#1c1814;border-radius:4px;overflow:hidden;h1,h2,h3{font-size:16px;font-weight:700;line-height:1;margin-bottom:0;}p{font-size:14px;font-weight:400;line-height:1;}"]);
_c2 = Widget;
function Home() {
  return __jsx(BackgroundImage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx(Widget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Windows 10"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "teste seus conheciemntos")), __jsx(Widget, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "Windows 10"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "teste seus conheciemntos")));
}
_c3 = Home;

var _c, _c2, _c3;

$RefreshReg$(_c, "BackgroundImage");
$RefreshReg$(_c2, "Widget");
$RefreshReg$(_c3, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiZGIiLCJiZyIsIlF1aXpDb250YWluZXIiLCJXaWRnZXQiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRGQUNJQyxxQ0FBRSxDQUFDQyxFQURQLENBQXJCO0tBQU1KLGU7QUFPQyxJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0lBQW5CO0FBV1AsSUFBTUksTUFBTSxHQUFFTCx5REFBTSxDQUFDQyxHQUFUO0FBQUE7QUFBQTtBQUFBLHNQQUFaO01BQU1JLE07QUFvQlMsU0FBU0MsSUFBVCxHQUFnQjtBQUM3QixTQUNBLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGRixDQURGLEVBS0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGRixDQUxGLENBREE7QUFhRDtNQWR1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kODVhYWUzODQzMTgyZjllZTljMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBkYiBmcm9tICcuLi9kYi5qc29uJ1xuXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgke2RiLmJnfSk7XG4gIGZsZXg6MTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFF1aXpDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbjogYXV0byAxMCU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFdpZGdldD0gc3R5bGVkLmRpdiBgXG4gIG1hcmdpbi10b3A6MjRweDtcbiAgbWFyZ2luLWJvdHRvbToyNHB4O1xuICBib3JkZXI6MXB4IHNvbGlkICMzZjUxYjU7XG4gIGJhY2tncm91bmQtY29sb3I6IzFjMTgxNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoMSwgaDIsIGgzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICA8QmFja2dyb3VuZEltYWdlPlxuICAgIDxXaWRnZXQ+XG4gICAgICA8aDE+V2luZG93cyAxMDwvaDE+XG4gICAgICA8cD50ZXN0ZSBzZXVzIGNvbmhlY2llbW50b3M8L3A+XG4gICAgPC9XaWRnZXQ+XG4gICAgPFdpZGdldD5cbiAgICA8aDE+V2luZG93cyAxMDwvaDE+XG4gICAgICA8cD50ZXN0ZSBzZXVzIGNvbmhlY2llbW50b3M8L3A+XG4gICAgPC9XaWRnZXQ+XG5cbiAgPC9CYWNrZ3JvdW5kSW1hZ2U+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9