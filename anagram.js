function validAnagram(str1, str2) {
  //declar an opject to store from str1 to br yet removed with str2
  const all = {};
  if (str1.length != str1.length) {
    return false;
  }
  for (let i of str1) {
    all[i] ? all[i] += 1 : all[i] = 1
  };
  for (let i of str2) {
    if (all[i] === 0 || !all[i]) {
      return false
    } else {
        all[i]--;
    }
  }
  return true;
}

console.log(validAnagram('amanaplanacanalpanam', 'car'))
