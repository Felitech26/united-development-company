import { logo, whatsapp } from '@/public/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import {MdOutlineClose} from "react-icons/md"
import { FaFacebookSquare} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {PiInstagramLogoFill} from 'react-icons/pi'

// framer motion
import { motion }  from 'framer-motion';
import { fadeIn } from '../variants';

const Navbar = () => {
  const ref = useRef<string | any>("")
  const [showMenu,setShowMenu]= useState(false);
  const handleScroll =(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
   e.preventDefault();
   setShowMenu(false);
   const href = e.currentTarget.href;
   const targetId = href.replace(/.*\#/, "");
   const elem = document.getElementById(targetId);
   elem?.scrollIntoView({
    behavior: "smooth",
   });
   // Update the class name of the clicked link
   const links = document.querySelectorAll(".nav-link")
   links.forEach((link) => {
    link.classList.remove("active")
   });
   e.currentTarget.classList.add("active");
 };

 function handleClick(e:any){
  if(e.target.contains(ref.current)){
    // do something with myRef.current
    setShowMenu(false);
  }
 }
  return (
    <div className='w-full h-20 fixed bg-white sm:h-[12vh] top-0 z-50 px-4 lg:px-1 xl:px-4'>
       <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div 
         variants={fadeIn('right', 0.2)}
         initial="hidden"
         animate="show"
         exit="hidden"
        className='flex w-[160px] md:w-[150px] lg:w-[160px] xl:w-[200px]'>
          <a href="#home" className='cursor-pointer'><Image src={logo} alt='logo'/></a>
          
         
      </motion.div>
      <div className='hidden lg:inline-flex justify-between gap-7'>
      <motion.ul 
       variants={fadeIn('down', 0.3)}
       initial="hidden"
       animate="show"
       exit="hidden"
      className='flex text[13px] gap-14 mr-40'>
         <Link href="#home"
         className='flex items-center gap-1 font-semibold text-secondary
         hover:text-primary cursor-pointer duration-300 nav-link'>
         <li>Home</li>
         </Link>

         <Link href="#about"
         className='flex items-center gap-1 font-semibold text-secondary
         hover:text-primary cursor-pointer duration-300 nav-link'>
         <li>About Us</li>
         </Link>

         <Link href="#services"
         className='flex items-center gap-1 font-semibold text-secondary
         hover:text-primary cursor-pointer duration-300 nav-link'>
         <li>Our Services</li>
         </Link>

         <Link href="#projects"
         className='flex items-center gap-1 font-semibold text-secondary
         hover:text-primary cursor-pointer duration-300 nav-link'>
         <li>Projects</li>
         </Link>

         <Link href="#contact"
         className='flex items-center gap-1 font-semibold text-secondary
         hover:text-primary cursor-pointer duration-300 nav-link'>
         <li>Contact</li>
         </Link>
         </motion.ul>

        
        <motion.div 
         variants={fadeIn('up', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
        className='md:inline-flex'>
        <a href="mailto:Uniteddevelopment83@gmail.com"
        className="px-4 py-2 bg-secondary/95 text-white font-semibold text-[13px] hover:text-secondary
        hover:bg-gray-300 duration-300">
         Get A Quote</a>
        </motion.div> 
         
      </div>

      
       
        {/* Small Icon section */}
        <motion.div 
         variants={fadeIn('down', 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
         onClick={()=>setShowMenu(true)}
        className='xl:hidden lg:hidden inline-flex w-6 h-5 flex-col justify-between items-center
        mdl:hidden text-4xl text-secondary cursor-pointer overflow-hidden group'>
        <span className='w-full h-[2px] bg-secondary inline-flex transform 
        group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
        <span className='w-full h-[2px] bg-secondary inline-flex transform 
        translate-x-3 group-hover:translate-x-0 transition-all ease-out duration-300'></span>
        <span className="w-full h-[2px] bg-secondary inline-flex transform
          translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </motion.div>
      

        {showMenu && (
            <div 
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute lg:hidden top-0 right-0 w-full h-screen
            bg-black bg-opacity-50 flex flex-col items-end"
            >
            <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration:0.1}}
            className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#ffffff] opacity-0
            flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose
              onClick={() => setShowMenu(false)}
              className="text-3xl text-textGreen cursor-pointer
              hover:text-primary absolute top-4 right-4" 
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                <Link className="flex items-center gab-1 font-medium
            hover:text-primary cursor-pointer duration-300 nav-link"
            href="#home"
            onClick={handleScroll}>
            <motion.li 
             initial={{ y: 20, opacity:0 }} 
             animate={{ y: 0, opacity:1 }}
             transition={{
               duration: 0.2,
               delay: 0.1,
               ease: "easeIn"}}>Home</motion.li></Link>

            <Link  className="flex items-center gab-1 font-medium 
            hover:text-primary cursor-pointer duration-300 nav-link"
            href="#about"
            onClick={handleScroll}
            >
            <motion.li
            initial={{ y: 20, opacity:0 }} 
            animate={{ y: 0, opacity:1 }}
            transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}>About Us </motion.li></Link>

            <Link  className="flex items-center gab-1 font-medium 
            hover:text-primary cursor-pointer duration-300 nav-link"
            href="#services"
            onClick={handleScroll}
            >
            <motion.li
            initial={{ y: 20, opacity:0 }} 
            animate={{ y: 0, opacity:1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}>
            Our Services</motion.li></Link>

            
            <Link  className="flex items-center gab-1 font-medium 
            hover:text-primary cursor-pointer duration-300 nav-link"
            href="#projects"
            onClick={handleScroll}
            >
            <motion.li
            initial={{ y: 20, opacity:0 }} 
            animate={{ y: 0, opacity:1 }}
            transition={{ duration: 0.4, delay: 0.4, ease:"easeIn" }}>
            Projects</motion.li></Link>
            

            <Link  className="flex items-center gab-1 font-medium 
            hover:text-primary cursor-pointer duration-300 nav-link"
            href="#contact"
            onClick={handleScroll}
            >
            <motion.li
            initial={{ y: 20, opacity:0 }} 
            animate={{ y: 0, opacity:1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
           Contact</motion.li></Link>
                </ul>
       
   <motion.div 
    variants={fadeIn('left', 0.3)}
    initial="hidden"
    animate="show"
    exit="hidden"
   className="flex text-3xl rounded-3xl mr-5 gap-3 ">
   <FaFacebookSquare />
   <PiInstagramLogoFill />
   <FaSquareXTwitter/>
      
    </motion.div>
    </div>
    <div className='flex flex-col gap-4'>
    <motion.a 
    variants={fadeIn('right', 0.4)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="text-sm mr-2 w-72 tracking-widest text-textGreen text-center mt-4"
    href="mailto:Uniteddevelopment83@gmail.com">
    <p>uniteddevelopment83@gmail.com</p>

    </motion.a>
    <motion.div 
    variants={fadeIn('up', 0.4)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className='flex flex-row ml-9 mt-1 font-titleFont font-medium gap-5' >
    <Image src={whatsapp} alt='whatsapp' width={40}/>
    <a href="//wa.me/233244935771" target='_blank' className="px-4 py-2 rounded-xl text-secondary font-semibold text-[13px] border border-spacing-6
         hover:bg-gray-300 duration-300"><button
        >Send Message</button></a></motion.div>
    
   
    </div>
   
    </motion.div>
  </div>
          )
        }
       </div>
    </div>

    
  )
}

export default Navbar