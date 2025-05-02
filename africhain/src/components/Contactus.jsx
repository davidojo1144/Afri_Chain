import React from 'react'

const Contactus = () => {
  return (
    <div>
      <div className='container p-20 mt-20 mb-20 rounded-2xl text-secondary-light bg-primary-light'>
        <div className='flex md:flex-row flex-col gap-10'>
            <div className='space-y-5'>
                <p className='prata-regular md:text-3xl text-xl'>Any Questions?</p>
                <p>We would love to assist you!</p>
                <p>Schedule a meeting with our brand protection experts to start <br/>protecting your brand and increase your revenue. </p>
                <div>
                    <p>Send us an email or give us a call:</p>
                    <p>+49 6221 33507 10</p>
                </div>
            </div>
            <form action="">
                <div>
                    <input type="text" />
                    <input type="text" />
                </div>
                <input type="text" />
                <input type="text" />
                <textarea name="" id="" cols="30"></textarea>
                <button>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
