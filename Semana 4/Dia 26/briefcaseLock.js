const minTurns = (current, target) => {
    let steps = 0
    for (let i = 0; i < current.length; i++) {
        let currNumber = parseInt(current[i])
        let targNumber = parseInt(target[i])
        let forward = (currNumber - targNumber + 10) % 10
        let backward = (targNumber - currNumber + 10) % 10
        steps += Math.min(forward, backward)
    }
    return steps
}

module.exports = minTurns