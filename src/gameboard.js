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
    // an array that stores the ships on the board
    fleet: [],
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
          // push ship object to fleet array
          this.fleet.push(ship);
          // return location of ship
          return this.fleet[this.fleet.length - 1];
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
          // push ship object to fleet array
          this.fleet.push(ship);
          // return location of ship
          return this.fleet[this.fleet.length - 1];
        }
        // return error if ship cannot be placed there
        return 'Error';
      }
    },
    // method that determines if an attack has hit a ship and updates the ship objects along with board array.
    // NOTE: identity of a ship is established thru its length, so no two ships on the same gameboard can have the same length or recieveAttack function will not work properly.
    // returns 'Error' if attack is recieved at same location twice
    // returns 'Miss' if attack did not hit a ship
    // returns 'Hit' if attack hits a ship but fleet is still active
    // returns 'Game Over' if attack hits a ship and whole fleet has sunk
    receiveAttack: function (x, y) {
      // if attack targets a location that has already been attacked then return an error
      if (this.boardArray[y][x] === 'miss' || this.boardArray[y][x] === 'hit') {
        return 'Error';
      }
      // if attack misses then update board array and return
      if (this.boardArray[y][x] === '-') {
        // mark location as missed
        this.boardArray[y][x] = 'miss';
        // return
        return 'Miss';
      }
      // get length of ship that was hit
      let num = Number(this.boardArray[y][x].replace(/[^0-9]/g, ''));
      // find index of ship that was hit
      let shipIndex = this.fleet.findIndex((element) => element.length == num);
      // update ship that was hit
      this.fleet[shipIndex].hits += 1;
      // update board array location as hit
      this.boardArray[y][x] = 'hit';
      // variable that tracks how many of the gameboards ships have sunk
      let sunkenShips = 0;
      // iterate thru fleet and determine if all ships have been sunk
      for (let i = 0; i < this.fleet.length; i++) {
        // check if ship has sunk
        let result = this.fleet[i].isSunk();
        if (result === true) {
          sunkenShips++;
        }
      }
      // if gameboard has lost all ships then return 'game over'
      if (sunkenShips === this.fleet.length) {
        return 'Game Over';
      }
      // otherwise return 'Hit'
      return 'Hit';
    },
  };
};
