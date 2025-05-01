import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Dropdown from './Dropdown'

const Navbar = () => {

    const [open, setOpen] = useState(false)


  return (
    <>
      <div className='container pt-10'>
        <div className='flex items-center justify-between'>
            <img className='w-10' onClick={()=> setOpen(!open)} src={open ? assets.cancel : assets.menu} alt="" />
            <img className='w-32' src={assets.logo} alt="" />
        </div>
        <Dropdown open={open}/>
      </div>
    </>
  )
}

export default Navbar
