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
  return (
    <div id="skill">
      <h1 className="text-[3.25rem] text-[#f0a6ba] font-bold pb-[30px] max-md:text-[28px] max-md:pb-[20px]">
        Skills
      </h1>
      <main className="flex mt-[150px] gap-10 justify-center flex-wrap">
        <img src={HTML} alt="" />
        <img src={CSS} alt="" />
        <img src={GIT} alt="" />
        <img src={GitHub} alt="" />
        <img src={VS} alt="" />
        <img src={Lucide} alt="" />
        <img src={JS} alt="" />
        <img src={Json} alt="" />
        <img src={TS} alt="" />
        <img src={ReactIcon} alt="" />
        <img src={Tailwind} alt="" />
        <img src={NodeJs} alt="" />
        <img src={MongoDB} alt="" />
      </main>
    </div>
  );
}

export default Skill
