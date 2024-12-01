import React from 'react'
import Button from '../components/Button'

const Demo = () => {
  return (
    <section className='text-center bg-dp-gradient rounded-[36px]'>
      <div>
        <h2 className='text-white text-5xl lg:pt-[70px] lg:mx-[500px] lg:leading-[64px] font-semibold mb-4 max-md:pt-10 max-md:text-2xl'>Ready to Secure Your Patient Data?</h2>
        <p className='text-slate-gray mb-8 max-md:mx-8'>Start your 30-day free trial today. No credit card required.</p>
        <Button label="Book a Demo" padding className="bg-purple-gradient max-md:mb-10"/>
      </div>
    </section>
  )
}

export default Demo
