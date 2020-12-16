import React from 'react';

function Square(props) {
	console.log(props.highLight);
	return (
		<button
			className={
				'square' + (props.highLight ? ' text-warning font-weight-bolder' : '')
			}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}

export default Square;
