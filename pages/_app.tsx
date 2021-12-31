import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Anurag | Frontend Developer"
        titleTemplate="Anurag | Frontend Developer"
        defaultTitle="Anurag | Frontend Developer"
        description="Hey! I'm Anurag, A Frontend Developer, Blogger and a Student!"
        openGraph={{
          url: "https://www.anurag.tech/",
          title: "Anurag | Frontend Developer",
          description:
            "Hey! I'm Anurag, A Frontend Developer, Blogger and a Student!",
          images: [
            {
              url: "/og-image.png",
              width: 800,
              height: 420,
              alt: "Anurag | Frontend Developer",
            },
          ],
        }}
        twitter={{
          handle: "@kr_anurag_",
          site: "@kr_anurag_",
          cardType: "summary_large_image",
        }}
      />
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
