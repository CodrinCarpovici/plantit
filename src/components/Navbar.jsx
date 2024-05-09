import React from "react";
import logo from "../assets/main-logo-text-icon.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} alt="PlantIT logo" className="main-logo" />
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/myplans">
                My Plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calendar">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recognition">
                Recognition
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/forum">
                Forum
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
