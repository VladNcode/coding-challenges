import { promises } from 'node:fs';

/*

A = ROCK
B = PAPER
C = SCISSORS

Z means you need to win
X means you need to lose,
Y means you need to end the round in a draw,


Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
If both players choose the same shape, the round instead ends in a draw.

*/

const rock = { Z: 'B', X: 'C', Y: 'A' };
const paper = { Z: 'C', X: 'A', Y: 'B' };
const scissors = { Z: 'A', X: 'B', Y: 'C' };
const points = { A: 1, B: 2, C: 3 };
const actions = { Z: 6, X: 0, Y: 3 };

const map = { A: rock, B: paper, C: scissors };

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	let total = 0;

	const dataArr = data.split('\n');

	dataArr.forEach(round => {
		const [opponent, action] = round.split(' ');

		total += actions[action];
		total += points[map[opponent][action]];
	});

	console.log(total);
})();
