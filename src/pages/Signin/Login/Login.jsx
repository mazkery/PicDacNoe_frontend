import { useState, React, useEffect } from "react";
import "./login.css";
import LoginFB from "../LoginFB/fb";
import { useHistory } from "react-router-dom";
import LoginGG from "../LoginGG/gg";
import { login } from "../../../api";

export default function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValues, setInputValues] = useState({
    username: "",
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
          localStorage.setItem("username", inputValues.username);
          history.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
          // alert(error.response.data.message.message);
          // setErrorMessage(error.response.data.message);
        });
    }
  }, [inputValues]);

  return (
    <div class="wrapper">
      <form
        class="form-signin"
        onSubmit={(e) => {
          e.preventDefault();
          setInputValues({
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
          });
          setIsSubmit(true);
        }}
      >
        <h2 class="form-signin-heading">Please login</h2>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          required
        />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
        <br />
        <LoginGG />
        <LoginFB />
      </form>
    </div>
  );
}
