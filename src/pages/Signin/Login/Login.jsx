import { useState, React } from 'react';
import './login.css';
import LoginFB from '../LoginFB/fb';
import { useHistory } from 'react-router-dom';
import LoginGG from '../LoginGG/gg';
import { login } from '../../../api';

export default function Login() {
	const [errorMessage, setErrorMessage] = useState('');
	const [inputValues, setInputValues] = useState({
		username: '',
		password: '',
	});
	const handleChange = (prop) => (event) => {
		setInputValues({ ...inputValues, [prop]: event.target.value });
	};
	// const history = useHistory();
	const act_login = () => {
		const data = inputValues;
		login(data)
			.then((res) => {
				console.log(res);
				// alert(res.data.info.message);
				localStorage.setItem('token', res.data.user.token);
				localStorage.setItem('username', inputValues.username);
			})
			.catch((error) => {
				console.log(error);
				// alert(error.response.data.message.message);
				// setErrorMessage(error.response.data.message);
			});
	};

	return (
		<div class='wrapper'>
			<form class='form-signin'>
				<h2 class='form-signin-heading'>Please login</h2>
				<input
					type='text'
					class='form-control'
					name='username'
					placeholder='Email Address'
					required=''
					autofocus=''
					onChange={handleChange('username')}
				/>
				<input
					type='password'
					class='form-control'
					name='password'
					placeholder='Password'
					required=''
					onChange={handleChange('password')}
				/>
				<button
					class='btn btn-lg btn-primary btn-block'
					type='submit'
					onClick={(e) => {
						e.preventDefault();
						act_login();
					}}
				>
					Login
				</button>
				<br />
				<LoginGG />
				<LoginFB />
			</form>
		</div>
	);
}
