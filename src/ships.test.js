import { createShip } from './ships';

describe('testing ship object keys', () => {
  let ship1 = createShip(5, true);
  test('length key is the correct length', () => {
    expect(ship1.length).toBe(5);
  });
  test('hitLocation key shows the proper array', () => {
    expect(ship1.hitLocation).toEqual([false, false, false, false, false]);
  });
  test('operational key properly marks ship as operational if it has not been sunk', () => {
    expect(ship1.operational).toBe(true);
  });
  test('receivedHit function properly marks ship locations as hit', () => {
    ship1.receivedHit(ship1, 1);
    expect(ship1.hitLocation).toEqual([false, true, false, false, false]);
  });
  test('isSunk function shows false when full length of ship has not been hit', () => {
    expect(ship1.isSunk(ship1)).toBe(false);
  });
  test('isSunk function shows true when full length of ship has been hit', () => {
    ship1.receivedHit(ship1, 1);
    ship1.receivedHit(ship1, 0);
    ship1.receivedHit(ship1, 2);
    ship1.receivedHit(ship1, 3);
    ship1.receivedHit(ship1, 4);
    expect(ship1.isSunk(ship1)).toBe(true);
  });
  test('operational key properly marks ship as not operational if it has been sunk', () => {
    expect(ship1.operational).toBe(false);
  });
});
