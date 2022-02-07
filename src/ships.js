// factory function that creates ships

export const createShip = (length, operational) => {
  // creats an array that shows the ships length and which parts of it have been hit
  const shipLocations = Array(length).fill(false);
  // factory function returns an array
  return {
    // length of the ship
    length,
    // individuallocations of the ship
    hitLocation: shipLocations,
    // shows if the ship is operational
    operational,
    // method that take the ship object and location as parameters and marks a hitLocation as true (been hit)
    receivedHit: (object, num) => {
      // change the location hit from false to true
      object.hitLocation[num] = true;
      return 1;
    },
    // method that checks to see if the ship has sunk
    isSunk: (ship) => {
      // retrieve the length of the ship
      const totalLength = ship.length;
      // hit counter which starts at zero
      let hit = 0;
      // for each location on the ship check which ones have been hit
      ship.hitLocation.forEach((element) => {
        // if a location has been hit than add 1 to the hit counter
        if (element === true) {
          hit += 1;
          return hit;
        }
        return hit;
      });
      // if the hit counter equals the total length of the ship than the ship has sunk
      if (hit === totalLength) {
        // update ship operational key to show that the ship is not operattional
        ship.operational = false;
        // return true if the ship has sunk
        return true;
      }
      // return false if the ship has not sunk
      return false;
    },
  };
};
