import React from 'react'
import Hero from '../Components/block/Hero';
import About from '../Components/block/About';
import Portfolio from '../Components/block/Portfolio';
import Services from '../Components/block/Services';


const Home = () => {
  return (
    <>
      <div>
        <Hero/>
        <About/>
        <Portfolio/>
        <Services/>
      </div>
    </>
  );
}

export default Home
