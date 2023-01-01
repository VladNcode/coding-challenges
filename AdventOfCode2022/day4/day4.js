import { promises } from 'node:fs';

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	const dataArr = data.split('\r\n');

	let count = 0;

	dataArr.forEach(line => {
		const [firstPair, secondPair] = line.split(',');
		const [firstFrom, firstTo] = firstPair.split('-');
		const [secondFrom, secondTo] = secondPair.split('-');

		if (+firstFrom >= +secondFrom && +firstTo <= +secondTo) {
			count++;
			return;
		}

		if (+firstFrom <= +secondFrom && +firstTo >= +secondTo) count++;
	});

	console.log(count);
})();
