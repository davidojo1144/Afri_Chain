import React from 'react'
import { industries } from '../assets/assets'

const Industries = () => {
  return (
    <div className='container pt-20'>
        <h1 className='text-center prata-regular md:text-2xl text-xl'>We protect you in these industries</h1>
      <div>
        <div className='grid md:grid-cols-3 grid-rows-1 gap-10 mt-5'>
            <div className='bg-secondary-dark shadow-2xl md:p-10 p-5 md:h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='text-xl'>Wines & spirit</p>
                <img className='md:w-60 rounded-xl' src={industries.wines} alt="" />
            </div>
            <div className='bg-secondary-dark shadow-2xl md:p-10 p-5 md:h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='text-xl'>Licensing</p>
                <img className='md:w-60 rounded-xl' src={industries.licensing} alt="" />
            </div>
            <div className='bg-secondary-dark shadow-2xl md:p-10 p-5 md:h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='text-xl'>Cosmetics</p>
                <img className='md:w-60 rounded-xl' src={industries.cosmetics} alt="" />
            </div>
            <div className='bg-secondary-dark shadow-2xl md:p-10 p-5 md:h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='text-xl'>Baby nutrition</p>
                <img className='md:w-48 rounded-xl' src={industries.babynutrition} alt="" />
            </div>
            <div className='bg-secondary-dark shadow-2xl md:p-10 p-5 md:h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='text-xl'>Health care</p>
                <img className='md:w-60 rounded-xl' src={industries.healthcare} alt="" />
            </div>
            <div className='bg-secondary-dark shadow-2xl md:p-10 p-5 md:h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='text-xl'>Agricultural products</p>
                <img className='md:w-52 rounded-xl' src={industries.agriculture} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Industries
