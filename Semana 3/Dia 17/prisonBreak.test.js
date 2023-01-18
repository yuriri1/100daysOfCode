const prisonBreak = require('./prisonBreak')

test("Dado o array [1, 1, 0, 0, 0, 1, 0], o resultado deve ser 4", () => {
    expect(prisonBreak([1, 1, 0, 0, 0, 1, 0])).toBe(4)
})

test("Dado o array [1, 1, 1], o resultado deve ser 1", () => {
    expect(prisonBreak([1,1,1])).toBe(1)
})

test("Dado o array [0, 0, 0], o resultado deve ser 0", () => {
    expect(prisonBreak([0,0,0])).toBe(0)
})

test("Dado o array [0, 1, 1, 1], o resultado deve ser 0", () => {
    expect(prisonBreak([0,1,1,1])).toBe(0)
})