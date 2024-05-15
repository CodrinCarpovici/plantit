import React from "react";
import logo from "../assets/main-logo-text-icon.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt="PlantIT logo"
              className="main-logo"
            />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="navbarSupportedContent"
            aria-labelledby="navbarSupportedContentLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="navbarSupportedContentLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/"
              >
                Home
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/myplans"
              >
                My Plans
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/calendar"
              >
                Calendar
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/recognition"
              >
                Recognition
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/news"
              >
                News
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/forum"
              >
                Forum
              </motion.a>
            </li>
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/contact"
              >
                Contact
              </motion.a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="nav-link"
                href="/signin"
              >
                Sign In
              </motion.a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
