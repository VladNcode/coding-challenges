const containsDuplicate = nums => {
	const hm = {};

	for (const num of nums) {
		if (hm[num]) return true;

		hm[num] = true;
	}

	return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
