import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const Contact = () => {
  return (
    <div className="px-3 font-sen">
      <p className="text-3xl text-white font-bold">Get in touch</p>

      <div className="my-8 flex flex-row gap-x-4 justify-center">
        <Link href="https://github.com/kr-anurag" passHref>
          <a
            target="_blank"
            className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-zinc-900 hover:border-white"
          >
            <AiOutlineGithub />
          </a>
        </Link>

        <Link href="https://twitter.com/kr_anurag_" passHref>
          <a
            target="_blank"
            className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-zinc-900 hover:border-white"
          >
            <AiOutlineTwitter />
          </a>
        </Link>

        <Link href="mailto:kr.anurag24@gmail.com" passHref>
          <a
            target="_blank"
            className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-zinc-900 hover:border-white"
          >
            <MdEmail />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
