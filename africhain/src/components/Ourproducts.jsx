import React from 'react'
import Title from './Title'
import { products } from '../assets/assets'

const Ourproducts = () => {
  return (
    <div className='container pt-20 pb-10'>
        <div className='mb-10'>
            <div className='text-2xl text-center'>
                <Title text1={"OUR"} text2={"PRODUCTS"}/>
            </div>
            <p className="text-center max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
                Our cutting-edge, proven security solutions are engineered to deliver top-tier brand protection. Customizable to your exact needs, they seamlessly adapt to your product and application demands.
            </p>
        </div>
      <div>
        <div className='flex md:flex-row flex-col space-x-5'>
            <img className='w-72 rounded' src={products.product1} alt="" />
            <img className='w-72 rounded' src={products.product2}  alt="" />
            <img className='w-72 rounded' src={products.product3}  alt="" />
            <img className='w-72 rounded' src={products.product4}  alt="" />
            <img className='w-72 rounded' src={products.product5}  alt="" />
            <img className='w-72 rounded' src={products.product6}  alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ourproducts
