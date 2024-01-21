const search = function (nums, target) {
	let start = 0;
	let end = nums.length - 1;

	while (start <= end) {
		mid = Math.floor((start + end) / 2);

		if (target === nums[mid]) return mid;
		else if (target < nums[mid]) end = mid - 1;
		else start = mid + 1;
	}

	return -1;
};
