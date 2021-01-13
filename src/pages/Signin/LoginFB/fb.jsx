import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import './fb.css';

export default function LoginFB() {
	const responseFacebook = (response) => {
		if (response.status !== 'unknown') {
			console.log(response);
			const data = response.email;
			const loginfb = async () => {
				await axios
					.post('link login fb', data)
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
			loginfb();
		}
	};
	return (
		<FacebookLogin
			appId='188167866301133'
			autoLoad={false}
			fields='name,email,picture'
			callback={responseFacebook}
			cssClass='btnFacebook'
		/>
	);
}
