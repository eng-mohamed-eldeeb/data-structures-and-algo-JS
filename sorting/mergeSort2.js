function merge(arr1,arr2) {
    const result =[]
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j])
        j++;
    }
    return result;
}

function mergSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergSort(arr.slice(0,mid));
    let right = mergSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergSort([8,6,32,4,95,3,4,8,7]));