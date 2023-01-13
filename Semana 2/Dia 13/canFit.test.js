const canFit = require('./canFit')

test("Dado o array [1, 2, 3, 4, 5] e 2 sacos, a função retorna true", () => {
    expect(canFit([1, 2, 3, 4, 5], 2)).toBe(true)
})

test("Dado o array [1, 2, 3, 4, 5] e 1 saco, a função retorna false", () => {
    expect(canFit([1, 2, 3, 4, 5], 1)).toBe(false)
})

test("Dado o array [2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2] e 4 sacos, a função retorna true", () => {
    expect(canFit([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2], 4)).toBe(true)
})

test("Dado o array [2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2] e 3 sacos, a função retorna false", () => {
    expect(canFit([2, 1, 2, 5, 4, 3, 6, 1, 1, 9, 3, 2], 3)).toBe(false)
})