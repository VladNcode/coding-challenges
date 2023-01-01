import { promises } from 'node:fs';

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });
	const dataArr = data.split('\r\n\r\n');
	const matrixData = dataArr[0].split('\r\n');
	const moveData = dataArr[1].split('\r\n');
	const length = matrixData.at(-1);
	const dataForMatrix = matrixData.slice(0, -1);
	const mtrx = new Array(length).fill(undefined);

	// [W] [V]     [P]
	// [B] [T]     [C] [B]     [G]
	// [G] [S]     [V] [H] [N] [T]
	// [Z] [B] [W] [J] [D] [M] [S]
	// [R] [C] [N] [N] [F] [W] [C]     [W]
	// [D] [F] [S] [M] [L] [T] [L] [Z] [Z]
	// [C] [W] [B] [G] [S] [V] [F] [D] [N]
	// [V] [G] [C] [Q] [T] [J] [P] [B] [M]
	//  1   2   3   4   5   6   7   8   9

	dataForMatrix.forEach(line => {
		let count = 1;
		let cell = 0;

		for (let i = 0; i < line.length; i++) {
			if (line[i] === ' ') count++;
			if (line[i] === ' ' && count % 5 === 0) cell++;
			if (line[i] === '[') {
				if (Array.isArray(mtrx[cell])) {
					mtrx[cell].push(line[i + 1]);
				} else {
					mtrx[cell] = [line[i + 1]];
				}

				cell++;
				count = 1;
			}
		}
	});

	moveData.forEach(line => {
		const [move, from, to] = line
			.split(/[a-z]+ /)
			.slice(1)
			.map(Number);

		for (let i = 0; i < move; i++) {
			mtrx[to - 1].unshift(mtrx[from - 1].shift());
		}
	});

	const res = mtrx.reduce((acc, column) => (acc += column[0]), '');

	console.log(res);
})();
