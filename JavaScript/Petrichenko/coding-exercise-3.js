// Место для первой задачи
function firstTask() {
	// Пишем решение вот тут
	for (let i = 5; i < 11; i++) {
		console.log(i);
	}
}

// Место для второй задачи
function secondTask() {
	// Пишем решение вот тут
	for (let i = 20; i > 13; i--) {
		console.log(i);
	}
}

// Место для третьей задачи
function thirdTask() {
	// Пишем решение вот тут
	for (let i = 2; i < 11; i++) {
		if (i % 2 === 0) console.log(i);
	}
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	// Пишем решение вот тут
	let i = 2;
	while (i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
			i++;
		}
	}
}

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];

	// Пишем решение вот тут
	for (let i = 5; i < 11; i++) {
		arrayOfNumbers.push(i);
	}

	// Не трогаем
	return arrayOfNumbers;
}
