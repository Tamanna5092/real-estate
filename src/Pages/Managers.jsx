import React from "react";
import { BsX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Managers = ({manager}) => {
    const {name, job, image, about, social_links} = manager;
  return (
    <div>
      <div className="card card-compact bg-base-100 my-10 rounded-none">
        <figure>
          <img className="w-full h-[280px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="roboto text-xl hover:text-red-500">{name}</h2>
          <p className="text-[#949494]">{job}</p>
          <p className="text-[#949494]">{about.slice(0, 100)}</p>
          {/* socail links */}
           <div className="flex gap-6 mt-2">
            <FaFacebook className="w-5 h-5 cursor-pointer"></FaFacebook>
             <BsX className="w-5 h-5 cursor-pointer"></BsX>
             <LiaLinkedin className="w-5 h-5 cursor-pointer"></LiaLinkedin>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Managers;
