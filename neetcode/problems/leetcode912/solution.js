const sortArray = nums => {
	return mergeSort(nums, 0, nums.length - 1);
};

const mergeSort = (nums, start, end) => {
	if (start === end) return nums;

	const mid = Math.floor((start + end) / 2);

	mergeSort(nums, start, mid);
	mergeSort(nums, mid + 1, end);

	return merge(nums, start, mid, end);
};

const merge = (nums, start, mid, end) => {
	const left = nums.slice(start, mid + 1);
	const right = nums.slice(mid + 1, end + 1);

	let li = 0;
	let ri = 0;
	let i = start;

	while (li < left.length && ri < right.length) {
		if (left[li] <= right[ri]) {
			nums[i] = left[li];
			li++;
		} else {
			nums[i] = right[ri];
			ri++;
		}

		i++;
	}

	while (li < left.length) {
		nums[i] = left[li];
		li++;
		i++;
	}

	while (ri < right.length) {
		nums[i] = right[ri];
		ri++;
		i++;
	}

	return nums;
};

function findUniq(arr) {
	const lettersScores = {};

	arr.forEach((str, i) => {
		for (const letter of str.toLowerCase()) {
			if (lettersScores[letter]) lettersScores[letter][0]++;
			else lettersScores[letter] = [1, i];
		}
	});

	let lowestScore = Infinity;
	let idx = -1;

	for (const letter in lettersScores) {
		const [count, index] = lettersScores[letter];

		if (count < lowestScore) {
			lowestScore = count;
			idx = index;
		}
	}

	return arr[idx];
}

console.log(findUniq(['foobar', 'barfo', 'fobara', '   ', 'fobra', 'oooofrab']));
