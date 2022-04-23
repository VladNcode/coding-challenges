const someString = 'This is some strange string';

function reverse(str) {
	if (typeof str !== 'string') return 'Ошибка!';
	return str.split('').reduceRight((acc, el) => (acc += el), '');
}
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (!arr.length) return 'Нет доступных валют';

	const availableCurr = arr.filter(el => el !== missingCurr);
	let result = `Доступные валюты:\n`;

	for (const curr of availableCurr) {
		result += curr + '\n';
	}

	return result;
}
