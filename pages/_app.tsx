import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";

import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
      id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, anurag, anuragkr, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
