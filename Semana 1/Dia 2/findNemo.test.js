const findNemo = require('./findNemo');

test('findNemo Deve retornar "I found Nemo at 4!" quando "sentence" for "I am finding Nemo !"', () => {
    expect(findNemo("I am finding Nemo !")).toBe("I found Nemo at 4!")
})

test('findNemo Deve retornar "I found Nemo at 1!" quando "sentence" for "Nemo is me"', () => {
    expect(findNemo("Nemo is me")).toBe("I found Nemo at 1!")
})

test('findNemo Deve retornar "I found Nemo at 4!" quando "sentence" for "I Nemo am"', () => {
    expect(findNemo("I Nemo am")).toBe("I found Nemo at 2!")
})