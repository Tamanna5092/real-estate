import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col md:flex-row justify-around text-white bg-[#1c1c1e] mt-6 p-2 lg:p-10 space-y-6 md:space-y-0">
      <nav>
        <h1 className="roboto text-xl font-bold mb-4">Office Address</h1>
        <div>
          <h1 className="roboto text-[#949494]">Main Office</h1>
          <p className="font-bold mt-2">
            Goldman Sachs Tower 
            200 West St <br />
            New York, NY 10282
          </p>
        </div>
        <div>
          <h1 className="roboto text-[#949494] mt-4">Branch Office</h1>
          <p className="font-bold mt-2">
            Willis Tower  
            233 S Wacker Dr <br /> 
            Chicago, IL 60606
          </p>
          <p className="font-bold mt-4">
            Salesforce Tower 
            415 Mission St, <br />
            San Francisco, CA 94105
          </p>
        </div>
      </nav>
      <nav>
        <h1 className="text-xl font-bold mb-4">Contact</h1>
        <div className="flex gap-2 items-center">
          <div><img className="w-16 h-16 rounded-full" src={'https://i.ibb.co.com/JvvchMv/download.jpg'} alt="" /></div>
          <div>
          <h1 className="text-[#949494]">Alice Thompson</h1>
          <a className="text-base">098-346-287</a>
          </div>
        </div>
        <div className="flex gap-2 items-center my-4">
          <div><IoCallOutline className="w-10 h-10 text-[#949494]"></IoCallOutline></div>
          <div>
          <h1 className="text-[#949494]">Hotline:</h1>
          <a className="text-base">098-346-287</a>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div><HiOutlineMailOpen className="w-10 h-10 text-[#949494]"></HiOutlineMailOpen></div>
          <div>
          <h1 className="text-[#949494]">Email:</h1>
          <a className="text-base">starlineland12@gmail.com</a>
          </div>
        </div>
        <div className="flex gap-6 mt-4">
            <FaFacebook className="w-5 h-5 cursor-pointer text-[#949494]"></FaFacebook>
            <FaXTwitter className="w-5 h-5 cursor-pointer text-[#949494]"></FaXTwitter>
            <FaLinkedinIn className="w-5 h-5 cursor-pointer text-[#949494]"></FaLinkedinIn>
            <AiOutlineYoutube className="w-6 h-6 cursor-pointer text-[#949494]"></AiOutlineYoutube>
          </div>
      </nav>
      <nav>
        <h6 className="roboto text-xl font-bold mb-4">Services</h6>
        <div className="grid grid-flow-row space-y-4">
        <a className="link link-hover">Sells</a>
        <a className="link link-hover">Party</a>
        <a className="link link-hover">Vacation</a>
        <a className="link link-hover">Advertisement</a>
        <a className="link link-hover">Wedding Ceremony</a>
        </div>
      </nav>
    </footer>
      <aside className="text-white text-center bg-[#1f2224] py-6">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Star Line Land</p>
  </aside>
    </div>
  );
};

export default Footer;
