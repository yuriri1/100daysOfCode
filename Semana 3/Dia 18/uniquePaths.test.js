const uniquePaths = require('./uniquePaths')

test("Dado m = 3 e n = 7, o número de caminhos únicos é 28", () => {
  expect(uniquePaths(3, 7)).toBe(28)
})

test("Dado m = 3 e n = 2, o número de caminhos únicos é 3", () => {
  expect(uniquePaths(3, 2)).toBe(3)
})

test("Dado m = 7 e n = 3, o número de caminhos únicos é 28", () => {
  expect(uniquePaths(7, 3)).toBe(28)
})

test("Dado m = 3 e n = 3, o número de caminhos únicos é 6", () => {
  expect(uniquePaths(3, 3)).toBe(6)
})