// https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/javascript

function findUniq(arr) {
	const lettersScores = {};

	arr.forEach((str, i) => {
		for (const letter of str.toLowerCase()) {
			if (lettersScores[letter]) lettersScores[letter][0]++;
			else lettersScores[letter] = [1, i];
		}
	});

	let lowestScore = Infinity;
	let idx = -1;

	for (const letter in lettersScores) {
		const [count, index] = lettersScores[letter];

		if (count < lowestScore) {
			lowestScore = count;
			idx = index;
		}
	}

	return arr[idx];
}
