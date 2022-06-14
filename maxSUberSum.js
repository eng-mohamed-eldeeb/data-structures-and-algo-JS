function maxSuberSum(arr, num) {
    if(num > arr.length) return null;
    let tempSum = 0, maxSum = 0;
    for(let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = (tempSum - arr[i - num]) + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSuberSum([2,6,9,2,1,8,5,6,3],3))