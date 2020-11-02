// const rewire = require('rewire')
const game = require('../game')

jest.mock('readline-sync')
const rls = require('readline-sync')

const stringifyRemoveComments = (f) => {
  return f.toString().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'')
}

describe("startGame", () => {
  let originalConsole = console.log
  let mockConsole = jest.spyOn(global.console, 'log').mockImplementation()

  let mockYN

  afterAll(() => {
    mockConsole.mockRestore()
  })

  afterEach(() => {
    mockYN.mockRestore()
  })

  test("when Y is pressed, should log 'Let's start!'", () => {
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
})

// describe("", () => {
//   test("", () => {

//   })
// })

// describe("", () => {
//   test("", () => {

//   })
// })

// describe("", () => {
//   test("", () => {

//   })
// })
// describe("", () => {
//   test("", () => {

//   })
// })
// describe("", () => {
//   test("", () => {

//   })
// })
