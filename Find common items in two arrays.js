const arr1 = ['a', 'b', 'c', 'e'];
const arr2 = ['d', 'e', 'f', 'j'];

const findCommonItems = (arr1, arr2) => {
  const obj = {};
  arr1.forEach(el => (obj[el] = true));
  return arr2.find(el => obj[el] === true) ? true : false;
};

const findCommonItems2 = (arr1, arr2) => {
  const obj = {};
  arr1.forEach(el => (obj[el] = true));
  return arr2.some(el => obj[el] === true);
};

const findCommonItems3 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
};
