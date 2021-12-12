import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextSeo 
    title="Anurag | Frontend Developer"
    description="Hey! I'm Anurag, A Frontend Developer, Blogger and a Student!"
    />
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
