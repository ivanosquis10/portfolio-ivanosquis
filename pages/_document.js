import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Portfolio Ivanosquis" />
        <link rel="shortcut icon" href="" />
      </Head>
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
