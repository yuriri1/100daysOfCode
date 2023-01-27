const coinsDiv = require('./coinTrouble')

test("Dado [1,2,3,2,2,2,3] deve retornar true", () => {
    expect(coinsDiv([1,2,3,2,2,2,3])).toBe(true)
})

test("Dado [5,3,10,1,2] deve retornar false", () => {
    expect(coinsDiv([5,3,10,1,2])).toBe(false)
})

test("Dado [2,4,3,2,4,9,7,8,6,9] deve retornar true", () => {
    expect(coinsDiv([2,4,3,2,4,9,7,8,6,9])).toBe(true)
})