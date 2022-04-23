function deepCount(a) {
	if (a.length === 0) return 0;
	return Array.isArray(a[0]) ? 1 + deepCount([...a[0], ...a.slice(1)]) : 1 + deepCount(a.slice(1));
}

function deepCount2(a) {
	let counter = 0;

	while (a.length) {
		Array.isArray(a[a.length - 1]) ? a.push(...a.pop()) : a.pop();
		counter++;
	}

	return counter;
}
