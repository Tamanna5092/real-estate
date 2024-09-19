import React from 'react';
import { Link } from 'react-router-dom';

const Feature = ({estate}) => {
    const {segment_name, status, image, area, location, id, land_size, price} = estate;
    return (
        <div className='px-8 md:px-0'>
            <div className="card card-compact bg-base-100 h-[480px] shadow-xl">
        <figure>
          <img
          className='w-full h-[270px]'
            src={image}
            alt=""
          />
        </figure>
        <div className="p-6">
          <p className='text-2xl'>{segment_name}</p>
          <p>{price}</p>
          <p>Status for: {status}</p>
          <div className='flex-row gap-20 lg:flex'>
          <p>Area: {area}</p>
          <p>Land Size: {land_size}</p>
          </div>
          <p>Location: {location}</p>
        </div>
        <div className="card-actions p-6">
        <Link to={`feature/${id}`} className='text-center text-white bg-gray-800 hover:bg-red-600 px-6 py-4 rounded-md'>View Property</Link>
    </div>
      </div>
        </div>
    );
};

export default Feature;