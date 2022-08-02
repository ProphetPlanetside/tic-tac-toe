// Factory function for creating a player, dummy content for now.
const playerFactory = (playerNumber) => {
  const sayHello = () => console.log('Hello! I am player ' + playerNumber);
  return { playerNumber, sayHello };
}

const gameBoard = (() => {
  // 1 for blank spaces (not 'X' or 'O')
  const boardArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return {
    boardArray
  };
})();

const displayController = (() => {
  const display = document.querySelector('#display');
  const board = document.createElement('div');
  board.classList.add('game-board');
  for (i = 0; i < 9; i++) {
    const space = document.createElement('div');
    space.textContent = 'X';
    board.appendChild(space);
  }
  display.appendChild(board);
  return {
    display
  };
})();
