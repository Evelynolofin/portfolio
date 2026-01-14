import React, { useEffect, useState } from 'react';
import Headshot from './../../assets/IMG.JPG';

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="px-12 py-0 mb-36 max-md:px-6 max-md:py-12 max-md:mb-20">
      <div id="About" className="mb-12 max-md:mb-8">
        <h1 
          className="text-5xl text-[#f0a6ba] font-bold pb-5 max-md:text-3xl max-md:pb-4"
        >
          About Me
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto max-md:gap-8">
        <div 
          className={`space-y-6 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#f0a6ba] to-transparent rounded-full max-md:hidden" />
            
            <p className="text-[#f0a6ba] text-lg leading-relaxed max-md:text-base max-md:leading-normal">
              Hi, I'm <span className="font-bold text-[#D91F50]">Olofin Evelyn</span>, a frontend and mobile developer with a strong passion for building clean, scalable, and user-centered digital products.
            </p>
            
            <p className="text-[#f0a6ba] text-lg leading-relaxed max-md:text-base max-md:leading-normal">
              With a background in Economics and a solid foundation in modern frontend technologies, I combine analytical thinking with creative problem-solving to deliver intuitive, high-performing web and mobile applications.
            </p>
            
            <p className="text-[#f0a6ba] text-lg leading-relaxed max-md:text-base max-md:leading-normal">
              I specialize in building responsive interfaces and reusable components using React, React Native, JavaScript, and Tailwind CSS, turning ideas into real, impactful products.
            </p>
            
            <p className="text-[#f0a6ba] text-lg leading-relaxed max-md:text-base max-md:leading-normal">
              I'm deeply committed to writing clean, maintainable code and crafting seamless user experiences that feel simple, fast, and reliable. Driven by continuous learning, collaboration, and impact-driven development, I enjoy creating solutions that simplify everyday processes for users and businesses alike.
            </p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end max-md:mt-25">
          <div 
            className={`relative transition-all duration-1000 delay-500 ${
              visible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-6'
            }`}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#f0a6ba]/20 to-[#D91F50]/20 rounded-3xl blur-2xl animate-pulse" />
            
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f0a6ba] to-[#D91F50] rounded-2xl opacity-75 animate-spin-slow" 
                 style={{ animationDuration: '8s' }} />
            
            <div className="relative overflow-hidden rounded-2xl border-4 border-[#f0a6ba] shadow-2xl group">
              <img
                src={Headshot}
                alt="Olofin Evelyn"
                className="w-full h-auto max-w-md object-cover transition-transform duration-700 group-hover:scale-110 max-md:max-w-sm"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#D91F50]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <p className="text-white text-xl font-bold max-md:text-lg">Frontend & Mobile Developer</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#f0a6ba]/30 rounded-full blur-xl animate-bounce" 
                 style={{ animationDuration: '3s' }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#D91F50]/30 rounded-full blur-xl animate-bounce" 
                 style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;