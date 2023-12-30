const fibRec = n => {
	if (n <= 1) return n;
	return fibRec(n - 1) + fibRec(n - 2);
};

const fib = n => {
	if (n <= 1) return n;

	let [a, b, c] = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		a = b;
		b = c;
		c = a + b;
	}

	return c;
};
