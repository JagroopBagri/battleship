import { createPlayer } from './player';
import { createGameBoard } from './gameboard';

describe('tests for player module', () => {
  test('player object is created correctly', () => {
    let player1 = createPlayer('Jag');
    let exampleObject = {
      name: 'Jag',
      attack: function (board, x, y) {
        let result = board.receiveAttack(x, y);
        return result;
      },
    };
    expect(JSON.stringify(player1)).toEqual(JSON.stringify(exampleObject));
  });
  test('player object attack method returns "Miss" when an attack misses', () => {
    let gameBoard1 = createGameBoard();
    gameBoard1.placeShip(3, 'x', 2, 2);
    let player1 = createPlayer();
    let result = player1.attack(gameBoard1, 0, 0);
    expect(result).toBe('Miss');
  });
  test('player object attack method returns "Hit" when an attack hits a ship', () => {
    let gameBoard1 = createGameBoard();
    gameBoard1.placeShip(3, 'x', 2, 2);
    let player1 = createPlayer();
    let result = player1.attack(gameBoard1, 3, 2);
    expect(result).toBe('Hit');
  });
  test('player object attack method returns "Error" when an attack is shot at the same location more than once', () => {
    let gameBoard1 = createGameBoard();
    gameBoard1.placeShip(3, 'x', 2, 2);
    let player1 = createPlayer();
    player1.attack(gameBoard1, 3, 2);
    let result = player1.attack(gameBoard1, 3, 2);
    expect(result).toBe('Error');
  });
  test('player object attack method returns "Error" when an attack is shot at the same location more than once', () => {
    let gameBoard1 = createGameBoard();
    gameBoard1.placeShip(3, 'x', 2, 2);
    let player1 = createPlayer();
    player1.attack(gameBoard1, 3, 3);
    let result = player1.attack(gameBoard1, 3, 3);
    expect(result).toBe('Error');
  });
  test('player object attack method returns "Game Over" when an attack sinks the enemies last remaining ship', () => {
    let gameBoard1 = createGameBoard();
    gameBoard1.placeShip(3, 'x', 2, 2);
    let player1 = createPlayer();
    player1.attack(gameBoard1, 2, 2);
    player1.attack(gameBoard1, 3, 2);
    let result = player1.attack(gameBoard1, 4, 2);
    expect(result).toBe('Game Over');
  });
});
