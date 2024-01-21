const searchMatrix = function (matrix, target) {
	const arrCount = matrix.length;
	const arrLength = matrix[0].length;
	const length = arrLength * arrCount;

	let start = 0;
	let end = length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		let currArray = Math.floor(mid / arrLength);

		const pos = mid < arrLength ? mid : mid % arrLength;
		const curr = matrix[currArray][pos];

		if (curr === target) return true;
		else if (curr > target) end = mid - 1;
		else start = mid + 1;
	}

	return false;
};

const binarySearch = function (nums, target) {
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

const searchMatrix2 = function (matrix, target) {
	let closest = 0;

	matrix.forEach(([el], i) => {
		if (el <= target) closest = i;
	});

	const res = binarySearch(matrix[closest], target);

	return res !== -1;
};

const searchMatrix3 = function (matrix, target) {
	const rows = matrix.length;

	let top = 0;
	let bottom = rows - 1;

	while (top <= bottom) {
		const row = Math.floor((top + bottom) / 2);
		if (target > matrix[row].at(-1)) top = row + 1;
		else if (target < matrix[row][0]) bottom = row - 1;
		else break;
	}

	if (top > bottom) {
		return false;
	}

	const res = binarySearch(matrix[Math.floor((top + bottom) / 2)], target);

	return res !== -1;
};
