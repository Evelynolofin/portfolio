import React from 'react'
import CSS from "./../../assets/css.svg";
import GIT from "./../../assets/git.svg";
import GitHub from "./../../assets/github.png";
import HTML from "./../../assets/Html.svg";
import JS from "./../../assets/JavaScript-Icon.svg";
import Json from "./../../assets/json.svg";
import Lucide from "./../../assets/lucide.png";
import MongoDB from "./../../assets/mongo.png";
import NodeJs from "./../../assets/nodejs.svg";
import ReactIcon from "./../../assets/react-icon.svg";
import Tailwind from "./../../assets/tailwind.png";
import TS from "./../../assets/Typescript.svg";
import VS from "./../../assets/vs.svg";
const Skill = () => {
  const skills = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JS },
    { name: "TypeScript", icon: TS },
    { name: "React", icon: ReactIcon },
    { name: "React Native", icon: ReactIcon },
    { name: "Expo Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Node.js", icon: NodeJs },
    { name: "MongoDB", icon: MongoDB },
    { name: "Git", icon: GIT },
    { name: "GitHub", icon: GitHub },
    { name: "Visual Studio Code", icon: VS },
    { name: "JSON", icon: Json },
    { name: "Lucide Icons", icon: Lucide },
  ]
  return (
    <div id="skill">
      <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[30px] max-md:text-[28px] max-md:pb-[20px]">
        Skills
      </h1>

      <p className="text-[#f0a6ba] mb-5 mt-4 text-lg max-md:text-sm max-md:mt-3">
          Technologies and tools I use to bring ideas to life
      </p>

      <main className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-md:gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-transparent hover:bg-[#f0a6ba]/5 transition-all duration-300 hover:scale-110 hover:shadow-lg group max-md:p-4"
          >
            <div className="mb-3 flex items-center justify-center h-16 w-16 max-md:h-12 max-md:w-12">
              <img
                src={skill.icon}
                alt={skill.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:rotate-6"
              />
            </div>

            <span className="text-[#f0a6ba] text-sm font-medium text-center max-md:text-xs">
              {skill.name}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Skill
