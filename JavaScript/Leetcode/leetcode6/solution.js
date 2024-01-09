const convert = (s, numRows) => {
	if (numRows < 2 || numRows >= s.length) return s;

	let word = '';

	let increment = (numRows - 1) * 2;

	for (let i = 0; i < numRows; i++) {
		for (let j = i; j < s.length; j += increment) {
			word += s[j];

			if (i !== 0 && i !== numRows - 1 && s[j + increment - 2 * i]) {
				word += s[j + increment - 2 * i];
			}
		}
	}

	return word;
};
