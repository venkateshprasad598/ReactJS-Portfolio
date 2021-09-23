import React from "react";
import "./TechStack.css";
import { FaHtml5 } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="techStack">
      <h1 className="techStack__headline">TECKSTACK</h1>
      <h3 className="techStack__subline">
        I have experience with the following technologies:
      </h3>
      <div className="tech__icons">
        <span className="tech__span">
          <FaHtml5 className="tech__icon" />
          <p>HTML5</p>
        </span>
        <span className="tech__span">
          <FaHtml5 className="tech__icon" />
          <p>HTML5</p>
        </span>
        <span className="tech__span">
          <FaHtml5 className="tech__icon" />
          <p>HTML5</p>
        </span>
        <span className="tech__span">
          <FaHtml5 className="tech__icon" />
          <p>HTML5</p>
        </span>
        <span className="tech__span">
          <FaHtml5 className="tech__icon" />
          <p>HTML5</p>
        </span>
        <span className="tech__span">
          <FaHtml5 className="tech__icon" />
          <p>HTML5</p>
        </span>
      </div>
    </div>
  );
};

export default TechStack;
