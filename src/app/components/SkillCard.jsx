import React from "react";

const SkillCard = ({ imgUrl,tooltipText }) => {
  return (
    <div
      className="w-20 h-20 md:w-30 md:h-30  p-3 rounded-md  bg-[#1e1e1e]"
      title={tooltipText} 
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          filter: "invert(1)",
        }}
      ></div>
    </div>
  );
};

export default SkillCard;
