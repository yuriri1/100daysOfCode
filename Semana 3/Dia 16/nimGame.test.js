const nimGame = require('./nimGame')

test("Com 40 pedras, o jogador 1 ganha", () => {
  expect(nimGame(40)).toBe(false)
})

test("Com 41 pedras, o jogador 2 ganha", () => {
  expect(nimGame(41)).toBe(true)
})

test("Com 42 pedras, o jogador 1 ganha", () => {
  expect(nimGame(42)).toBe(true)
})