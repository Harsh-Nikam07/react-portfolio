import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <>
        <div className='group w-full h-full flex justify-center items-center flex-col md:p-7 pt-4  mb-10 md:mb-0 border-t-[0.5px] border-[hsl(265,100%,27%)]'>
        <div className='w-3/5 h-full flex justify-center items-center flex-col  '>
            <div className='w-full md:h-[4rem] h-full text-white flex justify-between items-center md:flex-row flex-col md:gap-4 gap-4'>

            <a href="mailto:harshnikam4536@gmail.com" className='card example-1 '>
                <button className=' w-fit flex justify-center items-center gap-2 py-2 px-3 text-sm sm:text-base rounded-full text-white inner'>
                    <span>Contact me</span>
                    <MdOutlineArrowOutward className='text-lg sm:text-base group-hover:transform group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-2'/>
                </button>
            </a>


                <div
                        className='socials flex justify-center items-center gap-3  '>
                        <a href="https://github.com/Harsh-Nikam07" target='_blank' className='w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]'>
                            
                            <TbBrandGithubFilled className="text-white md:text-base text-xs" />
                        </a>
                        <a href="https://www.linkedin.com/in/harshnikam/" target='_blank' className='w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]'>
                            <FaLinkedinIn className="text-white md:text-base text-xs w-4 h-4" />
                        </a>
                        <a href="https://dribbble.com/Harsh_Nikam" target='_blank' className='w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]'>
                            <FaDribbble className="text-white md:text-base text-xs w-4 h-4" />
                        </a>
                    </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Footer