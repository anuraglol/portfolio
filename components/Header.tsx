import type { NextPage } from "next";

const Li = ({ text, href }) => {
  return (
    <a href={href} className="mx-4 hover:text-slate-800 duration-100">
      {text}
    </a>
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

        <button className="p-4 rouned-sm bg-white-300">
 
        </button>
      </p>
    </header>
  );
};

export default Header;
