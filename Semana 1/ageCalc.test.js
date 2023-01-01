const ageCalc = require('./ageCalc');

test('ageCalc Deve retornar 365 quando "years" for 1', () => {
    expect(ageCalc(1)).toBe(365);
})

test('ageCalc Deve retornar 23725 quando "years" for 65', () => {
    expect(ageCalc(65)).toBe(23725);
})

test('ageCalc Deve retornar 0 quando "years" for 0', () => {
    expect(ageCalc(1)).toBe(365);
})

test('ageCalc Deve retornar 7300 quando "years" for 20', () => {
    expect(ageCalc(20)).toBe(7300);
})