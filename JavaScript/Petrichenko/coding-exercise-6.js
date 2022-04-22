// Место для первой задачи
function sayHello(name) {
	return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num1, num2) {
	if (typeof num2 !== 'number' || num2 < 2) return num1;

	let result = '';

	for (let i = 1; i <= num2; i++) {
		result += `${num1 * i}---`;
	}

	return result.slice(0, -3);
}
