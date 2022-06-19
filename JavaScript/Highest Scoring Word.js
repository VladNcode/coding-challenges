// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const calcTotal = word => {
	let total = 0;
	word = word.toLowerCase();

	for (let i = 0; i < word.length; i++) {
		total += word[i].charCodeAt() - 96;
	}

	return total;
};

function high(str) {
	const arr = str.split(' ');
	let result = '';
	let score = 0;

	for (const word of arr) {
		const wordScore = calcTotal2(word);
		if (wordScore > score) {
			score = wordScore;
			result = word;
		}
	}

	return result;
}

///////////////////////////////////////////////////

const calc = word =>
	word
		.toLowerCase()
		.split('')
		.reduce((acc, ltr) => acc + ltr.charCodeAt() - 96, 0);

const high2 = str => str.split(' ').reduce((prev, next) => (calc(prev) > calc(next) ? prev : next));

console.log(high2('man i need a taxi up to ubud'));
