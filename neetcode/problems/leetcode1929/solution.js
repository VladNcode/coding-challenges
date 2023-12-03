const getConcatenation = nums => {
	const newArr = Array.from({ length: nums.length * 2 }, _ => 0);

	for (let i = 0; i < nums.length; i++) {
		newArr[i] = nums[i];
		newArr[nums.length + i] = nums[i];
	}

	return newArr;
};
