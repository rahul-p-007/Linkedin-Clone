import React from "react";
import "./Landing.css";
import ClickButton from "../../Components/ClickButton/ClickButton";
const Landing = ({ title, para }) => {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="landing__left">
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
        <div className="landing__right">
          <div className="landing__right-1">
            <ClickButton title="Marketing" />
            <ClickButton title="Public" />
            <ClickButton title="Healthcare" />
            <ClickButton title="Engineering" />
          </div>
          <div className="landing__right-2">
            <ClickButton title="IT Services" />
            <ClickButton title="Sustainability" />
            <ClickButton title="Business Administration" />
          </div>
          <div className="landing__right-3">
            <ClickButton title="Telecommunications" />
            <ClickButton title="Construction" />
            <ClickButton
              title="Show All"
              className="color"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
