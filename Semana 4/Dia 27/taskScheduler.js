const taskScheduler = (tasks, n) => {
    const map = new Map()
    let max = 0
    let maxCount = 0
    for (const task of tasks) {
        map.set(task, (map.get(task) || 0) + 1)
        if (map.get(task) > max) {
            max = map.get(task)
            maxCount = 1
        } else if (map.get(task) === max) {
            maxCount++
        }
    }
    return Math.max(tasks.length, (max - 1) * (n + 1) + maxCount)
}

module.exports = taskScheduler