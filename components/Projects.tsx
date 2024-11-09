import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import {com, com4, project14, project2, project3, project4, project5, project8 } from '@/public/assets'
import {Navigation, Pagination, Scrollbar } from 'swiper/modules';

// framer motion
import { AnimatePresence, motion }  from 'framer-motion';
import { fadeIn } from '../variants';
import { fadeAnimation, slideAnimation } from '../motion';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Projects = () => {
  return (
    <section
    id='projects'
    className='max-w-contentContainer mx-auto px-3 pt-[6rem]'>
      <AnimatePresence>
     <div>
     <div className='flex flex-col gap-3 mb-10'>
      <motion.h1 
       {...slideAnimation('right')}
      className='text-2xl font-titleFont font-semibold'>Featured Projects</motion.h1>

      <motion.span 
      
     
      className="w-[192px] h-[1px] bg-secondary font-thin inline-flex"></motion.span>
      <motion.span className="w-[192px] h-[1px] bg-secondary font-thin inline-flex"></motion.span>
      
      <motion.p
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
       className='mt-3 w-[360px] sm-[400px] md-[520px]'>At United Development Company we undertake various projects ranging 
      from <span className='font-semibold'>Residential, Commercial, Institutional and Industrial.</span> </motion.p>
      
    </div>
    <div>
  <Swiper 
  breakpoints={{
    435: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 20
    }

  }}
   modules={[Pagination, Scrollbar]}
   pagination={{clickable: true}}
   scrollbar={{draggable: true}}
  className='h-[320px] sm:h-[420px] md:h-[370px] lg:h-[330px] cursor-pointer'
   >
    
  <div>
  <SwiperSlide>
    <div className='relative overflow-hidden flex items-center justify-center group'>
    <div className='flex items-center justify-center relative overflow-hidden'>
      <Image src={project4} width={500} height={3000} alt='' />
    <div className='absolute inset-0 bg-[#151816] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
      group-hover:xl:-translate-y-20 transition-all duration-300'>
        <div className='flex items-center text-white ml-3 mb-5 sm:mb-10 md:mb-12 lg:ml-1 text-[12px] font-bodyFont font-semibold md:font-medium md:text-2xl'>
         Executive Two Bedroom Duplex
        </div>
       </div>
    </div>
    </div>
  </SwiperSlide>



 

  <SwiperSlide>
    <div className='relative overflow-hidden flex items-center justify-center group'>
    <div className='flex items-center justify-center relative overflow-hidden'><Image src={com} width={500} height={300} alt='' />
    <div className='absolute inset-0 bg-[#151816] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
      group-hover:xl:-translate-y-20 transition-all duration-300'>
        <div className='flex items-center text-white mb-5 sm:mb-10 md:mb-12 lg:ml-6 text-[12px] font-bodyFont font-semibold md:font-medium md:text-2xl'>
         Institutional Office Space
        </div>
       </div>
    </div>
    </div>
  </SwiperSlide>


  <SwiperSlide>
    <div className='relative overflow-hidden flex items-center justify-center group'>
    <div className='flex items-center justify-center relative overflow-hidden'><Image src={project3} width={500} height={300} alt='' />
    <div className='absolute inset-0 bg-[#151816] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
      group-hover:xl:-translate-y-20 transition-all duration-300'>
        <div className='flex items-center text-white mb-5 sm:mb-10 md:mb-12 text-[12px] font-bodyFont font-medium md:text-2xl'>
          Three Bedroom Unit 
        </div>
       </div>
    </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className='relative overflow-hidden flex items-center justify-center group'>
    <div className='flex items-center justify-center relative overflow-hidden'><Image src={project8} width={500} height={300} alt='' />
    <div className='absolute inset-0 bg-[#151816] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
      group-hover:xl:-translate-y-20 transition-all duration-300'>
        <div className='flex items-center text-white mb-5 sm:mb-10 md:mb-12 text-[12px] font-bodyFont font-medium md:text-2xl'>
          Executive Four Bedroom Villa
        </div>
       </div>
    </div>
    </div>
  </SwiperSlide>

  

  <SwiperSlide>
    <div className='relative overflow-hidden flex items-center justify-center group'>
    <div className='flex items-center justify-center relative overflow-hidden'><Image src={com4} width={500} height={300} alt='' />
    <div className='absolute inset-0 bg-[#151816] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
      group-hover:xl:-translate-y-20 transition-all duration-300'>
        <div className='flex items-center text-white mb-5 sm:mb-10 md:mb-12 text-[12px] font-bodyFont font-medium md:text-2xl'>
          Commercial Retail Space
        </div>
       </div>
    </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className='relative overflow-hidden flex items-center justify-center group'>
    <div className='flex items-center justify-center relative overflow-hidden'><Image src={project5} width={500} height={300} alt='' />
    <div className='absolute inset-0 bg-[#151816] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10
      group-hover:xl:-translate-y-20 transition-all duration-300'>
        <div className='flex items-center text-white mb-5 sm:mb-10 md:mb-12 text-[12px] font-bodyFont font-medium md:text-2xl'>
          Three Bedroom Town House 
        </div>
       </div>
    </div>
    </div>
  </SwiperSlide>
 
  </div>

   </Swiper>
  </div>
     </div>
     </AnimatePresence>
 
    </section>
  )
}

export default Projects