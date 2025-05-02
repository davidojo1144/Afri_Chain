import React, { forwardRef, useContext } from 'react'
import { AfrichainContext } from '../context/AfrichainContext'

const Contactus = forwardRef(() => {

    const handleSubmit = (event)=> {
        event.preventDefault()
    }

    const {howItWorksRef} = useContext(AfrichainContext)


  return (
    <div>
      <div ref={howItWorksRef} className='container md:p-20 p-5 mt-20 mb-20 md:rounded-2xl text-secondary-light bg-primary-light'>
        <div className='flex md:flex-row flex-col gap-10'>
            <div className='md:space-y-5 space-y-2'>
                <p className='prata-regular md:text-3xl text-xl'>Any Questions?</p>
                <p>We would love to assist you!</p>
                <p>Schedule a meeting with our brand protection experts to start <br/>protecting your brand and increase your revenue. </p>
                <div>
                    <p>Send us an email or give us a call:</p>
                    <p>+49 6221 33507 10</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} action="">
                <div className='flex md:flex-row flex-col md:gap-10 gap-3 mb-5'>
                    <input className='rounded w-full text-black py-2 px-5 border border-gray-100 outline-none hover:border-primary-light focus:border-primary-dark' type="text" placeholder='First name' required/>
                    <input className='rounded w-full text-black py-2 px-5 border border-gray-100 outline-none hover:border-primary-light focus:border-primary-dark' type="text" placeholder='Last name' required/>
                </div>
                <div className='flex flex-col space-y-5'>
                    <input className='rounded text-black py-2 px-5 border border-gray-100 outline-none hover:border-primary-light focus:border-primary-dark' type="text" placeholder="Email address" required/>
                    <textarea className='rounded text-black py-5 px-5 border border-gray-100 outline-none hover:border-primary-light focus:border-primary-dark' type="text" placeholder="Message" name="" id="" cols="30" required></textarea>
                </div>
                <button className='py-2 px-4 bg-secondary-dark text-primary-dark rounded mt-5 hover:bg-secondary-light'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
})

export default Contactus
