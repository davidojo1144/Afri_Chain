import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const Dropdown = ({open}) => {
  return <AnimatePresence>
    {
        open && (
            <motion.div
            initial={{ opacity:0, y: -100 }}
            animate={{ opacity:1, y: 0 }}
            exit={{ opacity:0, y: -100 }}
            transition={{duration: 0.3}}
            className=' top-[8] left-0 w-full z-10'>

                <div className='bg-secondary text-primary text-md font-semibold uppercase py-10 m-6 shadow-xl rounded-3xl'>
                    <ul className='flex flex-col pl-10 justify-center gap-7'>
                        <div className='space-y-3'>
                            <li className='hover:text-primary-light cursor-pointer'>Register product</li>
                            <div className='border w-[90%] pr-10 bg-primary-dark'></div>
                        </div>
                        <div className='space-y-3'>
                            <li className='hover:text-primary-light cursor-pointer'>Sell Product</li>
                            <div className='border w-[90%] pr-10 bg-primary-dark'></div>
                        </div>
                        <div className='space-y-3'>
                            <li className='hover:text-primary-light cursor-pointer'>verify</li>
                            <div className='border w-[90%] pr-10 bg-primary-dark'></div>
                        </div>
                        <div className='space-y-3'>
                            <li className='hover:text-primary-light cursor-pointer'>about us</li>
                            <div className='border w-[90%] pr-10 bg-primary-dark'></div>
                        </div>
                        <div className='space-y-3'>
                            <li className='hover:text-primary-light cursor-pointer'>contact us</li>
                            <div className='border w-[90%] pr-10 bg-primary-dark'></div>
                        </div>
                    </ul>
                </div>
            </motion.div>
        )
    }
  </AnimatePresence>
}

export default Dropdown
