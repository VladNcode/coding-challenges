const isValid = function (s) {
	if (s.length % 2 !== 0) return false;

	const map = {
		'}': '{',
		']': '[',
		')': '(',
	};

	const right = Object.values(map);

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		const curr = s[i];

		if (right.includes(curr)) stack.push(curr);
		else {
			if (map[curr] !== stack.pop()) return false;
		}
	}

	return !stack.length;
};

const input = '(){}[]';
const input2 = '{[]}()';

console.log(isValid(input));
console.log(isValid(input2));
