import React from 'react'
import { RxCode, RxDesktop, RxMobile } from "react-icons/rx";

const Services = () => {
  const services =[
    {
      title: "Mobile Development",
      desc: "I develop mobile applications with React Native, delivering responsive and performant experiences on both Android and iOS. Your app will look and feel great on every screen size.",
      icon: <RxMobile className="size-[42px] text-[#f0a6ba] pb-[5px]" />
    },
    {
      title: "Frontend Development",
      desc: "I build interactive, responsive, and dynamic web interfaces using modern frontend technologies like React. My focus is on creating smooth user experiences that work flawlessly across all devices.",
      icon: <RxCode className="size-[42px] text-[#f0a6ba] pb-[5px]" />
    },
    {
      title: "Design & Redesign",
      desc: "I provide both design and redesign services to craft visually engaging, user-friendly websites that align with your brand's identity. Whether you're building from the ground up or refreshing an existing site, my goal is to enhance visual appeal, boost functionality, and deliver a seamless user experience.",
      icon: <RxDesktop className="size-[42px] text-[#f0a6ba] pb-[5px]" />
    }
  ]
  return (
    <div id="services" className="px-[50px] mb-[100px] max-md:px-[20px]">
      <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[30px] max-md:text-[28px] max-md:pb-[20px]">
        Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-6">
        {services?.map((service, i) => (
          <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border-2 border-[#f0a6ba] hover:shadow-lg transition-all duration-300 hover:scale-105 max-md:p-5">
            <div className='mb-6 p-4 rounded-full bg-[#f0a6ba]/10 max-md:mb-4 max-md:p-3'>
              {service.icon}
            </div>
            <h2 className="text-2xl text-[#f0a6ba] font-bold pb-4 max-md:text-xl">
              {service.title}
            </h2>
            <p className="text-[#f0a6ba] max-md:text-[14px]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
