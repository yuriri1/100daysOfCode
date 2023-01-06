const nextPrime = require('./nextPrime')

test('Dado o número 12 o próximo primo deve ser 13', () => {
    expect(nextPrime(12)).toBe(13)
})

test('Dado o número 24 o próximo primo deve ser 29', () => {
    expect(nextPrime(24)).toBe(29)
})

test('Dado o número 11 o próximo primo deve ser 11', () => {
    expect(nextPrime(11)).toBe(11)
})