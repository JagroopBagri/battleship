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
    // method that places ships at specific coordinates and returns the ship object
    placeShip: function (shipLength, axis, x, y) {
      // variable that checks to see if a ship is already occupying the selected place
      let occupied = false;
      // create a ship object
      let ship = createShip(shipLength);
      // check to see if ship is going to go out of bounds (using 9 instead of 10 because we start counting from zero)
      if (x > 9 || y > 9) {
        return 'Error';
      }
      // if shape is going to be placed horizontally
      if (axis === 'x') {
        // checks to see if ship is going to go out of bounds in the x axis
        if (10 - x < shipLength) {
          return 'Error';
        }
        // for loop that checks to see if ship is going to touch another ship and updates the occupied variable if a ship will be touched
        for (let i = 0; i < shipLength; i++) {
          if (this.boardArray[y][x + i] != '-') {
            occupied = true;
          }
        }
        // check if ship can be placed in that location or if it will interesect another ship
        if (occupied === false) {
          // for loop that updates board array when a ship is placed
          for (let i = 0; i < shipLength; i++) {
            // mark board array with positions of placed ship
            this.boardArray[y][x + i] = 'ship' + shipLength;
          }
          // return the ship object
          return ship;
        }
        // return error if ship cannot be placed there
        return 'Error';
      }
      // if shape is going to be placed vertically
      if (axis === 'y') {
        // checks to see if ship is going to go out of bounds in the y axis
        if (10 - y < shipLength) {
          return 'Error';
        }
        // for loop that checks to see if ship is going to touch another ship and updates the occupied variable if a ship will be touched
        for (let i = 0; i < shipLength; i++) {
          if (this.boardArray[y + i][x] != '-') {
            occupied = true;
          }
        }
        // check if ship can be placed in that location or if it will interesect another ship
        if (occupied === false) {
          // for loop that updates board array when a ship is placed
          for (let i = 0; i < shipLength; i++) {
            // mark board array with positions of placed ship
            this.boardArray[y + i][x] = 'ship' + shipLength;
          }
          // return the ship object
          return ship;
        }
        // return error if ship cannot be placed there
        return 'Error';
      }
    },
    // method that determines if an attack has hit a ship and updates the ship objects along with board array
    receiveAttack: function (x, y) {
      // if attack misses then update board array and return
      if (this.boardArray[y][x] === '-') {
        // mark location as missed
        this.boardArray[y][x] = 'miss';
        // return
        return 'Miss';
      }
      // if attack hits a ship then update board array and ship that was hit
      // update board array location as hit
      this.boardArray[y][x] = 'hit';
    },
  };
};
