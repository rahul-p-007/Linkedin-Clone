import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./ForthSection.css";
const ForthSection = () => {
  return (
    <div className="forthsection">
      <div className="forthsection__left">
        <div className="forthsection__heading">
          <h1>
            Who is LinkedIn for? <br />
            <span>Anyone looking to navigate their professional life.</span>
          </h1>
        </div>
        <div className="forthsection__left__buttons">
          <div className="forthsection__left__buttons__background">
            <p className="btn">Find a coworker or classmate</p>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="forthsection__left__buttons">
          <div className="forthsection__left__buttons__background">
            <p className="btn">Find a new job</p>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="forthsection__left__buttons">
          <div className="forthsection__left__buttons__background">
            <p className="btn">Find a course or training</p>
            <ChevronRightIcon />
          </div>
        </div>
      </div>
      <div className="forthsection__right">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/eghb2zc0p5s2x42wbi80w4v8a"
          alt=""
        />
      </div>
    </div>
  );
};

export default ForthSection;
