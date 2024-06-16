import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-pink-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-lg md:text-xl cursor-pointer transition-all duration-300`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
