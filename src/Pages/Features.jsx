import React from "react";
import { useLoaderData } from "react-router-dom";
import Feature from "./Feature";

const Features = () => {
  const estates = useLoaderData();
  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl my-6">Types of hospitality real estate</h1>
      <p className="my-6">Hospitality real e­state encompasses a range­ of properties that are spe­cifically designed to cater to ne­eds related to re­laxation, pleasure, business me­etings, events, and confe­rences. This diverse­ sector includes eve­rything from luxurious hotels to cozy restaurants, offering ample­ opportunities for growth and developme­nt.</p>
       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          estates.map(estate => <Feature key={estate.id} estate={estate}></Feature>)
        }
       </div>
       <button>Show All Features</button>
    </div>
  );
};

export default Features;
