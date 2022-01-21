import React, { useState, useEffect } from "react";

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
    <header className={`font-jost py-8 flex flex-row items-center justify-between`}>
      <p className="flex flex-row gap-x-4">
        <TextLink text="Home" href="#" />
        <TextLink text="Read my Blog" href="#" />
        <TextLink text="Projects" href="#" />
        <TextLink text="Contact" href="#" />
      </p>

        <button className="text-white text-2xl p-2 rounded-lg bg-gray-800 border-2 border-primary hover:border-white">
          <VscGithubAlt />
        </button>
    </header>
  );
};

export default Header;
