// Factory function for creating a player, dummy content for now.
const playerFactory = (playerNumber) => {
  const sayHello = () => console.log('Hello! I am player ' + playerNumber);
  return { playerNumber, sayHello };
}

const gameBoard = (() => {
  // 1 for blank spaces (not 'X' or 'O')
  const board = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return {
    board
  };
})();
