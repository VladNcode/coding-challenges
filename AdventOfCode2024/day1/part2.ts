const input = 'input.txt';
const file = await Bun.file(input).text();
const lines = file.split('\n');
const left: Set<string> = new Set();
const right: Map<string, number> = new Map();

lines.forEach(line => {
	const [l, r] = line.split('   ');

	left.add(l);
	const timesAppearedInRight = right.get(r);
	right.set(r, (timesAppearedInRight || 0) + 1);
});

let res = 0;

left.forEach(num => {
	const timesAppearedInRight = right.get(num);

	if (timesAppearedInRight) {
		res += +num * timesAppearedInRight;
	}
});

console.log(res);
