const removeDuplicates = nums => {
	let l = 1;

	for (let r = l; r < nums.length; r++) {
		if (nums[r] !== nums[r - 1]) {
			nums[l] = nums[r];
			l++;
		}
	}

	return l;
};
