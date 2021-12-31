// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotate = function (nums, k) {
  console.log(k % nums.length);
  nums.unshift(...nums.splice(nums.length - (k % nums.length)));
};

// const rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };

// const rotate = function (arr, k) {
//   let deletedArray = arr.splice(arr.length - k);

//   for (let i = 0; i < deletedArray.length; i++) {
//     arr.splice(i, 0, deletedArray[i]);
//   }

//   return arr;
// };
