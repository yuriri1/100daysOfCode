const bbqSkewers = require('./BBQSkewers')

test('Teste 1 deve retornar [2,3]', () => {
    expect(bbqSkewers(
        [
            "--oooo-ooo--",
            "--xx--x--xx--",
            "--o---o--oo--",
            "--xx--x--ox--",
            "--xx--x--ox--"
        ]
    )).toEqual([2,3])
})

test('Teste 2 deve retornar [3,2]', () => {
    expect(bbqSkewers(
        [
            "--oooo-ooo--",
            "--xxxxxxxx--",
            "--o---",
            "-o-----o---x--",
            "--o---o-----"
        ]
    )).toEqual([3,2])
})