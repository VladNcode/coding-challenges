import { promises } from 'node:fs';

(async () => {
	const data = await promises.readFile('./data.txt', { encoding: 'utf8' });

	let total = 0;

	const dataArr = data.split('\n');

	let elfCount = 1;

	dataArr.forEach((elf, index) => {
		elfCount = index % 3 === 0 ? 1 : elfCount + 1;

		if (elfCount === 3) {
			const firstElfBP = dataArr[index - 2];
			const secondElfBP = dataArr[index - 1];
			const thirdElfBP = dataArr[index];

			let dupl = '';

			for (const ltr of thirdElfBP) {
				if (firstElfBP.includes(ltr) && secondElfBP.includes(ltr)) {
					dupl = ltr;
					break;
				}
			}

			const isUpper = dupl.toUpperCase() === dupl;
			total += dupl.charCodeAt(0) - (isUpper ? 38 : 96);
		}
	});

	console.log(total);
})();
