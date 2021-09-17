import React from "react";
import "./LandingPage.css";
// import Link from "../Nav/Links/Links";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

const LandingPage = () => {
  return (
    <main className="main">
      <div className="main__content">
        <h2 className="main__headline">Hi there! </h2>
        <h2 className="main__name">I'm Venkatesh Prasad</h2>
        <h2>A Civil Engineer turned web developer</h2>
        {/* <Link>About</Link> */}

        <div className="main__link">
          <a href="#" className="main__links">
            About
          </a>
          <a href="#" className="main__links">
            Projects
          </a>
          <a href="#" className="main__links">
            Contact
          </a>
          <a href="#" className="main__links">
            Resume
          </a>
        </div>
        <div>
          <FaLinkedin />
          <FaGithub />
        </div>
        <div className="down__icon">
          <BiChevronDown />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
