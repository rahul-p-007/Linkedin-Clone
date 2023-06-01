import React from "react";

import "./Section.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Section = () => {
  return (
    <section className="section">
      <div className="section__container">
        <div className="section__left">
          <h1>Find the right job or internship for you</h1>
        </div>
        <div className="section__right">
          <p
            style={{
              marginBottom: "10px",
              fontWeight: "bold",
              color: "var(--Linkedin-main-gray-color-1)",
            }}
          >
            SUGGESTED SEARCHES
          </p>
          <div className="section__right-1">
            <button className="section__rightBtns">Engineering</button>
            <button className="section__rightBtns">Business</button>
            <button className="section__rightBtns">Finance</button>
          </div>
          <div className="section__right-2">
            <button className="section__rightBtns">Administrative</button>
            <button className="section__rightBtns">Retail </button>
            <button className="section__rightBtns">Customer </button>
          </div>
          <div className="section__right-3">
            <button className="section__rightBtns">Operations</button>
            <button className="section__rightBtns">Information</button>
            <button className="section__rightBtns">Marketing</button>
            <button className="section__rightBtns">Human Resources</button>
          </div>
          <button className="section__showmoreBtn">
            Show more <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
