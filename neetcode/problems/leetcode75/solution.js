const sortColors = nums => {
	const bucket = [0, 0, 0];

	for (const num of nums) {
		bucket[num]++;
	}

	let idx = 0;

	for (let i = 0; i < bucket.length; i++) {
		for (let j = 0; j < bucket[i]; j++) {
			nums[idx] = i;
			idx++;
		}
	}

	return nums;
};
