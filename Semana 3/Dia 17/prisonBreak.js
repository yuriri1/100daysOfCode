const prisonBreak = (cells) => {
    let prisoners = 0
    if (cells[0] === 0) return 0

    for (let i = 0; i < cells.length; i++) {    
        if (cells[i] === 1) {
            prisoners++;
            for (let j = i; j < cells.length; j++) {
                if (cells[j] === 0) {
                    cells[j] = 1
                } else {
                    cells[j] = 0
                }
            }
        }
    }

    return prisoners

}

module.exports = prisonBreak