const isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const map = {};

	for (const letter of s) {
		map[letter] = ++map[letter] || 1;
	}

	for (const letter of t) {
		if (!map[letter]) return false;
		map[letter]--;
	}

	return true;
};

const isAnagram2 = function (s, t) {
	if (s.length !== t.length) return false;

	const map = new Map();

	for (const letter of s) {
		map.set(letter, (map.get(letter) || 0) + 1);
	}

	for (const letter of t) {
		const count = map.get(letter);
		if (!count) return false;

		map.set(letter, count - 1);
	}

	return true;
};

console.log(isAnagram2('anagram', 'nagaram'));
console.log(isAnagram2('rat', 'car'));
