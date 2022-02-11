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
// function that appends the gameboard to the DOM
export const boardArrayToDOM = (boardArray, playerBoard, computer = false) => {
  // make an array that holds all existing squares
  if (computer === false) {
    let squares = Array.from(document.querySelectorAll('.square'));
    // iterate thru squares array and delete all squares
    if (squares.length != 0) {
      squares.forEach((square) => square.remove());
    }
  }
  if (computer === true) {
    let squares = Array.from(document.querySelectorAll('.computerSquare'));
    // iterate thru squares array and delete all squares
    if (squares.length != 0) {
      squares.forEach((square) => square.remove());
    }
  }
  // go thru board array
  boardArray.forEach((array, y) => {
    // go thru each array in board array
    array.forEach((element, x) => {
      // create a square div for each element in array
      let square = document.createElement('div');
      // create a div to hold the text
      let squareText = document.createElement('div');
      // give player ones squares a class
      if (computer === false) {
        square.classList.add('square');
      }
      // if this board is made for computer player then add a different class
      if (computer === true) {
        square.classList.add('computerSquare');
      }
      // if the square represents a hit or missed spot then display it
      if (element === 'hit' || element === 'miss') {
        squareText.textContent = element;
      }
      // if the square represents an empty unattacked spot then show nothing
      if (element === '-') {
        squareText.textContent = '';
      }
      //if the square represents player ones ship then display it
      if (
        computer === false &&
        element != 'hit' &&
        element != 'miss' &&
        element != '-'
      ) {
        squareText.textContent = '•';
      }
      //if the square represents a computers ship then dont display it
      if (
        computer === true &&
        element != 'hit' &&
        element != 'miss' &&
        element != '-'
      ) {
        squareText.textContent = '';
      }
      // add id to square that shows the square coordinates
      square.id = x + ' ' + y;
      playerBoard.appendChild(square);
      square.appendChild(squareText);
    });
  });
};
