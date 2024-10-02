import React from "react";
import { useLoaderData } from "react-router-dom";
import Managers from "./managers";
import { FaLayerGroup, FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsHouseLock } from "react-icons/bs";
import { LuThumbsUp } from "react-icons/lu";

const About = () => {
  const managers = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="roboto text-3xl text-center font-semibold mt-10 animate__animated animate__zoomIn">
        A Few Words About Our Company
      </h1>
      <p className="text-base text-[#949494] mt-6 animate__animated animate__zoomIn px-4 md:0">
        Our company is dedicated to providing exceptional hospitality services,
        ensuring that every guest enjoys a memorable experience. With a
        commitment to excellence, we offer a range of accommodations, from
        elegant resorts to cozy hostels, tailored to meet the diverse needs of
        our guests. Our professional team is passionate about delivering
        personalized service and creating a warm, welcoming atmosphere. Whether
        you’re here for leisure or business, Star Land Line Hospitality is your
        perfect choice for a relaxing and unforgettable stay. Discover the
        difference with us!
      </p>
      {/* image gallery */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 my-10">
        <img
          className="w-full h-96"
          src="https://i.ibb.co.com/ZdS3ybr/Most-Beautiful-House-in-the-World-0-1200.jpg"
          alt=""
        />
        <img
          className="w-full h-96"
          src="https://i.ibb.co.com/DQ5DfNG/photo-1564013799919-ab600027ffc6.jpg"
          alt=""
        />
        <img
          className="w-full h-96"
          src="https://i.ibb.co.com/bzGmGF3/florida-house-rent-sale-beautiful-near-beach-make-great-rental-property-189347621.webp"
          alt=""
        />
        <img
          className="w-full h-96"
          src="https://i.ibb.co.com/Kjrk5yV/istockphoto-172685185-612x612.jpg"
          alt=""
        />
        <img
          className="w-full h-96"
          src="https://i.ibb.co.com/8js2HG2/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo-1.jpg"
          alt=""
        />
        <img
          className="w-full h-96"
          src="https://i.ibb.co.com/0FWnFpk/simple-and-beautiful-house-design-the-loft-aesthetic.jpg"
          alt=""
        />
      </div>
      <div className="py-10">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="card card-compact text-center text-black bg-red-400 py-10 mx-4 hover:text-white hover:bg-gray-800 lg:mx-0">
            <div className="flex items-center justify-center gap-3">
              <div>
                <BsHouseLock className="w-10 h-10"></BsHouseLock>
              </div>
              <div className="text-start">
                <h2 className="roboto text-3xl font-semibold">2032</h2>
                <p className="text-xl">Closed Deals</p>
              </div>
            </div>
          </div>
          <div className="card card-compact text-center text-black bg-red-400 py-10 mx-4 hover:text-white hover:bg-gray-800 lg:mx-0">
            <div className="flex items-center justify-center gap-3">
              <div>
                <FaRegHeart className="w-10 h-10"></FaRegHeart>
              </div>
              <div className="text-start">
                <h2 className="roboto text-3xl font-semibold">938</h2>
                <p className="text-xl">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="card card-compact text-center text-black bg-red-400 py-10 mx-4 hover:text-white hover:bg-gray-800 lg:mx-0">
            <div className="flex items-center justify-center gap-3">
              <div>
                <MdOutlineLocalOffer className="w-10 h-10"></MdOutlineLocalOffer>
              </div>
              <div className="text-start">
                <h2 className="roboto text-3xl font-semibold">3</h2>
                <p className="text-xl">Active Offers</p>
              </div>
            </div>
          </div>
          <div className="card card-compact text-center text-black bg-red-400 py-10 mx-4 hover:text-white hover:bg-gray-800 lg:mx-0">
            <div className="flex items-center justify-center gap-3">
              <div>
                <LuThumbsUp className="w-10 h-10"></LuThumbsUp>
              </div>
              <div className="text-start">
                <h2 className="roboto text-3xl font-semibold">100%</h2>
                <p className="text-xl">Efficiency</p>
              </div>
            </div>
          </div>
          <div className="card card-compact text-center text-black bg-red-400 py-10 mx-4 hover:text-white hover:bg-gray-800 lg:mx-0">
            <div className="flex items-center justify-center gap-3">
              <div>
                <FaLayerGroup className="w-10 h-10"></FaLayerGroup>
              </div>
              <div className="text-start">
                <h2 className="roboto text-3xl font-semibold">15</h2>
                <p className="text-xl">Years of Exp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our manager */}
      <div>
        <h1 className="roboto text-3xl text-center font-bold mt-10">
          Our Managers
        </h1>
        <p className="text-center text-[#949494] text-base my-4">
          Our management team consists of skilled professionals committed to
          providing exceptional service and ensuring smooth operations across{" "}
          <br /> all departments. Here’s a brief introduction to our managers
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {managers.map((manager) => (
            <Managers key={manager.id} manager={manager}></Managers>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
