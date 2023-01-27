const coinsDiv = (coins) => {
    const sum = coins.reduce((acc, curr) => acc + curr, 0)

    if (sum % 3 !== 0) return false

    const coinPerChild = sum / 3
    coins.sort((a, b) => a - b)

    for(let i in coins) {
        if(coins[i] > coinPerChild) return false
    }
    return true
}

module.exports = coinsDiv