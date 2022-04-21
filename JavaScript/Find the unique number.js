/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  let set = new Set(arr);
  if (arr[0] === arr[1] || arr[0] === arr[2]) set.delete(arr[0]);
  return set.values().next().value;
}

function checkExam(arr1, arr2) {
  let sum = 0;

  arr2.forEach((answer, i) => {
    sum = arr1[i] === answer ? sum + 4 : answer === '' ? sum : sum--;
  });

  return sum < 0 ? 0 : sum;
}
