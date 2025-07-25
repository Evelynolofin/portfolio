import React from 'react'
import Hero from '../Components/block/Hero';
import About from '../Components/block/About';
import Portfolio from '../Components/block/Portfolio';
import Services from '../Components/block/Services';
import Skill from '../Components/block/Skill';


const Home = () => {
  return (
    <>
      <div id='Home'>
        <Hero/>
        <About/>
        <Portfolio/>
        <Services/>
        <Skill/>
      </div>
    </>
  );
}

export default Home
