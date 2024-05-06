import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#f6f7ef" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="description" content="Programming Languages and CAD"></meta>
        <meta
          name="keywords"
          content="Architecture, Design, Computation, Environment, Research"
        />
        <meta name="author" content="Dan Cascaval" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
