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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("array = [\n  [5, 7, 8, 6, 3],\n  [0, 0, 7, 0, 4],\n  [4, 6, 3, 4, 9],\n  [3, 1, 0, 5, 8]\n];\narray = [\n  [5, 7, 6, 3],\n  [0, 0, 0, 4],\n  [4, 6, 4, 9],\n  [4, 6, 4, 9],\n  [3, 1, 5, 8]\n];\narray = [\n  [5, 7, 6, 3],\n  [0, 0, 0, 4],\n  [4, 6, 4, 9],\n  [3, 1, 5, 8]\n];\n\narray = [\n  [5, 7, 8, 6, 3],\n  [0, 0, 7, 0, 4],\n  [4, 6, 3, 4, 9],\n  [3, 1, 0, 5, 8]\n];\n\nfunction hungryRabbit(array) {\n  let numRows = array.length;\n  let numCols = array[1].length;\n\n  let centerIdx;\n  // finds the rabbit's starting point\n  if (numRows % 2 !== 0 && numCols % 2 !== 0) {\n    centerIdx = [Math.floor(numRows / 2), Math.floor(numCols / 2)];\n  } else if (numRows % 2 === 0 && numCols % 2 !== 0) {\n    let centerCol = Math.floor(numCols / 2);\n    if (array[numRows / 2 - 1][centerCol] > array[numRows / 2][centerCol]) {\n      centerIdx = [numRows / 2 - 1, centerCol];\n    } else {\n      centerIdx = [numRows / 2 - 1, centerCol];\n    }\n  } else if (numRows % 2 !== 0 && numCols % 2 === 0) {\n    let centerRow = Math.floor(numRows / 2);\n    if (array[centerRow][numCols / 2 - 1] > array[centerRow][numCols / 2]) {\n      centerIdx = [centerRow, numCols / 2 - 1];\n    } else {\n      centerIdx = [centerRow, numCols / 2];\n    }\n  } else if (numRows % 2 === 0 && numCols % 2 === 0) {\n    let max1;\n    let max2;\n    if (\n      array[numRows / 2 - 1][numCols / 2 - 1] >\n      array[numRows / 2 - 1][numCols / 2]\n    ) {\n      max1 = [numRows / 2 - 1, numCols / 2 - 1];\n    } else {\n      max1 = [numRows / 2 - 1, numCols / 2];\n    }\n    if (\n      array[numRows / 2][numCols / 2 - 1] > array[numRows / 2][numCols / 2 - 1]\n    ) {\n      max2 = [numRows / 2, numCols / 2 - 1];\n    } else {\n      max2 = [numRows / 2, numCols / 2 - 1];\n    }\n    if (array[max1[0]][max1[1]] > array[max2[0]][max2[1]]) {\n      centerIdx = max1;\n    } else {\n      centerIdx = max2;\n    }\n  }\n\n  let countCarrots = array[centerIdx[0]][centerIdx[1]];\n\n  //traverses the array until there are no carrots left in the surrounding squares.\n  while (true) {\n    array[centerIdx[0]][centerIdx[1]] = 0;\n\n    let directions = [\n      [-1, -1],\n      [-1, 0],\n      [-1, 1],\n      [0, -1],\n      [0, 1],\n      [1, -1],\n      [1, 0],\n      [1, 1]\n    ];\n    let options = [];\n\n    for (let i = 0; i < directions.length; i++) {\n      let currentIdx = [\n        centerIdx[0] + directions[i][0],\n        centerIdx[1] + directions[i][1]\n      ];\n\n      if (\n        currentIdx[0] > -1 &&\n        currentIdx[0] < numRows &&\n        currentIdx[1] > -1 &&\n        currentIdx[1] < numCols\n      ) {\n        options.push([array[currentIdx[0]][currentIdx[1]], currentIdx]);\n      }\n    }\n\n    let curMax = options[0];\n    for (let i = 1; i < options.length; i++) {\n      if (options[i][0] > curMax[0]) {\n        curMax = options[i];\n      }\n    }\n\n    if (curMax[0] === 0) {\n      return countCarrots;\n    }\n\n    countCarrots += curMax[0];\n    centerIdx = [curMax[1][0], curMax[1][1]];\n  }\n\n}\n\nhungryRabbit(array);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });