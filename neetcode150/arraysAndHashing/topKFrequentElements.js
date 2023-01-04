const topKFrequent = (nums, k) => {
	const map = {};

	nums.forEach(num => {
		map[num] = ++map[num] || 1;
	});

	return Object.entries(map)
		.sort(([a, b], [a2, b2]) => b2 - b)
		.slice(0, k)
		.map(arr => +arr[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
