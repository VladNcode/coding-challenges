const filter = function (arr, fn) {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (fn(item, i)) result.push(item);
	}

	return result;
};
