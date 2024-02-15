import React, { useState } from "react";
import "./signin.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../Helper/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);
  const handleSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate(navStateData?.state?.redirect || "/");
      })
      .catch((error) => alert(error.message));
  };
  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate(navStateData?.state?.redirect || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alart(errorMessage);
      });
  };
  return (
    <div className="signin-container">
      <Link to="/home" className="amazon-logo">
        <img src="../../public/Images/pngimg.com_amazon_PNG1.png" alt="" />
      </Link>
      <div className="signin-form">
        <h2>Sign in</h2>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWeight: "bold",
            }}
          >
            {navStateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">
              <strong>Email or mobile phone number</strong>
            </label>
            <br />
            <input
              className="info-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <br />
            <input
              className="info-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="signin-button2"
            type="submit"
            onClick={handleSignin}
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Clone{" "}
          <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.
        </p>
        <div>
          <a href="Need helpe?">Need helpe?</a>
        </div>
        <hr />
        <strong>Buying for work?</strong>
        <a href="">Shop on Amazon Business</a>
      </div>
      <div>New to Amazon?</div>
      <button className="createButton" onClick={handleRegistration}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default SignIn;
