function countDown(num) {
  if (!num) {
    console.log("all done!");
    return;
  }
  console.log(num);
  countDown(num -1);
}

countDown(5);
