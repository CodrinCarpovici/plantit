import React from "react";
import mainLogo from "../assets/main-logo-icon.png";
import linkedInIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";

const Footer = () => {
  return (
    <div id="footer" className="container">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col">
            <img src={mainLogo} alt="main logo" />
          </div>
          <div className="col">
            <div className="d-flex align-items-center">
              <img src={linkedInIcon} alt="" />
              <img src={githubIcon} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column align-items-end">
              <a href="#">Home</a>
              <a href="">My Plants</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
