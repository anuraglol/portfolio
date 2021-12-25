import { AiFillGithub } from 'react-icons/ai'

const Tile = ({ title, desc }) => {
  return (
    <div className="w-64 h-64 p-4 rounded-md flex justify-center flex-col text-center bg-slate-200 hover:bg-slate-300 duration-100 cursor-pointer">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-xl my-4">
        {desc}
      </p>

      <p className="w-full flex justify-center">
        <button className="">
          <AiFillGithub size={40} />
        </button>
      </p>
    </div>
  );
}

const Projects = () => {
  return (
    <div
      className={`w-full p-10 flex flex-col justify-center items-center gap-16 font-inter font-medium `}
    >
      <p className="text-center text-3xl font-mono font-semibold text-purple-600">
        projects
      </p>
      <div className="flex flex-row gap-16 ">
        {" "}
        <Tile
          title="Orbits UI"
          desc="A React Compponent library built with Tailwind CSS"
        />
        <Tile
          title="Orbits UI"
          desc="A React Compponent library built with Tailwind CSS"
        />
        <Tile
          title="Orbits UI"
          desc="A React Compponent library built with Tailwind CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
