import React from "react";

import ProjectCard from "./Project.card";

const Projects: React.FC = () => {
  return (
    <div className="px-3 my-16">
      <p className="text-4xl font-lexend text-white font-bold">
        Featured Projects
      </p>
      <div className="flex flex-row justify-center gap-10 my-8">
        <div className="h-[7rem] w-[14rem] rounded-lg text-white cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
          <div className="bg-primary h-full w-full rounded-lg flex flex-col items-center justify-center text-center font-sen font-medium ">
            <p className="text-xl font-semibold">Vault3</p>
            <p>Your safest decentralized vault</p>
          </div>
        </div>

        <div className="h-[7rem] w-[14rem] rounded-lg text-white cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]">
          <div className="bg-primary h-full w-full rounded-lg flex flex-col items-center justify-center text-center font-sen font-medium ">
            <p className="text-xl font-semibold">Orbits UI</p>
            <p>React component library built with Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
