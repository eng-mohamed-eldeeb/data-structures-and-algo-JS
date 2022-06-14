function sumZero(arr) {
    var pointerEnd = arr.length-1;
    for (let pointerStart = 0; pointerStart < pointerEnd / 2; i++){
        if (arr[pointerStart] + arr[pointerEnd] === 0) {
            return [arr[pointerStart], arr[pointerEnd]]
        }
        return undefined;
    }
}

console.log(sumZero([-2,-1,0,1,3]))