// Factory function for creating a player, dummy content for now.
const playerFactory = (playerNumber) => {
  const sayHello = () => console.log('Hello! I am player ' + playerNumber);
  return { playerNumber, sayHello };
}

// const player1 = playerFactory(1);
// player1.sayHello();
// console.log(player1.playerNumber);