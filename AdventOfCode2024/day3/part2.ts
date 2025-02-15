const input = 'input.txt';
const file = await Bun.file(input).text();
const res = file.match(/mul\([0-9]{1,},[0-9]{1,}\)|don't\(\)|do\(\)/g);

const mul = (x: number, y: number): number => x * y;

if (res) {
	let fin = 0;
	let enabled = true;

	for (const r of res) {
		if (r === 'do()') {
			enabled = true;
		} else if (r === "don't()") {
			enabled = false;
		} else if (enabled) {
			fin += eval(r);
		}
	}

	console.log(fin);
}
