const progressDays = (runs) => {
    let days = 0;
    for (let i = 0; i < runs.length; i++) {
        if (runs[i] < runs[i + 1]) {
        days++;
        }
    }
    return days;
}

module.exports = progressDays;