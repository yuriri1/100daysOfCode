const bbqSkewers = (grill) => {
    var count = [0,0]
    grill.forEach(skewer => {
        if(skewer.indexOf("x") == -1){
            count[0]++
        }else{
            count[1]++
        }
    });
    return count
}

module.exports = bbqSkewers