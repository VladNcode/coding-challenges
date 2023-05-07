const threeSum = function (nums) {
	const result = [];

	// Sort input array to be able to use two pointers and skip duplicates
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		// We don't want duplicates
		if (nums[i] === nums[i - 1]) continue;

		// Two pointers to find the other two numbers in the array that sum up to 0
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			// If the sum is less than 0, we move the left pointer to the right.
			if (sum < 0) {
				left++;
				continue;
				// If the sum is greater than 0, we move the right pointer to the left.
			} else if (sum > 0) {
				right--;
				continue;
			}

			// If the sum is 0, we push the three numbers to the result array
			result.push([nums[i], nums[left], nums[right]]);

			// Move the left and right pointers to the next numbers and skip duplicates
			left++;
			right--;
			while (nums[left] === nums[left - 1] && left < right) left++;
			while (nums[right] === nums[right + 1] && left < right) right--;
		}
	}

	return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
