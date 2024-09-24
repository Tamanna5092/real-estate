import React from "react";
import img from "../assets/Asset2.png";

const Footer = () => {
  return (
    <footer className="footer footer-center text-white bg-gray-800 mt-20 p-10">
      <aside>
        <img className="w-" src={img} alt="" />
        <p className="font-bold">Providing reliable tech since 1992</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
