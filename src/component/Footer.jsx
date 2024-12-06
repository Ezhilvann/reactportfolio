import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
function Footer(){
    const data=new Date();

    return(
        <div className="h-full mt-2 w-full bg-black">
            <div className="flex justify-center items-center gap-4 m-2 pt-5">
            <div className="text-white text-xl w-fit p-2  rounded-full bg-gray-500 transform hover:-translate-y-2 duration-150 ease-in-out">
           <a href="https://www.linkedin.com/in/ezhilvannanm/"><FaLinkedin /></a> 
            </div>
            <div className="text-white text-xl w-fit p-2  rounded-full bg-gray-500 transform hover:-translate-y-2 duration-150 ease-in-out">
            <a href="mailto:ezhilvannanm2020csbs@gmail.com"><IoMail /></a>
            </div>
            <div className="text-white text-xl w-fit p-2  rounded-full bg-gray-500 transform hover:-translate-y-2 duration-150 ease-in-out">
            <a href="https://www.instagram.com/_ezhil.vannan_/"><FaSquareInstagram /></a>
            </div>
            <div className="text-white text-xl w-fit p-2  rounded-full bg-gray-500 transform hover:-translate-y-2 duration-150 ease-in-out">
            <a href="tel:+918825400255"><FaPhoneVolume /></a>
            </div>
            </div>
            <p className="text-white text-sm text-center p-2">&copy; All Rights reserved<span className="text-slate-400"> - {data.getFullYear()}</span> <span className="text-white">|</span> -Designed by <span className="text-slate-600 text-md">Ezhil</span>-</p>
            <p className="text-slate-600 text-center"></p>
        </div>
    );
}

export default Footer;

