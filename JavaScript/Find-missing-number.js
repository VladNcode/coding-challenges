const arr = [8, 3, 4, 6, 1, 5, 2, 9, 0, 10];

function findMissing(arr) {
	const range = arr.length;
	const total = (range * (range + 1)) / 2;
	let sum = 0;

	arr.forEach(num => {
		sum += num;
	});

	return total - sum;
}

console.log(findMissing(arr));
