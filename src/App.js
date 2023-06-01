import React from "react";
import "./App.css";
import LoginPage from "./Page/Login Page/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import SignUp from "./Page/SignUp/SignUp";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Page/Home/Home";
const App = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <Router>
      {!user ? (
        <>{<LoginPage />}</>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
