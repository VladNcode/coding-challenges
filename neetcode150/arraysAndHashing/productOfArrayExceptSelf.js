// TODO: Should be done without division

const productExceptSelf = nums => {
	const zeroes = nums.filter(num => !num);

	if (zeroes.length > 1) {
		return new Array(nums.length).fill(0);
	}

	const total = nums.reduce((acc, el) => {
		return el === 0 ? acc : acc * el;
	}, 1);

	console.log(total);

	return nums.map(num => {
		if (zeroes.length) {
			return !num ? total : 0;
		}

		return total / num;
	});
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));
