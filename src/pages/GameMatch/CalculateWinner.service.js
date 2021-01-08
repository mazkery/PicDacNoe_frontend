export function calculateWinner(board, row, col) {
	const x = Number(row);
	const y = Number(col);
	const player = board[x][y];
	if (!player) return null;
	const boardSize = board.length;
	const numberToWin = boardSize >= 5 ? 5 : boardSize;
	const rMin = x - (numberToWin - 1) > 0 ? x - (numberToWin - 1) : 0;
	const rMax = x + numberToWin - 1 < boardSize ? x + numberToWin - 1 : boardSize - 1;
	const rLen = rMax - rMin + 1;
	const cMin = y - (numberToWin - 1) > 0 ? y - (numberToWin - 1) : 0;
	const cMax = y + numberToWin - 1 < boardSize ? y + numberToWin - 1 : boardSize - 1;
	const cLen = cMax - cMin + 1;
	// check row
	const winRow = [];
	for (let i = cMin; i <= cMax; i++) {
		if (board[x][i] === player) {
			winRow.push([x, i]);
		} else {
			winRow.splice(0, winRow.length);
		}
		if (winRow.length === numberToWin) return { winner: player, line: winRow, type: 'row' };
	}
	// check col
	const winCol = [];
	for (let i = rMin; i <= rMax; i++) {
		if (board[i][y] === player) {
			winCol.push([i, y]);
		} else {
			winCol.splice(0, winCol.length);
		}
		if (winCol.length === numberToWin) return { winner: player, line: winCol, type: 'col' };
	}
	// Check main diagonal
	const winDiag = [];
	for (let i = 0; i < rLen; i++) {
		if (cMin + i > cMax || winDiag.length === numberToWin) break;
		if (board[rMin + i][cMin + i] === player) {
			winDiag.push([rMin + i, cMin + i]);
		} else {
			winDiag.splice(0, winDiag.length);
		}
	}
	if (winDiag.length === numberToWin) return { winner: player, line: winDiag, type: 'main-diag' };

	// Check anti diagonal
	/**
	 * r= 1-9
	 * c= 5-9
	 */
	const winAntiDiag = [];
	for (let i = 0; i < cLen; i++) {
		if (rMax - i < rMin || cMin + i > cMax) break;
		if (board[rMax - i][cMin + i] === player) {
			winAntiDiag.push([rMax - i, cMin + i]);
		} else {
			winAntiDiag.splice(0, winAntiDiag.length);
		}
		if (winAntiDiag.length === numberToWin)
			return { winner: player, line: winAntiDiag, type: 'anti-diag' };
	}

	return null;
}
