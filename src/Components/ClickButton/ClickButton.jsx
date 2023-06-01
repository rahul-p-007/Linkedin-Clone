import React from "react";
import "./ClickButton.css";

const ClickButton = ({ title }) => {
  return (
    <div>
      <button className="clickButton__btn">{title}</button>
    </div>
  );
};

export default ClickButton;
