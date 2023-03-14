import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Portafolio de Ivanosquis, proyectos de programacion desarrollados en react, vitejs, tailwindcss y mucho más..."
        />
        <title>Ivanosquis - Portfolio</title>
        <link rel="icon" type="image/svg+xml" href="./logo-iv-3.svg" />
      </Head>
      <body className="bg-slate-900 scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
