const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	return arr.length ? `Семья состоит из: ${arr.join(' ')} ` : 'Семья пуста';
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	for (let city of arr) {
		console.log(city.toLowerCase());
	}
}
