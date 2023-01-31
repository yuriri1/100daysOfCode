const wordSearch = require('./wordSearch')

const board = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
]
const words = ["oath","pea","eat","rain"]

test("Dado o array 'board' e as palavras em 'words' deve retornar [oath,eat]",() => {
    expect(wordSearch(board, words)).toEqual(["oath","eat"])
})