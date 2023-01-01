// 30373
// 25512
// 65332
// 33549
// 35390

import { promises } from 'node:fs';

const run = async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	const matrix = data.split('\n').map(row => row.split('').map(Number));

	// const matrix = [
	// 	[3, 0, 3, 7, 3],
	// 	[2, 5, 5, 1, 2],
	// 	[6, 5, 3, 3, 2],
	// 	[3, 3, 5, 4, 9],
	// 	[3, 5, 3, 9, 0],
	// ];

	let count = 0;

	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[i].length - 1; j++) {
			let currTree = matrix[i][j];

			const coversLeft = [];
			const coversRight = [];
			const coversTop = [];
			const coversBottom = [];

			for (let x = j - 1; x >= 0; x--) {
				coversLeft.push(matrix[i][x]);
			}

			for (let x = j + 1; x < matrix.length; x++) {
				coversRight.push(matrix[i][x]);
			}

			for (let x = i - 1; x >= 0; x--) {
				coversTop.push(matrix[x][j]);
			}

			for (let x = i + 1; x < matrix.length; x++) {
				coversBottom.push(matrix[x][j]);
			}

			const left = coversLeft.every(tree => tree < currTree);
			const right = coversRight.every(tree => tree < currTree);
			const top = coversTop.every(tree => tree < currTree);
			const bottom = coversBottom.every(tree => tree < currTree);

			if (!left && !right && !top && !bottom) count++;
		}
	}

	// console.log(matrix);
	console.log(matrix.length * matrix.length - count);
};

run();
