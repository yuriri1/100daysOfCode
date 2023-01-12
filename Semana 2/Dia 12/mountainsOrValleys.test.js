const landscapeType = require('./mountainsOrValleys.js')

test("Para o array [3,4,5,4,3] a resposta deve ser 'mountain'", () => {
    expect(landscapeType([3,4,5,4,3])).toBe("mountain")
})

test("Para o array [8,7,3,1,2,4] a resposta deve ser 'valley'", () => {
    expect(landscapeType([8,7,3,1,2,4])).toBe("valley")
})

test("Para o array [9,8,9] a resposta de ser 'valley'", () => {
    expect(landscapeType([9,8,9])).toBe("valley")
})

test("Para o array [9,8,9,8] a resposta deve ser 'neihter'", ()=> {
    expect(landscapeType([9,8,9,8])).toBe("neither")
})