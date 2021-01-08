import React from 'react';

function Square(props) {
	const classname = 'square' + (props.highLight ? ' text-danger font-weight-bolder' : '');
	return (
		<button className={classname} onClick={props.onClick}>
			{props.value}
		</button>
	);
}

export default Square;
