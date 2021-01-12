import { useState, React, useEffect } from "react";
import "./register.css";
import axios from "axios";

export default function Register() {
  const [submitInfo, setSubmitInfo] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit === true) {
      debugger;
      if (submitInfo.password !== submitInfo.confirmPassword) {
        alert("Password do not match!");
      } else {
        const data = {
          username: submitInfo.username,
          firstname: submitInfo.firstname,
          lastname: submitInfo.lastname,
          email: submitInfo.email,
          password: submitInfo.password,
        };
        axios
          .post("https://dagk-back-end.herokuapp.com/user/register", data)
          .then(function (response) {
            alert("Registered");
          })
          .catch(function (error) {
            alert(error);
          });
      }
    }
  }, [submitInfo]);

  return (
    <div class="wrapper">
      <form
        class="form-signin"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitInfo({
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
            firstname: e.currentTarget.firstname.value,
            lastname: e.currentTarget.lastname.value,
            email: e.currentTarget.email.value,
            confirmPassword: e.currentTarget.confirmPassword.value,
          });
          setIsSubmit(true);
        }}
      >
        <h2 class="form-signin-heading">Register</h2>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Username"
          required
          autofocus=""
        />
        <input
          type="password"
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
          type="password"
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
          name="email"
          placeholder="Email"
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
        <br /><br />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
