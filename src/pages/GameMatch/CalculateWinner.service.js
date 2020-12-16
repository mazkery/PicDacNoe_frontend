export function calculateWinner(board, row, col) {
	const x = Number(row);
	const y = Number(col);
	const player = board[x][y];
	if (!player) return null;
	const boardSize = board.length;
	const numberToWin = boardSize > 5 ? 5 : boardSize;
	const rMin = x - (numberToWin - 1) > 0 ? x - (numberToWin - 1) : 0;
	const rMax = x + numberToWin - 1 < boardSize ? x + numberToWin - 1 : boardSize - 1;
	const rLen = rMax - rMin + 1;
	const cMin = y - (numberToWin - 1) > 0 ? y - (numberToWin - 1) : 0;
	const cMax = y + numberToWin - 1 < boardSize ? y + numberToWin - 1 : boardSize - 1;
	const cLen = cMax - cMin + 1;

	// check row
	const winRow = [];
	for (let i = 0; i < cLen; i++) {
		if (winRow.length === numberToWin) {
			console.log({ winner: player, line: winRow, type: 'row' });
			return { winner: player, line: winRow, type: 'row' };
		}
		if (board[x][cMin + i] === player) {
			winRow.push([x, cMin + i]);
		} else {
			winRow.splice(0, winRow.length);
		}
	}
	// // check col
	const winCol = [];
	for (let i = 0; i < rLen; i++) {
		if (winCol.length === numberToWin) return { winner: player, line: winCol, type: 'col' };
		if (board[rMin + i][y] === player) {
			winCol.push([rMin + i, y]);
		} else {
			winCol.splice(0, winCol.length);
		}
	}
	// Check main diagonal
	const winDiag = [];
	for (let i = 0; i < rLen; i++) {
		if (winDiag.length === numberToWin) return { winner: player, line: winDiag, type: 'main-diag' };
		if (rMin + i > rMax || cMin + i > cMax) {
			break;
		}
		if (board[rMin + i][cMin + i] === player) {
			winDiag.push([rMin + i, cMin + i]);
		} else {
			winDiag.splice(0, winDiag.length);
		}
	}
	// Check anti diagonal
	const winAntiDiag = [];
	for (let i = 0; i < cLen; i++) {
		if (winAntiDiag.length === numberToWin)
			return { winner: player, line: winAntiDiag, type: 'anti-diag' };
		if (rMin + i > rMax || cMax - 1 < cMin) break;
		if (board[rMin + i][cMax - i] === player) {
			winAntiDiag.push([rMin + i, cMax - i]);
		} else {
			winAntiDiag.splice(0, winAntiDiag.length);
		}
	}
	return null;
}

// ref: https://medium.com/@shray.7/check-tic-tac-toe-winner-at-o-1-time-complexity-a86e644aae13
export function calculateWinnerByAnalyzeTheWholeBoard(board) {
	const boardSize = board.length;

	// Check main diagonal
	if (board[0][0]) {
		const winDiag = [];
		for (let i = 0; i < boardSize; i++) {
			if (board[i][i] !== board[0][0]) break;
			else winDiag.push([i, i]);
		}
		if (winDiag.length === boardSize) return { winner: board[0][0], line: winDiag };
	}
	// Check anti diagonal
	if (board[0][boardSize - 1]) {
		const winAntiDiag = [];
		for (let i = 0; i < boardSize; i++) {
			if (board[i][boardSize - i - 1] !== board[0][boardSize - 1]) break;
			else winAntiDiag.push([i, boardSize - i - 1]);
		}
		if (winAntiDiag.length === boardSize)
			return { winner: board[0][boardSize - 1], line: winAntiDiag };
	}

	// Check row
	for (let i = 0; i < boardSize; i++) {
		if (board[i][0]) {
			const winRow = [];
			for (let j = 0; j < boardSize; j++) {
				if (board[i][j] !== board[i][0]) break;
				else winRow.push([i, j]);
			}
			if (winRow.length === boardSize) return { winner: board[i][0], line: winRow };
		}
	}

	// Check column
	for (let i = 0; i < boardSize; i++) {
		if (board[0][i]) {
			const winCol = [];
			for (let j = 0; j < boardSize; j++) {
				if (board[j][i] !== board[0][i]) break;
				else winCol.push([j, i]);
			}
			if (winCol.length === boardSize) return { winner: board[0][i], line: winCol };
		}
	}
	return null;
}
