const restoreIPAdress = (ip) => {
    const result = []
    const isValid = (str) => {
        if (str.length > 3) return false
        if (str[0] === '0' && str.length > 1) return false
        if (Number(str) > 255) return false
        return true
    };
    const dfs = (str, index, path) => {
        if (index === 4) {
            if (str.length === 0) result.push(path)
            return
        }
        for (let i = 1; i < 4; i++) {
            if (str.length < i) break
            const part = str.slice(0, i)
            if (isValid(part)) {
                dfs(str.slice(i), index + 1, path + part + (index === 3 ? '' : '.'))
            }
        }
    }
    dfs(ip, 0, '')
    return result
}

module.exports = restoreIPAdress