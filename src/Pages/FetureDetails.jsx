import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FetureDetails = () => {
  const features = useLoaderData();
  const { id } = useParams();
  const feature = features.find((feature) => feature.id === parseInt(id));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 my-10 bg-gray-100 shadow-xl">
        <div className="border-4">
          <figure>
            <img className="w-full" src={feature.image} alt="" />
          </figure>
        </div>
        <div className=" p-4">
          <h2 className="roboto text-3xl font-bold">{feature.estate_title}</h2>
          <p className="text-2xl font-medium my-4">{feature.segment_name}</p>
          <p className="text-base text-gray-500">{feature.description}</p>
          <p className="text-2xl text-red-500 my-4">{feature.price}</p>
          <p className="">Status for: {feature.status}</p>
          <div className="flex-row text-base gap-20 lg:flex">
            <div className="">
              <p className="my-2">Area: {feature.area}</p>
              <p className="my-2">Location: {feature.location}</p>
            </div>
            <div className="">
              <p className="my-2">Land Size: {feature.land_size}</p>
              <p className="my-2">Year built: {feature.year_built}</p>
            </div>
          </div>
          <p className="text-base">
            Facilities:
            {feature.facilities.map((facilitie) => (
              <div>
                <li>{facilitie}</li>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FetureDetails;
