import React, { useEffect, useState } from 'react'
import Title from './Title'
import { products } from '../assets/assets'

const Ourproducts = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => 
        (prev + 1) >= Object.keys(products).length ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);


  const productKeys = Object.keys(products);

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
      
      <div className='overflow-hidden px-4'>
        <div className='flex transition-transform duration-500 ease-in-out'
             style={{ transform: `translateX(-${startIndex * (100/visibleItems)}%)` }}>
          {productKeys.map((key, index) => (
            <div key={key} className='flex-shrink-0 px-2' style={{ width: `${100/visibleItems}%` }}>
              <img className='w-full rounded object-cover aspect-square' src={products[key]} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ourproducts