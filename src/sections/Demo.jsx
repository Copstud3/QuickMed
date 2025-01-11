import React from 'react'
import Button from '../components/Button'

const Demo = () => {
  return (
    <section className='text-center bg-dp-gradient rounded-[36px] py-10 px-3 xl:py-20 xl:px-24 mx-10 xl:mx-[200px]'>
      <div className='flex flex-col justify-center items-center gap-3 -mb-20'>
        <h2 className='text-white text-2xl md:text-4xl xl:text-6xl md:font-medium'>Ready to Secure Your Patient Data?</h2>
        <p className='text-slate-gray'>Start your 30-day free trial today. No credit card required.</p>
        <Button label="Book a Demo" padding className="bg-purple-gradient"/>
      </div>
    </section>
  )
}

export default Demo
