import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({estate}) => {
    const {estate_title, segment_name, status, image, area, location, id, land_size, build_year, price} = estate;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 h- shadow-xl">
        <figure>
          <img
          className='w-full'
            src={image}
            alt=""
          />
        </figure>
        <div className="p-6">
          <p className='text-2xl'>{segment_name}</p>
          <p>{price}</p>
          <p>Status for: {status}</p>
          <div className='flex justify-between'>
          <p>Area: {area}</p>
          <p>Land Size: {land_size}</p>
          </div>
          <p>Location: {location}</p>
        </div>
        <div className="card-actions p-6">
        <Link to={`feature/${id}`} className='text-center text-white bg-[#1d1f1f] hover:bg-red-600 px-6 py-4 rounded-md mb-6'>View Property</Link>
    </div>
      </div>
        </div>
    );
};

export default Feature;