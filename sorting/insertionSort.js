function insertion(arr) {
  var current;
  for (let i = 1; i < arr.length; i++) {
    current = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[i + 1] = current;
  }
  return arr;
}

console.log(insertion([2,1,9,76,4]))