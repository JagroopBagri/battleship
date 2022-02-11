import { createGameBoard } from './gameboard';

describe('testing gameboard factory function', () => {
  test('board array is created correctly', () => {
    let gameBoard1 = createGameBoard();
    let testArray = [
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ];
    expect(gameBoard1.boardArray).toEqual(testArray);
  });
  test('board array is properly updated when a ship is placed', () => {
    let gameBoard1 = createGameBoard();
    let testArray = [
      ['-', '-', '-', '-', '-', '-', 'ship3', 'ship3', 'ship3', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ];
    let ship1 = gameBoard1.placeShip(3, 'x', 6, 0);
    expect(gameBoard1.boardArray).toEqual(testArray);
  });
  test('ship cannot be placed out of bounds in the x position', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(4, 'x', 7, 4);
    expect(ship1).toBe('Error');
  });
  test('ship cannot be placed out of bounds in the y position', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(5, 'y', 4, 6);
    expect(ship1).toBe('Error');
  });
  test('ship cannot be placed out of bounds in the x position', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(1, 'y', 10, 6);
    expect(ship1).toBe('Error');
  });
  test('ship cannot be placed out of bounds in the y position', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(1, 'y', 6, 10);
    expect(ship1).toBe('Error');
  });
  test('ship cannot be placed on another ship', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(5, 'x', 1, 4);
    let ship2 = gameBoard1.placeShip(3, 'y', 1, 2);
    expect(ship2).toBe('Error');
  });
  test('multiple ships can be placed on board', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(5, 'x', 1, 4);
    let ship2 = gameBoard1.placeShip(3, 'y', 0, 3);
    let ship3 = gameBoard1.placeShip(2, 'y', 2, 0);
    let testArray = [
      ['-', '-', 'ship2', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', 'ship2', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['ship3', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      [
        'ship3',
        'ship5',
        'ship5',
        'ship5',
        'ship5',
        'ship5',
        '-',
        '-',
        '-',
        '-',
      ],
      ['ship3', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ];
    expect(gameBoard1.boardArray).toEqual(testArray);
  });
  test('ship property is properly updated', () => {
    let gameBoard1 = createGameBoard();
    gameBoard1.placeShip(3, 'x', 1, 1);
    let ship = {
      length: 3,
      hits: 0,
      operational: true,
      receivedHit: function () {
        this.hits += 1;
        return 1;
      },
      isSunk: function () {
        if (this.hits === this.length) {
          this.operational = false;
          return true;
        }
        return false;
      },
    };
    expect(JSON.stringify(gameBoard1.fleet[0])).toEqual(JSON.stringify(ship));
  });
  test('gameboard notifies the correct ship that it has been hit', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(5, 'x', 1, 4);
    let ship2 = gameBoard1.placeShip(2, 'x', 0, 0);
    gameBoard1.receiveAttack(0, 0);
    expect(ship2.hits).toBe(1);
  });
  test('gameboard notifies the correct ship that it has been hit', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(5, 'x', 1, 4);
    let ship2 = gameBoard1.placeShip(2, 'x', 0, 0);
    gameBoard1.receiveAttack(0, 0);
    gameBoard1.receiveAttack(1, 0);
    expect(ship2.hits).toBe(2);
  });
  test('gameboard notifies the correct ship that it has been hit', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(5, 'x', 1, 4);
    let ship2 = gameBoard1.placeShip(2, 'x', 0, 0);
    gameBoard1.receiveAttack(0, 0);
    gameBoard1.receiveAttack(1, 0);
    expect(ship1.hits).toBe(0);
  });
  test('receive attack method returns "Hit" when a ship has been hit, but not all ships have been sunk', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(2, 'x', 0, 0);
    let result = gameBoard1.receiveAttack(0, 0);
    expect(result).toBe('Hit');
  });
  test('receive attack method returns "miss" when attack has missed', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(2, 'x', 0, 0);
    let result = gameBoard1.receiveAttack(5, 0);
    expect(result).toBe('Miss');
  });
  test('receive attack method returns "Error" when attack is recieved at the same location more than once', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(2, 'x', 0, 0);
    gameBoard1.receiveAttack(5, 0);
    let result = gameBoard1.receiveAttack(5, 0);
    expect(result).toBe('Error');
  });
  test('receive attack method returns "Game Over" when whole fleet has been sunk', () => {
    let gameBoard1 = createGameBoard();
    let ship1 = gameBoard1.placeShip(2, 'x', 0, 0);
    let ship2 = gameBoard1.placeShip(3, 'y', 2, 2);
    gameBoard1.receiveAttack(0, 0);
    gameBoard1.receiveAttack(2, 2);
    gameBoard1.receiveAttack(2, 3);
    gameBoard1.receiveAttack(2, 4);
    let result = gameBoard1.receiveAttack(1, 0);
    expect(result).toBe('Game Over');
  });
});
