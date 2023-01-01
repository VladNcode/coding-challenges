import { promises } from 'node:fs';

const run = async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });
	let queue = data.split('').slice(0, 14);

	const hm = {};
	queue.forEach(value => {
		hm[value] = ++hm[value] || 1;
	});

	for (let i = 14; i < data.length + 1; i++) {
		let hasDuplicate = false;

		for (const key in hm) {
			if (hm[key] > 1) {
				hm[data[i - 14]] = --hm[data[i - 14]];
				hm[data[i]] = ++hm[data[i]] || 1;
				hasDuplicate = true;
				break;
			}
		}

		if (!hasDuplicate) return i;
	}
};

console.log(await run());
