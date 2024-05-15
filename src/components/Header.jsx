import React from 'react'
import Searchbar from './Searchbar'
import Filter from './Filter'
import cactus from "../assets/cactus.png";

const Header = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <header>
          <img src={cactus} alt="cactus" />
          <h1> Plant iT </h1>
          <h2>Make your plant dreams a reality</h2>
          <Searchbar />
          <Filter />
        </header>
      </div>
    </div>
  )
}

export default Header