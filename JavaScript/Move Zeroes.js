// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// const moveZeroes = nums => {
//   let i = 0,
//     j = 0;
//   while (i < nums.length) {
//     if (nums[i] != 0) {
//       let temp = nums[i];
//       nums[i] = 0;
//       nums[j] = temp;
//       j++;
//     }
//     i++;
//   }
// };

const moveZeroes = nums => {
  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // nums[j] = nums[i];
      // nums[i] = 0;
      j++;
    }
  }

  return nums;
};

// const moveZeroes = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(arr.indexOf(arr[i]), 1);
//       arr.push(0);
//     }
//   }
// };

console.log(moveZeroes([0, 1, 0, 3, 12]));
