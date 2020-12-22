import React, { useState } from 'react';
import Board from './Board.js';
import {
	calculateWinner,
	calculateWinnerByAnalyzeTheWholeBoard,
} from '../CalculateWinner.service.js';

function Game() {
	function getInitialState(size) {
		return {
			history: [
				{
					squares: Array(size)
						.fill()
						.map(() => Array(size).fill(null)),
					savedMove: [null, null],
				},
			],
			stepNumber: 0,
			listAscending: true,
			nextIsX: true,
			boardSize: size,
		};
	}

	function handleClickSquare(r, c) {
		const history = theGame.history.slice(0, theGame.stepNumber + 1);
		const current = history[history.length - 1];
		const currentSquares = current.squares.slice().map((i) => i.slice());
		if (
			calculateWinner(current.squares, current.savedMove[0], current.savedMove[1]) ||
			currentSquares[r][c]
		)
			return;
		currentSquares[r][c] = theGame.nextIsX ? 'X' : 'O';
		setTheGame((prevState) => ({
			...prevState,
			history: history.concat([{ squares: currentSquares, savedMove: [r, c] }]),
			stepNumber: history.length,
			nextIsX: !theGame.nextIsX,
		}));
	}

	function jumpTo(step) {
		setTheGame((prevState) => ({
			...prevState,
			stepNumber: step,
			nextIsX: step % 2 === 0,
		}));
	}

	const [theGame, setTheGame] = useState(getInitialState(50));

	// Render
	const historyArray = theGame.history;
	const current = historyArray[theGame.stepNumber];
	const win = calculateWinner(current.squares, current.savedMove[0], current.savedMove[1]);

	// JSX: Move List
	const moves = historyArray.map((step, move) => {
		const desc = move ? 'Go to square [' + step.savedMove + ']' : 'Go to game start';
		return (
			<li key={move}>
				<button
					className={
						'btn btn-outline-secondary ' + (move === theGame.stepNumber ? 'font-weight-bolder' : '')
					}
					onClick={() => jumpTo(move)}
				>
					{desc}
				</button>
			</li>
		);
	});
	const historyMovesList = theGame.listAscending ? (
		<ol start='0'>{moves}</ol>
	) : (
		<ol tart='0' reversed>
			{moves.reverse()}
		</ol>
	);

	// status
	let status;
	if (win) {
		status = 'Winner:' + win.winner;
	} else {
		if (theGame.stepNumber === theGame.boardSize * theGame.boardSize) {
			status = "It's a tie";
		} else {
			status = 'Next player: ' + (theGame.nextIsX ? 'X' : 'O');
		}
	}
	return (
		<div className=''>
			<div className='game-info '>
				<div className='alert alert-primary'>{status}</div>
			</div>
			<div className=''>
				<Board
					squares={current.squares}
					onClick={(r, c) => handleClickSquare(r, c)}
					highLightSquares={win ? win.line : []}
				/>
			</div>
		</div>
	);
}

export default Game;