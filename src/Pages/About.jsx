import React from "react";
import { IoKeyOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl text-center">A Few Words About Our Company</h1>
      <p className="">
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
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
          <div className="flex items-center justify-center gap-3">
          <div> 
              <IoKeyOutline className="w-10 h-10 text-red-600"></IoKeyOutline>
          </div>
          <div className="text-start">
            <h2 className="roboto text-3xl font-bold">2012</h2>
            <p className="text-xl">Closed Deals</p>
          </div>
          </div>
        </div>
        <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
          <div className="flex items-center justify-center gap-3">
          <div> 
              <IoKeyOutline className="w-10 h-10 text-red-600"></IoKeyOutline>
          </div>
          <div className="text-start">
            <h2 className="roboto text-3xl font-bold">238</h2>
            <p className="text-xl">Happy Clients</p>
          </div>
          </div>
        </div>
        <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
          <div className="flex items-center justify-center gap-3">
          <div> 
              <IoKeyOutline className="w-10 h-10 text-red-600"></IoKeyOutline>
          </div>
          <div className="text-start">
            <h2 className="roboto text-3xl font-bold">6</h2>
            <p className="text-xl">Active Offers</p>
          </div>
          </div>
        </div>
        <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
          <div className="flex items-center justify-center gap-3">
          <div> 
              <IoKeyOutline className="w-10 h-10 text-red-600"></IoKeyOutline>
          </div>
          <div className="text-start">
            <h2 className="roboto text-3xl font-bold">100%</h2>
            <p className="text-xl">Efficiency</p>
          </div>
          </div>
        </div>
        <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
          <div className="flex items-center justify-center gap-3">
          <div> 
              <IoKeyOutline className="w-10 h-10 text-red-600"></IoKeyOutline>
          </div>
          <div className="text-start">
            <h2 className="roboto text-3xl font-bold">15</h2>
            <p className="text-xl">Years of Exp</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
