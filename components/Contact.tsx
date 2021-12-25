import Image from "next/image";
import Link from "next/link";

import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiHashnode } from 'react-icons/si'

const Tile = ({children}) => {
  return (
    <Link href="#" passHref>
      <button
        className="p-2 rounded-md bg-slate-200 hover:bg-slate-300 duration-100"
      >
        {children}
      </button>
    </Link>
  );
};

const Contact = () => {
  return (
    <div className="px-8 py-2 flex flex-col justify-center font-inter font-medium ">
      <p className="text-center text-3xl font-mono font-semibold text-purple-600">
        contact
      </p>
      <Image src="/assests/Frame.svg" height="330" width="330" />
      <div className="w-full text-xl flex flex-row gap-8 justify-center">
        <Tile>
          <AiFillGithub size={35} />
        </Tile>
        <Tile>
          <AiOutlineTwitter size={35} />
        </Tile>
        <Tile>
          <SiHashnode size={30} />
        </Tile>
      </div>
    </div>
  );
};

export default Contact;
