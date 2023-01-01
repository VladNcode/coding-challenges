import { promises } from 'node:fs';

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	let total = 0;

	const dataArr = data.split('\n');

	dataArr.forEach(round => {
		const half = round.length / 2;
		const first = round.slice(0, half);
		const second = round.slice(-half);

		let dupl = '';

		for (const ltr of first) {
			if (second.includes(ltr)) {
				dupl = ltr;
				break;
			}
		}

		const isUpper = dupl.toUpperCase() === dupl;
		total += dupl.charCodeAt(0) - (isUpper ? 38 : 96);
	});

	console.log(total);
})();
