import Image from "next/image";

import { BsArrowRightShort } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="px-3 my-16 text-white">
      <p className="text-3xl font-lexend text-white font-bold">Skills & Uses</p>

      <div className="flex flex-col my-8 font-medium">
        <p className="text-lg text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">NextJS</span>
          &nbsp;as my Frontend Framework
        </p>

        <p className="text-lg text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Typescript </span>
          &nbsp;as my main language
        </p>

        <p className="text-lg text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Tailwind CSS </span>
          &nbsp;as my CSS framework
        </p>

        <p className="text-lg text-slate-300 py-1 border-b-[0.1px] border-gray-500 flex flex-row items-center">
          <BsArrowRightShort size="30" />
          <span className="text-white">Figma </span>
          &nbsp;as my designing tool
        </p>
      </div>

      <p className="text-slate-300 font-medium text-lg">
        ...more skills include <span className="text-white">javascript</span>,{" "}
        <span className="text-white">reactjs</span>
      </p>
    </div>
  );
};

export default Skills;
