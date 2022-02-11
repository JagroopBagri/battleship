import { createGameBoard } from './gameboard';

// factory function that returns an object full of DOM elements

export const initializeDOMElements = () => {
  return {
    // middle of webpage that shows main game content
    content: document.querySelector('.content'),
    // players side of the screen
    playerSide: document.querySelector('.player-side'),
    // players gameboard
    playerBoard: document.querySelector('.player-gameboard'),
    // players name
    playerName: document.querySelector('.player-name'),
    // players unplaced ships
    unplacedShips: document.querySelector('.unplaced-ships'),
    // computers side of screen
    computerSide: document.querySelector('.computer-side'),
    // computers gameboard
    computerBoard: document.querySelector('.computer-gameboard'),
    // section for game buttons and unplaced ships
    buttonSection: document.querySelector('.game-setup'),
  };
};
export const boardArrayToDOM = (boardArray, playerBoard) => {
  boardArray.forEach((array, y) => {
    array.forEach((element, x) => {
      let square = document.createElement('div');
      let squareText = document.createElement('div');
      square.classList.add('square');
      square.id = x + ' ' + y;
      playerBoard.appendChild(square);
      squareText.textContent = element;
      square.appendChild(squareText);
    });
  });
};
