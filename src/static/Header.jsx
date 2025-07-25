import React, { useState } from 'react'
import App from '../App'
import Logo from './../assets/Elogo.png'
import Button from '../Components/reuseable/Button';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Home from '../pages/Home';
import Sidebar from './Sidebar';

const Header = () => {
   const [toggle, setToggle] = useState(false);

   const handleToggle =() => {
    setToggle(!toggle)
   };

  return (
    <>
      <div
        id="home"
        className="mb-[100px] fixed top-0 left-0 w-[100vw] px-[50px] bg-black max-md:0"
      >
        <main className="flex justify-between py-[10px] items-center">
          <nav>
            <img src={Logo} alt="logo" className="w-[60px]" />
          </nav>
          <ul className="text-[#f0a6ba] flex gap-6 max-md:hidden">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contacts">Contacts</a>
            <a href="#skill">Skills</a>
          </ul>
          <section className="max-md:hidden">
            <a href="https://drive.google.com/file/d/1fT-EshrWHHFO0wO7kKMv1tOZ0Mfl0fh2/view?usp=drivesdk">
              <Button
                title="Download CV"
                textColor="#D91F50"
                bgColor="#f0a6ba"
              />
            </a>
          </section>

          <section className="hidden max-md:block">
            {toggle ? (
              <RxCross2
                onClick={handleToggle}
                className="size-[38px] text-[#f0a6ba]"
              />
            ) : (
              <RxHamburgerMenu
                onClick={handleToggle}
                className="size-[38px] text-[#f0a6ba]"
              />
            )}
          </section>
        </main>
      </div>

      <div>{toggle && <Sidebar handleToggle={handleToggle} />}</div>

      <Home />
    </>
  );
}

export default Header
