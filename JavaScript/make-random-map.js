const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const makeMap = (arr, arr2) => {
	while (arr.length > arr2.length) {
		arr.pop();
	}

	while (arr2.length > arr.length) {
		arr2.pop();
	}

	const res = {};
	let total = 0;
	const repeatedArr1 = [];
	const repeatedArr2 = [];

	let random1 = generateRandomNumber(0, arr.length);
	let random2 = generateRandomNumber(0, arr2.length);

	while (total < arr.length + arr2.length) {
		while (repeatedArr1.indexOf(random1) !== -1) {
			random1 = generateRandomNumber(0, arr.length);
		}
		while (repeatedArr2.indexOf(random2) !== -1) {
			random2 = generateRandomNumber(0, arr2.length);
		}

		repeatedArr1.push(random1);
		repeatedArr2.push(random2);
		res[arr[random1]] = arr2[random2];
		total += 2;
	}

	return res;
};

const people = ['Maks', 'Wika', 'Yana', 'Wania', 'Denis', 'Kasper', 'Marta', 'Yehor', 'Karolina', 'Wlados'];
const place = ['lidl', 'biedra', 'kauf', 'marshe', 'eklerk', 'aldi', 'Lewiatan', 'Carefour', 'Zabka', 'Alkohole24'];

console.log(makeMap(people, place));
