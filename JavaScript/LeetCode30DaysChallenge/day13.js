const promisePool = async (functions, n) => {
	const evalNext = () => functions[n++]?.().then(evalNext);
	return Promise.all(functions.slice(0, n).map(fn => fn().then(evalNext)));
};

const promisePool2 = async (functions, n) => {
	const evalNext = async () => {
		const fn = functions.shift();
		if (!fn) return;
		await fn();
		await evalNext();
	};

	const evalInitFunctions = new Array(n).fill().map(evalNext);
	await Promise.all(evalInitFunctions);
};
