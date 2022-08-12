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

// I pass in a value into the displayBoard() function that tells it
// whose turn it is, which will help in determining if the game should input
// an X or and O.

// module for the display controller
const displayController = (() => {
  const display = document.querySelector('#display');
  const board = document.createElement('div');
  board.classList.add('game-board');

  // Resets the values in the boardArray so that a new game can be played.
  const resetBoard = () => {
    console.log('reset board');
  }

  // Displays the game board without click listeners (used when the game is
  // over, to prevent additional turns after the game is done.)
  const displayBoardGameOver = () => {
    // This while loop removes all children of board so that the board is
    // "cleared." This resets the board so that the for loop doesn't create
    // duplicate entries or new rows.
    console.log('in the displayBoardGameOver function');
    var child = board.lastElementChild;
    while(child) {
        board.removeChild(child);
        child = board.lastElementChild;
        console.log('child removed');
    }
    // Displays the 3x3 board
    for (i = 0; i < 9; i++) {
        const space = document.createElement('div');
        space.classList.add('space');
        space.textContent = gameBoard.boardArray[i];
        space.id = i;
        board.appendChild(space);
      }
      // Adds a button that asks if you want to play again (a new game).
      const playAgainBtn = document.createElement('button');
      playAgainBtn.textContent = "Play Again?";
      playAgainBtn.addEventListener('click', () => resetBoard());
      board.appendChild(playAgainBtn);
  }

  // Displays the game board with clickable spaces for playing the game.
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
        if (space.textContent != '') {
          console.log('You cannot play there, that space is already taken.');
        }
        else {
          space.textContent = playerLetter;
          gameBoard.boardArray[space.id] = playerLetter; 
          gameController.count++;
          gameController.gameTurn(gameController.count);
          gameController.checkForWinner(gameBoard.boardArray, playerLetter);
        }
      });
      board.appendChild(space);
    }
  }
  display.appendChild(board);
  return {
    displayBoard, displayBoardGameOver
  };

})();

// Runs the game (module)
const gameController = (() => {
  const player1 = playerFactory(1, 'X');
  const player2 = playerFactory(2, 'O');
  let count = 0;

  // Displays the game board for the current player to make their move.
  const gameTurn = (playerTurn) => {
    // checkForWinner(gameBoard.boardArray);
    if (playerTurn % 2 == 0) {
      displayController.displayBoard(player1.playerLetter);
    }
    else {
      displayController.displayBoard(player2.playerLetter);
    }
  }
  
  // This function should loop through the boardArray to find out if either player
  // has won the game. If someone won, then end the game and congratulate the
  // winner. Checks if there's a 3-in-a-row but also makes sure it's not a 
  // 3-in-a-row of empty spaces.
  const checkForWinner = (array, playerLetter) => {
    // Left column
    if (array[0] == array[3] && array[3] == array[6] && array[0] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // Middle Column
    else if (array[1] == array[4] && array[4] == array[7] && array[1] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // Right column
    else if (array[2] == array[5] && array[5] == array[8] && array[2] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // Top row
    else if (array[0] == array[1] && array[1] == array[2] && array[0] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // Middle row
    else if (array[3] == array[4] && array[4] == array[5] && array[3] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // Bottom row
    else if (array[6] == array[7] && array[7] == array[8] && array[6] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // "\" Diagonal
    else if (array[0] == array[4] && array[4] == array[8] && array[0] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // "/" Diagonal
    else if (array[2] == array[4] && array[4] == array[6] && array[2] != '') {
      console.log('Player ' + playerLetter + ' Wins!');
      displayController.displayBoardGameOver();
    }
    // It's a tie when all spaces are taken and there are no 3-in-a-row's.
    else if (gameController.count == 9) {
      console.log("It's a Tie!");
      displayController.displayBoardGameOver();
    }
  }

  // Initial function call to start the game and the first player's turn.
  gameTurn(0);

  return {
    gameTurn, count, checkForWinner
  };
})();