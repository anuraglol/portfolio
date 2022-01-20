import React from "react";

const ProjectCard = ({ title, desc }: any) => {
  return (
    <div className="h-24 w-52 rounded-lg text-white cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
      <div className="bg-primary h-full w-full rounded-lg flex flex-col items-center justify-center text-center font-lexend font-medium ">
        <p className="text-xl font-semibold">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
