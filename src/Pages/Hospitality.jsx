import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { IoKeyOutline } from 'react-icons/io5';
import { MdOutlineLocalOffer } from 'react-icons/md';

const Hospitality = () => {
    return (
        <div className='bg-red-400 my-20'>
           <div className='grid gap-6 max-w-7xl mx-auto py-20 md:grid-cols-2 px-4 lg:grid-cols-4'>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <CiStar className='w-20 h-20 hover:text-red-600'></CiStar>
        </figure>
        <div className="card-body">
          <h2 className="text-2xl text-center font-medium hover:text-red-600">Revies</h2>
          <p className='hover:text-red-600'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
        </div>
      </div>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <IoKeyOutline className='w-20 h-20 hover:text-red-600'></IoKeyOutline> 
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center font-medium hover:text-red-600">Revies</h2>
          <p className='hover:text-red-600'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
        </div>
      </div>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <MdOutlineLocalOffer className='w-20 h-20 hover:text-red-600'></MdOutlineLocalOffer>
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center font-medium hover:text-red-600">Revies</h2>
          <p className='hover:text-red-600'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
        </div>
      </div>
           <div className="card card-compact text-center text-black py-10 bg-white rounded-none hover:text-white hover:bg-gray-800">
        <figure>
        <FaRegHeart className='w-20 h-20 hover:text-red-600'></FaRegHeart>
        </figure>
        <div className="card-body">
        <h2 className="text-2xl text-center font-medium hover:text-red-600">Revies</h2>
          <p className='hover:text-red-600'>It’s fun and easy to create your professionally looking website using GoodHomes Theme!</p>
        </div>
      </div> 
           </div>
        </div>
    );
};

export default Hospitality;