import React from 'react';
import harshDevAboutImg from "../assets/harshDevAboutBg.png";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div
      id="About"
      ref={ref}
      className="min-h-screen py-20 px-5 bg-transparent flex items-center justify-center"
    >
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row gap-10 items-center justify-between"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Text Section */}
        <motion.div
          className="w-full md:w-3/5 flex flex-col items-start gap-6"
          variants={contentVariants}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            About Me
          </h2>

          <p className="text-white leading-8 text-justify">
            I&apos;m <span className="font-semibold text-purple-400">Harsh Nikam</span>, a{" "}
            <span className="border-b-2 font-medium border-purple-500">Frontend Developer</span>{" "}
            and{" "}
            <span className="border-b-2 font-medium border-purple-500">UI/UX Designer</span> dedicated
            to crafting intuitive and engaging web applications. With strong expertise in{" "}
            <span className="bg-[#6200ee] px-4 py-1 rounded-full font-medium">
              Developing and Designing Cutting Edge Web Solutions
            </span>
            , I excel in solving complex problems with clean, efficient code and innovative design solutions.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          variants={contentVariants}
        >
          <img
            src={harshDevAboutImg}
            alt="Harsh Nikam - Developer"
            className="w-56 md:w-64 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
