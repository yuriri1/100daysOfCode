const trappingRainWater = require('./trappingRainWater')

test('Test case 1', () => {
    expect(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6)
})

test('Test case 2', () => {
    expect(trappingRainWater([4,2,0,3,2,5])).toBe(9)
})

test('Test case 3', () => {
    expect(trappingRainWater([4,2,3])).toBe(1)
})