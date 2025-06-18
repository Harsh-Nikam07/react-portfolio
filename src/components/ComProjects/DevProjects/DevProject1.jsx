import React from 'react';
import { IoIosLink } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

import prodOneThumnail from "../assets/projects/project-1.png"  //portfolio
import projectTwoThumnail from "../assets/projects/project-2.jpg"  //eduweb
import projectThreeThumnail from "../assets/projects/project-3.jpg" //e-comm
import projectFourThumnail from "../assets/projects/project-4.jpg"  //Sumz
import projectFiveThumnail from "../assets/projects/project-5.png"  //Tripster.ai

import { motion } from 'framer-motion';


const DevProjects = () => {

  const linkVariants = {
    hover: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    },
    initial: {
      opacity: 1,
      y: 10
    }
  };

  const projects = [
    {
      href: "https://tripster-ai.vercel.app/",
      thumbnail: projectFiveThumnail,
      title: "Tripster.ai - AI Trip Planner",
      description: "AI-powered travel planning app using React, Google Gemini AI, Firebase Firestore, and Google APIs.",
      tech: ["React", "Shadcn", "Firebase", "Google Places API", "Google OAuth"]
    },
    {
      href: "https://github.com/Harsh-Nikam07/Path-Tracker",
      thumbnail: prodOneThumnail,
      title: "Path Tracker",
      description: "A real-time route tracking app — ideal for runners, hikers, and cyclists to record their journeys.",
      tech: ["React Native", "Expo", "Node.js", "MongoDB", "AsyncStorage"]
    },
    {
      href: "https://articlesummarizer-npe9xyr3j-harsh-nikam07s-projects.vercel.app/",
      thumbnail: projectFourThumnail,
      title: "Sumz - AI Article Summarizer",
      description: "An Article Summarizer which summarizes long articles using OpenAI GPT-4 Model and Redux Toolkit",
      tech: ["React", "Vite", "Tailwind Css", "Redux Tool Kit", "Rapid API"]
    },
    // {
    //   href: "https://harshnikam-harsh-nikam07s-projects.vercel.app/",
    //   thumbnail: prodOneThumnail,
    //   title: "Personal Portfolio Website",
    //   description: "Designed and developed this project to showcase my Skills and Projects with a clean and modern UI",
    //   tech: ["React", "Vite", "Tailwind Css", "Framer Motion", "Spline"]
    // },
    {
      href: "https://vibetara.com/",
      thumbnail: projectThreeThumnail,
      title: "E-commerce Application UI",
      description: "Crafted engaging and interactive UIs using 3D models to display featured products",
      tech: ["HTML", "CSS", "JavaScript", "Spline"]
    },
    // {
    //   href: "https://harsh-nikam07.github.io/EDUWEB-E-learning-website/",
    //   thumbnail: projectTwoThumnail,
    //   title: "Educational Website UI",
    //   description: "Designed and developed an educational website landing page showcasing courses and team members.",
    //   tech: ["HTML", "CSS", "JavaScript"]
    // }
  ];
  return (
 

    <div className='w-full h-full flex justify-center items-center flex-row flex-wrap gap-8'>
      {
        projects.map((project, index) =>{
          
          return (
            <>
             
              <motion.a 
                key={index}
                href={project.href}
                target='_blank'
                className='w-full md:w-[34rem] h-full md:h-fit lg:h-fit flex justify-between items-center flex-row flex-wrap gap-5 bg-black p-5 border border-black text-white  hover:border hover:border-[#6200ee] rounded-3xl transition-all duration-1200 ease-out'
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
        
              <div className='ProdImage w-full  p-2 '>
                  <motion.img 
                  className='rounded-lg'
                    src={project.thumbnail} 
                    alt={project.title} 
                    variants={{
                      rest: { rotate: 0 },
                      // hover: {  translateX: -5, translateY:-5, scale:1.1, rotate:4 }
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              <div className='ProdDetails w-full flex justify-start items-start flex-col gap-4'>
              <div className='ProdTitle h-full md:h-[2.5rem] lg:h-[2.5rem] flex justify-center items-center flex-row gap-2'>
              <motion.a
                href={project.href}
                target='_blank'
                className='w-full flex justify-start items-center flex-row flex-wrap gap-1 transition-all link group'
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                <motion.span
                  className='text-xl font-medium'
                  variants={itemVariants}
                >
                  {project.title}
                </motion.span>
                <motion.span
                  className='text-xl font-medium'
                  variants={itemVariants}
                >
                  <MdArrowOutward />
                </motion.span>
              </motion.a>
            </div>
        
                <div className='ProdDesc'>
                  <span className='text-sm'>{project.description}</span>
                </div>
                <div className='ProdTech w-full flex justify-start items-center flex-row flex-wrap gap-2'>
                  {
                    project.tech.map((tech, techIndex) => {
                      return(
                        <div key={techIndex} className='skill-heroS  flex justify-center items-center gap-2 py-1 px-3 text-base rounded-full font-normal text-white border-2 border-[#6200ee] hover:bg-[#6200ee]'>
                          <span className='text-xs'>{tech}</span>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
        
          </motion.a>
             
            
            </>
        
          );
        })
      }
    </div>
  );
}

export default DevProjects;
