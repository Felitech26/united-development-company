import React from 'react'
import {BiSolidRightArrow} from 'react-icons/bi'
import Image from 'next/image'


// framer motion
import { motion }  from 'framer-motion';
import { fadeIn } from '../variants';

const Contacts = () => {
  return (
    <section id='contact'
    className='w-full mx-auto md:pl-40 lg:pl-20 xl:pl-60 py-32'>
    <h1 className='ml-3 mb-2 text-2xl font-semibold font-titleFont'>Get In Touch</h1>
    <div className='flex flex-col gap-2 mt-5 mb-9 ml-3'> 
       <p><BiSolidRightArrow/></p>
        <p className='font-medium'>United Development Company</p>
       </div>
    <div className='flex flex-col-reverse md:flex-col xl:flex-row gap-20 lg:gap-40'>
      <div className='ml-9'>
       
      <form >
    <motion.div
     variants={fadeIn('right', 0.4)}
     initial="hidden"
     animate="show"
     exit="hidden"
    >
    <div className='grid gap-6'>
  <input type="text" placeholder="Your Name" className='px-5 py-3 text-boder-bg-white
  border-2 outline-none bg-[#c2cdc444] w-[310px] sm:w-[340px] border-gray-200 font-titleFont' />

<input type="email" placeholder='Your Email' className='px-5 py-3 
  border-2 outline-none bg-[#c2cdc444] w-[310px] sm:w-[340px] border-gray-200 font-titleFont'/>

<input type="text" placeholder='Subject' className='px-5 py-3 
  border-2 outline-none bg-[#c2cdc444] w-[310px] sm:w-[340px] border-gray-200 font-titleFont'/>

<textarea placeholder='Your Message' className='px-5 py-3 
  border-2 outline-none bg-[#c2cdc444] w-[310px] sm:w-[440px] h-[220px] border-gray-200 font-titleFont'/>


</div>
</motion.div>
</form>

<a href="mailto:Uniteddevelopment83@gmail.com"><button
         className="mt-6 px-5 py-3 bg-secondary/95 text-white font-semibold rounded-xl
         hover:bg-primary duration-300">Send Message</button></a>
         
      </div>
     
    </div>
    </section>
  )
} 

export default Contacts;