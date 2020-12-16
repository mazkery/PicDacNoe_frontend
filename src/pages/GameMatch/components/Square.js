import React from 'react';

function Square(props) {
	console.log(props.highLight);
	const classname = 'square' + (props.highLight ? ' text-warning font-weight-bolder' : '');
	return (
		<button className={classname} onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Square;
