import React from 'react'
import Daily from './../../assets/Daily-page.jpeg'
import Coffee from './../../assets/coffe.jpeg'
import Cheese from './../../assets/cheesecake.jpeg'
import { data } from 'react-router-dom'

const Portfolio = () => {
  const card = [
    {
      title: "Daily needs landing page",
      desc: "Simplicity meets warmth",
      color: "text-[#D91F50]",
      image: `${Daily}`,
    },
    {
      title: "Coffe replica landing page",
      desc: "Indulge in every sip, experience the richness of coffee",
      color: "text-[#D91F50]",
      image: `${Coffee}`,
    },
    {
      title: "Cheesecake replica landing page",
      desc: "Bite The World of Cheesecake Wonder",
      color: "text-[#D91F50]",
      image: `${Cheese}`,
    },
  ];
  return (
    <div className="px-[50px] mb-[150px] max-md:px-[30px]">
      <main>
        <h1 className="text-[3.25rem] text-[#D91F50] font-bold pb-[20px] max-md:text-[28px] max-md:pb-[20px]">
          Portfolio Project
        </h1>
        <p className="text-[#D91F50] mb-5 max-md:text-[14px]">
          Developed with HTML and CSS, these designs are fully responsive across
          mobile and desktop devices.
        </p>
      </main>
      <section>
        {card?.map((data, i) => (
          <div className="flex justify-between items-center max-md:flex-col max-md:justify-center">
            <span>
              <h1 className="text-[1.25rem] text-[#D91F50] font-bold pb-[5px] max-md:text-[18px] max-md:pb-[8px] max-md:pt-10">
                {data.title}
              </h1>
              <p className="text-[#D91F50] max-md:mb-5">{data.desc}</p>
            </span>
            <div>
              <img src={data.image} alt="" className="w-[500px] h-[300px] rounded-2xl m-10
              max-md:w-[350px] max-md:h-[200px] max-md:m-0" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio
