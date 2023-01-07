// const productExceptSelf = nums => {
// 	const zeroes = nums.filter(num => !num);

// 	if (zeroes.length > 1) {
// 		return new Array(nums.length).fill(0);
// 	}

// 	const total = nums.reduce((acc, el) => {
// 		return el === 0 ? acc : acc * el;
// 	}, 1);

// 	console.log(total);

// 	return nums.map(num => {
// 		if (zeroes.length) {
// 			return !num ? total : 0;
// 		}

// 		return total / num;
// 	});
// };

const productExceptSelf = nums => {
	const result = new Array(nums.length).fill(1);

	let prefix = 1;
	let postfix = 1;

	for (let i = 0; i < nums.length; i++) {
		result[i] = prefix;
		prefix *= nums[i];
	}

	for (let i = nums.length - 2; i >= 0; i--) {
		postfix *= nums[i + 1];
		result[i] *= postfix;
	}

	return result;
};

const nums = [1, 2, 3, 4];

console.log(productExceptSelf(nums));

// https://www.autodraw.com/share/B0AAAZW54TL7
