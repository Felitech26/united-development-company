import { profile } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

// framer motion
import { motion }  from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
  return (
    <section id='about'
    className='w-full xl:max-w-contentContainer px-3 mx-auto pt-[7rem] lg:pt-[5rem] flex 
    flex-col gap-8 overflow-hidden'>
    
    <div className='flex flex-col lg:flex-row gap-[3rem] lg:gap-[2rem] justify-center'>
    <div className='flex flex-col lg:w-[60%] xl:w-[700px]'>
    <motion.h1 
    variants={fadeIn('down', 0.3)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className='text-2xl font-semibold  mb-5 font-titleFont'>About Us</motion.h1>
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='w-full text-base text-[#0c1f0d] font-medium flex flex-col gap-4'>
     <p>
     United Development is a construction company with a team of experienced and dedicated 
     professionals, who focuses on new technologies and innovations to create efficiency in building
     residential, commercial and industrial projects.
     A master-planned development which provides comfort, security and luxury for all our cherished clients.
     The company has built it's well respected reputation on hard work, integrity, a pro-active style of
     management and its dedication to customer satisfaction.
     
     </p>
     <p>
    Our Vision is to become one of the leading construction companies
    in Ghana and Africa. We visualize ourselves
    as being the prominent force, propelling the growth of path-breaking 
    construction of real estate developments with advanced technological solutions.
  
     </p>
     <p>
     The mission of United Development Company is to be a leader in
     providing innovative and luxurious developmental projects for all average Ghanaians. 
     With our competent and well dedicated team lead by Mr Osman Issaka (CEO) We will 
     always work professionally to provide absolute comfort and safety for all our clients.
     
  
     </p>

     
      </motion.div>
    </div>
   
    
      <motion.div
      variants={fadeIn('left', 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='w-full md:w-[700px] xl:mt-[50px] xl:w-[500px]'
      >
        <Image 
        src={profile} alt='profile'/>
      </motion.div>
    </div>
    </section>
  )
}

export default About