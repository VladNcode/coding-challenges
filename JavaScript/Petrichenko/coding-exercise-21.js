const funds = [
	{ amount: -1400 },
	{ amount: 2400 },
	{ amount: -1000 },
	{ amount: 500 },
	{ amount: 10400 },
	{ amount: -11400 },
];

const getPositiveIncomeAmount = data => {
	let res = 0;

	for (const { amount } of data) {
		if (amount > 0) res += amount;
	}

	return res;
};

const getTotalIncomeAmount = data =>
	data.some(({ amount }) => amount < 0)
		? data.reduce((acc, { amount }) => (acc += amount), 0)
		: getPositiveIncomeAmount(data);
