import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content="Rhino Linux Blog" />
        <meta property="og:image" content='/favicon.svg' />
        <meta name="theme-color" content="#8d7be4" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
