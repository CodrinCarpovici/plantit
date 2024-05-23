import React from 'react'
import Filter from '../components/Filter'
import DetailCard from '../components/DetailCard'

const Gardenpage = () => {
  return (
    <div id='garden-page' className='container-fluid'>
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <h1 id='garden-header'>My Plants</h1>
        <Filter />
        {/* Map the cards saved in my plants page */}
        <DetailCard />
      </div>
    </div>
  )
}

export default Gardenpage