import { AiFillGithub } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

const Project = ({ title, url, role, desc }) => {
  return (
    <a
      href={url}
      className="p-4 group cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      <p className="font-medium text-xl group-hover:text-blue-600">{title}</p>

      <p className="text-gray-700">{desc}</p>
      <p>
        <span className="text-blue-600">role: </span>
        {role}
      </p>
      <p className="flex flex-row items-center">
        <button
          className="p-2 rounded-lg bg-gray-100 duration-100 hover:bg-gray-200"
          aria-label="GitHub Link"
        >
          <AiFillGithub size={25} />
        </button>
        <BsArrowRightShort
          size={35}
          className="group-hover:text-blue-500 group-hover:mx-2 duration-100"
        />
      </p>
    </a>
  );
};

export default Project;
