import { promises } from 'node:fs';

const run = async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	const dataArr = data.split('\n');

	const visited = [[0, 0]];

	const right = obj => {
		const { h, t, moves } = obj;
		for (let i = 0; i < moves; i++) {
			h[1] = ++h[1];
			if (i === 0) {
				continue;
			} else {
				if (h[1] - t[1] > 1) {
					t[0] = h[0];
					t[1] = h[1] - 1;
					visited.push([t[0], t[1]]);
				}
			}
		}
	};

	const left = obj => {
		const { h, t, moves } = obj;

		for (let i = 0; i < moves; i++) {
			h[1] = --h[1];
			if (i === 0) {
				continue;
			} else {
				if (t[1] - h[1] > 1 || h[1] - t[1] < -1) {
					t[0] = h[0];
					t[1] = h[1] + 1;
					visited.push([t[0], t[1]]);
				}
			}
		}

		return { h, t };
	};

	const up = obj => {
		const { h, t, moves } = obj;
		for (let i = 0; i < moves; i++) {
			h[0] = --h[0];

			if (i === 0) {
				continue;
			} else {
				if (t[0] - h[0] > 1 || h[0] - t[0] < -1) {
					t[1] = h[1];
					t[0] = h[0] + 1;
					visited.push([t[0], t[1]]);
				}
			}
		}
	};

	const down = obj => {
		const { h, t, moves } = obj;
		for (let i = 0; i < moves; i++) {
			h[0] = ++h[0];

			if (i === 0) {
				continue;
			} else {
				if (h[0] - t[0] > 1) {
					t[1] = h[1];
					t[0] = h[0] - 1;
					visited.push([t[0], t[1]]);
				}
			}
		}
	};

	let h = [0, 0];
	let t = [0, 0];

	const map = {
		L: left,
		R: right,
		U: up,
		D: down,
	};

	const buildMatrix = obj => {
		const { h, t, maxTop, maxRight } = obj;
		console.log({ h, t, maxTop, maxRight });
		const matrix = new Array(maxTop + 1).fill(undefined).map(el => new Array(maxRight + 1).fill(0));
		matrix[h[0]][h[1]] = 'H';
		matrix[t[0]][t[1]] = 'T';
		return matrix;
	};

	dataArr.forEach(line => {
		const [dir, moves] = line.split(' ');
		map[dir]({ h, t, moves });
		// console.table(buildMatrix({ maxTop: Math.max(h[0], t[0]), maxRight: Math.max(h[1], t[1]), t, h }));
	});

	console.log({ h, t });

	const newArr = [];

	visited.forEach(([oneComp, twoComp]) => {
		const dupl = newArr.find(([one, two]) => one === oneComp && two === twoComp);
		if (!dupl) newArr.push([oneComp, twoComp]);
	});

	// console.log(visited);

	console.log(newArr.length);
};

run();
