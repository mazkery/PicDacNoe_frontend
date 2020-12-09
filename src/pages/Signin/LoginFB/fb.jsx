import FacebookLogin from 'react-facebook-login';
import axios from "axios";

export default function LoginFB() {
    const responseFacebook = (response) => {
        if (response.status !== "unknown") {
            console.log(response);
            const data = response.email;
            const loginfb = async () => {
                await axios
                    .post("link login fb", data)
                    .then(function (res) {
                        localStorage.setItem('auth-token', res.data.token);
                        localStorage.setItem('username', data);
                    })
                    .catch(function (error) {
                        alert(error);
                    });
            };
            loginfb();
        }
    }
    return (
        <FacebookLogin
            appId="188167866301133"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} />
    )
}