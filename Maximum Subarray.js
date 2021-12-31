// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = function (nums) {
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = Math.max(nums[i], nums[i] + temp);
    max = temp > max ? temp : max;
    console.log(max);
  }
  return max;
};
