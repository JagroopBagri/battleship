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
      squareText.textContent = '';
      // add id to square that shows the square coordinates
      square.dataset.yaxis = y;
      square.dataset.xaxis = x;
      // add class to text content div that mtches its parent containers id
      squareText.dataset.yaxis = y;
      squareText.dataset.xaxis = x;
      playerBoard.appendChild(square);
      square.appendChild(squareText);
    });
  });
};
// function that updates board array
export const updateBoard = (boardArray, playerBoard, computer = false) => {
  // if this is player 1 and not computer
  if (computer === false) {
    // identify all squares in dom and assort them in an array
    let squares = Array.from(document.querySelectorAll('.square'));
    // go thru gameboard array and match each element with particular square to update its text
    boardArray.forEach((array, y) => {
      array.forEach((element, x) => {
        squares.forEach((square) => {
          // get y number from DOM square
          let squareY = Number(square.dataset.yaxis);
          // get x number from DOM square
          let squareX = Number(square.dataset.xaxis);
          // if coordinates match with square
          if (squareY === y && squareX === x) {
            // target text div of that square
            let squareText = square.children[0];
            //update text div with correct text depending on value of elements of the array
            // if the square represents an empty unattacked spot then show nothing
            if (element === '-') {
              squareText.textContent = '';
            }
            // if the square represents a hit or missed spot then display it
            if (element === 'hit' || element === 'miss') {
              squareText.textContent = element;
            }
            //if the square represents player ones ship then display it
            if (element != 'hit' && element != 'miss' && element != '-') {
              squareText.textContent = '•';
            }
          }
        });
      });
    });
  }
  // if this is computer and not player 1
  if (computer === true) {
    // identify all squares in dom and assort them in an array
    let squares = Array.from(document.querySelectorAll('.computerSquare'));
    // go thru gameboard array and match each element with particular square to update its text
    boardArray.forEach((array, y) => {
      array.forEach((element, x) => {
        squares.forEach((square) => {
          // get y number from DOM square
          let squareY = Number(square.dataset.yaxis);
          // get x number from DOM square
          let squareX = Number(square.dataset.xaxis);
          // if coordinates match with square
          if (squareY === y && squareX === x) {
            // target text div of that square
            let squareText = square.children[0];
            //update text div with correct text depending on value of elements of the array
            // if the square represents an empty unattacked spot then show nothing
            if (element === '-') {
              squareText.textContent = '';
            }
            // if the square represents a hit or missed spot then display it
            if (element === 'hit' || element === 'miss') {
              squareText.textContent = element;
            }
            //if the square represents the computers ship then don't display it
            if (element != 'hit' && element != 'miss' && element != '-') {
              squareText.textContent = '';
            }
          }
        });
      });
    });
  }
};

// function that adds event listener to gameboard squares
export const addEventListenerToBoard = (DOMArray, gameboard) => {
  array.forEach((square) => {
    square.addEventListener('click', () => {});
  });
};

/*
boardArrayToDOM = (boardArray, playerBoard, computer = false) => {
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
    
    */
