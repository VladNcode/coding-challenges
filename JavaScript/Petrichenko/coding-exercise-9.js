function fib(num) {
	if (typeof num !== 'number' || num < 1 || !Number.isInteger(num)) return '';

	const arr = [];

	for (let i = 0; i < num; i++) {
		if (i < 2) arr.push(i);
		else arr.push(arr[i - 2] + arr[i - 1]);
	}

	return arr.join(' ');
}
