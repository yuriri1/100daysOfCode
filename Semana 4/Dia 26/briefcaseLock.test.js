const minTurns = require('./briefcaseLock')

test("Dado 4089 e 5672, o número mínimo de passos deve ser 9", () => {
    expect(minTurns("4089", "5672")).toBe(9)
})

test("Dado 1111 e 1100, o número mínimo de passos deve ser 2", () => {
    expect(minTurns("1111", "1100")).toBe(2)
})

test("Dado 2391 e 4984, o número mínimo de passos deve ser 10", () => {
    expect(minTurns("2391", "4984")).toBe(10)
})