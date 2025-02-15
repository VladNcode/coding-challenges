const input = 'input.txt';
const file = await Bun.file(input).text();
const lines = file.split('\n');
const left: string[] = [];
const right: string[] = [];

lines.forEach(line => {
	const [l, r] = line.split('   ');

	left.push(l);
	right.push(r);
});

left.sort((a, b) => +a - +b);
right.sort((a, b) => +a - +b);

let res = 0;

for (let i = 0; i < left.length; i++) {
	const leftNum = +left[i];
	const rightNum = +right[i];

	if (typeof leftNum === 'undefined' || typeof rightNum === 'undefined') {
		throw new Error('Number not found!');
	}

	res += leftNum >= rightNum ? leftNum - rightNum : rightNum - leftNum;
}

console.log(res);
