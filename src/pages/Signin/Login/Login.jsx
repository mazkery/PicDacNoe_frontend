import { useState, React, useEffect } from "react";
import "./login.css";
import LoginFB from "../LoginFB/fb";
import { useHistory } from "react-router-dom";
import LoginGG from "../LoginGG/gg";
import { login } from "../../../api";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isSubmit) {
      const data = inputValues;
      login(data)
        .then((res) => {
          console.log(res);
          // alert(res.data.info.message);
          localStorage.setItem("token", res.data.user.token);
          localStorage.setItem("username", res.data.user.name);
          localStorage.setItem("email", inputValues.email);
          console.log(localStorage.getItem("email"));
          localStorage.setItem("id", res.data.user.id);
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message);
          // setErrorMessage(error.response.data.message);
        });
    }
  }, [inputValues]);

  return (
    <div>
      {(() => {
        const elements = [];
        if (localStorage.getItem('token') === null) {
          elements.push(
            <div class='wrapper'>
              <form
                class='form-signin'
                onSubmit={(e) => {
                  e.preventDefault();
                  setInputValues({
                    email: e.currentTarget.username.value,
                    password: e.currentTarget.password.value,
                  });
                  setIsSubmit(true);
                }}
              >
                <h2 class='form-signin-heading'>Please login</h2>
                <input
                  type='email'
                  class='form-control'
                  name='username'
                  placeholder='Email Address'
                  required
                />
                <input
                  type='password'
                  class='form-control'
                  name='password'
                  placeholder='Password'
                  required
                />
                <br />
                <button class='btn btn-lg btn-primary btn-block' type='submit'>
                  Login
        </button>
                <hr />
                <LoginGG />
                <LoginFB />
                <br />
                <br />
                <a className='form-signup' href='/signup'>
                  Sign up
        </a>
                <br />
                <a className='form-signup' href='/forgotpassword'>
                  Forgot Password
        </a>
              </form>
            </div>
          )
          return elements;
        }
        else {
          history.push('/');
        }
      })()}
    </div>
  );
}
