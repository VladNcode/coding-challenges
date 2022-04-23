// Место для первой задачи
function getTimeFromMinutes(minutes) {
	if (!Number.isInteger(minutes) || minutes < 0) return 'Ошибка, проверьте данные';

	const hours = Math.floor(minutes / 60);
	const mins = Math.floor(minutes % 60);
	let result = '';

	result +=
		hours === 1
			? `Это ${hours} час`
			: hours > 1 && hours < 5
			? `Это ${hours} часа`
			: `Это ${hours} часов`;

	result +=
		mins === 1
			? ` и ${mins} минута`
			: mins > 1 && mins < 5
			? ` и ${mins} минуты`
			: ` и ${mins} минут`;

	return result;
}

// Место для второй задачи
function findMaxNumber(...args) {
	if (args.length < 4) return 0;

	let max = -Infinity;
	for (let el of args) {
		if (typeof el !== 'number') return 0;
		max = Math.max(max, el);
	}

	return max;
}
