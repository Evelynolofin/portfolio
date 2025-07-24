import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <div>
      <hr />

      <div className="flex justify-center text-[38px] mt-[20px] gap-3">
        <a href="https://github.com/Evelynolofin">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/evelynolofin">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Socials
