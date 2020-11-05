let mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})
const game = require('../game')
jest.mock('readline-sync')
const rls = require('readline-sync')

const stringifyRemoveComments = (f) => {
  return f.toString().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'')
}

describe("startGame", () => {
  let mockConsole = jest.spyOn(global.console, 'log').mockImplementation()
  let mockYN

  afterEach(() => {
    mockYN.mockRestore()
  })

  test("when Y is pressed, should log 'Let's start!'", () => {
    mockYN = jest.spyOn(rls, 'keyInYN').mockReturnValueOnce(true)
    game.startGame()
    expect(mockConsole).toBeCalledWith("Let's start!")
  })

  test("when Y is pressed, call gameLoop()", () => {
    mockYN = jest.spyOn(rls, 'keyInYN').mockReturnValueOnce(true)
    game.startGame()
    expect(mockConsole).toBeCalledWith("Let's start!")
    expect(stringifyRemoveComments(game.startGame).includes('gameLoop()')).toBe(true)
  })

  test("when N is pressed, should log 'Have a nice life!'", () => {
    mockYN = jest.spyOn(rls, 'keyInYN').mockReturnValueOnce(false)
    game.startGame()
    expect(mockConsole).toBeCalledWith("Have a nice life!")
  })

  test("when N is pressed, call quitGame()'", () => {
    mockYN = jest.spyOn(rls, 'keyInYN').mockReturnValueOnce(false)
    game.startGame()
    expect(mockConsole).toBeCalledWith("Have a nice life!")
    expect(stringifyRemoveComments(game.startGame).includes('quitGame()')).toBe(true)
  })
})

describe("quitGame", () => {
  let mockConsole = jest.spyOn(global.console, 'log').mockImplementation()

  test("quitGame logs 'Goodbye!'", () => {
    game.quitGame()
    expect(mockConsole).toBeCalledWith("Goodbye!")
    expect(game.quitGame()).toBeUndefined()
  })
  test("quitGame calls process.exit()",() => {
    game.quitGame()
    expect(mockExit).toBeCalled()
  })
})

describe("generateRandomNumber", () => {
  test("should return a number", () => {
    expect(typeof game.generateRandomNumber()).toEqual('number')
  })
  test("should return a random number between 1 and 1000", () => {
    expect(game.generateRandomNumber()).toBeGreaterThanOrEqual(1)
    expect(game.generateRandomNumber()).toBeLessThanOrEqual(1000)
  })
})

describe("gameLoop before game starts", () => {
  let mockConsole = jest.spyOn(global.console, 'log').mockImplementation()

  game.gameLoop()
  
  test("should log 'I have a random number in mind'", () => {
    expect(mockConsole).toBeCalledWith('I have a random number in mind')
  })
  test("should log 'It's between 1 and 1000'", () => {
    expect(mockConsole).toBeCalledWith("It's between 1 and 1000")
  })
  test("should log 'You have 10 guesses total'", () => {
    expect(mockConsole).toBeCalledWith("You have 10 guesses total")
  })
})

// describe("gameLoop in the loop", () => {
//   let numOfGuesses = 10
//   let mockQuestionInt = jest.spyOn(rls, 'questionInt').mockImplementation(n => n)
//   let mockRand = jest.spyOn(game, 'generateRandomNumber').mockReturnValue(55)
//   let mockConsole = jest.spyOn(global.console, 'log')
//   let mockGameLoop = jest.spyOn(game, 'gameLoop').mockImplementation()

//   mockGameLoop()
//   let random = mockRand()
//   let tooHigh = mockQuestionInt(random * 2)
//   let tooLow = mockQuestionInt(random / 2)
//   let correct = random

//   test("should log 'n guesses remanining'", () => {
//     expect(mockConsole).toBeCalledWith(`${numOfGuesses} remaining`)
//   })
//   // test("", () => {

//   // })
// })
