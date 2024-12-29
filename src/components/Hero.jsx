import React from 'react';
import { Link } from 'react-scroll';
// import harshDevProfile from "../assets/harshDevProfile.jpg";
import "../assets/css/hero.css";
import { motion } from 'framer-motion';
import { AiOutlineDownload } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { HiMiniArrowLongDown } from "react-icons/hi2";

const iconVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
};

const iconVariantsv2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
};

const onbuttonClick = () => {
    const pdfUrl = "/HarshNikamResume(23-12-2024).pdf"; 
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Harsh NikamCV(23-12-2024).pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = () => {
    return (
        <>
        <motion.section id='Hero' className='h-screen w-full flex items-center justify-center '
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.3 }}>

            <div className='heroParent flex w-full  h-full justify-center  items-center flex-col   flex-wrap gap-5'>

                {/* <div className='w-4/5 h-fit flex flex-col justify-center items-center'>
                    <div className='desc-chip'>
                        <span>Front - End Developer & UI / UX Designer  </span>
                    </div>
                </div> */}

                <div className="card example-1">
                    <div className="inner desc-chip">
                            <span>Front - End Developer & UI / UX Designer  </span>
                    </div>
                </div>

                <div className='w-4/5 h-fit flex flex-col justify-center items-center'>
                    <span className='font-semibold text-white main-heading'>Crafting Interactive and Engaging Digital Experiences</span>
                </div>


                <div className='w-fit h-fit  p-2 flex justify-center items-center flex-wrap flex-row gap-6'>
                            <Link to='Projects' spy={true} smooth={true} offset={-100} duration={1000} className='cursor-pointer'>
                                <motion.div
                                    variants={iconVariantsv2}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.1, duration: 0.3 }}
                                    className='contactBtn flex justify-center items-center gap-2  py-2 px-3 text-sm rounded-full  bg-[#6200ee] text-white font-semibold '>
                                        See Projects
                                        <HiMiniArrowLongDown />
                                </motion.div>
                            </Link>

                    <motion.div
                        variants={iconVariantsv2}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className='resumeBtn '>
                        <button className='flex justify-center items-center gap-2 py-2 px-3 text-sm rounded-full font-normal   bg-black border-2 border-[#6200ee] text-white  hover:border-[#bf00ff00]  hover:bg-[#6200ee] transition-all duration-200 ease-out'
                        onClick={onbuttonClick}
                        >
                            Download CV <AiOutlineDownload className='text-lg'/> 
                        </button>   
                        {/* <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-x-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Button Text</span>
                        </a> */}
                    </motion.div>

                    <motion.div
                        variants={iconVariantsv2}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className='socials flex justify-center items-center gap-3  '>
                        <a href="https://github.com/Harsh-Nikam07" target='_blank' className='w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]'>
                            <TbBrandGithubFilled className="text-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/harshnikam/" target='_blank' className='w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]'>
                            <FaLinkedinIn className="text-white w-4 h-4" />
                        </a>
                        <a href="https://dribbble.com/Harsh_Nikam" target='_blank' className='w-10 h-10 border-2 border-[#6200ee] flex justify-center items-center rounded-full hover:bg-[#6200ee]'>
                            <FaDribbble className="text-white w-4 h-4" />
                        </a>
                    </motion.div>






                </div>

            </div>

        </motion.section>

                </>
    )
};

export default Hero;
