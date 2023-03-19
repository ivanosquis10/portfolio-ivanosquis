import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Portafolio de Ivanosquis, proyectos de programacion desarrollados en react, vitejs, tailwindcss y mucho más..."
        />
        <link rel="icon" type="image/svg+xml" href="./logo-iv-3.svg" />
      </Head>
      <body className="gradient h-full overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
