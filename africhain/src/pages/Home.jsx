import React from 'react'
import Hero from '../components/Hero'
import Ourproducts from '../components/Ourproducts'
import Companies from '../components/Companies'
import Benefits from '../components/Benefits'
import Industries from '../components/Industries'

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
