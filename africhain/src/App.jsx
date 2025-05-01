import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'

const App = () => {
  return (
    <AnimatePresence>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </AnimatePresence>
  )
}

export default App
