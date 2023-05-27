const throttle = function (fn, t) {
	let shouldCall = true;
	let lastArgs = null;

	const callAndReset = () => {
		fn(...lastArgs);
		shouldCall = false;
		lastArgs = null;
	};

	const execute = () => {
		if (shouldCall && lastArgs) {
			callAndReset();

			setTimeout(() => {
				shouldCall = true;
				execute();
			}, t);
		}
	};

	return (...args) => {
		lastArgs = args;
		execute();
	};
};

const throttle2 = (fn, t) => {
	let timeout = null;
	let nextExecutionTime = 0;

	return (...args) => {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			fn(...args);
			nextExecutionTime = Date.now() + t;
		}, nextExecutionTime - Date.now());
	};
};
