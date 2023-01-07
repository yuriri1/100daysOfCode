const merge = require('./mergeSortArray')

test('Dado os arrays [1,2,3,0,0,0] e [2,5,6] o resultado deve ser [1,2,2,3,5,6]', () => {
    expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).toEqual([1,2,2,3,5,6])
})

test('Dado os arrays [1] e [] o resultado deve ser [1]', () => {
    expect(merge([1], 1, [], 0)).toEqual([1])
})

test('Dado os arrays [0] e [1] o resultado deve ser [1]', () => {
    expect(merge([0], 0, [1], 1)).toEqual([1])
})