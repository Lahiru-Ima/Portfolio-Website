import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className=" h-70  md:h-70 max-[h-80]:   p-4 rounded-md  bg-[#1e1e1e]">
      <div className="flex flex-col items-center justify-center">
        <div
          className="h-10 w-10"
          style={{ backgroundImage: `url(${icon})` ,backgroundSize: "cover",filter: "invert(1)"}}
        ></div>
        <h5 className="text-xl font-semibold py-3">{title}</h5>
        <p className="h-full flex-grow text-sm md:text-md text-[#ADB7BE] text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
