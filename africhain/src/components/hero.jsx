import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container md:pt-10 pt-5'>
      <div className='flex md:flex-row flex-col items-center justify-evenly md:space-y-0 space-y-5'>
        <div className='space-y-3'>
            <h1 className='md:text-4xl text-2xl prata-regular'>We fight your counterfeits and increase your revenue</h1>
            <p className='md:text-xl text-sm'>Combat counterfeiting and unauthorized sales while enhancing direct customer engagement.</p>
        </div>
        <img className='w-80 rounded' src={assets.herologo} alt="" />
      </div>
    </div>
  )
}

export default Hero
