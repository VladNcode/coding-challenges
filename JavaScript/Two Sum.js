// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = function (arr, sum) {
  const final = [];
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) final.push(i);

    set.add(sum - arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[final[0]] + arr[i] === sum) {
      final.push(i);
      return final;
    }
  }
};

// const findSmg = function (arr, sum) {
//   const final = [];
//   const set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) final.push(i);

//     set.add(sum - arr[i]);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[final[0]] + arr[i] === sum) {
//       final.push(i);
//       return final;
//     }
//   }
// };
