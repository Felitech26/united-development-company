import React from 'react'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import {project1, project14, project2, project3, project6, project7, project9, second } from '@/public/assets'
import {Pagination, Scrollbar, Autoplay } from 'swiper/modules';

// framer motion
import { motion }  from 'framer-motion';
import { fadeIn } from '../variants';

// import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {FaFacebookSquare} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {PiInstagramLogoFill} from 'react-icons/pi'


const Banner = () => {
  return (
    <section
    id='home'
    className='max-w-contentContainer mx-auto px-3 pt-[8rem] lg:pt-[10rem]'>
      <div className='xl:flex justify-between'>
        <motion.div
         variants={fadeIn('left', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden">
        <Swiper 
   modules={[ Autoplay]}
   slidesPerView={1}
   
  
   autoplay={true}
  className='h-[310px] sm:h-[430px] md:h-[520px] lg:h-[580px] md:w-[600px] lg:w-[750px] cursor-pointer'
   >
    
  <div>
  <SwiperSlide>
    <div>
    <Image src={project9} alt='' />
    
    </div>
    
  </SwiperSlide>

  <SwiperSlide>
    <div >
    <Image src={project14}  alt='' />
    </div>
    
  </SwiperSlide>

  <SwiperSlide>
    <div>
    <Image src={project6} alt='' />
    </div>
    
  </SwiperSlide>

 
  </div>

   </Swiper>
        </motion.div>
        <motion.div 
        className='xl:mt-40'
         variants={fadeIn('up', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden">
        <div>
          <div className='sm:mt-3 md:text-secondary gap-3'>
          <p className='font-titleFont text-2xl md:text-4xl font-semibold'>Let's Build</p>
          <p className='font-titleFont text-2xl md:text-4xl font-semibold'>Your Dream Home</p>
          <p className='font-titleFont text-1xl md:text-4xl font-semibold'>Professionally</p>
          </div>
         
          <div className='hidden lg:inline-block text-1xl text-[#0c1f0d] font-medium mt-3 mb-6'>
          <p>We only take your comfort at heart</p>
          <p>Quality Service is Our Hallmark</p>
          </div>

      <div className='text-3xl flex flex-row gap-3 mt-9 cursor-pointer'>
      <FaFacebookSquare />
       <PiInstagramLogoFill />
        <FaSquareXTwitter/>


      </div>
          
      
        </div>
      </motion.div>

      </div>
     

   

      
    </section>
  )
}

export default Banner   