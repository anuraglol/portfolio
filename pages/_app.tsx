import type { AppProps } from "next/app";
import "../styles/globals.css";

import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Anurag | Frontend Developer</title>
        <meta
          name="description"
          content="Hey! I'm Anurag, A Frontend Developer, Blogger and a Student!"
        />
        <link rel="icon" type="image/png" href="/assests/avatar.png" />

        <meta
          property="og:image"
          content="/assests/og-image.png"
        />
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
