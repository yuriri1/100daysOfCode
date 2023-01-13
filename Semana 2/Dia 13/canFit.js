const canFit = (items, bags) => {
    const bagSize = 10*bags

    const sum = items.reduce((a, b) => a + b, 0)

    if (sum <= bagSize) {
        return true
    }
    return false    
}

module.exports = canFit