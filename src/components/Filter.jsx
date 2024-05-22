import React from 'react';
import { motion } from 'framer-motion';
import { IoFilter } from "react-icons/io5";

const Filter = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="row justify-content-center">
          <div className="filter-container">
            <motion.button
              className="btn filter-icon"
              type="button"
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 4px gray",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <IoFilter />
            </motion.button>
            <div className="filter-buttons">
              <motion.button
                className="btn filter-button"
                type="button"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Outdoor
              </motion.button>
              <motion.button
                className="btn filter-button"
                type="button"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Indoor
              </motion.button>
              <motion.button
                className="btn filter-button"
                type="button"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Filter 3
              </motion.button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Filter;
