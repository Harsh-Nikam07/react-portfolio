import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiFirebase,
  SiFigma, SiExpo, SiFramer, SiAxios
} from 'react-icons/si';
import { TbBrandReactNative, TbUxCircle } from 'react-icons/tb';
import { MdDesignServices } from 'react-icons/md';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.05
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 }
    },
  };

  const skillGroups = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'React Native CLI', icon: <TbBrandReactNative /> },
        { name: 'Expo', icon: <SiExpo /> },
      ],
    },
    {
      title: 'Libraries & Tools',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Redux Toolkit', icon: <SiRedux /> },
        { name: 'React Navigation', icon: <TbBrandReactNative /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Axios', icon: <SiAxios /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Framer Motion', icon: <SiFramer /> },
      ],
    },
    {
      title: 'Design Tools & UX',
      skills: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Spline', icon: <MdDesignServices /> },
        { name: 'Responsive Design', icon: <TbUxCircle /> },
        { name: 'Wireframing', icon: <TbUxCircle /> },
        { name: 'Prototyping', icon: <TbUxCircle /> },
        { name: 'UX Process Flows', icon: <TbUxCircle /> },
        { name: 'User Flows', icon: <TbUxCircle /> },
      ],
    },
  ];

  return (
    <div className='min-h-screen py-14 flex justify-center items-center bg-transparent' id='skills'>
      <motion.div
        ref={ref}
        className='w-full max-w-6xl px-5 flex flex-col gap-10'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className='text-center'>
          <h2 className='md:text-4xl text-2xl font-semibold text-white'>Skills & Tech Stack</h2>
        </div>

        {/* Grid Layout for Skill Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              className='w-full h-full bg-[#12121293] border border-[#6200ee]/40 rounded-2xl p-6 shadow-md shadow-[#6200ee]/10'
              variants={containerVariants}
            >
              <h3 className='text-xl text-[#6200ee] font-medium mb-4'>{group.title}</h3>
              <motion.div className='flex flex-wrap gap-3'>
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={skillVariants}
                    className='flex items-center gap-2 py-2 px-4 rounded-full border border-[#6200ee] text-white text-sm hover:bg-[#6200ee]/60 transition-all duration-200'
                  >
                    <span className='text-lg'>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
