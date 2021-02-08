webpackHotUpdate_N_E("pages/index",{

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_admin_Desktop_NEXT_JS_javascript_form_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListItems */ "./components/ListItems.js");
/* harmony import */ var _context_DataProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../context/DataProvider */ "./context/DataProvider.js");
/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/TodoList.module.css */ "./styles/TodoList.module.css");
/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\components\\TodoList.js",
    _this = undefined,
    _s = $RefreshSig$();






var TodoList = function TodoList() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_DataProvider__WEBPACK_IMPORTED_MODULE_4__["TodoContext"]),
      todoList = _useContext[0],
      setTodoList = _useContext[1];

  var switchComplete = function switchComplete(id) {
    var newTodos = Object(C_Users_admin_Desktop_NEXT_JS_javascript_form_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);

    newTodos.forEach(function (item, index) {
      if (index === id) {
        item.complete = !item.complete;
      }
    });
    setTodoList(newTodos);
  };

  var handleEditTodos = function handleEditTodos(editvalue, id) {
    var newTodos = Object(C_Users_admin_Desktop_NEXT_JS_javascript_form_nextjs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);

    newTodos.forEach(function (item, index) {
      if (index === id) {
        item.name = editvalue;
      }
    });
    setTodoList(newTodos);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.checkbox,
      children: todoList.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
          todo: item,
          id: index,
          checkComplete: switchComplete,
          handleEditTodos: handleEditTodos
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_s(TodoList, "7GwImzKVdLwNc7mY92x9P+asoJ8=");

_c = TodoList;
/* harmony default export */ __webpack_exports__["default"] = (TodoList);

var _c;

$RefreshReg$(_c, "TodoList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC5qcyJdLCJuYW1lcyI6WyJUb2RvTGlzdCIsInVzZUNvbnRleHQiLCJUb2RvQ29udGV4dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJzd2l0Y2hDb21wbGV0ZSIsImlkIiwibmV3VG9kb3MiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiY29tcGxldGUiLCJoYW5kbGVFZGl0VG9kb3MiLCJlZGl0dmFsdWUiLCJuYW1lIiwic3R5bGUiLCJjaGVja2JveCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxvQkFFU0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FGbkI7QUFBQSxNQUVoQkMsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEVBQUUsRUFBSTtBQUMzQixRQUFNQyxRQUFRLEdBQUcsOEpBQUlKLFFBQVAsQ0FBZDs7QUFDQUksWUFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNsQyxVQUFHQSxLQUFLLEtBQUtKLEVBQWIsRUFBZ0I7QUFDZEcsWUFBSSxDQUFDRSxRQUFMLEdBQWdCLENBQUNGLElBQUksQ0FBQ0UsUUFBdEI7QUFDRDtBQUNBLEtBSkQ7QUFLQVAsZUFBVyxDQUFDRyxRQUFELENBQVg7QUFDRCxHQVJEOztBQVVBLE1BQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsU0FBRCxFQUFZUCxFQUFaLEVBQW1CO0FBQ3pDLFFBQU1DLFFBQVEsR0FBRyw4SkFBSUosUUFBUCxDQUFkOztBQUNBSSxZQUFRLENBQUNDLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ2hDLFVBQUdBLEtBQUssS0FBS0osRUFBYixFQUFnQjtBQUNkRyxZQUFJLENBQUNLLElBQUwsR0FBWUQsU0FBWjtBQUNEO0FBQ0YsS0FKRDtBQUtBVCxlQUFXLENBQUNHLFFBQUQsQ0FBWDtBQUNELEdBUkQ7O0FBVUUsc0JBQ0U7QUFBQSwyQkFDQTtBQUFJLGVBQVMsRUFBRVEsa0VBQUssQ0FBQ0MsUUFBckI7QUFBQSxnQkFFRmIsUUFBUSxDQUFDYyxHQUFULENBQWEsVUFBQ1IsSUFBRCxFQUFPQyxLQUFQO0FBQUEsNEJBQ1gscUVBQUMsa0RBQUQ7QUFBVyxjQUFJLEVBQUVELElBQWpCO0FBQW1DLFlBQUUsRUFBRUMsS0FBdkM7QUFDQSx1QkFBYSxFQUFFTCxjQURmO0FBRUEseUJBQWUsRUFBRU87QUFGakIsV0FBNEJGLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFiO0FBRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLG1CQURGO0FBY0QsQ0F0Q0Q7O0dBQU1WLFE7O0tBQUFBLFE7QUF3Q1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5ZGZjY2U2NDllODFiNTQ1ZDFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0IH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tICcuL0xpc3RJdGVtcydcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSAnLi8uLi9jb250ZXh0L0RhdGFQcm92aWRlcidcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlQ29udGV4dChUb2RvQ29udGV4dClcclxuXHJcbmNvbnN0IHN3aXRjaENvbXBsZXRlID0gaWQgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9MaXN0XVxyXG4gIG5ld1RvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgaWYoaW5kZXggPT09IGlkKXtcclxuICAgIGl0ZW0uY29tcGxldGUgPSAhaXRlbS5jb21wbGV0ZVxyXG4gIH1cclxuICB9KVxyXG4gIHNldFRvZG9MaXN0KG5ld1RvZG9zKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVFZGl0VG9kb3MgPSAoZWRpdHZhbHVlLCBpZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9MaXN0XVxyXG4gIG5ld1RvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZihpbmRleCA9PT0gaWQpe1xyXG4gICAgICBpdGVtLm5hbWUgPSBlZGl0dmFsdWVcclxuICAgIH1cclxuICB9KVxyXG4gIHNldFRvZG9MaXN0KG5ld1RvZG9zKVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGUuY2hlY2tib3h9PlxyXG57XHJcbiAgdG9kb0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgPExpc3RJdGVtcyB0b2RvPXtpdGVtfSBrZXk9e2luZGV4fSBpZD17aW5kZXh9XHJcbiAgICBjaGVja0NvbXBsZXRlPXtzd2l0Y2hDb21wbGV0ZX1cclxuICAgIGhhbmRsZUVkaXRUb2Rvcz17aGFuZGxlRWRpdFRvZG9zfVxyXG4gICAgLz5cclxuICApKVxyXG59XHJcbiAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9