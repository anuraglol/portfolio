import type { NextPage } from "next";

import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiHashnode, SiDiscord } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";

import Link from "./Link";

const Contact: NextPage = () => {
  return (
    <div className="mx-24 font-poppins">
      <p className="font-semibold text-blue-600 text-2xl">/contact</p>
      <p className="text-xl font-medium text-gray-700 p-4">
        here i am! connect with me!
      </p>
      <div className="grid grid-cols-2 justify-center gap-4">
        <Link name="Twitter" url="#" username="@kr_anurag_">
          <AiOutlineTwitter size={25} />
        </Link>

        <Link name="Github" url="#" username="@kr-anurag">
          <AiOutlineGithub size={25} />
        </Link>

        <Link name="Hashnode" url="#" username="@kr-anurag">
          <SiHashnode size={25} />
        </Link>

        <Link name="Spotify" url="#" username="@kr-anurag">
          <BsSpotify size={25} />
        </Link>
      </div>

      <p className="text-xl font-medium text-gray-700 p-4">
        and, join our discord server!
      </p>

      <Link name="Discord" username="Byteslash Community" url="#">
        <SiDiscord size={25} />
      </Link>
    </div>
  );
};

export default Contact;
