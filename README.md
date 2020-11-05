[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

# Guessing Game Lab

Build a guessing game in the command line!

Similar to the lesson, you will be building a guessing game. The main difference with this lab is the computer will generate a random number and it's up to you to guess it.

## Learning Objectives

- Practice building a command line game
- Understanding how to control the flow of a program
- Practice writing code to make tests pass

## Prerequisites

- Javascript (and some node)
- Terminal commands

---

## Getting Started

1. Fork this repository.
1. Clone the forked repository to your computer.
1. `cd` to the cloned directory
1. `npm install` to install dependencies
1. `npm test` to run the tests

## Technical Requirements

Here's a description of what each function should accomplish. We also suggest you try to read the tests to see what they're looking for specifically.

> Note: you can pass all the tests in this lab and still not have a working game. This is due to the difficulty of testing console inputs inside loops. Make sure your game works by playing it in the terminal before you submit a pull request.

**startGame()**

* Should run `rls.keyInYN()` which prompts the user to start the game
  * If `Y` is pressed, console log "Let's start!"
  * If `Y` is pressed, call `gameLoop()` function
  * If `N` is pressed, console log "Have a nice life!"
  * If `N` is pressed, call `quitGame()` function
* Call `startGame()` at the bottom of `game.js` (before the exports) to kick things off

**quitGame()**

* console log "Goodbye!"
* call `process.exit()` to terminate the program

**generateRandomNumber()**

* return a whole (rounded) random number between 1 and 1000

**gameLoop()**

* console log "I have a random number in mind"
* console log "It's between 1 and 1000"
* console log "You have 10 guesses"
* Generate a random number and store it in a variable
* Take an input (guess) from the user using `rls.questionInt()`
* If the guess is correct, log "Congrats! You got it right!"
  * Prompt the user if they want to play again
    * if Y, call `gameLoop()`
    * if N, call `quitGame()`
* If the guess is high, log "Your guess is too high"
* If the guess is low, log "Your guess is too low"
* Starting with 10, decrease the number of guesses after each attempt
* If the number of guesses reaches 0, log "You lose!" and call `quitGame()`


## Bonus

Look up how to use `process.argv` for these (see Resources below). It will enable you to pass arguments in from the command line to the program.

* Change the `numOfGuesses` variable in `startGame` to be a value passed in from the command line. It should default to 10 if nothing is passed in.
* Add `min` and `max` parameters to the `generateRandomNumber()` function, which will allow you to specify how wide the range of random numbers is.
  * Accept min and max values from the command line
  * Should default to 1 and 1000, respectively

You should be able to run the program like this:

```bash
$ node game.js 15 100 500 # 15 tries, 100 min, 500 max
```

## Submission Guidelines

- Finish the lab
- Commit your work
- Push your work to your forked repository
- Make a pull request against the main repository 

## Resources

- [how to parse command line arguments](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)
- 