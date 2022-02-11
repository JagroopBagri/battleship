// main module for battleship app

import { createShip } from './ships';
import { createGameBoard } from './gameboard';
import { createPlayer } from './player';
import { initializeDOMElements, boardArrayToDOM } from './dom';

const startApp = () => {
  let dom = initializeDOMElements();
  let playerGameBoard = createGameBoard();
  let computerGameBoard = createGameBoard();
  boardArrayToDOM(playerGameBoard.boardArray, dom.playerBoard);
  boardArrayToDOM(computerGameBoard.boardArray, dom.computerBoard);
};

startApp();
