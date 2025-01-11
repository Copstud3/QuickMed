import React from 'react'
import { howItWorks } from '../constants'
import WorkCard from '../components/WorkCard'

const HowItworks = () => {
  return (
    <section className='text-center py-10 mx-10' id='howItWorks'>
      <div>
        <h2 className='text-[36px] text-navy tracking-[-1%] font-[600]'>How It Works</h2>
        <p className='text-slate-gray mt-4'>Simple Steps to Create and Save Patient Documents in Minutes</p>
      </div>
      <div className="mt-16 grid md:grid-cols-2 gap-[36px] md:max-w-2xl mx-auto xl:max-w-4xl">
        {howItWorks.map((work)=> (
            <WorkCard key={work.name} {...work}/>
        ))}
      </div>
    </section>
  )
}

export default HowItworks
