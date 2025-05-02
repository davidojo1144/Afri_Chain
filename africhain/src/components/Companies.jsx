import React, { useEffect, useState } from 'react';
import { trustees } from '../assets/assets'


export default function Companies() {
    const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 3;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => 
        (prev + 1) >= Object.keys(trustees).length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [trustees]);
  const productKeys = Object.keys(trustees);
  
  return (
    <main className='flex flex-col justify-center items-center pt-[7rem] '>
      <p className='md:text-3xl text-xl font-medium text-[#1d513b] text-center pb-[20px]'>Companies that trust us</p>
      <div className='overflow-hidden px-[20px] py-[20px] sm:w-[85%]'>
              <div className='flex transition-transform duration-500 ease-in-out'
                   style={{ transform: `translateX(-${startIndex * (100/visibleItems)}` }}>
                {productKeys.map((key, index) => (

                  <div key={key} className='flex-shrink-0 px-2 h-[100px]' style={{ width: `${100/visibleItems}%` }}>
                    <img className='w-full h-full rounded object-cover object-contain' src={trustees[key]} alt={`Product ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>  
    </main>
  )
}