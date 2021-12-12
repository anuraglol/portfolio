import type { NextPage } from "next";
import { AiFillGithub } from "react-icons/ai";

const Li = ({ children, href }) => {
  return (
    <a href={href}>
      <span className="text-lg px-3 p-2 rounded-full mx-4 hover:text-slate-800 hover:rotate-3 duration-100 cursor-pointer hover:bg-purple-100 hover:text-purple-600">
        {children}
      </span>
    </a>
  );
};

const Header: NextPage = () => {
  return (
    <header className="header flex items-center flex-row p-3 pt-10 px-24 font-poppins font-medium">
      <p className="flex flex-row items-center mb-8">
        <p className="text-2xl font-semibold text-secondary duration-100 hover:rotate-12 cursor-pointer">
          Anurag
        </p>
        <p>
          <Li href="#">Home</Li>
          <Li href="#">About</Li>
          <Li href="#">Skills</Li>
          <Li href="#">Projects</Li>
          <Li href="#">Contact</Li>
        </p>
        <button className="mx-2 p-2 rounded-lg bg-gray-100 duration-100 hover:bg-gray-200">
          <AiFillGithub size="30" />
        </button>
      </p>
    </header>
  );
};

export default Header;
