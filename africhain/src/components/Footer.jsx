import React from 'react'
import '../index.css'
import {footerContent} from "../assets/assets.js";
const Footer = () => {
  return (
    <div className={'footer'}>
      <section>
        {
          footerContent.map((data,index)=>(
            <div className={'px-[10px] py-[10px]'} key={ index}>
                <h5>{data.header}</h5>
                <article className='flex flex-col justify-start items-start'>
                  {
                    data.body.map((props,index)=>(
                        <p key={index}>{props}</p>
                    ))
                  }
                </article>
              </div>
          ))
        }
      </section>
      <div className={'w-full flex justify-center border-t-[1px] border-gray-100 mt-[20px]'}>
        <p className={'text-[0.75rem] pt-[5px]'}>&copy; 2025 All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
