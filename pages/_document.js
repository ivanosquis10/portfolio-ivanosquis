import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="es">
      <Head />
      <body className="bg-slate-900 h-full overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
