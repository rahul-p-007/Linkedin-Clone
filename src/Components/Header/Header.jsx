import React from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupIcon from "@mui/icons-material/Group";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import WorkIcon from "@mui/icons-material/Work";
import { Button } from "@chakra-ui/react";
import "./Header.css";
import { Link } from "react-router-dom";
import SignUp from "../../Page/SignUp/SignUp";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img
            className="header__logoImg"
            src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png"
            alt=""
          />
        </div>
        <div className="header__information">
          <div className="header__icons">
            <NewspaperIcon />
            <GroupIcon />
            <CastForEducationIcon />
            <WorkIcon />
          </div>
          <div className="header__line"></div>
          <div className="header__buttons">
            <Button className="header__loginBtn">Join now </Button>

            <Button className="header__signUp">Sign in</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
