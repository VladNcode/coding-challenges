const groupAnagrams = (strs, map = new Map()) => {
	if (!strs) return [];

	reorder(strs, map);

	return [...map.values()];
};

const reorder = (strs, map) => {
	for (const word of strs) {
		const hash = getHash(word);
		const values = map.get(hash) || [];

		values.push(word);
		map.set(hash, values);
	}
};

const getHash = str =>
	str
		.split('')
		.sort((a, b) => a.localeCompare(b))
		.join('');

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

const isAnagram = function (s, t) {
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

const groupAnagrams2 = strs => {
	const groups = [];

	while (strs.length) {
		const newStrs = [];
		const curr = strs.pop();
		const group = [curr];

		for (const str of strs) {
			if (isAnagram(curr, str)) group.push(str);
			else newStrs.push(str);
		}

		groups.push(group);
		strs = newStrs;
	}

	return groups;
};
