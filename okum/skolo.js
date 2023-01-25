/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./env.js":
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/***/ (() => {

    eval("API_KEY=\"1c0866ca311947128efde2e921d0f608\"\r\n\n\n//# sourceURL=webpack://klt/./env.js?");

    /***/ }),
    
    /***/ "./js/Home.js":
    /*!********************!*\
      !*** ./js/Home.js ***!
      \********************/
    /***/ (() => {
    
    eval("const PageList = (argument = '') => {\r\n    console.log('Page List', argument);\r\n  };\r\n\n\n//# sourceURL=webpack://klt/./js/Home.js?");
    
    /***/ }),
    
    /***/ "./js/PageDetail.js":
    /*!**************************!*\
      !*** ./js/PageDetail.js ***!
      \**************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./env.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst PageDetail = (argument) => {\r\n    const preparePage = () => {\r\n      const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\r\n\r\n      const displayGame = (gameData) => {\r\n        const { name, released, description } = gameData;\r\n        const articleDOM = document.querySelector(\".page-detail .article\");\r\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\r\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\r\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\r\n      };\r\n\r\n      const fetchGame = (url, argument) => {\r\n        fetch(`${url}/${argument}?key=${_env__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`)\r\n          .then((response) => response.json())\r\n          .then((responseData) => {\r\n            displayGame(responseData);\r\n          });\r\n      };\r\n\r\n      fetchGame('https://api.rawg.io/api/games', cleanedArgument);\r\n    };\r\n\r\n    const render = () => {\r\n      pageContent.innerHTML = `\r\n        <section class=\"page-detail\">\r\n          <div class=\"article\">\r\n            <h1 class=\"title\"></h1>\r\n            <p class=\"release-date\">Release date : <span></span></p>\r\n            <p class=\"description\"></p>\r\n          </div>\r\n        </section>\r\n      `;\r\n\r\n      preparePage();\r\n    };\r\n\r\n    render();\r\n  };\r\n\n\n//# sourceURL=webpack://klt/./js/PageDetail.js?");
    
    /***/ }),
    
    /***/ "./js/PageList.js":
    /*!************************!*\
      !*** ./js/PageList.js ***!
      \************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./env.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst PageList = (argument = '') => {\r\n    const preparePage = () => {\r\n      const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\r\n\r\n      const displayResults = (articles) => {\r\n        const resultsContent = articles.map((article) => (\r\n          `<article class=\"cardGame\">\r\n            <h1>${article.name}</h1>\r\n            <h2>${article.released}</h2>\r\n            <a href=\"#pagedetail/${article.id}\">${article.id}</a>\r\n          </article>`\r\n        ));\r\n        const resultsContainer = document.querySelector('.page-list .articles');\r\n        resultsContainer.innerHTML = resultsContent.join(\"\\n\");\r\n      };\r\n\r\n      const fetchList = (url, argument) => {\r\n        const finalURL = argument ? `${url}&search=${argument}` : url;\r\n        fetch(finalURL)\r\n          .then((response) => response.json())\r\n          .then((responseData) => {\r\n            displayResults(responseData.results)\r\n          });\r\n      };\r\n\r\n      fetchList(`https://api.rawg.io/api/games?key=${_env__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`, cleanedArgument);\r\n    };\r\n\r\n    const render = () => {\r\n      pageContent.innerHTML = `\r\n        <section class=\"page-list\">\r\n          <div class=\"articles\">Loading...</div>\r\n        </section>\r\n      `;\r\n\r\n      preparePage();\r\n    };\r\n\r\n    render();\r\n  };\r\n\n\n//# sourceURL=webpack://klt/./js/PageList.js?");
    
    /***/ }),
    
    /***/ "./js/Pagelist.js":
    /*!************************!*\
      !*** ./js/Pagelist.js ***!
      \************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./env.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst PageList = (argument = '') => {\r\n    const preparePage = () => {\r\n      const cleanedArgument = argument.trim().replace(/\\s+/g, '-');\r\n\r\n      const displayResults = (articles) => {\r\n        const resultsContent = articles.map((article) => (\r\n          `<article class=\"cardGame\">\r\n            <h1>${article.name}</h1>\r\n            <h2>${article.released}</h2>\r\n            <a href=\"#pagedetail/${article.id}\">${article.id}</a>\r\n          </article>`\r\n        ));\r\n        const resultsContainer = document.querySelector('.page-list .articles');\r\n        resultsContainer.innerHTML = resultsContent.join(\"\\n\");\r\n      };\r\n\r\n      const fetchList = (url, argument) => {\r\n        const finalURL = argument ? `${url}&search=${argument}` : url;\r\n        fetch(finalURL)\r\n          .then((response) => response.json())\r\n          .then((responseData) => {\r\n            displayResults(responseData.results)\r\n          });\r\n      };\r\n\r\n      fetchList(`https://api.rawg.io/api/games?key=${_env__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`, cleanedArgument);\r\n    };\r\n\r\n    const render = () => {\r\n      pageContent.innerHTML = `\r\n        <section class=\"page-list\">\r\n          <div class=\"articles\">Loading...</div>\r\n        </section>\r\n      `;\r\n\r\n      preparePage();\r\n    };\r\n\r\n    render();\r\n  };\r\n\n\n//# sourceURL=webpack://klt/./js/Pagelist.js?");
    
    /***/ }),
    
    /***/ "./js/index.js":
    /*!*********************!*\
      !*** ./js/index.js ***!
      \*********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ \"./env.js\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env__WEBPACK_IMPORTED_MODULE_0__);\n\r\nconst callRoute = () => {\r\n    const { hash } = window.location;\r\n    const pathParts = hash.substring(1).split('/');\r\n\r\n    const pageName = pathParts[0];\r\n    const pageArgument = pathParts[1] || '';\r\n    const pageFunction = routes[pageName];\r\n\r\n    if (pageFunction !== undefined) {\r\n      pageFunction(pageArgument);\r\n    }\r\n  };\r\n\r\n  window.addEventListener('hashchange', () => callRoute());\r\n  window.addEventListener('DOMContentLoaded', () => callRoute());\r\n\n\n//# sourceURL=webpack://klt/./js/index.js?");
    
    /***/ }),
    
    /***/ "./js/routes.js":
    /*!**********************!*\
      !*** ./js/routes.js ***!
      \**********************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageDetail */ \"./js/PageDetail.js\");\n/* harmony import */ var _Pagelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagelist */ \"./js/Pagelist.js\");\n\r\n\r\n\r\nconst routes = {\r\n    '': Home,\r\n    'pagelist': _Pagelist__WEBPACK_IMPORTED_MODULE_1__.PageList,\r\n    'pagedetail': _PageDetail__WEBPACK_IMPORTED_MODULE_0__.PageDetail,\r\n  };\r\n\n\n//# sourceURL=webpack://klt/./js/routes.js?");
    
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
    /******/ 			// no module.id needed
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
    /************************************************************************/
    /******/ 	
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/ 	__webpack_require__("./js/Home.js");
    /******/ 	__webpack_require__("./js/index.js");
    /******/ 	__webpack_require__("./js/PageList.js");
    /******/ 	__webpack_require__("./js/PageDetail.js");
    /******/ 	var __webpack_exports__ = __webpack_require__("./js/routes.js");
    /******/ 	
    /******/ })()
    ;