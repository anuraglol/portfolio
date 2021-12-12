import type { NextPage } from "next";
import Image from "next/image";

import Project from "./Project";

const Projects: NextPage = () => {
  return (
    <div className="font-poppins mx-24 my-10 font-medium">
      <p className="font-semibold text-blue-600 text-2xl">/projects</p>

      <div className="flex flex-row items-center">
        <div>
          <Project
            title="Gradient Deck - Find Awesome Gradients"
            desc="A curated place to find awesome gradients!"
            link="#"
            role="owner"
            github="#"
          />

          <Project
            title="Orbits UI"
            desc="I will write it when avneesh sends"
            link="#"
            role="contributor"
            github="#"
          />

          <Project
            title="Formie [WIP]"
            desc="Formie - Open Source Forms"
            link="#"
            role="owner"
            github="#"
          />

          <p className="text-gray-700">- and yep! more coming up soon!</p>
        </div>

        <div>
          <Image
            src="/assests/projects.svg"
            alt="projects"
            height="200px"
            width="250px"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
