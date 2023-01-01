import { promises } from 'node:fs';

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	const dataArr = data.split('\n');

	let curr = 0;

	const results = [];

	dataArr.forEach(num => {
		if (!num) {
			results.push(curr);
			curr = 0;
		} else {
			curr += Number(num);
		}
	});

	console.log(
		results
			.sort((a, b) => a - b)
			.slice(-3)
			.reduce((acc, el) => acc + el, 0),
	);
})();
