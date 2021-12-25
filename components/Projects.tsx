import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Tile = ({ title, desc, url }) => {
  return (
    <Link href={url} passHref>
      <a target="blank">
        <div className="w-64 h-64 p-4 rounded-md flex justify-center flex-col text-center bg-slate-200 hover:bg-slate-300 duration-100 cursor-pointer">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-xl my-4">{desc}</p>

          <p className="w-full flex justify-center">
            <AiFillGithub size={40} />
          </p>
        </div>
      </a>
    </Link>
  );
};

const Projects = () => {
  return (
    <div
      className={`min-w-screen p-10 flex flex-col justify-center items-center gap-16 font-inter font-medium `}
    >
      <p className="text-center text-3xl font-mono font-semibold text-purple-600">
        projects
      </p>
      <div className="flex flex-row gap-16 ">
        {" "}
        <Tile
          title="Orbits UI"
          desc="A React Compponent library built with Tailwind CSS"
          url="https://github.com/avneesh0612/Orbits-UI"
        />
        <Tile
          title="Gradient Deck"
          desc="Explore awesome curated gradients, add your own!"
          url="https://github.com/kr-anurag/gradient-deck"
        />
        <Tile
          title="Formie"
          desc="Open Source Forms for normies!"
          url="https://github.com/kr-anurag/formie"
        />
      </div>
    </div>
  );
};

export default Projects;
