import { promises } from 'node:fs';

/*

AX = ROCK
BY = PAPER
CZ = SCISSORS


Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
If both players choose the same shape, the round instead ends in a draw.

*/

const draw = { A: 'X', B: 'Y', C: 'Z' };
const win = { C: 'X', B: 'Z', A: 'Y' };
const points = { X: 1, Y: 2, Z: 3 };

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	let total = 0;

	const dataArr = data.split('\n');

	dataArr.forEach(round => {
		const [opponent, me] = round.split(' ');

		total += points[me];
		if (draw[opponent] === me) total += 3;
		if (win[opponent] === me) total += 6;
	});

	console.log(total);
})();
