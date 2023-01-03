const twoSum = (nums, target) => {
	const map = new Map();
	let index = 0;

	for (const num of nums) {
		const compliment = target - num;
		const mapHasComp = map.get(compliment);

		if (mapHasComp !== undefined) {
			return [mapHasComp, index];
		}

		map.set(num, index);
		index++;
	}
};

console.log(twoSum([2, 7, 11, 15], 9));
