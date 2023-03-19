import React from 'react'
import AirportCard from '../components/AirportCard'
import AirportFilter from '../components/AirportFilter'
import AirportSearch from '../components/AirportSearch'

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>

      <AirportSearch />

      <AirportFilter />

      <AirportCard />
      
    </div>
  )
}

export default MainPage
