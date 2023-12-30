const cached = () => {
	const cache = {};

	const climbStairs = n => {
		if (n <= 3) return n;

		if (!cache[n - 1]) cache[n - 1] = climbStairs(n - 1);
		if (!cache[n - 2]) cache[n - 2] = climbStairs(n - 2);

		return cache[n - 1] + cache[n - 2];
	};

	return climbStairs;
};

const climbStairsRec = cached();

const climbStairs = n => {
	if (n <= 3) return n;

	let a = 1;
	let b = 2;
	let c = 3;

	for (let i = 4; i <= n; i++) {
		a = b;
		b = c;
		c = a + b;
	}

	return c;
};
