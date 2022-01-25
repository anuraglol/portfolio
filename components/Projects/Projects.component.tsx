import React from "react";

import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="px-3 my-16 font-sen" id="projects">
      <p className="text-3xl text-white font-bold">Featured Projects</p>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-10 my-8">
        <Link href="https://vault3.live" passHref>
          <a
            className="h-[7rem] w-[14rem] rounded-lg text-white cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary h-full w-full rounded-lg flex flex-col items-center justify-center text-center font-medium px-2">
              <p className="text-xl font-semibold">Vault3</p>
              <p>Your safest decentralized vault</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/avneesh0612/Orbits-UI" passHref>
          <a
            className="h-[7rem] w-[14rem] rounded-lg text-white cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-primary h-full w-full rounded-lg flex flex-col items-center justify-center text-center font-medium px-2">
              <p className="text-xl font-semibold">Orbits UI</p>
              <p>React component library built with Tailwind CSS</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
