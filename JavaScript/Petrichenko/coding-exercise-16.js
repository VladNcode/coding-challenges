function factorial(n) {
	if (typeof n === 'string' || !Number.isInteger(n)) return 'Invalid data!';
	if (n < 1) return 1;

	return n === 1 ? n : n * factorial(--n);
}
