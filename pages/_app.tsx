import type { AppProps /*, AppContext */ } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
