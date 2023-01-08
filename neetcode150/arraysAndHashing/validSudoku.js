const isValidSudoku = board => {
	for (let i = 0; i < 7; i += 3) {
		let squareSet = new Set();

		for (let l = 0, j = i, x = i + 1, y = i + 2; l < 9; l++) {
			const cell1 = board[j][l] !== '.' && +board[j][l] > 0 && +board[j][l] < 10 && +board[j][l];
			const cell2 = board[x][l] !== '.' && +board[x][l] > 0 && +board[x][l] < 10 && +board[x][l];
			const cell3 = board[y][l] !== '.' && +board[y][l] > 0 && +board[y][l] < 10 && +board[y][l];

			if ((cell1 && squareSet.has(cell1)) || (cell2 && squareSet.has(cell2)) || (cell3 && squareSet.has(cell3))) {
				return false;
			}

			cell1 && squareSet.add(cell1);
			cell2 && squareSet.add(cell2);
			cell3 && squareSet.add(cell3);

			if ((l + 1) % 3 === 0) {
				squareSet = new Set();
			}
		}
	}

	for (let i = 0; i < board.length; i++) {
		let rowSet = new Set();

		for (let j = 0; j < board[i].length; j++) {
			const cell = board[i][j] !== '.' && +board[i][j] > 0 && +board[i][j] < 10 && +board[i][j];
			if (rowSet.has(cell)) return false;
			cell && rowSet.add(cell);
		}
	}

	for (let i = 0; i < board[0].length; i++) {
		let columnSet = new Set();

		for (let j = 0; j < board.length; j++) {
			const cell = board[j][i] !== '.' && +board[j][i] > 0 && +board[j][i] < 10 && +board[j][i];
			if (columnSet.has(cell)) return false;
			cell && columnSet.add(cell);
		}
	}

	return true;
};

const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const board2 = [
	['8', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const board3 = [
	['.', '.', '4', '.', '.', '.', '6', '3', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['5', '.', '.', '.', '.', '.', '.', '9', '.'],
	['.', '.', '.', '5', '6', '.', '.', '.', '.'],
	['4', '.', '3', '.', '.', '.', '.', '.', '1'],
	['.', '.', '.', '7', '.', '.', '.', '.', '.'],
	['.', '.', '.', '5', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];

console.log(isValidSudoku(board));
// console.log(isValidSudoku(board2));
// console.log(isValidSudoku(board3));
