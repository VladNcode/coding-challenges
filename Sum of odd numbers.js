// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  const triangle = [];
  let num = 1;
  let arr = [];

  triangle.push([num]);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      num += 2;
      arr.push(num);
    }
    triangle.push(arr);
    j = 0;
    arr = [];
  }

  return triangle[n - 1].reduce((acc, num) => acc + num, 0);
}

console.log(rowSumOddNumbers(42));

// const rowSumOddNumbers=n=>n**3;
