import React from 'react';
import logo from "../assets/main-logo-text icon.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className='container'>
        <div className="row align-items-center">
          <div className="col-lg-2">
            <a className="navbar-brand" href="/">
              <img className="main-logo" src={logo} alt="main-logo" />
            </a>
          </div>
          <div className="col-lg-8">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
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
              </ul>
            </div>
          </div>
          <div className="col-lg-2  text-end">
            <a className="nav-link" href="/signing">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
