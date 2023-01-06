const nextPrime = (n) => {
    const isPrime = (n) => {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    }

    let i = n
    while (!isPrime(i)) {
        i++
    }

    return i
}

module.exports = nextPrime