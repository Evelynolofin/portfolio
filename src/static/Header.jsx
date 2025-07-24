import React, { useState } from 'react'
import App from '../App'
import Logo from './../assets/Elogo.png'
import Button from '../Components/reuseable/Button';
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Home from '../pages/Home';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {
   const [toggle, setToggle] = useState(false);

   const handleToggle =() => {
    setToggle(!toggle)
   };

  return (
    <>
      <div className="mb-[100px]">
        <main className="flex justify-between px-[30px] py-[10px] items-center">
          <nav>
            <img src={Logo} alt="logo" className="w-[60px]" />
          </nav>
          <ul className="text-[#D91F50] flex gap-6 max-md:hidden">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>Services</li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <section className="max-md:hidden">
            <Button
              title="Connect With Us"
              textColor="#fff"
              bgColor="#D91F50"
            />
          </section>

          <section className="hidden max-md:block">
            {toggle ? (
              <RxCross2
                onClick={handleToggle}
                className="size-[38px] text-[#D91F50]"
              />
            ) : (
              <RxHamburgerMenu
                onClick={handleToggle}
                className="size-[38px] text-[#D91F50]"
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
