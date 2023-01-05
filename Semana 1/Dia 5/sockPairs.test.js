const sockPairs = require('./sockPairs')

test("Para a string 'AA' deve retornar 1", () => {
    expect(sockPairs('AA')).toBe(1)
})

test("Para a string 'ABABC' deve retornar 2", () => {
    expect(sockPairs('ABABC')).toBe(2)
})

test("Para a string 'CABBACCC' deve retornar 4", () => {
    expect(sockPairs('CABBACCC')).toBe(4)
})