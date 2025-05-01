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
                <div className='bg-blue-500 text-white text-sm font-semibold uppercase py-10 m-6 rounded-3xl md:hidden'>
                    <ul className='flex flex-col items-center justify-center  gap-7'>
                        <li>Upload product</li>
                        <li>Sell</li>
                        <li>About</li>
                        <li>About</li>
                    </ul>
                </div>
            </motion.div>
        )
    }
  </AnimatePresence>
}

export default Dropdown
