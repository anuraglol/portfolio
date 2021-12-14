import type { NextPage } from "next";

import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiHashnode, SiDiscord } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";

import Card from "./Card";

const Contact: NextPage = () => {
  return (
    <div className="my-16 md:mx-10 lg:mx-12 xl:mx-16 2xl:mx-20 font-poppins">
      <p className="font-semibold text-blue-600 text-2xl">/contact</p>
      <p className="text-xl font-medium text-gray-700 p-4">
        here i am! connect with me!
      </p>
      <div className="mx-4 grid grid-cols-2 gap-10 gap-x-36 md:gap-x-16 lg:gap-x-12 xl:gap-x-8 2xl:gap-x-4">
        <Card
          name="Twitter"
          url="https://twitter.com/kr_anurag_"
          username="@kr_anurag_"
        >
          <AiOutlineTwitter size={25} aria-label="Twitter Link" />
        </Card>

        <Card
          name="Github"
          url="https://github.com/kr-anurag/"
          username="@kr-anurag"
        >
          <AiOutlineGithub size={25} aria-label="Twitter Link" />
        </Card>

        <Card
          name="Hashnode"
          url="https://anuragkr.hashnode.dev/"
          username="@kr-anurag"
        >
          <SiHashnode size={25} aria-label="Hashnode Link" />
        </Card>

        <Card
          name="Spotify"
          url="https://open.spotify.com/user/31l2fev6wn2mtzclbpvzxis3x77q"
          username="Anurag"
        >
          <BsSpotify size={25} aria-label="Spotify Link" />
        </Card>
      </div>

      <p className="text-xl font-medium text-gray-700 p-4">
        and, join our discord server!
      </p>
      <div className="mx-4">
        <Card
          name="Discord"
          username="Byteslash Community"
          url="https://discord.gg/n2Bu9qd5q2"
        >
          <SiDiscord size={25} aria-label="Discord Server Link" />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
