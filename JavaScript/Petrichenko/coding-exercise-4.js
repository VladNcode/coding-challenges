// Место для первой задачи
function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	arr.forEach(num => result.push(num));

	// Не трогаем
	return result;
}

// Место для второй задачи
function secondTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	// Пишем решение вот тут
	data.forEach((el, i) =>
		typeof data[i] === 'number' ? (data[i] = data[i] * 2) : (data[i] = data[i] + ' - done'),
	);

	// Не трогаем
	return data;
}

// Место для третьей задачи
function thirdTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	// Пишем решение вот тут
	data.reduceRight((acc, el) => result.push(el), 0);

	// Не трогаем
	return result;
}
