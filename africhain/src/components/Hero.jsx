import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='container pt-10'>
      <div className='flex md:flex-row flex-col items-center justify-evenly'>
        <div className='space-y-3'>
            <h1 className='text-4xl prata-regular'>We fight your counterfeits and increase your revenue</h1>
            <p className='md:text-xl text-sm'>Combat counterfeiting and unauthorized sales while enhancing direct customer engagement.</p>
        </div>
        <img className='w-80 rounded' src={assets.herologo} alt="" />
      </div>
    </div>
  )
}

export default Hero
