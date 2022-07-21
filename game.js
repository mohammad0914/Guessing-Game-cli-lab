const rls = require('readline-sync')
let numberOfGuess ;

const SetParametre=()=>{
  let argv=process.argv.slice(2);
  numberOfGuess =argv[0];
  console.log(numberOfGuess);

}

/**
 * Starts the game by prompting the user if they want to play
 * Calls either gameLoop() or quitGame()
 * 
 * @returns {undefined}
 */
const startGame = () => {
  SetParametre();
  if (rls.keyInYN("Would u like to play?")) {
    console.log("Let's Start.");
    gameLoop();
  } else {
    console.log("Have a nice life.!");
    quitGame();
  }

}

/**
 * Logs "Goodbye!"
 * Calls process.exit() to quit the game
 * 
 * @returns {undefined}
 */
const quitGame = () => {
  console.log("Goodbye");
  process.exit();

}

/**
 * Controls the flow of the game.
 * Should prompt the user to play again once all
 * guesses have been made or correct answer guessed
 * 
 * @returns {undefined}
 */
const gameLoop = () => {
  console.log("I have a random number in mind");
  console.log("It's between 1 and 1000");
  console.log("You have 10 guesses");
  let randomNumber = generateRandomNumber();
  console.log(randomNumber);
  console.log(numberOfGuess);
  while (numberOfGuess > 0) {
    let guess = rls.questionInt();
    if (guess === randomNumber) {
      console.log("Congrats! You got it right!");
      if (rls.keyInYN("Would you play again?")) {
        gameLoop();
      } else {
        quitGame();
      }
    }
    if (guess > randomNumber) {
      console.log("Guess is high.");
    } else {
      console.log("Guess is lower");
    }
    numberOfGuess--;
  }
  console.log("You lose");
  quitGame();
}


/***
 * Generates a random number 
 *
 * @returns {number} - a number between 1 and 1000
 */
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1001);
}


startGame()

module.exports = {
  startGame,
  quitGame,
  gameLoop,
  generateRandomNumber
}