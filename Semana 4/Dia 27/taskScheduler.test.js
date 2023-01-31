const taskScheduler = require('./taskScheduler')

test("Dado o array ['A','A','A','B','B','B'] e n = 2, o resultado deve ser 8", () => {
    expect(taskScheduler(['A','A','A','B','B','B'], 2)).toBe(8)
})

test("Dado o array ['A','A','A','B','B','B'] e n = 0, o resultado deve ser 6", () => {
    expect(taskScheduler(['A','A','A','B','B','B'], 0)).toBe(6)
})

test("Dado o array ['A','A','A','A','A','A','B','C','D','E','F','G'] e n = 2, o resultado deve ser 16", () => {
    expect(taskScheduler(['A','A','A','A','A','A','B','C','D','E','F','G'], 2)).toBe(16)
})