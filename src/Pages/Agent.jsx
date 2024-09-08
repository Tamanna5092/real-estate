import React from "react";

const Agent = () => {
  return ( 
      <div className="grid md:grid-cols-1 lg:grid-cols-2">
        <div className="bg-gray-800 text-right text-white">
     <div className="my-auto border-4">
     <h1 className="text-3xl text-center">Feel Free to Contact Our Agents</h1>
          <p>
            Our broker centers are located throughout the entire country
            ensuring you get our assistance in every state. Our professional
            real estate team made sure you get the highest level of help with
            your property quests.
          </p>
     </div>
        </div>
        <div className="text-white bg-red-400 h-fit">
             <h1 className="text-3xl text-center">Contact Our Agents</h1>
            <div className="flex justify-around">
                <div>
                    <p>Call</p>
                </div>
                <div>
                <img src="https://i.ibb.co.com/pzqcZk8/download-1.jpg" alt="" />
                </div>
            </div>
        </div>
      </div>
  );
};

export default Agent;
