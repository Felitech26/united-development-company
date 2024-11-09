import React from 'react'
import Image from 'next/image'
import { construction, decor, land, project7,  registration, surveying } from '@/public/assets'
// framer motion
import { motion }  from 'framer-motion';
import { fadeIn } from '../variants';

const Services = () => {
  return (
    <section
    id='services'
    className='max-w-contentContainer mx-auto px-4 pt-24 '>
 <div className='w-full flex flex-col mb-5 gap-1 items-center'>
  <motion.h2 
   variants={fadeIn('down', 0.3)}
   initial="hidden"
   animate="show"
   exit="hidden"
  className='text-2xl font-semibold font-titleFont'>Our Services</motion.h2>
 
 </div>
 <div className='grid grid-cols md:grid-cols-3 mt- gap-5 md:gap-14 cursor-pointer'>
 <div className='flex flex-col gap-5 items-center hover:-translate-y-4 transition-transform duration-300'>
     <Image 
     className='rounded-sm'
     src={surveying} alt='surveying'/>

      <h1 className="font-titleFont text-secondary font-medium  
          ">Land Surveying</h1>
      </div>

      <div className='flex flex-col gap-5 items-center hover:-translate-y-4 transition-transform duration-300'>
     <Image 
     className='rounded-sm'
     src={project7} alt='project7'/>

      <h1 className="font-titleFont text-secondary font-medium 
          ">Real Estate Development</h1>
      </div>

      <div className='flex flex-col gap-5 items-center hover:-translate-y-4 transition-transform duration-300'>
     <Image 
     className='rounded-sm'
     src={construction} alt='construction'/>

      <h1 className="font-titleFont text-secondary font-medium 
          ">General Construction</h1>
      </div>

      <div className='flex flex-col gap-5 items-center hover:-translate-y-4 transition-transform duration-300'>
     <Image 
     className='rounded-sm'
     src={registration} alt='registration'/>

      <h1 className="font-titleFont text-secondary font-medium 
          ">Land Registration</h1>
      </div>

      <div className='flex flex-col gap-5 items-center hover:-translate-y-4 transition-transform duration-300'>
     <Image 
     className='rounded-sm'
     src={decor} alt='decor'/>

      <h1 className="font-titleFont text-secondary font-medium  
          ">Interior Decor</h1>
      </div>

      <div className='flex flex-col gap-5 items-center hover:-translate-y-4 transition-transform duration-300'>
     <Image 
     className='rounded-sm'
     src={land} alt='land'/>

      <h1 className="font-titleFont text-secondary font-medium 
    ">Sales of Land</h1>
      </div>   
 </div>
</section>
  )
}

export default Services