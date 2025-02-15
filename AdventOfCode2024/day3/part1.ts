const input = 'input.txt';
const file = await Bun.file(input).text();
const res = file.match(/mul\([0-9]{1,},[0-9]{1,}\)/g);

const mul = (x: number, y: number): number => x * y;

if (res) {
	let fin = 0;

	for (const r of res) {
		fin += eval(r);
	}

	console.log(fin);
}
