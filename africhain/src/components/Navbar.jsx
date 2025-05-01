import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const [open, setOpen] = useState(false)


  return (
    <>
      <div className='container pt-10'>
        <div>
            <img className='w-16' onClick={()=> setOpen(!open)} src={open ? assets.cancel : assets.menu} alt="" />
            <img src="" alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar
