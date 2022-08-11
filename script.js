// Factory function for creating a player, dummy content for now.
const playerFactory = (playerNumber, playerLetter) => {
  const sayHello = () => console.log('Hello! I am player ' + playerNumber +
  ' and my letter is ' + playerLetter);
  return { playerNumber, playerLetter, sayHello };
}

// Module for the game board
const gameBoard = (() => {
  // 9 elements for 9 spaces of the board
  const boardArray = ['', '', '', '', '', '', '', '', ''];
  return {
    boardArray
  };
})();

// I could pass in a value into the displayBoard() function that tells it
// whose turn it is, which will help in determining if the game should input
// an X or and O.

// module for the display controller
const displayController = (() => {
  const display = document.querySelector('#display');
  const board = document.createElement('div');
  board.classList.add('game-board');
  const displayBoard = (playerLetter) => {
    // This while loop removes all children of board so that the board is
    // "cleared." This resets the board so that the for loop doesn't create
    // duplicate entries or new rows.
    var child = board.lastElementChild;
    while(child) {
        board.removeChild(child);
        child = board.lastElementChild;
    }
    let notMadeMoveYet = true;
    // Displays the 3x3 board
    for (i = 0; i < 9; i++) {
      const space = document.createElement('div');
      space.classList.add('space');
      space.textContent = gameBoard.boardArray[i];
      space.id = i;
      space.addEventListener('click', () => {
        space.textContent = playerLetter;
        gameBoard.boardArray[space.id] = playerLetter; 
        gameController.count++;
        gameController.gameTurn(gameController.count);
      });
      board.appendChild(space);
    }
  }
  display.appendChild(board);
  return {
    displayBoard
  };
})();

// Runs the game (module)
const gameController = (() => {
  const player1 = playerFactory(1, 'X');
  const player2 = playerFactory(2, 'O');
  let count = 0;

  // Displays the game board for the current player to make their move.
  const gameTurn = (playerTurn) => {
    if (playerTurn % 2 == 0) {
      displayController.displayBoard(player1.playerLetter);
    }
    else {
      displayController.displayBoard(player2.playerLetter);
    }
  }
  
  // Initial function call to start the game and the first player's turn.
  gameTurn(0);

  return {
    gameTurn, count
  };
})();