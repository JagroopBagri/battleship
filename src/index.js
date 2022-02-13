// main module for battleship app

import { createShip } from './ships';
import { createGameBoard } from './gameboard';
import { createPlayer } from './player';
import {
  initializeDOMElements,
  boardArrayToDOM,
  updateBoard,
  addEventListenerToGameBoard,
} from './dom';

const startApp = () => {
  // turn 1 means its the players turn turn 2 means its the computers turn turn 0 means the game is over
  let turn = 1;
  // game result
  let gameResult = 1;
  let dom = initializeDOMElements();
  let playerGameBoard = createGameBoard();
  let computerGameBoard = createGameBoard();
  boardArrayToDOM(playerGameBoard.boardArray, dom.playerBoard);
  boardArrayToDOM(computerGameBoard.boardArray, dom.computerBoard, true);
  // array of player 1 tiles on gameboard
  const player1Squares = Array.from(document.querySelectorAll('.square'));
  // array of computer tiles on gameboard
  const computerSquares = Array.from(
    document.querySelectorAll('.computerSquare')
  );
  // place player 1 ships
  playerGameBoard.placeShip(5, 'x', 0, 0);
  playerGameBoard.placeShip(4, 'y', 5, 1);
  playerGameBoard.placeShip(3, 'x', 7, 6);
  playerGameBoard.placeShip(2, 'y', 9, 4);
  // update player 1 game board
  updateBoard(playerGameBoard.boardArray);
  // place computer ships
  computerGameBoard.placeShip(5, 'x', 0, 0);
  computerGameBoard.placeShip(4, 'y', 5, 1);
  computerGameBoard.placeShip(3, 'x', 7, 6);
  computerGameBoard.placeShip(2, 'y', 9, 4);
  // update computers gameboard
  updateBoard(computerGameBoard.boardArray, true);
  addEventListenerToGameBoard(
    player1Squares,
    computerSquares,
    playerGameBoard,
    computerGameBoard,
    turn,
    gameResult
  );
};

startApp();
