import React from 'react';
import img from '../assets/regiser-img.jpeg'
import img2 from '../assets/agent1.webp'
import img3 from '../assets/agent3.jpg'
import { MdCall } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { GrMapLocation } from 'react-icons/gr';
import { SlCallIn } from 'react-icons/sl';
import { BiMessageDots } from 'react-icons/bi';

const Contract = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl text-center'>Our agent</h1>
            {/* message */}
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 my-20'>
            <div>
                <h1 className='text-3xl'>We provide the most suitable and quality Hospitality</h1>
                <div className='flex items-center gap-10'>
                    <div>
                    <GrMapLocation className='w-10 h-10'></GrMapLocation>
                    </div>
                    <div>
                        <p>Office address</p>
                        <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <div>
                    <SlCallIn className='w-10 h-10'></SlCallIn>
                    </div>
                    <div>
                        <p>Request a call back</p>
                        <p>314-555-0123</p>
                    </div>
                </div>
                <div className='flex items-center gap-10'>
                    <div>
                    <BiMessageDots className='w-10 h-10'></BiMessageDots>
                    </div>
                    <div>
                        <p>Email us</p>
                        <p>hellosupport@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <img src={'https://i.ibb.co.com/fFQj8pq/mark-contact3.png'} alt="" />
            </div>
          </div>
            {/* contact our agent */}
            <div className="flex flex-col justify-evenly gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div>
                <img className="w-20 h-20 rounded-full" src={img} alt="" />
              </div>
              <div>
                <h3 className="roboto text-lg font-medium">Noah Swan</h3>
                <p className="flex justify-center items-center text-2xl font-medium">
                  <span>
                    <LuPhoneCall className="w-6 h-6 mr-2"></LuPhoneCall>
                  </span>{""}
                  123-456-7890
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-20 h-20 rounded-full" src={img2} alt="" />
              </div>
              <div>
                <h3 className="roboto text-lg font-medium">Anmita Nancy</h3>
                <p className="flex justify-center items-center text-2xl font-medium">
                  <span>
                    <LuPhoneCall className="w-6 h-6 mr-2"></LuPhoneCall>
                  </span>{""}
                  098-765-4321
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <img className="w-20 h-20 rounded-full" src={img3} alt="" />
              </div>
              <div>
                <h3 className="roboto text-lg font-medium">Kevin Lee</h3>
                <p className="flex justify-center items-center text-2xl font-medium">
                  <span>
                    <LuPhoneCall className="w-6 h-6 mr-2"></LuPhoneCall>
                  </span>{""}
                  563-456-2908
                </p>
              </div>
            </div>
          </div>
          {/* communication */}
          <div>

          </div>
        </div>
    );
};

export default Contract;