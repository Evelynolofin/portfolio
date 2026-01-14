import React from 'react'
import { LuAlignJustify } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Button from '../Components/reuseable/Button';

const Sidebar = ({handleTogger}) => {
  return (
    <div>
      <ul className="text-[#f0a6ba] mt-[50px] flex flex-col items-center justify-center gap-6">
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contacts">Contacts</a>
        <a href="#skill">Skills</a>
        <a href="https://drive.google.com/file/d/1fT-EshrWHHFO0wO7kKMv1tOZ0Mfl0fh2/view?usp=drivesdk">
          <Button 
          title="Download Resume" 
          textColor="#D91F50" 
          bgColor="#f0a6ba" />
        </a>
      </ul>
    </div>
  );
}

export default Sidebar
