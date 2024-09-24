import React from "react";
import img from "../assets/regiser-img.jpeg";
import img1 from "../assets/agent1.webp";
import { MdCall } from "react-icons/md";

const Agent = () => {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2">
      <div className="bg-gray-800 text-white px-10 py-32">
        <div className="">
          <h1 className="text-3xl text-center">
            Feel Free to Contact Our Agents
          </h1>
          <p className="text-[#d9d4d4] my-4">
            For personalized assistance and to make your experience even
            smoother, please don’t hesitate to contact our agent. Our dedicated
            team is always ready to help you with any inquiries, bookings, or
            special requests you may have. Whether you need detailed information
            about our services, want to make reservations, or require guidance,
            our agent is here to provide you with prompt and friendly support.
            Your satisfaction is our top priority, and we are committed to
            ensuring you have an exceptional experience. Feel free to reach out
            to us anytime; we look forward to assisting you and making your
            journey truly memorable.
          </p>
          <div className="flex flex-col justify-center gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-20 h-20 rounded-full" src={img} alt="" />
              </div>
              <div>
                <h3 className="roboto text-lg font-medium">Noah Swan</h3>
                <p className="flex justify-center items-center text-2xl font-medium">
                  <span>
                    <MdCall className="w-6 h-6"></MdCall>
                  </span>{" "}
                  123456789
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-20 h-20 rounded-full" src={img1} alt="" />
              </div>
              <div>
                <h3 className="roboto text-lg font-medium">Anmita Nancy</h3>
                <p className="flex justify-center items-center text-2xl font-medium">
                  <span>
                    <MdCall className="w-6 h-6"></MdCall>
                  </span>{" "}
                  0987654321
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full h-full" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Agent;
