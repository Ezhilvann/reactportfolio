import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import pic3 from "./images/pic3.jpg";
import darkpic3 from "./images/pic3-Photoroom.jpg";
import {useContext} from "react";
import { themehandle } from "../App";

function Skills() {
  const dark=useContext(themehandle);
  const skills = [
    { image: <FaJava />, name: "Java", range: 65 },
    { image: <FaHtml5 />, name: "HTML", range: 80 },
    { image: <FaCss3Alt />, name: "CSS", range: 70 },
    { image: <FaNodeJs />, name: "JavaScript", range: 55 },
    { image: <GrMysql />, name: "Oracle SQL", range: 60 },
    { image: <SiTailwindcss />, name: "Tailwind", range: 70 },
    { image: <FaReact />, name: "React JS", range: 65 },
    { image: <FaSquareGithub />, name: "Git", range: 70 },
  ];

  return (
    <div className={`${dark?"bg-black text-white":"bg-white text-black"}`}>
        <div>
            <img src={dark?darkpic3:pic3} className="h-56 w-52"/>
            <p className="text-center text-2xl font-semibold text-[rgb(218,165,32)]">Skills</p>
        </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {skills.map((item, index) => {
        const radius = 40; 
        const circumference = 2 * Math.PI * radius; 
        const offset = circumference - (item.range / 100) * circumference; 

        return (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-24 h-24">
              <svg width="100" height="100" className="rotate-[-90deg]">
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="#e5e7eb" 
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold">{item.range}%</span>
              </div>
            </div>
            <div className="text-4xl text-blue-600">{item.image}</div>
            <span className="text-lg font-medium">{item.name}</span>
          </div>
        );
      })}
    </div>
    </div>);
}

export default Skills;
