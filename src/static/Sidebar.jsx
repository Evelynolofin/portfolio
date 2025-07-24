import React from 'react'
import { LuAlignJustify } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Sidebar = ({handleTogger}) => {
  return (
    <div>
      <ul className="text-[#D91F50] flex flex-col items-center justify-center gap-6">
        <Link onClick={handleTogger} to="/Home">
          <li>Home</li>
        </Link>
        <Link onClick={handleTogger} to="/about">
          <li>About Me</li>
        </Link>
        <Link onClick={handleTogger} to="/services">
          <li>Services</li>
        </Link>
        <Link onClick={handleTogger} to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link onClick={handleTogger} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar
