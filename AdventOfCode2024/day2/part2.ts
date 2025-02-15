const input = 'input.txt';
const file = await Bun.file(input).text();
const lines = file.split('\n');

let safe = 0;

const isValidTransaction = (curr: number, next: number, asc: boolean): boolean => {
	if (curr === next) return false;
	if (asc && (next < curr || next - 4 >= curr)) return false;
	if (!asc && (curr < next || curr - 4 >= next)) return false;

	return true;
};

const isSafe = (sequence: number[], asc: boolean): boolean => {
	for (let i = 0; i < sequence.length - 1; i++) {
		if (!isValidTransaction(sequence[i], sequence[i + 1], asc)) return false;
	}

	return true;
};

const checkIfLevelIsSafe = (level: number[], asc: boolean): boolean => {
	if (isSafe(level, asc)) return true;

	for (let i = 0; i < level.length; i++) {
		if (isSafe([...level.slice(0, i), ...level.slice(i + 1)], asc)) return true;
	}

	return false;
};

// Process each line representing a level
lines.forEach(line => {
	const level = line.split(' ').map(Number);

	// Skip if start and end heights are the same
	if (level[0] === level[level.length - 1]) {
		return;
	}

	const asc = level[0] < level[level.length - 1];

	safe += +checkIfLevelIsSafe(level, asc);
});

console.log(safe);
