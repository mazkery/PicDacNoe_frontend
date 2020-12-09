import GoogleLogin from 'react-google-login';
import axios from "axios";

export default function LoginGG() {
    const responseSuccess = (response) => {
        console.log(response);
        const data = response.profileObj.email;
        const logingg = async () => {
            await axios
                .post("link login gg", data)
                .then(function (res) {
                    localStorage.setItem('auth-token', res.data.token);
                    localStorage.setItem('username', data);
                })
                .catch(function (error) {
                    alert(error);
                });
        };
        logingg();
    }
    const responseFail = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId="851826168308-cr425moqslc8s1u5h8tn4oc6a2ee03tc.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseSuccess}
            onFailure={responseFail}
            cookiePolicy={'single_host_origin'}
        />
    )
}