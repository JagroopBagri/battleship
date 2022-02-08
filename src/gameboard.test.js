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
      ['-', '-', '-', '-', '-', '-', 'ship', 'ship', 'ship', '-'],
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
      ['-', '-', 'ship', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', 'ship', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['ship', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['ship', 'ship', 'ship', 'ship', 'ship', 'ship', '-', '-', '-', '-'],
      ['ship', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ];
    expect(gameBoard1.boardArray).toEqual(testArray);
  });
});
