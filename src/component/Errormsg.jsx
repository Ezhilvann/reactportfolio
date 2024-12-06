import React from "react";
import pic4 from "./images/pic4.jpg"
import { TbError404 } from "react-icons/tb";
import { themehandle } from "../App";
import { useContext } from "react";
function Errormsg(){
//     const nodemailer = require('nodemailer');

// // Create a transporter
// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password'
//   }
// });

// Mail options
// let mailOptions = {
//   from: 'your-email@gmail.com',
//   to: 'ezhilvannanm2020csbs@gmail.com',
//   subject: 'Hello from Node.js',
//   text: 'This is a test email sent using Nodemailer!'
// };

// Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Email sent: ' + info.response);
// });
const dark=useContext(themehandle);
    return(
        <div className={`flex justify-center gap-5 items-center w-full ${dark?"bg-black text-white":"bg-white text-black"} `}>
            <img src={pic4} alt="img" className="h-56 w-52"/>
            <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-bold">No Such Page is NotFound...</p>
        <span className="text-5xl "><TbError404 /></span>
            </div>
            
        </div>
    );
}

export default Errormsg;