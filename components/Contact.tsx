import Image from "next/image";
import Link from "next/link";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

const Tile = ({ children, url }) => {
  return (
    <Link href={url} passHref>
      <a
        className="p-2 rounded-md bg-slate-200 hover:bg-slate-300 duration-100 grid place-items-center"
        target="_blank"
        aria-label="social-icon"
      >
        {children}
      </a>
    </Link>
  );
};

const Contact = () => {
  return (
    <div className="min-w-screen px-8 py-2 flex flex-col justify-center font-inter font-medium ">
      <p className="text-center text-3xl font-mono font-semibold text-purple-600">
        contact
      </p>
      <Image src="/assests/Frame.svg" height="330" width="330" alt="contact" />
      <div className="w-full text-xl flex flex-row gap-8 justify-center">
        <Tile url="https://github.com/kr-anurag">
          <AiFillGithub size={35} />
        </Tile>
        <Tile url="https://twitter.com/kr_anurag_">
          <AiOutlineTwitter size={35} />
        </Tile>
        <Tile url="https://blog.anurag.tech">
          <SiHashnode size={33} />
        </Tile>
      </div>
    </div>
  );
};

export default Contact;
