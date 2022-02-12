import type { AppProps } from "next/app";
import "../styles/globals.css";

import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";
import Head from "next/head";

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
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
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
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, anurag, anuragkr, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
