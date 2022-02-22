const game = function (round) {
  const ROCK = "Rock";
  const PAPER = "Paper";
  const SCISSORS = "Scissors";
  const gameObjects = [ROCK, PAPER, SCISSORS];
  const gameObjectValues = [0, 1, 2];
  const LOSE = "Lose";
  const WIN = "Win";
  const DRAW = "Draw";
  let playerScore = 0;
  let cpuScore = 0;

  const computerPlay = function () {
    return gameObjects[Math.floor(Math.random() * gameObjects.length)];
  };

  const playRound = function (playerSelection, cpuSelection) {
    let player = playerSelection.trim().toUpperCase();
    let cpu = cpuSelection.toUpperCase();

    if (!gameObjects.filter((ele) => ele.toUpperCase() === player).length) {
      return;
    }

    for (let i = 0; i < gameObjects.length; i++) {
      player =
        player === gameObjects[i].toUpperCase() ? gameObjectValues[i] : player;
      cpu = cpu === gameObjects[i].toUpperCase() ? gameObjectValues[i] : cpu;
    }

    if ((player + 1) % 3 === cpu) {
      console.log(
        `You ${LOSE}! ${cpuSelection.trim()} beats ${playerSelection}.`
      );
      cpuScore++;
    } else if (player === cpu) {
      console.log(`It\'s a ${DRAW}.`);
    } else {
      console.log(
        `You ${WIN}! ${playerSelection.trim()} beats ${cpuSelection}.`
      );
      playerScore++;
    }
  };

  for (let i = 0; i < round; i++) {
    const playerSelection = prompt(
      `Enter \'${ROCK}\', \'${PAPER}\' or \'${SCISSORS}\' :`
    );
    playRound(playerSelection, computerPlay());
  }

  console.log("=".repeat(30));
  console.log(`Player Score = ${playerScore}, Computer Score = ${cpuScore}`);

  if (playerScore > cpuScore) {
    console.log("=> Congratulation! You win the game.");
  } else if (playerScore < cpuScore) {
    console.log("=> Game Over! You lose to the Computer.");
  } else if (playerScore === cpuScore) {
    console.log("=> Wow! The game is a draw.");
  }
};

game(5);
