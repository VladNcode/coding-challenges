const makeEqual = words => {
	const map = {};

	for (const word of words) {
		for (const letter of word) {
			map[letter] = (map[letter] || 0) + 1;
		}
	}

	for (const letter in map) {
		if (map[letter] % words.length !== 0) return false;
	}

	return true;
};

const makeEqualArr = words => {
	const arr = new Array(26).fill(0);

	for (const word of words) {
		for (const letter of word) {
			arr[letter.charCodeAt() - 97]++;
		}
	}

	for (const letter of arr) {
		if (letter % words.length !== 0) return false;
	}

	return true;
};
