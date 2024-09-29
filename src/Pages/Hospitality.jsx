import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import { IoKeyOutline } from 'react-icons/io5';

const Hospitality = () => {
    return (
        <div className='bg-red-400 my-20'>
           <div className='grid gap-6 max-w-7xl mx-auto py-20 md:grid-cols-2 px-4 lg:grid-cols-4'>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <CiStar className='w-20 h-20 hover:text-red-600'></CiStar>
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-center font-medium hover:text-red-600">Ratings</h2>
          <p className='hover:text-red-600'>We value your feedback! Rate your stay at Star Line Land Hospitality and let us know how we can continue to provide the best hospitality experience. Your opinion helps us grow and serve you better.</p>
        </div>
      </div>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <FiThumbsUp className='w-20 h-20 hover:text-red-600'></FiThumbsUp> 
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center font-medium hover:text-red-600">
        Experience</h2>
          <p className='hover:text-red-600'>At Star Line Land Hospitality, every moment is crafted to provide you with an exceptional experience. From our luxurious accommodations to our world-class amenities, we ensure that your stay is nothing short of unforgettable. Let us elevate your journey with personalized services designed for your ultimate comfort.</p>
        </div>
      </div>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <IoKeyOutline className='w-20 h-20 hover:text-red-600'></IoKeyOutline>
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center font-medium hover:text-red-600">Quick Deals</h2>
          <p className='hover:text-red-600'>Don't miss out on our limited-time quick deals! Enjoy luxurious stays, discounted rates, and exclusive offers designed to make your dream vacation more affordable. Book now and indulge in the ultimate hospitality experience at unbeatable prices!!</p>
        </div>
      </div>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <FaRegHeart className='w-20 h-20 hover:text-red-600'></FaRegHeart>
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center font-medium hover:text-red-600">Happy Clients</h2>
          <p className='hover:text-red-600'>We take pride in delivering unforgettable experiences to our clients. From personalized service to luxurious comfort, our guests leave with smiles and cherished memories. Hear what our happy clients have to say and become a part of our growing family!</p>
        </div>
      </div> 
           </div>
        </div>
    );
};

export default Hospitality;