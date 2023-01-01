import { promises } from 'node:fs';

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	const dataArr = data.split('\n');

	let max = 0;
	let curr = 0;

	dataArr.forEach(num => {
		if (!num) {
			max = Math.max(max, curr);
			curr = 0;
		} else {
			curr += Number(num);
		}
	});

	console.log(max);
})();
