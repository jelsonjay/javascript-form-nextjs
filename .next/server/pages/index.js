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

/***/ "./components/Form/TodoForm.js":
/*!*************************************!*\
  !*** ./components/Form/TodoForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_DataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/DataProvider */ "./context/DataProvider.js");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\components\\Form\\TodoForm.js";




const TodoForm = () => {
  const {
    0: todos,
    1: setTodos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_DataProvider__WEBPACK_IMPORTED_MODULE_2__["TodoContext"]);
  const {
    0: todoName,
    1: setTodoName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const addTodo = e => {
    e.preventDefault();
    todoName.trim() !== '' && setTodos([...todos, {
      name: todoName,
      complete: false
    }]);
    setTodoName('');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.form,
      onSubmit: addTodo,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
        type: "text",
        name: "text",
        placeholder: "Enter a todo item",
        value: todoName,
        onChange: e => setTodoName(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        children: "Add Item"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ }),

/***/ "./components/ListItems.js":
/*!*********************************!*\
  !*** ./components/ListItems.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\components\\ListItems.js";


const ListItems = ({
  todo,
  id,
  checkComplete,
  handleEditTodos
}) => {
  const {
    0: onEdit,
    1: setOnEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: editValue,
    1: setEditValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(todo.name);

  const handleOnEdit = () => {
    setOnEdit(true);
  };

  const handleSave = id => {
    setOnEdit(false);

    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };

  if (onEdit) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        value: editValue,
        name: "editValue",
        onChange: e => setEditValue(e.target.value.toLocaleLowerCase())
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => handleSave(id),
        children: "Save"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: id,
        className: todo.complete ? 'active' : '',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "checkbox",
          name: "name",
          id: id,
          checked: todo.complete,
          onChange: () => checkComplete(id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }, undefined), todo.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        disabled: todo.complete,
        onClick: handleOnEdit,
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ListItems);

/***/ }),

/***/ "./components/TodoFooter.js":
/*!**********************************!*\
  !*** ./components/TodoFooter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_DataProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../context/DataProvider */ "./context/DataProvider.js");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/Footer.module.css */ "./styles/Footer.module.css");
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\components\\TodoFooter.js";




const TodoFooter = () => {
  const {
    0: checkedAll,
    1: setCheckedAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: todos,
    1: setTodos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_DataProvider__WEBPACK_IMPORTED_MODULE_2__["TodoContext"]);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach(todo => {
      todo.complete = !checkedAll;
    });
    setTodos(newTodos);
    setCheckedAll(!checkedAll);
  };

  const newTodosComplete = () => {
    return todos.filter(todo => todo.complete === false);
  }; // deleteTodo


  const deleteTodo = () => {
    setTodos(newTodosComplete);
    setCheckedAll(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: todos.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
      children: "Add Todo!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 27
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.todoFooter,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
        htmlFor: "all",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.checkbox,
          type: "checkbox",
          name: "all",
          onChange: handleCheckAll,
          checked: checkedAll
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 5
        }, undefined), "All"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ["You have ", newTodosComplete().length, " item"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.delete,
        id: "delete",
        onClick: deleteTodo,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoFooter);

/***/ }),

/***/ "./components/TodoList.js":
/*!********************************!*\
  !*** ./components/TodoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItems */ "./components/ListItems.js");
/* harmony import */ var _context_DataProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../context/DataProvider */ "./context/DataProvider.js");
/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/TodoList.module.css */ "./styles/TodoList.module.css");
/* harmony import */ var _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\components\\TodoList.js";





