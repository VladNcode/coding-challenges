const restorantData = {
	menu: [
		{
			name: 'Salad Caesar',
			price: '14$',
		},
		{
			name: 'Pizza Diavola',
			price: '9$',
		},
		{
			name: 'Beefsteak',
			price: '17$',
		},
		{
			name: 'Napoleon',
			price: '7$',
		},
	],
	waitors: [
		{ name: 'Alice', age: 22 },
		{ name: 'John', age: 24 },
	],
	averageLunchPrice: '20$',
	openNow: true,
};

function isOpen(prop) {
	return prop ? 'Открыто' : 'Закрыто';
}

console.log(isOpen(openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
	return parseInt(fDish.price) + parseInt(sDish.price) > parseInt(average)
		? 'Цена выше средней'
		: 'Цена ниже средней';
}

console.log(
	isAverageLunchPriceTrue(
		restorantData.menu[0],
		restorantData.menu[1],
		restorantData.averageLunchPrice,
	),
);

function transferWaitors(data) {
	const copy = JSON.parse(JSON.stringify(data));

	copy.waitors[0] = { name: 'Mike', age: 32 };
	return copy;
}

transferWaitors(restorantData);
