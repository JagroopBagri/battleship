/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeDOMElements\": () => (/* binding */ initializeDOMElements),\n/* harmony export */   \"boardArrayToDOM\": () => (/* binding */ boardArrayToDOM)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n// factory function that returns an object full of DOM elements\n\nconst initializeDOMElements = () => {\n  return {\n    // middle of webpage that shows main game content\n    content: document.querySelector('.content'),\n    // players side of the screen\n    playerSide: document.querySelector('.player-side'),\n    // players gameboard\n    playerBoard: document.querySelector('.player-gameboard'),\n    // players name\n    playerName: document.querySelector('.player-name'),\n    // players unplaced ships\n    unplacedShips: document.querySelector('.unplaced-ships'),\n    // computers side of screen\n    computerSide: document.querySelector('.computer-side'),\n    // computers gameboard\n    computerBoard: document.querySelector('.computer-gameboard'),\n    // section for game buttons and unplaced ships\n    buttonSection: document.querySelector('.game-setup'),\n  };\n};\nconst boardArrayToDOM = (boardArray, playerBoard) => {\n  boardArray.forEach((array, y) => {\n    array.forEach((element, x) => {\n      let square = document.createElement('div');\n      let squareText = document.createElement('div');\n      square.classList.add('square');\n      square.id = x + ' ' + y;\n      playerBoard.appendChild(square);\n      squareText.textContent = element;\n      square.appendChild(squareText);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://battleship/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameBoard\": () => (/* binding */ createGameBoard)\n/* harmony export */ });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\n\n// factory function that creates a gameboard\n\nconst createGameBoard = () => {\n  // create array that will hold 10 different arrays\n  // with 10 elements each for a total of 100 elements all together\n  const boardArray = [];\n  // function that creates board arrays\n  const createBoardArray = () => {\n    let array = [];\n    for (let i = 0; i < 10; i++) {\n      array.push('-');\n    }\n    boardArray.push(array);\n    return 1;\n  };\n  // create ten arrays that go into boardArray\n  for (let i = 0; i < 10; i++) {\n    createBoardArray();\n  }\n  // gameboard object that is returned\n  return {\n    // board for the game\n    boardArray: boardArray,\n    // an array that stores the ships on the board\n    fleet: [],\n    // method that places ships at specific coordinates and returns the ship object\n    placeShip: function (shipLength, axis, x, y) {\n      // variable that checks to see if a ship is already occupying the selected place\n      let occupied = false;\n      // create a ship object\n      let ship = (0,_ships__WEBPACK_IMPORTED_MODULE_0__.createShip)(shipLength);\n      // check to see if ship is going to go out of bounds (using 9 instead of 10 because we start counting from zero)\n      if (x > 9 || y > 9) {\n        return 'Error';\n      }\n      // if shape is going to be placed horizontally\n      if (axis === 'x') {\n        // checks to see if ship is going to go out of bounds in the x axis\n        if (10 - x < shipLength) {\n          return 'Error';\n        }\n        // for loop that checks to see if ship is going to touch another ship and updates the occupied variable if a ship will be touched\n        for (let i = 0; i < shipLength; i++) {\n          if (this.boardArray[y][x + i] != '-') {\n            occupied = true;\n          }\n        }\n        // check if ship can be placed in that location or if it will interesect another ship\n        if (occupied === false) {\n          // for loop that updates board array when a ship is placed\n          for (let i = 0; i < shipLength; i++) {\n            // mark board array with positions of placed ship\n            this.boardArray[y][x + i] = 'ship' + shipLength;\n          }\n          // push ship object to fleet array\n          this.fleet.push(ship);\n          // return location of ship\n          return this.fleet[this.fleet.length - 1];\n        }\n        // return error if ship cannot be placed there\n        return 'Error';\n      }\n      // if shape is going to be placed vertically\n      if (axis === 'y') {\n        // checks to see if ship is going to go out of bounds in the y axis\n        if (10 - y < shipLength) {\n          return 'Error';\n        }\n        // for loop that checks to see if ship is going to touch another ship and updates the occupied variable if a ship will be touched\n        for (let i = 0; i < shipLength; i++) {\n          if (this.boardArray[y + i][x] != '-') {\n            occupied = true;\n          }\n        }\n        // check if ship can be placed in that location or if it will interesect another ship\n        if (occupied === false) {\n          // for loop that updates board array when a ship is placed\n          for (let i = 0; i < shipLength; i++) {\n            // mark board array with positions of placed ship\n            this.boardArray[y + i][x] = 'ship' + shipLength;\n          }\n          // push ship object to fleet array\n          this.fleet.push(ship);\n          // return location of ship\n          return this.fleet[this.fleet.length - 1];\n        }\n        // return error if ship cannot be placed there\n        return 'Error';\n      }\n    },\n    // method that determines if an attack has hit a ship and updates the ship objects along with board array.\n    // NOTE: identity of a ship is established thru its length, so no two ships on the same gameboard can have the same length or recieveAttack function will not work properly.\n    // returns 'Error' if attack is recieved at same location twice\n    // returns 'Miss' if attack did not hit a ship\n    // returns 'Hit' if attack hits a ship but fleet is still active\n    // returns 'Game Over' if attack hits a ship and whole fleet has sunk\n    receiveAttack: function (x, y) {\n      // if attack targets a location that has already been attacked then return an error\n      if (this.boardArray[y][x] === 'miss' || this.boardArray[y][x] === 'hit') {\n        return 'Error';\n      }\n      // if attack misses then update board array and return\n      if (this.boardArray[y][x] === '-') {\n        // mark location as missed\n        this.boardArray[y][x] = 'miss';\n        // return\n        return 'Miss';\n      }\n      // get length of ship that was hit\n      let num = Number(this.boardArray[y][x].replace(/[^0-9]/g, ''));\n      // find index of ship that was hit\n      let shipIndex = this.fleet.findIndex((element) => element.length == num);\n      // update ship that was hit\n      this.fleet[shipIndex].hits += 1;\n      // update board array location as hit\n      this.boardArray[y][x] = 'hit';\n      // variable that tracks how many of the gameboards ships have sunk\n      let sunkenShips = 0;\n      // iterate thru fleet and determine if all ships have been sunk\n      for (let i = 0; i < this.fleet.length; i++) {\n        // check if ship has sunk\n        let result = this.fleet[i].isSunk();\n        if (result === true) {\n          sunkenShips++;\n        }\n      }\n      // if gameboard has lost all ships then return 'game over'\n      if (sunkenShips === this.fleet.length) {\n        return 'Game Over';\n      }\n      // otherwise return 'Hit'\n      return 'Hit';\n    },\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n// main module for battleship app\n\n\n\n\n\n\nconst startApp = () => {\n  let dom = (0,_dom__WEBPACK_IMPORTED_MODULE_3__.initializeDOMElements)();\n  let playerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)();\n  let computerGameBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.createGameBoard)();\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.boardArrayToDOM)(playerGameBoard.boardArray, dom.playerBoard);\n  (0,_dom__WEBPACK_IMPORTED_MODULE_3__.boardArrayToDOM)(computerGameBoard.boardArray, dom.computerBoard);\n};\n\nstartApp();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlayer\": () => (/* binding */ createPlayer)\n/* harmony export */ });\n// factory function that creates players\n\nconst createPlayer = (name = 'player') => {\n  // return player object\n  return {\n    // name property\n    name,\n    // method used to attack other players board\n    attack: function (board, x, y) {\n      // retrieve result of attack\n      let result = board.receiveAttack(x, y);\n      // return result\n      return result;\n    },\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShip\": () => (/* binding */ createShip)\n/* harmony export */ });\n// factory function that creates ships\n\nconst createShip = (length) => {\n  // factory function returns an array\n  return {\n    // length of the ship\n    length,\n    // hits that the ship has taken\n    hits: 0,\n    // shows if the ship is operational\n    operational: true,\n    // method that take the ship object and location as parameters and marks a hitLocation as true (been hit)\n    receivedHit: function () {\n      // change the location hit from false to true\n      this.hits += 1;\n      return 1;\n    },\n    // method that checks to see if the ship has sunk\n    isSunk: function () {\n      // check if ship has been hit in all locations\n      if (this.hits === this.length) {\n        // update ship operational key to show that the ship is not operational\n        this.operational = false;\n        // return true if the ship has sunk\n        return true;\n      }\n      //return false if the ship is still operational\n      return false;\n    },\n  };\n};\n\n\n//# sourceURL=webpack://battleship/./src/ships.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;