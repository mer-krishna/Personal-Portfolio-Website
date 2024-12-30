import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About'; 
import SectionTital from '../../components/SectionTital';
import Projects from './Projects';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <Header />
      <div className='bg-[#0A192F] px-40 sm:px-5'>
        <Intro />
        <About />
       
        <SectionTital />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
