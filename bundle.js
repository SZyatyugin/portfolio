/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/scss/main.scss */ \"./src/assets/scss/main.scss\");\n/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/app/main.js\");\n\n\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _preloader_preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader/preloader.js */ \"./src/app/preloader/preloader.js\");\n/* harmony import */ var _nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav_bar/nav_bar.js */ \"./src/app/nav_bar/nav_bar.js\");\n/* harmony import */ var _section_section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section/section.js */ \"./src/app/section/section.js\");\n\n\n\n\n\nvar render = () => {\n  Object(_preloader_preloader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_nav_bar_nav_bar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_section_section_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\nrender();\n\n//# sourceURL=webpack:///./src/app/main.js?");

/***/ }),

/***/ "./src/app/nav_bar/nav_bar.js":
/*!************************************!*\
  !*** ./src/app/nav_bar/nav_bar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar nav_bar_sticky = () => {\n  function get(elem) {\n    return document.querySelector(elem);\n  }\n\n  function getAll(elem) {\n    return document.querySelectorAll(elem);\n  }\n\n  window.addEventListener('scroll', check_coords_place_navbar);\n\n  function check_coords_place_navbar() {\n    if (document.body.clientWidth > 767) {\n      if (window.pageYOffset > 100) {\n        if (get('.menu').classList.contains('active')) {\n          get('.menu').classList.remove('active');\n        }\n\n        get('.nav_bar').classList.add('fixed');\n      }\n    } else {\n      get('.nav_bar').classList.remove('fixed');\n    }\n\n    if (window.pageYOffset > 20) {\n      get('.message').style.transform = \"translateY(-\".concat(window.pageYOffset, \"px)\");\n    } else {\n      get('.message').removeAttribute('style');\n    }\n  }\n\n  get('.header_circle_button').addEventListener('click', scroll_down_click_circle);\n\n  function scroll_down_click_circle() {\n    get('.section-mainInfo').scrollIntoView({\n      block: 'start',\n      behavior: 'smooth'\n    });\n    get('.section-mainInfo').classList.add('move');\n  }\n\n  get('.menu').addEventListener('click', scroll_to_element);\n\n  function scroll_to_element(e) {\n    if (e.target.className == 'menu_close' || e.target.className == '') {\n      e.preventDefault();\n      return false;\n    } else {\n      var clicked_menu_list = Object.values(getAll('.menu_list_items')).find(elem => {\n        if (elem.innerHTML == e.target.innerHTML) {\n          return elem;\n        }\n      }).innerHTML.toLowerCase();\n      get(\".\".concat(clicked_menu_list)).scrollIntoView({\n        block: 'start',\n        behavior: 'smooth'\n      });\n    }\n  }\n\n  get('.nav_bar__menu-icon').addEventListener('click', show_menu);\n\n  function show_menu(e) {\n    if (e.target.className == 'menu_close') {\n      get('.menu').classList.remove('active');\n    } else {\n      if (get('.menu').classList.contains('active')) {\n        get('.menu').classList.remove('active');\n      } else {\n        get('.menu').classList.add('active');\n      }\n    }\n  }\n\n  get('.menu_close').addEventListener('click', show_menu);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nav_bar_sticky);\n\n//# sourceURL=webpack:///./src/app/nav_bar/nav_bar.js?");

/***/ }),

/***/ "./src/app/preloader/preloader.js":
/*!****************************************!*\
  !*** ./src/app/preloader/preloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar hide_preloader = () => {\n  var preloader = document.querySelector('.preloader');\n  var timer = setTimeout(() => {\n    preloader.classList.add('hide');\n    document.body.style.overflowX = 'hidden';\n  }, 900);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hide_preloader);\n\n//# sourceURL=webpack:///./src/app/preloader/preloader.js?");

/***/ }),

/***/ "./src/app/section/section.js":
/*!************************************!*\
  !*** ./src/app/section/section.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar show_section = () => {\n  function get(elem) {\n    return document.querySelector(elem);\n  }\n\n  function getAll(elem) {\n    return document.querySelectorAll(elem);\n  }\n\n  window.addEventListener('scroll', show_element);\n\n  function show_element(e) {\n    if (window.pageYOffset > 100) {\n      Object.values(getAll('.article-1-text')).map(elem => {\n        elem.classList.add('show');\n      });\n      get('.header_circle_button').style.opacity = 0;\n    } else {\n      get('.header_circle_button').removeAttribute('style');\n    }\n\n    if (window.pageYOffset > 150) {\n      Object.values(getAll('.article-2-text')).map(elem => {\n        elem.classList.add('show');\n      });\n    }\n\n    if (window.pageYOffset > 300) {\n      Object.values(getAll('.article-3-text')).map(elem => {\n        elem.classList.add('show');\n      });\n    }\n\n    if (window.pageYOffset > 800) {\n      get('.section-portfolio').classList.add('show');\n    }\n\n    if (window.pageYOffset > 1100) {\n      get('.section-services').classList.add('show');\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (show_section);\n\n//# sourceURL=webpack:///./src/app/section/section.js?");

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/main.scss?");

/***/ })

/******/ });