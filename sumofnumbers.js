function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr, n) {
  if (n < 0) {
    return 0;
  }
  return sumRecursion(arr, n - 1) + arr[n];
}

function sumTheSimpleWay(arr) {
  return _.reduce(arr, (memo, num) => memo + num);
}

const testArr = [1, 2, 3, 4, 5];
console.log(sumFor(testArr));
console.log(sumWhile(testArr));
console.log(sumRecursion((testArr), testArr.length - 1));
console.log(sumTheSimpleWay(testArr));
