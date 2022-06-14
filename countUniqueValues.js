function counUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return 1;
    }
    var begin =0, next = 1;
    while (next < arr.length) {
        if (arr[begin] != arr[next]) {
            begin++;
            arr[begin] = arr[next];
        }
        next++;
    }
    return begin +1;
}

console.log(counUniqueValues([3,3,2,2,4,4,5,6]))