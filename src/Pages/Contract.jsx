import React from "react";
import img from "../assets/regiser-img.jpeg";
import img2 from "../assets/agent1.webp";
import img3 from "../assets/agent3.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { GrMapLocation } from "react-icons/gr";
import { SlCallIn } from "react-icons/sl";
import { BiMessageDots } from "react-icons/bi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Contract = () => {
  const markers = [
    {
      geocode: [51.505, 0.01],
      popup: "Star Line Land 1",
    },
    {
      geocode: [51.505, -0.27],
      popup: "Star Line Land 1",
    },
    {
      geocode: [51.505, -0.17],
      popup: "Star Line Land 1",
    },
    {
      geocode: [51.505, -0.015],
      popup: "Star Line Land 1",
    },
  ];
  const custonmIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535137.png",
    iconSize: [38, 38],
  });

  return (
    <div>
      {/* message */}
      <div className="grid max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 gap-6 my-20">
        <div className="px-3 lg:px-0">
          <h1 className="roboto text-5xl font-extrabold my-6 animate__animated animate__backInLeft">
            We provide the most suitable and quality hospitality.
          </h1>
          <p className="text-base text-[#949494] animate__animated animate__backInLeft">
            We provide the most suitable and high-quality hospitality, ensuring
            that every guest enjoys a comfortable, memorable, and exceptional
            experience tailored to their needs.
          </p>
          <div className="flex items-center gap-10 my-10">
            <div>
              <GrMapLocation className="w-10 h-10 text-[#949494]"></GrMapLocation>
            </div>
            <div>
              <p className="text-lg text-[#949494] font-extrabold">
                Office address
              </p>
              <p className="text-lg text-[#ffa920]">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10 my-10">
            <div>
              <SlCallIn className="w-10 h-10 text-[#949494]"></SlCallIn>
            </div>
            <div>
              <p className="text-lg text-[#949494] font-extrabold">
                Request a call back
              </p>
              <p className="text-3xl font-extrabold text-[#ffa920]">
                314-555-0123
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10 my-10">
            <div>
              <BiMessageDots className="w-10 h-10 text-[#949494]"></BiMessageDots>
            </div>
            <div>
              <p className="text-lg text-[#949494] font-extrabold">Email us</p>
              <p className="text-lg text-[#ffa920]">hellosupport@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            className="mx-auto"
            src={"https://i.ibb.co.com/fFQj8pq/mark-contact3.png"}
            alt=""
          />
        </div>
      </div>
      {/* contact our agent */}
      <div className="max-w-7xl mx-auto flex flex-col justify-evenly gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div>
            <img className="w-20 h-20 rounded-full" src={img} alt="" />
          </div>
          <div>
            <h3 className="roboto text-lg font-medium">Noah Swan</h3>
            <p className="flex justify-center text-[#ffa920] items-center text-2xl font-medium">
              <span>
                <LuPhoneCall className="w-6 h-6 mr-2"></LuPhoneCall>
              </span>
              {""}
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
            <p className="flex justify-center text-[#ffa920] items-center text-2xl font-medium">
              <span>
                <LuPhoneCall className="w-6 h-6 mr-2"></LuPhoneCall>
              </span>
              {""}
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
            <p className="flex justify-center text-[#ffa920] items-center text-2xl font-medium">
              <span>
                <LuPhoneCall className="w-6 h-6 mr-2"></LuPhoneCall>
              </span>
              {""}
              563-456-2908
            </p>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="mt-20 -mb-6">
        <MapContainer
          className="h-[500px]"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker position={marker.geocode} icon={custonmIcon}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Contract;
