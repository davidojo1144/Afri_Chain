import React from 'react'
import { industries } from '../assets/assets'

const Industries = () => {
  return (
    <div className='container pt-20'>
        <h1 className='text-center prata-regular text-2xl'>We protect you in these industries</h1>
      <div>
        <div className='grid md:grid-cols-3 grid-rows-1 gap-10 mt-5'>
            <div className='bg-secondary-light p-10 h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='md:text-xl text-md'>Wines & spirit</p>
                <img className='w-60 rounded-xl' src={industries.wines} alt="" />
            </div>
            <div className='bg-secondary-light p-10 h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='md:text-xl text-md'>Licensing</p>
                <img className='w-60 rounded-xl' src={industries.licensing} alt="" />
            </div>
            <div className='bg-secondary-light p-10 h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='md:text-xl text-md'>Cosmetics</p>
                <img className='w-60 rounded-xl' src={industries.cosmetics} alt="" />
            </div>
            <div className='bg-secondary-light p-10 h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='md:text-xl text-md'>Baby nutrition</p>
                <img className='w-60 rounded-xl' src={industries.babynutrition} alt="" />
            </div>
            <div className='bg-secondary-light p-10 h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='md:text-xl text-md'>Health care</p>
                <img className='w-60 rounded-xl' src={industries.healthcare} alt="" />
            </div>
            <div className='bg-secondary-light p-10 h-64 rounded-2xl text-primary-light space-y-5'>
                <p className='md:text-xl text-md'>Agricultural products</p>
                <img className='w-60 rounded-xl' src={industries.agriculture} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Industries
