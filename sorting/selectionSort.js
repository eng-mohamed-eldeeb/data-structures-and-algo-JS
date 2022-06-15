function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smaller = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smaller] > arr[j]) smaller = j;
    }
    if (i !== smaller) {
      [arr[smaller], arr[i]] = [arr[i], arr[smaller]];
    }
  }
  return arr;
}

console.log(selectionSort([8, 2, 98, 2, 4, 1, 5]));
