import React from "react";
import mainLogo from "../assets/main-logo-icon.png";
import linkedInIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div id="footer" className="p-3">
      <div className="container">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <a href="#">
                  <motion.img
                    whileHover={{
                      delay: 0,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    src={mainLogo}
                    alt="main logo"
                    className="main-logo"
                  />
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <a href="">
                <motion.img
                  whileHover={{
                    delay: 0,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  src={linkedInIcon}
                  alt="linkedIn link"
                  className="social-link-logo"
                />
              </a>
              <a href="">
                <motion.img
                  whileHover={{
                    delay: 0,
                    scale: 1.1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  src={githubIcon}
                  alt="github link"
                  className="social-link-logo"
                />
              </a>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-end">
                <a href="#">
                  <motion.button
                    whileHover={{
                      delay: 0,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="footer-link"
                  >
                    Home
                  </motion.button>
                </a>
                <a href="" className="footer-link">
                  <motion.button
                    whileHover={{
                      delay: 0,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="footer-link"
                  >
                    My Plants
                  </motion.button>
                </a>
                <a href="" className="footer-link">
                  <motion.button
                    whileHover={{
                      delay: 0,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="footer-link"
                  >
                    Contact
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
