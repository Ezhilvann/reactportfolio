import cert1 from "./images/cert1.png"
import cert2 from "./images/nptel.jpg"
import cert3 from "./images/wipro.jpeg"
import cert4 from "./images/newton.jpeg"
import cert5 from "./images/google.jpeg"
import cert6 from "./images/eduskill.jpeg"
import cert7 from "./images/ibm.jpeg"
import cert8 from "./images/unschool.jpeg"
import cert9 from "./images/mkce.jpeg"
import pic4 from "./images/pic4.jpg"
import darkpic4 from "./images/pic4-Photoroom.jpg";
import {useContext} from 'react'
import { themehandle } from "../App"


function Achive() {
  const dark=useContext(themehandle);
  const img = [
    {
      imgs: cert1,
      name: "SQL Certificate"
    },
    {
      imgs: cert2,
      name: "NPTEL Certificate"
    },
    {
      imgs: cert3,
      name: "WIPRO Certificate"
    },
    {
      imgs: cert4,
      name: "NEWTON SCHOOL Certificate"
    },
    {
      imgs: cert5,
      name: "GCLOUD Certificate"
    },
    {
      imgs: cert6,
      name: "EDUSKILL Certificate"
    },
    {
      imgs: cert7,
      name: "IBM(JAVA) Certificate"
    },
    {
      imgs: cert8,
      name: "UNSCHOOL Certificate"
    },
    {
      imgs: cert9,
      name: "MKCE(CLUB) Certificate"
    },
  ];

  return (
    <div className={`${dark?"bg-black text-white":"bg-white text-black"}`}>
    <img src={dark?darkpic4:pic4} alt="pic2" className="h-56 w-52" />    
    <p className="text-3xl text-yellow-500 font-bold text-center mb-4 -mt-3">Achivement</p>
    <div className="achieve-container flex justify-center items-center gap-4">
      <div className="animate-marquee">
        {img.concat(img).map((item, index) => (
          <div key={index} className="inline-block mx-4 text-center  w-fit border-2 border-black p-3">
            <img src={item.imgs} alt={item.name} className="h-fit w-fit" /><br/>
            <p className="text-lg font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default Achive;
