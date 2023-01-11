const uniqueBST = require('./uniqueBST')

test("Para n = 3, possuem 5 árvores", () => {
    expect(uniqueBST(3)).toBe(5)
})

test("Para n = 4, possuem 14 árvores", () => {
    expect(uniqueBST(4)).toBe(14)
})

test("Para n = 5, possuem 42 árvores", () => {
    expect(uniqueBST(5)).toBe(42)
})