const landscapeType = (arr) => {
    let result = 'mountain'
    let peak = 0
    let peakVal = 0

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
            peak++
            peakVal = arr[i]
        }
    }

    if (peak === 0) result = 'valley'
    if (peak > 0 && (peakVal === arr.at(0) || peakVal === arr.at(-1) )) result = 'neither'
    if (peak > 1) result = 'neither'

    return result
}   


module.exports = landscapeType