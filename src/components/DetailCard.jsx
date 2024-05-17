import React from "react";
import { motion } from "framer-motion";
import housePlants from "../assets/house-plants.jpg";

const DetailCard = () => {
  return (
    <div className="card-container plant-card col-lg-2 col-md-3 col-sm-4 col-xs-12 mx-auto mx-md-1 mb-4">
      <a className="plant-card-link" href="/plantpage">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="card-img-container plant-card-img-container"
        >
          <img
            src={housePlants}
            alt="Plant Cover"
            className="card-img plant-card-img"
          />
          <div className="card-hover-content">
            <h5 className="card-title plant-card-title small-card">
              Plant Title
            </h5>
            <p className="card-text plant-card-text small-card">Plant Area</p>
            <p className="card-text plant-card-text small-card">PLant Type</p>
            <button className="btn btn-dark">Add to Garden</button>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default DetailCard;
