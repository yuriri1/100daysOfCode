const progressDays = require('./johnnyProgress')

test('Para o array [3, 4, 1, 2] a resposta deve ser 2', () => {
    expect(progressDays([3, 4, 1, 2])).toBe(2)
})

test('Para o array [10, 11, 12, 9, 10] a resposta deve ser 3', () => {
    expect(progressDays([10, 11, 12, 9, 10])).toBe(3)
})

test('Para o array [6, 5, 4, 3, 2, 9] a resposta deve ser 1', () => {
    expect(progressDays([6, 5, 4, 3, 2, 9])).toBe(1)
})

test('Para o array [9, 9] a resposta deve ser 0', () => {
    expect(progressDays([9, 9])).toBe(0)
})