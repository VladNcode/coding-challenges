const students = [
	'Peter',
	'Andrew',
	'Ann',
	'Mark',
	'Josh',
	'Sandra',
	'Cris',
	'Bernard',
	'Takesi',
	'Sam',
];

function sortStudentsByGroups(arr) {
	const sortedArr = arr.sort();
	const result = [];

	for (let i = 0, j = 0; i < 4; i++, j = j + 3) {
		result.push(
			i === 3
				? `Оставшиеся студенты: ${sortedArr.slice(9).join(', ') || '-'}`
				: sortedArr.slice(j, j + 3),
		);
	}

	return result;
}
