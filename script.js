// Factory function for creating a player, dummy content for now.
const playerFactory = (playerNumber) => {
  const sayHello = () => console.log('Hello! I am player ' + playerNumber);
  return { playerNumber, sayHello };
}

// Module for the game board
const gameBoard = (() => {
  // Inserting X's and O's for now
  const boardArray = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  return {
    boardArray
  };
})();

// module for the display controller
const displayController = (() => {
  const display = document.querySelector('#display');
  const board = document.createElement('div');
  board.classList.add('game-board');
  const displayBoard = () => {
    // This while loop removes all children of board so that the board is
    // "cleared." This resets the board so that the for loop doesn't create
    // duplicate entries or new rows.
    var child = board.lastElementChild;
    while(child) {
        board.removeChild(child);
        child = board.lastElementChild;
    }
    for (i = 0; i < 9; i++) {
      const space = document.createElement('div');
      space.classList.add('space');
      space.textContent = gameBoard.boardArray[i];
      space.addEventListener('click', () => {space.textContent = 'O';});
      board.appendChild(space);
    }
  }
  displayBoard();
  display.appendChild(board);
  // Do I have to return anything? Does anything inside displayController() need
  // to be accessed from somewhere else in my code?
  // return {
  //   display,
  //   displayBoard
  // };
})();
