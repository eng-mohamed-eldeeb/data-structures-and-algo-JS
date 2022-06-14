function bubbleSort(arr) {
    for (let i = arr.length; i >= 0; i--) {
        for (let j = 0; j <= i -1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([6,4,5,2,8,9]))