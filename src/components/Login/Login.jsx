import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className="login">
            <form className="login-container">
                <div className="login-title">
                    <h2> {currState} </h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-inputs">
                    {currState === "Login" ? <></> : <input type="text" placeholder="Your name" required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Your password" required />
                </div>
                <button> {currState === "Sign Up" ? "Create Account" : "Login"} </button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & private policy.</p>
                </div>
                {currState === "Login" ?
                    <p>Create a new account?
                        <span onClick={() => setCurrState("Sign Up")}>Click here</span>
                    </p> :
                    <p>Already have an account?
                        <span onClick={() => setCurrState("Login")}>Login here</span>
                    </p>
                }
            </form>
        </div>
    )
}

export default Login;