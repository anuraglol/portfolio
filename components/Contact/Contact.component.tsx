import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  FaDiscord,
} from "../Icons";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="font-sen px-3" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Link href="https://github.com/kr-anurag" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <AiOutlineGithub />
          </a>
        </Link>

        <Link href="https://twitter.com/kr_anurag_" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <AiOutlineTwitter />
          </a>
        </Link>

        <Link href="mailto:kr.anurag24@gmail.com" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <MdEmail />
          </a>
        </Link>

        <Link href="https://discord.com/users/849171428497424404" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <FaDiscord />
          </a>
        </Link>

        <Link
          href="https://open.spotify.com/user/31l2fev6wn2mtzclbpvzxis3x77q"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="mail"
            className="rounded-lg border-2 border-zinc-900 bg-zinc-800 p-2 text-2xl text-white hover:border-white"
          >
            <BsSpotify />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
