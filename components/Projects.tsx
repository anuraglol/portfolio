import { AiFillGithub } from 'react-icons/ai'

const Projects = () => {
  return (
    <div
      className={`w-full p-10 flex flex-col justify-center items-center gap-16 font-inter font-medium text-white`}
    >
        <button className="text-xl w-36 text-white font-medium px-4 py-3 rounded-full flex items-center justify-center bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] shadow-xl hover:bg-gradient-to-l duration-100">
          Projects
        </button>
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
