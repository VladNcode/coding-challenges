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
}; // O(n)

const findFirstReNum3 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return arr[i];
    }
  }
  return undefined;
}; // O(n^2)

const bonus = function (arr) {
  let x = Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && j < x) x = j;
    }
  }

  return x === Infinity ? undefined : arr[x];
};

const bonus2 = function (arr) {
  let x = Infinity;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] && i < x) x = i;
    obj[arr[i]] = true;
  }

  return x === Infinity ? undefined : arr[x];
};

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 4, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];
const arr4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
const arr5 = [2, 4, 3, 7, 8, 8, 1, 2, 4];
const arr6 = [2, 4, 3, 2, 8, 8, 1, 2, 4];
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(bonus2(arr7));
