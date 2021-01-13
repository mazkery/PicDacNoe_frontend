import { useState, React, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function EditPassword() {
    const [errorMessage, setErrorMessage] = useState("");
    const [submitInfo, setSubmitInfo] = useState({});
    const [password, setPassword] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (isSubmit) {
            if (submitInfo.password !== submitInfo.confirmPassword) {
                alert("Password do not match!");
                setIsSubmit(false);
            } else {
                alert('hii');
            }
        }
    }, [isSubmit]);

    return (
        <div class="wrapper">
            <form
                class="form-signin"
                onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitInfo({
                        password: e.currentTarget.password.value,
                        confirmPassword: e.currentTarget.confirmPassword.value,
                    });
                    setIsSubmit(true);
                }}
            >
                <h2 class="form-signin-heading">Edit Password</h2>
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
                <br />
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                    Save
                </button>
                <a className="form-signup" href="/signin">
                    Sign in
        </a>
            </form>
        </div>
    );
}
