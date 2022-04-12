import type { NextComponentType, NextPageContext } from "next";

import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection";

import type { linkProps } from "../../@types/prop.types";

const TextLink: NextComponentType<NextPageContext, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

const Header: NextComponentType = () => {
  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <Link href="https://github.com/kr-anurag/portfolio" passHref>
        <a
          className="float-right mr-2 rounded-lg bg-zinc-800 p-2 text-2xl text-white ring-zinc-300 transition-all duration-150 hover:ring-2 sm:float-none sm:mr-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <VscGithubAlt />
        </a>
      </Link>
    </header>
  );
};

export default Header;
