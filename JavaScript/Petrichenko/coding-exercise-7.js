// Место для первой задачи
function calculateVolumeAndArea(num) {
	if (typeof num !== 'number' || !Number.isInteger(num) || num < 0)
		return 'При вычислении произошла ошибка';

	const cap = num * num * num;
	const area = 6 * num * num;
	return `Объем куба: ${cap}, площадь всей поверхности: ${area}`;
}

// Место для второй задачи
function getCoupeNumber(ticketNum) {
	if (typeof ticketNum !== 'number' || !Number.isInteger(ticketNum) || ticketNum < 0)
		return 'Ошибка. Проверьте правильность введенного номера места';

	if (ticketNum === 0 || ticketNum > 36) return 'Таких мест в вагоне не существует';

	return Math.ceil(ticketNum / 4);
}
