import React from 'react'
import {BiSolidRightArrow} from 'react-icons/bi'
import {IoMdCall} from 'react-icons/io'
import {HiOutlineMail} from 'react-icons/hi'
import Image from 'next/image'
import { whatsapp } from '@/public/assets'

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
      <div className='flex flex-col gap-16'>
       <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
       className='flex flex-row'>
        
        <h1 className='text-5xl ml-10 lg:ml-14 mr-5 mt-14'><IoMdCall /></h1>
        <span className="w-[1px] h-[140px] bg-secondary/20 font-thin inline-flex"></span>
        
        <div className='flex flex-col font-normal gap-2 ml-8 mt-4'>
        <p className='font-semibold'>Phone :</p>
        <a href="tel:+233247038355" >
         (+233) 24 703 8355</a>
         <a href="tel:+233244935771" >
         (+233) 24 493 5771</a>
         <a href="tel:+233202092232" >
         (+233) 20 209 2232</a>
        </div>  
       </motion.div>
       <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
       className='flex flex-row'>
        <h1 className='text-5xl ml-10 lg:ml-14 mr-5 mt-12'><HiOutlineMail/></h1>
        <span className="w-[1px] h-[140px] bg-secondary/20 font-thin"></span>
        <div className='flex flex-col font-medium gap-4 ml-8 mt-10'>
        <p className='font-semibold'>Email :</p>
        <a
        href="mailto:Uniteddevelopment83@gmail.com">
       <p>uniteddevelopment83@gmail.com</p></a>

       
       
        </div>  
       </motion.div>

       <motion.div
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
       className='flex flex-row'>
        <h1 className='text-5xl ml-10 lg:ml-14 mr-5 mt-6'> <Image src={whatsapp} alt='whatsapp' width={45}/></h1>
        <span className="w-[1px] h-[90px] bg-secondary/20 font-thin"></span>
        <div className='flex flex-col font-medium gap-4 ml-8 mt-6'>
        <a href="//wa.me/233244935771" target='_blank' className="px-4 py-2 rounded-xl text-secondary font-semibold text-[13px] border border-spacing-6
         hover:bg-gray-300 duration-300"><button
        >Send Message</button></a>
        
        </div>  
       </motion.div>
      
      
      </div>
    </div>
    </section>
  )
} 

export default Contacts;