// Write a function called findUnique which returns the only unique number from an array.

// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
// Example

// Input:

// [ 1, 8, 4, 4, 6, 1, 8 ]

// Expected output:

// 6

function findUnique(numbers) {
	const res = {};

	numbers.forEach(num => {
		res[num] = ++res[num] || 1;
		if (res[num] === 2) delete res[num];
	});

	return +Object.keys(res);
}

// With sets
function findUnique2(numbers) {
	const res = new Set();

	numbers.forEach(num => {
		res.has(num) ? res.delete(num) : res.add(num);
	});

	return res.values().next().value;
}

console.log(findUnique2([1, 8, 4, 4, 6, 1, 8]));
