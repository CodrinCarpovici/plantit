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
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/myplans">
                My Plans
              </a>
              </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/calendar">
                Calendar
              </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/recognition">
                Recognition
              </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/news">
                News
              </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/forum">
                Forum
              </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="nav-item">
              <a className="nav-link" href="/signin">
                Sign In
              </a>
              </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
