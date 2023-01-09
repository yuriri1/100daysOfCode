const combinationPhoneNumber = require('./combinationPhoneNumber')

test("Para a o(s) número(s) '23' as combinações esperadas são: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']", () => {
    expect(combinationPhoneNumber('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test("Para a o(s) número(s) '2' as combinações esperadas são: ['a', 'b', 'c']", () => {
    expect(combinationPhoneNumber('2')).toEqual(['a', 'b', 'c'])
})

test("Para a o(s) número(s) '' as combinações esperadas são:  []", () => {
    expect(combinationPhoneNumber('')).toEqual([])})