import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { confirmedEmail } from '../../api';

function EmailConfirm() {
	const { id } = useParams();

	confirmedEmail({ id })
		.then((res) => {
			console.log(res);
		})
		.catch((error) => console.log(error));

	return (
		<div>
			<p>Your email has been confirmed. </p>
			Go to <Link to='/signin'>Signin</Link>
		</div>
	);
}

export default EmailConfirm;
