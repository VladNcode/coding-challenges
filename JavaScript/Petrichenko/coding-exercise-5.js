const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0, j = 1; i < lines + 1; i++, j = j + 2) {
	result += `${' '.repeat(lines - i)}${'*'.repeat(j)}\n`;
}
