import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {


  return (
    <AnimatePresence>
      <motion.div className='overflow-x-hidden'>
        <Navbar/>
        <Home/>
        <Footer/>
    </motion.div>
    </AnimatePresence>
  )
}

export default App
