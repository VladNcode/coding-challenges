// Create a function that takes a string and separates it into a sequence of letters.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]

// The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.

// Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

// Examples:

// sepStr("Just Live Life Man")
// // => [['J','L','L','M'],
// // => ['u','i','i','a'],
// // => ['s','v','f','n'],
// // => ['t','e','e','']]);

// sepStr("The Mitochondria is the powerhouse of the cell")
// // => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// // => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// // => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// // => [ '', 'o', '', '', 'e', '', '', 'l' ],
// // => [ '', 'c', '', '', 'r', '', '', '' ],
// // => [ '', 'h', '', '', 'h', '', '', '' ],
// // => [ '', 'o', '', '', 'o', '', '', '' ],
// // => [ '', 'n', '', '', 'u', '', '', '' ],
// // => [ '', 'd', '', '', 's', '', '', '' ],
// // => [ '', 'r', '', '', 'e', '', '', '' ],
// // => [ '', 'i', '', '', '', '', '', '' ],
// // => [ '', 'a', '', '', '', '', '', '' ]]

function sepStr(str) {
	const strArr = str.split(' ');
	const maxLength = strArr.reduce(
		(prev, next) => (prev.length > next.length ? prev : next),
		'',
	).length;
	const sameLengthStrs = strArr.map(el => el.padEnd(maxLength));

	const result = [];

	sameLengthStrs.forEach(word => {
		word.split('').forEach((ltr, i) => {
			if (!result[i]) result.push([]);
			result[i].push(ltr === ' ' ? '' : ltr);
		});
	});

	return result;
}

function sepStr2(str) {
	const strArr = str.split(' ');
	const maxLength = strArr.reduce(
		(prev, next) => (prev.length > next.length ? prev : next),
		'',
	).length;
	const result = [];

	for (let i = 0; i < maxLength; i++) {
		result.push(strArr.map(word => word[i] || ''));
	}

	return result;
}

function sepStr3(str) {
	const strArr = str.split(' ');
	const max = strArr.reduce((acc, val) => (acc.length > val.length ? acc : val), '').length;
	let finalStr = strArr.map(el => el.padEnd(max)).join('');

	const result = [];

	for (let i = 0; finalStr[i]; i++) {
		if (i === max) {
			i = 0;
			finalStr = finalStr.slice(max);
		}

		if (!result[i]) result.push([]);
		result[i].push(finalStr[i] === ' ' ? '' : finalStr[i]);
	}

	return result;
}
