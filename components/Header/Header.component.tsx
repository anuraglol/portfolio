import React, { useState, useEffect } from "react";

import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";

const TextLink = ({ text, href }: any) => {
  return (
    <a
      href={href}
      className="text-xl cursor-pointer text-gray-200 px-4 py-[0.10rem] rounded-md hover:bg-zinc-800 duration-100"
    >
      {text}
    </a>
  );
};

const Header: React.FC = () => {
  const [topOfPage, setTopOfPage] = useState<boolean>();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setTopOfPage(false);
      } else {
        setTopOfPage(true);
      }
    });
  }, []);

  return (
    <header
      className={`font-jost py-8 flex flex-row items-center justify-between`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" href="#" />
        <TextLink text="Blog" href="#" />
        <TextLink text="Projects" href="#" />
        <TextLink text="Contact" href="#" />
      </p>

      <Link href="https://github.com/kr-anurag/portfolio" passHref>
        <a
          className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-zinc-900 hover:border-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubAlt />
        </a>
      </Link>
    </header>
  );
};

export default Header;
