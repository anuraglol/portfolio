import React from "react"
import Link from "next/link"

const Footer = () => {
return (
  <div className="w-full bg-slate-200 p-4 font-inter font-medium flex justify-center flex-row gap-4">
    <p>Made by Anurag</p>

    <Link href="https://github.com/kr-anurag/portfolio" passHref>
      <a target="_blank" className="underline hover:bg-slate-300 duration-100" aria-label="github-repo">
        Checkout the Source Code
      </a>
    </Link>
  </div>
);
}

export default Footer