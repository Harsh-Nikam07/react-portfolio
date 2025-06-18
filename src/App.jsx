import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Exp from './components/Exp';
import Contact from './components/Contact';
import Dock from './components/Dock';
import Projects from './components/ComProjects/Projects';
import Skills from './components/Skills';
import Lenis from 'lenis';
import Spline from '@splinetool/react-spline';
import './assets/css/main.css';
import Footer from './components/Footer';

const Separator = () => <div className="w-2 h-full bg-black"></div>;

const App = () => {
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);


  return (
    <div className='relative overflow-x-hidden h-full w-full parent-b text-black selection:bg-purple-500 selection:text-black'>
      {/* Background grid layer */}
      <div className="fixed top-0 left-0 h-full w-full z-[-1] bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Your content */}
      <div className='container mx-auto px-8'>
        <Dock />
      </div>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Exp />
      <Footer />
    </div>

  );
};

export default App;


<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>