const TodoList = () => {
  const {
    0: todoList,
    1: setTodoList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_DataProvider__WEBPACK_IMPORTED_MODULE_3__["TodoContext"]);

  const switchComplete = id => {
    const newTodos = [...todoList];
    newTodos.forEach((item, index) => {
      if (index === id) {
        item.complete = !item.complete;
      }
    });
    setTodoList(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todoList];
    newTodos.forEach((item, index) => {
      if (index === id) {
        item.name = editvalue;
      }
    });
    setTodoList(newTodos);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _styles_TodoList_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.checkbox,
      children: todoList.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ListItems__WEBPACK_IMPORTED_MODULE_2__["default"], {
        todo: item,
        id: index,
        checkComplete: switchComplete,
        handleEditTodos: handleEditTodos
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./context/DataProvider.js":
/*!*********************************!*\
  !*** ./context/DataProvider.js ***!
  \*********************************/
/*! exports provided: TodoContext, TodoProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoContext", function() { return TodoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoProvider", function() { return TodoProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\context\\DataProvider.js";

const TodoContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const TodoProvider = ({
  children
}) => {
  const {
    0: todos,
    1: setTodos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // get Items to LocalStorage

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'));
    if (todoStore) setTodos(todoStore);
  }, []); // set Items to LocalStorage

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos));
  }, [todos]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TodoContext.Provider, {
    value: [todos, setTodos],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TodoFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/TodoFooter */ "./components/TodoFooter.js");
/* harmony import */ var _components_Form_TodoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Form/TodoForm */ "./components/Form/TodoForm.js");
/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/TodoList */ "./components/TodoList.js");
/* harmony import */ var _context_DataProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../context/DataProvider */ "./context/DataProvider.js");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\admin\\Desktop\\NEXT.JS\\javascript-form-nextjs\\pages\\index.js";







function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Simple todo app | Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keywords",
        content: "Digital"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_DataProvider__WEBPACK_IMPORTED_MODULE_5__["TodoProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.text,
          children: "Simple Todo App"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Form_TodoForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoList__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_TodoFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./styles/Footer.module.css":
/*!**********************************!*\
  !*** ./styles/Footer.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"todoFooter": "Footer_todoFooter__59m3R",
	"delete": "Footer_delete__ktVMj",
	"label": "Footer_label__3x_J8",
	"subtitle": "Footer_subtitle__1GSTp"
};


/***/ }),

/***/ "./styles/Form.module.css":
/*!********************************!*\
  !*** ./styles/Form.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"text": "Form_text__hhJU4",
	"container": "Form_container__3_-8V",
	"form": "Form_form__1jpez",
	"input": "Form_input__1Lu0K",
	"button": "Form_button__2qqHY"
};


/***/ }),

