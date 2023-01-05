const sockPairs = (socks) => {
    let pairs = 0
    let sockMap = {}
    
    for (let i = 0; i < socks.length; i++) {
        if(!(socks[i] in sockMap)) {
            sockMap[socks[i]] = 1
        }else{
            sockMap[socks[i]]++
        }
    }
    
    Object.keys(sockMap).forEach((val)=>{
        pairs += Math.floor(sockMap[val]/2)
    })

    return pairs
}

module.exports = sockPairs