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
    <main className='flex flex-col justify-center items-center pt-[7rem] pb-[20px]'>
      <p className='text-[1.2rem] font-bold text-[#1d513b] text-center'>Companies that trust us</p>
      <div className='overflow-hidden px-4'>
              <div className='flex transition-transform duration-500 ease-in-out'
                   style={{ transform: `translateX(-${startIndex * (100/visibleItems)}%)` }}>
                {productKeys.map((key, index) => (
                  <div key={key} className='flex-shrink-0 px-2' style={{ width: `${100/visibleItems}%` }}>
                    <img className='w-full rounded object-cover aspect-square' src={trustees[key]} alt={`Product ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>  
    </main>
  )
}