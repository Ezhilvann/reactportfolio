import Home from "./component/Home";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Project from "./component/Project";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import Navb from "./component/Navb";
import Achive from "./component/Achive";
import Errormsg from "./component/Errormsg";
import {createContext  , useState } from "react";

import { FaRegMoon } from "react-icons/fa";

export const themehandle= createContext();

function App() {
  const storetheme=localStorage.getItem("Darktheme");
  const[dark,setdark]=useState(storetheme==="true");
  
 function theme(){
  const newdark=!dark;
  setdark(newdark);
  localStorage.setItem("Darktheme",newdark.toString())
  console.log("colour changed");
 }


  return (
    <themehandle.Provider value={dark}>
      <div className={`${dark?"bg-black text-white":"bg-white text-black"}`}>
       <BrowserRouter>
       <div className="flex justify-center items-center gap-2">
        <Navb/>
        <button onClick={theme} ><FaRegMoon />
        </button>
        </div>
        <Routes>
  <Route path="/project" element={<Project />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/" element={<Home />} />
  <Route path="/achieve" element={<Achive />} /> 
  <Route path="*" element={<Errormsg />} />
</Routes>

      <div className="bg-black">
      <Footer/>
      </div>
    </BrowserRouter>
    </div>
    </themehandle.Provider>
  );
}

export default App;
