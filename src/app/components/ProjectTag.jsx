import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? " text-white border-amber-400 "
    : "text-[#ADB&BE] border-slate-600  hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full  border-b-2 px-3 py-1 sm:text-xl text-l cursor-pointer `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
