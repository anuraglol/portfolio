import type { NextPage } from "next";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Li = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <span className="mx-4 hover:text-slate-800 duration-100 cursor-pointer">
        {text}
      </span>
    </Link>
  );
};

const Header: NextPage = () => {
  return (
    <header className="header h-64 min-w-screen flex items-center flex-row p-10 px-24 pt-20 font-poppins font-medium">
      <p className="flex flex-row items-center mb-24">
        <span className="text-2xl font-semibold text-secondary">Anurag</span>

        <ul className="flex flex-row mx-8 text-lg font-semibold">
          <Li text="Home" href="/" />
          <Li text="About Me" href="/" />
          <Li text="Projects" href="/" />
          <Li text="Contact Me" href="/" />
        </ul>

        <button className="p-2 rounded-lg bg-gray-100 duration-100 hover:bg-gray-200">
          <Link href="https://github.com/kr-anurag/anurag" passHref>
            <AiFillGithub size="30" />
          </Link>
        </button>
      </p>
    </header>
  );
};

export default Header;
