import { useState, React, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function ForgotPassword() {
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        if (isSubmit) {
            alert(email)
        }
    }, [isSubmit]);

    return (
        <div class="wrapper">
            <form
                class="form-signin"
                onSubmit={(e) => {
                    e.preventDefault();
                    setEmail(e.currentTarget.username.value);
                    setIsSubmit(true);
                }}
            >
                <h2 class="form-signin-heading">Forgot Password</h2>
                <input
                    type="email"
                    class="form-control"
                    name="username"
                    placeholder="Email Address"
                    required
                />
                <br />
                <br />
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                    Find
        </button>
                <a className="form-signup" href="/signin">
                    Sign in
        </a>
            </form>
        </div>
    );
}
