const maxArea = nums => {
	let max = 0;
	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		// height is the lowest point since the water will spit out
		const height = Math.min(nums[left], nums[right]);
		// width is the distance between the two walls
		const width = right - left;
		// area is how  much water will be contained
		const area = width * height;

		// update max area if needed
		max = Math.max(area, max);

		// move the pointer of the smaller wall to the next wall
		// if walls are the same either one can be moved (but we improve it futher by checking the walls next to left and right)
		nums[left] < nums[right] ? left++ : right--;
	}

	return max;
};