/***/ "./styles/TodoList.module.css":
/*!************************************!*\
  !*** ./styles/TodoList.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"checkbox": "TodoList_checkbox__bqUXR"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtL1RvZG9Gb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlzdEl0ZW1zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVG9kb0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9MaXN0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvRGF0YVByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3N0eWxlcy9Ub2RvTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVG9kb0Zvcm0iLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlQ29udGV4dCIsIlRvZG9Db250ZXh0IiwidG9kb05hbWUiLCJzZXRUb2RvTmFtZSIsInVzZVN0YXRlIiwiYWRkVG9kbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJuYW1lIiwiY29tcGxldGUiLCJzdHlsZXMiLCJmb3JtIiwiaW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIkxpc3RJdGVtcyIsInRvZG8iLCJpZCIsImNoZWNrQ29tcGxldGUiLCJoYW5kbGVFZGl0VG9kb3MiLCJvbkVkaXQiLCJzZXRPbkVkaXQiLCJlZGl0VmFsdWUiLCJzZXRFZGl0VmFsdWUiLCJoYW5kbGVPbkVkaXQiLCJoYW5kbGVTYXZlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJUb2RvRm9vdGVyIiwiY2hlY2tlZEFsbCIsInNldENoZWNrZWRBbGwiLCJoYW5kbGVDaGVja0FsbCIsIm5ld1RvZG9zIiwiZm9yRWFjaCIsIm5ld1RvZG9zQ29tcGxldGUiLCJmaWx0ZXIiLCJkZWxldGVUb2RvIiwibGVuZ3RoIiwic3VidGl0bGUiLCJ0b2RvRm9vdGVyIiwibGFiZWwiLCJjaGVja2JveCIsImRlbGV0ZSIsIlRvZG9MaXN0IiwidG9kb0xpc3QiLCJzZXRUb2RvTGlzdCIsInN3aXRjaENvbXBsZXRlIiwiaXRlbSIsImluZGV4IiwiZWRpdHZhbHVlIiwic3R5bGUiLCJtYXAiLCJjcmVhdGVDb250ZXh0IiwiVG9kb1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJ0b2RvU3RvcmUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIkFwcCIsImNvbnRhaW5lciIsInRleHQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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Q0E7QUFDQTs7QUFFQSxTQUFTUyxHQUFULEdBQWU7QUFDYixzQkFDRTtBQUFBLDRCQUNBLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUtBLHFFQUFDLGtFQUFEO0FBQUEsNkJBQ0E7QUFBSyxpQkFBUyxFQUFFckQsOERBQU0sQ0FBQ3NELFNBQXZCO0FBQUEsZ0NBQ0E7QUFBSSxtQkFBUyxFQUFFdEQsOERBQU0sQ0FBQ3VELElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUEscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQSxlQUdBLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEEsZUFJQSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQTtBQUFBLGtCQURGO0FBZ0JEOztBQUVjRixrRUFBZixFOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWZ9ICBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSAnLi4vLi4vY29udGV4dC9EYXRhUHJvdmlkZXInXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvcm0ubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFRvZG9Gb3JtID0gKCkgPT4ge1xyXG4gY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VDb250ZXh0KFRvZG9Db250ZXh0KVxyXG4gY29uc3QgW3RvZG9OYW1lLCBzZXRUb2RvTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG5jb25zdCBhZGRUb2RvID0gZSA9PntcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdG9kb05hbWUudHJpbSgpICE9PSAnJyAmJiBzZXRUb2RvcyhbLi4udG9kb3MsIHtuYW1lOiB0b2RvTmFtZSwgY29tcGxldGU6IGZhbHNlfV0pXHJcbiAgc2V0VG9kb05hbWUoJycpXHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17YWRkVG9kb30+XHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9J3RleHQnbmFtZT0ndGV4dCcgXHJcbiAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGEgdG9kbyBpdGVtJyB2YWx1ZT17dG9kb05hbWV9IFxyXG4gICAgb25DaGFuZ2U9e2UgPT4gc2V0VG9kb05hbWUoZS50YXJnZXQudmFsdWUpfS8+IFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PkFkZCBJdGVtPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Gb3JtIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBMaXN0SXRlbXMgPSAoe3RvZG8sIGlkLCBjaGVja0NvbXBsZXRlLCBoYW5kbGVFZGl0VG9kb3N9KSA9PiB7XHJcbiAgY29uc3QgW29uRWRpdCwgc2V0T25FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlZGl0VmFsdWUsIHNldEVkaXRWYWx1ZV0gPSB1c2VTdGF0ZSh0b2RvLm5hbWUpXHJcbiAgY29uc3QgaGFuZGxlT25FZGl0ID0gKCkgPT4ge1xyXG4gIHNldE9uRWRpdCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9IGlkID0+e1xyXG4gICBzZXRPbkVkaXQoZmFsc2UpIFxyXG4gICBpZihlZGl0VmFsdWUpe1xyXG4gICAgaGFuZGxlRWRpdFRvZG9zKGVkaXRWYWx1ZSwgaWQpXHJcbiAgIH0gZWxzZXtcclxuICAgICBzZXRFZGl0VmFsdWUodG9kby5uYW1lKVxyXG4gICB9XHJcbiAgfVxyXG5cclxuIFxyXG4gIGlmKG9uRWRpdCl7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpPlxyXG4gICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e2VkaXRWYWx1ZX0gbmFtZT0nZWRpdFZhbHVlJyBcclxuICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RWRpdFZhbHVlKGUudGFyZ2V0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpfS8+IFxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmUoaWQpfT5TYXZlPC9idXR0b24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApXHJcblxyXG4gIH1lbHNle1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9e3RvZG8uY29tcGxldGUgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBuYW1lPSduYW1lJyBpZD17aWR9IFxyXG4gICAgICBjaGVja2VkPXt0b2RvLmNvbXBsZXRlfSBvbkNoYW5nZT17KCkgPT4gY2hlY2tDb21wbGV0ZShpZCl9Lz4gXHJcbiAgICAgIHt0b2RvLm5hbWV9XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RvZG8uY29tcGxldGV9IG9uQ2xpY2s9e2hhbmRsZU9uRWRpdH0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgKVxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1zXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSAnLi8uLi9jb250ZXh0L0RhdGFQcm92aWRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9Gb290ZXIubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFRvZG9Gb290ZXIgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjaGVja2VkQWxsLCBzZXRDaGVja2VkQWxsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlQ29udGV4dChUb2RvQ29udGV4dClcclxuXHJcbiBjb25zdCBoYW5kbGVDaGVja0FsbCA9ICgpID0+IHtcclxuICAgY29uc3QgbmV3VG9kb3MgPSBbLi4udG9kb3NdXHJcbiAgIG5ld1RvZG9zLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgdG9kby5jb21wbGV0ZSA9ICFjaGVja2VkQWxsXHJcbiAgIH0pXHJcbiAgIHNldFRvZG9zKG5ld1RvZG9zKVxyXG4gICBzZXRDaGVja2VkQWxsKCAhY2hlY2tlZEFsbCApXHJcbiB9XHJcblxyXG4gY29uc3QgbmV3VG9kb3NDb21wbGV0ZSA9ICgpID0+e1xyXG4gIHJldHVybiB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlID09PSBmYWxzZSlcclxuIH1cclxuXHJcbiAvLyBkZWxldGVUb2RvXHJcbiBjb25zdCBkZWxldGVUb2RvID0gKCkgPT57XHJcbiAgIHNldFRvZG9zKG5ld1RvZG9zQ29tcGxldGUpXHJcbiAgIHNldENoZWNrZWRBbGwoZmFsc2UpXHJcbiB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDw+XHJcbiAgICB7dG9kb3MubGVuZ3RoID09PSAwID8gPGgyIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT5BZGQgVG9kbyE8L2gyPlxyXG4gICAgOiAgICAgXHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb0Zvb3Rlcn0+XHJcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9IGh0bWxGb3I9J2FsbCc+XHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9IHR5cGU9J2NoZWNrYm94JyBuYW1lPSdhbGwnIFxyXG4gICAgb25DaGFuZ2U9e2hhbmRsZUNoZWNrQWxsfSBjaGVja2VkPXtjaGVja2VkQWxsfS8+XHJcbiAgICBBbGxcclxuICAgIDwvbGFiZWw+XHJcbiAgICA8c3Bhbj5Zb3UgaGF2ZSB7bmV3VG9kb3NDb21wbGV0ZSgpLmxlbmd0aH0gaXRlbTwvc3Bhbj5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlfSBpZD0nZGVsZXRlJyBvbkNsaWNrPXtkZWxldGVUb2RvfT5EZWxldGU8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gIDwvPlxyXG4gICk7XHJcbn1cclxuICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9Gb290ZXIiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0IH1mcm9tICdyZWFjdCdcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tICcuL0xpc3RJdGVtcydcclxuaW1wb3J0IHtUb2RvQ29udGV4dH0gZnJvbSAnLi8uLi9jb250ZXh0L0RhdGFQcm92aWRlcidcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vLi4vc3R5bGVzL1RvZG9MaXN0Lm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBUb2RvTGlzdCA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFt0b2RvTGlzdCwgc2V0VG9kb0xpc3RdID0gdXNlQ29udGV4dChUb2RvQ29udGV4dClcclxuXHJcbmNvbnN0IHN3aXRjaENvbXBsZXRlID0gaWQgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9MaXN0XVxyXG4gIG5ld1RvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgaWYoaW5kZXggPT09IGlkKXtcclxuICAgIGl0ZW0uY29tcGxldGUgPSAhaXRlbS5jb21wbGV0ZVxyXG4gIH1cclxuICB9KVxyXG4gIHNldFRvZG9MaXN0KG5ld1RvZG9zKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVFZGl0VG9kb3MgPSAoZWRpdHZhbHVlLCBpZCkgPT4ge1xyXG4gIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9MaXN0XVxyXG4gIG5ld1RvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZihpbmRleCA9PT0gaWQpe1xyXG4gICAgICBpdGVtLm5hbWUgPSBlZGl0dmFsdWVcclxuICAgIH1cclxuICB9KVxyXG4gIHNldFRvZG9MaXN0KG5ld1RvZG9zKVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGUuY2hlY2tib3h9PlxyXG57XHJcbiAgdG9kb0xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgPExpc3RJdGVtcyB0b2RvPXtpdGVtfSBrZXk9e2luZGV4fSBpZD17aW5kZXh9XHJcbiAgICBjaGVja0NvbXBsZXRlPXtzd2l0Y2hDb21wbGV0ZX1cclxuICAgIGhhbmRsZUVkaXRUb2Rvcz17aGFuZGxlRWRpdFRvZG9zfVxyXG4gICAgLz5cclxuICApKVxyXG59XHJcbiAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBUb2RvQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5leHBvcnQgY29uc3QgVG9kb1Byb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBcclxuY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbi8vIGdldCBJdGVtcyB0byBMb2NhbFN0b3JhZ2VcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICBjb25zdCB0b2RvU3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvU3RvcmUnKSlcclxuICBpZih0b2RvU3RvcmUpIHNldFRvZG9zKHRvZG9TdG9yZSlcclxufSwgW10pXHJcblxyXG4vLyBzZXQgSXRlbXMgdG8gTG9jYWxTdG9yYWdlXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9TdG9yZScsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcclxufSxbdG9kb3NdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRvZG9Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbdG9kb3MsIHNldFRvZG9zXX0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RvZG9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUb2RvRm9vdGVyIGZyb20gJy4vLi4vY29tcG9uZW50cy9Ub2RvRm9vdGVyJztcclxuaW1wb3J0IFRvZG9Gb3JtIGZyb20gJy4vLi4vY29tcG9uZW50cy9Gb3JtL1RvZG9Gb3JtJztcclxuaW1wb3J0IFRvZG9MaXN0IGZyb20gJy4vLi4vY29tcG9uZW50cy9Ub2RvTGlzdCc7XHJcbmltcG9ydCB7VG9kb1Byb3ZpZGVyfSAgZnJvbSAnLi8uLi9jb250ZXh0L0RhdGFQcm92aWRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8SGVhZD5cclxuICAgIDx0aXRsZT5TaW1wbGUgdG9kbyBhcHAgfCBIb21lPC90aXRsZT5cclxuICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PSdEaWdpdGFsJyAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPFRvZG9Qcm92aWRlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5TaW1wbGUgVG9kbyBBcHA8L2gxPlxyXG4gICAgPFRvZG9Gb3JtIC8+XHJcbiAgICA8VG9kb0xpc3QgLz5cclxuICAgIDxUb2RvRm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvVG9kb1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0b2RvRm9vdGVyXCI6IFwiRm9vdGVyX3RvZG9Gb290ZXJfXzU5bTNSXCIsXG5cdFwiZGVsZXRlXCI6IFwiRm9vdGVyX2RlbGV0ZV9fa3RWTWpcIixcblx0XCJsYWJlbFwiOiBcIkZvb3Rlcl9sYWJlbF9fM3hfSjhcIixcblx0XCJzdWJ0aXRsZVwiOiBcIkZvb3Rlcl9zdWJ0aXRsZV9fMUdTVHBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRleHRcIjogXCJGb3JtX3RleHRfX2hoSlU0XCIsXG5cdFwiY29udGFpbmVyXCI6IFwiRm9ybV9jb250YWluZXJfXzNfLThWXCIsXG5cdFwiZm9ybVwiOiBcIkZvcm1fZm9ybV9fMWpwZXpcIixcblx0XCJpbnB1dFwiOiBcIkZvcm1faW5wdXRfXzFMdTBLXCIsXG5cdFwiYnV0dG9uXCI6IFwiRm9ybV9idXR0b25fXzJxcUhZXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGVja2JveFwiOiBcIlRvZG9MaXN0X2NoZWNrYm94X19icVVYUlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9