const combinationPhoneNumber = (digits) => {
    const phoneMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    const result = []
    
    const dfs = (index, str) => {
        if (index === digits.length) {
        result.push(str)
        return;
        }
    
        const letters = phoneMap[digits[index]]
    
        for (let i = 0; i < letters.length; i++) {
        dfs(index + 1, str + letters[i])
        }
    };
    
    if (digits) {
        dfs(0, '')
    }
    
    return result
}

module.exports = combinationPhoneNumber