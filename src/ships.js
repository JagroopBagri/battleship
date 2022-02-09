// factory function that creates ships

export const createShip = (length) => {
  // creats an array that shows the ships length and which parts of it have been hit
  const shipLocations = Array(length).fill(false);
  // factory function returns an array
  return {
    // length of the ship
    length,
    // hits that the ship has taken
    hits: 0,
    // shows if the ship is operational
    operational: true,
    // method that take the ship object and location as parameters and marks a hitLocation as true (been hit)
    receivedHit: function () {
      // change the location hit from false to true
      this.hits += 1;
      return 1;
    },
    // method that checks to see if the ship has sunk
    isSunk: function () {
      // check if ship has been hit in all locations
      if (this.hits === this.length) {
        // update ship operational key to show that the ship is not operational
        this.operational = false;
        // return true if the ship has sunk
        return true;
      }
      //return false if the ship is still operational
      return false;
    },
  };
};
