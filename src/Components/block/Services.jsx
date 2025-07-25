import React from 'react'
import { RxLaptop, RxDesktop } from "react-icons/rx";

const Services = () => {
  return (
    <div id="services" className="px-[50px] mb-[100px] max-md:px-[20px]">
      <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[30px] max-md:text-[28px] max-md:pb-[20px]">
        Services
      </h1>
      <div className="flex gap-[50px] max-md:flex-col">
        <section>
          <div className="flex justify-center">
            <RxLaptop className="size-[42px] text-[#f0a6ba] pb-[5px]" />
          </div>
          <h3 className="text-[#f0a6ba] font-bold text-2xl pb-[5px]">
            Responsive
          </h3>
          <p className="text-[#f0a6ba] max-md:text-[14px]">
            I focus on building responsive designs that provide a smooth and
            consistent user experience across all devices. Whether it's a
            desktop, tablet, or smartphone, your website will adapt seamlessly
            to every screen size.
          </p>
        </section>
        <section>
          <div className="flex justify-center">
            <RxDesktop className="size-[42px] text-[#f0a6ba] pb-[5px]" />
          </div>
          <h3 className="text-[#f0a6ba] font-bold text-2xl pb-[5px]">
            Design & Redesign
          </h3>
          <p className="text-[#f0a6ba] max-md:text-[14px]">
            I provide both design and redesign services to craft visually
            engaging, user-friendly websites that align with your brand's
            identity. Whether you're building from the ground up or refreshing
            an existing site, my goal is to enhance visual appeal, boost
            functionality, and deliver a seamless user experience.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Services
