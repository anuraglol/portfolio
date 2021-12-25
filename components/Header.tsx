import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";

const Li = ({ text }) => {
  return <li className="text-lg font-semibold text-gray-500 cursor-pointer">{text}</li>;
};

const Header = () => {
  return (
    <header className="px-4 py-4 items-center font-inter shadow-md flex flex-row justify-between">
      <p className="text-2xl font-semibold text-gray-900">Anurag</p>

      <ul className="flex flex-row items-center gap-8">
        <Li text="About" />
        <Li text="Skills" />
        <Li text="Projects" />
        <Li text="Contact" />
      </ul>
      <p>
        <AiOutlineGithub size="25" className="hover:text-slate-700 cursor-pointer duration-100" />
      </p>
    </header>
  );
};

export default Header;
