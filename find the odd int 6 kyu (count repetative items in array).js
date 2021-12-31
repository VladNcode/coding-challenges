// function findOdd(A) {
//   let countObj = {};
//   A.forEach(el => (countObj[el] = ++countObj[el] || 1));
//   for (v in countObj) if (countObj[v] % 2 !== 0) return +v;
// }

function findOdd(A) {
  let countObj = {};
  A.forEach(num => (countObj[num] ? (countObj[num] += 1) : (countObj[num] = 1)));
  return +Object.keys(countObj).find(num => num % 2 !== 0);
}

console.log(findOdd([1, 1, 1, 5, 5]));
