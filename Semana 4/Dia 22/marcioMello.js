const marcioMelloCalc = (km2) => {
    const footField = 0.00714

    return Math.trunc(km2/footField)
}

module.exports = marcioMelloCalc