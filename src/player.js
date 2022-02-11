// factory function that creates players

export const createPlayer = (name = 'player') => {
  // return player object
  return {
    // name property
    name,
    // method used to attack other players board
    attack: function (board, x, y) {
      // retrieve result of attack
      let result = board.receiveAttack(x, y);
      // return result
      return result;
    },
  };
};
