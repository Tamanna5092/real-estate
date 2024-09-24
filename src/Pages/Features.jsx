import React from "react";
import { useLoaderData } from "react-router-dom";
import Feature from "./Feature";

const Features = () => {
  const estates = useLoaderData();
  return (
    <div className="mt-20">
      <h1 className="roboto text-center text-4xl font-bold my-6">
        Star Land Line Hospitality Resort & Hostel
      </h1>
      <p className="my-6 text-center text-[#949494]">
        Star Land Line Hospitality offers a perfect blend of comfort and luxury.
        With cozy accommodations and top-notch amenities, it’s ideal for both
        relaxation and adventure. Whether you're <br /> staying in our hostel or
        resort, enjoy exceptional service and a welcoming atmosphere, making
        your stay truly unforgettable.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estates.map((estate) => (
          <Feature key={estate.id} estate={estate}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
