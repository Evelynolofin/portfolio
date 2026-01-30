import React, { useState, useEffect } from 'react'
import { LuAlignJustify } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Button from '../Components/reuseable/Button';

const Sidebar = ({handleTogger}) => {

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
     { name: "Services", to: "#services" },
    { name: "Portfolio", to: "#portfolio" },
    { name: "Contacts", to: "#contacts" },
    { name: "Skills", to: "#skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 60);

      const sections = navItems.map((item) => item.to.replace("/#", ""));
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY <= bottom) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <div className="fixed top-65 left-9/12 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-[#1a1a1a] rounded-lg shadow-2xl px-8 py-6 hidden max-md:block">
      <ul 
        className="text-[#f0a6ba] flex flex-col items-center justify-center gap-6"
      >
        <a href="#Home" className="cursor-pointer hover:text-[#D91F50] transition-colors">Home</a>
        <a href="#About" className="cursor-pointer hover:text-[#D91F50] transition-colors">About</a>
        <a href="#services" className="cursor-pointer hover:text-[#D91F50] transition-colors">Services</a>
        <a href="#portfolio" className="cursor-pointer hover:text-[#D91F50] transition-colors">Portfolio</a>
        <a href="#skill" className="cursor-pointer hover:text-[#D91F50] transition-colors">Skills</a>
        <a href="#contacts" className="cursor-pointer hover:text-[#D91F50] transition-colors">Contacts</a>
        <a href="https://drive.google.com/file/d/1fT-EshrWHHFO0wO7kKMv1tOZ0Mfl0fh2/view?usp=drivesdk">
          <Button 
            title="Download Resume" 
            textColor="#D91F50" 
            bgColor="#f0a6ba" 
          />
        </a>
      </ul>
    </div>
  );
}

export default Sidebar