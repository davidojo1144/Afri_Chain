import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Dropdown from './Dropdown'

const Navbar = () => {

    const [open, setOpen] = useState(false)


  return (
    <>
    <div className='bg-white shadow-lg md:shadow-2xl'>
        <div className='container pt-2 pb-2 '>
            <div className='flex items-center justify-between'>
                <img className='md:w-8 w-5 cursor-pointer' onClick={()=> setOpen(!open)} src={open ? assets.cancel : assets.menu} alt="" />
                <img className='md:w-32 w-20 cursor-pointer' src={assets.logo} alt="" />
            </div>
        </div>
    </div>
    <Dropdown open={open}/>
    </>
  )
}

export default Navbar
