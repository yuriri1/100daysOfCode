const findNemo = (sentence) => {
    let nemo = sentence.split(" ").indexOf("Nemo");
    if (nemo === -1) {
        return "I can't find Nemo :(";
    }
    return `I found Nemo at ${nemo + 1}!`;
}

module.exports = findNemo;