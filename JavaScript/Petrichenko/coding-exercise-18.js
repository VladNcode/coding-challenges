// function isPangram(string) {
// 	const alpha = 'abcdefghijklmnopqrstuvwxyz';
// 	const bet = {};

// 	const str = string.toLowerCase().replace(/ /g, '');

// 	for (const l of alpha) {
// 		bet[l] = false;
// 	}

// 	for (const l of str) {
// 		bet[l] = true;
// 	}

// 	for (const l in bet) {
// 		if (bet[l] === false) return false;
// 	}

// 	return true;
// }

function isPangram(string) {
	let alpha = 'abcdefghijklmnopqrstuvwxyz';

	for (let i = 0; i < string.length; i++) {
		alpha = alpha.replace(`${string[i].toLowerCase()}`, '');
	}

	return !!!alpha.length;
}
