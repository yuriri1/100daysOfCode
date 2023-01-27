const josephus = require('./josephus')

test("Dado n = 7 e k = 3, o sobrevivente deve ser o número 4", () => {
  expect(josephus(7, 3)).toBe(4)
})

test("Dado n = 41 e k = 3, o sobrevivente deve ser o número 31", () => {
    expect(josephus(41, 3)).toBe(31)
})

test("Dado n = 35 e k = 11, o sobrevivente deve ser o número 18", () => {
    expect(josephus(35, 11)).toBe(18)
})

test("Dado n = 11 e k = 1, o sobrevivente deve ser o número 11", () => {
    expect(josephus(11, 1)).toBe(11)
})