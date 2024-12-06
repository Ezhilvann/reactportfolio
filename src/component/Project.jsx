import React, { useContext } from "react";
import git1 from "./images/git1.png";
import pic2 from "./images/pic2.jpg";
import darkpic2 from "./images/pic2-Photoroom.jpg";
import crud from './images/crud.png';
import advice from './images/advive.png';
import leet from './images/leet.png';
import user from './images/user.png';
import '../App.css';
import { themehandle } from "../App";

function Project() {
  const project = [
    {
      img: git1,
      name: "Guest-Room Booking",
      link: 'https://github.com/Ezhilvann/guestroombooking',
    },
    {
        img: crud,
        name: "CRUD-REACT",
        link: 'https://github.com/Ezhilvann/CRUD-React',
      },
      {
        img: user,
        name: "User-Profile Management",
        link: 'https://github.com/Ezhilvann/userprofilemanagemeent',
      },
      {
        img: leet,
        name: "Leetcode-SQL",
        link: 'https://github.com/Ezhilvann/leetcodeSQL',
      },
      {
        img: git1,
        name: "React-Form Validation",
        link: 'https://github.com/Ezhilvann/Form-validation-React',
      },
      {
        img: advice,
        name: "Advice-React app",
        link: 'https://github.com/Ezhilvann/Adive-React',
      },
  ];

  const dark = useContext(themehandle);  // Fetch the context for dark mode

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"}`}>
      <div>
        <img src={dark?darkpic2:pic2} alt="Profile" className="h-56 w-52" />
        <p className="text-center text-yellow-500 font-bold text-3xl mb-3 -mt-2">Projects</p>
      </div>
      
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {project.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-800 text-white flex items-center justify-center">
                <p>{item.name}</p>
              </div>
              <div className="flip-card-back bg-gray-500 flex flex-col items-center justify-center">
                <img src={item.img} alt="Project" className="h-68 w-68 bg-cover" />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
