import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FetureDetails = () => {
  const features = useLoaderData();
  const { id } = useParams();
  const feature = features.find((feature) => feature.id === parseInt(id));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 my-10 bg-base-100 shadow-xl">
        <div className="">
          <figure>
            <img className="w-full h-[500px]" src={feature.image} alt="" />
          </figure>
        </div>
        <div className=" p-4">
          <h2 className="text-3xl">{feature.estate_title}</h2>
          <p className="text-2xl">{feature.segment_name}</p>
          <p>{feature.description}</p>
          <p>{feature.price}</p>
          <p>Status for: {feature.status}</p>
          <div className="flex-row gap-20 lg:flex">
            <div className="">
              <p>Area: {feature.area}</p>
              <p>Location: {feature.location}</p>
            </div>
            <div className="">
              <p>Land Size: {feature.land_size}</p>
              <p>Year built: {feature.year_built}</p>
            </div>
          </div>
          <p>Facilities: {feature.facilities}</p>
        </div>
      </div>
    </div>
  );
};

export default FetureDetails;
