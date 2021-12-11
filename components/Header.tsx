import type { NextPage } from "next";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Li = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <span className="mx-4 hover:text-slate-800 hover:rotate-3 duration-100 cursor-pointer">
        {text}
      </span>
    </Link>
  );
};

const Header: NextPage = () => {
  return (
    <header className="header flex items-center flex-row p-3 pt-10 px-24 font-poppins font-medium">
      <p className="flex flex-row items-center mb-8">
        <p className="text-2xl font-semibold text-secondary duration-100 hover:rotate-12 cursor-pointer">
          Anurag
        </p>
        {/* <ul className="flex flex-row mx-8 text-lg font-semibold">
          <Li text="Home" href="/" />
          <Li text="About Me" href="/" />
          <Li text="Projects" href="/" />
          <Li text="Contact Me" href="/" />
        </ul> */}

        <Link href="https://github.com/kr-anurag/anurag" passHref>
          <button className="mx-2 p-2 rounded-lg bg-gray-100 duration-100 hover:bg-gray-200">
            <AiFillGithub size="30" />
          </button>
        </Link>
      </p>
    </header>
  );
};

export default Header;
