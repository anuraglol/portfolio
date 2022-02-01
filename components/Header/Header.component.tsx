import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

const TextLink = ({ text, href }: any) => {
  return (
    <a
      href={href}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
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
  const [open,setOpen]=useState(false);

  return (
    <header
      className={`flex flex-row items-center justify-between py-8 font-jost`}
    >


  <div >
  <div onClick={()=>setOpen(!open)} className="md:hidden flex items-center">
{  open?
  <IoClose color="white"  size="20px"/>:<GiHamburgerMenu color="white"/>
  
  }
</div>
      <p className={`${open ? 'flex flex-col':'hidden sm:flex sm:flex-row sm:gap-x-4'}`}>
        <TextLink text="Home" href="#" />
        <TextLink text="Skills" href="#skills" />
        <TextLink text="Projects" href="#projects" />
        <TextLink text="Contact" href="#contact" />
      </p>
  </div>   

      


<Link href="https://github.com/kr-anurag/portfolio" passHref>
        <a
          className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
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
