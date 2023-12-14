const complements = {
	')': '(',
	'}': '{',
	']': '[',
};

const isValid = function (s) {
	if (s.length % 2 !== 0) return false;

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const complement = complements[s[i]];

		if (!complement) stack.push(s[i]);
		else if (complement === stack.at(-1)) stack.pop();
		else return false;
	}

	return !!!stack.length;
};
