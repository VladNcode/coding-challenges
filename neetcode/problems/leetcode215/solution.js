const findKthLargest = (nums, k) => {
	k = nums.length - k;

	const quickSelect = (start, end) => {
		const pivot = nums[end];
		let left = start;

		for (let i = start; i < end; i++) {
			if (nums[i] < pivot) {
				const temp = nums[left];
				nums[left] = nums[i];
				nums[i] = temp;
				left++;
			}
		}

		nums[end] = nums[left];
		nums[left] = pivot;

		if (left > k) return quickSelect(start, left - 1);
		else if (left < k) return quickSelect(left + 1, end);
		else return nums[left];
	};

	return quickSelect(0, nums.length - 1);
};

const findKthLargest2 = (nums, k) => {
	let min = Infinity;
	let max = -Infinity;

	for (const num of nums) {
		min = Math.min(min, num);
		max = Math.max(max, num);
	}

	const count = new Array(max - min + 1).fill(0);

	for (const num of nums) {
		count[num - min]++;
	}

	let remain = k;

	for (let i = count.length - 1; i >= 0; i--) {
		remain -= count[i];
		if (remain <= 0) return i + min;
	}

	return -1;
};

console.log(findKthLargest2([2, 4, 9], 2));
