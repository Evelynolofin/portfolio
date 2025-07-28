import React from 'react'
import Daily from './../../assets/Daily-page.jpeg'
import Coffee from './../../assets/coffe.jpeg'
import Cheese from './../../assets/cheesecake.jpeg'
import { data } from 'react-router-dom'
import Button from '../reuseable/Button'
import Moove from '../../assets/moove.png'
import Recipe from '../../assets/recipe.png'
import portfolio from '../../assets/portfolio.png'


const Portfolio = () => {
  const card = [
    {
      title: "Testimonial landing page replica",
      desc: "Drive it Own it",
      color: "text-[#D91F50]",
      image: `${portfolio}`,
      Live: "https://portfolio-lake-ten-13.vercel.app/",
      Github: "https://github.com/Evelynolofin/portfolio.git",
    },
    {
      title: "Daily needs landing page",
      desc: "Simplicity meets warmth",
      color: "text-[#D91F50]",
      image: `${Daily}`,
      Live: "https://dailygoods-landing-page.netlify.app/",
      Github: "https://github.com/Evelynolofin/dailygoods.git",
    },
    {
      title: "Coffe replica landing page",
      desc: "Indulge in every sip, experience the richness of coffee",
      color: "text-[#D91F50]",
      image: `${Coffee}`,
      Live: "https://evelynolofin.github.io/coffe-brocelle-replica/",
      Github: "https://github.com/Evelynolofin/coffe-brocelle-replica.git",
    },
    {
      title: "Cheesecake replica landing page",
      desc: "Bite The World of Cheesecake Wonder",
      color: "text-[#D91F50]",
      image: `${Cheese}`,
      Live: "https://cheesecake-landing-page-replica.netlify.app/",
      Github:
        "https://github.com/Evelynolofin/Cheesecake-landing-page-replica.git",
    },
    {
      title: "Moove replica landing page",
      desc: "Drive it Own it",
      color: "text-[#D91F50]",
      image: `${Moove}`,
      Live: "moove-replica-9egyky93a-evelyns-projects-8df8c631.vercel.app",
      Github: "https://github.com/Evelynolofin/Moove-replica.git",
    },
    {
      title: "Recipe page replica",
      desc: "Drive it Own it",
      color: "text-[#D91F50]",
      image: `${Recipe}`,
      Live: "https://recipe-page-8jpcq0q2s-evelyns-projects-8df8c631.vercel.app",
      Github: "https://github.com/Evelynolofin/recipe-page",
    },
  ];
  return (
    <div id="portfolio" className="px-[50px] mb-[150px] max-md:px-[30px]">
      <main>
        <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[20px] max-md:text-[28px] max-md:pb-[20px]">
          Portfolio Project
        </h1>
        <p className="text-[#f0a6ba] mb-5 max-md:text-[14px]">
          Developed with HTML, CSS and React, these designs are fully responsive across
          mobile and desktop devices.
        </p>
      </main>
      <section id='card' className=" grid grid-cols-3 max-md:grid-cols-1 gap-1">
        {card?.map((data, i) => (
          <div>
            <section className="flex flex-col rounded-2xl border-solid border-[#f0a6ba] border-2 max-md:mt-10 max-md:p-[10px]">
              <div>
                <img
                  src={data.image}
                  alt=""
                  className="w-[300px] h-[150px] rounded-2xl m-10
              max-md:w-[250px] max-md:h-[100px] max-md:m-0"
                />
              </div>
              <span>
                <h1 className="text-[1.25rem] text-[#f0a6ba] font-bold pb-[5px] max-md:text-[18px] max-md:pb-[8px] max-md:pt-10">
                  {data.title}
                </h1>
                <p className="text-[#f0a6ba] max-md:mb-5 px-[50px] max-md:px-0">
                  {data.desc}
                </p>
                <div className="mt-3 flex justify-center gap-3 items-center">
                  <a href={data.Live}>
                    <Button
                      title="Live Demo"
                      textColor="#D91F50"
                      bgColor="#f0a6ba"
                    />
                  </a>

                  <a href={data.Github}>
                    <Button
                      title="View Github"
                      textColor="#D91F50"
                      bgColor="#f0a6ba"
                    />
                  </a>
                </div>
              </span>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio
