import { promises } from 'node:fs';

const createTree = (obj, path, value) => {
	if (typeof path === 'string') path = path.split('/');

	let current = obj;

	while (path.length > 1) {
		const [head, ...tail] = path;
		path = tail;
		if (current[head] === undefined) current[head] = {};
		current = current[head];
	}

	current[path] = value;

	return obj;
};

const run = async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });
	const dataArr = data.split('\n');

	const tree = {};
	let globalSize = 0;
	let globalPath = '';

	dataArr.forEach(line => {
		if (line.startsWith('$ cd')) {
			const path = line.split('$ cd ')[1];

			if (path === '..') globalPath = globalPath.split('/').slice(0, -1).join('/');
			else globalPath = path === '/' ? 'root' : (globalPath += `/${path}`);
		}

		if (!line.startsWith('$')) {
			const value = line.startsWith('dir') ? {} : line.split(' ')[0];
			const path = line.startsWith('dir') ? line.split('dir ')[1] : line.split(' ')[1];
			createTree(tree, `${globalPath}/${path}`, value);
		}
	});

	const count = obj => {
		let total = 0;

		for (const key in obj) {
			if (typeof obj[key] === 'string') total += +obj[key];
			else total += count(obj[key]);
		}

		globalSize += total <= 100000 ? total : 0;
		return total;
	};

	count(tree);

	return globalSize;
};

console.log(await run());
