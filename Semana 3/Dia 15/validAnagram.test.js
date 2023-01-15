const validAnagram = require('./validAnagram')

test("Dado a palavra 'anagrama' e 'amargana', retorna true", () => {
    expect(validAnagram('anagrama', 'amargana')).toBeTruthy()
})

test("Dado a palavra 'peixe' e 'exiep', retorna true", () => {
    expect(validAnagram('peixe', 'exiep')).toBeTruthy()
})

test("Dado a palavra 'astralopitecos' e 'astralo-oque?', retorna false", () => {
    expect(validAnagram('astralopitecos', 'astralo-oque?')).toBeFalsy()
})