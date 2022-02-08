import { createShip } from './ships';

// factory function that creates a gameboard

export const createGameBoard = () => {
  // create array that will hold 10 different arrays
  // with 10 elements each for a total of 100 elements all together
  const boardArray = [];
  // function that creates board arrays
  const createBoardArray = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push('-');
    }
    boardArray.push(array);
    return 1;
  };
  // create ten arrays that go into boardArray
  for (let i = 0; i < 10; i++) {
    createBoardArray();
  }
  // gameboard object that is returned
  return {
    // board for the game
    boardArray: boardArray,
    // function that places ships at specific coordinates and returns the ship object
    placeShip: (shipLength, axis, x, y) => {
      // create a ship object
      let ship = createShip(shipLength);
      // check to see if ship is going to go out of bounds (using 9 instead of 10 because we count starting from zero)
      if (x > 9 || y > 9) {
        return 'Not a valid position';
      }
      // if shape is going to be placed horizontally
      if (axis === 'x') {
        // checks to see if ship is going to go out of bounds in the x axis
        if (10 - x < shipLength) {
          return 'Cannot place ship there';
        }
        for (let i = 0; i < shipLength; i++) {
          this.boardArray[y][x + i] = 'ship';
        }
        return ship;
      }
      // if ship is going to be placed vertically
      if (axis === 'y') {
        // checks to see if ship is going to go out of bounds in the y axis
        if (10 - y < shipLength) {
          return 'Cannot place ship there';
        }
        for (let i = 0; i < shipLength; i++) {
          this.boardArray[y + i][x] = 'ship';
        }
        return ship;
      }
    },
  };
};
