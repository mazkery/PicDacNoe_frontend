import GoogleLogin from 'react-google-login';

export default function LoginGG() {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <GoogleLogin
            clientId="851826168308-cr425moqslc8s1u5h8tn4oc6a2ee03tc.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}