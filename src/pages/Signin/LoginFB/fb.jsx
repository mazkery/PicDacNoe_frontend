import FacebookLogin from 'react-facebook-login';

export default function LoginFB() {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <FacebookLogin
            appId="188167866301133"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} />
    )
}