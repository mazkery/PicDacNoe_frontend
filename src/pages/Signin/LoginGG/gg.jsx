import GoogleLogin from 'react-google-login';
import './gg.css';
import axios from 'axios';

export default function LoginGG() {
	const responseSuccess = (response) => {
		console.log(response);
		const data = response.profileObj.email;
		const logingg = async () => {
			await axios
				.post('link login gg', data)
				.then(function (res) {
					localStorage.setItem('token', res.data.user.token);
					localStorage.setItem('username', res.data.user.name);
					localStorage.setItem('userid', res.data.user._id);
					localStorage.setItem('email', res.data.user.email);
				})
				.catch(function (error) {
					alert(error);
				});
		};
		logingg();
	};
	const responseFail = (response) => {
		console.log(response);
	};
	return (
		<GoogleLogin
			clientId='851826168308-cr425moqslc8s1u5h8tn4oc6a2ee03tc.apps.googleusercontent.com'
			buttonText='Login'
			onSuccess={responseSuccess}
			onFailure={responseFail}
			cookiePolicy={'single_host_origin'}
			className='btnGoogle'
		/>
	);
}
