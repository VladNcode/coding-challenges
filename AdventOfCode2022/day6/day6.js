import { promises } from 'node:fs';

const run = async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	let queue = data.split('').slice(0, 4);

	for (let i = 4; i < data.length; i++) {
		const set = new Set(queue);

		if (set.size === 4) {
			return i;
		} else {
			queue.shift();
			queue.push(data[i]);
		}
	}
};

console.log(await run());
