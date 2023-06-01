import React, { useState } from "react";
import "./LoginForm.css";
import LoginImage from "../../assets/Login-image.svg";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import GoogleImage from "../../assets/google.png";
import { auth, GoogleProvider } from "../../firebase/setup";
import { useStateValue } from "../../context/StateProvider";
import { actionTypes } from "../../context/reducer";
import { Button } from "@chakra-ui/react";
const LoginForm = () => {
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginEmail = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({
        type: actionTypes.SET_USER,
        user: result.email,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="loginForm">
        <div className="loginForm__body">
          <h1>Welcome to your professional community</h1>

          <div className="loginForm__inputField">
            <label>Email or Phone</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__forgetButton">
            <p>Forget Password ?</p>
          </div>
          <div className="login__buttons">
            <Button onClick={LoginEmail} className="login__signInButton">
              Sign In
            </Button>
            <p>
              ---------------------------------OR------------------------------
            </p>
            {/* <GoogleButton className="login__googleButton" /> */}

            <button className="google__login" onClick={signIn}>
              <img src={GoogleImage} alt="" />
              <p>Sign with google</p>
            </button>
            <button className="login__signInButton2">
              New to LinkedIn? Join now
            </button>
          </div>
        </div>

        <img src={LoginImage} alt="" className="loginForm__image" />
      </section>
    </>
  );
};

export default LoginForm;
