import React from 'react';
import Game from './components/Game';
import './GameMatch.css';

function GameMatch() {
	return (
		<div>
			<h1>Welcome to The Game</h1>
			<Game classname='game' />
		</div>
	);
}

export default GameMatch;
