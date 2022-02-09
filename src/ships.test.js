import { createShip } from './ships';

describe('testing ship object keys', () => {
  let ship1 = createShip(5);
  test('length key is the correct length', () => {
    expect(ship1.length).toBe(5);
  });
  test('hits should begin at zero', () => {
    expect(ship1.hits).toEqual(0);
  });
  test('operational key properly marks ship as operational if it has not been sunk', () => {
    expect(ship1.operational).toBe(true);
  });
  test('receivedHit function properly marks ship as hit', () => {
    ship1.receivedHit();
    expect(ship1.hits).toEqual(1);
  });
  test('isSunk function shows false when full length of ship has not been hit', () => {
    expect(ship1.isSunk()).toBe(false);
  });
  test('isSunk function shows true when full length of ship has been hit', () => {
    ship1.receivedHit();
    ship1.receivedHit();
    ship1.receivedHit();
    ship1.receivedHit();
    expect(ship1.isSunk()).toBe(true);
  });
  test('operational key properly marks ship as not operational if it has been sunk', () => {
    expect(ship1.operational).toBe(false);
  });
});
