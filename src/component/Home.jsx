import React, { useState,useContext} from 'react';
import pic1 from './images/pic1.png';
import { GoHeartFill } from 'react-icons/go';
import { IoMdDownload } from "react-icons/io";
import resume from './Resume/Ezhil_B.Tech 7.8 2024 React.pdf';
import { themehandle } from '../App';

function Home() {
  const dark=useContext(themehandle);
  const storedColor = localStorage.getItem('colour') || ''; 
  const storedCount = localStorage.getItem('count') || 0; 

 
  const [drop, setDrop] = useState(Number(storedCount));
  const [iconColor, setIconColor] = useState(storedColor); 

  function handlecount() {
    const newColor = 'red'; 
    const newDrop = drop + 1; 
    setDrop(newDrop); 
    setIconColor(newColor); 

    
    localStorage.setItem('count', newDrop);
    localStorage.setItem('colour', newColor);
  }

  return (
    <div className={`flex flex-col justify-center items-center ${dark?"bg-black text-white":"bg-white text-black"}`}>
      <img
        src={pic1}
        alt="img"
        title="Ezhilvannan"
        className="cursor-pointer pl-10"
      />
      <p className="p-3 font-mono">Ezhilvannan.M</p>
      <div>
  <p className="p-2 mx-5 text-pretty sm:mx-14 font-mono hidden sm:block">
    As a Computer Science and Business Systems student, I am eager to apply my skills in problem-solving, creativity, and technology to contribute to the growth of the company. My academic background has provided me with a strong foundation in programming, software development, system design, and business operations, allowing me to approach challenges from both a technical and business perspective. I am particularly interested in software development, user experience design. I am committed to continuous learning to stay up-to-date with industry advancements and trends. Collaboration is key to my approach, as I have worked in team environments where effective communication, flexibility, and problem-solving were crucial to achieving success. I thrive under pressure and am confident in my ability to deliver high-quality results. I am excited about the opportunity to contribute to innovative projects and grow professionally within a company that values creativity and forward-thinking solutions.
  </p>
  <p className="p-2 mx-5 text-pretty sm:mx-14 font-mono sm:hidden">
  As a Computer Science and Business Systems student, I am eager to apply my skills in problem-solving, creativity, and technology to drive company growth. My academic background in programming, software development, system design, and business operations enables me to address challenges from both technical and strategic perspectives. I am passionate about software development, user experience design, and I prioritize continuous learning. Having worked in team environments, I value collaboration, communication, and adaptability to achieve shared goals. I am excited to contribute to innovative projects and grow professionally within a company that fosters creativity and forward-thinking solutions.
  </p>
</div>

      <p className="mt-4">-Words of Wisdom-</p>
      <p className="font-bold">If You Don't Take Risks, You Can't Create A Future</p>
      <p className="ml-32">- Monkey.D.Luffy</p>
      <a href={resume} download="resume"><button className="bg-blue-600 my-3 text-white px-4 py-2 flex justify-center items-center gap-3 rounded-md hover:bg-blue-500"><IoMdDownload />Download</button></a>
      <p className="text-slate-700">Drop Your's</p>
      <button
        className="text-2xl mt-2 transform active:-translate-y-2 transition duration-150 ease-in-out"
        onClick={handlecount}>
        <GoHeartFill style={{ color: iconColor }} /> 
      </button>
      <p>{drop}</p>
    </div>
  );
}

export default Home;
