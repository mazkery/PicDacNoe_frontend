import { useState, React, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";
import axios from "axios";

export default function Register() {
  const history = useHistory();
  const [submitInfo, setSubmitInfo] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    debugger;
    if (isSubmit === true) {
      if (submitInfo.password !== submitInfo.confirmPassword) {
        alert("Password do not match!");
      } else {
        const data = {
          fname: submitInfo.firstname,
          lname: submitInfo.lastname,
          email: submitInfo.email,
          password: submitInfo.password,
        };
        axios
          .post(localStorage.getItem('API') + 'signup', data)
          .then(function (response) {
          })
          .catch(function (error) {
            alert(error.message);
          });
        axios.post(localStorage.getItem('API') + 'email', { 'email': submitInfo.email })
          .then(function (response) {
            alert('Go to your email to confirm sign up!');
            history.push('/');
          })
          .catch(function (error) {
            alert(error.muessage);
          });
      }
      setIsSubmit(false);
    }
  }, [isSubmit]);

  return (
    <div>
      {(() => {
        const element = [];
        if (localStorage.getItem('token') === null) {
          element.push(
            <div class="wrapper">
              <form
                class="form-signin"
                onSubmit={(e) => {
                  debugger;
                  e.preventDefault();
                  setSubmitInfo({
                    email: e.currentTarget.email.value,
                    password: e.currentTarget.password.value,
                    firstname: e.currentTarget.firstname.value,
                    lastname: e.currentTarget.lastname.value,
                    confirmPassword: e.currentTarget.confirmPassword.value,
                  });
                  setIsSubmit(!isSubmit);
                }}
              >
                <h2 class="form-signin-heading">Register</h2>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  required
                  autofocus=""
                />
                <input
                  type="text"
                  class="form-control"
                  name="firstname"
                  placeholder="First name"
                  required
                  style={{
                    marginBottom: "0px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0px",
                  }}
                />
                <input
                  type="text"
                  class="form-control"
                  name="lastname"
                  placeholder="Last name"
                  required
                  style={{
                    marginBottom: "0px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0px",
                  }}
                />
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                  required
                  style={{
                    marginBottom: "0px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0px",
                  }}
                />
                <input
                  type="password"
                  class="form-control"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                />
                <br />
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Register
                </button>
                <br />
                <a className='form-signup' href='/signin'>
                  Sign in
        </a>
              </form>
            </div>
          )
          return element;
        }
        else {
          history.push('/');
        }
      })()}
    </div>
  );
}
