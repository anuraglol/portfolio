import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Li = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <li className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-gray-600">
        {text}
      </li>
    </Link>
  );
};

const Header = () => {
  return (
    <header className="min-w-screen px-4 py-4 items-center font-inter shadow-md flex flex-row justify-between">
      <p className="text-2xl font-semibold text-gray-900">Anurag</p>

      <ul className="flex flex-row items-center gap-8">
        <Li text="About" href="#about" />
        <Li text="Skills" href="#skills" />
        <Li text="Projects" href="#projects" />
        <Li text="Contact" href="#contact" />
      </ul>
      <p>
        <AiOutlineGithub
          size="25"
          className="hover:text-slate-700 cursor-pointer duration-100"
        />
      </p>
    </header>
  );
};

export default Header;
