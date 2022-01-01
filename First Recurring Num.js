const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 4, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];

const findFirstReNum = function (arr) {
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }
    set.add(arr[i]);
  }

  return undefined;
};

const findFirstReNum2 = function (arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return arr[i];
    obj[arr[i]] = true;
  }

  return undefined;
};

const findFirstReNum3 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined;
};

// console.log(findFirstReNum(arr1));
// console.log(findFirstReNum(arr2));
// console.log(findFirstReNum(arr3));

console.log(findFirstReNum2(arr1));
// console.log(findFirstReNum2(arr2));
// console.log(findFirstReNum2(arr3));
