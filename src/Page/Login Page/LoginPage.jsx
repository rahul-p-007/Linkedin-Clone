import React from "react";
import Header from "../../Components/Header/Header";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./LoginPage.css";
import Landing from "../Landing/Landing";

import LoginSection from "../LoginSection/LoginSection";
const LoginPage = () => {
  return (
    <>
      <div className="loginPage">
        <Header />
        <LoginForm />
        <Landing
          title="Explore collaborative articles"
          para=" We’re unlocking community knowledge in a new way. Experts add
            insights directly into each article, started with the help of AI."
        />
        <LoginSection />
      </div>
    </>
  );
};

export default LoginPage;
