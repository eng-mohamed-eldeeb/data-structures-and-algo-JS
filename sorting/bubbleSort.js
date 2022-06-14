function bubbleSort(arr) {
    let noSwap;
    for (let i = arr.length; i >= 0; i--) {
        noSwap = true;
        for (let j = 0; j <= i -1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr
}

console.log(bubbleSort([6,4,5,2,8,9]))