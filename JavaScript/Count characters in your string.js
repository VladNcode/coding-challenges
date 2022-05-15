// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
	const count = {};

	for (const letter of string) {
		count[letter] = ++count[letter] || 1;
	}

	return count;
}

// const count = s =>
//  [...s].reduce((acc, el) => {
//    acc[el] = ++acc[el] || 1;
//    return acc;
//  }, {});
