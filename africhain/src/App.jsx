import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'

const App = () => {

  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <div className='overflow-x-hidden'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </AnimatePresence>
  )
}

export default App
