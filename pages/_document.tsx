import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Jost&family=Sen&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/assests/avatar.png" />
          <meta
            property="og:image"
            content="https://www.anurag.tech/assets/og-image.png"
          />
        </Head>
        <body className="bg-zinc-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
