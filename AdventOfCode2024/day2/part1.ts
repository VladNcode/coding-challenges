const input = 'input.txt';
const file = await Bun.file(input).text();
const lines = file.split('\n');

// Track count of safe levels
let safe = 0;

const checkIfLevelIsUnsafe = (level: number[], asc: boolean) => {
	return level.some((curr, i) => {
		if (i === level.length - 1) return false;

		const next = level[i + 1];

		// Check for equal adjacent heights
		if (curr === next) return true;

		// Check for invalid height differences based on direction
		if (asc) {
			return next < curr || next - 4 >= curr;
		} else {
			return curr < next || curr - 4 >= next;
		}
	});
};

// Process each line representing a level
lines.forEach(line => {
	const level = line.split(' ').map(Number);

	// Skip if start and end heights are the same
	if (level[0] === level[level.length - 1]) {
		return;
	}

	// Determine if level should ascend or descend
	const asc = level[0] < level[level.length - 1];

	// Check each adjacent pair of heights
	const isUnsafe = checkIfLevelIsUnsafe(level, asc);

	if (!isUnsafe) {
		safe++;
	}
});

console.log(safe);
