import React from 'react'
import { motion } from 'framer-motion'

const Searchbar = () => {
  return (
    <div className="container mt-3 mb-3 searchbar-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control searchbar-input"
              placeholder="Search for a plant"
            />
            <div className="input-group-append">
              <motion.button
                className="btn searchbar-search"
                type="button"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0px 0px 4px gray",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-search"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar