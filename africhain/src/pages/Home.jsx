import React from 'react'

import Ourproducts from '../components/Ourproducts'
import Companies from '../components/Companies'
import Benefits from '../components/Benefits'
import Industries from '../components/Industries'
import Hero from '../components/hero'
import Contactus from '../components/Contactus'
import AboutUs from "../components/aboutUs.jsx";
const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Companies/>
      <Ourproducts/>
      <Benefits/>
      <Industries/>
      <Contactus/>
    </div>
  )
}

export default Home
