import { VscGithubAlt } from "react-icons/vsc";

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md"

const Contact = () => {
  return (
    <div className="px-3 font-sen">
      <p className="text-3xl text-white font-bold">Get in touch</p>

      <div className="my-8 flex flex-row gap-x-4 justify-center">
        <button className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-primary hover:border-white">
          <AiOutlineGithub />
        </button>

        <button className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-primary hover:border-white">
          <AiOutlineTwitter />
        </button>

        <button className="text-white text-2xl p-2 rounded-lg bg-zinc-800 border-2 border-primary hover:border-white">
          <MdEmail />
        </button>
      </div>
    </div>
  );
};

export default Contact;
