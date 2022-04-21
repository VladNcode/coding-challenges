// Input: nums = [1,2,3,1]
// Output: true
// Input: nums = [1,2,3,4]
// Output: false

const containsDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

const containsDuplicate2 = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) return true;
    obj[nums[i]] = i;
  }

  return false;
};

const containsDuplicate3 = function (nums) {
  let obj = {};

  for (let num of nums) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }
  return false;
};

const containsDuplicate4 = nums => [...new Set(nums)].length !== nums.length;
