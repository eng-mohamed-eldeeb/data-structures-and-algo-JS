function collextOdds(arr) {
    let result = [];
    function helper(arrH) {
        if(arrH.length === 0) {
            return;
        }
        if (arrH[0] % 2 != 0) {
            result.push(arrH[0]);
        }
        helper(arrH.slice(1));
    }
    helper(arr);
    return result;
}

console.log(collextOdds([1,2,3,4,5,6,7,8,9]))