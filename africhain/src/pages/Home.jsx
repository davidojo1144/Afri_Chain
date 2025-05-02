import React from 'react'

import Ourproducts from '../components/Ourproducts'
import Companies from '../components/Companies'
import Benefits from '../components/Benefits'
import Industries from '../components/Industries'
import Hero from '../components/hero'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Companies/>
      <Ourproducts/>
      <Benefits/>
      <Industries/>
    </div>
  )
}

export default Home
