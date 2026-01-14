import React from 'react'
import Daily from './../../assets/Daily-page.jpeg'
import Coffee from './../../assets/coffe.jpeg'
import Cheese from './../../assets/cheesecake.jpeg'
import { data } from 'react-router-dom'
import Button from '../reuseable/Button'
import Moove from '../../assets/moove.png'
import Recipe from '../../assets/recipe.png'
import portfolio from '../../assets/portfolio.png'
import mobile from '../../assets/mobile.png'
import BreetCares from '../../assets/BreetCares.png'
import AjoPay from '../../assets/AjoPay.png'


const Portfolio = () => {
  const card = [
    {
      title: "Boat Cruise mobile app",
      desc: "We've got your perfect boat for every adventure",
      color: "text-[#D91F50]",
      image: `${mobile}`,
      Github: "https://github.com/Evelynolofin/boatCruiseApp.git",
    },
    {
      title: "Breet Cares website",
      desc: "Empowering communities through care and connection",
      color: "text-[#D91F50]",
      image: `${BreetCares}`,
      Live: "https://breet-cares-4x7q.vercel.app/",
      Github: "https://github.com/Evelynolofin/BreetCares.git",
    },
    {
      title: "AjoPay website",
      desc: "Built the payment page in collaboration with a team as part of our capstone project for a financial savings app.",
      color: "text-[#D91F50]",
      image: `${AjoPay}`,
      Live: "https://ajo-pay.netlify.app/",
      Github: "https://github.com/midestic/Ajo.git",
    },
    {
      title: "Portfolio website",
      desc: "Showcasing creativity and code in perfect harmony",
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
      desc: "Delicious recipes at your fingertips",
      color: "text-[#D91F50]",
      image: `${Recipe}`,
      Live: "https://recipe-page-8jpcq0q2s-evelyns-projects-8df8c631.vercel.app",
      Github: "https://github.com/Evelynolofin/recipe-page",
    },
  ];
  return (
    <div id="portfolio" className="px-12 mb-36 max-md:px-6 max-md:mb-20">
      <main className="mb-12 max-md:mb-8">
        <h1 className="text-5xl text-[#f0a6ba] font-bold pb-5 max-md:text-3xl max-md:pb-4">
          Portfolio Project
        </h1>
        <p className="text-[#f0a6ba] text-lg leading-relaxed max-md:text-sm max-md:leading-normal">
          Designed and built with HTML, CSS, Javascript, TypeScript, React and React Native, these cross-platform 
          applications provide consistent, high-performance experiences across web, Android, and iOS platforms.
        </p>
      </main>

      <section id='card' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-5">
        {card?.map((data, i) => (
          <div key={i} className="flex h-full">
            <section className="flex flex-col rounded-2xl border-2 border-[#f0a6ba] p-6 w-full hover:shadow-lg transition-shadow max-md:p-4">
              <div className="mb-4 max-md:mb-3">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-48 object-cover rounded-xl max-md:h-40"
                />
              </div>

              <span className="flex flex-col flex-grow">
                <h2 className="text-xl text-[#f0a6ba] font-bold mb-3 max-md:text-lg max-md:mb-2">
                  {data.title}
                </h2>
                <p className="text-[#f0a6ba] mb-6 flex-grow text-base leading-relaxed max-md:text-sm max-md:mb-4 max-md:leading-normal">
                  {data.desc}
                </p>
                <div className="flex gap-3 mt-auto max-md:gap-2 max-md:flex-col">
                  <a  href={data.Live}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 max-md:w-full transition-all duration-300 hover:scale-110"
                  >
                    <div className="w-full">
                      <Button
                        title="Live Demo"
                        textColor="#D91F50"
                        bgColor="#f0a6ba"
                      />
                    </div>
                  </a>

                  <a  href={data.Github}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 max-md:w-full transition-all duration-300 hover:scale-110"
                  >
                    <div className="w-full">
                      <Button
                        title="View GitHub"
                        textColor="#D91F50"
                        bgColor="#f0a6ba"
                      />
                    </div>
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
