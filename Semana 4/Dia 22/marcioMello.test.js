const marcioMelloCalc = require('./marcioMello')

test("Dado 1.034 km2, retorna 144 campos de futebol", () => {
    expect(marcioMelloCalc(1.034)).toBe(144)
})

test("Dado 0.5 km2, retorna 70 campos de futebol", () => {
    expect(marcioMelloCalc(0.5)).toBe(70)
})

test("Dado 130 km2, retorna 18207 campos de futebol", () => {
    expect(marcioMelloCalc(130)).toBe(18207)
})