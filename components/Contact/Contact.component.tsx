import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-3 font-sen" id="contact">
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
      </div>
    </div>
  );
};

export default Contact;
