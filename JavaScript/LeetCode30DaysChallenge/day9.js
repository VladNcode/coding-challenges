function memoize(fn) {
	const cache = new Map();

	return function (...args) {
		if (!args.length) return undefined;

		let res = cache.get(args.toString());

		if (typeof res === 'undefined') {
			res = fn(...args);
			cache.set(args.toString(), res);
		}

		return res;
	};
}
