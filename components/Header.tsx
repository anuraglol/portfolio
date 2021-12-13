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
    <header className="flex items-center flex-row justify-between p-3 pt-10 px-24 mb-8 font-poppins font-medium">
      <p className="text-2xl font-semibold text-secondary duration-100 hover:rotate-12 cursor-pointer">
        Anurag
      </p>
      <p className="flex flex-row items-center">
        <Li href="#about">About</Li>
        <Li href="#skills">Skills</Li>
        <Li href="#projects">Projects</Li>
        <Li href="#contact">Contact</Li>
        <a
          href="https://github.com/kr-anurag/anurag"
          target="_blank"
          rel="noreferrer"
          className="mx-2 p-2 rounded-lg bg-gray-100 duration-100 hover:bg-gray-200"
          aria-label="github repo"
        >
          <AiFillGithub size="30" />
        </a>
      </p>
    </header>
  );
};

export default Header;
