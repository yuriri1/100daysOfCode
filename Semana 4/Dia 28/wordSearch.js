const wordSearch = (board, words) => {
    const result = [];
    const rows = board.length;
    const cols = board[0].length;
    const visited = Array(rows).fill().map(() => Array(cols).fill(false));
    const dfs = (i, j, word, index) => {
        if (index === word.length) {
        return true;
        }
        if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j] || board[i][j] !== word[index]) {
        return false;
        }
        visited[i][j] = true;
        const found = dfs(i + 1, j, word, index + 1) || dfs(i - 1, j, word, index + 1) || dfs(i, j + 1, word, index + 1) || dfs(i, j - 1, word, index + 1);
        visited[i][j] = false;
        return found;
    };
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        for (let word of words) {
            if (dfs(i, j, word, 0)) {
            result.push(word);
            }
        }
        }
    }
    return result;
}

module.exports = wordSearch