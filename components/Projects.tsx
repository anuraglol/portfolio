import { AiFillGithub } from 'react-icons/ai'

const Projects = () => {
  return (
    <div
      className={`w-full p-10 bg-[#11141e] flex flex-col justify-center items-center gap-16 font-inter font-medium text-white`}
    >
      <div className="text-2xl cursor-pointer rounded-full px-6 py-2 bg-gradient-to-r from-[#ef32d9] to-[#89fffd]">
        Projects
      </div>
      <div className="flex flex-row gap-16">
        <div
          className="w-64 h-64 p-4 rounded-md flex justify-center items-center flex-col text-center"
          style={{
            background:
              "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)",
          }}
        >
          <p className="text-2xl font-semibold">Orbits UI</p>
          <p className="text-xl my-4">
            A React Component library build with Tailwind CSS
          </p>

          <p className="w-full flex justify-center">
            <button className="hover:mt-2 duration-100">
              <AiFillGithub size={40} />
            </button>
          </p>
        </div>{" "}
        <div
          className="w-64 h-64 p-4 rounded-md flex justify-center items-center flex-col text-center"
          style={{
            background:
              "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)",
          }}
        >
          <p className="text-2xl font-semibold">Gradient Deck</p>
          <p className="text-xl my-4">
            Find awesome curated gradients, add your own!
          </p>

          <p className="w-full flex justify-center">
            <button className="hover:mt-2 duration-100">
              <AiFillGithub size={40} />
            </button>
          </p>
        </div>
        <div
          className="w-64 h-64 p-4 rounded-md flex flex-col text-center justify-center items-center"
          style={{
            background:
              "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)",
          }}
        >
          <p className="text-2xl font-semibold">Formie [WIP]</p>
          <p className="text-xl my-4">Open Source Forms platform</p>

          <p className="w-full flex justify-center">
            <button className="hover:mt-2 duration-100">
              <AiFillGithub size={40} />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
