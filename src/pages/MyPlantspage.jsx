import React from 'react'
import Filter from '../components/Filter'
import DetailCard from '../components/DetailCard'

const MyPlantspage = () => {
  return (
    <div id='myplants' className='container'>
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
        <h1>My Plants</h1>
        <Filter />
        {/* Map the cards saved in my plants page */}
        <DetailCard />
      </div>
    </div>
  )
}

export default MyPlantspage