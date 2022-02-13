// main module for battleship app

import { createShip } from './ships';
import { createGameBoard } from './gameboard';
import { createPlayer } from './player';
import { initializeDOMElements, boardArrayToDOM, updateBoard } from './dom';

const startApp = () => {
  let dom = initializeDOMElements();
  let playerGameBoard = createGameBoard();
  let computerGameBoard = createGameBoard();
  boardArrayToDOM(playerGameBoard.boardArray, dom.playerBoard);
  boardArrayToDOM(computerGameBoard.boardArray, dom.computerBoard, true);
  // place player 1 ships
  playerGameBoard.placeShip(5, 'x', 0, 0);
  playerGameBoard.placeShip(4, 'y', 5, 1);
  playerGameBoard.placeShip(3, 'x', 7, 6);
  playerGameBoard.placeShip(2, 'y', 9, 4);
  // update player 1 game board
  updateBoard(playerGameBoard.boardArray, dom.playerBoard);
  // place computer ships
  computerGameBoard.placeShip(5, 'x', 0, 0);
  computerGameBoard.placeShip(4, 'y', 5, 1);
  computerGameBoard.placeShip(3, 'x', 7, 6);
  computerGameBoard.placeShip(2, 'y', 9, 4);
  // update computers gameboard
  updateBoard(computerGameBoard.boardArray, dom.computerBoard, true);
};

startApp();
