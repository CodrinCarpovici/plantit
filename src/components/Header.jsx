import React from "react";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import cactus from "../assets/cactus.jpg";

const Header = () => {
  return (
    <header className="container header-container d-flex flex-column justify-content-center align-items-center text-center">
      <div id="container-fluid">
        <img src={cactus} alt="cactus" className="header-img" />
        <div className="header-content">
          <h1 className="header-title" data-text="Plant iT"> Plant iT </h1>
          <h2 className="header-subtitle" data-text="Make your plant dreams a reality">Make your plant dreams a reality</h2>
          <Searchbar />
          <Filter />
        </div>
      </div>
    </header>
  );
};

export default Header;
