import React from "react";
import "./ThirdSection.css";
import Image_left from "../../../assets/Human-cartoon-1.svg";
import Image_right from "../../../assets/Human-cartoon-2.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDown from "./DropDown";
const ThirdSection = () => {
  return (
    <div className="thirdSection">
      <div className="thirdsection__left">
        <img src={Image_right} alt="" />
        <h1>Connect with people who can help</h1>
        <button className="thridsection__leftBtn">Find people you know</button>
      </div>
      <div className="thirdsection__right">
        <img src={Image_left} alt="" />
        <h1>Learn the skills you need to succeed</h1>
        <div className="thridsection__rightBtn">
          <DropDown />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
