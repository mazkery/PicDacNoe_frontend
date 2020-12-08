import { useState, useEffect, React } from "react";
import "./login.css";
import LoginFB from "../LoginFB/fb";
import LoginGG from "../LoginGG/gg";
import axios from "axios";

export default function Login() {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const act_login = () => {
        const data = { username: username, password: pass };
        const postUser = async () => {
            await axios
                .post("link ở đây nè", data)
                .then(function (response) {
                    localStorage.setItem('auth-token', response.data.token);
                    localStorage.setItem('username', username);
                })
                .catch(function (error) {
                    alert(error);
                });
        };
        postUser();
    };
    return (
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please login</h2>
                <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Email Address"
                    required=""
                    autofocus=""
                />
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    required=""
                />
                <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={(e) => { e.preventDefault(); act_login(); }}>
                    Login
        </button>
                <br />
                <LoginGG />
                <LoginFB />
            </form>
        </div>
    );
}
