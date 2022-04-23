const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5,
		},
		{
			width: 15,
			length: 7,
		},
		{
			width: 20,
			length: 5,
		},
		{
			width: 8,
			length: 10,
		},
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000,
};

function isBudgetEnough({ shops, height, moneyPer1m3, budget }) {
	let area = 0;

	for (let { width, length } of shops) {
		area += width * length;
	}

	return budget >= moneyPer1m3 * area * height ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}
