/* eslint-disable indent */
import Head from "next/head"

export function Seo() {
  return (
    <Head>
      <meta
        content="Bienvenido a mi portafolio de programación, donde podrás encontrar proyectos desarrollados en React, Vite.js, NextJS, Tailwind CSS y otras tecnologías. ¡Mira mis trabajos y contáctame para colaborar en tu próximo proyecto!"
        name="description"
      />
      <meta
        content="portafolio, programación, React, NextJS, Vite.js, Tailwind CSS, desarrollo frontend, colaboración, proyectos"
        name="keywords"
      />
      <link href="/logo-iv-3.svg" rel="icon" type="image/svg+xml" />
      <meta content="Ivanosquis | Ivan Rodriguez" name="author" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <meta
        content="Ivanosquis - Desarrollador Frontend | Portafolio de Programación"
        property="og:title"
      />
      <meta
        content="Ivanosquis es un desarrollador frontend especializado en React, Next.js, Vite.js, Tailwind CSS y otras tecnologías. Explora su portafolio y contáctalo para colaborar en tu próximo proyecto."
        property="og:description"
      />
      <meta
        content="https://portfolio-ivanosquis-iv.vercel.app/logo-iv-3.svg"
        property="og:image"
      />
      <meta content="https://portfolio-ivanosquis-iv.vercel.app/" property="og:url" />
      <meta content="website" property="og:type" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta
        content="Ivanosquis - Desarrollador Frontend | Portafolio de Programación"
        name="twitter:title"
      />
      <meta
        content="Ivanosquis es un desarrollador frontend especializado en React, Next.js, Vite.js, Tailwind CSS y otras tecnologías. Explora su portafolio y contáctalo para colaborar en tu próximo proyecto."
        name="twitter:description"
      />
      <meta
        content="https://portfolio-ivanosquis-iv.vercel.app/logo-iv-3.svg"
        name="twitter:image"
      />
      <meta content="@ivanosquis" name="twitter:creator" />
      <meta content="Ivan Rodriguez" name="author" />
      <meta content="portfolio-ivanosquis-iv.vercel.app" name="twitter:domain" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <title>Ivanosquis Portafolio | Frontend</title>
    </Head>
  )
}
