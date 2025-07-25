import React from 'react'
import Headshot from './../../assets/IMG.JPG'

const About = () => {
  return (
    <div
      id="About"
      className="px-[30px] opacity-100 animate-fadeInUp delay-100 pb-[100px] max-md:px-0"
    >
      <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[50px] max-md:text-[28px] max-md:pb-[20px]">
        About Me
      </h1>
      <section className="flex justify-between max-md:flex-col max-md:items-center">
        <main>
          <p
            className="text-[#f0a6ba] w-[600px] text-left animate-fadeInUp
          max-md:w-[300px] max-md:text-center
           max-md:text-[14px] max-md:pb-8"
          >
            Hi, I'm Olofin Evelyn, a software developer with a passion for
            building clean, scalable, and user-focused digital solutions. With a
            background in Economics and a strong foundation in frontend
            development, I bridge analytical thinking with creative
            problem-solving to craft applications that not only function
            flawlessly but also deliver intuitive, engaging user experiences.
            Currently deepening my skills in React, Tailwind CSS, and
            JavaScript, I enjoy turning ideas into real, working products
            components to dynamic, responsive web applications. I'm always eager
            to learn, iterate, and contribute to solutions that make life or
            business just a little easier. When I'm not coding, you'll likely
            find me listening to music, watching movies, or supporting others on
            their digital journey whether through mentorship, collaboration, or
            simply sharing what I've learned. I believe in growth, both in tech
            and in people, and I'm always excited to connect, create, and
            contribute.
          </p>
        </main>
        <main class="about">
          <img
            src={Headshot}
            alt="Image"
            className="h-[300px] w-[500px] rounded-xl shadow-lg animate-zoomIn delay-300 
            max-md:animate-none"
          />
        </main>
      </section>
    </div>
  );
}

export default About
