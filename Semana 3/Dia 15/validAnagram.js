const validAnagram = (s,t) => {
    return s.split('').reverse().join('') === t
}

module.exports = validAnagram