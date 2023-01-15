const karacaCrypt = (str) => {
    let newStr = str.split('').reverse().join('')
    newStr = newStr.replace(/a/g, '0')
    newStr = newStr.replace(/e/g, '1')
    newStr = newStr.replace(/i/g, '2')
    newStr = newStr.replace(/o/g, '2')
    newStr = newStr.replace(/u/g, '3')
    return newStr + 'aca'
}

module.exports = karacaCrypt