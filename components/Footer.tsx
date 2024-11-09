import React from 'react'
import Link from 'next/link'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'




const Footer = () => {
  return (
    <footer className='h-[50px] botton-0 sticky bg-secondary/95 text-white'>


       <div className='flex justify-between py-3 px-3'>
        
       <p className='md:ml-40 font-small sm:font-mediumm'> &copy; 2023 United Development Company </p>
        <Link href="#home" className='mr-3 text-3xl transition-300'><BsFillArrowUpCircleFill/></Link>
        </div> 
        
        
       
          
       
        
       
      
      
    </footer>
  )
}

export default Footer