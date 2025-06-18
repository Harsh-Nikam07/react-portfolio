import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DevProjects from "./DevProjects/DevProject1"
import UxProjects from "./UiUxProjects/UxProject1"
import "./assets/css/devProjects.css"


const Projects = () => {
  const [activeTab, setActiveTab] = useState('Development');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const variants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Development':
        return <>


              <div className='w-full h-full flex justify-center items-center'>
              <DevProjects/>
              </div>
            
        
        </>;
      case 'UI / UX Design':
        return <>


              <UxProjects/>
   
        
        </>
      case 'backend':
        return <div>Backend Projects Content</div>;
      case 'fullstack':
        return <div>Fullstack Projects Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className='h-full w-full flex items-center justify-center mt-10 bg-transparent p-5' id='Projects'>
      <motion.div
        // ref={ref}
        className='heroParent w-full md:w-full  h-fit justify-center items-center flex-col  md:p-5 p-0 flex-wrap   rounded-lg '
        // initial="hidden"
        // animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        
        <div className='heroSubSection w-full flex items-center  justify-center flex-col gap-5 md:flex-col'>
          <div className='mainHeading flex justify-center items-center flex-col flex-wrap '>
            <span className='md:text-4xl text-2xl font-semibold text-white'>
              Projects
            </span>
          </div>
          <div className='tabs flex flex-wrap flex-row gap-0 md:gap-5 space-x-4 m-0 mt-4 md:mt-0 mb-5'>
            {['Development', 'UI / UX Design',].map((tab, index) => (
              <motion.button
                key={tab}
                className={`tabButton ${activeTab === tab ? 'active' : ''} px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === tab ? 'bg-[#6200ee] text-white ' : 'bg-black border-2 border-[#6200ee] text-white hover:bg-[#6200ee]'}`}
                onClick={() => setActiveTab(tab)}
                
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className='w-full mt-5'
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
