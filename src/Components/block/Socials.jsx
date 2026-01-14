import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <div>
      <hr />

      <div className="flex justify-center text-[38px] mt-[20px] gap-3">
        <a href="https://github.com/Evelynolofin"
          className='transition-all duration-300 hover:scale-105'
        >
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/evelynolofin"
          className='transition-all duration-300 hover:scale-105'
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Socials
