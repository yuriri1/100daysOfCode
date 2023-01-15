const karacaCrypt = require('./karacaCrypt.js')

test("Dado a palavra 'apple', retorna '1lpp0aca'", () => {
    expect(karacaCrypt('apple')).toBe('1lpp0aca')
})

test("Dado a palavra 'banana', retorna '0n0n0baca'", () => {
    expect(karacaCrypt('banana')).toBe('0n0n0baca')
})

test("Dado a palavra 'karaca', retorna '0c0r0kaca'", () => {
    expect(karacaCrypt('karaca')).toBe('0c0r0kaca')
})

test("Dado a palavra 'burak', retorna 'k0r3baca'", () => {
    expect(karacaCrypt('burak')).toBe('k0r3baca')
})

test("Dado a palavra 'alpaca', retorna '0c0pl0aca'", () => {
    expect(karacaCrypt('alpaca')).toBe('0c0pl0aca')
})