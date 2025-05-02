import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {


  return (
    <AnimatePresence>
      <motion.div className='overflow-x-hidden'>
        <Navbar/>
        <Home/>
    </motion.div>
    </AnimatePresence>
  )
}

export default App
