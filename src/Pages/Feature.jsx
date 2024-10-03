import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = ({ estate }) => {
  const { segment_name, status, image, area, location, id, land_size, price } =
    estate;

    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    }, []);

  return (
    <div className="px-8 md:px-0">
      <div className="card card-compact bg-base-100 h-[580px] shadow-xl">
        <figure>
          <img data-aos="zoom-in" className="w-full h-[270px]" src={image} alt="" />
        </figure>
        <div className="p-6 text-base">
          <p className="roboto text-3xl font-bold mb-4">{segment_name}</p>
          <p className="text-red-500 text-xl font-medium">{price}</p>
          <p className="text-lg my-2">Status for: {status}</p>
          <div className="flex-row gap-20 lg:flex">
            <p className="mb-2">Area: {area}</p>
            <p className="mb-2">Land Size: {land_size}</p>
          </div>
          <p>Location: {location}</p>
        </div>
        <div className="card-actions p-6">
          <Link
            to={`feature/${id}`}
            className="text-center text-white font-medium bg-red-500 hover:bg-gray-800 px-6 py-4 rounded-md"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
